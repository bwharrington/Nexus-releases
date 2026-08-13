export const RELEASES_LATEST_URL =
  'https://github.com/bwharrington/Nexus-releases/releases/latest'

export const PLATFORM_DOWNLOADS = [
  {
    id: 'windows-setup',
    label: 'Windows installer',
    detail: 'Nexus-Windows-x64-Setup.exe',
  },
  {
    id: 'windows-portable',
    label: 'Windows portable',
    detail: 'Nexus-Windows-x64-Portable.exe',
  },
  {
    id: 'macos-arm64',
    label: 'macOS (Apple Silicon)',
    detail: 'Nexus-macOS-arm64.dmg',
  },
  {
    id: 'macos-x64',
    label: 'macOS (Intel)',
    detail: 'Nexus-macOS-x64.dmg',
  },
] as const
