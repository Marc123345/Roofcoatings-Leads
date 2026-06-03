import type { ReactNode } from "react";

/**
 * Canonical site-wide disclaimer. Single source of truth — reused in the footer,
 * hero, ROI section, Results page, and the standalone /disclaimer page so the
 * legal language never drifts between placements.
 */
export const FULL_DISCLAIMER =
  "RoofCoat Leads provides lead generation services through paid Facebook Ad campaigns. " +
  "Results shown on this website — including lead volume, cost per acquisition, and return on ad spend — " +
  "reflect averages across our contractor network and are not guaranteed outcomes. " +
  "Individual results vary based on geographic market, competition, ad budget, sales process, " +
  "and other factors outside our control. Testimonials represent the experience of individual contractors " +
  "and are not typical. RoofCoat Leads does not guarantee a specific number of leads, revenue, or return on investment.";

interface DisclaimerProps {
  children: ReactNode;
  /** "dark" for navy sections (default), "light" for white/amber sections. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Small-print legal/expectation disclaimer. Intentionally low-contrast and
 * unobtrusive so it protects the business without undercutting the pitch.
 */
export default function Disclaimer({ children, tone = "dark", className = "" }: DisclaimerProps) {
  const color = tone === "light" ? "text-navy/45" : "text-white/30";
  return (
    <p className={`max-w-3xl mx-auto text-center text-xs leading-relaxed ${color} ${className}`}>
      {children}
    </p>
  );
}
