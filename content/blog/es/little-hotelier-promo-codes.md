---
title: "Códigos promocionales en Little Hotelier: cómo crearlos, compartirlos y controlarlos en tu motor de reservas"
seoTitle: "Códigos promocionales en Little Hotelier: crear y controlar"
description: "Crea un código promocional en el motor de reservas de Little Hotelier, compártelo como enlace, fija fechas y estancia mínima y evita bajar de tus precios."
date: 2026-10-26
category: pricing
tags: [códigos promocionales, motor de reservas, reservas directas, little hotelier, descuentos, precios]
keywords: [código promocional little hotelier, cómo crear un código promocional en little hotelier, código de descuento motor de reservas hotel, código promocional reserva directa hotel, código promocional estancia mínima hotel, enlace con código promocional motor de reservas, thebookingbutton código promocional, cupón descuento web hotel]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/es/promo-codes-list.webp
coverAlt: "Página Códigos promocionales de Hotelier Tools: botones Leer del motor de reservas y Nuevo código y, debajo, los códigos DEMOSOL y banco, ambos Activo, cada uno con su resumen en lenguaje claro, un precio de ejemplo para una cama en dormitorio compartido el 6 de noviembre, las reservas de los últimos 90 días, los avisos y los botones Editar, Pausar y borrar"
faq:
  - q: "¿Dónde están los códigos promocionales en Little Hotelier?"
    a: "En los ajustes del motor de reservas, no en la recepción. En la versión actual, ve a Direct booking > Promotion codes. En la versión clásica, ve a My Apps > Direct booking, abre la pestaña Setup y haz clic en el recuadro Promotion Codes."
  - q: "¿Puede un código promocional de Little Hotelier exigir una estancia mínima?"
    a: "En el propio código, no. Crea una tarifa de habitación con la estancia mínima que quieras, vincula el código a ella y, en la pestaña Promotions de esa tarifa, elige mostrarla solo cuando se introduzca un código promocional vinculado."
  - q: "¿Puedo limitar cuántas veces se usa un código promocional?"
    a: "No. Los códigos promocionales de Little Hotelier no tienen límite de usos ni se pueden reservar a huéspedes nuevos. Usa las fechas de reserva para que cada código tenga un final, y cambia de código con regularidad."
  - q: "¿Funcionan los códigos promocionales de Little Hotelier en Booking.com o Expedia?"
    a: "No. Solo funcionan en tu propio motor de reservas. Cada canal tiene sus propias promociones, que se configuran en su extranet. Un código que publicas a lo grande puede contar como precio público a efectos de paridad, así que revisa tus contratos con los canales."
  - q: "¿Cómo pauso un código promocional sin borrarlo?"
    a: "El motor de reservas no tiene un interruptor para activar o desactivar un código. Cambia sus fechas de reserva para que terminen ayer. Pausar en Hotelier Tools hace exactamente eso y guarda las fechas anteriores, así que Reactivar deja el código como estaba."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y solo cambia un código cuando una persona pulsa el botón."
---

Los códigos promocionales de Little Hotelier están en su motor de reservas. Ve a **Direct booking** > **Promotion codes** (versión clásica: **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), crea un código, fija un descuento, las fechas de reserva y las fechas de estancia, y vincula las tarifas de habitación a las que se aplica. Compártelo como enlace con `?promotion_code=YOURCODE`. Hotelier Tools añade una página que explica cada código en una frase y avisa cuando un código baja de tu precio mínimo o se acumula con otros descuentos. Puedes pausar un código y reactivarlo más tarde.

## ¿Dónde están los códigos promocionales en Little Hotelier?

Los códigos promocionales pertenecen al motor de reservas de tu web (direct-book.com), basado en TheBookingButton. No cambian tus tarifas en la recepción ni en ningún canal.

- **Versión actual:** **Direct booking** > **Promotion codes** ([centro de ayuda](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine), en inglés).
- **Versión clásica:** **My Apps** > **Direct booking**, la pestaña **Setup** y después el recuadro **Promotion Codes** ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes), en inglés).

