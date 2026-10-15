---
title: "Cómo descargar todas las facturas de Little Hotelier de una vez (para el IVA trimestral)"
seoTitle: "Descargar todas las facturas de Little Hotelier (2026)"
description: "Little Hotelier exporta en un ZIP las facturas que ya existen. Así se hace, y cómo crear las que faltan y enviar a tu gestor un ZIP y un CSV por trimestre."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [descargar todas las facturas de little hotelier, facturas trimestrales hotel, modelo 303 hotel facturas, factura hotelera, little hotelier facturación, exportar facturas little hotelier]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/es/invoices-by-quarter.webp
coverAlt: "Página de facturas de Hotelier Tools con 66 facturas en total, el 4T y el 3T de 2026 con los botones Vista previa CSV y ZIP, y septiembre de 2026 abierto como una tabla de números de factura, huéspedes, NIF, fechas de salida y totales"
featured: true
faq:
  - q: "¿Puede Little Hotelier descargar todas mis facturas en PDF de una vez?"
    a: "Sí, las que ya existen. Ve a Front Desk > Reports > Invoices, filtra las fechas, pulsa Download invoice PDFs y luego Download zip. Little Hotelier te pide antes que lo confirmes con la autenticación multifactor."
  - q: "¿Sincroniza Little Hotelier las facturas con Xero o QuickBooks automáticamente?"
    a: "No. El informe Accounting exporta las facturas marcadas como definitivas a un archivo CSV pensado para importarlo en Xero y QuickBooks, y ese archivo lo importas tú. Solo se incluyen las facturas finalizadas."
  - q: "¿Cambiará Hotelier Tools mi numeración o mi plantilla de facturas?"
    a: "No. Hotelier Tools le pide a Little Hotelier que genere cada factura, así que es un documento de la propia Little Hotelier, con tu numeración, tu logo y tu diseño de Customise invoices."
  - q: "¿Qué pasa con las facturas anuladas en mi exportación?"
    a: "En Little Hotelier, una factura definitiva anulada pasa a Older invoices con el estado Cancelled, y sus datos siguen apareciendo en las exportaciones. Avisa a tu gestor para que los ingresos no se cuenten dos veces."
  - q: "¿Cuánto cuesta Hotelier Tools?"
    a: "Es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. Los hoteles que empiecen antes del 31 de diciembre de 2026 pagarán después 50 € por hotel y mes durante 2027. No hace falta tarjeta para empezar."
---

Sí. Little Hotelier puede meter en un solo ZIP todas las facturas que **ya existen**: abre **Front Desk > Reports > Invoices**, filtra el trimestre y pulsa **Download invoice PDFs**. Lo que no hace es crear las facturas que nadie generó ni avisarte de las que todavía no deberían emitirse. Para eso, Hotelier Tools genera las facturas que faltan en una sola ejecución, se niega a emitir las arriesgadas y te da el trimestre como un ZIP de PDF más un resumen en CSV.

## ¿Puede Little Hotelier exportar todas las facturas de forma nativa?

Sí. A fecha de octubre de 2026, el centro de ayuda de Little Hotelier describe tres formas de sacar las facturas. Cuál necesitas depende de lo que te pida tu gestor.

| Método | Qué obtienes | La pega |
|---|---|---|
| Informe de facturas (Invoice report) | Un ZIP de facturas en PDF y una lista en CSV | Solo las facturas que ya existen |
| Informe contable (Accounting report) | Un CSV pensado para importar en Xero y QuickBooks | Solo las facturas marcadas como definitivas |
| Reserva por reserva | Un PDF (Print o Save as PDF) | Lento para un trimestre entero |

### El informe de facturas (PDF en un ZIP)

1. Ve a **My Apps > Front Desk > Reports** y haz clic en **Invoices**.
2. Elige el rango de fechas de tu trimestre. Si quieres, filtra por **Invoice status** y **Payment status**, y haz clic en **Apply**.
3. Haz clic en **Download invoice PDFs** y luego en **Download zip**.
4. Confirma el aviso de autenticación multifactor. El ZIP se descarga.

**Export**, en el mismo informe, te da un CSV en su lugar. Fuente: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report) (en inglés).

### El informe contable (CSV para Xero o QuickBooks)

