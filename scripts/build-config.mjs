// Generates config.js from environment variables at deploy time.
// Vercel runs this as the build command (see vercel.json); set POSTHOG_KEY,
// SUPABASE_URL, and SUPABASE_ANON_KEY in the Vercel project's env vars.
// Missing vars produce an empty config — the page still works, the
// corresponding feature (analytics / email capture) just stays off.
import { writeFileSync } from 'node:fs';

const cfg = {
  posthogKey: process.env.POSTHOG_KEY || '',
  posthogHost: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
};

writeFileSync('config.js', `window.TRUENETT_CONFIG = ${JSON.stringify(cfg, null, 2)};\n`);

console.log(
  'config.js generated:',
  Object.fromEntries(Object.entries(cfg).map(([k, v]) => [k, v ? '✓ set' : '— empty'])),
);
