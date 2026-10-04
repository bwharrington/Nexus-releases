import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { DownloadButton } from '../components/DownloadButton'
import '../components/DownloadButton.css'
import { LatestVersion } from '../components/LatestVersion'
import { PLATFORM_DOWNLOADS, RELEASES_LATEST_URL } from '../constants'
import './HomePage.css'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const CAPABILITIES = [
  {
    title: 'Edit & preview',
    body: 'Dual-mode Markdown and RST with Mermaid, KaTeX math, live word count, and a formatting toolbar that stays out of the way until you need it.',
  },
  {
    title: 'Structured data',
    body: 'CSV tables, JSON, XML, YAML, and TOML with format, validate, and minify tools — same app as your Markdown and text documents.',
  },
  {
    title: 'Source, images, and PDF',
    body: 'Syntax-highlighted Python, C#, Java, PowerShell, JavaScript, TypeScript, and HTML. Raster and SVG viewers, plus view-only PDF tabs.',
  },
  {
    title: 'Console & coding agents',
    body: 'A real shell beside the editor (PowerShell, cmd, bash, or zsh) — up to 4 sessions, docked in Column or Grid, floating, or minimized. Native support for existing Coding Agent CLIs — Claude Code, Codex, Grok Build, and Gemini CLI — launch in-app, add open files as context, and optionally review their file changes as diffs.',
  },
  {
    title: 'AI Features (Optional and BYOK)',
    body: 'Ask about your files, Edit with reviewable visual diffs, Create Markdown or structured files (JSON, YAML, XML, and more), and Fix validation errors in structured data — with Claude, OpenAI, Gemini, or SpaceXAI using your own API key.',
  },
  {
    title: 'Desktop-first',
    body: 'A native desktop app with multi-tab editing, folder projects, file search, and file associations — no login, no account, and no server required.',
  },
] as const

const AI_SHOTS = [
  {
    src: 'screenshots/ai-create-progress.png',
    alt: 'Nexus AI Create mode researching a new document with web search enabled',
    caption: 'Create with live research',
  },
  {
    src: 'screenshots/ai-create-result.png',
    alt: 'Nexus AI Create mode finishing a document opened beside the editor',
    caption: 'New docs open as tabs',
  },
  {
    src: 'screenshots/ai-edit-diff.png',
    alt: 'Nexus AI Edit mode showing a reviewable red and green diff in Markdown',
    caption: 'Edit with accept / reject diffs',
  },
] as const

type LightboxShot = (typeof AI_SHOTS)[number]

export function HomePage() {
  const [lightbox, setLightbox] = useState<LightboxShot | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!lightbox) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox])

  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__brand">Nexus</p>
            <h1 className="hero__title">One desktop editor for markup, data, and coding agents</h1>
            <p className="hero__lede">
              Nexus is a multi-tab document editor for Markdown, reStructuredText, CSV, JSON, XML, source, PDF, and more —
              with live preview, project folders, and an integrated console with native Coding Agent CLI support.
              An optional bring-your-own-key (BYOK) AI assistant is available when you want it — not required to
              be productive.
            </p>
            <div className="hero__actions">
              <DownloadButton />
              <Link to="/help" className="download-btn download-btn--secondary">
                Read the docs
              </Link>
            </div>
            <LatestVersion />
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <img
              className="hero__mark"
              src={asset('nexus.svg')}
              alt=""
              width={280}
              height={280}
            />
          </div>
        </div>
        <div className="container">
          <figure className="shot hero__shot">
            <img
              className="shot__img"
              src={asset('screenshots/workspace-consoles.png')}
              alt="Nexus with project folders, a code editor, and docked Claude Code and Codex consoles"
              width={1600}
              height={900}
            />
          </figure>
        </div>
      </section>

      <section className="section" id="what">
        <div className="container narrow">
          <h2>What it is</h2>
          <p>
            Nexus is a modern desktop editor for writers, developers, and anyone who jumps between documents
            and structured files without wanting a different tool for each format.
          </p>
        </div>
      </section>

      <section className="section section--showcase" id="consoles">
        <div className="container">
          <h2>Coding agents beside your files</h2>
          <p className="section__lede">
            Run Claude Code, Codex, Grok Build, or Gemini CLI in docked or floating consoles — then review their disk edits
            as Agent Diffs you keep or undo hunk by hunk.
          </p>
          <figure className="shot">
            <img
              className="shot__img"
              src={asset('screenshots/agent-review-diff.png')}
              alt="Nexus Agent Diff reviewing Claude Code changes with Keep and Undo controls"
              width={1600}
              height={900}
            />
            <figcaption>Agent review — accept or reject console-driven file changes in the editor</figcaption>
          </figure>
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

      <section className="section section--ai" id="nexus-ai">
        <div className="container">
          <h2>Optional Nexus AI</h2>
          <p className="section__lede">
            Bring your own key for Ask, Edit, and Create — separate from Coding Agent CLIs in the console.
            Changes land as reviewable diffs so you stay in control. Click a screenshot to enlarge it.
          </p>
          <div className="ai-shot-row">
            {AI_SHOTS.map((shot) => (
              <figure key={shot.src} className="shot shot--compact">
                <button
                  type="button"
                  className="shot__zoom"
                  onClick={() => setLightbox(shot)}
                  aria-label={`Enlarge screenshot: ${shot.caption}`}
                >
                  <img
                    className="shot__img"
                    src={asset(shot.src)}
                    alt={shot.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                  />
                </button>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container narrow">
          <h2>Why it helps</h2>
          <p>
            Keep Markdown docs, CSVs, and config files in one workspace with a real folder sidebar and a
            built-in console. Run Claude Code, Codex, Grok Build, or Gemini CLI beside your files — or use the
            optional BYOK Nexus AI assistant, where Edit mode proposes changes as a reviewable diff so you stay
            in control. Less context-switching, clearer review, same keyboard-driven flow.
          </p>
        </div>
      </section>

      <section className="section section--download" id="download">
        <div className="container">
          <h2>Download</h2>
          <p className="section__lede">
            Windows installer and portable builds, plus macOS disk images, from the latest public release.
            macOS builds are unsigned until notarization is set up — Gatekeeper may ask you to allow the app.
            Your files stay on your machine. No account required. AI is optional and BYOK when you want it.
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
          <LatestVersion />
        </div>
      </section>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox__bar">
              <p id={titleId} className="lightbox__title">
                {lightbox.caption}
              </p>
              <button
                type="button"
                className="lightbox__close"
                onClick={() => setLightbox(null)}
                aria-label="Close enlarged screenshot"
              >
                Close
              </button>
            </div>
            <img
              className="lightbox__img"
              src={asset(lightbox.src)}
              alt={lightbox.alt}
            />
          </div>
        </div>
      ) : null}
    </main>
  )
}
