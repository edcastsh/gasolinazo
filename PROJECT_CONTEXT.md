# Gasolinazo Web — Project Context

Living project notes. Update after approved work so the next session starts with accurate context.

## Current state

- React 19 + TypeScript + Vite 8 frontend for nearby fuel-price comparison in Mexico.
- Selection flow: fuel type (regular, premium, diesel), search radius (2.5, 5, 10, 15 km), location permission, dashboard.
- Dashboard uses a station map and list, filters and refresh actions.
- `src/stores/useFilters.ts` persists selected filters and last known coordinates in localStorage.
- `src/hooks/usePrecios.ts` uses TanStack Query to request nearby station prices.
- API client defaults to `http://localhost:3001`, overridable with `VITE_API_URL`.
- Quality scripts: `pnpm test`, `pnpm lint`, `pnpm build`, `pnpm format` and `pnpm format:check`.
- Backend source reviewed in private `edcastsh/gasolinazo-api`: Express 5 + TypeScript + MongoDB 7. A separate scraper downloads XML station and fuel-price publications, combines them by `place_id`, and inserts timestamped station snapshots into MongoDB.
- API mounts `/health`, `/gasolineras`, and `/precios`. `/precios` accepts optional `tipo`, `desde`, `hasta`, `lng`, `lat`, `radius` filters; returns the latest matching extraction per station, up to 500 records, including `placeId`, `name`, `coordinates`, `prices`, `extractedAt`. `/gasolineras/:place_id` returns snapshots and `/gasolineras/:place_id/historial` returns price history.
- API `extractedAt` records extraction time, **not necessarily the price publication/update time**. Do not promise real-time accuracy. Backend availability, production deployment, and source refresh schedule have not been verified.

## Product outcomes

1. Help drivers compare nearby fuel-station prices for their selected fuel type.
2. Make the search fast and usable on mobile.
3. Keep location access understandable and recoverable when permission is denied.
4. Display available price data without implying unsupported real-time guarantees.

## Backlog context

- Conductores comparan precios de gasolina. La migración HeroUI inicia en selección y dashboard.
- Stack: React 19, TypeScript, Vite, HeroUI v3, Tailwind CSS v4, Leaflet, TanStack Query y Zustand.
- Decisiones costosas: ninguna.

## Kanban

### Backlog

- [Borrador #4] Como conductor, quiero filtrar resultados desde dashboard, para enfocar gasolineras relevantes. Requiere: #3
- [Borrador #5] Como conductor, quiero abrir ruta hacia la gasolinera elegida, para llegar fácilmente. Requiere: #3

### Ready

_None._

### In progress

- [#1 Selección HeroUI Uber](documentation/docs/stories/001-seleccion-heroui-uber.md): automated checks pass; mobile, keyboard and screen-reader checks remain.
- [#3 Dashboard HeroUI Uber](documentation/docs/stories/003-dashboard-heroui-uber.md): automated checks pass; responsive, keyboard and map checks remain. Requiere: #2

### Done

- Existing fuel-selection, location, map and list flows (baseline observed in source; not newly implemented by this documentation change).
- README and engineering workflow documented.
- [#2 Alerta de error dashboard](documentation/docs/stories/002-alerta-error-dashboard.md): complete and manually approved.

## Decisions

- Use the gated `backlog → story → pair` workflow in `AGENTS.md`; invoke only on request.
- Specify acceptance criteria before implementation; verify observable behavior.
- Preserve the current React/TypeScript/Vite, TanStack Query and Zustand stack.
- Treat backend changes as a separate, approval-gated concern.
- Use Vitest and Testing Library for selection-flow behavior tests.
- Use HeroUI v3 with Tailwind CSS v4 for new UI, beginning with selection and dashboard.
- Use HeroUI Uber light design theme for the selection story; dark mode is out of scope.
- Use Husky with commitlint, lint-staged and branch-name validation; use Release Please for versioning and changelogs on `main`; CI enforces tests, lint, format and build.
- Every approved story must have its specification created in `documentation/docs/stories/` before it moves to Ready or enters `/pair`.

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
2. Verify story #3 on mobile, tablet and desktop; check keyboard, station route and map popup.
3. Validate the API contract against inspected backend routes before refining stories that change data access.

## Session log

- 2026-11-03: Initialized development context and aligned documentation with the current frontend source. No application code or API behavior changed.
- 2026-11-03: Reviewed the private Gasolinazo API routes, scraper and MongoDB persistence. Documented the confirmed contract and data freshness caveats; no application code changed.
- 2026-11-03: Replaced CARTO tile endpoint, which returned an API-key-required image, with OpenStreetMap tiles and required attribution. `pnpm build` passes; existing lint warning in `StationList.tsx` remains unrelated.
- 2026-11-03: Approved story #1 to migrate fuel and radius selection to HeroUI v3 using its Uber light design theme. Pending approval of `/pair` test list; no application code changed.
- 2026-11-03: Added Vitest/Testing Library, HeroUI v3 and Tailwind CSS v4. Applied the Uber light theme and migrated fuel/radius choices to accessible HeroUI radio groups. Automated tests and production build pass; manual mobile, keyboard and screen-reader verification remains.
- 2026-11-03: Added Husky pre-commit, commit-msg and pre-push hooks; added Release Please and pull-request CI workflows. Formatted the codebase; CI runs tests, lint, formatting and build with pnpm.
- 2026-11-03: Restored the HeroUI dashboard migration backlog: search states, consistent map/list, dashboard filters and station routing. These stories require refinement and approval before implementation.
- 2026-11-03: Refined backlog story #2: dashboard error alert uses HeroUI `Alert`, a retry action, compositor-friendly entrance motion and reduced-motion fallback. Still pending approval for `/pair`.
- 2026-11-03: Approved story #2 and saved its specification. Moved it to Ready; pair test list remains pending approval.
- 2026-11-03: Added dashboard HeroUI error alert, retry action and compositor-friendly entrance motion. Automated checks pass; visual and reduced-motion validation remains.
- 2026-11-03: Approved story #3 to migrate dashboard map/list visuals to HeroUI Uber. Saved specification; pair waits for story #2 validation.
- 2026-11-03: Added permanent workflow rule: approved stories require a specification in `documentation/docs/stories/` before Ready or `/pair`.
- 2026-11-03: Story #2 manual checks approved; moved to Done. Story #3 pair is unblocked.
- 2026-11-03: Migrated dashboard controls and station cards to HeroUI, added responsive list-panel layouts and aligned map popups with Uber tokens. Automated checks pass; manual responsive validation remains.
