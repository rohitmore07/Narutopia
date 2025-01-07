import { Character, Village } from '../types';

export function generatePaginatedData<T extends Character | Village>(
  baseData: T[],
  count: number
): T[] {
  const result: T[] = [];
  
  for (let i = 0; i < count; i++) {
    const baseItem = baseData[i % baseData.length];
    result.push({
      ...baseItem,
      id: baseData.length + i + 1,
      name: `${baseItem.name} ${Math.floor(i / baseData.length) + 1}`,
    });
  }
  
  return [...baseData, ...result];
}