Las etiquetas de abajo son las del centro de ayuda de Little Hotelier a fecha de noviembre de 2026.

## Cómo crear un código promocional

1. Abre **Promotion Codes** y haz clic en **Create**.
2. En **Code**, escribe lo que introducirán los huéspedes. Sin espacios, y cada código debe ser único.
3. En **Description**, escribe el texto que ven los huéspedes en el motor de reservas.
4. En **Default rate discount**, elige porcentaje o importe y escríbelo.
5. Fija **Available From/To**: las fechas en las que los huéspedes pueden **reservar** con el código.
6. Fija **Applicable From/To**: las noches en las que los huéspedes pueden **alojarse** con el código.
7. Si quieres, marca **Hide Promo Code in reservation summary**.
8. Selecciona las tarifas de habitación a las que se aplica el código. Una tarifa puede tener su propio descuento, que sustituye al predeterminado.
9. Haz clic en **Save**.

Fuente: [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Hay dos ajustes que sorprenden. Por defecto, un código válido **oculta todas tus tarifas públicas**, así que el huésped solo ve las tarifas vinculadas al código. Para cambiarlo, desmarca **Hide public rates when a Promo Code is applied** en **Setup** > **Properties** > **Customisation**. Y el campo **Add Promo Code** siempre está visible en el motor de reservas.

## Cómo compartir un código promocional como enlace

Los huéspedes se olvidan de escribir los códigos. Envía un enlace que aplique el código por ellos. En **Promotion codes**, despliega el código y haz clic en **Promotion code link** para copiarlo ([centro de ayuda](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). El formato es:

- Europa, Oriente Medio, África y América: `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Asia-Pacífico: `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

Un **código del 0 %** también es útil: vincúlalo a las tarifas de un tipo de habitación y el enlace mostrará solo ese tipo de habitación (con las tarifas públicas ocultas).

## Estancia mínima, límite de usos y huéspedes nuevos

Las respuestas de Little Hotelier, a fecha de noviembre de 2026 ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)):

- **Estancia mínima:** los códigos no tienen. Crea una tarifa de habitación con, por ejemplo, un mínimo de dos noches, vincula el código a ella y, en la pestaña **Promotions** de la tarifa, elige «Show only when a linked promotional code is entered».
- **Límite de usos:** no hay tope de veces que se pueda usar un código. Ponle una fecha de fin y cambia de código con regularidad.
- **Huéspedes nuevos:** el motor de reservas no sabe si un huésped ya ha reservado antes.
- **Ofertas públicas:** para un descuento que vea todo el mundo, Little Hotelier recomienda los descuentos dinámicos o un multiplicador de tarifa para Direct booking en lugar de un código.

## Buenas prácticas con los códigos promocionales

- **Ponles siempre un final.** Un código sin fechas de reserva vive para siempre, y los códigos viejos acaban en webs de cupones.
- **Separa las fechas de reserva de las de estancia.** «Reserva esta semana para alojarte en enero» son dos rangos, no uno.
- **Conoce tu suelo.** Un código del 15 % sobre una tarifa ya rebajada puede quedar por debajo de lo que una habitación tiene que ganar. Mira la noche más baja, no la media.
- **Vigila la acumulación.** El código se descuenta de la tarifa que muestra el motor de reservas. Si tus tarifas web ya están por debajo de las de recepción, el huésped se lleva los dos descuentos.
- **Un código, un objetivo.** Un código por campaña o por colaborador te dice cuál ha traído reservas.
- **Cuidado con la paridad.** Un código que cualquiera puede encontrar funciona como un precio público. Los grupos cerrados (newsletter, clientes que repiten, una empresa local) son más seguros. Revisa tus contratos con los canales.
- **Los códigos son solo para reserva directa.** No llegan a Booking.com ni a Expedia, que tienen sus propias promociones.

## La forma más rápida: cada código explicado, revisado y pausado en Hotelier Tools

