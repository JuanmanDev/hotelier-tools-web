---
title: "Un calendario de reservas más rápido para Little Hotelier: planning, precios y reservas nuevas"
seoTitle: "Calendario de reservas más rápido para Little Hotelier"
description: "Cómo funciona el calendario de Little Hotelier y cómo crear una reserva, más un planning con precios por tipo de habitación y una forma rápida de reservar."
date: 2026-10-24
category: operations
tags: [calendario, planning, reservas, recepción, little hotelier]
keywords: [calendario little hotelier, crear reserva little hotelier, planning de reservas little hotelier, planning de habitaciones hotel, precios en el calendario little hotelier, reserva manual little hotelier, calendario de reservas hotel pequeño, calendario little hotelier en el móvil]
feature: dashboard
demoPath: /reservations/calendar
cover: /images/blog/demo/es/reservation-calendar-prices.webp
coverAlt: "Calendario de reservas de Hotelier Tools de 14 noches desde el 4 de noviembre de 2026: los tipos de habitación Doble Estándar, Doble Superior, Individual y Familiar 4 pax, cada uno con una fila Tarifa más baja con precios por noche como 63,47 € y 74,89 €, barras de reservas con iconos de canal, huéspedes y pago, un cierre de habitación rayado en la habitación 104, un carril Sin habitación aún y la leyenda de las marcas de estado, origen y pago"
faq:
  - q: "¿Cómo creo una reserva en Little Hotelier?"
    a: "En Calendar haz clic en +Reservation, o en Reservations haz clic en Create reservation. Elige las fechas, el tipo de habitación, la tarifa, el número de habitación y los huéspedes, rellena el contacto principal y haz clic en Save. Las reservas manuales no envían email de confirmación: pulsa Email después de guardar."
  - q: "¿Puedo ver los precios en el calendario de Little Hotelier?"
    a: "No en el propio calendario de Little Hotelier, que muestra las reservas y el estado del pago. Las tarifas están en la tabla de inventario. El calendario de Hotelier Tools puede añadir una fila por tipo de habitación con su tarifa actual más baja cada noche, y un userscript gratuito añade los precios al calendario de Little Hotelier."
  - q: "¿Cuántos días puede mostrar el calendario de Little Hotelier?"
    a: "14 o 28 días, a elegir en un desplegable. El calendario de Hotelier Tools muestra cualquier número de noches entre 1 y 92, con accesos rápidos de 7, 14, 30, 60 y 90."
  - q: "¿Puedo mover una reserva a otra habitación desde Hotelier Tools?"
    a: "No. El calendario de Hotelier Tools solo lee. Mover una estancia, cambiar sus fechas o cancelarla se hace en Little Hotelier, que abres desde el enlace Abrir en Little Hotelier de la reserva."
  - q: "¿Una reserva creada en Hotelier Tools envía un email al huésped?"
    a: "No. Crea la reserva en Little Hotelier sin ningún pago registrado y sin enviar ningún email, igual que una reserva manual allí. Envía la confirmación desde Little Hotelier y registra cualquier pago en la reserva."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Lee y crea reservas con el acceso a Little Hotelier de tu propio hotel."
---

El calendario de Little Hotelier muestra 14 o 28 días de reservas, y desde él creas una reserva con **+Reservation**. No muestra precios ni te deja dar forma al planning. Hotelier Tools añade un segundo calendario, leído de Little Hotelier, con 1 a 92 noches, la tarifa más baja por tipo de habitación cada noche, iconos de canal y de pago, y vistas guardadas. También tiene una página **Nueva reserva** que calcula el precio de la estancia, comprueba la disponibilidad y los duplicados, y después la reserva en Little Hotelier.

Las funciones de Little Hotelier de abajo se han contrastado con sus centros de ayuda a fecha de noviembre de 2026.

## ¿Cómo funciona el calendario de Little Hotelier?

En la plataforma nueva ([Getting started with Calendar](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar), en inglés):

