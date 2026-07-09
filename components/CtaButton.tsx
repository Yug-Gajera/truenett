"use client";

import type { ReactNode } from "react";
import { useWaitlist } from "./WaitlistProvider";

const variants = {
  /** High-emphasis: light button on the dark page */
  primary:
    "bg-fg text-base hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base",
  /** Brand-emphasis: used once or twice for the biggest moments */
  brand:
    "bg-brand-500 text-base font-semibold hover:bg-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base",
  /** Low-emphasis outline */
  ghost:
    "line border bg-transparent text-fg-mid hover:border-white/20 hover:text-fg",
} as const;

export default function CtaButton({
  location,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: {
  location: string;
  variant?: keyof typeof variants;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
}) {
  const { open } = useWaitlist();
  return (
    <button
      onClick={() => open(location)}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none ${
        size === "lg" ? "h-12 px-7 text-[15px]" : "h-10 px-4 text-sm"
      } ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
