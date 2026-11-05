---
title: "Expedia Collect: cómo cobrar con la tarjeta virtual o con una solicitud de pago (y que no se te escape ninguna)"
seoTitle: "Cobrar Expedia Collect: tarjeta virtual o solicitud de pago"
description: "En Expedia Collect el huésped paga a Expedia, pero tú solo cobras si cargas la tarjeta virtual o pides el pago. Plazos, pasos y cómo automatizarlo."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, pagos, tarjeta virtual, partner central, automatización]
keywords: [cobrar expedia collect, solicitar pago a expedia, expedia collect no me paga, tarjeta virtual expedia cuándo cobrar, expedia partner central pagos, expedia collect vs hotel collect, pagos automáticos expedia, tarjeta virtual expedia caducada, cuánto tarda expedia en pagar]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/es/expedia-collect-checkout-check.webp
coverAlt: "Comprobaciones A la salida de Hotelier Tools con la comprobación Cobro Expedia Collect desactivada: mira en Partner Central si el pago se ha pedido cuando el huésped se va, enlaza al historial de pagos de Expedia y avisa de que nunca vuelve a pedir una estancia que Expedia rechazó ni cobra tarjetas virtuales"
featured: true
faq:
  - q: "¿Cuánto tiempo tengo para solicitar el pago de una reserva de Expedia Collect?"
    a: "365 días desde la fecha de salida del huésped. Pasado ese plazo, Partner Central ya no ofrece la solicitud de pago para esa estancia, así que una reserva olvidada puede ser dinero que nunca cobras."
  - q: "¿Cuándo puedo cobrar la tarjeta virtual de Expedia?"
    a: "Desde la fecha de llegada. Expedia recomienda cobrarla el día del check-in y, si falla, volver a intentarlo al final del día, por la diferencia horaria. Cobra el importe exacto que aparece; la tarjeta se desactiva seis meses después de la salida."
  - q: "¿Cuánto tarda Expedia en pagar una solicitud de pago?"
    a: "Expedia envía el pago a tu banco según tus condiciones de pago, normalmente 30 días después de la solicitud. El banco puede tardar otros 2 a 8 días."
  - q: "¿Tengo que pedir a mano cada pago de Expedia Collect?"
    a: "No si usas la tarjeta virtual, que cobras tú, o los pagos automáticos donde Expedia los ofrece (algunos mercados, con un descuento del 2 %). Si no, cada estancia necesita una solicitud de pago en Partner Central, o una herramienta que la envíe por ti."
  - q: "¿Puede Hotelier Tools pedir automáticamente los pagos de Expedia Collect?"
    a: "Sí, en beta. Una tarea programada pide a Expedia que pague las estancias después de la salida. Empieza en vista previa, nunca pide dos veces la misma estancia, nunca inicia sesión por su cuenta y nunca cobra tarjetas virtuales."
  - q: "¿Forma Hotelier Tools parte de Expedia o de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a Expedia Group, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a Partner Central."
---

Con Expedia Collect, el huésped paga a Expedia al reservar y Expedia te debe ese dinero después de la estancia. Lo cobras de una de tres formas: cargas la tarjeta virtual de Expedia a partir de la fecha de llegada, envías una solicitud de pago en Partner Central (**Payments > Request a payment from Expedia Group**) en los 365 días siguientes a la salida, o Expedia te paga con los pagos automáticos donde existen. Si no haces nada de esto, el dinero no se cobra nunca. Hotelier Tools (beta) muestra en qué punto está el pago de cada estancia de Expedia y puede enviar las solicitudes por ti de forma programada.

Las reglas de Expedia de abajo se han contrastado con la ayuda de Partner Central de Expedia Group a fecha de noviembre de 2026.

## ¿Cómo se cobran las reservas de Expedia Collect?

Con **Expedia Collect (EC)**, el viajero paga por adelantado a Expedia o a uno de sus partners B2B, y tu notificación de reserva muestra la tarifa neta: lo que Expedia te paga después de descontar su comisión ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect), en inglés). Después de la estancia lo cobras de una de estas formas:

| Cómo cobras | Qué haces | Cuándo llega el dinero | Coste |
|---|---|---|---|
| **Tarjeta virtual** | La cargas en tu TPV a partir de la fecha de llegada | Los plazos habituales de tu procesador de pagos | Sin comisión de Expedia, solo la de tu procesador |
| **Solicitud de pago** (transferencia) | La pides en Partner Central en los 365 días siguientes a la salida | Normalmente 30 días después, más 2 a 8 días del banco | Gratis |
| **Pagos automáticos** (algunos mercados) | Nada por estancia | El último día del mes siguiente a la salida | Descuento del 2 % |

Otros dos modelos se parecen pero funcionan distinto. Con **Hotel Collect**, el huésped te paga a ti en el alojamiento, así que no hay nada que pedir a Expedia. **Expedia Traveler Preference** deja que cada huésped elija uno u otro al reservar.

