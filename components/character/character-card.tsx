"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types/character";
import { CharacterImage } from "./character-image";
import { CharacterInfo } from "./character-info";

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <CharacterImage character={character} />
      <CharacterInfo character={character} />
    </motion.div>
  );
}