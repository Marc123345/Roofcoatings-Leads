import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FULL_DISCLAIMER } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer | RoofCoat Leads",
  description:
    "Earnings, results, and testimonial disclaimer for RoofCoat Leads. Results are not guaranteed and individual outcomes vary.",
  alternates: { canonical: "https://roofcoatleads.com/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-navy min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">Disclaimer</h1>
          <div className="prose prose-invert prose-sm max-w-none text-white space-y-6">
            <p><strong className="text-white">Last Updated:</strong> June 2026</p>

            <p>{FULL_DISCLAIMER}</p>

            <h2 className="text-white text-xl font-bold mt-8">1. No Guarantee of Results</h2>
            <p>RoofCoat Leads provides lead generation services through paid Facebook Ad campaigns. We do not guarantee any specific number of leads, booked jobs, revenue, return on ad spend (ROAS), or return on investment. Any figures referenced on this website are examples or averages, not promises of what you will achieve.</p>

            <h2 className="text-white text-xl font-bold mt-8">2. Individual Results Vary</h2>
            <p>The results experienced by any individual contractor depend on many factors that are outside our control, including your geographic market, local competition, advertising budget, pricing, response time, sales process, follow-up, and overall business operations. Your results may be higher or lower than the examples shown.</p>

            <h2 className="text-white text-xl font-bold mt-8">3. Testimonials</h2>
            <p>Testimonials and reviews on this website reflect the real-life experiences of individual contractors who have used our services. They are individual experiences and are not necessarily typical of what you should expect. We do not claim that they are representative of all clients or that you will achieve the same or similar results.</p>

            <h2 className="text-white text-xl font-bold mt-8">4. Advertising Spend</h2>
            <p>Our monthly fee covers our services and campaign management. Advertising spend paid to third-party platforms (such as Meta / Facebook) is separate and is billed directly by those platforms. Lead volume and lead quality are directly affected by the advertising budget you choose to invest.</p>

            <h2 className="text-white text-xl font-bold mt-8">5. Forward-Looking Statements</h2>
            <p>Any statements about potential results, projections, or estimates are forward-looking and inherently uncertain. Past performance of our campaigns or other contractors does not guarantee future results for your business.</p>

            <h2 className="text-white text-xl font-bold mt-8">6. Not Professional Advice</h2>
            <p>Information on this website is provided for general informational purposes only and does not constitute legal, financial, tax, or business advice. You should consult your own qualified professionals before making business decisions.</p>

            <h2 className="text-white text-xl font-bold mt-8">7. Contact</h2>
            <p>For questions about this Disclaimer, contact us at <a href="mailto:marcfriedmancm@roofcoatleads.com" className="text-gold hover:underline">marcfriedmancm@roofcoatleads.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
