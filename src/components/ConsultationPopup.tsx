"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function ConsultationPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("roofcoat-popup-dismissed");
    if (dismissed) return;

    // Show after 30 seconds on page
    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem("roofcoat-popup-dismissed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[998] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={close} />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-navy border border-zinc-800 rounded-sm max-w-md w-full p-8 sm:p-10 text-center"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4 block">
              // Free Strategy Call
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-3">
              Want More<br />
              <span className="text-gold">Qualified Leads?</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Book a free 30-minute strategy call. We&apos;ll map out your market, your ideal lead profile, and exactly how many exclusive leads we can deliver each month.
            </p>

            <a
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors w-full group"
            >
              Book My Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-white/30 text-xs mt-4 font-mono tracking-wider uppercase">
              No contracts · Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
