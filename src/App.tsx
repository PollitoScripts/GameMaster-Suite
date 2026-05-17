import React, { useState } from 'react';
import { useGame } from './context/GameContext';
import { RouletteWheel } from './components/RouletteWheel';
import { ControlPanel } from './components/ControlPanel';

export default function App() {
  const { user, room, players, login, createRoom, joinRoom } = useGame();
  const [nick, setNick] = useState('');
  const [code, setCode] = useState('');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
        <form onSubmit={(e) => { e.preventDefault(); if(nick.trim()) login(nick); }} className="w-full max-w-sm bg-slate-900/80 border border-white/10 p-8 rounded-3xl flex flex-col gap-5">
          <h2 className="text-xl font-black text-center text-indigo-400 uppercase tracking-wider">Ruleta Multiplayer</h2>
          <input type="text" placeholder="Nickname..." value={nick} onChange={e => setNick(e.target.value)} className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500" />
          <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all">Acceder al Lobby</button>
        </form>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <button onClick={createRoom} className="w-full p-6 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl font-bold text-white hover:bg-indigo-600/30 transition-all">
            👑 Crear Nueva Sala Privada
          </button>
          <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
            <form onSubmit={(e) => { e.preventDefault(); joinRoom(code); }} className="flex gap-2">
              <input type="text" placeholder="CÓDIGO" value={code} onChange={e => setCode(e.target.value)} className="flex-1 px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-center font-mono text-white text-sm uppercase tracking-widest" />
              <button type="submit" className="px-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="p-4 border-b border-white/5 bg-slate-900/20 backdrop-blur-md flex justify-between items-center px-6">
        <span className="font-mono bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-indigo-400 rounded-lg text-xs font-bold tracking-widest">SALA: {room.id}</span>
        <div className="text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1 rounded-lg font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ONLINE: {players.length}
        </div>
      </header>
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl w-full mx-auto">
        <div className="lg:col-span-7 flex justify-center"><RouletteWheel /></div>
        <div className="lg:col-span-5 flex flex-col gap-5">
          <ControlPanel />
          <div className="p-4 bg-slate-900/30 border border-white/5 rounded-2xl flex flex-wrap gap-1.5">
            {players.map(p => (
              <span key={p.id} className="text-[11px] px-2.5 py-1 bg-slate-950 border border-white/5 text-slate-300 rounded-lg font-medium">
                {p.name} {room.hostId === p.id && '👑'}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}