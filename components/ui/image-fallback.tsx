"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { CHARACTER_IMAGES } from '@/lib/config/character-images';

interface ImageFallbackProps extends Omit<ImageProps, 'onError'> {
  fallback?: string;
}

export function ImageFallback({ src, fallback = CHARACTER_IMAGES.default, ...props }: ImageFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}