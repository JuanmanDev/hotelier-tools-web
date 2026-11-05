---
title: "¿Un huésped pide fechas que aún no puedes vender? Lleva una cola de solicitudes de disponibilidad"
seoTitle: "Solicitudes de disponibilidad en hotel: no pierdas ninguna"
description: "Los huéspedes piden fechas llenas o aún sin precio y el email se pierde. Lleva un registro, o deja que una cola revise y avise cuando haya habitación."
date: 2026-11-05
category: operations
tags: [disponibilidad, lista de espera, consultas, little hotelier, solicitudes de grupo, reserva directa]
keywords: [huésped pide fechas no disponibles hotel, seguimiento solicitudes de disponibilidad hotel, registro de consultas de reserva hotel, avisar al huésped cuando haya habitación libre, tarifas sin cargar motor de reservas hotel, solicitud de grupo hotel completo, lista de espera hotel fechas futuras, little hotelier lista de espera]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/es/availability-queue-requests.webp
coverAlt: "Página Cola de disponibilidad de Hotelier Tools: el botón Añadir a la cola, la tarjeta Página pública de lista de espera marcada como abierta con su enlace, y En la cola con tres solicitudes activas: Tom Walker (email y WhatsApp, 1 habitación de cualquier tipo, 27 a 29 nov), Lena Fischer (1 Doble Superior, 18 a 21 dic) y Viajes Ejemplo (agency), que quiere 3 Doble Estándar más 1 Familiar 4 pax del 26 al 29 mar 2027"
featured: true
faq:
  - q: "¿Qué hago cuando un huésped pide fechas a las que aún no he puesto precio?"
    a: "Apunta la solicitud con las noches exactas, las habitaciones y el contacto, dile al huésped que le escribirás en cuanto se abran las fechas y revisa la lista cada vez que cargues tarifas nuevas. Una herramienta como la cola de disponibilidad de Hotelier Tools hace la revisión por ti y escribe al huésped la primera vez que las habitaciones se pueden reservar."
  - q: "¿Una solicitud de disponibilidad le guarda una habitación al huésped?"
    a: "No. No se reserva ni se bloquea nada. Cuando se liberan las habitaciones, el huésped recibe un mensaje con un enlace de reserva y la habitación es de quien reserve primero. Dilo con claridad en cada respuesta."
  - q: "¿Cómo sabe la cola que una estancia está libre de verdad?"
    a: "Lee el inventario de Little Hotelier de cada noche de la estancia y se queda con la cifra más baja. Una noche en stop sell, cerrada a la llegada el día de llegada o que falta en el inventario cuenta como cero, así que «sin datos» nunca se lee como «libre»."
  - q: "¿Y si solo se liberan algunas de las habitaciones que pidió una agencia?"
    a: "Es una coincidencia «parcial». Por defecto solo lo sabe el alojamiento, una vez, para que puedas llamar a la agencia y ofrecer lo que hay libre. La solicitud sigue en la cola hasta que estén libres todas las habitaciones."
  - q: "¿Puede un huésped recibir el mismo mensaje dos veces?"
    a: "No. Una solicitud avisa de «disponible» una sola vez y luego se cierra. Hotelier Tools tampoco deja apuntar dos veces a la misma persona para las mismas fechas, tanto si se añadió desde el panel, un asistente, la API o la página pública."
  - q: "¿Hotelier Tools forma parte de Little Hotelier?"
    a: "No. Hotelier Tools es una herramienta independiente, no afiliada a SiteMinder ni a Little Hotelier ni respaldada por ellos. Lee la disponibilidad con el acceso a Little Hotelier de tu propio hotel y nunca crea ni cambia una reserva desde la cola."
---

Cuando un huésped pide fechas que hoy no puedes vender (llenas, cerradas o aún sin precio), apunta la solicitud con las noches exactas, las habitaciones y el contacto, y mira esa lista cada vez que algo cambie. La forma más rápida es una cola que revise Little Hotelier por ti: la **Cola de disponibilidad** de Hotelier Tools revisa cada solicitud según un horario y envía al huésped un solo mensaje, con un enlace de reserva, la primera vez que se pueden reservar todas las noches que pidió.

## ¿Por qué se pierden las solicitudes de disponibilidad?

Porque la pregunta está en un sitio y la respuesta aparece en otro, semanas después. Los casos habituales:

