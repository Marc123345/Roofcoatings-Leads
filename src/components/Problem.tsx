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

/* ── Dashboard visual the man points at ── */
function DashboardVisual({ problemId }: { problemId: string }) {
  if (problemId === "wasted-spend") {
    const months = [
      { month: "Month 1", spend: "$3,200", leads: "2 leads", status: "Learning phase" },
      { month: "Month 2", spend: "$3,200", leads: "5 leads", status: "Still optimizing" },
      { month: "Month 3", spend: "$3,200", leads: "4 leads", status: "Testing audiences" },
      { month: "Month 4", spend: "$3,200", leads: "3 leads", status: "Pivoting strategy" },
    ];
    return (
      <div className="space-y-2">
        <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2">Typical agency timeline</p>
        {months.map((m, i) => (
          <motion.div key={m.month}
            className="flex items-center justify-between rounded-lg px-3 py-2 bg-red-500/5 border border-red-500/15"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-[10px] font-mono w-14">{m.month}</span>
              <span className="text-red-400 font-bold text-xs">{m.spend}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-[10px]">{m.leads}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400">{m.status}</span>
            </div>
          </motion.div>
        ))}
        <motion.div className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 border border-white/10 mt-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <span className="text-white/50 text-xs">Total spent</span>
          <span className="text-red-400 font-bold text-base">$12,800</span>
        </motion.div>
      </div>
    );
  }

  if (problemId === "slow-results") {
    return (
      <div className="space-y-3">
        <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2">Generic agency vs. RoofCoat</p>
        <div>
          <p className="text-red-400 text-[10px] font-bold mb-1.5">Generic Agency</p>
          <div className="flex gap-1">
            {["Wk 1-2", "Wk 3-4", "Month 2", "Month 3"].map((l, i) => (
              <motion.div key={l} className="flex-1 text-center"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
                <div className="h-7 bg-red-500/8 border border-red-500/15 rounded-md flex items-center justify-center mb-0.5">
                  <span className="text-red-400/50 text-[9px]">{i < 3 ? "Testing..." : "Maybe?"}</span>
                </div>
                <span className="text-white/40 text-[9px]">{l}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-green-400 text-[10px] font-bold mb-1.5">RoofCoat Leads</p>
          <div className="flex gap-1">
            {[
              { l: "Day 0", t: "Audit" },
              { l: "Day 1", t: "Live!" },
              { l: "Day 1-2", t: "1st Lead" },
              { l: "Week 1", t: "3+ Jobs" },
            ].map((s, i) => (
              <motion.div key={s.l} className="flex-1 text-center"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                <div className="h-7 bg-green-500/8 border border-green-500/20 rounded-md flex items-center justify-center mb-0.5">
                  <span className="text-green-400 text-[9px] font-medium">{s.t}</span>
                </div>
                <span className="text-white/50 text-[9px]">{s.l}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // no-system — volatile chart
  const values = [65, 30, 80, 20, 70, 15, 90, 35, 55, 10, 75, 25];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const W = 320, H = 120, max = 100;
  const pts = values.map((v, i) => ({ x: (i / (values.length - 1)) * W, y: H - (v / max) * H }));
  const d = pts.reduce((a, p, i) => {
    if (!i) return `M${p.x},${p.y}`;
    const pr = pts[i - 1];
    return `${a} C${pr.x + (p.x - pr.x) / 3},${pr.y} ${p.x - (p.x - pr.x) / 3},${p.y} ${p.x},${p.y}`;
  }, "");

  return (
    <div>
      <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2">Your revenue this year</p>
      <svg viewBox={`-5 -5 ${W + 10} ${H + 25}`} className="w-full">
        <motion.path d={`${d} L${W},${H} L0,${H} Z`} fill="url(#pFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
        <motion.path d={d} fill="none" stroke="url(#pStroke)" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }} />
        {pts.filter((_, i) => values[i] < 25).map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r="3" fill="#ef4444"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 + i * 0.1, type: "spring" }} />
        ))}
        {months.map((m, i) => <text key={m+i} x={pts[i].x} y={H + 14} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.2)" fontFamily="system-ui">{m}</text>)}
        <defs>
          <linearGradient id="pFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity="0.1"/><stop offset="100%" stopColor="#ef4444" stopOpacity="0"/></linearGradient>
          <linearGradient id="pStroke" x1="0" y1="0" x2={`${W}`} y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#ef4444"/><stop offset="50%" stopColor="#eab308"/><stop offset="100%" stopColor="#ef4444"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────── */

export default function Problem() {
  const [active, setActive] = useState(0);
  const problem = PROBLEMS[active];

  const colorMap: Record<string, { accent: string; bg: string; border: string; tab: string }> = {
    red: { accent: "text-red-500", bg: "bg-red-500/5", border: "border-red-500/20", tab: "bg-red-500" },
    orange: { accent: "text-orange-500", bg: "bg-orange-500/5", border: "border-orange-500/20", tab: "bg-orange-500" },
    blue: { accent: "text-blue", bg: "bg-blue/5", border: "border-blue/20", tab: "bg-blue" },
  };
  const c = colorMap[problem.color];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-red-500/5 border border-red-500/15 rounded-full px-4 py-1.5 mb-6">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">The Problem</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy max-w-3xl mx-auto leading-tight">
              Spent Thousands on Agencies That Don&apos;t Get Roof Coating?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 text-navy/60 text-base sm:text-lg max-w-xl mx-auto">
              Generic agencies burn your budget learning your niche. We already have a proven system built specifically for roof coating contractors.
            </p>
          </AnimateIn>
        </div>

        {/* Tab selectors */}
        <AnimateIn delay={0.2}>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex rounded-xl p-1 border border-navy/10 gap-1 overflow-x-auto max-w-full" style={{scrollbarWidth:"none"}}>
              {PROBLEMS.map((p, i) => {
                const tabColor = colorMap[p.color].tab;
                return (
                  <button key={p.id} onClick={() => setActive(i)}
                    className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${active === i ? "text-white" : "text-navy/40 hover:text-navy/70"}`}>
                    {active === i && (
                      <motion.div className={`absolute inset-0 ${tabColor} rounded-lg`}
                        layoutId="problemTab" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="hidden sm:inline">{p.tag}</span>
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateIn>

        {/* Content — man pointing at dashboard */}
        <AnimatePresence mode="wait">
          <motion.div key={problem.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-0 items-stretch">

            {/* Left — text */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className={`h-full border-2 ${c.border} p-5 sm:p-8 lg:p-10 flex flex-col`}>
                <motion.span
                  className={`text-5xl lg:text-7xl font-bold ${c.accent} opacity-20`}
                  initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3, type: "spring" }}>
                  {problem.tag}
                </motion.span>

                <h3 className="text-navy font-bold text-xl sm:text-2xl lg:text-3xl mt-3">{problem.title}</h3>
                <p className="text-navy/70 mt-3 text-base leading-relaxed">{problem.description}</p>
                <p className="text-navy/50 mt-4 text-sm leading-relaxed flex-1">{problem.detail}</p>

                <div className={`mt-8 inline-flex items-center gap-3 ${c.bg} ${c.border} border px-5 py-3`}>
                  <span className={`text-2xl font-bold ${c.accent}`}>{problem.statValue}</span>
                  <span className="text-navy/60 text-sm">{problem.statLabel}</span>
                </div>
              </div>
            </div>

            {/* Right — man pointing at dashboard */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="bg-navy h-full relative overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-0">

                {/* Dashboard the man is pointing at */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-[55%] sm:w-[50%] z-10">
                  <DashboardVisual problemId={problem.id} />
                </div>

                {/* Man pointing left at the dashboard */}
                <motion.div
                  className="absolute bottom-0 right-0 sm:right-4 w-[45%] sm:w-[42%] lg:w-[40%] z-20"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="https://ik.imagekit.io/qcvroy8xpd/cheerful-man-pointing-finger-left-advertise-product-removebg%20(1)%201.png"
                    alt="Man pointing at agency results"
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain"
                    style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.5))" }}
                  />
                </motion.div>

                {/* Glow behind the man */}
                <div
                  className="absolute bottom-0 right-0 w-[60%] h-[80%] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 80% 90%, rgba(234,179,8,0.12) 0%, transparent 60%)" }}
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-[30%] right-[35%] sm:right-[38%] bg-red-500 text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg shadow-red-500/30 uppercase tracking-wider z-30"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Poor Results
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
