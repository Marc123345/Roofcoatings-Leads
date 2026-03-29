"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const faqs = [
  {
    question: "How much do pre-qualified roof coating leads cost?",
    answer:
      "Our leads typically cost $30\u2013$60 each, compared to $80\u2013$150 for shared leads on platforms like HomeAdvisor. Because you\u2019re the only contractor receiving each lead, your close rate climbs to 20\u201335%, making your actual cost per closed job $150\u2013$300.",
  },
  {
    question: "How quickly will I get my first lead?",
    answer:
      "Most partners receive their first lead within 48 hours of campaign launch. We build and launch your campaign within 24 hours of your strategy audit.",
  },
  {
    question: "How are the leads pre-qualified?",
    answer:
      "Every lead goes through our proprietary qualification funnel before reaching you. We screen for property type, roof age, urgency, and budget. Price shoppers and tire kickers are filtered out \u2014 you only talk to prospects who are genuinely ready to move forward.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No contracts. You set your budget, you control your spend, and you can pause or adjust anytime. We earn your business month by month.",
  },
  {
    question: "What types of contractors do you work with?",
    answer:
      "We specialize exclusively in roof coating and restoration \u2014 both commercial (TPO, silicone, acrylic flat roofs) and residential. We do not work with general roofing or replacement contractors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-light py-16 sm:py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-blue font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            Frequently Asked Questions
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-navy text-center">
            Got Questions? We&apos;ve Got Answers.
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-14 space-y-4" staggerDelay={0.08}>
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:border-blue/10 transition-colors">
                <motion.button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  whileHover={{ backgroundColor: "rgba(37,99,235,0.02)" }}
                >
                  <h3 className="font-semibold text-navy text-lg">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-blue/10 rounded-full flex items-center justify-center shrink-0"
                  >
                    <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-gray-light mb-4" />
                        <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
