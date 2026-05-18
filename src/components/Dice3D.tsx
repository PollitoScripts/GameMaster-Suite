import React, { useEffect, useRef } from 'react';

interface Dice3DProps {
  seed: number;
  results: number[];
  status: 'idle' | 'spinning';
  duration: number;
  spinStartAt?: number;
}

// ── 📐 GEOMETRÍA DEL ICOSAEDRO (Tu motor matemático puro) ─────────────────
const PHI = (1 + Math.sqrt(5)) / 2;
const VLEN = Math.sqrt(1 + PHI * PHI);
const VERTS = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]
].map(([x, y, z]) => [x / VLEN, y / VLEN, z / VLEN]);

const FACES = [
  [0, 11, 5], [0, 5, 1],  [0, 1, 7],   [0, 7, 10],  [0, 10, 11],
  [1, 5, 9],  [5, 11, 4], [11, 10, 2], [10, 7, 6],  [7, 1, 8],
  [3, 9, 4],  [3, 4, 2],  [3, 2, 6],   [3, 6, 8],   [3, 8, 9],
  [4, 9, 5],  [2, 4, 11], [6, 2, 10],  [8, 6, 7],   [9, 8, 1]
];

// ── 🧮 OPERADORES DE ROTACIÓN 3D Y PERSPECTIVA ─────────────────────────────
const rotX = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x, y * c - z * s, y * s + z * c]); };
const rotY = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x * c + z * s, y, -x * s + z * c]); };
const rotZ = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x * c - y * s, x * s + y * c, z]); };
const applyRot = (pts: number[][], rx: number, ry: number, rz: number) => rotZ(rotY(rotX(pts, rx), ry), rz);

function faceNormalVec(pts: number[][], face: number[]) {
  const [ax, ay, az] = pts[face[0]]; const [bx, by, bz] = pts[face[1]]; const [ex, ey, ez] = pts[face[2]];
  const nx = (by - ay) * (ez - az) - (bz - az) * (ey - ay); const ny = (bz - az) * (ex - ax) - (bx - ax) * (ez - az); const nz = (bx - ax) * (ey - ay) - (by - ay) * (ex - ax);
  const l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1; return [nx / l, ny / l, nz / l];
}
const getStopRotation = () => {
  const n0 = faceNormalVec(VERTS, FACES[0]); const ry = -Math.atan2(n0[0], n0[2]); const pts1 = rotY(VERTS, ry); const n1 = faceNormalVec(pts1, FACES[0]); const rx = -Math.atan2(-n1[1], n1[2]); return { rx, ry, rz: 0 };
};
const STOP_ROT = getStopRotation();
const project = ([x, y, z]: number[], cx: number, cy: number, r: number, camZ = 3) => { const s = camZ / (camZ - z); return [cx + x * r * s, cy - y * r * s]; };

function seededRandom(seed: number) { const x = Math.sin(seed) * 10000; return x - Math.floor(x); }

function makeFaceNumbers(roll: number, baseSeed: number) {
  const nums = Array.from({ length: 20 }, (_, i) => i + 1);
  let currentSeed = baseSeed;
  for (let i = nums.length - 1; i > 0; i--) {
    currentSeed += 0.123;
    const rand = seededRandom(currentSeed);
    const j = Math.floor(rand * (i + 1));
    const temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
  }
  const idx = nums.indexOf(roll);
  const temp = nums[0]; nums[0] = nums[idx]; nums[idx] = temp;
  return nums;
}

