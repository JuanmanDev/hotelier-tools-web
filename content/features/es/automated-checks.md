---
title: "Comprobaciones automáticas de reservas para Little Hotelier"
---

Las comprobaciones automáticas leen tus reservas de Little Hotelier en cinco momentos de la estancia y señalan lo que hay que corregir: sin habitación asignada, un saldo pendiente, un documento de identidad o una dirección que faltan, o un huésped de tu lista de no volver a alojar. Los problemas llegan a una sola página de Incidencias, y cada ejecución te envía un email con el informe.

## Cómo funciona

Cada momento es su propia tarea programada, y lee un conjunto distinto de reservas:

- **Después de hacer una reserva:** reservadas ayer y hoy. Comprueba habitación, documento, dirección y la lista de no volver a alojar.
- **Antes de la llegada:** entrada desde hoy hasta dentro de 7 días (ajustable de 1 a 60). Comprueba habitación, pago y la lista de no volver a alojar.
- **A la llegada:** entrada hoy. Comprueba documento, dirección y habitación.
- **Durante la estancia:** entrada en los últimos 7 días (ajustable). Comprueba documento y dirección.
- **A la salida:** salida hoy. Comprueba documento, dirección y saldo.

Abre un momento en **Comprobaciones automáticas** (`/automated-checks`), activa o desactiva sus comprobaciones y pulsa **Guardar y activar tarea**. Las incidencias aparecen en `/automated-checks/issues`, agrupadas por reserva. Corrige la reserva en Little Hotelier y pulsa **Verificar**: las comprobaciones se ejecutan de nuevo sobre esa reserva y la incidencia se cierra.

La **Lista de no volver a alojar** (`/automated-checks/watchlist`) compara cada noche las reservas nuevas y las próximas llegadas con los huéspedes que has marcado. Una coincidencia se convierte en una incidencia y en una línea del informe.

La rutina completa está en [la lista de tareas de recepción](/blog/hotel-front-desk-checklist-automation). Cómo mantener la lista dentro de la ley está en [la guía de la lista de no alquilar](/blog/hotel-do-not-rent-list).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**.
- Un momento activado para empezar. **Antes de la llegada** es el primero que se sugiere, porque detecta una estancia sin habitación cuando todavía hay tiempo de asignarla.
- Destinatarios de los informes, que se fijan en **Ajustes > Destinatarios de informes** (`/settings/notifications`).

## Límites y conviene saber

- **Estado: beta.**
- **Solo avisan.** Ninguna comprobación edita, cancela ni cobra una reserva, y una coincidencia con la lista de no volver a alojar nunca rechaza a un huésped. La excepción es el check-out automático opcional, que escribe en Little Hotelier y está desactivado por defecto.
- **Como máximo una vez por hora por tarea**, porque cada ejecución inicia sesión en Little Hotelier.
- **Tres comprobaciones siguen siendo manuales:** tarjetas no válidas de Booking.com, número de huéspedes y horas de llegada. Consulta [qué hacer con una tarjeta no válida o un no-show](/blog/booking-com-invalid-card-no-show).
- Si caduca tu contraseña de Little Hotelier, las tareas se pausan en lugar de reintentar hasta que guardes la nueva.
