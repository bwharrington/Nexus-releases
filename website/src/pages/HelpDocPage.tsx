import { Link, Navigate, useParams } from 'react-router-dom'
import { MarkdownView } from '../components/MarkdownView'
import { getHelpDoc, listHelpDocs } from '../content/helpManifest'
import './HelpPages.css'

export function HelpDocPage() {
  const { slug = '' } = useParams()
  const docs = listHelpDocs()
  const content = getHelpDoc(slug)
  const meta = docs.find((d) => d.slug === slug)

  if (!content || !meta) {
    return <Navigate to="/help" replace />
  }

  return (
    <main className="help-layout">
      <div className="container help-layout__grid">
        <aside className="help-nav" aria-label="Help topics">
          <p className="help-nav__title">Help</p>
          <ul>
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  to={`/help/${doc.slug}`}
                  className={doc.slug === slug ? 'active' : undefined}
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/help" className="help-nav__back">
            All topics
          </Link>
        </aside>
        <div className="help-main">
          <MarkdownView content={content} />
        </div>
      </div>
    </main>
  )
}
