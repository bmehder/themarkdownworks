import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

for (const route of ["docs/extending", "docs/getting-started", "docs/customization", "docs/islands", "guides/start-with-the-content"]) {
  const html = await readFile(`dist/${route}/index.html`, "utf8");
  assert.match(html, /class="shiki /, `Missing highlighted examples in ${route}`);
  assert.match(html, /--shiki-light:/, `Missing light token colors in ${route}`);
  assert.match(html, /--shiki-dark:/, `Missing dark token colors in ${route}`);
  assert.doesNotMatch(html, /<pre><code class="language-/, `Unhighlighted examples in ${route}`);
}
const article = await readFile("dist/guides/start-with-the-content/index.html", "utf8");
assert.match(article, /<code>visiting-our-office\.md<\/code>/);
assert.match(article, /"Visiting our office"/);
const gleam = await readFile("dist/docs/extending/index.html", "utf8");
assert.match(gleam, /(?:&lt;|&#x3[cC];)p/); // HTML in a string stays escaped.
console.log("Code examples verified in docs and guides, with both themes and escaped content.");
