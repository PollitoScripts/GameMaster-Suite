import React, { useEffect, useRef, useState } from 'react';

interface Dice3DProps {
  seed: number;
  results: number[];
  status: 'idle' | 'spinning';
  duration: number;
  spinStartAt?: number;
  mode?: 'd20' | 'damage';
  pool?: Record<string, number>;
  bonus?: number;
}

interface Geometria {
  verts: number[][];
  faces: number[][]; 
}

const GEOMETRIAS: Record<string, Geometria> = {
  d4: {
    verts: [
      [1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]
    ].map(([x, y, z]) => { const l = Math.sqrt(x*x+y*y+z*z); return [x/l, y/l, z/l]; }),
    faces: [[0, 2, 1], [0, 1, 3], [0, 3, 2], [1, 2, 3]]
  },
  d6: {
    verts: [
      [-1,-1,-1], [1,-1,-1], [1,1,-1], [-1,1,-1],
      [-1,-1,1],  [1,-1,1],  [1,1,1],  [-1,1,1]
    ].map(([x, y, z]) => { const l = Math.sqrt(x*x+y*y+z*z); return [x/l, y/l, z/l]; }),
    faces: [
      [4, 5, 6], [4, 6, 7], 
      [0, 3, 2], [0, 2, 1], 
      [1, 2, 6], [1, 6, 5], 
      [0, 4, 7], [0, 7, 3], 
      [2, 3, 7], [2, 7, 6], 
      [0, 1, 5], [0, 5, 4]  
    ]
  },
  d8: {
    verts: [
      [0,0,1], [1,0,0], [0,1,0], [-1,0,0], [0,-1,0], [0,0,-1]
    ],
    faces: [
      [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1],
      [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4]
    ]
  },
  d10: {
    verts: [
      [0, 0, 1],    
      [0, 0, -1],   
      [Math.cos(0 * Math.PI * 2 / 5), Math.sin(0 * Math.PI * 2 / 5), 0],
      [Math.cos(1 * Math.PI * 2 / 5), Math.sin(1 * Math.PI * 2 / 5), 0],
      [Math.cos(2 * Math.PI * 2 / 5), Math.sin(2 * Math.PI * 2 / 5), 0],
      [Math.cos(3 * Math.PI * 2 / 5), Math.sin(3 * Math.PI * 2 / 5), 0],
      [Math.cos(4 * Math.PI * 2 / 5), Math.sin(4 * Math.PI * 2 / 5), 0]
    ].map(([x, y, z]) => { const l = Math.sqrt(x*x+y*y+z*z); return [x/l, y/l, z/l]; }),
    faces: [
      [0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 6], [0, 6, 2],
      [1, 3, 2], [1, 4, 3], [1, 5, 4], [1, 6, 5], [1, 2, 6]
    ]
  },
  d20: {
    verts: [
      [-1, (1+Math.sqrt(5))/2, 0], [1, (1+Math.sqrt(5))/2, 0], [-1, -((1+Math.sqrt(5))/2), 0], [1, -((1+Math.sqrt(5))/2), 0],
      [0, -1, (1+Math.sqrt(5))/2], [0, 1, (1+Math.sqrt(5))/2], [0, -1, -((1+Math.sqrt(5))/2), 0], [0, 1, -((1+Math.sqrt(5))/2)],
      [(1+Math.sqrt(5))/2, 0, -1], [(1+Math.sqrt(5))/2, 0, 1], [-((1+Math.sqrt(5))/2), 0, -1], [-((1+Math.sqrt(5))/2), 0, 1]
    ].map(([x, y, z]) => { const l = Math.sqrt(x*x+y*y+z*z); return [x/l, y/l, z/l]; }),
    faces: [
      [0, 11, 5], [0, 5, 1],  [0, 1, 7],   [0, 7, 10],  [0, 10, 11],
      [1, 5, 9],  [5, 11, 4], [11, 10, 2], [10, 7, 6],  [7, 1, 8],
      [3, 9, 4],  [3, 4, 2],  [3, 2, 6],   [3, 6, 8],   [3, 8, 9],
      [4, 9, 5],  [2, 4, 11], [6, 2, 10],  [8, 6, 7],   [9, 8, 1]
    ]
  }
};
GEOMETRIAS.d12 = GEOMETRIAS.d20;
GEOMETRIAS.d100 = GEOMETRIAS.d10;

