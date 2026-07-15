// components/BodyCombatShared.tsx
import React from 'react';
import { useGame, BODY_COMBAT_PARTS } from '../context/GameContext';

export const SVG_PARTS: Record<string, { shape: 'circle' | 'rect'; props: any }> = {
  head: { shape: 'circle', props: { cx: 100, cy: 50, r: 30 } },
  torso: { shape: 'rect', props: { x: 65, y: 90, width: 70, height: 120, rx: 15 } },
  'left-arm': { shape: 'rect', props: { x: 20, y: 95, width: 35, height: 100, rx: 17 } },
  'right-arm': { shape: 'rect', props: { x: 145, y: 95, width: 35, height: 100, rx: 17 } },
  'left-leg': { shape: 'rect', props: { x: 65, y: 220, width: 32, height: 130, rx: 15 } },
  'right-leg': { shape: 'rect', props: { x: 103, y: 220, width: 32, height: 130, rx: 15 } },
};

function partStyle(count: number, color: string, maxed: boolean) {
  const isSelected = count > 0;
  return {
    fill: isSelected ? `${color}33` : 'rgba(148,163,184,0.06)',
    stroke: isSelected ? color : '#475569',
    strokeWidth: isSelected ? 4 : 2,
    cursor: maxed && !isSelected ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
  };
}

export const BodySvg: React.FC<{
  counts?: Record<string, number>;
  color: string;
  size?: number;
  onLeft?: (id: string) => void;
  onRight?: (id: string) => void;
  maxed?: boolean;
}> = ({ counts, color, size = 170, onLeft, onRight, maxed }) => {
  const safeCounts = counts ?? {};
  return (
    <svg viewBox="0 0 200 400" style={{ width: size }} className="drop-shadow-[0_0_14px_rgba(0,0,0,0.45)] select-none mx-auto">
      {Object.entries(SVG_PARTS).map(([id, def]) => {
        const count = safeCounts[id] ?? 0;
        const style = partStyle(count, color, !!maxed);
        const handlers = {
          onClick: (e: React.MouseEvent) => { e.preventDefault(); onLeft?.(id); },
          onContextMenu: (e: React.MouseEvent) => { e.preventDefault(); onRight?.(id); },
        };
        return def.shape === 'circle'
          ? <circle key={id} {...def.props} style={style} {...handlers} />
          : <rect key={id} {...def.props} style={style} {...handlers} />;
      })}
    </svg>
  );
};

export { BODY_COMBAT_PARTS };

export function useBodyCombatController() {
  const {
    room, user, players,
    bodyCombatDraft, setBodyCombatDraft,
    setBodyCombatOpponent, setBodyCombatMaxSelections, setBodyCombatRoles,
    submitBodyCombatChoice, resolveBodyCombat, resetBodyCombat,
  } = useGame();

  const bc = room?.bodyCombat;
  const isHost = room?.hostId === user?.id;
  const maxSelections = bc?.maxSelections ?? 3;

  const myRole: 'attacker' | 'defender' | 'spectator' =
    bc?.attackerId === user?.id ? 'attacker'
    : bc?.defenderId === user?.id ? 'defender'
    : 'spectator';

  const opponent = bc?.opponentId ? players.find(p => p.id === bc.opponentId) : null;
  const attacker = bc?.attackerId ? players.find(p => p.id === bc.attackerId) : null;
  const defender = bc?.defenderId ? players.find(p => p.id === bc.defenderId) : null;

  const myReady = myRole === 'attacker' ? !!bc?.attackerReady : myRole === 'defender' ? !!bc?.defenderReady : false;
  const color = myRole === 'attacker' ? '#ef4444' : '#3b82f6';

  const counts: Record<string, number> = {};
  bodyCombatDraft.forEach(id => { counts[id] = (counts[id] ?? 0) + 1; });

  const addPart = (id: string) => {
    if (!bc || bc.status !== 'selecting' || myRole === 'spectator' || myReady) return;
    setBodyCombatDraft(prev => (prev.length >= maxSelections ? prev : [...prev, id]));
  };

  const removePart = (id: string) => {
    if (!bc || bc.status !== 'selecting' || myRole === 'spectator' || myReady) return;
    setBodyCombatDraft(prev => {
      const idx = prev.lastIndexOf(id);
      if (idx === -1) return prev;
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  };

  const confirm = async () => submitBodyCombatChoice(bodyCombatDraft);

  return {
    room, user, players, bc, isHost, maxSelections, myRole, myReady, color,
    opponent, attacker, defender, draft: bodyCombatDraft, counts,
    addPart, removePart, confirm,
    setBodyCombatOpponent, setBodyCombatMaxSelections, setBodyCombatRoles,
    resolveBodyCombat, resetBodyCombat,
  };
}
