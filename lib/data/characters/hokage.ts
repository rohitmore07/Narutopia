import { Character } from '../../types';

export const hokageCharacters: Character[] = [
  {
    id: 30,
    name: "Hashirama Senju",
    clan: "Senju",
    village: "Hidden Leaf",
    rank: "First Hokage",
    natureTypes: ["Earth", "Water", "Wood"],
    image: "https://cdn.myanimelist.net/images/characters/8/253705.jpg",
    description: "The God of Shinobi and founder of the Hidden Leaf Village.",
    stats: { ninjutsu: 100, taijutsu: 90, genjutsu: 85, intelligence: 90, strength: 100, speed: 90 }
  },
  {
    id: 31,
    name: "Tsunade",
    clan: "Senju",
    village: "Hidden Leaf",
    rank: "Fifth Hokage",
    natureTypes: ["Earth", "Lightning", "Yang"],
    image: "https://cdn.myanimelist.net/images/characters/11/131337.jpg",
    description: "Legendary Sannin and the greatest medical-nin in the world.",
    stats: { ninjutsu: 90, taijutsu: 100, genjutsu: 75, intelligence: 90, strength: 100, speed: 85 }
  }
];