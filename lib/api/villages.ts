import { Village } from '../types';

const API_BASE_URL = 'https://narutodb.xyz/api';

async function fetchVillageDetails(id: number): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/village/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch village ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching village ${id}:`, error);
    return null;
  }
}

export async function fetchVillages(): Promise<Village[]> {
  try {
    // First get the list of all villages
    const response = await fetch(`${API_BASE_URL}/village`);
    if (!response.ok) throw new Error('Failed to fetch villages');
    
    const data = await response.json();
    
    // Fetch detailed information for each village
    const villagePromises = data.villages.slice(0, 10).map(async (village: any) => {
      const details = await fetchVillageDetails(village.id);
      return {
        id: village.id,
        name: village.name,
        description: details?.description || village.description || 'A hidden village...',
        image: details?.images?.[0] || 'https://static.wikia.nocookie.net/naruto/images/4/40/Hidden_Leaf_Village.png'
      };
    });

    const villages = await Promise.all(villagePromises);
    return villages.filter(v => v !== null);
  } catch (error) {
    console.error('Error fetching villages:', error);
    return [];
  }
}