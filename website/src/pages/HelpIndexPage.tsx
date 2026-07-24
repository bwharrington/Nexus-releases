import { Link } from 'react-router-dom'
import { listHelpDocs } from '../content/helpManifest'
import './HelpPages.css'

export function HelpIndexPage() {
  const docs = listHelpDocs()

  return (
    <main className="help-layout">
      <div className="container help-layout__grid">
        <aside className="help-nav" aria-label="Help topics">
          <p className="help-nav__title">Help</p>
          <ul>
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/help/${doc.slug}`}>{doc.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="help-main">
          <h1>Help</h1>
          <p className="help-intro">
            Starter documentation for installing and using Nexus. More topics can be added over time —
            each article is a markdown file in the site content folder.
          </p>
          <ul className="help-card-list">
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/help/${doc.slug}`} className="help-card">
                  <span className="help-card__title">{doc.title}</span>
                  <span className="help-card__summary">{doc.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
