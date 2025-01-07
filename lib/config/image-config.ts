export const IMAGE_CONFIG = {
  FALLBACK_IMAGE: 'https://images.unsplash.com/photo-1630710478039-9c680b99f800',
  ALLOWED_DOMAINS: [
    'images.unsplash.com',
    'static.wikia.nocookie.net',
    'naruto-api.com',
    'narutodb.xyz'
  ] as const,
  SIZES: {
    CHARACTER_CARD: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    CHARACTER_DETAIL: '(max-width: 1200px) 50vw, 33vw',
    DEFAULT: '100vw'
  }
} as const;

export type AllowedImageDomain = typeof IMAGE_CONFIG.ALLOWED_DOMAINS[number];