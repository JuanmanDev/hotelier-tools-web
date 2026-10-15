---
title: "Guardado Fácil de Provincia y País"
description: "Selector de provincia y país para formularios de huéspedes de Little Hotelier: un toque fija provincia y España, rellena nombres vacíos y abre cada formulario."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Detalles de Reserva"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Este script agiliza completar los datos de los huéspedes en una reserva de Little Hotelier, sobre todo para huéspedes españoles. Al hacer clic en el campo de provincia, muestra una lista de provincias españolas para tocar, y elegir una también fija el país como España. Está pensado para el personal de recepción de alojamientos en España y diseñado para usarse fácilmente en una tableta.

## El problema que resuelve

Para los huéspedes españoles, Little Hotelier necesita una provincia además del país, y estadísticas como la encuesta de ocupación del INE agrupan a los huéspedes por provincia de residencia. Escribir los nombres de las provincias a mano genera variantes de ortografía (Vizcaya o Bizkaia, Orense o Ourense), la lista de países es larga para desplazarse, y el formulario de un huésped adicional no se guarda mientras sus campos de nombre estén vacíos.

## Qué cambia

En la pantalla de edición de la reserva en Front Desk:

- **Selector de provincia:** al enfocar el campo de provincia se abre una cuadrícula con las 50 provincias españolas más Ceuta y Melilla. Al escribir se filtra, y alternativas habituales como Gerona, Lérida, Seville, Mallorca o Tenerife encuentran la provincia correcta.
- **País fijado automáticamente:** al elegir una provincia, el país del huésped pasa a ser España.
- **Selector de país:** el campo de país abre una cuadrícula con búsqueda que muestra cada país en español, con el nombre en inglés debajo.
- **Nombres vacíos rellenados:** al elegir una provincia o un país, los campos de nombre y apellido vacíos de ese formulario de huésped reciben el nombre del huésped principal, o un guion bajo "_" si ese también está vacío, para que el formulario se pueda guardar.
- **Formularios de huéspedes abiertos:** los formularios de huéspedes contraídos se expanden automáticamente y el cursor pasa al campo de provincia.
- **Botones aptos para pantallas táctiles:** el botón de añadir huésped y las flechas de expandir son más grandes, y la cruz roja para eliminar a un huésped está siempre visible.

## Cómo instalarlo

Necesitas la extensión gratuita Tampermonkey. Pulsa **Instalar en Tampermonkey**, confirma y recarga la reserva. La [guía de instalación](/tools/ui/instructions) muestra cada paso. El script solo se ejecuta en las páginas de edición de reservas (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). Es gratuito y de código abierto: [lee el código en GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Conviene saber

- El selector de provincia solo aparece cuando el país del huésped está vacío o es España. Para otros países, el campo funciona con normalidad.
- El cuadro de búsqueda y los nombres de los países están en español, sea cual sea el idioma que use Little Hotelier.
- Los campos de nombre que se rellenan copian el nombre del huésped principal. Corrígelos si el huésped adicional tiene otro nombre.
- Los cambios se hacen solo en el formulario. No se guarda nada hasta que pulses Save, y el script no guarda nada.

## Relacionado

- [SES.Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Cómo rellenar la encuesta de ocupación hotelera del INE](/blog/ine-hotel-occupancy-survey)
- [Conexión con Chekin](/tools/ui/show-chekin)
