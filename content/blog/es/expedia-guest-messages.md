---
title: "Cómo leer y responder los mensajes de huéspedes de Expedia (Partner Central, app y email)"
seoTitle: "Cómo responder a los mensajes de huéspedes de Expedia"
description: "Dónde están los mensajes de Expedia, cómo responder desde Partner Central, la app o tu email, plantillas programadas y una bandeja junto a WhatsApp."
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, mensajes de huéspedes, partner central, bandeja, plantillas, little hotelier]
keywords: [mensajes expedia partner central, responder mensajes huéspedes expedia, email alias huésped expedia, centro de mensajes expedia, mensajes programados expedia, expedia no muestra teléfono del huésped, mensajes expedia en una bandeja, app partner central mensajes]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/es/expedia-guest-messages-channels.webp
coverAlt: "Página Canales de Hotelier Tools: la conexión de mensajes de Booking.com recogiendo mensajes en modo Borrador (lo apruebo todo yo) y, debajo, los mensajes de Expedia Partner Central, aún sin conectar, con un botón Activar mensajes de Expedia y un enlace de inicio de sesión de Partner Central"
faq:
  - q: "¿Dónde encuentro los mensajes de huéspedes de Expedia?"
    a: "En Expedia Group Partner Central, en Guest relations > Messages. Puedes buscar por nombre del huésped o ID de reserva, o filtrar para encontrar una conversación. Tú y el huésped recibís además avisos por email de los mensajes nuevos."
  - q: "¿Puedo responder a un huésped de Expedia desde mi propio email?"
    a: "Sí. Cada reserva tiene un email alias del huésped, una dirección única que puedes copiar desde la reserva o desde Messages. El email debe salir de una dirección asociada a un usuario validado de Partner Central, y las respuestas del huésped llegan a tu buzón y a Partner Central."
  - q: "¿Por qué no veo el teléfono del huésped en las reservas de Expedia?"
    a: "Expedia ha desactivado temporalmente la consulta y exportación de los teléfonos de los viajeros en Partner Central por el phishing dirigido a viajeros. Las reservas recibidas por API llevan un número genérico. Expedia pide a los alojamientos que usen su propia mensajería."
  - q: "¿Puedo enviar mensajes programados a los huéspedes de Expedia?"
    a: "Sí. En Messages, abre Manage templates, crea una plantilla, activa Send on a schedule y elige cuándo sale. Expedia envía los mensajes programados a las 22:00, hora local."
  - q: "¿Puede Hotelier Tools responder a los huéspedes de Expedia?"
    a: "No. Hotelier Tools nunca envía un mensaje a un huésped de Expedia. Su bandeja lista las conversaciones de Expedia (beta, funciona desde la versión 1.71 de noviembre de 2026). Una respuesta que escribas ahí se guarda como borrador para que la envíes desde Partner Central."
  - q: "¿Forma Hotelier Tools parte de Expedia o de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a Expedia Group, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a Partner Central."
---

Los mensajes de huéspedes de Expedia están en Partner Central, en **Guest relations > Messages**, donde buscas por nombre del huésped o ID de reserva y respondes en el hilo. También puedes contestar desde la app de Partner Central, o desde tu propio buzón gracias al email alias del huésped que tiene cada reserva. Las plantillas y los mensajes programados se ocupan de las preguntas de rutina. Para ver Expedia junto a WhatsApp, Booking.com y el email, la bandeja de Hotelier Tools puede mostrar las conversaciones de Expedia (beta), pero las respuestas salen siempre desde Partner Central.

Las funciones de Expedia de abajo se han contrastado con la ayuda de Partner Central de Expedia Group a fecha de noviembre de 2026.

## ¿Dónde están los mensajes de huéspedes de Expedia?

Abre Partner Central y elige **Guest relations** y después **Messages** ([ayuda de Partner Central: About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center), en inglés). Desde ahí puedes:

