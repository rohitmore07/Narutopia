"use client";

import { useState, useMemo } from 'react';
import { Character } from '../types';

export function useCharacterSearch(characters: Character[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = useMemo(() => 
    characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [characters, searchQuery]
  );

  return {
    searchQuery,
    setSearchQuery,
    filteredCharacters
  };
}