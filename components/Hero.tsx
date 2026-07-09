import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Soft brand glow behind the mockup */}
      <div
        className="pointer-events-none absolute left-1/2 top-[62%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="line inline-flex items-center gap-2 rounded-full border bg-panel px-3.5 py-1.5 text-[13px] font-medium text-fg-mid">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Early access open · Founding price locked at $15/mo
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 text-[2.9rem] font-semibold leading-[1.04] tracking-tightest text-fg sm:text-6xl md:text-[4.5rem]">
              Revenue is what they report.
              <br />
              <span className="accent-serif text-brand-300">Net</span> is what you keep.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-fg-mid">
              TrueNett connects to Stripe, PayPal, Gumroad, Shopify and every other platform
              that pays you — then subtracts the fees, refunds, taxes and expenses they don't
              show you. One dashboard. One honest number.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton location="hero" variant="brand" size="lg" className="w-full sm:w-auto">
                Get early access
              </CtaButton>
              <a
                href="#how-it-works"
                className="line inline-flex h-12 w-full items-center justify-center rounded-lg border bg-panel px-7 text-[15px] font-medium text-fg-mid transition-colors hover:border-white/20 hover:text-fg sm:w-auto"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-[13px] text-fg-dim">
              No credit card · Read-only connections · 2-minute setup
            </p>
          </Reveal>
        </div>

        {/* Platform names converging into the product */}
        <Reveal delay={0.25} className="mx-auto mt-16 max-w-4xl">
          <div
            className="flex items-center justify-center gap-x-5 gap-y-2 px-2 text-[12px] font-medium tracking-wide text-fg-dim sm:gap-x-9 sm:text-[13px]"
            aria-label="Supported platforms"
          >
            <span>Stripe</span>
            <span>Gumroad</span>
            <span className="hidden sm:inline">Lemon&nbsp;Squeezy</span>
            <span>PayPal</span>
            <span className="hidden sm:inline">Shopify</span>
            <span>AdSense</span>
          </div>
          <svg
            className="mx-auto -mb-px mt-3 block h-14 w-full max-w-2xl"
            viewBox="0 0 560 56"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path className="flow-line" d="M40 0 C40 40, 280 16, 280 56" />
            <path className="flow-line" d="M136 0 C136 40, 280 16, 280 56" />
            <path className="flow-line" d="M232 0 C232 40, 280 16, 280 56" />
            <path className="flow-line" d="M328 0 C328 40, 280 16, 280 56" />
            <path className="flow-line" d="M424 0 C424 40, 280 16, 280 56" />
            <path className="flow-line" d="M520 0 C520 40, 280 16, 280 56" />
            <path className="flow-pulse" d="M40 0 C40 40, 280 16, 280 56" />
            <path className="flow-pulse d2" d="M328 0 C328 40, 280 16, 280 56" />
            <path className="flow-pulse d3" d="M520 0 C520 40, 280 16, 280 56" />
          </svg>
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
