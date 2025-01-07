export interface CharacterStats {
  ninjutsu: number;
  taijutsu: number;
  genjutsu: number;
  intelligence: number;
  strength: number;
  speed: number;
}

export interface Character {
  id: number;
  name: string;
  clan: string;
  village: string;
  rank: string;
  natureTypes: string[];
  image: string;
  description: string;
  stats: CharacterStats;
}

export type CharacterType = 
  | "Fire"
  | "Water"
  | "Earth"
  | "Wind"
  | "Lightning"
  | "Yin"
  | "Yang";