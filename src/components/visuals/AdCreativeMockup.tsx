"use client";
import { motion } from "framer-motion";

export default function AdCreativeMockup({ variant = 1 }: { variant?: number }) {
  if (variant === 1) {
    return (
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[280px]"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25 }}
      >
        {/* Ad header */}
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-none">
            <div className="flex flex-col items-center"><span>R</span><span>C</span></div>
          </div>
          <div>
            <p className="text-navy text-[10px] font-bold">RoofCoat Leads</p>
            <p className="text-slate-600 text-[8px]">Sponsored</p>
          </div>
        </div>
        {/* Ad image area */}
        <div className="bg-gradient-to-br from-blue to-navy aspect-[4/3] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="roofPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 L20 10 L0 10 Z" fill="white" opacity="0.3" />
              </pattern>
              <rect width="100" height="100" fill="url(#roofPattern)" />
            </svg>
          </div>
          <div className="text-center relative z-10 p-4">
            <p className="text-gold font-bold text-sm">Is Your Roof Leaking?</p>
            <p className="text-white text-[10px] mt-1 opacity-80">Get a free roof coating estimate today</p>
            <div className="mt-3 bg-gold text-navy text-[10px] font-bold px-4 py-1.5 rounded-full inline-block">
              Get Free Quote
            </div>
          </div>
        </div>
        {/* Engagement */}
        <div className="px-3 py-2 flex items-center justify-between text-slate-600 text-[9px]">
          <span>147 leads generated</span>
          <span>4.2% CTR</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[280px]"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-none">
          <div className="flex flex-col items-center"><span>R</span><span>C</span></div>
        </div>
        <div>
          <p className="text-navy text-[10px] font-bold">RoofCoat Leads</p>
          <p className="text-slate-600 text-[8px]">Sponsored</p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-navy to-navy-light aspect-[4/3] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-4 right-4 w-16 h-16 bg-gold/20 rounded-full blur-xl" />
        <div className="text-center relative z-10 p-4">
          <p className="text-white font-bold text-sm">Commercial Roof Coating</p>
          <p className="text-gold text-[10px] mt-1 font-semibold">Save up to 70% vs. Replacement</p>
          <p className="text-white/80 text-[9px] mt-1">Extend your roof life by 15+ years</p>
          <div className="mt-3 bg-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-full inline-block">
            Learn More
          </div>
        </div>
      </div>
      <div className="px-3 py-2 flex items-center justify-between text-slate-600 text-[9px]">
        <span>203 leads generated</span>
        <span>5.1% CTR</span>
      </div>
    </motion.div>
  );
}
