import { AppShell } from "@/components/app-shell";
import { businesses } from "@/lib/businesses";

export default function HomePage() {
  return <AppShell businesses={businesses} />;
}
