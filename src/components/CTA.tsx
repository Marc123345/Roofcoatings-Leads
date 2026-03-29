"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-20 sm:py-28 lg:py-40 relative overflow-hidden">
      {/* Oversized background text */}
      <div className="bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy">
        LEADS
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Massive headline */}
        <AnimateIn>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-navy leading-[0.95] tracking-tight">
            Ready to Fill
            <br />
            <span className="text-gradient-gold">Your Pipeline?</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="mt-8 text-navy/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Pre-qualified leads + a free 5-page website.
            $1,000/month. Cancel anytime.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <motion.a
            href="/get-started"
            className="mt-10 inline-flex items-center gap-3 bg-navy text-white px-8 py-4 sm:px-12 sm:py-5 rounded-none font-bold text-base sm:text-lg group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Claim Your Free Website + Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </AnimateIn>

        {/* Trust strip */}
        <AnimateIn delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { value: "100+", label: "Contractors" },
              { value: "$1k", label: "Per Month" },
              { value: "<48h", label: "First Lead" },
              { value: "5-10x", label: "ROI" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-navy font-black text-2xl sm:text-3xl">{stat.value}</p>
                <p className="text-navy/40 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="mt-12 flex justify-center text-gold text-2xl tracking-[0.3em]">{"★★★★★"}</div>
        </AnimateIn>
      </div>
    </section>
  );
}