En algunos mercados Expedia ha sustituido EC por **Updated Expedia Collect (EC+)**. Con su modelo neto, la tarjeta virtual se carga con el total de la reserva menos la comisión de Expedia y los impuestos. Con el modelo bruto lleva el importe completo y Expedia te factura aparte ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## Cómo cobrar la tarjeta virtual de Expedia

La **Expedia Virtual Card (EVC)**, ahora simplemente «virtual card» en Partner Central, es una tarjeta de un solo uso que Expedia emite para cada reserva de Expedia Collect cuando te das de alta en ella ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Busca los datos de la tarjeta: en la notificación de reserva (si tienes channel manager), en la reserva dentro de Partner Central, en **Payment method**, o en la página de consulta **Virtual cards** con el ID de reserva y la fecha de llegada ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Cóbrala **a partir de la fecha de llegada**, por el total exacto que aparece y en la moneda de tu contrato.
3. Si la rechaza por la mañana, vuelve a intentarlo al final del día. Expedia explica que la tarjeta puede no estar activa aún por la diferencia horaria.
4. Los extras y la tasa turística se cobran en la tarjeta del propio huésped, nunca en la tarjeta virtual.

Ojo con los plazos. El artículo sobre el cobro dice que la tarjeta sigue siendo válida 180 días después de la salida, y el de la consulta dice que se desactiva seis meses después de la salida. ¿Cobras en otra moneda? Usa el tipo de cambio de ese día, o te arriesgas a un rechazo o a un contracargo.

## Cómo solicitar el pago a Expedia Group en Partner Central

Si no usas la tarjeta virtual, cada estancia de Expedia Collect necesita una solicitud de pago ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. Elige **Payments** en el menú.
2. En **Quick tasks**, elige **Request a payment from Expedia Group**.
3. Busca **By Date Range** (como mucho 31 días cada vez) o **By Reservation ID** (hasta 200 IDs).
4. Marca las reservas, revisa el importe de la reserva y de los impuestos y elige **Create Invoice**.
5. Guarda el **Transmission Queue ID** que aparece en la confirmación. Es la referencia de esa solicitud.

Si Partner Central no tiene los datos de una reserva, sube en su lugar un archivo de solicitud de pago. Si tus datos bancarios están incompletos, un aviso emergente en la página de solicitud te lo dice: corrígelos primero o el pago se retrasará.

## ¿Cuándo paga Expedia y qué pasa si se te olvida?

Expedia envía el dinero según tus condiciones de pago, normalmente 30 días después de la solicitud, y el banco puede tardar otros 2 a 8 días. Una reserva facturada solo por una parte de su importe necesita una nueva solicitud por el resto. En un no-show o una salida anticipada, ponte en contacto con Expedia para pedir un reembolso.

Si nadie solicita una estancia, **Expedia no la paga**. Pasados 365 días desde la salida, la opción desaparece de Partner Central. Un verano con mucho trabajo y diez estancias olvidadas es dinero de verdad que se queda en Expedia.

Los pagos automáticos eliminan el paso por estancia, pero solo en algunos mercados, y se quedan un 2 % ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Mira en **Payments > Payment Settings** si tu alojamiento los tiene.

## Cómo conciliar los pagos de Expedia Collect

Cada mes, cruza tres listas:

- **Tus salidas:** todas las estancias de Expedia Collect que han terminado.
- **Tus solicitudes:** en Partner Central, **Payments > See all invoices**, un rango de fechas y la columna **Status**. Se guardan dos años de historial, con el importe remitido y la fecha de pago ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **Tu banco:** las transferencias recibidas, con los queue IDs.

Una salida sin solicitud es dinero que hay que pedir. Una solicitud sin transferencia después de 40 días merece una pregunta a Expedia. Cuando una estancia esté pagada, registra el pago en tu PMS, para que Little Hotelier no muestre un saldo que el huésped no debe.

## La forma más rápida: pedir los pagos de Expedia Collect desde Hotelier Tools (beta)

Hotelier Tools se conecta a tu cuenta de Partner Central y hace por ti la ronda de arriba. Lee todas las estancias de Expedia, muestra en qué punto está su dinero y pide a Expedia que pague, a mano o de forma programada.

### 1. Conecta Partner Central

Abre **Credenciales > Expedia Partner Central** (`/credentials/expedia-extranet`). El inicio de sesión se hace en un navegador en el servidor: Hotelier Tools escribe el email y la contraseña, y tú solo respondes a lo que pregunte Expedia.

