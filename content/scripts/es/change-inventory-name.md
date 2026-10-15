---
title: "Cambiar Nombre de Inventario"
description: "Cambia el nombre del menú Inventory de Little Hotelier a Inventory - Prices, en inglés y español, para que el personal nuevo sepa dónde cambiar las tarifas."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Este pequeño script cambia el nombre de la opción **Inventory** del menú superior de Little Hotelier a **Inventory - Prices** (o **Inventario - Precios** en español). Es para propietarios que forman a personal nuevo de recepción: la etiqueta indica que en esa pantalla se fijan las tarifas, no solo la disponibilidad de habitaciones.

## El problema que resuelve

En Little Hotelier, las tarifas de las habitaciones se editan en la pantalla Inventory. Para alguien nuevo en el sistema, "Inventory" suena a existencias o a número de habitaciones, así que busca un menú "Prices" o "Rates" que no existe. Una etiqueta más clara evita que se repita la misma pregunta en cada cambio de turno.

## Qué cambia

- En el menú de navegación horizontal de las pantallas más nuevas de Little Hotelier, la opción llamada "Inventory" pasa a ser "Inventory - Prices".
- Si el menú está en español, "Inventario" pasa a ser "Inventario - Precios".
- El sufijo sigue el idioma de la página: las páginas en español reciben "Precios" y cualquier otro idioma recibe "Prices".
- Solo cambia la etiqueta visible. El enlace sigue yendo a la misma pantalla Inventory.
- Como el menú se carga por etapas, el script lo intenta tres veces en los primeros segundos tras cargar la página, y nunca añade el sufijo dos veces.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey. Pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script solo se ejecuta en application.littlehotelier.com, la dirección que usan las pantallas más nuevas de Little Hotelier, como el calendario. Es gratuito y de código abierto: [mira el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Conviene saber

- Solo reconoce la opción del menú cuando dice exactamente "Inventory" o "Inventario". Si Little Hotelier está en otro idioma, como francés o alemán, la etiqueta se queda como está.
- Solo cambia el menú de navegación superior. Las páginas de app.littlehotelier.com y de Direct Booking no coinciden, así que sus menús no cambian.
- Funciona igual en ordenadores y en pantallas táctiles.
- No guarda nada y no envía nada a ningún sitio.
- Si Little Hotelier renombra o rediseña el menú, es posible que la etiqueta deje de cambiar hasta que se actualice el script.

## Relacionado

- [Mostrar Precios](/tools/ui/prices-display) muestra los precios de tu Inventory en el calendario
- [Precios dinámicos para hoteles pequeños con Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips)
