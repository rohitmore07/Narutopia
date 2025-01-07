"use client";

import { useMemo } from 'react';
import { mainVillages } from '../data/villages';
import { usePagination } from './use-pagination';

export function useVillages() {
  const villages = useMemo(() => mainVillages || [], []);
  
  const pagination = usePagination({
    items: villages,
  });

  return {
    ...pagination,
    villages: pagination.items,
    isLoading: false,
  };
}