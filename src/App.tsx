import React, { useState } from "react";
import { useGame } from "./context/GameContext";
import { RouletteWheel } from "./components/RouletteWheel";
import { ControlPanel } from "./components/ControlPanel";

function App() {
  const { user, room, login, createRoom, joinRoom } = useGame();
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [joinError, setJoinError] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleJoin = async () => {
    if (!roomCode.trim()) return;
    
    setJoinError("");
    setIsJoining(true);
    console.log("[App.tsx] Ejecutando handleJoin de forma segura para:", roomCode);
    
    try {
      const result = await joinRoom(roomCode);
      
      if (result && result.ok) {
        console.log("[App.tsx] Unión exitosa confirmada. Esperando renderizado de sala.");
        // Dejamos que el estado de 'room' tome el control total del árbol de componentes
      } else {
        setJoinError(result?.error ?? "Error al unirse a la sala");
        setIsJoining(false);
      }
    } catch (err) {
      console.error("[App.tsx] Error en handleJoin:", err);
      setJoinError("No se pudo conectar con el servidor.");
      setIsJoining(false);
    }
  };

  // 1. Pantalla de login
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
          <h2 className="text-xl font-black text-white text-center tracking-wide uppercase">Ruleta Multiplayer</h2>
          <input
            type="text"
            placeholder="Introduce tu Nickname..."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && nickname.trim() && login(nickname)}
            className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => nickname.trim() && login(nickname)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all"
          >
            Acceder al Lobby
          </button>
        </div>
      </div>
    );
  }

  // 2. Lobby (sin sala activa)
  if (!room || !room.id || !room.hostId) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={() => {
              console.log("Click detectado físicamente en el botón de App.tsx");
              createRoom();
            }}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all uppercase tracking-wider"
          >
            Crear sala Privada
          </button>

          <div className="relative flex items-center p-2 bg-slate-900 border border-white/10 rounded-2xl">
            <input
              type="text"
              placeholder="CÓDIGO DE SALA"
              value={roomCode}
              onChange={(e) => {
                setRoomCode(e.target.value);
                setJoinError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              maxLength={4}
              className="w-full bg-transparent pl-4 pr-20 py-2 text-white font-mono font-bold uppercase tracking-widest outline-none placeholder:text-slate-600 text-sm"
            />
            <button
              onClick={handleJoin}
              disabled={isJoining}
              className="absolute right-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs rounded-xl border border-white/5 transition-all disabled:opacity-50"
            >
              {isJoining ? "..." : "Entrar"}
            </button>
          </div>

          {/* FIX: Mostramos el error de sala no encontrada al usuario */}
          {joinError && (
            <p className="text-center text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl py-2 px-4">
              ⚠️ {joinError}
            </p>
          )}
        </div>
      </div>
    );
  }

  // 3. Pantalla de juego
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-4 bg-slate-900 px-4 py-2 border border-white/10 rounded-xl text-center">
          <p className="text-xs text-slate-400 font-bold">CÓDIGO DE SALA</p>
          <p className="text-xl font-mono font-black text-cyan-400 tracking-widest">{room.code}</p>
        </div>
        <RouletteWheel />
      </div>
      <div className="w-full lg:w-[400px]">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;
