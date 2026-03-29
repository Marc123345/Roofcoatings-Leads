"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import AnimateIn from "./AnimateIn";
import USMap from "./visuals/USMap";

const PARTNERS = [
  {
    id: "p1",
    name: "Michael Patterson",
    company: "Summit Roof Coatings",
    state: "Florida",
    stateId: "florida",
    abbr: "FL",
    city: "Tampa",
    service: "Commercial Silicone",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "Our cost per acquisition dropped by 40%. We booked 3 commercial coating jobs in the first month alone. The system was already proven — we just plugged in.",
    stat: "3 jobs",
    statLabel: "closed month one",
  },
  {
    id: "p2",
    name: "Sarah Jenkins",
    company: "Jenkins Roofing Solutions",
    state: "Texas",
    stateId: "texas",
    abbr: "TX",
    city: "Dallas",
    service: "Residential Acrylic",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "The lead quality is unmatched. These leads are exclusive and actually ready to book. ROI has been incredible — we saw results from the very first week.",
    stat: "8.2x",
    statLabel: "ROI in 90 days",
  },
  {
    id: "p3",
    name: "Robert Garcia",
    company: "RG Commercial Systems",
    state: "California",
    stateId: "california",
    abbr: "CA",
    city: "Los Angeles",
    service: "Commercial TPO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote: "Best investment this year. Cost per acquisition is significantly lower than Google Ads — and California leads close at premium rates because of Title 24 compliance.",
    stat: "40%",
    statLabel: "lower CPA",
  },
  {
    id: "p4",
    name: "Karen Lewis",
    company: "Lewis Roofing & Solar",
    state: "Arizona",
    stateId: "arizona",
    abbr: "AZ",
    city: "Phoenix",
    service: "Reflective Coatings",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote: "Our cost per lead dropped by 40% compared to HomeAdvisor. The energy savings angle works incredibly well in Arizona — property owners respond immediately.",
    stat: "$34",
    statLabel: "avg cost per lead",
  },
  {
    id: "p5",
    name: "David Chen",
    company: "Citywide Restorations",
    state: "Ohio",
    stateId: "ohio",
    abbr: "OH",
    city: "Cleveland",
    service: "Metal Roof Restoration",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    quote: "The pre-qualification process saves my sales team hours every week. Ohio property owners are ready to move fast before winter hits. This system understands our niche.",
    stat: "22%",
    statLabel: "close rate",
  },
  {
    id: "p6",
    name: "James Wilson",
    company: "Wilson & Sons Coatings",
    state: "Georgia",
    stateId: "georgia",
    abbr: "GA",
    city: "Atlanta",
    service: "Commercial Silicone",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80",
    quote: "We used to rely on referrals, but that wasn't scalable. Now we can actually plan our growth quarter to quarter. Atlanta's commercial market is booming and we're capturing it.",
    stat: "5.8x",
    statLabel: "return on ad spend",
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 60 : -60,
    rotateX: dir > 0 ? -15 : 15,
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -60 : 60,
    rotateX: dir > 0 ? 15 : -15,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] as const },
  }),
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const directionRef = useRef(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(PARTNERS.length - 1, Math.floor(latest * PARTNERS.length));
    if (idx !== activeIndexRef.current) {
      directionRef.current = idx > activeIndexRef.current ? 1 : -1;
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  // Touch swipe for mobile
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    const newDir = delta < 0 ? 1 : -1;
    const newIdx = Math.max(0, Math.min(PARTNERS.length - 1, activeIndexRef.current + newDir));
    if (newIdx !== activeIndexRef.current) {
      directionRef.current = newDir;
      activeIndexRef.current = newIdx;
      setActiveIndex(newIdx);
    }
  };

  const partner = PARTNERS[activeIndex];

  return (
    <div ref={containerRef} id="testimonials" className="relative h-[180vh] sm:h-[220vh] lg:h-[300vh] bg-navy">
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center overflow-hidden border-t border-white/5 pt-14 pb-2 sm:pt-16 sm:pb-4 lg:pt-20 lg:pb-0">

        {/* Header */}
        <div className="text-center mb-6 lg:mb-10 px-4">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Proven Results, Real Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Impact Across the Country
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto w-full flex-1 min-h-0 flex gap-4 lg:gap-6 px-3 sm:px-5 lg:px-8">

          {/* LEFT: US Map Panel — desktop only */}
          <div className="hidden lg:flex w-[420px] flex-col items-center justify-between py-8 px-6 text-white relative shrink-0 bg-navy-light rounded-2xl border border-white/10">
            <div className="text-center z-10">
              <p className="text-lg font-bold">
                <span className="text-gold">Trusted</span> Across
                <br />the United States
              </p>
            </div>

            <div className="relative w-full flex-1 my-4">
              {/* Scroll progress ring */}
              <svg viewBox="0 0 100 100" className="absolute top-2 right-2 w-12 h-12 -rotate-90 z-10">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                <motion.circle
                  cx="50" cy="50" r="45" fill="none" stroke="#eab308" strokeWidth="4"
                  strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>

              <USMap
                activeState={partner.stateId}
                onStateClick={(id) => {
                  const idx = PARTNERS.findIndex((p) => p.stateId === id);
                  if (idx >= 0 && idx !== activeIndexRef.current) {
                    directionRef.current = idx > activeIndexRef.current ? 1 : -1;
                    activeIndexRef.current = idx;
                    setActiveIndex(idx);
                  }
                }}
              />
            </div>

            <div className="z-10 text-center">
              <p className="text-2xl font-bold text-gold">6 States</p>
              <p className="text-white/80 text-sm">and expanding monthly</p>
            </div>
          </div>

          {/* RIGHT: Testimonial Card */}
          <div
            className="flex-1 bg-navy-light rounded-2xl relative overflow-hidden flex flex-col min-w-0 border border-white/10"
            style={{ minHeight: "clamp(320px, 55dvh, 620px)" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence custom={directionRef.current} mode="popLayout">
                <motion.div
                  key={partner.id}
                  custom={directionRef.current}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute bg-navy text-white flex flex-col rounded-2xl border border-white/10"
                  style={{
                    width: "min(92%, 580px)",
                    maxHeight: "calc(100% - 2rem)",
                    padding: "clamp(1.5rem, 4vw, 2.5rem)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="flex flex-col gap-5">
                    {/* Service tag */}
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">
                        {partner.service}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold">
                        {partner.state}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base sm:text-lg lg:text-2xl font-medium leading-relaxed text-white/90 tracking-tight">
                      &ldquo;{partner.quote}&rdquo;
                    </blockquote>

                    {/* Stat highlight */}
                    <div className="flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-xl px-5 py-3 self-start">
                      <span className="text-gold text-xl sm:text-2xl font-bold">{partner.stat}</span>
                      <span className="text-white/70 text-sm">{partner.statLabel}</span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/5">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
                        <Image src={partner.avatar} alt={partner.name} width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold">{partner.name}</p>
                        <span className="inline-block bg-gold text-navy text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 mt-1">
                          {partner.company} · {partner.city}, {partner.abbr}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation strip */}
            <div className="relative z-20 shrink-0 border-t border-white/5 bg-navy-light rounded-b-2xl">
              {/* Mobile: dots */}
              <div className="flex lg:hidden items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-gold font-bold text-sm">{partner.abbr}</span>
                  <span className="text-white/70 text-xs">{partner.name.split(" ")[0]} · {partner.state}</span>
                </div>
                <div className="flex gap-1.5">
                  {PARTNERS.map((_, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeIndex ? 20 : 6,
                        height: 5,
                        background: i === activeIndex ? "#eab308" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop: state list */}
              <div className="hidden lg:flex overflow-x-auto gap-2 px-4 py-3" style={{ scrollbarWidth: "none" }}>
                {PARTNERS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (i !== activeIndexRef.current) {
                        directionRef.current = i > activeIndexRef.current ? 1 : -1;
                        activeIndexRef.current = i;
                        setActiveIndex(i);
                      }
                    }}
                    className="flex items-center shrink-0 gap-2 px-4 py-2 transition-all duration-200 rounded-lg"
                    style={{
                      border: i === activeIndex ? "1px solid rgba(234,179,8,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      background: i === activeIndex ? "rgba(234,179,8,0.1)" : "transparent",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: i === activeIndex ? "#eab308" : "rgba(255,255,255,0.3)" }}
                    >
                      {p.abbr}
                    </span>
                    <span
                      className="text-[11px] tracking-wider uppercase whitespace-nowrap"
                      style={{ color: i === activeIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)" }}
                    >
                      {p.name.split(" ")[0]} · {p.state}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
