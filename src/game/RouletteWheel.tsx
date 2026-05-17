import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import confetti from 'canvas-confetti';

export const RouletteWheel: React.FC = () => {
  const { room } = useGame();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTickAngle = useRef<number>(0);

  const playTickSound = () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  };

  useEffect(() => {
    if (!room || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 500;
    canvas.width = size;
    canvas.height = size;
    const center = size / 2;
    const radius = size / 2 - 15;
    const wedgeCount = room.wedges.length;
    const anglePerWedge = (2 * Math.PI) / wedgeCount;

    const draw = (deg: number) => {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate((deg * Math.PI) / 180);

      room.wedges.forEach((wedge, index) => {
        const startAngle = index * anglePerWedge;
        const endAngle = startAngle + anglePerWedge;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = wedge.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();

        ctx.save();
        ctx.rotate(startAngle + anglePerWedge / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px Inter, sans-serif';
        ctx.fillText(wedge.name, radius - 25, 5);
        ctx.restore();
      });

      ctx.restore();
      ctx.beginPath();
      ctx.arc(center, center, 32, 0, 2 * Math.PI);
      ctx.fillStyle = '#070a13';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#6366f1';
      ctx.stroke();
    };

    let startTimestamp: number | null = null;
    const duration = room.duration;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const currentRotation = room.currentRotation + (room.targetRotation - room.currentRotation) * eased;

      draw(currentRotation);

      if (Math.abs(currentRotation - lastTickAngle.current) >= (360 / wedgeCount)) {
        playTickSound();
        lastTickAngle.current = currentRotation;
        if (navigator.vibrate) navigator.vibrate(12);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        if (room.status === 'spinning') {
          confetti({ particleCount: 130, spread: 75, origin: { y: 0.6 } });
          updateDoc(doc(db, 'rooms', room.id), {
            status: 'idle',
            currentRotation: room.targetRotation % 360
          });
        }
      }
    };

    if (room.status === 'spinning') {
      animationRef.current = requestAnimationFrame(step);
    } else {
      draw(room.currentRotation);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [room?.status, room?.targetRotation, room?.wedges]);

  return (
    <div className="relative flex flex-col items-center justify-center p-6 bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl">
      <div className="absolute top-4 z-10 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[28px] border-t-indigo-500 drop-shadow-[0_4px_12px_rgba(99,102,241,0.6)]" />
      <canvas ref={canvasRef} className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full drop-shadow-[0_0_35px_rgba(99,102,241,0.2)]" />
    </div>
  );
};