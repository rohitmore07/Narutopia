// Reliable character image URLs from MyAnimeList CDN
export const CHARACTER_IMAGES = {
  // Main Characters
  'Naruto Uzumaki': 'https://cdn.myanimelist.net/images/characters/9/131317.jpg',
  'Sasuke Uchiha': 'https://cdn.myanimelist.net/images/characters/9/131319.jpg',
  'Sakura Haruno': 'https://cdn.myanimelist.net/images/characters/13/131321.jpg',
  'Kakashi Hatake': 'https://cdn.myanimelist.net/images/characters/7/131325.jpg',
  'Hinata Hyuga': 'https://cdn.myanimelist.net/images/characters/15/131329.jpg',
  'Rock Lee': 'https://cdn.myanimelist.net/images/characters/2/131333.jpg',
  'Gaara': 'https://cdn.myanimelist.net/images/characters/8/131331.jpg',
  'Itachi Uchiha': 'https://cdn.myanimelist.net/images/characters/5/131335.jpg',
  'Tsunade': 'https://cdn.myanimelist.net/images/characters/11/131337.jpg',
  'Jiraiya': 'https://cdn.myanimelist.net/images/characters/4/131339.jpg',
  
  // Fallback image for unknown characters
  'default': 'https://cdn.myanimelist.net/images/characters/6/131341.jpg'
} as const;