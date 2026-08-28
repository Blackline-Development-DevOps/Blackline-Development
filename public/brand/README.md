# Blackline Development brand assets

This folder is the canonical public-site location for approved Blackline Development brand assets that the website actually needs at runtime. The private Media repository remains the canonical source for master artwork.

## Current public assets

- `blackline-development/brand-mark-dark.svg` — compact site-use derivative of Media production `brands/blackline-development/logo-variant-b-on-dark.png`, retained for the website header only.
- `blackline-development/favicon.svg` — dedicated transparent small-format browser icon introduced under website bug #44 so the favicon no longer reuses the raster-backed header derivative.

The Media master is unchanged. These public derivatives exist only for defined website runtime uses and do not declare Variant B or the favicon treatment to be the universal or primary Blackline Development logo.

## Header rendering note

The supplied dark-background logo derivative contains raster anti-aliasing/background information that was visibly producing colour fringing and a boxed treatment at small header sizes. The website therefore applies a tightly scoped monochrome/high-contrast screen blend to `.wordmark-mark` only. This is a presentation correction for the dark header; it does not modify the canonical Media master or recolour unrelated imagery.

The favicon is intentionally separate because browser-tab icons need a transparent, simplified vector treatment and cannot rely on page CSS to clean a raster-backed asset.

## Naming convention

When additional approved source assets are genuinely needed by the public site, Development Operations should normalise them to clear stable names such as:

- `blackline-development-logo-primary.<ext>` — primary full logo/wordmark used in standard brand applications once explicitly designated.
- `blackline-development-logo-mark.<ext>` — standalone mark/icon where an approved mark exists.
- `blackline-development-logo-light.<ext>` — light-on-dark variant only where genuinely distinct from the primary asset.
- `blackline-development-logo-dark.<ext>` — dark-on-light variant only where genuinely distinct from the primary asset.
- `blackline-development-favicon.<ext>` — dedicated favicon/source icon where a separate asset is required.
- `blackline-development-social.<ext>` — approved social/share image where supplied.

Do not duplicate every Media master into the public repository by default. Keep the smallest useful public set and reference those assets from the website.

## Asset handling

- Preserve canonical source artwork in the private Media repository.
- Prefer SVG for approved vector logos where an approved vector source exists.
- PNG/WebP derivatives may be created only for a documented site use and must retain clear source provenance.
- Do not silently redesign or declare a new universal-primary logo merely to fit the current layout.
- A deliberately simplified favicon or presentation-only derivative is permitted only when explicitly documented and approved for that use.
- If an asset needs a new crop, colourway or substantive design change, treat that as an explicit brand/design change rather than silently modifying the master.
- Do not embed private Media URLs, tokens or runtime dependencies into the public site.
- Remove superseded temporary branding once an approved replacement is wired in.

## Import boundary

A repository secret may remain available for future explicitly approved private-Media reads, but the current public brand assets do not consume it. No secret value is required at runtime and no private Media URL is embedded in public output.
