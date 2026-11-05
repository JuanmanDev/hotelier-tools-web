---
title: "Enlaces de pago en Little Hotelier: cómo enviar uno, cobrar depósitos y recordar el pago a los huéspedes"
seoTitle: "Enlace de pago y recordatorios de pago en Little Hotelier"
description: "Envía una solicitud de pago desde Little Hotelier, fija depósitos y recuerda el pago a los huéspedes sin reclamar lo que ya pagaron en Booking.com."
date: 2026-10-28
updated: 2026-11-05
category: invoicing
tags: [pagos, enlace de pago, little hotelier, siteminder pay, depósitos, automatización]
keywords: [enlace de pago little hotelier, solicitud de pago little hotelier, enviar solicitud de pago little hotelier, little hotelier pay solicitud de pago, enlace de pago siteminder pay, email recordatorio de pago hotel, recordar al huésped el pago antes de la llegada, depósito little hotelier, reserva prepagada booking.com little hotelier, cobrar saldo pendiente huésped hotel]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/es/payment-links-modal.webp
coverAlt: "Ventana Enlace de pago de Hotelier Tools para la reserva BBN-DEMO102550: 759,55 € pendientes, el campo Importe, la casilla SiteMinder Pay lo envía a sin marcar con el email del huésped, la nota Vale 48 horas, el botón Crear enlace de pago y ningún enlace de pago anterior"
faq:
  - q: "¿Cómo envío un enlace de pago desde Little Hotelier?"
    a: "Abre la reserva en Front Desk y haz clic en Send Payment Request. Rellena el importe, el motivo y el mensaje, haz clic en Create request y envíalo por email con una plantilla o copia el enlace para mandarlo por chat o SMS. Necesitas tener activado Little Hotelier Pay."
  - q: "¿Cuánto tiempo vale un enlace de pago de Little Hotelier?"
    a: "48 horas desde que se crea. Después, el huésped ve que la solicitud ya no está activa. Una solicitud no se puede editar: si cambia el importe, cancélala y crea otra."
  - q: "¿Puedo enviar una solicitud de pago para una reserva de Booking.com o Expedia?"
    a: "Solo cuando cobras tú el dinero. Las solicitudes de pago de Little Hotelier no funcionan para reservas cobradas por el canal ni para las tarjetas virtuales de la OTA. A un huésped que prepagó en Booking.com o con Expedia Collect solo se le debe pedir lo que se añadió en el alojamiento."
  - q: "¿Envía Little Hotelier recordatorios de pago automáticos?"
    a: "Su centro de ayuda describe los depósitos automáticos para las reservas directas y los pagos automáticos que cargan una tarjeta guardada, pero no emails de recordatorio para un saldo pendiente. Hotelier Tools añade encima reglas de recordatorio de pago, con el mismo enlace de pago."
  - q: "¿Cobra Hotelier Tools la tarjeta del huésped?"
    a: "No. Un enlace de pago solo pide al huésped que pague en la página segura de SiteMinder. Hotelier Tools nunca ve ni guarda números de tarjeta y nunca cobra una tarjeta."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier o de SiteMinder?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel."
---

Para enviar un enlace de pago en Little Hotelier, abre la reserva y haz clic en **Send Payment Request**. Escribe el importe, haz clic en **Create request** y después envíalo por email o copia el enlace. Necesitas tener activado Little Hotelier Pay, y el enlace vale 48 horas. Little Hotelier no hace el seguimiento por ti. Los recordatorios de pago de Hotelier Tools sí: en los días que elijas, envían por email a los huéspedes que no han pagado un enlace por lo que aún deben.

Las pantallas de Little Hotelier de abajo se han contrastado con su centro de ayuda a fecha de noviembre de 2026.

## Cómo enviar una solicitud de pago en Little Hotelier

Las solicitudes de pago forman parte de **Little Hotelier Pay**, el servicio de pagos integrado de Little Hotelier. Las solicitudes funcionan sobre la plataforma de pagos de SiteMinder, por eso las pantallas de Hotelier Tools las llaman **SiteMinder Pay**. Actívalo primero en **Front Desk > Setup > Guest Payment Options > Payment Gateways**. Las solicitudes no funcionan con una pasarela de terceros ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests), en inglés).

**En un ordenador:**

