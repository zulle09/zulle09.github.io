# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Riccardo Zuliani's personal portfolio: a one-page static Astro 7 site (no UI framework, zero framework JS) served by GitHub Pages as the user site `https://zulle09.github.io`. Node >= 22.12.

## Commands

```bash
npm run dev      # dev server on :4321
npm run build    # static build into dist/
npm run preview  # serve the built dist/
```

- There is no lint, typecheck or test script. `npm run build` is the only automated check; it does not typecheck `.astro` frontmatter.
- Dependencies are deliberately minimal: `astro` plus two `@fontsource-variable/*` font packages. No Tailwind, GSAP or icon packages; icons are inline SVG and motion is CSS plus one IntersectionObserver. Flag before adding anything.
- `.claude/launch.json` (config `portfolio-dev`, port 4321) is only the desktop app's preview launcher. It is untracked.

## Content: one source, mirrored from the CV

- All copy lives in `src/data/profile.ts` (profile, nav, socials, CV link, experience, projects, education, skills). Components only render it, so content changes go there.
- The CV's source of truth is outside this repo: `~/Github Project/New_CV_Zuliani_Riccardo/riccardo_zuliani_resume.tex`. Keep `profile.ts` in sync with it (wording is near-verbatim; project descriptions are trimmed to noun phrases).
- `public/Riccardo_Zuliani_CV.pdf` is a snapshot of that `.tex` with the Mobile line removed. Regenerate after CV edits and confirm the output has no phone number:

  ```bash
  cd ~/"Github Project/New_CV_Zuliani_Riccardo" && tmp=$(mktemp -d) && sed -E 's|Mobile: \\href\{tel:[^}]*\}\{[^}]*\}||' riccardo_zuliani_resume.tex > "$tmp/resume.tex" && (cd "$tmp" && pdflatex -interaction=nonstopmode resume.tex >/dev/null) && cp "$tmp/resume.pdf" ~/"Github Project/zulle09.github.io/public/Riccardo_Zuliani_CV.pdf" && rm -r "$tmp"
  ```
- Privacy rule: the phone number must not appear anywhere on the site or in this repo. The original CV PDF contains it, so never copy that PDF into `src/` or `public/`.
- Only link to public repos. `github.com/zulle09/{TrainingHub,AI-Bakery-Assistant,StrudelAssistant}` were private (404) on 2026-10-11, so those entries intentionally have no link; check with `curl -IL` first. The GitHub username is `zulle09` (renamed from `zuliani99`, whose profile URL now 404s).

## Edits that span several files

- `projects[].glyph` (union type in `profile.ts`) maps to an inline SVG branch in `Projects.astro`; a new glyph needs both.
- `projects[].size` (`wide` | `narrow`) becomes 7/5 columns of a 12-column grid from 64rem. Keep rows balanced (narrow+wide, then wide+narrow) or one card stretches and leaves a gap.
- New section: add a `navItems` entry in `profile.ts` and a section `id` equal to its `href`. The `01`–`06` eyebrow numbers are hard-coded in each section component.
- New icon: add it to the name union and the shape map in `Icon.astro` (UI icons are Lucide paths, GitHub/LinkedIn are Simple Icons paths).
- `experience[].end` is optional; omitting it renders "Present".

## Theming and progressive enhancement

- Design tokens are in `src/styles/global.css`: dark on `:root`, light under `:root[data-theme='light']`. Components use `var(--token)` only, no raw colours. Text pairs were verified at >= 4.5:1 in both themes; recheck if you change tokens.
- `Base.astro` runs an inline head script before paint: it swaps `html.no-js` for `html.js` and sets `data-theme` from `localStorage` (guarded). `ThemeToggle.astro` flips and persists it. The `theme-color` hex values (`#0b0d10` dark, `#fafaf9` light) are duplicated in both files and must match `--bg`.
- `.no-js` / `.js` gate JS-only UI (theme toggle, menu button) and the header's no-JS layout in `Header.astro`.
- Scroll reveal: elements with `data-reveal` (optional `--reveal-delay`) are hidden only while `html.reveal-on` is set, which an end-of-body inline script in `Base.astro` adds (skipped for reduced motion or no IntersectionObserver); it then adds `.is-visible` on intersect. Put `data-reveal` on wrapper elements, not on elements with their own hover `transform`.
- `Header.astro` also holds the scrollspy (`aria-current="location"`) and mobile menu scripts; they rely on `[data-nav-link]` hashes matching section ids.
- `SignalLine.astro` builds its hero SVG path at build time from a seeded PRNG (deterministic); the draw animation is CSS-only and renders its final state under reduced motion.

## Assets and deploy

- Fonts are self-hosted via `@fontsource-variable/*` imports in `Base.astro` (families `'Space Grotesk Variable'`, `'JetBrains Mono Variable'`).
- The portrait `src/assets/riccardo.jpg` is pre-cropped to 4:5 (1200x1500) and rendered with `<Picture>` from `astro:assets` in `About.astro`.
- Deploy: `.github/workflows/deploy.yml` (`withastro/action`) on push to `main`. The repo's Pages source must be set to "GitHub Actions". `astro.config.mjs` sets `site` and no `base` because this is a user-site repo.
- The `gh` CLI on this machine is logged in as a different account (`theitalianelixirdev`) than the repo owner (`zulle09`); confirm before any `gh` write.
- `public/og-image.png` (1200x630) is a static link-preview image referenced by the `og:image`/`twitter:image` tags in `Base.astro`. It was rendered once outside the repo (SVG with text converted to paths from the project's fonts, rasterised with the `sharp` that Astro bundles), so there is no generator script. Redo it by hand if the name, role or accent colour changes; social platforms cache previews, so a changed image may take a while to show.
- Not implemented: sitemap, contact form.

## Gotchas

- In the desktop app's browser pane the tab reports `document.visibilityState === 'hidden'`, so reveal transitions lag and screenshots can catch content mid-fade. Wait and re-screenshot before assuming a bug.
- Astro 7 is recent; check docs.astro.build for config and API details instead of relying on memory.
