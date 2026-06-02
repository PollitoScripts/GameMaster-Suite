import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import confetti from 'canvas-confetti';

export const ControlPanel: React.FC = () => {
  const { room, user, players, updateWedgesInDb, spinWheel, rollDice, updateGameField } = useGame();
  const [text, setText] = useState('');
  const [color, setColor] = useState('#6366f1');
  
  const [localDiceCount, setLocalDiceCount] = useState(1);
  const [localDiceThresh, setLocalDiceThresh] = useState(10);

  // Corrección: Forzamos a que el bonus sea siempre un número
  const bonus = Number(room?.bonus || 0);

  const handleUpdateBonus = async (newBonus: number) => {
    if (updateGameField) {
      await updateGameField({ bonus: Math.max(0, newBonus) });
    }
  };

  useEffect(() => {
    if (room && room.status === 'idle' && room.lastResult) {
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    }
  }, [room?.status, room?.lastResult?.firedAt]);

  if (!room || !user) return null;
  const isHost = room.hostId === user.id;

  const currentDiceResults = room.diceResults ?? [];
  const currentThresh = room.diceThresh ?? 10;

  const successDice = currentDiceResults.filter(val => val > currentThresh);
  const totalSuccesses = successDice.length;
  const totalSum = successDice.reduce((acc, val) => acc + (val - currentThresh), 0);

  const totalDamageSum = currentDiceResults.reduce((acc, val) => acc + val, 0);

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

  return (
    <div className="w-full flex flex-col gap-5">
      
      {room.activeGame === 'dice' && currentDiceResults.length > 0 && (
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
            <p className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-1">Éxitos (&gt; {currentThresh})</p>
            <span className="text-3xl font-mono font-black text-white">{room.status === 'spinning' ? '...' : totalSuccesses}</span>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/5 border border-indigo-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
            <p className="text-[10px] text-indigo-400 font-black tracking-widest uppercase mb-1">Suma Total</p>
            <span className="text-3xl font-mono font-black text-white">{room.status === 'spinning' ? '...' : totalSum}</span>
          </div>
        </div>
      )}

      {room.activeGame === 'dice-damage' && currentDiceResults.length > 0 && room.status === 'idle' && (
        <div className="w-full bg-gradient-to-br from-amber-500/20 to-orange-500/5 border border-amber-500/30 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
          <p className="text-[10px] text-amber-400 font-black tracking-widest uppercase mb-1">💥 Último Impacto Registrado</p>
          <span className="text-4xl font-mono font-black text-white drop-shadow">
            {totalDamageSum + bonus} <span className="text-sm font-sans text-amber-400/80 font-bold">Pts de Daño</span>
          </span>
        </div>
      )}

      {room.activeGame === 'wheel' && room.status === 'idle' && room.lastResult && (
        <div style={{ backgroundColor: room.lastResult.color }} className="w-full p-4 rounded-2xl text-center font-black shadow-xl border border-white/20 text-slate-950">
          <p className="text-[10px] tracking-widest opacity-70 font-bold uppercase mb-0.5">Resultado Anterior</p>
          <span className="text-lg">🎉 ¡{room.lastResult.name}! 🏆</span>
        </div>
      )}

      <div className="w-full bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-black tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {room.activeGame === 'dice' 
              ? 'Ajustes del Sistema D20' 
              : room.activeGame === 'dice-damage' 
                ? 'Información de Combate' 
                : 'Opciones de Ruleta'}
          </h3>
          <span className="text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-slate-400">
            {isHost ? '👑 HOST' : '👁️ ESPECTADOR'}
          </span>
        </div>

        {room.activeGame === 'dice-damage' ? (
          <div className="flex flex-col gap-4">
            <div className="text-xs text-slate-400 py-4 px-3 border border-white/5 bg-slate-950/40 rounded-2xl space-y-2">
              <p className="font-bold text-slate-300">🎲 Gestión de la Reserva:</p>
              <p>
                {isHost 
                  ? 'Usa el panel central para agregar los dados requeridos según el arma o hechizo empleado.' 
                  : 'El Director de Juego está calculando los modificadores e indexando los dados a la mesa.'}
              </p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-indigo-500/30 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bonus Total</span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-lg font-black text-indigo-400 w-8 text-center">+{bonus}</span>
                
                {isHost && (
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleUpdateBonus(bonus - 1)} className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-bold">-</button>
                    <button onClick={() => handleUpdateBonus(bonus + 1)} className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-bold">+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : isHost ? (
          <>
            {room.activeGame === 'dice' ? (
              <div className="flex flex-col gap-4 bg-slate-950/40 p-4 border border-white/5 rounded-2xl">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5">Nº de Dados (D20)</label>
                    <input 
                      type="number" 
                      min={1} 
                      max={12} 
                      value={localDiceCount} 
                      onChange={e => setLocalDiceCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5">Dificultad (DT)</label>
                    <input 
                      type="number" 
                      min={0} 
                      max={20} 
                      value={localDiceThresh} 
                      onChange={e => setLocalDiceThresh(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium text-center">
                  Al pulsar el botón inferior se lanzarán {localDiceCount} dados simultáneos. Se considerará éxito toda tirada estrictamente mayor que {localDiceThresh}.
                </p>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Añadir opción..." className="flex-1 px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none" />
                  <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-10 h-10 bg-transparent border-0 cursor-pointer rounded-xl" />
                  <button onClick={handleAddWedge} className="px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold">✓</button>
                </div>
                <div className="max-h-[160px] overflow-y-auto space-y-1.5 pr-1">
                  {room.wedges.map(w => (
                    <div key={w.id} className="flex justify-between items-center p-2.5 bg-slate-950/50 border border-white/5 rounded-xl text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: w.color }} />
                        <span className="text-slate-300 font-medium">{w.name}</span>
                      </div>
                      <button onClick={() => handleRemoveWedge(w.id)} className="text-slate-500 hover:text-rose-400 font-bold px-1">✕</button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {room.activeGame === 'dice' && (
              <button 
                onClick={() => rollDice(localDiceCount, localDiceThresh)} 
                disabled={room.status === 'spinning'} 
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs"
              >
                {room.status === 'spinning' ? '🎰 Lanzando en Sala...' : `Lanzar ${localDiceCount} Dados 🎲`}
              </button>
            )}

            {room.activeGame === 'wheel' && (
              <button 
                onClick={spinWheel} 
                disabled={room.status === 'spinning'} 
                className="w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs"
              >
                {room.status === 'spinning' ? '🎰 Girando...' : 'Girar Ruleta 🎲'}
              </button>
            )}
          </>
        ) : (
          <div className="text-xs text-slate-400 text-center py-6 border border-dashed border-white/10 rounded-xl bg-slate-950/20 px-4">
            {room.activeGame === 'dice' 
              ? `Esperando que el Host lance los dados. Ajustes: DT fijado en [${currentThresh}].` 
              : 'Solo el creador de la sala puede alterar el tablero y girar la rueda.'
            }
          </div>
        )}
      </div>

      <div className="w-full bg-slate-900/40 border border-white/10 rounded-3xl p-5 flex flex-col gap-3.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">Jugadores ({players.length})</h4>
        </div>
        <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
          {players.map((p) => (
            <div key={p.id} className="flex justify-between items-center p-2 bg-slate-950/40 border border-white/5 rounded-xl text-xs">
              <span className="text-slate-200 font-semibold">{p.name} {p.id === user.id && '(Tú)'}</span>
              <span className="text-[9px] font-black text-cyan-400">{room.hostId === p.id ? '👑 HOST' : '👤 JUGADOR'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};