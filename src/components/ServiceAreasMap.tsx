"use client";
import React, { useState, useCallback, useMemo, memo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, Users, Globe, ArrowRight, Search, ChevronRight, X, CloudSun, Building2 } from "lucide-react";
import USMap from "./visuals/USMap";

/* ── State Data ── */
interface StateData {
  id: string;
  name: string;
  abbr: string;
  growth: string;
  maturity: "High Demand" | "Growing" | "Emerging";
  hubs: string;
  population: string;
  climate: string;
  stat: string;
  statLabel: string;
}

const STATES: StateData[] = [
  { id: "texas", name: "Texas", abbr: "TX", growth: "+12%", maturity: "High Demand", hubs: "Houston, Dallas, San Antonio, Austin", population: "30M+", climate: "Extreme heat, hailstorms — peak March–Oct", stat: "3 jobs", statLabel: "closed month one" },
  { id: "florida", name: "Florida", abbr: "FL", growth: "+18%", maturity: "High Demand", hubs: "Miami, Tampa, Orlando, Jacksonville", population: "22M+", climate: "UV, humidity, hurricanes — year-round demand", stat: "40%", statLabel: "lower CPA" },
  { id: "california", name: "California", abbr: "CA", growth: "+9%", maturity: "High Demand", hubs: "Los Angeles, San Diego, San Francisco", population: "39M+", climate: "Title 24 codes, intense sun — premium rates", stat: "8.2x", statLabel: "ROI in 90 days" },
  { id: "arizona", name: "Arizona", abbr: "AZ", growth: "+15%", maturity: "Growing", hubs: "Phoenix, Tucson, Mesa, Scottsdale", population: "7.4M+", climate: "Desert heat 115°F+ — energy savings angle", stat: "$34", statLabel: "avg cost per lead" },
  { id: "ohio", name: "Ohio", abbr: "OH", growth: "+8%", maturity: "Growing", hubs: "Cleveland, Columbus, Cincinnati", population: "11.8M+", climate: "Freeze-thaw cycles — pre-winter urgency", stat: "22%", statLabel: "close rate" },
  { id: "georgia", name: "Georgia", abbr: "GA", growth: "+14%", maturity: "Growing", hubs: "Atlanta, Savannah, Augusta", population: "10.9M+", climate: "Hot/humid, booming commercial — year-round", stat: "5.8x", statLabel: "return on ad spend" },
];

const EXPANDING_STATES = [
  { name: "North Carolina", abbr: "NC" },
  { name: "Tennessee", abbr: "TN" },
  { name: "Colorado", abbr: "CO" },
  { name: "Nevada", abbr: "NV" },
  { name: "Louisiana", abbr: "LA" },
  { name: "South Carolina", abbr: "SC" },
  { name: "Virginia", abbr: "VA" },
  { name: "New Mexico", abbr: "NM" },
];

/* ── Map Marker ── */
const statePositions: Record<string, { top: string; left: string }> = {
  texas: { top: "65%", left: "40%" },
  florida: { top: "75%", left: "72%" },
  california: { top: "45%", left: "10%" },
  arizona: { top: "55%", left: "22%" },
  ohio: { top: "38%", left: "70%" },
  georgia: { top: "60%", left: "72%" },
};

/* ── Metric Item ── */
function MetricItem({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="group border-l-2 border-white/5 pl-4 py-1 transition-all duration-300 hover:border-gold">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-3.5 h-3.5 text-gold" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-white font-bold">{label}</span>
      </div>
      <div className="text-xl text-white font-bold">{value}</div>
    </div>
  );
}

