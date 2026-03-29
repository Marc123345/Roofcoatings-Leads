import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksContent from "@/components/pages/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works | RoofCoat Leads — Exclusive Roof Coating Lead Generation",
  description:
    "See exactly how RoofCoat Leads delivers exclusive, pre-qualified roof coating leads through Facebook Ads. Free strategy audit, custom campaign, lead pre-qualification, real-time delivery.",
  alternates: { canonical: "https://roofcoatleads.com/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <HowItWorksContent />
      </main>
      <Footer />
    </>
  );
}
