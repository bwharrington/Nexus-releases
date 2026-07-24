export const RELEASES_LATEST_URL =
  'https://github.com/bwharrington/Nexus-releases/releases/latest'

export const PLATFORM_DOWNLOADS = [
  {
    id: 'windows',
    label: 'Windows',
    detail: 'Nexus-Setup.exe · portable also available',
  },
  {
    id: 'macos',
    label: 'macOS',
    detail: 'Nexus.dmg',
  },
  {
    id: 'linux',
    label: 'Linux',
    detail: 'AppImage · .deb',
  },
] as const
