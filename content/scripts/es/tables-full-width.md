---
title: "Tablas a Todo Ancho"
description: "Hace que las tablas de la extranet de Direct Booking de Little Hotelier usen todo el ancho de pantalla y resalta la fila bajo el ratón, para leer mejor."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Este script ensancha las tablas de la extranet de Direct Booking de Little Hotelier, el back office del motor de reservas en app.thebookingbutton.com, para que usen todo el ancho de tu pantalla. Es para propietarios y personal que consultan allí reservas directas, informes e inventario en un portátil o en un monitor grande.

## El problema que resuelve

Direct Booking mantiene sus páginas en una columna de ancho fijo. Las listas de reservas y los informes quedan comprimidos en esa columna, los nombres de los huéspedes se cortan, y en un monitor ancho la mitad de la pantalla queda vacía mientras te desplazas de lado por una tabla. Además, las tablas largas son difíciles de seguir a lo largo de una fila sin perder el sitio.

## Qué cambia

En las páginas de la extranet de Direct Booking:

- **Área de contenido principal:** ya no tiene ancho fijo, así que las tablas se extienden por la pantalla.
- **Lista de reservas:** la columna del nombre del huésped ya no tiene el ancho limitado, así que se ven los nombres completos.
- **Contenedor principal:** se le permite usar todo el ancho de la ventana.
- **Informes:** usan todo el ancho de la página.
- **Inventory:** recibe un ancho máximo mayor y se centra, para que no se estire demasiado en pantallas muy anchas.
- **Resaltado de filas:** en las tablas de datos, la fila bajo el puntero del ratón recibe un fondo gris claro, lo que facilita leer a lo largo de la fila.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Direct Booking. La [guía de instalación](/tools/ui/instructions) tiene imágenes paso a paso. El script solo se ejecuta en las páginas de la extranet de Direct Booking (app.thebookingbutton.com/extranet/...), así que Front Desk no se ve afectado. Es gratuito y de código abierto: [mira el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Conviene saber

- En un portátil pequeño o en una tableta la diferencia es pequeña, porque la página ya ocupa toda la pantalla.
- El resaltado de filas sigue al puntero del ratón, así que es útil sobre todo en un ordenador.
- Solo añade reglas de estilo al cargar la página. No guarda nada y no envía nada a ningún sitio.
- Para el mismo efecto en la página Reservations de Front Desk, instala [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table).
- Si Little Hotelier rediseña Direct Booking, es posible que algunos de estos ajustes dejen de aplicarse hasta que se actualice el script.

## Relacionado

- [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table)
- [Agregar Botón de Verificación en Front Desk desde Direct Booking](/tools/ui/add-button-check-front-desk)
- [Extensiones de Chrome para Little Hotelier: scripts gratis](/blog/little-hotelier-chrome-extensions)
