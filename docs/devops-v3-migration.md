# Dev Ops v3 migration — Blackline Development

Work order: #53  
Central dependency: Development Operations #741

## Current state

This repository is explicitly authorised for Dev Ops v3 onboarding.

The thin V3 manifest is present on the migration candidate, but the repository must **not** be called V3 Managed until every central health surface is positively verified.

## Canonical identity

- Project ID: `blackline-development`
- Repository: `Blackline-Development/Blackline-Development`
- Profile: `website`
- Integration branch: `development`
- Production branch: `production`
- Build adapter: `node24-web`
- Standard: `basic-site@1.0.0`

Universal governance remains central in Development Operations. This repository does not copy branch/release/security/authority policy into the manifest.

## Current evidence

Already verified in repository CI:
- locked dependency installation;
- Astro/type checks;
- lint;
- build;
- no telemetry/analytics introduced by current website work;
- no committed customer/payment data or credentials in the v0.2.0 intake slice;
- canonical metadata/robots/sitemap and explicit 404 route are present;
- contact/intake validation has bounded client fields and safe no-backend fallback;
- delivery/governance documentation is current enough to describe the present development state.

## Evidence still required before Basic Site acceptance

The V3 Basic Site acceptance record is intentionally **not** created as Passed yet.

Outstanding evidence includes truthful verification for:
- responsive desktop/tablet/mobile/small-window layout;
- keyboard/focus operation through the full public journey;
- readable contrast and reduced-motion behaviour;
- deliberate relevant state matrix;
- performance/image-delivery review;
- complete manual browser verification evidence;
- final mapping from each `basic-site@1.0.0` evidence ID to repository files/tests.

Missing evidence remains missing; it is not inferred from a green build.

## Public-repository enforcement

Blackline Development is public while the Dev Ops control plane is private.

Central #741 provides the approved direction:
- a minimal product workflow requests a short-lived GitHub Actions OIDC JWT;
- the private Dev Ops runtime verifies the exact registered repository/workflow/event;
- it returns an exact-revision ephemeral central enforcement bundle;
- the runner executes central V3 enforcement against the checked-out candidate;
- no long-lived Dev Ops secret is stored in this repository.

The minimal OIDC caller is now present on `migration/devops-v3-public-adoption` as `.github/workflows/devops-v3-enforcement.yml`. It fails closed unless the repository variable `DEVOPS_PUBLIC_ENFORCEMENT_URL` identifies the approved HTTPS relay. The caller authenticates with a short-lived GitHub OIDC token, retrieves the exact deployed control-plane commit, and independently checks its 40-hex revision, every file SHA-256 and aggregate bundle digest. `DEVOPS_PUBLIC_ENFORCEMENT_REVISION` is no longer required or used in automatic mode. No long-lived Dev Ops credential is stored in this repository.

## Shared Project #5

The central project registry already maps this repository to **Blackline Development**. Operational work items remain source Issues in this repository and are projected into canonical Project #5 by central Project Sync.

Project-board projection does not itself prove V3 Managed health.

## Production boundary

Nothing in this migration authorises:
- merge/promotion to `production`;
- live deployment;
- live Dev Ops relay deployment;
- secrets/config changes in production;
- release-version invention.
