import { useEffect, useState, type ReactNode } from "react"

import { entries, filters, profile, recentContributions, services } from "./data"

function Icon({
  children,
  size = 18,
  className = "",
}: {
  children: ReactNode
  size?: number
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  )
}

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <Icon size={size}>
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </Icon>
)

const Github = ({ size = 19 }: { size?: number }) => (
  <Icon size={size}>
    <path
      d="M12 2.7a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.85c-2.65.58-3.2-1.12-3.2-1.12-.44-1.1-1.06-1.39-1.06-1.39-.87-.59.06-.58.06-.58.96.07 1.47.99 1.47.99.86 1.47 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.11-.24-4.34-1.06-4.34-4.7 0-1.04.37-1.89.99-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.2c.8 0 1.6.11 2.36.32 1.81-1.23 2.61-.98 2.61-.98.52 1.31.19 2.28.09 2.52.61.67.99 1.52.99 2.56 0 3.66-2.23 4.46-4.35 4.7.34.3.64.87.64 1.76v2.68c0 .26.17.55.65.46A9.5 9.5 0 0 0 12 2.7Z"
      fill="currentColor"
    />
  </Icon>
)

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <Icon>
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    </Icon>
  ) : (
    <Icon>
      <path
        d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </Icon>
  )
}

function StatIcon({ type }: { type: "star" | "fork" }) {
  return type === "star" ? (
    <Icon size={15}>
      <path
        d="m12 2.8 2.74 5.55 6.13.9-4.44 4.32 1.05 6.1L12 16.79l-5.48 2.88 1.05-6.1-4.44-4.32 6.13-.9L12 2.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </Icon>
  ) : (
    <Icon size={15}>
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="19" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6 7v10M8 7c5 0 3 8 8 8v-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </Icon>
  )
}


function contributionLevel(count: number) {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  })
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work")

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light"
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  const visible = entries.filter(
    (entry) => filter === "All work" || entry.type === filter,
  )
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Freelance project enquiry")}`

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          {profile.initials}
          <span className="brand-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#hire">Hire me</a>
          <a href="#about">About</a>
          <a href="/pre-ai/">Pre-AI site</a>
        </nav>
        <div className="header-actions">
          <a
            className="github-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            <span>GitHub</span>
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
          >
            <ThemeIcon dark={dark} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Taking freelance projects · {profile.location}
            </div>
            <h1>
              Back-ends at scale.
              <br />
              Apps that <span>ship.</span>
            </h1>
            <p className="intro">
              I&apos;m Yadhu, a software engineer with {profile.yearsCoding}+
              years of experience. By day I write Go microservices at American
              Express. On the side I build mobile apps, web apps and APIs as a
              freelancer for businesses in Bengaluru and remote clients.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#hire">
                Hire me for your app
                <ArrowUpRight />
              </a>
              <a className="text-link" href="#work">
                See my work
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="GitHub profile summary">
            <div className="profile-top">
              <div className="avatar">{profile.initials}</div>
              <div>
                <strong>{profile.name}</strong>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  @{profile.handle}
                </a>
              </div>
              <span className="online-dot" title="Available for freelance" />
            </div>
            <p>
              Go, Dart, TypeScript, Java. Flutter and React Native on the front,
              Go and PostgreSQL on the back. I work from {profile.location}.
            </p>
            <div className="profile-stats">
              <div>
                <strong>{profile.publicRepos}</strong>
                <span>Public repos</span>
              </div>
              <div>
                <strong>{profile.yearsCoding}+ yrs</strong>
                <span>Building software</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Apps on Play Store</span>
              </div>
            </div>
            <div
              className="contribution"
              aria-label="GitHub contribution activity, last 12 weeks"
            >
              <div className="contribution-label">
                <span>{profile.contributionsLastYear} contributions</span>
                <span>Last 12 weeks</span>
              </div>
              <div className="contribution-grid">
                {recentContributions.map((count, index) => (
                  <i key={index} data-level={contributionLevel(count)} />
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>A timeline of things I&apos;ve shipped.</h2>
            </div>
            <p>
              Jobs, open-source projects and client apps, newest first. The
              open-source entries come from my public GitHub.
            </p>
          </div>

          <div className="filter-row" role="group" aria-label="Filter timeline">
            {filters.map((item) => (
              <button
                className={filter === item ? "active" : ""}
                key={item}
                onClick={() => setFilter(item)}
                type="button"
              >
                {item === "App" ? "Apps" : item}
              </button>
            ))}
          </div>

          <div className="timeline" aria-live="polite">
            {visible.map((entry) => (
              <article
                className={`project ${entry.featured ? "featured" : ""}`}
                key={entry.title}
              >
                <div className="project-date">
                  <span>{entry.date}</span>
                  <strong>{entry.year}</strong>
                </div>
                <div className="timeline-mark">
                  <i />
                </div>
                <div className="project-content">
                  <div className="project-labels">
                    <span className="project-type">{entry.type}</span>
                    {entry.featured && (
                      <span className="featured-label">Latest project</span>
                    )}
                  </div>
                  <h3>
                    {entry.href ? (
                      <a href={entry.href} target="_blank" rel="noreferrer">
                        {entry.title}
                        <ArrowUpRight size={21} />
                      </a>
                    ) : (
                      <a>{entry.title}</a>
                    )}
                  </h3>
                  <p>{entry.description}</p>
                  <div className="impact">{entry.impact}</div>
                  <div className="project-meta">
                    <div className="tags">
                      {entry.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    {entry.language && (
                      <div className="repo-stats">
                        <span>
                          <i style={{ background: entry.color }} />
                          {entry.language}
                        </span>
                        {entry.stars !== undefined && (
                          <span>
                            <StatIcon type="star" />
                            {entry.stars}
                          </span>
                        )}
                        {entry.forks !== undefined && (
                          <span>
                            <StatIcon type="fork" />
                            {entry.forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hire-section" id="hire">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Freelance · {profile.location}</p>
              <h2>Need an app built? I can build it for you.</h2>
            </div>
            <p>
              I work with startups, small businesses and agencies in Bengaluru,
              and with remote clients. You deal with me directly, from the first
              call to the app store release and support after launch.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <div className="service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <div className="tags">
                  {service.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="hire-cta">
            <a className="primary-button" href={mailto}>
              Tell me about your project
              <ArrowUpRight />
            </a>
            <span>
              {profile.email} · I&apos;m happy to meet in person in Bengaluru
            </span>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="section-kicker">A little more</p>
          <div className="about-grid">
            <h2>
              Started in sales.
              <br />
              Stayed for the code.
            </h2>
            <div>
              <p>
                I spent three years in financial sales before I switched to
                software in 2020. Since then I&apos;ve worked at startups, been a
                freelance founding engineer, and now work on payments-scale
                systems at American Express. I still build open source most
                weekends. Outside work it&apos;s chess, badminton, the gym and
                long rides.
              </p>
              <a className="text-link" href={mailto}>
                Get in touch <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Post-AI edition ·{" "}
          <a href="/pre-ai/">see the pre-AI one</a>
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.stackoverflow} target="_blank" rel="noreferrer">
            Stack Overflow
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <span>© 2019 – {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </div>
  )
}

export default App
