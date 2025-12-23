import FeesPageClient from "../components/admission/FeesPageClient";
import { getFeesData } from "../components/data/SanityData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Transparent pricing for quality education at Bloom Nepal School. View our fee structure, payment options, and scholarship opportunities for grades 1-10.",
  keywords: [
    "Bloom Nepal fees",
    "school fees Nepal",
    "tuition fees",
    "affordable education",
    "payment plans",
  ],
  openGraph: {
    title: "Fees | Bloom Nepal School",
    description:
      "Transparent pricing for quality education. View our fee structure and scholarship opportunities.",
  },
};

export default async function FeesPage() {
  const data = await getFeesData();
  return <FeesPageClient data={data} />;
}
