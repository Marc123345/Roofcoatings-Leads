"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import ParticleField from "./visuals/ParticleField";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Aerial view of buildings"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <ParticleField />

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 hidden sm:block w-[300px] h-[300px] lg:w-[900px] lg:h-[900px] bg-blue/8 rounded-full -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 py-28 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Ready to Fill{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                Your Pipeline?
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
              Get exclusive roof coating leads delivered directly to your business —
              plus a free custom 5-page website built specifically for your company.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <motion.a
              href="/get-started"
              className="mt-10 inline-flex items-center w-full sm:w-auto justify-center gap-3 bg-gradient-to-r from-gold to-yellow-400 text-navy px-8 py-5 sm:px-12 sm:py-6 rounded-full font-bold text-lg sm:text-xl relative overflow-hidden group shadow-2xl shadow-gold/30"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(234,179,8,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Claim Your Free Website + Audit &rarr;</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <p className="mt-4 text-white/80 text-sm">
              Free 5-page website. Free lead audit. No contracts.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.55}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              {["No Shared Leads", "No Contracts", "Just Results"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.6}>
            <p className="mt-8 text-gold font-bold text-lg">roofcoatleads.com</p>
            <div className="mt-3 flex justify-center text-gold text-xl tracking-widest">{"★★★★★"}</div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
