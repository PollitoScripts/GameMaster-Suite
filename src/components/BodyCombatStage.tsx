// components/BodyCombatStage.tsx
import React from 'react';
import { Swords, Shield } from 'lucide-react';
import { BodySvg, useBodyCombatController } from './BodyCombatShared';

export const BodyCombatStage: React.FC = () => {
  const {
    room, bc, myRole, myReady, color, maxSelections,
    opponent, attacker, defender, draft, counts,
    addPart, removePart,
  } = useBodyCombatController();

  if (!room || !bc) return null;

  // Sin contrincante o roles todavía: cuerpo neutro en reposo
  if (!bc.opponentId || bc.status === 'setup') {
    return (
      <div className="flex flex-col items-center gap-4">
        <BodySvg counts={{}} color="#64748b" size={260} />
        <p className="text-slate-500 text-sm text-center max-w-xs">
          {!bc.opponentId
            ? 'El host está eligiendo al contrincante...'
            : `Preparando el combate contra ${opponent?.name ?? '...'}...`}
        </p>
      </div>
    );
  }

  // Selección en curso: solo el atacante/defensor ven su propio avance;
  // los espectadores ven el cuerpo en reposo (nunca las elecciones ajenas).
  if (bc.status === 'selecting') {
    const canSeeOwnPreview = myRole !== 'spectator';

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-sm font-bold">
          <span className="flex items-center gap-1.5 text-red-400"><Swords size={16} /> {attacker?.name}</span>
          <span className="text-slate-600">vs</span>
          <span className="flex items-center gap-1.5 text-blue-400"><Shield size={16} /> {defender?.name}</span>
        </div>

        <BodySvg
          counts={canSeeOwnPreview ? counts : {}}
          color={canSeeOwnPreview ? color : '#64748b'}
          size={260}
          onLeft={canSeeOwnPreview ? addPart : undefined}
          onRight={canSeeOwnPreview ? removePart : undefined}
          maxed={draft.length >= maxSelections}
        />

        {canSeeOwnPreview ? (
          <p className="text-xs text-slate-400 text-center">
            {myReady
              ? '✓ Selección enviada, esperando al rival...'
              : `Tu vista privada — ${draft.length} / ${maxSelections} zonas marcadas`}
          </p>
        ) : (
          <p className="text-xs text-slate-500 text-center">
            Ambos jugadores están eligiendo sus zonas en secreto...
          </p>
        )}
      </div>
    );
  }

  // Resultado: mismo cuerpo, ahora con el resultado público del combate
  if (bc.status === 'resolved' && bc.result) {
    // 🛡️ `hits` puede venir undefined (Firebase descarta objetos vacíos) o con el
    // marcador `__empty` que usamos para evitar justo ese problema. En ambos casos
    // tratamos el combate como una defensa perfecta, sin golpes reales que mostrar.
    const rawHits = bc.result.hits ?? {};
    const safeHits: Record<string, number> = '__empty' in rawHits ? {} : rawHits;
    const isPerfectDefense = Object.keys(safeHits).length === 0;

    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm font-bold text-white text-center">
          💥 {bc.result.attackerName} atacó a {bc.result.defenderName}
        </p>
        <BodySvg counts={safeHits} color="#ef4444" size={260} />
        {isPerfectDefense && (
          <p className="text-emerald-400 text-sm font-bold">🛡️ ¡Defensa perfecta!</p>
        )}
      </div>
    );
  }

  return null;
};
