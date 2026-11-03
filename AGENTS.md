# Gasolinazo Web — Agent instructions

This is a React + TypeScript + Vite web app for comparing nearby fuel-station prices in Mexico. Keep changes small, testable, and aligned with the actual frontend/API contract.

## Development method: backlog → story → pair

Use the XP-inspired workflow adopted in Pastry POS. **These stages are opt-in:** invoke them only when the user asks; do not create stories or start implementation automatically.

### 1. Backlog (discovery)

- Clarify the user problem and intended outcome. Ask one missing question at a time; suggest a reasonable answer.
- Propose no more than 10–15 concise **vertical user stories** focused on observable value. Avoid technical-only stories, estimates, speculative requirements and premature acceptance criteria.
- Make the first story the smallest end-to-end walking skeleton.
- Only add stories to the Kanban in `PROJECT_CONTEXT.md` when requested.

### 2. Story (specification / SDD)

- Refine **one** story at a time with 2–3 Given/When/Then acceptance criteria, a plan of at most five steps, explicit out-of-scope items, and known dependencies.
- Confirm the API behavior from actual code, a contract, or user-provided evidence. Never invent endpoints, response shapes or backend guarantees.
- Highlight open product and UX decisions. **Do not implement yet.** Wait for explicit approval of the story and plan.

### 3. Pair (implementation / ODD: observable outcomes)

- Read the approved story, `PROJECT_CONTEXT.md`, and relevant code first.
- Propose tests by name and location, preferring user-visible behavior and the highest practical testing level. Mark browser/manual checks explicitly. Wait for approval.
- Implement in small red → green cycles: write a failing test (when test tooling exists), run it, make the smallest change, then rerun and show the result.
- The current repository does **not** declare a test runner; do not pretend tests ran. Propose the minimal test setup and get approval before adding dependencies.
- Never change, skip, or delete a test merely to make it pass. Never claim verification without evidence.

**Stop and ask** if requirements change, a new architectural decision is needed, the change affects an undocumented API contract, a dependency is missing, two attempts fail, or a step grows beyond ~50 lines / 3 files. Suggest splitting the work.

## Repository conventions

- Use `pnpm` consistently; confirm the existing lockfile before changing package-management configuration.
- Commands: `pnpm dev`, `pnpm lint`, `pnpm build`. The build runs TypeScript project checks and Vite.
- React components in `src/components/`; API calls in `src/api/`; query hooks in `src/hooks/`; shared filters in `src/stores/`; API types in `src/types/`.
- Use TanStack Query for server data and Zustand for local UI/filter state. Do not introduce a second state-management approach without justification.
- Prefer `async/await`, straightforward components and clear types. Avoid unnecessary abstractions, broad refactors and premature memoization.
- Preserve mobile-first usability, location-permission fallbacks, loading/error/empty states, keyboard accessibility and map/list consistency.
- Don't change component contracts, shared state shapes, or folder structure without warning the user and obtaining approval.

## API and data boundaries

- The frontend currently uses `VITE_API_URL` (default `http://localhost:3001`) in `src/api/client.ts`.
- Inspect `src/api/endpoints.ts` and `src/types/api.ts` before changing data access. Current endpoints include `/precios`, `/gasolineras`, `/gasolineras/:placeId`, and `/gasolineras/:placeId/historial`.
- The backend is a separate project. **Do not assume access to its code or modify its API, database, infrastructure, or deployment from this repository.**
- Before a contract change, explain its purpose, downstream impact, compatibility and rollback; request explicit approval. Prefer backward-compatible changes.
- Never commit API credentials, tokens, personal location data or private infrastructure details. `VITE_*` values are embedded in client builds and must not contain secrets.
- Fuel-price data may be delayed; avoid presenting it as guaranteed real-time pricing unless the API provides verified freshness information.

## Session context and delivery

- Read `PROJECT_CONTEXT.md` at the start. Update its state, Kanban, decisions, blockers and next-session notes after an approved activity.
- At the end of implementation, run `pnpm lint` and `pnpm build`, plus any applicable tests. Report commands, results, manual checks and remaining risks.
- Do not commit, push, create PRs, deploy, or change external services unless explicitly requested.
- After a PR is merged, update local `main` before branching again; avoid continuing on a merged feature branch.
- Separate refactoring from new behavior and keep existing functionality stable.
