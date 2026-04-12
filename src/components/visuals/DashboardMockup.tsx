"use client";
import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
      <div className="bg-navy-light rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-2xl bg-red-400" />
          <div className="w-3 h-3 rounded-2xl bg-yellow-400" />
          <div className="w-3 h-3 rounded-2xl bg-green-400" />
          <span className="ml-2 text-white/80 text-xs">RoofCoat Leads Dashboard</span>
        </div>

        <div className="p-5 space-y-4">
          {/* Top stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Leads Today", value: "12", color: "text-blue-light" },
              { label: "Close Rate", value: "32%", color: "text-green-400" },
              { label: "Avg. CPA", value: "$42", color: "text-gold" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 rounded-xl p-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-white/70 text-[11px] mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white/5 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/80 text-xs">Lead Volume (30 days)</span>
              <span className="text-green-400 text-xs font-medium">+27%</span>
            </div>
            <svg viewBox="0 0 300 80" className="w-full">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 60 Q30 55 60 50 T120 35 T180 25 T240 15 T300 8"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path
                d="M0 60 Q30 55 60 50 T120 35 T180 25 T240 15 T300 8 V80 H0 Z"
                fill="url(#chartGrad)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </svg>
          </div>

          {/* Recent leads list */}
          <div className="space-y-2">
            <p className="text-white/80 text-xs mb-2">Recent Leads</p>
            {[
              { name: "Commercial — 12,000 sq ft", time: "2 min ago", status: "New" },
              { name: "Residential — Flat Roof Leak", time: "18 min ago", status: "Contacted" },
              { name: "Commercial — Warehouse", time: "1 hr ago", status: "Booked" },
            ].map((lead, i) => (
              <motion.div
                key={lead.name}
                className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-2xl bg-green-400 animate-pulse" />
                  <span className="text-white/70 text-xs">{lead.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-[11px]">{lead.time}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-xl ${
                    lead.status === "New" ? "bg-blue/20 text-blue-light" :
                    lead.status === "Contacted" ? "bg-gold/20 text-gold" :
                    "bg-green-500/20 text-green-400"
                  }`}>{lead.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
