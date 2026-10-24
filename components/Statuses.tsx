import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const statuses = [
  {
    label: "Matched",
    dot: "bg-brand-400",
    meaning: "Records in two or more systems that agree, with the evidence that proves it stored alongside the match.",
    example: "A payout of $18,204.62 and a bank credit of $18,204.62 on the same day, with the payout's own report listing the charges behind it.",
    action: "Nothing to do. Counted as reconciled.",
  },
  {
    label: "Awaiting evidence",
    dot: "bg-info",
    meaning: "A record that is expected to have a counterpart, where the counterpart has not been published by its source yet.",
    example: "A payout initiated yesterday that the bank feed will show tomorrow.",
    action: "Held, not flagged. It becomes an exception only if the evidence never arrives.",
  },
  {
    label: "Possible match",
    dot: "bg-warn",
    meaning: "Two records that probably belong together, where the evidence is not strong enough to say so on its own.",
    example: "An invoice for EUR 1,150.00 and a settled charge of USD 1,225.00 — plausible at the day's rate, but not proven.",
    action: "Proposed for a person to confirm or reject. Never silently counted as matched.",
  },
  {
    label: "Exception",
    dot: "bg-loss",
    meaning: "A genuine difference: records that should agree, have all their evidence, and do not.",
    example: "A $12,004.19 payout that arrived as an $11,996.19 deposit — $8.00 unaccounted for.",
    action: "Opened with its records, the size of the difference, and the checks worth running.",
  },
];

export default function Statuses() {
  return (
    <section id="statuses" className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How TrueNett talks about certainty"
          title={
            <>
              A difference and a delay are{" "}
              <span className="accent-serif">not</span> the same thing.
            </>
          }
          lede="Most reconciliation pain comes from tools that treat anything unmatched as a problem, and anything matched as settled. TrueNett keeps four states, and is explicit about which one every record is in and why."
        />

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/8">
          {/* Header row — desktop only */}
          <div className="line hidden border-b bg-panel-2 lg:grid lg:grid-cols-[1fr_1.4fr_1.4fr_1.2fr] lg:gap-6 lg:px-6 lg:py-3">
            {["Status", "What it means", "An example", "What TrueNett does"].map((h) => (
              <p
                key={h}
                className="text-[11px] font-medium uppercase tracking-[0.12em] text-fg-dim"
              >
                {h}
              </p>
            ))}
          </div>

          {statuses.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.05}
              className={`bg-panel px-6 py-6 lg:grid lg:grid-cols-[1fr_1.4fr_1.4fr_1.2fr] lg:gap-6 ${
                i > 0 ? "border-t border-white/[0.06]" : ""
              }`}
            >
              <p className="flex items-center gap-2 text-[15px] font-semibold text-fg">
                <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-mid lg:mt-0">{s.meaning}</p>
              <div className="mt-3 lg:mt-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-fg-faint lg:hidden">
                  An example
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-dim lg:mt-0">{s.example}</p>
              </div>
              <div className="mt-3 lg:mt-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-fg-faint lg:hidden">
                  What TrueNett does
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-dim lg:mt-0">{s.action}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
