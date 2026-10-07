---
title: Start with the content
description: Give your team a simple Markdown template, an editor that stays out of the way, and one useful page to write.
published: 2026-10-07
tags: content, getting started
featured_image: /assets/images/start-with-the-content.webp
featured_alt: Manuscript pages marked with a hash symbol beside a pencil and notebook on a charcoal writing desk.
---

# Start with the content.

“We want to make a website.” Cool. Have everyone on your team start writing Markdown files. That's the first step.

Design and layout can come later. First work out what people need to know, and write it down. The content becomes the primary focus instead of something you scramble to fill in after choosing a theme.

You don't need Gleam, a terminal, or a finished website to do this. You need one useful page, a small template, and somewhere comfortable to write.

{{ featured-image }}

## Pick an editor, then stop picking editors

My default recommendation for a team writing together is **HackMD**. For someone who wants ordinary files on their own computer, choose **Obsidian**. Both let you work with Markdown; the deciding factor is how you want to write and share, not which has the longest feature list.

### HackMD: start together in the browser

[HackMD](https://hackmd.io/) offers simultaneous editing, comments, previews, and reusable templates in a browser. There is no desktop installation to coordinate. A team can review a page in the same place it was written, then download the Markdown for the website.

It is a hosted service, not part of The Markdown Works. Check that your organization permits storing drafts there, and set reading and editing permissions deliberately before sharing sensitive material. A shared URL is not a substitute for checking who has access.

There is a free plan. The current team pricing lists up to three teammates and three custom templates; larger teams or additional features may need a paid plan. Check the [current plans](https://homepage.hackmd.io/pricing) rather than assuming your whole organization will fit for free. Recommendations and plan details were checked on 7 October 2026.

To get started:

1. Open HackMD, create an account, and create a note.
2. Paste the template below into the Markdown editor. Don't include the surrounding code-block fences.
3. Replace the example metadata and write the page. Use the preview to see headings, paragraphs, and lists.
4. Set the note's permissions and invite the people who should review or edit it.
5. When it is ready for handoff, open the note menu and choose **Download → Markdown**. Rename the downloaded file to something descriptive, such as `visiting-our-office.md`.

The [official export guide](https://hackmd.io/@docs/export-and-import-notes-en) explains the download options. Turn off the export option to include HackMD's note titles and tags when your document already contains our YAML template. Check the downloaded file: it should begin with one frontmatter block, not an extra block of note metadata. Save the team's starting note as a template, or make a copy for each new page. Keep one agreed draft for each page so edits don't drift between several copies.

HackMD's publishing button publishes a HackMD note; it does not deploy your Docklands, Chippy, or CheekyCMS project. Downloading a `.md` file is the simple handoff. GitHub synchronization can come later if your team actually needs it.

### Obsidian: start with files on your computer

[Obsidian](https://obsidian.md/) works with a local folder of Markdown files, called a vault. Its editor provides a preview while you write. The core application is [free for personal and commercial use](https://obsidian.md/license), and local use does not require an account. Optional hosted services are separate purchases.

To get started:

1. Install Obsidian and create a vault in a folder such as `Website drafts`.
2. Create a note called `Visiting our office`.
3. Switch the note to **Source mode**, paste the template below, and change its values.
4. Return to the preview to read your page. Obsidian saves it as a `.md` file in the vault folder; there is no Markdown export step.
5. Send that file to the person collecting the team's content, or put it in your agreed handoff folder.

Obsidian calls the metadata at the top [properties](https://obsidian.md/help/properties). Its properties editor may display those fields as controls rather than raw text. Source mode lets you inspect the actual YAML. Keep `title` and `description` as text, and `published` as a date in the format shown below.

For portable website content, use ordinary Markdown links such as `[Contact us](https://example.com/contact)`, not `[[Contact us]]` or editor-specific embeds. Obsidian's [link documentation](https://obsidian.md/help/links) explains the difference. An editor preview does not check whether the destination website has a matching route.

Choose HackMD when simultaneous editing is the immediate requirement. Start with Obsidian when local files are the priority. A folder of files is not automatically a live collaborative editor: agree who owns each draft and how changes are handed over. You do not need plugins, a graph view, or a synchronization setup to write the first page.

## What is a Markdown file?

A Markdown file is a plain-text document with a `.md` filename. You write normally and use a few simple marks for structure: `#` for a heading, `-` for a list, and brackets and parentheses for a link.

It isn't a Word document renamed to `.md`. The file must contain plain text. The editor helps you write it; the website decides how to present it.

## Copy this starting point

```markdown
---
title: "Visiting our office"
description: "Where to find us, opening hours, and accessibility information."
published: 2026-10-07
---

# Visiting our office

Here is what you need to know before you arrive.

## Opening hours

- Monday to Friday: 9am–5pm
- Saturday and Sunday: closed

## Before you visit

Tell us what you need so we can help you plan your visit.

[Contact our team](https://example.com/contact)
```

Replace the example text and link with real information. Don't copy the three backticks that surround the example; those display the sample as code in this guide.

You can also [download the template](/assets/templates/page-template.md) and open it in your editor.

## What the metadata means

The first block, between the two `---` lines, is **YAML frontmatter**. It gives the document three required fields under our shared [Markdown content contract](/docs/reference/):

- **`title`:** the page's name. This is separate from the visible `#` heading in the body, although they will often match.
- **`description`:** a short, useful summary. Tell someone what they will find, rather than writing “About page.”
- **`published`:** a calendar date in `YYYY-MM-DD` form. Use the intended publication date for a new page; keep its original publication date when you revise an existing one.

All three must have values. Keep the quoted title and description on one line each; the quotes also let you include a colon without changing YAML's meaning. If you need a literal double quote inside a quoted value, write it as `\"`.

While drafting, the date can be provisional. Confirm it before publication. The contract asks for a date even on a page that isn't a blog post; it does not force the site's design to display it.

Additional metadata can come later. You do not need to invent tags, image fields, categories, or a complete content model to write this page.

## Write for a reader, not a layout

Pick one question the page should answer. “How do I visit?” “What does this service cost?” “Who can apply?” Then put the useful answer near the beginning.

Use one main heading, smaller headings for sections, short paragraphs, and lists where they help. You can write **bold text** with `**bold text**`. Leave a blank line between paragraphs and before a list. That's enough formatting to get started.

Ignore fonts, columns, menus, and animation for now. Don't pad the draft to fill a design. Include the facts a real reader needs, and ask someone else to read it before you call it done.

## A simple team handoff

Give everyone the same template and one page to own. Keep a shared list of the page name, writer, reviewer, and whether it is ready. Choose one place for drafts and one person to collect approved files. Writers do not need to learn Git before they can contribute.

Before handing over a page:

- Read it in preview and check the facts and links.
- Confirm that the metadata is present and the date is valid.
- Make sure the filename ends in `.md`, not `.md.txt`.
- Include the original image files separately if the page needs them. An editor's hosted image link is not the same as handing over an asset your site controls.

The person building the site can place those files in the project's route or collection folders, arrange navigation, and handle the build and publication. Moving between projects may require adjusting routes, assets, and presentation, but the writing and its core metadata remain useful.

Writing a Markdown file doesn't publish it automatically. It gets the most important part ready.

Your next step is not another tool comparison. Write one page somebody needs.
