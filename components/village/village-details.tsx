"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Village } from "@/lib/types";
import { ImageFallback } from "@/components/ui/image-fallback";

interface VillageDetailsProps {
  village: Village;
  onClose: () => void;
}

export function VillageDetails({ village, onClose }: VillageDetailsProps) {
  return (
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
            <h2 className="text-2xl font-bold">{village.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <ImageFallback
                src={village.image}
                alt={village.name}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {village.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}