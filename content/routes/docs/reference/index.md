---
title: Content and code reference — The Markdown Works
description: Portable metadata, project conventions, and generated Gleam module documentation.
published: 2026-10-06
---

# Find the detail behind the guides.

Use this page when you need a precise field convention or want to change how the generator works.

## Markdown content contract 1.0.0

Every conforming document starts with YAML frontmatter containing non-empty text `title` and `description`, plus a valid `published` date in `YYYY-MM-DD` form. Core fields are top-level. Quoted strings and plain strings have the same meaning.

Additional metadata is allowed. Unknown lists and mappings must not confuse the core fields. Each project may recognize optional fields of its own: Docklands uses comma-separated tags and requires `featured_alt` with `featured_image`; Chippy recognizes `noindex`; CheekyCMS exposes arbitrary metadata to consumers.

The shared guarantee is usable content and core metadata. It doesn't move your templates, shortcodes, CSS, asset pipeline, or whole website unchanged.

Read the [canonical specification](https://github.com/bmehder/themarkdownworks/blob/main/docs/markdown-contract.md) and [rollout record](https://github.com/bmehder/themarkdownworks/blob/main/docs/contract-rollout.md). The same [example document](/portable/) is rendered in each project.

## Generated Gleam documentation

[Open this site's generated module reference](/reference/). It is built from the current Gleam source and includes public types, function signatures, comments, and a repository link. The package is named Docklands because this site incorporates the Docklands generator; this reference describes The Markdown Works' customized instance. Browse its [source modules on GitHub](https://github.com/bmehder/themarkdownworks/tree/main/src) alongside the reference.

Start with [content parsing](/reference/content.html), [generation](/reference/generator.html), and [the site shell](/reference/site.html). These explain implementation entry points rather than installing or editing a website.

For the other projects, use their own implementation references:

- [Chippy's Gleam code reference](https://chippy-gleam.fly.dev/reference/) — request handling, Markdown pages, templates, configuration, and forms.
- [CheekyCMS's Gleam code reference](https://cheekycms.fly.dev/reference/) — content loading, catalogues, queries, API responses, and assets. This is separate from its content/API documentation.

Each reference is generated from that project's source during its build. Read it alongside the practical guides and the version of the repository you are using.

You can generate documentation locally in a Gleam repository:

```sh
gleam docs build
```

For a project using the JavaScript target:

```sh
gleam docs build --target javascript
```

Gleam reports the generated directory when it finishes. Adding `--open` opens that reference in your browser. No Hex publication or package conversion is needed to generate it locally. See the [official command reference](https://gleam.run/documentation/command-line-reference/) for options.

## Source maps for developers

In this site and Docklands, `content` parses a document, `generator` renders routes and writes discovery files, and `site` produces the shared HTML document. `docklands.main` orchestrates the build and copies static assets. Collections add optional repeated content.

Chippy's `document` module parses metadata, `page` resolves routes and renders their content, `template` composes layouts and partials, and `server` handles HTTP. CheekyCMS's `frontmatter`, `loader`, catalogue modules, and API modules separate parsing, discovery, reloads, and responses.

Use the code in the version you cloned when extending behaviour. The generated reference on this website is not a substitute for the source or release history of a separately customized project.

## Further reading

- [Docklands source and README](https://github.com/bmehder/Docklands)
- [Chippy source and README](https://github.com/bmehder/chippy)
- [CheekyCMS source and README](https://github.com/bmehder/cheekycms)
- [Gleam language tour](https://tour.gleam.run/)
- [Portability and tradeoffs](/portability/)

There is no required shared package between the projects. A contract version describes the document format; a Docklands release describes a starter's implementation. Record the upstream release and exact commit when you customize a clone.
