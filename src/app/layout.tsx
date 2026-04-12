import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import ConsentBanner from "@/components/ConsentBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RoofCoat Leads | Exclusive Roof Coating Leads via Facebook Ads",
  description:
    "Stop buying shared leads. Get 100% exclusive, pre-qualified commercial & residential roof coating leads through our proven Facebook Ad system. 40% lower CPA. First lead in under 48 hours.",
  keywords: [
    "roof coating leads",
    "exclusive roofing leads",
    "Facebook ads for roofers",
    "commercial roof coating leads",
    "residential roof coating leads",
    "roof coating contractor leads",
    "roofing lead generation",
    "pre-qualified roofing leads",
    "exclusive contractor leads",
    "roof coating marketing",
  ],
  openGraph: {
    title: "RoofCoat Leads | Exclusive Roof Coating Leads via Facebook Ads",
    description:
      "Get 100% exclusive, pre-qualified roof coating leads delivered in real time. 40% lower cost per acquisition than Google Ads & HomeAdvisor.",
    url: "https://roofcoatleads.com",
    siteName: "RoofCoat Leads",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoofCoat Leads | Exclusive Roof Coating Leads",
    description:
      "Stop buying shared leads. Get exclusive roof coating projects delivered directly to you via our proven Facebook Ad system.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://roofcoatleads.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "RoofCoat Leads",
      url: "https://roofcoatleads.com",
      description:
        "Exclusive, pre-qualified lead generation for commercial and residential roof coating contractors through Facebook Ads.",
      serviceType: "Lead Generation",
    },
    {
      "@type": "Service",
      name: "Exclusive Roof Coating Lead Generation",
      provider: {
        "@type": "Organization",
        name: "RoofCoat Leads",
      },
      description:
        "Targeted Facebook Ad campaigns that deliver exclusive, pre-qualified leads for commercial and residential roof coating projects.",
      areaServed: "United States",
      serviceType: "Digital Marketing & Lead Generation",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are exclusive roof coating leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Exclusive roof coating leads are prospects sent only to your business — no sharing with competitors. Unlike shared leads from HomeAdvisor or Google Ads, you are the only contractor who receives the lead, resulting in higher close rates and lower cost per acquisition.",
          },
        },
        {
          "@type": "Question",
          name: "How does RoofCoat Leads generate leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We run precision-targeted Facebook Ad campaigns that reach commercial property owners and homeowners actively dealing with roof issues. Our proprietary funnel pre-qualifies every lead before delivering them to you in real time.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will I receive my first lead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most partners receive their first lead within 48 hours of campaign launch. Our fast onboarding process gets your custom campaign live quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How much do roof coating leads cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our exclusive leads cost $30-$60 per lead, which is 40% lower than shared leads from Google Ads or HomeAdvisor ($80-$150). With close rates of 20-35%, the cost per closed job is $150-$300 compared to $1,500+ with shared leads.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any contracts or long-term commitments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. RoofCoat Leads operates with no contracts. You set your budget, adjust anytime, and scale up or down based on your capacity and seasonal needs.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0f1e" />
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <ConsentBanner />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F34YP77Z0F" />
        <script
          dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-F34YP77Z0F');` }}
        />
        {/* Plausible Analytics */}
        <script async src="https://plausible.io/js/pa-df7lV-XI8Y4HIePV-rOBs.js" />
        <script
          dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }}
        />
        {/* JotForm AI Chatbot — appears on every page */}
        <script
          src="https://cdn.jotfor.ms/agent/embedjs/019d62a7eca770a3b1de278fb2245e812f8c/embed.js"
          async
        />
      </body>
    </html>
  );
}
