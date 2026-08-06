import { SizingGuide } from "@/components/sections/SizingGuide";
import Link from "next/link";
import { CartDrawer } from "@/components/layout/CartDrawer";

export default function SizingPage() {
  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-lacquer-canvas/80 backdrop-blur-md border-b border-lacquer-ink/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-jetbrains text-sm uppercase tracking-widest cursor-pointer hover:text-bordeaux-gloss transition-colors">
            Home
          </Link>
          <div className="font-fraunces text-2xl tracking-tighter">PRESS & POLISH</div>
          <div className="flex items-center gap-6">
            <Link href="/catalog" className="font-jetbrains text-sm uppercase tracking-widest hover:text-bordeaux-gloss hidden md:block transition-colors">
              Catalog
            </Link>
            <CartDrawer />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <SizingGuide />
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
