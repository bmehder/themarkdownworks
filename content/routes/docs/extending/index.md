---
title: Extending with Gleam — The Markdown Works
description: Follow the implementation and add metadata, rendered components, and build-time features with Gleam.
published: 2026-10-06
---

# Make the machinery your own.

Once you learn Gleam, these projects are small applications you can change—not a fixed menu of configuration options. Start with one feature and follow the data it needs. The examples below describe The Markdown Works' Docklands-based generator; the separate Docklands demo may have additional build steps.

## Follow an existing feature

Consider the title of a page. `content.parse_document` reads the YAML into a dictionary, validates the required title, and returns a typed `Document`. `generator.build_route` takes that title, renders the Markdown body with Mork, and constructs `site.Metadata`. `site.page` escapes the title and inserts it into the HTML document, social previews, and shared shell. Finally the generator writes the result into `dist`.

This separation is intentional: parsing decides what data means, rendering decides how it looks, and generation decides where it goes. A function returning `String` here usually produces HTML; it is not a browser component with a lifecycle.

Documentation itself is an example. The guides are ordinary files under `content/routes/docs/`. In `site.page`, a path beginning with `/docs/` selects a documentation wrapper. Private helpers build its navigation; CSS handles its layout. Adding another guide requires a Markdown route and a navigation entry, not a new routing framework. Gleam's module reference is generated separately by the build pipeline.

## Add an optional metadata feature

Suppose a page needs an optional `audience` badge. Add `audience: Beginners` to that page's YAML. The parser already retains unknown fields, so no change to the shared required fields is necessary.

Create a module such as `src/audience.gleam`:

```gleam
import content
import site

pub fn badge(metadata: content.Metadata) -> String {
  case content.metadata_string(metadata, "audience") {
    Ok(label) ->
      "<p class='audience'>For " <> site.escape_html(label) <> "</p>"
    Error(_) -> ""
  }
}
```

In `generator.build_route`, import `audience` and retain `metadata` in the existing `Document` pattern:

```gleam
let assert Ok(Document(
  title:, description:, indexable:, markdown:, metadata:, ..
)) = content.parse_document(source_markdown)
```

After the existing Markdown rendering pipeline, prepend the badge before passing the content to `site.page`:

```gleam
let rendered_content =
  audience.badge(metadata) <> rendered_content
```

Then style `.audience` in `assets/css/site.css` and rebuild. The badge now appears on route pages with that field. It does not automatically appear on collection items: those use a separate `Item` type and rendering path. Extend those deliberately if you need the same feature there.

The `case` handles both presence and absence. `site.escape_html` protects text inserted into HTML; raw user-supplied metadata should not be treated as markup. This field is your project's optional convention, not a new requirement of Markdown content contract 1.0.0.

## Add a rendered shortcode

A shortcode can insert generated HTML at a marked location in a Markdown page. The existing `Shortcode` type pairs an exact marker with its rendered HTML. `content.expand_shortcodes` replaces whole-line markers outside fenced code blocks before Mork renders the Markdown.

For a simple build-time notice, import `content` in `src/docklands.gleam` and extend the shortcode list immediately after its existing definition:

```gleam
let shortcodes = [
  content.Shortcode(
    marker: "{{ project_notice }}",
    html: "<aside class='project-notice'>Built from plain files.</aside>",
  ),
  ..shortcodes
]
```

Put the matching marker on a line of its own in a route's Markdown. The registered HTML will be present in the generated page with no browser JavaScript. For a richer component, move the HTML construction into a function in `components.gleam`, pass it typed values, and escape any text you interpolate.

Shortcodes are a local rendering feature. Another project will not interpret your custom marker without an equivalent implementation. Prefer ordinary Markdown when moving the document unchanged matters more than the extra presentation.

## Add a new output or collection

For a generated feed or search index, follow `generator.write_discovery_files`, which already writes `sitemap.xml` and `robots.txt`. Write a function that receives loaded content, transforms it into the desired format, and writes it under `dist`. Call it from `docklands.main` after output preparation and content loading. Do not write it before `prepare_output`, which clears the directory.

JSON and XML need their own correct encoding; HTML escaping is not a universal serializer. A search index can be generated at build time, but searching it interactively still needs browser code or a separate service.

For repeated content, examine `collections.Collection`, `collections.Item`, `collections.all`, and the generator's collection functions. A definition connects a source directory, route, shortcode, item label, and indexing policy. This site's `collections.all()` registers the guides collection. Its Markdown files live under `content/collections/guides/`, and `content/routes/guides/index.md` inserts their listing with the registered shortcode. The build entry point calls the collection and tag generators after loading the content. Look at this site's guides or the Docklands demo's collections for complete examples.

## Extend the server projects differently

Chippy resolves a request to a Markdown page, composes layouts, and sends HTML from an Erlang application. New request-time behaviour belongs in its server and rendering pipeline, not in Docklands' build entry point. Inspect the existing form handler for the shape of a request and response, but remember its simulated outcome does not implement email delivery, authentication, or saved submissions.

CheekyCMS loads documents into a catalogue and exposes read-only JSON responses. Inspect its frontmatter parser, loader, catalogue, and API handling modules when adding a computed response field or query option. New optional metadata may already be exposed without changing the server. Changing the response shape is an API change: test existing consumers and document the new convention. Building a frontend is a separate concern.

Use each repository's actual source and tests for its current extension points. The [reference guide](/docs/reference/) links all three repositories; this site's generated module documentation covers only this customized Docklands instance.

## Test and explain the change

Keep transformation functions separate from file writing or HTTP handling where practical. Test the normal input, a missing optional field, and text requiring escaping. Inspect the final HTML or API response, not only the function result.

In this repository, `npm run check` runs formatting checks, Gleam tests, and the production build. The other projects' READMEs list their checks. Add `///` comments to new public definitions, then rebuild Gleam's reference so the signature has an explanation alongside it.

Start with a local feature, keep required portable metadata stable, and record intentional differences from the upstream starter. You can learn the language through the [official Gleam tour](https://tour.gleam.run/) and explore this site's [generated module reference](/reference/).
