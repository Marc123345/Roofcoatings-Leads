"use client";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const inclusions = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    iconBg: "from-blue to-blue-light",
    title: "Custom Facebook Ad Campaigns",
    description: "Fully managed, tailored to your service area and ideal customer",
    size: "large",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "from-navy to-navy-light",
    title: "Lead Pre-Qualification",
    description: "Proprietary funnel filters out tire kickers before you see them",
    size: "normal",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    iconBg: "from-gold to-yellow-500",
    title: "100% Exclusive Leads",
    description: "Every lead goes only to you. Zero competition, higher close rates",
    size: "normal",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "from-blue to-blue-light",
    title: "Real-Time Notifications",
    description: "Instant alerts so you can call within seconds of interest",
    size: "normal",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: "from-green-500 to-green-600",
    title: "Follow-Up Script Support",
    description: "Proven scripts to boost your conversion rate by 15%+",
    size: "normal",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "from-blue to-blue-light",
    title: "Performance Dashboard",
    description: "Track leads, conversions, and ROI in real time",
    size: "large",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-gray-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-blue font-semibold text-sm uppercase tracking-wider mb-3">
            What&apos;s Included
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Everything You Need to Grow
          </h2>
        </AnimateIn>

        {/* Bento grid — asymmetric */}
        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6" staggerDelay={0.08}>
          {/* Custom Facebook Campaigns — wide */}
          <StaggerItem className="md:col-span-7">
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full group relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className={`w-14 h-14 bg-gradient-to-br ${inclusions[0].iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {inclusions[0].icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{inclusions[0].title}</h3>
              <p className="text-navy/70 leading-relaxed">{inclusions[0].description}</p>
              {/* Mini ad preview thumbnails */}
              <div className="mt-6 flex gap-3 overflow-x-auto">
                {["Residential", "Commercial", "Flat Roof"].map((type) => (
                  <div key={type} className="flex-1 bg-gray-light rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-blue/10 rounded-lg mx-auto mb-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-navy text-[11px] font-medium">{type}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </StaggerItem>

          {/* Lead Pre-Qual */}
          <StaggerItem className="md:col-span-5">
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full group"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${inclusions[1].iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {inclusions[1].icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{inclusions[1].title}</h3>
              <p className="text-navy/70 leading-relaxed">{inclusions[1].description}</p>
              {/* Funnel visual */}
              <div className="mt-5 space-y-1">
                {[
                  { w: "100%", label: "All Inquiries", count: "100", bg: "bg-gray/20" },
                  { w: "65%", label: "Qualified", count: "65", bg: "bg-blue/20" },
                  { w: "35%", label: "Ready to Book", count: "35", bg: "bg-green-500/20" },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className={`h-6 ${step.bg} rounded`} style={{ width: step.w }} />
                    <span className="text-navy text-xs whitespace-nowrap">{step.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          </StaggerItem>

          {/* Middle row — 3 equal cards */}
          {inclusions.slice(2, 5).map((item) => (
            <StaggerItem key={item.title} className="md:col-span-4">
              <motion.article
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full group"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed">{item.description}</p>
              </motion.article>
            </StaggerItem>
          ))}

          {/* Dashboard — full width */}
          <StaggerItem className="md:col-span-12">
            <motion.article
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full group relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${inclusions[5].iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {inclusions[5].icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{inclusions[5].title}</h3>
                  <p className="text-navy/70 leading-relaxed">{inclusions[5].description}</p>
                </div>
                <div className="md:w-2/3 bg-gray-light rounded-xl p-5">
                  {/* Mini dashboard preview */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: "Total Leads", value: "847", trend: "+12%" },
                      { label: "Booked", value: "294", trend: "+8%" },
                      { label: "Avg CPA", value: "$42", trend: "-15%" },
                      { label: "ROI", value: "7.2x", trend: "+22%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg p-3 text-center">
                        <p className="text-navy font-bold text-lg">{stat.value}</p>
                        <p className="text-slate-600 text-[11px]">{stat.label}</p>
                        <p className={`text-[11px] font-medium ${stat.trend.startsWith("+") ? "text-green-500" : "text-blue"}`}>{stat.trend}</p>
                      </div>
                    ))}
                  </div>
                  {/* Chart bars */}
                  <div className="flex items-end gap-1 h-16">
                    {[40, 55, 35, 65, 50, 70, 60, 80, 75, 90, 85, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue to-blue-light rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
