# v0.2.0 Intake Transport Contract

Status: **Architecture proposal / not production authority**

Authority:
- Website v0.2.0 umbrella: #9
- Submission runtime/privacy Design Brief: #26
- Architecture work order: #51
- Development Operations commission model: #710 / #635

## Purpose

Define the transport boundary needed to move a public Blackline Development commission request from the browser into the canonical Development Operations commission/discovery model without turning the public website into a second customer-data or commercial source of truth.

This document does **not** enable or deploy the runtime.

## Current safe behaviour

The current development site prepares a structured email draft locally in the visitor's browser.

- Nothing is silently submitted.
- Nothing is stored by website code.
- The visitor reviews and sends through their own email client.
- Failure to open/send remains visible to the visitor.
- No implementation, pricing, payment or scheduling authority is created.

This remains the fallback until the transport below exists and is verified.

## Canonical authority

Development Operations already owns:
- the universal commission questionnaire;
- stable question IDs;
- explicit answer states: `answered`, `not-sure`, `not-applicable`, `unanswered`;
- deterministic commission-record composition;
- authority flags that keep discovery separate from implementation, pricing and work-order creation.

The website must not fork those semantics once it begins structured server submission.

## Target flow

```text
Browser
  ↓
Public intake runtime
  ↓
Authenticated Dev Ops intake endpoint
  ↓
Canonical discovery/commission record
```

The website is the customer-facing intake surface. Development Operations owns any retained discovery record and all later governed commercial/work transitions.

## Browser contract

The browser may submit only bounded, expected intake fields.

Requirements:
- explicit schema/revision;
- generated request ID;
- bounded text lengths;
- explicit answer state where the user does not know or considers a question not applicable;
- no passwords, API keys, tokens, payment credentials or personal-document uploads;
- no Dev Ops/server secret in browser code;
- no behavioural analytics or telemetry;
- no success state until the server confirms authoritative acceptance.

If the server fails or delivery is unknown, preserve the user's entered data in the page/session and offer the local email fallback. Do not silently discard it.

## Public intake runtime

Prefer an isolated minimal runtime boundary rather than granting privileged server behaviour to every static website page.

Responsibilities:
- accept only the intended HTTP method/content type;
- validate origin where meaningful;
- reject oversized payloads before processing;
- validate against the approved intake envelope/schema;
- apply bounded abuse/rate limiting without behavioural profiling;
- reject obvious credential-like sensitive input;
- generate no customer-content logs;
- authenticate the downstream Dev Ops handoff;
- return only bounded request status/reference information.

### Persistence

The website/runtime should not persist accepted customer content.

Allowed transient state:
- request-local memory;
- short-lived rate-limit state;
- short-lived idempotency/replay state.

Persistent customer/discovery retention belongs to Development Operations after authoritative acceptance.

## Dev Ops handoff

The receiving Dev Ops endpoint must:
- validate the same schema/revision;
- reject unknown fields/question IDs;
- preserve explicit answer states;
- treat free text as untrusted customer data;
- create or resolve a stable request/commission identity;
- enforce request-id idempotency;
- never turn intake into automatic implementation authority;
- retain authority flags equivalent to:
  - `implementationAuthorized: false`
  - `priceAuthorized: false`
  - `workOrderCreated: false`
- apply the Dev Ops privacy/data lifecycle to any persisted customer record.

## Server authentication

Preferred mechanism: short-lived HMAC request signing.

Inputs:
- request timestamp;
- request ID;
- SHA-256 digest of the exact request body.

Suggested signature input:

```text
timestamp + "." + requestId + "." + bodySha256
```

The intake service signs with a server-only secret. Dev Ops verifies:
- known key identity;
- signature validity;
- bounded clock skew;
- unseen request ID within replay window.

A bearer secret is acceptable only as a temporary server-to-server implementation if the receiver does not yet support HMAC. It must never be exposed to the browser or committed to source.

## Failure semantics

| Condition | HTTP direction | Browser meaning |
| --- | --- | --- |
| Invalid/bounded field failure | 400 | Not sent; fix highlighted fields |
| Request too large | 413 | Not sent; shorten/remove content |
| Abuse/rate limit | 429 | Not sent; retry later or use email fallback |
| Dev Ops unavailable | 502/503 | Not sent/unknown; use email fallback |
| Downstream timeout/ambiguous response | 502/504 | Unknown; never claim success |
| Canonical request accepted | 201/202 | Received/queued with request reference |

Redirects or client-side navigation alone are never evidence of acceptance.

## Privacy and logging

Routine logs may contain:
- request reference;
- timestamp;
- high-level result/status;
- technical error class.

Routine logs must not contain:
- customer message bodies;
- names/contact details;
- selected answers;
- secrets;
- payment information;
- raw downstream payloads.

No analytics/telemetry is introduced.

## Idempotency

The browser generates one request ID for the logical submission and reuses it for retries of that same submission.

The public runtime forwards the same ID.

Development Operations is authoritative for deduplication and must return the existing result/reference when a safe retry repeats an already accepted request.

A retry with the same ID but different body digest must fail closed rather than mutate the original accepted intake silently.

## Sensitive-input rejection

Before forwarding, reject obvious credential material where practicable, including patterns strongly resembling:
- API tokens;
- private keys;
- passwords copied in key/value form;
- card/bank credential fields.

This is a safety net, not permission to request sensitive data.

## Deployment model

Preferred:
- static public website remains separately deployable;
- minimal intake runtime is isolated as its own development/sandbox service;
- production domain/routing and secrets are added only during a separately approved production promotion.

The exact public hostname/path is deployment configuration, not part of the semantic intake contract.

## Rollback / recovery

If the runtime becomes degraded:
1. disable the server-submit enhancement;
2. keep the contact page available;
3. retain the local email-draft fallback;
4. show no success state for requests whose delivery cannot be proven.

No queued browser request may be reported as accepted unless Dev Ops acknowledged it.

## Runtime implementation gates

Do not implement/deploy the server transport until:
- this architecture is reviewed;
- the Dev Ops receiving endpoint contract exists;
- development/sandbox secrets can be stored safely;
- schema/version ownership is explicit;
- retention/access/deletion behaviour is defined by Dev Ops;
- error/idempotency tests can run end-to-end.

Production remains separately approval-gated.
