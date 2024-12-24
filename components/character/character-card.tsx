"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types";
import { CharacterStats } from "./character-stats";
import { ImageFallback } from "@/components/ui/image-fallback";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3]">
        <ImageFallback
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{character.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          {character.clan !== 'Unknown' && (
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
              {character.clan}
            </span>
          )}
          {character.village !== 'Unknown' && (
            <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">
              {character.village}
            </span>
          )}
        </div>
        <CharacterStats stats={character.stats} compact />
      </div>
    </motion.div>
  );
}