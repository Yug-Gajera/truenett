import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Script from "next/script";
import { faqs } from "@/lib/faqs";
import "./globals.css";

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
  title: "TrueNett — See Your True Net Income After Fees, Refunds & Taxes",
  description:
    "TrueNett connects Stripe, PayPal, Gumroad, Shopify and more, then subtracts platform fees, refunds, chargebacks, FX losses, taxes and expenses to show what you actually earned — in one dashboard.",
  keywords: [
    "net income tracker",
    "creator finance dashboard",
    "Stripe net revenue",
    "freelancer income tracking",
    "profit analytics",
    "revenue reconciliation",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TrueNett",
    title: "TrueNett — Know what you actually earned",
    description:
      "Revenue is what platforms report. Net is what you keep. TrueNett reconciles every fee, refund, and tax across all your platforms into one true number.",
    // TODO: add a real 1200×630 OG image at /public/og.png and reference it here.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TrueNett dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueNett — Know what you actually earned",
    description:
      "One dashboard that subtracts fees, refunds, FX and taxes from every platform that pays you.",
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
    "Finance analytics platform that calculates true net income for creators, freelancers, agencies and online businesses by reconciling fees, refunds, chargebacks, FX, taxes and expenses across Stripe, PayPal, Gumroad, Shopify and more.",
  offers: {
    "@type": "Offer",
    price: "15.00",
    priceCurrency: "USD",
    description: "Everything included. $15 per month, cancel anytime.",
  },
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

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

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

        {posthogKey && (
          <Script id="posthog" strategy="afterInteractive">
            {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init(${JSON.stringify(posthogKey)}, { api_host: ${JSON.stringify(posthogHost)}, person_profiles: 'identified_only' });`}
          </Script>
        )}
      </body>
    </html>
  );
}
