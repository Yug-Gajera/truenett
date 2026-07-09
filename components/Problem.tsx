import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";

const deductions = [
  { label: "Platform & processor fees", amount: "−$5,400", pct: 14 },
  { label: "Refunds & chargebacks", amount: "−$4,200", pct: 11 },
  { label: "Currency conversion loss", amount: "−$1,800", pct: 5 },
  { label: "Software & subscriptions", amount: "−$3,600", pct: 9 },
  { label: "Estimated taxes", amount: "−$24,000", pct: 61 },
];

export default function Problem() {
  return (
    <section id="problem" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Your revenue number is a <span className="accent-serif">headline</span>. It's
              not the story.
            </>
          }
          lede="Every platform leads with gross revenue — the number before their cut, before refunds, before taxes. It's the number that makes them look good, not the one that pays your rent. Here's what a “$120K year” actually looks like."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
          {/* What the dashboard says */}
          <Reveal className="line flex flex-col rounded-2xl border bg-panel p-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-fg-dim">
              What Stripe tells you
            </p>
            <div className="flex flex-1 flex-col items-start justify-center py-10">
              <p className="tnum text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
                $120,000
              </p>
              <p className="mt-3 text-sm text-fg-dim">Gross volume · Looks like a great year</p>
            </div>
            <p className="line border-t pt-5 text-sm leading-relaxed text-fg-dim">
              This is the number you screenshot, celebrate, and plan your life around. It is
              also a number you will never receive.
            </p>
          </Reveal>

          {/* What actually happened */}
          <Reveal delay={0.1} className="line rounded-2xl border bg-panel p-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-brand-400">
              What TrueNett tells you
            </p>
            <dl className="tnum mt-6 space-y-4 text-sm">
              <div className="flex items-baseline justify-between">
                <dt className="text-fg-mid">Gross revenue</dt>
                <dd className="font-medium text-fg">$120,000</dd>
              </div>
              {deductions.map((d, i) => (
                <div key={d.label}>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-fg-dim">{d.label}</dt>
                    <dd className="text-loss">{d.amount}</dd>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="leak-bar h-full rounded-full bg-loss/60"
                      style={{ width: `${d.pct}%`, "--d": `${0.15 + i * 0.12}s` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
              <div className="line flex items-baseline justify-between border-t pt-4">
                <dt className="flex items-center gap-2 font-medium text-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  What actually landed
                </dt>
                <dd className="text-2xl font-semibold text-brand-400">
                  <Counter value={81000} prefix="$" />
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-fg-dim">
              $39,000 — nearly a third — never reached you. Most people find out in April,
              from their accountant. TrueNett shows you in real time, all year.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
