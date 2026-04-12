"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X, Check, AlertTriangle, Zap } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import BookingOverlay from "./BookingOverlay";

const comparisonRows = [
  {
    feature: "Monthly Cost",
    old: "$3k–$5k/mo + Hidden fees",
    new: "$2,000/mo Flat & All-In",
  },
  {
    feature: "Speed to Lead",
    old: '90+ Days of "Optimization"',
    new: "< 48 Hours to your first lead",
  },
  {
    feature: "Lead Quality",
    old: "Junk Leads: Price shoppers & replacements",
    new: "Pre-Qualified: Homeowners with active issues",
  },
  {
    feature: "Pipeline",
    old: "Chaos: Slammed one month, dead the next",
    new: "Predictable: Steady, scalable flow",
  },
  {
    feature: "Support",
    old: "Ghosted: Agency learns on your dime",
    new: "Expert: Dedicated Campaign Manager",
  },
  {
    feature: "Outcome",
    old: "$10k–$20k Burned before results",
    new: "3+ Jobs Closed in Month One",
  },
];

export default function BeforeAfter() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
    <section className="bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy">
        VS
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <AnimateIn>
          <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3 text-center flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Stop Getting Burned
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy text-center leading-tight uppercase tracking-tighter max-w-3xl mx-auto">
            You&apos;ve Spent Thousands on Agencies That Don&apos;t Get It.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-navy/60 text-center text-base sm:text-lg leading-relaxed mt-4 max-w-xl mx-auto">
            Here&apos;s what changes when you switch to a system built for roof coating.
          </p>
        </AnimateIn>

        {/* ── Mirror Cards — Mobile: stacked, Desktop: side by side ── */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6">

          {/* LEFT: The Agency Trap */}
          <AnimateIn direction="left" delay={0.2}>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 sm:p-8 h-full relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-sm">The Agency Trap</h3>
                  <p className="text-navy/40 text-xs">What you&apos;ve been paying for</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "The Money Pit", desc: "You're out $10k–$20k before you even see a lead that doesn't want a full replacement." },
                  { label: "The Waiting Game", desc: '90 days of "testing" and "optimizing" while your overhead eats you alive.' },
                  { label: "The Rollercoaster", desc: "One week you're drowning in junk leads; the next, your phone is silent." },
                  { label: 'The "Learning" Fee', desc: "You are literally paying for their education on roof coating." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <div className="w-6 h-6 rounded-sm bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-navy font-bold text-sm">{item.label}</p>
                      <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cost of Inaction callout */}
              <div className="mt-6 bg-red-50 border border-red-200 rounded-sm p-4">
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-1">Total Damage</p>
                <p className="text-navy font-bold text-2xl">$10k–$20k</p>
                <p className="text-navy/60 text-xs mt-1">Average amount burned on traditional agencies before results</p>
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT: The RoofCoat System */}
          <AnimateIn direction="right" delay={0.2}>
            <div className="bg-navy border border-gold/20 rounded-sm p-6 sm:p-8 h-full relative shadow-[0_0_40px_rgba(234,179,8,0.08)]">
              {/* Best Value badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm shadow-lg">
                  Best Value
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6 pt-2">
                <div className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">The RoofCoat System</h3>
                  <p className="text-white/50 text-xs">What winning looks like</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Flat-Rate Win", desc: "$2,000/mo. No \"ad spend\" surprises or hidden management fees." },
                  { label: "Instant Traction", desc: "First lead in <48 hours. We don't \"test\" — we already know what works." },
                  { label: "Precision Targeting", desc: "Residential homeowners specifically looking for coating solutions." },
                  { label: "The Closer", desc: "An average of 3+ jobs closed in your first 30 days." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <div className="w-6 h-6 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result callout */}
              <div className="mt-6 bg-gold/10 border border-gold/20 rounded-sm p-4">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">Month One Result</p>
                <p className="text-white font-bold text-2xl">3+ Jobs Closed</p>
                <p className="text-white/60 text-xs mt-1">5-10x return on ad spend, from day one</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── Comparison Table ── */}
        <AnimateIn delay={0.3}>
          <div className="mt-12 sm:mt-16">
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
              <table className="w-full min-w-[540px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-navy/40 text-xs uppercase tracking-wider font-bold py-3 px-4 w-[30%]">Metric</th>
                    <th className="text-center py-3 px-4 w-[35%]">
                      <span className="text-navy/40 text-xs uppercase tracking-wider font-bold">Industry Average</span>
                    </th>
                    <th className="text-center py-3 px-4 w-[35%]">
                      <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-sm px-3 py-1">
                        <span className="text-gold text-xs uppercase tracking-wider font-bold">RoofCoat Leads</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <motion.tr
                      key={i}
                      className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <td className="py-4 px-4 text-navy font-bold text-sm">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-red-400 shrink-0" />
                          <span className="text-navy/50 text-sm">{row.old}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-green-500 shrink-0" />
                          <span className="text-navy font-medium text-sm">{row.new}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateIn>

        {/* ── Risk-Killer CTA ── */}
        <AnimateIn delay={0.4}>
          <div className="mt-12 sm:mt-16 bg-navy rounded-sm p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/60 text-sm mb-2">We built the system so you don&apos;t have to.</p>
              <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2">Stop Burning Cash</h3>
              <p className="text-white/60 text-sm mb-8">$2,000/month. Cancel anytime. Results from day one.</p>
              <motion.button
                onClick={() => setOverlayOpen(true)}
                className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 sm:px-10 sm:py-5 rounded-sm font-bold text-sm sm:text-lg  group cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Your First Lead in 48 Hours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="mt-4 flex items-center justify-center gap-4 text-white/40 text-xs">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-gold" /> No contracts</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-gold" /> Cancel anytime</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-gold" /> Exclusive territory</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
    <BookingOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
