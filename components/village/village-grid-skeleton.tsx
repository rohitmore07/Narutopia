"use client";

export function VillageGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse"
        >
          <div className="w-full h-32 bg-gray-200 dark:bg-gray-700" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}