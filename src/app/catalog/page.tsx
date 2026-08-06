import { ProductGrid } from "@/components/sections/ProductGrid";
import { ProductFilters } from "@/components/sections/ProductFilters";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Suspense } from "react";

// Reusing MOCK_PRODUCTS for the catalog demo
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
  },
  {
    id: "5",
    title: "Canvas Silk",
    price: 85.00,
    swatchHex: "#FAF7F5",
    images: ["https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=800&q=80"]
  },
  {
    id: "6",
    title: "Midnight Shimmer",
    price: 95.00,
    swatchHex: "#221D1D",
    images: ["https://images.unsplash.com/photo-1736434518489-0eb84070017f?w=800&q=80"]
  }
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      {/* Header */}
      <Header />

      <main className="grow">
        <div className="container mx-auto py-12">
          <div className="px-6 lg:px-12 mb-8">
            <h1 className="font-fraunces text-4xl md:text-5xl tracking-tighter mb-4">The Collection</h1>
            <p className="font-jakarta text-lacquer-ink/70 max-w-xl">
              Discover our full range of handcrafted, reusable press-on lacquers designed for effortless luxury.
            </p>
          </div>
          
          <Suspense fallback={<div className="h-24 bg-lacquer-canvas border-b border-lacquer-ink/10 animate-pulse" />}>
            <ProductFilters />
          </Suspense>
          
          {/* Promotional Banner linking to Sizing */}
          <div className="px-6 lg:px-12 my-8">
            <div className="bg-[#EBE5E0] border border-lacquer-ink/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-fraunces text-2xl mb-2">Find Your Perfect Fit</h3>
                <p className="font-jakarta text-sm text-lacquer-ink/70">
                  Not sure about your size? Use our interactive guide to find your perfect match before ordering.
                </p>
              </div>
              <Link 
                href="/sizing"
                className="shrink-0 px-6 py-3 bg-lacquer-ink text-lacquer-canvas font-jakarta text-sm uppercase tracking-wider rounded-sm hover:bg-black transition-colors"
              >
                View Sizing Guide
              </Link>
            </div>
            
            {/* Custom Request Banner */}
            <div className="bg-lacquer-surface text-lacquer-canvas border border-lacquer-ink/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
              <div>
                <h3 className="font-fraunces text-2xl mb-2">Want to customize something like this?</h3>
                <p className="font-jakarta text-sm text-lacquer-canvas/70">
                  Commission a one-of-a-kind set designed exclusively for you.
                </p>
              </div>
              <Link 
                href="/custom"
                className="shrink-0 px-6 py-3 bg-white text-lacquer-ink font-jakarta text-sm uppercase tracking-wider rounded-sm hover:bg-[#EBE5E0] transition-colors"
              >
                Bespoke Request &rarr;
              </Link>
            </div>
          </div>

          <ProductGrid products={MOCK_PRODUCTS} />
        </div>
      </main>

      {/* Shared Footer (Ideally a component, duplicated here for brevity in demo) */}
      <footer className="bg-lacquer-surface text-lacquer-canvas py-16 px-6 lg:px-12 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-canvas/40">
          <p>&copy; {new Date().getFullYear()} Press & Polish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
