"use client";

import { motion } from "framer-motion";

interface PaginationCountProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export function PaginationCount({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems
}: PaginationCountProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <motion.div
      className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Showing {startItem}-{endItem} of {totalItems} characters
    </motion.div>
  );
}