1. Abre la reserva en Front Desk y haz clic en **Send Payment Request**.
2. Comprueba la reserva, el nombre del huésped y el importe, y añade un motivo y un mensaje para el huésped.
3. Haz clic en **Create request**.
4. Para enviarlo por email, elige la plantilla de email, comprueba la dirección del huésped, haz clic en **Preview email** y después en **Send request**. O copia el enlace y pégalo en WhatsApp, en un SMS o en un email.

**En la app móvil:** abre la reserva, toca **Take payment**, rellena la pestaña **Request**, elige email, SMS o enlace y toca **Send request**.

Lo que debes saber antes de enviar una:

- **48 horas.** El enlace vale 48 horas. Después, el huésped ve que la solicitud ya no está activa.
- **Sin cambios.** Si cambia el importe, cancela la solicitud y crea otra. Cancélala también si se cancela la reserva.
- **Dónde seguirla.** **My apps > Payments > Payment requests** lista todas las solicitudes. Desde **Actions** puedes cancelar una o copiar su enlace para compartirlo de nuevo. Una solicitud pagada aparece también en la pestaña **Payments** de la reserva.
- **Recargos.** Al crear una solicitud aparece la opción **Apply surcharge**. Los recargos por pago con tarjeta no están permitidos en todas partes, así que revisa la normativa de tu país.
- **Solo si cobras tú.** Las solicitudes no funcionan para reservas cobradas por el canal ni para la tarjeta virtual de una OTA.

## Depósitos y saldos: qué automatiza Little Hotelier

Little Hotelier tiene dos opciones automáticas, las dos con Little Hotelier Pay:

