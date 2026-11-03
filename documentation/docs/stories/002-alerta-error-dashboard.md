# 002 - Alerta de error del dashboard

- **Estado:** Hecha
- **Fecha:** 2026-11-03
- **Tarea:** 2

## Story

Como conductor, quiero recibir alerta clara al fallar búsqueda, para saber qué ocurrió y reintentar.

## Acceptance criteria

- [x] Dado fallo inicial o actualización de precios, cuando consulta falla, entonces dashboard muestra `Alert` HeroUI `danger` arriba, con mensaje claro y acción Reintentar.
- [x] Dado alerta error visible, cuando aparece, entonces entra desde arriba con `transform` y `opacity`; movimiento reducido usa solo fade corto.
- [x] Dada búsqueda sin error termina sin estaciones, cuando resultado llega vacío, entonces veo estado ausencia, distinto de carga y error.

## Plan

- Definir estado error UI para fallo HTTP y red, sin exponer detalle técnico.
- Mostrar `Alert` HeroUI arriba dashboard; reintento llama consulta actual.
- Animar entrada/salida con CSS: `translateY` y `opacity`, 150–250ms.
- Respetar `prefers-reduced-motion`: fade <=200ms, sin desplazamiento.
- Cubrir error, reintento, carga y vacío con pruebas componente.

## Out of scope

- Cambiar contrato API o mensajes backend.
- Nueva dependencia animación.
- Migrar mapa/lista completa HeroUI.
- Auto-ocultar alerta.

## Decisions

- Cerrar alerta oculta notificación actual; nuevo fallo vuelve mostrarla.
- Resultados previos permanecen visibles si actualización falla; alerta comunica fallo sin borrar datos válidos.
