"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types/character";
import { CharacterCard } from "./character-card";

interface CharacterGridProps {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export function CharacterGrid({ characters, onSelectCharacter }: CharacterGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {characters.map((character) => (
        <motion.div
          key={character.id}
          variants={item}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <CharacterCard
            character={character}
            onClick={() => onSelectCharacter(character)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}