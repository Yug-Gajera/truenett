import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const leaks = [
  {
    title: "Platform fees",
    stat: "3–10%",
    body: "Every marketplace takes its cut before you see a cent — Gumroad up to 10%, app stores up to 30%. It's deducted quietly, per sale.",
  },
  {
    title: "Processor fees",
    stat: "2.9% + 30¢",
    body: "Stripe, PayPal and friends charge per transaction. On small-ticket sales, that flat 30¢ alone can be 3% of the price.",
  },
  {
    title: "Refunds",
    stat: "2–5%",
    body: "The sale you already celebrated, un-sold. Worse: most processors keep their fee even when they return the customer's money.",
  },
  {
    title: "Chargebacks",
    stat: "$15–25 each",
    body: "A dispute costs you the sale, the product, and a penalty fee on top — whether or not you win the dispute.",
  },
  {
    title: "Currency conversion",
    stat: "1–4%",
    body: "Selling globally means settling in currencies you didn't choose, at rates you didn't set. The loss never appears as a line item — until now.",
  },
  {
    title: "Taxes",
    stat: "15–35%",
    body: "The biggest deduction of all, and the only one nobody dashboards. Spending your gross like it's yours is how tax-season panic happens.",
  },
  {
    title: "Software subscriptions",
    stat: "$200–800/mo",
    body: "Notion, Figma, hosting, email tools, that AI thing you tried in March. Each is small. Together they're a salary.",
  },
  {
    title: "Ads & contractors",
    stat: "varies",
    body: "Editors, designers, ad spend that 'probably paid for itself.' Without tracking it against revenue, you're guessing.",
  },
];

export default function MoneyLeak() {
  return (
    <section className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The hidden money leak"
          title={
            <>
              It's not one hole in the bucket. It's <span className="accent-serif">eight</span>.
            </>
          }
          lede="No single deduction feels big enough to track. That's exactly why, combined, they quietly take 20–40% of what you earn. TrueNett itemizes every one of them, automatically."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leaks.map((leak, i) => (
            <Reveal
              key={leak.title}
              delay={(i % 4) * 0.07}
              className="line group rounded-2xl border bg-panel p-6 transition-colors duration-300 hover:border-white/16 hover:bg-panel-2"
            >
              <p className="tnum text-2xl font-semibold tracking-tight text-loss/90">
                {leak.stat}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-fg">{leak.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">{leak.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
