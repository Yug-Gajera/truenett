import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const youGet = [
  "A working session on your actual close — where the records come from and where they stop agreeing",
  "Direct influence on matching rules, statuses and which integration is built next",
  "First access as each piece becomes usable, starting with record collection",
  "Pricing agreed with you before you are ever asked to pay for anything",
];

const weAsk = [
  "A 30-minute conversation about how you reconcile today",
  "Honest reactions to early, unfinished work",
  "Eventually, read-only access to a system or two — on your terms, when you're ready",
];

const commitments = [
  {
    title: "No credentials in the first conversation",
    body: "We start with how your close works. Nothing is connected, and we don't ask for logins, keys or statements to have that conversation.",
  },
  {
    title: "Read-only by design",
    body: "Reconciliation requires reading records, never moving money. When integrations exist they will request read scopes only — and we'll show you the scopes before you grant them.",
  },
  {
    title: "Your data stays yours",
    body: "Anything you share during the program is used to build and test reconciliation for you, is never sold or shared, and is deleted when you ask.",
  },
];

export default function Pricing() {
  return (
    <section id="early-access" className="line border-t bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-lg">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-brand-400">
              Early access
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tightest text-fg sm:text-[2.5rem] sm:leading-[1.15]">
              No price yet. We haven't <span className="accent-serif">earned</span> one.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-mid">
              <p>
                Reconciliation is only worth paying for once it is reliably right, and we are
                still learning what right looks like across real stacks. Publishing a plan
                and a monthly figure today would be a guess dressed up as a commitment.
              </p>
              <p>
                So instead of a pricing table, we are recruiting a small number of design
                partners — SaaS teams who close their month across a processor, a bank and a
                ledger, and who are willing to show us where that breaks.
              </p>
              <p className="text-fg-dim">
                When pricing exists it will be set with the people who helped build the
                product, and announced to them first.
              </p>
            </div>

            <dl className="mt-10 space-y-6">
              {commitments.map((c) => (
                <div key={c.title}>
                  <dt className="text-[15px] font-semibold text-fg">{c.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-fg-dim">{c.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="w-full max-w-md lg:justify-self-end">
            <div className="relative rounded-2xl border border-brand-500/40 bg-panel p-8 shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[15px] font-semibold text-fg">Design partner program</h3>
                <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-[12px] font-medium text-brand-400">
                  Open
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-mid">
                A small group, onboarded one at a time, while the matching engine is still
                being shaped.
              </p>

              <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.14em] text-fg-dim">
                What you get
              </p>
              <ul className="mt-4 space-y-3 text-sm text-fg-mid">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3 leading-snug">
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
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.14em] text-fg-dim">
                What we ask
              </p>
              <ul className="mt-4 space-y-3 text-sm text-fg-dim">
                {weAsk.map((item) => (
                  <li key={item} className="flex gap-3 leading-snug">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-fg-faint" />
                    {item}
                  </li>
                ))}
              </ul>

              <CtaButton location="pricing" variant="brand" size="lg" className="mt-8 w-full">
                Join early access
              </CtaButton>
              <p className="mt-4 text-center text-[13px] text-fg-dim">
                Email only to join. We reply with a few questions about your stack — no
                payment details, ever.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
