"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Rocket, ShieldCheck, Zap, Target, Star, Bell, Phone, BarChart3, Handshake } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import ParticleField from "../visuals/ParticleField";

/* ── Data ───────────────────────────────────────────── */

const steps = [
  {
    id: "audit",
    number: "01",
    time: "Day 0",
    title: "Free Strategy Audit",
    short: "We do the homework before spending a dollar.",
    description: "We analyze your local market, your service area, your ideal customer profile, and your current pipeline. This 30-minute call isn't a sales pitch — it's an honest assessment of whether we can deliver results for you. If we can't, we'll tell you.",
    detail: "Custom campaign blueprint within 24 hours.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "from-blue to-blue-light",
  },
  {
    id: "build",
    number: "02",
    time: "Day 1",
    title: "Campaign Build & Launch",
    short: "Custom-built for your territory. Not a template.",
    description: "Our team builds your Facebook Ad campaign from the ground up — copy, creative, targeting, and funnel. Every campaign is custom-built for your territory, your niche (commercial vs residential), and your monthly lead volume target.",
    detail: "Launch within 24–48 hours of approval.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-gold to-yellow-500",
  },
  {
    id: "qualify",
    number: "03",
    time: "Day 1–2",
    title: "Lead Pre-Qualification",
    short: "Tire kickers filtered out before you see them.",
    description: "Every lead goes through our proprietary qualification funnel. We screen for property type, roof age, urgency, and budget. Price shoppers and tire kickers are filtered out. You only see leads who are genuinely ready to talk.",
    detail: "You only receive qualified, ready-to-book prospects.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
  },
  {
    id: "deliver",
    number: "04",
    time: "Day 1–2",
    title: "Exclusive Real-Time Delivery",
    short: "Pre-qualified and delivered in real time.",
    description: "When a lead passes qualification, it goes directly to you in real time. You get an instant notification with their name, contact details, property type, and qualification answers. Speed-to-lead is everything.",
    detail: "The faster you call, the higher your close rate.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-gold to-yellow-400",
  },
];

const advantages = [
  { title: "Behavioral Targeting", stat: "2.9B+", statLabel: "users", description: "Facebook knows when someone is researching home improvement or matches the profile of a property owner with an aging building. Google only knows what they typed." },
  { title: "Interruption Advantage", stat: "Before", statLabel: "they search", description: "Roof coating is a problem people don't know they have. Facebook reaches them at the problem-awareness stage — before they're comparing contractors." },
  { title: "40% Lower CPA", stat: "40%", statLabel: "lower cost", description: "Our Facebook campaigns consistently deliver cost-per-acquisition 40% below comparable Google Ads for the same contractors." },
  { title: "Pre-Qualification Depth", stat: "5+", statLabel: "screening Qs", description: "Facebook Lead Ads allow multi-question forms — that's how we qualify leads before you ever see them. Google search doesn't support this natively." },
];

const included = [
  { icon: <Target className="w-5 h-5 text-gold" />, title: "Custom Facebook Ad Campaigns", description: "Fully managed. We handle copy, creative, audience, and optimization — you close the jobs." },
  { icon: <ShieldCheck className="w-5 h-5 text-gold" />, title: "Lead Pre-Qualification Funnel", description: "Proprietary multi-step funnel screens for property type, urgency, roof age, and budget." },
  { icon: <Star className="w-5 h-5 text-gold" />, title: "Pre-Qualified, High-Intent Leads", description: "Every lead is screened for property type, urgency, and budget before it reaches you." },
  { icon: <Bell className="w-5 h-5 text-gold" />, title: "Real-Time Notifications", description: "Instant alerts via email, SMS, or CRM. Call within 60 seconds and your close rate doubles." },
  { icon: <Phone className="w-5 h-5 text-gold" />, title: "Follow-Up Script Support", description: "Proven scripts built for roof coating. Partners using them see 15%+ conversion rate increase." },
  { icon: <BarChart3 className="w-5 h-5 text-gold" />, title: "AI Appointment Setter + Live Secretaries", description: "Optional add-ons: AI books appointments automatically ($500/mo) or our live team calls your leads ($500/mo)." },
  { icon: <Handshake className="w-5 h-5 text-gold" />, title: "Dedicated Campaign Manager", description: "One point of contact who knows your business. No account shuffling." },
];