export const Dice3D: React.FC<Dice3DProps> = ({ seed, results, status, duration, spinStartAt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!results || results.length === 0) return;
    
    const canvases = containerRef.current?.querySelectorAll('canvas');
    if (!canvases || canvases.length === 0) return;

    const SIZE = 130; 

    // Mapeo físico determinista de cada D20
    const diceMeta = Array.from(canvases).map((canvas, i) => {
      const ctx = canvas.getContext('2d')!;
      const dieSeed = seed + (i * 7.43); 
      
      return {
        canvas,
        ctx,
        result: results[i] || 20,
        faceNums: makeFaceNumbers(results[i] || 20, dieSeed),
        rx0: seededRandom(dieSeed * 1) * Math.PI * 2,
        ry0: seededRandom(dieSeed * 2) * Math.PI * 2,
        rz0: seededRandom(dieSeed * 3) * Math.PI * 2,
        drx: (seededRandom(dieSeed * 4) < 0.5 ? 1 : -1) * (12 + seededRandom(dieSeed * 5) * 8), // Aumentada velocidad de giro
        dry: (seededRandom(dieSeed * 6) < 0.5 ? 1 : -1) * (10 + seededRandom(dieSeed * 7) * 8),
        drz: (seededRandom(dieSeed * 8) < 0.5 ? 1 : -1) * (8 + seededRandom(dieSeed * 9) * 6),
        delay: i * 120 
      };
    });

    // Forzamos un fallback temporal local si el servidor Firebase tarda en actualizar el timestamp real
    const startTime = spinStartAt || Date.now();

    const drawAll = () => {
      let anyRolling = false;
      const now = Date.now();

      diceMeta.forEach((m) => {
        const ctx = m.ctx;
        ctx.clearRect(0, 0, SIZE, SIZE);
        const cx = SIZE / 2; const cy = SIZE / 2; const r = SIZE * 0.40;

        let ax = m.rx0, ay = m.ry0, az = m.rz0;

        if (status === 'spinning') {
          const elapsed = (now - startTime) - m.delay;
          
          if (elapsed > 0) {
            const progress = Math.min(elapsed / duration, 1);
            if (progress < 1) {
              anyRolling = true;
              const ease = 1 - Math.pow(1 - progress, 3); // Easing out cúbico
              const t = elapsed / 1000;

              ax = m.rx0 + m.drx * t * (1 - ease * 0.7) + STOP_ROT.rx * ease * 0.5;
              ay = m.ry0 + m.dry * t * (1 - ease * 0.7) + STOP_ROT.ry * ease * 0.5;
              az = m.rz0 + m.drz * t * (1 - ease * 0.7) + STOP_ROT.rz * ease * 0.5;
            } else {
              // Fin exacto del trayecto cinético: encajar cara ganadora
              ax = STOP_ROT.rx; ay = STOP_ROT.ry; az = STOP_ROT.rz;
            }
          }
        } else {
          ax = STOP_ROT.rx; ay = STOP_ROT.ry; az = STOP_ROT.rz;
        }

        const pts = applyRot(VERTS, ax, ay, az);
        const sorted = FACES.map((face, fi) => ({ fi, zAvg: (pts[face[0]][2] + pts[face[1]][2] + pts[face[2]][2]) / 3 })).sort((a, b) => a.zAvg - b.zAvg);

        for (const { fi } of sorted) {
          const face = FACES[fi];
          const p2d = [project(pts[face[0]], cx, cy, r), project(pts[face[1]], cx, cy, r), project(pts[face[2]], cx, cy, r)];
          const [ax2, ay2, az2] = pts[face[0]]; const [bx, by, bz] = pts[face[1]]; const [ex, ey, ez] = pts[face[2]];
          const nx = (by - ay2) * (ez - az2) - (bz - az2) * (ey - ay2); const ny = (bz - az2) * (ex - ax2) - (bx - ax2) * (ez - az2); const nz = (bx - ax2) * (ey - ay2) - (by - ay2) * (ex - ax2);
          const nlen = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;

          const lit = Math.max(0.15, (nx * 0.3 + ny * 0.5 + nz * 0.8) / nlen);
          const num = m.faceNums[fi];
          
          let base = [99, 102, 241]; 
          if (num === 20) base = [46, 204, 113];     // Crítico
          else if (num === 1) base = [255, 77, 77];   // Pifia

          ctx.beginPath(); ctx.moveTo(p2d[0][0], p2d[0][1]); ctx.lineTo(p2d[1][0], p2d[1][1]); ctx.lineTo(p2d[2][0], p2d[2][1]); ctx.closePath();
          ctx.fillStyle = `rgb(${Math.round(base[0] * lit)},${Math.round(base[1] * lit)},${Math.round(base[2] * lit)})`; ctx.fill();
          ctx.strokeStyle = 'rgba(15, 23, 42, 0.7)'; ctx.lineWidth = 1.2; ctx.stroke();

          const nzNorm = nz / nlen;
          if (nzNorm > 0.15) {
            const mcx = (p2d[0][0] + p2d[1][0] + p2d[2][0]) / 3; const mcy = (p2d[0][1] + p2d[1][1] + p2d[2][1]) / 3;
            const area = Math.abs((p2d[1][0] - p2d[0][0]) * (p2d[2][1] - p2d[0][1]) - (p2d[2][0] - p2d[0][0]) * (p2d[1][1] - p2d[0][1])) / 2;
            const fontSize = Math.max(7, Math.sqrt(area) * 0.58 * nzNorm);

            ctx.save(); ctx.translate(mcx, mcy);
            ctx.font = `900 ${fontSize}px Inter, system-ui, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.strokeStyle = 'rgba(15, 23, 42, 0.95)'; ctx.lineWidth = fontSize * 0.20; ctx.strokeText(String(num), 0, 0);
            ctx.fillStyle = '#ffffff'; ctx.fillText(String(num), 0, 0); ctx.restore();
          }
        }
      });

      // Si Firebase está en modo 'spinning' o algún dado aún tiene inercia, pedimos frame
      if (status === 'spinning' || anyRolling) {
        requestRef.current = requestAnimationFrame(drawAll);
      }
    };

    drawAll();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [seed, results, status, duration, spinStartAt]);

  return (
    /* ✨ LIMPIEZA DE UI EXTREMA: 
      Eliminados todos los wrappers negros repetidos. 
      Ahora es un contenedor flex directo, adaptativo y transparente.
    */
    <div 
      ref={containerRef} 
      className="flex flex-wrap items-center justify-center gap-6 p-2 w-full transition-all duration-300"
    >
      {results.map((_, idx) => (
        <canvas 
          key={idx} 
          width={130} 
          height={130} 
          className="w-[130px] h-[130px] drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)] animate-fade-in" 
        />
      ))}
    </div>
  );
};