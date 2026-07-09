import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const personas = [
  {
    who: "YouTubers",
    pain: "AdSense, sponsorships, memberships and merch all pay differently.",
    gain: "One net figure across every income stream — and which ones actually carry the channel.",
  },
  {
    who: "Freelancers",
    pain: "PayPal fees, Wise transfers, late invoices and quarterly-tax guesswork.",
    gain: "What each client is really worth after fees and FX, plus a running tax reserve.",
  },
  {
    who: "Agencies",
    pain: "Retainers in, contractor payouts and software costs right back out.",
    gain: "True margin per client — so you can fire the ones quietly losing you money.",
  },
  {
    who: "Indie hackers",
    pain: "Stripe MRR looks great; hosting, APIs and churn tell another story.",
    gain: "Real profit per product, not vanity MRR. Know when you can go full-time.",
  },
  {
    who: "Course creators",
    pain: "Gumroad's 10%, refund windows, and affiliate cuts eat launches.",
    gain: "Launch post-mortems with true net per product — and refund patterns to fix.",
  },
  {
    who: "Shopify stores",
    pain: "Revenue is easy. Profit after fees, apps, shipping and ads is a mystery.",
    gain: "Contribution margin per month without a 40-tab spreadsheet.",
  },
  {
    who: "Consultants",
    pain: "Multiple currencies, wire fees, and expenses scattered across cards.",
    gain: "A clean per-engagement P&L you can glance at between calls.",
  },
  {
    who: "Newsletter writers",
    pain: "Paid subs on one platform, sponsors on another, referrals on a third.",
    gain: "Total take-home per issue and per sponsor — instantly.",
  },
  {
    who: "Coaches",
    pain: "Session payments, program sales and payment plans across processors.",
    gain: "Which offers are profitable after refunds and fees — not just popular.",
  },
];

export default function Personas() {
  return (
    <section className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who it's for"
          title={
            <>
              If you get paid by a platform, the platform is{" "}
              <span className="accent-serif">rounding up</span> on your behalf.
            </>
          }
          lede="TrueNett is built for anyone whose income arrives through processors and marketplaces — which, in 2026, is almost everyone working for themselves."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal
              key={p.who}
              delay={(i % 3) * 0.06}
              className="line rounded-2xl border bg-panel p-6 transition-colors duration-300 hover:border-white/16"
            >
              <h3 className="text-[15px] font-semibold text-fg">{p.who}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-dim">{p.pain}</p>
              <p className="mt-3 flex gap-2 text-sm leading-relaxed text-fg-mid">
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
