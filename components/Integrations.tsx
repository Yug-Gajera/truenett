import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const integrations = [
  { name: "Stripe", status: "At launch" },
  { name: "Lemon Squeezy", status: "At launch" },
  { name: "Gumroad", status: "At launch" },
  { name: "PayPal", status: "At launch" },
  { name: "Shopify", status: "Coming soon" },
  { name: "Paddle", status: "Coming soon" },
  { name: "Google AdSense", status: "Coming soon" },
  { name: "Wise", status: "Coming soon" },
  { name: "Bank accounts", status: "On the roadmap" },
] as const;

export default function Integrations() {
  return (
    <section className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Integrations"
          title="Wherever you get paid, we reconcile it."
          lede="Official APIs, read-only access, historical import. Don't see your platform? CSV import covers everything else — and waitlist members vote on what we build next."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
          {integrations.map((integration, i) => (
            <Reveal
              key={integration.name}
              delay={(i % 3) * 0.06}
              className="line group flex flex-col items-center justify-center gap-2 rounded-2xl border bg-panel px-4 py-8 transition-colors duration-300 hover:border-white/16 hover:bg-panel-2"
            >
              <span className="text-base font-semibold tracking-tight text-fg">
                {integration.name}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                  integration.status === "At launch"
                    ? "bg-brand-500/15 text-brand-400"
                    : "bg-white/6 text-fg-dim"
                }`}
              >
                {integration.status}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
