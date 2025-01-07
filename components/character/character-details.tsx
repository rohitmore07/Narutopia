"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Character } from "@/lib/types";
import { CharacterStats } from "./character-stats";
import { ImageFallback } from "@/components/ui/image-fallback";
import { useEffect } from "react";
import gsap from "gsap";

interface CharacterDetailsProps {
  character: Character;
  onClose: () => void;
}

export function CharacterDetails({ character, onClose }: CharacterDetailsProps) {
  useEffect(() => {
    gsap.from(".stat-bar", {
      width: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <motion.div 
                className="flex gap-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
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
                  <motion.h2 
                    className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {character.name}
                  </motion.h2>
                  <motion.div 
                    className="flex gap-2 flex-wrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
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
                  </motion.div>
                </div>
              </motion.div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <CharacterStats stats={character.stats} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}