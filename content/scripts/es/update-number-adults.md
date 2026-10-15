---
title: "Actualizar Número de Adultos"
description: "Fija el campo de adultos en 2 cuando el formulario de reserva de Little Hotelier se abre con 0 adultos, para no guardar por error una reserva sin huéspedes."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Este script cambia el número de adultos predeterminado de una reserva nueva de Little Hotelier de 0 a 2. Es para el personal de recepción que crea a mano reservas de pasada y por teléfono, donde la mayoría de las reservas son para dos personas y un campo de adultos olvidado causa problemas más tarde.

## El problema que resuelve

Cuando creas una reserva en Front Desk, el campo de adultos puede empezar en 0. Si nadie lo cambia, la reserva se guarda sin adultos. Cero adultos puede descuadrar el registro de huéspedes, el recuento de desayunos y cualquier tasa turística que se cobre por persona, y corregirlo después significa encontrar y reabrir cada reserva.

## Qué cambia

- Cuando se carga una página de reserva, el script mira el campo de **número de adultos**.
- Si vale 0, el script lo fija en 2 y avisa a Little Hotelier de que el valor ha cambiado, como si lo hubieras escrito tú.
- Si contiene cualquier otro número, lo deja como está, así que las reservas existentes no se tocan.
- Todavía puedes cambiar el valor a 1, 3 o cualquier otro número antes de guardar.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script se ejecuta en las páginas de Front Desk en app.littlehotelier.com y solo actúa cuando el campo de adultos está en la página. Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Conviene saber

- El valor 2 está fijado en el código. Si tu alojamiento vende sobre todo habitaciones individuales o camas sueltas, edita el número en el editor de Tampermonkey.
- La comprobación se ejecuta una sola vez, medio segundo después de cargar la página. Si un formulario de reserva se abre más tarde sin recargar la página, el campo no se cambia.
- Solo cambia el campo en el formulario. No se guarda nada hasta que pulsas Save.
- El número de niños no se modifica.
- Funciona igual en ordenadores y en pantallas táctiles. No guarda nada y no envía nada a ningún sitio.

## Relacionado

- [Lista diaria de tareas de recepción para Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country)
- [Trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips)
