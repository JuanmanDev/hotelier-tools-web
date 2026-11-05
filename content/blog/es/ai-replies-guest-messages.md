---
title: "Cómo responder a los mensajes de huéspedes con IA (WhatsApp, Booking.com, Expedia y email)"
seoTitle: "Responder a mensajes de huéspedes con IA, sin riesgos"
description: "Deja que la IA redacte respuestas a huéspedes en WhatsApp, Booking.com, Expedia y email con tus reservas y tu FAQ, y que una persona apruebe cada una."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ia, mensajes de huéspedes, whatsapp, booking.com, email, bandeja, plantillas]
keywords: [responder mensajes huéspedes con ia, ia para mensajes de huéspedes hotel, automatizar mensajes huéspedes whatsapp hotel, plantillas mensajes huéspedes hotel, chatgpt para responder huéspedes, bandeja de mensajes con ia para hoteles, asistente ia whatsapp hotel, respuestas automáticas booking con ia]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/es/ai-replies-inbox-thread-plan.webp
coverAlt: "Bandeja de huéspedes de Hotelier Tools con la conversación de WhatsApp de Noah Nilsson abierta: marcada como Identidad verificada, su reserva del 3 al 7 de noviembre con check-in hecho y pagada, un plan de la IA en borrador para una llegada tarde con el motivo y una respuesta editable en español, y el panel privado del Asistente"
featured: true
faq:
  - q: "¿Puede la IA responder sola a los mensajes de los huéspedes?"
    a: "Puede, pero no debería hacerlo por defecto. Lo seguro es que la IA redacte una respuesta con los datos de la reserva y tu FAQ, y que una persona la apruebe. Hotelier Tools empieza cada canal en modo Borrador; el envío automático es una decisión aparte para cada canal, limitada a preguntas sencillas."
  - q: "¿Cómo sabe la IA de qué reserva habla un mensaje?"
    a: "Asocia al remitente con una sola reserva: en WhatsApp el teléfono debe coincidir al menos en sus 8 últimas cifras, y en el email la dirección debe coincidir exactamente. Si coinciden dos huéspedes, o ninguno, la IA no ve ninguna reserva y responde solo con tu FAQ."
  - q: "¿Se inventará la IA precios o servicios?"
    a: "No debería, y la bandeja está hecha para que no pueda ocultarlo. La IA responde solo con tus fuentes de FAQ, tus notas de la casa y la ficha de tu alojamiento, escribe «por confirmar» en todo lo que no hayas indicado, y un precio que no haya salido de una consulta al motor de reservas se marca junto al borrador."
  - q: "¿Envía la IA respuestas por su cuenta en Booking.com o Expedia?"
    a: "No. En Booking.com la IA solo redacta y una persona pulsa Enviar. Los mensajes de Expedia (beta) solo se pueden recoger o redactar, y la respuesta se escribe en Partner Central."
  - q: "¿Necesito la API oficial de WhatsApp Business?"
    a: "Para Hotelier Tools, no. Se conecta a través de WAHA, un servidor que alojas tú y que ejecuta una sesión de WhatsApp Web. Así te ahorras el proceso de aprobación de Meta, pero WhatsApp no permite clientes no oficiales, así que un número usado de esta forma podría ser bloqueado."
  - q: "¿Forma Hotelier Tools parte de WhatsApp, Booking.com o Expedia?"
    a: "No. Hotelier Tools es independiente: no está afiliado a WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder ni Little Hotelier, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel."
---

La forma segura de usar la IA con los mensajes de los huéspedes es dejar que redacte, no que decida. Dale la reserva del huésped y tus propios datos (FAQ, normas de la casa, precios de tu motor de reservas), deja que prepare una respuesta en el idioma del huésped y que una persona la apruebe antes de que salga. En Hotelier Tools, los mensajes de WhatsApp, email, Booking.com y Expedia llegan a una sola bandeja, cada uno asociado a su reserva, con un borrador de la IA esperando un clic.

Los datos de terceros de abajo se han contrastado a fecha de noviembre de 2026.

## ¿Qué preguntan más los huéspedes?

En un hotel pequeño, la mayoría de los mensajes son la misma docena de preguntas:

