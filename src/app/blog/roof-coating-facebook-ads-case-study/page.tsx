import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Roofing Leads: How a Roof Coating Contractor Generated Qualified Leads With Facebook Ads",
  description: "See how a roof coating contractor used Facebook Ads, local targeting, strong offers, and Lead Ads to generate more qualified commercial roofing leads and turn ad spend into booked estimates.",
  alternates: { canonical: "https://roofcoatleads.com/blog/roof-coating-facebook-ads-case-study" },
  openGraph: {
    title: "Commercial Roofing Leads: How a Roof Coating Contractor Generated Qualified Leads With Facebook Ads",
    description: "See how a roof coating contractor used Facebook Ads, local targeting, strong offers, and Lead Ads to generate more qualified commercial roofing leads.",
    type: "article",
    publishedTime: "2026-04-12",
    images: ["https://ik.imagekit.io/qcvroy8xpd/Sylicone.jpeg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Facebook Ads generate commercial roofing leads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. By narrowing targeting to specific service areas and using offers like free inspections, Facebook Ads consistently produce pre-qualified commercial roofing leads at a lower cost than shared lead platforms." },
    },
    {
      "@type": "Question",
      name: "What results can a roof coating contractor expect from Facebook Ads?",
      acceptedAnswer: { "@type": "Answer", text: "With an optimized campaign, contractors typically see leads within 48 hours, close rates of 20-35%, and a cost per lead of $30-$60 — roughly 40% less than HomeAdvisor or shared platforms." },
    },
    {
      "@type": "Question",
      name: "What offer works best for roof coating Facebook Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Free roof coating inspections and no-obligation estimates consistently outperform generic service ads. The offer needs to give the prospect a clear, low-risk reason to act now." },
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase hover:underline">Blog</Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase">Case Study</span>
          </div>

          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4 block">April 12, 2026 · 10 min read</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy uppercase tracking-tighter leading-tight mb-6">
              How a Roof Coating Contractor Generated Qualified Leads With Facebook Ads
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed">
              A case study on how we helped a roof coating contractor go from inconsistent referrals to a predictable pipeline of pre-qualified commercial roofing leads using Facebook Ads.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">

            <p className="text-zinc-700 leading-relaxed">
              A commercial roof coating contractor came to us with a problem every contractor knows: inconsistent lead flow. Some months were packed. Others were dead. Referrals kept the business alive but couldn&apos;t scale it. The contractor had tried a general marketing agency before — spent $4,000 a month for three months and got a handful of leads that wanted full replacements, not coatings.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              We built a Facebook Ads campaign from scratch using the same system we run for 100+ roof coating contractors across the US. Here&apos;s exactly what we did, why it worked, and how you can apply the same framework to your business.
            </p>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">The Challenge</h2>
            <p className="text-zinc-700 leading-relaxed">The contractor&apos;s situation before we started:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-3">
              {[
                "Lead flow was inconsistent — booked one month, empty the next",
                "Low-intent inquiries from people wanting full roof replacements",
                "Service area targeting was too broad — ads reaching people 60+ miles away",
                "No compelling offer — just 'We do roof coatings'",
                "Follow-up was slow — leads sat for 24-48 hours before a callback",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold font-mono text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">The Goal</h2>
            <p className="text-zinc-700 leading-relaxed">We set four clear objectives:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-3">
              {[
                "Generate more qualified local leads — not volume, quality",
                "Increase booked inspections and estimates",
                "Improve lead quality with niche-specific pre-qualification",
                "Create a repeatable Facebook Ads system that scales",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gold font-mono text-sm">→</span>
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">The Strategy</h2>
            <p className="text-zinc-700 leading-relaxed">
              We focused exclusively on Facebook Ads — no Google, no HomeAdvisor, no shared leads. The entire campaign was built around five principles:
            </p>
            <p className="text-zinc-700 leading-relaxed">
              <strong className="text-navy">Narrow targeting</strong> to the contractor&apos;s actual service radius. <strong className="text-navy">A specific offer</strong> — free roof coating inspection — instead of generic service promotion. <strong className="text-navy">Real project visuals</strong> from the contractor&apos;s own job sites. <strong className="text-navy">Lead Ads</strong> with pre-filled forms to reduce friction. And <strong className="text-navy">fast follow-up</strong> through our AI chatbot that books appointments automatically.
            </p>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">The Campaign Setup</h2>
            <p className="text-zinc-700 leading-relaxed">Here&apos;s what the campaign looked like behind the scenes:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-4">
              {[
                { label: "Objective", value: "Lead Generation (Facebook Lead Ads)" },
                { label: "Targeting", value: "25-mile radius around service area, homeowners 35+, property-related interests" },
                { label: "Creative", value: "Before-and-after photos, in-progress application shots, 30-second walkthrough video" },
                { label: "Copy", value: "Pain point (aging roof) → Solution (coating) → Offer (free inspection) → CTA (book now)" },
                { label: "Form", value: "Name, phone, email, property type, describe your roofing issue" },
                { label: "Follow-up", value: "AI chatbot responds in <60 seconds, books inspection automatically" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <span className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase w-24 shrink-0 pt-0.5">{item.label}</span>
                  <p className="text-zinc-700 text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">The Offer That Got Attention</h2>
            <p className="text-zinc-700 leading-relaxed">
              The hook was simple: <strong className="text-navy">&ldquo;Free Roof Coating Inspection for Local Property Owners.&rdquo;</strong> This worked because it was specific, low-risk, and tied to a real problem. We didn&apos;t say &ldquo;We do roof coatings.&rdquo; We said &ldquo;Find out whether your roof can be restored instead of replaced — for free.&rdquo;
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Limited availability messaging (&ldquo;Only 5 inspection slots left this week&rdquo;) added urgency without feeling pushy.
            </p>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">What Changed</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                <p className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-2">Before</p>
                <p className="text-navy font-bold text-2xl mb-1">$142</p>
                <p className="text-zinc-600 text-sm">cost per lead (HomeAdvisor)</p>
              </div>
              <div className="bg-gold/5 border border-gold/20 rounded-sm p-6">
                <p className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase mb-2">After</p>
                <p className="text-navy font-bold text-2xl mb-1">$38</p>
                <p className="text-zinc-600 text-sm">cost per lead (Facebook Ads)</p>
              </div>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Better local targeting reduced wasted spend. Stronger creative improved engagement. Lead forms increased response volume. And our AI-powered follow-up — responding in under 60 seconds — improved appointment booking rates dramatically.
            </p>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">Why the Campaign Worked</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-3">
              {[
                "Ads were hyper-relevant to the local audience",
                "The contractor gave people a clear reason to respond",
                "The conversion path was frictionless (Lead Ads, not landing pages)",
                "Messaging addressed real roofing pain points, not generic services",
                "The AI chatbot turned leads into booked appointments in minutes, not days",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gold font-mono text-sm">✓</span>
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">What Other Contractors Can Learn</h2>
            <p className="text-zinc-700 leading-relaxed">The framework is repeatable:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-3">
              {[
                "Do not target everyone — narrow to your real service area",
                "Do not run vague offers — give people a specific reason to act",
                "Use real project visuals, not stock photography",
                "Make conversion easy — Lead Ads beat landing pages for most contractors",
                "Measure success by booked jobs, not cheap leads",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold font-mono text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">A Sample Ad From the Campaign</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
              <p className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase mb-3">Sample Ad</p>
              <p className="text-navy font-bold text-lg mb-2">Free Roof Coating Inspection for Local Property Owners</p>
              <p className="text-zinc-700 text-sm leading-relaxed mb-4">
                Is your roof showing signs of wear, leaks, or age? Book a free inspection and find out whether roof coating can help extend its life — for a fraction of replacement cost. Limited spots available this week.
              </p>
              <p className="text-gold font-bold text-sm uppercase tracking-wider">→ Get My Free Inspection</p>
            </div>

            <h2 className="text-2xl font-black text-navy uppercase tracking-tighter mt-12 border-t border-gray-200 pt-8">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Can Facebook Ads generate commercial roofing leads?", a: "Yes. By narrowing targeting to specific service areas and using offers like free inspections, Facebook Ads consistently produce pre-qualified commercial roofing leads at a lower cost than shared lead platforms." },
                { q: "What results can a roof coating contractor expect?", a: "With an optimized campaign, contractors typically see leads within 48 hours, close rates of 20-35%, and a cost per lead of $30-$60 — roughly 40% less than HomeAdvisor." },
                { q: "What offer works best for roof coating Facebook Ads?", a: "Free roof coating inspections and no-obligation estimates consistently outperform generic service ads. The offer needs to give the prospect a clear, low-risk reason to act now." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-navy font-bold text-base mb-2">{faq.q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-navy rounded-sm p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4">
                Want the Same Results?
              </h2>
              <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
                We build and manage Facebook Ad campaigns exclusively for roof coating contractors. This is the same system we used in this case study — and it&apos;s running for 100+ contractors right now.
              </p>
              <a
                href="/get-started"
                className="inline-flex items-center justify-center bg-gold text-navy px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors"
              >
                Book a Free Strategy Call →
              </a>
              <p className="text-white/30 text-xs mt-4 font-mono tracking-wider uppercase">
                $2,000/mo · No contracts · Results from day 1
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
