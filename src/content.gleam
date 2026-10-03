import gleam/list
import gleam/string
import mork

pub type Document {
  Document(
    title: String,
    description: String,
    indexable: Bool,
    markdown: String,
  )
}

pub type Shortcode {
  Shortcode(marker: String, html: String)
}

pub fn parse_document(source: String) -> Document {
  let #(frontmatter, markdown) = mork.split_frontmatter_from_input(source)

  let assert Ok(title) = frontmatter_value(frontmatter, "title")
  let assert Ok(description) = frontmatter_value(frontmatter, "description")

  let indexable = !frontmatter_flag(frontmatter, "noindex")

  Document(title:, description:, indexable:, markdown:)
}

pub fn frontmatter_value(
  frontmatter: String,
  key: String,
) -> Result(String, Nil) {
  frontmatter
  |> string.split("\n")
  |> list.find_map(fn(line) {
    case string.split_once(line, on: ":") {
      Ok(#(found_key, value)) ->
        case string.trim(found_key) == key {
          True -> Ok(string.trim(value))
          False -> Error(Nil)
        }
      _ -> Error(Nil)
    }
  })
}

fn frontmatter_flag(frontmatter: String, key: String) -> Bool {
  case frontmatter_value(frontmatter, key) {
    Ok(value) -> string.lowercase(value) == "true"
    Error(_) -> False
  }
}

pub fn expand_shortcodes(
  markdown: String,
  shortcodes: List(Shortcode),
) -> String {
  markdown
  |> string.split("\n")
  |> expand_shortcode_lines(shortcodes, False)
  |> string.join("\n")
}

fn expand_shortcode_lines(
  lines: List(String),
  shortcodes: List(Shortcode),
  in_code_block: Bool,
) -> List(String) {
  case lines {
    [] -> []
    [line, ..rest] -> {
      let trimmed_line = string.trim(line)

      case string.starts_with(trimmed_line, "```") {
        True -> [
          line,
          ..expand_shortcode_lines(rest, shortcodes, !in_code_block)
        ]
        False -> {
          let expanded_line = case in_code_block {
            True -> line
            False -> expand_shortcode_line(line, trimmed_line, shortcodes)
          }

          [
            expanded_line,
            ..expand_shortcode_lines(rest, shortcodes, in_code_block)
          ]
        }
      }
    }
  }
}

fn expand_shortcode_line(
  line: String,
  trimmed_line: String,
  shortcodes: List(Shortcode),
) -> String {
  case
    list.find_map(shortcodes, fn(shortcode) {
      let Shortcode(marker:, html:) = shortcode

      case trimmed_line == marker {
        True -> Ok(html)
        False -> Error(Nil)
      }
    })
  {
    Ok(html) -> html
    Error(_) -> line
  }
}
