"use client";

import { motion } from "framer-motion";
import { Search, Scroll } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function SearchHeader({ searchQuery, onSearchChange }: SearchHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-8"
    >
      <div className="flex items-center gap-4">
        <Scroll className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold">Naruto Character Explorer</h1>
      </div>
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search characters..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </motion.div>
  );
}