Hotelier Tools lee los códigos de tu motor de reservas y los muestra con palabras claras en **Códigos promocionales** (`/pricing/promo-codes`), dentro de Precios. La página es nueva (octubre de 2026). Leer los códigos es la parte probada; crearlos y editarlos desde Hotelier Tools todavía no se ha comprobado con un motor de reservas real, y por eso cada cambio se vuelve a leer y se muestra como confirmado o no.

1. Abre **Códigos promocionales** y pulsa **Leer del motor de reservas**. Abrir la página nunca lee nada; lo hace el botón.
2. Cada código muestra su estado (**Activo**, **Programado**, **En pausa**, **Caducado** o **No hace nada**), un resumen de una línea como «10% de descuento sobre el precio de la habitación (no sobre el suplemento por huésped extra) en 8 tarifas. Cualquier fecha de reserva. Cualquier fecha de estancia.», un precio de ejemplo y cuántas reservas lo usaron en los últimos 90 días.
3. Lee los avisos de debajo de cada código y usa **Editar**, **Pausar**, **Reactivar** o el botón de borrar.

::screenshot{src="/images/blog/demo/es/promo-codes-list.webp" alt="Página Códigos promocionales: el código DEMOSOL, Activo y Usado en presupuestos y enlaces, un 10 % de descuento en 8 tarifas con un precio de ejemplo de 27,09 a 24,38 euros y 14 reservas en los últimos 90 días, con tres avisos debajo; después el código banco, Activo, un 15 % de descuento en 1 tarifa que no se ve sin código" caption="Cada código en una frase, con lo que hace a un precio real y los problemas que causa." path="/pricing/promo-codes"}
::

### Crea o edita un código con vista previa

Pulsa **Nuevo código**. Rellena **Código** (de 3 a 40 letras, cifras, - o _; las mayúsculas dan igual), **Descuento** (**% sobre la tarifa**, hasta el 90 %, o **Importe sobre la tarifa**), **Descripción**, **Fechas de reserva**, **Fechas de estancia** y **Tarifas a las que se aplica** (**Seleccionar todas las tarifas públicas** marca las habituales). **Lo que hará este código** muestra el resultado antes de que pulses **Crear en TheBookingButton**.

::screenshot{src="/images/blog/demo/es/promo-codes-new-code.webp" alt="Diálogo Nuevo código promocional: código AUTUMN26, descuento 10 con % sobre la tarifa, descripción vacía, Mostrar el descuento en el resumen de la reserva sin marcar, Fechas de reserva y Fechas de estancia vacías, Tarifas a las que se aplica con Tarifa Flexible y No reembolsable de Doble Estándar marcadas, y Lo que hará este código: 10% de descuento sobre el precio de la habitación (no sobre el suplemento por huésped extra) en 2 tarifas. Cualquier fecha de reserva. Cualquier fecha de estancia." caption="Las fechas de reserva y las de estancia van por separado, y la vista previa dice lo que hará el código antes de guardar nada." path="/pricing/promo-codes"}
::

Cada cambio se comprueba así:

- El código se lee de nuevo justo antes del cambio. Si alguien lo cambió mientras tanto en el motor de reservas, se te pide que lo vuelvas a leer.
- El cambio se envía una vez y después se vuelve a leer. El resultado es **Confirmado**, **Difiere** o **Desconocido**. Un resultado desconocido nunca se reenvía solo: pulsa **Leer de nuevo** en **Cambios recientes**.
- Crear, cambiar, pausar y borrar requieren el permiso **Publicar precios**, porque un código llega a los huéspedes al instante. Para borrar, te pide que escribas el código.

### Los avisos que te ahorran dinero

| Aviso | Qué significa |
|---|---|
| Por debajo de tu precio mínimo | Con el descuento, algunas noches de los próximos 90 días quedan por debajo de tu suelo |
| Se acumula con tu descuento aplicado | Tus tarifas ya se escriben por debajo de la recomendación; con el código, un huésped de la web paga con los dos descuentos sumados |
| Oculta tus tarifas públicas | El código desbloquea tarifas solo con código, y el huésped que lo usa solo ve esas |
| No hace nada | No hay ninguna tarifa vinculada: el código se acepta y el huésped ve el precio normal |
| Mismo código, otras mayúsculas | El motor de reservas no distingue `SUMMER` de `summer` |
| Código público | Tus presupuestos y enlaces de reserva lo usan, así que la paridad de tarifas de Booking.com puede tenerlo en cuenta |
| Cambiado fuera de esta aplicación | Alguien lo editó en TheBookingButton desde la última lectura |

