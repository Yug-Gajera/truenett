import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { faqs } from "@/lib/faqs";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const SITE_URL = "https://www.truenett.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TrueNett — Multi-platform financial reconciliation",
  description:
    "TrueNett reconciles financial records across the systems your money moves through — payments, banking and accounting. It matches charges, fees, refunds, payouts, deposits and ledger entries, keeps the evidence behind each match, and separates genuine discrepancies from evidence still in transit. Pre-launch: recruiting design partners.",
  keywords: [
    "financial reconciliation software",
    "payout to bank reconciliation",
    "continuous reconciliation",
    "month-end close reconciliation",
    "Stripe reconciliation",
    "SaaS finance operations",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TrueNett",
    title: "TrueNett — Reconciliation across the systems your money moves through",
    description:
      "Match every charge, fee, refund, payout, deposit and accounting entry to its counterpart — continuously, and at period close. Pre-launch; recruiting design partners.",
    // TODO: add a real 1200×630 OG image at /public/og.png and reference it here.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TrueNett reconciliation workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueNett — Multi-platform financial reconciliation",
    description:
      "Reconciliation between payments, banking and accounting: matched records, kept evidence, and exceptions that explain themselves.",
    images: ["/og.png"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 32' fill='none'%3E%3Cg stroke='%23fafafa' stroke-width='2.8' stroke-linecap='round'%3E%3Cpath d='M2 3 H8 C17 3 21 12.5 27 15.2'/%3E%3Cpath d='M2 9.5 H8 C15 9.5 19 13.5 27 15.6'/%3E%3Cpath d='M2 16 H27'/%3E%3Cpath d='M2 22.5 H8 C15 22.5 19 18.5 27 16.4'/%3E%3Cpath d='M2 29 H8 C17 29 21 19.5 27 16.8'/%3E%3C/g%3E%3Ccircle cx='33.5' cy='16' r='4.5' fill='%23fafafa'/%3E%3C/svg%3E",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TrueNett",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Multi-platform financial reconciliation for SaaS businesses and lean finance teams. Collects records from payment platforms, banks and accounting systems, matches the records that describe the same money, tracks the evidence behind each match, and surfaces exceptions — continuously and at period close. Pre-launch; in development with design partners.",
  applicationSubCategory: "Financial reconciliation",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="noise font-sans">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
