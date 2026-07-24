# AI assistant

Nexus includes an **optional** AI panel for questions, document edits with visual review, and generating new documents (Markdown or structured formats). AI is **BYOK (bring your own key)** — you supply provider API keys in Settings. Nothing about day-to-day editing depends on AI: open files, preview, format tools, and folders all work without configuring a provider.

Open or close the Nexus AI dialog with `Ctrl+Shift+A`.

## Providers

Configure your own API keys in **Settings** for one or more of:

- Anthropic (Claude)
- OpenAI
- Google Gemini
- xAI (Grok)

Production builds store keys in OS credential storage. Optional live web search can be enabled when configured (Serper).

## Ask mode

Stateless Q&A — each question stands alone (plus any files you attach).

1. Choose **Ask** in the mode dropdown.
2. Optionally attach files and toggle web search.
3. Type your question and press **Enter**.

Useful for explaining selections, summarizing attached files, or researching with web search on.

## Edit mode

Describe changes in natural language; Nexus proposes edits and shows a **visual diff** you accept or reject.

1. Choose **Edit**.
2. Optionally enable web search for up-to-date context.
3. Describe the change and submit.
4. Navigate hunks with `J` / `K` (or arrows); accept with `Enter` / `Y`, reject with `Backspace` / `N`.

## Create mode

Generate a **new document** from a description — Markdown, JSON, YAML, XML, code, and more — and open it as a new tab.

1. Choose **Create**.
2. Optionally attach reference files and enable web search.
3. Describe what to create (blog post, README, schema, config, etc.) and press **Enter**.

## Fix structured data

When Validate fails on JSON, XML, YAML, or TOML, **Fix with Nexus** opens Edit mode pre-filled with the validation error so AI can propose a corrected structure you review as a diff.

## Selection-aware actions

From the editor context menu, Writing Quality and related actions can run on the current selection without opening a full chat flow.

## Privacy note

AI features send content you choose (prompt, attachments, selection) to the provider you configured. Disable AI or omit keys if you need a fully offline workflow.
