"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  logEvent,
  setUserId,
  setUserProperties,
  type Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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

/**
 * Firebase Analytics only runs in the browser and only where the environment
 * supports it (no SSR, cookies enabled, etc.). We resolve the instance once,
 * lazily, and reuse the promise. Returns null when unconfigured/unsupported so
 * callers can fire-and-forget without crashing.
 */
let analyticsPromise: Promise<Analytics | null> | null = null;

function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (analyticsPromise) return analyticsPromise;
  analyticsPromise = (async () => {
    if (!firebaseConfig.apiKey || !firebaseConfig.appId) return null;
    if (!(await isSupported())) return null;
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    return getAnalytics(app);
  })();
  return analyticsPromise;
}

export function track(event: string, extraProps?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const params = { ...getUtm(), ...extraProps };
  void getAnalyticsInstance().then((a) => {
    if (a) logEvent(a, event, params);
  });
}

export function identify(email: string) {
  if (typeof window === "undefined") return;
  void getAnalyticsInstance().then((a) => {
    if (!a) return;
    setUserId(a, email);
    setUserProperties(a, { email });
  });
}
