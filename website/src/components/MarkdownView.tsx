import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import './MarkdownView.css'

type Props = {
  content: string
}

function resolveHelpHref(href: string | undefined): string | undefined {
  if (!href) return undefined
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
    return href
  }
  if (href.startsWith('./') || href.startsWith('../')) {
    const slug = href.replace(/^\.\//, '').replace(/^\.\.\//, '').replace(/\.md$/, '')
    return `/help/${slug}`
  }
  if (href.startsWith('/help')) {
    return href
  }
  return href
}

const components: Components = {
  a({ href, children }) {
    const resolved = resolveHelpHref(href)
    if (resolved?.startsWith('/help')) {
      return <Link to={resolved}>{children}</Link>
    }
    if (resolved?.startsWith('http')) {
      return (
        <a href={resolved} target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    }
    return <a href={resolved}>{children}</a>
  },
}

export function MarkdownView({ content }: Props) {
  return (
    <article className="markdown-view">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  )
}
