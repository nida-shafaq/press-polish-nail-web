"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SIZES = [
  { label: "XS", thumb: 14, index: 10, middle: 11, ring: 10, pinky: 7 },
  { label: "S", thumb: 15, index: 11, middle: 12, ring: 11, pinky: 8 },
  { label: "M", thumb: 16, index: 12, middle: 13, ring: 12, pinky: 9 },
  { label: "L", thumb: 17, index: 13, middle: 14, ring: 13, pinky: 10 },
];

export function SizingGuide() {
  const [savedSize, setSavedSize] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("claw_saved_size");
    if (stored) setSavedSize(stored);
  }, []);

  const handleSave = (size: string) => {
    setSavedSize(size);
    localStorage.setItem("claw_saved_size", size);
  };

  return (
    <section className="w-full py-24 bg-[#EBE5E0] text-lacquer-ink relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-4xl md:text-5xl mb-4 text-lacquer-ink">The Perfect Fit</h2>
          <p className="font-jakarta text-lacquer-ink/70 max-w-xl mx-auto">
            Measure the widest part of your natural nail bed using a soft measuring tape. 
            Store your size for seamless future checkouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Measurement Guide */}
          <div className="bg-lacquer-canvas p-8 md:p-12 shadow-sm border border-lacquer-ink/5 relative">
            <h3 className="font-jakarta font-medium text-xl mb-6">How to Measure</h3>
            <ol className="space-y-6 font-jakarta text-sm text-lacquer-ink/80">
              <li className="flex gap-4">
                <span className="font-jetbrains text-bordeaux-gloss font-bold">01</span>
                <p>Place a piece of transparent tape across the widest part of your nail.</p>
              </li>
              <li className="flex gap-4">
                <span className="font-jetbrains text-bordeaux-gloss font-bold">02</span>
                <p>Mark the edges of your nail bed with a fine-tip pen.</p>
              </li>
              <li className="flex gap-4">
                <span className="font-jetbrains text-bordeaux-gloss font-bold">03</span>
                <p>Remove the tape and measure the distance between marks in millimeters.</p>
              </li>
            </ol>
            
            <div className="mt-8 p-4 bg-taupe-chrome/10 border border-taupe-chrome/20 text-xs font-jetbrains">
              PRO TIP: If you are between sizes, always size up. You can gently file the edges for a bespoke fit.
            </div>
          </div>

          {/* Size Calculator */}
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-2 text-center font-jetbrains text-xs uppercase tracking-wider text-lacquer-ink/50 pb-2 border-b border-lacquer-ink/10">
              <span>Thumb</span>
              <span>Index</span>
              <span>Mid</span>
              <span>Ring</span>
              <span>Pinky</span>
            </div>
            
            <div className="space-y-4">
              {SIZES.map((size) => (
                <motion.button
                  key={size.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSave(size.label)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 border transition-colors",
                    savedSize === size.label 
                      ? "border-lacquer-ink bg-lacquer-ink text-lacquer-canvas" 
                      : "border-lacquer-ink/20 hover:border-lacquer-ink/50 bg-lacquer-canvas"
                  )}
                >
                  <span className="font-fraunces text-2xl w-12 text-left">{size.label}</span>
                  <div className="flex-1 grid grid-cols-5 gap-1 md:gap-2 text-center font-jetbrains text-xs md:text-sm">
                    <span>{size.thumb}</span>
                    <span>{size.index}</span>
                    <span>{size.middle}</span>
                    <span>{size.ring}</span>
                    <span>{size.pinky}</span>
                  </div>
                  <div className="w-6 text-right">
                    {savedSize === size.label && (
                      <span className="text-bordeaux-gloss font-bold">✓</span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            
            <div className="text-center pt-4">
              <button className="font-jakarta text-sm underline decoration-lacquer-ink/30 underline-offset-4 hover:decoration-lacquer-ink transition-colors">
                Need custom sizing? Request a bespoke set.
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
