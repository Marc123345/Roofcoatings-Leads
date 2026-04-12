"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BarChart3, Zap, Rocket, Plus } from "lucide-react";

const steps = [
  {
    id: "01",
    tag: "Audit",
    icon: Search,
    title: "Strategy Audit",
    description: "We analyze your market, service area, competition, and ideal customer profile. You get a custom campaign blueprint — free.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2546&auto=format&fit=crop",
  },
  {
    id: "02",
    tag: "Build",
    icon: BarChart3,
    title: "Campaign Launch",
    description: "Our team builds precision-targeted Facebook Ads for your territory. Creatives, copy, targeting — all done for you. Live within 48 hours.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "03",
    tag: "Qualify",
    icon: Zap,
    title: "Lead Qualification",
    description: "Every lead passes through our 5-step funnel. Property type, roof age, timeline, budget — pre-qualified before it reaches you.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "04",
    tag: "Deliver",
    icon: Rocket,
    title: "Exclusive Delivery",
    description: "Leads sent directly to you in real time via SMS + email. 100% exclusive — never shared with competing contractors.",
    image: "https://ik.imagekit.io/qcvroy8xpd/photo-1674485169641-bcb2bf6f1df9%20(1).jpeg",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-24 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-navy/10 pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4 block">
              // How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy uppercase tracking-tighter leading-tight">
              From Audit{" "}
              <span className="text-gold">To Revenue</span>
            </h2>
          </div>
          <p className="text-navy/60 text-sm sm:text-base max-w-md leading-relaxed">
            A proven 4-step system that turns ad spend into closed roof coating jobs — predictably.
          </p>
        </div>
      </div>

      {/* Kinetic Accordion */}
      <div className="w-full max-w-[1920px] mx-auto h-[500px] sm:h-[550px] md:h-[600px] flex flex-col md:flex-row border-y border-navy/10">
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <motion.div
              key={step.id}
              layout
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
              className={`relative h-full border-b md:border-b-0 md:border-r border-navy/10 cursor-pointer overflow-hidden group ${
                isActive ? "flex-[3]" : "flex-[1]"
              }`}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-navy">
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover mix-blend-luminosity"
                  animate={{ scale: isActive ? 1.05 : 1.2, opacity: isActive ? 0.3 : 0.1 }}
                  transition={{ duration: 1.2 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 transition-opacity duration-500 ${isActive ? "opacity-90" : "opacity-100"}`} />
              </div>

              {/* Vertical Number Strip (inactive state) */}
              <div className={`absolute top-0 left-0 w-full md:w-20 h-full z-10 flex md:flex-col items-center justify-between p-6 transition-all duration-500 ${isActive ? "opacity-0 -translate-x-full" : "opacity-100"}`}>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] -rotate-90 hidden md:block w-24 text-center origin-center translate-y-16">
                  {step.tag}
                </span>
                <span className="font-mono text-2xl text-white/30 border border-zinc-700 w-10 h-10 flex items-center justify-center">
                  {step.id}
                </span>
                <Plus className="text-gold w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content (active state) */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-20 h-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="bg-gold px-4 py-1 inline-block">
                        <span className="text-navy font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                          Phase {step.id}
                        </span>
                      </div>
                      <step.icon className="w-10 h-10 text-gold/20" />
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4"
                      >
                        {step.title}
                      </motion.h3>

                      <div className="w-12 h-1 bg-gold mb-6" />

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base sm:text-lg text-zinc-400 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex gap-px h-1">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-full flex-1 transition-colors duration-500 ${i === activeStep ? "bg-gold" : "bg-navy/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