- **Buscar** a un huésped por nombre o ID de reserva para enviarle un mensaje nuevo.
- **Filtrar** la lista para encontrar una conversación existente.
- **Responder** en el hilo y adjuntar instrucciones de check-in o fotos.

Tú y tus huéspedes recibís avisos por email de los mensajes nuevos, y los huéspedes pueden iniciar una conversación desde su itinerario o su confirmación. Expedia llama al Message Center «la opción recomendada»: está vinculado a la reserva, guarda un historial verificable y no expone los datos de contacto del huésped ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)).

Dos cosas que sorprenden a los partners nuevos:

- **Algunas reservas no tienen Message Center.** Muchas reservas de los partners B2B de Expedia, como las agencias de viajes, no admiten mensajes. Contacta con el partner B2B o pide a Expedia que transmita un mensaje urgente.
- **Los teléfonos están ocultos.** Expedia ha desactivado temporalmente la consulta y exportación de los teléfonos de los viajeros en Partner Central, y las reservas por API llevan un número genérico. El motivo es el phishing: los estafadores se hacen pasar por hoteles en WhatsApp con números filtrados ([aviso de phishing](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)). Tu channel manager tampoco tendrá el número real.

### En el móvil: la app de Partner Central

La app Expedia Group Partner Central te permite iniciar conversaciones y responder a los huéspedes, con notificaciones de reservas, opiniones y cancelaciones. Expedia dice que los usuarios activos de la app responden un 20 % más rápido que los no activos (su propia media de 2021, [página de la app](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand)).

## Cómo responder desde tu propio email: el email alias del huésped

Cada reserva tiene un **guest email alias**, una dirección única que reenvía tu email al huésped a través de Expedia ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)). Para copiarla:

1. **Desde una reserva:** elige **Reservations**, busca la reserva, elige el nombre del huésped y después **Copy email to clipboard**.
2. **Desde Messages:** elige **Guest relations > Messages**, abre el huésped, elige **Show contact details** y después **Copy email to clipboard**.

Las reglas que importan:

- El alias funciona con las reservas de Expedia, Hotels.com, Travelocity, Orbitz y Wotif. A fecha de noviembre de 2026 no funciona con las reservas B2B ni con Egencia.
- La dirección que envía **debe pertenecer a un usuario validado de Partner Central**. El correo de cualquier otra dirección no se entrega, así que añade el buzón de recepción como usuario de Partner Central si quieres responder desde él.
- La respuesta del huésped llega a tu buzón y al Message Center.
- Un email que contenga un número de tarjeta de crédito se bloquea. Los números de tarjeta virtual de Expedia sí se permiten.
- Puedes adjuntar archivos PDF o Word, como un formulario previo a la llegada.

## ¿Con qué rapidez hay que responder a los huéspedes de Expedia?

La ayuda de Expedia te pide «responder a cada huésped a tiempo» y «contestar con rapidez para evitar retrasos, cancelaciones o escalados». No publica un plazo fijo para los mensajes normales. En la práctica, toma el mismo día como límite y responde en minutos a todo lo que tenga que ver con la llegada. Las llegadas tardías, los códigos de la puerta y el parking es lo que preguntan los huéspedes el día que viajan.

Expedia también enumera lo que no hay que hacer ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)):

- **Nada de marketing.** Ni ventas adicionales ni promociones por los mensajes de Expedia.
- **Nada de confirmaciones duplicadas.** El huésped ya tiene una de Expedia.
- **No cambies las condiciones de la reserva fuera de Expedia.** Las fechas y los precios se cambian en Partner Central.
- **Evita los enlaces externos y los adjuntos** cuando puedas. Los huéspedes pueden verlos como sospechosos.

Cuando acordéis algo en persona durante la estancia, Expedia recomienda confirmarlo por escrito en el Message Center. Ese mensaje es tu prueba si más adelante hay una disputa.

## Cómo configurar plantillas y mensajes programados

En **Guest relations > Messages**, elige **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)):

