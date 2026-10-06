# Markdown contract rollout

Status: complete. Contract 1.0.0 was approved and implemented across all four sites on 2026-10-06.

Canonical specification: [markdown-contract.md](markdown-contract.md).

## Releases and verification

| Project | Implementation commit | Verification |
| --- | --- | --- |
| Docklands | `0ac71d3500c05b3876b0e7c8962a851a4fda139c` — v2.0.0 | 5 tests, full production check, shared example, and Vercel deployment verified |
| The Markdown Works | `f95f0cb` — adopts Docklands v2.0.0 | 4 tests, production build, unchanged example, and Vercel deployment verified |
| Chippy | `27e9941b51b1fbf81b773beb2600db3c96127e50` | 30 tests, unchanged example, and Fly.io deployment verified |
| CheekyCMS | `a4566b398c6c21efc9a858a71a3753081f766be1` | 87 tests, formatting, Erlang shipment, unchanged example, and Fly.io deployment verified |

Docklands v1.0.0 records the pre-contract baseline at `1882ef97dbc787efc26ea8c6616e8aa5552fc2a6`. The Markdown Works incorporates v2.0.0's content reader, generator, and locked dependencies while retaining its own shell and build configuration. Starter releases and contract versions are independent.

CheekyCMS's [GitHub Actions deployment](https://github.com/bmehder/cheekycms/actions/runs/37510954251) succeeded. The coordinator independently fetched its production API example and health endpoint after release: the API returned the correct core fields, nested additional metadata, and rendered HTML; health reported `ok`.

## Shared example

The [canonical document](examples/portable-page.md) was copied unchanged into each project's normal content path and verified through its existing renderer or API.

- [Docklands](https://docklands-ssg.vercel.app/portable/)
- [The Markdown Works](https://themarkdownworks.vercel.app/portable/)
- [Chippy](https://chippy-gleam.fly.dev/portable)
- [CheekyCMS API](https://cheekycms.fly.dev/api/example/singletons/portable-page)

The guarantee covers core metadata and ordinary Markdown. Optional metadata meanings, templates, shortcodes, routing, CSS, and asset locations remain destination-specific as documented in the contract. CheekyCMS retains its broader arbitrary-metadata content model.

## Content and documentation

Docklands added publication dates to five routes using their first appearance in Git history, 2026-09-30. Existing collection dates were retained. Its README, guides, metadata examples, and release history were updated.

The Markdown Works' homepage and 404 date from 2026-10-03; the portability article dates from 2026-10-05. Dates follow Git history. Its README records the upstream release and exact commit; the portability article now describes completed shared support.

Chippy retained all seven existing publication dates and its optional `noindex` behaviour. Its README, developer guide, About page, and Inside Chippy article were updated.

CheekyCMS added 3 titles, 11 descriptions, and 13 publication dates across 15 existing documents, retaining editorial dates and using 2026-10-02 from Git history for previously undated tracked content. Its README and marketing Markdown/JSON examples were updated. A pre-existing untracked duplicate article was preserved during implementation and subsequently removed by its task at the user's request; its tracked, published Docklands counterpart remains available.

## Historical audit baseline — 2026-10-06

These counts describe the content before implementation, not its current state.

| Project | Content files | Original gaps |
| --- | ---: | --- |
| The Markdown Works | 3 | All lacked published |
| Docklands | 16 | Five routes lacked published |
| Chippy | 7 | Core metadata complete; reader lacked YAML semantics |
| CheekyCMS | 17 | Fifteen documents needed 27 metadata additions |

Repository documentation and intentionally minimal or malformed test fixtures were excluded from content migration. Docklands and Chippy replaced line-based extraction with YAML mapping interpretation so quoted strings and nested unknown fields work consistently.

## Coordination record

Implementation proceeded through Docklands, The Markdown Works, Chippy, then CheekyCMS. CheekyCMS's release initially required direct approval in its own task; the user supplied it and the release completed. No pending release blocker remains.

| Project | Existing task | Task ID |
| --- | --- | --- |
| Docklands | Build Gleam static site POC | 01a0ef94-fbb3-7a41-a502-8a08034a16ee |
| Chippy | Build Gleam SSR website system | 01a0febc-d920-7d33-b5bd-742ceca7088d |
| CheekyCMS | Build CheekyCMS in Gleam | 01a0f914-50af-7ff3-b1eb-e9a0764d47d1 |

The Docklands task's historical ssg directory differs from its current repository at /Users/bradleymehder/Developer/Gleam/docklands.