- **Tengo un acceso:** escribe el email y la contraseña de acceso. En un dispositivo nuevo, Expedia envía un código por email, que escribes en la casilla **Código de Expedia**. Los siguientes inicios de sesión reutilizan el dispositivo guardado y normalmente no piden código.
- **Tengo un enlace de invitación:** una opción más limpia es un usuario de Partner Central solo para Hotelier Tools. Invítalo desde tu cuenta y pega tal cual el enlace del email de invitación de Expedia. El asistente crea la contraseña (de 12 a 64 caracteres, con mayúsculas y minúsculas, un número y un símbolo) y el perfil que exige Expedia, que incluye un teléfono.

Cualquier paso que el asistente no conozca, como configurar un SMS o una comprobación de seguridad, muestra una imagen de la página: haces clic sobre ella y escribes en el campo. **Mantener la sesión iniciada** se marca siempre y la sesión se guarda cifrada. La tarea **Mantener la sesión de Expedia** (cada 20 minutos) la usa para que no caduque por inactividad, y nunca inicia sesión por su cuenta. Si la sesión caduca, una persona vuelve a iniciarla.

### 2. Mira en qué punto está el pago de cada estancia

La tarjeta **Pagos de Expedia Collect**, en la misma página, lista todas las estancias de Expedia con salida en las fechas que elijas. Elige **Últimos 30 días**, **Este mes**, **Mes pasado**, **Últimos 3 meses**, **Este año** o **El año pasado**, o cualquier rango de hasta 366 días. Expedia se lee de 31 en 31 días, igual que hace el propio formulario de Partner Central.

Cada estancia tiene un estado, con una etiqueta que filtra la lista:

| Estado | Qué significa |
|---|---|
| **Por pedir** | Ya ha salido, no hay nada pagado y nunca se ha pedido: puedes pedirla ahora |
| **Aún no** | Todavía no ha salido, o no hay nada que pedir |
| **Pedida** | Pedida desde Hotelier Tools; Expedia la aceptó y dio un ID de cola |
| **Rechazada por Expedia** | Expedia respondió con un error; una persona puede volver a pedirla |
| **Comprobar en Partner Central** | No hubo una respuesta legible: mira en Partner Central antes de volver a pedirla |
| **Conciliada por Expedia** | Pedida desde aquí; los extractos de Expedia dicen que aceptó el importe y el pago está pendiente |
| **Pagada por Expedia** | Pedida desde aquí; los extractos de Expedia dan la fecha y el importe pagado |
| **Pagada** / **Facturada** | Los registros de Expedia dicen que se pagó un importe, o la estancia está facturada |
| **Fuera de la lista de Expedia** | Pedida a mano en Partner Central, o pagada con los pagos automáticos |
| **Tarjeta virtual** | Cobra la tarjeta: no hay nada que pedir |
| **Hotel Collect** | El huésped te paga directamente |

Marca las estancias, o usa la casilla de seleccionar todo, y pulsa **Pedir el pago de N estancias**. Cuando confirmas, Hotelier Tools envía una sola solicitud para todas, la misma solicitud **Create Invoice** que hace Partner Central. Cada estancia se reserva antes de enviarse, así que nunca se envía dos veces. **Detalles** muestra lo que dice Expedia de una estancia y el historial de la solicitud.

::screenshot{src="/images/blog/demo/es/expedia-collect-payments-card.webp" alt="Página Expedia Partner Central en Hotelier Tools: la tarjeta Pagos de Expedia Collect con un enlace al Historial de pagos y el aviso Conecta Expedia arriba para verlas, la tarjeta Pedir los pagos de Expedia Collect automáticamente marcada como Sin configurar con los botones Cada día a las 09:30, Elegir y Ejecutar ahora, y una lista Cómo funciona" caption="En la demo Expedia no está conectado, así que la tarjeta de pagos está vacía. Una vez conectado, lista cada estancia con su estado; la tarjeta de abajo programa las solicitudes." path="/credentials/expedia-extranet"}
::

### 3. Déjalo funcionar de forma programada

En **Peticiones de pago automáticas a Expedia** (`/credentials/expedia-extranet/automatic-requests`), pulsa **Cada día a las 09:30** (la programación recomendada) o **Elegir** para poner tu propia hora. Eso crea la tarea **Pedir los pagos de Expedia Collect**. Empieza en **Vista previa**: cada ejecución escribe en su registro qué estancias pediría y no envía nada. Cuando la lista te parezca correcta, cambia **Qué hace cada ejecución** a **Solicitar: pedir a Expedia que pague**.

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Días tras la salida** | 1 | Pide el pago cuando la salida tiene al menos estos días |
| **Mirar atrás (días)** | 30 | Hasta cuántos días atrás se buscan salidas |
| **Máximo por estancia** | Sin límite | Una estancia que pida más queda para una persona |
| **Máximo de estancias por ejecución** | 20 | El resto espera a la siguiente ejecución |

