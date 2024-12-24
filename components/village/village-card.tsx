"use client";

import { motion } from "framer-motion";
import { Village } from "@/lib/types";
import { ImageFallback } from "@/components/ui/image-fallback";

interface VillageCardProps {
  village: Village;
  onClick?: () => void;
}

export function VillageCard({ village, onClick }: VillageCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative w-full h-32">
        <ImageFallback
          src={village.image}
          alt={village.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{village.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {village.description}
        </p>
      </div>
    </motion.div>
  );
}