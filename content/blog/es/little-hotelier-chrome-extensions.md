---
title: "Extensión de Chrome para Little Hotelier: scripts gratuitos que lo hacen más rápido"
seoTitle: "Extensión de Chrome para Little Hotelier: scripts gratis"
description: "Scripts gratuitos para Little Hotelier: precios en el calendario, tablas más anchas, comisión de Booking.com y facturas con un clic. Cómo instalarlos."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [extension chrome little hotelier, tampermonkey scripts, userscript chrome, little hotelier precios en el calendario, little hotelier tabla ancho completo, little hotelier comision booking.com]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "Calendario de Little Hotelier (interfaz en español) con el precio de cada noche bajo cada tipo de habitación, añadido por el script Mostrar Precios"
faq:
  - q: "¿Estos scripts los ha hecho Little Hotelier?"
    a: "No. Son scripts gratuitos e independientes publicados por Hotelier Tools, que no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Se ejecutan en tu propio navegador, dentro de tu propia sesión de Little Hotelier."
  - q: "¿Tampermonkey o una extensión de Chrome: cuál necesito?"
    a: "En cierto modo, las dos: Tampermonkey es la extensión de Chrome y los scripts se ejecutan dentro de ella. Instalas Tampermonkey una vez y después añades solo los scripts que quieras."
  - q: "¿Funcionan los scripts en una tablet?"
    a: "Tampermonkey funciona en varios navegadores y su menú ofrece una versión para móviles y tablets. Para pantallas táctiles, instala Mejorar Estilo para Pantallas Táctiles, que agranda botones y menús. Pruébalo antes en tu propio dispositivo."
  - q: "¿Se romperá un script cuando Little Hotelier se actualice?"
    a: "Puede ocurrir. Los scripts modifican las páginas de Little Hotelier, así que un rediseño puede dejar de funcionar hasta que se actualice el script. Desactívalo en el menú de Tampermonkey y avisa del problema en GitHub."
  - q: "¿Cómo desinstalo un script?"
    a: "Haz clic en el icono de Tampermonkey y desactiva el script, o abre el Panel (Dashboard) y bórralo. Recarga Little Hotelier y la página vuelve a la normalidad."
  - q: "¿Los scripts cuestan algo?"
    a: "No. Los scripts del navegador son gratis para siempre y no hace falta ninguna cuenta."
---

Puedes hacer que Little Hotelier vaya más rápido con userscripts gratuitos: pequeños complementos que se ejecutan en tu navegador a través de la extensión Tampermonkey. Añaden precios al calendario, ensanchan las tablas apretadas, estiman la comisión de Booking.com de cada reserva, ponen un botón de factura con un clic en las reservas y más. Instala Tampermonkey una vez, activa **Permitir scripts de usuario** (Allow User Scripts) en Chrome y pulsa **Instalar en Tampermonkey** en la página de cada script.

## ¿Qué es Tampermonkey y por qué scripts en vez de una extensión?

Tampermonkey es una extensión del navegador que ejecuta **userscripts**: pequeños ficheros de JavaScript que ajustan una página web después de cargarla. En lugar de una extensión distinta para cada retoque, instalas Tampermonkey una vez y añades solo los scripts que necesitas. Funciona en Chrome, Edge, Firefox, Safari y Opera.

