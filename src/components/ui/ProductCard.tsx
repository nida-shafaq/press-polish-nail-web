"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SwatchChip } from "@/components/ui/SwatchChip";
import { useCartStore } from "@/store/useCartStore";

interface Product {
  id: string;
  title: string;
  price: number;
  swatchHex: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, showToast, toggleCart } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigation to PDP
    e.stopPropagation(); // prevent card click
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      swatchHex: product.swatchHex,
      image: product.images[0],
      quantity: 1
    });
    showToast(`${product.title} added to your bag.`);
  };

  return (
    <Link href={`/product/${product.id}`} className="block">
      <motion.div 
        className="group relative flex flex-col gap-4 cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-[#EBE5E0]">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Quick Add overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleQuickAdd}
            className="w-full py-3 bg-lacquer-surface text-lacquer-canvas font-jakarta text-sm uppercase tracking-wider rounded-sm hover:bg-black transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-fraunces text-lg text-lacquer-ink">{product.title}</h3>
          <p className="font-jetbrains text-sm text-lacquer-ink/70">${product.price.toFixed(2)}</p>
        </div>
        <SwatchChip colorHex={product.swatchHex} size="sm" />
      </div>
    </motion.div>
    </Link>
  );
}
