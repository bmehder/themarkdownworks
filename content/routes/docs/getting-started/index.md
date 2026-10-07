---
title: Getting started — The Markdown Works
description: What to install and how to run each Markdown Works project locally.
published: 2026-10-06
---

# From clone to first edit.

Start with one project. You can run its demo locally, edit a paragraph, and refresh before designing your own site.

## Install the tools

Use the [official Gleam installation guide](https://gleam.run/install/) for macOS, Linux, or Windows. Install Erlang/OTP alongside Gleam for Chippy, CheekyCMS, and Docklands' standard local build. The current demo projects have been checked with Gleam 1.18.1; follow their pinned container and build settings when deploying.

Install [Node.js and npm](https://nodejs.org/en/download) for Docklands and Chippy's CSS/build tooling, Git for cloning, and a text editor. Docklands' included preview command also needs Python 3. CheekyCMS's image conversion requires ImageMagick if you want to generate its demo image variants locally; its container installs those tools for deployment.

Lustre is downloaded as a Docklands demo widget dependency. You don't need to install a separate Lustre application, or learn it to edit a page.

Check your installations in a terminal:

```sh
gleam --version
erl -version
node --version
npm --version
git --version
python3 --version
```

Run only the checks relevant to your project. These development tools do not require a hosting subscription. Operating-system installers and package managers may require permissions to install software; use the linked official guides for your system.

## Docklands: a static website

```sh
git clone https://github.com/bmehder/Docklands.git my-site
cd my-site
npm install
npm run build
npm run serve
```

Open **http://localhost:8000**. Edit a sentence in `content/routes/index.md`, run `npm run build` again, and refresh. The preview serves generated files; changing Markdown alone does not rebuild them.

The default build uses Erlang. The existing `npm run build:vercel` uses Gleam's JavaScript target for the generator and widget build. Node.js is then required, and Erlang is not needed for that build path. Both produce a static website.

This umbrella site is a customized Docklands instance. In The Markdown Works repository, use `npm install`, `npm run build`, and `npm run serve`; its build already uses the JavaScript target.

## Chippy: a running website

```sh
git clone https://github.com/bmehder/chippy.git my-chippy-site
cd my-chippy-site
npm install
npm run build:css
gleam run
```

Open **http://localhost:8000**. Edit `routes/+page.md` and refresh. Chippy reads it at request time. For CSS changes, rerun `npm run build:css`; `npm run watch:css` can watch styles in a separate terminal.

## CheekyCMS: a content API

```sh
git clone https://github.com/bmehder/cheekycms.git my-content-api
cd my-content-api
gleam run
```

Open **http://localhost:4000/api**. Try **http://localhost:4000/api/example/singletons/portable-page** to see a conforming document delivered as JSON. Edit `content/example/singletons/portable-page.md`; the content watcher reloads the catalogue. If an edit is invalid, the service keeps the last working catalogue and reports the error.

For demo image variants, install ImageMagick and run `gleam run -m cheekycms/assets_build`. Core API exploration does not require Node.js or Lustre.

## When something doesn't start

“Command not found” means the tool is missing from your terminal's PATH. Reopen the terminal after installing. Run commands inside the cloned repository, where `gleam.toml` or `package.json` lives.

If port 8000 is busy, stop your other preview with Ctrl+C or use `PORT=4000 gleam run` for Chippy. For CheekyCMS use `CHEEKYCMS_PORT=8080 gleam run`. Those environment-variable examples use a POSIX shell; in PowerShell set `$env:PORT = "4000"` or `$env:CHEEKYCMS_PORT = "8080"` before `gleam run`. For Docklands, `python3 -m http.server 8001 --directory dist` serves the built site on a different port.

Dependencies download on first use, so the first build needs network access and can take longer than subsequent builds. Compiler errors identify a file and line; read those before changing versions or deleting anything.

Continue with [customization](/docs/customization/).
