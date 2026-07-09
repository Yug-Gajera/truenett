"use client";

/**
 * PostHog helpers. Event names and the `location` property are kept
 * identical to the previous landing page so existing funnels
 * (cta_click → email_submit) keep reporting without changes.
 */

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, props?: Record<string, unknown>) => void;
      identify: (id: string, props?: Record<string, unknown>) => void;
    };
  }
}

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
  if (typeof window === "undefined" || !window.posthog) return;
  window.posthog.capture(event, { ...getUtm(), ...extraProps });
}

export function identify(email: string) {
  if (typeof window === "undefined" || !window.posthog) return;
  window.posthog.identify(email, { email });
}
