export interface Character {
  id: number;
  name: string;
  clan: string;
  village: string;
  rank: string;
  natureTypes: string[];
  image: string;
  description: string;
  stats: {
    ninjutsu: number;
    taijutsu: number;
    genjutsu: number;
    intelligence: number;
    strength: number;
    speed: number;
  };
}

export interface Village {
  id: number;
  name: string;
  description: string;
  image: string;
}

export type NatureType = 
  | "Fire"
  | "Water"
  | "Earth"
  | "Wind"
  | "Lightning"
  | "Yin"
  | "Yang";