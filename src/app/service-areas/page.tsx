import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreasHub from "@/components/pages/ServiceAreasHub";

export const metadata: Metadata = {
  title: "Service Areas | RoofCoat Leads — Exclusive Roof Coating Leads Nationwide",
  description:
    "We generate exclusive roof coating leads in Texas, Florida, California, Arizona, Ohio, Georgia, and expanding. Custom Facebook Ad campaigns tailored to your local market.",
  alternates: { canonical: "https://roofcoatleads.com/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceAreasHub />
      </main>
      <Footer />
    </>
  );
}
