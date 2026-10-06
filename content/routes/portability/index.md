---
title: Portable by default — The Markdown Works
published: 2026-10-05
description: What moves cleanly between Markdown systems, what needs adaptation, and when to keep content and presentation together.
---

<article class='article page-shell'>
  <header class='article-header'>
    <p class='eyebrow'>Portable by default</p>
    <h1>Your content should outlast the system around it.</h1>
    <p class='article-lede'>Markdown keeps the most valuable part of a site readable, editable, and useful without requiring a particular product.</p>
  </header>

  <div class='article-body'>

Your content is ordinary Markdown. Moving it elsewhere may require adapting metadata, templates, and styles, but it does not require extracting it from a proprietary system.

That distinction matters. Portability does not mean every project has identical folders or that a complete site can always be moved unchanged. It means the writing remains plain text, assets remain files, and metadata remains visible rather than trapped behind an export process.

## What usually moves well

We have agreed a [Markdown content contract](https://github.com/bmehder/themarkdownworks/blob/main/docs/markdown-contract.md) for documents with a title, description, and publication date. Docklands, Chippy, and this site now implement version 1.0.0. CheekyCMS's content updates have passed local verification and await publication; the full rollout is tracked in [the project record](https://github.com/bmehder/themarkdownworks/blob/main/docs/contract-rollout.md).

```yaml
---
title: A portable page
description: A short summary of the page.
published: 2026-10-06
---
```

Extra metadata is allowed. Routes, templates, optional field behaviour, and asset locations belong to the destination project. You can see the [shared example](/portable/) rendered by this site.

- Markdown prose and headings
- Images and downloadable files
- Common frontmatter such as titles, descriptions, dates, and tags
- Raw HTML that does not depend on a particular component system

## What usually needs some work

“Move the Markdown and CSS” is a useful aspiration, but CSS will not always transfer untouched. Templates, Tailwind scanning, shortcodes, asset pipelines, routing rules, and component-specific classes create some coupling. The Markdown is the most portable part; the presentation will usually need adjustment.

That is still a much better starting point than content stored in a format that only one system understands.

## Keep things together until separation helps

A Docklands or Chippy site keeps its content and presentation in one project. That makes local development, link checking, asset changes, builds, and deployment straightforward. For many sites, this is not a limitation. It is a useful reduction in moving parts.

CheekyCMS separates the content from the frontend. That becomes valuable when several frontends consume the same material, the content and presentation need independent release cycles, or replacing a frontend should not require relocating its content.

The separation also introduces another deployment, network boundaries, caching choices, and compatibility decisions. Use it when those costs purchase something you need—not merely because decoupling sounds more advanced.

## Start with the smallest useful system

Begin with Docklands when static files can do the job. Move to Chippy when the site genuinely needs request-time behaviour. Introduce CheekyCMS when content needs an independent life of its own.

The tools can change. The Markdown remains yours.

  </div>
</article>
