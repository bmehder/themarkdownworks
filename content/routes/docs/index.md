---
title: Documentation — The Markdown Works
description: A practical starting point for installing, customizing, and deploying Docklands, Chippy, and CheekyCMS.
published: 2026-10-06
---

# Build something with Markdown.

## First, put the tools down.

Three choices introduce more complexity than one. We know. Offering a static generator, a running website, and a content API gives you another decision to make before you publish. The point of these docs is to make that decision smaller—not to persuade you to use all three.

Your project is defined by what it needs to do **right now**, not by a shopping list of shiny tools. Who is it for? What must they be able to do? What useful thing can you put in front of them this week?

If you say you need a feature, prove it. Give a concrete example: a person, an action, and a reason the simpler version cannot do the job. “Members need to see their own booking details after signing in” is a requirement. “We might need accounts later” is not.

As soon as you say **might**, return from the function early. Put the idea in a note and get back to the requirement you can demonstrate. A possible future is not today's implementation brief.

These projects value publishing quickly because an unpublished site benefits nobody. Let people use something useful as soon as you can. You or your organization get the benefit sooner; their experience gives you evidence for your next decision. Ship the smallest version that meets the real requirements—not an incomplete version that ignores them.

You can start with familiar files and learn the machinery as you need it. These guides explain what to install, which files to change, and what happens when you publish.

## Choose your starting point

- **Docklands:** a content-led website generated ahead of time. Deploy static HTML, CSS, images, and optional JavaScript.
- **Chippy:** pages with request-time server behaviour. Deploy an Erlang application and its content.
- **CheekyCMS:** a file-backed home for content and data, independent of the applications that use them. Deploy an Erlang content service; connect a website, backend, build tool, or other consumer when you need one.

Docklands is the simplest starting point for a brochure site, documentation, or a blog. Chippy gives you a server to extend; its form demo is an illustration, not an email service or finished authentication system. CheekyCMS provides read-only content delivery; editing remains a Git workflow.

## Let the requirements earn the next step

**Start with Docklands when publishing pages is the job.** A local organization needs opening hours, event information, and a few articles. A software project needs documentation and release notes. Those pages can be built ahead of time and served as files. A menu, a theme switch, or a small calculator does not, by itself, justify running a server. Neither does a contact form if an external submission service meets the requirement.

**Move toward Chippy when a request needs your server to make a decision.** That organization now has members who must see their own bookings, or staff who must submit an event registration against current capacity. The response depends on the visitor or on live information, so generating the same page for everyone ahead of time no longer meets the requirement. Chippy gives you a place to implement that behaviour. It does not hand you finished authentication, booking storage, or payment processing; you still have to build or integrate those parts. Keeping Docklands and adding a focused backend may also be enough.

**Reach for CheekyCMS when your data deserves a home of its own.** You want to keep it separate from a backend, a frontend, or both. Perhaps a business keeps event descriptions, product information, and project notes for several projects in one repository. Perhaps you just want to collect and organize those files now, without building an application around them yet. You don't need multiple consumers—or even a separate application—to justify keeping data independently.

Think of it as a **monorepo for data**. One instance can hold several projects; separate instances can keep unrelated work apart. Start with the Markdown files and metadata you actually have, and add fields as their purpose becomes clear. You don't have to design every content field in an editor's configuration before you can use it. Repository-managed assets and automatically generated image variants keep the accompanying files close to the content.

When something needs that data, it can fetch it through the read-only API: a backend, a static build, a browser application, or another service. Sharing event descriptions between a website and a venue display is one useful example, not the definition of the project. CheekyCMS does not replace Chippy's business logic or turn into a transactional booking database; editing its source remains a file-and-Git workflow.

Docklands → Chippy → CheekyCMS describes one possible journey: publish pages, add request-time behaviour, then give data an independent home. It is **not an upgrade ladder**, a maturity score, or a plan every project must follow. A static site can remain the right choice indefinitely. Start with CheekyCMS if organizing independent content and data is the job today. Start with Chippy if request-time behaviour is already a requirement.

## You can combine them, too

CheekyCMS can supply content to either Docklands or Chippy. These are integrations you implement, not built-in connections you switch on.

- **CheekyCMS + Docklands:** fetch API content during the build and generate static pages from it. A small public website and a separate app could share the same content source. The website remains static; API edits appear there after a rebuild. You need to arrange that rebuild and decide what happens if the API is unavailable during it.
- **CheekyCMS + Chippy:** fetch content on the server and combine it with request-specific information. A member portal could use shared event descriptions alongside a visitor's bookings. You need to choose a caching policy and handle API failures; the API is another service to operate.

Use a combination because it solves a demonstrated problem. Keeping data independently can be a useful capability in its own right, even with one consumer. It also adds network requests, failure handling, and another deployment. If your project needs none of that separation, leave it out.

## Find the answer you need

Writing content before building the site? Start with [the team's first Markdown page](/guides/start-with-the-content/): editor recommendations, a copyable template, and a simple handoff.

- [Getting started](/docs/getting-started/) — installations, local commands, and your first edit.
- [Customize a site](/docs/customization/) — content, nested pages, layouts, styles, and assets.
- [How the projects work](/docs/how-it-works/) — the path from a Markdown file to a response.
- [Extending with Gleam](/docs/extending/) — implementation entry points and worked examples for new features.
- [Deployment and costs](/docs/deployment/) — static hosting, containers, billing, and publishing.
- [JavaScript islands](/docs/islands/) — optional interactivity without turning the whole site into an application.
- [Content and code reference](/docs/reference/) — the shared contract and generated Gleam documentation.

## How much do I need to learn?

Editing prose requires Markdown and a little YAML metadata. Changing appearance usually requires HTML and CSS. Changing Docklands' generator or a server's behaviour requires Gleam. If a page needs browser-side interactivity, you can add a small JavaScript island without changing how the rest of the site works. Learn the tools that your actual change calls for.

Gleam is the programming language. Erlang/OTP supplies the runtime for these server applications. Node.js runs the demo build tools. npm installs their JavaScript tooling. Tailwind compiles CSS; it is not a requirement of Markdown itself. You don't need to learn every dependency before you edit your first page.

The projects are independent repositories you can clone and customize. There is no central platform account required to run them locally. Hosting accounts and charges depend on where you deploy.

These guides describe the current reference projects, including Docklands 2.0.0 and Markdown content contract 1.0.0. The README in your checked-out version remains the source for its exact commands and supported features.

## Or ignore the lecture.

You can also ignore any of this advice and do what you want. Rules are meant to be broken. Try the clever idea. Follow your curiosity. Build something because it makes you happy, or because learning it is the whole point.

Sometimes the software is a side effect of the learning journey. What you discover while making it is the thing you came for.

That's a perfectly good reason. Just call it that. Now go make something.
