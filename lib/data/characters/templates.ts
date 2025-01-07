import { Character } from '../../types';

// Generate 100 template characters with placeholder data
const generateTemplateCharacters = (): Character[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Character ${index + 1}`,
    clan: "TBD",
    village: "TBD",
    rank: "TBD",
    natureTypes: ["TBD"],
    image: "https://cdn.myanimelist.net/images/characters/6/131341.jpg", // Default placeholder image
    description: "Character description to be added.",
    stats: {
      ninjutsu: 50,
      taijutsu: 50,
      genjutsu: 50,
      intelligence: 50,
      strength: 50,
      speed: 50
    }
  }));
};

export const templateCharacters = generateTemplateCharacters();