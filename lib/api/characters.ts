import { Character } from '../types';

const API_BASE_URL = 'https://narutodb.xyz/api';

export async function fetchCharacters(page = 1, limit = 20): Promise<{ characters: Character[]; totalPages: number }> {
  try {
    const response = await fetch(`${API_BASE_URL}/character?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    
    const data = await response.json();
    
    const characters = data.characters.map((char: any) => ({
      id: char.id,
      name: char.name,
      clan: char.personal?.clan || 'Unknown',
      village: char.personal?.village || 'Unknown',
      rank: Array.isArray(char.rank) ? char.rank[0] : (char.rank || 'Unknown'),
      natureTypes: Array.isArray(char.natureType) ? char.natureType : [],
      image: char.images?.[0] || 'https://images.unsplash.com/photo-1630710478039-9c680b99f800',
      description: char.debut?.manga || char.personal?.occupation?.[0] || 'A mysterious shinobi...',
      stats: {
        ninjutsu: Math.floor(Math.random() * 40) + 60,
        taijutsu: Math.floor(Math.random() * 40) + 60,
        genjutsu: Math.floor(Math.random() * 40) + 60,
        intelligence: Math.floor(Math.random() * 40) + 60,
        strength: Math.floor(Math.random() * 40) + 60,
        speed: Math.floor(Math.random() * 40) + 60,
      },
    }));

    return {
      characters,
      totalPages: Math.ceil(data.totalCharacters / limit),
    };
  } catch (error) {
    console.error('Error fetching characters:', error);
    return {
      characters: [],
      totalPages: 0,
    };
  }
}