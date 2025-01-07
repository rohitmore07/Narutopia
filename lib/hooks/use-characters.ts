"use client";

import { useState, useEffect } from 'react';
import { Character } from '../types';
import { templateCharacters } from '../data/characters/templates';

const ITEMS_PER_PAGE = 20; // Increased from 8 to 20

export function useCharacters(initialPage: number = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [characters, setCharacters] = useState<Character[]>([]);
  const totalPages = Math.ceil(templateCharacters.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCharacters(templateCharacters.slice(startIndex, endIndex));
  }, [currentPage]);

  return {
    characters,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading: false
  };
}