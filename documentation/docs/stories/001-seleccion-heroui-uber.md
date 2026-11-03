# 001 - Selección HeroUI Uber

- **Estado:** En progreso
- **Fecha:** 2026-11-03
- **Tarea:** 1

## Story

Como conductor, quiero elegir gasolina y radio con controles accesibles estilo HeroUI Uber, para iniciar búsqueda cercana.

## Acceptance criteria

- [ ] Dado inicio sin gasolina, al elegir Regular, Premium o Diésel, se muestra selección radio.
- [ ] Dado tipo gasolina elegido, al elegir radio 2.5, 5, 10 o 15 km, app solicita ubicación y conserva filtros.
- [ ] Dada pantalla selección, al cargar, controles y estados usan tema HeroUI Uber claro y permanecen accesibles con teclado y lector pantalla.

## Plan

- Instalar HeroUI v3, Tailwind CSS v4 y PostCSS.
- Obtener tokens exportados tema Uber desde HeroUI Theme Builder.
- Configurar tema Uber claro global.
- Reemplazar selectores gasolina y radio por controles HeroUI.
- Conservar flujo, persistencia y geolocalización; verificar móvil, teclado y lector pantalla.

## Out of scope

- Tema oscuro.
- Dashboard, mapa y lista.
- Cambio API, Zustand o comportamiento geolocalización.

## Suggestions (your call)

- Ninguna.
