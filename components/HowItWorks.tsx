import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Connect your platforms",
    body: "Authorize read-only connections to Stripe, PayPal, Gumroad, Lemon Squeezy and the rest. OAuth or restricted keys — TrueNett can look, never touch.",
    detail: "~2 minutes per platform",
  },
  {
    title: "We import every transaction",
    body: "Sales, payouts, fee lines, refunds, disputes — including history, so your past months get reconciled too, not just the ones ahead.",
    detail: "Automatic, including history",
  },
  {
    title: "Categorize your expenses",
    body: "Add subscriptions, contractors and ad spend once. TrueNett remembers each category and applies it to everything that follows.",
    detail: "Once — then it's remembered",
  },
  {
    title: "See your true net income",
    body: "Fees matched to transactions, currencies normalized, refunds netted out, your tax rate applied. One reconciled figure that updates as payouts settle.",
    detail: "The number your bank agrees with",
  },
  {
    title: "Act on what you learn",
    body: "Refund spikes, fee creep, a subscription you forgot, margins thinning on one platform — surfaced as alerts and insights, not buried in rows.",
    detail: "Insights, not just charts",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From scattered payouts to one true number, in{" "}
              <span className="accent-serif">five</span> steps.
            </>
          }
          lede="No bookkeeping knowledge. No chart of accounts. No weekend lost to setup."
        />

        <ol className="relative mx-auto mt-16 max-w-2xl">
          {/* Vertical connector */}
          <div
            className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.05} className="relative flex gap-6 pb-12 last:pb-0">
              <span className="line z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-panel text-sm font-semibold text-brand-400">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[17px] font-semibold text-fg">{step.title}</h3>
                  <span className="text-[12px] font-medium text-fg-dim">{step.detail}</span>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-mid">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
