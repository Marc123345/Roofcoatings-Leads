import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | RoofCoat Leads",
  description: "Terms of Service for RoofCoat Leads. Read our terms and conditions for using our lead generation services.",
  alternates: { canonical: "https://roofcoatleads.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-navy min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm max-w-none text-white/70 space-y-6">
            <p><strong className="text-white">Last Updated:</strong> April 2026</p>

            <h2 className="text-white text-xl font-bold mt-8">1. Services</h2>
            <p>RoofCoat Leads provides exclusive lead generation services for roof coating contractors through targeted digital advertising campaigns. Our services include lead generation, qualification, and delivery.</p>

            <h2 className="text-white text-xl font-bold mt-8">2. No Contracts</h2>
            <p>RoofCoat Leads operates on a month-to-month basis. There are no long-term contracts or commitments. You may cancel your service at any time with no penalties or fees.</p>

            <h2 className="text-white text-xl font-bold mt-8">3. Pricing</h2>
            <p>Our lead generation service is priced at $2,000 per month. This includes all campaign management, lead qualification, AI chatbot booking, and dedicated campaign management. Pricing is subject to change with 30 days notice.</p>

            <h2 className="text-white text-xl font-bold mt-8">4. Lead Exclusivity</h2>
            <p>All leads generated through our system are 100% exclusive to your business. We do not share, resell, or distribute leads to competing contractors in your service area.</p>

            <h2 className="text-white text-xl font-bold mt-8">5. Results Disclaimer</h2>
            <p>While we strive to deliver high-quality, pre-qualified leads, we cannot guarantee specific conversion rates, revenue amounts, or business outcomes. Results vary based on your market, pricing, response time, and sales process.</p>

            <h2 className="text-white text-xl font-bold mt-8">6. Intellectual Property</h2>
            <p>All content, designs, ad creatives, and materials created by RoofCoat Leads remain our intellectual property. Websites built as part of our service are licensed for your use during the term of service.</p>

            <h2 className="text-white text-xl font-bold mt-8">7. Limitation of Liability</h2>
            <p>RoofCoat Leads shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid in the preceding month.</p>

            <h2 className="text-white text-xl font-bold mt-8">8. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:marcfriedmancm@roofcoatleads.com" className="text-gold hover:underline">marcfriedmancm@roofcoatleads.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
