---
title: JavaScript islands — The Markdown Works
description: Add interactivity with plain JavaScript or an optional library; Lustre is a preference, not a prerequisite.
published: 2026-10-06
---

# Add interactivity where it helps.

An island is a small interactive part of an otherwise ordinary page: a calculator, filter, chart, or tool. The surrounding page can still arrive as complete HTML.

**Lustre is the author's preferred way to build more involved islands in Gleam.** Docklands includes a Lustre widget to demonstrate that approach. You do not need to learn Lustre to build a Docklands or Chippy website.

## Start with HTML

A disclosure can use `<details>` and `<summary>`. Links and native forms already work in the browser. CSS can handle responsive layouts and many visual states. Begin with those capabilities when they meet the requirement.

A form still needs a real submission destination to store data or send email. Chippy's contact demo demonstrates a server response, but does not send mail or save submissions.

## Use plain JavaScript for a small enhancement

For a simple control, an ordinary script is often enough. This site uses plain JavaScript for remembered theme preference, closing its mobile menu after navigation, and scrolling to the top.

A typical enhancement can find one button and update one status:

```html
<button type="button" data-demo-button>Show a message</button>
<p data-demo-status aria-live="polite"></p>
<script src="/assets/demo.js" defer></script>
```

```javascript
const button = document.querySelector("[data-demo-button"]);
const status = document.querySelector("[data-demo-status"]);

if (button && status) {
  button.addEventListener("click", () => {
    status.textContent = "Markdown still works.";
  });
}
```

In Docklands, a script under `assets/static/` is copied to `dist/assets/`. In Chippy, you can place it in `assets/` or beside a route, and use its matching public path. Include scripts in the page or shared layout where appropriate.

## Choose a library when the interaction earns it

Lustre supplies a model/message/update/view approach for stateful UI in Gleam. Its compiler and browser tooling belong to the island's build. The rest of a Docklands page is still static HTML; Chippy's page is still rendered by the server.

Other suitable libraries can mount into an isolated element too. Choose based on the widget's needs and the language your team wants to maintain. A framework such as Svelte, React, or Vue would bring its own dependency and build setup; it is an option you add rather than a feature promised by these starters.

Give an island a clearly bounded container and let it own that subtree. Preserve a useful heading, explanation, or fallback around it. Avoid having two scripts compete to update the same elements.

## Keep the demo optional

Docklands' current build includes the sample widget, so removing it requires removing both its page hook and the corresponding widget-build steps and dependencies. Removing the `widgets/` directory alone leaves build commands pointing at missing files.

Chippy does not ship a Lustre island. Its server rendering and existing HTML controls work independently of Lustre. You can add a browser widget if your site needs one.

CheekyCMS delivers data and HTML to a frontend. The frontend, not the API, decides whether it uses islands or a full interactive application.

See [Lustre's project documentation](https://github.com/lustre-labs/lustre) if you choose it, and the [Docklands island guide](https://docklands-ssg.vercel.app/guides/interactive-islands/) for the demo's structure.
