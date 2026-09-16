# RoofCoat Leads (roofcoatleads.com)

Static site built on the Gencyo "SEO Agency" template, the same build as Paving Leads, in RoofCoat Leads colours (#09090b / gold #eab308).

- `npm run build` writes `dist/` (Vercel runs this, see `vercel.json`).
- `npm run dev` builds and serves on http://localhost:5260.
- Copy and data: `src/content.mjs`, `src/service-areas.mjs`, `src/states.mjs`; blog and legal bodies in `src/pages/`.
- Page markup: `scripts/build.mjs`; shared header/footer/modal: `scripts/layout.mjs`.
- Styles: template `style.css`, shared `pl.css`, RoofCoat-specific `rc.css`. Behaviour: `src/assets/js/pl.js`.
