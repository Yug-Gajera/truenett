import Counter from "./Counter";

/**
 * The hero product mockup — a full TrueNett dashboard rendered in pure
 * HTML/SVG so it stays crisp at every size, ships zero image bytes, and can
 * be art-directed like any other component.
 */

const platforms = [
  { name: "Stripe", gross: "$21,410", net: "$19,882", pct: 74, color: "#635bff" },
  { name: "Gumroad", gross: "$9,204", net: "$8,110", pct: 41, color: "#ff90e8" },
  { name: "Lemon Squeezy", gross: "$7,880", net: "$7,214", pct: 34, color: "#ffc233" },
  { name: "PayPal", gross: "$5,120", net: "$4,610", pct: 22, color: "#60a5fa" },
];

const sidebar = ["Overview", "Transactions", "Expenses", "Platforms", "Reports", "Settings"];

export default function DashboardMock() {
  return (
    <div
      className="line relative overflow-hidden rounded-2xl border bg-panel shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_40px_120px_-30px_rgba(0,0,0,0.9)]"
      role="img"
      aria-label="TrueNett dashboard showing true net income of $41,844 after all fees, refunds and taxes across four platforms"
    >
      {/* Window chrome */}
      <div className="line flex items-center gap-1.5 border-b px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="mx-auto rounded-md bg-white/5 px-8 py-1 text-[11px] text-fg-dim">
          app.truenett.com
        </span>
        <span className="w-[54px]" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="line hidden w-44 shrink-0 border-r p-4 sm:block">
          <div className="space-y-1">
            {sidebar.map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-3 py-1.5 text-[12px] ${
                  i === 0 ? "bg-white/8 font-medium text-fg" : "text-fg-dim"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-brand-500/10 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-brand-400">
              Health score
            </p>
            <p className="tnum mt-1 text-xl font-semibold text-fg">87</p>
            <p className="text-[10px] text-fg-dim">Strong margins</p>
          </div>
        </div>

        {/* Main panel */}
        <div className="min-w-0 flex-1 p-5 sm:p-6">
          <div className="flex items-baseline justify-between">
            <p className="text-[13px] font-medium text-fg">Overview</p>
            <p className="text-[11px] text-fg-dim">June 2026 · All platforms · USD</p>
          </div>

          {/* KPI row */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="line rounded-xl border bg-panel-2 p-4">
              <p className="text-[11px] text-fg-dim">True net income</p>
              <p className="mt-1 text-lg font-semibold text-fg sm:text-2xl">
                <Counter value={41844} prefix="$" />
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-brand-400">+12.4% vs May</p>
            </div>
            <div className="line rounded-xl border bg-panel-2 p-4">
              <p className="text-[11px] text-fg-dim">Gross revenue</p>
              <p className="tnum mt-1 text-lg font-semibold text-fg-mid sm:text-2xl">$58,210</p>
              <p className="mt-0.5 text-[11px] text-fg-dim">what platforms report</p>
            </div>
            <div className="line rounded-xl border bg-panel-2 p-4">
              <p className="text-[11px] text-fg-dim">Total deductions</p>
              <p className="tnum mt-1 text-lg font-semibold text-loss sm:text-2xl">−$16,366</p>
              <p className="mt-0.5 text-[11px] text-fg-dim">28.1% of gross</p>
            </div>
          </div>

          {/* Net income chart */}
          <div className="line mt-3 rounded-xl border bg-panel-2 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-fg-dim">Net income · last 6 months</p>
              <div className="flex gap-3 text-[10px] text-fg-dim">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Net
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" /> Gross
                </span>
              </div>
            </div>
            <svg viewBox="0 0 560 140" className="mt-3 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="netFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[28, 56, 84, 112].map((y) => (
                <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="rgba(255,255,255,0.05)" />
              ))}
              <path
                d="M0 74 C60 70, 100 62, 160 58 S 280 52, 340 40 S 480 30, 560 14"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.5"
              />
              <path
                d="M0 108 C60 104, 100 96, 160 92 S 280 84, 340 66 S 480 52, 560 34 L560 140 L0 140 Z"
                fill="url(#netFill)"
              />
              <path
                d="M0 108 C60 104, 100 96, 160 92 S 280 84, 340 66 S 480 52, 560 34"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
              />
              <circle cx="560" cy="34" r="3.5" fill="#34d399" />
            </svg>
          </div>

          {/* Platform breakdown */}
          <div className="line mt-3 rounded-xl border bg-panel-2 p-4">
            <p className="text-[11px] text-fg-dim">Net by platform</p>
            <div className="tnum mt-3 space-y-2.5">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-3 text-[11px]">
                  <span className="w-24 shrink-0 truncate text-fg-mid sm:w-28">{p.name}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <span
                      className="block h-full rounded-full"
                      style={{ width: `${p.pct}%`, background: p.color }}
                    />
                  </span>
                  <span className="w-16 shrink-0 text-right font-medium text-fg">{p.net}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
