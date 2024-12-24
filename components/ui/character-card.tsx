"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types";
import Image from "next/image";
import { Card } from "./card";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-800 cursor-pointer">
        <div className="relative h-48">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{character.name}</h3>
          <div className="flex gap-2 mb-2">
            {character.natureTypes.map((type) => (
              <span
                key={type}
                className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>Clan: {character.clan}</p>
            <p>Village: {character.village}</p>
            <p>Rank: {character.rank}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}