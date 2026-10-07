import content
import gleam/string
import gleeunit/should
import site

// Keep the small metadata example in the extension guide executable.
fn badge(metadata: content.Metadata) -> String {
  case content.metadata_string(metadata, "audience") {
    Ok(label) -> "<p class='audience'>For " <> site.escape_html(label) <> "</p>"
    Error(_) -> ""
  }
}

pub fn metadata_badge_example_test() {
  let source =
    "---\ntitle: Example\ndescription: Example page\npublished: 2026-10-06\naudience: '<Beginners>'\n---\nHello"
  let assert Ok(document) = content.parse_document(source)
  badge(document.metadata)
  |> should.equal("<p class='audience'>For &lt;Beginners&gt;</p>")
}

pub fn missing_badge_example_test() {
  let source =
    "---\ntitle: Example\ndescription: Example page\npublished: 2026-10-06\n---\nHello"
  let assert Ok(document) = content.parse_document(source)
  badge(document.metadata) |> should.equal("")
}

pub fn documentation_wrapper_test() {
  let html =
    site.page(
      site.Metadata(
        "Guide",
        "Description",
        "/docs/extending/",
        "/assets/og.png",
        "website",
        True,
      ),
      "<h1>Guide</h1>",
    )
  html
  |> string.contains("href='/docs/extending/' aria-current='page'")
  |> should.be_true
  html
  |> string.contains("<article class='docs-content'><h1>Guide</h1></article>")
  |> should.be_true
}

pub fn shortcode_example_test() {
  let shortcodes = []
  let shortcodes = [
    content.Shortcode(
      marker: "{{ project_notice }}",
      html: "<aside class='project-notice'>Built from plain files.</aside>",
    ),
    ..shortcodes
  ]
  content.expand_shortcodes("{{ project_notice }}", shortcodes)
  |> should.equal(
    "<aside class='project-notice'>Built from plain files.</aside>",
  )
}
