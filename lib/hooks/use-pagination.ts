"use client";

import { useState, useMemo } from 'react';
import { ITEMS_PER_PAGE } from '../data/constants';

interface UsePaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
}

export function usePagination<T>({ 
  items, 
  itemsPerPage = ITEMS_PER_PAGE 
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = useMemo(() => 
    Math.ceil((items?.length || 0) / itemsPerPage),
    [items?.length, itemsPerPage]
  );
  
  const paginatedItems = useMemo(() => {
    if (!items?.length) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    items: paginatedItems,
  };
}