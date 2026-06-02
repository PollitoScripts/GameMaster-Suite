import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { auth, rtdb } from '../config/firebase'; 
import { signInAnonymously } from 'firebase/auth';
import { ref, push, set, update, onValue, get } from "firebase/database"; 
import { calculateSpin } from '../utils/physics';
import type { Wedge } from '../utils/physics';

interface User { id: string; name: string; }

interface HistoryEntry {
  timestamp: number;
  rolledBy: string;
  // roulette
  result?: string;
  color?: string;
  // dice
  results?: number[];
  threshold?: number;
  successes?: number;
  sum?: number;
  diceCount?: number;
  // dice-damage
  pool?: Record<string, number>;
  total?: number;
  bonus?: number;
  grandTotal?: number;
}

interface Room {
  id: string;
  code: string;
  hostId: string;
  status: 'idle' | 'spinning';
  activeGame: 'roulette' | 'dice' | 'dice-damage';
  wedges: Wedge[];
  currentRotation: number;
  targetRotation: number;
  duration: number;
  spinStartAt?: number;
  diceSeed?: number;   
  diceResults?: number[];
  diceThresh?: number;
  damageResults?: number[];
  bonus?: number;
  damageDiceConfig?: Record<string, number>; 
  lastResult?: { id?: string; name: string; color: string; firedAt: number };
  players?: Record<string, { name: string; isHost: boolean; online: boolean }>;
  history?: {
    roulette?: HistoryEntry[];
    dice?: HistoryEntry[];
    'dice-damage'?: HistoryEntry[];
  };
}

