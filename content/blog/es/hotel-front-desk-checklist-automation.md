---
title: "Checklist de recepción de hotel para Little Hotelier: 8 problemas que detectar antes de que lleguen los huéspedes"
seoTitle: "Checklist de recepción de hotel para Little Hotelier"
description: "Checklist diario de recepción para Little Hotelier: 8 problemas de reserva que detectar antes de la llegada, dónde ver cada uno y cómo automatizar cinco."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checklist recepción hotel, checklist check-in hotel, plantilla checklist recepción hotel, reservas sin asignar little hotelier, automatización hotelera, software de automatización para hoteles]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/es/automated-checks-lifecycle.webp
coverAlt: "Página de comprobaciones automáticas de Hotelier Tools: cómo funcionan las comprobaciones en cuatro pasos, un aviso Todavía no se ejecuta ninguna comprobación que sugiere Antes de la llegada, y El viaje de una reserva por sus cinco etapas"
faq:
  - q: "¿Qué debe comprobar cada día la recepción de un hotel?"
    a: "En las llegadas de hoy y de mañana: habitación asignada, saldo pagado, tarjeta válida, documento de identidad, dirección, número correcto de huéspedes, hora de llegada y ninguna coincidencia con tu lista «no volver a alojar». En las salidas de hoy: el saldo y todo lo que necesita la factura."
  - q: "¿Cómo encuentro en Little Hotelier las reservas sin habitación?"
    a: "Abre Front Desk > Reservations, filtra por fecha de check-in y busca la columna Room vacía. El Calendar también muestra arriba un contador de reservas sin asignar."
  - q: "¿Cada cuánto pueden ejecutarse las comprobaciones automáticas?"
    a: "Cada tarea de comprobación tiene su propio horario. Las recomendadas se ejecutan una vez al día, y una tarea puede ejecutarse como mucho una vez por hora, porque cada ejecución entra en Little Hotelier."
  - q: "¿Cambiará o cancelará Hotelier Tools mis reservas?"
    a: "No. Las comprobaciones solo generan avisos. La única excepción es el check-out automático, que escribe en Little Hotelier y está desactivado hasta que lo actives."
  - q: "¿Puedo imprimir este checklist?"
    a: "Sí. Copia la tabla de esta guía en un documento, o exporta las llegadas filtradas desde Front Desk > Reservations como CSV e imprime eso."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier?"
    a: "No. Es un panel independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel."
---

Cada día, revisa en las llegadas de hoy y de mañana ocho cosas: habitación asignada, saldo pagado, tarjeta válida, documento de identidad, dirección, número correcto de huéspedes, hora de llegada y ninguna coincidencia con tu lista «no volver a alojar». En Little Hotelier la mayoría caben en una sola pantalla: **Front Desk > Reservations**, filtrada por fecha de check-in. Hotelier Tools ejecuta cinco de las ocho de forma automática en cinco momentos de la estancia y te envía por email solo lo que hay que corregir.

## Los 8 problemas de reserva que detectar antes de que llegue un huésped

1. **Sin habitación asignada.** Una reserva sin número de habitación pasa fácilmente desapercibida hasta que tienes al huésped delante, en recepción.
2. **Saldo pendiente.** Quieres saber antes de la llegada si debes cobrar, reclamar un depósito o enviar un enlace de pago.
3. **Tarjeta no válida en una reserva de Booking.com.** Booking.com da al huésped un plazo para actualizar la tarjeta, así que descubrirlo tarde te quita opciones.
4. **Falta el documento de identidad.** Muchos países lo exigen para el registro de viajeros. Mira [el registro de viajeros por países](/blog/guest-registration-rules-by-country).
5. **Falta la dirección o el país.** Se necesitan para el registro, para estadísticas oficiales como la encuesta del INE y para una factura correcta.
6. **Número de huéspedes incorrecto.** Cero adultos, o dos huéspedes en una reserva para cuatro, pueden descuadrar el registro, el desayuno y cualquier tasa turística que se cobre por persona.
7. **Sin hora de llegada.** Las llegadas tardías y el self check-in necesitan un plan el día anterior.
8. **Un huésped al que pediste que no volviera.** Mejor saberlo antes de que llegue. Mira [cómo llevar una lista negra de huéspedes](/blog/hotel-do-not-rent-list).

