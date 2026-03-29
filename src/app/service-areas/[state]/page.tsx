import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreaDetail from "@/components/pages/ServiceAreaDetail";
import { serviceAreas, getServiceArea } from "@/lib/service-areas";

export function generateStaticParams() {
  return serviceAreas.map((sa) => ({ state: sa.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const area = getServiceArea(state);
  if (!area) return {};
  return {
    title: `${area.state} Roof Coating Leads | Exclusive Leads for ${area.abbr} Contractors — RoofCoat Leads`,
    description: `Get exclusive, pre-qualified roof coating leads in ${area.state}. Custom Facebook Ad campaigns targeting ${area.cities.slice(0, 3).join(", ")} and more. 40% lower CPA. First lead in <48h.`,
    alternates: { canonical: `https://roofcoatleads.com/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const area = getServiceArea(state);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceAreaDetail area={area} />
      </main>
      <Footer />
    </>
  );
}