const CONFIG_DADOS: Record<string, { tipo: string; caras: number; colorRgb: [number, number, number] }> = {
  d4: { tipo: 'd4', caras: 4, colorRgb: [220, 38, 38] },
  d6: { tipo: 'd6', caras: 6, colorRgb: [37, 99, 235] },
  d8: { tipo: 'd8', caras: 8, colorRgb: [22, 163, 74] },
  d10: { tipo: 'd10', caras: 10, colorRgb: [147, 51, 234] },
  d12: { tipo: 'd12', caras: 12, colorRgb: [202, 138, 4] },
  d100: { tipo: 'd100', caras: 100, colorRgb: [13, 148, 136] },
};

const rotX = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x, y * c - z * s, y * s + z * c]); };
const rotY = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x * c + z * s, y, -x * s + z * c]); };
const rotZ = (pts: number[][], a: number) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y, z]) => [x * c - y * s, x * s + y * c, z]); };
const applyRot = (pts: number[][], rx: number, ry: number, rz: number) => rotZ(rotY(rotX(pts, rx), ry), rz);

function faceNormalVec(pts: number[][], face: number[]) {
  const [ax, ay, az] = pts[face[0]]; const [bx, by, bz] = pts[face[1]]; const [ex, ey, ez] = pts[face[2]];
  const nx = (by - ay) * (ez - az) - (bz - az) * (ey - ay); const ny = (bz - az) * (ex - ax) - (bx - ax) * (ez - az); const nz = (bx - ax) * (ey - ay) - (by - ay) * (ex - ax);
  const l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1; return [nx / l, ny / l, nz / l];
}
function getStopRotation(geo: Geometria) {
  const n0 = faceNormalVec(geo.verts, geo.faces[0]); const ry = -Math.atan2(n0[0], n0[2]); const pts1 = rotY(geo.verts, ry); const n1 = faceNormalVec(pts1, geo.faces[0]); const rx = -Math.atan2(-n1[1], n1[2]); return { rx, ry, rz: 0 };
}
const project = ([x, y, z]: number[], cx: number, cy: number, r: number, camZ = 3) => { const s = camZ / (camZ - z); return [cx + x * r * s, cy - y * r * s]; };
function seededRandom(seed: number) { const x = Math.sin(seed) * 10000; return x - Math.floor(x); }

function makeFaceNumbers(roll: number, baseSeed: number, totalCaras: number, totalTriangulos: number) {
  if (totalCaras === 6) {
    const carasUnicas = [1, 2, 3, 4, 5, 6];
    let currentSeed = baseSeed;
    for (let i = carasUnicas.length - 1; i > 0; i--) {
      currentSeed += 0.123;
      const rand = seededRandom(currentSeed);
      const j = Math.floor(rand * (i + 1));
      const temp = carasUnicas[i]; carasUnicas[i] = carasUnicas[j]; carasUnicas[j] = temp;
    }
    const idx = carasUnicas.indexOf(roll);
    if (idx !== -1) { const temp = carasUnicas[0]; carasUnicas[0] = carasUnicas[idx]; carasUnicas[idx] = temp; } else { carasUnicas[0] = roll; }
    const nums: number[] = []; carasUnicas.forEach(num => nums.push(num, num)); return nums;
  }
  const nums = Array.from({ length: totalTriangulos }, (_, i) => { if (totalCaras === 100) return ((i % 10) * 10) || 100; return (i % totalCaras) + 1; });
  let currentSeed = baseSeed;
  for (let i = nums.length - 1; i > 0; i--) {
    currentSeed += 0.123;
    const rand = seededRandom(currentSeed);
    const j = Math.floor(rand * (i + 1));
    const temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
  }
  const idx = nums.indexOf(roll);
  if (idx !== -1) { const temp = nums[0]; nums[0] = nums[idx]; nums[idx] = temp; } else { nums[0] = roll; }
  return nums;
}