- **Duración de la vista:** un desplegable cambia entre **14 o 28 días**. **View today** vuelve a hoy, y un selector de fecha salta hacia delante.
- **Moverse:** en la vista de 14 días, `<` avanza un día, `<<` siete y `<<<` catorce. En la vista de 28 días, `<<<` avanza 28.
- **Colores:** naranja o amarillo confirmada, verde con check-in, gris con check-out, azul claro sin asignar, rojo oscuro cierre de habitación, y una barra desvaída para un pago incompleto. Una franja en el borde izquierdo indica pagada (verde) o sin pagar (rojo).
- **Arrastrar y soltar:** arrastra una reserva a otra habitación, otro tipo de habitación u otras fechas, o arrastra su extremo para alargarla. Las reservas de canales no se pueden alargar así.
- **Fila Unallocated:** reservas confirmadas sin habitación física. Arrástralas a una habitación libre.

La versión clásica funciona igual ([Overview of the front desk calendar](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

## Cómo crear una reserva en Little Hotelier

Las reservas manuales son para los clientes que llegan sin reserva, las peticiones por teléfono y por email y las agencias de viajes ([Create a manual reservation](https://help-platform.littlehotelier.com/en/articles/13933574-create-a-manual-reservation-in-little-hotelier)):

1. Actualiza la página y haz clic en **View Today**, para ver la disponibilidad actual.
2. En **Calendar**, haz clic en **+Reservation** (o arrastra sobre las noches de una habitación). En **Reservations**, haz clic en **Create reservation**.
3. Elige las fechas de entrada y salida, un **Room type** y un **Room rate**. Para un precio especial, deja la tarifa vacía y escribe el total en el campo **Room**.
4. Elige un **Room number**. Si lo dejas vacío, la reserva espera en la fila **Unallocated**.
5. Escribe **Adults**, **Children** e **Infants**, y un **Discount** si lo hay.
6. Rellena el **Primary contact** y los **Guest comments** que haya, y haz clic en **Save**.

Tres cosas que se pasan por alto:

- **No se envía email de confirmación** en una reserva manual. Pulsa **Email** después de guardar.
- **Más habitaciones:** **+Add another room** las pone en una misma factura. Comparten las mismas fechas.
- **Pagos:** **Record payment** para efectivo o un TPV externo, o la pestaña **Payments** para cobrar una tarjeta.

Las cuentas clásicas siguen [Create a reservation](https://helpcentre.littlehotelier.com/en/articles/8673932-create-a-reservation).

## ¿Para qué un segundo calendario?

El calendario de Little Hotelier es donde mueves las reservas. Un segundo calendario ayuda cuando sobre todo miras: los precios junto a las habitaciones cuando llama un huésped, más de 28 días a la vez, tu propia disposición y un planning que se lee en el móvil.

Si solo necesitas los precios dentro de Little Hotelier, el userscript gratuito [Prices Display](/tools/ui/prices-display) los añade a su calendario.

## La forma más rápida: la recepción de reservas de Hotelier Tools

La recepción de reservas son tres páginas dentro de **Reservas**: **Calendario** (`/reservations/calendar`), **Reservas** (`/reservations`) y la página de cada reserva (`/reservations/:id`). Cada una lee Little Hotelier una vez y lo guarda un par de minutos, así que moverse entre ellas es rápido. **Actualizar** vuelve a leer.

### El calendario (planning)

1. Abre **Reservas > Calendario**. Empieza una noche antes de hoy, con 14 noches de ancho, para que las salidas de hoy estén en pantalla.
2. Avanza una noche, una semana o la ventana entera con las flechas, o pulsa **Hoy**. Escribe junto a la fecha cualquier número de noches entre 1 y 92.
3. Haz clic en una barra para abrir la reserva en un panel lateral junto al planning. El planning se queda donde estaba.

Cada tipo de habitación es una banda con sus habitaciones ocupadas noche a noche. Las reservas sin habitación van en un carril **Sin habitación aún**, los cierres aparecen rayados y una habitación vendida dos veces para la misma noche se marca con un círculo rojo. Las filas sobre el planning pueden contar por noche las habitaciones **Ocupadas**, las **Llegadas** y las **Salidas**.

::screenshot{src="/images/blog/demo/es/reservation-calendar-prices.webp" alt="Calendario de reservas desde el 4 de noviembre de 2026, 14 noches: recuentos de Ocupadas por noche, bandas de tipos de habitación con una fila Tarifa más baja (de 63,47 € a 128,88 €, algunas tachadas, una marca de cierre de ventas), barras como Larsen, Ingrid con check-in hecho, un icono de web y una marca de pago parcial, Marino, Onur confirmada desde Hostelworld, un cierre rayado en la habitación 104 y la leyenda de colores de estado, origen, pago, huéspedes y precios" caption="La tarifa actual más baja de cada tipo de habitación va justo encima de sus habitaciones, noche a noche." path="/reservations/calendar"}
::

### Ajustes para hacerlo tuyo

Abre **Ajustes** en el calendario:

| Ajuste | Opciones |
|---|---|
| **Noches mostradas** | 7, 14, 30, 60 o 90, o **Cualquier número de noches** (de 1 a 92) |
| **Ancho mínimo de la noche** | **Estrecho**, **Medio**, **Ancho** o cualquier ancho en píxeles. Si caben todas las noches, se ensanchan hasta llenar la pantalla |
| **Tipo de habitación tras el número** | **Nombre completo**, **Abreviado** u **Oculto** |
| **Orden de las habitaciones** | **Como en Little Hotelier**, **Por número de habitación**, **Por tipo de habitación y luego número** o **Mi propio orden** (arrastra las habitaciones) |
| **Qué muestra una reserva** | Nombre del huésped, referencia, canal, huéspedes, saldo pendiente, noches |
| **Colorear las reservas por** | **Estado**, **Canal** o **Pago** |
| **Iconos en una reserva** | **De dónde viene** (Booking.com, Expedia, Airbnb, Hostelworld, tu web, la recepción), **Pagada o no** y **Huéspedes** como un solo icono o con adultos, niños y bebés por separado |
| **Mostrar precios** | La tarifa actual más baja de cada tipo de habitación por noche |

**Mostrar precios** lee el inventario de Little Hotelier, una lectura por cada dos semanas mostradas, y toma la tarifa más baja de todos los planes de tarifa, incluidos los no reembolsables. Una noche sin disponibilidad muestra el precio tachado y un cierre de ventas muestra una marca de cerrado. Se ofrece a quien puede editar reservas, y está desactivado hasta que lo activas.

Cuando el planning te guste, abre **Vistas guardadas** y elige **Guardar como vista nueva…**. Ponle nombre («Recepción»), y marca **Compartir con el equipo** o **Abrir por defecto**. Un enlace también conserva los ajustes: `/reservations/calendar?origin=1&paid=1&guests=split&prices=1&color=payment`.

### En el móvil

En el móvil, el calendario se abre como **Lista de días**: las llegadas, las salidas y las habitaciones cerradas de cada día, con la tarifa más baja de cada tipo de habitación. El selector **Vista** de arriba cambia a **Calendario completo**, el planning entero con desplazamiento lateral, y tu elección se recuerda en ese navegador. Los pasos, los ajustes y la leyenda pasan al menú **Más**.

::screenshot{src="/images/blog/demo/es/reservation-calendar-mobile.webp" alt="Calendario en un móvil como lista de días desde el miércoles 4 de noviembre: el jueves 5 de noviembre marcado como Hoy con 2 habitaciones ocupadas, la tarifa más baja de cada tipo de habitación (Doble Estándar 63,47 €, Doble Superior 84,13 €, Individual 46,49 €, Familiar 4 pax 109,22 €) y dos salidas, Okafor, Camila de la habitación 105 y Alvarez, Greta de la habitación 106, las dos con Check-out hecho; el viernes 6 de noviembre con sus tarifas y dos llegadas" caption="En el móvil, el calendario se convierte en una lista de días. Cambia Vista a Calendario completo para ver el planning entero." path="/reservations/calendar" mobile}
::

### La tabla de reservas

**Reservas** (`/reservations`) lista todas las reservas de un periodo: **Hoy**, **Próximas 7 noches**, **Próximas 30 noches**, **Este mes** o **Elegir fechas**, por **Estancia**, **Llegada**, **Salida** o **Fecha de reserva**. Filtra por estado, canal y tipo de habitación, marca **Debe dinero** o **Sin habitación**, elige entre 30 columnas y usa **Exportar CSV** para lo que hay en pantalla.

### Todo sobre una reserva

Abre una reserva en el panel lateral, o en su página completa:

- **Resumen:** estancia, habitaciones, huéspedes, canal, **Total**, **Recibido**, **Pendiente** y los indicadores de Little Hotelier, como **Confirmación enviada** o **Tarjeta guardada**.
- **Secciones:** Huéspedes, Habitaciones y tarifas (la tarifa de cada noche), Extras e impuestos, Pagos, Facturas, Notas, Canal y conversaciones, Check-in, Historial y **Todos los demás campos**. Muéstralas en una sola página o como pestañas.
- **Acciones:** **Confirmar**, **Hacer check-in**, **Hacer check-out** (y deshacer), editar las notas internas y editar los datos de facturación y la dirección del huésped principal (empresa, NIF, tipo de documento, dirección). Cada acción se confirma primero y se envía una sola vez.
- **Pagos:** reembolsos, enlaces de pago y facturas desde la misma página.

::screenshot{src="/images/blog/demo/es/reservation-detail.webp" alt="Página de la reserva de Emma Berg, Confirmada, del sábado 7 al jueves 12 de noviembre de 2026, 5 noches, BBN-DEMO100408: botones Hacer check-in y Abrir en Little Hotelier, pestañas de secciones desde Resumen hasta Todos los demás campos (43), tarjetas de Estancia, Habitaciones 201 Doble Superior, Huéspedes 1 adulto y Canal Extranet, Total 489,69 €, Recibido 146,91 € y Pendiente 342,78 €, indicadores como Pago: pago parcial y Confirmación enviada, y el contacto A nombre de" caption="Todos los campos que Little Hotelier guarda de una reserva, en una página, con el check-in a un clic." path="/reservations"}
::

En una reserva de tu propia web, la página puede mostrar la **Reserva original** junto a la versión actual de Little Hotelier. Pulsa **Leer la reserva original** y lista por qué difieren: la estancia se movió a otras fechas, la habitación se cobra de otra forma, se perdió el descuento de reserva directa o el depósito no se recalculó tras un cambio. Eso explica un saldo que el huésped dice que no debe.

### Crea una reserva desde Hotelier Tools

**Nueva reserva** (`/reservations/new`) es la vía rápida para una reserva por teléfono o de alguien que llega sin reservar:

1. **Estancia.** Elige la llegada y la salida en un calendario cuyos días muestran las habitaciones que quedan, el precio más bajo, los cierres de ventas, los cierres a la llegada y las estancias mínimas.
2. **Habitaciones.** La tabla de tarifas se abre con todos los tipos de habitación y planes de tarifa con el precio de la estancia, noche a noche. Haz clic en un precio para elegir esa habitación y esa tarifa, o en **Tarifa personalizada** para escribir un precio por noche. Los límites de huéspedes de cada habitación en Little Hotelier limitan los campos **Adultos**, **Niños** y **Bebés**, y los huéspedes por encima de las plazas incluidas muestran el suplemento por persona adicional.
3. **Compara.** Debajo, **Para comparar** muestra la misma estancia como **Venta directa** en tu web (con tu código promocional), en **Booking.com** con un descuento Genius típico, lo que sugieren las recomendaciones de precio y **El mercado estas noches** con alojamientos comparables.
4. **Huésped y dirección.** Elige primero el país. Un código postal rellena la localidad y la provincia, y una localidad sugiere sus códigos postales.
5. Pulsa **Comprobar precio y disponibilidad**. Calcula el precio de cada noche, confirma que quedan habitaciones y busca si el mismo huésped ya tiene una reserva en esas fechas. No se escribe nada.
6. Pulsa **Crear reserva**. Solo aparece tras una comprobación del formulario exactamente como está en pantalla.

::screenshot{src="/images/blog/demo/es/reservation-new-rates.webp" alt="Nueva reserva del jueves 12 al sábado 14 de noviembre con la tabla de tarifas y la comparación abiertas para 2 huéspedes: Doble Estándar con 3 habitaciones libres, Tarifa Flexible seleccionada a 153,73 € la estancia (70,52 € y 83,21 € por noche) y No reembolsable a 138,36 €, Doble Superior a 203,79 € y 183,41 €, Individual marcada como no apta para este grupo y una fila Tarifa personalizada bajo cada tipo de habitación" caption="Todos los tipos de habitación y planes de tarifa con el precio de la estancia. Haz clic en un precio para elegirlo." path="/reservations/new"}
::

::screenshot{src="/images/blog/demo/es/reservation-new-compare.webp" alt="La franja Para comparar de la tabla de tarifas: Suite Ático como Venta directa con el código DEMOSOL −10 % a 329,81 € en lugar de 366,46 €, Booking.com con −10 % Genius sin leer, Recomendado a 325,09 € y después El mercado estas noches con seis alojamientos, desde Albergue Prueba Playa a 117,02 € hasta Hotel Muestra Rambla a 211,56 €, con Hotel Demo Sol (tú) a 176,79 €" caption="La misma estancia en tu web, en Booking.com y en los alojamientos cercanos, antes de dar un precio." path="/reservations/new"}
::

Una noche completa o un probable duplicado se rechazan con su propia casilla (**Reservar igualmente…** o **Es una segunda estancia: reservar igualmente**): márcala solo cuando lo tengas claro. La reserva se envía una sola vez. Si la respuesta se pierde, la página no vuelve a ofrecer **Crear reserva** hasta una nueva comprobación, que encontrará la reserva como duplicado si llegó a crearse.

Una vez creada, la reserva aparece en el calendario y deja de estar a la venta en todos los canales.

::demo-cta{path="/reservations/calendar"}
::

### Límites, con honestidad

- **El calendario solo lee.** Mover una estancia a otra habitación, cambiar fechas, cancelar o marcar un no-show sigue haciéndose en Little Hotelier. Cada reserva tiene un enlace **Abrir en Little Hotelier**. No se pueden arrastrar las barras.
- **Nueva reserva es para una estancia sencilla.** Para un depósito, extras o una habitación concreta, usa el formulario de Little Hotelier, que la página enlaza lo primero. Hasta 30 noches y 10 habitaciones por reserva.
- **Sin pago ni email.** Una reserva creada aquí no registra ningún pago ni envía un email al huésped.
- **Las cifras de la web y de Booking.com son para comparar.** La reserva usa la tarifa que eliges.

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. Más en la [página del panel](/tools/bot/dashboard).

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Lee y crea reservas con el acceso a Little Hotelier de tu propio hotel.
::

Guías relacionadas: [listados del día para imprimir](/blog/little-hotelier-daily-lists), [códigos promocionales en Little Hotelier](/blog/little-hotelier-promo-codes), [trucos de Little Hotelier](/blog/little-hotelier-tips).

## Resumen

- **En Little Hotelier:** el calendario muestra 14 o 28 días. Crea una reserva con **+Reservation** y pulsa **Email** para enviar la confirmación.
- **Un segundo calendario** en Hotelier Tools muestra de 1 a 92 noches, la tarifa más baja por tipo de habitación, iconos de canal y de pago, y vistas guardadas para el equipo.
- **En el móvil:** una lista de días, o el planning completo.
- **Nueva reserva:** elige una tarifa con precio, compárala con tu web y con Booking.com, comprueba y crea la reserva en Little Hotelier.
- **Los cambios** de habitación, de fechas y las cancelaciones siguen haciéndose en Little Hotelier.
