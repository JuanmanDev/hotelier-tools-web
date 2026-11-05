---
title: "Una dirección de email del hotel para facturas de proveedores y accesos a portales: cómo funcionan las direcciones solo de recepción"
seoTitle: "Email del hotel para facturas de proveedores y accesos"
description: "Dale a tu hotel una dirección privada solo de recepción para las facturas de proveedores y una por cada acceso a un portal. Sin contraseña IMAP."
date: 2026-11-01
category: operations
tags: [email, facturas de proveedores, little hotelier, booking.com, expedia, seguridad]
keywords: [email para facturas de proveedores, dirección de correo para facturas hotel, buzón de facturas hotel, email solo para recibir facturas, reenviar facturas al email de contabilidad, email para usuario little hotelier, email para usuario extranet booking.com, correo de facturas recibidas]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/es/supplier-invoices-mailbox-settings.webp
coverAlt: "Ajustes de Facturas recibidas: la tarjeta Sugerencias con Sugerir facturas que no han llegado activado y 24 meses de historial, y la tarjeta Buzones con reservas@example.com conectado, Leer en busca de facturas activado, INBOX como carpeta que se lee, una primera revisión que mira 120 días atrás y las listas No leer nunca el correo de y Leer siempre el correo de vacías"
faq:
  - q: "¿Qué es una dirección de email solo de recepción para un hotel?"
    a: "Una dirección que solo recibe correo y nunca envía. En Hotelier Tools cada alojamiento puede tener la suya, como inv-7k2m9qx4hp@in.hotelier.tools para las facturas de proveedores. Lo que llega ahí entra en la cuenta de ese alojamiento, sin contraseña IMAP ni inicio de sesión de Microsoft."
  - q: "¿Puede otro hotel ver lo que se envía a mi dirección?"
    a: "No. Cada dirección y cada acceso pertenecen a un único alojamiento. La dirección está hecha de caracteres al azar, así que no revela el nombre de tu hotel, y nadie puede adivinar tus otras direcciones a partir de ella."
  - q: "¿Se convertirá in.hotelier.tools en mi usuario de Little Hotelier o de Booking.com?"
    a: "No. El dominio de Hotelier Tools nunca pasa a ser tu acceso principal ni tu email de recuperación en ningún sitio. Un acceso de servicio es un usuario más que añades a tu propia extranet, y puedes eliminarlo cuando quieras."
  - q: "¿Qué pasa con el correo enviado a una dirección que no existe?"
    a: "Se descarta sin avisar, sin rebote. Así nadie puede sondear qué direcciones existen. El correo enviado a una dirección para facturas retirada sigue llegando durante 30 días y después también se descarta."
  - q: "¿Hay un límite de correo que puede recibir una dirección?"
    a: "Sí. Cada alojamiento puede recibir 100 mensajes al mes en el servidor de correo de Hotelier Tools. Por encima del límite, los mensajes se guardan y se procesan cuando empieza el mes siguiente o cuando soporte sube el límite. Tu propio buzón conectado nunca cuenta."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier, Booking.com o Expedia?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder, Little Hotelier, Booking.com ni Expedia, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel."
---

Hotelier Tools da a cada alojamiento sus propias direcciones de email solo de recepción en el dominio `in.hotelier.tools`. Una es para las facturas de proveedores: los proveedores envían ahí sus PDF, fotos y facturas electrónicas, y cada una espera en **Facturas recibidas** a que la revises. Sin contraseña IMAP ni inicio de sesión de Microsoft. Las demás son una por portal (Little Hotelier, Booking.com, Expedia), para un acceso propio de «Hotelier Tools como usuario». A fecha de noviembre de 2026, las invitaciones que llegan a esas direcciones se retienen para una persona, no se aceptan automáticamente.

## ¿Qué es una dirección de email del hotel solo de recepción?

