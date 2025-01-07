"use client";

import { motion } from "framer-motion";
import { Village } from "@/lib/types";
import { VillageCard } from "./village-card";
import { VillageGridSkeleton } from "./village-grid-skeleton";

interface VillageGridProps {
  villages: Village[];
  isLoading?: boolean;
  onSelectVillage: (village: Village) => void;
}

export function VillageGrid({ villages, isLoading, onSelectVillage }: VillageGridProps) {
  if (isLoading) {
    return <VillageGridSkeleton />;
  }

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {villages.map((village, index) => (
        <motion.div
          key={village.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <VillageCard 
            village={village} 
            onClick={() => onSelectVillage(village)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}