# Angular 9 → Static Site Migration Plan

## Overview

Migrating the Architect Hawkins LLC portfolio site from an Angular 9 SPA to a simple static site served by GitHub Pages. Each portfolio page becomes its own `.html` file. Pages are built using the `/visual-page-builder` skill with Tailwind utilities layered on top.

---

## Phase 1 - Scaffold & Deprecate
1. Move Angular project into `deprecated-project/` folder
2. Move existing `README.md` into `deprecated-project/README.md`
3. Create new `README.md` in root documenting the static site project
4. Download `tailwind.min.js` (Tailwind standalone CDN build) and save to `assets/js/tailwind.min.js`
5. Create `assets/` folder structure: `css/`, `js/`, `images/`, `fonts/`
6. Create root `index.html` shell referencing `<script src="assets/js/tailwind.min.js">` - no external fetch
7. Add inline `tailwind.config` block for custom theme tokens (colors, fonts matching brand)
8. Port CSS custom properties for color theming from Angular SCSS into `assets/css/main.css`
9. Copy `CNAME` to root

## Phase 2 - Global Styles
1. Extract Angular SCSS theme variables into CSS custom properties
2. Port masonry grid, flexbox utilities, and sticky nav styles into `assets/css/main.css`
3. Define Tailwind theme extensions to match existing brand colors

## Phase 3 - Shell, Nav, Theming
1. Run /visual-page-builder to build the nav shell and page layout
2. Port sidenav as CSS drawer (checkbox toggle, no Material)
3. Vanilla JS for color theme picker (swap CSS custom property values)
4. Vanilla JS sticky toolbar on scroll

## Phase 4 - Home Page
1. Run /visual-page-builder for each of the 5 sections (header, profile, services, strengths, contact)
2. CSS-only accordion for the "More..." bio (existing pattern)
3. Scroll-to via scrollIntoView or anchor #id

## Phase 5 - Portfolio Pages (8 pages)
1. Run /visual-page-builder once per portfolio page
2. Masonry grid via CSS Grid in `assets/css/main.css`
3. Vanilla JS modal for image fullscreen preview
4. Shared header/footer snippet duplicated per page

## Phase 6 - SEO
1. Hardcode full `<head>` per page (title, description, OG, canonical, JSON-LD)
2. Update `sitemap.xml`
3. Verify `robots.txt`

## Phase 7 - Deploy & Verify
1. Push to GitHub Pages branch
2. Verify CNAME resolves to architecthawkins.com
3. Smoke test all 9 routes and image paths
4. Lighthouse audit on home + one portfolio page

---

## Notes

- Local `tailwind.min.js` is the browser-runtime build, no purging, no build step - acceptable for low-traffic portfolio site
- Contact form will need a static form solution (Formspree or mailto fallback) - evaluate before Phase 4
- Each portfolio page is a standalone `.html` file - no SPA routing hack needed for GitHub Pages
