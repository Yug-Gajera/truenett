import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  ["True net income", "Gross minus everything — the one number the whole product exists for."],
  ["Cash flow", "When money actually arrives and leaves, not when a sale is booked."],
  ["Revenue by platform", "Compare Stripe vs Gumroad vs PayPal on net, not gross."],
  ["Expense tracking", "Subscriptions, contractors and ads — categorized once, deducted forever."],
  ["Refund analytics", "Rates by product and platform, so you can fix the cause, not just eat the cost."],
  ["Chargeback tracking", "Every dispute, its fee, and its outcome in one place."],
  ["Profit trends", "Margins over time. Is the business getting healthier or just bigger?"],
  ["Tax reserve", "Your estimated rate applied continuously — no April surprises."],
  ["Currency normalization", "Every payout converted at settlement rates. FX loss becomes a visible line."],
  ["Forecasting", "Projected net income from your run rate — spendable, not hopeful."],
  ["Financial health score", "Margins, refund rate, expense creep and runway distilled to one score."],
  ["Smart alerts", "Refund spikes, fee changes and anomalies flagged as they happen."],
  ["AI insights", "Plain-English answers: “Why was March down?” — with the receipts."],
  ["Multi-business workspaces", "Separate businesses or clients, plus a combined view across all."],
  ["Reports & CSV export", "Clean monthly statements your accountant will actually thank you for."],
] as const;

export default function FeatureGrid() {
  return (
    <section id="features" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything included"
          title="One subscription. The whole financial picture."
          lede="No feature gates, no add-ons, no 'contact sales' tier. Every account gets everything."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, body], i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 0.05}
              className="group bg-panel p-6 transition-colors duration-300 hover:bg-panel-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 transition-transform duration-300 group-hover:scale-150" />
                <h3 className="text-[15px] font-semibold text-fg">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
