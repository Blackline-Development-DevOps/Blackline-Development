# Blackline Development

Public website for **Blackline Development**.

Blackline Development provides custom software development and digital services for individuals, communities and businesses, including websites, web and desktop applications, Discord bots, automation, integrations and managed services.

## Current status

The governed development line has moved into **v0.2.0 — Client Contact & Commission Intake**.

- Production branch: `production`
- Integration branch: `development`
- Current implementation branch: `chore/basic-site-evidence`
- Current release: **v0.2.0**
- Production deployment/domain state: verify separately; source state does not prove a live deployment.

The v0.1.1 launch-readiness candidate was merged to `development` through PR #48 as `ee6d47cf417f99d529db554f87b3beb4c54ff737`. Its exact pre-merge candidate passed `npm ci`, `npm test`, `npm run check`, `npm run lint` and `npm run build`.

v0.2.0 implementation authority is tracked by umbrella #9, Design Briefs #25/#26 and work order #49.

## Architecture

The public site uses Astro + TypeScript with a static-first public surface.

Why:
- fast public-page delivery;
- minimal runtime attack surface;
- simple Railway-compatible deployment;
- clear separation between presentation and later governed server integrations;
- maintainable component/content boundaries.

Current public routes:
- `/` — Home
- `/services` — Services
- `/commissions` — Commissioned Development
- `/managed-services` — Managed Services / pricing
- `/work` — Work and case-study evidence standard
- `/about` — About
- `/contact` — General contact and commission-intake preparation
- `/404` — Not-found route

## Commercial boundaries

Commissioned development and managed-service subscriptions are intentionally separate.

Managed-service pricing displayed by the site is a public presentation snapshot of the current approved Blackline Development catalogue. The website is not an independent pricing authority.

Commission service tiers are percentage-based service-priority choices applied only after the underlying work has been scoped and given an agreed Base Job Price.

## v0.2.0 intake boundary

The first v0.2.0 intake slice keeps customer information local to the browser until the customer explicitly opens and sends an email from their own mail client.

It:
- distinguishes general enquiries from commission requests;
- asks for the desired outcome before technical detail;
- supports explicit `not sure / needs discussion` states;
- progressively reveals optional context;
- prepares a structured email draft to `support@blacklinedevelopment.uk`;
- does not claim that pressing the website button sends or stores anything;
- does not request credentials, payment details or document uploads;
- does not create approved implementation work, a quote, payment state or schedule.

Server-side submission, retention, rate limiting, idempotency and the governed Development Operations handoff remain under Design Brief #26 and must not be invented before that architecture is approved.

## Brand assets

Approved Blackline Development public derivatives live under `public/brand/`. Canonical Media masters remain private and are not fetched at runtime.

## Search and accessibility baseline

The site includes:
- canonical page URLs;
- Open Graph and Twitter summary metadata;
- `robots.txt`;
- a static sitemap for public routes;
- keyboard-visible focus styles;
- a skip-to-content link;
- reduced-motion handling;
- responsive layouts;
- progressively disclosed optional intake fields with semantic form labels and live status messaging.

Manual desktop/mobile/keyboard verification remains required before production promotion. Basic Site Standard evidence is tracked in `docs/standards/basic-site-1.0.0-evidence.md`; automated source-contract checks run as part of `npm test`.

## Development

Requires Node.js 22.12.0 or newer.

```bash
npm ci
npm run dev
```

Required verification before completion:

```bash
npm ci
npm test
npm run check
npm run lint
npm run build
```

## Governance

- Do not commit routine implementation directly to `development` or `production`.
- Start work from the latest `development` on a descriptive branch.
- Open implementation work as a Draft PR into `development`.
- Reviewed development/sandbox integration is pre-authorised by the Director and may be merged without asking for per-merge permission.
- Production/live promotion remains a separate explicit Director approval.
- Do not invent release/version numbers.
- Do not commit secrets, credentials, payment/customer data, personal documents or unrelated files.
- No telemetry/analytics is introduced without explicit approval.

See `CONTRIBUTING.md` for the local contributor contract.

## Planned progression

The canonical roadmap remains:

`v0.2.0 → v0.3.0 → v0.4.0 → v0.5.0 → v0.6.0 → v0.7.0 → v0.8.0 → v1.0.0`

Later releases cover Stripe commerce, governed business email integration, questionnaires, AI-guided discovery, the customer portal and final production hardening. Their existing release boundaries remain authoritative.
