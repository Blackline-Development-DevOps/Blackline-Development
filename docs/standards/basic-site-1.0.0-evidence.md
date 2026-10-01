# Basic Site Standard 1.0.0 — repository evidence

Work order: #53  
Standard: `basic-site@1.0.0`  
Branch under evidence review: `chore/basic-site-evidence`

This ledger records only evidence that exists in this repository. It does not claim manual checks that have not been performed and it does not claim Dev Ops v3 `Managed` status before the live central relay verifies an exact candidate.

| Evidence key | State | Repository evidence |
| --- | --- | --- |
| responsive-matrix | Partial | Responsive breakpoints are implemented in `src/styles/global.css` and `src/styles/intake.css`; automated presence checks run in `tests/basic-site-contract.test.mjs`. Manual browser/device matrix remains required. |
| navigation-review | Passed | Shared primary navigation, current-page state, skip link and clear primary action are implemented in `src/layouts/BaseLayout.astro` and checked automatically. |
| state-matrix | Partial | Commission intake has required-field error messaging, draft-opening status and no-JavaScript fallback. Full loading/empty/success/error evidence for future server-backed flows remains out of scope until those flows exist. |
| accessibility-review | Partial | Semantic navigation, labelled form controls, live status, skip link, reduced-motion handling and focus styles are source-verified. Manual screen-reader/contrast review remains required. |
| keyboard-review | Partial | Focus-visible styles, skip link and native form/details controls are source-verified. Manual end-to-end keyboard traversal remains required. |
| validation-tests | Passed | Bounded required fields and maximum lengths are checked by `tests/basic-site-contract.test.mjs`; browser validation remains fail-safe and no server-side submission is claimed. |
| secret-scan | Passed | CI test scans public source/assets for common committed credential signatures. This supplements, not replaces, GitHub/provider secret scanning. |
| environment-review | Passed | Current public site is static output and does not require runtime secrets for the implemented intake flow; `astro.config.mjs` contains no secret-bearing configuration. |
| privacy-review | Passed | Automated checks reject known analytics hooks in `src/` and `public/`; current intake uses local email drafting and does not persist browser data. |
| content-review | Partial | Real support contact and service boundaries are present. A dedicated public privacy/legal surface should be reviewed before final release completion. |
| seo-review | Passed | Canonical URLs, descriptions, Open Graph/Twitter metadata, robots and sitemap are implemented and contract-tested. |
| performance-review | Partial | Static Astro output, bounded local assets and explicit image dimensions reduce obvious instability; formal performance/manual browser evidence remains required. |
| error-path-tests | Passed | Deliberate 404 content and safe intake validation/no-JavaScript recovery are checked automatically. |
| automated-checks | Passed | Foundation CI runs `npm ci`, `npm test`, `npm run check`, `npm run lint` and `npm run build`. |
| manual-verification | Pending | Desktop/mobile/small-window, keyboard, screen-reader and contrast review must be recorded before completion. |
| delivery-docs | Passed | `README.md`, `CONTRIBUTING.md`, `docs/architecture.md`, `docs/intake-transport-contract.md` and `docs/devops-v3-migration.md` document current delivery and authority boundaries. |

## Protected requirements

The protected Basic Site requirements are not excepted.

- Accessible operation: source evidence exists; manual review remains pending, so overall requirement is not yet claimed complete.
- Input validation: automated evidence passes for the implemented static/local intake boundary.
- Environment/secrets: no runtime secret is needed for the implemented public flow; source-level secret checks are automated.
- Privacy default: analytics/telemetry remain absent by default and are checked in CI.
- Production error handling: current static 404 and local intake failure/recovery paths are deliberate and tested.

## Remaining gates

1. Record manual responsive, keyboard, screen-reader and contrast verification.
2. Review whether a dedicated public privacy/legal page is required for the current launch surface and add it if applicable.
3. Activate the centrally approved public Dev Ops v3 relay only through its separately owner-gated live deployment process.
4. Run exact-candidate central enforcement against this repository through that live relay.
5. Mark #53 `v3-managed` only after central registry, effective contract, portfolio/project projection and enforcement health all agree.