Cada script de Hotelier Tools es un único fichero legible en un [repositorio público de GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Hay 16: 15 listos para instalar y uno que se hace bajo petición. Todos son gratis para siempre.

## ¿Son seguros los userscripts? Qué pueden tocar y qué no

Es una pregunta razonable, porque un script se ejecuta dentro de la página donde están tus reservas. Esto es lo que estos scripts hacen y lo que no:

- **Solo se ejecutan en Little Hotelier.** Cada script declara los sitios en los que puede ejecutarse: las direcciones propias de Little Hotelier (incluido Direct Booking) y, en el script de Chekin, las de Chekin.
- **Tus datos no se mueven.** Los scripts hablan con Little Hotelier (y con Chekin, solo en ese script). No se envía nada a Hotelier Tools.
- **Actúan como tú.** Un script usa tu sesión abierta, así que solo puede hacer lo que tú harías con tus propios clics. Algunos ajustan un formulario antes de que pulses Guardar, como poner el país o el número de adultos.
- **Puedes leerlos.** El código es público, y Tampermonkey lo muestra antes de instalarlo.
- **Se actualizan solos.** Cada script lleva su dirección de GitHub, para que Tampermonkey pueda descargar versiones nuevas.

La regla general para cualquier userscript: instala solo de fuentes de confianza. Y si Little Hotelier cambia una página, un script puede dejar de funcionar hasta que se actualice. Desactívalo en el menú de Tampermonkey y avísalo en GitHub.

::callout{type="info" title="Independientes y gratuitos"}
Estos scripts los publica Hotelier Tools, que no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Funcionan dentro del acceso a Little Hotelier de tu propio hotel y no necesitan cuenta.
::

## Cómo instalar un script (unos cinco minutos la primera vez)

1. **Instala Tampermonkey** desde [tampermonkey.net](https://www.tampermonkey.net/). Elige la versión normal para tu navegador, no la beta.
2. **Permítele ejecutar scripts.** En Chrome 138 o posterior, haz clic derecho en el icono de Tampermonkey, elige **Gestionar extensión** y activa **Permitir scripts de usuario**. En versiones anteriores de Chrome o en Edge, abre `chrome://extensions` (o `edge://extensions`) y activa el **Modo de desarrollador** ([preguntas frecuentes de Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209)).
3. **Abre la página de un script** en esta web, por ejemplo [Mostrar Precios](/tools/ui/prices-display), y pulsa **Instalar en Tampermonkey**. Tampermonkey abre una pestaña con el código: pulsa **Instalar**.
4. **Recarga Little Hotelier** (F5). El cambio aparece al instante.

Si el botón no funciona, copia el código desde GitHub, elige **Crear un nuevo script…** en el menú de Tampermonkey, pégalo y guarda con Ctrl+S. La [guía de instalación](/tools/ui/instructions) muestra cada paso con imágenes, y aquí tienes [la lista de todos los scripts](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="Menú de Tampermonkey en Chrome con las opciones Enabled, Create a new script y Dashboard" caption="El menú de Tampermonkey: activa o desactiva scripts, crea uno a mano o abre el Panel (Dashboard) para eliminar uno." width="624" height="645"}
::

Para quitar un script, haz clic en el icono de Tampermonkey y desactívalo, o abre **Dashboard** y bórralo.

## Los scripts, agrupados por tarea

Cada script tiene su propia página con imágenes del antes y el después y el botón de instalación.

### Ver más en una sola pantalla

- [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table): la lista de reservas usa todo el ancho de tu pantalla. Se acabó el desplazamiento lateral.
- [Tablas a Todo Ancho](/tools/ui/tables-full-width): lo mismo para todas las tablas de Direct Booking.
- [UI Compacta del Calendario](/tools/ui/compact-calendar-ui): día y fecha en una línea en vez de tres, y filas de tipo de habitación más bajas, para que quepan más habitaciones en el calendario.
- [UI Compacta para Detalles de Reserva](/tools/ui/compact-ui-reservation-details): una pantalla de reserva más compacta con un cuadro de comentarios más alto.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Calendario de Little Hotelier (interfaz en español) tras aplicar UI Compacta del Calendario, con el día de la semana y la fecha en una sola línea y filas compactas de tipo de habitación" caption="UI Compacta del Calendario hace caber más habitaciones y más días en una pantalla." width="1187" height="1306"}
::

### Precios y comisiones de Booking.com

- [Mostrar Precios](/tools/ui/prices-display): muestra el precio de cada noche de cada habitación en el calendario, leído de tu página de Inventario. Útil cuando un huésped llama para preguntar por el viernes.
- [Mostrar Comisiones de Booking.com](/tools/ui/show-booking-commissions): añade un desglose estimado de comisiones y un importe neto aproximado a las reservas de Booking.com. Es una estimación; la factura de Booking.com es la cifra definitiva. Más en [cuánta comisión cobra Booking.com](/blog/booking-com-commission).
- [Cambiar Nombre de Inventario](/tools/ui/change-inventory-name): cambia el nombre del menú **Inventory** a «Inventory - Prices» (en inglés y español), para que el personal nuevo encuentre las tarifas.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Reserva de Booking.com en Little Hotelier (interfaz en español) con líneas de resumen adicionales para el cargo por transferencia, la comisión de Booking.com, el total de comisiones con IVA y un importe neto aproximado" caption="Una estimación de lo que te deja una reserva de Booking.com después de la comisión." width="752" height="715"}
::

### Pagos y facturas con menos clics

- [Botón Extra de Imprimir Factura](/tools/ui/extra-invoice-print-button): un enlace directo para imprimir la factura en la reserva, sin abrir el menú Imprimir.
- [Mejorar Botón de Enlace de Pago](/tools/ui/update-payment-link-button): texto más claro en el botón del enlace de pago, y el teléfono del huésped se añade desde el formulario automáticamente.
- [Botón de Email de Transferencia Bancaria](/tools/ui/bank-transfer-email-button): un botón que envía por email tus datos bancarios con un texto rellenado. Aún no está publicado y se prepara bajo petición.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Pie de una reserva de Little Hotelier (interfaz en español) con un enlace adicional Imprimir Factura junto a los menús Imprimir y Email" caption="Un clic para imprimir la factura." width="604" height="265"}
::

¿Quieres que la factura salga sin ningún clic? Mira [cómo enviar la factura automáticamente al hacer el check-out](/blog/send-invoice-to-guest-at-checkout).

### Datos del huésped y check-in

- [Conexión con Chekin](/tools/ui/show-chekin): si usas Chekin para el check-in online, muestra el registro de Chekin de cada huésped (nombre, teléfono, número de documento) dentro de la reserva. Puedes copiar el documento a la factura y compartir el formulario de registro por email o WhatsApp. Usa tu propio acceso a Chekin.
- [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country): para alojamientos en España, una lista de provincias españolas en el campo de provincia. Al elegir una, el país pasa a ser España, y los campos de nombre y apellidos vacíos se rellenan con un guion bajo.
- [Actualizar Número de Adultos](/tools/ui/update-number-adults): los formularios de reserva nueva empiezan con 2 adultos en vez de 0, lo que evita guardar una reserva sin adultos.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Reserva de Little Hotelier (interfaz en español) con un panel de Chekin que lista un huésped registrado, el número de documento y un botón Use document" caption="Los registros de Chekin dentro de la reserva de Little Hotelier." width="1484" height="831"}
::

### Comodidad diaria: recargas, tablets y atajos

- [Actualización Automática por Inactividad](/tools/ui/auto-refresh-inactivity): recarga la página tras 10 minutos sin clics, movimientos del ratón ni desplazamiento, para que no vuelvas a una sesión caducada. Nunca recarga mientras trabajas.
- [Mejorar Estilo para Pantallas Táctiles](/tools/ui/improve-style-touch-screens): botones y menús más grandes para tablets, y el botón de quitar habitación, que normalmente solo aparece al pasar el ratón, siempre es visible.
- [Agregar Botón de Verificación en Front Desk desde Direct Booking](/tools/ui/add-button-check-front-desk): desde una reserva de Direct Booking, un botón para comprobarla en Front Desk y revisar reembolsos. Si no has iniciado sesión en Front Desk, puede que tengas que pulsarlo dos veces.

## Qué scripts instalar primero

- **Recepción con portátil:** Tabla de Reservas a Todo Ancho, Actualización Automática por Inactividad y Botón Extra de Imprimir Factura.
- **Propietario o gestión de ingresos:** Mostrar Precios y Mostrar Comisiones de Booking.com.
- **Alojamientos en España:** Guardado Fácil de Provincia y País, y Conexión con Chekin si usas Chekin.
- **Tablet en recepción:** Mejorar Estilo para Pantallas Táctiles.

## Cuando necesitas más que retoques de interfaz

Los scripts cambian lo que ves mientras estás delante de la pantalla. No pueden trabajar cuando no estás. Para tareas que se ejecutan solas, como revisar cada llegada por si falta un documento o enviar facturas al hacer el check-out, está el [panel de Hotelier Tools](/tools/bot). Es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027; los scripts siguen siendo gratis para siempre. Para más atajos dentro de la propia Little Hotelier, mira [trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

## Resumen

- Instala Tampermonkey una vez, permite los scripts de usuario y pulsa **Instalar en Tampermonkey** en cada script que quieras.
- Los scripts solo se ejecutan en Little Hotelier (y en Chekin, uno de ellos), no envían nada a Hotelier Tools y se actualizan solos.
- Empieza por los que encajan con tu tarea: tablas más anchas y recarga automática para recepción, precios y comisiones para el propietario.
- Si uno falla tras una actualización de Little Hotelier, desactívalo en el menú de Tampermonkey.
