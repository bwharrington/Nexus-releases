export type HelpDocMeta = {
  slug: string
  title: string
  summary: string
  order: number
}

export const helpManifest: HelpDocMeta[] = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    summary: 'Install Nexus, open files, switch views, and save your work.',
    order: 1,
  },
  {
    slug: 'features-overview',
    title: 'Features overview',
    summary: 'Markup, source, structured data, folders, console, PDF, compare, export, and more.',
    order: 2,
  },
  {
    slug: 'console-terminal',
    title: 'Console & coding agents',
    summary: 'Integrated shell plus native Claude Code, Codex, Grok Build, and Gemini CLI support.',
    order: 3,
  },
  {
    slug: 'keyboard-shortcuts',
    title: 'Keyboard shortcuts',
    summary: 'File, editing, navigation, console, and diff review shortcuts.',
    order: 4,
  },
]

const modules = import.meta.glob('../../content/help/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export function getHelpDoc(slug: string): string | undefined {
  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  )
  return entry?.[1]
}

export function listHelpDocs(): HelpDocMeta[] {
  return [...helpManifest].sort((a, b) => a.order - b.order)
}
