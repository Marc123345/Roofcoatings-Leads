import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://roofcoatleads.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://roofcoatleads.com/how-it-works", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://roofcoatleads.com/results", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://roofcoatleads.com/niche-expertise", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://roofcoatleads.com/get-started", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://roofcoatleads.com/service-areas", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://roofcoatleads.com/manufacturers", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://roofcoatleads.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://roofcoatleads.com/blog/facebook-ads-roof-coating-contractors", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://roofcoatleads.com/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://roofcoatleads.com/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `https://roofcoatleads.com/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...serviceAreaPages];
}
