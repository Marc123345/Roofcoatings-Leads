import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NicheExpertiseContent from "@/components/pages/NicheExpertiseContent";

export const metadata: Metadata = {
  title: "Niche Expertise | RoofCoat Leads — Silicone, Acrylic, Metal & TPO Leads",
  description:
    "We speak your niche. Exclusive lead campaigns for silicone roof coatings, acrylic coatings, metal roof restoration, and TPO/flat roof repair. Custom targeting for each coating type.",
  alternates: { canonical: "https://roofcoatleads.com/niche-expertise" },
};

export default function NicheExpertisePage() {
  return (
    <>
      <Header />
      <main>
        <NicheExpertiseContent />
      </main>
      <Footer />
    </>
  );
}
