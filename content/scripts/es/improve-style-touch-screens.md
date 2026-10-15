---
title: "Mejorar Estilo para Pantallas Táctiles"
description: "Hace Little Hotelier más cómodo en una tableta: menús Print y Email más grandes, botones del pie resaltados y botón de quitar habitación siempre visible."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Este script ajusta la pantalla de reserva de Little Hotelier para pantallas táctiles, como una tableta en recepción. Agranda los menús Print y Email, resalta sus botones y muestra el botón de quitar habitación, que normalmente solo aparece al pasar el ratón por encima. Es para los equipos de recepción que trabajan con tabletas o monitores táctiles.

## El problema que resuelve

La pantalla de reserva de Little Hotelier está diseñada para un ratón. Las opciones Print y Email se abren en pequeños menús emergentes con texto pequeño, difíciles de pulsar con un dedo. El botón para quitar una habitación de una reserva permanece oculto hasta que pasas el ratón por encima de la habitación, y una pantalla táctil no tiene hover, así que en una tableta ese botón es difícil de alcanzar.

## Qué cambia

En la pantalla de la reserva en Front Desk:

- **Botón de quitar habitación:** el botón redondo para quitar una habitación de la reserva está siempre visible.
- **Menús Print y Email:** las opciones de estos menús emergentes usan un texto mucho más grande (30 píxeles), y los menús se ensanchan para acomodarlas.
- **Botones del pie:** los botones Print y Email del pie de la reserva reciben un fondo azul claro y más espacio, para que sean fáciles de encontrar y de pulsar.
- **Menú Email invoice:** se oculta el pequeño icono de información junto a la opción de factura.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey en el navegador de tu tableta o de tu ordenador, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script se ejecuta en las páginas de Front Desk en app.littlehotelier.com. Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Conviene saber

- Tampermonkey debe estar disponible en el navegador de la tableta. Prueba la configuración en tu propio dispositivo antes de depender de ella en el mostrador.
- Los cambios también se aplican en un ordenador de sobremesa. El botón de quitar habitación ahora está siempre en pantalla, así que ten cuidado de no pulsarlo por error.
- Solo cambia estilos. No cambia lo que hace ningún botón, y no guarda nada.
- Las pantallas más nuevas de application.littlehotelier.com, como el calendario, no se ven afectadas.
- Para formularios de huéspedes más cómodos en pantallas táctiles, [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country) también agranda los botones de añadir huésped y de expandir.

## Relacionado

- [UI Compacta para Detalles de Reserva](/tools/ui/compact-ui-reservation-details)
- [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country)
- [Extensiones de Chrome para Little Hotelier: scripts gratis](/blog/little-hotelier-chrome-extensions)
