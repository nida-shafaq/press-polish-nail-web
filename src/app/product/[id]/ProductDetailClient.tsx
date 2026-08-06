"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/mockData";
import { useCartStore } from "@/store/useCartStore";
import { SwatchChip } from "@/components/ui/SwatchChip";

export function ProductDetailClient({ product }: { product: Product }) {
  const { addItem, showToast } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      swatchHex: product.swatchHex,
      image: product.images[currentImageIdx],
      quantity
    });
    showToast(`${quantity}x ${product.title} added to your bag.`);
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="lg:w-1/2 space-y-4">
          <div className="relative aspect-3/4 w-full bg-[#EBE5E0] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[currentImageIdx]}
                  alt={product.title}
                  fill
                  className="object-cover mix-blend-multiply"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Thumbnails if multiple images exist */}
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`relative w-20 aspect-3/4 bg-[#EBE5E0] overflow-hidden transition-all ${
                    currentImageIdx === idx ? "ring-1 ring-lacquer-ink ring-offset-2" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-md"
          >
            <div>
              <h1 className="font-fraunces text-4xl lg:text-6xl tracking-tight mb-2 text-lacquer-ink">
                {product.title}
              </h1>
              <p className="font-jetbrains text-lg text-lacquer-ink/70">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="font-jakarta text-lacquer-ink/80 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-lacquer-ink/10">
              <div className="flex items-center gap-4">
                <span className="font-jetbrains text-xs uppercase tracking-widest text-lacquer-ink/50">
                  Finish:
                </span>
                <SwatchChip colorHex={product.swatchHex} size="md" />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-lacquer-ink/20">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-lacquer-ink/50 hover:text-lacquer-ink transition-colors"
                  >
                    -
                  </button>
                  <span className="font-jetbrains w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-lacquer-ink/50 hover:text-lacquer-ink transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-lacquer-surface text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm hover:bg-black transition-colors"
                >
                  Add to Bag
                </button>
              </div>
              <p className="font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-ink/40 text-center">
                Free overnight shipping on all bespoke sets
              </p>
            </div>

            {/* Accordion/Details mock */}
            <div className="pt-8 space-y-4 border-t border-lacquer-ink/10">
              <details className="group cursor-pointer">
                <summary className="font-jetbrains text-xs uppercase tracking-widest text-lacquer-ink/70 flex justify-between items-center py-2">
                  Materials & Craftsmanship
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <p className="font-jakarta text-sm text-lacquer-ink/60 pt-2 pb-4">
                  Hand-painted with 10-free luxury polish on flexible, durable gel tips. Designed to mimic the natural curve of your nail bed.
                </p>
              </details>
              <details className="group cursor-pointer">
                <summary className="font-jetbrains text-xs uppercase tracking-widest text-lacquer-ink/70 flex justify-between items-center py-2">
                  Application & Wear
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <p className="font-jakarta text-sm text-lacquer-ink/60 pt-2 pb-4">
                  Wears for up to 2-3 weeks with proper application. Can be removed gently and reused multiple times. Application kit included.
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
