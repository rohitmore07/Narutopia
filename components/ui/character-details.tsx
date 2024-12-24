"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types";
import Image from "next/image";
import { Card } from "./card";
import { Progress } from "./progress";

interface CharacterDetailsProps {
  character: Character;
  onClose: () => void;
}

export default function CharacterDetails({ character, onClose }: CharacterDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-2xl bg-white dark:bg-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {character.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Stats</h3>
              <div className="space-y-4">
                {Object.entries(character.stats).map(([stat, value]) => (
                  <div key={stat}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{stat}</span>
                      <span>{value}</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium">Clan</dt>
                  <dd>{character.clan}</dd>
                </div>
                <div>
                  <dt className="font-medium">Village</dt>
                  <dd>{character.village}</dd>
                </div>
                <div>
                  <dt className="font-medium">Rank</dt>
                  <dd>{character.rank}</dd>
                </div>
                <div>
                  <dt className="font-medium">Nature Types</dt>
                  <dd className="flex gap-2 flex-wrap">
                    {character.natureTypes.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {type}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}