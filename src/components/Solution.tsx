"use client";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import TargetingGraphic from "./visuals/TargetingGraphic";
import AdCreativeMockup from "./visuals/AdCreativeMockup";

export default function Solution() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              The Solution
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Our Proprietary Facebook Ad System
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              We run targeted Facebook Ad campaigns that connect you directly with building
              owners and homeowners actively dealing with roof issues.
            </p>
          </AnimateIn>
        </div>

        {/* Magazine / Bento layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6" staggerDelay={0.1}>
          {/* Large feature card — targeting graphic */}
          <StaggerItem className="md:col-span-7 md:row-span-2">
            <motion.div
              className="glass rounded-2xl p-8 h-full flex flex-col justify-between group"
              whileHover={{ borderColor: "rgba(37,99,235,0.3)" }}
            >
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue to-blue-light rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl">Precision Targeting</h3>
                <p className="text-white/80 mt-2 max-w-md">
                  Advanced demographics and behavioral targeting reaches property owners at the exact moment they need roof solutions.
                </p>
              </div>
              <div className="mt-6">
                <TargetingGraphic />
              </div>
            </motion.div>
          </StaggerItem>

          {/* Commercial card */}
          <StaggerItem className="md:col-span-5">
            <motion.div
              className="glass rounded-2xl p-6 h-full group"
              whileHover={{ scale: 1.02, borderColor: "rgba(37,99,235,0.3)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue to-blue-light rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Commercial Property Owners</h3>
                  <p className="text-white/80 text-sm mt-1">Target facility managers and building owners with aging roofs</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-gold">2.9B+</p>
                  <p className="text-white/80 text-xs mt-0.5">Active Users</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-gold">97%</p>
                  <p className="text-white/80 text-xs mt-0.5">Reach Rate</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Homeowners card with ad preview */}
          <StaggerItem className="md:col-span-5">
            <motion.div
              className="glass rounded-2xl p-6 h-full group"
              whileHover={{ scale: 1.02, borderColor: "rgba(37,99,235,0.3)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Homeowners with Leaks</h3>
                  <p className="text-white/80 text-sm mt-1">Connect with residential flat roof owners experiencing issues</p>
                </div>
              </div>
              <div className="flex justify-center scale-90 origin-top">
                <AdCreativeMockup variant={1} />
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
