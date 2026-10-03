---
title: "Un huésped pide factura: cómo enviarla automáticamente al hacer el check-out desde Little Hotelier"
seoTitle: "Enviar la factura al huésped al salir desde Little Hotelier"
description: "Booking.com no factura a tus huéspedes: lo haces tú. Envía la factura desde Little Hotelier a mano o por email automático cuando el huésped haga el check-out."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [enviar factura al huésped, pedir factura hotel booking, factura hotel booking, little hotelier factura, factura hotelera, factura simplificada hotel, enviar factura automaticamente check out]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/es/invoice-at-checkout.webp
coverAlt: "Página Factura a la salida de Hotelier Tools: la tarea Facturación automática a la salida activa cada día a las 12:00, un rango de fechas con Buscar reservas y la tabla de reservas con un botón verde Facturar al salir para cada estancia"
faq:
  - q: "¿Booking.com envía facturas a los huéspedes?"
    a: "No. Booking.com explica que la reserva es un acuerdo entre tú y el huésped, así que el alojamiento debe proporcionar la factura, incluso cuando Booking.com ha cobrado el pago."
  - q: "¿Puede Little Hotelier enviar la factura por email automáticamente al hacer el check-out?"
    a: "No por sí solo. Sus emails automáticos a los huéspedes son la confirmación de reserva, la cancelación, el recordatorio previo a la llegada y el agradecimiento posterior a la salida. La factura la envías tú por email desde la reserva, o usas una herramienta como Factura a la salida de Hotelier Tools para que se envíe después del check-out."
  - q: "¿Por qué esperar al check-out para emitir la factura?"
    a: "Porque solo entonces las cifras son definitivas. Los extras, los pagos y los cambios de fechas suelen ocurrir durante la estancia, y una factura emitida demasiado pronto hay que corregirla con una factura rectificativa o una factura nueva."
  - q: "¿Verá el huésped Hotelier Tools en el email?"
    a: "No. Hotelier Tools le pide a Little Hotelier que envíe la factura, así que sale desde tu propia plantilla de email y tu propio remitente de Little Hotelier, igual que si pulsaras tú Email > Invoice."
  - q: "¿Qué pasa si la reserva no tiene email del huésped?"
    a: "Little Hotelier envía la factura al email del contacto principal de la reserva, así que sin él no hay adónde enviarla. Factura a la salida avisa de una estancia pasada sin email del huésped en vez de reintentar cada día, para que puedas imprimir la factura o pedirle una dirección al huésped."
---

Booking.com nunca factura a tus huéspedes: lo hace el alojamiento, aunque Booking.com haya cobrado el pago. En Little Hotelier la envías desde la reserva con **Invoices > Generate invoice** y después **Email > Invoice**. Para automatizarlo, marca la estancia en **Factura a la salida** de Hotelier Tools: cuando el huésped hace el check-out, una tarea diaria hace que Little Hotelier genere la factura y se la envíe por email.

## ¿Envía Booking.com una factura al huésped?

No. La ayuda para socios de Booking.com lo deja claro: cada reserva es un acuerdo entre tú y tu huésped, así que «es tu responsabilidad proporcionar la factura al huésped, no de Booking.com», sea quien sea el que gestionó el pago ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)).

La misma página añade tres reglas prácticas:

- Emite la factura a nombre del huésped, o de otro nombre que hayas acordado con él.
- No muestres a Booking.com como vendedor. El proveedor eres tú.
- Si te pagan con tarjeta virtual, el titular figura como «Booking.com (Agent)», pero tú facturas igualmente el valor completo de la estancia.

