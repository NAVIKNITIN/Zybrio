# Reflex AI — Next.js Starter

Production-ready **Next.js 16** application with App Router, TypeScript, Tailwind CSS v4, ShadCN UI, Redux Toolkit, Axios, React Hook Form + Zod, Framer Motion, and dark/light theming.

## Tech stack

| Layer | Tools |
|--------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, ShadCN UI |
| State | Redux Toolkit |
| HTTP | Axios |
| Forms | React Hook Form + Zod |
| Motion | Framer Motion |
| Theme | next-themes |
| Toasts | Sonner |

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Demo credentials

- **Email:** `demo@reflex.ai`
- **Password:** `password`

## Project structure

```
src/
├── app/              # Routes, layouts, API route handlers
│   ├── (auth)/       # Login & register
│   ├── (dashboard)/  # Protected dashboard shell
│   └── api/          # REST examples (auth, items CRUD)
├── components/
│   ├── common/       # Reusable app components
│   ├── forms/
│   ├── layout/       # Navbar, sidebar, shells
│   └── ui/           # ShadCN primitives
├── features/         # Domain UI (auth, items, dashboard)
├── services/         # Axios API layer
├── store/            # Redux slices & hooks
├── hooks/            # Custom hooks
├── utils/
├── constants/
├── types/
├── styles/
└── lib/              # env, metadata, cn
```

## Key patterns

### Absolute imports

Configured in `tsconfig.json` as `@/*` → `./src/*`.

### Protected routes

`src/middleware.ts` checks the `reflex_auth_token` cookie and redirects unauthenticated users from `/dashboard/*` to `/login`.

### API layer

- `src/services/api-client.ts` — Axios instance with auth header injection
- `src/services/*.service.ts` — Feature-specific API methods
- `src/app/api/**` — Example Route Handlers (in-memory store for items)

### Global state

Redux Toolkit auth slice with localStorage hydration. Use `useAppSelector` / `useAppDispatch` from `@/store/hooks`.

### Forms & validation

Zod schemas in `src/features/*/schemas.ts`, consumed via `@hookform/resolvers/zod`.

### Performance

- `next/dynamic` for heavy client widgets
- `memo()` on list/table components
- Lazy-loaded sidebar and dashboard sections

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Environment variables

See `.env.example`. Public variables must use the `NEXT_PUBLIC_` prefix. Server-only secrets stay unprefixed.

## Extending

1. Replace demo API routes with your backend URL in `.env.local`.
2. Add feature folders under `src/features/`.
3. Register new Redux slices in `src/store/index.ts`.
4. Add nav links in `src/constants/auth.ts`.

## License

MIT
