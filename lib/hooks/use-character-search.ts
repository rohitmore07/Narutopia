"use client";

import { useState, useMemo } from 'react';
import { Character } from '../types/character';
import { templateCharacters } from '../data/characters/templates';

export function useCharacterSearch(characters: Character[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = useMemo(() => {
    // Search through all characters, not just the paginated ones
    const allCharacters = templateCharacters;
    
    if (!searchQuery.trim()) {
      return characters;
    }

    return allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [characters, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCharacters
  };
}