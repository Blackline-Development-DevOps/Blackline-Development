# Blackline Development

Public website for **Blackline Development**.

Blackline Development provides custom software development and digital services for individuals, communities and businesses, including websites, web and desktop applications, Discord bots, automation, integrations and managed services.

## Current status

The repository is in its initial governed website-foundation phase.

- Production branch: `production`
- Integration branch: `development`
- Current implementation branch: `feature/public-site-foundation`
- Current release: **Unscheduled** — no version has been assigned
- Production deployment/domain cutover: **not authorised by this foundation work**

Implementation authority is tracked by repository Issue #1 and Development Operations Issue #692.

## Architecture

The public site uses a static-first Astro + TypeScript architecture.

Why:
- fast public-page delivery;
- simple Railway-compatible deployment;
- minimal runtime attack surface for the initial marketing site;
- clean path to later server/API integrations without forcing them into the public foundation;
- maintainable component/content boundaries.

Current public routes:
- `/` — Home
- `/services` — Services
- `/commissions` — Commissioned Development
- `/managed-services` — Managed Services / pricing
- `/work` — Portfolio foundation
- `/about` — About
- `/contact` — Contact/discovery foundation

## Commercial boundaries

Commissioned development and managed-service subscriptions are intentionally separate.

Managed-service pricing displayed by the site is a public presentation snapshot verified against the live Blackline Development Stripe catalogue and Development Operations pricing policy. The website is **not** an independent pricing authority.

Commission service tiers are percentage-based service-priority choices applied only after the underlying work has been scoped and given an approved Base Job Price.

## Brand assets

Approved Blackline Development logo assets belong under `public/brand/` using the naming rules in `public/brand/README.md`.

Until approved logo files are available on the implementation branch, the site uses a temporary text wordmark. Do not redraw or invent a replacement logo.

## Development

Requires Node.js 22.12.0 or newer.

```bash
npm install
npm run dev
```

Verification commands:

```bash
npm test
npm run check
npm run lint
npm run build
```

A committed lockfile is required before this work can be treated as release-ready and the governed `npm ci` completion check can be satisfied.

## Governance

- Do not commit implementation directly to `development` or `production`.
- Start work from the latest `development` on a descriptive branch.
- Open Draft PRs into `development`.
- Never merge without explicit approval.
- Production promotion is a separate Director-approved step.
- Do not invent release/version numbers.
- Do not commit secrets, credentials, payment/customer data, personal documents or unrelated files.
- No telemetry/analytics is introduced without explicit approval.

See `CONTRIBUTING.md` for the local contributor contract.

## Future integrations

The architecture may later support separately approved work for:
- Stripe Checkout/Billing/customer portal;
- commission intake and quote/tier workflows;
- email correspondence;
- AI-guided client questionnaires;
- authenticated client areas;
- portfolio/case-study publishing workflows.

Those capabilities are not authorised merely because the public-site foundation anticipates them.