Copia esta tabla como tu checklist imprimible:

| Comprobación | Dónde mirar en Little Hotelier | Automatizada en Hotelier Tools |
|---|---|---|
| Habitación asignada | Columna **Room** en Reservations; contador de sin asignar en el Calendar | Sí |
| Saldo pagado | Columna **Outstanding** en Reservations | Sí |
| Tarjeta válida (Booking.com) | Channel Manager > reserva > **Manage Reservation** | No |
| Documento de identidad | Reserva > pestaña **Guests** | Sí |
| Dirección y país | Reserva > pestañas **Details** y **Guests** | Sí |
| Número de huéspedes | Columna **Occupants** en Reservations | No |
| Hora de llegada | Columna **ETA** en Reservations | No |
| Coincidencia con la lista «no volver a alojar» | Tu propia lista | Sí |

## Cómo comprobarlos en Little Hotelier sin abrir cada reserva

1. Ve a **My Apps > Front Desk > Reservations**.
2. Pon el tipo de fecha en **Check-in date**, elige hoy y mañana (o la semana siguiente), pon el estado en **Confirmed** y haz clic en **Search**.
3. Repasa las columnas: un **Room** vacío, el número de **Occupants**, un **ETA** en blanco y cualquier cosa en **Outstanding**.
4. ¿Lo quieres en papel? Haz clic en **Export** para obtener un CSV. Los teléfonos de los huéspedes se dejan fuera del archivo por motivos de seguridad.

Fuente: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) (en inglés).

Los documentos de identidad y las direcciones son la parte lenta. Están en las pestañas **Details** y **Guests** de cada reserva ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), así que tienes que abrir cada llegada.

### Tarjetas no válidas de Booking.com

En Little Hotelier, abre la reserva en **Channel Manager > Reservations**, ve a la pestaña **Manage Reservation** y haz clic en **Report payment card as invalid to Booking.com** ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

