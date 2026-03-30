"use client";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "Free Strategy Audit",
    description: "We analyze your market, service area, and ideal customer to build a custom campaign.",
    icon: (
      <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Campaign Launch",
    description: "Our team builds and launches precision-targeted Facebook Ads in your territory.",
    icon: (
      <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Lead Qualification",
    description: "Every lead is pre-qualified through our proprietary funnel. No tire kickers.",
    icon: (
      <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Exclusive Delivery",
    description: "Leads sent directly to you in real time. Pre-qualified and delivered in real time.",
    icon: (
      <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-blue font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
            Your Path to Predictable Growth
          </h2>
        </AnimateIn>

        <div className="mt-20 relative">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-blue via-blue-light to-blue rounded-xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <StaggerContainer className="grid md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.15}>
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center group">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue to-blue-light text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto relative z-10 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-light/80 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ borderColor: "rgba(37,99,235,0.2)" }}
                  >
                    <div className="flex justify-center mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="text-navy/80 text-sm mt-2 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
