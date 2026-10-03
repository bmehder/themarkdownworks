import generator
import gleam/int
import gleam/io
import gleam/list
import simplifile

pub fn main() -> Nil {
  let assert Ok(Nil) = simplifile.create_directory_all("dist")
  let assert Ok(Nil) = simplifile.clear_directory(at: "dist")

  let routes = generator.load_routes()
  generator.build_routes(routes)
  generator.write_discovery_files(routes)

  let assert Ok(Nil) =
    simplifile.copy_directory(at: "assets/static", to: "dist/assets")

  io.println(
    "Generated "
    <> int.to_string(list.length(routes))
    <> " Markdown routes and static assets in dist/",
  )
}
