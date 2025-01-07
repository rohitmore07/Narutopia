import { Character } from '../types';
import { natureTypes } from '../constants/nature-types';
import { villages } from '../constants/villages';

export function generateCharacter(id: number): Character {
  const ranks = ["Genin", "Chunin", "Jonin", "ANBU", "Special Jonin"];
  const clans = ["Uchiha", "Hyuga", "Nara", "Yamanaka", "Akimichi", "Unknown"];
  
  return {
    id,
    name: `Character ${id}`,
    clan: clans[Math.floor(Math.random() * clans.length)],
    village: villages[Math.floor(Math.random() * villages.length)],
    rank: ranks[Math.floor(Math.random() * ranks.length)],
    natureTypes: [natureTypes[Math.floor(Math.random() * natureTypes.length)]],
    image: "https://cdn.myanimelist.net/images/characters/6/131341.jpg",
    description: `A skilled ninja from the ${villages[Math.floor(Math.random() * villages.length)]}.`,
    stats: {
      ninjutsu: Math.floor(Math.random() * 50) + 50,
      taijutsu: Math.floor(Math.random() * 50) + 50,
      genjutsu: Math.floor(Math.random() * 50) + 50,
      intelligence: Math.floor(Math.random() * 50) + 50,
      strength: Math.floor(Math.random() * 50) + 50,
      speed: Math.floor(Math.random() * 50) + 50,
    }
  };
}

export function generateCharacters(start: number, count: number): Character[] {
  return Array.from({ length: count }, (_, i) => generateCharacter(start + i));
}