# Basic Site Standard 1.0.0 — repository evidence

Work order: #53  
Standard: `basic-site@1.0.0`  
Branch under evidence review: `migration/devops-v3-public-adoption`

This ledger records only evidence that exists in this repository. It does not claim manual checks that have not been performed and it does not claim Dev Ops v3 `Managed` status before the live central relay verifies an exact candidate.

| Evidence key | State | Repository evidence |
| --- | --- | --- |
| responsive-matrix | Partial | Chromium run [38026733255](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38026733255) captured 9 routes × 4 viewports (1440, 900, 390 and 320px), verified every route HTML and PNG file, and visually reviewed the opening screens. The clipped 320px Services heading was corrected in `src/styles/global.css`. Chromium runtime audit run 38027188538 passed 36 of 36 checks for document overflow, clipped hero headings, landmarks, anchors, skip-link focus and contact validation. Manual full-page inspection remains outstanding. |
| navigation-review | Passed | Shared primary navigation, current-page state, skip link and clear primary action are implemented in `src/layouts/BaseLayout.astro` and checked automatically. |
| state-matrix | Partial | Commission intake has required-field error messaging, draft-opening status and no-JavaScript fallback. Full loading/empty/success/error evidence for future server-backed flows remains out of scope until those flows exist. |
| accessibility-review | Partial | Semantic navigation, labelled form controls, live status, skip link, reduced-motion handling and focus styles are source-verified. Manual screen-reader/contrast review remains required. |
| keyboard-review | Partial | Focus-visible styles, skip link and native form/details controls are source-verified. Chromium runtime audit confirmed programmatic skip-link focus; manual Tab/Shift+Tab traversal remains required. |
| validation-tests | Passed | Bounded required fields and maximum lengths are checked by `tests/basic-site-contract.test.mjs`; browser validation remains fail-safe and no server-side submission is claimed. |
| secret-scan | Passed | CI test scans public source/assets for common committed credential signatures. This supplements, not replaces, GitHub/provider secret scanning. |
| environment-review | Passed | Current public site is static output and does not require runtime secrets for the implemented intake flow; `astro.config.mjs` contains no secret-bearing configuration. |
| privacy-review | Passed | Automated checks reject known analytics hooks in `src/` and `public/`; current intake uses local email drafting and does not persist browser data. |
| content-review | Partial | Real support contact and service boundaries are present. `src/pages/privacy.astro` now gives a narrowly scoped explanation of local email drafting and subsequent email handling, visible in run 38026733255. Final legal/controller wording and discoverable shared navigation link are still under review. |
| seo-review | Passed | Canonical URLs, descriptions, Open Graph/Twitter metadata, robots and sitemap are implemented and contract-tested. |
| performance-review | Partial | Static Astro output, bounded local assets and explicit image dimensions reduce obvious instability; formal performance/manual browser evidence remains required. |
| error-path-tests | Passed | Deliberate 404 content and safe intake validation/no-JavaScript recovery are checked automatically. |
| automated-checks | Passed | Foundation CI runs `npm ci`, `npm test`, `npm run check`, `npm run lint` and `npm run build`. |
| manual-verification | Partial | Manually reviewed the 9 × 4 first-viewport screenshots from browser evidence run 38026733255 and confirmed corrected 320px heading legibility. The 36-case Chromium structural audit passed; full-page visual, keyboard tab order, contrast measurements and assistive-technology review still require recorded evidence. |
| delivery-docs | Passed | `README.md`, `CONTRIBUTING.md`, `docs/architecture.md`, `docs/intake-transport-contract.md` and `docs/devops-v3-migration.md` document current delivery and authority boundaries. |

## Protected requirements

The protected Basic Site requirements are not excepted.

- Accessible operation: source evidence exists; manual review remains pending, so overall requirement is not yet claimed complete.
- Input validation: automated evidence passes for the implemented static/local intake boundary.
- Environment/secrets: no runtime secret is needed for the implemented public flow; source-level secret checks are automated.
- Privacy default: analytics/telemetry remain absent by default and are checked in CI.
- Production error handling: current static 404 and local intake failure/recovery paths are deliberate and tested.

