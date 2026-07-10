# TrueNett — landing page

Premium dark landing page for TrueNett, built with **Next.js (App Router) + Tailwind CSS v4 + TypeScript**. No animation libraries — scroll reveals, counters and micro-interactions are hand-rolled CSS + IntersectionObserver. Deploys to Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Configuration — env vars, never committed

All keys are **publishable** (visible in the browser by design). They live in `.env.local` (gitignored) locally, or Vercel env vars in production. Copy `.env.example` to `.env.local` to start.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key (analytics) |
| `NEXT_PUBLIC_POSTHOG_HOST` | Optional — set to `https://eu.i.posthog.com` for EU cloud |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (email capture) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key — inserts gated by RLS |

If a key is missing the page still works; the corresponding feature (analytics / email capture) stays off.

> ⚠️ **Migrating from the old static site?** The env vars were renamed: `POSTHOG_KEY` → `NEXT_PUBLIC_POSTHOG_KEY`, `SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_ANON_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Update them in Vercel before deploying, and switch the Vercel framework preset from **Other** to **Next.js** (or just delete + re-import the project; there is no `vercel.json` anymore).

## Deploy

- **CLI:** `vercel` (preview) or `vercel --prod` from this folder.
- **Git:** push to GitHub, import in Vercel. Framework preset: **Next.js** (auto-detected).

## Analytics — PostHog

Event names are unchanged from the previous site, so existing insights keep working:

| Event | Fired when |
| --- | --- |
| `cta_click` | Any "Get early access" button (`location`: `nav` / `hero` / `comparison` / `pricing` / `closing`) |
| `modal_opened` / `modal_closed` | Waitlist modal lifecycle |
| `email_submit` | Form submitted (before the network call — clean funnel metric) |
| `email_signup_success` / `email_signup_error` | Supabase insert result (`returning: true` = duplicate email) |
| `nav_link_clicked` | Header navigation |

**Key funnel:** `cta_click` → `email_submit`. UTM params (`utm_source` etc.) are captured once per page load and attached to every event and to the Supabase row.

## Email capture — Supabase

Signups POST to the Supabase REST API (no client SDK) into `early_access_signups`. One-time setup — run in the SQL Editor:

```sql
create table public.early_access_signups (
  id           uuid primary key default gen_random_uuid(),
  email        text not null unique,
  utm_source   text,
  utm_medium   text,
  utm_campaign text,
  utm_term     text,
  utm_content  text,
  referrer     text,
  created_at   timestamptz not null default now()
);

-- Lock the table down, then allow ONLY anonymous inserts.
alter table public.early_access_signups enable row level security;

create policy "anon can insert signups"
  on public.early_access_signups
  for insert
  to anon
  with check (true);
```

RLS is the security boundary: the public anon key can insert a signup but never read, update or delete. Read your leads in the Supabase dashboard (Table Editor → `early_access_signups`). A duplicate email returns HTTP 409, which the UI treats as "already on the list".

## Before launch — TODO

- [ ] Add a real 1200×630 **OG image** at `public/og.png` (referenced in `app/layout.tsx`).
- [ ] Create real **Privacy** and **Terms** pages and update the footer links.
- [ ] Point the footer **Twitter/Docs/Roadmap** links at real destinations.

## Structure

```
app/
  layout.tsx        # metadata, fonts, PostHog, JSON-LD (SoftwareApplication + FAQPage)
  page.tsx          # section composition
  globals.css       # design tokens (@theme), noise/grid, reveal + flow animations
components/         # one file per section + shared primitives
  Reveal.tsx        # scroll-reveal wrapper (IntersectionObserver)
  Counter.tsx       # animated count-up numbers
  CtaButton.tsx     # tracked CTA (opens waitlist modal)
  WaitlistProvider.tsx  # modal + Supabase submit + PostHog events
lib/
  analytics.ts      # track/identify + UTM capture
  waitlist.ts       # Supabase REST insert
  faqs.ts           # FAQ content (rendered + injected as FAQPage schema)
```
