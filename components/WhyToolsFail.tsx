import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaButton from "./CtaButton";

const tools = [
  {
    name: "Stripe Dashboard",
    verdict: "Sees one platform. Leads with gross.",
    points: [
      "Blind to PayPal, Gumroad, AdSense — everything else",
      "Headlines gross volume, not what you keep",
      "No expenses, no taxes, no full picture",
    ],
  },
  {
    name: "QuickBooks / Xero",
    verdict: "Built for accountants, not for you.",
    points: [
      "Days of setup, chart-of-accounts jargon",
      "Treats a Gumroad payout as one opaque lump",
      "Answers compliance questions, not “what did I make?”",
    ],
  },
  {
    name: "Spreadsheets",
    verdict: "Accurate for exactly one afternoon.",
    points: [
      "Manual CSV exports from every platform, every month",
      "One broken formula silently corrupts everything",
      "Stale the moment you hit save",
    ],
  },
];

const truenettPoints = [
  "Every platform in one place, automatically",
  "Leads with true net — after every deduction",
  "Fee-level detail on each transaction",
  "Always current as payouts settle",
];

export default function WhyToolsFail() {
  return (
    <section className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why existing tools fail"
          title="You already have dashboards. None of them answer the question."
          lede="Each tool you're using was built to answer someone else's question — the platform's, the accountant's, the IRS's. TrueNett is built to answer yours: what did I actually earn?"
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

          {/* TrueNett card — visually elevated */}
          <Reveal
            delay={0.21}
            className="relative rounded-2xl border border-brand-500/40 bg-panel p-6 shadow-[0_0_60px_-16px_rgba(16,185,129,0.25)]"
          >
            <span className="absolute -top-2.5 left-6 rounded-full bg-brand-500 px-2.5 py-0.5 text-[11px] font-semibold text-base">
              TrueNett
            </span>
            <h3 className="text-[15px] font-semibold text-fg">One honest number</h3>
            <p className="mt-1.5 text-[13px] italic text-fg-dim">
              Built for the person running the business.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-fg-mid">
              {truenettPoints.map((p) => (
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
              Join waitlist
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
