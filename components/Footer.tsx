"use client";

import Logo from "./Logo";
import { track } from "@/lib/analytics";

const columns = [
  {
    title: "The page",
    links: [
      { label: "The problem", href: "#problem" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Exceptions", href: "#exceptions" },
      { label: "Build status", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Early access", href: "#early-access" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Continuous vs. period close", href: "#modes" },
      { label: "Match statuses", href: "#statuses" },
      { label: "Who we build with", href: "#who" },
      { label: "Roadmap", href: "mailto:hello@truenett.com?subject=Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "mailto:hello@truenett.com" },
      { label: "Twitter / X", href: "https://twitter.com/truenett" },
    ],
  },
  {
    title: "Legal",
    // TODO: replace with real /privacy and /terms pages before launch.
    links: [
      { label: "Privacy", href: "mailto:hello@truenett.com?subject=Privacy" },
      { label: "Terms", href: "mailto:hello@truenett.com?subject=Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="line border-t">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-fg-dim">
              Reconciliation across the systems your money moves through. Pre-launch, and
              building with design partners.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[13px] font-semibold text-fg">{col.title}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-fg-dim transition-colors hover:text-fg"
                      {...(link.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () =>
                              track("footer_link_clicked", {
                                label: link.label,
                                href: link.href,
                              }),
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="line mt-14 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[13px] text-fg-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TrueNett. All rights reserved.</p>
          <p>Pre-launch · No integrations connected yet</p>
        </div>
      </div>
    </footer>
  );
}
