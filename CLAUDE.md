# ajclarkson.co.uk — Site Context

## What this is

Adam's personal site. Positioned as a home for writing on two threads: home automation (technical, opinionated) and AI/engineering leadership. Not a blog with a cadence — durable guides and notes published when something is worth writing up.

## Stack

- **Astro** (v5) — static site generator
- **Netlify** — hosting and image optimisation
- **MDX** — content format

## Structure

| Path | Purpose |
|------|---------|
| `src/writing/` | Content — one directory per post, with `index.mdx` and any images |
| `src/pages/writing/` | Astro routes — `index.astro` (listing) and `[...slug].astro` (post) |
| `src/pages/tags/` | Tag index and filtered views |
| `src/layouts/` | `MarkdownPostLayout.astro` for posts, `PageLayout.astro` for everything else |
| `src/components/` | `BlogPost.astro`, `Navigation.astro`, `Tags.astro`, `Footer.astro` |
| `src/content.config.ts` | Defines the `writing` collection |

## Content collection

Collection name is `writing` (not `blog`). Posts live in `src/writing/{slug}/index.mdx`.

Required frontmatter:
```yaml
title: string
pubDate: date
description: string
author: string
tags: string[]
image: /src/writing/{slug}/title-image.jpg
imageAlt: string
```

## Source material

Home automation posts draw from the private working notes at `~/workspace/claude-home`. Key docs there:
- `CLAUDE.md` — full system overview, entity naming, room list
- `design-principles.md` — the architectural thinking behind the automation system
- `runtime-architecture.md` — Node-RED pipeline design
- `heating-v3-design.md` — heating system

When writing home automation content, read the relevant doc from claude-home first.

## Voice

Conversational, technically precise, explains the *why* before the *how*. No hedging. Assumes the reader is capable but hasn't solved this specific problem yet. Same voice across both topic threads.

## Deployment

Deploys automatically via Netlify on push to `main`. Build command: `npm run build`.
