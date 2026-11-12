# maxawad.github.io

The personal website of Max Awad, a staff-level platform and AI-infrastructure engineer who takes contract and fractional work. It is a single page that explains what he builds, his experience, how he works, his engagement terms, an FAQ, and how to get in touch. It is hosted for free on GitHub Pages.

Live site: https://maxawad.github.io/

## What it does

- Presents services (LLM agents, RAG and MCP, evaluation and observability, backend platforms) and example work.
- Links to open source projects on GitHub (support-epic, epic-vendor-support-copilot, trello-mcp).
- Offers a downloadable resume (`resume.pdf`), a booking link, and a pre-filled contact email, plus a copy-email button.
- Includes search and sharing metadata: Open Graph and Twitter cards, schema.org JSON-LD (Person and FAQ), `robots.txt` and `sitemap.xml`.
- Has a responsive layout, a mobile menu, scroll-reveal animations and a scroll-spy that highlights the current nav section.

## Tech stack

Plain HTML, CSS and vanilla JavaScript. There is no build step, no framework, no package manager and no dependencies. The only external resource is Google Fonts (Fraunces and Inter), loaded from the browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole page, plus metadata and structured data |
| `styles.css` | Styling |
| `script.js` | Nav, menu, reveal, scroll-spy and copy-email behavior |
| `resume.pdf` | Downloadable resume |
| `og-image.png`, `og-image.svg` | Social share card (the SVG is the source) |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are, without Jekyll |

## Run it locally

The site is already static, so you only need to serve the folder:

```bash
git clone https://github.com/maxawad/maxawad.github.io.git
cd maxawad.github.io
python3 -m http.server 8000
```

Then open http://localhost:8000/. Opening `index.html` directly in a browser also works.

## Deploy

GitHub Pages serves the repository root from `main`. Pushing to `main` publishes the site. For any other static host, upload the files in this folder as they are. No secrets or environment variables are needed.

## Status

Working and live. It is maintained and updated regularly.

## Credits

Designed and written by Max Awad. Fonts are Fraunces and Inter from Google Fonts, used under their open font licenses. The code has no license file yet, so all rights are reserved by default.
