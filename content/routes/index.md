---
title: The Markdown Works
description: Markdown works. We build around that. Home to Chippy, CheekyCMS, and Docklands.
---

<section class='hero page-shell' id='top'>
  <div class='hero-copy'>
    <p class='eyebrow'>Three independent tools · one plain idea</p>
    <h1>Markdown<br><em>works.</em></h1>
    <p class='lede'>We build around that.</p>
  </div>
  <div class='manifesto' aria-label='Our approach'>
    <div class='manifesto-rule'></div>
    <p>Markdown is durable, portable, and pleasantly boring. Start with the smallest way to publish it, then add machinery only when a real requirement appears.</p>
    <a href='#projects'>Meet the projects <span aria-hidden='true'>↓</span></a>
  </div>
  <div class='hero-code' aria-hidden='true'><span>#</span></div>
</section>

<section class='projects-section page-shell' id='projects'>
  <div class='section-heading'>
    <p class='eyebrow'>Start small</p>
    <h2>Begin with Docklands.</h2>
    <p>It is the quickest path from Markdown to a published website. Choose another tool only when you can name the requirement that calls for it.</p>
  </div>
  <div class='project-grid'>
    <article class='project-card docklands'>
      <div class='card-topline'><span>01</span><span>The starting point</span></div>
      <h3>Docklands</h3>
      <p class='project-description'>Publish quickly as ordinary static files. Begin with one page, add collections when useful, and introduce small interactive islands only where they earn their place.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>Static HTML</span></div>
      <div class='card-links'>
        <a href='https://docklands-ssg.vercel.app' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/Docklands' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
    <article class='project-card chippy'>
      <div class='card-topline'><span>02</span><span>When you need a server</span></div>
      <h3>Chippy</h3>
      <p class='project-description'>Move to a running application when request-time data, forms, authentication, personalization, or dynamic server rendering becomes a real requirement.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>HTML on request</span></div>
      <div class='card-links'>
        <a href='https://chippy-gleam.fly.dev' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/chippy' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
    <article class='project-card cheeky'>
      <div class='card-topline'><span>03</span><span>When content stands alone</span></div>
      <h3>CheekyCMS</h3>
      <p class='project-description'>Separate content from presentation when several frontends need it, release cycles differ, or Markdown needs to be available to other applications as JSON.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>JSON API</span></div>
      <div class='card-links'>
        <a href='https://cheekycms.fly.dev' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/cheekycms' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
  </div>
</section>

<section class='compare-section page-shell' id='compare'>
  <div class='section-heading compact'><p class='eyebrow'>At a glance</p><h2>Same source. Different job.</h2></div>
  <div class='comparison' role='table' aria-label='Project comparison'>
    <div class='compare-row compare-head' role='row'><span role='columnheader'>Project</span><span role='columnheader'>Best for</span><span role='columnheader'>Content becomes</span><span role='columnheader'>Runs as</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot docklands-dot'></i>Docklands</span><span role='cell' data-label='Best for'>Content-led sites that should ship as static files.</span><span role='cell' data-label='Content becomes'>Static HTML</span><span role='cell' data-label='Runs as'>Static files</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot chippy-dot'></i>Chippy</span><span role='cell' data-label='Best for'>Sites with a concrete need for request-time behaviour.</span><span role='cell' data-label='Content becomes'>HTML on request</span><span role='cell' data-label='Runs as'>A web server</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot cheeky-dot'></i>CheekyCMS</span><span role='cell' data-label='Best for'>Frontends that benefit from independently managed content.</span><span role='cell' data-label='Content becomes'>JSON API</span><span role='cell' data-label='Runs as'>A content service</span></div>
  </div>
</section>

<section class='portability-callout page-shell'>
  <p class='eyebrow'>Portable by default</p>
  <div>
    <h2>Your content is ordinary Markdown.</h2>
    <p>Moving it elsewhere may require adapting metadata, templates, and styles, but it does not require extracting it from a proprietary system.</p>
    <a href='/portability/'>What really moves between systems <span aria-hidden='true'>→</span></a>
  </div>
</section>

<section class='principle page-shell'>
  <p class='eyebrow'>The common ground</p>
  <blockquote class='text-balance'>“Start with files you can read.<br>Add machinery only when it earns its keep.”</blockquote>
  <p class='principle-note'>Built in Gleam. Kept small on purpose.</p>
</section>
