import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import confetti from 'canvas-confetti'; // 👈 Asegúrate de tenerlo instalado: npm install canvas-confetti @types/canvas-confetti

// ─── 🎨 FUNCIÓN AUXILIAR DE CONTRASTE INTELIGENTE ─────────────────────────
const getContrastColor = (hexColor: string): string => {
  if (!hexColor) return '#ffffff';
  const hex = hexColor.replace('#', '');
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#0f172a' : '#ffffff'; 
};

export const ControlPanel: React.FC = () => {
  const { room, user, players, updateWedgesInDb, spinWheel } = useGame();
  const [text, setText] = useState('');
  const [color, setColor] = useState('#6366f1');

  // ─── 🎉 EFECTO DE CONFETIS SINCRONIZADO ──────────────────────────────────
  useEffect(() => {
    if (room && room.status === 'idle' && room.lastResult) {
      console.log("¡Lanzando confetis globales para:", room.lastResult.name);
      
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [room?.status, room?.lastResult?.firedAt]);

  if (!room || !user) return null;
  const isHost = room.hostId === user.id;

  const handleAddWedge = async () => {
    if (!text.trim()) return;
    const item = { id: Math.random().toString(36).substring(2, 9), name: text.trim(), color };
    await updateWedgesInDb([...room.wedges, item]);
    setText('');
  };

  const handleRemoveWedge = async (id: string) => {
    if (room.wedges.length <= 2) return;
    const filtered = room.wedges.filter(w => w.id !== id);
    await updateWedgesInDb(filtered);
  };

  // Calculamos el color ideal para el texto del banner si hay un resultado disponible
  const bannerTextColor = room.lastResult ? getContrastColor(room.lastResult.color) : '#ffffff';

  return (
    <div className="w-full flex flex-col gap-5">
      
      {/* ─── 🏆 BANNER DE GANADOR FIJO (Con contraste adaptativo de texto) ─── */}
      {room.status === 'idle' && room.lastResult && (
        <div 
          style={{ 
            backgroundColor: room.lastResult.color,
            color: bannerTextColor // 👈 Forzamos el color del texto dinámicamente aquí
          }} 
          className="w-full p-4 rounded-2xl text-center font-black shadow-xl border border-white/20 animate-bounce transition-all duration-300"
        >
          {/* Usamos opacity-70 combinada con el color calculado para mantener la sutileza del subtítulo */}
          <p 
            style={{ color: bannerTextColor }}
            className="text-[10px] tracking-widest opacity-70 font-bold uppercase mb-0.5"
          >
            Resultado Anterior
          </p>
          <span className="text-lg">🎉 ¡Ha tocado: {room.lastResult.name}! 🏆</span>
        </div>
      )}

      {/* PANEL DE CONTROL PRINCIPAL */}
      <div className="w-full bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-black tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Opciones de Ruleta</h3>
          <span className="text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-slate-400">
            {isHost ? '👑 ERES EL HOST' : '👁️ MODO ESPECTADOR'}
          </span>
        </div>

        {isHost ? (
          <>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder="Añadir opción..." 
                className="flex-1 px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500" 
              />
              <input 
                type="color" 
                value={color} 
                onChange={e => setColor(e.target.value)} 
                className="w-10 h-10 bg-transparent border-0 cursor-pointer rounded-xl" 
              />
              <button onClick={handleAddWedge} className="px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold">✓</button>
            </div>

            <div className="max-h-[160px] overflow-y-auto space-y-1.5 pr-1">
              {room.wedges.map(w => (
                <div key={w.id} className="flex justify-between items-center p-2.5 bg-slate-950/50 border border-white/5 rounded-xl text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: w.color }} />
                    <span className="text-slate-300 font-medium">{w.name}</span>
                  </div>
                  <button onClick={() => handleRemoveWedge(w.id)} className="text-slate-500 hover:text-rose-400 font-bold px-1 transition-colors">✕</button>
                </div>
              ))}
            </div>

            <button 
              onClick={spinWheel} 
              disabled={room.status === 'spinning'} 
              className="w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 disabled:pointer-events-none text-xs"
            >
              {room.status === 'spinning' ? '🎰 Girando...' : 'Girar Ruleta 🎲'}
            </button>
          </>
        ) : (
          <p className="text-xs text-slate-400 text-center py-6 border border-dashed border-white/10 rounded-xl bg-slate-950/20">
            Solo el creador de la sala puede alterar el tablero y girar la rueda.
          </p>
        )}
      </div>

      {/* LOG DE PARTICIPANTES EN TIEMPO REAL */}
      <div className="w-full bg-slate-900/40 border border-white/10 rounded-3xl p-5 flex flex-col gap-3.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">Jugadores en la Sala ({players.length})</h4>
        </div>

        <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
          {players.map((p) => {
            const isPlayerHost = room.hostId === p.id;
            
            return (
              <div key={p.id} className="flex justify-between items-center p-2.5 bg-slate-950/40 border border-white/5 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black ${isPlayerHost ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-300'}`}>
                    {p.name ? p.name.substring(0, 2).toUpperCase() : '??'}
                  </div>
                  <span className="text-xs text-slate-200 font-semibold flex items-center gap-1.5">
                    {p.name} 
                    {p.id === user.id && <span className="text-[10px] text-indigo-400 font-medium bg-indigo-500/10 px-1.5 py-0.2 rounded">(Tú)</span>}
                  </span>
                </div>
                
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-md tracking-wider uppercase border ${isPlayerHost ? 'bg-amber-500/20 text-amber-400 border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/10'}`}>
                  {isPlayerHost ? '👑 HOST' : '👤 ANÓNIMO'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};