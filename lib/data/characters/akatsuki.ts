import { Character } from '../../types';

export const akatsukiCharacters: Character[] = [
  {
    id: 20,
    name: "Itachi Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf (Former)",
    rank: "S-Rank Missing-nin",
    natureTypes: ["Fire", "Water", "Wind"],
    image: "https://cdn.myanimelist.net/images/characters/5/131335.jpg",
    description: "A prodigy of the Uchiha clan who sacrificed everything to protect his village and brother.",
    stats: { ninjutsu: 90, taijutsu: 85, genjutsu: 100, intelligence: 95, strength: 75, speed: 90 }
  },
  {
    id: 21,
    name: "Pain (Nagato)",
    clan: "Uzumaki",
    village: "Hidden Rain",
    rank: "S-Rank Missing-nin",
    natureTypes: ["Wind", "Water", "Earth", "Lightning", "Fire"],
    image: "https://cdn.myanimelist.net/images/characters/14/128128.jpg",
    description: "The leader of the Akatsuki who sought peace through pain.",
    stats: { ninjutsu: 100, taijutsu: 85, genjutsu: 90, intelligence: 95, strength: 85, speed: 85 }
  },
  {
    id: 22,
    name: "Konan",
    clan: "Unknown",
    village: "Hidden Rain",
    rank: "S-Rank Missing-nin",
    natureTypes: ["Wind", "Water"],
    image: "https://cdn.myanimelist.net/images/characters/15/99791.jpg",
    description: "The only female member of Akatsuki, master of paper-style ninjutsu.",
    stats: { ninjutsu: 90, taijutsu: 75, genjutsu: 85, intelligence: 90, strength: 70, speed: 85 }
  }
];