Lo que nunca hace: iniciar sesión en Partner Central, pedir dos veces una estancia, pedir una estancia pagada con tarjeta virtual o que aún no ha salido, ni volver a pedir una estancia que Expedia rechazó o no respondió. Esas quedan para una persona, y el registro de la ejecución las nombra.

¿Ya usas las comprobaciones **A la salida**? Su comprobación **Cobro Expedia Collect** avisa de un importe que aún no se ha pedido. Con la corrección **Pedir el pago a Expedia (pide dinero a Expedia)** activada, envía la solicitud cuando el huésped se va. Puedes tener las dos activas: cada estancia se reserva una sola vez.

::screenshot{src="/images/blog/demo/es/expedia-collect-checkout-check.webp" alt="Página de comprobaciones A la salida: las comprobaciones Validación de dirección y procedencia y Check-out automático, y después la comprobación Cobro Expedia Collect, desactivada, con lo que puede hacer (avisar de un importe aún no pedido y, con su corrección activada, pedirlo a Expedia una vez por estancia) y lo que no hace (volver a pedir una estancia rechazada, cobrar tarjetas virtuales)" caption="El momento de la salida puede pedir a Expedia cada estancia cuando el huésped se va, una vez por estancia." path="/automated-checks/moment/at_checkout"}
::

### 4. Sigue el historial

**Pagos de Expedia** (`/automated-checks/expedia-payments`) es el registro de todas las solicitudes hechas desde Hotelier Tools: por una persona, por la tarea programada, por la comprobación de salida, por un asistente o por la API. Filtra por estado, por **Quién lo pidió** y por fechas de salida, y abre una fila para ver cada reserva de envío y cada respuesta de Expedia. **Volver a pedir** reintenta las estancias que Expedia rechazó. Para una estancia sin respuesta, primero marcas **He mirado en Partner Central y estas estancias no están**, porque pedirla dos veces podría significar cobrarla dos veces.

En una reserva de Expedia (`EXP-` seguido del código de confirmación), la sección **Pagos** de la reserva tiene un panel **Pago de Expedia** con **Consultar a Expedia**, y un enlace que abre la tarjeta de pagos con esa estancia marcada.

También puedes preguntar al asistente de IA del panel, o a Claude y ChatGPT a través del [servidor MCP](/blog/what-is-mcp-server-hotels). «¿Qué pagos de Expedia se han rechazado este mes?» llama a `list_expedia_payment_requests`. «Vuelve a pedir a Expedia la EXP-2570237397» llama a `request_expedia_payments`, una herramienta que necesita tu aprobación: en el chat del panel muestra una tarjeta y no se envía nada hasta que confirmas. Las mismas consultas y solicitudes están en la API REST.

### Límites, con honestidad

- **Beta, y nuevo.** Las solicitudes de pago se lanzaron en noviembre de 2026.
- **Solo sigue el pago de las solicitudes hechas desde aquí.** Desde la versión 1.71 (noviembre de 2026), Hotelier Tools lee la página **Statements and invoices** de Partner Central (los últimos 12 meses) y muestra una solicitud como **Conciliada por Expedia** (aceptada, pago pendiente) o **Pagada por Expedia** (con la fecha y el importe), también en el panel de Expedia de la reserva. Una solicitud que aún no aparece en esa página sigue como **Pedida**.
- **Nunca cobra tarjetas virtuales.** Esas estancias aparecen como **Tarjeta virtual**: cóbralas en tu TPV.
- **Usa tu propia sesión de Partner Central.** Las condiciones para partners de Expedia restringen el acceso automatizado a Partner Central. Hotelier Tools inicia sesión como tu usuario, nunca por su cuenta, y no se comparte nada entre alojamientos.
- **En la demo Expedia no está conectado**, así que la demo muestra las tarjetas pero ninguna estancia de Expedia.

::demo-cta{path="/credentials/expedia-extranet"}
::

Todas las comprobaciones están en la [página de comprobaciones automáticas](/tools/bot/automated-checks). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Expedia Group, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel y con tu propio acceso a Expedia Partner Central.
::

Guías relacionadas: [mensajes de huéspedes de Expedia](/blog/expedia-guest-messages), [reservas de OTA que no llegan a Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [tarjeta no válida o no-show en Booking.com](/blog/booking-com-invalid-card-no-show).

## Resumen

- Expedia Collect significa que Expedia guarda el dinero del huésped hasta que lo reclamas.
- Tarjeta virtual: cóbrala a partir de la fecha de llegada, por el importe exacto, antes de que se desactive seis meses después de la salida.
- Solicitud de pago: **Payments > Request a payment from Expedia Group**, en los 365 días siguientes a la salida; se paga normalmente 30 días después.
- Concilia cada mes: salidas frente a **See all invoices** frente a tu banco.
- Hotelier Tools (beta) muestra el estado de cada estancia y puede pedir los pagos de forma programada, empezando en vista previa y sin pedir nunca dos veces.
