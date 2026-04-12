"use client";
import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <div className="relative w-[220px] mx-auto">
      {/* Phone frame */}
      <div className="bg-navy-light rounded-[2rem] border-2 border-white/10 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-light rounded-b-xl z-10" />

        <div className="bg-navy rounded-[1.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-white text-[11px]">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-1.5 bg-white/40 rounded-xl" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-xl" />
            </div>
          </div>

          {/* Notification content */}
          <div className="px-4 pb-4 space-y-3 pt-2">
            <motion.div
              className="bg-gradient-to-r from-blue/20 to-blue/10 border border-blue/20 rounded-xl p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue rounded-xl flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white text-[11px] font-bold">New Lead Alert</span>
                <span className="text-white text-[8px] ml-auto">now</span>
              </div>
              <p className="text-white text-[11px] leading-tight">
                Commercial roof coating inquiry — 15,000 sq ft warehouse in Tampa, FL
              </p>
              <div className="flex gap-2 mt-2">
                <div className="bg-blue text-white text-[11px] px-3 py-1 rounded-xl font-medium">Call Now</div>
                <div className="bg-white/10 text-white text-[11px] px-3 py-1 rounded-xl">Details</div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/5 rounded-xl p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-[11px] font-bold">Lead Booked!</span>
                <span className="text-white text-[8px] ml-auto">3m ago</span>
              </div>
              <p className="text-white text-[11px] leading-tight">
                Residential flat roof — Appointment set for Thursday 2pm
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/5 rounded-xl p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gold rounded-xl flex items-center justify-center">
                  <svg className="w-3 h-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white text-[11px] font-bold">Weekly Summary</span>
              </div>
              <p className="text-white text-[11px]">18 leads | 6 booked | $38 avg CPA</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
