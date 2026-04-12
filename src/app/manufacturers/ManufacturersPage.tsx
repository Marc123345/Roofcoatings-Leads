"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, Package, Zap, Shield, BarChart3, CheckCircle, Megaphone, Target, Wrench, HardHat, Building2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ManufacturersPage() {
  return (
    <>
      <Header />
      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
          <div
            className="absolute hidden lg:block rounded-sm pointer-events-none"
            style={{
              width: 626,
              height: 626,
              right: "5%",
              top: "15%",
              opacity: 0.4,
              background: "linear-gradient(209deg, rgba(234,179,8,0.5) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="bg-text bottom-[10%] left-1/2 -translate-x-1/2 text-white/[0.03] select-none pointer-events-none"
            style={{ fontSize: "clamp(100px, 18vw, 280px)", position: "absolute" }}
          >
            PARTNER
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT — Copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-6 block">
                    // Manufacturer Partnership Program
                  </span>
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tighter uppercase"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="text-white">Your Applicators</span>
                  <br />
                  <span className="text-white">Stay Busy. You</span>
                  <br />
                  <span className="text-gold">Sell More Product.</span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  We generate 100+ exclusive roof coating leads per month for your certified
                  contractors. When your applicators are booked, they order more material.
                  Everybody wins.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-7 py-4 rounded-sm font-bold text-sm uppercase tracking-wider group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Partner With Us
                  </motion.a>
                  <motion.a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-white px-7 py-4 rounded-sm font-bold text-sm uppercase tracking-wider hover:border-zinc-500 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    See How It Works
                  </motion.a>
                </motion.div>

                <motion.p
                  className="mt-4 text-zinc-500 text-xs font-mono tracking-[0.15em] uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  No risk · Revenue-driven · Results from month 1
                </motion.p>
              </div>

              {/* RIGHT — Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden">
                  <div className="bg-gold px-6 py-4 flex items-center gap-3">
                    <Phone className="w-4 h-4 text-navy" />
                    <span className="text-navy font-bold text-sm uppercase tracking-wider">Partnership Inquiry</span>
                  </div>
                  <div className="p-2">
                    <iframe
                      id="JotFormIFrame-261014402774045"
                      title="Manufacturer Partnership Inquiry"
                      src="https://form.jotform.com/261014402774045"
                      style={{ width: "100%", minHeight: "clamp(400px, 70vh, 550px)", border: "none" }}
                      allow="geolocation; microphone; camera; fullscreen; payment"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══ THE PROBLEM ═══ */}
        <section className="py-24 sm:py-32 bg-navy-light px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">
                The Problem You Already Know
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight">
                When Your Contractors Slow Down,{" "}
                <span className="text-gold">Your Orders Drop.</span>
              </h2>
              <p className="mt-6 text-white text-lg leading-relaxed max-w-2xl mx-auto">
                Your product is great. But your installers and certified applicators struggle
                to find consistent work — especially newer ones without an established
                reputation. When they slow down, they stop buying material.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Wrench,
                  title: "Contractors Can't Find Jobs",
                  desc: "New applicators lack marketing budgets and reputation. They sit idle while competitors with bigger names get the calls.",
                },
                {
                  icon: TrendingUp,
                  title: "Your Sales Plateau",
                  desc: "If your certified contractors aren't landing jobs, they're not ordering product. Your growth stalls even with a superior coating.",
                },
                {
                  icon: Building2,
                  title: "Competitors Poach Talent",
                  desc: "When applicators can't stay busy with your product, they switch to competitors who offer better contractor support programs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-navy border border-zinc-800 rounded-sm p-8 hover:border-gold/20 transition-colors duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <item.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE SOLUTION ═══ */}
        <section id="how-it-works" className="py-24 sm:py-32 bg-navy px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4 block">
                  // The Partnership
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                  We Become Your{" "}
                  <span className="text-gold">Contractor Support Arm.</span>
                </h2>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
                More jobs for your applicators. More material orders for you. A system that grows your revenue without growing your ad budget.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: Megaphone,
                  title: "We Generate the Leads",
                  desc: "Our proven Facebook & Google ad system produces 100+ exclusive, pre-qualified roof coating leads per month. AI chatbot qualifies and books appointments automatically.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                  bullets: ["100+ leads/month", "AI-powered booking", "Exclusive territories"],
                },
                {
                  step: "02",
                  icon: HardHat,
                  title: "Your Contractors Get Booked",
                  desc: "Leads are routed directly to your certified applicators based on service area. Warm, ready-to-buy homeowners — no cold calling.",
                  image: "https://ik.imagekit.io/qcvroy8xpd/photo-1674485169641-bcb2bf6f1df9%20(1).jpeg",
                  bullets: ["Direct lead routing", "Pre-qualified prospects", "No shared leads"],
                },
                {
                  step: "03",
                  icon: Package,
                  title: "You Sell More Product",
                  desc: "Busy contractors order more coating, silicone, and materials. Your revenue grows because your network is thriving.",
                  image: "https://ik.imagekit.io/qcvroy8xpd/Sylicone.jpeg",
                  bullets: ["Higher order volume", "Contractor loyalty", "Predictable revenue"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase bg-gold text-navy px-3 py-1">
                      Phase {item.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-5 h-5 text-gold" />
                      <h3 className="text-white text-lg font-black uppercase tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{item.desc}</p>

                    {/* Bullet points */}
                    <div className="space-y-2 border-t border-zinc-800 pt-4">
                      {item.bullets.map((bullet, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="text-zinc-400 text-xs font-mono tracking-wide">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHAT YOUR CONTRACTORS GET ═══ */}
        <section className="py-24 sm:py-32 bg-navy-light px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">
                The Result
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight">
                Your Contractors Get{" "}
                <span className="text-gold">More Jobs.</span>
              </h2>
              <p className="mt-6 text-white text-lg leading-relaxed max-w-2xl mx-auto">
                That&apos;s the whole point. More jobs for your applicators means more product
                moving off your shelves. Here&apos;s what changes when you partner with us.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Consistent Pipeline",
                  desc: "Your contractors stop chasing work and start choosing jobs. A steady flow of pre-qualified leads means they're never sitting idle — and never slowing down on orders.",
                  tag: "More Volume",
                },
                {
                  title: "Faster Growth for New Applicators",
                  desc: "New contractors certified on your product get booked from day one. No reputation needed — we bring the leads, they bring the skill. They ramp faster and order sooner.",
                  tag: "Faster Ramp",
                },
                {
                  title: "Contractor Loyalty",
                  desc: "When your brand is the reason they're booked solid, they don't switch to a competitor. You become the partner they can't afford to leave.",
                  tag: "Retention",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative bg-navy border border-zinc-800 rounded-sm p-8 hover:border-gold/20 transition-colors duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <span className="inline-block text-gold text-[10px] font-bold uppercase tracking-widest bg-gold/10 border border-gold/20 rounded-sm px-3 py-1 mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROOF ═══ */}
        <section className="py-24 sm:py-32 bg-navy px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">
                The Numbers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
                This Is a Real{" "}
                <span className="text-gold">Machine.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "100+", label: "Leads / Month" },
                { value: "40%", label: "Lower CPA" },
                { value: "48hrs", label: "First Lead" },
                { value: "24/7", label: "AI Booking" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-navy-light border border-zinc-800 rounded-sm p-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="text-gold text-4xl sm:text-5xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-white text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 max-w-2xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-sm">
                {[
                  "Proven Facebook & Google ad system",
                  "AI chatbot qualifies & books automatically",
                  "Exclusive leads — never shared",
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
