---
title: "Reserva de Booking.com o Expedia que no aparece en Little Hotelier: causas, comprobaciones y cómo evitar un overbooking"
seoTitle: "Reserva de Booking o Expedia que no llega a Little Hotelier"
description: "Por qué una reserva de una OTA no llega a Little Hotelier, dónde ver su estado de entrega, cómo proteger la habitación y cómo recibir un aviso si falta."
date: 2026-10-29
category: operations
tags: [booking.com, expedia, channel manager, overbooking, little hotelier, siteminder]
keywords: [reserva de booking no aparece en little hotelier, reserva de expedia no llega al channel manager, little hotelier falta una reserva, siteminder reserva no entregada, reserva de booking no llega al pms, overbooking channel manager, reenviar reserva a little hotelier, reserva de booking.com no aparece en el channel manager, reservas perdidas channel manager]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/es/ota-missing-calendar-double-booked.webp
coverAlt: "Calendario de reservas de Hotelier Tools del 4 al 17 de noviembre de 2026: habitaciones agrupadas por tipo con reservas confirmadas y con entrada hecha como barras, un carril Sin habitación aún, la habitación 104 cerrada por mantenimiento y la leyenda con Entrada hecha, Salida hecha, Confirmada, Doble reserva y Habitación cerrada"
faq:
  - q: "¿Por qué no aparece en Little Hotelier una reserva de Booking.com?"
    a: "Normalmente porque la habitación o la tarifa reservada no está mapeada, o está desactivada, en el Channel Manager de Little Hotelier, porque la reserva se hizo con otro código de alojamiento o porque falló la entrega. Mira su estado de entrega en My apps > Channel Manager > Reservations."
  - q: "¿Cómo reenvío a Little Hotelier una reserva que ha fallado?"
    a: "En My apps > Channel Manager > Reservations, haz clic en el ID de la reserva, abre la pestaña Little Hotelier del Booking summary y haz clic en Resend PMS message. Una reserva sin estado de entrega no se puede reenviar: introdúcela a mano."
  - q: "¿Qué hago primero cuando falta una reserva?"
    a: "Proteger la habitación. Crea la reserva a mano en Front Desk > Calendar con los datos de la extranet, lo que baja la disponibilidad en todos los canales. Después averigua por qué no llegó."
  - q: "¿Me avisa Booking.com cuando una reserva no llega a mi channel manager?"
    a: "Sí. Booking.com envía un email al alojamiento cuando hay un problema al añadir una reserva al sistema del proveedor de conectividad, así que mantén al día los datos de contacto de tu Extranet. La reserva en sí siempre está en la Extranet."
  - q: "¿Con qué rapidez avisa Hotelier Tools de una reserva que falta?"
    a: "Para Expedia, la comprobación se ejecuta cada 15 minutos y avisa de una reserva que sigue faltando pasados 30 minutos, vista en al menos dos lecturas: entre 30 y 45 minutos después de hacerse la reserva. Avisa una vez por reserva, y otra vez cuando llega. Para Booking.com, de momento solo avisa de incidencias de reservas."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier, SiteMinder, Booking.com o Expedia?"
    a: "No. Hotelier Tools es independiente: no está afiliado a ninguno de ellos ni cuenta con su respaldo. Lee tus extranets y Little Hotelier con tus propios accesos y nunca crea, cambia ni cancela una reserva."
---

Cuando falta en Little Hotelier una reserva de Booking.com o Expedia, casi siempre se quedó parada en uno de tres puntos: la habitación o la tarifa no está mapeada (o está desactivada) en el Channel Manager, la reserva fue a otro código de alojamiento, o falló la entrega. Mira su estado en **My apps > Channel Manager > Reservations** y reenvíala si falló. Sea cual sea la causa, crea primero la reserva a mano, para que la habitación no se venda dos veces.

Las pantallas de Little Hotelier, Booking.com y Expedia de abajo se han contrastado a fecha de noviembre de 2026.

## ¿Por qué no llegó la reserva a Little Hotelier?

