import { Village } from '../../types';

// Base villages data
const baseVillages: Village[] = [
  {
    id: 1,
    name: "Hidden Leaf Village",
    description: "Also known as Konohagakure, it is one of the Five Great Shinobi Countries and home to many legendary ninja including the Hokage.",
    image: "https://static.wikia.nocookie.net/naruto/images/4/40/Hidden_Leaf_Village.png"
  },
  {
    id: 2,
    name: "Hidden Sand Village",
    description: "Sunagakure is located in the Land of Wind and is home to powerful shinobi who specialize in puppet techniques and wind-based jutsu.",
    image: "https://static.wikia.nocookie.net/naruto/images/f/f9/Sunagakure.png"
  },
  {
    id: 3,
    name: "Hidden Mist Village",
    description: "Kirigakure, located in the Land of Water, is known for its powerful Seven Ninja Swordsmen.",
    image: "https://static.wikia.nocookie.net/naruto/images/8/8c/Kirigakure.png"
  }
];

// Generate additional villages for pagination
const generateMoreVillages = (base: Village[]): Village[] => {
  const moreVillages: Village[] = [];
  
  for (let i = 0; i < 50; i++) {
    const baseVillage = base[i % base.length];
    moreVillages.push({
      ...baseVillage,
      id: base.length + i + 1,
      name: `${baseVillage.name} ${Math.floor(i / base.length) + 1}`,
    });
  }
  
  return [...base, ...moreVillages];
};

// Export pre-generated villages array
export const mainVillages = generateMoreVillages(baseVillages);