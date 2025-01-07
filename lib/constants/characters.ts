import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    clan: "Uzumaki",
    village: "Hidden Leaf",
    rank: "Hokage",
    natureTypes: ["Wind", "Yang"],
    image: "/images/naruto.jpg",
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
    image: "/images/sasuke.jpg",
    description: "The last surviving member of the Uchiha clan and wielder of the Rinnegan.",
    stats: {
      ninjutsu: 90,
      taijutsu: 85,
      genjutsu: 95,
      intelligence: 90,
      strength: 80,
      speed: 90,
    },
  }
];