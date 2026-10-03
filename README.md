# The Markdown Works

> Markdown works. We build around that.

The umbrella site for three independent open-source projects that use Markdown in different ways:

- [Chippy](https://chippy-gleam.fly.dev) — a dynamic, server-rendered website backed by Markdown files rather than a database.
- [CheekyCMS](https://cheekycms.fly.dev) — a read-only JSON content API for Markdown and repository-managed assets.
- [Docklands](https://docklands-ssg.vercel.app) — a content-first static-site starter built with Gleam.

The site introduces the projects, compares where each one fits, and gives each project a shared visual home without making them depend on one another. It is built with Docklands, dogfooding the same static-first approach it describes.

## Website

[themarkdownworks.vercel.app](https://themarkdownworks.vercel.app)

## Features

- Responsive editorial layout with a restrained maximum width
- Direct links to every project website and GitHub repository
- Markdown routes generated into ordinary static HTML by Gleam
- System-aware light and dark themes
- Remembered theme preference with no incorrect-theme flash on page load
- Keyboard-accessible desktop and mobile navigation
- Static output suitable for deployment to any CDN
- Open Graph artwork and a custom favicon

## Development

Requirements:

- Gleam and Erlang/OTP
- Node.js
- npm

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Create the production static build:

```sh
npm run build
```

The generated site is written to `dist/`.

## How it is built

- `content/routes/` contains the author-owned Markdown pages.
- `src/` contains the small Gleam generator and shared document shell.
- `assets/css/site.css` contains the visual system compiled by Tailwind CSS.
- `assets/static/` contains files copied directly into the generated site.

JavaScript is limited to `assets/static/site.js`: theme preference, closing the native mobile menu after navigation, and the back-to-top enhancement. The content, layout, navigation, comparison, and responsive design are static HTML and CSS.

## Deployment

The repository is connected to Vercel. Pushing to `main` creates a production deployment using the settings in `vercel.json`.

The site has no database, server-side application state, or required environment variables.

## Repository

[github.com/bmehder/themarkdownworks](https://github.com/bmehder/themarkdownworks)
