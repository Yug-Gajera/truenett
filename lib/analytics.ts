"use client";

import posthog from "posthog-js";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

let utmCache: Record<string, string> | null = null;

/** Captured once per page load and attached to every event + signup row. */
export function getUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  if (utmCache) return utmCache;
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) out[k] = v;
  });
  utmCache = out;
  return out;
}

export function track(event: string, extraProps?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  posthog.capture(event, { ...getUtm(), ...extraProps });
}

export function identify(email: string) {
  if (typeof window === "undefined") return;
  posthog.identify(email, { email });
}
