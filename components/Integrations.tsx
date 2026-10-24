import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Stage = "first" | "next" | "later";

const STAGE: Record<Stage, { label: string; pill: string }> = {
  first: { label: "First integration", pill: "bg-brand-500/15 text-brand-300" },
  next: { label: "Next in line", pill: "bg-white/6 text-fg-dim" },
  later: { label: "Later", pill: "bg-white/6 text-fg-faint" },
};

const groups: { kind: string; items: { name: string; stage: Stage }[] }[] = [
  {
    kind: "Payments",
    items: [
      { name: "Stripe", stage: "first" },
      { name: "PayPal", stage: "next" },
      { name: "Paddle", stage: "later" },
      { name: "Lemon Squeezy", stage: "later" },
    ],
  },
  {
    kind: "Banking",
    items: [
      { name: "Bank statement import", stage: "next" },
      { name: "Mercury", stage: "later" },
      { name: "Bank feed aggregator", stage: "later" },
    ],
  },
  {
    kind: "Accounting",
    items: [
      { name: "Xero", stage: "next" },
      { name: "QuickBooks", stage: "later" },
      { name: "CSV / ledger import", stage: "next" },
    ],
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Integrations"
          title="None of these are connected yet."
          lede="Reconciliation needs at least two sources that disagree, so TrueNett is designed around three kinds of source from the start: payments, banking and accounting. Stripe is where we begin because it is where our early partners' revenue begins — it is not the extent of the product. The order below is a plan, and design partners move things up it."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal
              key={g.kind}
              delay={gi * 0.07}
              className="line rounded-2xl border bg-panel p-6"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-fg-dim">
                {g.kind}
              </p>
              <ul className="mt-5 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex flex-wrap items-center justify-between gap-2"
                  >
                    <span className="text-sm font-medium text-fg">{it.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${STAGE[it.stage].pill}`}
                    >
                      {STAGE[it.stage].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-fg-dim">
            Read-only access is the design intent for every integration: TrueNett needs to
            read records to reconcile them and has no reason to move money, issue refunds or
            write back to your ledger. No connection is implemented today, so treat that as
            a commitment we are building to, not a feature to verify.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
