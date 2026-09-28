# Chat Bar V1

Dead-simple React chat bar. User messages are plain text; assistant messages are
rendered from descriptor JSON through a tiny local component registry.

**Live:** https://mr-dojo.github.io/chat-bar-v1/

## Stack

- Vite + React 18 + TypeScript
- Plain CSS
- Local mock replies (no LLM backend)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`. For GitHub Pages, copy the build into `docs/` (committed)
so Pages can serve from `main` / `docs` with Vite `base: '/chat-bar-v1/'`.

```bash
npm run build && rm -rf docs && mkdir docs && cp -r dist/* docs/
```

A GitHub Actions workflow is preferred once the pushing token has `workflow` scope;
until then, update `docs/` after meaningful UI changes.

## Architecture

`ComponentDescriptor` → `library/registry.ts` → library components
(`Text`, `Card`, `Button`, `Image`, `List`, `Stack`). Unknown types render a safe fallback.
