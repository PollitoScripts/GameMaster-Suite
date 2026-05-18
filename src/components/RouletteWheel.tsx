import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';

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

    // Función pura encargada de pintar el canvas basándose en un ángulo de rotación específico
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

        // 2. Dibujar el texto de la opción
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(startAngle + arcSize / 2);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
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
        const progress = Math.min(elapsed / duration, 1);

        // Función de desaceleración idéntica en todos los clientes (Ease-Out Quad)
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentAngle = startRotation + (targetRotation - startRotation) * easeOutQuad(progress);

        draw(currentAngle);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animate();
    } else {
      // Si la rueda está quieta ('idle'), simplemente dibuja la rotación estática actual de la BD
      draw(room?.currentRotation || 0);
    }

    // Limpieza del frame de animación si el componente se desmonta inesperadamente
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

  }, [wedges, room?.status, room?.currentRotation, room?.targetRotation, room?.spinStartAt, room?.duration]);

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-slate-800"
      />
    </div>
  );
};