/* ── Visuals per step ───────────────────────────────── */

function AuditVisual() {
  const items = [
    { label: "Local market analysis", delay: 0.1 },
    { label: "Service area mapping", delay: 0.2 },
    { label: "Competitor audit", delay: 0.3 },
    { label: "Ideal customer profile", delay: 0.4 },
    { label: "Pipeline assessment", delay: 0.5 },
    { label: "Custom blueprint", delay: 0.6 },
  ];
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <motion.div key={item.label}
          className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2.5 border border-white/5"
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.35 }}>
          <motion.div
            className="w-5 h-5 rounded-full bg-blue flex items-center justify-center shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: item.delay + 0.15, type: "spring" }}>
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
          </motion.div>
          <span className="text-white/70 text-sm">{item.label}</span>
        </motion.div>
      ))}
      <motion.div
        className="mt-3 bg-blue/10 border border-blue/20 rounded-lg px-4 py-3 text-center"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <span className="text-blue-light text-sm font-medium">Blueprint delivered in 24 hours</span>
      </motion.div>
    </div>
  );
}

function BuildVisual() {
  const layers = [
    { label: "Ad Copy", w: "90%", color: "bg-blue/30", delay: 0.1 },
    { label: "Creative Design", w: "80%", color: "bg-blue/25", delay: 0.25 },
    { label: "Audience Targeting", w: "95%", color: "bg-gold/25", delay: 0.4 },
    { label: "Qualification Funnel", w: "85%", color: "bg-green-500/25", delay: 0.55 },
    { label: "Tracking & Analytics", w: "75%", color: "bg-blue/20", delay: 0.7 },
  ];
  return (
    <div className="space-y-3">
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-2">Campaign components</p>
      {layers.map((layer) => (
        <div key={layer.label}>
          <div className="flex justify-between mb-1">
            <span className="text-white/80 text-xs">{layer.label}</span>
          </div>
          <div className="h-7 bg-white/5 rounded-lg overflow-hidden relative">
            <motion.div
              className={`h-full ${layer.color} rounded-lg flex items-center px-3`}
              initial={{ width: 0 }}
              animate={{ width: layer.w }}
              transition={{ delay: layer.delay, duration: 0.6, ease: "easeOut" }}>
              <motion.svg className="w-3 h-3 text-white/80 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: layer.delay + 0.5 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </motion.svg>
            </motion.div>
          </div>
        </div>
      ))}
      <motion.div className="mt-3 bg-gold/10 border border-gold/20 rounded-lg px-4 py-3 text-center"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <span className="text-gold text-sm font-medium">Campaign live in 24–48 hours</span>
      </motion.div>
    </div>
  );
}

function QualifyVisual() {
  const funnel = [
    { label: "All inquiries", count: "100", w: "100%", bg: "bg-white/10", delay: 0.1 },
    { label: "Property type match", count: "72", w: "72%", bg: "bg-blue/20", delay: 0.3 },
    { label: "Urgency confirmed", count: "48", w: "48%", bg: "bg-blue/30", delay: 0.5 },
    { label: "Budget qualified", count: "31", w: "31%", bg: "bg-green-500/25", delay: 0.7 },
    { label: "Ready to book", count: "25", w: "25%", bg: "bg-green-500/40", delay: 0.9 },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-2">Qualification funnel</p>
      {funnel.map((stage) => (
        <motion.div key={stage.label}
          className={`${stage.bg} rounded-lg py-2.5 px-4 flex items-center justify-between border border-white/5`}
          style={{ width: stage.w }}
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: stage.delay, duration: 0.4 }}>
          <span className="text-white/80 text-xs">{stage.label}</span>
          <span className="text-white font-bold text-xs">{stage.count}</span>
        </motion.div>
      ))}
      <motion.div className="mt-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 text-center w-[25%] min-w-[180px]"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
        <span className="text-green-400 text-sm font-medium">Only qualified leads reach you</span>
      </motion.div>
    </div>
  );
}

