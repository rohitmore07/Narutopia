"use client";

import { cn } from "@/lib/utils";
import { getNatureTypeColor } from "@/lib/utils/nature-type-utils";

interface NatureTypesProps {
  types: string[];
}

export function NatureTypes({ types }: NatureTypesProps) {
  return (
    <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
      {types.map((type) => (
        <span
          key={type}
          className={cn(
            "px-2 py-1 rounded-full text-xs font-medium text-white",
            getNatureTypeColor(type)
          )}
        >
          {type}
        </span>
      ))}
    </div>
  );
}