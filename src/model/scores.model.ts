export interface Scores {
  username: string;
  totalGames: number;
  points: number;
  scores: Score[];
}

export interface Score {
  city: string;
  answeredCorrectly: boolean;
  attempts: number;
}
