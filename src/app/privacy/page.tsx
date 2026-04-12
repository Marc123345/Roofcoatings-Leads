import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | RoofCoat Leads",
  description: "Privacy Policy for RoofCoat Leads. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://roofcoatleads.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-navy min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm max-w-none text-white space-y-6">
            <p><strong className="text-white">Last Updated:</strong> April 2026</p>

            <h2 className="text-white text-xl font-bold mt-8">1. Information We Collect</h2>
            <p>When you use RoofCoat Leads, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, and phone number submitted through our contact forms</li>
              <li>Business name and location</li>
              <li>Website usage data (pages visited, time spent, referral source)</li>
              <li>Device and browser information</li>
            </ul>

            <h2 className="text-white text-xl font-bold mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve our lead generation services</li>
              <li>Communicate with you about your account and our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage to improve our platform</li>
            </ul>

            <h2 className="text-white text-xl font-bold mt-8">3. Information Sharing</h2>
            <p>We do not sell your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who assist in operating our platform</li>
              <li>Analytics partners to improve our services</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-white text-xl font-bold mt-8">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.</p>

            <h2 className="text-white text-xl font-bold mt-8">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at marcfriedmancm@roofcoatleads.com to exercise these rights.</p>

            <h2 className="text-white text-xl font-bold mt-8">6. Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>

            <h2 className="text-white text-xl font-bold mt-8">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:marcfriedmancm@roofcoatleads.com" className="text-gold hover:underline">marcfriedmancm@roofcoatleads.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