Una reserva viaja de la OTA al channel manager de SiteMinder, y de ahí al Front Desk de Little Hotelier. Puede pararse en cualquier paso. Las causas habituales, según la [guía de reservas que faltan](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) de Little Hotelier y la [guía de sincronización](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) de Booking.com (ambas en inglés):

| Causa | Cómo se ve |
|---|---|
| **Plan de tarifa o habitación sin mapear** | El huésped reservó una tarifa que no está conectada en el Channel Manager. La reserva no tiene ningún estado de entrega. |
| **Tarifa o canal desactivados** | Lo desactivado no envía actualizaciones, pero la OTA sigue vendiendo con la disponibilidad antigua. |
| **Reservada antes de mapear la tarifa** | Las reservas hechas antes de activar o mapear una tarifa del canal no se sincronizan solas. |
| **Código de alojamiento equivocado** | Una segunda cuenta de extranet con otro código. Sus reservas nunca llegan a Little Hotelier. |
| **Entrega fallida** | El channel manager recibió la reserva, pero Little Hotelier la rechazó o no pudo confirmarla. |
| **Incidencia en la OTA** | La API de reservas de la propia OTA está caída. Las reservas nuevas, los cambios y las cancelaciones dejan de llegar durante un tiempo. |

No te olvides de las modificaciones y las cancelaciones. Hacen el mismo camino. Una cancelación perdida deja bloqueada una habitación que podrías vender. Un cambio de fechas perdido pone al huésped en las noches equivocadas. Las dos cosas se arreglan igual: compara la reserva de la extranet con Little Hotelier.

Una reserva aceptada con disponibilidad cero es otro problema. Little Hotelier aconseja preguntar a la OTA por qué la aceptó y pedir a soporte, como prueba, el registro de las actualizaciones de inventario enviadas a ese canal.

## Cómo ver el estado de entrega en Little Hotelier

1. Ve a **My apps > Channel Manager > Reservations**. Usa el filtro **All PMS status** para ver el estado de entrega de cada reserva.
2. Lee el estado ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: Little Hotelier la aceptó. Si aun así no la encuentras, búscala en Front Desk por el nombre del huésped y el año correcto, y después contacta con soporte.
   - **PENDING**: aún no se ha recibido. Suele resolverse en unos minutos.
   - **FAILED**: rechazada o sin confirmar. El error también te llega por email.
   - **Sin estado**: la tarifa no está mapeada. No se puede reenviar, así que introdúcela a mano.
3. Para reenviar una reserva fallida, haz clic en su ID. En la ventana **Booking summary**, abre la pestaña **Little Hotelier** y haz clic en **Resend PMS message**.

