import { IMAGE_CONFIG } from '../config/image-config';

export function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return IMAGE_CONFIG.ALLOWED_DOMAINS.includes(parsedUrl.hostname as any);
  } catch {
    return false;
  }
}