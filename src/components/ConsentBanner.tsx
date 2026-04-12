"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("roofcoat-consent");

    // Set default consent state (denied until user accepts)
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }

    if (consent === "accepted") {
      // User already accepted — grant all
      gtag("consent", "update", {
        ad_user_data: "granted",
        ad_personalization: "granted",
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    } else {
      // Default: deny until consent
      gtag("consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 500,
      });
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("roofcoat-consent", "accepted");

    // Update consent to granted
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-navy border border-zinc-800 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
            <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-white text-sm leading-relaxed flex-1">
              By using this site, you agree to our{" "}
              <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>
              {" "}and{" "}
              <a href="/terms" className="text-gold hover:underline">Terms of Service</a>.
              We use cookies for analytics and to improve your experience.
            </p>
            <button
              onClick={accept}
              className="bg-gold text-navy px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider shrink-0 hover:bg-yellow-400 transition-colors cursor-pointer"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
