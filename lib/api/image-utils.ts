const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1630710478039-9c680b99f800';

export function getValidImageUrl(url: string | undefined): string {
  if (!url) return FALLBACK_IMAGE;
  
  // Clean up and validate the URL
  try {
    new URL(url);
    return url;
  } catch {
    return FALLBACK_IMAGE;
  }
}