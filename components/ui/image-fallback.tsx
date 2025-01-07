"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export function ImageFallback({ src, alt, fill, className, sizes }: ImageFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSrc = "https://images.unsplash.com/photo-1630710478039-9c680b99f800";

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}