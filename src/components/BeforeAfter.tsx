"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const beforeData = {
  items: [
    "Competing with 5+ contractors per lead",
    "Inconsistent, unpredictable pipeline",
    "High cost per acquisition ($200+)",
    "Unqualified price shoppers",
    "No control over lead quality or volume",
  ],
  stats: [
    { label: "Cost per lead", value: "$80–$150" },
    { label: "Close rate", value: "5–10%" },
    { label: "Cost per closed job", value: "$1,500+" },
  ],
};

const afterData = {
  items: [
    "Pre-qualified, high-intent leads from day one",
    "Predictable, scalable pipeline on demand",
    "40% lower cost per acquisition",
    "Pre-qualified, ready-to-book prospects",
    "Full control with real-time lead delivery",
  ],
  stats: [
    { label: "Cost per lead", value: "$30–$60" },
    { label: "Close rate", value: "20–35%" },
    { label: "Cost per closed job", value: "$150–$300" },
  ],
};

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            The Transformation
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
            Before &amp; After RoofCoat Leads
          </h2>
        </AnimateIn>

        {/* Toggle */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center mt-10">
            <div className="inline-flex bg-navy-light rounded-full p-1 border border-white/10">
              <button
                onClick={() => setShowAfter(false)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${!showAfter ? "text-white" : "text-white/70"}`}
              >
                {!showAfter && (
                  <motion.div
                    className="absolute inset-0 bg-red-500 rounded-full"
                    layoutId="baToggle"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">Before</span>
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${showAfter ? "text-white" : "text-white/70"}`}
              >
                {showAfter && (
                  <motion.div
                    className="absolute inset-0 bg-green-500 rounded-full"
                    layoutId="baToggle"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">After</span>
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {!showAfter ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid lg:grid-cols-5 gap-6">
                  {/* List */}
                  <div className="lg:col-span-3 bg-navy-light rounded-2xl border border-red-500/20 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-red-400 font-bold text-xl">The Old Way</h3>
                    </div>
                    <div className="space-y-4">
                      {beforeData.items.map((item, i) => (
                        <motion.div
                          key={item}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}
                        >
                          <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-white/80">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    {beforeData.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="bg-navy-light rounded-2xl border border-red-500/15 p-6 flex-1 flex flex-col justify-center text-center"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <p className="text-red-400 text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</p>
                        <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid lg:grid-cols-5 gap-6">
                  {/* List */}
                  <div className="lg:col-span-3 bg-navy-light rounded-2xl border border-green-500/20 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-green-400 font-bold text-xl">The RoofCoat Way</h3>
                    </div>
                    <div className="space-y-4">
                      {afterData.items.map((item, i) => (
                        <motion.div
                          key={item}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}
                        >
                          <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-white/80">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    {afterData.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="bg-navy-light rounded-2xl border border-green-500/15 p-6 flex-1 flex flex-col justify-center text-center"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <p className="text-green-400 text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</p>
                        <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom callout */}
        <AnimateIn delay={0.4}>
          <motion.div
            className="mt-12 bg-gradient-to-r from-gold via-yellow-400 to-gold text-navy font-bold text-center py-4 px-6 rounded-2xl text-lg"
            whileHover={{ scale: 1.01 }}
          >
            Average partner sees 5-10x return on ad spend in the first 90 days
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