Los fallos también aparecen bajo la campana, en **Reservation delivery failures**. Después corrige la causa en **My apps > Channel Manager > Channels > Configure**: mapea las tarifas sin mapear, vuelve a activar las desactivadas y comprueba que **Rates Mapped** muestra los dos mismos números (por ejemplo, 44/44). Una tarifa que falla una y otra vez con «Unable to locate» se borró o se cambió en la OTA y hay que volver a mapearla ([errores de mapeo](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## Cómo comprobarlo en Booking.com y Expedia

**Booking.com.** Todas las reservas están en la lista **Reservations** de la Extranet, pase lo que pase después. Booking.com explica que una reserva puede faltar en tu proveedor cuando la habitación o la tarifa aún no está conectada allí, o tras un problema técnico. También te envía un email cada vez que no ha podido añadir una reserva al sistema de tu proveedor, así que mantén al día los datos de contacto de tu Extranet ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Cuando faltan varias reservas a la vez, mira en la [página pública de estado de la conectividad](https://connect.booking.com/status) de Booking.com si hay una incidencia en las reservas.

**Expedia.** Abre la página de reservas de Partner Central, busca por número de confirmación o por fechas y apunta la habitación y la tarifa que reservó el huésped. Si está en Partner Central pero no en Little Hotelier, el hueco está entre Expedia y SiteMinder: comprueba que SiteMinder sigue siendo tu proveedor de conectividad tanto para tarifas como para reservas, y que la tarifa está mapeada.

En los dos casos, Little Hotelier no puede contactar con la OTA por ti. Si el mapeo es correcto y la OTA dice que envió la reserva, pide a la OTA el registro XML de entrega de esa reserva y envíalo al soporte de Little Hotelier.

## Cómo evitar un overbooking mientras lo investigas

1. **Crea la reserva a mano.** En **Front Desk > Calendar**, haz clic en la fecha de llegada, elige **Add Reservation** y copia los datos de la extranet. Al crearla baja tu disponibilidad en todos los canales.
2. **Recuerda que es manual.** Los cambios o cancelaciones posteriores de esa reserva también tendrás que hacerlos a mano en Front Desk. Si la original llega más tarde, comprueba que no te quedas con las dos.
3. **¿Ya estás lleno?** Pide a la OTA que reubique al huésped.
4. **Evita que la causa vuelva.** Mapea todas las tarifas que vendes, vigila los canales desactivados y plantéate un stop sell en los canales más flojos cuando solo quede una habitación.

## La forma más rápida: recibe un aviso cuando falte una reserva de una OTA

Comprobarlo a mano funciona una vez que sabes que falta una reserva. Lo difícil es saberlo. Hotelier Tools compara cada 15 minutos la lista de reservas de la propia Expedia con Little Hotelier y te envía un email por cada reserva que no llega. Para Booking.com avisa hoy de las incidencias de reservas; su comprobación reserva por reserva aún no está terminada (más abajo).

1. Conecta la extranet en **Credenciales**: **Expedia Partner Central** (`/credentials/expedia-extranet`) o **Extranet de Booking.com** (`/credentials/booking-extranet`).
2. Mantén viva la sesión con **Mantener la sesión de Expedia** (o **Mantener la sesión iniciada** para Booking.com) en la misma página. La comprobación no puede leer una sesión caducada.
3. Programa **Comprobar que las reservas de Expedia están en Little Hotelier** (o la de Booking.com) desde su tarjeta, con el ajuste recomendado: **Cada 15 minutos**. Cuando la extranet está conectada y con la sesión mantenida, Hotelier Tools crea esta tarea por ti.
4. Asegúrate de que el email llega a las personas adecuadas: **Ajustes > Destinatarios de informes** (`/settings/notifications`). Si no hay direcciones ahí, va al email de contacto del propietario.
5. Cuando llegue el email, busca la reserva en la extranet, créala en Little Hotelier o cierra la habitación esas noches, y después corrige la causa como se explica arriba.

Cada ejecución lee las reservas hechas hoy y las llegadas de los próximos 14 días, y las reservas de Little Hotelier. Las reservas de Expedia se emparejan por su código de confirmación (`EXP-` seguido del número), el mismo código que guarda Little Hotelier.

### Un aviso por reserva, no uno cada 15 minutos

La entrega tarda a menudo unos minutos, así que una sola lectura nunca basta. Cada reserva que falta entra en un registro:

- **Aviso pasados 30 minutos, tras verla faltar en al menos dos lecturas.** Eso es entre 30 y 45 minutos después de hacerse la reserva.
- **Un solo aviso.** El envío queda anotado antes de hacerse, así que dos ejecuciones no pueden mandarlo las dos. Si el email no llegó a nadie, esa anotación se libera y la siguiente ejecución lo vuelve a intentar.
- **Otro aviso cuando se arregla.** Cuando la reserva aparece en Little Hotelier, o la OTA la cancela, o la estancia ha terminado, recibes un email de «ya no falta».
- **Nunca un falso «todo en orden».** Si una lista no se pudo leer entera, la ejecución falla y lo dice. Nada se da por comprobado.

La comprobación de Expedia también anota las diferencias de estado y de fechas (cancelada en Expedia pero activa en Little Hotelier, por ejemplo) y las reservas sin habitación. Aparecen en el resumen de la ejecución, en **Historial de ejecuciones** (`/cron-logs`).

::screenshot{src="/images/blog/demo/es/ota-missing-calendar-double-booked.webp" alt="Calendario de reservas de Hotelier Tools del 4 al 17 de noviembre de 2026: habitaciones agrupadas por tipo con reservas confirmadas y con entrada hecha como barras, un carril Sin habitación aún, la habitación 104 cerrada por mantenimiento y la leyenda con Entrada hecha, Salida hecha, Confirmada, Doble reserva y Habitación cerrada" caption="El calendario marca como Doble reserva dos reservas en la misma habitación, así que un overbooking que ya se ha producido salta a la vista." path="/reservations/calendar"}
::

### Booking.com: los avisos de incidencias funcionan, la comprobación reserva por reserva no está terminada

Antes de leer la extranet, la comprobación de Booking.com lee la página pública de estado de Booking.com. Una incidencia en su API de reservas se avisa por email una vez cuando empieza y otra cuando se resuelve, aunque tu sesión de la extranet esté caída. Justo cuando nadie más se daría cuenta.

La comparación reserva por reserva de Booking.com **aún no funciona**. La Extranet dibuja su lista de reservas con un script, así que la página que recibe Hotelier Tools trae la tabla sin filas. En lugar de decir «todo en orden» sobre reservas que nadie ha visto, la comprobación falla de forma visible en cada ejecución hasta que esa lista se pueda leer. Por ahora, el aviso por reserva funciona para Expedia, y Booking.com te da los avisos de incidencias.

### Lo que nunca hace

- **Solo lee**, en todos los lados. Nunca crea, cambia ni cierra una reserva, y nunca cierra una habitación por ti.
- **Solo dos OTA.** Airbnb, Hostelworld y las demás no se comprueban.
- **No sustituye al mapeo.** Si una tarifa no está mapeada, la sigues corrigiendo en Little Hotelier.

## Menos emails, y mejores, de tus otras comprobaciones

La misma regla rige los demás avisos de Hotelier Tools. En **Comprobaciones automáticas** (`/automated-checks`), pon **Enviar email** de una tarea en **Solo con incidencias nuevas o cambiadas**: el informe solo trae entonces los problemas que ningún informe anterior mencionó, o que han cambiado. Y cuando una persona marca una incidencia como resuelta en **Incidencias** (`/automated-checks/issues`), sigue resuelta mientras la comprobación encuentre lo mismo. Un problema distinto abre una incidencia nueva.

::screenshot{src="/images/blog/demo/es/ota-missing-checks-issues.webp" alt="Página Incidencias de Hotelier Tools: su introducción en cuatro pasos (una comprobación encuentra un problema, aparece agrupado por reserva, lo corriges en Little Hotelier y Verificar lo vuelve a comprobar), los contadores de 21 abiertas, 5 corregidas y 26 en total, filtros y un error de no volver a alojar en una reserva con un botón Verificar" caption="Los problemas que encuentran las comprobaciones programadas, agrupados por reserva. Lo que una persona marca como resuelto se mantiene hasta que algo cambia." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. Todas las comprobaciones están en la [página de comprobaciones automáticas](/tools/bot/automated-checks).

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Booking.com, Expedia, SiteMinder ni Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tus propios accesos a las extranets.
::

Guías relacionadas: [la lista diaria de recepción](/blog/hotel-front-desk-checklist-automation), [el calendario de reservas de Little Hotelier](/blog/little-hotelier-reservation-calendar), [enlaces de pago en Little Hotelier](/blog/little-hotelier-payment-links).

## Resumen

- Una reserva de una OTA que falta suele deberse a una tarifa sin mapear o desactivada, a un código de alojamiento equivocado o a una entrega fallida.
- Mira **My apps > Channel Manager > Reservations**: una reserva **FAILED** se puede reenviar con **Resend PMS message**; **sin estado** significa que la tarifa no está mapeada.
- Protege primero la habitación: añade la reserva a mano en **Front Desk > Calendar** y después corrige la causa.
- Hotelier Tools compara Expedia con Little Hotelier cada 15 minutos y avisa por email una vez de cada reserva que falta, además de las incidencias de reservas de Booking.com. Su comprobación reserva por reserva de Booking.com aún no está terminada.