Si la pantalla de promociones propia de Little Hotelier (un sistema aparte) tiene promociones, la página también te avisa de que tu web no las usa.

### Pausar y reactivar

El motor de reservas no tiene un interruptor para activar o desactivar un código. **Pausar** cambia las fechas de reserva del código para que terminen ayer y guarda las fechas anteriores. El descuento, las tarifas y las fechas de estancia no cambian, y las reservas ya hechas mantienen su precio. **Reactivar** recupera las fechas guardadas. Si un código desbloquea tarifas que solo se pueden reservar con código, el diálogo de pausa avisa de que esas tarifas dejarán de poder reservarse.

### Lectura diaria y preguntas con palabras normales

Una tarea programada, **Leer los códigos cada día** (a las 06:40 por defecto, creada automáticamente desde noviembre de 2026), mantiene al día la página y los asistentes. Solo lee.

En el chat de IA (beta), pregunta «¿Qué códigos están activos?» o «¿Qué pasaría si WEB diera un 18 %?»: el asistente responde a partir de los códigos y muestra una vista previa del cambio sin escribirlo. Para cambiar un código, muestra una tarjeta de aprobación, y no pasa nada hasta que la apruebas. Los desarrolladores tienen las mismas acciones en la API REST (`/api/v1/pricing/promo-codes`) y por MCP. Los agentes de navegador que usan WebMCP solo pueden proponer: abren el formulario relleno y pulsa el botón una persona.

### Mira a qué precio vende de verdad tu web

Hay dos sitios más que usan tu código:

- **Ajustes de precios** > **Canales y descuentos** (`/pricing/settings/channels`), tarjeta **A qué precio vende tu web de verdad**: **Comprobar la web** lee tu página de reservas para las próximas 30 noches, con y sin tu código, y lo compara con la tarifa de recepción y con lo que paga un huésped de Booking.com. Recomienda un descuento web general.
- **Nueva reserva** (`/reservations/new`) muestra lo que cuesta la misma estancia en tu web, en tu web con el código y una estimación para Booking.com, junto a las tarifas con las que reservas.

Elige el código que usan tus presupuestos y enlaces de reserva en **Código promocional de reserva directa**, en la ficha del alojamiento.

::demo-cta{path="/pricing/promo-codes"}
::

**Todavía no está hecho:** un email cuando un código cambia fuera de Hotelier Tools (la página lo muestra en la siguiente lectura), ni los límites que el propio motor de reservas no tiene, como un tope de usos.

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. El resto del motor de precios está en la [página de precios dinámicos](/tools/bot/dynamic-pricing).

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel, y los códigos siguen en tu propio motor de reservas.
::

Guías relacionadas: [precios dinámicos para hoteles pequeños con Little Hotelier](/blog/dynamic-pricing-little-hotelier), [la comisión de Booking.com](/blog/booking-com-commission), [CTA, CTD, estancia mínima y cierre de ventas](/blog/little-hotelier-cta-ctd-stop-sell).

## Resumen

- Los códigos promocionales de Little Hotelier son ajustes del motor de reservas: **Direct booking** > **Promotion codes**.
- Cada código tiene un descuento, fechas de reserva, fechas de estancia y tarifas vinculadas. Por defecto oculta tus tarifas públicas.
- Comparte los códigos como enlaces con `?promotion_code=`. Para una estancia mínima, vincula el código a una tarifa solo con código que tenga ese mínimo.
- Ponle un final a cada código, compruébalo contra tu suelo y recuerda que los códigos no llegan a las OTA.
- Hotelier Tools explica cada código en una frase, avisa de suelos, acumulaciones y paridad, y te deja pausar y reactivar un código sin perder sus ajustes.
