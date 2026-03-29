"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneMockup from "./visuals/PhoneMockup";
import AdCreativeMockup from "./visuals/AdCreativeMockup";
import ParticleField from "./visuals/ParticleField";
import Marquee from "./visuals/Marquee";

export default function Hero() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden min-h-[85dvh] sm:min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80"
            alt="Commercial roof aerial view"
            fill
            className="object-cover opacity-15" sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />
        </div>

        <ParticleField />

        <div className="absolute top-[-200px] right-[-100px] hidden sm:block w-[300px] h-[300px] lg:w-[700px] lg:h-[700px] bg-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-200px] left-[-100px] hidden sm:block w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-gold/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              {/* Trust bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm text-sm">
                  <span className="text-gold">★★★★★</span>
                  <span className="text-white/70">Trusted by 100+ Roofing Contractors</span>
                </span>
                <span className="text-white/70 hidden sm:inline">·</span>
                <span className="text-white/70 text-sm">Proven System</span>
                <span className="text-white/70 hidden sm:inline">·</span>
                <span className="text-white/70 text-sm">Results from Day 1</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                A Proven Lead System Built{" "}
                <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                  Specifically for Roof Coating.
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We&apos;ve already cracked the code for 100+ roof coating contractors. Our
                Facebook Ad system delivers exclusive, pre-qualified leads from day one —
                because the system is already proven in your niche.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href="/get-started"
                  className="relative inline-flex items-center justify-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-8 py-4 rounded-full font-bold text-lg overflow-hidden group shadow-lg shadow-gold/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Get My Free Lead Strategy Audit &rarr;</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See How It Works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.p
                className="mt-3 text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                No charge. No pitch. Just an honest look at your market.
              </motion.p>

              {/* Stat strip */}
              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { value: "100+", label: "contractors on the system" },
                  { value: "3+", label: "jobs closed month one" },
                  { value: "<48h", label: "to first lead" },
                  { value: "5-10x", label: "ROI in 90 days" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                  >
                    <span className="text-gold font-bold text-sm">{stat.value}</span>
                    <span className="text-white/80 text-xs">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5 relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2 flex items-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <PhoneMockup />
                  </motion.div>
                </div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <AdCreativeMockup variant={1} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <AdCreativeMockup variant={2} />
                </motion.div>
              </div>

              <motion.div
                className="absolute -top-3 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/30 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Proven System
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
      </section>

      <Marquee />
    </>
  );
}
