import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db, rtdb } from '../config/firebase';
import { signInAnonymously } from 'firebase/auth';
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { ref, set, onValue, onDisconnect } from 'firebase/database';
import { Wedge } from '../utils/physics';

interface User { id: string; name: string; }
interface Room { id: string; hostId: string; status: 'idle' | 'spinning'; wedges: Wedge[]; currentRotation: number; targetRotation: number; duration: number; }

interface GameContextType {
  user: User | null;
  room: Room | null;
  players: any[];
  login: (nickname: string) => Promise<void>;
  createRoom: () => Promise<void>;
  joinRoom: (code: string) => Promise<void>;
  updateWedgesInDb: (wedges: Wedge[]) => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const DEFAULT_WEDGES: Wedge[] = [
  { id: '1', name: 'Premio Mayor 🔥', color: '#ff4757' },
  { id: '2', name: 'Multiplicador ⚡', color: '#1e90ff' },
  { id: '3', name: 'Casi... 💀', color: '#2ed573' },
  { id: '4', name: 'Suerte x2 💎', color: '#ffa502' },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<any[]>([]);

  const login = async (nickname: string) => {
    const cred = await signInAnonymously(auth);
    setUser({ id: cred.user.uid, name: nickname });
  };

  const createRoom = async () => {
    if (!user) return;
    const id = Math.random().toString(36).substring(2, 6).toUpperCase();
    const roomData = { id, hostId: user.id, status: 'idle', wedges: DEFAULT_WEDGES, currentRotation: 0, targetRotation: 0, duration: 0 };
    await setDoc(doc(db, 'rooms', id), roomData);
    await connectToRoom(id);
  };

  const joinRoom = async (code: string) => {
    await connectToRoom(code.toUpperCase().trim());
  };

  const connectToRoom = async (id: string) => {
    if (!user) return;
    const presenceRef = ref(rtdb, `rooms/${id}/players/${user.id}`);
    await set(presenceRef, { id: user.id, name: user.name, joinedAt: Date.now() });
    onDisconnect(presenceRef).remove();

    onSnapshot(doc(db, 'rooms', id), (snap) => {
      if (snap.exists()) setRoom(snap.data() as Room);
    });

    onValue(ref(rtdb, `rooms/${id}/players`), (snap) => {
      const data = snap.val();
      if (data) setPlayers(Object.values(data));
    });
  };

  const updateWedgesInDb = async (wedges: Wedge[]) => {
    if (!room) return;
    await updateDoc(doc(db, 'rooms', room.id), { wedges });
  };

  return (
    <GameContext.Provider value={{ user, room, players, login, createRoom, joinRoom, updateWedgesInDb }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
};