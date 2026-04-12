"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import CountUp from "../CountUp";
import ParticleField from "../visuals/ParticleField";

const winLogs = [
  {
    id: "summit",
    name: "Summit Roof Coatings",
    city: "Tampa, FL",
    niche: "Commercial Silicone",
    quote: "Our cost per acquisition dropped by 40%. We booked 3 commercial coating jobs in the first month alone. The system was already proven — we just plugged in.",
    before: { cpl: "$142", source: "HomeAdvisor", closeRate: "8%", costPerJob: "$1,775" },
    after: { cpl: "$38", source: "RoofCoat Leads", closeRate: "32%", costPerJob: "$119" },
    highlight: { value: "8.2x", label: "First-month ROI" },
    jobs: "3 commercial jobs in month 1",
  },
  {
    id: "jenkins",
    name: "Jenkins Roofing Solutions",
    city: "Dallas, TX",
    niche: "Residential Acrylic",
    quote: "The lead quality is unmatched. These leads are exclusive and actually ready to book. ROI has been incredible — we saw results from the very first week.",
    before: { cpl: "$118", source: "Google Ads", closeRate: "11%", costPerJob: "$1,073" },
    after: { cpl: "$34", source: "RoofCoat Leads", closeRate: "29%", costPerJob: "$117" },
    highlight: { value: "6.8x", label: "90-day ROI" },
    jobs: "7 residential jobs in first 6 weeks",
  },
  {
    id: "rg",
    name: "RG Commercial Systems",
    city: "Los Angeles, CA",
    niche: "Commercial TPO",
    quote: "Best investment this year. Cost per acquisition is significantly lower than Google Ads — and California leads close at premium rates because of Title 24.",
    before: { cpl: "$165", source: "Google Ads", closeRate: "7%", costPerJob: "$2,357" },
    after: { cpl: "$48", source: "RoofCoat Leads", closeRate: "25%", costPerJob: "$192" },
    highlight: { value: "11.3x", label: "First-month ROI" },
    jobs: "2 high-ticket commercial jobs ($45k total)",
  },
  {
    id: "lewis",
    name: "Lewis Roofing & Solar",
    city: "Phoenix, AZ",
    niche: "Reflective Coatings",
    quote: "Our cost per lead dropped by 40% compared to HomeAdvisor. The energy savings angle works incredibly well in Arizona — property owners respond immediately.",
    before: { cpl: "$130", source: "HomeAdvisor", closeRate: "9%", costPerJob: "$1,444" },
    after: { cpl: "$34", source: "RoofCoat Leads", closeRate: "28%", costPerJob: "$121" },
    highlight: { value: "7.6x", label: "90-day ROI" },
    jobs: "5 jobs in first month — all from Facebook",
  },
];

const testimonials = [
  { quote: "The lead quality is incredible. When I call, they're already pre-qualified and ready to talk. Close rates went through the roof.", name: "Hall Systems Inc.", city: "FL" },
  { quote: "I was skeptical at first, but the booking rate speaks for itself. We closed 3 large commercial projects.", name: "Thompson Commercial Coatings", city: "TX" },
  { quote: "The pre-qualification process saves my sales team hours every week. Finally a lead source that gets it.", name: "Citywide Restorations", city: "CA" },
  { quote: "We used to rely on referrals, but that wasn't scalable. Now we plan growth quarter to quarter.", name: "Wilson & Sons Coatings", city: "OH" },
  { quote: "The AI appointment setter books calls for me automatically. Lead notifications are instant — speed to lead is everything.", name: "Elite Roof Systems", city: "GA" },
  { quote: "From setup to first lead took less than 48 hours. The results were immediate.", name: "Young's Roof Care", city: "AZ" },
];

