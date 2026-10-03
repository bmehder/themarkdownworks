import content.{Document}
import gleam/list
import gleam/string
import mork
import simplifile
import site

const routes_directory = "content/routes"

pub fn load_routes() -> List(String) {
  let assert Ok(files) = simplifile.get_files(in: routes_directory)

  files
  |> list.filter(string.ends_with(_, ".md"))
  |> list.sort(string.compare)
}

pub fn build_routes(routes: List(String)) -> Nil {
  list.each(routes, build_route)
}

fn build_route(source_path: String) -> Nil {
  let assert Ok(source_markdown) = simplifile.read(from: source_path)
  let Document(title:, description:, indexable:, markdown:) =
    content.parse_document(source_markdown)

  let relative_path =
    string.drop_start(source_path, string.length(routes_directory) + 1)
  let output_path = "dist/" <> string.drop_end(relative_path, 3) <> ".html"
  let output_parts = string.split(output_path, on: "/")
  let output_directory =
    output_parts
    |> list.take(list.length(output_parts) - 1)
    |> string.join("/")

  let rendered_content = markdown |> mork.parse |> mork.to_html
  let path = case relative_path {
    "index.md" -> "/"
    "404.md" -> "/404.html"
    path -> "/" <> string.drop_end(path, 8)
  }
  let html =
    site.page(
      site.Metadata(
        title:,
        description:,
        path:,
        image: "/assets/og.png",
        indexable: indexable && path != "/404.html",
      ),
      rendered_content,
    )

  let assert Ok(Nil) = simplifile.create_directory_all(output_directory)
  let assert Ok(Nil) = simplifile.write(to: output_path, contents: html)
  Nil
}

pub fn write_discovery_files(routes: List(String)) -> Nil {
  let urls =
    routes
    |> list.filter(fn(route) { !string.ends_with(route, "404.md") })
    |> list.map(fn(route) {
      let relative =
        string.drop_start(route, string.length(routes_directory) + 1)
      let path = case relative {
        "index.md" -> "/"
        other -> "/" <> string.drop_end(other, 8)
      }
      "  <url><loc>" <> site.base_url <> path <> "</loc></url>"
    })
    |> string.join("\n")

  let sitemap =
    "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>\n"
    <> urls
    <> "\n</urlset>\n"
  let robots =
    "User-agent: *\nAllow: /\nSitemap: " <> site.base_url <> "/sitemap.xml\n"

  let assert Ok(Nil) =
    simplifile.write(to: "dist/sitemap.xml", contents: sitemap)
  let assert Ok(Nil) = simplifile.write(to: "dist/robots.txt", contents: robots)
  Nil
}
