/**
 * FAQ content lives here so the FAQ section and the FAQPage JSON-LD
 * schema render from the same source of truth.
 */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What does TrueNett actually do?",
    a: "TrueNett reconciles financial records across the separate systems a business already uses. It collects the records each system produces — charges, platform and processor fees, refunds, payouts, bank deposits, invoices, credit notes and accounting entries — then matches the ones that describe the same money, keeps the evidence behind each match, and reports what is left over: records still waiting on a source, matches that look likely but aren't proven, and genuine differences that need a person.",
  },
  {
    q: "Can I use it today?",
    a: "No. TrueNett is pre-launch: this website and the design-partner signup are the only things running. No integration is implemented, there is no application to log into, and the interface shown on this page is an illustrative design, not a live account. We are recruiting a small number of design partners to build it with.",
  },
  {
    q: "Why isn't my payment platform's own reconciliation enough?",
    a: "Because it only knows its own records. Your payment platform can tell you that a payout of $18,204.62 was made up of 412 charges less fees and refunds. It cannot tell you whether that amount reached your bank, whether the bank deducted a fee on the way, whether the refunds inside it belong to this month, or whether your ledger recorded all of it. Reconciliation within one system is the easy half; the differences live between systems.",
  },
  {
    q: "What's the difference between continuous and period-end reconciliation?",
    a: "Continuous reconciliation matches records as each source publishes them, so the state of the current month is always up to date and problems surface within days. Period-end reconciliation is reviewing a chosen month, quarter or date range against those same already-matched records — checking what is still open and preparing a reconciliation summary. TrueNett is designed to do both from one dataset, so the two views can't disagree with each other.",
  },
  {
    q: "How is a delay different from a discrepancy?",
    a: "A payout initiated yesterday that your bank feed will publish tomorrow is not a difference — it is evidence that hasn't arrived. Treating it as a problem is how reconciliation tools generate noise that people learn to ignore. TrueNett holds those records as awaiting evidence and only opens an exception when both sides have reported and still disagree.",
  },
  {
    q: "What's a 'possible match' and why not just match it?",
    a: "A verified match is two or more records that agree on amount, timing and reference, with the supporting evidence stored. A possible match is a pair that probably belongs together but where the evidence falls short — an invoice for EUR 1,150.00 against a settled charge of USD 1,225.00, for instance. Automatically accepting that would hide a real error behind a plausible story, so it is proposed for a person to confirm or reject and is never counted as reconciled on its own.",
  },
  {
    q: "What kinds of exception does it look for?",
    a: "The planned categories are missing records (a refund with no credit note), mismatched amounts (a deposit smaller than its payout), duplicates (the same payment recorded twice under different identifiers) and timing differences (a refund issued after a payout window closed). Each one is opened with the records involved, the size of the difference and the evidence behind it.",
  },
  {
    q: "Does TrueNett tell me the cause of a difference?",
    a: "It will suggest one, labelled as a hypothesis, along with the check that would confirm it. An $8.00 gap next to a bank line described as a wire fee is a strong hypothesis, not a fact — and TrueNett is designed to say which it is. Once you confirm a cause, the aim is for the same pattern to be recognised next time.",
  },
  {
    q: "Is this bookkeeping software or an accounting system?",
    a: "No. TrueNett does not keep your books, file anything, or replace your ledger or your accountant. It sits between the systems you already use and answers one question: do these records agree, and if not, exactly where and why. The reconciliation summary is something you hand to whoever does keep the books.",
  },
  {
    q: "Is it a Stripe dashboard, a profit calculator or a tax tool?",
    a: "None of those. Earlier versions of this page talked about net income, tax estimates and financial health scores — that is not what we are building. TrueNett does not calculate your profit, estimate your tax or score your finances. Stripe is the first integration we intend to build because it is where our early partners' records start, not because the product is about Stripe.",
  },
  {
    q: "Which systems will it connect to?",
    a: "The plan is three kinds of source from the start: payments (Stripe first, then PayPal, with Paddle and Lemon Squeezy later), banking (statement import first, then feeds) and accounting (Xero and ledger import first, QuickBooks later). Nothing on that list is connected yet, and design partners influence the order.",
  },
  {
    q: "How will my financial data be handled?",
    a: "The design intent is read-only access for every integration — reconciliation needs to read records, never to move money or write back to your ledger — with encryption in transit and at rest, and deletion on request. Because no integration exists yet, please treat that as the commitment we are building to rather than a claim you can verify today. We will show you the exact scopes before you ever grant access.",
  },
  {
    q: "What does it cost?",
    a: "There is no price yet, and no plan to announce one before the product reliably works. We are not taking payment, card details or deposits. Pricing will be set with the design partners who helped shape the product and announced to them first.",
  },
  {
    q: "What happens after I apply?",
    a: "You give us your email address — that is all the form collects. We reply with a few questions about which systems your records live in and how your close works today, and if it looks like a fit we set up a 30-minute conversation. No credit card, no credentials, and no automatic onboarding into something that isn't ready.",
  },
];
