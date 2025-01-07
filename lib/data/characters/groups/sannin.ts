import { Character } from '../../../types';

export const sanninCharacters: Character[] = [
  {
    id: 40,
    name: "Jiraiya",
    clan: "Unknown",
    village: "Hidden Leaf",
    rank: "Sannin",
    natureTypes: ["Fire", "Earth", "Water", "Wind", "Yang"],
    image: "https://cdn.myanimelist.net/images/characters/4/131339.jpg",
    description: "One of the Legendary Sannin, known as the Toad Sage.",
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 75, intelligence: 90, strength: 85, speed: 85 }
  },
  {
    id: 41,
    name: "Tsunade",
    clan: "Senju",
    village: "Hidden Leaf",
    rank: "Fifth Hokage",
    natureTypes: ["Earth", "Lightning", "Yang"],
    image: "https://cdn.myanimelist.net/images/characters/11/131337.jpg",
    description: "Legendary medical ninja and one of the Sannin.",
    stats: { ninjutsu: 90, taijutsu: 100, genjutsu: 75, intelligence: 90, strength: 100, speed: 85 }
  },
  {
    id: 42,
    name: "Orochimaru",
    clan: "Unknown",
    village: "Hidden Leaf (Former)",
    rank: "Sannin",
    natureTypes: ["Wind", "Earth", "Water", "Lightning", "Fire"],
    image: "https://cdn.myanimelist.net/images/characters/12/131343.jpg",
    description: "The third of the Legendary Sannin, known for forbidden jutsu.",
    stats: { ninjutsu: 100, taijutsu: 80, genjutsu: 95, intelligence: 100, strength: 80, speed: 85 }
  }
];