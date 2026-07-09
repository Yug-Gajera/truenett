"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";
import { track, identify } from "@/lib/analytics";
import { submitSignup } from "@/lib/waitlist";

type WaitlistContextValue = {
  open: (location: string) => void;
};

const WaitlistContext = createContext<WaitlistContextValue>({ open: () => {} });

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("unknown");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const lastFocused = useRef<Element | null>(null);

  const open = useCallback((loc: string) => {
    lastFocused.current = document.activeElement;
    setLocation(loc);
    setStatus("idle");
    setError(null);
    setIsOpen(true);
    track("cta_click", { location: loc });
    track("modal_opened", { location: loc });
  }, []);

  const close = useCallback(
    (method: string) => {
      setIsOpen(false);
      track("modal_closed", { location, method });
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    },
    [location]
  );

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => emailRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close("keyboard");
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    // Honeypot — if a bot filled the hidden field, pretend success and bail.
    const honeypot = form.elements.namedItem("bot-field") as HTMLInputElement | null;
    if (honeypot?.value) {
      setStatus("success");
      return;
    }

    const input = emailRef.current;
    const email = input?.value.trim() ?? "";
    if (!input || !input.checkValidity() || !email) {
      setError("Please enter a valid email address.");
      input?.focus();
      return;
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setError("Signups aren't open just yet. Please try again soon.");
      return;
    }

    // Fired before the network call so the cta_click → email_submit funnel
    // isn't polluted by transient network/DB failures.
    track("email_submit");
    setStatus("submitting");

    const result = await submitSignup(email);
    if (result.ok) {
      identify(email);
      track("email_signup_success", { returning: result.returning ?? false });
      setStatus("success");
    } else {
      track("email_signup_error", { error_code: result.errorCode });
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => close("backdrop")}
            aria-hidden="true"
          />

          <div className="line relative w-full max-w-sm rounded-2xl border bg-panel p-7 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8)] sm:p-8">
            <button
              onClick={() => close("button")}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md text-fg-dim transition-colors hover:bg-panel-3 hover:text-fg"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]">
                <path
                  fillRule="evenodd"
                  d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {status === "success" ? (
              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15">
                  <svg
                    className="h-[18px] w-[18px] text-brand-400"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                  </svg>
                </div>
                <h2 className="mt-5 text-lg font-semibold tracking-tight">You're on the list</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-mid">
                  Thanks for your interest in TrueNett. We'll email you as soon as your
                  early-access spot is ready.
                </p>
                <button
                  onClick={() => close("button")}
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-fg px-6 text-sm font-medium text-base transition-opacity hover:opacity-90"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2 id="waitlist-title" className="text-lg font-semibold tracking-tight">
                  Get early access
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-mid">
                  Drop your email and we'll reach out when your spot opens up. Founding-member
                  pricing is locked in for everyone on the list.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-3" noValidate>
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don't fill this out:{" "}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <div>
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      ref={emailRef}
                      id="waitlist-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="line h-11 w-full rounded-lg border bg-panel-2 px-3.5 text-sm text-fg placeholder-fg-dim transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-loss" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-fg px-6 text-sm font-medium text-base transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Request access"}
                  </button>
                </form>
                <p className="mt-4 text-center text-[13px] text-fg-dim">
                  We'll only use your email to send your invite.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </WaitlistContext.Provider>
  );
}
