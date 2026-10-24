import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Stage = "live" | "design" | "planned";

const STAGE: Record<Stage, { label: string; pill: string }> = {
  live: { label: "Available now", pill: "bg-brand-500/15 text-brand-300" },
  design: { label: "In design with partners", pill: "bg-warn/12 text-warn" },
  planned: { label: "Planned", pill: "bg-white/6 text-fg-dim" },
};

const capabilities: { title: string; body: string; stage: Stage }[] = [
  {
    title: "This website and the design-partner list",
    body: "The page you are reading and the signup that puts you in touch with us. That is the whole of what exists as a running service today.",
    stage: "live",
  },
  {
    title: "Record collection from connected systems",
    body: "Pulling charges, fees, refunds, payouts, bank lines and accounting entries from each source, with the source and observation time kept on every record.",
    stage: "design",
  },
  {
    title: "Cross-system matching and evidence",
    body: "Matching payouts to their component charges and to bank deposits, charges to invoices, refunds to credit notes — with the evidence behind each match retained.",
    stage: "design",
  },
  {
    title: "Exception detection and investigation",
    body: "Missing records, mismatched amounts, duplicates and timing differences, each opened with its evidence and the checks that would confirm the cause.",
    stage: "design",
  },
  {
    title: "Period close and reconciliation summary",
    body: "Reviewing a chosen month, quarter or date range against the same records, and producing a summary of what reconciled and what is still open.",
    stage: "design",
  },
  {
    title: "Multi-entity and multi-currency support",
    body: "Separate entities or clients with their own sources, and settlement-rate handling so a currency difference is identified as one rather than hidden in a total.",
    stage: "planned",
  },
  {
    title: "Learned matching rules",
    body: "Confirming a cause once — a bank wire fee, a cut-off refund — so the same pattern is recognised and explained the next time it appears.",
    stage: "planned",
  },
  {
    title: "Exports and an API",
    body: "Taking matched records, open items and summaries out of TrueNett in a form your accountant or your own systems can use.",
    stage: "planned",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Build status"
          title="What exists today, and what doesn't."
          lede="TrueNett is pre-launch. The workflow on this page is the product we are designing with early partners, not a product you can sign into — and we would rather say so here than in a demo call."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 4) * 0.05}
              className="flex flex-col bg-panel p-6 transition-colors duration-300 hover:bg-panel-2"
            >
              <span
                className={`self-start rounded-full px-2 py-0.5 text-[10px] font-medium ${STAGE[c.stage].pill}`}
              >
                {STAGE[c.stage].label}
              </span>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug text-fg">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
