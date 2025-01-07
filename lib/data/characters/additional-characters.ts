import { Character } from '../../types';

export const additionalCharacters: Character[] = [
  {
    id: 6,
    name: "Hinata Hyuga",
    clan: "Hyuga",
    village: "Hidden Leaf",
    rank: "Jonin",
    natureTypes: ["Fire", "Lightning"],
    image: "https://cdn.myanimelist.net/images/characters/15/131329.jpg",
    description: "A member of the Hyuga clan with the Byakugan, known for her gentle fist technique.",
    stats: {
      ninjutsu: 75,
      taijutsu: 90,
      genjutsu: 65,
      intelligence: 80,
      strength: 70,
      speed: 85
    }
  },
  {
    id: 7,
    name: "Rock Lee",
    clan: "Unknown",
    village: "Hidden Leaf",
    rank: "Jonin",
    natureTypes: [],
    image: "https://cdn.myanimelist.net/images/characters/2/131333.jpg",
    description: "A taijutsu specialist who cannot use ninjutsu or genjutsu but has mastered the Eight Gates.",
    stats: {
      ninjutsu: 0,
      taijutsu: 100,
      genjutsu: 0,
      intelligence: 75,
      strength: 95,
      speed: 95
    }
  },
  {
    id: 8,
    name: "Gaara",
    clan: "Unknown",
    village: "Hidden Sand",
    rank: "Kazekage",
    natureTypes: ["Earth", "Wind"],
    image: "https://cdn.myanimelist.net/images/characters/8/131331.jpg",
    description: "The Fifth Kazekage of the Hidden Sand Village, master of sand manipulation.",
    stats: {
      ninjutsu: 95,
      taijutsu: 70,
      genjutsu: 75,
      intelligence: 85,
      strength: 85,
      speed: 80
    }
  }
];