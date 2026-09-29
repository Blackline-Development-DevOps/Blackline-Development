# Blackline Development

Public website for **Blackline Development**.

Blackline Development provides custom software development and digital services for individuals, communities and businesses, including websites, web and desktop applications, Discord bots, automation, integrations and managed services.

## Current status

The public-site foundation is live in repository source and the current governed release line is **v0.1.1 — Branding & Presentation Polish**.

- Production branch: `production`
- Integration branch: `development`
- Current candidate branch: `ui/public-launch-readiness`
- Current release: **v0.1.1**
- Next planned release: **v0.2.0 — Client Contact & Commission Intake**
- Production deployment/domain state: verify separately; source state does not prove a live deployment.

Implementation authority is tracked by repository Issue #6, v0.1.1 umbrella #22 and the canonical roadmap #8.

## Architecture

The public site uses a static-first Astro + TypeScript architecture.

Why:
- fast public-page delivery;
- simple Railway-compatible deployment;
- minimal runtime attack surface for the public marketing site;
- clean path to later server/API integrations without forcing them into the static surface;
- maintainable component/content boundaries.

Current public routes:
- `/` — Home
- `/services` — Services
- `/commissions` — Commissioned Development
- `/managed-services` — Managed Services / pricing
- `/work` — Work and case-study evidence standard
- `/about` — About
- `/contact` — Public project contact guidance
- `/404` — Not-found route

## Commercial boundaries

Commissioned development and managed-service subscriptions are intentionally separate.

Managed-service pricing displayed by the site is a public presentation snapshot of the current approved Blackline Development catalogue. The website is not an independent pricing authority.

Commission service tiers are percentage-based service-priority choices applied only after the underlying work has been scoped and given an agreed Base Job Price.

## Contact and privacy

The v0.1.1 public site may direct visitors to `support@blacklinedevelopment.uk` through a standard `mailto:` link.

It does not collect project details, credentials, payment data or documents through a website form. Structured intake, validation, privacy/retention rules and governed handoff belong to v0.2.0.

## Brand assets

Approved Blackline Development public derivatives live under `public/brand/`. Canonical Media masters remain private and are not fetched at runtime.

The header uses the approved public mark derivative. A dedicated transparent SVG favicon is used for browser tabs.

## Search and accessibility baseline

The launch-readiness candidate includes:
- canonical page URLs;
- Open Graph and Twitter summary metadata;
- `robots.txt`;
- a static sitemap for public routes;
- keyboard-visible focus styles;
- a skip-to-content link;
- reduced-motion handling;
- responsive layouts inherited from the public design system.

Manual desktop/mobile/keyboard verification is still required before claiming the release complete.

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

- Do not commit implementation directly to `development` or `production`.
- Start work from the latest `development` on a descriptive branch.
- Open Draft PRs into `development`.
- Never merge without explicit approval.
- Production promotion is a separate Director-approved step.
- Do not invent release/version numbers.
- Do not commit secrets, credentials, payment/customer data, personal documents or unrelated files.
- No telemetry/analytics is introduced without explicit approval.

See `CONTRIBUTING.md` for the local contributor contract.

## Planned progression

The canonical roadmap remains:

`v0.1.1 → v0.2.0 → v0.3.0 → v0.4.0 → v0.5.0 → v0.6.0 → v0.7.0 → v0.8.0 → v1.0.0`

Later releases cover structured client intake, Stripe commerce, governed business email integration, questionnaires, AI-guided discovery, the customer portal and final production hardening. Their existing release boundaries remain authoritative.
