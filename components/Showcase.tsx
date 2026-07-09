import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const callouts = [
  {
    n: 1,
    title: "The waterfall",
    body: "Watch gross become net, deduction by deduction. This is the chart your spreadsheet was always trying to be.",
  },
  {
    n: 2,
    title: "Every deduction, itemized",
    body: "Fees, refunds, FX and taxes matched to real transactions — click any line to see exactly which sales it came from.",
  },
  {
    n: 3,
    title: "Alerts that earn their keep",
    body: "TrueNett flags anomalies — a refund spike, fee creep, a margin dropping on one platform — before they cost you a quarter.",
  },
];

// Waterfall bars: [label, xStart%, width%, kind]
const bars = [
  { label: "Gross", x: 0, w: 100, kind: "gross" },
  { label: "Fees", x: 88, w: 12, kind: "loss" },
  { label: "Refunds", x: 80, w: 8, kind: "loss" },
  { label: "FX", x: 77, w: 3, kind: "loss" },
  { label: "Expenses", x: 68, w: 9, kind: "loss" },
  { label: "Taxes", x: 50, w: 18, kind: "loss" },
  { label: "True net", x: 0, w: 50, kind: "net" },
] as const;

function Hotspot({ n, className }: { n: number; className: string }) {
  return (
    <span
      className={`hotspot absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-base ${className}`}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

export default function Showcase() {
  return (
    <section className="line overflow-hidden border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the product"
          title={
            <>
              Your monthly P&L, readable in <span className="accent-serif">ten seconds</span>.
            </>
          }
          lede="This is the view our early users keep open in a pinned tab: gross at the top, true net at the bottom, and every dollar in between accounted for."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Annotated statement mock */}
          <Reveal className="relative">
            <div className="line relative rounded-2xl border bg-panel p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:p-8">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium text-fg">June statement</p>
                <p className="text-[12px] text-fg-dim">All platforms · USD</p>
              </div>

              {/* Waterfall */}
              <div className="relative mt-6">
                <Hotspot n={1} className="-left-3 -top-3" />
                <div className="tnum space-y-2">
                  {bars.map((b) => (
                    <div key={b.label} className="flex items-center gap-3 text-[11px]">
                      <span className="w-16 shrink-0 text-fg-dim">{b.label}</span>
                      <div className="relative h-4 flex-1">
                        <span
                          className={`absolute top-0 h-full rounded-sm ${
                            b.kind === "gross"
                              ? "bg-white/15"
                              : b.kind === "net"
                                ? "bg-brand-500/80"
                                : "bg-loss/50"
                          }`}
                          style={{ left: `${b.x}%`, width: `${b.w}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itemized deductions */}
              <div className="line relative mt-7 rounded-xl border bg-panel-2 p-4">
                <Hotspot n={2} className="-right-2.5 -top-2.5" />
                <dl className="tnum space-y-2.5 text-[12px]">
                  <div className="flex justify-between">
                    <dt className="text-fg-dim">Stripe processing fees · 214 txns</dt>
                    <dd className="text-loss">−$1,644.83</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-fg-dim">Gumroad platform fee · 96 sales</dt>
                    <dd className="text-loss">−$920.40</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-fg-dim">Refunds · 11 orders</dt>
                    <dd className="text-loss">−$912.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-fg-dim">EUR→USD conversion · 4 payouts</dt>
                    <dd className="text-loss">−$186.22</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-fg-dim">Estimated tax reserve · 28%</dt>
                    <dd className="text-loss">−$3,412.19</dd>
                  </div>
                </dl>
              </div>

              {/* Alert */}
              <div className="relative mt-4 flex items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-4">
                <Hotspot n={3} className="-left-2.5 -top-2.5" />
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M8 1.5 15 14H1L8 1.5z" strokeLinejoin="round" />
                  <path d="M8 6v4" strokeLinecap="round" />
                  <circle cx="8" cy="12" r="0.5" fill="currentColor" />
                </svg>
                <div>
                  <p className="text-[12px] font-medium text-amber-200">
                    Refund rate on Gumroad is up 2.1% this month
                  </p>
                  <p className="mt-0.5 text-[11px] text-fg-dim">
                    Mostly on “Preset Pack Vol. 3” — 8 of 11 refunds. Worth a look.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Callouts */}
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
