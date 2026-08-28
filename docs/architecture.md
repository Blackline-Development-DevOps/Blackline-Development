# Website architecture

## Purpose

This document describes the initial architecture boundary for the Blackline Development public website.

It is not authority to implement future integrations. Repository Issue #1 and Development Operations #692 define the currently approved implementation slice.

## Initial architecture

The first website candidate is a static-first Astro + TypeScript site.

Current layers:

1. **Public presentation** — Astro pages and shared layout.
2. **Design system** — reusable global tokens/layout styles in `src/styles/`.
3. **Public content models** — structured public-safe data in `src/data/`.
4. **Static assets** — approved public brand/media assets in `public/`.
5. **Governance / verification** — repository rules, Draft PR evidence and CI.

The initial build has no customer database, authenticated session system, payment processor runtime, email runtime or AI runtime.

## Why static-first

For the first public release, static output provides:
- small runtime attack surface;
- strong performance and cacheability;
- simple deployment/rollback;
- no unnecessary server state;
- easy Railway/static-host compatibility;
- clean separation between marketing content and future protected business workflows.

A future dynamic feature should introduce server/runtime capability only where that feature actually needs it.

## Commercial source-of-truth boundary

### Managed services

The current public pricing table is a static presentation snapshot verified on 2026-08-28 against:
- the live Blackline Development Stripe catalogue; and
- Development Operations #669.

The website does not query Stripe at runtime yet.

If/when dynamic catalogue retrieval is approved, the integration must:
- consume a deliberately approved public catalogue subset;
- avoid exposing unnecessary Stripe identifiers/internal metadata;
- distinguish active/inactive products and prices;
- fail safely if expected monthly/yearly pairs are missing or conflicting;
- never silently invent a fallback price;
- preserve commission separation.

### Commissions

Commission pricing remains governed by Development Operations #635.

The public website may explain the public tiers, but cannot compute or present a final commission total until an underlying Base Job Price has been approved for the specific scope.

## Future integration seams

### Commission intake

Future public intake can submit a minimum necessary request to a protected backend/API boundary. A submitted request is not automatically approved implementation work.

### Stripe

Future checkout/Billing/customer-portal work should be implemented as a separately approved server-side integration. Secret keys must never reach the browser or repository.

### Email

Future client correspondence should use a protected server/provider integration. Mailbox passwords, SMTP credentials and provider secrets must remain runtime secrets.

### AI-guided questionnaires

Development Operations #680 defines the future concept. The public website should only host the client experience after its access, privacy, retention, provenance and human-review model is approved.

The AI must remain a discovery facilitator rather than an authority that approves price, scope, repository work or payment state.

### Client accounts / portal

Authentication, session management, client isolation and personal-data retention require a separate threat/privacy design before implementation.

## Privacy / observability

No analytics or telemetry is included by default.

If future operational observability is required, prefer technical health evidence that does not create unnecessary visitor tracking. Any customer/session data must be minimised and protected by design.

## Deployment

`production` remains owner-gated production history. `development` is the integration branch.

Railway compatibility is an architectural target, not production deployment authority. DNS/domain cutover remains a separate Director-approved action after a verified candidate exists.
