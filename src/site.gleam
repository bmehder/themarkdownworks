import gleam/option.{Some}
import gleam/string
import gleam/uri.{type Uri, Uri}

pub const base_url = "https://themarkdownworks.vercel.app"

pub type Metadata {
  Metadata(
    title: String,
    description: String,
    path: String,
    image: String,
    page_type: String,
    indexable: Bool,
  )
}

pub fn page(metadata: Metadata, content: String) -> String {
  let Metadata(title:, description:, path:, image:, page_type:, indexable:) =
    metadata
  let title = escape_html(title)
  let description = escape_html(description)
  let canonical_url = escape_html(absolute_url(path))
  let image_url = escape_html(absolute_url(image))
  let robots = case indexable {
    True -> ""
    False -> "\n    <meta name='robots' content='noindex'>"
  }

  "<!doctype html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script>(function(){try{var p=localStorage.getItem('tmw-theme');p=['system','dark','light'].indexOf(p)>-1?p:'system';var t=p==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):p;document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}})()</script>
    <meta name='theme-color' content='#171817'>
    <title>" <> title <> "</title>
    <meta name='description' content='" <> description <> "'>
    <link rel='canonical' href='" <> canonical_url <> "'>" <> robots <> "
    <meta property='og:title' content='" <> title <> "'>
    <meta property='og:description' content='" <> description <> "'>
    <meta property='og:type' content='" <> page_type <> "'>
    <meta property='og:url' content='" <> canonical_url <> "'>
    <meta property='og:image' content='" <> image_url <> "'>
    <meta name='twitter:card' content='summary_large_image'>
    <meta name='twitter:title' content='" <> title <> "'>
    <meta name='twitter:description' content='" <> description <> "'>
    <meta name='twitter:image' content='" <> image_url <> "'>
    <link rel='icon' href='/favicon.svg' type='image/svg+xml'>
    <link rel='icon' href='/favicon-32.png' type='image/png' sizes='32x32'>
    <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180'>
    <link rel='stylesheet' href='/assets/site.css'>
    <script src='/assets/site.js' defer></script>
  </head>
  <body>
    " <> header() <> "
    <main>" <> content <> "</main>
    " <> footer() <> "
  </body>
</html>
"
}

pub fn absolute_url(reference: String) -> String {
  let assert Ok(reference_uri) = uri.parse(reference)

  case reference_uri {
    Uri(scheme: Some(_), ..) -> uri.to_string(reference_uri)
    Uri(..) -> {
      let assert Ok(base_uri) = uri.parse(base_url)
      let assert Ok(absolute_uri) = uri.merge(base_uri, reference_uri)

      absolute_uri
      |> preserve_trailing_slash(from: reference_uri)
      |> uri.to_string
    }
  }
}

fn preserve_trailing_slash(absolute: Uri, from reference: Uri) -> Uri {
  let Uri(path: reference_path, ..) = reference
  let Uri(path: absolute_path, ..) = absolute

  case
    string.ends_with(reference_path, "/")
    && !string.ends_with(absolute_path, "/")
  {
    True -> Uri(..absolute, path: absolute_path <> "/")
    False -> absolute
  }
}

pub fn escape_html(value: String) -> String {
  value
  |> string.replace("&", "&amp;")
  |> string.replace("<", "&lt;")
  |> string.replace(">", "&gt;")
  |> string.replace("'", "&#39;")
  |> string.replace("\"", "&quot;")
}

fn mark() -> String {
  "<span class='mark' aria-hidden='true'><i></i><i></i></span>"
}

fn theme_button() -> String {
  "<button class='theme-toggle' type='button' data-theme-toggle aria-label='Theme: system. Change theme.' title='Theme: system'>
    <svg viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='4' width='18' height='13' rx='1'></rect><path d='M8 21h8M12 17v4'></path></svg>
  </button>"
}

fn header() -> String {
  "<header class='site-header page-shell'>
    <a class='wordmark' href='/' aria-label='The Markdown Works, home'>" <> mark() <> "<span>The Markdown Works</span></a>
    <nav class='desktop-nav' aria-label='Primary navigation'>
      <a href='#projects'>Projects</a>
      <a href='#compare'>Compare</a>
      <a href='https://github.com/bmehder/themarkdownworks' target='_blank' rel='noreferrer'>GitHub <span aria-hidden='true'>↗</span></a>
      " <> theme_button() <> "
    </nav>
    <div class='mobile-controls'>
      " <> theme_button() <> "
      <details class='mobile-menu'>
        <summary aria-label='Open navigation'><span></span><span></span></summary>
        <nav aria-label='Mobile navigation'>
          <a href='#projects'>Projects <span>↓</span></a>
          <a href='#compare'>Compare <span>↓</span></a>
          <a href='https://github.com/bmehder/themarkdownworks' target='_blank' rel='noreferrer'>GitHub <span>↗</span></a>
        </nav>
      </details>
    </div>
  </header>"
}

fn footer() -> String {
  "<footer class='site-footer page-shell'>
    <div class='wordmark'>" <> mark() <> "<span>The Markdown Works</span></div>
    <p>Chippy, CheekyCMS, and Docklands are independent open-source projects.</p>
    <button class='back-to-top' type='button' data-back-to-top>Back to top ↑</button>
  </footer>"
}
