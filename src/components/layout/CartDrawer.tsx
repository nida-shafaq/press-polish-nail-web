"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, isCartOpen, toggleCart, removeItem } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button 
        onClick={() => toggleCart(true)}
        className="font-jetbrains text-sm uppercase tracking-wider hover:text-bordeaux-gloss transition-colors"
      >
        Cart ({totalItems})
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggleCart(false)}
              className="fixed inset-0 bg-lacquer-surface/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-lacquer-canvas z-50 shadow-2xl flex flex-col border-l border-lacquer-ink/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-lacquer-ink/10 shrink-0 bg-lacquer-canvas z-10">
                <h2 className="font-fraunces text-2xl">Your Bag</h2>
                <button 
                  onClick={() => toggleCart(false)}
                  className="font-jetbrains text-sm hover:text-bordeaux-gloss transition-colors"
                >
                  [ CLOSE ]
                </button>
              </div>

              <div className={`flex-1 p-6 min-h-0 ${items.length === 0 ? "overflow-hidden" : "overflow-y-auto"}`}>
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <ShoppingBag className="w-12 h-12 text-lacquer-ink/20 stroke-[1]" />
                    <div>
                      <h3 className="font-fraunces text-2xl text-lacquer-ink mb-2">YOUR BAG IS EMPTY</h3>
                      <p className="font-jakarta text-sm text-lacquer-ink/60 max-w-[250px] mx-auto">
                        Explore our luxury press-on lacquers and find your perfect set.
                      </p>
                    </div>
                    <Link 
                      href="/catalog"
                      onClick={() => toggleCart(false)}
                      className="inline-block px-8 py-4 bg-lacquer-ink text-lacquer-canvas font-jakarta text-sm uppercase tracking-wider rounded-sm hover:bg-black transition-colors"
                    >
                      BROWSE COLLECTION
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col py-4 space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 items-center shrink-0">
                        <div className="relative w-20 h-28 bg-[#EBE5E0] shrink-0 overflow-hidden rounded-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover mix-blend-multiply"
                          />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <h4 className="font-fraunces text-lg leading-tight">{item.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-lacquer-ink/70">
                            <span 
                              className="w-3 h-3 rounded-full border border-lacquer-ink/20"
                              style={{ backgroundColor: item.swatchHex }}
                            />
                            <span className="font-jetbrains">Qty: {item.quantity}</span>
                          </div>
                          <span className="font-jetbrains text-sm">${item.price.toFixed(2)}</span>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-lacquer-ink/40 hover:text-bordeaux-gloss transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 bg-lacquer-canvas border-t border-lacquer-ink/10 space-y-6 shrink-0 z-10">
                  <div className="space-y-2">
                    <label htmlFor="notes" className="font-jetbrains text-xs uppercase text-lacquer-ink/70">Order Notes / Special Requests</label>
                    <textarea 
                      id="notes"
                      className="w-full bg-transparent border border-lacquer-ink/20 rounded-sm p-3 text-sm font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink resize-none"
                      rows={2}
                      placeholder="E.g., Please prioritize shipping..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-between font-jakarta font-medium text-lg">
                    <span>Subtotal</span>
                    <span className="font-jetbrains">${subtotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full py-4 bg-lacquer-surface text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm rounded-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Checkout
                  </button>
                  <p className="font-jetbrains text-[10px] text-center text-lacquer-ink/50 uppercase tracking-widest mt-2">
                    Secure checkout via Stripe
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
