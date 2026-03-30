"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ShieldCheck, Star, Zap, Phone, Bot, Check, ArrowRight } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const features = [
  {
    id: "campaigns",
    icon: <Target className="w-6 h-6" />,
    color: "blue",
    title: "Custom Facebook Ad Campaigns",
    description: "Fully managed, tailored to your service area and ideal customer. We handle copy, creative, targeting, and optimization.",
    details: [
      "Custom ad copy for your niche (silicone, acrylic, metal, TPO)",
      "Territory-specific audience targeting",
      "A/B tested creative and landing pages",
      "Monthly optimization and scaling",
    ],
  },
  {
    id: "qualification",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "navy",
    title: "Lead Pre-Qualification Funnel",
    description: "Our proprietary multi-step funnel screens every lead for property type, urgency, roof age, and budget.",
    details: [
      "Property type verification",
      "Urgency and timeline screening",
      "Budget qualification",
      "Decision-maker confirmation",
    ],
  },
  {
    id: "leads",
    icon: <Star className="w-6 h-6" />,
    color: "gold",
    title: "Pre-Qualified, High-Intent Leads",
    description: "Every lead is pre-screened before it reaches you. No tire kickers, no price shoppers — just ready-to-book prospects.",
    details: [
      "Screened for property type and roof condition",
      "Budget-qualified before delivery",
      "Real-time delivery via SMS + email",
      "Full contact details + qualification answers",
    ],
  },
  {
    id: "notifications",
    icon: <Zap className="w-6 h-6" />,
    color: "blue",
    title: "Real-Time Notifications",
    description: "Instant alerts the moment a lead qualifies. Call within 60 seconds and your close rate doubles.",
    details: [
      "Instant SMS notification",
      "Email with full lead details",
      "CRM integration available",
      "Speed-to-lead tracking",
    ],
  },
  {
    id: "scripts",
    icon: <Phone className="w-6 h-6" />,
    color: "green",
    title: "Follow-Up Script Support",
    description: "Proven call and text scripts built specifically for roof coating. Partners using our scripts see 15%+ higher close rates.",
    details: [
      "Initial call script",
      "Follow-up text sequences",
      "Objection handling frameworks",
      "Voicemail drop templates",
    ],
  },
];

const addOns = [
  {
    icon: <Bot className="w-7 h-7 text-blue" />,
    title: "AI Appointment Setter",
    price: "$500",
    description: "Our AI system contacts leads and books appointments on your calendar — automatically.",
    highlights: ["24/7 automated outreach", "Books directly on your calendar", "SMS + email sequences"],
  },
  {
    icon: <Phone className="w-7 h-7 text-gold" />,
    title: "Live Secretary Calls",
    price: "$500",
    description: "Our trained team calls every lead within minutes. Speed-to-lead handled for you.",
    highlights: ["Calls within 5 minutes", "Trained on roof coating", "Appointment booking included"],
  },
];