## Remaining gates

1. Complete full-page responsive overflow, keyboard, screen-reader and contrast verification using the exact PR #61 candidate; initial 9-route screenshot inspection is documented above.
2. Confirm controller/legal wording for the newly added privacy page and link it from the shared navigation/footer before claiming public content acceptance.
3. Preserve the already deployed OIDC-authenticated automatic Dev Ops revision relay and its mandatory file/bundle hash checks.
4. Run exact-candidate central enforcement against this repository through that live relay.
5. Mark #53 `v3-managed` only after central registry, effective contract, portfolio/project projection and enforcement health all agree.

## Additional repeatable runtime acceptance evidence

The existing browser workflow captures 9 public routes at 320, 390, 900 and 1440px and runs `scripts/basic-site-browser-audit.html` against the built site. Run [38027188538](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38027188538) passed, including 36/36 structural runtime checks. Its seven-day GitHub Actions artifact includes `runtime-audit.json`, individual screenshots and route HTML. Passing this audit does not establish screen-reader compatibility or visually measured contrast.


## Expanded rendered-accessibility checks — 2026-10-10

- Exact candidate `ab7a352db2cca686394edc38428c3d3ac358cffe`: [Foundation CI run 38071492262](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38071492262) and [Chromium browser run 38071492300](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38071492300) **passed**.
- `scripts/basic-site-browser-audit.html` now rejects unnamed links/buttons, form controls without accessible labels and images missing explicit layout dimensions, alongside the existing nine-route/four-width layout and form checks. The browser workflow fails if any check reports problems.
- Browser-level structural checks do **not** constitute a manual screen-reader, real Tab-key journey, calibrated contrast or performance audit. These remain unaccepted pending genuine verification.

## Browser resource and image checks — 2026-10-10

- Exact candidate `9a392e0b389645dcae4b678ac8562d0997ba491c`: Foundation CI [38072588514](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38072588514) **passed**, Chromium browser evidence [38072588513](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38072588513) **passed**.
- The browser audit now fails on images not successfully loaded and on over 5 MiB of transferred page resources, using each tested iframe's own `PerformanceResourceTiming` entries. Covers the existing 9 routes × 4 viewports.
- This is a regression guard, **not** a complete real-user performance assessment, Lighthouse report, contrast measurement, manual keyboard review or screen-reader certification. Those acceptance requirements remain open.

## Measured opaque text contrast — 2026-10-10

- Exact candidate `a0d9965ebaf6ed0268524501b06f1cfb54bdfa67`: [Foundation CI](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38072852658) **passed**; [Chromium browser audit](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38072852660) **passed**.
- The nine-route/four-viewport browser audit now calculates WCAG contrast ratios for up to 150 visible text elements per page wherever the foreground and a background ancestor are resolvable opaque RGB colours. It fails when sampled normal text is below 4.5:1 or large text below 3:1.
- **Limitation:** transparency, background images, blending and layered components are not conclusively covered. Manual contrast review and genuine assistive-technology / keyboard traversal remain outstanding; do not reclassify the entire `accessibility-review` evidence key as Passed.

## Focus target and native disclosure review — 2026-10-10

- Candidate `cabce602890d05e9ad2a62494a660ba3adf04f5f` initially failed browser run `38073164955` on Contact focusability because the audit included controls nested in a closed native `<details>` element. No production implementation was modified to hide this test failure.
- Follow-up candidate `74a533f3a40eb837601fe0bfe2e006ad3cc1dd08` corrected the audit to exclude descendants of collapsed disclosures. Chromium run [38073284486](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38073284486) **passed**, checking focusability of visible natural-order controls and rejecting positive tabindex values on all nine routes at four widths.
- This is programmatic focus verification, **not** proof of physical keyboard Tab/Shift+Tab navigation or assistive technology usability. That acceptance remains pending.

