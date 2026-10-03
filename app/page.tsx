import { BackToTop, MobileMenu, ThemeToggle } from './theme-toggle';

const projects = [
  {
    number: '01', name: 'Chippy', accent: 'var(--chippy)', label: 'Dynamic website',
    description: 'A server-rendered website where each request reads Markdown straight from the filesystem. No database. No content build.',
    best: 'Sites that need server-side behaviour without a CMS.', model: 'Markdown → HTML on request',
    website: 'https://chippy-gleam.fly.dev', github: 'https://github.com/bmehder/chippy',
  },
  {
    number: '02', name: 'CheekyCMS', accent: 'var(--cheeky)', label: 'Content API',
    description: 'A small, read-only JSON API for Markdown and assets. Git handles editing and history; CheekyCMS handles delivery.',
    best: 'Apps and websites that want content over HTTP.', model: 'Markdown → JSON API',
    website: 'https://cheekycms.fly.dev', github: 'https://github.com/bmehder/cheekycms',
  },
  {
    number: '03', name: 'Docklands', accent: 'var(--docklands)', label: 'Static-site starter',
    description: 'A content-first reference project that turns Markdown into ordinary static pages, with interactive islands only where useful.',
    best: 'Content-led sites that should ship as static files.', model: 'Markdown → static HTML',
    website: 'https://docklands-ssg.vercel.app', github: 'https://github.com/bmehder/Docklands',
  },
];

function Mark() { return <span className="mark" aria-hidden="true"><i /><i /></span>; }
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="wordmark" href="#top" aria-label="The Markdown Works, home"><Mark /><span>The Markdown Works</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a><a href="#compare">Compare</a>
          <a href="https://github.com/bmehder" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <ThemeToggle />
        </nav>
        <MobileMenu />
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Three independent tools · one plain idea</p>
          <h1>Markdown<br /><em>works.</em></h1>
          <p className="lede">We build around that.</p>
        </div>
        <div className="manifesto" aria-label="Our approach">
          <div className="manifesto-rule" />
          <p>Markdown is durable, portable, and pleasantly boring. The Markdown Works is home to three different ways of putting it to work.</p>
          <a href="#projects">Meet the projects <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-code" aria-hidden="true"><span>#</span></div>
      </section>

      <section className="projects-section page-shell" id="projects">
        <div className="section-heading">
          <p className="eyebrow">The projects</p>
          <h2>Choose the output, not the ecosystem.</h2>
          <p>Each project stands on its own. They share a point of view, not a dependency graph.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name} style={{ '--project': project.accent } as React.CSSProperties}>
              <div className="card-topline"><span>{project.number}</span><span>{project.label}</span></div>
              <h3>{project.name}</h3><p className="project-description">{project.description}</p>
              <div className="project-model"><span className="markdown-file">MD</span><span className="connector" /><span>{project.model.split(' → ')[1]}</span></div>
              <div className="card-links">
                <a href={project.website} target="_blank" rel="noreferrer">Visit website <Arrow /></a>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="compare-section page-shell" id="compare">
        <div className="section-heading compact"><p className="eyebrow">At a glance</p><h2>Same source. Different job.</h2></div>
        <div className="comparison" role="table" aria-label="Project comparison">
          <div className="compare-row compare-head" role="row"><span role="columnheader">Project</span><span role="columnheader">Best for</span><span role="columnheader">Content becomes</span><span role="columnheader">Runs as</span></div>
          {projects.map((project, index) => (
            <div className="compare-row" role="row" key={project.name}>
              <span role="cell" className="compare-name"><i style={{ background: project.accent }} />{project.name}</span>
              <span role="cell" data-label="Best for">{project.best}</span><span role="cell" data-label="Content becomes">{project.model.split(' → ')[1]}</span>
              <span role="cell" data-label="Runs as">{index === 1 ? 'A content service' : index === 0 ? 'A web server' : 'Static files'}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="principle page-shell">
        <p className="eyebrow">The common ground</p>
        <blockquote>“Start with files you can read.<br />Add machinery only when it earns its keep.”</blockquote>
        <p className="principle-note">Built in Gleam. Kept small on purpose.</p>
      </section>

      <footer className="site-footer page-shell">
        <div className="wordmark"><Mark /><span>The Markdown Works</span></div>
        <p>Chippy, CheekyCMS, and Docklands are independent open-source projects.</p><BackToTop />
      </footer>
    </main>
  );
}
