# The Markdown Works

> Markdown works. We build around that.

The umbrella site for three independent open-source projects that use Markdown in different ways:

- [Chippy](https://chippy-gleam.fly.dev) — a dynamic, server-rendered website backed by Markdown files rather than a database.
- [CheekyCMS](https://cheekycms.fly.dev) — a read-only JSON content API for Markdown and repository-managed assets.
- [Docklands](https://docklands-ssg.vercel.app) — a content-first static-site starter built with Gleam.

The site introduces the projects, compares where each one fits, and gives each project a shared visual home without making them depend on one another.

## Website

[themarkdownworks.vercel.app](https://themarkdownworks.vercel.app)

## Features

- Responsive editorial layout with a restrained maximum width
- Direct links to every project website and GitHub repository
- System-aware light and dark themes
- Remembered theme preference with no incorrect-theme flash on page load
- Keyboard-accessible desktop and mobile navigation
- Static output suitable for deployment to any CDN
- Open Graph artwork and a custom favicon

## Development

Requirements:

- Node.js 22
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

The generated site is written to `dist/client`.

## Deployment

The repository is connected to Vercel. Pushing to `main` creates a production deployment using the settings in `vercel.json`.

The site has no database, server-side application state, or required environment variables.

## Repository

[github.com/bmehder/themarkdownworks](https://github.com/bmehder/themarkdownworks)
