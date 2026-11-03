# Gasolinazo Web — Project Context

Living project notes. Update after approved work so the next session starts with accurate context.

## Current state

- React 19 + TypeScript + Vite 8 frontend for nearby fuel-price comparison in Mexico.
- Selection flow: fuel type (regular, premium, diesel), search radius (2.5, 5, 10, 15 km), location permission, dashboard.
- Dashboard uses a station map and list, filters and refresh actions.
- `src/stores/useFilters.ts` persists selected filters and last known coordinates in localStorage.
- `src/hooks/usePrecios.ts` uses TanStack Query to request nearby station prices.
- API client defaults to `http://localhost:3001`, overridable with `VITE_API_URL`.
- Existing quality scripts: `pnpm lint` and `pnpm build`; no test runner declared in `package.json`.
- Backend code and production data behavior have not been verified in this frontend-only review.

## Product outcomes

1. Help drivers compare nearby fuel-station prices for their selected fuel type.
2. Make the search fast and usable on mobile.
3. Keep location access understandable and recoverable when permission is denied.
4. Display available price data without implying unsupported real-time guarantees.

## Kanban

### Backlog

_No user-approved stories recorded yet._

### Ready

_None._

### In progress

_None._

### Done

- Existing fuel-selection, location, map and list flows (baseline observed in source; not newly implemented by this documentation change).
- README and engineering workflow documented.

## Decisions

- Use the gated `backlog → story → pair` workflow in `AGENTS.md`; invoke only on request.
- Specify acceptance criteria before implementation; verify observable behavior.
- Preserve the current React/TypeScript/Vite, TanStack Query and Zustand stack.
- Treat backend changes as a separate, approval-gated concern.
- Avoid introducing a test framework without an explicit decision.

## Known risks / questions

- The frontend README previously described a 20 km search, but `RadiusSelector` and `RadiusValue` currently support a maximum of 15 km. README now reflects code.
- Confirm actual API data sources, price freshness, error shapes and deployment details with the backend repository before documenting them as facts.
- Review whether storing last known coordinates in localStorage matches the desired privacy behavior.
- Add automated behavior tests when the user approves a testing strategy.

## Next session

1. Confirm the backend repository and review the API contract if access is available.
2. Choose the next product outcome and run `backlog` or `story` explicitly.
3. Agree on a minimal frontend test setup before the first TDD implementation.

## Session log

- 2026-11-03: Initialized development context and aligned documentation with the current frontend source. No application code or API behavior changed.
