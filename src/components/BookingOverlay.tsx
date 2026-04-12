"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, X } from "lucide-react";

interface BookingOverlayProps {
  open: boolean;
  onClose: () => void;
  defaultTab?: "book" | "contact";
}

export default function BookingOverlay({ open, onClose, defaultTab = "book" }: BookingOverlayProps) {
  const [tab, setTab] = useState<"book" | "contact">(defaultTab);

  useEffect(() => {
    if (open) {
      setTab(defaultTab);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, defaultTab]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-navy-light rounded-sm border border-white/10 overflow-hidden flex flex-col"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tab bar */}
            <div className="flex shrink-0">
              <button
                onClick={() => setTab("book")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${
                  tab === "book"
                    ? "bg-gold text-navy"
                    : "bg-navy-light text-white hover:text-white"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </button>
              <button
                onClick={() => setTab("contact")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${
                  tab === "contact"
                    ? "bg-gold text-navy"
                    : "bg-navy-light text-white hover:text-white"
                }`}
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-2">
              {tab === "book" ? (
                <iframe
                  src="https://api.leadconnectorhq.com/widget/bookings/roofcoatingleads"
                  style={{ width: "100%", height: "700px", border: "none", borderRadius: "16px" }}
                  title="Book a Free Strategy Audit"
                />
              ) : (
                <iframe
                  src="https://form.jotform.com/260952924952062"
                  style={{ width: "100%", minHeight: "clamp(350px, 70vh, 600px)", border: "none", borderRadius: "16px" }}
                  title="Contact Form"
                  allow="geolocation; microphone; camera; fullscreen"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
