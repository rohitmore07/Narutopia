"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CharacterDetails } from "@/components/character/character-details";
import { SearchHeader } from "@/components/layout/search-header";
import { ContentTabs } from "@/components/tabs/content-tabs";
import { Character } from "@/lib/types";
import { useCharacters } from "@/lib/hooks/use-characters";
import { useCharacterSearch } from "@/lib/hooks/use-character-search";
import { useVillages } from "@/lib/hooks/use-villages";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  
  const { characters, totalPages, isLoading } = useCharacters(currentPage);
  const { searchQuery, setSearchQuery, filteredCharacters } = useCharacterSearch(characters);
  const { villages, isLoading: isLoadingVillages } = useVillages();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <SearchHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ContentTabs
          characters={filteredCharacters}
          villages={villages}
          currentPage={currentPage}
          totalPages={totalPages}
          isLoading={isLoading}
          isLoadingVillages={isLoadingVillages}
          onPageChange={setCurrentPage}
          onSelectCharacter={setSelectedCharacter}
        />

        <AnimatePresence>
          {selectedCharacter && (
            <CharacterDetails
              character={selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}