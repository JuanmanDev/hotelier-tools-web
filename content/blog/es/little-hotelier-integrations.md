---
title: "Integraciones de Little Hotelier en 2026: contabilidad, check-in, precios, mensajería e IA"
seoTitle: "Integraciones de Little Hotelier: las mejores en 2026"
description: "Qué se conecta con Little Hotelier en 2026: exportación para Xero y QuickBooks, check-in con Chekin y Duve, precios, mensajería, IA y complementos gratis."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [integraciones little hotelier, little hotelier app store, little hotelier xero, little hotelier chekin, little hotelier zapier, little hotelier motor de reservas wordpress]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/es/developer-portal.webp
coverAlt: "Portal para desarrolladores de Hotelier Tools con tarjetas de API REST y Swagger, Configurar MCP, Claves de API y Métodos de LH, y un cuadro de Autenticación con un ejemplo de cURL que usa una clave de API de ejemplo"
faq:
  - q: "¿Se integra Little Hotelier con Xero o QuickBooks?"
    a: "Mediante un fichero, no con una sincronización en vivo. Asignas tus cuentas y códigos de impuestos en Little Hotelier y exportas las facturas finalizadas en un CSV pensado para importar en Xero y QuickBooks. A octubre de 2026, la App Store no lista ninguna app de contabilidad."
  - q: "¿Funciona Little Hotelier con Zapier?"
    a: "No encontramos ninguna app de Little Hotelier en Zapier cuando lo comprobamos el 3 de octubre de 2026: su página de integraciones de Little Hotelier devolvía «no encontrado». Para conectar Little Hotelier con otras herramientas, usa una app de la App Store o un script que lea tus datos por una API."
  - q: "¿Cuánto cuestan las apps de la App Store de Little Hotelier?"
    a: "Little Hotelier no cobra por conectarlas. Cada app fija su propio precio, y la página de la App Store de Little Hotelier dice que la mayoría cuesta menos de 50 dólares al mes. Muchas ofrecen prueba gratuita."
  - q: "¿Cómo añado el widget de reservas de Little Hotelier a WordPress?"
    a: "En Direct Booking, abre el asistente de widgets, elige un botón Reservar ahora, un widget de selección de fechas o un widget personalizado, y copia el código que te muestra. Pégalo en un bloque de HTML personalizado de tu página de WordPress. Little Hotelier te pide copiar el código, no reescribirlo."
  - q: "¿Puede una app de revenue management cambiar mis estancias mínimas?"
    a: "Normalmente no. El centro de ayuda de Little Hotelier dice que una app de RMS conectada controla las actualizaciones de tarifas, mientras que la estancia mínima y el stop sell se siguen gestionando en Little Hotelier."
  - q: "¿Está Hotelier Tools en la App Store de Little Hotelier?"
    a: "No. Hotelier Tools es independiente y no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Se conecta con el propio acceso de tu alojamiento a Little Hotelier, así que lo configuras tú mismo en lugar de pasar por la App Store."
---

Little Hotelier se conecta con software externo en tres sitios: la **App Store de Little Hotelier** (unas 30 apps de socios para check-in, mensajería, ventas adicionales, reseñas, acceso sin llaves y precios a octubre de 2026), los **complementos del motor de reservas** y sus propios **add-ons**, como Guest Engagement y Dynamic Revenue Plus. La contabilidad es una exportación CSV pensada para Xero y QuickBooks, no una sincronización en vivo. Para lo que falte, puedes añadir una capa que lea tus datos por una API, o un script gratuito del navegador.

## Dónde están las integraciones de Little Hotelier

