import React from 'react';
import { useGame } from '../context/GameContext'; // 👈 Importamos el contexto de juego
import { RotateCcw } from 'lucide-react';

// Definición de los tipos de dados disponibles
interface TipoDado {
  id: string;
  nombre: string;
  caras: number;
  color: string;
}

const DADOS_DISPONIBLES: TipoDado[] = [
  { id: 'd4', nombre: 'D4', caras: 4, color: 'from-red-600 to-red-800' },
  { id: 'd6', nombre: 'D6', caras: 6, color: 'from-blue-600 to-blue-800' },
  { id: 'd8', nombre: 'D8', caras: 8, color: 'from-green-600 to-green-800' },
  { id: 'd10', nombre: 'D10', caras: 10, color: 'from-purple-600 to-purple-800' },
  { id: 'd12', nombre: 'D12', caras: 12, color: 'from-yellow-600 to-yellow-800' },
  { id: 'd100', nombre: 'D100', caras: 100, color: 'from-teal-600 to-teal-800' },
];

export const DadosDano: React.FC = () => {
  // ─── CONEXIÓN CON EL CONTEXTO MULTIUGADOR ───────────────────────────────
  const { room, user, rollDamageDice } = useGame();

  // Validaciones de seguridad
  const isHost = room?.hostId === user?.id;

  // Sincronización del estado: si eres el Host modificas localmente; 
  // si eres jugador, lees lo que está guardado en Firebase de la sala.
  const seleccionados = isHost 
    ? (room?.damageDiceConfig ?? { d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d100: 0 })
    : (room?.damageDiceConfig ?? { d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d100: 0 });

  // Función auxiliar interna para actualizar los valores en Firebase (solo para el Host)
  const actualizarDb = async (nuevoPool: Record<string, number>) => {
    if (!isHost || !room?.id) return;
    try {
      const { ref, update } = await import("firebase/database");
      const { rtdb } = await import("../config/firebase");
      await update(ref(rtdb, `rooms/${room.id}`), {
        damageDiceConfig: nuevoPool
      });
    } catch (error) {
      console.error("Error al sincronizar pool de dados:", error);
    }
  };

  // Modificar la cantidad de dados (+1 o -1)
  const ajustarCantidad = (id: string, incremento: number) => {
    if (!isHost) return; // Un jugador no puede tocar el pool del Máster
    const nuevaCantidad = Math.max(0, (seleccionados[id] || 0) + incremento);
    const nuevoPool = { ...seleccionados, [id]: nuevaCantidad };
    actualizarDb(nuevoPool);
  };

  // Resetear toda la selección a cero
  const limpiarSeleccion = () => {
    if (!isHost) return;
    const poolLimpio = { d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d100: 0 };
    actualizarDb(poolLimpio);
  };

  // Cantidad total de dados en la reserva actual
  const totalDados = Object.values(seleccionados).reduce((a, b) => a + b, 0);

  const manejarLanzamiento = () => {
    if (!isHost || totalDados === 0) return;
    console.log("Lanzando via RTDB:", seleccionados);
    rollDamageDice(seleccionados); // 👈 Dispara la animación en red
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 text-white shadow-2xl max-w-4xl mx-auto w-full">
      {/* Cabecera */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-wide text-gray-100 flex items-center gap-2">
            ⚔️ Dados de Daño y Porcentajes
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {isHost 
              ? "Prepara la reserva de dados para los ataques de los monstruos o peligros" 
              : "El Director de Juego está preparando una tirada de dados..."}
          </p>
        </div>
        
        {totalDados > 0 && isHost && (
          <button 
            onClick={limpiarSeleccion}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded-lg transition"
          >
            <RotateCcw size={13} /> Limpiar
          </button>
        )}
      </div>

      {/* Rejilla de Dados */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {DADOS_DISPONIBLES.map((dado) => {
          const cantidad = seleccionados[dado.id] || 0;
          return (
            <div 
              key={dado.id} 
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col justify-between items-center relative overflow-hidden group hover:border-gray-700 transition"
            >
              {/* Indicador de cantidad superior */}
              {cantidad > 0 && (
                <span className="absolute top-2 right-3 bg-indigo-600 text-white text-xs font-black px-2 py-0.5 rounded-full animate-pulse">
                  x{cantidad}
                </span>
              )}

              <span className="text-sm font-bold text-gray-300 mb-2">{dado.nombre}</span>

              {/* Icono / Botón visual del dado */}
              <button
                onClick={() => ajustarCantidad(dado.id, 1)}
                disabled={!isHost}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${dado.color} flex items-center justify-center shadow-lg transform ${isHost ? 'group-hover:scale-105 active:scale-95 hover:brightness-110' : 'cursor-default'} transition duration-150 text-2xl font-black text-white/90 border border-white/10`}
              >
                d{dado.caras}
              </button>

              {/* Selectores de cantidad (Solo interactivos para el Máster) */}
              <div className="flex items-center gap-4 mt-4 w-full justify-center">
                <button
                  onClick={() => ajustarCantidad(dado.id, -1)}
                  disabled={cantidad === 0 || !isHost}
                  className="w-7 h-7 flex items-center justify-center bg-gray-800 rounded-md border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-30 disabled:pointer-events-none font-bold text-sm"
                >
                  -
                </button>
                <span className="font-mono text-sm font-bold w-4 text-center">
                  {cantidad}
                </span>
                <button
                  onClick={() => ajustarCantidad(dado.id, 1)}
                  disabled={!isHost}
                  className="w-7 h-7 flex items-center justify-center bg-gray-800 rounded-md border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-30 disabled:pointer-events-none font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón de Lanzamiento de la reserva */}
      <div className="border-t border-gray-900 pt-5 flex justify-end">
        <button
          onClick={manejarLanzamiento}
          disabled={totalDados === 0 || !isHost}
          className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 disabled:text-gray-500 rounded-xl text-sm font-bold tracking-wider uppercase transition shadow-lg shadow-indigo-600/10 active:scale-98 disabled:pointer-events-none"
        >
          {!isHost 
            ? `Esperando lanzamiento (${totalDados} dados preparados)`
            : totalDados === 0 
              ? 'Selecciona dados' 
              : `Lanzar ${totalDados} ${totalDados === 1 ? 'dado' : 'dados'} a la mesa`}
        </button>
      </div>
    </div>
  );
};