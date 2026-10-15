---
title: "Mostrar Comisiones de Booking.com"
description: "Añade a las reservas de Little Hotelier un desglose estimado de la comisión de Booking.com y un neto aproximado, con comisión fija del 17 % y cargo del 1,3 %."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Este script añade a la pantalla de reserva de Little Hotelier una estimación de lo que Booking.com se queda de cada reserva. Para las reservas de Booking.com muestra el cargo por transferencia, la comisión, el total deducido con impuestos y un importe neto aproximado. Es para propietarios y gerentes que quieren una idea rápida de cuánto gana realmente una reserva de Booking.com.

## El problema que resuelve

El total de la reserva en Little Hotelier es lo que paga el huésped, no lo que llega a tu banco. Con Booking.com, la comisión y los cargos de pago se descuentan más tarde, en una factura aparte. Sin una cifra aproximada a mano, es difícil comparar una reserva de un canal con una directa, o ver si un descuento todavía deja margen.

## Qué cambia

Cuando el origen de la reserva es **Booking.com**, se añaden cuatro líneas al resumen de la reserva, justo encima de la línea separadora. Las etiquetas están en español:

- **Cargo por transferencia (1.3%)**: el cargo por transferencia, el 1,3 % del total de la reserva.
- **Comisiones Booking (17%)**: la comisión de Booking.com, el 17 % del total de la reserva.
- **Total comisiones con IVA**: el cargo por transferencia más la comisión más el importe de impuestos que muestra la reserva.
- **Neto Bruto (Aprox.)**: el neto aproximado, el total de la reserva menos esa suma.

Las reservas de cualquier otro origen no se modifican.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script se ejecuta en las páginas de Front Desk en app.littlehotelier.com y solo añade líneas a las reservas de Booking.com. Es gratuito y de código abierto: [mira el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Conviene saber

- Los porcentajes están fijados en el código: 17 % de comisión y 1,3 % de cargo por transferencia. Si tu contrato con Booking.com usa otro porcentaje, edita esos números en el editor de Tampermonkey.
- Las etiquetas se quedan en español y los importes se muestran en euros, sea cual sea el idioma de tu interfaz.
- Es una estimación. La cifra definitiva es la de tu factura de Booking.com.
- Las líneas se calculan una sola vez, unos segundos después de cargar la reserva. Si cambias el total, recarga la página para recalcular.
- Solo lee el origen de la reserva, el total y los impuestos que ya están en pantalla. No guarda nada y no envía nada a ningún sitio.

## Relacionado

- [Cuánta comisión cobra Booking.com](/blog/booking-com-commission)
- [Extensiones de Chrome para Little Hotelier: scripts gratis](/blog/little-hotelier-chrome-extensions)
