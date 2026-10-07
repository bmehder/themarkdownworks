---
title: How the projects work — The Markdown Works
description: Understand build-time generation, request-time rendering, and API delivery without learning every dependency first.
published: 2026-10-06
---

# One source. Three delivery models.

The document is a Markdown file with visible metadata. Each project reads it and chooses a different time and form for delivery.

## Docklands: generate ahead of time

A build reads Markdown, interprets YAML metadata, converts the body to HTML, and inserts it into the shared site shell. The generator writes pages, sitemap, robots file, and copied assets into `dist/`. Build tools compile CSS, optimize images, and build any configured widgets.

A visitor receives those finished files. There is no Gleam application serving each request, and no Erlang runtime is needed on the static host. Gleam's JavaScript build target means Node.js can run the generator during a hosted build; it does not turn the resulting website into a JavaScript application.

Content changes become public after a new build and deployment. Collections and shortcodes are generation features. A deployment platform can perform that build from Git, so generated files don't need to be committed.

## Chippy: render at request time

The incoming URL maps to a directory. Chippy reads its `+page.md`, parses metadata, renders Markdown, composes HTML layouts and partials, and returns a complete page through its HTTP server.

The server runs on Erlang/OTP. The browser receives HTML and static assets; it does not need Gleam or a client-side router. Requests can also reach handlers you write for dynamic behaviour.

Editing a local Markdown file affects subsequent requests without a content build. In the included deployment, content is packaged into a container, so publishing repository changes still requires a deployment. Runtime rendering does not make Git updates appear in an already-running image automatically.

## CheekyCMS: deliver a catalogue

At startup the service discovers content, parses metadata, renders Markdown, and builds an in-memory catalogue. Requests query that catalogue and receive JSON containing metadata and HTML. The watcher reloads changed local content; a failed reload retains the previous working catalogue.

CheekyCMS also serves repository-managed assets. It is read-only: it provides no editing dashboard or upload workflow. Git stores the source and history. A frontend can be server-rendered, static, or interactive; choosing the API does not force a particular frontend framework.

## What the dependencies do

- **Gleam:** compiles the generator or server source.
- **Erlang/OTP (the BEAM runtime):** runs Chippy and CheekyCMS, and Docklands' default local generator.
- **Mörk:** converts Markdown to HTML.
- **Yamleam:** interprets YAML frontmatter.
- **Mist:** handles HTTP for the server projects.
- **Node.js and npm:** run and install the demo CSS and browser-build tools.
- **Tailwind CSS:** produces a static stylesheet.
- **Lustre:** builds the optional Docklands demo island.

None of these require you to turn the whole website into a client application. Start with content and HTML/CSS, then learn the part you actually change.

For a walkthrough and worked examples, read [Extending with Gleam](/docs/extending/). Use the [content and code reference](/docs/reference/) for module signatures.
