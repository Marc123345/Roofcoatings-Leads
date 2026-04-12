"use client";
import { useRef } from "react";
import Image from "next/image";
import { CloudSun, Building2, CalendarDays, Lightbulb } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import ParticleField from "../visuals/ParticleField";
import CountUp from "../CountUp";
import type { ServiceArea } from "@/lib/service-areas";

export default function ServiceAreaDetail({ area }: { area: ServiceArea }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src={area.hero} alt={`${area.state} skyline`} fill className="object-cover scale-110" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-44 text-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-sm px-5 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold font-bold">{area.abbr}</span>
              <span className="text-gold/60 text-sm">Service Area</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] "
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              {area.state}{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                Roof Coating Leads
              </span>
            </motion.h1>

            <motion.p className="mt-6 text-white text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Pre-qualified, high-intent leads for {area.state} roof coating contractors.
              Custom campaigns targeting {area.cities.slice(0, 3).join(", ")} and beyond.
            </motion.p>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <motion.a href="/get-started"
                className="bg-gold text-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold text-base sm:text-lg w-full sm:w-auto text-center "
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get {area.state} Leads &rarr;
              </motion.a>
              <motion.a href="/results"
                className="border border-zinc-700 text-white hover:text-white hover:border-white/30 px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold text-sm sm:text-base w-full sm:w-auto text-center transition-all"
                whileHover={{ scale: 1.03 }}>
                See Win-Logs
              </motion.a>
            </motion.div>

            {/* Quick stat strip */}
            <motion.div className="mt-12 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm px-5 py-3 text-center">
                <p className="text-gold text-xl font-bold">{area.caseStudy.stat}</p>
                <p className="text-white text-[11px]">{area.caseStudy.statLabel}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm px-5 py-3 text-center">
                <p className="text-gold text-xl font-bold">{area.cities.length}+</p>
                <p className="text-white text-[11px]">cities covered</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm px-5 py-3 text-center">
                <p className="text-gold text-xl font-bold">&lt;48h</p>
                <p className="text-white text-[11px]">to first lead</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Market Intel Bento ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">
                The {area.state} Roof Coating Market
              </h2>
            </AnimateIn>

            <div className="grid md:grid-cols-12 gap-4 lg:gap-6">
              {/* Climate — wide */}
              <AnimateIn className="md:col-span-7" delay={0.1}>
                <motion.div className="bg-navy-light rounded-sm border border-zinc-800 p-5 sm:p-8 h-full" whileHover={{ borderColor: "rgba(234,179,8,0.2)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <CloudSun className="w-6 h-6 text-gold" />
                    <h3 className="text-white font-bold text-xl">Climate &amp; Conditions</h3>
                  </div>
                  <p className="text-white leading-relaxed">{area.climate}</p>
                </motion.div>
              </AnimateIn>

              {/* Building stock — narrow */}
              <AnimateIn className="md:col-span-5" delay={0.15}>
                <motion.div className="bg-navy-light rounded-sm border border-zinc-800 p-5 sm:p-8 h-full" whileHover={{ borderColor: "rgba(234,179,8,0.2)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-gold" />
                    <h3 className="text-white font-bold text-xl">Building Stock</h3>
                  </div>
                  <p className="text-white leading-relaxed">{area.buildingStock}</p>
                </motion.div>
              </AnimateIn>

              {/* Seasonal — narrow */}
              <AnimateIn className="md:col-span-5" delay={0.2}>
                <motion.div className="bg-navy-light rounded-sm border border-zinc-800 p-5 sm:p-8 h-full" whileHover={{ borderColor: "rgba(234,179,8,0.2)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <CalendarDays className="w-6 h-6 text-gold" />
                    <h3 className="text-white font-bold text-xl">Seasonal Patterns</h3>
                  </div>
                  <p className="text-white leading-relaxed">{area.seasonal}</p>
                </motion.div>
              </AnimateIn>

              {/* Local insight — wide */}
              <AnimateIn className="md:col-span-7" delay={0.25}>
                <motion.div className="bg-navy-light rounded-sm border border-zinc-800 p-5 sm:p-8 h-full" whileHover={{ borderColor: "rgba(234,179,8,0.2)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-gold" />
                    <h3 className="text-white font-bold text-xl">Local Insight</h3>
                  </div>
                  <p className="text-white leading-relaxed">{area.localInsight}</p>
                </motion.div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Win-Log ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-white rounded-sm border border-zinc-800 overflow-hidden">
              <div className="bg-gold p-6 lg:p-8">
                <p className="text-navy/80 text-sm uppercase tracking-wider font-bold mb-1">{area.state} Partner Win-Log</p>
                <h3 className="text-navy font-bold text-2xl">{area.caseStudy.name}</h3>
                <p className="text-navy/70">{area.caseStudy.company}</p>
              </div>

              <div className="p-5 sm:p-8 lg:p-10">
                <blockquote className="text-navy/70 italic text-xl leading-relaxed border-l-4 border-gold pl-6 mb-8">
                  &ldquo;{area.caseStudy.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="bg-navy rounded-sm px-8 py-5 text-center">
                    <p className="text-gold text-2xl sm:text-4xl font-bold">{area.caseStudy.stat}</p>
                    <p className="text-white text-sm mt-1">{area.caseStudy.statLabel}</p>
                  </div>
                  <motion.a href="/get-started"
                    className="bg-gold text-navy px-8 py-4 rounded-sm font-bold text-lg "
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Get Results Like This &rarr;
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Cities Grid ── */}
      <section className="bg-navy relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Cities We Serve in {area.state}</h2>
            <p className="text-white mb-10">+ all surrounding areas within your service radius</p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.04}>
            {area.cities.map((city) => (
              <StaggerItem key={city}>
                <motion.div
                  className="bg-navy-light rounded-sm p-4 text-center border border-zinc-800 hover:border-gold/20 transition-colors"
                  whileHover={{ y: -3 }}>
                  <p className="text-white font-semibold">{city}</p>
                  <p className="text-white text-xs mt-0.5">{area.abbr}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy uppercase tracking-tighter">
              Ready to Own {area.state} Leads?
            </h2>
            <p className="mt-4 text-navy/80 text-lg">
              Get a custom campaign blueprint for your {area.state} territory. Free. No obligation.
            </p>
            <motion.a href="/get-started"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center bg-gold text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-sm font-bold text-base sm:text-lg w-full sm:w-auto text-center "
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Book a Free Call &rarr;
            </motion.a>
            <p className="mt-3 text-gray/50 text-sm">Free audit. No contracts. Results from day 1.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
