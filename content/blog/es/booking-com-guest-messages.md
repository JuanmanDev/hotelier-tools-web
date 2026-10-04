---
title: "Mensajes automáticos de Booking.com: cómo gestionar los mensajes de huéspedes sin vivir en la extranet"
seoTitle: "Mensajes automáticos y plantillas de Booking.com"
description: "Pulse, plantillas, mensajes programados y respuestas automáticas, cómo detectar mensajes falsos de Booking.com y una sola bandeja con WhatsApp y email."
date: 2026-10-03
category: guests
tags: [booking.com, guest messages, inbox, templates, little hotelier]
keywords: [mensajes automáticos booking, plantillas mensajes booking, mensajes programados booking, booking mensajes falsos, booking mensajes no cargan, respuestas automáticas booking, preguntas de huéspedes booking]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/es/guest-inbox-ai-draft-availability.webp
coverAlt: "Bandeja de huéspedes de Hotelier Tools con filtros de WhatsApp, Email y Booking.com, un email de un huésped que pregunta por una habitación doble en septiembre, el plan de la IA en borrador con una respuesta editable en inglés y el panel privado del asistente"
faq:
  - q: "¿Por qué no aparecen mis mensajes de Booking.com en la extranet?"
    a: "Puede que tu channel manager gestione la mensajería con los huéspedes. En la extranet, abre Connection management: las funciones marcadas en verde se gestionan en la plataforma de tu proveedor, como el Messaging hub de Little Hotelier. Comprueba también que tu usuario de la extranet tiene los permisos necesarios."
  - q: "¿Puedo programar mensajes para los huéspedes de Booking.com?"
    a: "Sí. En la extranet o en Pulse, ve a Property > Messaging preferences > Template scheduler y asocia una plantilla a una etapa: al reservar, una semana, tres días o un día antes de la llegada, el día de la llegada o un día antes de la salida."
  - q: "¿Cómo sé que un mensaje viene de verdad de Booking.com?"
    a: "Los emails de Booking.com siempre salen de una dirección que acaba en @booking.com, y sus enlaces llevan a direcciones que acaban en .booking.com. Desconfía de las peticiones urgentes que nadie te había anunciado: Booking.com dice que nunca las hace sin comunicación previa."
  - q: "¿Por qué las reservas nuevas de Booking.com no muestran teléfono en Little Hotelier?"
    a: "Desde el 28 de septiembre de 2026, Booking.com ya no incluye los teléfonos de los huéspedes en las reservas que envía a los channel managers. Aún puedes ver el número en la extranet o en Pulse con Show phone number."
  - q: "¿Puede la IA responder sola a los huéspedes de Booking.com en Hotelier Tools?"
    a: "No. En Booking.com la IA solo prepara un borrador y decide una persona. El envío automático con IA no está permitido nunca en las conversaciones de Booking.com, elijas el modo de respuesta que elijas."
  - q: "¿Forma Hotelier Tools parte de Booking.com o de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a Booking.com, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a la extranet de Booking.com."
---

No hace falta tener la extranet abierta todo el día. La app Pulse lleva los mensajes de Booking.com al móvil con notificaciones, y las plantillas de mensaje, los mensajes programados y las respuestas automáticas se ocupan de las preguntas de rutina. Para ver Booking.com junto a WhatsApp y el email, usa el Messaging hub de Little Hotelier (un add-on de pago) o la bandeja de Hotelier Tools, que además redacta respuestas para que las apruebe una persona.

Las funciones de Booking.com de abajo se han contrastado con su ayuda para partners (Partner Help) a fecha de octubre de 2026.

## ¿Dónde están los mensajes de Booking.com y por qué no aparecen?

