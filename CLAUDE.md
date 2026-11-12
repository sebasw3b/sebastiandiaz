@AGENTS.md

## Commands

Before finishing, run `pnpm lint`, `pnpm test` (vitest) and `pnpm exec tsc --noEmit` (no type-check script).

## Structure

- `@/*` maps to the repo root.
- `app/`: routes, organized in route groups.
- Route-only components live in `app/<route>/_components/` (private folder). Used by 2+ routes → move to `shared/components/`. No barrel files.
- `shared/`: cross-cutting primitives only (`components/ui` = shadcn, `lib/supabase`, `hooks`, `sections`).
- `config/`: static configuration.
- Server Components by default; `'use client'` only when needed.
- UI copy in Spanish.

## Data fetching

- Fetch in Server Components; SWR only for interactive client data.
- Wrap Supabase queries in `React.cache()` with primitive args (not inline objects).
- No waterfalls: `Promise.all()` within a component (include `params`/`searchParams`); across components use sibling async components. Sequential `await` only for real dependencies.
- `Promise.allSettled()` for optional data.
- `<Suspense>` + skeleton for slow data, not for SEO-critical or above-the-fold content.
- Cross-request cache: `unstable_cache` with tags + `createPublicServerSupabaseClient()` (no cookies inside cache), wrapped in `React.cache()`. Reuse each service's existing TTL.
- Services return `{ ok, data } | { ok, error }`.
- Select only needed columns (never `*`); pass minimal props to Client Components.
- Keep RLS on; never expose the service role key to the client.

## Bundle

- New code: import by file path (`@/shared/hooks/use-example`), not barrels. Don't refactor existing barrel imports unless asked.
- Heavy client libs (e.g. MiniSearch): load on interaction via dynamic `import()` inside the client component.

## Styling & theming

- Theme everything from `globals.css` via shadcn CSS variables (colors, `--radius`, fonts); change the look there, not in components.
- Use semantic classes (`bg-primary`, `text-foreground`, `border-border`, `rounded-lg`); never hardcode colors (`bg-blue-500`, `#fff`) or one-off radii/shadows.
- If a new color is needed, add a token in `globals.css` and use it.
- Don't restyle `components/ui/*` for theming; override with variants or `className` only for a real layout need.
