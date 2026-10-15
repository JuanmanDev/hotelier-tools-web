---
title: "Cómo exportar reservas y listados de huéspedes de Little Hotelier a Excel (antes de que se enmascaren)"
seoTitle: "Exportar reservas de Little Hotelier a Excel o Sheets"
description: "Little Hotelier enmascara los datos del huésped 180 días tras el check-out. Exporta reservas y listados a Excel o Google Sheets ya, a mano o en automático."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [exportar reservas de little hotelier a excel, little hotelier informes, little hotelier exportar csv, listado de huéspedes hotel excel, hoja de cálculo reservas hotel, little hotelier datos de huéspedes enmascarados]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/es/developer-portal.webp
coverAlt: "Portal para desarrolladores de Hotelier Tools con tarjetas de API REST y Swagger, configuración de MCP, claves de API y métodos de LH, encima de un ejemplo de autenticación con una clave de API"
faq:
  - q: "¿Qué se enmascara exactamente a los 180 días?"
    a: "Little Hotelier dice que la información personal identificable (PII) del huésped se enmascara 180 días después de la fecha de check-out de la reserva. La reserva sigue ahí, pero los informes y las búsquedas ya no muestran los datos personales del huésped. Exporta lo que necesites antes de esa fecha."
  - q: "¿Por qué faltan los teléfonos en mi exportación de Little Hotelier?"
    a: "Little Hotelier deja los teléfonos de los huéspedes fuera del CSV de reservas por motivos de seguridad. Aun así puedes ver un teléfono en la reserva o en la ficha del huésped, y la búsqueda de huéspedes de la API de Hotelier Tools devuelve un campo phone_number cuando Little Hotelier lo tiene."
  - q: "¿Puedo programar la exportación dentro de Little Hotelier?"
    a: "Los artículos del centro de ayuda que revisamos en octubre de 2026 describen ejecutar y exportar informes a mano, sin exportación programada. Para automatizarla, usa un script o un activador de Google Sheets que lea los datos a través de una API."
  - q: "¿Puedo exportar más de un año de una vez?"
    a: "Little Hotelier limita la exportación de totales de huéspedes a 365 días, y la búsqueda de reservas del channel manager solo llega 548 días atrás. Exporta un año (o un mes) cada vez y conserva los archivos."
  - q: "¿Cómo exporto solo las reservas de Booking.com?"
    a: "Filtra por canal en los informes del Channel Manager, o exporta todo y filtra la referencia de reserva en Excel. Las referencias que empiezan por BDC son de Booking.com, EXP de Expedia, ABB de Airbnb, AGO de Agoda, HWL de Hostelworld y LH de tu propia recepción o motor de reservas."
---

Abre **Reservations**, fija las fechas, pulsa **Search** y luego **Export**: Little Hotelier descarga un archivo CSV que se abre en Excel o en Google Sheets. Hazlo con regularidad, porque Little Hotelier enmascara los datos personales del huésped **180 días después del check-out** y la exportación nunca incluye los teléfonos. Si quieres una copia que se construya sola cada mes, lee los mismos datos a través de una API.

## Por qué exportar antes de que se enmascaren los datos del huésped

