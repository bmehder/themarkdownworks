import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { bundledLanguages, bundledLanguagesAlias, codeToHtml } from "shiki";

const languages = new Set([
  ...Object.keys(bundledLanguages),
  ...Object.keys(bundledLanguagesAlias),
  "text", "txt", "plaintext",
]);
const pattern = /<pre><code class="language-([a-zA-Z0-9_+-]+)">([\s\S]*?)<\/code><\/pre>/g;
let count = 0;

// Run before the standalone Gleam reference is copied; that reference has its
// own highlighting and stylesheet. No highlighter is shipped to the browser.
for (const filename of await htmlFiles("dist")) {
  const source = await readFile(filename, "utf8");
  let output = "";
  let previous = 0;
  for (const match of source.matchAll(pattern)) {
    output += source.slice(previous, match.index);
    const language = match[1].toLowerCase();
    if (languages.has(language)) {
      output += await codeToHtml(decodeHtml(match[2]), {
        lang: language,
        themes: { light: "github-light", dark: "github-dark-default" },
        defaultColor: false,
      });
      count += 1;
    } else {
      output += match[0];
      console.warn(`Unrecognized code language ${language} in ${filename}; kept as plain code.`);
    }
    previous = match.index + match[0].length;
  }
  output += source.slice(previous);
  if (output !== source) await writeFile(filename, output);
}
console.log(`Highlighted ${count} code examples at build time.`);

async function htmlFiles(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== "reference") result.push(...await htmlFiles(filename));
    else if (entry.isFile() && filename.endsWith(".html")) result.push(filename);
  }
  return result;
}

function decodeHtml(value) {
  return value.replace(/&(?:#x([0-9a-f]+)|#([0-9]+)|(quot|apos|lt|gt|amp));/gi, (original, hex, decimal, named) => {
    if (named) return { quot: '"', apos: "'", lt: "<", gt: ">", amp: "&" }[named.toLowerCase()];
    const point = Number.parseInt(hex ?? decimal, hex ? 16 : 10);
    return point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : original;
  });
}
