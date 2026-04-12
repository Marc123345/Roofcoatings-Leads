"use client";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import CountUp from "./CountUp";
import DashboardMockup from "./visuals/DashboardMockup";

export default function Results() {
  return (
    <section id="results" className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] bg-gold/5 rounded-sm blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center">
            The Results Speak for Themselves
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="mt-4 text-white text-base sm:text-lg leading-relaxed text-center">Real numbers from our partner network</p>
        </AnimateIn>

        {/* Bento layout: stats + dashboard */}
        <StaggerContainer className="mt-14 grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6" staggerDelay={0.1}>
          {/* Stat: 40% */}
          <StaggerItem className="lg:col-span-3">
            <motion.div
              className="glass rounded-sm p-6 h-full text-center border-t-2 border-gold/40 shimmer"
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gold text-3xl sm:text-5xl font-bold">
                <CountUp end={40} suffix="%" />
              </p>
              <p className="text-white font-bold mt-3">Lower Cost Per Acquisition</p>
              <p className="text-white text-sm mt-2">vs. HomeAdvisor & Google Ads</p>
            </motion.div>
          </StaggerItem>

          {/* Dashboard mockup — large center */}
          <StaggerItem className="col-span-2 lg:col-span-6 row-span-2">
            <motion.div
              className="glass rounded-sm p-4 sm:p-6 h-full flex flex-col justify-center"
              whileHover={{ borderColor: "rgba(37,99,235,0.3)" }}
            >
              <DashboardMockup />
            </motion.div>
          </StaggerItem>

          {/* Stat: 3+ */}
          <StaggerItem className="lg:col-span-3">
            <motion.div
              className="glass rounded-sm p-6 h-full text-center border-t-2 border-gold/40 shimmer"
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gold text-3xl sm:text-5xl font-bold">
                <CountUp end={3} suffix="+" />
              </p>
              <p className="text-white font-bold mt-3">Commercial Jobs First Month</p>
              <p className="text-white text-sm mt-2">Average for new partners</p>
            </motion.div>
          </StaggerItem>

          {/* Stat: 15% */}
          <StaggerItem className="lg:col-span-3">
            <motion.div
              className="glass rounded-sm p-6 h-full text-center border-t-2 border-gold/40 shimmer"
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gold text-3xl sm:text-5xl font-bold">
                <CountUp end={15} suffix="%" />
              </p>
              <p className="text-white font-bold mt-3">Conversion Rate Increase</p>
              <p className="text-white text-sm mt-2">With our follow-up scripts</p>
            </motion.div>
          </StaggerItem>

          {/* Stat: <48h */}
          <StaggerItem className="lg:col-span-3">
            <motion.div
              className="glass rounded-sm p-6 h-full text-center border-t-2 border-gold/40 shimmer"
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gold text-3xl sm:text-5xl font-bold">
                <CountUp end={48} prefix="<" suffix="h" />
              </p>
              <p className="text-white font-bold mt-3">Setup to First Lead</p>
              <p className="text-white text-sm mt-2">Fast onboarding process</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <AnimateIn delay={0.5}>
          <div className="mt-12 text-center">
            <motion.a
              href="#cta"
              className="inline-block bg-blue text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold text-sm sm:text-base w-full sm:w-auto text-center overflow-hidden relative group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See What We Can Do For You</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-light to-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
