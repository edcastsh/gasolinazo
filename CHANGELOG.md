# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.6.0](https://github.com/edcastsh/gasolinazo/compare/gasolinazo-web-v0.5.3...gasolinazo-web-v0.6.0) (2026-11-03)


### Features

* add HeroUI selection controls ([207038e](https://github.com/edcastsh/gasolinazo/commit/207038e660c3d5b7bc8f3ff5a8b466b3314c64eb))
* add HeroUI selection controls ([96ca273](https://github.com/edcastsh/gasolinazo/commit/96ca273e803d360ec652f1e62c9e03fd6e3b093e))
* add Leaflet CSS, viewport meta, and vite dev server config ([d6efe9b](https://github.com/edcastsh/gasolinazo/commit/d6efe9b20375daaec0af3f4c754b70089f7b9061))
* **app:** wire up selection and dashboard flow with QueryClientProvider ([cd325ea](https://github.com/edcastsh/gasolinazo/commit/cd325ea32f6dc67fff2daff58bfe71bf02ba4f53))
* **card:** open Google Maps or Apple Maps directions on station tap ([60d37e6](https://github.com/edcastsh/gasolinazo/commit/60d37e62d5edd60ed2e1a051924869eaa80f1f9d))
* **hooks:** add useGeolocation and usePrecios hooks ([4a7d0db](https://github.com/edcastsh/gasolinazo/commit/4a7d0db960a9f7eca9ea41f8ca03bee14e988371))
* **store:** add localStorage persistence for fuel type and radius preferences ([8114f77](https://github.com/edcastsh/gasolinazo/commit/8114f7755b078782a3896499631d40ecfb74f990))
* **store:** add Zustand filters store with fuel type, radius, and coordinates ([499ad87](https://github.com/edcastsh/gasolinazo/commit/499ad87983a2aacb720d2f0770900958d9bc7443))
* **types:** add API types, client, and endpoints ([73de2a0](https://github.com/edcastsh/gasolinazo/commit/73de2a06287e012a9e499fd9a4e319c6c805bdfb))
* **ui:** add FilterModal bottom sheet for changing fuel type and radius ([1276393](https://github.com/edcastsh/gasolinazo/commit/12763936651400137e42b062fbf13d5fac9e2c67))
* **ui:** add FuelTypeSelector and RadiusSelector components ([2dc269a](https://github.com/edcastsh/gasolinazo/commit/2dc269aec25fe329a51da9b20914bde6b7aa33ea))
* **ui:** add Header and Dashboard layout components ([bdc214f](https://github.com/edcastsh/gasolinazo/commit/bdc214f533695abab7013dad19520ff23c87b23d))
* **ui:** add SelectionScreen component for fuel type and radius selection ([827c390](https://github.com/edcastsh/gasolinazo/commit/827c390c10ff3687a4b83ad080f4becbcdab281b))
* **ui:** add StationMap, StationCard, and StationList bottom sheet ([111de1c](https://github.com/edcastsh/gasolinazo/commit/111de1c7bb1487aafa92577b316b83b5c480b729))
* **ui:** add VirtualList component for scroll-based virtualization ([048f417](https://github.com/edcastsh/gasolinazo/commit/048f417314b05fc3e2d5a2d07f59f6666450ca3c))
* **ui:** limit max search radius to 15km ([2592349](https://github.com/edcastsh/gasolinazo/commit/25923496671287915f05f1ce5db35af475e5cdf9))


### Bug Fixes

* **app:** take returning users straight to the map ([85dc634](https://github.com/edcastsh/gasolinazo/commit/85dc634c62059d6f8bea6017dad86688d5512644))
* **app:** take returning users straight to the map ([e68e567](https://github.com/edcastsh/gasolinazo/commit/e68e5671a4b029f05f8aff2479aea063001b820f))
* **list:** filter out stations without price for selected fuel type ([2f6501f](https://github.com/edcastsh/gasolinazo/commit/2f6501fc6b42b7d5041c3607e063e29c86d59aab))
* **list:** virtualize station list with @tanstack/react-virtual and sync with map viewport ([cee56e2](https://github.com/edcastsh/gasolinazo/commit/cee56e229f46e1808e47052cc131cb7ef62c69ea))
* **list:** virtualize station list with @tanstack/react-virtual and sync with map viewport ([3da1f85](https://github.com/edcastsh/gasolinazo/commit/3da1f85abb9b542dabae2c281134cba9373f6918))
* **map:** fit viewport to search radius and move zoom controls below header ([fab5bab](https://github.com/edcastsh/gasolinazo/commit/fab5babe168cc460eed7a1e5c3b4e8a7b7c7ac2d))
* **map:** fit viewport to search radius and move zoom controls below header ([b058b04](https://github.com/edcastsh/gasolinazo/commit/b058b047f1985b0da14037de0bb70e951d32284e))
* **map:** raise zoom control z-index above header ([6c26438](https://github.com/edcastsh/gasolinazo/commit/6c26438752d4c02ac014a4d4b62f8010c24b9795))
* **onboarding:** auto-request location when both fuel and radius are selected ([0d838ce](https://github.com/edcastsh/gasolinazo/commit/0d838cececb2ec0583c6154a048ce7f2c9b557b5))
* **onboarding:** only request location after user explicitly selects radius ([6f1eee5](https://github.com/edcastsh/gasolinazo/commit/6f1eee572bf1e8bcef74bf395abb5af98936cf75))
* **onboarding:** separate location-requested ref from dashboard-ready effect so auto-advance works ([80aca7c](https://github.com/edcastsh/gasolinazo/commit/80aca7cc6efebe1c2e22a22fbd355c91d535a3d4))


### Documentation

* add living project board and engineering decisions ([8444678](https://github.com/edcastsh/gasolinazo/commit/8444678e5c789245119db13dfeac9e2ba340e71c))
* adopt gated backlog story pair engineering workflow ([62342d0](https://github.com/edcastsh/gasolinazo/commit/62342d05e971fa42bf1ea54374674e21e5ab1c48))
* align agent API guardrails with inspected backend ([06e5eb5](https://github.com/edcastsh/gasolinazo/commit/06e5eb5ad4ae15e6bd52326159bf57bff9953d48))
* align Gasolinazo context with private API contract ([c2af221](https://github.com/edcastsh/gasolinazo/commit/c2af2210b7c585f70a40b21f88c0dfd754ebdf7b))
* polish Gasolinazo Web project README ([f85dafe](https://github.com/edcastsh/gasolinazo/commit/f85dafe92800fd4b6565371b849bf5cf207f8410))
* remove local setup and checks from README ([4a6d5f2](https://github.com/edcastsh/gasolinazo/commit/4a6d5f265bf78b0b10507cb02174a2d38742689f))
* replace default template README with project overview ([72ca267](https://github.com/edcastsh/gasolinazo/commit/72ca267f76ad9ea0cb6703cd177b6012bd107b2f))
* translate Gasolinazo Web README to English ([84f8c24](https://github.com/edcastsh/gasolinazo/commit/84f8c2444b62cae37d8e51e3fe40eb9abc994f96))
* update Gasolinazo README to match frontend behavior ([c30965d](https://github.com/edcastsh/gasolinazo/commit/c30965d825a8d50b965c40989ca4edb562636739))


### Miscellaneous

* add release automation ([4a6745e](https://github.com/edcastsh/gasolinazo/commit/4a6745ee9994fb8290ff07877641fa02e286f100))
* add release automation ([25482f9](https://github.com/edcastsh/gasolinazo/commit/25482f9ed78d28fb122a31918cc74c3cd40efa98))
* **deps:** add react-leaflet, leaflet, and @types/leaflet ([50e75ca](https://github.com/edcastsh/gasolinazo/commit/50e75ca5c943f7f9564c4a66786a90a739a0477b))
* **release:** 0.0.0 ([928cc6c](https://github.com/edcastsh/gasolinazo/commit/928cc6c04304b5aa3d79fff5662846e1736c899a))
* **release:** 0.0.1 ([ad9a15d](https://github.com/edcastsh/gasolinazo/commit/ad9a15da686fc1e4ba087d47a2e89da74d4cd2eb))
* **release:** 0.5.0 ([3d8f14d](https://github.com/edcastsh/gasolinazo/commit/3d8f14d2df336c8b55ee089037233e9f3280d076))
* **release:** 0.5.1 ([a749e63](https://github.com/edcastsh/gasolinazo/commit/a749e632b0bd0b63985dbec59c86f90a96c04a3a))
* **release:** 0.5.2 ([eb5be2c](https://github.com/edcastsh/gasolinazo/commit/eb5be2cfe06a33029c019d69526f52c18b0bb4f8))
* **release:** 0.5.3 ([1541368](https://github.com/edcastsh/gasolinazo/commit/15413681150d634b00f83aadc331bb474b02dfe3))
* **release:** set up conventional commits and automated versioning ([d081de7](https://github.com/edcastsh/gasolinazo/commit/d081de7c27fd8994d27e47ff0b6523fb7c8bbac9))
* replace Vite favicon with Lucide fuel icon ([e2c1d01](https://github.com/edcastsh/gasolinazo/commit/e2c1d014021df90a4f18600cf780c654af0185cc))


### Performance Improvements

* **list:** add content-visibility auto for off-screen card virtualization ([7c60952](https://github.com/edcastsh/gasolinazo/commit/7c609521b61c8eae2c302199dbfb7ebeb2789acd))
* **map:** only render markers visible within the map viewport ([8e4ed76](https://github.com/edcastsh/gasolinazo/commit/8e4ed767a0a8c01ac5f14f90cd543cffe60f1193))
* use VirtualList for stations, memoize sorted array and price icons ([c3fb4ae](https://github.com/edcastsh/gasolinazo/commit/c3fb4ae8414a6904519fdbad6ee99b9f94d66e42))

## [0.5.3](https://github.com/edcastsh/gasolinazo-web/compare/v0.5.2...v0.5.3) (2026-07-18)


### Bug Fixes

* **app:** take returning users straight to the map ([e68e567](https://github.com/edcastsh/gasolinazo-web/commit/e68e5671a4b029f05f8aff2479aea063001b820f))

## [0.5.2](https://github.com/edcastsh/gasolinazo-web/compare/v0.5.1...v0.5.2) (2026-07-18)


### Bug Fixes

* **map:** fit viewport to search radius and move zoom controls below header ([b058b04](https://github.com/edcastsh/gasolinazo-web/commit/b058b047f1985b0da14037de0bb70e951d32284e))

## [0.5.1](https://github.com/edcastsh/gasolinazo-web/compare/v0.5.0...v0.5.1) (2026-07-18)


### Features

* **card:** open Google Maps or Apple Maps directions on station tap ([60d37e6](https://github.com/edcastsh/gasolinazo-web/commit/60d37e62d5edd60ed2e1a051924869eaa80f1f9d))
* **store:** add localStorage persistence for fuel type and radius preferences ([8114f77](https://github.com/edcastsh/gasolinazo-web/commit/8114f7755b078782a3896499631d40ecfb74f990))
* **ui:** add FilterModal bottom sheet for changing fuel type and radius ([1276393](https://github.com/edcastsh/gasolinazo-web/commit/12763936651400137e42b062fbf13d5fac9e2c67))
* **ui:** add VirtualList component for scroll-based virtualization ([048f417](https://github.com/edcastsh/gasolinazo-web/commit/048f417314b05fc3e2d5a2d07f59f6666450ca3c))
* **ui:** limit max search radius to 15km ([2592349](https://github.com/edcastsh/gasolinazo-web/commit/25923496671287915f05f1ce5db35af475e5cdf9))


### Bug Fixes

* **list:** filter out stations without price for selected fuel type ([2f6501f](https://github.com/edcastsh/gasolinazo-web/commit/2f6501fc6b42b7d5041c3607e063e29c86d59aab))
* **list:** virtualize station list with @tanstack/react-virtual and sync with map viewport ([3da1f85](https://github.com/edcastsh/gasolinazo-web/commit/3da1f85abb9b542dabae2c281134cba9373f6918))
* **map:** raise zoom control z-index above header ([6c26438](https://github.com/edcastsh/gasolinazo-web/commit/6c26438752d4c02ac014a4d4b62f8010c24b9795))
* **onboarding:** auto-request location when both fuel and radius are selected ([0d838ce](https://github.com/edcastsh/gasolinazo-web/commit/0d838cececb2ec0583c6154a048ce7f2c9b557b5))
* **onboarding:** only request location after user explicitly selects radius ([6f1eee5](https://github.com/edcastsh/gasolinazo-web/commit/6f1eee572bf1e8bcef74bf395abb5af98936cf75))
* **onboarding:** separate location-requested ref from dashboard-ready effect so auto-advance works ([80aca7c](https://github.com/edcastsh/gasolinazo-web/commit/80aca7cc6efebe1c2e22a22fbd355c91d535a3d4))

## [0.5.0](https://github.com/edcastsh/gasolinazo-web/compare/v0.0.1...v0.5.0) (2026-07-17)


### Features

* add Leaflet CSS, viewport meta, and vite dev server config ([d6efe9b](https://github.com/edcastsh/gasolinazo-web/commit/d6efe9b20375daaec0af3f4c754b70089f7b9061))
* **app:** wire up selection and dashboard flow with QueryClientProvider ([cd325ea](https://github.com/edcastsh/gasolinazo-web/commit/cd325ea32f6dc67fff2daff58bfe71bf02ba4f53))
* **hooks:** add useGeolocation and usePrecios hooks ([4a7d0db](https://github.com/edcastsh/gasolinazo-web/commit/4a7d0db960a9f7eca9ea41f8ca03bee14e988371))
* **store:** add Zustand filters store with fuel type, radius, and coordinates ([499ad87](https://github.com/edcastsh/gasolinazo-web/commit/499ad87983a2aacb720d2f0770900958d9bc7443))
* **types:** add API types, client, and endpoints ([73de2a0](https://github.com/edcastsh/gasolinazo-web/commit/73de2a06287e012a9e499fd9a4e319c6c805bdfb))
* **ui:** add FuelTypeSelector and RadiusSelector components ([2dc269a](https://github.com/edcastsh/gasolinazo-web/commit/2dc269aec25fe329a51da9b20914bde6b7aa33ea))
* **ui:** add Header and Dashboard layout components ([bdc214f](https://github.com/edcastsh/gasolinazo-web/commit/bdc214f533695abab7013dad19520ff23c87b23d))
* **ui:** add SelectionScreen component for fuel type and radius selection ([827c390](https://github.com/edcastsh/gasolinazo-web/commit/827c390c10ff3687a4b83ad080f4becbcdab281b))
* **ui:** add StationMap, StationCard, and StationList bottom sheet ([111de1c](https://github.com/edcastsh/gasolinazo-web/commit/111de1c7bb1487aafa92577b316b83b5c480b729))

## [0.0.1](https://github.com/edcastsh/gasolinazo-web/compare/v0.0.0...v0.0.1) (2026-07-04)

## 0.0.0 (2026-07-04)

## 0.0.0 (2026-07-04)
