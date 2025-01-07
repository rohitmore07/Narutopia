import { Character } from '../../../types';

export const konohaCharacters: Character[] = [
  {
    id: 10,
    name: "Shikamaru Nara",
    clan: "Nara",
    village: "Hidden Leaf",
    rank: "Jonin",
    natureTypes: ["Earth", "Yin"],
    image: "https://cdn.myanimelist.net/images/characters/3/131334.jpg",
    description: "A tactical genius from the Nara clan, known for his shadow manipulation techniques.",
    stats: { ninjutsu: 85, taijutsu: 70, genjutsu: 75, intelligence: 100, strength: 65, speed: 70 }
  },
  {
    id: 11,
    name: "Neji Hyuga",
    clan: "Hyuga",
    village: "Hidden Leaf",
    rank: "Jonin",
    natureTypes: ["Lightning"],
    image: "https://cdn.myanimelist.net/images/characters/6/131336.jpg",
    description: "A prodigy of the Hyuga clan, master of the Gentle Fist technique.",
    stats: { ninjutsu: 80, taijutsu: 95, genjutsu: 70, intelligence: 90, strength: 80, speed: 90 }
  }
  // ... more Konoha characters
];