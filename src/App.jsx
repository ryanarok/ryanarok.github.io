import { ArrowUpRight, Briefcase, FolderGit2, Mail, User } from 'lucide-react'
import './App.css'

/* ------------------------------------------------------------------ */
/* EDIT: replace the placeholder content below with your own details.  */
/* ------------------------------------------------------------------ */

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ryanarok',
    sprite: 'github-icon',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/reynier-garc%C3%ADa-montes-de-oca-378536314/',
    sprite: 'linkedin-icon',
    external: true,
  },
  { label: 'Email', href: 'mailto:reyn.gm7@gmail.com', Icon: Mail },
]

const EXPERIENCE = [
  /* {
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2023 — Present',
    summary:
      'Leading the frontend of a B2B SaaS platform used by 40k+ teams. Migrated the app to React 19 and Vite, cutting build times by 70%.',
    stack: ['React', 'TypeScript', 'Vite', 'GraphQL'],
  }, */
]

const PROJECTS = [
  {
    name: 'Benescripto',
    description:
      'Spanish spelling training app',
    stack: ['Godot', 'GDScript'],
    repo: 'https://github.com/ryanarok/Benescripto',
    demo: 'https://github.com/ryanarok/Benescripto/releases',
  },

]

function SpriteIcon({ id, size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      className="sprite-icon"
      height={size}
      width={size}
    >
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <h2 className="section-heading">
      <Icon className="section-icon" aria-hidden="true" />
      {title}
    </h2>
  )
}

function Hero() {
  return (
    <header className="hero">
      <h1>Reynier García</h1>
      <p className="hero-role">Software Developer</p>
      <p className="hero-bio">
        I design and build fast, accessible web applications. Currently
        exploring React 19, Vite and design systems — and occasionally
        publishing what I learn.
      </p>
      <ul className="social-links">
        {SOCIALS.map(({ label, href, Icon, external, sprite}) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {sprite ? (
                <SpriteIcon id={sprite} />
              ) : (
                <Icon size={16} aria-hidden="true" />
              )}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading icon={User} title="About" />
      <p>
        I&apos;m a developer based in Gijón 
      </p>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading icon={Briefcase} title="Experience" />
      {EXPERIENCE.map(({ role, company, period, summary, stack }) => (
        <article className="job" key={role}>
          <div className="job-header">
            <h3>{role}</h3>
            <span className="job-period">{period}</span>
          </div>
          <p className="job-company">{company}</p>
          <p>{summary}</p>
          <ul className="tag-list">
            {stack.map((tech) => (
              <li className="tag" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading icon={FolderGit2} title="Projects" />
      <div className="projects-grid">
        {PROJECTS.map(({ name, description, stack, repo, demo }) => (
          <article className="project-card" key={name}>
            <h3>{name}</h3>
            <p>{description}</p>
            <ul className="tag-list">
              {stack.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {repo && (
                <a href={repo} target="_blank" rel="noreferrer">
                  <SpriteIcon id="github-icon" size={15} />
                  Source
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={15} aria-hidden="true" />
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <SectionHeading icon={Mail} title="Contact" />
      <p>
        Open to freelance work and full-time roles. The fastest way to reach me
        is by email — I usually reply within a day.
      </p>
      <a className="email-link" href="mailto:hello@example.dev">
        reyn.gm7@gmail.com
      </a>
    </section>
  )
}

export default function App() {
  return (
    <div className="portfolio">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="portfolio-footer">
        <p>© 2026 Reynier García</p>
      </footer>
    </div>
  )
}
