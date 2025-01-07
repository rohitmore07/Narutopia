import { Character } from '../../types';
import { allCharacters } from './index';

export function getPaginatedCharacters(page: number, limit: number = 8): {
  characters: Character[];
  totalPages: number;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCharacters = allCharacters.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allCharacters.length / limit);

  return {
    characters: paginatedCharacters,
    totalPages
  };
}