function DeliverVisual() {
  const notifications = [
    { time: "Just now", title: "New Qualified Lead", detail: "Commercial — 15,000 sq ft warehouse, Tampa FL", status: "new" },
    { time: "3 min ago", title: "Lead Contacted", detail: "Residential flat roof — active leak, appointment set", status: "contacted" },
    { time: "18 min ago", title: "Job Booked!", detail: "Commercial silicone coating — $18,500 project", status: "booked" },
  ];
  return (
    <div className="space-y-3">
      <p className="text-white/70 text-[11px] uppercase tracking-wider mb-2">Live feed</p>
      {notifications.map((n, i) => (
        <motion.div key={n.title}
          className="bg-white/5 border border-white/10 rounded-xl p-4"
          initial={{ opacity: 0, y: 15, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.25, duration: 0.35 }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${n.status === "new" ? "bg-blue animate-pulse" : n.status === "contacted" ? "bg-gold" : "bg-green-400"}`} />
              <span className="text-white font-bold text-sm">{n.title}</span>
            </div>
            <span className="text-white/80 text-[11px]">{n.time}</span>
          </div>
          <p className="text-white/70 text-xs">{n.detail}</p>
          {n.status === "new" && (
            <motion.div className="mt-2 flex gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.25 + 0.3 }}>
              <span className="bg-blue text-white text-[11px] font-bold px-3 py-1 rounded-full">Call Now</span>
              <span className="bg-white/10 text-white/80 text-[11px] px-3 py-1 rounded-full">View Details</span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

const stepVisuals: Record<string, React.FC> = {
  audit: AuditVisual,
  build: BuildVisual,
  qualify: QualifyVisual,
  deliver: DeliverVisual,
};

/* ── Main Component ─────────────────────────────────── */

export default function HowItWorksContent() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const Visual = stepVisuals[step.id];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" alt="Analytics" fill className="object-cover opacity-15 scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-44 text-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">How It Works</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              From Audit to{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                First Lead
              </span>
              <br />in Under 48 Hours
            </motion.h1>

            <motion.p
              className="mt-6 text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Most lead generation is a black box. You pay, you wait, you hope.
              Here&apos;s exactly what happens — step by step.
            </motion.p>

            <motion.a href="#process"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center gap-2 text-white/70 hover:text-white transition-colors"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span className="text-sm">Scroll to explore</span>
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── 4-Step Interactive Process ── */}
      <section id="process" className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Timeline nav — horizontal */}
            <div className="mb-16">
              <div className="flex items-center justify-between max-w-3xl mx-auto relative">
                {/* Connecting line */}
                <div className="absolute top-5 left-[10%] right-[10%] h-px bg-white/10" />
                <motion.div
                  className="absolute top-5 left-[10%] h-px bg-gradient-to-r from-gold to-green-400"
                  animate={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {steps.map((s, i) => (
                  <button key={s.id} onClick={() => setActiveStep(i)} className="relative z-10 flex flex-col items-center gap-3 group">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 transition-all duration-300 ${
                        i <= activeStep
                          ? "bg-gold border-gold text-navy"
                          : "bg-navy-light border-white/10 text-white/80"
                      }`}
                      whileHover={{ scale: 1.15 }}
                      animate={i === activeStep ? { scale: [1, 1.1, 1] } : {}}
                      transition={i === activeStep ? { duration: 2, repeat: Infinity } : {}}>
                      {s.icon}
                    </motion.div>
                    <div className="text-center">
                      <p className={`text-xs font-bold transition-colors ${i === activeStep ? "text-gold" : "text-white/80"}`}>{s.time}</p>
                      <p className={`text-[11px] transition-colors hidden sm:block ${i === activeStep ? "text-white/70" : "text-white/70"}`}>{s.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content — 2 panels */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

                {/* Left — Info */}
                <div className="bg-navy-light rounded-3xl border border-white/10 p-5 sm:p-8 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-white/80 text-xs font-mono">Step {step.number}</p>
                      <h2 className="text-white font-bold text-2xl lg:text-3xl">{step.title}</h2>
                    </div>
                  </div>

                  <p className="text-gold font-semibold text-lg mb-4">{step.short}</p>
                  <p className="text-white/80 leading-relaxed flex-1">{step.description}</p>

                  <div className="mt-6 bg-white/5 border border-white/5 rounded-xl px-5 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{step.detail}</span>
                  </div>

                  {/* Step navigation */}
                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-white/80 text-sm font-medium disabled:opacity-20 hover:border-white/20 hover:text-white/80 transition-all">
                      &larr; Prev
                    </button>
                    {activeStep < steps.length - 1 ? (
                      <motion.button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="flex-1 bg-gradient-to-r from-gold to-yellow-400 text-navy py-2.5 rounded-xl font-bold text-sm"
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        Next Step &rarr;
                      </motion.button>
                    ) : (
                      <motion.a href="/get-started"
                        className="flex-1 bg-gradient-to-r from-gold to-yellow-400 text-navy py-2.5 rounded-xl font-bold text-sm text-center"
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        Start Your Audit &rarr;
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right — Visual */}
                <div className="bg-navy-light rounded-3xl border border-white/10 p-5 sm:p-8 lg:p-10 flex items-center justify-center min-h-[300px] lg:min-h-[420px]">
                  <div className="w-full max-w-md">
                    <Visual />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Why Facebook — Not Google? ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Platform Advantage</p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                Why Facebook Ads — Not Google?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                Most roofing contractors think Google first. Here&apos;s why Facebook is the better fit for roof coating.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {advantages.map((adv) => (
              <StaggerItem key={adv.title}>
                <motion.div
                  className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full group"
                  whileHover={{ y: -4 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-navy rounded-xl px-4 py-2 text-center">
                      <p className="text-gold text-xl font-bold leading-none">{adv.stat}</p>
                      <p className="text-white/70 text-[11px] mt-0.5">{adv.statLabel}</p>
                    </div>
                    <h3 className="text-navy font-bold text-xl">{adv.title}</h3>
                  </div>
                  <p className="text-navy/70 leading-relaxed">{adv.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Everything Included — Bento ── */}
      <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Everything You Need to Grow</h2></AnimateIn>
            <AnimateIn delay={0.1}><p className="mt-4 text-white/70 text-lg">All included. No add-ons. No hidden fees.</p></AnimateIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
            {included.map((item, i) => (
              <StaggerItem key={item.title} className={i === 0 ? "col-span-2" : i === 6 ? "col-span-2" : ""}>
                <motion.div
                  className="bg-navy-light rounded-2xl border border-white/5 p-6 h-full group hover:border-gold/20 transition-colors"
                  whileHover={{ y: -4 }}>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mt-3">{item.title}</h3>
                  <p className="text-white/80 text-xs mt-1.5 leading-relaxed">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">Ready to See Your Custom Blueprint?</h2>
            <p className="mt-4 text-navy/80 text-lg">The strategy audit is free. No pitch. No obligation. If we can&apos;t help, we&apos;ll tell you.</p>
            <motion.a href="/get-started"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg w-full sm:w-auto text-center shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.95 }}>
              Claim Your Free Website + Audit &rarr;
            </motion.a>
            <p className="mt-3 text-gray/50 text-sm">No charge. No contract. Takes 30 minutes.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
