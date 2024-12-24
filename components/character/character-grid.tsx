"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types";
import { CharacterCard } from "./character-card";

interface CharacterGridProps {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export function CharacterGrid({ characters, onSelectCharacter }: CharacterGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {characters.map((character, index) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelectCharacter(character)}
        >
          <CharacterCard character={character} />
        </motion.div>
      ))}
    </motion.div>
  );
}