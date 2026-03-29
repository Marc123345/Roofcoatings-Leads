"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, Zap, Users, Clock, TrendingUp } from "lucide-react";
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
          {/* Centered layout */}
          <div className="text-center max-w-3xl mx-auto">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2 backdrop-blur-sm mb-10"
            >
              <span className="text-gold text-sm">★★★★★</span>
              <span className="text-white/70 text-sm">Trusted by 100+ roofing contractors</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
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
              className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              100+ contractors already on the system. Pre-qualified leads from day one.
              Sign up and get a free custom 5-page website for your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/get-started"
                className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg overflow-hidden group shadow-lg shadow-gold/20"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(234,179,8,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Claim Your Free Website + Audit</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Micro-copy */}
            <motion.p
              className="mt-4 text-white/40 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              No charge. No pitch. No contracts.
            </motion.p>
          </div>

          {/* Stats strip — centered, below hero copy */}
          <motion.div
            className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-2xl py-4 px-3"
              >
                <div className="text-gold/60">{stat.icon}</div>
                <p className="text-white font-bold text-lg sm:text-xl">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      <Marquee />
    </>
  );
}
