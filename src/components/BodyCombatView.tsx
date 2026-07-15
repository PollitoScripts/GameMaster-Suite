import React from 'react';
import { useGame } from '../context/GameContext';

export const BodyCombatView: React.FC = () => {
  const { room, updateGameField, currentUser } = useGame();

  const isHost = room?.hostId === currentUser?.id;
  const maxSelections = room?.bodyCombatMaxSelections ?? 7;

  // Seleccionamos la lista según el rol del usuario actual
  const myTargets = isHost ? (room?.hostTargets || []) : (room?.opponentTargets || []);

  const handlePartClick = async (partId: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    // Lógica para quitar (Clic derecho)
    if (event.type === 'contextmenu') {
      const lastIndex = myTargets.lastIndexOf(partId);
      if (lastIndex > -1) {
        const newTargets = [...myTargets];
        newTargets.splice(lastIndex, 1);
        await updateGameField({ [isHost ? 'hostTargets' : 'opponentTargets']: newTargets });
      }
      return;
    }

    // Lógica para añadir (Clic izquierdo)
    if (myTargets.length < maxSelections) {
      const newTargets = [...myTargets, partId];
      await updateGameField({ [isHost ? 'hostTargets' : 'opponentTargets']: newTargets });
    }
  };

  const getCountForPart = (partId: string) => myTargets.filter(t => t === partId).length;

  const getStyle = (partId: string) => {
    const count = getCountForPart(partId);
    const isSelected = count > 0;
    return {
      fill: isSelected ? `rgba(74, 222, 128, ${Math.min(0.2 + (count * 0.15), 0.8)})` : 'rgba(74, 222, 128, 0.05)',
      stroke: isSelected ? '#22c55e' : '#4ade80',
      strokeWidth: isSelected ? 4 : 2,
      cursor: myTargets.length >= maxSelections && !isSelected ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease'
    };
  };

  const parts = [
    { id: 'head', label: 'Head' }, { id: 'torso', label: 'Torso' },
    { id: 'left-arm', label: 'Left Arm' }, { id: 'right-arm', label: 'Right Arm' },
    { id: 'left-leg', label: 'Left Leg' }, { id: 'right-leg', label: 'Right Leg' }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 p-6">
      
      {/* SVG Central */}
      <div className="flex-1 flex justify-center">
        <svg viewBox="0 0 200 400" className="w-[250px] drop-shadow-[0_0_10px_rgba(74,222,128,0.3)] select-none">
          {/* Cuerpos (mismo código SVG que antes) */}
          <circle cx="100" cy="50" r="30" onClick={(e) => handlePartClick('head', e)} onContextMenu={(e) => handlePartClick('head', e)} style={getStyle('head')} />
          <rect x="65" y="90" width="70" height="120" rx="15" onClick={(e) => handlePartClick('torso', e)} onContextMenu={(e) => handlePartClick('torso', e)} style={getStyle('torso')} />
          <rect x="20" y="95" width="35" height="100" rx="17" onClick={(e) => handlePartClick('left-arm', e)} onContextMenu={(e) => handlePartClick('left-arm', e)} style={getStyle('left-arm')} />
          <rect x="145" y="95" width="35" height="100" rx="17" onClick={(e) => handlePartClick('right-arm', e)} onContextMenu={(e) => handlePartClick('right-arm', e)} style={getStyle('right-arm')} />
          <rect x="65" y="220" width="32" height="130" rx="15" onClick={(e) => handlePartClick('left-leg', e)} onContextMenu={(e) => handlePartClick('left-leg', e)} style={getStyle('left-leg')} />
          <rect x="103" y="220" width="32" height="130" rx="15" onClick={(e) => handlePartClick('right-leg', e)} onContextMenu={(e) => handlePartClick('right-leg', e)} style={getStyle('right-leg')} />
        </svg>
      </div>

      {/* Panel de Control Lateral */}
      <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl w-full max-w-sm flex flex-col gap-6">
        
        {/* Estadísticas (El grid que pediste) */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 font-mono text-green-500">
          {parts.map(part => (
            <div key={part.id} className="flex justify-between items-center">
              <span className="text-xs">{part.label}:</span>
              <span className="font-bold text-lg">{getCountForPart(part.id)}</span>
            </div>
          ))}
        </div>

        {/* Botón Resolver */}
        <button 
          onClick={() => console.log('Resolviendo combate...')}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95"
        >
          Resolver Combate
        </button>

        <p className="text-[10px] text-slate-500 text-center uppercase">
          {myTargets.length} / {maxSelections} acciones asignadas
        </p>
      </div>
    </div>
  );
};