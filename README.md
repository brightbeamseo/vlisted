# Vlisted

A business listing and valuation tool — like Zillow, but for businesses. Browse listings on a map, view business details, and see each business's **Vestimate** (valuation estimate).

## Features

- **Login-first access** — all routes are protected behind authentication
- **Interactive map** — locate businesses geographically across the Southeast
- **Business listings** — searchable sidebar with category, location, and Vestimate
- **Detail panel** — revenue, employees, square footage, and valuation breakdown

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to `/login`.

**Default credentials** (set in `.env.local`):

- Email: `admin@vlisted.com`
- Password: `changeme`

## Environment Variables

| Variable | Description |
|---|---|
| `AUTH_SECRET` | Secret for Auth.js sessions. Generate with `openssl rand -base64 32` |
| `AUTH_EMAIL` | Login email |
| `AUTH_PASSWORD` | Login password |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_API_READ_TOKEN` | Sanity read token for server-side fetching |

## Content (Sanity CMS)

Business listings are managed in [Sanity](https://www.sanity.io/manage) project **Vlisted** (`jt8wzqst`). The app fetches published `business` documents and falls back to local sample data if Sanity is unavailable.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add the environment variables above in the Vercel dashboard
4. Deploy

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Auth.js](https://authjs.dev) (NextAuth v5)
- [React Leaflet](https://react-leaflet.js.org) + OpenStreetMap
- [Tailwind CSS](https://tailwindcss.com)
