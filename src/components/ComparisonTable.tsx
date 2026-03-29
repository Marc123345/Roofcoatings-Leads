"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const features = [
  { name: "Pre-Qualified Leads", roofcoat: true, google: false, home: false },
  { name: "Pre-Qualified Prospects", roofcoat: true, google: "Partial", home: false },
  { name: "Done-For-You Campaigns", roofcoat: true, google: false, home: false },
  { name: "Facebook Precision Targeting", roofcoat: true, google: false, home: false },
  { name: "Real-Time Lead Delivery", roofcoat: true, google: true, home: "Delayed" },
  { name: "Dedicated Campaign Manager", roofcoat: true, google: false, home: false },
  { name: "Cost Per Lead", roofcoat: "Low", google: "High", home: "Medium" },
  { name: "Follow-Up Script Support", roofcoat: true, google: false, home: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-sm font-semibold text-navy">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="bg-gray-light py-16 sm:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center">
            What Makes Us Different
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-14 overflow-x-auto">
            <motion.table
              className="w-full bg-white rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-2 sm:px-6 font-semibold text-xs sm:text-sm">Feature</th>
                  <th className="py-3 px-2 sm:px-6 font-semibold text-xs sm:text-sm bg-gradient-to-b from-blue to-blue-light">RoofCoat Leads</th>
                  <th className="py-3 px-2 sm:px-6 font-semibold text-xs sm:text-sm">Google Ads</th>
                  <th className="py-3 px-2 sm:px-6 font-semibold text-xs sm:text-sm">HomeAdvisor</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <motion.tr
                    key={feature.name}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-blue/[0.02]"} hover:bg-blue/[0.04] transition-colors`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <td className="py-3 px-3 sm:px-6 font-medium text-navy text-xs sm:text-sm">{feature.name}</td>
                    <td className="py-3 px-2 sm:px-6 text-center bg-blue/5 border-x border-blue/10">
                      <CellValue value={feature.roofcoat} />
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      <CellValue value={feature.google} />
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-center">
                      <CellValue value={feature.home} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
