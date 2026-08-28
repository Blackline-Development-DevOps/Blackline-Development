# Contributing

Blackline Development follows Development Operations governance.

## Work authority

Meaningful source changes require an approved Issue/work order containing:
- Priority
- Complexity
- Type
- Status
- Target Release
- Area

Ideas remain ideas until explicitly approved. Do not create implementation work from brainstorming alone.

## Branches

- `production` is the owner-gated production branch.
- `development` is the active integration branch.
- Start implementation from the latest `development`.
- Use descriptive branches such as `feature/...`, `fix/...`, `ui/...`, `chore/...`, `maintenance/...` or `security/...`.
- Never commit routine implementation directly to `production` or `development`.
- Never create release/version branches.
- Never merge without explicit approval.

## Pull requests

Open implementation work as a Draft Pull Request into `development`.

Every implementation PR must include:
- Purpose
- Work completed
- Files changed
- User-facing changes
- Technical changes
- Testing / verification
- Security evidence
- Data / migration impact
- External service / cost impact where relevant
- Known limitations
- Excluded work
- Branch / candidate details
- Rollback / recovery considerations where relevant
- Confirmation checklist

The confirmation checklist must explicitly confirm:
- no direct production/development implementation commits;
- no secrets or credentials;
- no customer/payment/financial data;
- no personal documents;
- no unrelated files.

## Release / production

Release versions are controlled. Do not invent or advance a version without approval.

Integration into `development`, release approval, production promotion and verified-live state are separate decisions.

## Website commercial safety

- Managed-service subscriptions remain separate from commissions.
- Public managed-service pricing must match the approved Stripe/Development Operations catalogue.
- Do not invent bundles, discounts or prices.
- Commission tiers do not define the underlying job price; scope is priced first.
- If authoritative pricing evidence is unavailable or conflicting, fail safely instead of guessing.

## Privacy / security

Do not commit:
- secrets, API keys or tokens;
- real customer data;
- payment data;
- personal documents;
- production exports containing private data;
- unnecessary third-party confidential material.

Do not introduce analytics or telemetry without explicit approval.

## Verification

Before work is called complete, run:

```bash
npm ci
npm test
npm run check
npm run lint
npm run build
```

For public UI changes also verify:
- mobile / small windows;
- common desktop widths;
- keyboard/focus accessibility;
- readable contrast;
- reduced-motion behaviour;
- empty/missing content states;
- pricing-table readability on small screens.

Automated checks must not be described as manual verification.
