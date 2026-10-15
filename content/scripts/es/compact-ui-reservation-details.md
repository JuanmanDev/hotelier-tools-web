---
title: "UI Compacta para Detalles de Reserva"
description: "Quita el relleno sobrante de la ventana de reserva de Little Hotelier y alarga el cuadro de comentarios del huésped, para leer las notas sin desplazarte dentro."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Este script compacta el diseño de la ventana de reserva de Little Hotelier Front Desk y da más altura al cuadro de comentarios del huésped. Es para el personal de recepción que abre muchas reservas al día y quiere leer las notas dejadas por huéspedes o compañeros sin desplazarse dentro de un cuadro pequeño.

## El problema que resuelve

Los comentarios del huésped suelen contener la información que importa en el check-in: una llegada tardía, una cuna, una petición de aparcamiento, una ocasión especial. En la ventana de reserva estándar el campo de comentarios es corto, así que las notas más largas quedan cortadas y tienes que desplazarte dentro. Además, el relleno en la parte superior de las pestañas y el espaciado alrededor de las zonas de alertas y de las líneas separadoras empujan los campos útiles más abajo.

## Qué cambia

En la pantalla de la reserva en Front Desk:

- El cuadro de texto de **comentarios del huésped** tiene al menos 126 píxeles de alto, así que se ven varias líneas de notas a la vez.
- Se quita el relleno en la parte superior del contenido de las pestañas de la reserva.
- Las zonas vacías reservadas para alertas ya no añaden margen.
- Las líneas separadoras horizontales pierden su margen extra.

Los campos, los botones y las pestañas se quedan donde están. Solo cambian el espaciado y la altura del cuadro de comentarios.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) tiene imágenes de cada paso. El script se ejecuta en las páginas de Front Desk de app.littlehotelier.com, y sus estilos solo afectan a la ventana de reserva. Es gratuito y de código abierto: [el código está en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Conviene saber

- Funciona añadiendo unos pocos estilos al cargar la página. No lee, cambia ni guarda datos de reservas.
- Las notas más largas que la nueva altura siguen desplazándose dentro del cuadro como siempre.
- Funciona igual en ordenadores y en pantallas táctiles. Para una tableta, combínalo con [Mejorar Estilo para Pantallas Táctiles](/tools/ui/improve-style-touch-screens), que agranda los menús Print y Email.
- También combina bien con [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country), que actúa sobre los formularios de huéspedes de la misma ventana.
- Si Little Hotelier cambia la ventana de reserva, es posible que algunos ajustes de espaciado dejen de aplicarse hasta que se actualice el script.

## Relacionado

- [Mejorar Estilo para Pantallas Táctiles](/tools/ui/improve-style-touch-screens)
- [Checklist diario de recepción de hotel para Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Extensiones de Chrome para Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
