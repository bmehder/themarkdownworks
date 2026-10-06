# Markdown contract rollout

Status: contract 1.0.0 approved 2026-10-06. Audits complete; Docklands implementation is the first stage.

Canonical specification: [markdown-contract.md](markdown-contract.md).

## Local audit baseline — 2026-10-06

| Project | Content files | Required-field gaps |
| --- | ---: | --- |
| The Markdown Works | 3 | All have title and description; all lack published |
| Docklands | 16 | All have title and description; 11 collection items have published; 5 routes lack it |
| Chippy | 7 | All have title, description, and published |
| CheekyCMS | 17 | Metadata varies; some lack description, three use name rather than title, and many lack published |

Counts exclude repository documentation and test fixtures. CheekyCMS includes an existing untracked guide; preserve ownership of that file. This is a field inventory, not a full YAML or rendering conformance certification.

Docklands and The Markdown Works use line-based frontmatter extraction. Chippy also reads frontmatter lines. CheekyCMS parses YAML. Quoted strings and structured optional fields need review before claiming unchanged-file compatibility.

## Coordination

This task owns the draft, decisions, rollout record, and The Markdown Works changes. Existing project tasks first review their content and readers and report gaps against the draft. Audit instructions do not authorize implementation or publication.

All three project audits are complete. Docklands needs publication metadata on five routes and proper YAML interpretation. Chippy's seven documents already have the required fields, but its reader needs proper YAML interpretation. Both readers currently confuse nested fields with top-level fields and do not decode quoted strings consistently. CheekyCMS already has suitable YAML semantics; 15 of its 17 author-owned documents need a total of 27 field additions (3 titles, 11 descriptions, 13 publication dates). Its permissive content model and associated test fixtures remain supported.

Docklands found 2026-09-30 in Git history for the five undated routes. Migration should retain existing collection dates. Optional metadata conventions and destination-specific shortcodes remain outside the common rendering guarantee.

After user review, implement one project at a time:

1. Docklands: establish a release baseline, fill required metadata, implement agreed reader behaviour, update content examples, guides, README, and accurate marketing claims. Report commit, release, verification, and deployment.
2. The Markdown Works: incorporate the approved Docklands generator changes, add publication metadata, record the new upstream baseline and contract version, and update portability messaging.
3. Chippy: apply the agreed parsing behaviour, keep existing publication dates, update examples and documentation, and demonstrate unchanged-document rendering.
4. CheekyCMS: align portable examples and documentation while retaining arbitrary metadata delivery; demonstrate the same document through its API.

Each project preserves unrelated work and reports the exact changes, verification, commit, and deployment status. The coordinator reviews results before advancing the next project. Public claims of shared support wait until all three implementations are verified.

## Task mapping

| Project | Existing task | Task ID |
| --- | --- | --- |
| Docklands | Build Gleam static site POC | 01a0ef94-fbb3-7a41-a502-8a08034a16ee |
| Chippy | Build Gleam SSR website system | 01a0febc-d920-7d33-b5bd-742ceca7088d |
| CheekyCMS | Build CheekyCMS in Gleam | 01a0f914-50af-7ff3-b1eb-e9a0764d47d1 |

The Docklands task listing still shows its historical ssg directory; recent task history confirms it works in /Users/bradleymehder/Developer/Gleam/docklands.
