import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';

// ─── 🎨 FUNCIÓN AUXILIAR DE CONTRASTE INTELIGENTE ─────────────────────────
// Recibe un color en HEX (ej: "#ffffff") y devuelve "#000000" o "#ffffff"
const getContrastColor = (hexColor: string): string => {
  // Por si viene vacío o mal formateado
  if (!hexColor) return '#ffffff';
  
  // Limpiamos el '#' si lo lleva
  const hex = hexColor.replace('#', '');
  
  // Convertimos a valores RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Fórmula de luminosidad percibida por el ojo humano (YIQ)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Si es brillante (mayor a 128), el texto debe ser negro. Si no, blanco.
  return yiq >= 128 ? '#0f172a' : '#ffffff'; 
};

export const RouletteWheel: React.FC = () => {
  const { room } = useGame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const wedges = room?.wedges || [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || wedges.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const arcSize = (2 * Math.PI) / wedges.length;

    let animationFrameId: number;

    const draw = (rotationDeg: number) => {
      ctx.clearRect(0, 0, size, size);

      ctx.save();
      ctx.translate(center, center);
      const currentRotationRad = (rotationDeg * Math.PI) / 180;
      ctx.rotate(currentRotationRad);
      ctx.translate(-center, -center);

      wedges.forEach((wedge, index) => {
        const startAngle = index * arcSize;
        const endAngle = startAngle + arcSize;

        // 1. Dibujar la porción de la cuña
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = wedge.color || '#334155';
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 2. Dibujar el texto de la opción con contraste dinámico
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(startAngle + arcSize / 2);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        
        // 👇 AQUÍ CAMBIAMOS EL COLOR DEL TEXTO SEGÚN EL FONDO DE LA CUÑA
        ctx.fillStyle = getContrastColor(wedge.color); 
        
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(wedge.name, radius - 20, 0);
        ctx.restore();
      });

      ctx.restore();

      // 3. Dibujar el pin estático del centro de la ruleta
      ctx.beginPath();
      ctx.arc(center, center, 18, 0, 2 * Math.PI);
      ctx.fillStyle = '#0f172a';
      ctx.fill();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    // LÓGICA DE ANIMACIÓN INTERNA MULTIPLAYER
    if (room?.status === 'spinning' && room.spinStartAt) {
      const startRotation = room.currentRotation % 360;
      const targetRotation = room.targetRotation;
      const duration = room.duration;
      const startTime = room.spinStartAt;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        
        if (elapsed >= duration) {
          draw(targetRotation);
          return;
        }

        const progress = elapsed / duration;
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentAngle = startRotation + (targetRotation - startRotation) * easeOutQuad(progress);

        draw(currentAngle);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    } else {
      draw(room?.currentRotation || 0);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [wedges, room?.id, room?.status, room?.currentRotation, room?.targetRotation, room?.spinStartAt, room?.duration]);

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center select-none">
      
      {/* FLECHA / PUNTERO FÍSICO SUPERIOR DE LA RULETA */}
      <div 
        className={`absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-0 h-0 
          border-l-[16px] border-l-transparent 
          border-r-[16px] border-r-transparent 
          border-t-[32px] border-t-rose-500 
          drop-shadow-[0_6px_8px_rgba(0,0,0,0.7)]
          transition-transform duration-200
          ${room?.status === 'spinning' ? 'animate-pulse scale-110' : ''}`}
      />

      {/* CANVAS DE LA RULETA */}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-slate-800 z-10"
      />
    </div>
  );
};