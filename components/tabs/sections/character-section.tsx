"use client";

import { Character } from "@/lib/types";
import { CharacterGrid } from "@/components/character/character-grid";
import { CharacterPagination } from "@/components/character/character-pagination";

interface CharacterSectionProps {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
  onSelectCharacter: (character: Character) => void;
}

export function CharacterSection({
  characters,
  currentPage,
  totalPages,
  isLoading,
  onPageChange,
  onSelectCharacter,
}: CharacterSectionProps) {
  return (
    <div className="mt-6">
      <CharacterGrid 
        characters={characters}
        onSelectCharacter={onSelectCharacter}
        isLoading={isLoading}
      />
      <CharacterPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}