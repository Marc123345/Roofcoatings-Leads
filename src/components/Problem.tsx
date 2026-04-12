"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, Users } from "lucide-react";
import AnimateIn from "./AnimateIn";

/* ── Animated dripping leak SVG ── */
function LeakAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pipe */}
      <svg viewBox="0 0 200 300" className="w-full max-w-[200px] sm:max-w-[240px]" fill="none">
        {/* Vertical pipe */}
        <rect x="80" y="0" width="40" height="120" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {/* Elbow */}
        <path d="M80 120 Q80 160 120 160 L180 160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.06)" />
        <rect x="80" y="115" width="100" height="40" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        {/* Crack / leak point */}
        <motion.path
          d="M115 155 L118 165 L112 168 L120 175"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {/* Drip 1 */}
        <motion.ellipse
          cx="116" cy="185" rx="3" ry="4"
          fill="#ef4444"
          initial={{ cy: 175, opacity: 1, ry: 4 }}
          animate={{ cy: 290, opacity: [1, 1, 0.8, 0], ry: [4, 3, 2, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeIn", delay: 0.8 }}
        />
        {/* Drip 2 — offset */}
        <motion.ellipse
          cx="120" cy="185" rx="2.5" ry="3.5"
          fill="#ef4444"
          opacity={0.7}
          initial={{ cy: 175, opacity: 0.7 }}
          animate={{ cy: 290, opacity: [0.7, 0.7, 0.5, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeIn", delay: 1.8 }}
        />
        {/* Drip 3 — smaller */}
        <motion.ellipse
          cx="113" cy="185" rx="2" ry="3"
          fill="#ef4444"
          opacity={0.5}
          initial={{ cy: 175, opacity: 0.5 }}
          animate={{ cy: 280, opacity: [0.5, 0.5, 0.3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", delay: 2.6 }}
        />
        {/* Puddle */}
        <motion.ellipse
          cx="116" cy="292" rx="25" ry="5"
          fill="rgba(239,68,68,0.15)"
          initial={{ rx: 15, opacity: 0 }}
          animate={{ rx: [15, 30, 25], opacity: [0, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dollar signs floating out of the leak */}
        {[0, 1, 2].map((i) => (
          <motion.text
            key={i}
            x={108 + i * 12}
            y={200}
            fontSize="12"
            fill="#ef4444"
            fontFamily="system-ui"
            fontWeight="bold"
            initial={{ y: 200, opacity: 0.8, x: 108 + i * 12 }}
            animate={{
              y: [200, 170 - i * 20],
              opacity: [0.8, 0],
              x: [108 + i * 12, 100 + i * 18],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1 + i * 0.9,
              ease: "easeOut",
            }}
          >
            $
          </motion.text>
        ))}
      </svg>
    </div>
  );
}

/* ── Leak items ── */
const LEAKS = [
  {
    icon: DollarSign,
    title: "Budget Bleeding Out",
    hook: "$2,000–$5,000/month",
    description: "Generic agencies charge premium prices while they \"learn\" your niche on your dime. Every month of their learning phase is money dripping out of your business.",
  },
  {
    icon: Clock,
    title: "Time Hemorrhage",
    hook: "3–6 months wasted",
    description: "While they're \"optimizing,\" your competitors are closing jobs. Every week without a system is a week of leads going to someone else in your market.",
  },
  {
    icon: Users,
    title: "Leads Going Cold",
    hook: "80% of leads never convert",
    description: "Without niche-specific qualification, you're chasing homeowners who don't need coating, don't have budget, or aren't ready. Your pipeline is full of noise.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const counterY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="bg-navy relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          <div>
            <AnimateIn>
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">The Hidden Leak</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08]">
                Your Ad Budget Is{" "}
                <span className="text-red-400">Silently Draining</span>{" "}
                Every Month.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
                Most roof coating contractors don&apos;t realize they&apos;re losing{" "}
                <span className="text-red-400 font-semibold">$3,000+ every month</span>{" "}
                simply because their agency wasn&apos;t built for this niche. The leak is invisible on a spreadsheet — but it&apos;s killing your growth.
              </p>
            </AnimateIn>
          </div>

          {/* Animated leak visual */}
          <AnimateIn delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-[200px] h-[260px] sm:w-[280px] sm:h-[340px] max-w-full relative">
                <LeakAnimation />
                {/* Counter — money lost */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-3 text-center backdrop-blur-sm"
                  style={{ y: counterY }}
                >
                  <p className="text-red-400 font-extrabold text-2xl sm:text-3xl tracking-tight">$12,800</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">avg. lost in 4 months</p>
                </motion.div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── Three leak cards ── */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {LEAKS.map((leak, i) => (
            <AnimateIn key={leak.title} delay={0.1 + i * 0.1}>
              <motion.div
                className="relative p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full group"
                whileHover={{ borderColor: "rgba(239,68,68,0.25)", backgroundColor: "rgba(239,68,68,0.03)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-extrabold text-white/[0.03] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <leak.icon className="w-5 h-5 text-red-400" />
                </div>

                {/* Hook stat */}
                <p className="text-red-400 font-extrabold text-xl sm:text-2xl tracking-tight mb-1">
                  {leak.hook}
                </p>

                {/* Title */}
                <h3 className="text-white font-bold text-base sm:text-lg mb-3">
                  {leak.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {leak.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-red-500/30 via-red-500/10 to-transparent rounded-full" />
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* ── Bottom CTA line ── */}
        <AnimateIn delay={0.4}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-white/30 text-sm mb-4">
              Every day you wait is another day of leads — and revenue — dripping away.
            </p>
            <motion.a
              href="/get-started"
              className="inline-flex items-center gap-2 text-gold hover:text-yellow-300 font-bold text-sm uppercase tracking-wider transition-colors"
              whileHover={{ x: 4 }}
            >
              Plug the leak →
            </motion.a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
