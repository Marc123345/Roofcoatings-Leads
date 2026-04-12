"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CloudSun, Building2, CalendarDays, Lightbulb } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import ParticleField from "../visuals/ParticleField";
import USMap from "../visuals/USMap";
import { serviceAreas } from "@/lib/service-areas";
import { allStates, featuredSlugs } from "@/lib/all-states";

export default function ServiceAreasHub() {
  const [activeIdx, setActiveIdx] = useState(0);
  const area = serviceAreas[activeIdx];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" alt="US city skyline" fill className="object-cover opacity-15 scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-44 text-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Service Areas</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] "
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              Hyper-Local Leads.{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                Your Territory.
              </span>
            </motion.h1>

            <motion.p className="mt-6 text-white text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              We don&apos;t do national blasts. Every campaign is custom-built for your state,
              your cities, your customer base. Precision targeting that fills local pipelines.
            </motion.p>

            <motion.div className="mt-10 flex justify-center gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              {serviceAreas.map((sa) => (
                <div key={sa.slug} className="bg-white/5 border border-white/10 rounded-sm px-4 py-2">
                  <span className="text-gold font-bold text-sm">{sa.abbr}</span>
                  <span className="text-white text-xs ml-1.5">{sa.state}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Interactive Map Explorer ── */}
      <section id="service-areas" className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-14">
              <AnimateIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">Explore Our Markets</h2></AnimateIn>
              <AnimateIn delay={0.1}><p className="mt-3 text-white text-lg">Click a state on the map or use the tabs below.</p></AnimateIn>
            </div>

            {/* State tabs */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="inline-flex bg-navy-light rounded-sm p-1.5 border border-white/10 gap-1 overflow-x-auto max-w-full scrollbar-none" style={{scrollbarWidth:"none"}}>
                {serviceAreas.map((sa, i) => (
                  <button key={sa.slug} onClick={() => setActiveIdx(i)}
                    className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-sm text-xs sm:text-sm font-semibold transition-all duration-300 ${activeIdx === i ? "text-navy" : "text-white hover:text-white"}`}>
                    {activeIdx === i && (
                      <motion.div className="absolute inset-0 bg-gold rounded-sm"
                        layoutId="areaTab" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className="font-bold">{sa.abbr}</span>
                      <span className="hidden sm:inline">{sa.state}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={area.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}>

                <div className="grid lg:grid-cols-5 gap-6">
                  {/* Map panel */}
                  <div className="lg:col-span-2 bg-navy-light rounded-sm border border-white/10 p-6 flex flex-col">
                    <div className="flex-1 min-h-[280px]">
                      <USMap
                        activeState={area.slug}
                        onStateClick={(id) => {
                          const idx = serviceAreas.findIndex((s) => s.slug === id);
                          if (idx >= 0) setActiveIdx(idx);
                        }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-gold font-bold text-lg">{area.state}</p>
                      <p className="text-white text-xs">{area.cities.length}+ cities covered</p>
                    </div>
                  </div>

                  {/* Details panel */}
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Hero image + title */}
                    <div className="relative rounded-sm overflow-hidden h-[220px]">
                      <Image src={area.image} alt={`${area.state} skyline`} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-white font-bold text-2xl lg:text-3xl">{area.state} Roof Coating Leads</h3>
                            <p className="text-white text-sm mt-1">{area.cities.slice(0, 4).join(" · ")} + more</p>
                          </div>
                          <div className="bg-gold/20 border border-gold/30 rounded-sm px-4 py-2 text-center shrink-0 hidden sm:block">
                            <p className="text-gold text-xl font-bold">{area.caseStudy.stat}</p>
                            <p className="text-gold/60 text-[11px]">{area.caseStudy.statLabel}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Market intel bento */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { icon: <CloudSun className="w-4 h-4 text-gold" />, title: "Climate", text: area.climate },
                        { icon: <Building2 className="w-4 h-4 text-gold" />, title: "Building Stock", text: area.buildingStock },
                        { icon: <CalendarDays className="w-4 h-4 text-gold" />, title: "Seasonal Patterns", text: area.seasonal },
                        { icon: <Lightbulb className="w-4 h-4 text-gold" />, title: "Local Insight", text: area.localInsight },
                      ].map((card, i) => (
                        <motion.div key={card.title}
                          className="bg-navy-light rounded-sm border border-white/5 p-5"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}>
                          <div className="flex items-center gap-2 mb-2">
                            {card.icon}
                            <h4 className="text-white font-bold text-sm">{card.title}</h4>
                          </div>
                          <p className="text-white text-xs leading-relaxed line-clamp-3">{card.text}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Local Win-Log */}
                    <div className="bg-navy-light rounded-sm border border-white/10 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gold/20 rounded-sm flex items-center justify-center text-gold font-bold shrink-0">
                          {area.caseStudy.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-bold">{area.caseStudy.name}</p>
                          <p className="text-gold text-xs">{area.caseStudy.company}</p>
                        </div>
                      </div>
                      <p className="text-white italic text-sm leading-relaxed border-l-2 border-gold pl-4">
                        &ldquo;{area.caseStudy.quote}&rdquo;
                      </p>
                    </div>

                    {/* CTA */}
                    <motion.a href={`/service-areas/${area.slug}`}
                      className="w-full bg-gold text-navy py-4 rounded-sm font-bold text-lg text-center  block"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Explore {area.state} in Detail &rarr;
                    </motion.a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Expanding note */}
            <AnimateIn delay={0.3}>
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-sm px-6 py-3">
                  <span className="w-2 h-2 bg-green-500 rounded-sm animate-pulse" />
                  <span className="text-white text-sm">
                    Expanding to new states monthly — don&apos;t see yours?{" "}
                    <a href="/get-started" className="text-gold font-bold hover:underline">Book a Free Call &rarr;</a>
                  </span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Quick-view Grid ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy uppercase tracking-tighter">All Active Markets</h2></AnimateIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {serviceAreas.map((sa) => (
              <StaggerItem key={sa.slug}>
                <motion.a href={`/service-areas/${sa.slug}`}
                  className="block bg-white rounded-sm overflow-hidden border border-zinc-800/50 hover:border border-zinc-800 transition-all duration-300 group h-full"
                  whileHover={{ y: -6 }}>
                  <div className="relative h-44 overflow-hidden">
                    <Image src={sa.image} alt={`${sa.state}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-sm">{sa.abbr}</div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-xl">{sa.state}</h3>
                      <p className="text-white text-xs mt-0.5">{sa.cities.slice(0, 3).join(" · ")}</p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-navy font-bold">{sa.caseStudy.stat}</p>
                      <p className="text-slate-600 text-xs">{sa.caseStudy.statLabel}</p>
                    </div>
                    <span className="text-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">Details &rarr;</span>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── All 50 States ── */}
      <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <AnimateIn><h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">We Cover All 50 States</h2></AnimateIn>
            <AnimateIn delay={0.1}><p className="mt-3 text-white text-lg">Select your state to get started with pre-qualified leads in your territory.</p></AnimateIn>
          </div>

          <AnimateIn delay={0.2}>
            <StaggerContainer className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2" staggerDelay={0.01}>
              {allStates.map((st) => {
                const isFeatured = featuredSlugs.includes(st.slug);
                return (
                  <StaggerItem key={st.slug}>
                    <motion.a
                      href={isFeatured ? `/service-areas/${st.slug}` : "/get-started"}
                      className={`block rounded-sm p-3 text-center border transition-all duration-200 ${
                        isFeatured
                          ? "bg-gold/10 border-gold/20 hover:bg-gold/20"
                          : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      <p className={`font-bold text-sm ${isFeatured ? "text-gold" : "text-white"}`}>{st.abbr}</p>
                      <p className={`text-[11px] mt-0.5 ${isFeatured ? "text-gold/60" : "text-white"}`}>{st.state}</p>
                    </motion.a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-white">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-gold/20 border border-gold/30" />
                <span>Featured markets (full detail pages)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-white/5 border border-white/10" />
                <span>Available — book audit for custom blueprint</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy uppercase tracking-tighter">
              Your Territory.{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                Your Leads. Your Territory.
              </span>
            </h2>
            <p className="mt-4 text-navy/80 text-lg">We&apos;ll build a campaign blueprint specific to your market. Free.</p>
            <motion.a href="/get-started"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center bg-gold text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-sm font-bold text-base sm:text-lg w-full sm:w-auto text-center "
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.95 }}>
              Book a Free Call &rarr;
            </motion.a>
            <p className="mt-3 text-gray/50 text-sm">Free audit. No contracts. Results from day 1.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
