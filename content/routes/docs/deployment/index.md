---
title: Deployment and costs — The Markdown Works
description: How to publish static files or Erlang services, and what hosting can cost.
published: 2026-10-06
---

# Know what you are deploying.

Local development is separate from hosting. You can try all three projects without buying a domain or running a paid server. Publishing introduces provider accounts, deployment configuration, and possibly ongoing charges.

## Costs at a glance

Pricing checked on **6 October 2026**. Figures below are in USD and are examples, not a guaranteed bill; region, usage, taxes, and provider changes affect the total.

- **Docklands on Vercel Hobby:** $0 within included usage, for personal non-commercial projects.
- **Docklands on Vercel Pro:** listed from $20/month; additional seats and usage can add cost.
- **Chippy or CheekyCMS on Fly.io:** metered running Machines, plus storage and outbound traffic.
- **A custom domain:** purchased separately from a registrar; renewal costs vary.

[Vercel's Hobby rules](https://vercel.com/docs/plans/hobby) restrict the free plan to personal, non-commercial use. A small business site is not automatically eligible just because it is static. Check [Vercel pricing](https://vercel.com/pricing) before choosing a plan.

[Fly's pricing page](https://fly.io/pricing/) currently lists a shared-cpu-1x 256 MB Machine example at $2.19/month for continuous runtime. Region and configuration affect the figure; root filesystem storage, traffic, extra Machines, and other resources can add charges. Budget for a small recurring bill rather than calling it free hosting. The [Fly free trial](https://docs.fly.io/about/free-trial) is limited to two hours of Machine runtime or seven days, whichever comes first.

The projects don't require a database subscription for their file-based content. CheekyCMS may need separate hosting for your frontend. A larger media library can introduce object-storage costs.

## Publish Docklands to Vercel

Create your own GitHub repository from the starter and push your source. In Vercel, import that repository as a project. Docklands includes `vercel.json`: it installs npm dependencies and a pinned Gleam compiler, runs `npm run build:vercel`, and publishes `dist/`.

Choose the repository root and leave the configured output directory as `dist`. Set your production origin in `src/site.gleam` before release. Check the build log, then open the production domain, a nested page, the favicon, and sitemap. Configure your custom domain and DNS in the provider dashboard if you have one.

Gleam runs during this build. Vercel serves static files afterward. Every new source push can trigger another build; `dist/` stays out of Git.

You can also publish a completed `dist/` to a static host that supports its directory URLs. If that host cannot run Gleam, generate the files locally or in CI first and upload the output. Check its build limits, domain support, error-page handling, and commercial-use terms.

## Publish Chippy or CheekyCMS to Fly.io

Both repositories include a Dockerfile and Fly configuration. Install the [Fly CLI](https://docs.fly.io/flyctl/install), create an account, and authenticate. Work in your own clone, then create your own uniquely named app:

```sh
fly auth login
fly launch --no-deploy
```

Review the generated app name, region, ports, and Machine settings against the repository's existing `fly.toml`; retain its Dockerfile-based build. Deploy only after reviewing the configuration and applicable charges:

```sh
fly deploy
fly status
fly logs
```

For Chippy, set the public origin in `site.toml`. Its demo server listens on port 8000 and its Fly configuration can stop an idle Machine. Starting it for a later request can add latency.

CheekyCMS uses port 4000. Its current demo configuration keeps one Machine running to avoid idle-start latency, so it consumes paid runtime continuously. Its [deployment guide](https://github.com/bmehder/cheekycms/blob/main/DEPLOYMENT.md) explains the optional GitHub Actions workflow and app-scoped deploy token. A fork doesn't inherit the original repository's deployment credentials.

These services need an Erlang runtime in production; their containers supply it. Docker isn't required for the initial local `gleam run`, but is useful for testing the same packaged application before release.

## What persists?

The included containers contain the repository's content and assets. Rebuild and redeploy to publish edits. Changes made inside a running container are not your durable source of truth and may disappear when it is replaced.

Neither service provides a persistent upload system. Store source in Git and use appropriate durable storage if you add uploads. Static hosting for Docklands also cannot process a real form submission by itself; use an external service or a backend for that requirement.

## Verify and keep costs understandable

Check the production page or API, images, metadata, and health checks after release. Review how many Machines are running, their size, traffic, and any optional resources. Sleeping may reduce runtime cost but changes latency; it is a tradeoff you choose.

The repository deployment guides are the detailed references: [Docklands](https://docklands-ssg.vercel.app/guides/build-and-publish/), [Chippy](https://github.com/bmehder/chippy/blob/main/DEPLOYMENT.md), and [CheekyCMS](https://github.com/bmehder/cheekycms/blob/main/DEPLOYMENT.md).
