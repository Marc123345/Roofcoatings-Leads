"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import BookingOverlay from "./BookingOverlay";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Niche Expertise", href: "/niche-expertise" },
  { label: "Manufacturers", href: "/manufacturers" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
            ? "bg-navy border-b border-zinc-800 shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
            : "bg-navy"
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
              <Logo size={42} />
              <span className="text-white font-bold text-lg">
                RoofCoat <span className="text-gold">Leads</span>
              </span>
            </motion.a>

            {/* The nav lives behind the hamburger at every width, desktop
                included. Only the booking CTA stays in the bar, since it is the
                conversion action and should never be a click away. */}
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.button
                onClick={() => setOverlayOpen(true)}
                className="relative hidden sm:inline-flex bg-gold text-navy px-6 py-2.5 rounded-sm font-bold text-sm overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(234,179,8,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book a Free Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                className="text-white w-11 h-11 flex items-center justify-center rounded-sm border border-zinc-700 hover:border-gold hover:text-gold transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-menu"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="primary-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-zinc-800"
              >
                <div className="py-6 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-white hover:text-gold transition-colors py-3 px-2 text-lg sm:text-xl font-semibold border-b border-zinc-800/60"
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  {/* Mirrors the bar CTA for the small screens where it is hidden. */}
                  <button
                    onClick={() => { setMenuOpen(false); setOverlayOpen(true); }}
                    className="sm:hidden mt-4 bg-gold text-navy px-5 py-3 rounded-sm font-bold text-sm text-center cursor-pointer"
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
