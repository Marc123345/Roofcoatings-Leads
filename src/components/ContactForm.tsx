"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-navy relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Let&apos;s Talk About{" "}
              <span className="text-gradient-gold">Your Growth</span>
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a custom lead strategy for your business.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Contact info */}
          <div className="lg:col-span-2">
            <AnimateIn delay={0.1}>
              <div className="space-y-6 mb-8">
                <a href="mailto:marc@roofcoatleads.com" className="flex items-center gap-4 group min-h-[48px]">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white font-medium text-sm">marc@roofcoatleads.com</p>
                  </div>
                </a>
                <a href="/get-started" className="flex items-center gap-4 group min-h-[48px]">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                    <p className="text-white font-medium text-sm">Book a call instead →</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 min-h-[48px]">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Coverage</p>
                    <p className="text-white font-medium text-sm">All 50 US States</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="bg-navy-light rounded-2xl border border-white/5 p-6">
                <p className="text-white font-bold text-sm mb-3">What happens next?</p>
                <div className="space-y-3">
                  {[
                    "We review your info within 24 hours",
                    "You get a custom lead strategy for your area",
                    "We build your free 5-page website",
                    "Leads start flowing within 48 hours of launch",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold text-[10px] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-white/60 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right — JotForm embed */}
          <div className="lg:col-span-3">
            <AnimateIn delay={0.15}>
              <div className="bg-navy-light rounded-2xl border border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-gold to-yellow-400 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-navy" />
                    <span className="text-navy font-bold">Send Us a Message</span>
                  </div>
                </div>
                <div className="p-2">
                  <iframe
                    src="https://form.jotform.com/260952924952062"
                    style={{ width: "100%", minHeight: "600px", border: "none", borderRadius: "16px" }}
                    title="Contact Form — RoofCoat Leads"
                    allow="geolocation; microphone; camera; fullscreen"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm mb-3">Prefer to talk now?</p>
            <motion.a
              href="/get-started"
              className="inline-flex items-center gap-2 text-gold hover:text-yellow-300 font-medium text-sm transition-colors"
              whileHover={{ x: 4 }}
            >
              Book a free strategy call instead
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