/* ── Expanding States Panel ── */
const ExpandingPanel = memo(function ExpandingPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="h-full flex flex-col"
    >
      <div className="border-b border-white/10 pb-6 mb-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Expanding <span className="text-gold">Nationwide</span>
        </h3>
        <p className="text-white text-sm">New markets launching monthly — get early access.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto pr-2">
        {EXPANDING_STATES.map((state, idx) => (
          <motion.div
            key={state.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center gap-3 p-3 border border-white/10 rounded-sm hover:border-gold/30 hover:bg-gold/5 transition-colors group"
          >
            <span className="text-gold font-bold text-sm w-8">{state.abbr}</span>
            <span className="text-white font-medium text-sm group-hover:text-white transition-colors">{state.name}</span>
            <span className="ml-auto text-[9px] uppercase tracking-wider px-2 py-1 bg-green-500/10 text-green-400 rounded-sm font-bold">Coming Soon</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

/* ── Detail Panel ── */
const DetailPanel = memo(function DetailPanel({ active }: { active: StateData | null }) {
  return (
    <div className="h-full flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold font-bold text-3xl">{active.abbr}</span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {active.name}
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border ${
                  active.maturity === "High Demand"
                    ? "border-gold/40 text-gold bg-gold/10"
                    : "border-white/10 text-white bg-white/5"
                }`}>
                  {active.maturity}
                </span>
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-green-500/30 text-green-400 bg-green-500/10">
                  {active.growth} YoY
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <MetricItem label="Population" value={active.population} icon={Users} />
              <MetricItem label="Key Stat" value={active.stat} icon={TrendingUp} />
              <div className="col-span-2">
                <MetricItem label="Key Markets" value={active.hubs} icon={MapPin} />
              </div>
              <div className="col-span-2">
                <MetricItem label="Climate / Demand" value={active.climate} icon={CloudSun} />
              </div>
            </div>

            {/* Stat highlight */}
            <div className="flex items-center gap-4 bg-gold/10 border border-gold/20 rounded-sm px-5 py-4">
              <span className="text-gold text-3xl font-bold">{active.stat}</span>
              <span className="text-white text-sm">{active.statLabel}</span>
            </div>

            {/* Footer Action */}
            <div className="pt-4 flex items-center justify-between">
              <a
                href="/get-started"
                className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] group hover:text-yellow-300 transition-colors"
              >
                Get {active.name} Leads <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="font-mono text-[10px] text-white">
                ID: {active.abbr}-MKT
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col items-center justify-center text-center opacity-40"
          >
            <Globe strokeWidth={1} size={64} className="text-white/20 mb-4" />
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-2">Select a state</p>
            <p className="text-xs text-white lg:hidden">Tap a state to see market details</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/* ── Main Component ── */
export default function ServiceAreasMap() {
  const [activeId, setActiveId] = useState<string>("texas");
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanding, setIsExpanding] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const active = useMemo(() => STATES.find((s) => s.id === activeId) || null, [activeId]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setShowResults(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleActivate = useCallback((id: string) => {
    setActiveId(id);
    setSearchTerm("");
    setIsExpanding(false);
    setShowResults(false);
  }, []);

  const results = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return STATES.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  return (
    <section id="service-map" className="bg-navy py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-5">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Service Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Hyper-Local Leads.{" "}
            <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              Your Territory.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 rounded-sm border border-white/10 overflow-hidden border border-zinc-800 shadow-black/20">

          {/* LEFT: Map */}
          <div className="lg:col-span-7 bg-navy-light relative p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(rgba(234,179,8,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative w-full pb-[85%]">
                <div className="absolute inset-0">
                  <USMap
                    activeState={isExpanding ? "" : activeId}
                    onStateClick={(id) => handleActivate(id)}
                  />
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-gold" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-blue" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Available</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Intelligence Panel */}
          <div className="lg:col-span-5 bg-navy p-8 lg:p-12 flex flex-col relative z-10">

            {/* Search */}
            {!isExpanding && (
              <div ref={searchRef} className="relative mb-8">
                <div className="bg-white/[0.03] border border-white/10 rounded-sm p-4 hover:border-gold/30 transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.25em] font-bold text-white mb-3">
                    Search Markets
                  </label>
                  <div className="relative">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                    <input
                      type="text"
                      placeholder="e.g., Texas, Florida..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowResults(e.target.value.length >= 2);
                      }}
                      onFocus={() => searchTerm.length >= 2 && setShowResults(true)}
                      className="w-full bg-transparent border-b border-white/10 pl-7 pr-7 py-2 text-white font-medium placeholder:text-white focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                    {searchTerm && (
                      <button onClick={() => { setSearchTerm(""); setShowResults(false); }} className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/5 rounded transition-colors">
                        <X className="w-4 h-4 text-white hover:text-white" />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {showResults && results.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 right-0 top-full mt-2 bg-navy-light border border-white/10 rounded-sm border border-zinc-800 z-50 overflow-hidden"
                      >
                        {results.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleActivate(s.id)}
                            className="w-full flex items-center gap-3 p-3 hover:bg-gold/10 transition-colors text-left group"
                          >
                            <span className="text-gold font-bold text-lg">{s.abbr}</span>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-gold transition-colors">{s.name}</div>
                              <div className="text-xs text-white">{s.hubs}</div>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <h6 className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
                {isExpanding ? "Expanding" : "Proven Footprint"}
              </h6>
              <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                {isExpanding ? (
                  <>New markets <span className="text-gold">launching soon</span>.</>
                ) : (
                  <>6 states. <span className="text-gold">Thousands of leads</span>.</>
                )}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-grow relative">
              <AnimatePresence mode="wait">
                {isExpanding ? (
                  <ExpandingPanel key="expanding" />
                ) : (
                  <DetailPanel key="detail" active={active} />
                )}
              </AnimatePresence>
            </div>

            {/* CTA Toggle */}
            <div className="mt-10 pt-6 border-t border-white/10">
              {isExpanding ? (
                <a
                  href="/service-areas"
                  className="group w-full flex items-center justify-between bg-gold text-navy px-6 py-4 rounded-sm font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all"
                >
                  <span className="uppercase tracking-[0.15em]">View All Service Areas</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button
                  onClick={() => setIsExpanding(true)}
                  className="group w-full flex items-center justify-between bg-gold text-navy px-6 py-4 rounded-sm font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all"
                >
                  <span className="uppercase tracking-[0.15em]">See Expanding Markets</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
