"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "../AnimateIn";
import ParticleField from "../visuals/ParticleField";

const trustPoints = [
  { icon: "✓", title: "No obligation", description: "You don't owe us anything for showing up." },
  { icon: "✓", title: "No upsell", description: "We're not going to pitch you on a $10k retainer." },
  { icon: "✓", title: "Real intel", description: "You'll leave the call knowing more about your local lead landscape than you did before." },
  { icon: "✓", title: "Fast follow-through", description: "Most partners receive their campaign blueprint within 24 hours of the audit." },
];

const faqs = [
  { q: "How do I qualify roofing leads before calling them?", a: "Our system does the qualification for you. Every lead answers questions about property type, roof age, active issues, and timeline before you see their contact details." },
  { q: "What happens after the strategy audit?", a: "Within 24 hours you receive a custom campaign blueprint showing your target audience, estimated lead volume, and projected cost per lead. If you approve, we launch within the next 24 hours." },
  { q: "Is the audit really free?", a: "Yes. No credit card. No commitment. We only do paid work after you've seen your blueprint and decided to move forward." },
  { q: "What if I'm not ready to start immediately?", a: "That's fine. The audit is yours to keep. We've had contractors book campaigns 3 months later because the timing wasn't right at first." },
];

export default function GetStartedContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Immersive Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Office" fill className="object-cover opacity-15 scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </motion.div>
        <ParticleField />

        <motion.div className="relative z-10 py-20 sm:py-28 lg:py-40 text-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Free Website + Lead Audit</span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] "
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              Free 5-Page Website{" "}
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                + Lead Pipeline.
              </span>
            </motion.h1>

            <motion.p className="mt-6 text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Sign up for our lead system and we&apos;ll build you a custom 5-page website for
              your roof coating business — completely free. Plus a full strategy audit to map
              out your market and lead potential.
            </motion.p>

            <motion.p className="mt-4 text-white/80 text-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              No charge for the website. No charge for the audit. No contracts. If we&apos;re not the right fit, we&apos;ll tell you.
            </motion.p>

            <motion.a href="#book"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center gap-2 text-gold hover:text-yellow-300 transition-colors"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <span className="text-sm font-medium">Book your call below</span>
              <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Booking Calendar ── */}
      <section id="book" className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 py-16 sm:py-20 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">

              {/* Left — Context */}
              <div className="lg:col-span-2">
                <AnimateIn>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                    Claim Your Free Website + Audit
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    Pick a time that works for you. In 30 minutes we&apos;ll map out your lead strategy
                    and kick off your free 5-page custom website build.
                  </p>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                  <div className="space-y-4 mb-8">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider">What you get:</h3>
                    {[
                      "Free custom 5-page website for your business",
                      "Your local market & competition analysis",
                      "Ideal customer profile for your niche",
                      "Estimated lead volume & cost per lead",
                      "Custom campaign blueprint — ready to launch",
                    ].map((item, i) => (
                      <motion.div key={item} className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>
                        <div className="w-5 h-5 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/80 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                  <div className="bg-navy-light rounded-2xl border border-white/5 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center text-gold font-bold text-sm">M</div>
                      <div>
                        <p className="text-white font-bold text-sm">Marc Friedman</p>
                        <p className="text-gold text-xs">Founder, RoofCoat Leads</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed">
                      You&apos;ll be talking directly with me — not a sales rep, not an account manager.
                      I built this system and I know your niche inside out.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              {/* Right — Calendar Embed */}
              <div className="lg:col-span-3">
                <AnimateIn delay={0.15}>
                  <div className="bg-navy-light rounded-2xl border border-white/10 overflow-hidden">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 px-6 py-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-navy font-bold">Claim Your Free Website + Audit</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <iframe
                        src="https://api.leadconnectorhq.com/widget/bookings/roofcoatingleads"
                        style={{ width: "100%", height: "700px", border: "none", borderRadius: "16px" }}
                        title="Book a Free Strategy Audit with RoofCoat Leads"
                      />
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <AnimateIn><h2 className="text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">Why Contractors Trust the Audit</h2></AnimateIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
            {trustPoints.map((point) => (
              <StaggerItem key={point.title}>
                <motion.div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-transparent hover:border-blue/10 h-full"
                  whileHover={{ y: -4 }}>
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2">{point.title}</h3>
                  <p className="text-navy/80 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-navy py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <h2 className="text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Questions About the Audit</h2>
          </AnimateIn>

          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="group bg-navy-light rounded-2xl border border-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="text-white font-semibold">{faq.q}</span>
                    <svg className="w-5 h-5 text-gold shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px bg-white/5 mb-4" />
                    <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">Still Thinking About It?</h2>
            <p className="mt-4 text-navy/80 text-lg">
              The audit is free, takes 30 minutes, and you keep the blueprint whether you work with us or not.
              The only risk is not knowing what your market looks like.
            </p>
            <motion.a href="#book"
              className="mt-8 inline-flex items-center w-full sm:w-auto justify-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg w-full sm:w-auto text-center shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Claim My Free Website + Audit &rarr;
            </motion.a>
            <p className="mt-3 text-gray/50 text-sm">No charge. No contracts. Just clarity.</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
