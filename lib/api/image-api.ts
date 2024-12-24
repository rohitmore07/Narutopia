const NARUTO_IMAGE_API = 'https://naruto-api.com/api/v1/characters';
const FALLBACK_IMAGE = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';

export async function fetchCharacterImage(name: string): Promise<string> {
  try {
    const response = await fetch(`${NARUTO_IMAGE_API}?name=${encodeURIComponent(name)}`);
    const data = await response.json();
    return data.images?.[0] || FALLBACK_IMAGE;
  } catch (error) {
    console.error('Error fetching character image:', error);
    return FALLBACK_IMAGE;
  }
}

// Backup image mappings in case API fails
export const BACKUP_CHARACTER_IMAGES: Record<string, string> = {
  'Naruto Uzumaki': 'https://cdn.myanimelist.net/images/characters/9/131317.jpg',
  'Sasuke Uchiha': 'https://cdn.myanimelist.net/images/characters/9/131319.jpg',
  'Sakura Haruno': 'https://cdn.myanimelist.net/images/characters/13/131321.jpg',
  'Kakashi Hatake': 'https://cdn.myanimelist.net/images/characters/7/131325.jpg',
  'default': FALLBACK_IMAGE
};