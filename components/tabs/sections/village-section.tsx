"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Village } from "@/lib/types";
import { VillageGrid } from "@/components/village/village-grid";
import { VillageDetails } from "@/components/village/village-details";

interface VillageSectionProps {
  villages: Village[];
  isLoading?: boolean;
}

export function VillageSection({ villages, isLoading }: VillageSectionProps) {
  const [selectedVillage, setSelectedVillage] = useState<Village | null>(null);

  return (
    <div className="mt-6">
      <VillageGrid 
        villages={villages} 
        isLoading={isLoading}
        onSelectVillage={setSelectedVillage}
      />

      <AnimatePresence>
        {selectedVillage && (
          <VillageDetails
            village={selectedVillage}
            onClose={() => setSelectedVillage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}