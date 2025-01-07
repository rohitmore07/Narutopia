import { Character } from '../../types';
import { mainCharacters } from './main-characters';
import { konohaCharacters } from './groups/konoha';
import { akatsukiMembers } from './groups/akatsuki';
import { kageCharacters } from './groups/kage';
import { sanninCharacters } from './groups/sannin';
import { jinchurikiCharacters } from './groups/jinchuriki';
import { team8Characters } from './groups/team8';
import { team10Characters } from './groups/team10';
import { sandSiblingsCharacters } from './groups/sand-siblings';
import { generateCharacters } from '../../utils/character-generator';

// Combine all predefined characters
const existingCharacters = [
  ...mainCharacters,
  ...konohaCharacters,
  ...akatsukiMembers,
  ...kageCharacters,
  ...sanninCharacters,
  ...jinchurikiCharacters,
  ...team8Characters,
  ...team10Characters,
  ...sandSiblingsCharacters
];

// Generate remaining characters to reach 100
const remainingCount = 100 - existingCharacters.length;
const generatedCharacters = generateCharacters(
  Math.max(...existingCharacters.map(c => c.id)) + 1,
  remainingCount
);

// Export all characters
export const characterData = [...existingCharacters, ...generatedCharacters];