| Tipo | Dónde encontrarlo | Cómo se conecta |
|---|---|---|
| Apps de la App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Contactas con el proveedor de la app y él la configura |
| Complementos del motor de reservas | **Direct booking → Configuration → Plug-in apps** | Pegas las credenciales de la app y pulsas **Enable** |
| Add-ons de Little Hotelier | Tu plan ([página de precios](https://www.littlehotelier.com/pricing/)) | Los activa Little Hotelier |
| Canales (OTA) | **Distribution → Channels** | Se asignan en el channel manager |

Algunas reglas del [artículo de ayuda de la App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- Las apps «no se configuran dentro de tu plataforma». Usas el formulario de contacto de la página de la app y el proveedor la conecta.
- Little Hotelier no cobra por conectar; cada app tiene su propio precio. La [página de la App Store](https://www.littlehotelier.com/app-store/) dice que la mayoría cuesta menos de 50 USD al mes.
- La configuración tarda minutos, o hasta 48 horas en algunas apps. El soporte de una app lo da su proveedor.

Los complementos solo afectan a tu motor de reservas. A octubre de 2026, la [lista](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) incluye Google Analytics 4 y Meta Pixel, comparadores de precios (123compare.me, TripTease), chatbots (HiJiffy, Book Me Bob), Tripadvisor Review Express, fidelización (The Guestbook, Laasie) y herramientas de publicidad (Google Ads, Sojern, The Hotels Network, Flip.to y otras).

## Contabilidad: Xero, QuickBooks y el resto

En la lista de la App Store que revisamos en octubre de 2026 no hay ninguna sincronización contable en vivo. Lo que ofrece Little Hotelier es una **exportación contable**:

1. Configura primero tu plan de cuentas y tus códigos de impuestos en Xero, QuickBooks o tu propio software.
2. En Little Hotelier, abre **Setup → Accounting exports** (en la versión clásica: **Front Desk → Setup → Accounting Integration**) e introduce las cuentas y los códigos de impuestos por defecto de ingresos por habitaciones, extras, impuestos, recargos de tarjeta y cargos por servicio.
3. En cada periodo, abre **Reports → Operational → Accounting**, elige las fechas y haz clic en **Export**.

Solo se exportan las facturas marcadas como **final**, en un CSV (o un ZIP de CSV para periodos grandes) «diseñado para importar en Xero y QuickBooks» ([guía de configuración](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [guía de exportación](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). En España, la facturación electrónica VeriFactu figura entre las funciones del plan en la [página de precios](https://www.littlehotelier.com/pricing/).

Aquí es donde más se quejan los usuarios. En [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/), escriben que «los informes y la sincronización con el software de contabilidad se pueden mejorar». Si lo que tu gestoría quiere de verdad es el PDF de todas las facturas del trimestre, mira [descargar todas las facturas de Little Hotelier de una vez](/blog/download-all-little-hotelier-invoices).

## Check-in online y registro de huéspedes

La App Store tiene varias apps de check-in, con las franjas de precio que muestra su página (octubre de 2026):

- **Chekin** (0–50 USD/mes): verificación de documentos con comparación biométrica, formularios de registro digitales, partes policiales y estadísticos y tasa turística en 18 países y regiones, entre ellos España, Italia, Portugal, Francia, Alemania y Tailandia ([artículo de ayuda](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (0–50 USD): check-in online, una app para el huésped y recordatorios de reseñas.
- **Vikey** (0–50 USD): self check-in y cerraduras inteligentes.
- **Abitari Kiosk**, **OpenKey** y **Akia**: quiosco, llaves móviles y check-in sin contacto.

Little Hotelier también tiene una opción propia. Con el add-on **Guest Engagement**, un formulario de check-in de cumplimiento puede enviar los datos de los huéspedes a las autoridades en Italia, España, Portugal, Alemania, Suiza, Austria, Croacia, República Checa y Colombia ([fuente](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Los alojamientos españoles pueden ver cómo encaja con SES.Hospedajes en [SES.Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier), y las normas de cada país están en [normas de registro de huéspedes por país](/blog/guest-registration-rules-by-country).

Si usas Chekin, el userscript gratuito **Conexión con Chekin** muestra el estado del check-in de Chekin dentro de la reserva de Little Hotelier: huéspedes encontrados, teléfonos y números de documento, con un botón para copiar el documento a la reserva para la factura.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reserva de Little Hotelier en español con un panel de Chekin: estado de 1 huésped encontrado, una tabla con nombre, teléfono y documento de identidad, y los botones Use document y View in Chekin" caption="El script gratuito Conexión con Chekin muestra los datos del check-in sin salir de la reserva."}
::

Instálalo desde [Conexión con Chekin](/tools/ui/show-chekin); la [guía de instalación](/tools/ui/instructions) lleva unos minutos.

## Precios y revenue management

Entre las apps de revenue management de la App Store están **RoomPriceGenie**, **Smartpricing**, **Happyhotel** y **Pricepoint**. El centro de ayuda también nombra **Aiosell** y **Right Revenue** ([fuente](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Un límite que conviene conocer antes de contratar: el centro de ayuda clásico dice que un RMS conectado «puede controlar las actualizaciones de tarifas, no las restricciones». Las estancias mínimas y los stop sell se quedan en Little Hotelier ([fuente](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

La opción propia de Little Hotelier es **Dynamic Revenue Plus**, un add-on del plan Pro con recomendaciones de precios basadas en datos. El propio plan Pro incluye informes de precios de la competencia y de paridad de tarifas.

Hotelier Tools añade precios de la competencia de Booking.com y Google (beta) y recomendaciones de precio con un «¿Por qué?» paso a paso (alfa). No cambia nada en Little Hotelier hasta que lo confirmes. Mira [precios dinámicos para hoteles pequeños con Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Mensajería con huéspedes y WhatsApp

De forma nativa, el **Messaging hub** de Guest Engagement reúne WhatsApp, Airbnb, SMS (mediante Twilio), Booking.com y el historial de correos en una sola bandeja. WhatsApp funciona con la API de WhatsApp Business: las respuestas dentro de la ventana de 24 horas son gratuitas y los mensajes de plantilla los cobra WhatsApp ([fuente](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

Entre las alternativas de la App Store están **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** y **Zingle**.

::callout{type="tip" title="¿Los huéspedes de Booking.com no reciben tus correos?"}
Booking.com bloquea correos y enlaces de sistemas que no conoce. Little Hotelier te pide añadir `@app.littlehotelier.com` y `@guestjoy.com` como direcciones de correo, y `siteminder.com` y `guestjoy.com` como enlaces, en la extranet, en **Property → Messaging preferences → Security settings** ([pasos](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Hotelier Tools también tiene una bandeja de huéspedes (alfa): WhatsApp, Gmail, Outlook o cualquier buzón IMAP y los mensajes de Booking.com en una sola lista, con respuestas redactadas por IA que aprueba una persona. Su conexión de WhatsApp usa una sesión de WhatsApp Web (WAHA), no la API oficial de Business. Compara las opciones en [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

## Integraciones de IA y de API

«Integración de IA» significa dos cosas distintas para un alojamiento de Little Hotelier.

**IA que vende tus habitaciones.** Demand Plus incluye **AI bookings**: tu alojamiento puede aparecer en ChatGPT y Claude a través del socio DirectBooker, con tarifas en vivo, y los huéspedes terminan la reserva en tu motor de reservas. Está en beta con 0 % de comisión hasta el 30 de noviembre de 2026; desde el 1 de diciembre de 2026 se aplica un 6 % más impuestos a las reservas de IA completadas, y no se puede rechazar ([fuente](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbots como HiJiffy y Book Me Bob se conectan al motor de reservas.

**IA que trabaja con tus propios datos.** Aquí no hay una opción oficial. Little Hotelier no da a los alojamientos ninguna clave de API para reservas o huéspedes (la respuesta completa está en [¿tiene API Little Hotelier?](/blog/little-hotelier-api)).

Hotelier Tools cubre ese hueco con una REST API y un servidor MCP (ambos en beta). Es un producto independiente que se conecta con tu propio acceso a Little Hotelier, guardado cifrado. Con él puedes:

- preguntar a Claude o ChatGPT por llegadas, saldos o facturas que faltan ([qué es un servidor MCP](/blog/what-is-mcp-server-hotels), [conectar ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- rellenar una hoja de Google cada mes ([exportar reservas a Excel](/blog/export-little-hotelier-reservations-excel))
- conectar herramientas que no tienen app en la App Store, con un script pequeño

::demo-cta{path="/developer/rest-api"}
::

## Userscripts gratuitos que tapan pequeños huecos

Algunas carencias no necesitan una integración, solo una pantalla mejor. Los [userscripts](/tools/ui) gratuitos se ejecutan en tu navegador con Tampermonkey, solo cambian cómo ves tú Little Hotelier y son gratis para siempre. Útiles junto a las integraciones de arriba:

- [Mostrar Comisiones de Booking.com](/tools/ui/show-booking-commissions): una estimación de la comisión de Booking.com y de tu neto, dentro de la reserva.
- [Mostrar Precios](/tools/ui/prices-display): tus tarifas en la vista de calendario.
- [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country): una lista de provincias españolas que también rellena el país.
- [Botón Extra de Imprimir Factura](/tools/ui/extra-invoice-print-button): imprime la factura sin abrir menús.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumen de una reserva de Little Hotelier en español con líneas adicionales para el cargo por transferencia, la comisión de Booking.com, el total de comisiones con IVA y el neto aproximado" caption="Mostrar Comisiones de Booking.com añade una comisión y un neto estimados a cada reserva de Booking.com."}
::

El conjunto completo está en la [página de extensiones del navegador](/chrome-extensions), y [extensiones de Chrome gratuitas para Little Hotelier](/blog/little-hotelier-chrome-extensions) explica cada una.

## Próximos pasos

- ¿Necesitas check-in, ventas adicionales o reseñas? Empieza por la App Store y pide una prueba gratuita.
- ¿Necesitas contabilidad? Asigna tus códigos una vez en **Setup → Accounting exports** y exporta las facturas finalizadas cada mes.
- ¿Necesitas tus propios datos en una hoja, un script o un asistente de IA? Usa una capa de API como la de [API y MCP de Hotelier Tools](/tools/bot/api-mcp), gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.