| Función | Qué hace | Dónde |
|---|---|---|
| **Automatic deposits** | Tu motor de reservas cobra un depósito cuando un huésped reserva directamente: **Full amount**, **Percentage**, **First night**, **Fixed amount** o **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Automated payments** | Cobra el saldo pendiente en la tarjeta guardada del huésped un número fijo de días antes del check-in, el día del check-in o el del check-out | **My Apps > Payments > Automated payments > Create a rule** ([preguntas frecuentes](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

Los pagos automáticos necesitan una tarjeta que funcione. Cuando un cobro falla, o no hay tarjeta, Little Hotelier propone enviar una solicitud de pago, y a partir de ahí es trabajo de una persona: enviarla, esperar y mandar otra cuando se acaben las 48 horas.

## ¿Prepagada en Booking.com o Expedia? No pidas dos veces

Una reserva «pre-paid» de Booking.com o una reserva de Expedia Collect se pagó al canal. Little Hotelier sigue mostrando la estancia como **pendiente** hasta que alguien registra ese dinero como un pago «OTA Paid». Si envías un recordatorio por ese saldo, le pides al huésped que vuelva a pagar noches que ya pagó.

Hay una segunda trampa. Little Hotelier valora las noches con sus propias tarifas, mientras que el huésped pagó el precio del canal (con un descuento Genius o de móvil, por ejemplo). Así que, incluso después de registrar el pago de la OTA, el importe pendiente puede mezclar dos cosas:

- **Noches añadidas en recepción** después de la reserva: el canal nunca las vendió, así que el huésped las paga en el alojamiento.
- **La diferencia entre tus tarifas y el precio del canal:** el huésped ya pagó el precio del canal. Esa diferencia no le toca pagarla.

Pongamos una reserva prepagada de 2 noches que se alarga en recepción con una noche de 75 €. Little Hotelier puede mostrar 88 € pendientes, pero el huésped debe 75 €. El asistente de IA de Hotelier Tools lee la estancia de esta forma y le dice a recepción lo que el huésped debe en el alojamiento, no solo la cifra de Little Hotelier. Para tarjetas no válidas y no-shows de Booking.com, mira [qué hacer con una tarjeta no válida](/blog/booking-com-invalid-card-no-show).

## La forma más rápida: recordatorios de pago con enlace

Los **Recordatorios de pago** de Hotelier Tools (`/automated-checks/payments`, parte de las comprobaciones automáticas, en beta) encuentran las reservas que aún deben dinero y se lo recuerdan al huésped en los días que elijas, con un enlace si quieres. También envían un resumen a tu equipo. No se cobra nada: el huésped decide si paga.

1. Abre **Comprobaciones automáticas** y la tarjeta **Recordatorios de pago**, o ve directamente a `/automated-checks/payments`. Haz clic en **Nueva regla**. Una regla nueva empieza desactivada.
2. En **Qué reservas**, fija el **Importe pendiente mínimo** (para saltarte un céntimo que falta). Elige si te saltas los depósitos ya pagados (**Solo reservas sin nada pagado**) y si quieres **Incluir huéspedes ya alojados**. En **Canales**, elige **Todos los canales**, **Solo estos canales** o **Todos menos estos**.
3. Añade hasta seis **Recordatorios**. Cada uno es un número de días antes, el mismo día o después de la reserva, del check-in o del check-out. Por ejemplo: 7 días antes del check-in y luego 2 días antes del check-in.
4. Para cada recordatorio, elige qué recibe el huésped: **Solo recordatorio**, **Recordatorio con enlace de pago** o **Solicitud de pago enviada por SiteMinder Pay** (el propio email de SiteMinder). Nuestro texto sale en el idioma del huésped, o haz clic en **Escribir mi propio texto**. Activa **Avisar al equipo** para añadir la reserva al resumen del equipo, con una nota.
5. Haz clic en **Vista previa de hoy** para ver a qué huéspedes escribiría hoy la regla. Lee Little Hotelier y no envía nada.
6. Activa la regla y dale una programación. La recomendada es **Todos los días a las 10:00**.

::screenshot{src="/images/blog/demo/es/payment-reminders-rule-editor.webp" alt="Editor de reglas de recordatorio de pago de Hotelier Tools: el aviso Esta regla está desactivada, el nombre de la regla, la sección Qué reservas con Importe pendiente mínimo 1, Canales en Todos los canales, Solo reservas sin nada pagado desactivado e Incluir huéspedes ya alojados activado, y el comienzo de la sección Recordatorios" caption="Una regla: qué reservas persigue, cuándo sale cada recordatorio y a quién se avisa. Las reglas nuevas empiezan desactivadas." path="/automated-checks/payments"}
::

### Qué lo hace seguro

- **Nunca dos veces.** Cada recordatorio queda anotado para cada reserva antes de enviarse, así que una ejecución repetida, dos programaciones o una ejecución manual no pueden repetirlo.
- **Un recordatorio al día por huésped**, sumando todas tus reglas.
- **Se pone al día sin avalancha.** Un recordatorio sale todavía hasta dos días tarde si se saltó una ejecución. Si tocan varios a la vez, solo se envía el último.
- **El importe está al día.** El saldo se lee de la reserva justo antes de enviar, y una reserva pagada mientras tanto no recibe nada. Las reservas canceladas y los no-shows nunca se reclaman.
- **Enlaces reutilizados.** Un enlace pendiente para la misma reserva y el mismo importe, con más de dos horas de validez por delante, se reutiliza en lugar de crear otro.
- **Aviso cuando se paga.** Cada ejecución sigue los enlaces que enviaron sus recordatorios. Cuando se paga uno, el equipo recibe un email de «pagos recibidos» (si la regla avisa al equipo).

Para probar un recordatorio, **Enviar ahora…** lo envía a una sola reserva, sea cual sea su día. Todo lo enviado aparece en **Actividad**: cuándo, reserva, huésped o equipo, estado, importe pendiente y el estado del enlace (**Esperando el pago**, **Pagado**, **Caducado**, **Cancelado**).

::screenshot{src="/images/blog/demo/es/payment-reminders-activity.webp" alt="Página de recordatorios de pago con dos reglas activadas: Prepago reservas directas — 7 días antes (7 días antes de la llegada, Recordatorio + enlace; últimos 30 días: 3 enviados, 1 fallidos) y Saldo pendiente — 2 días antes (2 días antes de la llegada, SiteMinder Pay y Equipo; 11 enviados, 1 fallidos), cada una con su tarea diaria de las 10:00 Activa; después, la tabla Actividad con recordatorios a huéspedes y resúmenes al equipo, Enviado con enlaces de SiteMinder Pay Esperando el pago o Caducado, y uno Fallido porque SiteMinder Pay no confirmó que enviara el email al huésped" caption="Dos reglas, cada una con su propia programación diaria, y un registro de cada recordatorio con el estado de su enlace de pago." path="/automated-checks/payments"}
::

### Las estancias prepagadas se gestionan por ti

Cuando la reserva indica que se prepagó en Booking.com o Expedia, el recordatorio nunca pide el dinero del canal:

- **El importe está probado** (indicado en los comentarios de la reserva, o exactamente la habitación vendida) y el interruptor del alojamiento **Registrar prepagos de OTA probados (toda la propiedad)** está activado: Hotelier Tools registra un pago «OTA Paid» en Little Hotelier y después pide solo las noches añadidas y los extras.
- **El importe no está probado** (una estancia de Expedia con extras, otra moneda): no sale ningún email al huésped. El resumen del equipo la lista: revísala y registra el pago.
- **No queda nada por pagar:** la reserva se deja fuera.

Tú eliges cuándo se registra ese pago en **Cuándo registrarlos**: **En las comprobaciones (antes de la llegada y en la salida)** o **Unas horas después de la llegada** (de 0 a 48 horas, 1 por defecto). Con la segunda opción, los cambios hechos en recepción durante el check-in, como extras o un cambio de habitación, ya están en el saldo. En ese caso necesitas la tarea horaria **Registrar prepagos de OTA tras la llegada**, que programas tú.

## Un enlace para una reserva

No todos los pagos necesitan una regla. Abre una reserva en `/reservations/<número>` y, en **Pagos**, haz clic en **Enlace de pago**. El mismo botón está junto a un saldo en los listados del día y en el panel de la reserva de la bandeja.

1. La ventana muestra lo que debe la reserva y sus enlaces anteriores, cada uno con su estado.
2. Pide el saldo completo o una parte (un depósito, por ejemplo) en **Importe**.
3. Marca **SiteMinder Pay lo envía a …** para que se envíe por email, o déjalo sin marcar y usa **Copiar** para enviar tú el enlace.
4. Haz clic en **Crear enlace de pago**. Un enlace pendiente se puede cancelar desde la misma ventana.

::screenshot{src="/images/blog/demo/es/payment-links-reservation-payments.webp" alt="Sección Pagos de una reserva en Hotelier Tools: el botón Enlace de pago, un depósito en efectivo de 759,55 € registrado a mano el 4 de octubre de 2026 con un botón Reembolsar, Reembolsable en total 759,55 €, sin tarjeta guardada, y el panel Reserva original" caption="Todos los pagos de la estancia en un solo sitio, con el enlace de pago y los reembolsos a un clic." path="/reservations"}
::

La sección **Pagos** también gestiona los reembolsos. Haz clic en **Reembolsar** en un pago, escribe un importe total o parcial (valen la coma y el punto) y Hotelier Tools lo compara con lo que aún se puede reembolsar antes de pedírselo a Little Hotelier, una sola vez. Si Little Hotelier no lo confirma, te dice que revises la reserva antes de volver a reembolsar, en lugar de enviar un segundo reembolso.

**Para desarrolladores e IA:** el mismo enlace existe en la API REST (`POST /api/v1/reservations/{id}/payment-link`; el huésped solo recibe el email con `"notifyGuest": true`) y como la herramienta `create_payment_link`, que pide tu aprobación en el chat de IA. Desde el chat de IA o la API, un pago con tarjeta cobrado en el TPV de recepción se puede registrar en la estancia solo con la marca y los cuatro últimos dígitos. No cobra nada. Una petición con algo que parezca un número de tarjeta completo se rechaza. Mira la [página de la API REST y MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

En **Ajustes > Equipo y roles**, crear y cancelar enlaces necesita el permiso **Registrar pagos**, los reembolsos necesitan **Devolver pagos** y editar reglas necesita **Gestionar recordatorios de pago**. El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel. Los enlaces de pago son las propias solicitudes de pago de SiteMinder Pay: el huésped paga en la página de SiteMinder y ningún dato de tarjeta pasa por Hotelier Tools.
::

Guías relacionadas: [enviar la factura en el check-out](/blog/send-invoice-to-guest-at-checkout), [la lista diaria de recepción](/blog/hotel-front-desk-checklist-automation), [tarjeta no válida o no-show en Booking.com](/blog/booking-com-invalid-card-no-show).

## Resumen

- En Little Hotelier, **Send Payment Request** en la reserva crea un enlace que vale 48 horas. Necesita Little Hotelier Pay y solo funciona para las reservas que cobras tú.
- Los depósitos de las reservas directas y los cobros automáticos con tarjeta vienen integrados. Los emails de recordatorio para saldos pendientes, no.
- Los **Recordatorios de pago** de Hotelier Tools envían por email a los huéspedes que no han pagado un enlace en los días que elijas, nunca dos veces, y avisan al equipo cuando se paga un enlace.
- A las estancias prepagadas en Booking.com y Expedia nunca se les vuelve a pedir el dinero del canal: solo las noches y los extras añadidos en el alojamiento.
