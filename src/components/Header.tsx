"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import BookingOverlay from "./BookingOverlay";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Niche Expertise", href: "/niche-expertise" },
  { label: "Manufacturers", href: "/manufacturers" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/GHL%20LOGOS%20-%202026-01-28T012809.523.png"
                alt="RoofCoat Leads"
                className="h-10 sm:h-12 w-auto"
              />
            </motion.a>

            <nav className="hidden lg:flex items-center gap-4 sm:gap-6 lg:gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-navy hover:text-gold transition-colors text-sm relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.button
                onClick={() => setOverlayOpen(true)}
                className="relative bg-gold text-navy px-6 py-2.5 rounded-sm font-bold text-sm overflow-hidden group  cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(234,179,8,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book a Free Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </nav>

            <motion.button
              className="lg:hidden text-navy w-11 h-11 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pb-6 flex flex-col gap-3">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-navy hover:text-gold transition-colors text-sm py-2 px-2"
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <button
                    onClick={() => { setMobileOpen(false); setOverlayOpen(true); }}
                    className="bg-gold text-navy px-5 py-2.5 rounded-sm font-bold text-sm text-center cursor-pointer"
                  >
                    Book a Free Call
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <BookingOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
