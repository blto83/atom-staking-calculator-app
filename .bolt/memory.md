# Project memory

## Product intent & audience

- Educational/learning platform with articles and a calculator tool.
- Articles are content-driven from `src/content/`.
- Cross-linking between articles (`/learn/<slug>`) and to calculator (`/calculator`).

## Brand personality & voice

- Technical/educational tone inferred from content structure; minimal voice data so far.

## Visual design & UX direction

- Tailwind CSS utility classes (e.g. `no-underline hover:underline`).
- Inline link composition in article bodies: prefix → link text → suffix with existing spacing logic.
- In-article links styled identically to prior buttons: no underline until hover.
- Progressive-enhancement anchor pattern: real `<a href>` with onClick guard so modifier-key clicks open new tabs natively.

## Decisions, constraints & rationale

- In-article `internal-link` and `calculator-cta` blocks render as `<a>` (not `<button>`) for native navigation, accessibility, and middle-click/shift-click support.
- Click handler short-circuits for `metaKey | ctrlKey | shiftKey | altKey | button !== 0`, then `preventDefault()` + `goTo()`.
- `src/content/` article content files are immutable; only the ArticleBody renderer may change.
- Build and prerender validation must pass for changes to be accepted.
- Deploy target: Vercel.
- No `.bolt/prompt` present; no global instructions to reference.
- No GitHub repo currently connected to this Bolt project; push/sync requires Bolt GitHub integration.

## Open questions & assumptions

- Exact navigation callback wiring (where `goTo` originates) not fully mapped; assumed shared by article-navigation and calculator-cta.
- GitHub connection status may change; verify on next turn if push confirmation is requested.
- No `.bolt/prompt` yet — inferred context only; revisit if global instructions are added.