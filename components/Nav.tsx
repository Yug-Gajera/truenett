"use client";

import { track } from "@/lib/analytics";
import Logo from "./Logo";
import CtaButton from "./CtaButton";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="line sticky top-0 z-40 border-b bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#top" aria-label="TrueNett home">
          <Logo />
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-fg-mid md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => track("nav_link_clicked", { target: l.href.slice(1) })}
              className="transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>
        <CtaButton location="nav">Join waitlist</CtaButton>
      </nav>
    </header>
  );
}
