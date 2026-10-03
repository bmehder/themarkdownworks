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
    <p>Markdown is durable, portable, and pleasantly boring. The Markdown Works is home to three different ways of putting it to work.</p>
    <a href='#projects'>Meet the projects <span aria-hidden='true'>↓</span></a>
  </div>
  <div class='hero-code' aria-hidden='true'><span>#</span></div>
</section>

<section class='projects-section page-shell' id='projects'>
  <div class='section-heading'>
    <p class='eyebrow'>The projects</p>
    <h2>Choose the output, not the ecosystem.</h2>
    <p>Each project stands on its own. They share a point of view, not a dependency graph.</p>
  </div>
  <div class='project-grid'>
    <article class='project-card chippy'>
      <div class='card-topline'><span>01</span><span>Dynamic website</span></div>
      <h3>Chippy</h3>
      <p class='project-description'>A server-rendered website where each request reads Markdown straight from the filesystem. No database. No content build.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>HTML on request</span></div>
      <div class='card-links'>
        <a href='https://chippy-gleam.fly.dev' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/chippy' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
    <article class='project-card cheeky'>
      <div class='card-topline'><span>02</span><span>Content API</span></div>
      <h3>CheekyCMS</h3>
      <p class='project-description'>A small, read-only JSON API for Markdown and assets. Git handles editing and history; CheekyCMS handles delivery.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>JSON API</span></div>
      <div class='card-links'>
        <a href='https://cheekycms.fly.dev' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/cheekycms' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
    <article class='project-card docklands'>
      <div class='card-topline'><span>03</span><span>Static-site starter</span></div>
      <h3>Docklands</h3>
      <p class='project-description'>A content-first reference project that turns Markdown into ordinary static pages, with interactive islands only where useful.</p>
      <div class='project-model'><span class='markdown-file'>MD</span><span class='connector'></span><span>Static HTML</span></div>
      <div class='card-links'>
        <a href='https://docklands-ssg.vercel.app' target='_blank' rel='noreferrer'><span>Visit website</span><span aria-hidden='true'>↗</span></a>
        <a href='https://github.com/bmehder/Docklands' target='_blank' rel='noreferrer'><span>GitHub</span><span aria-hidden='true'>↗</span></a>
      </div>
    </article>
  </div>
</section>

<section class='compare-section page-shell' id='compare'>
  <div class='section-heading compact'><p class='eyebrow'>At a glance</p><h2>Same source. Different job.</h2></div>
  <div class='comparison' role='table' aria-label='Project comparison'>
    <div class='compare-row compare-head' role='row'><span role='columnheader'>Project</span><span role='columnheader'>Best for</span><span role='columnheader'>Content becomes</span><span role='columnheader'>Runs as</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot chippy-dot'></i>Chippy</span><span role='cell' data-label='Best for'>Sites that need server-side behaviour without a CMS.</span><span role='cell' data-label='Content becomes'>HTML on request</span><span role='cell' data-label='Runs as'>A web server</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot cheeky-dot'></i>CheekyCMS</span><span role='cell' data-label='Best for'>Apps and websites that want content over HTTP.</span><span role='cell' data-label='Content becomes'>JSON API</span><span role='cell' data-label='Runs as'>A content service</span></div>
    <div class='compare-row' role='row'><span role='cell' class='compare-name'><i class='dot docklands-dot'></i>Docklands</span><span role='cell' data-label='Best for'>Content-led sites that should ship as static files.</span><span role='cell' data-label='Content becomes'>Static HTML</span><span role='cell' data-label='Runs as'>Static files</span></div>
  </div>
</section>

<section class='principle page-shell'>
  <p class='eyebrow'>The common ground</p>
  <blockquote>“Start with files you can read.<br>Add machinery only when it earns its keep.”</blockquote>
  <p class='principle-note'>Built in Gleam. Kept small on purpose.</p>
</section>
