# Developer handbook

> Engineering documentation maintained by [LX Obsidian Labs](https://lxobsidian.co.za). Project: Newton’s 4th Training Academy. Institutional content remains subject to academy approval and applicable rights.

## First contribution
Clone the repository, use Node 22, install dependencies (npm ci if a lockfile exists), run npm run check and npm run build, then npm run dev. Open the URL printed by Vite. Do not use production student data.

## Change map
- Catalogue or programme facts: src/main.tsx, programmeTopics, src/courseVisuals.tsx and public/documents/study-guide.html.
- Presentation: src/style.css and the corresponding React component.
- Hosting policy: public/_headers and Cloudflare Pages configuration.
- Quality gates: scripts/check.mjs, scripts/check-docs.mjs and .github/workflows/quality.yml.

## Debugging
For blank screens inspect browser console and build logs. For direct-route issues inspect pathname mapping and hosting fallback. For missing visuals verify exact title keys. For missing local progress inspect storage permissions and malformed values. For external enquiries verify the generated URL with synthetic data.

## Definition of done
Build and checks pass; affected routes are exercised; documentation updated; no sensitive data or unsupported institutional claims introduced; reviewer records evidence. Do not report deployment success until the live environment is checked.
