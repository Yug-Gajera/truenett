import Reveal from "./Reveal";

const stats = [
  { value: "9", label: "platforms reconciled, one number out" },
  { value: "28%", label: "avg. gap between gross and true net" },
  { value: "2 min", label: "from signup to your first real number" },
  { value: "$0", label: "of your money we can touch — read-only" },
];

/** Pre-launch social proof: concrete promises instead of fake logos. */
export default function TrustBar() {
  return (
    <section className="line border-t py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <p className="tnum text-3xl font-semibold tracking-tight text-fg">{s.value}</p>
              <p className="mx-auto mt-2 max-w-[190px] text-[13px] leading-snug text-fg-dim">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
