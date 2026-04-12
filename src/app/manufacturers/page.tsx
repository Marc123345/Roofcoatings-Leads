import type { Metadata } from "next";
import ManufacturersPage from "./ManufacturersPage";

export const metadata: Metadata = {
  title: "Manufacturer Partnerships | RoofCoat Leads",
  description:
    "Partner with RoofCoat Leads to keep your certified contractors booked. More jobs for your applicators means more material orders for you. 100+ leads/month at scale.",
  keywords: [
    "roof coating manufacturer partnership",
    "contractor lead generation",
    "roof coating leads for manufacturers",
    "applicator support program",
    "roofing manufacturer marketing",
  ],
  alternates: {
    canonical: "https://roofcoatleads.com/manufacturers",
  },
};

export default function Page() {
  return <ManufacturersPage />;
}
