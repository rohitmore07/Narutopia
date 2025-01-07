"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CharacterSection } from "./sections/character-section";
import { VillageSection } from "./sections/village-section";
import { Character, Village } from "@/lib/types";

interface ContentTabsProps {
  characters: Character[];
  villages: Village[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  isLoadingVillages: boolean;
  onPageChange: (page: number) => void;
  onSelectCharacter: (character: Character) => void;
}

export function ContentTabs({
  characters,
  villages,
  currentPage,
  totalPages,
  isLoading,
  isLoadingVillages,
  onPageChange,
  onSelectCharacter,
}: ContentTabsProps) {
  return (
    <Tabs defaultValue="characters" className="mt-8">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
        <TabsTrigger value="characters">Characters</TabsTrigger>
        <TabsTrigger value="villages">Villages</TabsTrigger>
      </TabsList>
      
      <TabsContent value="characters">
        <CharacterSection 
          characters={characters}
          currentPage={currentPage}
          totalPages={totalPages}
          isLoading={isLoading}
          onPageChange={onPageChange}
          onSelectCharacter={onSelectCharacter}
        />
      </TabsContent>
      
      <TabsContent value="villages">
        <VillageSection 
          villages={villages} 
          isLoading={isLoadingVillages}
        />
      </TabsContent>
    </Tabs>
  );
}