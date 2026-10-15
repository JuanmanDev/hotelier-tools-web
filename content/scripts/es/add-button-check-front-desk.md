---
title: "Agregar Botón de Verificación en Front Desk desde Direct Booking"
description: "Añade un botón a las reservas de Direct Booking en Little Hotelier que abre la misma reserva en Front Desk para revisar sus detalles y los posibles reembolsos."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Este script añade un botón a cada reserva del extranet de Direct Booking de Little Hotelier que abre la misma reserva en Front Desk, en una pestaña nueva. Es para el personal de recepción y los propietarios que gestionan reservas directas y necesitan revisar la reserva completa o consultar un reembolso sin buscarla a mano.

## El problema que resuelve

Direct Booking (el back office del motor de reservas, en app.thebookingbutton.com) y Front Desk son pantallas separadas. Cuando un huésped que reservó en tu web llama por un cambio o un reembolso, encuentras la reserva en Direct Booking, pero la habitación, los pagos y los datos del huésped están en Front Desk. Sin el script, copias la referencia, cambias a Front Desk y buscas a mano.

## Qué cambia

- En la pestaña **Guest** de una reserva de Direct Booking, aparece un botón nuevo en la lista de acciones: "View reservation data in Front Desk and check refunds" (o su versión en español).
- El botón abre la lista **Reservations** de Front Desk en una pestaña nueva, ya filtrada por la referencia de la reserva.
- La búsqueda cubre fechas de entrada desde hace dos meses hasta dentro de un año, así que se encuentran las estancias recientes y las próximas.
- El script lee el ID de tu propiedad del enlace a Front Desk de la página, así que la búsqueda se abre en tu propia propiedad.
- Revisa la página cada dos segundos. Cuando pasas a otra reserva, el botón se actualiza para apuntar a la nueva referencia.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey. Pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Direct Booking. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script solo se ejecuta en las páginas de reservas de Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). Es gratuito y de código abierto: puedes [leer el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Conviene saber

- El script no comprueba si has iniciado sesión en Front Desk. Si no lo has hecho, inicia sesión y pulsa el botón por segunda vez.
- Las reservas con fecha de entrada de hace más de dos meses, o de dentro de más de un año, quedan fuera del rango de búsqueda y no aparecerán en los resultados.
- Si el enlace a Front Desk no está en la página, el script recurre a un ID de propiedad fijo escrito en el código, y la búsqueda no se abrirá en tu propiedad. Si pasa, edita ese valor en el script.
- El texto del botón existe solo en inglés y en español.
- No guarda nada y no envía nada fuera de Little Hotelier.

## Relacionado

- [Tablas a Todo Ancho](/tools/ui/tables-full-width) para tablas más anchas en Direct Booking
- [Extensiones de Chrome para Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
