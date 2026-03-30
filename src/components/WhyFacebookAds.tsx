"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, Target, Rocket, Zap } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CountUp from "./CountUp";

const tabs = [
  {
    id: "exclusive",
    label: "Exclusive",
    stat: "Proven",
    title: "Done-For-You System",
    description: "A battle-tested Facebook Ad system already proven across 100+ roof coating contractors. We handle everything — you just close the jobs.",
    visual: "funnel",
  },
  {
    id: "targeting",
    label: "Targeting",
    stat: "10x",
    title: "Better Targeting",
    description: "Facebook's 2.9B+ users and advanced behavioral data lets us find property owners the moment they're researching roof solutions.",
    visual: "targeting",
  },
  {
    id: "cost",
    label: "Lower Cost",
    stat: "40%",
    title: "Lower Cost Per Lead",
    description: "Our precision targeting and exclusive model drives cost per acquisition down by 40% compared to Google Ads and HomeAdvisor.",
    visual: "cost",
  },
  {
    id: "speed",
    label: "Fast Results",
    stat: "<48h",
    title: "First Lead in Under 48 Hours",
    description: "From signup to your first qualified lead in less than two days. Our streamlined onboarding gets campaigns live fast.",
    visual: "timeline",
  },
];

function FunnelVisual() {
  return (
    <div className="space-y-2">
      {[
        { label: "Shared Lead Platforms", users: "5+ contractors see it", w: "100%", bg: "bg-red-500/80", text: "text-red-100" },
        { label: "Google Ads", users: "3-4 competitors bidding", w: "75%", bg: "bg-orange-500/80", text: "text-orange-100" },
        { label: "RoofCoat Leads", users: "Pre-qualified for you", w: "40%", bg: "bg-gradient-to-r from-gold to-yellow-400", text: "text-navy" },
      ].map((step, i) => (
        <motion.div
          key={step.label}
          className={`${step.bg} rounded-xl px-5 py-3 flex items-center justify-between ${step.text}`}
          style={{ width: step.w, marginLeft: "auto", marginRight: "auto" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-bold text-sm">{step.label}</span>
          <span className="text-xs opacity-90">{step.users}</span>
        </motion.div>
      ))}
      <motion.div
        className="text-center pt-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-green-400 font-bold text-sm">Pre-qualified leads. Proven system. You just close.</span>
      </motion.div>
    </div>
  );
}

function TargetingVisual() {
  const segments = [
    { label: "Commercial Property Owners", pct: 92, delay: 0 },
    { label: "Homeowners w/ Roof Issues", pct: 88, delay: 0.15 },
    { label: "Building Managers (Aging Roof)", pct: 85, delay: 0.3 },
    { label: "Recent Insurance Claims", pct: 78, delay: 0.45 },
  ];
  return (
    <div className="space-y-4">
      {segments.map((seg) => (
        <div key={seg.label}>
          <div className="flex justify-between mb-1.5">
            <span className="text-white text-sm font-medium">{seg.label}</span>
            <motion.span
              className="text-gold font-bold text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: seg.delay + 0.5 }}
            >
              {seg.pct}% match
            </motion.span>
          </div>
          <div className="h-3 bg-white/10 rounded-2xl overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-light to-gold rounded-xl"
              initial={{ width: 0 }}
              animate={{ width: `${seg.pct}%` }}
              transition={{ duration: 1, delay: seg.delay, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CostVisual() {
  const providers = [
    { name: "HomeAdvisor", cost: 150, color: "bg-red-500", label: "text-red-400" },
    { name: "Google Ads", cost: 120, color: "bg-orange-500", label: "text-orange-400" },
    { name: "RoofCoat Leads", cost: 45, color: "bg-gradient-to-t from-gold to-yellow-400", label: "text-gold", highlight: true },
  ];
  const maxCost = 150;

  return (
    <div className="flex items-end justify-center gap-6 h-[200px]">
      {providers.map((p, i) => {
        const height = (p.cost / maxCost) * 100;
        return (
          <motion.div
            key={p.name}
            className="flex flex-col items-center gap-2 flex-1 max-w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <motion.span className={`font-bold text-lg ${p.label}`}>
              ${p.cost}
            </motion.span>
            <motion.div
              className={`w-full ${p.color} rounded-t-xl relative overflow-hidden ${p.highlight ? "shadow-lg shadow-gold/30 ring-2 ring-gold/30" : ""}`}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease: "easeOut" }}
            >
              {p.highlight && (
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
            <span className={`text-xs font-medium text-center ${p.highlight ? "text-gold" : "text-white/80"}`}>
              {p.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function TimelineVisual() {
  const steps = [
    { label: "Sign Up", desc: "Free strategy audit call", time: "Day 0", icon: <ClipboardCheck className="w-5 h-5" /> },
    { label: "Campaign Build", desc: "Custom ads for your market", time: "Day 0-1", icon: <Target className="w-5 h-5" /> },
    { label: "Go Live", desc: "Ads launched in your territory", time: "Day 1", icon: <Rocket className="w-5 h-5" /> },
    { label: "First Lead!", desc: "Qualified prospect delivered", time: "Day 1-2", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="relative">
      {/* Connecting line */}
      <motion.div
        className="absolute top-6 left-6 right-6 h-1 bg-white/10 rounded-xl"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-6 left-6 h-1 bg-gradient-to-r from-blue-light via-gold to-gold rounded-xl"
        initial={{ width: 0 }}
        animate={{ width: "calc(100% - 48px)" }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.3 }}
          >
            <motion.div
              className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl relative z-10 ${
                i === 3
                  ? "bg-gold shadow-lg shadow-gold/40"
                  : "bg-navy-light border-2 border-white/20"
              }`}
              whileHover={{ scale: 1.15 }}
              animate={i === 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={i === 3 ? { duration: 2, repeat: Infinity } : {}}
            >
              {step.icon}
            </motion.div>
            <p className="text-white font-bold text-sm mt-3">{step.label}</p>
            <p className="text-white/70 text-xs mt-0.5">{step.desc}</p>
            <p className={`text-xs font-mono mt-1 ${i === 3 ? "text-gold font-bold" : "text-white/80"}`}>{step.time}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function WhyFacebookAds() {
  const [activeTab, setActiveTab] = useState("exclusive");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 hidden sm:block w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-blue/5 rounded-xl blur-[100px]" />
      <div className="absolute bottom-0 left-0 hidden sm:block w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-gold/3 rounded-xl blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <p className="text-blue-light font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            Why Facebook Ads?
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center">
            The Unfair Advantage
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="mt-4 text-white/70 text-lg text-center max-w-2xl mx-auto">
            We leverage Facebook&apos;s powerful targeting to reach property owners at the
            exact moment they&apos;re researching roof solutions.
          </p>
        </AnimateIn>

        {/* Interactive Tab Selector */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex bg-navy-light rounded-xl p-1.5 border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-navy"
                      : "text-white/70 hover:text-white/80"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-xl"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Interactive Content Area */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center"
            >
              {/* Left: stat + info */}
              <div className="bg-navy-light rounded-2xl p-5 sm:p-8 lg:p-10 border border-white/5">
                <motion.p
                  className="text-gold text-4xl sm:text-6xl lg:text-8xl font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {active.stat}
                </motion.p>
                <h3 className="text-white font-bold text-2xl lg:text-3xl mt-4">
                  {active.title}
                </h3>
                <p className="text-white/80 mt-3 text-lg leading-relaxed">
                  {active.description}
                </p>

                {/* Mini stats under description */}
                <div className="mt-6 flex gap-4">
                  <div className="bg-white/5 rounded-xl px-4 py-3 flex-1 text-center">
                    <p className="text-gold font-bold text-lg">$1k</p>
                    <p className="text-white/80 text-xs">/month</p>
                  </div>
                  <div className="bg-white/5 rounded-xl px-4 py-3 flex-1 text-center">
                    <p className="text-gold font-bold text-lg">Free</p>
                    <p className="text-white/80 text-xs">5-Page Website</p>
                  </div>
                  <div className="bg-white/5 rounded-xl px-4 py-3 flex-1 text-center">
                    <p className="text-gold font-bold text-lg">
                      <CountUp end={100} suffix="+" />
                    </p>
                    <p className="text-white/80 text-xs">Partners</p>
                  </div>
                </div>
              </div>

              {/* Right: interactive visual */}
              <div className="bg-navy-light rounded-2xl p-5 sm:p-8 lg:p-10 border border-white/5 min-h-[280px] lg:min-h-[360px] flex flex-col justify-center">
                {active.visual === "funnel" && <FunnelVisual />}
                {active.visual === "targeting" && <TargetingVisual />}
                {active.visual === "cost" && <CostVisual />}
                {active.visual === "timeline" && <TimelineVisual />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom stat strip */}
        <StaggerContainer className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
          {tabs.map((tab) => (
            <StaggerItem key={tab.id}>
              <motion.button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full rounded-2xl p-5 text-center transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-gold/10 border-gold/30"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10"
                }`}
                whileHover={{ y: -3 }}
              >
                <p className={`text-2xl font-bold ${activeTab === tab.id ? "text-gold" : "text-white/70"}`}>
                  {tab.stat}
                </p>
                <p className={`text-xs mt-1 font-medium ${activeTab === tab.id ? "text-gold/70" : "text-white/80"}`}>
                  {tab.title}
                </p>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
