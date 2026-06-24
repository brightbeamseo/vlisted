import { AppShell } from "@/components/app-shell";
import { getBusinesses } from "@/lib/businesses";

export default async function HomePage() {
  const businesses = await getBusinesses();

  return <AppShell businesses={businesses} />;
}
