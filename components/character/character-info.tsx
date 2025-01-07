"use client";

import { Character } from "@/lib/types/character";

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({ character }: CharacterInfoProps) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{character.name}</h3>
        <span className="text-sm text-gray-500">
          #{String(character.id).padStart(3, '0')}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
          {character.clan}
        </span>
        <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">
          {character.village}
        </span>
      </div>
    </div>
  );
}