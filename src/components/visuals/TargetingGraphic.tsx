"use client";
import { motion } from "framer-motion";

export default function TargetingGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[300px] mx-auto">
      {/* Concentric targeting rings */}
      <motion.div
        className="absolute inset-0 rounded-none border border-blue/10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.div
        className="absolute inset-[15%] rounded-none border border-blue/20"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.div
        className="absolute inset-[30%] rounded-none border border-blue/30 bg-blue/5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.div
        className="absolute inset-[42%] rounded-none bg-gradient-to-br from-blue to-blue-light flex items-center justify-center shadow-lg glow-blue"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>

      {/* Floating data points */}
      {[
        { x: "10%", y: "20%", label: "Tampa, FL", delay: 1 },
        { x: "75%", y: "15%", label: "Dallas, TX", delay: 1.2 },
        { x: "80%", y: "65%", label: "Phoenix, AZ", delay: 1.4 },
        { x: "5%", y: "70%", label: "Miami, FL", delay: 1.6 },
      ].map((point) => (
        <motion.div
          key={point.label}
          className="absolute"
          style={{ left: point.x, top: point.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: point.delay, type: "spring" }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-gold rounded-none" />
            <div className="absolute inset-0 w-3 h-3 bg-gold rounded-none animate-ping opacity-30" />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-[11px] whitespace-nowrap">{point.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
