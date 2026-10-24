"use client";

import { useState } from "react";

/**
 * The product demonstration: a reconciliation workspace rendered in pure
 * HTML/SVG. Two views — continuous (the month in progress) and period close
 * (a closed month under review) — share one illustrative dataset.
 *
 * All figures are illustrative and internally consistent:
 *   gross charges  214,860.40
 *   − refunds        4,120.00
 *   − fees           6,318.90
 *   = net payouts  204,421.50
 *   bank deposits  204,413.50  → 8.00 unexplained (see EXC-104)
 */

type Status = "matched" | "awaiting" | "possible" | "exception";

const STATUS: Record<Status, { label: string; dot: string; pill: string }> = {
  matched: {
    label: "Matched",
    dot: "bg-brand-400",
    pill: "bg-brand-500/12 text-brand-300",
  },
  awaiting: {
    label: "Awaiting evidence",
    dot: "bg-info",
    pill: "bg-info/12 text-info",
  },
  possible: {
    label: "Possible match",
    dot: "bg-warn",
    pill: "bg-warn/12 text-warn",
  },
  exception: {
    label: "Exception",
    dot: "bg-loss",
    pill: "bg-loss/12 text-loss",
  },
};

const rows: {
  left: string;
  leftMeta: string;
  right: string;
  rightMeta: string;
  amount: string;
  status: Status;
  note: string;
}[] = [
  {
    left: "Stripe payout po_1Qm4kR",
    leftMeta: "412 charges · −$687.38 fees · −$1,210.00 refunds",
    right: "Bank deposit · Mercury ••4417",
    rightMeta: "Oct 20 · ACH credit",
    amount: "$18,204.62",
    status: "matched",
    note: "Payout total equals the deposit; every charge, fee and refund line accounted for.",
  },
  {
    left: "Invoice INV-2048",
    leftMeta: "Accounting ledger · Northwind Labs",
    right: "Stripe charge ch_3PfQ2a",
    rightMeta: "Oct 18 · card · succeeded",
    amount: "$4,800.00",
    status: "matched",
    note: "Invoice, payment and the fee on that payment are linked to one another.",
  },
  {
    left: "Stripe payout po_1Qn8zT",
    leftMeta: "Initiated Oct 23 · expected Oct 24",
    right: "Bank deposit",
    rightMeta: "Not yet in the bank feed",
    amount: "$9,431.08",
    status: "awaiting",
    note: "Nothing is wrong yet. The deposit evidence has not arrived — TrueNett waits before calling it a difference.",
  },
  {
    left: "Invoice INV-2061",
    leftMeta: "Accounting ledger · Kestrel GmbH · EUR 1,150.00",
    right: "Stripe charge ch_3PgD7m",
    rightMeta: "Oct 21 · settled USD 1,225.00",
    amount: "−$25.00",
    status: "possible",
    note: "Amounts differ by $25.00. Likely the EUR settlement rate, but unverified — a person confirms before this counts as matched.",
  },
  {
    left: "Stripe payout po_1Qk2vB",
    leftMeta: "Payout report total $12,004.19",
    right: "Bank deposit · Mercury ••4417",
    rightMeta: "Oct 14 · $11,996.19",
    amount: "−$8.00",
    status: "exception",
    note: "A real difference with evidence on both sides. Routed to exceptions as EXC-104.",
  },
];

const counters: { label: string; value: string; status: Status }[] = [
  { label: "Matched", value: "1,284", status: "matched" },
  { label: "Awaiting evidence", value: "37", status: "awaiting" },
  { label: "Possible matches", value: "12", status: "possible" },
  { label: "Exceptions", value: "9", status: "exception" },
];

const closeChecks: { label: string; detail: string; state: "done" | "open" }[] = [
  { label: "Payouts → bank deposits", detail: "31 of 31 payouts", state: "done" },
  { label: "Processor fees → fee account", detail: "$6,318.90 posted", state: "done" },
  { label: "Charges → invoices", detail: "4 charges without an invoice", state: "open" },
  { label: "Refunds → credit notes", detail: "1 refund without a credit note", state: "open" },
];

const summary: { label: string; value: string; tone?: "loss" | "brand" }[] = [
  { label: "Gross charges", value: "$214,860.40" },
  { label: "Refunds", value: "−$4,120.00", tone: "loss" },
  { label: "Processor fees", value: "−$6,318.90", tone: "loss" },
  { label: "Net payouts expected", value: "$204,421.50" },
  { label: "Bank deposits received", value: "$204,413.50" },
];

const sidebar = [
  "Overview",
  "Matches",
  "Exceptions",
  "Evidence",
  "Period close",
  "Connections",
];

