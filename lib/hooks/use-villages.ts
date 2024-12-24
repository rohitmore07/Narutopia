"use client";

import useSWR from 'swr';
import { fetchVillages } from '../api/villages';

export function useVillages() {
  const { data, error, isLoading } = useSWR('villages', fetchVillages, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    villages: data ?? [],
    isLoading,
    isError: error,
  };
}