1. Elige **Create new template**, ponle un nombre y escribe el texto.
2. En **Insert custom information**, añade contenido variable, como el nombre del huésped.
3. Adjunta archivos si los necesitas, por ejemplo un mapa o las instrucciones de check-in.
4. Activa **Send on a schedule** y elige cuándo sale, sin fecha de fin o para un rango de fechas.
5. Elige **Save**.

Todos los mensajes programados se envían a las 22:00, hora local. Una **smart template** puede responder automáticamente a un tema; a fecha de noviembre de 2026 la única es una petición de opinión después de la estancia. **Send bulk message** envía una plantilla a varios huéspedes a la vez.

Una plantilla previa a la llegada que puedes adaptar:

```text [expedia-pre-arrival.txt]
Hola [nombre del huésped], tenemos muchas ganas de recibirte en [nombre del alojamiento].

El check-in es a partir de las [hora]. Si vas a llegar después de las 22:00, responde aquí con tu hora de llegada y te dejaremos instrucciones.
Parking: [información de parking]. Desayuno: [horario y precio].

Solo te escribiremos por esta conversación de Expedia y nunca te pediremos los datos de tu tarjeta por WhatsApp ni por SMS.
```

La última línea importa más ahora que los estafadores escriben a los huéspedes de Expedia por WhatsApp. Más sobre esto en [cómo detectar mensajes de estafa en un hotel](/blog/hotel-scam-messages).

## La forma más rápida: las conversaciones de Expedia en la bandeja de Hotelier Tools (beta)

Hotelier Tools puede mostrar tus conversaciones de Expedia en su **Bandeja** (`/messaging`), junto a WhatsApp, Booking.com y el email, cada una al lado de su reserva de Little Hotelier. Las respuestas se escriben en Partner Central. Así se configura:

1. **Conecta Partner Central** en **Credenciales > Expedia Partner Central** (`/credentials/expedia-extranet`). Hotelier Tools inicia sesión por ti en un navegador en el servidor; tú respondes a lo que pregunte Expedia, como el código que envía por email en un dispositivo nuevo. La sesión se guarda cifrada y **Mantener la sesión de Expedia** evita que caduque por inactividad. La configuración es la misma que para las [solicitudes de pago de Expedia Collect](/blog/expedia-collect-payment-requests).
2. En la tarjeta **Mensajes de huéspedes** de esa misma página, activa **Leer mensajes de huéspedes de Expedia**. O abre **Canales** (`/messaging/channels`) y pulsa **Activar mensajes de Expedia**.
3. Elige el modo en **Canales**. Expedia solo ofrece dos: **Desactivado (solo recoger)**, en el que los mensajes se muestran y no se analiza nada, y **Borrador**, en el que la IA prepara una respuesta para que la revises. Un canal de Expedia nuevo empieza en modo solo recoger.
4. Abre la **Bandeja** y filtra por **Expedia**. Cada conversación tiene un enlace **Conversación en Expedia** que abre el hilo en Partner Central.

