"use client";

import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { track } from "@/lib/analytics";

export default function FinalCta() {
  return (
    <section className="line relative overflow-hidden border-t py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.08] blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tightest text-fg sm:text-5xl sm:leading-[1.1]">
            You already earned the money.
            <br />
            Now find out <span className="accent-serif text-brand-300">how much</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-fg-mid">
            Join the early-access list. Two minutes of setup, one honest number, and
            founding pricing locked in for life.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton location="closing" variant="brand" size="lg">
              Get early access
            </CtaButton>
            <a
              href="#problem"
              onClick={() => track("closing_secondary_cta_clicked", { label: "re_read_the_case" })}
              className="line inline-flex h-12 items-center justify-center rounded-lg border bg-panel px-7 text-[15px] font-medium text-fg-mid transition-colors hover:border-white/20 hover:text-fg"
            >
              Re-read the case
            </a>
          </div>
          <p className="mt-5 text-[13px] text-fg-dim">
            No credit card · No spam · Unsubscribe anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}
