"use client";

import { motion } from "framer-motion";
import { Scroll, Search, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface PokedexLayoutProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  children: React.ReactNode;
}

export function PokedexLayout({ searchQuery, onSearchChange, children }: PokedexLayoutProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Scroll className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Naruto Character Explorer</h1>
            </div>
            <div className="flex items-center gap-4">
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SunMoon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}