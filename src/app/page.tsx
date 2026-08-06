import { Hero } from "@/components/sections/Hero";
import Link from "next/link";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ProductFilters } from "@/components/sections/ProductFilters";
import { Header } from "@/components/layout/Header";
import Image from "next/image";
import { Suspense } from "react";

// Mock products for the home page rail
const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "Bordeaux Noir",
    price: 85.00,
    swatchHex: "#5B1217",
    images: ["https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"]
  },
  {
    id: "2",
    title: "Taupe Chrome",
    price: 95.00,
    swatchHex: "#8C7A70",
    images: ["https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=800&q=80"]
  },
  {
    id: "3",
    title: "Gilded Foil",
    price: 115.00,
    swatchHex: "#D4AF37",
    images: ["https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"]
  },
  {
    id: "4",
    title: "Obsidian Velvet",
    price: 90.00,
    swatchHex: "#161313",
    images: ["https://images.unsplash.com/photo-1612887390768-fb02affea7a6?w=800&q=80"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      {/* Announcement Banner */}
      <div className="w-full bg-lacquer-ink text-lacquer-canvas text-center py-2 px-4 font-jetbrains text-xs tracking-widest uppercase">
        Complimentary overnight shipping on all bespoke orders. Ends in 24:00:00
      </div>

      {/* Header / Nav (Simplified for demo) */}
      <Header />

      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Bestsellers Section */}
        <div className="container mx-auto">
          <Suspense fallback={<div className="h-24 bg-lacquer-canvas border-b border-lacquer-ink/10 animate-pulse" />}>
            <ProductFilters />
          </Suspense>
          <ProductGrid title="Curated Bestsellers" products={MOCK_PRODUCTS} />
        </div>



        {/* UGC Customer Photo Showcase */}
        <section className="py-24 bg-lacquer-canvas px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl mb-4">Worn by Muses</h2>
            <p className="font-jakarta text-lacquer-ink/70">Tag @pressandpolish to be featured.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image 
                  src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1619607146034-5a05296c8f9a' : '1630843599725-32ead7671867'}?w=400&q=80`}
                  alt="Customer photo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-fraunces text-xl transition-opacity duration-300">
                    Shop Look
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>

      {/* Dark Obsidian Footer */}
      <footer className="bg-lacquer-surface text-lacquer-canvas py-16 px-6 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-lacquer-canvas/20 pb-12 mb-8">
          <div>
            <h2 className="font-fraunces text-3xl mb-6 tracking-tighter">PRESS & POLISH</h2>
            <p className="font-jakarta text-sm text-lacquer-canvas/70 max-w-xs">
              Elevating the press-on experience with bespoke, handcrafted lacquers designed to command the room.
            </p>
          </div>
          
          <div>
            <h4 className="font-jetbrains text-xs uppercase tracking-widest mb-6 text-lacquer-canvas/50">Explore</h4>
            <ul className="space-y-4 font-jakarta text-sm">
              <li><Link href="/" className="hover:text-bordeaux-gloss transition-colors">Home</Link></li>
              <li><Link href="/catalog" className="hover:text-bordeaux-gloss transition-colors">Catalog</Link></li>
              <li><Link href="/sizing" className="hover:text-bordeaux-gloss transition-colors">Sizing Guide</Link></li>
              <li><Link href="#custom" className="hover:text-bordeaux-gloss transition-colors">Custom Request</Link></li>
              <li><a href="#" className="hover:text-bordeaux-gloss transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-jetbrains text-xs uppercase tracking-widest mb-6 text-lacquer-canvas/50">The Atelier Newsletter</h4>
            <div className="flex border-b border-lacquer-canvas/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none grow font-jakarta text-sm placeholder:text-lacquer-canvas/30"
              />
              <button className="font-jetbrains text-xs uppercase tracking-widest hover:text-bordeaux-gloss transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-canvas/40">
          <p>&copy; {new Date().getFullYear()} Press & Polish. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Secure Checkout</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
