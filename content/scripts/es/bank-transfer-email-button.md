---
title: "Botón de Email de Transferencia Bancaria"
description: "Botón en las reservas de Little Hotelier que redacta un email con tus datos bancarios, el importe pendiente y las fechas de estancia. A petición, no publicado."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Este script añade un botón a las reservas de Little Hotelier que abre un email ya preparado pidiendo al huésped que pague por transferencia bancaria. El email ya contiene el importe pendiente, las fechas de estancia y las habitaciones reservadas. Está dirigido a propietarios y personal de recepción de alojamientos que aceptan transferencias. No está publicado para uso general: la versión actual está escrita para una sola propiedad, así que se configura a petición.

## El problema que resuelve

Cuando un huésped quiere pagar por transferencia, alguien tiene que escribir el mismo email cada vez: número de cuenta, banco, beneficiario, una referencia de pago, el importe exacto y las fechas de la reserva. Copiar a mano el importe y las fechas es lento, y una referencia equivocada dificulta identificar el pago después.

## Qué cambia

En la pantalla de la reserva en Front Desk:

- Se añade una opción nueva al menú **Email**, y aparece un botón nuevo con un icono de sobre junto al botón **Print**.
- Al hacer clic en cualquiera de los dos, se abre tu programa de correo con un mensaje nuevo dirigido al email del huésped.
- El mensaje se rellena con los datos de la reserva: el importe pendiente, una referencia de pago formada por la fecha de entrada y el nombre del huésped, las fechas de entrada y salida, y las habitaciones agrupadas por tipo con el número de cada una.
- También incluye un enlace a la reserva en Little Hotelier, para tu propia referencia.

## Cómo instalarlo

Este script todavía no está publicado para uso general. [Contáctame](/contact) y puedo adaptarlo a tu propiedad. Una vez adaptado, se instala como los demás scripts: necesitas la extensión gratuita Tampermonkey, y la [guía de instalación](/tools/ui/instructions) muestra los pasos. Solo se ejecuta en las páginas de Front Desk de Little Hotelier (app.littlehotelier.com). Es de código abierto, y puedes leer el [código actual en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Conviene saber

- Los datos bancarios, el nombre de la propiedad, la firma, la hora de llegada y la redacción del email están escritos directamente en el código, en español, para la propiedad del autor. Hay que cambiarlos antes de que otra persona pueda usarlo.
- El importe se muestra en euros.
- El email se abre en el programa de correo predeterminado de tu ordenador mediante un enlace de correo estándar. No se envía nada hasta que pulses enviar allí.
- El email pide a los huéspedes que confirmen el número de cuenta por teléfono, como protección frente a emails fraudulentos que cambian los datos bancarios.
- El script no guarda nada y no envía datos a ningún sitio. Solo lee campos que ya están en la pantalla de la reserva.

## Relacionado

- [Mejorar Botón de Enlace de Pago](/tools/ui/update-payment-link-button) para pagos con tarjeta mediante enlace
- [Botón Extra de Imprimir Factura](/tools/ui/extra-invoice-print-button)
- [Extensiones de Chrome para Little Hotelier: scripts gratuitos](/blog/little-hotelier-chrome-extensions)
