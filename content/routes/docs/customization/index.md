---
title: Customize a site — The Markdown Works
description: Where to edit Markdown, nested pages, navigation, templates, CSS, and assets in each project.
published: 2026-10-06
---

# Make the demo your own.

Clone the project into your own repository and keep its working demo as a reference while you change it. Start with the site identity, a page of your own, and navigation to that page.

## Write a document

All portable content uses the same three core fields:

```markdown
---
title: About our studio
description: The people and ideas behind our work.
published: 2026-10-06
---

# About our studio

We make useful things.
```

Use the original publication date, not a timestamp that changes every time you edit. Additional YAML metadata is allowed. Raw HTML inside Markdown is useful for custom layouts, but its styling belongs to the destination site. [The reference guide](/docs/reference/) explains optional fields and portability.

## Docklands

Put that document at `content/routes/about/index.md` to generate `/about/`. A nested document at `content/routes/about/team/index.md` generates `/about/team/`. Use `index.md` for directory routes; `404.md` is the special error page. A parent directory does not need its own page for a child page to exist.

Change branding, metadata defaults, shared header/footer, and navigation in `src/site.gleam`. Set `base_url` to your public origin so canonical URLs and the sitemap identify your site. Add a navigation link explicitly: creating a route does not automatically add a menu item.

Edit `assets/css/site.css` for styles. Put directly served files in `assets/static/`; they appear under `/assets/` in the output. Raster source images beneath `assets/static/images/` are also processed into WebP files by the image build. Match your Markdown links to the output paths.

Collections are configured in `src/collections.gleam`, with documents under `content/collections/`. They provide listings, ordering, and tags. Their optional metadata includes comma-separated `tags` and `featured_image` with `featured_alt`. Use the existing guides as examples, then rebuild.

`src/content.gleam` reads metadata; `src/generator.gleam` turns routes and collections into files. You usually don't need to edit either to add a normal page. The Markdown Works uses the same generator with its own shell and a guides collection.

## Chippy

Put the document at `routes/about/+page.md` for `/about`, or `routes/about/team/+page.md` for `/about/team`.

Change `site.toml` for the site name, description, language, and public URL. The root `routes/+layout.html` is the HTML document with a `{{ content }}` insertion point. Shared navigation and footer live in `routes/_partials/`. Add a link in the header partial when you add a page.

A nested `+layout.html` is a fragment wrapping that section's pages. Layouts compose from the root down to the requested page; every wrapping layout needs the content slot. The existing posts directory demonstrates this. Ordinary assets can live beside the page: `routes/about/team/photo.webp` is served at `/about/team/photo.webp`.

Edit `styles/site.css` and rebuild CSS. Markdown edits are read on the next request; changes to compiled Gleam server code require restarting or rebuilding the server.

Chippy supports collections through its configured page conventions. Its `{{ collection }}` hook and contact-feedback demo are project features, not portable Markdown syntax. The contact form demo doesn't send mail; replacing it with a real handler is server implementation work.

## CheekyCMS

Place one-off pages at `content/<project>/singletons/<name>.md` and repeated items at `content/<project>/collections/<collection>/<slug>.md`.

For example, `content/studio/singletons/about.md` becomes `/api/studio/singletons/about`; `content/studio/collections/projects/orbit.md` becomes `/api/studio/collections/projects/orbit`. The response includes metadata and rendered HTML. Your frontend decides how these become pages and navigation.

Keep extra fields such as client names, ingredients, or nested image metadata: CheekyCMS delivers them as data. It can also serve documents outside the portable contract. Its demo homepage is itself content at `content/cheekycms/singletons/homepage.md`, but a different frontend can use the API without adopting that page's design.

Use `assets/<project>/` for repository-backed images and downloads. Image variants are generated from supported `*-source` files. The [repository README](https://github.com/bmehder/cheekycms#readme) documents the exact conventions.

## Check your changes

Before publishing, check the result locally:

- Open the page you changed. Make sure the text looks right and its images load.
- Follow the links you added. If the page should appear in the menu, check that you added a working menu link.
- Narrow your browser window to roughly a phone's width. Check that the text is readable and the menu works.
- Check the page's YAML `title`, `description`, and `published` values. The title and description should describe this page, not the starter's example.

For CheekyCMS, open the document's API URL and check the returned metadata and HTML. If you have connected a frontend, check the resulting page there too; a valid API response does not guarantee that the frontend displays it correctly.

Then run the project's automated checks from a terminal inside its repository:

- **Docklands or Chippy:** run `npm run check`.
- **CheekyCMS:** run `gleam test`. Before deploying, also follow its [deployment guide](https://github.com/bmehder/cheekycms/blob/main/DEPLOYMENT.md) to check the packaged application.

These commands catch build and test failures. They don't replace looking at the page yourself.

Keep source in Git. Docklands' `dist/` is generated output; rebuild it rather than editing its HTML. When you want upstream improvements, compare your clone with a known upstream release and keep your own content and design changes.

Continue with [How it works](/docs/how-it-works/).
