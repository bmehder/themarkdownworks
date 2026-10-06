# Markdown content contract

Status: approved 2026-10-06. Version: 1.0.0. Implementation rollout is in progress.

## Promise

A conforming document can be copied unchanged between Docklands, Chippy, and CheekyCMS and used as content. The destination supplies routing and presentation. The Markdown Works is a customized Docklands site and follows the same contract.

## Document format

Documents are UTF-8 Markdown files with a YAML frontmatter mapping enclosed by `---` lines at the start of the file. Use LF newlines for the portable baseline. The body follows the closing delimiter and may be empty.

```markdown
---
title: A portable page
description: A short summary of the page.
published: 2026-10-06
---

# A portable page

The writing belongs to you.
```

Every conforming content document supplies:

| Field | Meaning | Format |
| --- | --- | --- |
| `title` | Human-readable document title | Non-empty text |
| `description` | Human-readable summary | Non-empty text |
| `published` | Original publication date | Calendar date in `YYYY-MM-DD` form |

The publication date is required for standalone pages and collection items. It is not a modification timestamp. A project may use it for ordering or display, or leave it undisplayed. Existing publication dates should be retained; dates for undated pages should use known publication history where available.

Core fields are top-level, single-line scalar values. Implementations must agree on the text value of plain and quoted YAML strings. `published` has the same textual date meaning regardless of a YAML parser's internal representation.

## Additional metadata

Additional fields are allowed. An unrecognized field must not prevent a conforming document from being used. Each project documents fields it recognizes and their meaning. CheekyCMS exposes additional metadata in its API; renderers may ignore metadata they do not use.

Optional fields may have project-specific meanings, such as `featured_image`, `featured_alt`, `tags`, or `noindex`. Version 1 does not promise identical interpretation of these fields. A field recognized by a destination may require companion metadata; those requirements must be documented. Matching optional-field conventions can be agreed separately.

YAML lists and mappings are permitted as additional metadata. Their presence must not break core-field reading, but their rendering or interpretation is outside the shared baseline. A comma-separated string and a YAML list are different values, even when a project's tag reader happens to accept one of them.

## Body and destination

Ordinary Markdown prose, headings, lists, links, and code blocks are the portable baseline. Raw HTML may be included; its appearance depends on the destination. Project-specific shortcodes, templates, widget hooks, and CSS classes may need adaptation and are outside the baseline rendering promise.

The destination chooses filenames, folders, routes, collection membership, templates, and asset locations. Renaming or relocating a file is allowed; the document contents need not change to supply the three core fields. Referenced assets must also be copied and made available at the referenced paths, or links must be adapted.

This contract applies to author-owned website content. Repository documentation and intentionally malformed test fixtures are outside its scope. CheekyCMS may continue to serve other documents as a broader capability; documentation should identify which examples conform to this contract.

## Versioning

The contract has its own semantic version. A breaking change to required fields or their interpretation requires a major version; compatible additions use a minor version; clarifications use a patch version. Freeze a released specification and record subsequent changes in its history.

Each project records its supported contract version in repository documentation. Individual documents do not need a contract-version field. Application releases and Docklands starter releases are versioned separately.

A customized Docklands site records the upstream release, exact upstream commit, and incorporated generator updates. The Markdown Works currently records its original upstream commit in its README. Create and record a Docklands release baseline before importing the contract implementation into this site.

## Implementation boundaries

Provide clear handling of the core fields and a small shared example demonstrating portability. This contract does not prescribe an exhaustive validator, a shared package, or an architecture rewrite. Verify a real conforming document through each project's existing content path.

## Approved decisions

- Use `published`, already used by Chippy and Docklands collections, instead of introducing `date`.
- Require it on every portable content document.
- Support YAML string interpretation consistently while keeping project-specific metadata behaviour documented.
- Retain CheekyCMS's ability to serve documents outside this portable profile.

## History

- 1.0.0 — 2026-10-06: initial contract approved. Approval defines the target format; verified support is tracked separately in the rollout record.
