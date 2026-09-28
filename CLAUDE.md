# Chat Bar V1 — Claude Code guide

## Goal

Dead-simple single chat-bar UI in React. User messages are plain text bubbles.
Assistant messages are **dynamically rendered** from `ComponentDescriptor` JSON
via a local registry → React components. No raw HTML injection.

## Stack (do not expand without asking)

- Vite + React 18+ + TypeScript
- Plain CSS (`src/styles/app.css`). No Tailwind, MUI, Chakra, Ant, Redux, Next.js
- Local state only (`useState`). No live LLM / API backend
- Optional: `clsx` only if genuinely needed

## Architecture

```
descriptor JSON  →  registry (library/registry.ts)  →  React components
```

- `DynamicRenderer` looks up `descriptor.type` in the registry and mounts the
  matching component. Unknown types → `Fallback` (never throw).
- Extend the registry for new UI blocks. Do **not** one-off JSX inside `Message`.
- Keep HTML/output deterministic from descriptors.
- Never use `dangerouslySetInnerHTML` for message text.

## Component set (locked unless explicitly asked)

`text` | `card` | `button` | `image` | `list` | `stack` (+ `Fallback`)

## Rules for agents

1. No new dependencies without asking.
2. Do not expand the component set without an explicit ask.
3. No secrets, no Costantino Art archive content, no family calendar IDs.
4. GitHub Pages base path is `/chat-bar-v1/` — keep `vite.config.ts` `base` in sync.
5. Prefer extending `mock/replies.ts` for demos over wiring real APIs.

## Commands

```bash
npm install
npm run dev
npm run build
```