## Native disclosure opening test — 2026-10-10

- Exact candidate `b5fe7243faafab3fcde7b51b944f335b26a509be`: Foundation run [38074109723](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38074109723) **passed**; Chromium QA run [38074109743](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38074109743) **passed**.
- Runtime audit opens every `<details>` panel, checks that enabled interactive descendants become programmatically focusable, and restores its prior open/closed state. This covers the previously untested Contact optional-fields state.
- Does not prove Tab-key sequencing or screen-reader narration; those retain their separate manual review gate.

## Chrome-dispatched keyboard navigation — 2026-10-10

- Exact candidate `e2c3c3fdbf84d4ee32c934735d820ec465b3799e`: [Foundation CI 38074887937](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38074887937) **passed** and [Browser evidence 38074887968](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38074887968) **passed**.
- `scripts/basic-site-keyboard-cdp.mjs` launches isolated headless Chromium and drives `Input.dispatchKeyEvent` (Tab / Shift+Tab) on Home and Contact routes at 320px and 1440px. It asserts skip-link-first navigation, the primary navigation becoming focused and Shift+Tab reversing to the preceding control. Its `keyboard-cdp.json` report is retained in the browser CI artifact.
- This is a genuine browser keyboard-input test, not a physical person pressing keys or a screen-reader walkthrough. Manual assistive technology and full keyboard journey acceptance remain open. The 16-item standards acceptance record must not claim these unverified items Passed.

## Chromium accessibility-tree checks — 2026-10-10

- Exact candidate `8e7f479a99f03d0c16d00e92a687cd0da9e3aa90`: [Foundation CI 38075540895](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38075540895) **passed** and [Chromium browser evidence 38075540625](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38075540625) **passed**.
- The browser's DevTools accessibility tree is inspected alongside actual Tab/Shift+Tab input on Home and Contact at 320px and 1440px. The test requires a named navigation landmark, main landmark and accessible names for input roles, and retains results in `keyboard-cdp.json`.
- This is automated inspection of the browser accessibility representation, **not** a screen-reader user test. Manual assistive-technology acceptance, layered contrast, legal-controller accuracy and the final 16-item evidence approval remain open.

## Keyboard skip-link activation — 2026-10-10

- Exact candidate `dc49abecd37d934c63707c9c7cda39b49a2cb751`: Foundation CI [38078193343](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38078193343) **passed** and Chromium evidence [38078193340](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38078193340) **passed**.
- The CDP keyboard test now sends Tab followed by Enter on Home and Contact at 320px and 1440px and asserts that the skip link navigates to `#main-content`. This verifies actual browser keyboard activation, complementing Tab/Shift+Tab and accessibility-tree assertions.
- Manual screen-reader, complete keyboard exploration and full formal standards acceptance remain pending.

## Coordinated accessibility and build-performance QA — 2026-10-10

- Candidate `718101fb4cc001f5128e52bcfe757ab0fa0588e9`: [Foundation CI 38081621743](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38081621743) **passed** and [Basic Site browser evidence 38081621735](https://github.com/Blackline-Development/Blackline-Development/actions/runs/38081621735) **passed**.
- The CDP keyboard audit now exercises Contact optional-field disclosure using actual Enter and Tab keyboard events, verifies it opens and focus reaches an interactive descendant, and retains its existing Home/Contact navigation and accessibility-tree checks.
- `scripts/basic-site-build-budget.mjs` enumerates built Astro `dist` assets, fails when total uncompressed asset size exceeds 25 MiB or an individual built asset exceeds 5 MiB, and emits `build-asset-budget.json` in the browser workflow evidence artifact. This is an early build regression budget, **not** a Lighthouse/Core Web Vitals performance assessment.
- Initial keyboard test failure in run 38081397712 was preserved and investigated; after completing CDP Enter event sequencing, the combined candidate passed. Full assistive-technology, complete manual keyboard, real device/performance and layered contrast verification remain pending. Central acceptance still fails closed until all 16 records are genuinely supported.
