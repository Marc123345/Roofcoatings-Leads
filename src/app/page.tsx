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
import Scalability from "@/components/Scalability";
import ServiceAreasMap from "@/components/ServiceAreasMap";
import WhatsIncluded from "@/components/WhatsIncluded";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
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
        <div className="section-divider-dark" />
        <HowItWorks />
        <Results />
        <BeforeAfter />
        <Testimonials />
        <ServiceAreasMap />
        <ComparisonTable />
        <Scalability />
        <div className="section-divider-dark" />
        <WhatsIncluded />
        <div className="section-divider-dark" />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
