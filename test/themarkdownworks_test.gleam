import gleeunit
import gleeunit/should
import site

pub fn main() -> Nil {
  gleeunit.main()
}

pub fn html_escaping_test() {
  site.escape_html("Markdown & <HTML>")
  |> should.equal("Markdown &amp; &lt;HTML&gt;")
}

pub fn production_origin_test() {
  site.base_url
  |> should.equal("https://themarkdownworks.vercel.app")
}
