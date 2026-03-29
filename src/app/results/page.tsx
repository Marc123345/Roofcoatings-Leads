import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsContent from "@/components/pages/ResultsContent";

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
      </main>
      <Footer />
    </>
  );
}
