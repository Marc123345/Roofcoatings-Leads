"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Calendar } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function ContactForm() {
  const [tab, setTab] = useState<"book" | "contact">("book");
  return (
    <section id="contact" className="bg-gray-50 relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-6">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              Let&apos;s Talk About{" "}
              <span className="text-gradient-gold">Your Growth</span>
            </h2>
            <p className="mt-4 text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a custom lead strategy for your business.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Contact info */}
          <div className="lg:col-span-2">
            <AnimateIn delay={0.1}>
              <div className="space-y-6 mb-8">
                <a href="mailto:marcfriedmancm@roofcoatleads.com" className="flex items-center gap-4 group min-h-[48px]">
                  <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-navy font-medium text-sm">marcfriedmancm@roofcoatleads.com</p>
                  </div>
                </a>
                <a href="/get-started" className="flex items-center gap-4 group min-h-[48px]">
                  <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                    <p className="text-navy font-medium text-sm">Book a call instead →</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 min-h-[48px]">
                  <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-widest mb-0.5">Coverage</p>
                    <p className="text-navy font-medium text-sm">All 50 US States</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="bg-navy-light rounded-sm border border-zinc-800 p-6">
                <h3 className="text-navy font-bold text-sm mb-3">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We review your info within 24 hours",
                    "You get a custom lead strategy for your area",
                    "Leads start flowing within 48 hours of launch",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold text-[10px] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-navy/70 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right — Tabbed Calendar + Contact Form */}
          <div className="lg:col-span-3">
            <AnimateIn delay={0.15}>
              <div className="bg-navy-light rounded-sm border border-zinc-800 overflow-hidden">
                <div className="flex">
                  <button
                    onClick={() => setTab("book")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${
                      tab === "book"
                        ? "bg-gold text-navy"
                        : "bg-navy-light text-white hover:text-white"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </button>
                  <button
                    onClick={() => setTab("contact")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${
                      tab === "contact"
                        ? "bg-gold text-navy"
                        : "bg-navy-light text-white hover:text-white"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </button>
                </div>
                <div className="p-2">
                  {tab === "book" ? (
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/bookings/roofcoatingleads"
                      style={{ width: "100%", height: "700px", border: "none", borderRadius: "16px" }}
                      title="Book a Free Strategy Audit with RoofCoat Leads"
                    />
                  ) : (
                    <iframe
                      src="https://form.jotform.com/260952924952062"
                      style={{ width: "100%", minHeight: "clamp(350px, 80vh, 600px)", border: "none", borderRadius: "16px" }}
                      title="Contact Form — RoofCoat Leads"
                      allow="geolocation; microphone; camera; fullscreen"
                    />
                  )}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

      </div>
    </section>
  );
}
