"use client";

import dynamic from "next/dynamic";
import type { Business } from "@/lib/types";

const BusinessMap = dynamic(
  () =>
    import("@/components/business-map").then((mod) => mod.BusinessMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-zinc-100 text-sm text-zinc-500">
        Loading map...
      </div>
    ),
  },
);

type BusinessMapWrapperProps = {
  businesses: Business[];
  selected: Business | null;
  onSelect: (business: Business) => void;
};

export function BusinessMapWrapper(props: BusinessMapWrapperProps) {
  return <BusinessMap {...props} />;
}
