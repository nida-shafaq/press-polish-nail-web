"use client";

import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { SwatchChip } from "@/components/ui/SwatchChip";

const filterColors = [
  { hex: "#5B1217", name: "Bordeaux" },
  { hex: "#8C7A70", name: "Taupe" },
  { hex: "#D4AF37", name: "Gilded" },
  { hex: "#161313", name: "Noir" },
  { hex: "#FAF7F5", name: "Canvas" },
];

export function ProductFilters() {
  const [colors, setColors] = useQueryState(
    "color",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const toggleColor = (hex: string) => {
    const current = new Set(colors);
    if (current.has(hex)) {
      current.delete(hex);
    } else {
      current.add(hex);
    }
    setColors(Array.from(current).length > 0 ? Array.from(current) : null);
  };

  return (
    <div className="flex flex-col gap-4 p-6 border-b border-lacquer-ink/10 bg-lacquer-canvas">
      <div className="flex items-center justify-between">
        <h3 className="font-fraunces text-xl text-lacquer-ink">Filter Collection</h3>
        {colors.length > 0 && (
          <button 
            onClick={() => setColors(null)}
            className="text-xs font-jetbrains text-lacquer-ink/60 hover:text-lacquer-ink"
          >
            Clear Filters
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-jetbrains text-xs text-lacquer-ink/50 uppercase">By Color / Finish</span>
          <div className="flex gap-3 flex-wrap">
            {filterColors.map((c) => (
              <div key={c.hex} className="flex flex-col items-center gap-1">
                <SwatchChip
                  colorHex={c.hex}
                  size="sm"
                  isSelected={colors.includes(c.hex)}
                  onClick={() => toggleColor(c.hex)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
