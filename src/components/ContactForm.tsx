"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const SERVICE_TYPES = [
  "Roof Coatings",
  "Roof Restoration",
  "Exterior Painting",
  "Pressure Washing",
  "Multiple Services",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    serviceArea: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setStatus("submitting");
    // Simulate submission — replace with actual API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", serviceType: "", serviceArea: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

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
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
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
                <a href="tel:+1234567890" className="flex items-center gap-4 group min-h-[48px]">
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

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <AnimateIn delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-navy-light rounded-2xl border border-white/10 p-6 sm:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-sm max-w-sm">
                      We&apos;ll review your details and get back to you within 24 hours with a custom strategy.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Name *</label>
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors min-h-[48px]"
                          style={{ fontSize: 16 }}
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Company</label>
                        <input
                          type="text"
                          autoComplete="organization"
                          placeholder="Your Business Name"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors min-h-[48px]"
                          style={{ fontSize: 16 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Email *</label>
                        <input
                          type="email"
                          inputMode="email"
                          required
                          autoComplete="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors min-h-[48px]"
                          style={{ fontSize: 16 }}
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Phone *</label>
                        <input
                          type="tel"
                          inputMode="tel"
                          required
                          autoComplete="tel"
                          placeholder="(555) 123-4567"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors min-h-[48px]"
                          style={{ fontSize: 16 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Service Type</label>
                        <select
                          value={form.serviceType}
                          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-gold/50 transition-colors min-h-[48px] appearance-none"
                          style={{ fontSize: 16 }}
                        >
                          <option value="" className="bg-navy">Select your service...</option>
                          {SERVICE_TYPES.map((type) => (
                            <option key={type} value={type} className="bg-navy">{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Service Area</label>
                        <input
                          type="text"
                          placeholder="City, State"
                          value={form.serviceArea}
                          onChange={(e) => setForm({ ...form, serviceArea: e.target.value })}
                          className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors min-h-[48px]"
                          style={{ fontSize: 16 }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your business and what you're looking for..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 outline-none focus:border-gold/50 transition-colors resize-none"
                        style={{ fontSize: 16 }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-gold/20 min-h-[52px] disabled:opacity-60"
                      whileHover={status === "idle" ? { scale: 1.02, boxShadow: "0 0 40px rgba(234,179,8,0.3)" } : {}}
                      whileTap={status === "idle" ? { scale: 0.98 } : {}}
                    >
                      {status === "submitting" ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-white/30 text-xs text-center">
                      We respond within 24 hours. No spam, ever.
                    </p>
                  </div>
                )}
              </form>
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
