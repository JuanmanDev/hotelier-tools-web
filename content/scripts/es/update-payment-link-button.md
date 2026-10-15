---
title: "Mejorar Botón de Enlace de Pago"
description: "Da al botón del enlace de pago de Little Hotelier una etiqueta más clara y añade al enlace el teléfono del huésped de la reserva, para no volver a escribirlo."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Este script mejora el botón del enlace de pago de la pantalla de reserva de Little Hotelier. Le da una etiqueta más clara y añade al enlace de pago el teléfono del huésped que figura en la reserva. Es para el personal de recepción que pide a los huéspedes que paguen un depósito o el saldo con tarjeta mediante un enlace de pago.

## El problema que resuelve

El texto estándar del botón de solicitud de pago no deja claro a todo el personal que así se pide a un huésped que pague con tarjeta. Y el teléfono del huésped, que ya está guardado en la reserva, no pasa al enlace de pago, así que hay que introducirlo de nuevo. Ambas cosas hacen perder tiempo mientras un huésped está al teléfono.

## Qué cambia

En la pantalla de la reserva en Front Desk:

- El botón de solicitud de pago pasa a llamarse **Generate Payment Link**, o **Cobrar con tarjeta por correo electronico (Email)** cuando Little Hotelier está en español.
- El número del campo de teléfono del huésped se añade al enlace del botón como parámetro de teléfono, sin espacios y sin el signo "+".
- Si Little Hotelier reconstruye el enlace, el script vuelve a aplicar el cambio.
- Si el enlace ya incluye un teléfono, se deja como está.

## Cómo instalarlo

Instala la extensión gratuita Tampermonkey, pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script se ejecuta en las páginas de Front Desk en app.littlehotelier.com y solo actúa cuando una reserva muestra el botón de solicitud de pago. Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Conviene saber

- Solo cambia el texto y el enlace del botón. El pago en sí lo gestiona Little Hotelier como siempre, y el script nunca ve los datos de la tarjeta.
- El script lee el campo de teléfono una sola vez, en cuanto añade el número al enlace. Si escribes o corriges el número después, el enlace conserva el primer valor que leyó, así que guarda la reserva y recárgala antes de usar el botón.
- El número se añade solo con dígitos, así que incluye el prefijo del país en el campo de teléfono de la reserva.
- Las etiquetas existen en inglés y en español. Los demás idiomas de la interfaz muestran la etiqueta en inglés.
- No guarda nada y no envía nada fuera de Little Hotelier.

## Relacionado

- [Botón de Email de Transferencia Bancaria](/tools/ui/bank-transfer-email-button)
- [Cómo usar WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier)
- [Extensiones de Chrome para Little Hotelier: scripts gratis](/blog/little-hotelier-chrome-extensions)
