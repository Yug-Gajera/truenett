import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const modes = [
  {
    kicker: "Through the month",
    title: "Continuous reconciliation",
    body: "Records are matched as they arrive, so the state of the month is always current. You find the duplicate charge in the week it happened, not six weeks later when nobody remembers the customer.",
    points: [
      "New charges, fees, refunds, payouts and deposits matched as each source publishes them",
      "Records waiting on an external source are held as awaiting evidence, not reported as problems",
      "Exceptions surface the day the evidence contradicts itself",
      "No batch run to trigger and nothing to re-import",
    ],
  },
  {
    kicker: "At month, quarter or any range",
    title: "Period-end reconciliation",
    body: "Choose a period and review it against the same matched records. Nothing is recalculated from scratch — closing is a question of what is still open, and why.",
    points: [
      "Select a month, a quarter or an arbitrary date range",
      "See matched value, open items and unexplained differences for that period",
      "Every open item listed by record, amount and reason it is still open",
      "A reconciliation summary you can take to your accountant",
    ],
  },
];

export default function Modes() {
  return (
    <section id="modes" className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Two rhythms, one dataset"
          title={
            <>
              Reconcile all month, or reconcile a{" "}
              <span className="accent-serif">month</span>.
            </>
          }
          lede="These are usually two different tools, or one tool and a spreadsheet. They are the same records seen at two speeds, so neither view can drift from the other."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-2">
          {modes.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 0.1}
              className="line flex flex-col rounded-2xl border bg-panel p-8"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-brand-400">
                {m.kicker}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-mid">{m.body}</p>
              <ul className="line mt-6 space-y-3 border-t pt-6 text-sm leading-relaxed text-fg-dim">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <svg
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-400"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