export default function WhatsIncluded() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue/10", text: "text-blue", border: "border-blue/20" },
    navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/20" },
    gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
    green: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-500/20" },
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-blue/5 border border-blue/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue text-xs font-bold uppercase tracking-widest">What&apos;s Included</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
              Everything You Need to Grow
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 text-navy/60 text-lg max-w-2xl mx-auto">
              One system. No piecemeal tools. Every component is built to work together.
            </p>
          </AnimateIn>
        </div>

        {/* Interactive feature explorer */}
        <AnimateIn delay={0.2}>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Left: feature list */}
            <div className="lg:col-span-5 space-y-2">
              {features.map((f, i) => {
                const c = colorMap[f.color];
                const isActive = activeFeature === i;
                return (
                  <motion.button
                    key={f.id}
                    onClick={() => setActiveFeature(i)}
                    className={`w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border ${
                      isActive
                        ? `bg-navy text-white border-navy shadow-xl shadow-navy/20`
                        : `bg-white border-gray-light/80 hover:border-blue/20 hover:shadow-md`
                    }`}
                    whileHover={!isActive ? { y: -2 } : {}}
                    layout
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-white/10 text-white" : `${c.bg} ${c.text}`
                      }`}>
                        {f.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-sm sm:text-base ${isActive ? "text-white" : "text-navy"}`}>
                          {f.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            className="text-white/60 text-xs mt-1 line-clamp-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                          >
                            {f.description}
                          </motion.p>
                        )}
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                        isActive ? "text-gold rotate-0" : "text-navy/20 -rotate-45"
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right: feature detail */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${
                      `bg-gradient-to-br ${feature.color === "blue" ? "from-blue to-blue-light" : feature.color === "gold" ? "from-gold to-yellow-500" : feature.color === "green" ? "from-green-500 to-green-600" : "from-navy-light to-navy"}`
                    } shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider">Included</p>
                      <h3 className="text-white font-bold text-xl sm:text-2xl">{feature.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-4">What this includes</p>
                    <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                      {feature.details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          className="flex items-start gap-3 bg-white/[0.04] rounded-xl p-3.5 border border-white/[0.06]"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <div className="w-5 h-5 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          <span className="text-white/80 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 bg-white/[0.04] rounded-2xl p-4 border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-2xl bg-green-400 animate-pulse" />
                    <span className="text-white/60 text-sm">Included in your $1,000/mo plan — no extra cost</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>

        {/* Pricing + Add-ons */}
        <div className="mt-16 sm:mt-20">
          <AnimateIn>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy">Simple, Transparent Pricing</h3>
              <p className="mt-2 text-navy/60">One plan. Optional add-ons. Cancel anytime.</p>
            </div>
          </AnimateIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {/* Core plan */}
            <StaggerItem className="md:col-span-1">
              <motion.div
                className="bg-navy rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden h-full flex flex-col"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-400" />
                <div className="inline-flex items-center gap-1.5 bg-gold/20 rounded-full px-3 py-1 mx-auto mb-6">
                  <span className="text-gold text-[11px] font-bold uppercase tracking-wider">Most Popular</span>
                </div>
                <p className="text-white/60 text-sm mb-2">Core Lead System</p>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-white text-3xl sm:text-5xl font-bold">$1k</span>
                  <span className="text-white/40 text-sm">/mo</span>
                </div>
                <div className="space-y-3 text-left flex-1">
                  {["Custom Facebook Ad campaigns", "Lead pre-qualification funnel", "Pre-qualified, high-intent leads", "Real-time notifications", "Follow-up script support", "Dedicated campaign manager", "Free 5-page custom website"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <motion.a href="/get-started"
                  className="mt-8 w-full bg-gradient-to-r from-gold to-yellow-400 text-navy py-3.5 rounded-xl font-bold text-sm text-center block"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Get Started &rarr;
                </motion.a>
              </motion.div>
            </StaggerItem>

            {/* Add-ons */}
            {addOns.map((addon) => (
              <StaggerItem key={addon.title}>
                <motion.div
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-light/80 text-center h-full flex flex-col"
                  whileHover={{ y: -4, borderColor: "rgba(37,99,235,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
                >
                  <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {addon.icon}
                  </div>
                  <p className="text-navy/60 text-sm mb-2">Add-On</p>
                  <h4 className="text-navy font-bold text-lg mb-1">{addon.title}</h4>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-navy text-2xl sm:text-4xl font-bold">+{addon.price}</span>
                    <span className="text-navy/40 text-sm">/mo</span>
                  </div>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">{addon.description}</p>
                  <div className="space-y-2.5 text-left flex-1">
                    {addon.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-blue shrink-0" />
                        <span className="text-navy/70 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a href="/get-started"
                    className="mt-8 w-full border-2 border-navy/10 text-navy py-3.5 rounded-xl font-bold text-sm text-center block hover:border-blue/30 hover:bg-blue/5 transition-all"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Add to Plan &rarr;
                  </motion.a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Trust bar */}
          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-navy/50">
              {["No contracts", "Cancel anytime", "Results from day 1", "Free website included"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
