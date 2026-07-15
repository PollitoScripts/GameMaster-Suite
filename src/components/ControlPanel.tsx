import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import confetti from 'canvas-confetti';
import { BodyCombatModule } from './BodyCombatModule';

export const ControlPanel: React.FC = () => {
  const { room, user, players, updateWedgesInDb, spinWheel, rollDice, updateGameField } = useGame();
  const [text, setText] = useState('');
  const [color, setColor] = useState('#6366f1');
  
  const [localDiceCount, setLocalDiceCount] = useState(1);
  const [localDiceThresh, setLocalDiceThresh] = useState(10);

  const [isLocalSpinning, setIsLocalSpinning] = useState(false);
  const [showResults, setShowResults] = useState(true);

  // ── Historial: tab activo ──────────────────────────────────────────────────
  const [histTab, setHistTab] = useState<'roulette' | 'dice' | 'dice-damage' | 'body-combat'>('roulette');

  const animationEndRef = useRef<number | null>(null);
  const dataArrivedRef = useRef<boolean>(false);

  const bonus = Number(room?.bonus || 0);

  const history = {
    roulette:       (room?.history?.roulette       ?? []) as any[],
    dice:           (room?.history?.dice           ?? []) as any[],
    'dice-damage':  (room?.history?.['dice-damage'] ?? []) as any[],
    'body-combat':  (room?.history?.['body-combat'] ?? []) as any[],
  };

  const handleUpdateBonus = async (newBonus: number) => {
    if (updateGameField) {
      await updateGameField({ bonus: Math.max(0, newBonus) });
    }
  };

  useEffect(() => {
    setShowResults(false);
    setIsLocalSpinning(false);
    if (animationEndRef.current !== null) {
      clearTimeout(animationEndRef.current);
      animationEndRef.current = null;
    }
    dataArrivedRef.current = false;
  }, [room?.activeGame]);

  useEffect(() => {
    if (room?.activeGame) setHistTab(room.activeGame);
  }, [room?.activeGame]);

  useEffect(() => {
    if (!isLocalSpinning) return;
    if (room?.activeGame !== 'dice') return;
    dataArrivedRef.current = true;

    if (animationEndRef.current === null) {
      setShowResults(true);
      setIsLocalSpinning(false);
    }
  }, [room?.diceResults]);

  useEffect(() => {
    if (!isLocalSpinning) return;
    if (room?.activeGame !== 'dice-damage') return;
    dataArrivedRef.current = true;

    if (animationEndRef.current === null) {
      setShowResults(true);
      setIsLocalSpinning(false);
    }
  }, [room?.damageResults]);

  const handleRollClick = async () => {
    setIsLocalSpinning(true);
    setShowResults(false);
    dataArrivedRef.current = false;

    animationEndRef.current = window.setTimeout(() => {
      animationEndRef.current = null;
      if (dataArrivedRef.current) {
        setShowResults(true);
        setIsLocalSpinning(false);
      }
    }, 2500);

    await rollDice(localDiceCount, localDiceThresh);
  };

  useEffect(() => {
    if (room && room.activeGame === 'roulette' && room.status === 'idle' && room.lastResult) {
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    }
  }, [room?.status, room?.lastResult?.firedAt, room?.activeGame]);

  if (!room || !user) return null;
  const isHost = room.hostId === user.id;

  const results = useMemo(() => {
    const dice = room.activeGame === 'dice' ? (() => {
      const currentDiceResults = room.diceResults ?? [];
      const currentThresh = room.diceThresh ?? 10;
      return {
        successDice: currentDiceResults.filter(val => val > currentThresh),
        totalSuccesses: currentDiceResults.filter(val => val > currentThresh).length,
        totalSum: currentDiceResults
          .filter(val => val > currentThresh)
          .reduce((acc, val) => acc + (val - currentThresh), 0),
        currentThresh
      };
    })() : null;

    const damage = room.activeGame === 'dice-damage' ? (() => {
      const currentDamageResults = room.damageResults ?? [];
      return {
        totalDamageSum: currentDamageResults.reduce((acc, val) => acc + val, 0)
      };
    })() : null;

    return { dice, damage };
  }, [room.diceResults, room.damageResults, room.diceThresh, room.activeGame]);

  const handleAddWedge = async () => {
    if (!text.trim()) return;
    const item = { id: Math.random().toString(36).substring(2, 9), name: text.trim(), color };
    await updateWedgesInDb([...(room.wedges || []), item]);
    setText('');
  };

  const handleRemoveWedge = async (id: string) => {
    const currentWedges = room.wedges || [];
    const filtered = currentWedges.filter(w => w.id !== id);
    await updateWedgesInDb(filtered);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      
      {room.activeGame === 'dice' && results.dice && showResults && (
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
            <p className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-1">Éxitos (&gt; {results.dice.currentThresh})</p>
            <span className="text-3xl font-mono font-black text-white">{results.dice.totalSuccesses}</span>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/5 border border-indigo-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
            <p className="text-[10px] text-indigo-400 font-black tracking-widest uppercase mb-1">Suma Total</p>
            <span className="text-3xl font-mono font-black text-white">{results.dice.totalSum}</span>
          </div>
        </div>
      )}

      {room.activeGame === 'dice-damage' && results.damage && showResults && (
        <div className="w-full bg-gradient-to-br from-amber-500/20 to-orange-500/5 border border-amber-500/30 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md">
          <p className="text-[10px] text-amber-400 font-black tracking-widest uppercase mb-1">💥 Último Impacto Registrado</p>
          <span className="text-4xl font-mono font-black text-white drop-shadow">
            {results.damage.totalDamageSum + bonus} <span className="text-sm font-sans text-amber-400/80 font-bold">Pts de Daño</span>
          </span>
        </div>
      )}

      {room.activeGame === 'roulette' && room.status === 'idle' && room.lastResult && (
        <div style={{ backgroundColor: room.lastResult.color }} className="w-full p-4 rounded-2xl text-center font-black shadow-xl border border-white/20 text-slate-950">
          <p className="text-[10px] tracking-widest opacity-70 font-bold uppercase mb-0.5">Resultado Anterior</p>
          <span className="text-lg">🎉 ¡{room.lastResult.name}! 🏆</span>
        </div>
      )}

      {room.activeGame === 'body-combat' && (
        <div className="w-full">
          <BodyCombatModule />
        </div>
      )}

      {/* ── AJUSTES ──────────────────────────────────────────────────────────── */}
        <div className="w-full bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-black tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {room.activeGame === 'dice' 
                ? 'Ajustes del Sistema D20' 
                : room.activeGame === 'dice-damage' 
                  ? 'Información de Combate' 
                  : room.activeGame === 'body-combat'
                    ? 'Sistema V.A.T.S.'
                    : 'Opciones de Ruleta'}
            </h3>
            <span className="text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-slate-400">
              {isHost ? '👑 HOST' : '👁️ ESPECTADOR'}
            </span>
          </div>

          {isHost ? (
            <div className="flex flex-col gap-4">
              {room.activeGame === 'dice-damage' && (
                <div className="grid grid-cols-2 gap-3 bg-slate-950/40 p-4 border border-white/5 rounded-2xl">
                  <div>
                    <label className="text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5">Nº de Dados (D20)</label>
                    <input 
                      type="number" min={1} max={12} value={localDiceCount} 
                      onChange={e => setLocalDiceCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5">Dificultad (DT)</label>
                    <input 
                      type="number" min={0} max={20} value={localDiceThresh} 
                      onChange={e => setLocalDiceThresh(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm"
                    />
                  </div>
                </div>
              )}

              {room.activeGame === 'roulette' && (
                <div className="bg-slate-950/40 p-4 border border-white/5 rounded-2xl">
                  <div className="flex gap-2 mb-2">
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Añadir opción..." className="flex-1 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white text-xs" />
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-10 h-10 bg-transparent border-0 cursor-pointer" />
                    <button onClick={handleAddWedge} className="px-4 bg-indigo-600 text-white rounded-xl font-bold">✓</button>
                  </div>
                </div>
              )}

              {/* Botones de Acción */}
              {room.activeGame === 'dice' && (
                <button onClick={handleRollClick} disabled={isLocalSpinning} className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs">
                  {isLocalSpinning ? '🎰 Lanzando...' : `Lanzar ${localDiceCount} Dados 🎲`}
                </button>
              )}

              {room.activeGame === 'roulette' && (
                <button onClick={spinWheel} disabled={room.status === 'spinning'} className="w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs">
                  {room.status === 'spinning' ? '🎰 Girando...' : 'Girar Ruleta 🎲'}
                </button>
              )}
            </div>
          ) : (
            <div className="text-xs text-slate-400 text-center py-6 border border-dashed border-white/10 rounded-xl bg-slate-950/20 px-4">
              {room.activeGame === 'dice' 
                ? `Esperando que el Host lance los dados. Ajustes: DT fijado en [${localDiceThresh}].` 
                : room.activeGame === 'body-combat'
                  ? 'El host controla el emparejamiento y los roles. Cuando te toque atacar o defender, elige tus zonas arriba.'
                  : 'Solo el creador de la sala puede alterar el tablero y girar la rueda.'
              }
            </div>
          )}
        </div>

      {/* ── HISTORIAL ─────────────────────────────────────────────────────────── */}
      <div className="w-full bg-slate-900/40 border border-white/10 rounded-3xl p-5 flex flex-col gap-3.5">
        <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">
          📜 Historial
        </h4>

        {/* Tabs */}
        <div className="flex gap-1.5">
          {(['roulette', 'dice', 'dice-damage', 'body-combat'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setHistTab(tab)}
              className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition ${
                histTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {tab === 'roulette' ? '🎡 Ruleta' : tab === 'dice' ? '🎲 D20' : tab === 'dice-damage' ? '⚔️ Daño' : '🥊 Combat'}
            </button>
          ))}
        </div>

        {/* Entradas */}
        <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-1">
          {[...(history[histTab] || [])].reverse().length === 0 ? (
            <p className="text-xs text-slate-500 text-center py-4 border border-dashed border-white/5 rounded-xl">
              Sin entradas todavía
            </p>
          ) : (
            [...(history[histTab] || [])].reverse().map((entry, i) => (
              <div
                key={i}
                className="bg-slate-950/60 border border-white/5 rounded-xl p-3 flex flex-col gap-1.5"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-indigo-400">
                    {entry.rolledBy ?? 'Host'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {new Date(entry.timestamp).toLocaleTimeString('es-ES', {
                      hour: '2-digit', minute: '2-digit', second: '2-digit'
                    })}
                  </span>
                </div>

                {/* Contenido según modo */}
                {histTab === 'roulette' && (
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs font-bold text-white">{entry.result}</span>
                  </div>
                )}

                {histTab === 'dice' && (
                  <>
                    <div className="flex flex-wrap gap-1">
                      {(entry.results ?? []).map((v: number, j: number) => (
                        <span
                          key={j}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-black ${
                            v === 20
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : v === 1
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : v > (entry.threshold ?? 10)
                              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                              : 'bg-slate-800 text-slate-400 border border-white/5'
                          }`}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-[10px] text-slate-400 font-mono">
                      <span>DT {entry.threshold}</span>
                      <span className="text-emerald-400 font-bold">
                        ✓ {entry.successes} éxito{entry.successes !== 1 ? 's' : ''}
                      </span>
                      <span>Σ {entry.sum}</span>
                    </div>
                  </>
                )}

                {histTab === 'dice-damage' && (
                  <>
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(entry.pool ?? {})
                        .filter(([, cnt]) => (cnt as number) > 0)
                        .map(([die, cnt]) => (
                          <span key={die} className="text-[10px] font-mono text-slate-300 bg-slate-800 border border-white/5 px-1.5 py-0.5 rounded">
                            {cnt as number}×{die}
                          </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(entry.results ?? []).map((v: number, j: number) => (
                        <span key={j} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-black bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {v}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-[10px] font-mono">
                      <span className="text-slate-400">
                        Dados {entry.results?.reduce((a: number, v: number) => a + v, 0)}
                      </span>
                      {(entry.bonus ?? 0) > 0 && (
                        <span className="text-indigo-400">+{entry.bonus} bonus</span>
                      )}
                      <span className="text-amber-400 font-black">
                        💥 {entry.grandTotal} total
                      </span>
                    </div>
                  </>
                )}
                
                {/* Renderizado para Body Combat */}
                {histTab === 'body-combat' && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-white">
                      ⚔️ {entry.attackerName} → 🛡️ {entry.defenderName}
                    </span>
                    {entry.hits && Object.keys(entry.hits).length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(entry.hits).map(([partId, count]) => (
                          <span key={partId} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-black bg-red-500/20 text-red-300 border border-red-500/30">
                            {partId} ×{count as number}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] text-emerald-400 font-bold">Defensa perfecta, sin impactos</span>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── JUGADORES ─────────────────────────────────────────────────────────── */}
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