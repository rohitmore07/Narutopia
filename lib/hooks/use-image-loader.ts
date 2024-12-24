"use client";

import { useState, useCallback } from 'react';
import { IMAGE_CONFIG } from '@/lib/config/image-config';
import { isValidImageUrl } from '@/lib/utils/image-utils';

export function useImageLoader(initialSrc: string) {
  const [imageSrc, setImageSrc] = useState(() => 
    isValidImageUrl(initialSrc) ? initialSrc : IMAGE_CONFIG.FALLBACK_IMAGE
  );

  const handleError = useCallback(() => {
    setImageSrc(IMAGE_CONFIG.FALLBACK_IMAGE);
  }, []);

  return {
    imageSrc,
    handleError
  };
}