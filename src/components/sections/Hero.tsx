"use client";

import { motion } from "framer-motion";
import { SwatchChip } from "@/components/ui/SwatchChip";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroColors = [
  { hex: "#5B1217", name: "Bordeaux Gloss" },
  { hex: "#8C7A70", name: "Taupe Chrome" },
  { hex: "#D4AF37", name: "Gilded Foil" },
  { hex: "#161313", name: "Obsidian Noir" },
];

export function Hero() {
  const [activeColor, setActiveColor] = useState(heroColors[0]);

  return (
    <section className="relative w-full h-[90vh] bg-lacquer-surface overflow-hidden flex items-center justify-center">
      {/* Background Image (Mocked based on color for dynamic feel) */}
      <motion.div 
        key={activeColor.hex}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, ${activeColor.hex} 0%, #161313 100%)`
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2000"
          alt="Luxury Press-on Nails"
          fill
          className="object-cover mix-blend-overlay opacity-40"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center text-lacquer-canvas mt-16">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-fraunces text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
        >
          Liquid <span className="italic opacity-90">Luxury.</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-jakarta text-lg md:text-xl max-w-lg mb-10 text-lacquer-canvas/80 font-light"
        >
          Bespoke, handcrafted press-on lacquers designed for the modern muse.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/catalog"
            className="inline-block px-8 py-4 bg-lacquer-canvas text-lacquer-ink font-jakarta font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-white transition-colors mb-16"
          >
            Explore Collection
          </Link>
        </motion.div>

        {/* Swatch Selector Rail */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-jetbrains text-xs tracking-widest uppercase text-lacquer-canvas/60">
            {activeColor.name}
          </span>
          <div className="flex gap-4 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {heroColors.map((color) => (
              <SwatchChip
                key={color.hex}
                colorHex={color.hex}
                isSelected={activeColor.hex === color.hex}
                onClick={() => setActiveColor(color)}
                size="md"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