- **El email o el WhatsApp queda enterrado.** «¿Tenéis una doble para la primera semana de agosto?» llega en marzo. Cuando se liberan habitaciones, el mensaje está 400 emails más abajo y nadie recuerda quién preguntó.
- **Las fechas aún no tienen tarifas.** No has cargado los precios del próximo verano, así que el motor de reservas no muestra nada y el huésped te escribe a ti. Le dices «ya te avisaremos» y luego cargas las tarifas una tarde con mucho lío.
- **Las fechas están agotadas.** Una cancelación libera una habitación el martes a las 10:00. El huésped que preguntó en enero no se entera, y una OTA la vuelve a vender.
- **Una agencia quiere varias habitaciones.** Tres dobles y una familiar para el fin de semana de Semana Santa. Tienes dos dobles. ¿Eso es un no o una llamada?
- **Parte de la solicitud se vuelve posible.** Se liberan dos de las tres noches, o una de las dos habitaciones. Nadie revisa a mano cada noche de cada solicitud.

Cada uno de estos casos es una reserva directa que ya tenías en tu bandeja de entrada.

## ¿Cómo se llevan a mano las solicitudes de disponibilidad?

Un registro sencillo funciona si alguien lo mantiene. Una fila por solicitud:

| Qué apuntar | Por qué |
|---|---|
| Fecha de la consulta y cómo llegó (email, WhatsApp, teléfono) | Para encontrar el mensaje original |
| Nombre, email y teléfono con prefijo del país | Para responder por el canal que usó |
| Primera noche y día de salida | Una estancia necesita todas las noches, no solo la primera |
| Habitaciones y tipos, por tipo en los grupos | «3 dobles + 1 familiar» no es «4 habitaciones» |
| Por qué no pudiste venderla | Llena, cerrada o sin tarifas: cada motivo te dice cuándo volver a mirar |
| Estado y fecha | Esperando, ofrecida, reservada, descartada |

**Cuándo mirar:**

- **Cada vez que cargues o abras tarifas.** En Little Hotelier pones tarifas y cierras o abres fechas en **Front Desk > Inventory**, una a una o con **Bulk Update** ([centro de ayuda de Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), en noviembre de 2026). Filtra el registro por las fechas que acabas de abrir.
- **Cada vez que llegue una cancelación** de fechas que están en el registro.
- **Una vez a la semana**, para cerrar las solicitudes cuyas fechas ya pasaron.

