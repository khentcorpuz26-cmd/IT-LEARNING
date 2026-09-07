# IT-LEARNING

DevShelf is an IT learning website with 12 original lessons, practical developer tools, quizzes, bookmarks, and browser-local learning progress.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the localhost URL printed by the server (normally http://localhost:3000).

## Validate

```sh
npm run build
npx tsc --noEmit
```

## Features

- Internal lessons covering web development, Python, Git, APIs, networking, Linux, SQL, security, containers, testing, React, and TypeScript
- Search and topic/status filters
- 24 quiz questions with answer explanations
- Bookmarks, completion tracking, best scores, and continue-learning link
- JSON formatting, Base64 conversion, URL encoding, and UUID generation
- Responsive reading pages with section navigation

## Data and integrations

Progress is stored in the current browser using localStorage. Google sign-in, shared database storage, Gmail access, and n8n integrations are not implemented yet. Do not treat browser-stored quiz scores as verified certification results.

The project uses React, TypeScript, Vinext, and Sites. `.openai/hosting.json` identifies the existing Sites project; it is not a credential. Publishing this repository to GitHub does not deploy it or change the existing site's access.

## Source layout

- `app/` — homepage and internal lesson routes
- `lib/guides.ts` — lessons and exercises
- `lib/quizzes.ts` — quiz content
- `lib/toolbox.ts` — developer tool conversions
- `components/` — interface and learning features

Examples and tutorials are educational. External references are linked from each lesson.
