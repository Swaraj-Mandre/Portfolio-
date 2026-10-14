# Swaraj Mandre | Portfolio

A personal portfolio covering AI, research, offline learning, document retrieval and interface design.

## Projects

RecruitSheriff, Vidhya-Setu, RAG Knowledge System, MEDCARE24, LUXE, StoryBook and UAV Pollination.

The website includes pointer-following work previews, project transitions, edited showcase films, responsive layouts and a light-level control.

## Development

Requires Node.js and npm. Install with `npm ci`, then run `npm run dev`.

For a production static export, run `npm run build -- --no-lint`. Next.js still checks types. The resulting website is in `out/`. This matches the production build validated for the current portfolio. Linting can be run separately with `npm run lint`.

## Cloudflare Pages

Connect this GitHub repository to a new **Pages** project:

| Setting | Value |
| --- | --- |
| Project name | `swaraj-mandre-portfolio` |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export), or None with the settings below |
| Build command | `npm run build -- --no-lint` |
| Build output directory | `out` |
| Root directory | Repository root |

Requested address: `https://swaraj-mandre-portfolio.pages.dev`. Deployment and name availability must be confirmed in Cloudflare. After connection, pushes to `main` can automatically update the website.

No API keys or application environment variables are required for the static website. Cloudflare account access and the GitHub repository connection are managed in Cloudflare, not in source files.

## Editing

- Personal details and social links: `app/_data/portfolio.js`
- Project writeups: `app/_data/case-studies.js`
- Showcase media and chapters: `app/_data/project-showcases.json`
- Sharing metadata and site address: `app/_config/metadata.config.js`
- Public project media: `public/images/`

This repository contains the portfolio website and selected public media. It does not contain the underlying private research or application repositories.

## Credits

Adapted from [Ali Bagheri's recreation](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio) of [Dennis Snellenberg's portfolio](https://dennissnellenberg.com/). Light-control inspiration: [Sean Halpin](https://www.seanhalpin.xyz/). See [ATTRIBUTION.md](ATTRIBUTION.md).
