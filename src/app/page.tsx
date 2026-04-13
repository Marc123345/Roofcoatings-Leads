import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyFacebookAds from "@/components/WhyFacebookAds";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Scalability from "@/components/Scalability";
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
        <LogoSlider />
        <SocialProof />
        <Problem />
        <Solution />
        <WhyFacebookAds />
        <div className="section-divider-dark" />
        <HowItWorks />
        <Results />
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