export const Dice3D: React.FC<Dice3DProps> = ({ 
  seed, results, status, duration, spinStartAt, mode = 'd20', pool, 
  bonus = 0 
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const hasStoppedRef = useRef(false); 
  const [hasStoppedRolling, setHasStoppedRolling] = useState(false); 

  const mapearEspecificacionesDados = () => {
    if (mode === 'd20' || !pool) {
      return results.map(() => ({ tipo: 'd20', caras: 20, colorRgb: [99, 102, 241] as [number, number, number] }));
    }
    const specs: { tipo: string; caras: number; colorRgb: [number, number, number] }[] = [];
    Object.entries(pool).forEach(([dadoId, cantidad]) => {
      const config = CONFIG_DADOS[dadoId];
      if (config && cantidad > 0) {
        for (let i = 0; i < cantidad; i++) specs.push(config);
      }
    });
    return specs;
  };

  const listaEspecificaciones = mapearEspecificacionesDados();

  useEffect(() => {
    hasStoppedRef.current = false;
    setHasStoppedRolling(false);

    if (!results || results.length === 0) return;
    const canvases = containerRef.current?.querySelectorAll('canvas');
    if (!canvases || canvases.length === 0) return;

    const SIZE = 130;
    const diceMeta = Array.from(canvases).map((canvas, i) => {
      const ctx = canvas.getContext('2d')!;
      const dieSeed = seed + (i * 7.43);
      const spec = listaEspecificaciones[i] || { tipo: 'd20', caras: 20, colorRgb: [99, 102, 241] };
      const resultadoDado = results[i] || 1;
      const geo = GEOMETRIAS[spec.tipo] || GEOMETRIAS.d20;
      return {
        canvas, ctx, geo,
        result: resultadoDado,
        caras: spec.caras,
        colorBaseRgb: spec.colorRgb,
        faceNums: makeFaceNumbers(resultadoDado, dieSeed, spec.caras, geo.faces.length),
        stopRot: getStopRotation(geo),
        rx0: seededRandom(dieSeed * 1) * Math.PI * 2,
        ry0: seededRandom(dieSeed * 2) * Math.PI * 2,
        rz0: seededRandom(dieSeed * 3) * Math.PI * 2,
        drx: (seededRandom(dieSeed * 4) < 0.5 ? 1 : -1) * (12 + seededRandom(dieSeed * 5) * 8),
        dry: (seededRandom(dieSeed * 6) < 0.5 ? 1 : -1) * (10 + seededRandom(dieSeed * 7) * 8),
        drz: (seededRandom(dieSeed * 8) < 0.5 ? 1 : -1) * (8 + seededRandom(dieSeed * 9) * 6),
        delay: i * 120
      };
    });

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
              const ease = 1 - Math.pow(1 - progress, 3);
              const t = elapsed / 1000;
              ax = m.rx0 + m.drx * t * (1 - ease * 0.7) + m.stopRot.rx * ease * 0.5;
              ay = m.ry0 + m.dry * t * (1 - ease * 0.7) + m.stopRot.ry * ease * 0.5;
              az = m.rz0 + m.drz * t * (1 - ease * 0.7) + m.stopRot.rz * ease * 0.5;
            } else {
              ax = m.stopRot.rx; ay = m.stopRot.ry; az = m.stopRot.rz;
            }
          }
        } else {
          ax = m.stopRot.rx; ay = m.stopRot.ry; az = m.stopRot.rz;
        }

        const pts = applyRot(m.geo.verts, ax, ay, az);
        const sorted = m.geo.faces.map((face, fi) => ({
          fi, zAvg: (pts[face[0]][2] + pts[face[1]][2] + pts[face[2]][2]) / 3
        })).sort((a, b) => a.zAvg - b.zAvg);

        for (const { fi } of sorted) {
          const face = m.geo.faces[fi];
          const p2d = [project(pts[face[0]], cx, cy, r), project(pts[face[1]], cx, cy, r), project(pts[face[2]], cx, cy, r)];
          const [axVec, ayVec, azVec] = pts[face[0]]; const [bx, by, bz] = pts[face[1]]; const [ex, ey, ez] = pts[face[2]];
          const nx = (by - ayVec) * (ez - azVec) - (bz - azVec) * (ey - ayVec); const ny = (bz - azVec) * (ex - axVec) - (bx - axVec) * (ez - azVec); const nz = (bx - axVec) * (ey - ayVec) - (by - ayVec) * (ex - axVec);
          const nlen = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
          const lit = Math.max(0.15, (nx * 0.3 + ny * 0.5 + nz * 0.8) / nlen);
          const num = m.faceNums[fi];
          let base = [...m.colorBaseRgb];
          if (mode === 'd20') { if (num === 20) base = [46, 204, 113]; else if (num === 1) base = [255, 77, 77]; } else { if (num === m.caras) base = [234, 179, 8]; }
          ctx.beginPath(); ctx.moveTo(p2d[0][0], p2d[0][1]); ctx.lineTo(p2d[1][0], p2d[1][1]); ctx.lineTo(p2d[2][0], p2d[2][1]); ctx.closePath();
          ctx.fillStyle = `rgb(${Math.round(base[0] * lit)},${Math.round(base[1] * lit)},${Math.round(base[2] * lit)})`; ctx.fill();
          ctx.strokeStyle = 'rgba(15, 23, 42, 0.7)'; ctx.lineWidth = 1.2; ctx.stroke();
        }

        for (const { fi } of sorted) {
          const face = m.geo.faces[fi];
          const p2d = [project(pts[face[0]], cx, cy, r), project(pts[face[1]], cx, cy, r), project(pts[face[2]], cx, cy, r)];
          const [axVec, ayVec, azVec] = pts[face[0]]; const [bx, by, bz] = pts[face[1]]; const [ex, ey, ez] = pts[face[2]];
          const nz = (bx - axVec) * (ey - ayVec) - (by - ayVec) * (ex - axVec);
          const nlen = Math.sqrt(((by - ayVec) * (ez - azVec) - (bz - azVec) * (ey - ayVec))**2 + ((bz - azVec) * (ex - axVec) - (bx - axVec) * (ez - azVec))**2 + nz**2) || 1;
          const nzNorm = nz / nlen;
          const num = m.faceNums[fi];
          const debaDibujarNumero = m.caras === 6 ? (nzNorm > 0.15 && fi % 2 === 0) : (nzNorm > 0.15);
          if (debaDibujarNumero) {
            let mcx = (p2d[0][0] + p2d[1][0] + p2d[2][0]) / 3; let mcy = (p2d[0][1] + p2d[1][1] + p2d[2][1]) / 3;
            if (m.caras === 6 && fi + 1 < m.geo.faces.length) {
              const verticesUnicos = Array.from(new Set([...m.geo.faces[fi], ...m.geo.faces[fi + 1]]));
              let sumX = 0, sumY = 0;
              verticesUnicos.forEach(vIdx => { const p = project(pts[vIdx], cx, cy, r); sumX += p[0]; sumY += p[1]; });
              mcx = sumX / verticesUnicos.length; mcy = sumY / verticesUnicos.length;
            }
            const areaTriangulo = Math.abs((p2d[1][0] - p2d[0][0]) * (p2d[2][1] - p2d[0][1]) - (p2d[2][0] - p2d[0][0]) * (p2d[1][1] - p2d[0][1])) / 2;
            const areaTotal = m.caras === 6 ? areaTriangulo * 2 : areaTriangulo;
            const fontSize = m.caras === 6 ? Math.max(14, Math.sqrt(areaTotal) * 0.7 * nzNorm) : Math.max(7, Math.sqrt(areaTotal) * 0.58 * nzNorm);
            ctx.save(); ctx.translate(mcx, mcy);
            ctx.font = `900 ${fontSize}px Inter, system-ui, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.strokeStyle = 'rgba(15, 23, 42, 0.95)'; ctx.lineWidth = fontSize * 0.20; ctx.strokeText(String(num), 0, 0);
            ctx.fillStyle = '#ffffff'; ctx.fillText(String(num), 0, 0); ctx.restore();
          }
        }
      });

      if (status === 'spinning' && !anyRolling && !hasStoppedRef.current) {
        hasStoppedRef.current = true;
        setHasStoppedRolling(true);
      }

      if (status === 'spinning' || anyRolling) {
        requestRef.current = requestAnimationFrame(drawAll);
      }
    };

    drawAll();
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [seed, results, status, duration, spinStartAt, listaEspecificaciones]);

  const sumaDados = results.reduce((acc, curr) => acc + Number(curr), 0);
  const totalConBonus = sumaDados + Number(bonus ?? 0);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800/60 shadow-xl">
      <div ref={containerRef} className="flex flex-wrap items-center justify-center gap-6 p-4 w-full transition-all duration-300">
        {results.map((_, idx) => (
          <canvas key={idx} width={130} height={130} className="w-[130px] h-[130px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-fade-in" />
        ))}
      </div>

      {(status === 'idle' || hasStoppedRolling) && results.length > 0 && (
        <div className="mt-2 mb-4 flex flex-col items-center gap-3">
          <div className="px-8 py-3 bg-indigo-600/20 border border-indigo-500/40 rounded-xl animate-in fade-in zoom-in duration-500 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 block mb-0.5">
              {mode === 'damage' ? '💥 Daño Total (Dados + Bonus)' : '🎲 Resultado General'}
            </span>
            <span className="font-mono text-4xl font-black text-white drop-shadow">
              {totalConBonus}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};