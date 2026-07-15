import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Menu, X, Dices, Disc, Swords, Target } from 'lucide-react'; // 👈 Añadimos Target para Body Combat

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { room, user, changeActiveGame } = useGame();

  if (!room || !user) return null;
  const isHost = room.hostId === user.id;

  // 👈 Actualizamos el tipado aquí para admitir 'body-combat'
  const handleGameChange = async (gameType: 'roulette' | 'dice' | 'dice-damage' | 'body-combat') => {
    if (!isHost) return; // Solo el host cambia el juego global
    await changeActiveGame(gameType);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón para abrir el menú */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-white backdrop-blur-md hover:bg-slate-800 transition-all"
      >
        <Menu size={20} />
      </button>

      {/* Fondo oscuro (Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Contenedor del Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-white/10 p-6 z-50 transition-transform duration-300 flex flex-col gap-6 text-white ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
          <h2 className="font-black text-sm tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Centro de Juegos</h2>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {/* Opción Ruleta */}
          <button
            onClick={() => handleGameChange('roulette')}
            disabled={!isHost && room.activeGame !== 'roulette'}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${room.activeGame === 'roulette' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40'}`}
          >
            <Disc className={room.status === 'spinning' && room.activeGame === 'roulette' ? 'animate-spin' : ''} size={18} />
            <div>
              <p>La Ruleta de la Suerte</p>
              {!isHost && <span className="text-[9px] text-slate-400 font-normal">Solo lectura</span>}
            </div>
          </button>

          {/* Opción Dado D20 3D */}
          <button
            onClick={() => handleGameChange('dice')}
            disabled={!isHost && room.activeGame !== 'dice'}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${room.activeGame === 'dice' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40'}`}
          >
            <Dices size={18} />
            <div>
              <p>Dado D20 Ultra 3D</p>
              {!isHost && <span className="text-[9px] text-slate-400 font-normal">Solo lectura</span>}
            </div>
          </button>

          {/* Opción: Dados de Daño */}
          <button
            onClick={() => handleGameChange('dice-damage')}
            disabled={!isHost && room.activeGame !== 'dice-damage'}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${room.activeGame === 'dice-damage' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40'}`}
          >
            <Swords size={18} />
            <div>
              <p>Dados de Daño y %</p>
              {!isHost && <span className="text-[9px] text-slate-400 font-normal">Solo lectura</span>}
            </div>
          </button>

          {/* 🎯 NUEVA OPCIÓN: Body Combat */}
          <button
            onClick={() => handleGameChange('body-combat')}
            disabled={!isHost && room.activeGame !== 'body-combat'}
            className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${room.activeGame === 'body-combat' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40'}`}
          >
            <Target size={18} />
            <div>
              <p>Body Combat</p>
              {!isHost && <span className="text-[9px] text-slate-400 font-normal">Solo lectura</span>}
            </div>
          </button>
        </div>

        <div className="text-center text-[10px] text-slate-500 font-medium">
          Sala: <span className="text-cyan-400 font-bold uppercase">{room.id}</span>
        </div>
      </div>
    </>
  );
};