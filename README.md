# Gasolinazo ⛽

Encuentra gasolineras cerca de ti y compara sus precios sin tener que buscarlas una por una.

Gasolinazo es una aplicación web pensada para conductores en México. Eliges el combustible que necesitas, defines qué tan lejos quieres buscar y ves las estaciones cercanas en un mapa y una lista.

## Cómo funciona

1. Selecciona **Regular, Premium o Diésel**.
2. Elige un radio de **2.5, 5, 10 o 15 km**.
3. Permite el acceso a tu ubicación para consultar las estaciones de la zona.
4. Explora el mapa y compara precios en la lista.

La aplicación recuerda tus filtros para que no tengas que configurarlos cada vez.

## Tecnologías

- **React + TypeScript + Vite** — interfaz y desarrollo
- **React Leaflet + Leaflet** — mapa de estaciones
- **TanStack Query** — consultas y caché de datos
- **Zustand** — filtros y estado de la aplicación
- **Lucide React** — iconografía

## Ejecutar localmente

Necesitas Node.js y pnpm, además de una instancia de la API de Gasolinazo.

```bash
pnpm install
pnpm dev
```

Por defecto, el frontend consulta `http://localhost:3001`. Si tu API está en otra dirección, crea un archivo `.env.local`:

```env
VITE_API_URL=http://localhost:3001
```

La integración de precios utiliza `GET /precios` con filtros como `tipo`, `lat`, `lng` y `radius`. La API también expone rutas de gasolineras e historial que el cliente tiene preparadas.

## Calidad y desarrollo

```bash
pnpm lint
pnpm build
```

Trabajo con cambios pequeños y verificables, historias de usuario y criterios de aceptación antes de implementar. Las reglas de colaboración y el contexto actual del proyecto están en [AGENTS.md](./AGENTS.md) y [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

## Estado

Proyecto en desarrollo. Los precios mostrados dependen de la información disponible a través de la API y pueden diferir del precio en estación.

---

Desarrollado por [Erick Beltran](https://github.com/edcastsh).
