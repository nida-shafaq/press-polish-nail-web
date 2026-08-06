"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { Check } from "lucide-react";

export function Toast() {
  const { toastMessage, hideToast } = useCartStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={hideToast}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-lacquer-ink text-lacquer-canvas px-6 py-4 rounded-sm shadow-xl cursor-pointer"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EBE5E0]/20">
            <Check className="w-3 h-3 text-[#EBE5E0]" />
          </div>
          <span className="font-jakarta text-sm font-medium tracking-wide">
            {toastMessage}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
