"use client";

import { motion } from "framer-motion";
import { Character } from "@/lib/types";

interface CharacterStatsProps {
  stats: Character["stats"];
  compact?: boolean;
}

export function CharacterStats({ stats, compact = false }: CharacterStatsProps) {
  const statKeys = Object.keys(stats) as Array<keyof typeof stats>;

  return (
    <div className={`grid ${compact ? "grid-cols-3 gap-2" : "grid-cols-2 gap-4"}`}>
      {statKeys.map((stat) => (
        <div key={stat} className="flex flex-col">
          <span className="text-xs text-gray-500 capitalize">{stat}</span>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${stats[stat]}%` }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          {!compact && (
            <span className="text-sm font-medium mt-1">{stats[stat]}</span>
          )}
        </div>
      ))}
    </div>
  );
}