"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Building2, Home, Factory, Wrench, Users, MessageSquare, ShieldCheck, Target, BarChart3, DollarSign, Zap } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import ParticleField from "../visuals/ParticleField";

const niches = [
  {
    id: "silicone",
    label: "Silicone",
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial Silicone Roof Coatings",
    tagline: "The highest-value niche in the coating industry.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    description: "Our campaigns target commercial property owners with flat/low-slope roofs who are actively researching restoration options — before they find your competitors.",
    avgValue: "$8,000–$25,000",
    audience: "Commercial property owners & facility managers",
    targeting: "Facility management interests, commercial property research, building age 15+",
    qualification: "Roof age 8+, building type commercial, urgency active, decision-maker confirmed",
    adAngle: "Extend your roof life by 15+ years for a fraction of replacement cost",
    color: "from-blue to-blue-light",
    textColor: "text-blue-light",
    stats: [
      { value: "8.2x", label: "avg. ROI" },
      { value: "$38", label: "avg. CPL" },
      { value: "28%", label: "close rate" },
    ],
  },
  {
    id: "acrylic",
    label: "Acrylic",
    icon: <Home className="w-6 h-6" />,
    title: "Acrylic Roof Coating Leads",
    tagline: "The gateway coating for residential homeowners.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    description: "Our ad copy focuses on energy savings and cost vs. full replacement — the two things that drive this buyer to take action fast.",
    avgValue: "$3,000–$8,000",
    audience: "Residential homeowners with flat or low-pitch roofs",
    targeting: "Home improvement interests, energy efficiency, roof age awareness",
    qualification: "Roof age, active leak presence, willingness to spend on quality",
    adAngle: "Save 30% on cooling costs. Stop leaks for good. No full replacement needed.",
    color: "from-green-500 to-green-600",
    textColor: "text-green-400",
    stats: [
      { value: "5.4x", label: "avg. ROI" },
      { value: "$32", label: "avg. CPL" },
      { value: "31%", label: "close rate" },
    ],
  },
  {
    id: "metal",
    label: "Metal Roof",
    icon: <Factory className="w-6 h-6" />,
    title: "Metal Roof Restoration Leads",
    tagline: "High-ticket. Low competition. Massive ROI.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    description: "We target industrial and agricultural property owners with messaging around cost savings vs. full replacement — restore it for 25% of the cost.",
    avgValue: "$12,000–$50,000",
    audience: "Industrial & agricultural property owners",
    targeting: "Farm/ranch owners, warehouse managers, industrial property interests",
    qualification: "Metal roof confirmed, square footage 5k+, urgency level, budget range",
    adAngle: "Restore your metal roof for 25% of replacement cost. 20-year warranty.",
    color: "from-gold to-yellow-500",
    textColor: "text-gold",
    stats: [
      { value: "11.3x", label: "avg. ROI" },
      { value: "$52", label: "avg. CPL" },
      { value: "22%", label: "close rate" },
    ],
  },
  {
    id: "tpo",
    label: "TPO / Flat",
    icon: <Wrench className="w-6 h-6" />,
    title: "TPO / Flat Roof Repair Leads",
    tagline: "Urgency-driven buyers. Immediate demand.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    description: "TPO and flat roof owners are dealing with leaks, ponding water, and upcoming inspections right now. Our campaigns meet them at the exact moment of need.",
    avgValue: "$5,000–$20,000",
    audience: "Commercial & multi-family property owners",
    targeting: "Commercial property managers, multi-family investors, maintenance-focused",
    qualification: "Flat roof confirmed, active leak or ponding, decision timeline under 30 days",
    adAngle: "Leaking flat roof? Get it sealed permanently — faster and cheaper than replacement.",
    color: "from-blue to-navy",
    textColor: "text-blue-light",
    stats: [
      { value: "7.6x", label: "avg. ROI" },
      { value: "$41", label: "avg. CPL" },
      { value: "26%", label: "close rate" },
    ],
  },
];

