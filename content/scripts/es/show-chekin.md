---
title: "Conexión con Chekin"
description: "Muestra en la reserva de Little Hotelier los datos de check-in online de Chekin por huésped, rellena formularios con un clic y comparte el enlace de registro."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Este script conecta Chekin, el servicio de check-in online, con Little Hotelier. Al abrir una reserva, un panel de Chekin muestra los huéspedes que ya se han registrado y te permite copiar sus datos en los formularios de huéspedes de Little Hotelier. Es para los equipos de recepción que usan Chekin para recoger los documentos de identidad de los huéspedes.

## El problema que resuelve

Sin él, en cada llegada hay que buscar la reserva en Chekin, comprobar quién se ha registrado y copiar a mano números de documento y direcciones. Es lento, y los números de documento copiados se escriben mal con facilidad.

## Qué cambia

En la pantalla de edición de la reserva en Front Desk, se añade un panel de Chekin a la sección del contacto principal:

- **Estado:** si la reserva se encontró en Chekin y cuántos huéspedes están registrados, con un enlace **View in Chekin**.
- **Tabla de huéspedes:** nombre, teléfono, documento de identidad, ciudad, provincia y país de cada huésped registrado.
- **Use as Primary:** copia el número de documento de ese huésped en el campo de documento del huésped principal, listo para la factura.
- **Save Guest** y **Save All Guests:** rellenan los formularios de huéspedes adicionales de Little Hotelier con los datos de Chekin. Después pulsas el botón Save de Little Hotelier para confirmar.
- **Enlace del formulario de registro:** cuando todavía no se ha registrado nadie, el enlace del formulario del huésped con botones Open, Copy, Email y WhatsApp, usando el email y el teléfono del huésped de la reserva.
- **Create Checkin Reservation:** si no hay coincidencias, crea la reserva en Chekin a partir de las fechas, las habitaciones, el número de huéspedes y los datos de contacto de Little Hotelier.

En el calendario, el script también carga en segundo plano los datos de Chekin de las reservas visibles, para que las reservas se abran más rápido.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey y una cuenta de Chekin. Pulsa **Instalar en Tampermonkey**, confirma y luego inicia sesión en dashboard.chekin.com en el mismo navegador. La [guía de instalación](/tools/ui/instructions) muestra los pasos. El script se ejecuta en las páginas de edición de reservas de Little Hotelier, en el calendario y en las páginas del panel de Chekin que abre él mismo. Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Conviene saber

- Usa tu propio inicio de sesión de Chekin. Si has cerrado sesión, el panel muestra un botón **Login Required on Chekin**.
- Para buscar, abre una pestaña de Chekin en segundo plano.
- La reserva necesita una fecha de entrada y una habitación asignada. Busca coincidencias por la referencia de la reserva y luego por el número de habitación.
- Los resultados se guardan en tu navegador hasta 24 horas, y las precargas del calendario hasta 4 horas.
- El panel sigue el idioma de tu navegador (inglés o español). Los mensajes compartidos terminan con la firma del alojamiento del autor; edítala en el script.

## Relacionado

- [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Normas de registro de huéspedes por país](/blog/guest-registration-rules-by-country)
- [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country)
