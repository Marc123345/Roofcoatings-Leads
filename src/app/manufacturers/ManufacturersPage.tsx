"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Package, Zap, Shield, BarChart3, CheckCircle } from "lucide-react";
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
            className="absolute hidden lg:block rounded-full pointer-events-none"
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
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-md px-4 py-1.5 mb-8"
              >
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Manufacturer Partnership Program
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="text-white font-normal">Your Applicators</span>
                <br />
                <span className="text-white font-extrabold">Stay Busy. You</span>
                <br />
                <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent font-extrabold">
                  Sell More Product.
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-white text-base sm:text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We generate 100+ exclusive roof coating leads per month for your certified
                contractors. When your applicators are booked, they order more material.
                Everybody wins.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-gold/20 group"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  Partner With Us
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white text-navy px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider border border-white/80 hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See How It Works
                </motion.a>
              </motion.div>

              <motion.p
                className="mt-4 text-white text-xs uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                No risk · Revenue-driven · Results from month 1
              </motion.p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
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
                  icon: Users,
                  title: "Contractors Can't Find Jobs",
                  desc: "New applicators lack marketing budgets and reputation. They sit idle while competitors with bigger names get the calls.",
                },
                {
                  icon: TrendingUp,
                  title: "Your Sales Plateau",
                  desc: "If your certified contractors aren't landing jobs, they're not ordering product. Your growth stalls even with a superior coating.",
                },
                {
                  icon: Package,
                  title: "Competitors Poach Talent",
                  desc: "When applicators can't stay busy with your product, they switch to competitors who offer better contractor support programs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-navy border border-white/[0.06] rounded-xl p-8 hover:border-gold/20 transition-colors duration-300"
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
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">
                The Partnership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                We Become Your{" "}
                <span className="text-gold">Contractor Support Arm.</span>
              </h2>
              <p className="mt-6 text-white text-lg leading-relaxed max-w-2xl mx-auto">
                We generate exclusive, pre-qualified roof coating leads at scale and funnel
                them directly to your certified applicators. More jobs, more material orders,
                more revenue for everyone.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Zap,
                  title: "We Generate the Leads",
                  desc: "Our proven Facebook & Google ad system produces 100+ exclusive, pre-qualified roof coating leads per month. AI chatbot qualifies and books appointments automatically.",
                },
                {
                  step: "02",
                  icon: Users,
                  title: "Your Contractors Get Booked",
                  desc: "Leads are routed directly to your certified applicators based on service area. They get warm, ready-to-buy homeowners — no cold calling, no shared leads.",
                },
                {
                  step: "03",
                  icon: Package,
                  title: "You Sell More Product",
                  desc: "Busy contractors order more coating, silicone, and materials. Your revenue grows because your applicator network is thriving — not because you spent more on ads.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative bg-navy-light border border-white/[0.06] rounded-xl p-8 hover:border-gold/20 transition-colors duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <span className="text-gold/20 text-6xl font-extrabold absolute top-4 right-6">
                    {item.step}
                  </span>
                  <item.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
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
                  className="relative bg-navy border border-white/[0.06] rounded-xl p-8 hover:border-gold/20 transition-colors duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <span className="inline-block text-gold text-[10px] font-bold uppercase tracking-widest bg-gold/10 border border-gold/20 rounded-md px-3 py-1 mb-4">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
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
                  className="text-center bg-navy-light border border-white/[0.06] rounded-xl p-8"
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

        {/* ═══ CONTACT FORM ═══ */}
        <section id="contact" className="py-24 sm:py-32 bg-navy-light px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Let&apos;s Keep Your Contractors{" "}
                <span className="text-gold">Booked.</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                Fill out the form below and we&apos;ll reach out within 24 hours to discuss
                how we can become your contractor support arm.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="bg-navy rounded-2xl border border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-gold to-yellow-400 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-navy" />
                    <span className="text-navy font-bold">Manufacturer Partnership Inquiry</span>
                  </div>
                </div>
                <div className="p-2">
                  <iframe
                    id="JotFormIFrame-261014402774045"
                    title="Manufacturer Partnership Inquiry"
                    src="https://form.jotform.com/261014402774045"
                    style={{ width: "100%", minHeight: "clamp(400px, 80vh, 600px)", border: "none", borderRadius: "16px" }}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                  />
                </div>
              </div>
            </motion.div>

            <p className="mt-6 text-center text-white text-xs uppercase tracking-widest">
              No contracts · No risk · Results from month 1
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
