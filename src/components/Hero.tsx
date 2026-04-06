"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Marquee from "./visuals/Marquee";

export default function Hero() {
  return (
    <>
      {/* ── HERO — Figma split layout: text left, image right ── */}
      <section className="relative min-h-screen bg-navy overflow-hidden">

        {/* ── Right-side image (absolute, covers right ~55% on desktop) ── */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <Image
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80"
            alt="Commercial roof aerial view"
            fill
            className="object-cover"
            style={{ mixBlendMode: "luminosity" }}
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
          {/* Dark gradient from left to let the text read clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
        </div>

        {/* ── Decorative glow circle (gold, top-right area) ── */}
        <div
          className="absolute hidden lg:block rounded-full pointer-events-none"
          style={{
            width: 626,
            height: 626,
            right: "5%",
            top: "15%",
            opacity: 0.5,
            background: "linear-gradient(209deg, rgba(234,179,8,0.5) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* ── Ghost background text ── */}
        <div className="bg-text bottom-[10%] left-1/2 -translate-x-1/2 text-white/[0.03] select-none pointer-events-none"
          style={{ fontSize: "clamp(120px, 20vw, 300px)" }}>
          ROOFCOAT
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-md px-4 py-1.5 mb-8"
            >
              <span className="text-gold text-xs font-bold uppercase tracking-widest">
                Exclusive Leads — One Click at a Time
              </span>
            </motion.div>

            {/* Headline — split weight like the Figma pattern */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-white font-normal">A Proven Lead</span>
              <br />
              <span className="text-white font-extrabold">System Built for</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent font-extrabold animate-gradient">
                Roof Coating.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              100+ contractors already on the system. Pre-qualified leads from day one.
              Sign up and get a free custom 5-page website for your business.
            </motion.p>

            {/* Two CTA buttons — side by side like Figma */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-gold/20 group"
                whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Claim Free Website
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider border border-white/80 hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight className="w-4 h-4 text-gold" />
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.p
              className="mt-4 text-white/30 text-xs uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              No contracts · Cancel anytime · Results from day 1
            </motion.p>
          </div>
        </div>
      </section>


      {/* ── Logo marquee ── */}
      <Marquee />
    </>
  );
}
