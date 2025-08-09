import FeesPageClient from "../components/FeesPageClient";
import { getFeesData } from "../components/SanityData";

export default async function FeesPage() {
  const data = await getFeesData();
  return <FeesPageClient data={data} />;
}
