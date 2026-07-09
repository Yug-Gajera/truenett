import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * ⚠️ PLACEHOLDER testimonials — fictional people and quotes, written to show
 * the intended layout and tone. Replace with real early-user quotes (with
 * written permission) before launch. Publishing invented testimonials as
 * real ones is an FTC problem, not just a design one.
 */
const testimonials = [
  {
    name: "Maya R.",
    role: "Course creator · 40K students",
    quote:
      "I thought I was clearing $9K a month. TrueNett showed me it was $6,200 after Gumroad's cut, refunds and taxes. Painful for a day — then I raised my prices and actually hit $9K.",
    metric: "Found a 31% gap between gross and net",
  },
  {
    name: "Daniel K.",
    role: "Indie hacker · 2 SaaS products",
    quote:
      "My 'MRR' had FX losses and Stripe fees baked in that I'd never once subtracted. The first thing TrueNett paid for was itself: a $240/mo API subscription I forgot was running.",
    metric: "Recovered $2,880/year in dead subscriptions",
  },
  {
    name: "Priya S.",
    role: "Freelance designer · 3 currencies",
    quote:
      "Getting paid in USD, EUR and INR meant my spreadsheet was fiction. TrueNett normalizes everything and my quarterly tax estimate went from a guess to a number.",
    metric: "Quarterly taxes off by 4%, down from 25%",
  },
  {
    name: "Tom W.",
    role: "Agency founder · 9 clients",
    quote:
      "We ranked clients by revenue for years. Ranked by true margin, our 'biggest' client was #7. We restructured that retainer within a month.",
    metric: "Margin per client, finally visible",
  },
  {
    name: "Lena M.",
    role: "Newsletter · 18K subscribers",
    quote:
      "Substack, sponsors and affiliate payouts each lived in their own tab. Now I know what an issue actually earns me before I commit to a sponsor slot.",
    metric: "3 income streams, one number",
  },
  {
    name: "Arjun P.",
    role: "YouTuber · 350K subs",
    quote:
      "AdSense looks great until you subtract the editor, the thumbnails and the tax you forgot. TrueNett is the first dashboard that shows the channel as a business.",
    metric: "Went from 'feels profitable' to knows",
  },
];

export default function Testimonials() {
  return (
    <section className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Early users"
          title={
            <>
              The first reaction is always the same:{" "}
              <span className="accent-serif">“wait, really?”</span>
            </>
          }
          lede="Seeing your true net for the first time stings for about a day. Then it becomes the most useful number in your business."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 0.06}
              className="line flex flex-col rounded-2xl border bg-panel p-7"
            >
              <p className="flex-1 text-sm leading-relaxed text-fg-mid">“{t.quote}”</p>
              <p className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-brand-400">
                <span className="h-1 w-1 rounded-full bg-brand-400" />
                {t.metric}
              </p>
              <div className="line mt-5 flex items-center gap-3 border-t pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-panel-3 text-[13px] font-semibold text-fg-mid">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-fg">{t.name}</p>
                  <p className="text-[12px] text-fg-dim">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
