import React, { useState } from "react";
import { useGame } from "./context/GameContext";
import { Sidebar } from "./components/Sidebar"; // 👈 Añadimos el menú desplegable lateral
import { RouletteWheel } from "./components/RouletteWheel";
import { Dice3D } from "./components/Dice3D.tsx"; // 👈 Tu componente de Canvas / Three.js del dado d20
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

  // 1. Pantalla de login (Se queda igual)
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
          <h2 className="text-xl font-black text-white text-center tracking-wide uppercase">Lobby Multijuegos</h2>
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

  // 2. Lobby sin sala activa (Se queda igual)
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

          {joinError && (
            <p className="text-center text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl py-2 px-4">
              ⚠️ {joinError}
            </p>
          )}
        </div>
      </div>
    );
  }

  // 3. PANTALLA DE JUEGO (Actualizada con lógica condicional para la Ruleta o el Dado)
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-6 relative">
      
      {/* Menú lateral para alternar entre juegos (Ruleta/Dado) */}
      <Sidebar />

      {/* LADO IZQUIERDO: Visualizador del juego activo dictado por Firebase */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        
        {/* Marcador superior con el código de sala */}
        <div className="mb-6 bg-slate-900/60 backdrop-blur-md px-5 py-2 border border-white/10 rounded-xl text-center shadow-lg">
          <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase">Código de Sala</p>
          <p className="text-xl font-mono font-black text-cyan-400 tracking-widest">{room.code}</p>
        </div>

        {/* 🧠 CONTROL DE RENDERIZADO INTELIGENTE */}
        <div className="flex-1 flex items-center justify-center p-4">
          {room.activeGame === 'dice' ? (
            // Renderizado directo sin tarjetas duplicadas oscuras de fondo
            <Dice3D 
              seed={room.diceSeed ?? 0} 
              results={room.diceResults ?? [20, 20]} // Fallback para pintar dados iniciales
              status={room.status} 
              duration={room.duration ?? 1200}
              spinStartAt={room.spinStartAt}
            />
          ) : (
            <RouletteWheel />
          )}
        </div>
      </div>

      {/* LADO DERECHO: El panel de opciones y lista de jugadores */}
      <div className="w-full lg:w-[400px] shrink-0">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;