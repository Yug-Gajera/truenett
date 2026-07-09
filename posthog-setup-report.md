# PostHog post-wizard report

The wizard has completed a deep integration of the Truenett landing page. PostHog was already partially set up via CDN snippet (with `cta_click` and `email_submit` events). This run activated the project token in `config.js`, extended the event coverage with six new events, and wired up user identification after a successful waitlist signup.

**Changes made to `index.html`:**
- `openModal()` now accepts a `location` argument and fires `modal_opened`
- `closeModal()` now accepts a `method` argument (`button`, `overlay`, `keyboard`) and fires `modal_closed`
- All `[data-open-modal]` click handlers pass their `data-cta-location` into `openModal()`
- All `[data-close-modal]` click handlers pass `'button'` to `closeModal()`; Escape key passes `'keyboard'`
- Added nav-link click tracking via `nav_link_clicked`
- Added `pricing_section_viewed` via IntersectionObserver on `#pricing`
- Added `email_signup_success` (with `returning: true/false`) after the Supabase insert resolves
- Added `email_signup_error` (with `error_code`) on non-duplicate DB failures
- Added `posthog.identify(email, { email })` after both success paths to link the anonymous session to the person

**Changes made to `config.js`:**
- Populated `posthogKey` with the project token so analytics are active in local dev

| Event | Description | File |
|---|---|---|
| `cta_click` | Fired when any "Get early access" button is clicked; `location` = nav / hero / pricing / closing / footer | `index.html` |
| `email_submit` | Fired on form submit, before the network request, independent of success or failure | `index.html` |
| `email_signup_success` | Fired after the email is successfully inserted into Supabase; `returning` = true/false | `index.html` |
| `email_signup_error` | Fired when the Supabase insert fails with a non-duplicate error; includes `error_code` | `index.html` |
| `modal_opened` | Fired when the early-access modal opens; `location` matches the triggering button | `index.html` |
| `modal_closed` | Fired when the modal is dismissed; `method` = button / keyboard / unknown | `index.html` |
| `pricing_section_viewed` | Fired once when the pricing section scrolls into view | `index.html` |
| `nav_link_clicked` | Fired when a header nav link is clicked; `target` = problem / how / pricing | `index.html` |

## Next steps

We've built a dashboard and five insights to keep an eye on user behavior:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/503073/dashboard/1816400)
- [Signup Conversion Funnel (wizard)](https://us.posthog.com/project/503073/insights/tiPXpGtt)
- [CTA Clicks Over Time (wizard)](https://us.posthog.com/project/503073/insights/uXnlQgDm)
- [Email Signups Over Time (wizard)](https://us.posthog.com/project/503073/insights/opXA2CQp)
- [CTA Clicks by Location (wizard)](https://us.posthog.com/project/503073/insights/ocvuPYHr)
- [Pricing Section Viewed vs Signups (wizard)](https://us.posthog.com/project/503073/insights/bCusLzRL)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `POSTHOG_KEY` and `POSTHOG_HOST` to `config.example.js` documentation comments and any onboarding scripts so collaborators know what to set in their local `config.js` or on Vercel.
- [ ] Confirm the returning-visitor path also calls `identify` — a handler that only identifies on fresh signup can leave returning sessions on anonymous distinct IDs. Currently `identify` is only called after form submission; if users return and are already on the waitlist, they won't be identified until they try to sign up again.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
