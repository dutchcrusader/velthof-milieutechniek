# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page static marketing site (concept/pitch) for Velthof Milieutechniek, a Dutch manufacturer of stainless-steel waste compactors ("RVS Afvalpersen") in Oldenzaal, NL. Built by Studio Orange as a concept — footer credits "CONCEPT — STUDIO ORANGE".

No build step, no package manager, no framework. Open `index.html` directly in a browser or serve the directory with any static file server.

## Structure

- `index.html` — entire page markup (all sections: hero, manifest, producten, over-ons, USP, CTA, footer). Styled with Tailwind (via CDN `<script>`, config inlined in `<head>`) plus custom classes.
- `css/main.css` — hand-written CSS for anything Tailwind utilities don't cover cleanly: custom fonts/display classes, `.p-kaart` product card component, scroll-reveal states (`.reveal-up`, `.reveal-clip`), topbar scroll-state styling, buttons (`.btn-primary`, `.btn-ghost`, `.btn-hero`), mobile menu.
- `js/main.js` — GSAP + ScrollTrigger animations (hero fade-in, scroll reveals, parallax grain, sticky-topbar background swap on scroll) and the mobile hamburger menu toggle. Respects `prefers-reduced-motion` by skipping all animation and snapping elements to their final state.
- `assets/` — product photos and logo, referenced directly by path from `index.html`.

## Key conventions

- **Tailwind config is inline** in `index.html`'s `<head>` (`tailwind.config = {...}`) — custom colors (`velthof-groen`, `staal`, `staal-grauw`, `warme-wit`) and font families (`display`/`sans`/`mono`) are defined there, not in a separate config file. Edit that block when adding brand colors/fonts, not `css/main.css`.
- **Scroll-reveal pattern**: add class `reveal-up` (fade+slide) or `reveal-clip` (clip-path wipe) to any element in HTML; `main.js` auto-wires a ScrollTrigger for every matching element on load. No JS changes needed to add a new reveal — just add the class.
- **Section eyebrows keep the label, drop the number.** Each major section has a `.section-tag` above its heading ("MANIFEST", "MACHINES", "OVER ONS", etc.) — but no `01 · ` / `02 · ` prefix. The numbering was removed deliberately: it read as AI-generated scaffolding (numbered markers implying a sequence that doesn't exist), while the label itself is a kept, intentional brand convention. Don't add numbers back. The `01`/`02`/`03` badges on product cards (`.p-kaart`) and the `.usp-nummer` marks in the "Waarom Velthof" section are unrelated — a real 3-item ordinal list — and should stay as-is.
- Product cards use the `.p-kaart` / `.p-kaart-img` / `.p-kaart-body` / `.p-specs` classes — follow this structure when adding a new product to keep the grid consistent.
- Copy is Dutch, direct/plain-spoken tone (short sentences, concrete claims, avoids marketing fluff/superlatives) — match this voice in any new copy.
