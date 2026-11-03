# Gasolinazo Web — Project Context

Living project notes. Update after approved work so the next session starts with accurate context.

## Current state

- React 19 + TypeScript + Vite 8 frontend for nearby fuel-price comparison in Mexico.
- Selection flow: fuel type (regular, premium, diesel), search radius (2.5, 5, 10, 15 km), location permission, dashboard.
- Dashboard uses a station map and list, filters and refresh actions.
- `src/stores/useFilters.ts` persists selected filters and last known coordinates in localStorage.
- `src/hooks/usePrecios.ts` uses TanStack Query to request nearby station prices.
- API client defaults to `http://localhost:3001`, overridable with `VITE_API_URL`.
- Quality scripts: `pnpm test`, `pnpm lint` and `pnpm build`.
- Backend source reviewed in private `edcastsh/gasolinazo-api`: Express 5 + TypeScript + MongoDB 7. A separate scraper downloads XML station and fuel-price publications, combines them by `place_id`, and inserts timestamped station snapshots into MongoDB.
- API mounts `/health`, `/gasolineras`, and `/precios`. `/precios` accepts optional `tipo`, `desde`, `hasta`, `lng`, `lat`, `radius` filters; returns the latest matching extraction per station, up to 500 records, including `placeId`, `name`, `coordinates`, `prices`, `extractedAt`. `/gasolineras/:place_id` returns snapshots and `/gasolineras/:place_id/historial` returns price history.
- API `extractedAt` records extraction time, **not necessarily the price publication/update time**. Do not promise real-time accuracy. Backend availability, production deployment, and source refresh schedule have not been verified.

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

- [#1 Selección HeroUI Uber](documentation/docs/stories/001-seleccion-heroui-uber.md): automated checks pass; mobile, keyboard and screen-reader checks remain.

### Done

- Existing fuel-selection, location, map and list flows (baseline observed in source; not newly implemented by this documentation change).
- README and engineering workflow documented.

## Decisions

- Use the gated `backlog → story → pair` workflow in `AGENTS.md`; invoke only on request.
- Specify acceptance criteria before implementation; verify observable behavior.
- Preserve the current React/TypeScript/Vite, TanStack Query and Zustand stack.
- Treat backend changes as a separate, approval-gated concern.
- Use Vitest and Testing Library for selection-flow behavior tests.
- Use HeroUI v3 with Tailwind CSS v4 for new UI, beginning with selection and dashboard.
- Use HeroUI Uber light design theme for the selection story; dark mode is out of scope.

## Approved stories

### #1 HeroUI Uber selection

As a conductor, I want to choose fuel and radius with accessible HeroUI Uber controls, so that I can start a nearby search.

- Given no fuel type is selected, when I select Regular, Premium, or Diesel, then radius selection is shown.
- Given a fuel type is selected, when I select 2.5, 5, 10, or 15 km, then the app requests location and retains filters.
- Given the selection screen, when it loads, then controls and states use HeroUI Uber light theme and work with keyboard and screen readers.

Plan: install HeroUI v3, Tailwind CSS v4, and PostCSS; obtain HeroUI Uber theme tokens; configure global light theme; replace fuel and radius selectors; verify mobile and accessibility. Out of scope: dark mode, dashboard, map, list, API, Zustand, and geolocation behavior.

## Known risks / questions

- The frontend README previously described a 20 km search, but `RadiusSelector` and `RadiusValue` currently support a maximum of 15 km. README now reflects code.
- Confirm actual refresh schedule and price freshness in production; `extractedAt` is not a guarantee of when a station updated its price.
- Check the frontend's station sorting behavior separately; the API `/precios` pipeline returns the latest matching records without a final price sort.
- Backend errors are generally JSON `{ error: string }` with 500 or 404 in the inspected routes; the frontend currently throws a generic `ApiError` for non-2xx responses.
- Review whether storing last known coordinates in localStorage matches the desired privacy behavior.
- Validate HeroUI selection controls manually on mobile and with keyboard navigation before closing story #1.

## Next session

1. Manually verify story #1 on mobile, with keyboard navigation and a screen reader; then move it to Done.
2. Validate the API contract against the inspected backend routes when refining the next story; review the effects of date/geo filters and the 500-record cap.
3. Choose the next product outcome and run `backlog` or `story` explicitly.

## Session log

- 2026-11-03: Initialized development context and aligned documentation with the current frontend source. No application code or API behavior changed.
- 2026-11-03: Reviewed the private Gasolinazo API routes, scraper and MongoDB persistence. Documented the confirmed contract and data freshness caveats; no application code changed.
- 2026-11-03: Replaced CARTO tile endpoint, which returned an API-key-required image, with OpenStreetMap tiles and required attribution. `pnpm build` passes; existing lint warning in `StationList.tsx` remains unrelated.
- 2026-11-03: Approved story #1 to migrate fuel and radius selection to HeroUI v3 using its Uber light design theme. Pending approval of `/pair` test list; no application code changed.
- 2026-11-03: Added Vitest/Testing Library, HeroUI v3 and Tailwind CSS v4. Applied the Uber light theme and migrated fuel/radius choices to accessible HeroUI radio groups. Automated tests and production build pass; manual mobile, keyboard and screen-reader verification remains.
