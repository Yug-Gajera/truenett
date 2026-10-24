import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const personas = [
  {
    who: "SaaS founders",
    pain: "Subscription revenue in Stripe, a bank account that disagrees with it, and a bookkeeper who asks about a $40 difference you can't explain.",
    gain: "Know that the month ties out — and which three records don't — without becoming the person who reconciles it by hand.",
  },
  {
    who: "Lean finance teams",
    pain: "One or two people closing the month across a processor, two bank accounts and the ledger, in a spreadsheet nobody else can safely touch.",
    gain: "The matching already done when close starts, with the evidence attached, so the work left is judgement rather than data entry.",
  },
  {
    who: "Fractional CFOs and bookkeepers",
    pain: "Several clients, each with a different stack, each needing the same payout-to-deposit work rebuilt from scratch every month.",
    gain: "The same reconciliation state per client, so a close is reviewed rather than reconstructed.",
  },
];

export default function Personas() {
  return (
    <section id="who" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we're building with"
          title={
            <>
              Start with SaaS, because the{" "}
              <span className="accent-serif">records</span> are hardest there.
            </>
          }
          lede="Subscriptions, proration, failed payments, mid-cycle refunds and payouts that bundle hundreds of charges make SaaS a demanding first case. The architecture is multi-platform by design — payments, banking and accounting as separate kinds of source — so what works here extends outward rather than being rebuilt."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal
              key={p.who}
              delay={i * 0.07}
              className="line rounded-2xl border bg-panel p-6 transition-colors duration-300 hover:border-white/16"
            >
              <h3 className="text-[15px] font-semibold text-fg">{p.who}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-dim">{p.pain}</p>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-fg-mid">
                <svg
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-400"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 8h10M8 3l5 5-5 5" />
                </svg>
                {p.gain}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
