# Truenett — landing page

Static marketing page (`index.html`), plain HTML + Tailwind (CDN). No backend. Deploys to Vercel.

## API keys — never committed

All keys live in **`config.js`**, which is **gitignored**. The repo only contains `config.example.js` (empty template).

- **Local dev:** `cp config.example.js config.js` and fill in your values.
- **Vercel:** don't create config.js — set env vars in the project settings (**Settings → Environment Variables**): `POSTHOG_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` (and optionally `POSTHOG_HOST` for EU cloud). The build step (`scripts/build-config.mjs`, wired up in `vercel.json`) generates `config.js` from them at deploy time.

If a key is missing, the page still works — the corresponding feature (analytics / email capture) just stays off.

> Reality check: the PostHog project key and Supabase **anon** key are *publishable* keys — visitors can always see them in the browser, and that's by design. The RLS policy is the actual security boundary. This setup keeps them out of the Git repo, which is what matters. Never put a Supabase **service-role** key (or any secret) in `config.js`.

## Deploy

- **CLI:** run `vercel` (preview) or `vercel --prod` (production) from this folder.
- **Git:** push to GitHub and "Import Project" in the Vercel dashboard. Leave the framework preset as **Other** — `vercel.json` already sets the build command and output directory.

Remember to add the env vars above before the first production deploy.

---

## Where to see the metrics

Two separate data sinks:

### 1. PostHog — event analytics (`cta_click`, `email_submit`, funnels, UTM breakdowns)

Dashboard: <https://us.posthog.com> (or <https://eu.posthog.com> for EU cloud).

**One-time setup (required before anything records):**

1. Sign up at PostHog (free tier: 1M events/mo) and create a project.
2. Copy the **Project API key** (Project Settings) and set it as `posthogKey` in `config.js` (local) or as the `POSTHOG_KEY` env var (Vercel).
   If your project is on **EU cloud**, also set `posthogHost` / `POSTHOG_HOST` to `https://eu.i.posthog.com`.
   For a **cookieless** setup, add `persistence: 'memory'` to the init options in `index.html`.
3. No goal registration needed — custom events appear automatically once they fire.

**Where the events show up:** **Activity** (live event stream) shows `cta_click` / `email_submit` immediately. Build charts under **Product Analytics → New insight**.

**The key funnel metric:** create a **Funnel** insight with two steps — `cta_click` then `email_submit`. PostHog charts the conversion rate and drop-off directly. Both events fire from independent code paths (neither is gated on the other or on the network), so the gap is clean.

**Breakdowns:** any insight can be broken down by event property:

| Property        | Meaning                                              |
| --------------- | ---------------------------------------------------- |
| `location`      | Which button fired `cta_click`: `nav` / `hero` / `pricing` / `closing` / `footer` |
| `utm_source`    | Traffic source, from the URL's `?utm_source=...`     |
| `utm_medium`    | e.g. `email`, `cpc`, `social`                        |
| `utm_campaign`  | Campaign name                                        |
| `utm_term`, `utm_content` | Keyword / creative variant                 |

PostHog also captures campaign params on the automatic `$pageview` event, so traffic sources show up out of the box too.

> ⚠️ Events do **not** record until you set a real Project API key, and localhost events may be filtered depending on project settings. You'll reliably see data once deployed.

### 2. Supabase — captured email leads

Dashboard: <https://supabase.com/dashboard> → your project → **Table Editor** → **`early_access_signups`**.

Each row includes the email plus `utm_*` and `referrer` columns, so every lead carries its attribution. You can filter/sort in the Table Editor, query under **SQL Editor**, or export to CSV.

**One-time setup:**

1. Create a Supabase project.
2. In **SQL Editor**, run the schema below to create the table + insert policy.
3. Set `supabaseUrl` + `supabaseAnonKey` in `config.js` (local) or the `SUPABASE_URL` + `SUPABASE_ANON_KEY` env vars (Vercel) — values are under Project Settings → API. The anon key is meant to be public — inserts are gated by the RLS policy.

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

-- Lock the table down, then allow ONLY anonymous inserts (no reads/updates/deletes).
alter table public.early_access_signups enable row level security;

create policy "anon can insert signups"
  on public.early_access_signups
  for insert
  to anon
  with check (true);
```

Why this is safe: RLS is on and the only policy is `insert`, so the public anon key can add a signup but cannot read anyone else's email, update, or delete. You read the leads from the dashboard (service role), not the browser.

Optional: **Database → Webhooks** can fire on each insert to email you / ping Slack / trigger a function.

> ⚠️ Nothing is captured until you fill in the URL + anon key and run the SQL. The email column is `unique`, so a repeat signup returns a duplicate error — the page treats that as success (already on the list).

---

**Mental model:** PostHog = *how many clicked vs. submitted* (the funnel). Supabase = *who actually gave you their email* (the leads).

## UTM tracking

Add UTM params to inbound links, e.g.:

```
https://YOUR-DOMAIN.com/?utm_source=twitter&utm_medium=social&utm_campaign=launch
```

They're captured once on page load and attached to both PostHog events **and** the Supabase signup row, so you can trace which source drove each click and each signup.
# truenett