- **Horas de check-in y check-out**, y si se puede entrar antes.
- **Llegada tarde:** «Llegaremos hacia las 23:30, ¿habrá alguien en recepción?»
- **Parking, wifi, desayuno:** horarios y precios.
- **Cómo llegar** y cómo recoger las llaves.
- **Cambios y cancelaciones:** fechas, huéspedes de más, reembolsos.
- **Facturas**, a menudo con nombre de empresa y NIF.
- **Disponibilidad y precios**, de gente que aún no ha reservado.

El primer grupo tiene una única respuesta correcta que ya conoces. Los dos últimos necesitan a una persona o datos en tiempo real: una cancelación es un compromiso, y un precio depende de las fechas, del número de personas y de lo que te quede por vender. Esa división es la que decide cuánto puede hacer la IA por su cuenta.

## ¿Con qué rapidez esperan respuesta los huéspedes?

- **WhatsApp:** los huéspedes suelen escribir mientras viajan y esperan la respuesta con el móvil en la mano. En la WhatsApp Business Platform oficial, el mensaje de un huésped abre una ventana de atención al cliente de 24 horas en la que tus respuestas son gratis ([precios de WhatsApp](https://whatsappbusiness.com/products/platform-pricing/), en inglés).
- **Booking.com:** el centro de ayuda de Little Hotelier explica que Booking.com lleva una puntuación interna de respuesta según la rapidez con la que contestas, y que marcar un mensaje como **No reply needed** cierra su ventana de 24 horas ([FAQ del Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Más en [cómo gestionar los mensajes de huéspedes de Booking.com](/blog/booking-com-guest-messages).
- **Expedia:** los huéspedes escriben desde la app de Expedia y tú respondes en Partner Central, en **Messages**. Mira [mensajes de huéspedes de Expedia](/blog/expedia-guest-messages).
- **Email:** más lento, pero quien pregunta por disponibilidad seguramente está preguntando también a otros hoteles.

Un borrador esperando en la bandeja recorta el tiempo de respuesta sin saltarse la revisión.

## Por qué la IA nunca debe inventarse una respuesta

Una hora de check-in equivocada es una molestia. Una plaza de parking prometida que no tienes, un precio por debajo de tu tarifa o los datos de la reserva de otro huésped salen caros. Los chatbots rellenan los huecos con texto verosímil, así que una IA que habla con huéspedes necesita tres límites:

1. **Fuentes cerradas.** Responde solo con lo que le has dado: tu página de FAQ, tus notas, la reserva. Todo lo demás es «por confirmar».
2. **Una reserva, y solo para la persona correcta.** Solo ve una reserva cuando está demostrado que el remitente es ese huésped.
3. **Sin manos.** Propone; una persona (o una regla estrecha y con límites) decide lo que llega al huésped o a la reserva.

## Un juego de plantillas para empezar

Uses la herramienta que uses, escríbelas una vez. Serán tu FAQ, los datos de tu IA y tus respuestas rápidas:

```text [guest-reply-templates.txt]
CHECK-IN
Hola, [nombre]: el check-in es a partir de las [hora] y el check-out hasta las [hora]. Si llegas antes, puedes dejarnos el equipaje.

LLEGADA TARDE
Gracias por avisarnos, [nombre]. La recepción está abierta hasta las [hora]. Después, [cómo recoger la llave]. Hemos anotado tu hora de llegada.

PARKING
Tenemos parking [gratuito / de pago, X por noche] [en el propio alojamiento / en dirección]. [No se puede reservar / indícanos tu matrícula].

DESAYUNO
El desayuno se sirve de [hora] a [hora] y cuesta [precio] por persona. [Está incluido / no está incluido] en tu tarifa.

FACTURA
Por supuesto. Envíanos el nombre de la empresa, el NIF y la dirección de facturación y emitiremos la factura al hacer el check-out.

CANCELACIÓN (necesita una persona)
Gracias, [nombre]. Hemos pasado tu solicitud a nuestro equipo y en breve te confirmamos las condiciones de tu reserva.

Nunca te pediremos los datos de tu tarjeta por WhatsApp ni por SMS.
```

## La forma más rápida: una bandeja donde la IA redacta y una persona aprueba

La **Bandeja** de Hotelier Tools (`/messaging`, alfa) recoge los mensajes de huéspedes de cuatro sitios, asocia cada uno con su reserva y prepara una respuesta y un plan para que los apruebes.

::screenshot{src="/images/blog/demo/es/ai-replies-inbox-thread-plan.webp" alt="Bandeja de huéspedes con la conversación de WhatsApp de Noah Nilsson abierta: la etiqueta Identidad verificada, su reserva del 3 al 7 de noviembre (4 noches, 1 huésped, con check-in hecho, pagada), el plan de la IA en borrador clasificado como llegada tarde al 93 %, la sección Por qué, una respuesta editable en español y la acción send_message, con el panel Asistente a la derecha" caption="El mensaje, la reserva y un borrador, uno al lado del otro. No se envía nada hasta que lo apruebas." path="/messaging"}
::

### Paso 1: conecta tus canales

| Canal | Dónde | Cómo se conecta |
|---|---|---|
| **WhatsApp** | **Credenciales > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Un servidor WAHA, su sesión y su clave de API, y un webhook |
| **Email** | **Credenciales > Buzón de huéspedes** (`/credentials/messaging-email`) | Inicio de sesión con **Google** o **Microsoft** (OAuth), u **Otro (IMAP/SMTP)** |
| **Booking.com** | **Credenciales > Extranet de Booking.com** (`/credentials/booking-extranet`) | Tu propio acceso a la extranet con su segundo factor |
| **Expedia** (beta) | **Credenciales > Expedia Partner Central** (`/credentials/expedia-extranet`) y después **Activar mensajes de Expedia** | Tu propio acceso a Partner Central |

Expedia es el más reciente: desde la versión 1.71 (noviembre de 2026) sus hilos llegan con el huésped, la estancia y el último mensaje, y las respuestas se siguen enviando desde Partner Central ([detalles](/blog/expedia-guest-messages)).

Los buzones de Outlook y Microsoft 365 necesitan el inicio de sesión con Microsoft, porque Microsoft rechaza los accesos con contraseña por IMAP. Un buzón nuevo empieza en **Desactivado** (solo recoger): redactar consume créditos de IA, así que activarlo lo decides tú.

### Qué es WAHA y qué riesgos tiene

[WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) es un servidor que alojas tú, que ejecuta una sesión de WhatsApp Web y permite que otro programa lea y envíe por HTTP los mensajes de ese número. Funciona como WhatsApp Web abierto en un ordenador: tu móvil y la app siguen funcionando.

1. En la página de WhatsApp, introduce la **URL base de WAHA**, el **Nombre de la sesión** y la **Clave de API de WAHA**, y guarda.
2. En el panel **Sesión de WhatsApp**, pulsa **Iniciar sesión**. Cuando aparezca un código QR, abre WhatsApp en el móvil del hotel, ve a **Ajustes > Dispositivos vinculados > Vincular un dispositivo** y escanéalo.
3. Pulsa **Conectar webhook** para que WAHA envíe los mensajes nuevos a la bandeja, y después **Probar conexión**.
4. Si quieres, en **Historial de mensajes**, elige hasta cuándo (7, 30 o 90 días, o **Último año**) y pulsa **Importar historial**. Los chats importados son solo contexto: nada se analiza, se responde ni se marca como no leído.

::screenshot{src="/images/blog/demo/es/ai-replies-whatsapp-session.webp" alt="Página de credenciales WhatsApp (WAHA) con los campos URL base de WAHA, Nombre de la sesión y Clave de API de WAHA, y el panel Sesión de WhatsApp con el estado Conectada, Webhook sin configurar, los botones Reiniciar sesión y Conectar webhook, e Historial de mensajes con Últimos 90 días e Importar historial" caption="Vincula el número, conecta el webhook e importa los chats anteriores desde un solo panel." path="/credentials/messaging-whatsapp"}
::

Los riesgos, sin rodeos:

- **No es la API oficial.** La documentación de WAHA dice que «WhatsApp no permite bots ni clientes no oficiales en su plataforma, así que esto no debe considerarse totalmente seguro». Un número podría ser bloqueado. Responde a los huéspedes que te escriben y nunca envíes mensajes masivos ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/), en inglés).
- **Protege WAHA.** El panel avisa cuando **WAHA responde sin clave de API**: cualquiera que llegue a él podría leer y enviar los mensajes de ese número.
- **La URL del webhook es secreta.** Su token es lo que deja entrar los mensajes en tu bandeja. Los chats de grupo se ignoran.

Para la API oficial de Meta, mira el Messaging hub de Little Hotelier en [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

### Paso 2: cómo se construye cada respuesta

1. **El remitente se asocia con una reserva.** El panel muestra el resultado: **Identidad verificada**, **Ambiguo — rechazado** (coincide más de un huésped, así que no se muestra ninguna reserva), **Sin reserva coincidente** (la IA responde solo con tu FAQ) o **Sin comprobar**. En WhatsApp, el número debe coincidir con el teléfono de la reserva al menos en sus 8 últimas cifras; en el email, la dirección exacta. Un hilo de Booking.com indica su propia reserva; un hilo de Expedia solo se vincula por la referencia `EXP-` que contiene.
2. **Primero te espera a ti.** Un mensaje de WhatsApp se analiza a los 5 minutos y un email a la hora. Si alguien responde mientras tanto, el plan pasa a **ya contestado** y no se cobra nada.
3. **La IA lee** esa única reserva, tus fuentes de **FAQ y conocimiento** (`/messaging/faq`), tus notas de la casa y la ficha de tu alojamiento en **Ajustes > Alojamiento y conocimiento de la IA**.
4. **Devuelve un plan de una lista cerrada:** enviar un mensaje, avisar al personal, añadir una nota a la reserva o fijar la hora de llegada. No tiene herramientas, no puede cancelar, cambiar fechas ni tocar pagos, y cada acción se aplica solo a la reserva asociada.
5. **Decide una persona.** Edita la respuesta y pulsa **Aprobar (respetando el retraso)** o **Confirmar y enviar ya**. Los planes que nadie toca caducan a las 48 horas.

Antes de que salga nada, una comprobación bloquea la respuesta que contenga la referencia de otra reserva, o cualquier número largo cuando el remitente no está verificado.

Para el modelo de seguridad completo (qué puede leer y cambiar cada agente de IA, cómo se verifica al remitente en cada canal y cómo se evita que el mensaje de un huésped le dé órdenes a la IA), lee [cómo funcionan los agentes de IA de un hotel](/blog/how-hotel-ai-agents-work).

### Paso 3: elige cuánto puede hacer la IA

En **Canales** (`/messaging/channels`), cada cuenta conectada tiene su propio modo:

| Modo | Qué ocurre |
|---|---|
| **Desactivado — solo recoger** | Los mensajes se recogen y se muestran. No se analiza ni se envía nada. |
| **Borrador — lo apruebo todo yo** (por defecto) | La IA prepara una respuesta y un plan; no pasa nada hasta que lo apruebas. |
| **Respuesta automática — sin cambios en reservas** | La IA envía tras una espera, solo para preguntas sencillas (hora de check-in o check-out, wifi, parking, llegada tarde, cómo llegar, servicios), a un huésped verificado y con suficiente seguridad. |
| **Autónomo — responde Y cambia reservas** | Además añade notas o fija la hora de llegada en una reserva verificada sin aprobación. Revísalo varias veces al día. |

Límites por canal: la IA nunca envía las conversaciones de **Booking.com**, sea cual sea el modo; pulsa Enviar una persona. **Expedia** solo ofrece Desactivado y Borrador, y la respuesta se escribe en Partner Central. Las respuestas automáticas se detienen a las 4 por hora, a las 12 al día o tras 3 seguidas sin respuesta del huésped, para que un bucle con una respuesta automática de «fuera de la oficina» no se desboque.

### Paso 4: firmas, formato y archivos por canal

En **Firmas** (`/messaging/signatures`) guardas varias firmas con nombre (Recepción, Dirección, Inglés…), cada una escrita una vez por canal tal como ese canal la muestra, y eliges una predeterminada. Los ejemplos se rellenan con los datos de tu alojamiento. Las respuestas a la conversación de reserva de un huésped de Booking.com se firman en texto plano; las respuestas públicas de Q&A, nunca.

::screenshot{src="/images/blog/demo/es/ai-replies-signatures.webp" alt="Página Firmas con el ejemplo Recepción abierto: nombre Recepción marcado como Predeterminada, pestañas Email, WhatsApp y Booking.com, la versión de email con el nombre del hotel, el teléfono de recepción y un enlace a la web, el campo Versión de texto vacío, y firmas de ejemplo (Recepción, Formal, Breve, Contacto completo, Bilingüe) a la izquierda" caption="Una firma, tres versiones: enriquecida para el email, con las marcas de WhatsApp y en texto plano para Booking.com." path="/messaging/signatures"}
::

La IA escribe un solo borrador y la bandeja le da la forma de cada canal:

| Canal | Formato | Archivos |
|---|---|---|
| Email | Texto enriquecido: negrita, enlaces, listas, citas | Sí, hasta 18 MB en total |
| WhatsApp | El `*negrita*`, `_cursiva_` y las listas propios de WhatsApp | Hasta 10 archivos de 16 MB cada uno, más notas de voz grabadas en el navegador |
| Booking.com | Texto plano; una respuesta pública de Q&A no pasa de 320 caracteres | No |

En WhatsApp, las fotos, notas de voz y documentos que envían los huéspedes aparecen en el hilo. WhatsApp guarda los archivos solo durante un tiempo, así que uno antiguo puede haber desaparecido.

### Paso 5: enséñale tus respuestas

- **FAQ y conocimiento** (`/messaging/faq`): añade tu página de FAQ o texto, y rellena las notas de la casa. La página lo dice claro: la IA «responde con estas fuentes y nada más».
- **Entrenar la IA** (`/messaging/training`): en **Revisar recientes**, pulsa **Corregir** cuando la IA haya entendido mal un mensaje; se convierte en un ejemplo. Añade **Reglas** de una frase y usa el **Banco de pruebas** para comprobar que sigue de acuerdo (cada prueba es un análisis real y consume créditos).
- **Memoria de respuestas:** no hay que configurar nada. Las respuestas que tu equipo envió en el último año se emparejan con la pregunta anterior, y las más parecidas se le muestran a la IA cuando llega un mensaje similar, sin el nombre, las fechas, las referencias ni los contactos del otro huésped. Escribe una vez «6 € la noche por perro, se paga a la llegada» y el siguiente huésped que pregunte recibirá la misma respuesta. Las notas de la casa siguen mandando sobre una respuesta antigua.

::screenshot{src="/images/blog/demo/es/ai-replies-training-examples.webp" alt="Página Entrenar la IA en la pestaña Ejemplos con tres ejemplos guardados: una pregunta en francés sobre el parking en Booking.com sin acciones, una llegada tarde en alemán por WhatsApp que fija la hora de llegada a la 01:00, y una petición de factura en español por email que añade una nota a la reserva, cada uno con una pista breve" caption="Las correcciones se convierten en ejemplos que la IA ve la próxima vez que llega un mensaje parecido." path="/messaging/training"}
::

### Qué más resuelve la bandeja

- **Los precios salen de tu motor de reservas.** El asistente privado de la derecha consulta tu página de reserva directa para esas fechas y ese número de personas, con tu código promocional. Un precio que no ha salido de una consulta se marca como no verificado.
- **Noches llenas:** cuando un huésped pregunta por una fecha agotada y tienes activada tu [lista de espera](/blog/hotel-waitlist-sold-out-dates), el asistente ofrece una tarjeta para apuntarlo.
- **Peticiones de factura:** los dos mensajes fijos de Booking.com para pedir factura se leen sin IA y se convierten en una tarjeta que apunta la estancia para su [factura a la salida](/blog/send-invoice-to-guest-at-checkout), más una respuesta en el idioma del huésped.
- **Créditos de IA** (`/messaging/credits`): un análisis es un mensaje de huésped leído, planificado y redactado, cobrado al coste real del modelo, primero de una asignación mensual y después de tu saldo. Los precios de los paquetes todavía son provisionales.

::demo-cta{path="/messaging"}
::

Todo lo que hace la bandeja está en la [página de la bandeja de huéspedes](/tools/bot/guest-inbox). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder ni Little Hotelier, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel a Little Hotelier, Booking.com y Expedia.
::

Guías relacionadas: [cómo detectar mensajes de estafa](/blog/hotel-scam-messages), [el asistente de IA para recepción](/blog/ai-assistant-hotel-front-desk), [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

## Resumen

- Escribe una vez tus respuestas a la docena de preguntas habituales: son tus plantillas, tu FAQ y los datos de tu IA.
- Deja que la IA redacte y mantén a una persona en las cancelaciones, los reembolsos, los precios y las quejas.
- La IA solo debe ver una reserva cuando el remitente coincide con exactamente una, y responder «por confirmar» a todo lo que no hayas indicado.
- En Hotelier Tools, WhatsApp (a través de WAHA), el email, Booking.com y Expedia (beta) comparten una bandeja, todos los canales empiezan en **Borrador**, y la IA nunca envía en Booking.com ni en Expedia.
- Las firmas, el formato, el entrenamiento y la memoria de respuestas hacen que los borradores suenen como tu recepción.
