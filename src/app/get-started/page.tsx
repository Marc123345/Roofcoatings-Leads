import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetStartedContent from "@/components/pages/GetStartedContent";

export const metadata: Metadata = {
  title: "Get Started | Free Roof Coating Lead Strategy Audit — RoofCoat Leads",
  description:
    "Book your free strategy audit. In 30 minutes we'll map out your market, your ideal lead profile, and how many exclusive leads we can deliver each month. No charge. No contract.",
  alternates: { canonical: "https://roofcoatleads.com/get-started" },
};

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main>
        <GetStartedContent />
      </main>
      <Footer />
    </>
  );
}
