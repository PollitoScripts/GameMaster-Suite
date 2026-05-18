import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db, rtdb } from '../config/firebase';
import { signInAnonymously } from 'firebase/auth';
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { ref, set, onValue, onDisconnect } from 'firebase/database';
import { calculateSpin } from '../utils/physics';
import type { Wedge } from '../utils/physics';

interface User { id: string; name: string; }
interface Room { 
  id: string; 
  hostId: string; 
  status: 'idle' | 'spinning'; 
  wedges: Wedge[]; 
  currentRotation: number; 
  targetRotation: number; 
  duration: number;
  spinStartAt?: number; // Marca de tiempo para sincronizar el inicio del giro de forma exacta
}

interface GameContextType {
  user: User | null;
  room: Room | null;
  players: any[];
  login: (nickname: string) => Promise<void>;
  createRoom: () => Promise<void>;
  joinRoom: (code: string) => Promise<void>;
  updateWedgesInDb: (wedges: Wedge[]) => Promise<void>;
  spinWheel: () => Promise<void>; 
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const DEFAULT_WEDGES: Wedge[] = [
  { id: 'init-1', name: 'Sí 👍', color: '#6366f1' },
  { id: 'init-2', name: 'No 👎', color: '#f43f5e' },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<any[]>([]);

  const login = async (nickname: string) => {
    try {
      console.log("Iniciando sesión anónima para:", nickname);
      const cred = await signInAnonymously(auth);
      const userData = { id: cred.user.uid, name: nickname.trim() };
      setUser(userData);
      sessionStorage.setItem('ruleta_user', JSON.stringify(userData));
      console.log("Usuario logueado con éxito:", userData);
    } catch (error) {
      console.error("Error crítico en el login de Firebase:", error);
    }
  };

  useEffect(() => {
    const savedUser = sessionStorage.getItem('ruleta_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const createRoom = async () => {
    if (!user) {
      console.error("No se puede crear sala: El usuario es null en el estado.");
      return;
    }
    
    const id = Math.random().toString(36).substring(2, 6).toUpperCase();
    const roomData: Room = { 
      id, 
      hostId: user.id, 
      status: 'idle', 
      wedges: DEFAULT_WEDGES, 
      currentRotation: 0, 
      targetRotation: 0, 
      duration: 0 
    };

    console.log(`Intentando crear sala ${id} en Firestore para el Host ${user.id}...`);

    try {
      setRoom(roomData);
      
      setDoc(doc(db, 'rooms', id), roomData)
        .then(() => console.log(`¡Sala ${id} guardada con éxito en Firestore!`))
        .catch(err => console.error("Error asíncrono escribiendo en Firestore:", err));
      
      await connectToRoom(id, user);
    } catch (error) {
      console.error("Error en la ejecución de createRoom:", error);
    }
  };

  const joinRoom = async (code: string) => {
    if (!user) return;
    const cleanCode = code.toUpperCase().trim();
    console.log(`Intentando unirse a la sala: ${cleanCode}`);
    
    setRoom({
      id: cleanCode,
      hostId: '',
      status: 'idle',
      wedges: DEFAULT_WEDGES,
      currentRotation: 0,
      targetRotation: 0,
      duration: 0
    });

    await connectToRoom(cleanCode, user);
  };

  const connectToRoom = async (roomId: string, currentUser: User) => {
    if (!roomId || !currentUser) return;
    console.log(`Estableciendo conexiones Realtime para la sala: ${roomId}`);

    try {
      const presenceRef = ref(rtdb, `rooms/${roomId}/players/${currentUser.id}`);
      await set(presenceRef, { 
        id: currentUser.id, 
        name: currentUser.name, 
        joinedAt: Date.now() 
      });
      onDisconnect(presenceRef).remove();
      console.log("Presencia del jugador registrada en RTDB.");

      const roomDocRef = doc(db, 'rooms', roomId);
      onSnapshot(roomDocRef, (snap) => {
        if (snap.exists()) {
          const roomData = snap.data() as Room;
          if (roomData && roomData.hostId) {
            setRoom(roomData);
          }
        }
      });

      const roomPlayersRef = ref(rtdb, `rooms/${roomId}/players`);
      onValue(roomPlayersRef, (snap) => {
        const data = snap.val();
        if (data) {
          const list = Object.values(data).filter((p: any) => p && p.id && p.name);
          list.sort((a: any, b: any) => a.joinedAt - b.joinedAt);
          setPlayers(list);
          console.log("Lista de jugadores actualizada desde RTDB:", list);
        } else {
          setPlayers([]);
        }
      });

    } catch (error) {
      console.error("Error dentro de connectToRoom:", error);
    }
  };

  const updateWedgesInDb = async (wedges: Wedge[]) => {
    if (!room) return;
    setRoom(prev => prev ? { ...prev, wedges } : null);
    await updateDoc(doc(db, 'rooms', room.id), { wedges });
  };

  const spinWheel = async () => {
    if (!room || room.status === 'spinning' || !user || room.hostId !== user.id) return;

    // CORRECCIÓN DE PARÁMETROS: Pasamos las cuñas reales y la rotación actual guardada
    const { targetRotation, duration } = calculateSpin(room.wedges, room.currentRotation);
    const roomRef = doc(db, 'rooms', room.id);

    // Guardamos en la base de datos el estado de la animación inicial de manera única
    await updateDoc(roomRef, {
      status: 'spinning',
      targetRotation,
      duration,
      spinStartAt: Date.now() // Sincroniza el milisegundo de inicio exacto para todos los clientes
    });

    // Dejamos que el onSnapshot global devuelva el estado y limpie el estatus al terminar la duración del giro
    setTimeout(async () => {
      await updateDoc(roomRef, {
        status: 'idle',
        currentRotation: targetRotation % 360
      });
    }, duration);
  };

  return (
    <GameContext.Provider value={{ user, room, players, login, createRoom, joinRoom, updateWedgesInDb, spinWheel }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
};