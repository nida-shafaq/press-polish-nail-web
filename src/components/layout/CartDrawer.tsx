"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="font-jetbrains text-sm uppercase tracking-wider hover:text-bordeaux-gloss transition-colors"
      >
        Cart (0)
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-lacquer-surface/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-lacquer-canvas z-50 shadow-2xl flex flex-col border-l border-lacquer-ink/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-lacquer-ink/10">
                <h2 className="font-fraunces text-2xl">Your Bag</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="font-jetbrains text-sm hover:text-bordeaux-gloss transition-colors"
                >
                  [ CLOSE ]
                </button>
              </div>

              <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex flex-col items-center justify-center h-full text-lacquer-ink/50 space-y-4">
                  <p className="font-jakarta text-lg">Your bag is empty.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="font-jetbrains text-sm underline decoration-lacquer-ink/30 underline-offset-4 hover:decoration-lacquer-ink transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
                {/* Cart items would map here */}
              </div>

              <div className="p-6 bg-white/50 border-t border-lacquer-ink/10 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="notes" className="font-jetbrains text-xs uppercase text-lacquer-ink/70">Order Notes / Special Requests</label>
                  <textarea 
                    id="notes"
                    className="w-full bg-transparent border border-lacquer-ink/20 rounded-sm p-3 text-sm font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink focus:border-transparent resize-none"
                    rows={2}
                    placeholder="E.g., Please prioritize shipping..."
                  />
                </div>
                
                <div className="flex items-center justify-between font-jakarta font-medium text-lg">
                  <span>Subtotal</span>
                  <span className="font-jetbrains">$0.00</span>
                </div>

                <button className="w-full py-4 bg-lacquer-surface text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm rounded-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Checkout
                </button>
                <p className="font-jetbrains text-[10px] text-center text-lacquer-ink/50 uppercase tracking-widest mt-2">
                  Secure checkout via Stripe
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