**Cómo responder:** manda al huésped un enlace de reserva directa para sus fechas exactas, dile claramente que no se guarda nada y pon un plazo si se lo ofreces a varias personas. Si trabajas con Gmail, una etiqueta como «Solicitudes de disponibilidad» mantiene juntos los emails originales ([Ayuda de Gmail](https://support.google.com/mail/answer/118708)).

El punto débil siguen siendo las personas: alguien tiene que comparar cada noche de cada fila con el inventario, y acordarse de hacerlo.

## La forma rápida: la cola de disponibilidad de Hotelier Tools

La **Cola de disponibilidad** (`/availability-watch`, beta; en el menú se llama **Lista de espera**) lleva la lista y hace las comprobaciones. Añades una estancia una vez. Una tarea programada lee Little Hotelier para toda la cola y, cuando las habitaciones se pueden reservar en todas las noches, el huésped y/o tú lo sabéis por email o WhatsApp. No se reserva ni se retiene nada, y el mensaje lo dice.

1. Abre **Lista de espera** y rellena **Añadir una estancia a vigilar**: las noches, las **Habitaciones necesarias** y los **Tipos de habitación**. Para una agencia, marca **Cantidades distintas por tipo de habitación**.
2. En **Avisar al huésped** y **Avisar al alojamiento**, elige los canales y cuándo se avisa a cada uno.
3. Haz clic en **Añadir a la cola**.
4. Mira la tarjeta **Revisiones de la cola**. Las cuentas con acceso a Little Hotelier suelen tener ya esta tarea, cada noche a la 01:00. Si pone **Sin configurar**, pulsa **Revisar cada noche a la 01:00**, o **Elegir** para otro horario (como mucho, cada 20 minutos).

El paso a paso para fechas agotadas y cancelaciones está en la guía complementaria, [cómo llevar una lista de espera para fechas agotadas](/blog/hotel-waitlist-sold-out-dates). Esta guía explica cómo decide la cola y las nuevas formas en que entran las solicitudes.

::screenshot{src="/images/blog/demo/es/availability-queue-requests.webp" alt="Página Cola de disponibilidad: el botón Añadir a la cola, la tarjeta Página pública de lista de espera marcada como abierta con su dirección, y En la cola con tres entradas activas: Tom Walker por email y WhatsApp para 1 habitación de cualquier tipo, del 27 al 29 nov 2026; Lena Fischer para 1 Doble Superior, del 18 al 21 dic 2026; y Viajes Ejemplo (agency) para 3 Doble Estándar más 1 Familiar 4 pax, del 26 al 29 mar 2027, todas marcadas Todavía sin revisar" caption="Una sola lista para todas las solicitudes: un huésped, una consulta por WhatsApp y un grupo de agencia con meses de antelación." path="/availability-watch"}
::

### ¿Cómo decide la cola que una estancia está libre?

- **Manda la noche con menos habitaciones.** Un tipo de habitación con cuatro libres el viernes y ninguna el sábado no puede vender una estancia de viernes a domingo. La cola toma la cifra más baja de todas las noches, que es lo que de verdad puedes vender.
- **Cerrada significa no reservable.** Una noche en stop sell (**Close Channels** en Little Hotelier), cerrada a la llegada el día de llegada o que falta en el inventario cuenta como cero, aunque el número de habitaciones diga otra cosa. «Sin datos» nunca se lee como «libre».
- **Así que también sirve para fechas sin precio.** Si mantienes cerrada la próxima temporada hasta tener las tarifas, un huésped que pide agosto espera en la cola. La primera revisión después de que cargues tarifas y abras esas fechas encuentra las habitaciones libres, y el huésped se entera sin que tú busques nada.
- **Una revisión para toda la cola.** Cada solicitud en espera se revisa en cada ejecución, así que dos huéspedes que esperan la misma noche se enteran de la misma cancelación a la vez. Little Hotelier se lee una vez por fecha de llegada, no una vez por solicitud.
- **Avisa una sola vez.** Cuando una solicitud se anuncia como disponible, se cierra. La disponibilidad va y viene, y un huésped no debería recibir un mensaje cada 30 minutos por la misma habitación.
- **Una estancia que ya ha empezado se retira** sin enviar nada.

### Quién se entera de qué: disponible, parcial o a punto de caducar

Cada revisión termina en una de tres situaciones, y el huésped y el alojamiento se suscriben a ellas por separado:

| Situación | Etiqueta en el formulario (el panel la muestra en inglés) | A quién se avisa por defecto |
|---|---|---|
| **Disponible**: todas las habitaciones pedidas se pueden reservar en todas las noches | **Everything asked for is free** (todo lo pedido está libre) | Al huésped y al alojamiento. La solicitud se cierra. |
| **Parcial**: se liberó algo, pero menos habitaciones de las pedidas | **Some rooms came free, but not all** (se liberaron algunas habitaciones, no todas) | Solo al alojamiento. Es una llamada, no un email automático. |
| **A punto de caducar**: la estancia empieza en menos de 48 horas y no se encontró nada | **About to expire with nothing found** (a punto de caducar sin encontrar nada) | Solo al alojamiento. Tu última oportunidad de ofrecer una alternativa. |

Una coincidencia parcial que no cambia se comunica una vez, no en cada ejecución, y la solicitud sigue esperando a que estén libres todas las habitaciones. Es el caso de la agencia: «2 de las 3 dobles están libres» llega a recepción, y la agencia no recibe un email con el que no puede hacer nada.

### Email o WhatsApp, para el huésped y para ti

Al huésped se le puede avisar por email, WhatsApp o ambos, y al alojamiento por sus propios canales. Los mensajes de WhatsApp salen desde tu número conectado ([WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier)); el teléfono debe llevar el prefijo del país, y Hotelier Tools nunca se lo inventa. Deja vacío **Email del alojamiento** para usar la dirección de notificaciones de tu cuenta. El email al huésped se escribe en el idioma que elijas en **Idioma del huésped** y, en un mensaje de **disponible**, lleva un enlace de reserva directa con las fechas y el número de habitaciones ya rellenos. **Historial** (`/availability-watch/history`) guarda el mensaje exacto que envió cada solicitud.

### Solicitudes que llegan a la bandeja

Los asistentes de IA ([Chat IA](/blog/ai-assistant-hotel-front-desk), beta, y el asistente de la Bandeja, alfa) saben cuándo tu alojamiento usa la cola. Cuando un huésped pide unas fechas y el motor de reservas no encuentra nada que vender, el asistente ofrece la lista de espera en la misma respuesta en lugar de quedarse en «no hay disponibilidad». Antes comprueba si esa persona ya está esperando, por email o teléfono, y nunca la apunta dos veces para las mismas fechas. La solicitud aparece como una tarjeta que confirmas, con el huésped, la estancia, las habitaciones y a quién se avisará. Si solo se pueden reservar algunas habitaciones, ofrece esas con su precio y propone la cola para el resto. Más en [respuestas con IA a los mensajes de huéspedes](/blog/ai-replies-guest-messages).

## Deja que los huéspedes lo pidan desde tu web: la página pública de lista de espera

La **Página pública de lista de espera** (`/availability-watch/public`) permite que los huéspedes se apunten solos. Está desactivada hasta que actives **Página abierta**, y **Pedir a los huéspedes que confirmen su email (doble opt-in)** viene activado por defecto: una solicitud solo entra en la cola cuando el huésped pulsa un botón en un email de confirmación.

**Reservable ya: resérvalo, no esperes.** Cuando un huésped elige una estancia, la página consulta tu motor de reservas público (nunca Little Hotelier) para esas fechas y esas personas. Si hay habitaciones libres, muestra los precios con tu código promocional directo aplicado y un botón **Reservar ahora**, y no apunta esa estancia en la lista de espera. Si solo quedan otros tipos de habitación o menos habitaciones, los muestra y deja que el huésped se apunte para el resto. Si no se puede leer el motor, lo dice y el huésped puede apuntarse igualmente.

::screenshot{src="/images/blog/demo/es/availability-queue-bookable-now.webp" alt="Formulario público de lista de espera para el 18 al 21 dic 2026, 1 habitación para 2 adultos: un recuadro verde con Buenas noticias: puedes reservar estas fechas ya, con Dormitorio 6 camas mixto, Doble Estándar, Doble Superior y Familiar 4 pax, las habitaciones que quedan, precios tachados y totales con descuento por tarifa, la nota del código de descuento directo DEMOSOL y un botón Reservar ahora" caption="Si las fechas se pueden reservar, el huésped ve tu precio directo y reserva en lugar de esperar." path="/waitlist"}
::

Esta comprobación se desactiva en **Cuando hay habitación libre ya**, junto con el enlace **Reservar en nuestra web**. El resto de ajustes define lo que ven los huéspedes:

- **Aspecto de tu página de reservas:** pega la dirección de tu direct-book.com y pulsa **Importar** para traer sus colores, el banner, las fotos del alojamiento y las descripciones de las habitaciones. No se muestra nada hasta que marques qué usar.
- **Qué muestra la página sobre tu alojamiento:** nombre, dirección, teléfono, email y web, cada uno **De la ficha del alojamiento**, con un **Valor propio para esta página** o **No mostrar**. Las direcciones de inicio de sesión nunca se muestran a los huéspedes.
- **Enlaces de mapa y más formas de contacto:** enlaces a Google Maps y Apple Maps creados a partir de tu dirección, hasta otros tres enlaces de mapa, WhatsApp y hasta tres direcciones de email más (para grupos, por ejemplo).
- **Avisos de llegada y salida:** la página avisa, nunca rechaza, cuando un huésped elige un día en el que normalmente cierras llegadas o salidas.

::screenshot{src="/images/blog/demo/es/availability-queue-public-settings.webp" alt="Ajustes de la página pública de lista de espera: la tarjeta Cuando hay habitación libre ya con Comprobar disponibilidad en el motor de reservas y Mostrar el enlace «Reservar en nuestra web» activados, y Código promocional directo DEMOSOL con su enlace de reserva; debajo, la tarjeta Aspecto de tu página de reservas con un campo para la dirección de direct-book.com y un botón Importar, Aún no se ha importado nada" caption="Primero se consulta el motor de reservas; después, toma el aspecto de tu página de reservas." path="/availability-watch/public"}
::

### Comparte un enlace prerrellenado o inserta el formulario

**Compartir e insertar** (`/availability-watch/embed`) prepara dos cosas para copiar. Un **Enlace** que rellena el formulario, con los mismos nombres de parámetro que tu página de reservas (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`), para que puedas responder a una consulta con un enlace que ya lleva las fechas del huésped. Y un **Marco para tu web**: un `<iframe>` a todo el ancho o de 480, 640 u 800 px, con vista previa. Solo esta página pública se puede insertar en otras webs; el resto del panel no.

::screenshot{src="/images/blog/demo/es/availability-queue-embed.webp" alt="Página Compartir e insertar: Qué rellena el enlace con Tus noches, Habitaciones, Adultos, Niños, Tipo de habitación (opcional), Idioma en El del huésped y Código promocional DEMOSOL, y la tarjeta Enlace con la dirección de la lista de espera, Copiar enlace y Abrir" caption="Responde a una consulta con un enlace que ya lleva las fechas del huésped." path="/availability-watch/embed"}
::

## La cola alimenta tus precios

Las personas que esperan una noche son demanda. En los precios dinámicos de Hotelier Tools (alfa), cada grupo en espera sube un 3 % la recomendación de precio de esa noche, hasta un 12 % por noche, solo para los tipos de habitación que pidieron, y el mismo huésped cuenta una vez. Puedes cambiarlo o desactivarlo en las reglas de precios (`/pricing/settings/rules`): **Subir por cada huésped en la lista de espera** y **No subir nunca por la lista de espera más de**. Consulta [precios dinámicos para hoteles pequeños](/blog/dynamic-pricing-little-hotelier).

## Para desarrolladores: MCP y REST

Las herramientas MCP (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule`, además de `list_room_types`) y la API REST (`/api/v1/availability-watch`) hacen lo mismo, con la misma comprobación de duplicados. Revisar la cola envía mensajes reales, así que Chat IA te pide que lo confirmes. Consulta [la guía de la API de Little Hotelier](/blog/little-hotelier-api) y [cómo conectar Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier).

## Lo que la cola no hace

- **No retiene ni reserva nada.** La habitación es de quien reserve primero, en cualquier canal.
- **No crea reservas** ni cambia nada en Little Hotelier.
- **Solo es tan rápida como su horario.** En temporada alta, revisa cada 20 o 30 minutos en lugar de cada noche.
- **Ve lo que muestra Little Hotelier.** Si la lectura del inventario devuelve tarifas pero no el número de habitaciones, la página dice **Little Hotelier no está devolviendo el número de habitaciones** en lugar de dar las fechas por llenas.
- **Las tarifas no forman parte de la revisión.** La cola lee el número de habitaciones y los cierres, así que mantén cerradas las fechas sin precio si no quieres que se anuncien.

::demo-cta{path="/availability-watch"}
::

Todo lo que hace la cola está en la [página de lista de espera](/tools/bot/waitlist). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Lee la disponibilidad con el acceso a Little Hotelier de tu propio hotel y nunca crea ni cambia una reserva desde la cola.
::

Ver también: [CTA, CTD, estancia mínima y stop sell](/blog/little-hotelier-cta-ctd-stop-sell), [una dirección de email del hotel para los huéspedes](/blog/hotel-email-address), [códigos promocionales en Little Hotelier](/blog/little-hotelier-promo-codes).

## Resumen

- Las solicitudes se pierden porque la pregunta llega mucho antes que la respuesta: mensajes enterrados, fechas sin precio, noches agotadas, solicitudes de grupo, coincidencias parciales.
- A mano: apunta las noches, las habitaciones por tipo, el contacto y por qué no pudiste vender, y revísalo cada vez que cargues tarifas o llegue una cancelación.
- La **Cola de disponibilidad** de Hotelier Tools revisa cada noche de cada solicitud con un solo horario, cuenta como llenas las noches cerradas o sin datos y avisa al huésped una vez, con un enlace de reserva.
- **Parcial** y **a punto de caducar** van al alojamiento por defecto; **disponible** va a los dos.
- Los huéspedes pueden apuntarse desde una página pública que, si las fechas se pueden reservar ya, primero les ofrece reservarlas. Nunca se retiene nada.
