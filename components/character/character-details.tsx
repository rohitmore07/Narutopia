"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Character } from "@/lib/types";
import { CharacterStats } from "./character-stats";
import { ImageFallback } from "@/components/ui/image-fallback";

interface CharacterDetailsProps {
  character: Character;
  onClose: () => void;
}

export function CharacterDetails({ character, onClose }: CharacterDetailsProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-6">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageFallback
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 8rem"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
                  <div className="flex gap-2 flex-wrap">
                    {character.clan !== 'Unknown' && (
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {character.clan}
                      </span>
                    )}
                    {character.village !== 'Unknown' && (
                      <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        {character.village}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Nature Types</h3>
                <div className="flex gap-2 flex-wrap">
                  {character.natureTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {character.description}
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Stats</h3>
                <CharacterStats stats={character.stats} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}