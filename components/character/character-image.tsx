"use client";

import { Character } from "@/lib/types/character";
import { ImageFallback } from "../ui/image-fallback";
import { NatureTypes } from "./nature-types";

interface CharacterImageProps {
  character: Character;
}

export function CharacterImage({ character }: CharacterImageProps) {
  return (
    <div className="relative">
      <NatureTypes types={character.natureTypes} />
      <div className="relative w-full aspect-square">
        <ImageFallback
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}