function CampaignBreakdown({ niche }: { niche: typeof niches[0] }) {
  const rows = [
    { label: "Target Audience", value: niche.audience, icon: <Users className="w-5 h-5 text-gold" /> },
    { label: "Behavioral Targeting", value: niche.targeting, icon: <Target className="w-5 h-5 text-gold" /> },
    { label: "Pre-Qualification", value: niche.qualification, icon: <ShieldCheck className="w-5 h-5 text-gold" /> },
    { label: "Ad Angle", value: niche.adAngle, icon: <MessageSquare className="w-5 h-5 text-gold" /> },
  ];
  return (
    <div className="space-y-3">
      {rows.map((row, i) => (
        <motion.div key={row.label}
          className="bg-white/5 border border-white/5 rounded-2xl p-4"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 + i * 0.1 }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0">{row.icon}</div>
            <div className="min-w-0">
              <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">{row.label}</p>
              <p className="text-white/80 text-sm leading-relaxed">{row.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function NicheExpertiseContent() {
  const [activeIdx, setActiveIdx] = useState(0);
  const niche = niches[activeIdx];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Commercial buildings" fill className="object-cover opacity-15 scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-44 text-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Niche Expertise</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] "
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              We Don&apos;t Do{" "}
              <span className="line-through text-white/80">General Roofing</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                We Speak Your Niche.
              </span>
            </motion.h1>

            <motion.p className="mt-6 text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Silicone vs acrylic. TPO vs metal. Every coating type needs a different campaign.
              We build each one from the ground up for your exact niche.
            </motion.p>

            <motion.a href="#niches"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center gap-2 text-white/70 hover:text-white transition-colors"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span className="text-sm">Explore coating types</span>
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Interactive Niche Explorer ── */}
      <section id="niches" className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab selector */}
            <div className="flex justify-center mb-8 sm:mb-14">
              <div className="inline-flex bg-navy-light rounded-xl p-1.5 border border-white/10 gap-1 overflow-x-auto max-w-full scrollbar-none" style={{scrollbarWidth:"none"}}>
                {niches.map((n, i) => (
                  <button key={n.id} onClick={() => setActiveIdx(i)}
                    className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${activeIdx === i ? "text-navy" : "text-white/70 hover:text-white/70"}`}>
                    {activeIdx === i && (
                      <motion.div className={`absolute inset-0 bg-gradient-to-r ${n.color} rounded-lg`}
                        layoutId="nicheTab" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{n.icon}</span>
                      <span className="hidden sm:inline">{n.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div key={niche.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}>

                {/* Top: Image + Title card */}
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <div className="relative h-[280px] lg:h-[360px]">
                    <Image src={niche.image} alt={niche.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                          <motion.div className={`inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-3 text-white`}
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                            {niche.icon}
                          </motion.div>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{niche.title}</h2>
                          <p className={`mt-2 font-semibold text-lg ${niche.textColor}`}>{niche.tagline}</p>
                        </div>

                        <div className="flex gap-3 shrink-0">
                          {niche.stats.map((stat) => (
                            <div key={stat.label} className="bg-navy/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center min-w-[80px]">
                              <p className="text-gold text-xl font-bold">{stat.value}</p>
                              <p className="text-white/70 text-[11px]">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom: 3-column layout */}
                <div className="grid lg:grid-cols-3 gap-6">

                  {/* Description + Job Value */}
                  <div className="bg-navy-light rounded-2xl border border-white/10 p-5 sm:p-8 flex flex-col">
                    <h3 className="text-white font-bold text-xl mb-4">Why This Niche</h3>
                    <p className="text-white/80 leading-relaxed flex-1">{niche.description}</p>

                    <div className={`mt-6 bg-gradient-to-r ${niche.color} rounded-2xl p-5 text-center`}>
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Avg. Job Value</p>
                      <p className="text-white text-3xl font-bold">{niche.avgValue}</p>
                      <p className="text-white/80 text-xs mt-1">per closed project</p>
                    </div>
                  </div>

                  {/* Campaign Breakdown */}
                  <div className="lg:col-span-2 bg-navy-light rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8">
                    <h3 className="text-white font-bold text-xl mb-5">Campaign Breakdown</h3>
                    <CampaignBreakdown niche={niche} />

                    <motion.a href="/get-started"
                      className={`mt-6 w-full inline-flex items-center justify-center bg-gradient-to-r ${niche.color} text-white py-4 rounded-xl font-bold text-lg shadow-lg`}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Get {niche.label} Leads &rarr;
                    </motion.a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Why We're Different ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                General Agencies Don&apos;t Get This
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-4 text-navy/80 text-lg max-w-2xl mx-auto">
                We know that a silicone campaign needs different messaging than acrylic.
                That metal roof owners respond to different pain points than TPO. This isn&apos;t generic marketing.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              { icon: <Target className="w-5 h-5 text-gold" />, title: "Niche-Specific Targeting", desc: "Each coating type has its own audience profile, behavioral signals, and ad creative." },
              { icon: <MessageSquare className="w-5 h-5 text-blue" />, title: "Custom Ad Copy Per Niche", desc: "Silicone buyers care about longevity. Acrylic buyers care about savings. We write to each." },
              { icon: <ShieldCheck className="w-5 h-5 text-blue" />, title: "Niche Qualification Funnels", desc: "Our screening questions change per coating type — metal roof, flat roof, square footage, urgency." },
              { icon: <BarChart3 className="w-5 h-5 text-blue" />, title: "Proven Playbooks", desc: "100+ contractors across all coating types. We've already tested what works — you get the refined version." },
              { icon: <DollarSign className="w-5 h-5 text-blue" />, title: "Job-Value Optimized", desc: "We optimize for revenue, not just leads. High-ticket commercial campaigns get different treatment." },
              { icon: <Zap className="w-5 h-5 text-blue" />, title: "Same Speed, Any Niche", desc: "Whether silicone or TPO, first lead in under 48 hours. The system is already built." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full"
                  whileHover={{ y: -4 }}>
                  <div className="w-10 h-10 bg-blue/10 rounded-xl flex items-center justify-center">{item.icon}</div>
                  <h3 className="text-navy font-bold text-lg mt-4">{item.title}</h3>
                  <p className="text-navy/80 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-16 sm:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Tell Us Your Niche.{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                We&apos;ll Build the Campaign.
              </span>
            </h2>
            <p className="mt-4 text-white/80 text-lg">Free strategy audit tailored to your specific coating type and territory.</p>
            <motion.a href="/get-started"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center w-full sm:w-auto justify-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg w-full sm:w-auto text-center shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.95 }}>
              Talk to Marc &rarr;
            </motion.a>
            <p className="mt-3 text-white/80 text-sm">No charge. No pitch. No contracts.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
