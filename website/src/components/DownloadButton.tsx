import type { ReactNode } from 'react'
import { RELEASES_LATEST_URL } from '../constants'
import './DownloadButton.css'

type Props = {
  variant?: 'primary' | 'secondary'
  children?: ReactNode
  className?: string
}

export function DownloadButton({
  variant = 'primary',
  children = 'Download Nexus',
  className = '',
}: Props) {
  return (
    <a
      className={`download-btn download-btn--${variant} ${className}`.trim()}
      href={RELEASES_LATEST_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