Es una dirección que recibe correo y nunca envía. Cada una tiene este aspecto:

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **La primera parte dice para qué es.** `inv` son las facturas de proveedores; `lh`, `bk` y `ex` son los accesos a Little Hotelier, Booking.com y Expedia. Ese código decide adónde va un mensaje. El remitente y el contenido nunca lo deciden.
- **El resto es aleatorio.** Diez caracteres, sin `0/o` ni `1/l/i` que se puedan confundir. No contiene el nombre ni el ID de tu hotel: solo la base de datos de Hotelier Tools sabe a qué alojamiento pertenece.
- **Cada uso tiene su propio token.** Si un proveedor conoce tu dirección para facturas, eso no le dice nada de tus direcciones de acceso.
- **Desde ella no se envía nada.** El dominio publica una regla que dice que ningún servidor puede enviar correo en su nombre, así que nadie puede enviar desde tu dirección.

## ¿Por qué no usar el buzón del propio hotel?

Puedes, y muchos hoteles empiezan así. La buena práctica habitual es una dirección aparte solo para facturas (por ejemplo `facturas@tuhotel.com`) y una regla de reenvío, para que el correo de los proveedores no se pierda entre los emails de reservas:

- **Gmail:** **Configuración > Ver todos los ajustes > Reenvío y correo POP/IMAP**, añade y verifica la dirección y después crea un filtro que reenvíe solo el correo que coincida ([ayuda de Google](https://support.google.com/mail/answer/10957)).
- **Outlook:** crea una regla que reenvíe los mensajes de tus proveedores ([soporte de Microsoft](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

El problema está en el paso siguiente. Para que un programa lea ese buzón, le das una contraseña IMAP o apruebas un inicio de sesión de Microsoft o Google, y a partir de ahí puede ver todo el buzón. Una dirección solo de recepción le da la vuelta: los proveedores envían a una dirección que solo recibe facturas, y no se abre nada de tu propio buzón.

Hotelier Tools admite las dos cosas. Si prefieres tenerlo todo en tu propio buzón, conéctalo en **Mensajería > Canales** y actívalo en **Ajustes > Facturas recibidas**. Es solo de lectura: nada se marca como leído, se mueve ni se borra (mira [cómo recoger las facturas de proveedores por email](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/es/supplier-invoices-mailbox-settings.webp" alt="Ajustes de Facturas recibidas: la tarjeta Sugerencias con Sugerir facturas que no han llegado activado y 24 meses de historial, y la tarjeta Buzones con reservas@example.com conectado, Leer en busca de facturas activado, INBOX como carpeta que se lee, una primera revisión que mira 120 días atrás y las listas No leer nunca el correo de y Leer siempre el correo de vacías" caption="La otra vía: tu propio buzón conectado, leído solo en busca de facturas. La dirección para facturas no necesita ningún buzón." path="/settings/received-invoices"}
::

## ¿Se comparte algo entre hoteles?

No. Cada dirección y cada acceso pertenecen a un único alojamiento:

- No existe ningún acceso de Hotelier Tools que pueda ver las extranets de dos hoteles. Un acceso robado o una cuenta bloqueada afectan a un solo hotel.
- **Nuestro dominio nunca pasa a ser tu acceso principal ni tu email de recuperación en ningún sitio.** Si nuestro correo se viera comprometido algún día, o dejaras de usar Hotelier Tools, no perderías el acceso a tu propia extranet.
- Cada servidor (despliegue) tiene su propio dominio y su propio buzón. El correo nunca pasa de la base de datos de un servidor a la de otro.

## Cómo configurar la dirección para facturas de proveedores

1. Abre **Ajustes > Facturas recibidas** (`/settings/received-invoices`) y busca la tarjeta **Dirección para facturas**.
2. Pulsa **Crear la dirección**. Obtienes una dirección para el alojamiento, hecha de caracteres al azar.
3. Pulsa **Copiar** y envíasela a tus proveedores: «Por favor, enviad vuestras facturas a esta dirección». La lista de **Facturas recibidas** (`/received-invoices`) muestra la misma dirección en **Los proveedores pueden enviar facturas a**.
4. Comprueba que la tarea **Leer el buzón del alojamiento** está activa. Trae lo que llega a la dirección; cada 5 minutos es la programación recomendada.
5. Revisa **Correo reciente** en la misma tarjeta: cada mensaje muestra su remitente, sus archivos y qué ha pasado con él.

También puedes reenviar a la dirección las facturas que ya tienes. Hotelier Tools enruta según la dirección a la que se entregó el mensaje, así que un mensaje reenviado o en copia oculta llega igualmente al alojamiento correcto. Si guardaste un email como archivo, **Añadir un correo a mano** acepta un `.eml` y le pasa las mismas comprobaciones.

¿Necesitas una dirección nueva, por ejemplo tras una oleada de spam? Pulsa **Nueva dirección**. La antigua sigue recibiendo durante 30 días, con una nota en cada mensaje que indica que llegó a una dirección retirada, y después deja de hacerlo.

## ¿Qué pasa con el correo enviado a la dirección para facturas?

Cada mensaje se trata como no fiable:

- **Primero, la comprobación de fraude.** Un mensaje con riesgo alto se retiene para una persona, nunca se importa, y se guarda su original.
- **La comprobación del remitente es nuestra.** Si el dominio del remitente superó su comprobación de autenticidad (DMARC) se lee de la cabecera que añade nuestro propio servidor de correo, nunca de la línea **De**. Un proveedor que no la supera recibe un aviso que una persona debe confirmar antes de que la factura se pueda confirmar o pagar.
- **Los adjuntos pasan por la importación normal.** Los PDF, las fotos (PNG, JPEG, WebP) y las facturas electrónicas (Facturae, UBL, CII) se añaden a **Facturas recibidas**. Cada una empieza como **Por revisar**: nada se confirma ni se paga solo.
- **Nunca dos veces.** Un archivo que ya llegó por tu propio buzón, o a mano, se reconoce por su contenido y no se vuelve a añadir.
- **Tamaño y plan.** Un mensaje de más de 25 MB no se guarda. En un plan sin facturación, el correo que llega a la dirección se guarda y se retiene, y la IA no lee nada.

El correo enviado a una dirección que no existe se descarta sin avisar, sin rebote. Nadie puede sondear qué direcciones son reales.

## Accesos de servicio: una dirección por portal

El segundo uso son los accesos. En lugar de darle a Hotelier Tools tu propia contraseña de Little Hotelier, Booking.com o Expedia, añades a tu extranet un usuario nuevo con una dirección privada, y ese usuario es Hotelier Tools, solo para tu alojamiento. Tú eliges sus permisos y puedes eliminarlo con un clic.

| Portal | Dirección | Dónde está |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Extranet de Booking.com | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Cada una de esas páginas tiene una tarjeta como **Hotelier Tools como usuario en Little Hotelier**: escribes el número de propiedad del propio portal, pulsas **Obtener la dirección de acceso** e invitas a esa dirección desde tu extranet.

Conviene tener claro en qué punto está esto, a fecha de noviembre de 2026:

- **Lo que es automático:** la dirección, la comprobación de que un mensaje viene de verdad del dominio del propio portal y las reglas de seguridad. Una alerta de seguridad («Nuevo inicio de sesión», «Contraseña cambiada») nunca se pulsa: se reenvía al propietario del alojamiento. Un cambio de contraseña que nadie pidió nunca se sigue, y se avisa al propietario.
- **Lo que hoy hace una persona:** todavía no se ha capturado ni leído la invitación de ningún portal, así que Hotelier Tools no puede aceptar una por su cuenta. Cada mensaje que llega a una dirección de acceso **se retiene para una persona**, y la tarjeta lo dice. Hasta que eso cambie, conecta con el formulario que hay más abajo en la misma página. En Little Hotelier, eso significa pegar el enlace de activación del usuario nuevo (mira [cómo añadir un usuario a Little Hotelier](/blog/add-user-little-hotelier)).

Cuando esté construido, una invitación solo se aceptará si es para el número de propiedad que indicaste, así que una dirección filtrada no puede meter el alojamiento de un desconocido en tu cuenta.

¿Prefieres tu propia dirección? La opción **Dónde escribe el portal a este usuario** de la tarjeta permite que un acceso use **Tu propio buzón**, uno de tus buzones conectados. Solo se leen los mensajes que envía el portal. Gmail y Microsoft 365 / Outlook pueden demostrar que un mensaje es auténtico; con otros proveedores, cada mensaje del portal se retiene para una persona.

## ¿Dónde encuentro todas mis direcciones?

**Credenciales** (`/credentials`) termina con **Direcciones del buzón del hotel**: la dirección para facturas y las tres direcciones de acceso, cada una con su estado (por ejemplo **Esperando la invitación** o **Activo**) y un enlace **Abrir** a la página que la gestiona. La lista es solo de lectura.

Se aplican dos reglas de visibilidad:

- Una dirección de acceso solo se muestra a las personas de tu equipo que gestionan las conexiones. Los demás ven su estado, con «La dirección solo se muestra a quien gestiona las conexiones».
- La dirección para facturas se muestra a quien puede ver las facturas recibidas.

Si tu servidor no tiene configurado un dominio de correo, la sección lo dice una vez en lugar de listar direcciones vacías.

## ¿Cuánto correo puede recibir cada alojamiento?

Cada alojamiento puede recibir **100 mensajes al mes** en el servidor de correo de Hotelier Tools. Sirve para proteger el servidor; no es un precio.

- Consúltalo en **Plan y facturación** (`/subscriptions`), en **Correo recibido**: el recuento, los mensajes en espera y la lista del mes.
- **Por encima del límite**, el mensaje se guarda, no se pierde. Espera y se procesa automáticamente, del más antiguo al más nuevo, cuando empieza el mes siguiente o cuando se sube el límite. El propietario recibe un solo email ese mes.
- **¿Necesitas más?** Usa **Contactar con soporte** en la misma tarjeta.
- El correo leído de tu propio buzón conectado y los archivos `.eml` que subes nunca cuentan.

## Pregúntale al asistente

Las direcciones tienen herramientas para el asistente de IA (`/chat`) y para clientes MCP como Claude:

- «¿A qué dirección envían las facturas los proveedores?» → `list_hotel_mail_addresses`
- «¿Ha llegado algo a la dirección para facturas esta semana?» → `list_hotel_mail_messages`
- «Crea una dirección nueva para las facturas de proveedores» → `rotate_hotel_mail_address`, solo después de que apruebes la tarjeta
- «¿Está conectado el usuario de Hotelier Tools en Booking.com?» → `get_service_login`

Ninguna herramienta devuelve nunca una dirección de acceso: solo se muestra a una persona en la página de la conexión. Aceptar una invitación tampoco es nunca tarea de una herramienta.

::demo-cta{path="/received-invoices"}
::

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder, Little Hotelier, Booking.com ni Expedia, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel, y sus direcciones nunca sustituyen a tu propio acceso ni a tu email de recuperación.
::

Guías relacionadas: [facturas de proveedores por email](/blog/supplier-invoices-by-email), [añadir un usuario a Little Hotelier](/blog/add-user-little-hotelier), [el panel](/tools/bot/dashboard).

## Resumen

- Cada alojamiento recibe direcciones privadas solo de recepción en `in.hotelier.tools`: `inv-…` para las facturas de proveedores y una por cada acceso a un portal.
- Las facturas de proveedores enviadas a `inv-…` llegan a **Facturas recibidas** como **Por revisar**, tras una comprobación de fraude y sin contraseña IMAP.
- No se comparte nada entre hoteles, y el dominio nunca pasa a ser tu acceso ni tu email de recuperación.
- Las direcciones de acceso ya existen, pero las invitaciones se retienen para una persona hasta que esté construido el paso de aceptación de cada portal.
- 100 mensajes al mes por alojamiento; encontrarás todas las direcciones al final de `/credentials`.
