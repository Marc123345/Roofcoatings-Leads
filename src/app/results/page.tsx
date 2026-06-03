import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsContent from "@/components/pages/ResultsContent";
import Disclaimer, { FULL_DISCLAIMER } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Contractor Win-Logs | RoofCoat Leads — Real Results from Real Partners",
  description:
    "See real results from roof coating contractors using RoofCoat Leads. 40% lower CPA, 3+ commercial jobs in month one, 20-35% close rates. No stock photos. No made-up metrics.",
  alternates: { canonical: "https://roofcoatleads.com/results" },
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <ResultsContent />
        <div className="bg-navy px-4 sm:px-6 lg:px-8 py-10">
          <Disclaimer>{FULL_DISCLAIMER}</Disclaimer>
        </div>
      </main>
      <Footer />
    </>
  );
}
