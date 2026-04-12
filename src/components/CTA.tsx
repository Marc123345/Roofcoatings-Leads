"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";
import BookingOverlay from "./BookingOverlay";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <>
    <section ref={ref} id="cta" className="bg-navy relative overflow-hidden mesh-gradient py-24 sm:py-32 lg:py-44">
      <div className="absolute inset-0 grid-pattern" />

      {/* Oversized background text — parallax */}
      <motion.div
        className="bg-text top-1/2 left-1/2 -translate-x-1/2 text-white"
        style={{ y }}
      >
        GROWTH
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top pill */}
        <AnimateIn>
          <div className="flex justify-center mb-8">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase">
              
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Spots Filling Up</span>
            </div>
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn delay={0.1}>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
            Ready to Fill{" "}
            <span className="text-gradient-gold">Your Pipeline?</span>
          </h2>
        </AnimateIn>

        {/* Sub */}
        <AnimateIn delay={0.2}>
          <p className="mt-6 text-white text-base sm:text-lg leading-relaxed text-center max-w-xl mx-auto">
            Pre-qualified leads delivered from day one. $2,000/month. Cancel anytime.
          </p>
        </AnimateIn>

        {/* CTA buttons */}
        <AnimateIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <motion.button
              onClick={() => setOverlayOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3.5 sm:px-10 sm:py-5 rounded-sm font-bold text-sm sm:text-lg  group cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimateIn>

        {/* Trust pills */}
        <AnimateIn delay={0.4}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["No contracts", "Cancel anytime", "Results from day 1", "Dedicated support"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-white text-xs">
                <Check className="w-3 h-3 text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Stats — large, spaced */}
        <AnimateIn delay={0.5}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-900 rounded-sm overflow-hidden">
            {[
              { value: 100, suffix: "+", label: "Contractors" },
              { value: 1, prefix: "$", suffix: "k", label: "Per Month" },
              { value: 48, prefix: "<", suffix: "h", label: "First Lead" },
              { value: 10, prefix: "", suffix: "x", label: "Avg. ROI" },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy p-6 sm:p-8 text-center">
                <p className="text-white font-black text-3xl sm:text-4xl lg:text-5xl ">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-white text-xs uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Stars + domain */}
        <AnimateIn delay={0.6}>
          <div className="mt-12 text-center">
            <div className="flex justify-center text-gold text-2xl tracking-[0.4em] mb-3">★★★★★</div>
            <p className="text-white text-sm font-medium tracking-wider">roofcoatleads.com</p>
          </div>
        </AnimateIn>
      </div>
    </section>
    <BookingOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
