import { Character } from '../types';

// Main characters data with accurate information
export const mainCharacters: Character[] = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    clan: "Uzumaki",
    village: "Hidden Leaf",
    rank: "Hokage",
    natureTypes: ["Wind", "Yang"],
    image: "https://cdn.myanimelist.net/images/characters/9/131317.jpg",
    description: "The Seventh Hokage of the Hidden Leaf Village and the hero who saved the ninja world.",
    stats: {
      ninjutsu: 90,
      taijutsu: 80,
      genjutsu: 45,
      intelligence: 70,
      strength: 85,
      speed: 80,
    },
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf",
    rank: "Shadow Hokage",
    natureTypes: ["Fire", "Lightning"],
    image: "https://cdn.myanimelist.net/images/characters/9/131319.jpg",
    description: "The last surviving member of the Uchiha clan and wielder of the Rinnegan.",
    stats: {
      ninjutsu: 90,
      taijutsu: 85,
      genjutsu: 95,
      intelligence: 90,
      strength: 80,
      speed: 90,
    },
  },
  {
    id: 3,
    name: "Sakura Haruno",
    clan: "Haruno",
    village: "Hidden Leaf",
    rank: "Jonin",
    natureTypes: ["Earth", "Yang"],
    image: "https://cdn.myanimelist.net/images/characters/13/131321.jpg",
    description: "A legendary medical-nin trained by Tsunade, known for her incredible strength and healing abilities.",
    stats: {
      ninjutsu: 85,
      taijutsu: 95,
      genjutsu: 70,
      intelligence: 90,
      strength: 100,
      speed: 75,
    },
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    clan: "Hatake",
    village: "Hidden Leaf",
    rank: "Sixth Hokage",
    natureTypes: ["Lightning", "Earth", "Water"],
    image: "https://cdn.myanimelist.net/images/characters/7/131325.jpg",
    description: "The Copy Ninja who mastered over a thousand jutsu, former leader of Team 7.",
    stats: {
      ninjutsu: 95,
      taijutsu: 90,
      genjutsu: 85,
      intelligence: 95,
      strength: 80,
      speed: 90,
    },
  }
];