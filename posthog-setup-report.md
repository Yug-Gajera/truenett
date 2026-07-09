# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the TrueNett Next.js App Router landing page. The old snippet-based initialization (`<Script>` in `layout.tsx`) has been replaced with the modern `instrumentation-client.ts` approach using the `posthog-js` npm package. A reverse proxy was added to `next.config.ts` so events route through `/ingest` and bypass ad blockers. `lib/analytics.ts` was migrated from `window.posthog` to `import posthog from 'posthog-js'`, preserving the existing `track()` and `identify()` helper API so no call sites needed changes. Four new client-side events were added to supplement the already-rich tracking in `WaitlistProvider.tsx` and `Nav.tsx`.

## Events

| Event name | Description | File |
|---|---|---|
| `cta_click` | Any primary CTA button clicked; includes `location` prop | `components/WaitlistProvider.tsx` *(existing)* |
| `modal_opened` | Waitlist modal opened; includes `location` prop | `components/WaitlistProvider.tsx` *(existing)* |
| `modal_closed` | Modal dismissed; includes `location` and `method` props | `components/WaitlistProvider.tsx` *(existing)* |
| `email_submit` | Email form submitted (before network call) | `components/WaitlistProvider.tsx` *(existing)* |
| `email_signup_success` | Signup succeeded; includes `returning` prop | `components/WaitlistProvider.tsx` *(existing)* |
| `email_signup_error` | Signup API error; includes `error_code` prop | `components/WaitlistProvider.tsx` *(existing)* |
| `nav_link_clicked` | Nav anchor clicked; includes `target` prop | `components/Nav.tsx` *(existing)* |
| `hero_secondary_cta_clicked` | "See how it works" anchor clicked in Hero section | `components/Hero.tsx` *(new)* |
| `faq_item_expanded` | FAQ accordion item opened; includes `question` prop | `components/Faq.tsx` *(new)* |
| `footer_link_clicked` | External footer link clicked; includes `label` and `href` props | `components/Footer.tsx` *(new)* |
| `closing_secondary_cta_clicked` | "Re-read the case" anchor clicked in FinalCta section | `components/FinalCta.tsx` *(new)* |

## Next steps

We've built a dashboard and five insights to monitor user behavior:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/503073/dashboard/1822220)
- **Waitlist signup funnel**: [NEtMonI9](https://us.posthog.com/project/503073/insights/NEtMonI9) — 3-step funnel: CTA click → email submit → signup success
- **Daily signups trend**: [o5zwljDz](https://us.posthog.com/project/503073/insights/o5zwljDz) — area chart of `email_signup_success` over 30 days
- **CTA clicks by location**: [Q9K9g4dI](https://us.posthog.com/project/503073/insights/Q9K9g4dI) — bar chart broken down by `location` prop (hero, nav, pricing, closing)
- **FAQ engagement**: [KdPpb5XQ](https://us.posthog.com/project/503073/insights/KdPpb5XQ) — line chart of `faq_item_expanded` over 30 days
- **Signup errors trend**: [qiO39SUH](https://us.posthog.com/project/503073/insights/qiO39SUH) — line chart of `email_signup_error` to catch submission failures early

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any CI/Vercel environment variable configuration so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
