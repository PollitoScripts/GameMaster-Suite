export interface Wedge {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  joinedAt: number;
}

export interface RoomState {
  id: string;
  name: string;
  hostId: string;
  status: 'idle' | 'spinning' | 'result';
  wedges: Wedge[];
  currentRotation: number;
  targetRotation: number;
  duration: number;
  winnerWedgeId: string | null;
  lastSpinBy: string | null;
  spinTimestamp: number | null;
}

export interface HistoryRecord {
  id: string;
  roomId: string;
  roomName: string;
  winnerName: string;
  winnerDescription: string;
  spunBy: string;
  timestamp: number;
}