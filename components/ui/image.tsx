"use client";

import { useState } from 'react';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';
import { useImageLoader } from '@/lib/hooks/use-image-loader';

interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClass?: string;
  priority?: boolean;
  sizes?: string;
}

export function Image({ 
  src, 
  alt, 
  fill, 
  width, 
  height,
  className,
  containerClass,
  priority = false,
  sizes = "100vw"
}: ImageProps) {
  const { imageSrc, handleError } = useImageLoader(src);

  return (
    <div className={cn("relative", containerClass)}>
      <NextImage
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        quality={90}
      />
    </div>
  );
}