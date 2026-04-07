"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const CLIENTS = [
  { name: "Summit Roof Coatings", abbr: "SRC" },
  { name: "Jenkins Roofing", abbr: "JR" },
  { name: "RG Commercial", abbr: "RGC" },
  { name: "Lewis Roofing & Solar", abbr: "LRS" },
  { name: "Citywide Restorations", abbr: "CR" },
  { name: "Wilson & Sons", abbr: "W&S" },
  { name: "Apex Coating Co.", abbr: "ACC" },
  { name: "ProShield Roofing", abbr: "PSR" },
  { name: "Guardian Coat Systems", abbr: "GCS" },
  { name: "Titan Roof Solutions", abbr: "TRS" },
  { name: "SunCoat Pros", abbr: "SCP" },
  { name: "Elite Roof Restoration", abbr: "ERR" },
  { name: "NextGen Coatings", abbr: "NGC" },
  { name: "All-Weather Roofing", abbr: "AWR" },
  { name: "Peak Performance Roof", abbr: "PPR" },
  { name: "Heritage Coat Co.", abbr: "HCC" },
];

function LogoTile({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0 px-6 sm:px-8">
      <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
        <span className="text-gold text-[10px] font-black tracking-wide">{abbr}</span>
      </div>
      <span className="text-white/30 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoSlider() {
  const allLogos = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-navy py-10 sm:py-14 relative overflow-hidden">
      <AnimateIn>
        <div className="text-center mb-8">
          <p className="text-white/30 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
            Trusted by 100+ roof coating contractors nationwide
          </p>
        </div>
      </AnimateIn>

      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left to right */}
        <motion.div
          className="flex items-center will-change-transform mb-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {allLogos.map((c, i) => (
            <LogoTile key={`r1-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </motion.div>

        {/* Row 2 — right to left (reversed order for visual variety) */}
        <motion.div
          className="flex items-center will-change-transform"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {[...allLogos].reverse().map((c, i) => (
            <LogoTile key={`r2-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