::screenshot{src="/images/blog/demo/es/expedia-guest-messages-card.webp" alt="Tarjeta Mensajes de huéspedes en la página Expedia Partner Central: el interruptor está desactivado, el aviso dice Primero inicia sesión en Partner Central, un recuadro Las respuestas siguen en Partner Central explica que Hotelier Tools nunca envía un mensaje a un huésped de Expedia y guarda tu respuesta como borrador, y un enlace Modo y tiempos; debajo sigue la tarjeta Pagos de Expedia Collect" caption="El interruptor está junto al inicio de sesión de Partner Central. Las respuestas a los huéspedes de Expedia siguen siempre en Partner Central." path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/es/expedia-guest-messages-channels.webp" alt="Página Canales: mensajes de Booking.com recogidos en modo Borrador (lo apruebo todo yo) con Recoger mensajes activado, y mensajes de Expedia Partner Central marcados como aún sin conectar, con Activar mensajes de Expedia e Inicio de sesión de Partner Central" caption="Expedia aparece en la página Canales con tus otras cuentas. En la demo no está activado." path="/messaging/channels"}
::

### Lo que lee la bandeja y lo que nunca hace

- **La lista de conversaciones, no cada mensaje.** De cada hilo lee el huésped, la estancia y el último mensaje, tal como los muestra la vista previa de la lista de mensajes de Partner Central. El hilo completo se queda en Partner Central.
- **Nunca envía nada a un huésped de Expedia.** Ni automáticamente ni cuando pulsas un botón. Lo que escribes se guarda como borrador de la conversación (**Guardar como borrador: las respuestas de Expedia se envían desde Partner Central**). Cópialo en Partner Central o en la app.
- **Las reservas se asocian solo por el código de confirmación.** Little Hotelier guarda una reserva de Expedia como `EXP-` más el código de confirmación de Expedia. Un hilo que menciona ese código se vincula con la reserva y cuenta como verificado. El nombre de un huésped nunca sirve como prueba: un hilo sin código se queda sin asociar y la IA no ve ningún dato de reserva para él.

En modo **Borrador**, la IA escribe su sugerencia a partir de la reserva verificada y de lo que le has enseñado en **FAQ y conocimiento** (`/messaging/faq`): tu página de FAQ, tus notas de la casa y la ficha de tu alojamiento. Un servicio que no hayas indicado se responde como «por confirmar», nunca como «sí». Cómo funcionan esos borradores lo tienes en [respuestas con IA a los mensajes de huéspedes](/blog/ai-replies-guest-messages).

::callout{type="warning" title="Estado a noviembre de 2026"}
Las conversaciones de Expedia están en beta. Hasta el 5 de noviembre de 2026, Partner Central rechazaba la petición que leía su lista de mensajes (un HTTP 403), así que ninguna conversación de Expedia llegaba a la bandeja. La versión 1.71 (noviembre de 2026) lo arregla: Hotelier Tools envía ahora la misma petición que la propia bandeja de Partner Central, y las conversaciones de Expedia llegan con el huésped, la estancia y el último mensaje. Si Expedia vuelve a cambiar esa petición, la página de Expedia muestra un error en lugar de una bandeja vacía hasta que se actualice. Las respuestas se siguen enviando desde Partner Central o la app.
::

Otros dos límites, con honestidad:

- **Usa tu propia sesión de Partner Central.** Las condiciones para partners de Expedia restringen el acceso automatizado a Partner Central. La vía de conectividad que admite Expedia es su Messaging API, disponible a través de los proveedores de conectividad.
- **Aquí Expedia es solo de lectura.** Los hilos de WhatsApp y de email se pueden responder desde la bandeja. Los de Expedia, no.

::demo-cta{path="/messaging/channels"}
::

Todo lo que hace la bandeja está en la [página de la bandeja de huéspedes](/tools/bot/guest-inbox). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Expedia Group, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a Expedia Partner Central.
::

Guías relacionadas: [mensajes de huéspedes de Booking.com sin la extranet](/blog/booking-com-guest-messages), [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier), [respuestas con IA a los mensajes de huéspedes](/blog/ai-replies-guest-messages).

## Resumen

- Los mensajes de Expedia están en Partner Central, en **Guest relations > Messages**, y en la app de Partner Central.
- Para responder desde tu propio buzón, copia el email alias del huésped de la reserva y envía desde una dirección que sea un usuario validado de Partner Central.
- Los teléfonos de los huéspedes están ocultos por ahora: mantén el contacto dentro de la mensajería de Expedia y di a los huéspedes que nunca les pedirás los datos de su tarjeta por otro canal.
- Las plantillas con **Send on a schedule** cubren las instrucciones de check-in; los mensajes programados salen a las 22:00, hora local.
- La bandeja de Hotelier Tools puede listar las conversaciones de Expedia junto a WhatsApp y Booking.com (beta, funciona desde la versión 1.71 de noviembre de 2026), pero toda respuesta de Expedia se envía desde Partner Central.
