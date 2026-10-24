"use client";

import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import ReconMock from "./ReconMock";
import { track } from "@/lib/analytics";

const sources = [
  { label: "Payment platforms", sub: "charges, fees, refunds, payouts" },
  { label: "Banks", sub: "deposits, wires, fees" },
  { label: "Accounting", sub: "invoices, credit notes, journals" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[62%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="line inline-flex items-center gap-2 rounded-full border bg-panel px-3.5 py-1.5 text-[13px] font-medium text-fg-mid">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              In development · Recruiting design partners
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-8 max-w-[14ch] text-[2.6rem] font-semibold leading-[1.06] tracking-tightest text-fg sm:max-w-none sm:text-6xl md:text-[4.25rem]">
              Your payments, your bank and your books
              <br className="hidden sm:block" />{" "}
              <span className="accent-serif text-brand-300">never</span> quite agree.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-fg-mid">
              TrueNett is reconciliation across the systems your money moves through. It
              matches each charge, fee, refund, payout, deposit and accounting entry to its
              counterpart, keeps the evidence behind every match, and separates the
              differences that need you from the ones that are simply still in transit.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton location="hero" variant="brand" size="lg" className="w-full sm:w-auto">
                Join early access
              </CtaButton>
              <a
                href="#how-it-works"
                onClick={() => track("hero_secondary_cta_clicked", { label: "see_the_workflow" })}
                className="line inline-flex h-12 w-full items-center justify-center rounded-lg border bg-panel px-7 text-[15px] font-medium text-fg-mid transition-colors hover:border-white/20 hover:text-fg sm:w-auto"
              >
                See how matching works
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-[13px] text-fg-dim">
              Built for SaaS founders and lean finance teams · Nothing to connect yet — we
              start with a conversation
            </p>
          </Reveal>
        </div>

        {/* The three record sources converging on one reconciliation */}
        <Reveal delay={0.25} className="mx-auto mt-16 max-w-4xl">
          <div
            className="grid grid-cols-3 gap-2 px-1 text-center sm:gap-6"
            aria-label="Record sources TrueNett reconciles between"
          >
            {sources.map((s) => (
              <div key={s.label}>
                <p className="text-[12px] font-medium tracking-wide text-fg-mid sm:text-[13px]">
                  {s.label}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-fg-faint sm:text-[11px]">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
          <svg
            className="mx-auto -mb-px mt-3 block h-12 w-full max-w-2xl"
            viewBox="0 0 560 48"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path className="flow-line" d="M93 0 C93 34, 280 14, 280 48" />
            <path className="flow-line" d="M280 0 L280 48" />
            <path className="flow-line" d="M467 0 C467 34, 280 14, 280 48" />
            <path className="flow-pulse" d="M93 0 C93 34, 280 14, 280 48" />
            <path className="flow-pulse d2" d="M280 0 L280 48" />
            <path className="flow-pulse d3" d="M467 0 C467 34, 280 14, 280 48" />
          </svg>
          <ReconMock />
        </Reveal>
      </div>
    </section>
  );
}
