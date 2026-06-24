import type { Business } from "@/lib/types";
import { formatCurrency } from "@/lib/businesses";
import {
  Building2,
  Calendar,
  DollarSign,
  MapPin,
  Ruler,
  Users,
} from "lucide-react";

type BusinessPanelProps = {
  business: Business | null;
};

export function BusinessPanel({ business }: BusinessPanelProps) {
  if (!business) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
          <MapPin className="h-5 w-5 text-zinc-400" />
        </div>
        <p className="text-sm font-medium text-zinc-700">
          Select a business on the map
        </p>
        <p className="mt-1 max-w-xs text-xs text-zinc-500">
          Click a marker or choose from the list to view its Vestimate and
          details.
        </p>
      </div>
    );
  }

  const stats = [
    {
      label: "Annual Revenue",
      value: formatCurrency(business.annualRevenue),
      icon: DollarSign,
    },
    {
      label: "Employees",
      value: business.employees.toString(),
      icon: Users,
    },
    {
      label: "Founded",
      value: business.founded.toString(),
      icon: Calendar,
    },
    {
      label: "Sq Ft",
      value: business.sqft.toLocaleString(),
      icon: Ruler,
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-zinc-200 p-5">
        <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-emerald-700">
          <Building2 className="h-3.5 w-3.5" />
          {business.category}
        </div>
        <h2 className="text-xl font-bold text-zinc-900">{business.name}</h2>
        <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {business.address}, {business.city}, {business.state}
        </p>
      </div>

      <div className="border-b border-zinc-200 bg-emerald-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Vestimate
        </p>
        <p className="mt-1 text-3xl font-bold text-emerald-700">
          {formatCurrency(business.vestimate)}
        </p>
        <p className="mt-1 text-xs text-emerald-700/70">
          Estimated business valuation based on revenue, location, and market
          data.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 border-b border-zinc-200 p-5">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-zinc-200 bg-zinc-50 p-3"
          >
            <div className="mb-1 flex items-center gap-1.5 text-xs text-zinc-500">
              <Icon className="h-3 w-3" />
              {label}
            </div>
            <p className="text-sm font-semibold text-zinc-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <h3 className="mb-2 text-sm font-semibold text-zinc-900">About</h3>
        <p className="text-sm leading-relaxed text-zinc-600">
          {business.description}
        </p>
      </div>
    </div>
  );
}
