---
title: "Botón Extra de Imprimir Factura"
description: "Añade un botón Print Invoice a cada reserva de Little Hotelier, junto al menú Print, para que recepción imprima la factura con un clic en lugar de dos."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Este script coloca un botón **Print Invoice** directamente en la pantalla de reserva de Little Hotelier, junto al menú **Print** existente. Un clic abre la factura, sin tener que abrir antes ningún menú. Es para el personal de recepción que imprime o descarga una factura en casi todos los check-outs.

## El problema que resuelve

En Front Desk, la factura está dentro del menú Print de la reserva: abres el menú y luego eliges la factura. Dos clics no son muchos una vez, pero a la hora del check-out, con huéspedes esperando, se acumulan, y en una tableta el menú pequeño se pasa por alto fácilmente. Además, el personal nuevo no siempre sabe que la factura está dentro de ese menú.

## Qué cambia

- Aparece un botón nuevo con un icono de documento en el pie de la reserva, justo después del botón del menú **Print**.
- Su etiqueta es **Print Invoice**, o **Imprimir Factura** cuando Little Hotelier está en español.
- Al hacer clic se activa el propio enlace de impresión de factura de Little Hotelier, el mismo que elegirías en el menú Print. El resultado es exactamente la factura que genera Little Hotelier; el script no crea ni modifica facturas.
- El menú Print original se queda como está, con todas sus demás opciones.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey. Pulsa **Instalar en Tampermonkey** en esta página, confirma y recarga Little Hotelier. La [guía de instalación](/tools/ui/instructions) tiene imágenes de cada paso. El script se ejecuta en las páginas de Front Desk en app.littlehotelier.com y solo añade el botón donde existe el botón Print de la reserva. Es gratuito y de código abierto: [mira el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Conviene saber

- El script busca el botón Print varias veces durante los primeros cinco segundos tras cargar la página. Si falta el botón porque la reserva se abrió más tarde, recarga la página.
- Comprueba primero si su botón ya está, así que nunca aparecen dos.
- Las etiquetas existen en inglés y en español. Los demás idiomas de la interfaz muestran la etiqueta en inglés.
- Funciona en ordenadores y en pantallas táctiles. Con [Mejorar Estilo para Pantallas Táctiles](/tools/ui/improve-style-touch-screens), los botones del pie también reciben un fondo resaltado.
- No guarda nada y no envía nada fuera de Little Hotelier.

## Relacionado

- [Cómo enviar la factura al huésped al hacer el check-out](/blog/send-invoice-to-guest-at-checkout)
- [Descargar todas las facturas de Little Hotelier](/blog/download-all-little-hotelier-invoices)
- [Botón de Email de Transferencia Bancaria](/tools/ui/bank-transfer-email-button)
