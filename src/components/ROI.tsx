"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const oldWay = [
  { label: "Cost per lead:", value: "$80 - $150", color: "text-zinc-500" },
  { label: "Leads shared with:", value: "5+ contractors", color: "text-zinc-500" },
  { label: "Close rate:", value: "5 - 10%", color: "text-zinc-500" },
  { label: "Cost per closed job:", value: "$1,500+", color: "text-zinc-500" },
  { label: "Monthly ad waste:", value: "High", color: "text-zinc-500" },
];

const newWay = [
  { label: "Cost per lead:", value: "$30 - $60", color: "text-gold" },
  { label: "Leads shared with:", value: "Nobody (exclusive)", color: "text-gold" },
  { label: "Close rate:", value: "20 - 35%", color: "text-gold" },
  { label: "Cost per closed job:", value: "$150 - $300", color: "text-gold" },
  { label: "Monthly ad waste:", value: "Near zero", color: "text-gold" },
];

export default function ROI() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Financial data analytics"
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-navy/97" />
      </div>
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Your Potential ROI
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              The Numbers Don&apos;t Lie
            </h2>
          </AnimateIn>

          <div className="mt-14 grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <AnimateIn direction="left" delay={0.2}>
              <div className="rounded-sm overflow-hidden border border-zinc-800">
                <div className="bg-gradient-to-r from-red-700 to-red-600 text-white font-bold text-center py-5 text-lg">
                  The Old Way (Shared Leads)
                </div>
                <div className="glass-dark p-6 space-y-1">
                  {oldWay.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-zinc-800"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <span className="text-white">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Image strip */}
                <div className="relative h-24">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                    alt="Declining graph"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-red-900/50 flex items-center justify-center">
                    <span className="text-red-200 font-bold text-sm">Wasted budget. Shared competition.</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.2}>
              <div className="rounded-sm overflow-hidden border border-zinc-800">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-center py-5 text-lg">
                  The RoofCoat Way (Exclusive)
                </div>
                <div className="glass-dark p-6 space-y-1">
                  {newWay.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-zinc-800"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <span className="text-white">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="relative h-24">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Growth analytics"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-green-900/50 flex items-center justify-center">
                    <span className="text-green-200 font-bold text-sm">Pre-qualified leads. Maximum ROI.</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.5}>
            <motion.div
              className="mt-12 bg-gradient-to-r from-gold via-yellow-400 to-gold text-navy font-bold text-center py-5 px-6 rounded-sm text-lg border border-zinc-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Average partner sees 5-10x return on ad spend in the first 90 days
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
