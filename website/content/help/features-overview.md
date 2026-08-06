# Features overview

Nexus is a desktop multi-tab editor for writers and developers who work with markup and structured data in one place.

## Editing and preview

- **Multi-tab workspace** — keep many documents open at once.
- **Dual view** — edit source or switch to rendered preview (Markdown, RST, SVG) or CSV table view.
- **GitHub Flavored Markdown** — tables, task lists, strikethrough, fenced code, and more.
- **reStructuredText** — full RST rendering with a dedicated formatting toolbar.
- **Mermaid diagrams** — embed diagrams in Markdown and RST.
- **PDF export** — export rendered documents to PDF.
- **Find, replace, and go to line** — search within the active file.

## Project folders

The **File Directory** panel lets you open one or more folders, browse files, multi-select, and stay in sync as the disk changes.

## Structured data

Dedicated toolbars and syntax highlighting for:

| Format | Highlights |
| ------ | ---------- |
| CSV / TSV | Delimiter editing + read-only table preview |
| JSON | Format, minify, validate, sort keys, expand/collapse |
| XML | Format, minify, validate, expand/collapse |
| YAML | Format, minify, validate, expand/collapse |
| TOML | Format, minify, validate, expand/collapse |

## Images and compare

- **Raster images** (PNG, JPEG, GIF, WebP, BMP, and more) open in a viewer with zoom.
- **SVG** supports dual-mode source editing and rendered preview.
- **Compare** shows a side-by-side visual diff of any two open files.

## Console & coding agents

An integrated console runs a real local shell (PowerShell, cmd, bash, or zsh) beside the editor — float, dock, stack, or minimize sessions (up to 6).

**Native support for existing Coding Agent CLIs:** launch **Claude Code**, **Codex**, **Grok Build**, or **Gemini CLI** from the console header, add open files as agent context from tabs or the file tree, and optionally review agent file edits as diffs. Nexus works with the CLIs you already install — it does not replace them.

See [Console & coding agents](./console-terminal).

## Themes and settings

Light and dark themes, visual configuration, and a searchable settings dialog (`Ctrl+,`). Console shell and agent-review options live under **Settings → Console**.

## AI (optional, BYOK)

AI is not required to use Nexus. When you want it, bring your own API key for Claude, OpenAI, Gemini, or xAI in Settings to use Ask, Edit, and Create modes — including creating and fixing structured files (JSON, XML, YAML, TOML). See [AI assistant](./ai-assistant).

Nexus AI (in-app chat) is separate from Coding Agent CLIs in the Console — you can use either workflow.
