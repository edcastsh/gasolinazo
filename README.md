<div align="center">

# Gasolinazo ⛽

### Compara precios de gasolina cerca de ti.

Una aplicación web para encontrar gasolineras cercanas, consultar sus precios y decidir dónde cargar combustible.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)

</div>

## El proyecto

En México, el precio de la gasolina puede cambiar de una estación a otra, incluso dentro de la misma zona. Gasolinazo busca hacer más sencilla esa comparación desde el celular, sin tener que revisar varias estaciones por separado.

El usuario selecciona el tipo de combustible, define un radio de búsqueda y comparte su ubicación para consultar las estaciones disponibles en un mapa y una lista.

## Funcionalidades

- **Búsqueda por ubicación.** Consulta gasolineras dentro de un radio de 2.5, 5, 10 o 15 km.
- **Filtros por combustible.** Regular, Premium y Diésel.
- **Mapa y listado.** Dos formas de explorar las estaciones cercanas y comparar precios.
- **Preferencias guardadas.** Conserva el combustible y radio seleccionados entre visitas.
- **Actualización de resultados.** Permite volver a consultar los precios disponibles.

## Vista previa

| Selección de combustible | Mapa de estaciones | Comparación de precios |
|:---:|:---:|:---:|
| Captura pendiente | Captura pendiente | Captura pendiente |

## Arquitectura

El frontend está desarrollado con **React, TypeScript y Vite**. Utiliza **React Leaflet** para el mapa, **TanStack Query** para las consultas a la API y **Zustand** para los filtros y preferencias del usuario.

La aplicación consume una API independiente construida con **Express y MongoDB**. Esa API obtiene información de estaciones y precios a partir de publicaciones externas, conserva registros de extracción y permite consultar precios por ubicación, combustible e historial por estación.

```text
Publicaciones de estaciones y precios
                  │
                  ▼
         Scraper de datos
                  │
                  ▼
               MongoDB
                  │
                  ▼
             Express API
                  │
                  ▼
          Gasolinazo Web
```

Los precios corresponden a los datos disponibles en la última extracción consultada; no deben interpretarse como cotizaciones en tiempo real.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Interfaz | React, TypeScript, Vite |
| Mapas | Leaflet, React Leaflet |
| Consultas | TanStack Query |
| Estado | Zustand |
| Iconos | Lucide React |
| Backend | Node.js, Express, MongoDB |

## Desarrollo local

**Requisitos:** Node.js, pnpm y una instancia de la API de Gasolinazo.

1. Instala las dependencias:

   ```bash
   pnpm install
   ```

2. Configura la URL de la API en `.env.local`:

   ```env
   VITE_API_URL=http://localhost:3001
   ```

   Si no defines esta variable, el frontend utiliza `http://localhost:3001` por defecto.

3. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

### Verificaciones

```bash
pnpm lint
pnpm build
```

## Desarrollo del proyecto

Organizo el trabajo en historias pequeñas, con criterios de aceptación y verificaciones antes de incorporar cambios. El flujo de trabajo y las decisiones técnicas están documentados en [AGENTS.md](./AGENTS.md) y [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

Gasolinazo sigue en desarrollo. El código de la API se mantiene en un repositorio privado.

---

Desarrollado por **[Erick Beltran](https://github.com/edcastsh)** · [Portafolio](https://edcastsh.vercel.app) · [LinkedIn](https://www.linkedin.com/in/erickedelbeltran)
