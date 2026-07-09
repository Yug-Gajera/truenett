/**
 * FAQ content lives here so the FAQ section and the FAQPage JSON-LD
 * schema render from the same source of truth.
 */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly does TrueNett do?",
    a: "TrueNett connects to the platforms that pay you — Stripe, PayPal, Gumroad, Lemon Squeezy, Shopify and more — imports every transaction, and subtracts platform fees, processor fees, refunds, chargebacks, currency-conversion losses, estimated taxes, and your operating expenses. The result is your true net income: the number that actually lands in your pocket, not the gross figure platforms show you.",
  },
  {
    q: "How is this different from my Stripe dashboard?",
    a: "Stripe only knows about Stripe, and it leads with gross volume. It doesn't see your PayPal income, your Gumroad sales, your AdSense payouts, your software subscriptions, or your tax bill. TrueNett combines every income source and every deduction into one reconciled number — so you don't have to open six dashboards and a spreadsheet to figure out how the month really went.",
  },
  {
    q: "Can't I just use a spreadsheet?",
    a: "You can — most of our users did, right up until a formula silently broke or they fell three months behind on exports. Spreadsheets require you to manually download CSVs from every platform, normalize currencies, remember every fee schedule, and keep doing all of that every single month. TrueNett does the same reconciliation automatically and stays current as new payouts settle.",
  },
  {
    q: "Is TrueNett an accounting tool like QuickBooks?",
    a: "No — and that's deliberate. QuickBooks is built for accountants doing double-entry bookkeeping and formal compliance. TrueNett is built for the person running the business who wants to answer one question fast: \"What did I actually make?\" You can still hand your accountant clean exports at tax time; TrueNett just makes sure you understand your numbers all year round.",
  },
  {
    q: "Which platforms does TrueNett support?",
    a: "At launch: Stripe, Lemon Squeezy, Gumroad, and PayPal. Coming soon: Shopify, Paddle, Google AdSense, and Wise. Direct bank-account connections are on the roadmap. You can also import CSVs from any platform we don't yet connect to natively.",
  },
  {
    q: "How does TrueNett estimate taxes?",
    a: "You set your estimated effective tax rate (or separate rates per income type), and TrueNett applies it to your reconciled net so you always see a post-tax figure. It's an estimate to keep you honest with yourself — not tax advice — and you can adjust the rate anytime or turn the feature off.",
  },
  {
    q: "Does TrueNett handle multiple currencies?",
    a: "Yes. Payouts in EUR, GBP, INR or any other currency are normalized into your base currency using the actual settlement rates where the platform provides them, so FX losses show up as their own line item instead of silently shrinking your totals.",
  },
  {
    q: "Is my financial data safe?",
    a: "All connections use official, read-only APIs — TrueNett can never move money, issue refunds, or modify anything in your accounts. Data is encrypted in transit and at rest, and we never sell or share your data. You can disconnect a platform and delete your data at any time.",
  },
  {
    q: "Do you need my bank login?",
    a: "No. TrueNett connects to payment platforms via their official APIs (OAuth or restricted API keys). Bank connections are a future, strictly optional feature — and when they arrive they'll use a regulated aggregator with read-only access, never your raw credentials.",
  },
  {
    q: "How long does setup take?",
    a: "About two minutes per platform. You authorize the connection, TrueNett imports your history (up to several years where the platform allows), and your dashboard fills in on its own. There's no chart of accounts to configure and no bookkeeping knowledge required.",
  },
  {
    q: "Can I track my business expenses too?",
    a: "Yes. Recurring costs like software subscriptions, contractors, and advertising can be added manually or imported, then categorized once — TrueNett remembers the category and deducts them from your net automatically going forward.",
  },
  {
    q: "I run more than one business. Can I keep them separate?",
    a: "Yes. Workspaces let you keep each business (or each client, if you're an agency) fully separate, each with its own connections, expenses, and reports — and you can still see a combined view across all of them.",
  },
  {
    q: "Can I export my data?",
    a: "Always. Every report and the underlying transaction data can be exported to CSV at any time — for your accountant, your co-founder, or your own spreadsheets. Your data is yours; there's no lock-in.",
  },
  {
    q: "What does TrueNett cost?",
    a: "One plan: $15/month, everything included — unlimited platform connections, all features, no per-platform surcharges, cancel anytime. Early-access members lock in this founding price permanently, even as the public price rises later.",
  },
  {
    q: "Why should I pay for this when platforms show dashboards for free?",
    a: "Because free dashboards show the number that makes the platform look good — gross revenue. If you've ever been surprised by a tax bill, discovered a subscription you forgot to cancel, or realized a 'great month' was actually break-even, the visibility pays for itself many times over. Most users find recoverable leaks worth far more than $15 in the first month.",
  },
  {
    q: "What happens after I join the waitlist?",
    a: "We onboard in small batches so every early user gets real attention. You'll get an email when your spot opens, a guided two-minute setup, and a direct line to the founders for feedback and requests. No credit card is required to join the list.",
  },
];
