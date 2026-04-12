"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Minus, Zap, ShieldCheck, Target, Bell, Users, DollarSign, Phone, Bot } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const features = [
  {
    name: "Pre-Qualified Leads",
    description: "Leads screened for property type, urgency, and budget before they reach you.",
    icon: <ShieldCheck className="w-5 h-5" />,
    roofcoat: { value: true, detail: "5-step qualification funnel" },
    google: { value: false, detail: "No pre-screening" },
    home: { value: false, detail: "Unfiltered leads" },
  },
  {
    name: "Done-For-You Campaigns",
    description: "We build, launch, and optimize everything. You just close.",
    icon: <Target className="w-5 h-5" />,
    roofcoat: { value: true, detail: "Fully managed" },
    google: { value: false, detail: "Self-serve or hire agency" },
    home: { value: false, detail: "No campaigns" },
  },
  {
    name: "Niche-Specific Targeting",
    description: "Campaigns built specifically for roof coating — not generic roofing.",
    icon: <Zap className="w-5 h-5" />,
    roofcoat: { value: true, detail: "Silicone, acrylic, metal, TPO" },
    google: { value: false, detail: "Broad match keywords" },
    home: { value: false, detail: "Generic categories" },
  },
  {
    name: "Real-Time Lead Delivery",
    description: "Instant notifications the moment a lead qualifies.",
    icon: <Bell className="w-5 h-5" />,
    roofcoat: { value: true, detail: "Instant SMS + email" },
    google: { value: true, detail: "Instant" },
    home: { value: "partial", detail: "Delayed delivery" },
  },
  {
    name: "AI Appointment Setter",
    description: "Our AI system books appointments with your leads automatically.",
    icon: <Bot className="w-5 h-5" />,
    roofcoat: { value: true, detail: "+$500/mo add-on" },
    google: { value: false, detail: "Not available" },
    home: { value: false, detail: "Not available" },
  },
  {
    name: "Live Secretary Calls",
    description: "Our team calls your leads for you — speed to lead handled.",
    icon: <Phone className="w-5 h-5" />,
    roofcoat: { value: true, detail: "+$500/mo add-on" },
    google: { value: false, detail: "Not available" },
    home: { value: false, detail: "Not available" },
  },
  {
    name: "Dedicated Campaign Manager",
    description: "One person who knows your business, your territory, your goals.",
    icon: <Users className="w-5 h-5" />,
    roofcoat: { value: true, detail: "Named contact" },
    google: { value: false, detail: "Generic support" },
    home: { value: false, detail: "No support" },
  },
  {
    name: "Cost Per Lead",
    description: "What you actually pay for each qualified prospect.",
    icon: <DollarSign className="w-5 h-5" />,
    roofcoat: { value: "low", detail: "$30–$60" },
    google: { value: "high", detail: "$80–$150" },
    home: { value: "medium", detail: "$60–$120" },
  },
];

function StatusBadge({ info }: { info: { value: boolean | string; detail: string } }) {
  if (info.value === true) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-gold" />
        </div>
        <span className="text-gold text-xs font-medium hidden sm:block">{info.detail}</span>
      </div>
    );
  }
  if (info.value === false) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <X className="w-4 h-4 text-zinc-500" />
        </div>
        <span className="text-white text-xs hidden sm:block">{info.detail}</span>
      </div>
    );
  }
  if (info.value === "partial") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-sm bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
          <Minus className="w-4 h-4 text-yellow-400" />
        </div>
        <span className="text-yellow-400/70 text-xs hidden sm:block">{info.detail}</span>
      </div>
    );
  }
  // cost tiers
  const colorMap: Record<string, string> = {
    low: "text-gold bg-gold/10 border-gold/20",
    medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    high: "text-zinc-500 bg-zinc-800 border-zinc-700",
  };
  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`px-3 py-1 rounded-sm text-xs font-bold border ${colorMap[info.value as string] || ""}`}>
        {info.detail}
      </span>
    </div>
  );
}

export default function ComparisonTable() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden mesh-gradient-subtle">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-14">
          <AnimateIn>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-6">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Comparison</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tighter">
              Why Contractors Choose Us Over
              <br />
              <span className="text-white">Google Ads &amp; HomeAdvisor</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Scrollable table wrapper for mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
        <div className="min-w-full sm:min-w-[520px]">
        {/* Header row */}
        <AnimateIn delay={0.2}>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 mb-3 px-1 sm:px-2">
            <div />
            <div className="text-center">
              <div className="bg-gradient-to-b from-gold/20 to-gold/5 border border-gold/20 rounded-sm py-3 px-2">
                <p className="text-gold font-bold text-xs sm:text-sm">RoofCoat</p>
                <p className="text-gold/60 text-xs">$2,000/mo</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-2">
                <p className="text-white font-bold text-xs sm:text-sm">Google</p>
                <p className="text-white text-xs">Self-serve</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-2">
                <p className="text-white font-bold text-xs sm:text-sm">HomeAdv.</p>
                <p className="text-white text-xs">Per-lead</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Feature rows */}
        <StaggerContainer className="space-y-2" staggerDelay={0.05}>
          {features.map((feature, i) => (
            <StaggerItem key={feature.name}>
              <motion.div
                className={`rounded-sm border transition-all duration-300 cursor-pointer ${
                  expanded === i
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-zinc-950 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-800"
                }`}
                onClick={() => setExpanded(expanded === i ? null : i)}
                layout
              >
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 items-center p-2.5 sm:p-4">
                  {/* Feature name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-sm bg-zinc-900 flex items-center justify-center text-white shrink-0 hidden sm:flex">
                      {feature.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-medium text-sm truncate">{feature.name}</p>
                    </div>
                  </div>

                  {/* RoofCoat */}
                  <div className="flex justify-center">
                    <StatusBadge info={feature.roofcoat} />
                  </div>

                  {/* Google */}
                  <div className="flex justify-center">
                    <StatusBadge info={feature.google} />
                  </div>

                  {/* HomeAdvisor */}
                  <div className="flex justify-center">
                    <StatusBadge info={feature.home} />
                  </div>
                </div>

                {/* Expanded description */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0">
                        <div className="h-px bg-zinc-900 mb-3" />
                        <p className="text-white text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>{/* end min-w wrapper */}
        </div>{/* end scroll wrapper */}

        {/* Bottom CTA */}
        <AnimateIn delay={0.4}>
          <div className="mt-10 text-center">
            <motion.a
              href="/get-started"
              className="inline-flex items-center w-full sm:w-auto justify-center bg-gold text-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold text-base sm:text-lg "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See Why 100+ Contractors Switched &rarr;
            </motion.a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