export default function ResultsContent() {
  const [activeLog, setActiveLog] = useState(0);
  const log = winLogs[activeLog];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Commercial building" fill className="object-cover opacity-15 scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-44" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Proof</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              Contractor{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                Win-Logs
              </span>
            </motion.h1>

            <motion.p className="mt-6 text-white text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Real numbers from real partners. No made-up metrics. Just results.
            </motion.p>

            {/* Headline stats */}
            <motion.div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              {[
                { value: 40, suffix: "%", label: "Lower CPA" },
                { value: 3, suffix: "+", label: "Jobs Month 1" },
                { value: 100, suffix: "+", label: "Partners" },
                { value: 48, prefix: "<", suffix: "h", label: "First Lead" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-sm p-4 text-center">
                  <p className="text-gold text-2xl font-bold">
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="text-white text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Interactive Win-Log Explorer — WHITE ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-14">
              <AnimateIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy uppercase tracking-tighter">Featured Win-Logs</h2></AnimateIn>
              <AnimateIn delay={0.1}><p className="mt-3 text-navy/60 text-lg">Click a partner to see their full before &amp; after breakdown.</p></AnimateIn>
            </div>

            {/* Partner selector — no faces */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="inline-flex bg-gray-100 rounded-sm p-1.5 border border-gray-200 gap-1 overflow-x-auto max-w-full scrollbar-none" style={{scrollbarWidth:"none"}}>
                {winLogs.map((wl, i) => (
                  <button key={wl.id} onClick={() => setActiveLog(i)}
                    className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-sm text-xs sm:text-sm font-semibold transition-all duration-300 ${activeLog === i ? "text-navy" : "text-navy/50 hover:text-navy/70"}`}>
                    {activeLog === i && (
                      <motion.div className="absolute inset-0 bg-gold rounded-sm"
                        layoutId="winLogTab" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10">{wl.name.split(" ").slice(0, 2).join(" ")}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Win-Log detail */}
            <AnimatePresence mode="wait">
              <motion.div key={log.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}>

                {/* Header card — no face */}
                <div className="bg-gray-50 rounded-sm border border-gray-200 overflow-hidden mb-6">
                  <div className="p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-navy font-bold text-2xl">{log.name}</h3>
                      <p className="text-navy/50 text-sm mt-1">{log.niche} · {log.city}</p>
                    </div>
                    <div className="bg-gold/10 border border-gold/20 rounded-sm px-8 py-5 text-center shrink-0">
                      <p className="text-gold text-4xl lg:text-5xl font-bold">{log.highlight.value}</p>
                      <p className="text-gold/60 text-sm mt-1">{log.highlight.label}</p>
                    </div>
                  </div>
                </div>

                {/* Before / After comparison */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
                  <motion.div className="bg-red-50 rounded-sm border border-red-200/50 overflow-hidden"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <div className="bg-red-100 px-6 py-3 border-b border-red-200/50">
                      <p className="text-red-600 font-bold text-sm uppercase tracking-wider">Before — {log.before.source}</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { label: "Cost per lead", value: log.before.cpl },
                        { label: "Close rate", value: log.before.closeRate },
                        { label: "Cost per closed job", value: log.before.costPerJob },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-center py-1 border-b border-red-100 last:border-0">
                          <span className="text-navy/60 text-sm">{row.label}</span>
                          <span className="text-red-600 font-bold">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* After */}
                  <motion.div className="bg-green-50 rounded-sm border border-green-200/50 overflow-hidden"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                    <div className="bg-green-100 px-6 py-3 border-b border-green-200/50">
                      <p className="text-green-600 font-bold text-sm uppercase tracking-wider">After — RoofCoat Leads</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { label: "Cost per lead", value: log.after.cpl },
                        { label: "Close rate", value: log.after.closeRate },
                        { label: "Cost per closed job", value: log.after.costPerJob },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-center py-1 border-b border-green-100 last:border-0">
                          <span className="text-navy/60 text-sm">{row.label}</span>
                          <span className="text-green-600 font-bold">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Quote + result */}
                <div className="bg-gray-50 rounded-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                    <blockquote className="flex-1 text-navy/70 italic text-lg leading-relaxed border-l-4 border-gold pl-6">
                      &ldquo;{log.quote}&rdquo;
                    </blockquote>
                    <div className="bg-green-50 border border-green-200/50 rounded-sm px-6 py-4 text-center shrink-0">
                      <p className="text-green-600 text-xs uppercase tracking-wider mb-1">Result</p>
                      <p className="text-navy font-bold">{log.jobs}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── More Voices — LIGHT ── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy uppercase tracking-tighter">More Partner Voices</h2></AnimateIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="bg-white rounded-sm p-6 border border-zinc-800/50 border border-gray-100 h-full flex flex-col justify-between"
                  whileHover={{ y: -4 }}>
                  <div>
                    <div className="text-gold text-sm mb-3">★★★★★</div>
                    <p className="text-navy/70 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-navy font-bold text-sm">{t.name}</p>
                    <p className="text-navy/40 text-xs">{t.city}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA — DARK ── */}
      <section className="bg-navy py-16 sm:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tighter">
              Want Your Name in the{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                Next Win-Log?
              </span>
            </h2>
            <p className="mt-4 text-white text-lg">Join 100+ contractors already on the system.</p>
            <motion.a href="/get-started"
              className="mt-8 inline-flex items-center justify-center bg-gold text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-sm font-bold text-base sm:text-lg "
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.95 }}>
              Book a Free Call &rarr;
            </motion.a>
            <p className="mt-3 text-white text-sm">No contracts. Results from day 1.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
