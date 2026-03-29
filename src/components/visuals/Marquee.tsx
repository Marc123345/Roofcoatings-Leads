"use client";
import { motion } from "framer-motion";

const partners = [
  "Summit Roof Coatings",
  "Jenkins Roofing Solutions",
  "RG Commercial Systems",
  "Hall Systems Inc.",
  "Thompson Commercial Coatings",
  "Citywide Restorations",
  "Wilson & Sons Coatings",
  "Elite Roof Systems",
  "Lewis Roofing & Solar",
  "Young's Roof Care",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 bg-navy-light/50 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...partners, ...partners].map((name, i) => (
          <span key={i} className="text-white/70 text-sm font-medium flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold/40 rounded-none" />
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
