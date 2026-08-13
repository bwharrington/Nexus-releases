# Console & coding agents

Nexus includes an integrated console (real PTY shell) beside the editor — and **native support for existing Coding Agent CLIs** so you can run them in-app instead of juggling a separate terminal.

## Open a console

- Click **Console** in the toolbar, or press `Ctrl+``
- Open up to **4** consoles: floating, docked on the right (**Column** or **Grid** layout), or minimized as tabs
- Choose your shell in **Settings → Console** (auto, PowerShell, cmd, bash, or zsh)

## Native Coding Agent CLI support

Each console header has an **Agent CLI** picker. Nexus launches the agent you already use — it does not replace those tools with a proprietary protocol.

| Agent | Typical command |
| ----- | --------------- |
| **Claude Code** | `claude` |
| **Codex** | `codex` |
| **Grok Build** | `grok` |
| **Gemini CLI** | `gemini` |

What you get:

- **One-click launch** — select an agent to start it in that console (locked until you **Restart shell**)
- **Install help** — if the CLI is not on your PATH, Nexus shows a copyable install command (never auto-runs it)
- **Add file as context** — from the agent menu, a tab, or the file tree (**Add to Console Agent**), insert the active or selected file the way that agent expects (`@path` or Codex `/mention`)
- **Slash-command catalog** — after lock, the agent menu lists session commands (`/compact`, `/clear` or `/new`, `/help` where the agent supports them) with hover descriptions
- **Agent review (optional)** — Settings → Console → **Review external file changes as diffs** opens Agent Diff tabs when a CLI agent edits **open** text files on disk, so you can accept or reject hunks
- **Run script from the file tree** — right-click a `.ps1`, `.bat`/`.cmd`, or `.sh` file to submit it into an unlocked console

Agent CLIs are separate from the optional **Nexus AI** panel (Ask / Edit / Create with your own API key). Use either, both, or neither.

## Command helpers

The console command menu inserts ready-to-run text at the prompt (you press Enter):

- Active file's folder
- Change directory (open project roots)
- Git (status, branch, log, diff, pull)
- Run npm script (from `package.json`)

## Learn more in the app

Shell preference, panel layout, and agent review live under **Settings → Console**. Rename a console from its header or tab; layout and titles restore on the next launch (sessions themselves start fresh).
