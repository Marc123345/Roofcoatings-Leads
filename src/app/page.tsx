import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyFacebookAds from "@/components/WhyFacebookAds";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import ROI from "@/components/ROI";
import Scalability from "@/components/Scalability";
import WhatsIncluded from "@/components/WhatsIncluded";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyFacebookAds />
        <HowItWorks />
        <Results />
        <BeforeAfter />
        <Testimonials />
        <ComparisonTable />
        <ROI />
        <Scalability />
        <WhatsIncluded />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
