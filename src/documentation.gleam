import gleam/list
import gleam/string

/// The manual's reading order, independent of publication dates.
pub fn pages() -> List(#(String, String)) {
  [
    #("/docs/", "Overview"),
    #("/docs/getting-started/", "Getting started"),
    #("/docs/customization/", "Customization"),
    #("/docs/how-it-works/", "How it works"),
    #("/docs/extending/", "Extending with Gleam"),
    #("/docs/deployment/", "Deployment & costs"),
    #("/docs/islands/", "JavaScript islands"),
    #("/docs/reference/", "Content & code reference"),
  ]
}

/// Wrap trusted, rendered Markdown in the manual layout and ordered navigation.
/// The site shell remains responsible for the document, header, and footer.
pub fn layout(path: String, content: String) -> String {
  let navigation =
    pages()
    |> list.map(fn(page) {
      let #(href, label) = page
      navigation_link(path, href, label)
    })
    |> string.join("")

  "<section class='docs-layout page-shell'><aside class='docs-sidebar'><p class='eyebrow'>Documentation</p><nav aria-label='Documentation'>"
  <> navigation
  <> "</nav></aside><article class='docs-content'>"
  <> content
  <> "</article></section>"
}

fn navigation_link(current: String, href: String, label: String) -> String {
  let active = case current == href {
    True -> " aria-current='page'"
    False -> ""
  }
  "<a href='" <> href <> "'" <> active <> ">" <> label <> "</a>"
}
