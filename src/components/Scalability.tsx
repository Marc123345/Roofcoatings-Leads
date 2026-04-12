"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart3, Wallet, MapPin, CloudSun } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const sliderClass = "w-full h-2 appearance-none cursor-pointer rounded-2xl bg-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-11 [&::-webkit-slider-thumb]:h-11 [[&::-webkit-slider-thumb]:rounded-none::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-gold/40 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-navy-light [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-moz-range-thumb]:w-11 [&::-moz-range-thumb]:h-11 [[&::-moz-range-thumb]:rounded-none::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-navy-light [&::-moz-range-thumb]:cursor-grab";

export default function Scalability() {
  const [leads, setLeads] = useState(25);
  const [costPerLead, setCostPerLead] = useState(45);
  const [closeRate, setCloseRate] = useState(25);
  const [avgJobValue, setAvgJobValue] = useState(8000);

  const calc = useMemo(() => {
    const adSpend = leads * costPerLead;
    const jobsClosed = Math.round((leads * closeRate) / 100);
    const revenue = jobsClosed * avgJobValue;
    const roi = adSpend > 0 ? revenue / adSpend : 0;
    const profit = revenue - adSpend;
    return { adSpend, jobsClosed, revenue, roi, profit };
  }, [leads, costPerLead, closeRate, avgJobValue]);

  const formatCurrency = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
    return `$${n.toLocaleString()}`;
  };

  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 hidden sm:block w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-gold/5 rounded-xl blur-[100px]" />
      <div className="absolute bottom-0 left-0 hidden sm:block w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue/5 rounded-xl blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-14">
          <AnimateIn>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">ROI Calculator</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              See Exactly What Your Pipeline Could Look Like
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Adjust the inputs to match your business. The math does the talking.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.2}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6">

            {/* LEFT — Inputs */}
            <div className="lg:col-span-2 bg-navy-light rounded-2xl border border-white/10 p-5 sm:p-8 space-y-8">
              <h3 className="text-white font-bold text-lg">Your Inputs</h3>

              {/* Leads per month */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm">Leads per month</label>
                  <span className="text-gold font-bold text-sm">{leads}</span>
                </div>
                <input type="range" min={5} max={100} step={5} value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className={sliderClass}
                  style={{ background: `linear-gradient(to right, #eab308 ${((leads - 5) / 95) * 100}%, rgba(255,255,255,0.1) ${((leads - 5) / 95) * 100}%)` }}
                />
                <div className="flex justify-between text-white/70 text-xs mt-1"><span>5</span><span>100</span></div>
              </div>

              {/* Cost per lead */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm">Cost per lead</label>
                  <span className="text-gold font-bold text-sm">${costPerLead}</span>
                </div>
                <input type="range" min={25} max={80} step={5} value={costPerLead}
                  onChange={(e) => setCostPerLead(Number(e.target.value))}
                  className={sliderClass}
                  style={{ background: `linear-gradient(to right, #eab308 ${((costPerLead - 25) / 55) * 100}%, rgba(255,255,255,0.1) ${((costPerLead - 25) / 55) * 100}%)` }}
                />
                <div className="flex justify-between text-white/70 text-xs mt-1"><span>$25</span><span>$80</span></div>
              </div>

              {/* Close rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm">Close rate</label>
                  <span className="text-gold font-bold text-sm">{closeRate}%</span>
                </div>
                <input type="range" min={10} max={45} step={5} value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className={sliderClass}
                  style={{ background: `linear-gradient(to right, #eab308 ${((closeRate - 10) / 35) * 100}%, rgba(255,255,255,0.1) ${((closeRate - 10) / 35) * 100}%)` }}
                />
                <div className="flex justify-between text-white/70 text-xs mt-1"><span>10%</span><span>45%</span></div>
              </div>

              {/* Avg job value */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm">Avg. job value</label>
                  <span className="text-gold font-bold text-sm">{formatCurrency(avgJobValue)}</span>
                </div>
                <input type="range" min={2000} max={50000} step={1000} value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className={sliderClass}
                  style={{ background: `linear-gradient(to right, #eab308 ${((avgJobValue - 2000) / 48000) * 100}%, rgba(255,255,255,0.1) ${((avgJobValue - 2000) / 48000) * 100}%)` }}
                />
                <div className="flex justify-between text-white/70 text-xs mt-1"><span>$2k</span><span>$50k</span></div>
              </div>
            </div>

            {/* RIGHT — Results */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* Top stats row */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  key={`spend-${calc.adSpend}`}
                  initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                  className="bg-navy-light rounded-2xl border border-white/10 p-6"
                >
                  <p className="text-white/80 text-xs mb-1">Monthly Ad Spend</p>
                  <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">{formatCurrency(calc.adSpend)}</p>
                </motion.div>

                <motion.div
                  key={`jobs-${calc.jobsClosed}`}
                  initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                  className="bg-navy-light rounded-2xl border border-white/10 p-6"
                >
                  <p className="text-white/80 text-xs mb-1">Jobs Closed</p>
                  <p className="text-green-400 text-2xl sm:text-3xl lg:text-4xl font-bold">{calc.jobsClosed}</p>
                  <p className="text-white/80 text-xs mt-1">per month</p>
                </motion.div>
              </div>

              {/* Revenue — large highlight */}
              <motion.div
                key={`rev-${calc.revenue}`}
                initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                className="bg-navy-light rounded-2xl border border-green-500/20 p-6 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/80 text-xs mb-1">Estimated Monthly Revenue</p>
                    <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">{formatCurrency(calc.revenue)}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-2 shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-green-400 text-sm font-bold">Predictable</span>
                  </div>
                </div>

                {/* Visual bar: spend vs revenue */}
                <div className="mt-6 space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/70">Ad spend</span>
                      <span className="text-white/80 font-medium">{formatCurrency(calc.adSpend)}</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-2xl overflow-hidden">
                      <motion.div
                        className="h-full bg-white/20 rounded-xl"
                        animate={{ width: `${Math.min((calc.adSpend / calc.revenue) * 100, 100)}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/70">Revenue</span>
                      <span className="text-green-400 font-medium">{formatCurrency(calc.revenue)}</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-2xl overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-xl"
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom row: ROI + Profit */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  key={`roi-${calc.roi.toFixed(1)}`}
                  initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                  className="bg-gold/10 rounded-2xl border border-gold/20 p-6 text-center"
                >
                  <p className="text-gold/60 text-xs mb-1">Return on Ad Spend</p>
                  <p className="text-gold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">{calc.roi.toFixed(1)}x</p>
                </motion.div>

                <motion.div
                  key={`profit-${calc.profit}`}
                  initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                  className="bg-navy-light rounded-2xl border border-white/10 p-6 text-center"
                >
                  <p className="text-white/80 text-xs mb-1">Net Profit</p>
                  <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">{formatCurrency(calc.profit)}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Feature pills */}
        <StaggerContainer className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto" staggerDelay={0.08}>
          {[
            { icon: <BarChart3 className="w-6 h-6 text-gold" />, title: "Predictable Pipeline", desc: "Know your numbers every month" },
            { icon: <Wallet className="w-6 h-6 text-gold" />, title: "Budget Control", desc: "Adjust spend anytime — no contracts" },
            { icon: <MapPin className="w-6 h-6 text-gold" />, title: "Territory Expansion", desc: "New area? Live in days" },
            { icon: <CloudSun className="w-6 h-6 text-gold" />, title: "Seasonal Flexibility", desc: "Ramp up or down as needed" },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                className="bg-navy-light rounded-2xl border border-white/5 p-5 text-center group hover:border-gold/20 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-center">{f.icon}</div>
                <h3 className="text-white font-bold text-sm mt-3">{f.title}</h3>
                <p className="text-white/80 text-xs mt-1">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
