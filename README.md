# ml-blogs

Personal blog of **Owais Ahmad Lone** — Founding AI Engineer at Landeed (YC),
B.Tech in Computer Science from IIT Kharagpur. Notes on machine learning, AI
engineering, and building things.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS
v4, and MDX.

## Writing a post

Add an `.mdx` file to `content/blog/`. Frontmatter drives everything:

```mdx
---
title: "Your Post Title"
description: "One-line summary shown in listings and previews."
date: "2026-06-24"
category: "Engineering"
tags: ["rag", "llm"]
draft: false
---

Your content here. `##` and `###` headings automatically appear in the
table-of-contents sidebar.
```

Custom components available in MDX:

```mdx
<Callout type="tip">Highlighted aside — type can be note | tip | warning.</Callout>
```

Set `draft: true` to keep a post out of listings while you work on it.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a new
production deploy automatically.

## Project structure

```
content/blog/          Blog posts (MDX + frontmatter)
src/app/               Routes (home, /blog, /blog/[slug], /about)
src/components/        Header, Footer, TOC, post list, MDX components
src/lib/posts.ts       Reads posts, builds the table of contents
src/lib/site.ts        Author + site configuration
```
