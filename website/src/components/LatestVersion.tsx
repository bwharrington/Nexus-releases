import { useEffect, useState } from 'react'
import { RELEASES_LATEST_API_URL, RELEASES_LATEST_URL } from '../constants'
import './LatestVersion.css'

type Release = { version: string; date: string }

// Read at page load so the site stays current without a redeploy per release.
let cached: Promise<Release | null> | null = null

function fetchLatestRelease() {
  cached ??= fetch(RELEASES_LATEST_API_URL, { headers: { Accept: 'application/vnd.github+json' } })
    .then((res) => (res.ok ? res.json() : null))
    .then((data: { tag_name?: string; published_at?: string } | null) =>
      data?.tag_name
        ? {
            version: data.tag_name.replace(/^v/, ''),
            date: data.published_at
              ? new Date(data.published_at).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })
              : '',
          }
        : null,
    )
    .catch(() => null)
  return cached
}

export function LatestVersion({ className = '' }: { className?: string }) {
  const [release, setRelease] = useState<Release | null>(null)

  useEffect(() => {
    let active = true
    fetchLatestRelease().then((r) => active && setRelease(r))
    return () => {
      active = false
    }
  }, [])

  // Render nothing until the version is known (or if GitHub is unreachable).
  if (!release) return null

  return (
    <p className={`latest-version ${className}`.trim()}>
      Latest version{' '}
      <a href={RELEASES_LATEST_URL} target="_blank" rel="noreferrer">
        {release.version}
      </a>
      {release.date && <> · released {release.date}</>}
    </p>
  )
}
