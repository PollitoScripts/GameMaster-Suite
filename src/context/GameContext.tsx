import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { auth, rtdb } from '../config/firebase'; // 👈 Solo importamos auth y rtdb
import { signInAnonymously } from 'firebase/auth';
import { ref, push, set, update, onValue, get } from "firebase/database"; // 👈 Métodos nativos de RTDB
import { calculateSpin } from '../utils/physics';
import type { Wedge } from '../utils/physics';

interface User { id: string; name: string; }
interface Room {
  id: string;
  code: string;
  hostId: string;
  status: 'idle' | 'spinning';
  wedges: Wedge[];
  currentRotation: number;
  targetRotation: number;
  duration: number;
  spinStartAt?: number;
  players?: Record<string, { name: string; isHost: boolean; online: boolean }>;
}

interface GameContextType {
  user: User | null;
  room: Room | null;
  players: any[];
  login: (nickname: string) => Promise<void>;
  createRoom: () => Promise<void>;
  joinRoom: (code: string) => Promise<{ ok: boolean; error?: string }>;
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

  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Guardamos la referencia del listener activo para poder limpiarlo adecuadamente si es necesario
  const roomListenerRef = useRef<any>(null);

  // ─── Restaurar sesión desde sessionStorage ────────────────────────────────
  useEffect(() => {
    const savedUser = sessionStorage.getItem('ruleta_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ─── Login / Autenticación Anónima ────────────────────────────────────────
  const login = async (nickname: string) => {
    if (!nickname.trim()) return;
    console.log("Iniciando login para:", nickname);

    try {
      const userCredential = await signInAnonymously(auth);
      const newUser = {
        id: userCredential.user.uid,
        name: nickname.trim(),
      };
      console.log("Login exitoso:", newUser);
      sessionStorage.setItem('ruleta_user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // ─── Conexión en tiempo real unificada ────────────────────────────────────
  const connectToRoom = (roomId: string) => {
    console.log(`[RTDB Sync] Conectando a la sala: ${roomId}`);
    
    const roomRef = ref(rtdb, `rooms/${roomId}`);
    
    // Escuchamos absolutamente cualquier cambio en este nodo de la RTDB
    roomListenerRef.current = onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        console.warn("La sala no existe en la base de datos.");
        setRoom(null);
        setPlayers([]);
        return;
      }
      
      // Sincronizamos el estado de la sala principal
      setRoom(data);

      // Sincronizamos el log de participantes transformando el objeto en Array para tu UI
      if (data.players) {
        const playersArray = Object.entries(data.players).map(([id, info]: any) => ({
          id,
          ...info
        }));
        setPlayers(playersArray);
      } else {
        setPlayers([]);
      }
    });
  };

  // ─── Crear sala ───────────────────────────────────────────────────────────
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
        currentRotation: 0,
        targetRotation: 0,
        duration: 5000,
        wedges: DEFAULT_WEDGES,
        players: {
          [user.id]: {
            name: user.name,
            isHost: true,
            online: true
          }
        }
      };

      // Guardamos la sala en /rooms/-OsvXb...
      await set(newRoomRef, roomData);
      
      // Creamos el puente en /codes/7OGW para que los invitados lo resuelvan rápido
      await set(ref(rtdb, `codes/${shortCode}`), roomId);

      console.log(`Sala creada con éxito en RTDB. Código: ${shortCode}`);
      connectToRoom(roomId);
      
    } catch (error) {
      console.error("Error al crear la sala en RTDB:", error);
    }
  };

  // ─── Unirse a sala ────────────────────────────────────────────────────────
  const joinRoom = async (shortCode: string): Promise<{ ok: boolean; error?: string }> => {
    if (!user) return { ok: false, error: "Usuario no autenticado" };
    
    const normalizedCode = shortCode.trim().toUpperCase();
    
    try {
      // Hacemos una lectura única para conseguir el ID interno a partir del código corto
      const codeSnapshot = await get(ref(rtdb, `codes/${normalizedCode}`));
      const roomId = codeSnapshot.val();
      
      if (!roomId) {
        return { ok: false, error: "La sala de juego no existe." };
      }

      // Añadimos al participante al nodo interno de la sala en la RTDB
      const playerPresenceRef = ref(rtdb, `rooms/${roomId}/players/${user.id}`);
      await set(playerPresenceRef, {
        name: user.name,
        isHost: false,
        online: true
      });

      console.log(`Unido con éxito a la sala interna: ${roomId}`);
      connectToRoom(roomId);
      return { ok: true };

    } catch (err: any) {
      console.error("Error al unirse por RTDB:", err);
      return { ok: false, error: "Error de conexión al intentar unirse." };
    }
  };

  // ─── Actualizar cuñas (Exclusivo RTDB) ────────────────────────────────────
  const updateWedgesInDb = async (wedges: Wedge[]) => {
    if (!room) return;

    try {
      const roomWedgesRef = ref(rtdb, `rooms/${room.id}`);
      // Actualizamos únicamente el nodo wedges de esta sala
      await update(roomWedgesRef, { wedges });
    } catch (error) {
      console.error("Error actualizando cuñas en RTDB:", error);
    }
  };

  // ─── Girar ruleta (Exclusivo RTDB) ─────────────────────────────────────────
  const spinWheel = async () => {
    if (!room || room.status === 'spinning' || !user || room.hostId !== user.id) return;

    const { targetRotation, duration } = calculateSpin(room.wedges, room.currentRotation);
    const spinStartAt = Date.now();

    try {
      const roomUpdatesRef = ref(rtdb, `rooms/${room.id}`);
      
      // Publicamos el inicio del giro en la RTDB
      await update(roomUpdatesRef, {
        status: 'spinning',
        targetRotation,
        duration,
        spinStartAt,
      });

      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);

      // El Host calcula cuándo termina la animación para restablecer el estado a 'idle'
      spinTimeoutRef.current = setTimeout(async () => {
        const freshSnapshot = await get(ref(rtdb, `rooms/${room.id}`));
        if (!freshSnapshot.exists()) return;

        const freshData = freshSnapshot.val();
        
        // Si el timestamp coincide, cerramos el ciclo de giro
        if (freshData.spinStartAt === spinStartAt) {
          const finalRotation = targetRotation % 360;

          // ─── 🧮 CÁLCULO DIRECTO Y SIMPLIFICADOBB ───
          const wedges = room.wedges;
          const numWedges = wedges.length;
          const degreesPerWedge = 360 / numWedges;

          // En Canvas (context.rotate), el ángulo 0° está a las 3 en punto.
          // Si la ruleta gira 'finalRotation' grados en sentido horario, las porciones se desplazan hacia la derecha.
          // Para saber qué porción está ARRIBA (las 12 en punto / 270°), restamos la rotación al punto de la flecha.
          let targetAngle = (270 - finalRotation) % 360;
          
          // Si el ángulo da negativo, lo pasamos a positivo sumando 360°
          if (targetAngle < 0) {
            targetAngle += 360;
          }

          // Al calcular el índice directamente sobre el ángulo de la porción en reposo:
          const winningIndex = Math.floor(targetAngle / degreesPerWedge) % numWedges;
          const winnerWedge = wedges[winningIndex] || wedges[0];
          // ───────────────────────────────────────────────────────────────────

          console.log(`¡Giro completado! Sincronizado bajo la flecha: ${winnerWedge.name}`);

          // Guardamos en la RTDB
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
        }
      }, duration);

    } catch (error) {
      console.error("Error al ejecutar el spin en la RTDB:", error);
    }
  };

  // ─── Limpieza al desmontar ────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

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