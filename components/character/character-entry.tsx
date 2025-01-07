"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types/character";
import { cn } from "@/lib/utils";
import { getNatureTypeColor } from "@/lib/utils/nature-type-utils";
import { ImageFallback } from "../ui/image-fallback";

interface CharacterEntryProps {
  character: Character;
  onClick?: () => void;
}

export function CharacterEntry({ character, onClick }: CharacterEntryProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
      whileHover={{ y: -5 }}
      onClick={onClick}
      layout
    >
      <div className="relative">
        <div className="absolute top-2 left-2 z-10 flex gap-1">
          {character.natureTypes.map((type) => (
            <span
              key={type}
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium text-white",
                getNatureTypeColor(type)
              )}
            >
              {type}
            </span>
          ))}
        </div>
        <div className="relative w-full aspect-square">
          <ImageFallback
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{character.name}</h3>
          <span className="text-sm text-gray-500">#{String(character.id).padStart(3, '0')}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
            {character.clan}
          </span>
          <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">
            {character.village}
          </span>
        </div>
      </div>
    </motion.div>
  );
}