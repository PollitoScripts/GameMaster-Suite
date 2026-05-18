export interface Wedge {
  id: string;
  name: string;
  color: string;
}

const getSecureRandom = (): number => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / 4294967296;
};

export const calculateSpin = (wedges: Wedge[], currentRotation: number) => {
  const wedgeCount = wedges.length;
  const segmentAngle = 360 / wedgeCount;
  
  // 1. Elección aleatoria y segura de la cuña ganadora
  const randomIndex = Math.floor(getSecureRandom() * wedgeCount);
  const winnerWedge = wedges[randomIndex];

  // 2. Definición del número de vueltas completas de inercia (entre 7 y 10 giros íntegros)
  const extraSpins = 7 + Math.floor(getSecureRandom() * 4); 
  
  // 3. Margen de seguridad dinámico para que el pin no apunte exactamente a las líneas divisorias
  const offsetWithinSegment = getSecureRandom() * (segmentAngle * 0.8) + (segmentAngle * 0.1);

  // 4. Mapeo del ángulo objetivo en sentido antihorario con respecto al pin superior (0° / 360°)
  const targetWedgeAngle = 360 - (randomIndex * segmentAngle) - (segmentAngle / 2);
  
  // 5. Normalización matemática de la rotación actual para evitar acumulaciones infinitas
  const baseRotation = Math.floor(currentRotation / 360) * 360;
  
  // 6. Cálculo del destino final exacto sumando la inercia y los desplazamientos calculados
  const targetRotation = baseRotation + (extraSpins * 360) + targetWedgeAngle + offsetWithinSegment;
  
  // 7. Duración aleatoria controlada para dotar al juego de un factor orgánico de suspense (5.5s a 7s)
  const duration = 5500 + Math.floor(getSecureRandom() * 1500); 

  return { targetRotation, winnerWedge, duration };
};