Puedes leerlos y responderlos en tres sitios ([Partner Help: Contacting guests](https://partner.booking.com/en-us/help/reservations/contact-extranet/contacting-your-guests), en inglés):

- **Extranet:** **Inbox > Reservation messages**, o abre una reserva y baja hasta **Conversation with guest**.
- **App Pulse:** toca **Bookings**, elige al huésped y escribe en **Messages**.
- **Tu proveedor de conectividad**, si gestiona por ti la mensajería con los huéspedes.

¿Faltan mensajes o no cargan? Revisa estas tres cosas:

1. **Quién gestiona la mensajería.** En la extranet, abre la página **Connection management**. Las funciones de mensajería marcadas en verde se gestionan en la plataforma de tu proveedor (por ejemplo, el Messaging hub de Little Hotelier), no en la extranet.
2. **Los permisos de tu usuario.** Algunas funciones necesitan permisos concretos: las plantillas requieren el permiso para gestionar plantillas de mensajes a huéspedes, y los teléfonos requieren los permisos para gestionar reservas y ver los datos de contacto de los huéspedes.
3. **Las notificaciones.** En **Account > Notification settings**, elige cómo quieres enterarte de los mensajes nuevos, por ejemplo por email.

## Cómo configurar plantillas, mensajes programados y respuestas automáticas

Las tres cosas están en **Property > Messaging preferences**, en la extranet o en **More** en Pulse ([Partner Help: Templates and automatic replies](https://partner.booking.com/en-us/help/reservations/contact-extranet/setting-templates-automatic-replies-and-message-notifications)).

### Plantillas de mensaje

1. Abre la pestaña **Message templates** y haz clic en **Create new template**.
2. Escribe el mensaje. Los bloques de información predefinidos de Booking.com insertan el nombre del huésped, la hora de check-in, el nombre del alojamiento y otros datos de la reserva.
3. Añade un idioma e imágenes si los necesitas y haz clic en **Continue**.
4. Ponle un **Template name** y un **Template topic**, y haz clic en **Save template**.

Usa el mismo nombre de plantilla en todas las versiones de idioma. Booking.com enviará entonces el idioma del huésped y, si no existe, el que hayas puesto por defecto. No se pueden adjuntar PDF ni códigos QR, y cualquier enlace (por ejemplo, el de tu check-in online) debe aprobarse antes en **Security settings**.

Una plantilla previa a la llegada que puedes adaptar (cambia los corchetes por los bloques de información de Booking.com):

```text [pre-arrival-template.txt]
Hola [nombre del huésped], tenemos muchas ganas de recibirte en [nombre del alojamiento].

El check-in es a partir de las [hora de check-in]. Si vas a llegar después de las 22:00, responde a este mensaje con tu hora de llegada.
Parking: [información de parking]. Desayuno: [horario y precio].

Nunca te pediremos los datos de tu tarjeta por WhatsApp ni por SMS.
¡Hasta pronto!
```

### Mensajes programados

Abre la pestaña **Template scheduler**, haz clic en **Schedule a template**, elige cuándo sale y qué plantilla, y pulsa **Add to schedule**. Las etapas son: cuando un huésped reserva, una semana antes de la llegada, tres días antes, un día antes, el día de la llegada y un día antes de la salida. Las plantillas enviadas aparecen en tu bandeja.

### Respuestas automáticas

En la pestaña **Automatic replies**, abre los ajustes de un tema, márcalo, elige tu respuesta, asocia una plantilla con **Select template** y pulsa **Save**. Las solicitudes que entran dentro de tu política reciben una aceptación automática; para las que quedan fuera, combinas la respuesta con una plantilla. El huésped la recibe por email y en el chat.

### Help me reply y traducción

El chat de la extranet tiene un botón **Help me reply** que sugiere una plantilla o una respuesta de texto libre. Tú la revisas, la editas y la envías. Los mensajes también se pueden traducir en la extranet y en Pulse (inglés, alemán, francés, español, neerlandés, polaco, ruso, árabe y portugués).

## ¿Importa responder rápido?

Sí. El centro de ayuda de Little Hotelier explica que Booking.com lleva una puntuación interna de respuesta que mide la rapidez con la que contestas. Cuando un mensaje no necesita respuesta («Gracias, ¡nos vemos el viernes!»), márcalo como **No reply needed**: cierra la ventana de respuesta de 24 horas para que ese hilo no cuente en tu contra ([FAQ del Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

## Cómo responder a Guest Q&A (preguntas antes de reservar)

Guest Q&A permite que la gente te haga preguntas antes de reservar. Tus respuestas se publican en la página de tu alojamiento tras una moderación. Otros huéspedes pueden votarlas, así que las más útiles aparecen primero ([Partner Help: Guest Q&A](https://partner.booking.com/en-us/help/property-page/general-info/guest-qa-feature)).

Puedes eliminar respuestas desactualizadas o contestar en privado cuando la pregunta es personal. Para desactivarlo, ve a la pestaña **Inbox** de la extranet, **Questions for your property**, **Guest Q&A preferences**. Las preguntas que se repiten (parking, check-in tardío, mascotas) deberían estar también en la descripción de tu alojamiento.

## La opción propia de Little Hotelier: Messaging hub

Si usas el add-on **Guest Engagement** de Little Hotelier (figura para el plan Pro en la [página de precios](https://www.littlehotelier.com/pricing/) a fecha de octubre de 2026), su **Messaging hub** puede programar mensajes y chatear con los huéspedes de Booking.com, junto a WhatsApp, Airbnb, SMS y email. La mensajería de Booking.com no cuesta nada extra ahí ([FAQ del Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

1. Comprueba que Booking.com está conectado en **Channels**.
2. Ve a **Guest Engagement > Communication > Settings**, busca Booking.com y haz clic en **Configure**.
3. Haz clic en **Connect** y da permiso de mensajería con huéspedes a SiteMinder en el widget de Booking.com.
4. Actualiza la página y empieza a responder. Un icono **No reply needed** cierra los hilos que no necesitan respuesta.

La misma bandeja está en la app móvil de Little Hotelier, con notificaciones push de los mensajes nuevos ([app móvil](https://helpcentre.littlehotelier.com/en/articles/15547083-guest-messaging-in-the-little-hotelier-mobile-app)). Añade los dominios de Little Hotelier a la lista de permitidos de Booking.com o sus mensajes no llegarán a los huéspedes de Booking.com ([cómo hacerlo](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Cómo detectar mensajes falsos de Booking.com

Los estafadores imitan a Booking.com para robarte el acceso a la extranet y luego escriben a tus huéspedes con falsos enlaces de pago. La guía de Booking.com ([Partner Help: Phishing and email spoofing](https://partner.booking.com/en-us/help/account-and-log/security/online-security-awareness-phishing-and-email-spoofing)):

- **Comprueba el remitente.** Los emails de Booking.com siempre salen de una dirección que acaba en **@booking.com**, sea cual sea el subdominio. Una dirección como support@booking-103266.com es falsa.
- **Comprueba los enlaces antes de hacer clic.** Pasa el ratón por encima, o mantén pulsado en el móvil. Si la dirección no acaba en **.booking.com**, no la abras.
- **Fíjate en el tono.** Las amenazas urgentes (se suspenderá tu cuenta), las faltas de ortografía y los idiomas mezclados son señales de alarma. Booking.com «nunca hará peticiones urgentes sin enviar antes una comunicación previa»: llama antes a tu gestor de cuenta o al servicio de atención al cliente.
- **Si hiciste clic:** cambia primero la contraseña de tu email, luego la de Booking.com, analiza tu dispositivo y notifícalo en las 24 horas siguientes.

Protege también a tus huéspedes:

- **Activa Messaging security settings** (**Property > Messaging preferences > Security settings**, con autenticación en dos pasos). Indica las direcciones de email y los enlaces autorizados a llegar a los huéspedes: los emails de otras direcciones no llegan y los demás enlaces se eliminan ([Messaging security](https://partner.booking.com/en-us/help/account-and-login/security/understanding-messaging-security-settings)). Si Booking.com detecta actividad sospechosa en tu cuenta, desactiva los enlaces de tus mensajes.
- **Ten claro dónde ver los teléfonos.** Desde el 28 de septiembre de 2026, Booking.com ya no envía los teléfonos de los huéspedes a los channel managers ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Usa **Show phone number** en la extranet o en Pulse.
- **Cuéntales a los huéspedes cómo les pedirás dinero**, como en la última línea de la plantilla de arriba.

## La forma más rápida: Booking.com, WhatsApp y email en una sola bandeja

La **Bandeja** de Hotelier Tools (`/messaging`, alfa) junta los mensajes de Booking.com y Guest Q&A con tu WhatsApp y tu email, con la reserva al lado de cada conversación y una respuesta redactada por la IA para que la revises.

1. Conecta Booking.com una sola vez en **Credenciales > Extranet de Booking.com** (`/credentials/booking-extranet`) con tu usuario de partner, tu contraseña y el segundo factor (Pulse, SMS o una llamada). La sesión se guarda cifrada para tu alojamiento. Booking.com puede pedirte que verifiques de nuevo de vez en cuando; el asistente de conexión te guía.
2. Si quieres, conecta tu buzón de correo (Google, Microsoft o cualquier cuenta IMAP/SMTP) y [WhatsApp](/blog/whatsapp-little-hotelier).
3. Abre la **Bandeja** y filtra por **Booking.com**. Un hilo de Booking.com se vincula solo con su reserva.
4. Lee el borrador y el plan de la IA, edítalo o pídele al asistente privado de la derecha que consulte algo en Little Hotelier.

::screenshot{src="/images/blog/demo/es/guest-inbox-ai-plan-late-arrival.webp" alt="Bandeja de huéspedes con una conversación de WhatsApp abierta: el mensaje del huésped sobre una llegada tardía, la reserva asociada marcada como identidad verificada y pagada, el plan de la IA en borrador con el motivo y una respuesta editable, y el panel privado Asistente a la derecha" caption="Cada conversación muestra la reserva, un borrador de la IA esperándote y un asistente privado que el huésped nunca ve." path="/messaging"}
::

Dos límites, con total honestidad:

- **En Booking.com, la IA nunca envía nada por su cuenta.** Y todavía no garantizamos que tu respuesta llegue a Booking.com desde la bandeja: copia el borrador aprobado en la extranet o en Pulse.
- **Usa tu propia sesión de la extranet.** Hotelier Tools entra como tú, porque la API de mensajería de Booking.com solo está abierta a los partners de conectividad. El propio panel avisa de que las condiciones para partners de Booking.com restringen el acceso automatizado a la extranet, y de que la Connectivity API sigue siendo la vía admitida cuando la tienes.

Los dos mensajes fijos de Booking.com para pedir factura se reconocen sin IA: la bandeja te ofrece apuntar la estancia en **Factura a la salida** (mira [enviar la factura automáticamente al check-out](/blog/send-invoice-to-guest-at-checkout)).

### Elige hasta dónde puede llegar la IA

En **Canales** (`/messaging/channels`), cada cuenta conectada tiene un modo de respuesta:

| Modo | Qué ocurre |
|---|---|
| **Desactivado** | Los mensajes se recogen y se muestran. No se analiza ni se envía nada. |
| **Borrador** (por defecto) | La IA prepara una respuesta y un plan. No pasa nada hasta que lo apruebas. |
| **Respuesta automática** | La IA envía su respuesta tras una espera. Nunca puede cambiar una reserva. |
| **Autónomo** | La IA responde y además puede añadir una nota o fijar la hora de llegada en una reserva verificada, sin aprobación. Revísalo varias veces al día. |

Elijas lo que elijas, las conversaciones de Booking.com las envía siempre una persona. La IA de cara al huésped no tiene herramientas: devuelve un plan de una lista cerrada (enviar un mensaje, avisar al personal, añadir una nota a la reserva, fijar la hora de llegada) y nunca puede cancelar, cambiar fechas ni tocar pagos. Solo ve una reserva cuando el remitente está verificado, y un hilo de Booking.com cuenta como verificado.

::screenshot{src="/images/blog/demo/es/guest-messaging-reply-modes-menu.webp" alt="Página Canales de mensajería con el menú Cuando escribe un huésped abierto en la conexión de WhatsApp: Desactivado (solo recoger), Borrador (lo apruebo todo yo, seleccionado), Respuesta automática (sin cambios en reservas) y Autónomo (responde y cambia reservas)" caption="Elige un modo de respuesta por cuenta; aquí, para WhatsApp. Borrador, el modo por defecto, espera a que apruebes." path="/messaging/channels"}
::

### Enséñale tus respuestas: FAQ y conocimiento

La IA responde a los huéspedes solo con lo que le das, más la ficha de tu alojamiento. Abre **FAQ y conocimiento** (`/messaging/faq`):

1. En **Páginas y textos que la IA puede citar**, elige **Página de FAQ (URL)** o **Texto** y haz clic en añadir fuente. Una tarea programada puede volver a leer la página cada hora.
2. Rellena **Notas de la casa** con todo lo que no esté en esa página: wifi, horas de check-in y check-out, parking, consejos locales. Guarda las notas.
3. En **Ajustes > Alojamiento y conocimiento de la IA** (`/settings/property`), pulsa **Leer de Little Hotelier** para importar tu dirección, políticas, tipos de habitación y extras, y luego **Guardar**.

Un servicio que no hayas indicado se responde como «por confirmar», nunca como «sí». Cada mensaje que la IA lee y redacta consume créditos de IA, que ves en **Créditos IA** (`/messaging/credits`).

::screenshot{src="/images/blog/demo/es/guest-messaging-faq-knowledge.webp" alt="Página FAQ y conocimiento: una fuente de página de FAQ ya añadida, las opciones Página de FAQ (URL) y Texto con el botón de añadir fuente, y Notas de la casa rellenas con horas de check-in y check-out, precio del desayuno, recepción 24 horas y wifi gratis" caption="La IA cita solo tu página de FAQ, tus notas y la ficha de tu alojamiento." path="/messaging/faq"}
::

::demo-cta{path="/messaging"}
::

Todo lo que hace la bandeja está en la [página de la bandeja de huéspedes](/tools/bot/guest-inbox). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Booking.com, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a la extranet de Booking.com.
::

## Resumen

- Responde sobre la marcha en Pulse y deja que las plantillas, los mensajes programados y las respuestas automáticas cubran las preguntas de rutina.
- Marca como **No reply needed** los hilos que no necesitan respuesta y mantén cortas las respuestas de Guest Q&A, pensando en que son públicas.
- Trata como estafa cualquier mensaje «de Booking.com» que no venga de @booking.com o que enlace fuera de .booking.com. Activa Messaging security settings.
- Para una sola bandeja con WhatsApp y email, usa el Messaging hub de Little Hotelier o la bandeja de Hotelier Tools, donde la IA redacta y una persona envía.
