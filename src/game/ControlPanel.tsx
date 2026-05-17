import React, { useState } from 'react';
import { useGameStore } from '../../store/useGameStore';
import { Plus, Trash2, Play } from 'lucide-react';
import { Wedge } from '../../types';

export const ControlPanel: React.FC = () => {
  const { currentRoom, user, updateWedges, triggerSpin } = useGameStore();
  const [newWedgeName, setNewWedgeName] = useState('');
  const [newWedgeColor, setNewWedgeColor] = useState('#6366f1');

  if (!currentRoom || !user) return null;
  const isHost = currentRoom.hostId === user.id;

  const handleAddWedge = async () => {
    if (!newWedgeName.trim()) return;
    const newWedge: Wedge = {
      id: Math.random().toString(36).substring(2, 9),
      name: newWedgeName,
      description: 'Personalizado vía panel',
      color: newWedgeColor
    };
    await updateWedges([...currentRoom.wedges, newWedge]);
    setNewWedgeName('');
  };

  const handleDeleteWedge = async (id: string) => {
    if (currentRoom.wedges.length <= 2) return; // Mínimo técnico requerido
    const filtered = currentRoom.wedges.filter(w => w.id !== id);
    await updateWedges(filtered);
  };

  return (
    <div className="w-full bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Configuración de la Ruleta
        </h3>
        <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400">
          {isHost ? '👑 Modo Host' : '👁️ Modo Espectador'}
        </span>
      </div>

      {isHost ? (
        <>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newWedgeName}
              onChange={(e) => setNewWedgeName(e.target.value)}
              placeholder="Nombre de la opción..."
              className="flex-1 px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={newWedgeColor}
                onChange={(e) => setNewWedgeColor(e.target.value)}
                className="w-12 h-12 bg-transparent border-0 cursor-pointer rounded-xl"
              />
              <button
                onClick={handleAddWedge}
                className="flex items-center justify-center gap-2 px-5 h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                <Plus size={18} /> Añadir
              </button>
            </div>
          </div>

          <div className="max-h-[220px] overflow-y-auto space-y-2 pr-2 scrollbar-thin">
            {currentRoom.wedges.map((wedge) => (
              <div key={wedge.id} className="flex items-center justify-between p-3 bg-slate-950/30 border border-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: wedge.color }} />
                  <span className="text-sm font-medium text-slate-200">{wedge.name}</span>
                </div>
                <button
                  onClick={() => handleDeleteWedge(wedge.id)}
                  disabled={currentRoom.wedges.length <= 2}
                  className="text-slate-500 hover:text-red-400 transition-colors disabled:opacity-30"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={triggerSpin}
            disabled={currentRoom.status === 'spinning'}
            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black tracking-wider uppercase rounded-2xl transition-all shadow-xl shadow-emerald-500/10 active:scale-[0.99] disabled:opacity-50"
          >
            <Play size={20} fill="currentColor" /> ¡Lanzar Ruleta!
          </button>
        </>
      ) : (
        <div className="text-center py-8 text-slate-400 border border-dashed border-white/10 rounded-2xl bg-slate-950/20">
          <p className="text-sm">Solo el Host de la sala puede modificar las opciones e iniciar el giro de la ruleta.</p>
        </div>
      )}
    </div>
  );
};