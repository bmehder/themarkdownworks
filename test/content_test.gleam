import content.{
  Document, EmptyRequiredField, InvalidPublishedDate, MissingRequiredField,
  RequiredFieldMustBeString,
}

pub fn quoted_and_plain_dates_match_test() {
  let plain =
    "---\ntitle: Page\ndescription: Summary\npublished: 2024-02-29\n---\n"
  let quoted =
    "---\ntitle: \"Page\"\ndescription: \"Summary\"\npublished: \"2024-02-29\"\n---\n"

  let assert Ok(Document(
    title: plain_title,
    description: plain_description,
    published: plain_published,
    ..,
  )) = content.parse_document(plain)
  let assert Ok(Document(
    title: quoted_title,
    description: quoted_description,
    published: quoted_published,
    ..,
  )) = content.parse_document(quoted)

  assert plain_title == quoted_title
  assert plain_description == quoted_description
  assert plain_published == quoted_published
}

pub fn required_frontmatter_validation_test() {
  let missing = "---\ntitle: Page\ndescription: Summary\n---\n"
  let empty =
    "---\ntitle: '   '\ndescription: Summary\npublished: 2026-10-06\n---\n"
  let wrong_type =
    "---\ntitle: true\ndescription: Summary\npublished: 2026-10-06\n---\n"
  let invalid_date =
    "---\ntitle: Page\ndescription: Summary\npublished: 2026-02-29\n---\n"

  let assert Error(MissingRequiredField("published")) =
    content.parse_document(missing)
  let assert Error(EmptyRequiredField("title")) = content.parse_document(empty)
  let assert Error(RequiredFieldMustBeString("title")) =
    content.parse_document(wrong_type)
  let assert Error(InvalidPublishedDate("2026-02-29")) =
    content.parse_document(invalid_date)
}
