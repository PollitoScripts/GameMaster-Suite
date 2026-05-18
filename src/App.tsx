import React, { useState } from "react";
import { useGame } from "./context/GameContext";
import { RouletteWheel } from "./components/RouletteWheel";
import { ControlPanel } from "./components/ControlPanel";

function App() {
  const { user, room, login, createRoom, joinRoom } = useGame();
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");

  // 1. Pantalla de inicio de sesión
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

  // 2. Pantalla del Lobby (Modificada: Si no hay sala, o la sala que hay no tiene un ID real todavía)
  if (!room || !room.id) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={createRoom}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-2xl shadow-xl transition-all"
          >
            👑 Crear Nueva Sala Privada
          </button>

          <div className="relative flex items-center p-2 bg-slate-900 border border-white/10 rounded-2xl">
            <input
              type="text"
              placeholder="CÓDIGO DE SALA"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              maxLength={4}
              className="w-full bg-transparent pl-4 pr-20 py-2 text-white font-mono font-bold uppercase tracking-widest outline-none placeholder:text-slate-600 text-sm"
            />
            <button
              onClick={() => roomCode.trim() && joinRoom(roomCode)}
              className="absolute right-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs rounded-xl border border-white/5 transition-all"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Pantalla de la Ruleta (Solo si room y room.id existen legítimamente)
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-4 bg-slate-900 px-4 py-2 border border-white/10 rounded-xl text-center">
          <p className="text-xs text-slate-400 font-bold">CÓDIGO DE SALA</p>
          <p className="text-xl font-mono font-black text-cyan-400 tracking-widest">{room.id}</p>
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