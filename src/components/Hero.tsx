"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, Users, Clock, TrendingUp } from "lucide-react";
import PhoneMockup from "./visuals/PhoneMockup";
import AdCreativeMockup from "./visuals/AdCreativeMockup";
import ParticleField from "./visuals/ParticleField";
import Marquee from "./visuals/Marquee";

const stats = [
  { icon: <Zap className="w-4 h-4" />, value: "Free", label: "5-page website" },
  { icon: <Users className="w-4 h-4" />, value: "100+", label: "contractors" },
  { icon: <Clock className="w-4 h-4" />, value: "<48h", label: "first lead" },
  { icon: <TrendingUp className="w-4 h-4" />, value: "5-10x", label: "ROI" },
];

export default function Hero() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden mesh-gradient">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80"
            alt="Commercial roof aerial view"
            fill
            className="object-cover opacity-[0.06]" sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/90 to-navy" />
        </div>

        <ParticleField />
        <div className="absolute inset-0 grid-pattern" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Copy */}
            <div>
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-none px-4 py-2 backdrop-blur-sm mb-8"
              >
                <span className="text-gold text-sm">★★★★★</span>
                <span className="text-white/70 text-sm">Trusted by 100+ contractors</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="text-white">A Proven Lead System Built</span>
                <br />
                <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                  Specifically for Roof Coating.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="mt-6 text-base sm:text-lg text-white/70 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                100+ contractors already on the system. Pre-qualified leads from day one.
                Sign up and get a free custom 5-page website for your business.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href="/get-started"
                  className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-none font-bold text-base sm:text-lg overflow-hidden group shadow-lg shadow-gold/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(234,179,8,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Claim Free Website + Audit</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] px-6 py-3.5 sm:px-8 sm:py-4 rounded-none font-semibold text-base sm:text-lg transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See How It Works
                </motion.a>
              </motion.div>

              <motion.p
                className="mt-3 text-white/40 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                No charge. No pitch. No contracts.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="mt-10 grid grid-cols-4 gap-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-gold/60 flex justify-center mb-1">{stat.icon}</div>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className="text-white/50 text-[11px]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Phone + Ad mockups */}
            <motion.div
              className="relative hidden lg:flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-blue/10 rounded-none blur-[80px] scale-75" />

                <div className="relative grid grid-cols-2 gap-5 items-center">
                  {/* Phone — left, taller */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <PhoneMockup />
                  </motion.div>

                  {/* Ad creatives — right, stacked */}
                  <div className="space-y-5">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <AdCreativeMockup variant={1} />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                      <AdCreativeMockup variant={2} />
                    </motion.div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-none shadow-lg shadow-green-500/30 z-20"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Proven System
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-none shadow-lg shadow-gold/30 z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  Free Website
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      <Marquee />
    </>
  );
}
