"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const oldWay = [
  { text: "Spent $3k–$5k/month on agencies that don't understand roof coating", value: "$3k–$5k/mo" },
  { text: "Waited 60–90 days for \"optimization\" — still no real results", value: "90+ days" },
  { text: "Called leads who were price shopping or wanted full replacements", value: "Junk leads" },
  { text: "Pipeline rollercoaster — slammed one month, dead the next", value: "Chaos" },
  { text: "Burned $10k+ before realizing the agency was learning on your dime", value: "$10k+ lost" },
];

const newWay = [
  { text: "$2,000/month flat — everything included, no hidden fees", value: "$2k/mo" },
  { text: "First lead in under 48 hours — the system is already built", value: "<48 hours" },
  { text: "Pre-qualified residential homeowners with active roof issues", value: "Real leads" },
  { text: "Predictable pipeline — know exactly how many leads you'll get", value: "Predictable" },
  { text: "Free 5-page custom website built for your business", value: "Free site" },
];

export default function BeforeAfter() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background text */}
      <div className="bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy">
        VS
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            Stop Getting Burned
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy text-center leading-tight max-w-3xl mx-auto">
            You&apos;ve Spent Thousands on Agencies That Don&apos;t Get It.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-navy/70 text-center text-base sm:text-lg leading-relaxed mt-4 max-w-xl mx-auto">
            Here&apos;s what changes when you switch to a system built for roof coating.
          </p>
        </AnimateIn>

        {/* Side by side — no toggle, show both at once */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-0 border border-navy/10 overflow-hidden">

          {/* OLD WAY — left */}
          <AnimateIn direction="left" delay={0.2}>
            <div className="bg-navy p-6 sm:p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-white/20" />
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold">The Old Way</p>
              </div>

              <div className="space-y-6">
                {oldWay.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}>
                    <span className="text-white/20 font-mono text-xs mt-1 w-12 shrink-0 text-right">{item.value}</span>
                    <div className="w-px h-full bg-white/10 shrink-0 self-stretch" />
                    <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/5">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Total damage</p>
                <p className="text-white font-bold text-3xl sm:text-4xl ">$10k–$20k</p>
                <p className="text-white/40 text-sm mt-1">burned before you even know if it works</p>
              </div>
            </div>
          </AnimateIn>

          {/* NEW WAY — right */}
          <AnimateIn direction="right" delay={0.2}>
            <div className="bg-navy-light p-6 sm:p-8 lg:p-10 h-full border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-gold" />
                <p className="text-gold text-xs uppercase tracking-[0.2em] font-bold">The RoofCoat Way</p>
              </div>

              <div className="space-y-6">
                {newWay.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}>
                    <span className="text-gold font-mono text-xs mt-1 w-12 shrink-0 text-right">{item.value}</span>
                    <div className="w-px h-full bg-gold/20 shrink-0 self-stretch" />
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gold/10">
                <p className="text-gold/60 text-xs uppercase tracking-wider mb-2">Month one result</p>
                <p className="text-gold font-bold text-3xl sm:text-4xl ">3+ jobs closed</p>
                <p className="text-white/40 text-sm mt-1">5-10x return on ad spend, from day one</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* CTA */}
        <AnimateIn delay={0.4}>
          <div className="mt-12 text-center">
            <motion.a href="/get-started"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg border border-white/10 hover:border-gold/30 transition-colors"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Stop Burning Cash
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <p className="mt-3 text-navy/50 text-sm">$2,000/month. Cancel anytime. Results from day one.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
