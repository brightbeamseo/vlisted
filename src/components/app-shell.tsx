"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Building2, LogOut, Search } from "lucide-react";
import { formatCurrency } from "@/lib/businesses";
import type { Business } from "@/lib/types";
import { BusinessMapWrapper } from "@/components/business-map-wrapper";
import { BusinessPanel } from "@/components/business-panel";

type AppShellProps = {
  businesses: Business[];
};

export function AppShell({ businesses }: AppShellProps) {
  const [selected, setSelected] = useState<Business | null>(null);
  const [search, setSearch] = useState("");

  const filtered = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-screen flex-col bg-zinc-50">
      <header className="flex shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Building2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-900">Vlisted</p>
            <p className="text-xs text-zinc-500">Business valuations</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-50"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </button>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="flex w-80 shrink-0 flex-col border-r border-zinc-200 bg-white">
          <div className="border-b border-zinc-200 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search businesses..."
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              {filtered.length} business{filtered.length !== 1 ? "es" : ""}{" "}
              listed
            </p>
          </div>

          <ul className="flex-1 overflow-y-auto">
            {filtered.map((business) => (
              <li key={business.id}>
                <button
                  onClick={() => setSelected(business)}
                  className={`w-full border-b border-zinc-100 px-4 py-3 text-left transition hover:bg-zinc-50 ${
                    selected?.id === business.id ? "bg-emerald-50" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-zinc-900">
                    {business.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {business.category} · {business.city}, {business.state}
                  </p>
                  <p className="mt-1 text-xs font-bold text-emerald-700">
                    Vestimate {formatCurrency(business.vestimate)}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="relative min-w-0 flex-1">
          <BusinessMapWrapper
            businesses={filtered}
            selected={selected}
            onSelect={setSelected}
          />
        </main>

        <aside className="w-96 shrink-0 border-l border-zinc-200 bg-white">
          <BusinessPanel business={selected} />
        </aside>
      </div>
    </div>
  );
}
