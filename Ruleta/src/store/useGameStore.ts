import { create } from 'zustand';
import { Player, Wedge, RoomState, HistoryRecord } from '../types';
import { db, rtdb, auth } from '../config/firebase';
import { doc, onSnapshot, updateDoc, setDoc, collection, addDoc, serverTimestamp, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';
import { ref, onValue, set, onDisconnect } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';
import { calculateSpin } from '../utils/randomness';

interface GameStore {
  user: { id: string; name: string } | null;
  currentRoom: RoomState | null;
  players: Player[];
  history: HistoryRecord[];
  isLoading: boolean;
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
  
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
  clearToast: () => void;
  initAuth: (username: string) => Promise<void>;
  createRoom: (roomName: string) => Promise<string>;
  joinRoom: (roomId: string) => Promise<boolean>;
  leaveRoom: () => Promise<void>;
  updateWedges: (wedges: Wedge[]) => Promise<void>;
  triggerSpin: () => Promise<void>;
  syncLocalRotation: (rotation: number) => void;
  setRoomStatus: (status: 'idle' | 'spinning' | 'result') => Promise<void>;
}

const DEFAULT_WEDGES: Wedge[] = [
  { id: '1', name: 'Premio 1', description: '¡Te llevas el gran premio!', color: '#ff4757' },
  { id: '2', name: 'Suerte x2', description: 'Duplicas tus puntos', color: '#1e90ff' },
  { id: '3', name: 'Casi...', description: 'Sigue intentándolo', color: '#2ed573' },
  { id: '4', name: 'Bancarrota', description: 'Pierdes todo', color: '#ffa502' },
];

export const useGameStore = create<GameStore>((set, get) => {
  let roomUnsubscribe: (() => void) | null = null;
  let playersUnsubscribe: (() => void) | null = null;

  return {
    user: null,
    currentRoom: null,
    players: [],
    history: [],
    isLoading: false,
    toast: null,

    showToast: (message, type) => set({ toast: { message, type } }),
    clearToast: () => set({ toast: null }),

    initAuth: async (username) => {
      set({ isLoading: true });
      try {
        const userCredential = await signInAnonymously(auth);
        set({ user: { id: userCredential.user.uid, name: username } });
      } catch (error) {
        get().showToast('Error de autenticación', 'error');
      } finally {
        set({ isLoading: false });
      }
    },

    createRoom: async (roomName) => {
      const user = get().user;
      if (!user) throw new Error('Usuario no autenticado');

      const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
      const roomRef = doc(db, 'rooms', roomId);

      const newRoom: RoomState = {
        id: roomId,
        name: roomName,
        hostId: user.id,
        status: 'idle',
        wedges: DEFAULT_WEDGES,
        currentRotation: 0,
        targetRotation: 0,
        duration: 0,
        winnerWedgeId: null,
        lastSpinBy: null,
        spinTimestamp: null,
      };

      await setDoc(roomRef, newRoom);
      return roomId;
    },

    joinRoom: async (roomId) => {
      const user = get().user;
      if (!user) return false;

      const roomRef = doc(db, 'rooms', roomId);
      const roomSnap = await getDoc(roomRef);

      if (!roomSnap.exists()) {
        get().showToast('La sala no existe', 'error');
        return false;
      }

      // Sistema de Presencia usando Realtime Database y sincronización con Firestore
      const presenceRef = ref(rtdb, `rooms/${roomId}/players/${user.id}`);
      await set(presenceRef, { id: user.id, name: user.name, joinedAt: Date.now() });
      onDisconnect(presenceRef).remove();

      // Escuchar cambios de la sala en Firestore
      roomUnsubscribe = onSnapshot(roomRef, (snapshot) => {
        if (snapshot.exists()) {
          set({ currentRoom: snapshot.data() as RoomState });
        }
      });

      // Escuchar jugadores en tiempo real mediante RTDB
      const playersRef = ref(rtdb, `rooms/${roomId}/players`);
      onValue(playersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const playerList: Player[] = Object.values(data);
          // Verificar si el Host se desconectó y auto-reasignar al más antiguo
          const currentRoom = get().currentRoom;
          if (currentRoom && playerList.length > 0) {
            const hostExists = playerList.some(p => p.id === currentRoom.hostId);
            if (!hostExists) {
              const sortedPlayers = [...playerList].sort((a, b) => a.joinedAt - b.joinedAt);
              const newHost = sortedPlayers[0];
              updateDoc(roomRef, { hostId: newHost.id });
            }
          }
          set({ players: playerList });
        } else {
          set({ players: [] });
        }
      });

      return true;
    },

    leaveRoom: async () => {
      const { user, currentRoom } = get();
      if (user && currentRoom) {
        const presenceRef = ref(rtdb, `rooms/${currentRoom.id}/players/${user.id}`);
        await set(presenceRef, null);
      }
      if (roomUnsubscribe) roomUnsubscribe();
      if (playersUnsubscribe) playersUnsubscribe();
      set({ currentRoom: null, players: [] });
    },

    updateWedges: async (wedges) => {
      const { currentRoom } = get();
      if (!currentRoom) return;
      await updateDoc(doc(db, 'rooms', currentRoom.id), { wedges });
    },

    triggerSpin: async () => {
      const { currentRoom, user } = get();
      if (!currentRoom || !user || currentRoom.hostId !== user.id || currentRoom.status === 'spinning') return;

      const { targetRotation, winnerWedge, duration } = calculateSpin(
        currentRoom.wedges,
        currentRoom.currentRotation
      );

      await updateDoc(doc(db, 'rooms', currentRoom.id), {
        status: 'spinning',
        targetRotation,
        duration,
        lastSpinBy: user.name,
        spinTimestamp: Date.now()
      });

      // Registro automático del historial persistente al finalizar
      setTimeout(async () => {
        const freshRoomSnap = await getDoc(doc(db, 'rooms', currentRoom.id));
        const freshRoomData = freshRoomSnap.data() as RoomState;
        
        if (freshRoomData && freshRoomData.spinTimestamp === freshRoomData.spinTimestamp) {
          await updateDoc(doc(db, 'rooms', currentRoom.id), {
            status: 'result',
            currentRotation: targetRotation % 360,
            winnerWedgeId: winnerWedge.id
          });

          await addDoc(collection(db, 'history'), {
            roomId: currentRoom.id,
            roomName: currentRoom.name,
            winnerName: winnerWedge.name,
            winnerDescription: winnerWedge.description,
            spunBy: user.name,
            timestamp: Date.now()
          });
        }
      }, duration);
    },

    syncLocalRotation: (rotation) => {
      set((state) => ({
        currentRoom: state.currentRoom ? { ...state.currentRoom, currentRotation: rotation } : null
      }));
    },

    setRoomStatus: async (status) => {
      const { currentRoom } = get();
      if (!currentRoom) return;
      await updateDoc(doc(db, 'rooms', currentRoom.id), { status });
    }
  };
});