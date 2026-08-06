import { ProductCard } from "@/components/ui/ProductCard";

interface ProductGridProps {
  title?: string;
  products: any[];
}

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="py-16 px-6 lg:px-12 bg-lacquer-canvas">
      {title && (
        <h2 className="font-fraunces text-3xl md:text-4xl text-lacquer-ink mb-12 border-b border-lacquer-ink/10 pb-4">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
