import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** One payout, decomposed into the records that have to agree with it. */
const records = [
  {
    source: "Payment platform",
    items: [
      ["412 charges", "$21,860.00", "what customers were billed"],
      ["Processing fees", "−$687.38", "deducted per charge, not per payout"],
      ["3 refunds", "−$1,210.00", "two for charges from last month"],
      ["Payout po_1Qm4kR", "$18,204.62", "one transfer covering all of the above"],
    ],
  },
  {
    source: "Bank",
    items: [
      ["ACH credit · Oct 20", "$18,204.62", "one line, no breakdown"],
    ],
  },
  {
    source: "Accounting",
    items: [
      ["Invoices raised", "$21,860.00", "issued before the money moved"],
      ["Credit notes", "−$1,210.00", "one still missing on Oct 23"],
      ["Fee expense", "−$687.38", "needs the payout to be itemized"],
    ],
  },
];

export default function Problem() {
  return (
    <section id="problem" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why this is hard"
          title={
            <>
              One payout is already <span className="accent-serif">eight</span> records in
              three systems.
            </>
          }
          lede="A single bank deposit is the net of hundreds of charges, the fees taken out of them, and refunds that may belong to a different month entirely. Your accounting ledger holds a third version of the same events. Reconciliation is the work of proving those three stories are the same story — and most teams do it by hand, in a spreadsheet, once a month."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {records.map((group, gi) => (
            <Reveal
              key={group.source}
              delay={gi * 0.08}
              className="line flex flex-col rounded-2xl border bg-panel p-6"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-fg-dim">
                {group.source}
              </p>
              <dl className="tnum mt-6 flex-1 space-y-4 text-sm">
                {group.items.map(([label, amount, note]) => (
                  <div key={label}>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-fg-mid">{label}</dt>
                      <dd
                        className={
                          amount.startsWith("−") ? "shrink-0 text-loss" : "shrink-0 text-fg"
                        }
                      >
                        {amount}
                      </dd>
                    </div>
                    <p className="mt-1 text-[12px] leading-snug text-fg-dim">{note}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-fg-mid">
            Reconciling inside one platform is the easy half — the platform knows its own
            fees. The hard half is between systems, where a refund can land in the wrong
            month, a wire fee can shave $8 off a deposit with no line item anywhere, and the
            same payment can exist three times under three different identifiers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