Ve a **My Apps > Front Desk > Reports > Accounting**, elige **Yesterday**, **Last 7 days** o fechas personalizadas, y haz clic en **Export**. Obtienes un CSV (o un ZIP si la exportación es grande) con contacto, dirección, número de factura, fechas, importes, cuenta y códigos de impuesto.

Dos límites: solo se exportan las facturas **marcadas como definitivas**, y el archivo es para importarlo a mano. No es una sincronización en vivo. Los códigos de cuenta se fijan una sola vez en **Front Desk > Setup > Accounting Integration**. Fuentes: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) y [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Una a una

Abre la reserva, haz clic en **Print**, elige **Invoice** y selecciona **Save as PDF** en la ventana de impresión ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Si lo haces a menudo, el script gratuito [Botón Extra de Imprimir Factura](/tools/ui/extra-invoice-print-button) pone un enlace de impresión directo en la reserva.

## Lo que no hace la exportación nativa

La descarga es la parte fácil. El trimestre suele torcerse antes:

- **Facturas que faltan.** El ZIP solo contiene facturas que alguien generó. El centro de ayuda describe crearlas de una en una (pestaña **Invoices** > **Generate invoice**), así que una estancia en la que nadie hizo clic simplemente no está.
- **Duplicados.** Cada solicitud de generar crea un documento nuevo en Little Hotelier, así que volver a generar una estancia puede dejar dos facturas donde tu gestor espera una.
- **Facturas anticipadas.** Una factura emitida antes de que el huésped haga el check-out queda desfasada en cuanto se añade un extra o un pago, y arreglarla supone una factura corregida, una factura de abono o, en España, una factura rectificativa.
- **Finalizar.** La exportación contable necesita que cada factura esté marcada como definitiva, y el centro de ayuda describe hacerlo reserva por reserva.

## Cómo descargar un trimestre entero en un ZIP y un CSV (la forma más rápida)

Hotelier Tools es un panel que se conecta a Little Hotelier con tu propio acceso. Su página **Descarga de facturas** crea las facturas de un rango de fechas en una sola ejecución y te entrega el resultado por trimestre.

1. Regístrate en [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) y conecta Little Hotelier en **Credenciales**. Tu acceso se guarda cifrado.
2. En el menú, abre **Descarga de facturas** (`/invoices`).
3. Pulsa **Generar facturas** y elige las fechas, por ejemplo del 1 de julio al 30 de septiembre.
4. La app lee esas reservas de Little Hotelier y crea facturas para las estancias que cumplen los requisitos. Lo que no puede facturar va a **Errores** con el motivo. No se omite nada sin avisar.
5. Tus facturas aparecen agrupadas por trimestre y mes. En el trimestre, pulsa **ZIP** para descargar todos los PDF, o **Vista previa CSV** para revisar antes el resumen.

::screenshot{src="/images/blog/demo/es/invoices-quarter-zip-downloaded.webp" alt="Página de facturas agrupadas por trimestre, con los botones Vista previa CSV y ZIP en el 4T y el 3T de 2026, la tabla de facturas de septiembre de 2026 abierta y un aviso Paquete descargado que confirma que se descargó el paquete de facturas del 3T de 2026" caption="Cada trimestre tiene su propio ZIP de PDF y un resumen en CSV. Un clic en ZIP descarga el trimestre entero." path="/invoices"}
::

Las facturas son documentos de la propia Little Hotelier. Hotelier Tools le pide a Little Hotelier que genere cada una, así que tu numeración, tu logo y tu diseño de **Customise invoices** se quedan exactamente como están.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el acceso a Little Hotelier de tu propio hotel.
::

## Comprobaciones antes de facturar: NIF que faltan, facturas anticipadas y duplicados

Antes de pedirle una factura a Little Hotelier, Hotelier Tools hace una comprobación previa. Se niega a facturar una estancia cuando:

- el huésped **todavía no ha hecho el check-out**, porque las cifras no son definitivas
- es una **factura a empresa sin NIF** o sin domicilio fiscal
- el **NIF tiene un formato incorrecto**
- la estancia **ya está facturada**, lo que evita duplicados

Un huésped particular no necesita datos fiscales, así que para él la falta del documento de identidad es solo un aviso.

Esa es la diferencia entre un ZIP en el que tu gestor puede confiar y uno que te devuelve con preguntas.

## ¿Qué pasa con las reservas que no se pueden facturar?

Van a **Errores** (`/invoices/errors`), una fila por reserva con el motivo.

1. Elige el rango de fechas arriba.
2. Filtra por tipo de incidencia: **Falta DNI**, **Pago pendiente**, **Sin check-out**, **Error al descargar** y otros.
3. Corrige la reserva en Little Hotelier: añade el NIF, registra el pago o haz el check-out del huésped.
4. De vuelta en Errores, vuelve a comprobarla o márcala como resuelta. **Copiar CSV** te da la lista para un compañero.

::screenshot{src="/images/blog/demo/es/invoice-failures.webp" alt="Página Errores e incidencias del 1 de julio al 30 de septiembre de 2026 con Copiar CSV, filtros por tipo de incidencia como Falta DNI, Pago pendiente, Sin check-out y Error al descargar, y una tabla de reservas con su ID de factura, fechas de estancia, total, etiqueta de incidencia, motivo y acciones" caption="Cada reserva que una ejecución no pudo facturar, con el motivo y una forma de reintentarlo." path="/invoices/errors"}
::

Si una estancia se queda bloqueada por un saldo de redondeo de uno o dos céntimos, la opción de ajuste de céntimos en **Ajustes > Facturas** puede cerrar esos saldos mínimos.

::demo-cta{path="/invoices"}
::

## ¿En qué idioma saldrán las facturas?

Lo eliges en **Ajustes > Facturas** (`/settings/invoices`):

- **Según el país del huésped**: cada factura usa el idioma del país de la dirección del huésped. Si falta el país o no se reconoce, se usa tu idioma por defecto.
- **Siempre el mismo idioma**: todas las facturas en un idioma, sea quien sea el huésped.

Elige el **Idioma por defecto** y pulsa **Guardar cambios**.

## Qué enviar a tu gestor cada trimestre

Una rutina corta que evita la mayoría de los emails de seguimiento:

1. **Ejecuta el trimestre** unos días después de que termine, para que los check-outs tardíos estén cerrados.
2. **Vacía Errores** hasta que solo queden las estancias que de verdad no necesitan factura.
3. **Descarga el ZIP y el CSV** y envía los dos.
4. **Revisa los números de factura** por si hay huecos o repeticiones antes de enviar.
5. **Menciona las facturas anuladas.** En Little Hotelier, anular una factura definitiva la mueve a **Older invoices** con el estado Cancelled, y sus datos siguen apareciendo en las exportaciones ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Tu gestor necesita saberlo para que los ingresos no se cuenten dos veces.

En España esto alimenta tu declaración trimestral de IVA ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Si usas VeriFactu, Little Hotelier marca las facturas como definitivas enviándolas directamente a la AEAT ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools no tiene función propia de VeriFactu, así que deja ese paso en Little Hotelier. En cualquier país con facturación electrónica obligatoria, trata el ZIP como copias para tus archivos y consulta las normas con tu gestor.

Los desarrolladores también pueden obtener los PDF de las facturas uno a uno con la [API REST de Hotelier Tools](/blog/little-hotelier-api). Y si tu gestor quiere también los datos de reservas, mira [cómo exportar reservas a Excel](/blog/export-little-hotelier-reservations-excel).

Guías relacionadas: [la guía de Little Hotelier](/blog/little-hotelier-tips), [integraciones de Little Hotelier](/blog/little-hotelier-integrations).

## Resumen

- El **Invoice report** de Little Hotelier comprime los PDF de las facturas que ya existen; el **Accounting report** exporta las facturas finalizadas como un CSV para Xero o QuickBooks.
- Ninguno crea las facturas que faltan ni evita los duplicados y las facturas anticipadas.
- Hotelier Tools genera un rango de fechas en una ejecución, se niega a emitir facturas arriesgadas, lista cada fallo con su motivo y te da un ZIP y un CSV por trimestre.
- Para cortar el atasco de raíz, [envía cada factura automáticamente al check-out](/blog/send-invoice-to-guest-at-checkout). Mira todo lo que hace la función de facturación en la [página de facturación](/tools/bot/invoicing).
