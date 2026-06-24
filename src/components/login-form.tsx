"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Building2, Loader2 } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    window.location.href = "/";
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-vezzt-600 text-white shadow-md">
          <Building2 className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-vezzt-900">
          Vezzt
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Because your business has value.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg shadow-neutral-200/80"
      >
        <h2 className="mb-6 text-lg font-semibold text-vezzt-950">Sign in</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-vezzt-950 outline-none transition focus:border-vezzt-600 focus:ring-2 focus:ring-vezzt-600/20"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-vezzt-950 outline-none transition focus:border-vezzt-600 focus:ring-2 focus:ring-vezzt-600/20"
              placeholder="••••••••"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-vezzt-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-vezzt-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Continue to Vezzt"
          )}
        </button>
      </form>
    </div>
  );
}
