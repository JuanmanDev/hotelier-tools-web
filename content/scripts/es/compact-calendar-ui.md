---
title: "UI Compacta del Calendario"
description: "Compacta el calendario de Little Hotelier: fechas en una línea en vez de tres y filas de tipo de habitación más finas, para ver más habitaciones y días."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Vista de Calendario"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Este script recorta el espacio vacío del calendario de Little Hotelier para que quepan más habitaciones en la pantalla sin desplazarte. Es para el personal de recepción que tiene el calendario abierto todo el día y quiere ver toda la propiedad, o casi toda, de un vistazo.

## El problema que resuelve

El calendario estándar usa mucho espacio vertical antes de que aparezca la primera reserva. El encabezado de cada día apila su información en tres líneas, cada tipo de habitación tiene su propia fila de título alta, y la barra de navegación y de filtros añade márgenes extra. En la pantalla de un portátil, esto saca habitaciones de la vista, así que subes y bajas para comprobar la disponibilidad mientras un huésped espera.

## Qué cambia

Todos los cambios son visuales, hechos con estilos añadidos a la página:

- **Encabezados de fecha:** el día de la semana y la fecha van uno al lado del otro en una sola fila en lugar de apilados en tres líneas.
- **Celda superior izquierda del encabezado:** su altura se limita, así que la fila del encabezado se mantiene corta.
- **Filas de título de tipo de habitación:** más cortas, con fondo transparente y sin bordes, así que ocupan menos espacio entre habitaciones.
- **Botón de expandir o contraer todo:** se le quitan el relleno y los márgenes.
- **Navegación y filtros:** se reducen los márgenes sobre la navegación de fechas y bajo las opciones de filtro.

Las barras de reserva y las filas de habitaciones no cambian. Solo cambian el espaciado y el diseño del encabezado.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga el calendario. Las imágenes paso a paso están en la [guía de instalación](/tools/ui/instructions). El script coincide con app.littlehotelier.com y application.littlehotelier.com, pero sus estilos solo afectan a la tabla del calendario y a su barra de herramientas. Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Conviene saber

- Añade sus estilos una sola vez al cargar la página. No lee ni guarda ningún dato de reservas.
- No cambia el número de días que se muestran. Para eso usa las opciones de rango de fechas del propio Little Hotelier.
- Funciona igual con ratón o en una pantalla táctil.
- Funciona junto con [Mostrar Precios](/tools/ui/prices-display), que escribe el precio de cada noche bajo cada tipo de habitación en el mismo calendario.
- Si Little Hotelier cambia el diseño del calendario, es posible que algunos ajustes dejen de aplicarse hasta que se actualice el script. Desactívalo en el menú de Tampermonkey si algo se ve mal.

## Relacionado

- [Mostrar Precios](/tools/ui/prices-display)
- [Trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips)
- [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table)