Los viajeros de empresa que reservaron con Booking.com for Business pueden pulsar **Request invoice**, que simplemente te envía un mensaje ([ayuda de Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). El trabajo sigue cayendo en tu recepción.

## ¿Qué debe incluir la factura de un hotel?

Depende de tu país, pero en la UE una factura completa con IVA incluye ([Comisión Europea](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)):

- fecha de emisión y un número único y correlativo
- tu nombre completo y tu dirección, y los del cliente
- el número de IVA del cliente, cuando este es quien debe el impuesto (normalmente una empresa)
- una descripción de la estancia, el precio unitario sin impuestos y la fecha de la operación si es distinta
- el tipo de IVA, la cuota de IVA y un desglose por tipos

Muchos países permiten también una factura más corta, la «factura simplificada», para algunas ventas. Cuando un huésped de empresa pide factura, normalmente necesita la completa, a nombre de la empresa y con su NIF.

Configura tu formato una sola vez en Little Hotelier, en **Front Desk > Setup > Guest Payment Options > Customise invoices**: título (**Invoice**, **Tax Invoice** o uno propio), prefijo y sufijo de numeración, logotipo, e impuestos mostrados incluidos o excluidos. Los cambios solo se aplican a las facturas nuevas ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## Cómo enviar una factura por email desde Little Hotelier (a mano)

1. Comprueba que la estancia ha terminado: en la pestaña **Details** de la reserva, pon el estado en **Checked-out** y revisa el saldo.
2. Ve a la pestaña **Invoices** y haz clic en **Generate invoice**.
3. Haz clic en **Email** y elige **Invoice**. Little Hotelier la envía al email del contacto principal de la reserva.

También puedes marcar **Email invoice** al **Record Payment** (registrar un pago). Si editas la reserva después, la pestaña Invoices muestra **Invoice is outdated**; haz clic para generar una factura corregida y envía esa. Fuentes: [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) y [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Para imprimir en vez de enviar, haz clic en **Print** y elige **Invoice**. El script gratuito [Botón Extra de Imprimir Factura](/tools/ui/extra-invoice-print-button) añade un enlace directo para que te saltes el menú:

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Pie de una reserva de Little Hotelier (interfaz en español) con un enlace adicional Imprimir Factura junto a los menús Imprimir y Email" caption="El script Botón Extra de Imprimir Factura añade un enlace de factura con un clic junto a Imprimir y Email." width="604" height="265"}
::

El inconveniente: es un paso manual con cada huésped. Los emails automáticos de Little Hotelier a los huéspedes son la confirmación de reserva, la cancelación, el recordatorio previo a la llegada y el agradecimiento posterior a la salida ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Ninguno envía la factura.

## Cómo enviar la factura automáticamente cuando el huésped hace el check-out

**Factura a la salida** de Hotelier Tools (beta) hace por ti los pasos manuales de arriba, después del check-out. Marcas una reserva una sola vez; marcarla no envía nada en ese momento.

1. Abre **Factura a la salida** (`/invoice-on-leave`). Si el aviso dice que aún no hay tarea, pulsa **Crear la tarea diaria (16:00, después del check-out)**.
2. Solo se emite factura de una estancia con el **check-out hecho** en Little Hotelier. Si tu equipo no hace el check-out de los huéspedes a mano antes de las 16:00, usa la tarjeta **Check-out automático** y pulsa **Crear la tarea diaria (15:05)**. Cierra las salidas del día en Little Hotelier, así que se mantiene apagada hasta que la crees.
3. Busca la reserva y activa **Facturar al salir** para ella. Los filtros de inscritas y no inscritas muestran cómo está cada estancia. Puedes inscribir a un huésped que todavía está en el alojamiento: la factura sale en la primera ejecución después de que se vaya.
4. Tras el check-out, la tarea diaria le pide a Little Hotelier que genere la factura, y Little Hotelier la envía por email desde tu propia plantilla y tu propio remitente.
5. Mira **Facturas pendientes de enviar** (`/invoice-on-leave/scheduled`) para ver lo que está en cola, lo que vence hoy, lo atrasado o lo ya facturado.

::screenshot{src="/images/blog/demo/es/invoice-at-checkout-full.webp" alt="Página completa Factura a la salida: un aviso rojo de que nada hace el check-out de los huéspedes automáticamente, la tarjeta Check-out automático (sin configurar) con Crear la tarea diaria (15:05), la tarea Facturación automática a la salida en marcha, el enlace Facturas pendientes de enviar y nueve reservas, cada una con un botón Facturar al salir" caption="Crea la tarea de check-out si la necesitas y marca la estancia con Facturar al salir. La factura se crea y se envía después de que el huésped haga el check-out." path="/invoice-on-leave" width="1440" height="1526"}
::

¿La necesitas ya? Cada fila tiene una acción **Procesar ahora** para emitir esa factura de inmediato.

### Qué la mantiene a salvo

- **La marca vive en Little Hotelier.** La inscripción se guarda como una etiqueta en las notas de la reserva en Little Hotelier, así que tu personal puede verla allí.
- **Sin envíos dobles.** Una segunda etiqueta marca «factura enviada», que se escribe solo cuando Little Hotelier acepta el email. Las estancias ya facturadas no se pueden inscribir de nuevo.
- **La misma comprobación previa que la facturación masiva.** Una factura de empresa sin NIF o sin dirección fiscal, o con un NIF mal formado, se rechaza en vez de enviarse a medias.
- **Recuperación y límites.** La tarea diaria mira 8 días atrás para recuperar ejecuciones perdidas y lee hasta 100 check-outs por ejecución. Una estancia pasada sin email del huésped se avisa una vez, no se reintenta cada día.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Se conecta con el propio acceso de tu hotel a Little Hotelier, y la factura es un documento de Little Hotelier.
::

::demo-cta{path="/invoice-on-leave"}
::

## ¿En qué idioma sale la factura?

Configúralo una vez en **Ajustes > Facturas** (`/settings/invoices`): **Según el país del huésped** (el país de la dirección del huésped decide el idioma) o **Siempre el mismo idioma**. Un país ausente o sin coincidencia usa tu **Idioma por defecto**.

## El huésped la necesita a nombre de una empresa, o después de irse

**Antes de que exista la factura:** añade el nombre de la empresa, el NIF y la dirección fiscal a los datos del huésped de la reserva en Little Hotelier. Hotelier Tools se niega a emitir una factura de empresa mientras falten el NIF o la dirección fiscal, o estén mal formados, así que al huésped no le llega nada a medias.

**Después de emitirla:** edita los datos en Little Hotelier y usa **Invoice is outdated** para generar una factura corregida. Si ya la habías marcado como final, haz clic en **Cancel invoice** y luego otra vez en **Generate invoice** ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). En España con VeriFactu, una factura finalizada se modifica con **Rectify invoice** ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Un enlace privado donde los huéspedes rellenen ellos mismos los datos de su empresa está en desarrollo y todavía no está disponible.

Si las peticiones de factura te llegan por mensajes de Booking.com, mira [cómo gestionar los mensajes de huéspedes de Booking.com](/blog/booking-com-guest-messages).

## ¿Cómo reenvío una factura?

Abre la reserva y usa otra vez **Email > Invoice**. Un consejo de momento: una vez que una factura está **marcada como final**, Little Hotelier ya no ofrece Print ni Email para ella. Envíala primero y finalízala después, o descarga el PDF más tarde desde el informe de facturas.

::callout{type="tip" title="Huéspedes que pagan por transferencia bancaria"}
El script [Botón de Email de Transferencia Bancaria](/tools/ui/bank-transfer-email-button) añade un botón que envía por email tus datos bancarios desde la reserva. Todavía no está publicado y se prepara bajo petición para cada alojamiento.
::

## Resumen

- El alojamiento, no Booking.com, debe facturar al huésped.
- En Little Hotelier: **Invoices > Generate invoice** y luego **Email > Invoice**, idealmente después del check-out.
- **Factura a la salida** de Hotelier Tools la envía por email automáticamente tras el check-out, desde tu propia plantilla de Little Hotelier, con comprobaciones de datos de empresa y de duplicados.
- A final de trimestre, [descarga todas tus facturas de una vez](/blog/download-all-little-hotelier-invoices). Todo lo que hace la función de facturación está en la [página de Facturación](/tools/bot/invoicing).
