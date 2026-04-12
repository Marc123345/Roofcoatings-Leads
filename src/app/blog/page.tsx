import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | RoofCoat Leads",
  description: "Insights, strategies, and proven tactics for roof coating contractors looking to generate more qualified leads through Facebook Ads.",
  alternates: { canonical: "https://roofcoatleads.com/blog" },
};

const posts = [
  {
    slug: "facebook-ads-roof-coating-contractors",
    title: "Facebook Ads for Roof Coating Contractors: How to Generate More Qualified Leads in 2026",
    excerpt: "Facebook Ads help roof coating contractors generate local leads by combining precise targeting, strong offers, eye-catching creatives, and frictionless lead forms.",
    image: "https://ik.imagekit.io/qcvroy8xpd/photo-1674485169641-bcb2bf6f1df9%20(1).jpeg",
    date: "April 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "roof-coating-facebook-ads-case-study",
    title: "How a Roof Coating Contractor Generated Qualified Leads With Facebook Ads",
    excerpt: "A case study on how we helped a contractor go from inconsistent referrals to a predictable pipeline of pre-qualified commercial roofing leads using Facebook Ads.",
    image: "https://ik.imagekit.io/qcvroy8xpd/Sylicone.jpeg",
    date: "April 12, 2026",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4 block">
            // Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy uppercase tracking-tighter mb-12">
            Blog
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-gold/30 transition-colors duration-300 shadow-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase">{post.date}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase">{post.readTime}</span>
                    </div>
                    <h2 className="text-navy font-bold text-lg leading-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 text-sm mt-3 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
