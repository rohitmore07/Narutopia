import { CHARACTER_IMAGES } from '../config/character-images';

export function getCharacterImage(name: string): string {
  return CHARACTER_IMAGES[name as keyof typeof CHARACTER_IMAGES] || CHARACTER_IMAGES.default;
}

export function getImageSizes(type: 'card' | 'detail' = 'card'): string {
  return type === 'card' 
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : '(max-width: 1200px) 50vw, 33vw';
}