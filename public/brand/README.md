# Blackline Development brand assets

This folder is the canonical public-site location for approved Blackline Development brand assets that the website actually needs at runtime. The private Media repository remains the canonical source for master artwork.

## Current public asset

- `blackline-development/brand-mark-dark.svg` — compact site-use mark for the navigation and favicon. It contains a 128×128 web derivative of Media production `brands/blackline-development/logo-variant-b-on-dark.png`.

The Media master is unchanged. The public derivative exists only to avoid shipping the 1254×1254 master for a roughly 36 px navigation mark and favicon. This use does not declare Variant B to be the universal or primary Blackline Development logo.

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
- Do not invent, redraw or alter the approved logo merely to fit the current layout.
- If an asset needs a new crop, colourway or substantive design change, treat that as an explicit brand/design change rather than silently modifying the master.
- Do not embed private Media URLs, tokens or runtime dependencies into the public site.
- Remove superseded temporary branding once an approved replacement is wired in.

## Import boundary

`MEDIA_REPO_TOKEN` may remain available as a repository secret for future explicitly approved private-Media reads, but the current public brand-mark slice does not consume it. The connected workflow authoring path rejected a secret-referencing temporary workflow, so that safeguard was not bypassed. The public derivative was instead prepared from the already verified Media review artifact, with no token value read, printed or persisted.
