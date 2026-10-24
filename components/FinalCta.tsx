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
            Show us where your month
            <br />
            stops <span className="accent-serif text-brand-300">adding up</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-fg-mid">
            We're building reconciliation with a small group of SaaS teams and lean finance
            people. If closing your month means chasing records between a processor, a bank
            and a ledger, we'd like to hear how.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton location="closing" variant="brand" size="lg">
              Join early access
            </CtaButton>
            <a
              href="mailto:hello@truenett.com?subject=Reconciliation%20%E2%80%94%20my%20stack&body=Which%20systems%20my%20records%20live%20in%3A%0A%0AHow%20I%20reconcile%20today%3A%0A%0AWhere%20it%20breaks%3A%0A"
              onClick={() => track("closing_secondary_cta_clicked", { label: "email_founders" })}
              className="line inline-flex h-12 items-center justify-center rounded-lg border bg-panel px-7 text-[15px] font-medium text-fg-mid transition-colors hover:border-white/20 hover:text-fg"
            >
              Email us instead
            </a>
          </div>
          <p className="mt-5 text-[13px] text-fg-dim">
            No credit card · No credentials · Nothing to install
          </p>
        </Reveal>
      </div>
    </section>
  );
}
