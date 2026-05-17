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
  const randomIndex = Math.floor(getSecureRandom() * wedgeCount);
  const winnerWedge = wedges[randomIndex];

  const extraSpins = 7 + Math.floor(getSecureRandom() * 4); // 7-11 vueltas completas
  const offsetWithinSegment = getSecureRandom() * (segmentAngle * 0.8) + (segmentAngle * 0.1);

  const targetWedgeAngle = 360 - (randomIndex * segmentAngle) - (segmentAngle / 2);
  const baseRotation = Math.floor(currentRotation / 360) * 360;
  const targetRotation = baseRotation + (extraSpins * 360) + targetWedgeAngle + offsetWithinSegment;
  const duration = 5500 + Math.floor(getSecureRandom() * 1500); // 5.5s a 7s

  return { targetRotation, winnerWedge, duration };
};