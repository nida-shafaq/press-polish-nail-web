import { MOCK_PRODUCTS } from "@/lib/mockData";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ProductDetailClient } from "./ProductDetailClient";

// Generate static params for all mock products so it can be exported statically
export function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get 4 relatable products (excluding the current one)
  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      <Header />

      <main className="grow">
        <ProductDetailClient product={product} />

        {/* You May Also Like Section */}
        <div className="container mx-auto py-24 border-t border-lacquer-ink/10">
          <ProductGrid title="You May Also Like" products={relatedProducts} />
        </div>
      </main>

      {/* Shared Footer */}
      <footer className="bg-lacquer-surface text-lacquer-canvas py-16 px-6 lg:px-12 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-canvas/40">
          <p>&copy; {new Date().getFullYear()} Press & Polish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