interface GameContextType {
  user: User | null;
  room: Room | null;
  players: any[];
  login: (nickname: string) => Promise<void>;
  createRoom: () => Promise<void>;
  joinRoom: (code: string) => Promise<{ ok: boolean; error?: string }>;
  updateWedgesInDb: (wedges: Wedge[]) => Promise<void>;
  updateGameField: (fields: object) => Promise<void>;
  spinWheel: () => Promise<void>;
  changeActiveGame: (gameType: 'roulette' | 'dice' | 'dice-damage') => Promise<void>;
  rollDice: (count: number, threshold: number) => Promise<void>; 
  rollDamageDice: (pool: Record<string, number>) => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const DEFAULT_WEDGES: Wedge[] = [
  { id: 'init-1', name: 'SI', color: '#6366f1' },
  { id: 'init-2', name: 'NO', color: '#f43f5e' },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<any[]>([]);

  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const diceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); 
  const roomListenerRef = useRef<any>(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('ruleta_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 鈹€鈹€ HISTORIAL 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
  // A帽ade una entrada al historial del modo indicado, manteniendo m谩ximo 10.
  // Se llama con un setTimeout para que el historial aparezca DESPU脡S
  // de que la animaci贸n del dado/ruleta haya terminado de mostrarse.
  const appendHistory = async (
    roomId: string,
    mode: 'roulette' | 'dice' | 'dice-damage',
    entry: Omit<HistoryEntry, 'timestamp'>
  ) => {
    try {
      const histRef = ref(rtdb, `rooms/${roomId}/history/${mode}`);
      const snap = await get(histRef);
      const raw = snap.val();
      // Firebase puede devolver objeto o array; normalizamos a array
      const current: HistoryEntry[] = raw
        ? Array.isArray(raw)
          ? raw
          : Object.values(raw)
        : [];
      const newEntry: HistoryEntry = { ...entry, timestamp: Date.now() };
      const updated = [...current, newEntry].slice(-10); // 煤ltimas 10
      await set(histRef, updated);
    } catch (error) {
      console.error(`Error al guardar historial [${mode}]:`, error);
    }
  };

  const login = async (nickname: string) => {
    if (!nickname.trim()) return;
    try {
      const userCredential = await signInAnonymously(auth);
      const newUser = {
        id: userCredential.user.uid,
        name: nickname.trim(),
      };
      sessionStorage.setItem('ruleta_user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const connectToRoom = (roomId: string) => {
    console.log(`[RTDB Sync] Conectando a la sala: ${roomId}`);
    const roomRef = ref(rtdb, `rooms/${roomId}`);
    
    roomListenerRef.current = onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setRoom(null);
        setPlayers([]);
        return;
      }
      
      setRoom(data);

      if (data.players) {
        const playersArray = Object.entries(data.players).map(([id, info]: any) => ({
          id,
          ...info
        }));
        setPlayers(playersArray);
      } else {
        setPlayers([]);
      }

      if (user && data.hostId === user.id && data.status === 'spinning' && (data.activeGame === 'dice' || data.activeGame === 'dice-damage')) {
        if (diceTimeoutRef.current) clearTimeout(diceTimeoutRef.current);
        
        diceTimeoutRef.current = setTimeout(async () => {
          try {
            await update(ref(rtdb, `rooms/${data.id}`), { status: 'idle' });
          } catch (err) {
            console.error("Error al detener la animaci贸n de los dados:", err);
          }
        }, 10000);
      }
    });
  };

  const createRoom = async () => {
    if (!user) return;

    try {
      const shortCode = Math.random().toString(36).substring(2, 6).toUpperCase();
      const roomsRef = ref(rtdb, 'rooms');
      const newRoomRef = push(roomsRef); 
      const roomId = newRoomRef.key;

      if (!roomId) return;

      const roomData = {
        id: roomId,
        code: shortCode,
        hostId: user.id,
        status: 'idle',
        activeGame: 'roulette', 
        currentRotation: 0,
        targetRotation: 0,
        duration: 5000,
        bonus: 0,
        wedges: DEFAULT_WEDGES,
        diceResults: [],
        damageResults: [],
        history: {
          roulette: [],
          dice: [],
          'dice-damage': [],
        },
        players: {
          [user.id]: {
            name: user.name,
            isHost: true,
            online: true
          }
        }
      };

      await set(newRoomRef, roomData);
      await set(ref(rtdb, `codes/${shortCode}`), roomId);

      connectToRoom(roomId);
    } catch (error) {
      console.error("Error al crear la sala en RTDB:", error);
    }
  };

  const joinRoom = async (shortCode: string): Promise<{ ok: boolean; error?: string }> => {
    if (!user) return { ok: false, error: "Usuario no autenticado" };
    const normalizedCode = shortCode.trim().toUpperCase();
    
    try {
      const codeSnapshot = await get(ref(rtdb, `codes/${normalizedCode}`));
      const roomId = codeSnapshot.val();
      
      if (!roomId) {
        return { ok: false, error: "La sala de juego no existe." };
      }

      const playerPresenceRef = ref(rtdb, `rooms/${roomId}/players/${user.id}`);
      await set(playerPresenceRef, {
        name: user.name,
        isHost: false,
        online: true
      });

      connectToRoom(roomId);
      return { ok: true };
    } catch (err: any) {
      return { ok: false, error: "Error de conexi贸n al intentar unirse." };
    }
  };

  const updateWedgesInDb = async (wedges: Wedge[]) => {
    if (!room) return;
    try {
      const roomWedgesRef = ref(rtdb, `rooms/${room.id}`);
      await update(roomWedgesRef, { wedges });
    } catch (error) {
      console.error("Error actualizando cu帽as en RTDB:", error);
    }
  };

  const updateGameField = async (fields: object) => {
    if (!room) return;
    try {
      const roomRef = ref(rtdb, `rooms/${room.id}`);
      await update(roomRef, fields);
    } catch (error) {
      console.error("Error actualizando campo en RTDB:", error);
    }
  };

  const changeActiveGame = async (gameType: 'roulette' | 'dice' | 'dice-damage') => {
    if (!room || !user || room.hostId !== user.id) return; 
    try {
      const roomRef = ref(rtdb, `rooms/${room.id}`);
      // Al cambiar de modo limpiamos resultados del modo anterior
      // pero el historial se conserva intencionalmente
      await update(roomRef, { 
        activeGame: gameType,
        status: 'idle',
        diceResults: [],
        damageResults: [],
        damageDiceConfig: {},
      });
    } catch (error) {
      console.error("Error al cambiar de juego:", error);
    }
  };

  const rollDice = async (count: number, threshold: number) => {
    if (!room || !user || room.hostId !== user.id) return; 
    
    try {
      const seed = Math.random(); 
      const results: number[] = [];
      
      for (let i = 0; i < count; i++) {
        results.push(Math.floor(Math.random() * 20) + 1);
      }

      const successes = results.filter(v => v > threshold).length;
      const sum = results
        .filter(v => v > threshold)
        .reduce((a, v) => a + (v - threshold), 0);

      const roomUpdatesRef = ref(rtdb, `rooms/${room.id}`);

      // Lanzamos la animaci贸n de inmediato
      await update(roomUpdatesRef, {
        status: 'spinning',
        spinStartAt: Date.now(),
        duration: 1200,          
        diceSeed: seed,
        diceResults: results,
        diceThresh: threshold,    
      });

      // El historial se escribe con retraso para que aparezca DESPU脡S
      // de que el dado haya terminado su animaci贸n y mostrado el resultado
      setTimeout(() => {
        appendHistory(room.id, 'dice', {
          rolledBy: user.name,
          results,
          threshold,
          successes,
          sum,
          diceCount: count,
        });
      }, 2800);

    } catch (error) {
      console.error("Error al lanzar los dados en la RTDB:", error);
    }
  };

  const rollDamageDice = async (pool: Record<string, number>) => {
    if (!room || !user || room.hostId !== user.id) return;

    try {
      const seed = Math.random();
      const results: number[] = [];
      const carasPorDado: Record<string, number> = {
        d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d100: 100
      };

      Object.entries(pool).forEach(([dadoId, cantidad]) => {
        const caras = carasPorDado[dadoId];
        if (caras && cantidad > 0) {
          for (let i = 0; i < cantidad; i++) {
            results.push(Math.floor(Math.random() * caras) + 1);
          }
        }
      });

      const total = results.reduce((a, v) => a + v, 0);
      const currentBonus = room.bonus ?? 0;
      const grandTotal = total + currentBonus;

      const roomUpdatesRef = ref(rtdb, `rooms/${room.id}`);

      // Lanzamos la animaci贸n de inmediato
      await update(roomUpdatesRef, {
        status: 'spinning',
        spinStartAt: Date.now(),
        duration: 1200,
        diceSeed: seed,
        damageResults: results,
        damageDiceConfig: pool,
      });

      // El historial se escribe con retraso para que aparezca DESPU脡S
      // de que el dado haya terminado su animaci贸n y mostrado el resultado
      setTimeout(() => {
        appendHistory(room.id, 'dice-damage', {
          rolledBy: user.name,
          results,
          pool,
          total,
          bonus: currentBonus,
          grandTotal,
        });
      }, 2800);

    } catch (error) {
      console.error("Error al lanzar dados de da帽o en RTDB:", error);
    }
  };

  const spinWheel = async () => {
    if (!room || room.status === 'spinning' || !user || room.hostId !== user.id) return;

    const { targetRotation, duration } = calculateSpin(room.wedges, room.currentRotation);
    const spinStartAt = Date.now();

    try {
      const roomUpdatesRef = ref(rtdb, `rooms/${room.id}`);
      
      await update(roomUpdatesRef, {
        status: 'spinning',
        targetRotation,
        duration,
        spinStartAt,
      });

      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);

      spinTimeoutRef.current = setTimeout(async () => {
        const freshSnapshot = await get(ref(rtdb, `rooms/${room.id}`));
        if (!freshSnapshot.exists()) return;
        const freshData = freshSnapshot.val();
        
        if (freshData.spinStartAt === spinStartAt) {
          const finalRotation = targetRotation % 360;
          const wedges = room.wedges;
          const numWedges = wedges.length;
          const degreesPerWedge = 360 / numWedges;

          let targetAngle = (270 - finalRotation) % 360;
          if (targetAngle < 0) targetAngle += 360;

          const winningIndex = Math.floor(targetAngle / degreesPerWedge) % numWedges;
          const winnerWedge = wedges[winningIndex] || wedges[0];

          // Actualizamos el estado final de la sala de inmediato
          await update(ref(rtdb, `rooms/${room.id}`), {
            status: 'idle',
            currentRotation: finalRotation,
            lastResult: {
              id: winnerWedge.id,
              name: winnerWedge.name,
              color: winnerWedge.color,
              firedAt: Date.now()
            }
          });

          // El historial se escribe con retraso para que aparezca DESPU脡S
          // del confetti y del banner de resultado en pantalla
          setTimeout(() => {
            appendHistory(room.id, 'roulette', {
              rolledBy: user.name,
              result: winnerWedge.name,
              color: winnerWedge.color,
            });
          }, 1500);
        }
      }, duration);

    } catch (error) {
      console.error("Error al ejecutar el spin en la RTDB:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
      if (diceTimeoutRef.current) clearTimeout(diceTimeoutRef.current);
    };
  }, []);

  return (
    <GameContext.Provider value={{ 
      user, room, players, login, createRoom, joinRoom, updateWedgesInDb, updateGameField, spinWheel, 
      changeActiveGame, rollDice, rollDamageDice
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
};
