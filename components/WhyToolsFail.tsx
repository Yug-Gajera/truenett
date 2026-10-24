import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaButton from "./CtaButton";

const tools = [
  {
    name: "Your payment platform",
    verdict: "Reconciles itself, and only itself.",
    points: [
      "Knows its own fees and payouts — nothing about your bank or ledger",
      "Can't see a second processor, a marketplace or a wire paid by invoice",
      "No concept of an invoice it didn't issue, or a credit note it didn't create",
    ],
  },
  {
    name: "Accounting software",
    verdict: "Matches bank lines, not the records behind them.",
    points: [
      "A payout arrives as one lump; the charges, fees and refunds inside it stay invisible",
      "Built around the bank feed, so timing differences look like errors",
      "Reconciliation state lives in someone's head between closes",
    ],
  },
  {
    name: "Spreadsheets",
    verdict: "Correct on the day they are built.",
    points: [
      "Manual exports from every system, re-done every period",
      "No record of why a line was matched, so last month can't be re-checked",
      "Nothing holds a match open while the evidence is still in transit",
    ],
  },
];

const ours = [
  "Matching between systems, not inside one",
  "Evidence stored with every match, so decisions can be audited",
  "Delays and discrepancies kept apart",
  "Continuous state and period close from the same records",
];

export default function WhyToolsFail() {
  return (
    <section className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where the gap is"
          title="Every system reconciles its own half of the story."
          lede="None of these tools is wrong — each does the job it was built for. The work that falls between them, every month, is the work TrueNett is being built to do."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={i * 0.07}
              className="line rounded-2xl border bg-panel p-6"
            >
              <h3 className="text-[15px] font-semibold text-fg-mid">{tool.name}</h3>
              <p className="mt-1.5 text-[13px] italic text-fg-dim">{tool.verdict}</p>
              <ul className="mt-5 space-y-3 text-sm text-fg-dim">
                {tool.points.map((p) => (
                  <li key={p} className="flex gap-2.5 leading-snug">
                    <svg
                      className="mt-1 h-3 w-3 shrink-0 text-loss/70"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    >
                      <path d="M2 2l8 8M10 2l-8 8" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={0.21}
            className="relative rounded-2xl border border-brand-500/40 bg-panel p-6 shadow-[0_0_60px_-16px_rgba(16,185,129,0.25)]"
          >
            <span className="absolute -top-2.5 left-6 rounded-full bg-brand-500 px-2.5 py-0.5 text-[11px] font-semibold text-base">
              TrueNett
            </span>
            <h3 className="text-[15px] font-semibold text-fg">The layer in between</h3>
            <p className="mt-1.5 text-[13px] italic text-fg-dim">
              One reconciliation state across all of them.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-fg-mid">
              {ours.map((p) => (
                <li key={p} className="flex gap-2.5 leading-snug">
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <CtaButton location="comparison" variant="brand" className="mt-6 w-full">
              Talk to us
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
