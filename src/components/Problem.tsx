"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const PROBLEMS = [
  {
    id: "wasted-spend",
    tag: "01",
    label: "Wasted $$$",
    title: "You're Spending Thousands With Nothing to Show",
    description: "Generic agencies charge $2k–$5k/month and take 3–6 months to 'optimize.' Meanwhile you're burning cash on leads that never close.",
    detail: "Most agencies don't understand roof coating. They run the same playbook they use for plumbers and HVAC guys. You're paying premium prices for a system that was never built for your niche — and the 'learning phase' never seems to end.",
    statValue: "$3k+",
    statLabel: "wasted per month on average",
    color: "red",
  },
  {
    id: "slow-results",
    tag: "02",
    label: "Slow Results",
    title: "Months of Waiting, Zero Guarantees",
    description: "Most agencies need 60–90 days just to start delivering. By then you've spent $10k+ and you're still hoping it works.",
    detail: "They'll tell you 'the algorithm needs time' or 'we're still testing audiences.' The truth? They're figuring it out on your dime. You're funding their education in roof coating — and that's not a business model, it's a gamble.",
    statValue: "90+",
    statLabel: "days before most agencies deliver",
    color: "orange",
  },
  {
    id: "no-system",
    tag: "03",
    label: "No System",
    title: "No Proven System = No Predictable Growth",
    description: "Without a system that's already been tested and proven in your niche, you're always starting from scratch.",
    detail: "We've already cracked the code for 100+ roof coating contractors. Our targeting, our ad creative, our qualification funnel — it's all been refined across thousands of leads in your exact niche. You're not a guinea pig. You're plugging into a machine that's already running.",
    statValue: "100+",
    statLabel: "contractors already on our system",
    color: "blue",
  },
];

/* ── Visuals ────────────────────────────────────────── */

function WastedSpendVisual() {
  const months = [
    { month: "Month 1", spend: "$3,200", leads: "2 leads", status: "Learning phase" },
    { month: "Month 2", spend: "$3,200", leads: "5 leads", status: "Still optimizing" },
    { month: "Month 3", spend: "$3,200", leads: "4 leads", status: "Testing new audiences" },
    { month: "Month 4", spend: "$3,200", leads: "3 leads", status: "Pivoting strategy" },
  ];
  return (
    <div className="space-y-2.5">
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-3 text-center">Typical generic agency timeline</p>
      {months.map((m, i) => (
        <motion.div key={m.month}
          className="flex items-center justify-between rounded-lg px-4 py-3 bg-red-500/5 border border-red-500/15"
          initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.12 }}>
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-xs font-mono w-16">{m.month}</span>
            <span className="text-red-400 font-bold text-sm">{m.spend}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-xs">{m.leads}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">{m.status}</span>
          </div>
        </motion.div>
      ))}
      <motion.div className="flex items-center justify-between rounded-lg px-4 py-3 bg-white/5 border border-white/10 mt-1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <span className="text-white/70 text-xs font-medium">Total spent</span>
        <span className="text-red-400 font-bold text-lg">$12,800</span>
      </motion.div>
      <motion.p className="text-red-400 text-xs font-medium text-center pt-1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        4 months. $12,800. Still &ldquo;optimizing.&rdquo;
      </motion.p>
    </div>
  );
}

