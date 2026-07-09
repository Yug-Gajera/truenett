"use client";

import { getUtm } from "./analytics";

/**
 * Inserts a signup into the Supabase `early_access_signups` table via the
 * REST API (no client library needed — the anon key only permits inserts,
 * enforced by RLS; see README.md for the table + policy SQL).
 */
export async function submitSignup(
  email: string
): Promise<{ ok: boolean; returning?: boolean; errorCode?: string }> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return { ok: false, errorCode: "not_configured" };

  const utm = getUtm();
  const res = await fetch(`${url}/rest/v1/early_access_signups`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email,
      referrer: document.referrer || null,
      utm_source: utm.utm_source ?? null,
      utm_medium: utm.utm_medium ?? null,
      utm_campaign: utm.utm_campaign ?? null,
      utm_term: utm.utm_term ?? null,
      utm_content: utm.utm_content ?? null,
    }),
  });

  if (res.ok) return { ok: true, returning: false };

  // 409 = unique_violation → email already on the list; treat as success.
  if (res.status === 409) return { ok: true, returning: true };

  let code = String(res.status);
  try {
    const body = await res.json();
    if (body?.code) code = body.code;
  } catch {
    /* non-JSON error body */
  }
  return { ok: false, errorCode: code };
}
