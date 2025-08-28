## Architecture Overview

This repository is a minimal monorepo that contains:

- A TypeScript Node workspace (root) for general-purpose tooling and tests
- A Next.js dashboard application using Tailwind CSS and shadcn/ui under `apps/dashboard`


### Repository Structure

```
hi/
├─ apps/
│  └─ dashboard/                # Next.js 15 app (App Router, Turbopack, Tailwind, shadcn/ui)
│     ├─ src/
│     │  ├─ app/               # App Router entrypoints (layout, pages)
│     │  │  ├─ layout.tsx      # Root layout with Sidebar + Header
│     │  │  └─ page.tsx        # Dashboard landing page (cards + progress)
│     │  ├─ components/        # App-level components
│     │  │  ├─ header.tsx
│     │  │  ├─ sidebar.tsx
│     │  │  └─ ui/             # shadcn/ui components added via CLI
│     │  │     ├─ card.tsx
│     │  │     └─ progress.tsx
│     │  └─ lib/
│     │     └─ utils.ts
│     ├─ public/               # Static assets
│     ├─ components.json       # shadcn/ui configuration
│     ├─ eslint.config.mjs     # ESLint flat config for the app
│     ├─ next.config.ts        # Next.js configuration (Turbopack by default)
│     ├─ postcss.config.mjs    # Tailwind v4/PostCSS setup
│     ├─ tsconfig.json         # TypeScript config for the app
│     └─ package.json          # App-level dependencies and scripts
│
├─ src/                        # Root TypeScript sample app + tests
│  ├─ index.ts                 # Exports getGreeting() and runtime entrypoint
│  └─ __tests__/index.test.ts  # Vitest tests for getGreeting()
│
├─ tsconfig.json               # Root TS config (strict, CJS, outDir dist)
├─ package.json                # Root-level tooling (TypeScript, ESLint, Prettier, Vitest)
├─ eslint.config.mjs           # ESLint v9 flat config (root)
├─ .prettierrc.json            # Prettier configuration
├─ .prettierignore
├─ .gitignore
├─ LICENSE
└─ README.md
```


### Technologies

- TypeScript 5 (strict mode)
- ESLint v9 (flat config) with `typescript-eslint`, `eslint-plugin-import`, `eslint-plugin-unused-imports` and `eslint-config-prettier`
- Prettier 3 for formatting
- Vitest for unit tests and `@vitest/coverage-v8` for coverage
- Next.js 15 (App Router) with Turbopack dev/build, Tailwind CSS v4, and shadcn/ui components
- lucide-react icons and `sonner` for toasts (available for future use)


### Apps

#### Dashboard (`apps/dashboard`)

- Layout: `src/app/layout.tsx` composes a persistent sidebar (`src/components/sidebar.tsx`) and header (`src/components/header.tsx`).
- Page: `src/app/page.tsx` renders example stats cards and a placeholder table using shadcn/ui `Card` and `Progress`.
- UI Kit: shadcn/ui initialized with `components.json`; components are placed under `src/components/ui/*`.
- Styling: Tailwind utility classes and CSS vars (updated by shadcn). Global styles in `src/app/globals.css`.

Run locally:

```
cd apps/dashboard
npm run dev -- --port 3000
```

Build:

```
cd apps/dashboard
npm run build
```

Deployment:

- Vercel recommended. Use GitHub import and set the project root to `apps/dashboard`.
- Next.js will detect Tailwind and App Router automatically. Turbopack is enabled in dev/build.


### Root Tooling (Developer Experience)

- Lint: `npm run lint` (eslint)
- Format: `npm run format` (prettier)
- Typecheck: `npm run typecheck` (tsc noEmit)
- Test: `npm test` and coverage via `npm run coverage`

Sample TS entrypoint:

```ts
// src/index.ts
export function getGreeting(name: string = 'TypeScript'): string {
  return `Hello from ${name}!`;
}

if (require.main === module) {
  // eslint-disable-next-line no-console
  console.log(getGreeting());
}
```


### Monorepo Notes

- Multiple lockfiles exist: one at repo root and another at `apps/dashboard`. Next.js may infer workspace root from the root lockfile and warn. This is benign for local dev. For CI/hosting, scope commands to the app directory (e.g., `cd apps/dashboard && npm run build`).
- If desired, future evolution could consolidate into a single workspace manager (e.g., npm workspaces, pnpm, or Turborepo) for shared tooling and caching.


### Next Steps (Optional)

- Add charts (e.g., via `recharts`, `chart.js`, or `@nivo/*`) and wire into cards
- Add a data table with sorting/filtering (e.g., tanstack table + shadcn/ui)
- Add authentication (e.g., NextAuth.js) and protected routes
- Set up GitHub Actions for lint/typecheck/tests and Vercel preview comments
- Introduce an API layer (Next.js Route Handlers) with strict typing (zod)


