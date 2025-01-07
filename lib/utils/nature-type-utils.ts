export function getNatureTypeColor(type: string): string {
  const colors: Record<string, string> = {
    Fire: "bg-red-500",
    Water: "bg-blue-500",
    Earth: "bg-amber-600",
    Wind: "bg-teal-500",
    Lightning: "bg-yellow-500",
    Yin: "bg-purple-500",
    Yang: "bg-orange-500"
  };

  return colors[type] || "bg-gray-500";
}