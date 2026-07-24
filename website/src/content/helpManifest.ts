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
    summary: 'Markup, structured data, folders, compare, export, and more.',
    order: 2,
  },
  {
    slug: 'ai-assistant',
    title: 'AI assistant',
    summary: 'Optional BYOK Ask, Edit, and Create — not required for everyday editing.',
    order: 3,
  },
  {
    slug: 'keyboard-shortcuts',
    title: 'Keyboard shortcuts',
    summary: 'File, editing, navigation, and AI shortcuts.',
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
