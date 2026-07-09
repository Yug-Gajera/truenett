import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const before = [
  "Ten browser tabs and a CSV folder named “finances_FINAL_v3”",
  "An hour of copy-pasting every month — when you remember",
  "Numbers that never quite match your bank balance",
  "Tax estimates done in your head, badly, in April",
  "A vague, low-grade anxiety about whether you're actually profitable",
];

const after = [
  "One pinned tab with one reconciled number",
  "Zero manual work — it updates as payouts settle",
  "A net figure your bank statement actually agrees with",
  "A tax reserve that grows with every sale",
  "The quiet confidence of knowing exactly where you stand",
];

export default function BeforeAfter() {
  return (
    <section className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Before / after"
          title={
            <>
              The same business. A very different{" "}
              <span className="accent-serif">feeling</span>.
            </>
          }
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-2">
          <Reveal className="line rounded-2xl border bg-panel p-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-fg-dim">
              Life before
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-fg-dim">
              {before.map((item) => (
                <li key={item} className="flex gap-3">
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
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-brand-500/40 bg-panel p-8 shadow-[0_0_60px_-16px_rgba(16,185,129,0.2)]"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-brand-400">
              Life with TrueNett
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-fg-mid">
              {after.map((item) => (
                <li key={item} className="flex gap-3">
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
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
