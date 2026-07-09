import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "@/lib/faqs";

/**
 * Native <details>/<summary> accordion: keyboard-accessible, zero JS,
 * and the full answers stay in the HTML for SEO.
 */
export default function Faq() {
  return (
    <section id="faq" className="line border-t py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Fair questions, straight answers."
          lede={
            <>
              Anything else? Email{" "}
              <a href="mailto:hello@truenett.com" className="text-fg underline underline-offset-4 hover:text-brand-300">
                hello@truenett.com
              </a>{" "}
              — a founder replies.
            </>
          }
        />

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={Math.min(i * 0.02, 0.12)}>
              <details className="faq line group rounded-2xl border bg-panel transition-colors hover:border-white/16 open:border-white/16">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-medium text-fg">
                  {faq.q}
                  <svg
                    className="faq-chevron h-4 w-4 shrink-0 text-fg-dim"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-fg-mid">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
