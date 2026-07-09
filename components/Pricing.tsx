import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const included = [
  "Unlimited platform connections",
  "Full transaction & fee reconciliation",
  "Multi-currency FX normalization",
  "Expense tracking & categorization",
  "Tax reserve & forecasting",
  "Smart alerts & AI insights",
  "Multi-business workspaces",
  "Reports & CSV export, anytime",
];

export default function Pricing() {
  return (
    <section id="pricing" className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Philosophy */}
          <Reveal className="max-w-lg">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-brand-400">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tightest text-fg sm:text-[2.5rem] sm:leading-[1.15]">
              One plan. Because the point is <span className="accent-serif">clarity</span>.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-mid">
              <p>
                A pricing page with four tiers and an asterisk would be a strange way to sell
                financial honesty. So: everything TrueNett does, for $15 a month. No
                per-platform surcharges, no locked features, no “Pro” upsell.
              </p>
              <p>
                And the math is comfortably on your side. One forgotten subscription, one
                undisputed chargeback, or one mispriced product costs more than a year of
                TrueNett. Most users find one of those in their first week.
              </p>
              <p className="text-fg-dim">
                Join during early access and $15/mo is locked in for life — the public price
                will be higher.
              </p>
            </div>
          </Reveal>

          {/* Card */}
          <Reveal delay={0.1} className="w-full max-w-md lg:justify-self-end">
            <div className="relative rounded-2xl border border-brand-500/40 bg-panel p-8 shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold text-fg">Everything</h3>
                <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-[12px] font-medium text-brand-400">
                  Founding price
                </span>
              </div>

              <div className="tnum mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tight text-fg">$15</span>
                <span className="text-[15px] font-medium text-fg-dim">/month</span>
              </div>
              <p className="mt-2 text-[13px] text-fg-dim">
                Billed monthly · Cancel anytime · Locked in for life for early users
              </p>

              <ul className="line mt-8 space-y-3 border-t pt-7 text-sm text-fg-mid">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-brand-400"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <CtaButton location="pricing" variant="brand" size="lg" className="mt-8 w-full">
                Lock in $15/mo
              </CtaButton>
              <p className="mt-4 text-center text-[13px] text-fg-dim">
                No credit card required to join the waitlist.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
