"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight">
            Ready to Fill Your Pipeline?
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mt-6 text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Get pre-qualified roof coating leads delivered directly to your business —
            plus a free custom 5-page website built specifically for your company.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <motion.a
            href="/get-started"
            className="mt-10 inline-flex items-center w-full sm:w-auto justify-center gap-2 bg-navy text-white px-8 py-4 sm:px-10 sm:py-5 rounded-none font-bold text-base sm:text-lg border border-navy hover:bg-navy/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Claim Your Free Website + Audit
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <p className="mt-4 text-navy/40 text-sm">
            Free 5-page website. Free lead audit. No contracts.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.55}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            {["Proven System", "No Contracts", "Just Results"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold" />
                <span className="text-navy/60 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.6}>
          <p className="mt-10 text-navy font-bold text-lg">roofcoatleads.com</p>
          <div className="mt-2 flex justify-center text-gold text-xl tracking-widest">{"★★★★★"}</div>
        </AnimateIn>
      </div>
    </section>
  );
}