export default function ReconMock() {
  const [view, setView] = useState<"continuous" | "close">("continuous");

  return (
    <figure className="m-0">
      <div className="line relative overflow-hidden rounded-2xl border bg-panel shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        {/* Window chrome */}
        <div className="line flex items-center gap-1.5 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="mx-auto rounded-md bg-white/5 px-6 py-1 text-[11px] text-fg-dim sm:px-8">
            app.truenett.com
          </span>
          <span className="hidden w-[54px] sm:block" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="line hidden w-44 shrink-0 border-r p-4 lg:block">
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
            <div className="line mt-8 rounded-lg border p-3">
              <p className="text-[10px] font-medium uppercase tracking-wide text-fg-dim">
                Sources
              </p>
              <ul className="mt-2 space-y-1.5 text-[11px] text-fg-mid">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-400" /> Payments
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-400" /> Bank
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-400" /> Accounting
                </li>
              </ul>
            </div>
          </div>

          {/* Main panel */}
          <div className="min-w-0 flex-1 p-4 sm:p-6">
            {/* View switch */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div
                className="line inline-flex rounded-lg border bg-panel-2 p-0.5"
                role="tablist"
                aria-label="Reconciliation view"
              >
                {(
                  [
                    ["continuous", "Continuous"],
                    ["close", "Period close"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={view === key}
                    onClick={() => setView(key)}
                    className={`rounded-[6px] px-3 py-1.5 text-[12px] font-medium transition-colors ${
                      view === key
                        ? "bg-white/10 text-fg"
                        : "text-fg-dim hover:text-fg-mid"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-fg-dim">
                {view === "continuous"
                  ? "October 2026 · in progress · USD"
                  : "September 2026 · under review · USD"}
              </p>
            </div>

            {view === "continuous" ? (
              <>
                {/* Status counters */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                  {counters.map((c) => (
                    <div key={c.label} className="line rounded-xl border bg-panel-2 p-3">
                      <p className="flex items-center gap-1.5 text-[11px] text-fg-dim">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS[c.status].dot}`}
                        />
                        {c.label}
                      </p>
                      <p className="tnum mt-1 text-lg font-semibold text-fg">{c.value}</p>
                    </div>
                  ))}
                </div>

                {/* Match ledger */}
                <div className="line mt-3 overflow-hidden rounded-xl border bg-panel-2">
                  <div className="line flex items-center justify-between border-b px-4 py-2.5">
                    <p className="text-[11px] font-medium text-fg-mid">
                      Records matched across sources
                    </p>
                    <p className="hidden text-[11px] text-fg-dim sm:block">
                      Updated as each source reports
                    </p>
                  </div>
                  <ul className="divide-y divide-white/[0.06]">
                    {rows.map((r) => (
                      <li key={r.left} className="px-4 py-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <div className="min-w-0">
                            <p className="truncate text-[12px] font-medium text-fg">{r.left}</p>
                            <p className="truncate text-[11px] text-fg-dim">{r.leftMeta}</p>
                          </div>
                          <div className="flex shrink-0 items-center gap-3">
                            <span
                              className={`tnum text-[12px] font-medium ${
                                r.status === "exception" || r.status === "possible"
                                  ? "text-loss"
                                  : "text-fg"
                              }`}
                            >
                              {r.amount}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${STATUS[r.status].pill}`}
                            >
                              {STATUS[r.status].label}
                            </span>
                          </div>
                        </div>
                        <div className="mt-1.5 flex items-start gap-2">
                          <svg
                            className="mt-[3px] h-3 w-3 shrink-0 text-fg-faint"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          >
                            <path d="M1 4h6a3 3 0 010 6H5M11 8H5a3 3 0 010-6h2" />
                          </svg>
                          <div className="min-w-0">
                            <p className="text-[11px] text-fg-mid">
                              {r.right}{" "}
                              <span className="text-fg-dim">· {r.rightMeta}</span>
                            </p>
                            <p className="mt-0.5 text-[11px] leading-snug text-fg-dim">
                              {r.note}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_1fr]">
                {/* Close progress */}
                <div className="line rounded-xl border bg-panel-2 p-4">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[11px] font-medium text-fg-mid">
                      Sep 1 – Sep 30, 2026
                    </p>
                    <p className="tnum text-[11px] text-fg-dim">1,418 / 1,463 records</p>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="leak-bar h-full rounded-full bg-brand-500/70"
                      style={{ width: "96.9%" }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-fg-dim">
                    96.9% of records matched · 5 items open
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {closeChecks.map((c) => (
                      <li key={c.label} className="flex items-start gap-2.5">
                        {c.state === "done" ? (
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2.5 8.5l3.5 3.5 7.5-8" />
                          </svg>
                        ) : (
                          <span className="mt-[5px] h-2 w-2 shrink-0 rounded-full border border-warn" />
                        )}
                        <p className="text-[11px] text-fg-mid">
                          {c.label}{" "}
                          <span
                            className={c.state === "open" ? "text-warn" : "text-fg-dim"}
                          >
                            · {c.detail}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Period summary */}
                <div className="line rounded-xl border bg-panel-2 p-4">
                  <p className="text-[11px] font-medium text-fg-mid">
                    Reconciliation summary
                  </p>
                  <dl className="tnum mt-3 space-y-2 text-[11px]">
                    {summary.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between">
                        <dt className="text-fg-dim">{s.label}</dt>
                        <dd
                          className={
                            s.tone === "loss" ? "text-loss" : "font-medium text-fg"
                          }
                        >
                          {s.value}
                        </dd>
                      </div>
                    ))}
                    <div className="line flex items-baseline justify-between border-t pt-2.5">
                      <dt className="text-fg-mid">Unexplained difference</dt>
                      <dd className="font-medium text-loss">−$8.00</dd>
                    </div>
                  </dl>
                  <div className="line mt-4 rounded-lg border border-warn/25 bg-warn/[0.05] p-3">
                    <p className="text-[11px] font-medium text-warn">
                      1 exception blocks sign-off
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-fg-dim">
                      EXC-104 · $8.00 between payout po_1Qk2vB and its deposit. Cause not
                      yet confirmed.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-fg-dim">
        Illustrative interface and data — not a live account. Switch views to see the same
        records during the month and at period close.
      </figcaption>
    </figure>
  );
}
