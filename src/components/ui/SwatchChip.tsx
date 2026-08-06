"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SwatchChipProps {
  colorHex: string;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function SwatchChip({
  colorHex,
  className,
  isSelected,
  onClick,
  size = "md",
}: SwatchChipProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative rounded-full shadow-inner overflow-hidden flex items-center justify-center transition-all",
        sizeClasses[size],
        isSelected ? "ring-2 ring-offset-2 ring-lacquer-ink ring-offset-lacquer-canvas" : "ring-1 ring-black/10",
        className
      )}
      style={{ backgroundColor: colorHex }}
      aria-label={`Select color ${colorHex}`}
    >
      {/* Specular sheen effect simulating high-gloss liquid lacquer */}
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/40 to-white/70 opacity-50 transform -rotate-45 scale-125 translate-x-[-10%] translate-y-[-10%]" />
      <div className="absolute top-1 left-2 w-[40%] h-[20%] bg-white/60 rounded-full blur-[1px] rotate-[-20deg]" />
    </motion.button>
  );
}
