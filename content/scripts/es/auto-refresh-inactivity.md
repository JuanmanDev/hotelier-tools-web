---
title: "Actualización Automática por Inactividad"
description: "Recarga Little Hotelier y Direct Booking tras 10 minutos sin clics, desplazamiento ni movimiento del ratón, para no volver a una página desactualizada."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Este script recarga la página de Little Hotelier que tengas abierta tras 10 minutos sin actividad. Está pensado para los ordenadores de recepción donde Little Hotelier se queda abierto todo el día, para que el personal que vuelva al mostrador vea las reservas actuales y una sesión que funciona, en lugar de una página antigua que muestra errores.

## El problema que resuelve

Una página que nadie toca sigue mostrando los datos que cargó al principio. Las reservas nuevas, las cancelaciones y los cambios de habitación hechos por los canales o por compañeros no aparecen hasta que alguien recarga. Además, la sesión puede caducar en segundo plano, y entonces el primer clic después de una pausa falla. Recargar por costumbre es fácil de olvidar cuando hay un huésped esperando en el mostrador.

## Qué cambia

- Un temporizador de 10 minutos empieza al cargar la página.
- Cualquier clic, movimiento del ratón, desplazamiento o gesto táctil en la página reinicia el temporizador, así que la página nunca se recarga mientras alguien la está usando.
- Cuando pasan 10 minutos sin ninguna de esas acciones, el script recarga la misma dirección en la que estabas.
- Nada más cambia en la página: no hay botones ni paneles nuevos.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) explica cada paso. El script se ejecuta en las tres direcciones de Little Hotelier: app.littlehotelier.com (Front Desk), application.littlehotelier.com (las pantallas más nuevas, como el calendario) y app.thebookingbutton.com (Direct Booking). Es gratuito y de código abierto; el [código está en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Conviene saber

- Una recarga descarta todo lo que no esté guardado. Escribir con el teclado no cuenta como actividad, así que si alguien escribe una nota larga durante 10 minutos sin tocar el ratón, la página puede recargarse antes de que guarde. Guarda sobre la marcha.
- El retraso de 10 minutos es un valor fijo en el script (600 segundos). Para cambiarlo, edita ese número en el editor de Tampermonkey.
- Funciona igual en ordenadores y en pantallas táctiles, porque los gestos y toques en la pantalla también cuentan como actividad.
- Se ejecuta en todas las páginas de Little Hotelier que coincidan, incluidos el calendario, la lista de reservas y Direct Booking.
- El script no guarda nada y no envía nada a ningún sitio.

## Relacionado

- [Trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips)
- [Checklist diario de recepción de hotel para Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table)
