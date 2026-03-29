"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, DollarSign, Clock, PhoneOff, Target, Flame, TrendingDown } from "lucide-react";
import AnimateIn from "./AnimateIn";

const beforeData = {
  headline: "The Old Way Is Bleeding You Dry",
  subtitle: "You've been here. Spending thousands, chasing dead leads, waiting months for results that never come.",
  items: [
    { icon: <DollarSign className="w-4 h-4" />, text: "Spent $3k–$5k/month on agencies that don't understand roof coating" },
    { icon: <Clock className="w-4 h-4" />, text: "Waited 60–90 days for \"optimization\" — still no real results" },
    { icon: <PhoneOff className="w-4 h-4" />, text: "Called leads who were price shopping or wanted full replacements" },
    { icon: <TrendingDown className="w-4 h-4" />, text: "Pipeline rollercoaster — slammed one month, dead the next" },
    { icon: <Flame className="w-4 h-4" />, text: "Burned $10k+ before realizing the agency was learning on your dime" },
  ],
  stats: [
    { label: "Avg. agency cost", value: "$3k–$5k", sub: "per month" },
    { label: "Time to results", value: "90+ days", sub: "if ever" },
    { label: "Cost per closed job", value: "$1,500+", sub: "residential" },
  ],
  callout: "Most residential contractors burn $10k–$20k before they even know if an agency can deliver.",
};

const afterData = {
  headline: "The RoofCoat Way: Results From Day One",
  subtitle: "A system already proven across 100+ contractors. No learning phase. No guessing. Just leads.",
  items: [
    { icon: <Target className="w-4 h-4" />, text: "$1,000/month flat — everything included, no hidden fees" },
    { icon: <Check className="w-4 h-4" />, text: "First lead in under 48 hours — the system is already built" },
    { icon: <Check className="w-4 h-4" />, text: "Pre-qualified residential homeowners with active roof issues" },
    { icon: <Check className="w-4 h-4" />, text: "Predictable pipeline — know exactly how many leads you'll get" },
    { icon: <Check className="w-4 h-4" />, text: "Free 5-page custom website built for your business" },
  ],
  stats: [
    { label: "Monthly cost", value: "$1,000", sub: "flat. cancel anytime" },
    { label: "Time to first lead", value: "<48h", sub: "from signup" },
    { label: "Cost per closed job", value: "$150–$300", sub: "residential" },
  ],
  callout: "Average partner closes 3+ residential jobs in month one and sees 5-10x return on ad spend.",
};

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);
  const data = showAfter ? afterData : beforeData;
  const isAfter = showAfter;

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            Stop Getting Burned
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center leading-tight max-w-3xl mx-auto">
            You&apos;ve Spent Thousands on Agencies That Don&apos;t Get Roof Coating.
            <br />
            <span className="text-gold">We Do.</span>
          </h2>
        </AnimateIn>

        {/* Toggle */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center mt-10">
            <div className="inline-flex bg-navy-light rounded-none p-1 border border-white/10">
              <button
                onClick={() => setShowAfter(false)}
                className={`relative px-6 py-2.5 sm:px-8 sm:py-3 rounded-none text-sm font-bold transition-colors duration-300 ${!showAfter ? "text-white" : "text-white/70"}`}
              >
                {!showAfter && (
                  <motion.div className="absolute inset-0 bg-red-500 rounded-none" layoutId="baToggle"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10">The Old Way</span>
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`relative px-6 py-2.5 sm:px-8 sm:py-3 rounded-none text-sm font-bold transition-colors duration-300 ${showAfter ? "text-white" : "text-white/70"}`}
              >
                {showAfter && (
                  <motion.div className="absolute inset-0 bg-green-500 rounded-none" layoutId="baToggle"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10">The RoofCoat Way</span>
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={isAfter ? "after" : "before"}
              initial={{ opacity: 0, x: isAfter ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isAfter ? -30 : 30 }}
              transition={{ duration: 0.35 }}
            >
              {/* Sub-headline */}
              <div className="text-center mb-8">
                <h3 className={`text-xl sm:text-2xl font-bold ${isAfter ? "text-green-400" : "text-red-400"}`}>
                  {data.headline}
                </h3>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl mx-auto">{data.subtitle}</p>
              </div>

              <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
                {/* Pain/gain points */}
                <div className={`lg:col-span-3 bg-navy-light rounded-none border p-4 sm:p-6 lg:p-8 ${isAfter ? "border-green-500/20" : "border-red-500/20"}`}>
                  <div className="space-y-4">
                    {data.items.map((item, i) => (
                      <motion.div key={item.text} className="flex items-start gap-3"
                        initial={{ opacity: 0, x: isAfter ? 15 : -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}>
                        <div className={`w-7 h-7 rounded-none flex items-center justify-center shrink-0 mt-0.5 ${
                          isAfter ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                        }`}>
                          {item.icon}
                        </div>
                        <p className="text-white/80 text-sm sm:text-base">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
                  {data.stats.map((stat, i) => (
                    <motion.div key={stat.label}
                      className={`bg-navy-light rounded-none border p-4 sm:p-6 flex-1 flex flex-col justify-center text-center ${
                        isAfter ? "border-green-500/15" : "border-red-500/15"
                      }`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}>
                      <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isAfter ? "text-green-400" : "text-red-400"}`}>
                        {stat.value}
                      </p>
                      <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                      <p className="text-white/70 text-[11px] mt-0.5">{stat.sub}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <motion.div
                className={`mt-6 border-l-4 pl-5 py-3 ${isAfter ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}>
                <p className={`text-sm sm:text-base font-medium ${isAfter ? "text-green-400" : "text-red-400"}`}>
                  {data.callout}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.4}>
          <div className="mt-12 text-center">
            <motion.a href="/get-started"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-none font-bold text-base sm:text-lg shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Stop Burning Cash — Get Your Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <p className="mt-3 text-white/70 text-sm">$1,000/month. Cancel anytime. Results from day one.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