function SlowResultsVisual() {
  return (
    <div className="space-y-4">
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-3 text-center">Generic agency vs. RoofCoat Leads</p>
      {/* Generic agency timeline */}
      <div className="space-y-1">
        <p className="text-red-400 text-xs font-bold mb-2">Generic Agency</p>
        <div className="flex gap-1">
          {["Week 1-2", "Week 3-4", "Month 2", "Month 3"].map((label, i) => (
            <motion.div key={label} className="flex-1 text-center"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
              <div className="h-8 bg-red-500/10 border border-red-500/15 rounded-lg flex items-center justify-center mb-1">
                <span className="text-red-400/50 text-[11px]">{i < 3 ? "Testing..." : "Maybe?"}</span>
              </div>
              <span className="text-white/70 text-[11px]">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* RoofCoat timeline */}
      <div className="space-y-1 pt-2">
        <p className="text-green-400 text-xs font-bold mb-2">RoofCoat Leads</p>
        <div className="flex gap-1">
          {[
            { label: "Day 0", text: "Audit", done: true },
            { label: "Day 1", text: "Live!", done: true },
            { label: "Day 1-2", text: "First Lead", done: true },
            { label: "Week 1", text: "3+ Jobs", done: true },
          ].map((step, i) => (
            <motion.div key={step.label} className="flex-1 text-center"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }}>
              <div className="h-8 bg-green-500/10 border border-green-500/25 rounded-lg flex items-center justify-center mb-1">
                <span className="text-green-400 text-[11px] font-medium">{step.text}</span>
              </div>
              <span className="text-white/80 text-[11px]">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.p className="text-orange-400 text-xs font-medium text-center pt-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        They&apos;re still &ldquo;learning.&rdquo; You&apos;re already closing.
      </motion.p>
    </div>
  );
}

function ConsistencyVisual() {
  const values = [65, 30, 80, 20, 70, 15, 90, 35, 55, 10, 75, 25];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const W = 380, H = 140, max = 100;
  const pts = values.map((v, i) => ({ x: (i / (values.length - 1)) * W, y: H - (v / max) * H }));
  const d = pts.reduce((a, p, i) => {
    if (!i) return `M${p.x},${p.y}`;
    const pr = pts[i - 1];
    return `${a} C${pr.x + (p.x - pr.x) / 3},${pr.y} ${p.x - (p.x - pr.x) / 3},${p.y} ${p.x},${p.y}`;
  }, "");

  return (
    <div>
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-3 text-center">Your revenue this year</p>
      <svg viewBox={`-10 -5 ${W + 20} ${H + 30}`} className="w-full">
        {[0, .25, .5, .75, 1].map(p => <line key={p} x1={0} y1={H*(1-p)} x2={W} y2={H*(1-p)} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
        <motion.path d={`${d} L${W},${H} L0,${H} Z`} fill="url(#rcFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <motion.path d={d} fill="none" stroke="url(#rcStroke)" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }} />
        {pts.filter((_, i) => values[i] < 25).map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#ef4444"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 + i * 0.15, type: "spring" }} />
        ))}
        {months.map((m, i) => <text key={m+i} x={pts[i].x} y={H + 16} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.25)" fontFamily="system-ui">{m}</text>)}
        <defs>
          <linearGradient id="rcFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity="0.12"/><stop offset="100%" stopColor="#ef4444" stopOpacity="0"/></linearGradient>
          <linearGradient id="rcStroke" x1="0" y1="0" x2={`${W}`} y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#ef4444"/><stop offset="50%" stopColor="#eab308"/><stop offset="100%" stopColor="#ef4444"/></linearGradient>
        </defs>
      </svg>
      <motion.p className="text-white/70 text-xs font-medium text-center mt-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        You can&apos;t grow a business on a pipeline you can&apos;t predict.
      </motion.p>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────── */

export default function Problem() {
  const [active, setActive] = useState(0);
  const problem = PROBLEMS[active];

  const colorMap: Record<string, string> = {
    red: "border-red-500/30 bg-red-500/8",
    orange: "border-orange-500/30 bg-orange-500/8",
    blue: "border-blue/30 bg-blue/8",
  };
  const textColorMap: Record<string, string> = { red: "text-red-400", orange: "text-orange-400", blue: "text-blue-light" };

  return (
    <section className="relative overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-blue" />

      {/* Header on light bg */}
      <div className="bg-gray-light pt-20 lg:pt-28 pb-10 lg:pb-14 text-center px-4">
        <AnimateIn>
          <span className="text-blue font-semibold text-sm uppercase tracking-wider">The Problem</span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 max-w-3xl mx-auto leading-tight">
            Spent Thousands on Agencies That Don&apos;t Get Roof Coating?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="mt-4 text-navy/80 text-lg max-w-xl mx-auto">
            Generic agencies burn your budget learning your niche. We already have a proven system built specifically for roof coating contractors.
          </p>
        </AnimateIn>
      </div>

      {/* Interactive area on dark bg */}
      <div className="bg-navy relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" fill className="object-cover opacity-[0.03]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 grid-pattern" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 lg:py-20">
          {/* Tab selectors */}
          <AnimateIn delay={0.2}>
            <div className="flex justify-center mb-10 lg:mb-8 sm:mb-14">
              <div className="inline-flex bg-navy-light rounded-2xl p-1.5 border border-white/10 gap-1 overflow-x-auto max-w-full scrollbar-none" style={{scrollbarWidth:"none"}}>
                {PROBLEMS.map((p, i) => (
                  <button key={p.id} onClick={() => setActive(i)}
                    className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${active === i ? "text-navy" : "text-white/70 hover:text-white/70"}`}>
                    {active === i && (
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl"
                        layoutId="problemTab" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="hidden sm:inline">{p.tag}</span>
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div key={problem.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left — text */}
              <div className="order-2 lg:order-1">
                <div className="bg-navy-light rounded-2xl border border-white/5 p-5 sm:p-8 lg:p-10">
                  <motion.span
                    className={`text-6xl lg:text-7xl font-bold ${textColorMap[problem.color]}`}
                    initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, type: "spring" }}>
                    {problem.tag}
                  </motion.span>

                  <h3 className="text-white font-bold text-2xl lg:text-3xl mt-4">{problem.title}</h3>
                  <p className="text-white/80 mt-3 text-lg leading-relaxed">{problem.description}</p>
                  <p className="text-white/80 mt-4 text-sm leading-relaxed">{problem.detail}</p>

                  <div className={`mt-8 inline-flex items-center w-full sm:w-auto justify-center gap-3 rounded-xl border px-5 py-3 ${colorMap[problem.color]}`}>
                    <span className={`text-2xl font-bold ${textColorMap[problem.color]}`}>{problem.statValue}</span>
                    <span className="text-white/80 text-sm">{problem.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Right — visual */}
              <div className="order-1 lg:order-2">
                <div className="bg-navy-light rounded-2xl border border-white/5 p-6 lg:p-8 min-h-[260px] lg:min-h-[340px] flex items-center justify-center">
                  {problem.id === "wasted-spend" && <WastedSpendVisual />}
                  {problem.id === "slow-results" && <SlowResultsVisual />}
                  {problem.id === "no-system" && <ConsistencyVisual />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom transition to next section */}
      <div className="h-1 bg-gradient-to-r from-blue via-gold to-green-500" />
    </section>
  );
}
