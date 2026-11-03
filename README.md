<div align="center">

# Gasolinazo ⛽

### Compare fuel prices near you.

A web app that helps drivers in Mexico find nearby gas stations, compare available prices, and decide where to fill up.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)

</div>

## Overview

Fuel prices can vary from one station to another, even within the same neighborhood. I built Gasolinazo to make it easier to compare nearby options without checking each station individually.

Choose a fuel type, set a search radius, and share your location to explore nearby stations on a map and in a list.

## Features

- **Location-based search** — Find stations within 2.5, 5, 10, or 15 km.
- **Fuel filters** — Compare Regular, Premium, or Diesel prices.
- **Map and list views** — Explore nearby stations and compare available prices.
- **Saved preferences** — Keep your selected fuel type and search radius between visits.
- **Manual refresh** — Fetch updated results whenever you need them.

## Screenshots

| Fuel selection | Station map | Price comparison |
| :------------: | :---------: | :--------------: |
|  Coming soon   | Coming soon |   Coming soon    |

## Architecture

The frontend is built with **React, TypeScript, and Vite**. It uses **React Leaflet** for the map, **TanStack Query** for server-state management, and **Zustand** for filters and local preferences.

A separate **Express and MongoDB** API processes station and fuel-price data from external publications. It stores timestamped snapshots and provides endpoints for nearby prices, station details, and price history.

```text
Station and fuel-price publications
                 |
                 v
            Data scraper
                 |
                 v
              MongoDB
                 |
                 v
             Express API
                 |
                 v
            Gasolinazo Web
```

Prices reflect the data available from the latest matching extraction, not guaranteed real-time prices at the pump.

## Tech stack

| Area             | Technologies              |
| ---------------- | ------------------------- |
| Frontend         | React, TypeScript, Vite   |
| Maps             | Leaflet, React Leaflet    |
| Data fetching    | TanStack Query            |
| State management | Zustand                   |
| Icons            | Lucide React              |
| Backend          | Node.js, Express, MongoDB |

## Development

I organize work into small, reviewable changes, with acceptance criteria and verification before implementation. Project conventions and ongoing decisions are documented in [AGENTS.md](./AGENTS.md) and [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

Gasolinazo is under active development. The API source code is maintained in a private repository.

---

Built by **[Erick Beltran](https://github.com/edcastsh)** · [Portfolio](https://edcastsh.vercel.app) · [LinkedIn](https://www.linkedin.com/in/erickedelbeltran)
