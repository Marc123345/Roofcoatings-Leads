"use client";
import { motion } from "framer-motion";

const items = [
  "100+ Contractors on the System",
  "$2,000/mo — Cancel Anytime",
  "First Lead in Under 48 Hours",
  "5-10x Return on Ad Spend",
  "Exclusive Leads — Never Shared",
  "Pre-Qualified Residential Leads",
  "No Contracts, No BS",
  "Proven for Roof Coating",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 bg-navy border-y border-white/[0.04]">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((text, i) => (
          <span key={i} className="text-white/25 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mx-6 sm:mx-10 flex items-center gap-3">
            <span className="w-1 h-1 bg-gold shrink-0" />
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
