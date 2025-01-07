"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CharacterDetails } from "@/components/character/character-details";
import { CharacterGrid } from "@/components/character/character-grid";
import { PokedexLayout } from "@/components/layout/pokedex-layout";
import { Character } from "@/lib/types/character";
import { useCharacters } from "@/lib/hooks/use-characters";
import { useCharacterSearch } from "@/lib/hooks/use-character-search";
import { PaginationControls } from "@/components/pagination/pagination-controls";

const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const { characters, currentPage, totalPages, setCurrentPage } = useCharacters();
  const { searchQuery, setSearchQuery, filteredCharacters } = useCharacterSearch(characters);

  return (
    <PokedexLayout searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <CharacterGrid
        characters={filteredCharacters}
        onSelectCharacter={setSelectedCharacter}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={100}
        onPageChange={setCurrentPage}
      />

      <AnimatePresence>
        {selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </AnimatePresence>
    </PokedexLayout>
  );
}