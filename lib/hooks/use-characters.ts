"use client";

import useSWR from 'swr';
import { fetchCharacters } from '../api/characters';

export function useCharacters(page: number = 1) {
  const { data, error, isLoading } = useSWR(
    [`characters`, page],
    () => fetchCharacters(page),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    characters: data?.characters ?? [],
    totalPages: data?.totalPages ?? 0,
    isLoading,
    isError: error,
  };
}