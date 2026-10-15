---
title: "Tabla de Reservas a Todo Ancho"
description: "Ensancha la lista Reservations de Little Hotelier Front Desk para usar toda la pantalla, hasta 2000 píxeles, y que las columnas quepan sin desplazarte de lado."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Este script permite que la lista Reservations de Little Hotelier Front Desk use todo el ancho de tu monitor. Es para el personal de recepción y los propietarios que buscan y revisan reservas en una pantalla ancha y están hartos de una tabla estrecha en el centro con espacio vacío a ambos lados.

## El problema que resuelve

La página Reservations de Front Desk mantiene su contenido en una columna de ancho fijo. En un monitor grande, la tabla de reservas queda comprimida en esa columna, así que los nombres largos de huéspedes se parten en varias líneas y algunas columnas necesitan desplazamiento horizontal. Acabas desplazándote de lado y hacia abajo para consultar una sola reserva, mientras la mitad de la pantalla queda vacía.

## Qué cambia

- En la página Reservations, el encabezado de la página, el área de contenido y el contenedor principal pueden crecer hasta 2000 píxeles de ancho en lugar del ancho fijo estándar.
- La tabla se extiende por la pantalla, así que las columnas tienen más espacio y los nombres largos de huéspedes se parten menos.
- No se elimina ni se reordena nada: las mismas columnas, filtros y enlaces siguen en su sitio.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga la página Reservations. La [guía de instalación](/tools/ui/instructions) muestra cada paso con imágenes. El script solo se ejecuta en las páginas de Front Desk cuya dirección contiene /reservations (app.littlehotelier.com/extranet/properties/.../reservations). Es gratuito y de código abierto: [el código está en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Conviene saber

- En pantallas de más de 2000 píxeles de ancho, el contenido deja de crecer a ese ancho.
- En un portátil pequeño o en una tableta apenas hay diferencia, porque la página ya ocupa toda la pantalla.
- Como coincide con todas las direcciones bajo /reservations, el diseño más ancho también se aplica a otras páginas de esa sección, como una reserva abierta desde la lista.
- Solo añade una regla de estilo al cargar la página. No guarda nada y no envía nada a ningún sitio.
- Para el mismo efecto en las tablas de Direct Booking, instala [Tablas a Todo Ancho](/tools/ui/tables-full-width).
- Si Little Hotelier rediseña la página Reservations, es posible que el diseño más ancho deje de aplicarse hasta que se actualice el script.

## Relacionado

- [Tablas a Todo Ancho](/tools/ui/tables-full-width)
- [Exportar las reservas de Little Hotelier a Excel](/blog/export-little-hotelier-reservations-excel)
- [Lista diaria de tareas de recepción para Little Hotelier](/blog/hotel-front-desk-checklist-automation)
