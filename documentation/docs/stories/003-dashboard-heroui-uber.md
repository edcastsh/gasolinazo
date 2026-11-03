# 003 - Dashboard HeroUI Uber

- **Estado:** En progreso
- **Fecha:** 2026-11-03
- **Tarea:** 3

## Story

Como conductor, quiero ver mapa y lista con estilo Uber HeroUI claro consistente, para comparar estaciones sin cambios visuales bruscos.

## Acceptance criteria

- [ ] Dado dashboard abierto, cuando veo cabecera, panel lista y controles, entonces usan lenguaje visual Uber HeroUI claro y permanecen accesibles con teclado.
- [ ] Dadas estaciones con precio disponible, cuando veo lista, entonces cada tarjeta muestra rango, nombre, distancia, precio tipo elegido y estado Más barata con jerarquía visual Uber; tocar tarjeta conserva ruta actual.
- [ ] Dado mapa visible, cuando veo marcadores y popup estación, entonces precio y superficies siguen mismos tokens Uber; tipo elegido y estaciones visibles permanecen consistentes con lista.

## Plan

- Aplicar componentes/tokens HeroUI Uber a cabecera y panel lista.
- Migrar tarjeta estación y acciones a controles HeroUI accesibles.
- Alinear marcador y popup Leaflet con tema actual.
- Conservar selección, orden, viewport, virtualización y navegación.
- Probar tarjeta/ruta y revisar móvil, teclado, mapa manualmente.

## Out of scope

- Cambios API, filtros nuevos, ruta nueva.
- Migrar Leaflet o cambiar proveedor mapas.
- Tema oscuro.
- Animaciones nuevas.

## Suggestions (your call)

- Mantener CSS módulo para layout/mapa Leaflet; usar HeroUI para superficies y controles React.
