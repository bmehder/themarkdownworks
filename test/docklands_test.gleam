import docklands
import gleam/string
import gleeunit
import simplifile
import site

pub fn main() -> Nil {
  gleeunit.main()
}

pub fn absolute_url_test() {
  assert site.absolute_url("/projects/")
    == "https://themarkdownworks.vercel.app/projects/"
  assert site.absolute_url("https://cdn.example.com/image.webp")
    == "https://cdn.example.com/image.webp"
}

pub fn generated_site_test() {
  docklands.main()

  let home_page = read_generated_file("dist/index.html")
  let not_found_page = read_generated_file("dist/404.html")
  let sitemap = read_generated_file("dist/sitemap.xml")
  let robots = read_generated_file("dist/robots.txt")
  let site_script = read_generated_file("dist/assets/site.js")

  assert string.contains(
    home_page,
    "<link rel='canonical' href='https://themarkdownworks.vercel.app/'>",
  )
  assert string.contains(home_page, "<header class='site-header page-shell'>")
  assert string.contains(home_page, "<main><section class='hero page-shell'")
  assert string.contains(home_page, "</main>\n    <footer")
  assert string.contains(home_page, "href='#projects'")
  assert string.contains(home_page, "Chippy")
  assert string.contains(home_page, "CheekyCMS")
  assert string.contains(home_page, "Docklands")
  assert string.contains(
    home_page,
    "href='https://github.com/bmehder/themarkdownworks'",
  )
  assert string.contains(home_page, "<script src='/assets/site.js' defer>")
  assert !string.contains(home_page, "build_receipt.js")

  assert string.contains(
    not_found_page,
    "<meta name='robots' content='noindex'>",
  )
  assert string.contains(
    sitemap,
    "<loc>https://themarkdownworks.vercel.app/</loc>",
  )
  assert !string.contains(sitemap, "/404.html")
  assert string.contains(
    robots,
    "Sitemap: https://themarkdownworks.vercel.app/sitemap.xml",
  )
  assert string.contains(site_script, "window.scrollTo")
}

fn read_generated_file(path: String) -> String {
  let assert Ok(contents) = simplifile.read(from: path)
  contents
}
