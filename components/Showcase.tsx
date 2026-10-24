import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const callouts = [
  {
    n: 1,
    title: "The difference, stated plainly",
    body: "What the two records say, what they should say, and how far apart they are — before any interpretation is offered.",
  },
  {
    n: 2,
    title: "Evidence, with its source",
    body: "Every fact used to open the exception is listed with where it came from and when it was observed, so the reasoning can be checked rather than trusted.",
  },
  {
    n: 3,
    title: "A hypothesis, labelled as one",
    body: "TrueNett will suggest the likely cause and the check that would prove it. Until that check passes, it stays an unverified hypothesis — never a conclusion.",
  },
];

const evidence = [
  ["Payout report · payment platform", "po_1Qk2vB total $12,004.19", "Oct 14, 02:11 UTC"],
  ["Bank feed · Mercury ••4417", "ACH credit $11,996.19", "Oct 14, 16:40 UTC"],
  ["Bank feed · description", "“WIRE FEE” on the same statement day", "Oct 14, 16:40 UTC"],
  ["Accounting ledger", "No bank-fee entry for October", "Oct 23, 09:02 UTC"],
];

export default function Showcase() {
  return (
    <section
      id="exceptions"
      className="line overflow-hidden border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside an exception"
          title={
            <>
              Not “something is off”. The{" "}
              <span className="accent-serif">records</span>, the evidence, and what to check
              next.
            </>
          }
          lede="An exception is only useful if it can be resolved by someone who did not find it. Each one carries the two sides of the difference, the evidence behind it, and an explicit line between what is confirmed and what is still a guess."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="relative">
            <div className="line relative rounded-2xl border bg-panel p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-fg">
                  EXC-104 · Deposit smaller than payout
                </p>
                <span className="rounded-full bg-loss/12 px-2.5 py-0.5 text-[11px] font-medium text-loss">
                  Exception · open
                </span>
              </div>

              {/* The two sides */}
              <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                <span
                  className="hotspot absolute -left-3 -top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-base"
                  aria-hidden="true"
                >
                  1
                </span>
                <div className="line rounded-xl border bg-panel-2 p-4">
                  <p className="text-[11px] text-fg-dim">Payment platform</p>
                  <p className="tnum mt-1 text-xl font-semibold text-fg">$12,004.19</p>
                  <p className="mt-1 text-[11px] text-fg-dim">
                    Payout po_1Qk2vB · 287 charges, 2 refunds
                  </p>
                </div>
                <div className="line rounded-xl border bg-panel-2 p-4">
                  <p className="text-[11px] text-fg-dim">Bank</p>
                  <p className="tnum mt-1 text-xl font-semibold text-fg">$11,996.19</p>
                  <p className="mt-1 text-[11px] text-fg-dim">
                    ACH credit · Mercury ••4417 · Oct 14
                  </p>
                </div>
              </div>
              <p className="tnum mt-3 text-[12px] text-loss">
                Difference −$8.00 · 0.07% of the payout
              </p>

              {/* Evidence */}
              <div className="line relative mt-7 rounded-xl border bg-panel-2 p-4">
                <span
                  className="hotspot absolute -right-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-base"
                  aria-hidden="true"
                >
                  2
                </span>
                <p className="text-[11px] font-medium text-fg-mid">Evidence collected</p>
                <ul className="mt-3 space-y-2.5">
                  {evidence.map(([source, fact, seen]) => (
                    <li key={source} className="flex flex-wrap items-baseline gap-x-2 text-[11px]">
                      <span className="text-fg-dim">{source}</span>
                      <span className="font-medium text-fg-mid">{fact}</span>
                      <span className="tnum ml-auto text-fg-faint">{seen}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hypothesis vs confirmed */}
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                <span
                  className="hotspot absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-base"
                  aria-hidden="true"
                >
                  3
                </span>
                <div className="rounded-xl border border-warn/25 bg-warn/[0.05] p-4">
                  <p className="text-[11px] font-medium text-warn">Unverified hypothesis</p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-fg-mid">
                    An $8.00 incoming-wire fee was deducted by the bank and is not itemized
                    in the feed.
                  </p>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-fg-dim">
                    Checks that would confirm it: the statement PDF for Oct 14, or the fee
                    schedule for incoming ACH. Confirm once and TrueNett recognises the
                    pattern next time.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-500/25 bg-brand-500/[0.05] p-4">
                  <p className="text-[11px] font-medium text-brand-300">
                    Confirmed cause · EXC-098
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-fg-mid">
                    A $340.00 refund was issued after the payout window closed, so it reduces
                    the next payout instead of this one.
                  </p>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-fg-dim">
                    Timing difference, not a loss. Evidence: refund created Sep 30, 18:42
                    UTC; payout window closed Sep 30, 00:00 UTC.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[11px] text-fg-faint">
                Illustrative exception and data — not a live account.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {callouts.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08} className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-base">
                  {c.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-fg">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-mid">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