El centro de ayuda de Little Hotelier lo dice claro: «La información personal identificable (PII) del huésped se enmascara 180 días después de la fecha de check-out de la reserva» ([búsqueda del channel manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [informes del channel manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [informes del motor de reservas](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports); en inglés).

Merece la pena conocer dos límites más:

- La búsqueda de reservas del channel manager solo encuentra reservas «creadas o con check-out en los últimos 548 días».
- Una vez enmascarados, ninguna exportación ni API puede recuperar los datos.

Así que, si necesitas los datos de los huéspedes para facturas, un listado de huéspedes que repiten, una reclamación o tus propias estadísticas, expórtalos mientras siguen ahí. Conserva solo lo que tengas motivo para conservar y guarda los archivos en un sitio con acceso controlado: contienen datos personales.

::callout{type="info" title="Dos versiones de Little Hotelier"}
Las cuentas creadas desde mayo de 2025 (o actualizadas) usan la nueva **plataforma**, con un [centro de ayuda aparte](https://help-platform.littlehotelier.com/en/). Las cuentas más antiguas usan la versión **clásica**. Los pasos de abajo dan las rutas de menú de las dos.
::

## Cómo exportar reservas de Little Hotelier a Excel

1. Abre **Reservations**. En la versión clásica: **My Apps → Front Desk → Reservations**.
2. Elige el **Date type** (**Check-in date**, **Check-out date** o **Booked on date**) y luego **Date from** y **Date to**. Un mes natural es una buena unidad.
3. Elige un **Status** si quieres uno: **All**, **Confirmed**, **Checked-in**, **Checked-out** o **Cancelled**.
4. Haz clic en **Search**.
5. Haz clic en **Export**. El archivo se descarga como `.csv`. En la nueva plataforma, Little Hotelier te pide tu código MFA o tu passkey antes de exportar reservas, huéspedes, pagos, ingresos y facturas.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Página Reservas de la versión clásica de Little Hotelier en español: filtros por apellido del huésped, referencia de reserva, número de factura, tipo de fecha, estado, fechas y origen, el botón Buscar, 36 reservas encontradas y el enlace Exportar" caption="La página Reservas de la versión clásica (interfaz en español). Primero buscas y luego Exportar descarga todos los resultados en CSV."}
::

Dos detalles del [centro de ayuda](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) te ahorran confusiones:

- Si una búsqueda devuelve mucho, la pantalla solo muestra los **primeros 31 días**. La exportación contiene todo.
- Para contar huéspedes de un periodo, haz coincidir el Date type y el Status (check-in con **Checked-in**, check-out con **Checked-out**). La [guía clásica](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) limita esa exportación a **365 días**.

### Qué lleva el CSV (y qué no)

La exportación tiene más columnas que la pantalla. Según [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information), obtienes:

- **Reserva:** referencia, fecha de reserva, canal, estado, fecha de cancelación
- **Huésped:** nombre y apellidos, email, organización, dirección completa
- **Estancia:** check-in, check-out, noches, hora de llegada, comentarios del huésped, tipos de habitación, habitaciones, planes de tarifa
- **Dinero:** subtotal, extras, recargos, impuestos, pagos recibidos, saldo pendiente
- **Huéspedes:** adultos, niños, bebés; respuestas a las preguntas personalizadas de la reserva

No se incluyen: los **teléfonos** («por motivos de seguridad») ni un historial de cambios, como la hora exacta en que se hizo el check-in de un huésped.

## ¿Qué otros informes puede exportar Little Hotelier?

La mayoría de los informes tienen un botón **Export** que genera un CSV. Las rutas son de la nueva plataforma, salvo las filas del channel manager y del motor de reservas, que vienen de la versión clásica (en **My Apps**). Las cuentas clásicas encuentran la mayoría de los demás informes en **My Apps → Front Desk → Reports**.

| Informe | Dónde | Qué obtienes |
|---|---|---|
| Huéspedes | Reports → Operational → Guests | Huéspedes que se alojaron, por rango de fechas |
| Facturas | Reports → Operational → Invoices | Lista de facturas en CSV, PDF en un ZIP |
| Contabilidad | Reports → Operational → Accounting | Facturas finalizadas, con el formato para Xero y QuickBooks |
| Ingresos (7 vistas) | Reports → Strategic → Revenue | Resumen, tipo de habitación, habitación, plan de tarifa, canal, impuestos, extras |
| Channel manager | Channel Manager → Reports | Resumen de reservas, estancias por habitación, check-ins, rendimiento por canal |
| Motor de reservas | Direct Booking → Reports | Reservas con el dispositivo usado y el consentimiento RGPD |
| Policía de España | Reports → Operational → Police report | Solo España: registros de huéspedes para el registro policial |

Fuentes: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Consejo: la exportación de ingresos **Summary** tiene una columna «Rate per night», con una fila por noche. Es la forma más rápida de ver a qué precio se vendió cada noche de una estancia larga.

## Cómo abrir el CSV en Excel sin que se rompan los acentos

Si nombres como «José» se convierten en «JosÃ©», Excel ha adivinado mal la codificación. Importa el archivo en lugar de hacerle doble clic:

1. En Excel, ve a **Datos → Obtener datos → Desde un archivo → Desde texto o CSV** (en versiones antiguas: **Datos → Desde texto/CSV**) y elige el archivo ([pasos de Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Pon **Origen del archivo** en **65001: Unicode (UTF-8)** y **Delimitador** en **Coma**.
3. Haz clic en **Cargar**.

En Google Sheets, usa **Archivo → Importar → Subir** y deja el separador en automático. Sheets lee UTF-8 correctamente.

## Un listado de huéspedes que repiten: qué puedes exportar y qué necesitas

El CSV de reservas tiene nombres, emails y direcciones, suficiente para un agradecimiento o un email de «vuelve pronto». Antes de enviar nada, comprueba quién aceptó recibir comunicaciones tuyas:

- La exportación del **informe del motor de reservas** tiene una columna **GDPR consent**. Little Hotelier dice que se rellena cuando el huésped dio su consentimiento y queda vacía cuando no ([fuente](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Si usas Guest Engagement, **Guest engagement → Guests → Mailchimp export** envía huéspedes a una lista de Mailchimp. Se exportan todos los huéspedes «con independencia del estado de consentimiento RGPD», con el estado de aceptación marcado, así que filtra por él ([fuente](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

Las normas de marketing cambian según el país. En España, la LSSI (artículo 21) y el RGPD exigen, en general, consentimiento previo para enviar comunicaciones comerciales por email: escribe solo a los huéspedes que aceptaron, salvo que un asesor te haya confirmado que se aplica otra base legal.

## La forma más rápida: exportaciones automáticas con una API

Little Hotelier no tiene una clave de API para tus reservas (los detalles están en [¿tiene Little Hotelier una API?](/blog/little-hotelier-api)). Hotelier Tools, un panel independiente, se conecta con tu propio acceso a Little Hotelier y te da una API REST y un servidor MCP para asistentes de IA. No está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo, y es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="warning" title="Una API no puede desenmascarar datos"}
Hotelier Tools lee lo que Little Hotelier todavía conserva. Las reservas de más de 180 días tras el check-out también llegan enmascaradas a través de la API. Automatiza la exportación ya para que capture cada mes mientras los datos están completos.
::

Primero crea una clave: **API y MCP → Claves API** (`/developer/api-keys`), escribe un nombre, pulsa **Generar clave** y cópiala. La página la muestra solo una vez.

::screenshot{src="/images/blog/demo/es/api-key-generated-masked.webp" alt="Página de claves de API justo después de generar una clave llamada Integración del blog: el formulario Generar una clave nueva, un recuadro verde Clave generada que dice Copia esta clave ahora: no se volverá a mostrar, con la clave enmascarada y un botón de copiar, y la nueva clave en Claves activas con Revocar" caption="Una clave por uso: ponle el nombre de la hoja o del script que la guardará y cópiala mientras se muestra." path="/developer/api-keys"}
::

### Sin código: ejecuta la exportación desde el panel

1. Abre **Métodos de LH** (`/methods`) y elige `fetchReservationsCSV`.
2. Rellena `dateFrom` y `dateTo` (por ejemplo `2026-09-01` y `2026-09-30`).
3. Ejecútalo. El método obtiene tus reservas como CSV, que puedes pegar en una hoja.

::screenshot{src="/images/blog/demo/es/little-hotelier-methods.webp" alt="Página Métodos de Little Hotelier en Hotelier Tools con una tarjeta por método, como getReservations, updateReservation, fetchReservationsCSV (obtiene reservas como un archivo CSV, 3 parámetros), generateInvoice y getInvoices" caption="Elige fetchReservationsCSV en Métodos de LH para ejecutar la exportación CSV de reservas desde tu navegador, sin código." path="/methods"}
::

### Google Sheets, actualizado cada mes

Este Apps Script añade una pestaña con las reservas del mes pasado (por fecha de check-in) cada vez que se ejecuta.

1. En una hoja de Google nueva, abre **Extensiones → Apps Script**.
2. En **Configuración del proyecto**, añade una propiedad de script llamada `HT_API_KEY` con tu clave `htk_…`. Así la clave no queda en el código.
3. Pega este código y guarda:

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Haz clic en **Ejecutar** una vez y da permiso cuando Google te lo pida.
5. Para programarlo, abre **Activadores → Añadir activador**, elige `importLastMonth`, origen del evento **Según tiempo** y un **Temporizador mensual** el día 1 ([guía de Google](https://developers.google.com/apps-script/guides/triggers/installable)).

La API devuelve hasta 100 reservas por llamada. Si un mes llena las 100 filas, divídelo en dos mitades. Cualquiera que pueda editar el script puede leer la clave, así que comparte la hoja con cuidado y revoca la clave en `/developer/api-keys` si se filtra.

### Pídele a un asistente de IA que construya la tabla

Si has conectado Claude o ChatGPT a Hotelier Tools (mira [conectar Claude con Little Hotelier](/blog/connect-claude-to-little-hotelier)), pídelo con tus propias palabras:

::prompt{label="Claude"}
Con Hotelier Tools, haz una tabla con todas las reservas que hicieron el check-out en septiembre de 2026: referencia de reserva, nombre del huésped, email, check-in, check-out, noches, canal y total. Después dame la misma tabla en CSV.
::

El asistente lee tus reservas a través del servidor MCP y devuelve la tabla. Recuerda que lo que lee (nombres, emails, importes) pasa a formar parte de tu chat con ese proveedor de IA.

::demo-cta{path="/methods"}
::

Guías relacionadas: [integraciones de Little Hotelier](/blog/little-hotelier-integrations), [descargar todas tus facturas de una vez](/blog/download-all-little-hotelier-invoices), [la encuesta de ocupación del INE](/blog/ine-hotel-occupancy-survey).

## Resumen

- **A mano:** **Reservations → Search → Export** da un CSV con nombres, emails y direcciones de huéspedes, pero sin teléfonos.
- **Plazo:** los datos del huésped se enmascaran 180 días después del check-out, así que exporta cada mes.
- **Acentos:** importa con **Datos → Desde texto/CSV** y UTF-8 en Excel.
- **Automático:** un activador de Google Sheets con la API de Hotelier Tools, o una petición a tu asistente de IA. Más en la [página de funciones de API y MCP](/tools/bot/api-mcp).
