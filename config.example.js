// Site config — client-side keys only.
//
// Local dev:  copy this file to config.js and fill in the values.
//             config.js is gitignored, so real keys never reach the repo.
// Vercel:     don't create config.js — set the env vars instead
//             (POSTHOG_KEY, SUPABASE_URL, SUPABASE_ANON_KEY) and the build
//             step (scripts/build-config.mjs) generates config.js at deploy.
//
// Note: these are PUBLISHABLE keys (PostHog project key, Supabase anon key).
// They are visible to visitors in the browser by design; security comes from
// the Supabase RLS policy, not from hiding the key. Never put a Supabase
// service-role key or any secret key in here.
window.TRUENETT_CONFIG = {
  posthogKey: '',                              // phc_... (PostHog → Project Settings)
  posthogHost: 'https://us.i.posthog.com',     // or https://eu.i.posthog.com
  supabaseUrl: '',                             // https://YOUR-PROJECT.supabase.co
  supabaseAnonKey: '',                         // Supabase → Project Settings → API
};
