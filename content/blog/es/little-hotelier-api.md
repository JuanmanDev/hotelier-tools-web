---
title: "¿Tiene API Little Hotelier? La respuesta en 2026 y cómo sacar tus datos"
seoTitle: "¿Tiene API Little Hotelier? Respuesta 2026"
description: "No hay clave de API para tus reservas ni tus huéspedes. Qué ofrece SiteMinder oficialmente y cómo leer tus datos de Little Hotelier por REST en minutos."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, little hotelier api documentacion, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api, integración little hotelier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/es/rest-api-reference.webp
coverAlt: "Página de referencia de la REST API en Hotelier Tools con la URL base, la descarga de openapi.json, el cuadro Autorización rápida (campo de token Bearer, Autorizar Swagger, Usar mi sesión) y plantillas de código en cURL, JavaScript, Python y PowerShell"
featured: true
faq:
  - q: "¿Tiene Little Hotelier una API pública para mis reservas?"
    a: "No una que un alojamiento pueda usar para sus propias reservas, a fecha de octubre de 2026. Las API de SiteMinder son para partners tecnológicos certificados, y la clave de Direct Booking API que puedes generar tú mismo solo cubre tarifas, disponibilidad y datos del alojamiento para una web de reservas."
  - q: "¿Qué es SiteMinder Exchange (SMX) y incluye Little Hotelier?"
    a: "SMX es la API de SiteMinder para apps de partners, como check-in, mensajería y herramientas de ingresos. La guía para desarrolladores de SiteMinder indica que Little Hotelier es fuente de reservas para SMX, pero no de disponibilidad ni de tarifas. Solo se conectan los partners certificados."
  - q: "¿Cómo me hago partner de integración de SiteMinder y cuánto tarda?"
    a: "Envías el formulario de solicitud de integración de SiteMinder, firmas un acuerdo de colaboración y después desarrollas, certificas y sales en producción. SiteMinder dice que la mayoría de las integraciones tardan unos 60 días desde el inicio hasta la puesta en marcha. Está pensado para empresas de software, no para un solo hotel."
  - q: "¿Es segura y está permitida una API no oficial como Hotelier Tools?"
    a: "Hotelier Tools inicia sesión con tu propio acceso a Little Hotelier, lo guarda cifrado (AES-256-GCM) y solo puede hacer lo que ese acceso puede hacer en la aplicación web de Little Hotelier. No es una integración oficial de SiteMinder, así que, si tienes dudas, revisa tu propio contrato con SiteMinder. Puedes revocar todas las claves cuando quieras."
  - q: "¿Tiene Little Hotelier un servidor MCP para asistentes de IA?"
    a: "No uno para propietarios, a fecha de octubre de 2026. El trabajo de SiteMinder en IA con Demand Plus trata de que los viajeros encuentren y reserven tus habitaciones en ChatGPT y Claude. Para preguntar a una IA por tus propias reservas necesitas un servidor MCP independiente, como el de Hotelier Tools."
  - q: "¿Puedo probar la API sin arriesgar datos reales?"
    a: "No hay clave de sandbox pública. Empieza con llamadas de solo lectura (reservas, precios, tipos de habitación): no cambian nada en Little Hotelier. Las llamadas que escriben, como generar una factura, crean documentos reales."
---

No una que puedas usar para tus propias reservas. A fecha de octubre de 2026, el centro de ayuda de Little Hotelier no documenta ninguna clave de API que un alojamiento pueda usar para sus reservas, huéspedes o facturas: las API de SiteMinder son para partners tecnológicos certificados, y la única clave que puedes generar tú mismo, la **Direct Booking API**, cubre tarifas, disponibilidad y datos del alojamiento para una web de reservas. Para leer tus propios datos desde un script, una hoja de cálculo o un asistente de IA puedes usar una REST API independiente como la de Hotelier Tools, que se conecta con tu propio acceso a Little Hotelier.

A continuación: qué ofrece exactamente SiteMinder y una configuración de cinco minutos con ejemplos reales de `curl`.

## ¿Tiene Little Hotelier una API pública?

Hay cuatro formas oficiales de meter o sacar datos de Little Hotelier. Ninguna te da una clave de API para tu lista de reservas.

