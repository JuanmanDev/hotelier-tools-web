---
title: "Mostrar Precios"
description: "Muestra el precio de cada noche en el calendario de Little Hotelier, leído de tu página Inventory en una pestaña en segundo plano, sin cambiar de pantalla."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Vista de Calendario"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Este script muestra el precio de cada tipo de habitación para cada noche directamente en el calendario de Little Hotelier. Cuando un huésped llama para preguntar cuánto cuesta el viernes, recepción lo ve en la misma pantalla que la disponibilidad, sin abrir la página Inventory. Es para el personal de recepción que atiende reservas por teléfono y de paso, y para los propietarios.

## El problema que resuelve

En Little Hotelier, la disponibilidad está en el calendario y las tarifas en la página Inventory. Dar un precio implica cambiar de pantalla, encontrar las fechas y el tipo de habitación correctos y volver al calendario para hacer la reserva. En los momentos de mucho trabajo es lento y propenso a errores.

## Qué cambia

- En el calendario, la última fila de cada tipo de habitación (la fila sin asignar) muestra el precio de esa noche para el tipo de habitación.
- Los precios salen de tu página Inventory: el script la abre en una pestaña en segundo plano, lee la primera fila de tarifa de cada tipo de habitación y cierra la pestaña.
- La página Inventory abarca 14 días cada vez, así que para vistas de calendario más largas el script la lee en bloques de 14 días, uno tras otro.
- Mientras se carga un precio, la celda muestra "...". Las fechas pasadas se quedan vacías.
- Los precios aparecen en una fuente gris más grande, para que se distingan de las reservas.
- Al moverte a otras fechas, se cargan los precios del nuevo rango.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey. Pulsa **Instalar en Tampermonkey** en esta página. La pantalla de instalación lista los permisos adicionales que usa el script, que le permiten abrir una pestaña en segundo plano y guardar precios en Tampermonkey. Confirma y recarga el calendario. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script se ejecuta en el calendario (application.littlehotelier.com) y en la página Inventory que lee (app.littlehotelier.com). Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Conviene saber

- Los precios se guardan en el almacenamiento de Tampermonkey de tu ordenador hasta una hora y luego se vuelven a leer. Una tarifa que cambies en Inventory puede tardar hasta una hora en aparecer en el calendario.
- Tienes que haber iniciado sesión en Little Hotelier, porque la pestaña en segundo plano usa tu sesión. Es normal que una pestaña se abra y se cierre brevemente.
- Solo muestra la primera fila de tarifa de cada tipo de habitación de la página Inventory, no todos los planes de tarifa.
- Los nombres de los tipos de habitación deben coincidir entre el calendario y la página Inventory para que aparezca un precio.
- El script arranca cuatro segundos después de cargar el calendario y espera hasta 30 segundos por cada bloque de Inventory. No se envía nada fuera de Little Hotelier.

## Relacionado

- [Cambiar Nombre de Inventario](/tools/ui/change-inventory-name)
- [Precios dinámicos para hoteles pequeños con Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [UI Compacta del Calendario](/tools/ui/compact-calendar-ui)
