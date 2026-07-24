import { Link } from 'react-router-dom'
import { DownloadButton } from '../components/DownloadButton'
import '../components/DownloadButton.css'
import { PLATFORM_DOWNLOADS, RELEASES_LATEST_URL } from '../constants'
import './HomePage.css'

const CAPABILITIES = [
  {
    title: 'Edit & preview',
    body: 'Dual-mode Markdown and RST with Mermaid, live word count, and a formatting toolbar that stays out of the way until you need it.',
  },
  {
    title: 'Structured data',
    body: 'CSV tables, JSON, XML, YAML, and TOML with format, validate, and minify tools — same app as your prose files.',
  },
  {
    title: 'AI assistant',
    body: 'Ask questions, apply edits with visual diff review, or Create a new document. Claude, OpenAI, Gemini, and xAI.',
  },
  {
    title: 'Cross-platform',
    body: 'Desktop builds for Windows, macOS, and Linux so your editor matches how you already work.',
  },
] as const

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__brand">Nexus</p>
            <h1 className="hero__title">One desktop editor for markup, data, and AI-assisted writing</h1>
            <p className="hero__lede">
              Nexus is a multi-tab document editor for Markdown, reStructuredText, CSV, JSON, XML, and more —
              with live preview, project folders, and an optional AI assistant that shows its work.
            </p>
            <div className="hero__actions">
              <DownloadButton />
              <Link to="/help" className="download-btn download-btn--secondary">
                Read the docs
              </Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <img
              className="hero__mark"
              src={`${import.meta.env.BASE_URL}nexus.svg`}
              alt=""
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="section" id="what">
        <div className="container narrow">
          <h2>What it is</h2>
          <p>
            Nexus is a modern desktop editor built with Electron and React. It is designed for writers,
            developers, and anyone who jumps between prose and structured files without wanting a different
            tool for each format.
          </p>
        </div>
      </section>

      <section className="section section--capabilities" id="capabilities">
        <div className="container">
          <h2>What it can do</h2>
          <div className="capability-list">
            {CAPABILITIES.map((item) => (
              <div key={item.title} className="capability">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container narrow">
          <h2>Why it helps</h2>
          <p>
            Keep Markdown docs, CSVs, and config files in one workspace with a real folder sidebar.
            When you use AI, Edit mode proposes changes as a reviewable diff — so you stay in control of
            what lands in the file. Less context-switching, clearer review, same keyboard-driven flow.
          </p>
        </div>
      </section>

      <section className="section section--download" id="download">
        <div className="container">
          <h2>Download</h2>
          <p className="section__lede">
            Grab the latest installer from the public releases page. Platform assets appear there as they are
            published.
          </p>
          <div className="platform-row">
            {PLATFORM_DOWNLOADS.map((p) => (
              <a
                key={p.id}
                className="platform-link"
                href={RELEASES_LATEST_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span className="platform-link__label">{p.label}</span>
                <span className="platform-link__detail">{p.detail}</span>
              </a>
            ))}
          </div>
          <div className="section__cta">
            <DownloadButton>Get the latest release</DownloadButton>
          </div>
        </div>
      </section>
    </main>
  )
}
