import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Collect records as they appear",
    body: "Charges, fees, refunds, payouts, bank lines and accounting entries are pulled in as each source makes them available — not all at once at month end. Each record keeps its source, its identifier and the time it was observed.",
    detail: "Continuous, per source",
  },
  {
    title: "Match counterparts across systems",
    body: "A payout is matched to the charges, fees and refunds it is composed of, and then to the deposit that carries it. A charge is matched to the invoice it settles and the credit note that reverses it. Amount, date window, currency and reference all contribute.",
    detail: "Many-to-one, not line-by-line",
  },
  {
    title: "Weigh the evidence behind each match",
    body: "A match is only as strong as what supports it. Two sources agreeing on an exact amount and a reference is a verified match. An amount that is close but not equal is a possible match, and stays that way until someone confirms it.",
    detail: "Evidence kept with the match",
  },
  {
    title: "Separate waiting from wrong",
    body: "A deposit that has not reached the bank feed yet is not a discrepancy — it is missing evidence, and TrueNett says so. Only differences with evidence on both sides become exceptions, with the records, amounts and timing that produced them.",
    detail: "The distinction most tools skip",
  },
  {
    title: "Review the month, or close it",
    body: "The same matched records answer both questions: what needs attention right now, and whether a chosen month, quarter or date range is fully reconciled — with every remaining open item listed by name.",
    detail: "One dataset, two views",
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
              Collect, match, weigh the{" "}
              <span className="accent-serif">evidence</span>, surface what's left.
            </>
          }
          lede="Reconciliation is not a report you run. It is a state TrueNett maintains, so that closing a month is a review rather than a reconstruction."
        />

        <ol className="relative mx-auto mt-16 max-w-2xl">
          <div
            className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.05}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
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
