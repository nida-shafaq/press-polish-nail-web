"use client";

import Link from "next/link";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-lacquer-canvas/80 backdrop-blur-md border-b border-lacquer-ink/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-lacquer-ink" />
            </button>
            <Link href="/catalog" className="font-jetbrains text-sm uppercase tracking-widest cursor-pointer hover:text-bordeaux-gloss transition-colors hidden md:block">
              Catalog
            </Link>
          </div>
          
          <Link href="/" className="font-fraunces text-xl md:text-2xl tracking-tighter">
            PRESS & POLISH
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/sizing" className="font-jetbrains text-sm uppercase tracking-widest hover:text-bordeaux-gloss hidden md:block transition-colors">
              Sizing Guide
            </Link>
            <CartDrawer />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-lacquer-canvas z-50 shadow-2xl flex flex-col md:hidden border-r border-lacquer-ink/10"
            >
              <div className="h-16 flex items-center px-6 border-b border-lacquer-ink/10">
                <button 
                  className="p-2 -ml-2 text-lacquer-ink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6 font-fraunces text-2xl">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-bordeaux-gloss">Home</Link>
                <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-bordeaux-gloss">Catalog</Link>
                <Link href="/sizing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-bordeaux-gloss">Sizing Guide</Link>
                <Link href="/custom" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-bordeaux-gloss">Bespoke Request</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