A fecha de octubre de 2026, el huésped tiene entonces 24 horas para actualizar la tarjeta. En las reservas hechas en las 48 horas previas al check-in son 12 horas, o hasta las 15:00 del día del check-in, lo que ocurra primero. Si no lo hace, puedes cancelar hasta las 15:00 (hora local) del día del check-in ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). Por eso las tarjetas van en la lista de la noche anterior. Guía completa: [tarjeta no válida o no-show en Booking.com](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Scripts gratuitos que aceleran esta pantalla"}
[Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table) muestra todas las columnas sin desplazarte hacia los lados. [Actualizar Número de Adultos](/tools/ui/update-number-adults) pone las reservas nuevas en 2 adultos para que no se cuele un 0. Más en [extensiones de Chrome gratuitas para Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## La noche anterior o el mismo día: cuándo ejecutar cada comprobación

Algunos problemas necesitan tiempo para arreglarse (una tarjeta, una habitación); otros solo pueden comprobarse cuando el huésped está delante (el documento). Hotelier Tools divide la estancia en cinco momentos, cada uno con su propia tarea programada:

| Momento | Reservas que lee | Qué comprueba |
|---|---|---|
| Al hacer la reserva | Reservadas ayer y hoy | Habitación, documento, dirección, lista «no volver a alojar» |
| Antes de la llegada | Check-in desde hoy hasta 7 días vista (1–60, a tu elección) | Habitación, pago, lista «no volver a alojar» |
| A la llegada | Check-in hoy | Documento, dirección, habitación |
| Durante la estancia | Check-in en los últimos 7 días (ajustable) | Documento, dirección |
| A la salida | Check-out hoy | Documento, dirección, saldo |

Una regla sencilla: habitaciones, pagos y tarjetas la noche anterior; documento y dirección el día de la llegada; el saldo el día de la salida.

## Cómo automatizar el checklist con Hotelier Tools

1. Regístrate en [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) y conecta Little Hotelier en **Credenciales**.
2. Abre **Comprobaciones automáticas** (`/automated-checks`). Si todavía no se ejecuta nada, la página sugiere empezar por **Antes de la llegada**: detecta una estancia sin habitación mientras aún hay tiempo de asignarla.
3. Abre un momento, activa o desactiva sus comprobaciones y pulsa **Guardar y activar tarea**. Eso crea la tarea programada con el horario recomendado, por ejemplo cada noche a las 23:30 para «Al hacer la reserva».
4. Los problemas aparecen en **Incidencias** (`/automated-checks/issues`), agrupados por reserva. Filtra por incidencias abiertas, tipo de comprobación o fechas de estancia.
5. Corrige la reserva en Little Hotelier y pulsa **Verificar**. Las comprobaciones se ejecutan de nuevo sobre esa reserva y la incidencia se cierra cuando está corregida.

::screenshot{src="/images/blog/demo/es/automated-checks-moment-on-arrival.webp" alt="Momento A la llegada en Hotelier Tools: la tarjeta de tarea sin configurar con Cada 3 horas, Elegir y Ejecutar ahora, el botón Guardar y activar tarea, y las comprobaciones DNI / Pasaporte (Registro policial), asignación de habitación física y validación de dirección y procedencia activadas" caption="Cada momento de la estancia tiene sus propias comprobaciones y su propio horario. Aquí, A la llegada." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/es/automated-checks-issues.webp" alt="Página de incidencias con 20 abiertas, 5 corregidas y 25 en total, filtros por incidencias abiertas, tipo de comprobación y fechas de estancia, y reservas con un aviso de saldo pendiente a la llegada y un botón Verificar" caption="Problemas agrupados por reserva. Corrígelos en Little Hotelier y pulsa Verificar." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## Cómo es el informe por email

Cada ejecución envía **un email de informe por tarea**, en el idioma que fijes para esa tarea: un resumen claro de lo que encontró, fácil de leer en el móvil. Cada problema está también en **Incidencias**, así que el email es tu aviso y el panel es donde trabajas. Los destinatarios compartidos, como el propietario y la recepción, se fijan en **Ajustes > Destinatarios de informes** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/es/settings-report-recipients.webp" alt="Página de ajustes Destinatarios de informes en Hotelier Tools con una dirección compartida en el campo de direcciones, una dirección sugerida para añadir y la nota de que el informe de cada tarea programada va a esta lista salvo que la tarea indique la suya" caption="La página Destinatarios de informes en Ajustes: las direcciones compartidas reciben el email de informe de cada tarea de comprobación." path="/settings/notifications"}
::

## Límites, y lo que las comprobaciones nunca cambian

- **Solo avisan.** Ninguna comprobación edita, cancela ni cobra una reserva. La excepción es el **check-out automático** opcional, que escribe en Little Hotelier y viene desactivado por defecto.
- **Como mucho una vez por hora y tarea.** Cada ejecución entra en Little Hotelier, así que el intervalo mínimo es de 60 minutos.
- **Se pausan con seguridad.** Si caduca tu contraseña de Little Hotelier, las tareas programadas se pausan solas en lugar de reintentar, lo que protege tu cuenta de un bloqueo. El panel muestra «Las tareas automáticas están en pausa» hasta que guardes la contraseña nueva en **Credenciales** o pulses **Comprobar ahora y reanudar**.
- **Tres comprobaciones siguen siendo manuales.** Las tarjetas, el número de huéspedes y las horas de llegada no se comprueban automáticamente, así que mantenlas en tu lista de la mañana.

Cada tarea figura en **Tareas programadas** (`/cron`) y cada ejecución en **Historial de ejecuciones** (`/cron-logs`). La función está en beta. Más sobre la programación en la [página de automatizaciones](/tools/bot/automations), y la función completa en [Comprobaciones automáticas](/tools/bot/automated-checks).

## Resumen

- Revisa ocho cosas antes de cada llegada: habitación, saldo, tarjeta, documento, dirección, número de huéspedes, hora de llegada y tu lista «no volver a alojar».
- En Little Hotelier, la lista **Reservations** filtrada por fecha de check-in muestra cuatro de ellas de un vistazo; el documento y la dirección obligan a abrir cada reserva.
- Hotelier Tools comprueba habitación, pago, documento, dirección y la lista «no volver a alojar» en cinco momentos de la estancia, lista los problemas en **Incidencias** y envía un informe por email.
- Empieza por **Antes de la llegada** y luego añade los demás momentos.
