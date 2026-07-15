// components/BodyCombatModule.tsx
import React from 'react';
import { Swords, Shield, RotateCcw } from 'lucide-react';
import { BodySvg, BODY_COMBAT_PARTS, useBodyCombatController } from './BodyCombatShared';

export const BodyCombatModule = () => {
  const {
    room, user, players, bc, isHost, maxSelections, myRole, myReady, color,
    opponent, attacker, defender, draft, counts,
    addPart, removePart, confirm,
    setBodyCombatOpponent, setBodyCombatMaxSelections, setBodyCombatRoles,
    resolveBodyCombat, resetBodyCombat,
  } = useBodyCombatController();

  if (!room || !user || !bc) return null;

  // ── PASO 1 (solo host): elegir contrincante ───────────────────────────────
  if (isHost && !bc.opponentId) {
    const candidates = players.filter(p => p.id !== user.id);
    return (
      <div className="flex flex-col gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/10">
        <h4 className="text-white font-bold text-sm">🥊 Elige a tu contrincante</h4>
        {candidates.length === 0 ? (
          <p className="text-xs text-slate-500 text-center py-4">
            Esperando a que se una otro jugador a la sala...
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {candidates.map(p => (
              <button
                key={p.id}
                onClick={() => setBodyCombatOpponent(p.id)}
                className="w-full p-3 rounded-xl font-bold text-xs text-left bg-white/5 hover:bg-white/10 text-slate-200 transition-all"
              >
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!isHost && !bc.opponentId) {
    return (
      <div className="flex flex-col gap-2 p-4 bg-slate-950/50 rounded-2xl border border-white/10 text-center">
        <h4 className="text-white font-bold text-sm">🥊 Body Combat</h4>
        <p className="text-xs text-slate-400">El host está eligiendo al contrincante...</p>
      </div>
    );
  }

  // ── PASO 2 (solo host): número de golpes y asignar quién ataca / defiende ──
  if (bc.status === 'setup') {
    return (
      <div className="flex flex-col gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/10">
        <h4 className="text-white font-bold text-sm">
          🥊 Contrincante: <span className="text-red-400">{opponent?.name ?? '...'}</span>
        </h4>

        {isHost ? (
          <>
            <div>
              <label className="text-[10px] text-green-400 font-black tracking-wide uppercase block mb-1.5">
                Número de ataques / defensas
              </label>
              <input
                type="number"
                min={1}
                value={maxSelections}
                onChange={(e) => setBodyCombatMaxSelections(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-slate-900 border border-green-500/30 rounded-xl text-green-400 font-mono text-sm focus:outline-none focus:border-green-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-slate-400 font-black tracking-wide uppercase">¿Quién ataca?</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setBodyCombatRoles(user.id, bc.opponentId!)}
                  className="p-3 rounded-xl font-bold text-xs bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center gap-2"
                >
                  <Swords size={14} /> {user.name} ataca
                </button>
                <button
                  onClick={() => setBodyCombatRoles(bc.opponentId!, user.id)}
                  className="p-3 rounded-xl font-bold text-xs bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center gap-2"
                >
                  <Swords size={14} /> {opponent?.name} ataca
                </button>
              </div>
              <p className="text-[9px] text-slate-500 text-center">El otro jugador defenderá automáticamente</p>
            </div>

            <button
              onClick={() => setBodyCombatOpponent(bc.opponentId!)}
              className="text-[10px] text-slate-500 hover:text-slate-300 underline self-center"
            >
              Cambiar contrincante
            </button>
          </>
        ) : (
          <p className="text-xs text-slate-400 text-center py-4">
            Esperando a que el host reparta los roles de ataque y defensa...
          </p>
        )}
      </div>
    );
  }

  // ── PASO 3: selección de zonas (cuerpo humano + panel de conteo) ───────────
  if (bc.status === 'selecting') {
    return (
      <div className="flex flex-col gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-bold text-sm flex items-center gap-2">
            <Swords size={16} className="text-red-400" /> {attacker?.name}
          </h4>
          <span className="text-slate-500 text-xs">vs</span>
          <h4 className="text-white font-bold text-sm flex items-center gap-2">
            <Shield size={16} className="text-blue-400" /> {defender?.name}
          </h4>
        </div>

        <div className="flex justify-center gap-4 text-[10px] font-bold uppercase">
          <span className={bc.attackerReady ? 'text-emerald-400' : 'text-slate-500'}>
            {bc.attackerReady ? '✓' : '…'} Ataque listo
          </span>
          <span className={bc.defenderReady ? 'text-emerald-400' : 'text-slate-500'}>
            {bc.defenderReady ? '✓' : '…'} Defensa lista
          </span>
        </div>

        {myRole === 'spectator' ? (
          <p className="text-xs text-slate-400 text-center py-4">
            {attacker?.name} y {defender?.name} están eligiendo sus zonas en secreto...
          </p>
        ) : (
          <>
            <h5 className="text-white font-bold text-xs text-center">
              {myRole === 'attacker'
                ? `Elige ${maxSelections} golpe(s). Click: atacar zona · Click derecho: quitar`
                : `Elige ${maxSelections} bloqueo(s). Click: defender zona · Click derecho: quitar`}
            </h5>

            <BodySvg
              counts={counts}
              color={color}
              onLeft={addPart}
              onRight={removePart}
              maxed={draft.length >= maxSelections}
            />

            <div className="grid grid-cols-2 gap-y-2 gap-x-6 font-mono" style={{ color }}>
              {BODY_COMBAT_PARTS.map(part => (
                <div key={part.id} className="flex justify-between items-center text-xs">
                  <span>{part.label}:</span>
                  <span className="font-bold text-base">{counts[part.id] ?? 0}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-500 text-center">{draft.length} / {maxSelections} acciones asignadas</p>

            {myReady ? (
              <p className="text-xs text-emerald-400 text-center font-bold">
                ✓ Selección enviada. Esperando al rival...
              </p>
            ) : (
              <button
                onClick={confirm}
                disabled={draft.length === 0}
                className={`w-full py-2 rounded-xl text-white font-bold ${myRole === 'attacker' ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'} disabled:opacity-30`}
              >
                Confirmar {myRole === 'attacker' ? 'Ataque' : 'Defensa'}
              </button>
            )}
          </>
        )}

        {isHost && (
          <button
            onClick={resolveBodyCombat}
            disabled={!bc.attackerReady || !bc.defenderReady}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-bold mt-2 disabled:opacity-30"
          >
            Resolver Combate
          </button>
        )}
      </div>
    );
  }

  // ── PASO 4: resultado visible para todos ────────────────────────────────────
  if (bc.status === 'resolved' && bc.result) {
    const { result } = bc;
    // 🛡️ `hits` puede venir undefined (Firebase descarta objetos vacíos) o con el
    // marcador `__empty` que usamos para evitarlo. En ambos casos es defensa perfecta.
    const rawHits = result.hits ?? {};
    const safeHits: Record<string, number> = '__empty' in rawHits ? {} : rawHits;

    return (
      <div className="flex flex-col gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/10">
        <h4 className="text-white font-bold text-sm text-center">
          💥 {result.attackerName} atacó a {result.defenderName}
        </h4>

        <BodySvg counts={safeHits} color="#ef4444" />

        <div className="grid grid-cols-2 gap-y-2 gap-x-6 font-mono text-red-400">
          {BODY_COMBAT_PARTS.map(part => (
            <div key={part.id} className="flex justify-between items-center text-xs">
              <span>{part.label}:</span>
              <span className="font-bold text-base">{safeHits[part.id] ?? 0}</span>
            </div>
          ))}
        </div>

        {Object.keys(safeHits).length === 0 && (
          <p className="text-emerald-400 text-sm text-center font-bold">
            🛡️ ¡Defensa perfecta! Ningún golpe conectó.
          </p>
        )}

        {isHost && (
          <button
            onClick={resetBodyCombat}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl text-white font-bold flex items-center justify-center gap-2 text-xs"
          >
            <RotateCcw size={14} /> Nueva ronda
          </button>
        )}
      </div>
    );
  }

  return null;
};