| Opción oficial | Quién puede usarla | Qué cubre |
|---|---|---|
| SiteMinder Exchange (SMX) | Apps de partners certificados | Reservas de Little Hotelier. No disponibilidad ni tarifas |
| Direct Booking API | Alojamientos que usan Direct Booking | Precios y disponibilidad en tiempo real, alojamiento, tipos de habitación, planes de tarifas |
| Exportaciones CSV | Cualquier usuario, a mano | Reservas, ingresos, facturas, contabilidad |
| Apps de la App Store | Cualquier alojamiento, a través del proveedor de la app | Lo que sincronice esa app |

### SiteMinder Exchange (SMX): para empresas de software

La [guía para desarrolladores](https://developer.siteminder.com/get-started/siteminder-apis) de SiteMinder enumera cinco API: pmsXchange, SiteConnect, Channels Plus, SMX y Direct Booking. La que importa para Little Hotelier es SMX, la API que hay detrás de aplicaciones como el check-in online y la mensajería con huéspedes.

En la [lista de publicadores de SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) de SiteMinder, Little Hotelier envía **reservas** pero no disponibilidad ni tarifas. La [guía de inicio rápido de SMX](https://developer.siteminder.com/smx-api/guides/quick-start) dice lo mismo: «no puedes obtener datos ARI» de Little Hotelier.

El acceso es para partners. Las [preguntas frecuentes](https://developer.siteminder.com/get-started/resources/faq) de SiteMinder indican que primero hay que firmar un acuerdo de colaboración a través de la [solicitud de integración](https://www.siteminder.com/integrations/apply-now/), después desarrollar, certificar y salir en producción, algo que «la mayoría» de los partners completa en 60 días. Ese camino es para una empresa de software. Un hotel por sí solo no puede conseguir una clave de SMX.

### La Direct Booking API: la única clave que puedes generar

Si tu cuenta está en la plataforma nueva de Little Hotelier (altas desde mayo de 2025 o cuentas actualizadas), el [centro de ayuda](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) documenta una Direct Booking API:

1. Ve a **Direct booking → Configuration → API integration**.
2. Haz clic en **Generate key**.
3. Entrega la clave y la guía para desarrolladores de SiteMinder a tu desarrollador web.

Devuelve precios y disponibilidad en tiempo real, datos del alojamiento, tipos de habitación y planes de tarifas, de modo que un desarrollador puede crear una página de reservas o una app a medida. Está incluida con Direct Booking sin coste adicional. **No** devuelve reservas, huéspedes, pagos ni facturas, y el soporte de Little Hotelier no ayuda a crear ni a arreglar lo que hagas con ella.

### Exportaciones CSV y la App Store

Todo lo demás es manual o depende del proveedor. La página de reservas y la mayoría de los informes exportan un CSV (paso a paso en [cómo exportar reservas a Excel](/blog/export-little-hotelier-reservations-excel)). Las apps de la [App Store de Little Hotelier](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) se conectan cuando contactas con el proveedor de la app; los datos no los obtienes tú. Mira [las mejores integraciones de Little Hotelier](/blog/little-hotelier-integrations) para ver qué hay disponible.

## Cómo sacar tus datos de Little Hotelier con una API

Hotelier Tools es un panel independiente para alojamientos de Little Hotelier. Incluye una REST API (estado: beta) y un servidor MCP para asistentes de IA.

Cómo funciona, en pocas palabras:

- Conectas tu propio acceso a Little Hotelier una sola vez, en **Credenciales** (`/credentials`). Se guarda cifrado (AES-256-GCM).
- Hotelier Tools usa entonces los mismos endpoints web que usa la aplicación web de Little Hotelier. Puede leer y hacer lo que ese acceso permite, nada más.
- Tus scripts llaman a Hotelier Tools con una clave de API, y Hotelier Tools habla con Little Hotelier.

::callout{type="note" title="Independiente, no oficial"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. No es una API oficial de SiteMinder y se conecta con el propio acceso de tu alojamiento a Little Hotelier. El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.
::

## Cómo crear una clave de API y hacer tu primera llamada

Necesitas una cuenta de Hotelier Tools (regístrate en [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) con Little Hotelier conectado en **Credenciales**. El propietario del alojamiento tiene acceso a la API por defecto.

1. Abre **API y MCP → Claves API** (`/developer/api-keys`).
2. En «Generar una clave nueva», escribe un nombre que reconozcas más adelante, como `sheets-export`, y pulsa **Generar clave**.
3. Copia la clave enseguida. La página avisa: «Copia esta clave ahora: no se volverá a mostrar». Las claves empiezan por `htk_`.

::screenshot{src="/images/blog/demo/es/api-key-generated-masked.webp" alt="Página de claves de API justo después de generar una clave: el recuadro verde Clave generada con la clave de un solo uso enmascarada y un botón de copiar, la nueva clave Integración del blog en Claves activas con un botón Revocar y un aviso Clave de API creada" caption="Copia la clave del recuadro verde enseguida: solo se muestra una vez. Pon a cada clave el nombre de lo que la usará, así sabrás cuál revocar después." path="/developer/api-keys"}
::

4. Comprueba que la API responde. Esta llamada es pública y no necesita clave:

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Ahora una llamada con tu clave. Devuelve el ID de tu alojamiento en Little Hotelier y el acceso que usa:

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

En Windows, escribe `curl.exe` en lugar de `curl` en PowerShell, o usa el comando propio de PowerShell:

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

Qué puede hacer una clave: **no hay ámbitos (scopes)**. Una clave actúa sobre el único alojamiento en el que se creó, como la persona que la creó y con los permisos actuales de esa persona. Cada persona puede tener hasta 10 claves, y puedes revocar cualquiera en la misma página.

### ¿Prefieres hacer clic a escribir? Usa el explorador

Abre **REST API y Swagger** (`/developer/rest-api`). En **Autorización rápida**, pega tu clave en el campo de token Bearer (clave de API o JWT de sesión) y pulsa **Autorizar Swagger**, o pulsa **Usar mi sesión** para prescindir de la clave. Después prueba cualquier endpoint en el «explorador interactivo de la API». La página también tiene un botón para descargar la especificación y «Plantillas de código» en cURL, JavaScript, Python y PowerShell.

::screenshot{src="/images/blog/demo/es/rest-api-interactive-explorer.webp" alt="Explorador interactivo de la API (Swagger) tras Try it out y Execute en GET /property: la URL de la petición https://demo.hotelier.tools/api/v1/property y un cuerpo de respuesta 200 con propertyId 90210" caption="Autoriza una vez, ejecuta después cualquier endpoint desde el navegador y mira la petición exacta y el JSON que devuelve." path="/developer/rest-api"}
::

## ¿Qué endpoints puedes usar?

La URL base es `https://dashboard.hotelier.tools/api/v1`. La lista completa y actual está en la [especificación OpenAPI](https://dashboard.hotelier.tools/api/v1/openapi.json) pública. Estos son los que suele usar la mayoría al empezar:

| Método | Ruta | Qué obtienes |
|---|---|---|
| GET | `/reservations` | Reservas por fecha de check-in, con `status` y `limit` opcionales |
| GET | `/reservations/{id}` | Detalle completo de una reserva (id numérico o referencia `LH…`) |
| GET | `/reservations/{id}/invoices` | Las facturas de una reserva |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Una factura en PDF |
| POST | `/reservations/{id}/invoices` | Crea una factura nueva en Little Hotelier (sin enviar correo al huésped) |
| GET | `/guests` | Búsqueda de huéspedes por texto, nombre, email o teléfono |
| GET | `/prices` | Tarifas y disponibilidad para un rango de fechas |
| GET | `/room-types` | Tipos de habitación con el número de habitaciones de cada uno |
| GET | `/methods` | Los métodos originales de Little Hotelier que puedes llamar (público) |
| POST | `/methods/{methodName}` | Ejecuta uno de ellos, por ejemplo `getReservationsByDateRange` |

Algunos ejemplos para copiar y pegar (fechas e ID inventados):

```bash
# Reservas con el check-out ya hecho y check-in en noviembre de 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Todo sobre una reserva
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Tarifas y disponibilidad de una semana
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Buscar un huésped por apellido
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Todas las reservas que se solapan con un rango (método original, parámetros con nombre)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

Las llamadas de listado devuelven JSON como `{ "success": true, "count": 2, "data": [ … ] }`. Para probar un método original sin código, abre **Métodos de LH** (`/methods`) en el panel y ejecútalo desde el navegador. Las ejecuciones quedan registradas en **Historial de ejecuciones**.

::screenshot{src="/images/blog/demo/es/little-hotelier-methods.webp" alt="Banco de pruebas de métodos de Little Hotelier en Hotelier Tools con una tarjeta por método original, como getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation y generateInvoice, cada una con su número de parámetros" caption="Ejecuta a mano cualquier método original de Little Hotelier antes de automatizarlo." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Límites, errores y lo que no está disponible

**Límite de uso.** 100 peticiones por minuto por dirección IP. Cada respuesta lleva `X-RateLimit-Limit`, `X-RateLimit-Remaining` y `X-RateLimit-Reset`. Por encima del límite recibes `429` con una cabecera `Retry-After`.

**Paginación.** `/reservations` devuelve como máximo 100 por llamada (`limit`, por defecto 50) y filtra por fecha de check-in. Para un año de datos, pide un mes cada vez; si un mes devuelve exactamente 100, divídelo en dos. `/guests` pagina con `page` y `perPage` (hasta 50). `/prices` divide los rangos de más de dos semanas en bloques, así que los rangos largos son más lentos.

**Los errores** llegan como JSON con `statusCode` y `statusMessage`:

| Código | Normalmente significa |
|---|---|
| 401 | Clave ausente, incorrecta o revocada |
| 404 | No existe esa reserva, o no es de tu alojamiento |
| 422 | Un parámetro es incorrecto, por ejemplo una fecha que no está en formato `YYYY-MM-DD` |
| 429 | Demasiadas peticiones; espera el `Retry-After` |
| 500 / 502 | Little Hotelier no ha respondido; inténtalo más tarde |

**Los datos enmascarados siguen enmascarados.** La API lee lo que Little Hotelier aún conserva. Little Hotelier [enmascara los datos de los huéspedes 180 días después del check-out](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), y ninguna API puede recuperarlos. Exporta antes.

**No disponible:** webhooks salientes o notificaciones en tiempo real, una clave de sandbox pública y paquetes SDK en npm o PyPI. Para ejecutar algo de forma programada, usa tu propio programador (una tarea cron, el Programador de tareas de Windows o un activador de Google Sheets).

**Las escrituras son reales.** `POST /reservations/{id}/invoices` crea un documento de factura nuevo en Little Hotelier cada vez que lo llamas. Empieza con llamadas de solo lectura y mantén las claves lejos de hojas de cálculo compartidas y de código público.

## ¿Qué puedes construir con ella?

- **Una hoja de reservas en vivo.** Trae las estancias del mes pasado a Google Sheets o Excel de forma programada: mira [exportar reservas a Excel y Google Sheets](/blog/export-little-hotelier-reservations-excel).
- **Paquetes para la gestoría.** Descarga los PDF de facturas por reserva, o ahórrate el código con el ZIP trimestral de [descargar todas tus facturas de una vez](/blog/download-all-little-hotelier-invoices).
- **Cuadros de mando.** Lleva la ocupación y los ingresos a Looker Studio o Power BI desde una hoja que la API mantiene actualizada.
- **Asistentes de IA.** La misma clave sirve para el servidor MCP de Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), que da a Claude, ChatGPT, Cursor o VS Code más de 100 herramientas de hotel. Empieza por [qué es un servidor MCP](/blog/what-is-mcp-server-hotels), y después [conecta Claude](/blog/connect-claude-to-little-hotelier) o configura [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
- **Conectar herramientas entre sí.** Donde no hay una app en la App Store, un script pequeño puede mover datos entre Little Hotelier y el resto de tus herramientas. Compara opciones en [las mejores integraciones de Little Hotelier](/blog/little-hotelier-integrations).

## Próximos pasos

- Si desarrollas software para muchos hoteles, solicita el programa de partners de SiteMinder y el acceso a SMX.
- Si solo necesitas los datos de tu propio alojamiento, crea una clave de Hotelier Tools en `/developer/api-keys` y llama a `/reservations`.
- Exporta los datos de huéspedes que necesites conservar antes de que Little Hotelier los enmascare a los 180 días.
- Todo lo que ofrecen la API y el servidor MCP está en la [página de la función API y MCP](/tools/bot/api-mcp).
