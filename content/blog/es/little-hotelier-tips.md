---
title: "Little Hotelier: trucos, tutorial y funciones ocultas que casi nadie conoce (2026)"
seoTitle: "Little Hotelier: trucos, tutorial y funciones ocultas"
description: "20 trucos de Little Hotelier: calendario más rápido, passkeys, tarifa mínima, noches huecas, enlaces de reserva, registro de cambios y scripts gratis."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier tutorial español, little hotelier como funciona, little hotelier trucos, little hotelier funciones ocultas, little hotelier manual, little hotelier calendario, little hotelier guia]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Página Reservas de Little Hotelier (interfaz en español) ampliada al ancho completo de la pantalla por el script Tabla de Reservas a Todo Ancho: filtros de búsqueda, el botón Buscar, 36 reservas encontradas y el enlace Exportar"
faq:
  - q: "¿Cómo evito que Little Hotelier me pida el código MFA a cada rato?"
    a: "Little Hotelier lo pide de nuevo cada 30 días, cuando cambias de navegador o de dispositivo y antes de acciones sensibles. La forma más rápida es una passkey (Mi cuenta, Passkeys, Crear passkey) o aprobar con la app móvil de Little Hotelier, que muestra un número que debe coincidir en vez de un código."
  - q: "¿Cómo evito que se cierre la sesión de Little Hotelier por inactividad?"
    a: "En los artículos del centro de ayuda que revisamos no hay ningún ajuste para eso. El userscript gratuito Actualización Automática por Inactividad recarga la página tras 10 minutos sin actividad, para que vuelvas a una pantalla actualizada y no a una caducada."
  - q: "¿Puedo ver los precios de las habitaciones en el calendario de Little Hotelier?"
    a: "No de forma nativa: el calendario muestra reservas y los precios están en la cuadrícula de inventario. El userscript gratuito Mostrar Precios los lee de la página de inventario y los muestra bajo cada tipo de habitación en el calendario."
  - q: "¿Tiene Little Hotelier atajos de teclado?"
    a: "No encontramos atajos de teclado en los centros de ayuda de Little Hotelier (octubre de 2026). Los botones de flecha del calendario avanzan 1, 7 o 14 días, y View today vuelve a hoy. En el panel de Hotelier Tools, Ctrl+K (Cmd+K en Mac) abre el buscador."
  - q: "¿Dónde está el manual de usuario de Little Hotelier?"
    a: "No hay un único manual. Little Hotelier mantiene dos centros de ayuda, uno para la versión clásica y otro para la plataforma nueva, además de Sim, un chatbot de IA que se abre desde el icono de chat una vez que has iniciado sesión."
---

Little Hotelier esconde a un clic o dos de distancia algunas de sus funciones más útiles: inicio de sesión con passkey, una tarifa mínima del alojamiento, enlaces del motor de reservas que abren una habitación concreta, un botón para forzar la actualización de canales que no se actualizan y un registro de quién cambió qué. Aquí tienes 20 trucos: 14 integrados en Little Hotelier (cada uno con un enlace al artículo de ayuda oficial), 4 scripts gratuitos del navegador para lo que no hace y 2 para quien use el panel de Hotelier Tools.

::callout{type="info" title="¿Versión clásica o plataforma?"}
Las cuentas creadas desde mayo de 2025 (o actualizadas) usan la **plataforma** nueva de Little Hotelier; las cuentas más antiguas usan la versión **clásica**, que tiene [su propio centro de ayuda](https://helpcentre.littlehotelier.com/en/). Los nombres de los menús son distintos, así que cada truco indica la ruta de la versión que describe el artículo de ayuda.
::

## Trucos de calendario y recepción

### 1. Lee el calendario de un vistazo

Elige una vista de **14 o 28 días** en el desplegable. En la vista de 14 días, `<`, `<<` y `<<<` avanzan 1, 7 y 14 días; **View today** vuelve a hoy. Los colores indican el estado: naranja confirmada, verde con check-in, gris con check-out, azul sin asignar, rojo cierre de habitación. Un **triángulo rojo** en la esquina significa que aún queda dinero por cobrar ([guía del calendario](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Usa la fila Unallocated para encajar una reserva más

Cuando un tipo de habitación parece lleno pero las noches no cuadran, pasa una reserva a **Unallocated** (sin asignar), reorganiza las demás y vuelve a arrastrarla a una habitación. Las reservas sin asignar siguen contando contra la disponibilidad, así que dejarla ahí no vuelve a poner la habitación a la venta ([guía clásica](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Imprime el formulario de registro como hoja de check-in

Haz clic en la lupa de una reserva y luego en **Print → Registration form**. Little Hotelier sugiere usarlo como formulario de check-in ya preparado.

### 4. Dale a limpieza su propio informe

Abre **Reservations → Housekeeping**. Marca cada habitación como **Cleaned** (limpia), **Uncleaned** (sin limpiar) o **Skip cleaning** (omitir limpieza), añade notas de habitación, cambia entre **Today**, **Tomorrow** o fechas elegidas y pulsa **Print report**. Dale al personal de limpieza su propio usuario con acceso a Front desk para que lo vea en directo. No está en la app móvil ([guía de limpieza](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. Averigua de dónde viene una reserva por su referencia

Las letras con las que empieza la referencia de la reserva indican el origen: **LH** tu recepción o tu motor de reservas, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([guía de reservas](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Viene bien cuando filtras una exportación en Excel.

## Tarifas, restricciones y canales

### 6. Pon una tarifa mínima para que nada se venda demasiado barato

Una tarifa mínima del alojamiento impide que cualquier tarifa de habitación, o cualquier descuento gestionado en Little Hotelier, baje de ese importe. En la plataforma: **Setup → Property settings → General information**, el lápiz junto a **Inventory** y luego **Minimum rate** ([guía](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). En la clásica: **Channel Manager**, haz clic en el nombre de tu alojamiento y luego **Property settings → General** ([guía](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). Las promociones que crees directamente en Booking.com u otros canales aún pueden bajar más.

### 7. Rescata las noches huecas que dejan las estancias mínimas

Una estancia mínima de tres noches deja huecos de dos noches que nadie puede reservar. La solución de Little Hotelier: un segundo plan de tarifas, derivado del estándar a un precio algo mayor (su ejemplo es +5 %), con una estancia mínima más corta, asignado a tus canales ([guía de noches huecas](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Para saber qué hacen CTA, CTD y stop sell, mira [CTA, CTD, estancia mínima y stop sell explicados](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Envía un «flush» cuando un canal no se actualiza

En la versión clásica, **Setup → Property & Room Settings → Rooms & Rates**, selecciona el tipo de habitación o la tarifa y pulsa **Flush** abajo. Vuelve a enviar precios, restricciones y disponibilidad a todos los canales. Espera cinco minutos tras un cambio pequeño antes de hacer el flush y corrige antes los errores de asignación ([guía del flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Averigua quién cambió una tarifa o una asignación de canal

Abre una tarifa de habitación o un canal y elige **Audit**. La auditoría de ciclo de vida muestra cuándo cambió un ajuste y el email del usuario que lo cambió. No registra precios, valores de restricciones ni cambios en reservas ([guía de auditoría](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Si hay un stop sell misterioso, mira primero el **Release period** de la tarifa; si está vacío, lo cerró una regla de yield ([guía](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Motor de reservas y Booking.com

### 10. Enlaza directamente a una habitación, una tarifa o un código promocional

Añade un parámetro a la dirección de tu motor de reservas:

- `?room_type=ID` abre un tipo de habitación (el ID está en la URL del tipo de habitación en la configuración de Direct Booking)
- `?promocode=CODE` aplica un código promocional
- `?ratePlanId=ID` muestra un plan de tarifas (Little Hotelier explica cómo encontrar el ID con las herramientas de desarrollador del navegador)

La dirección empieza por `direct-book.com/properties/` en Europa, África, Oriente Medio y América, o por `book-directonline.com/properties/` en Asia-Pacífico ([enlaces de habitación y promoción](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [enlaces de plan de tarifas](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Informa de una tarjeta no válida o un no-show de Booking.com sin entrar en la extranet

Abre la reserva de Booking.com en el channel manager y ve a la pestaña **Manage Reservation**. Desde ahí puedes informar de que la tarjeta no es válida, pedir a Booking.com que cancele por tarjeta no válida, o marcar un no-show y elegir si renuncias a la tarifa ([guía](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Los plazos están en [tarjeta no válida o no-show en Booking.com: qué hacer](/blog/booking-com-invalid-card-no-show).

### 12. Asegúrate de que los huéspedes de Booking.com reciben tus correos

Booking.com bloquea correos de sistemas que no conoce. Si envías confirmaciones o solicitudes de pago desde Little Hotelier, permite `@app.littlehotelier.com` y `@guestjoy.com` (y los enlaces `siteminder.com` y `guestjoy.com`) en la extranet, en **Property → Messaging preferences → Security settings** ([pasos](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Acceso, soporte y exportaciones

### 13. Entra con una passkey en vez de con códigos

La MFA es obligatoria, y Little Hotelier la pide de nuevo cada 30 días o en un navegador nuevo. Dos formas de hacerlo sin dolor ([guía de MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)):

- **Aprueba con la app de Little Hotelier.** Tocas el número que coincide y confirmas con tu cara o tu huella. No se admiten códigos por SMS ni por email.
- **Usa una passkey.** Icono de perfil → **My account** → **Passkeys** → **Create passkey**, y luego entra con **Continue with a passkey**. Funciona en navegadores web (Chrome y Edge 109+, Safari 16+), no en la app móvil, y necesita tener antes la MFA configurada ([guía de passkeys](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Cada persona debería tener su propio usuario: los códigos MFA pertenecen a una persona y a un dispositivo.

### 14. Pregunta a Sim antes de buscar, y exporta antes del día 180

Una vez que has iniciado sesión, abre el icono de chat de abajo a la derecha y elige **Ask a question**. Sim, el chatbot de IA de Little Hotelier, responde desde el centro de ayuda las 24 horas en ocho idiomas y puede pasarte con una persona. Haz una pregunta concreta cada vez, con el nombre del canal y el error exacto ([consejos](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

Y un hábito que merece la pena crear: exporta tus reservas cada mes. Los datos de los huéspedes se enmascaran 180 días después del check-out, y las exportaciones nunca incluyen teléfonos. Paso a paso: [exportar reservas a Excel o Google Sheets](/blog/export-little-hotelier-reservations-excel).

## Retoques gratuitos con userscripts

Estos [userscripts](/tools/ui) gratuitos se ejecutan en tu navegador con la extensión Tampermonkey y solo cambian lo que ves. Son gratis para siempre. La [guía de instalación](/tools/ui/instructions) lleva unos cinco minutos por script.

### 15. Ve tus precios en el calendario

[Mostrar Precios](/tools/ui/prices-display) lee tus tarifas de la página de inventario y las muestra bajo cada tipo de habitación en el calendario, para que puedas dar un precio por teléfono sin cambiar de pantalla.

::screenshot{src="/images/scripts/prices-display/to.png" alt="Calendario de Little Hotelier en español con vista de 7 días, reservas en verde, naranja y gris, y el precio por noche de cada tipo de habitación en cifras grandes bajo sus habitaciones" caption="Con Mostrar Precios, la tarifa por noche de cada tipo de habitación queda justo bajo sus habitaciones."}
::

### 16. Deja de volver a una página caducada

Si dejas Little Hotelier abierto en recepción y vuelves y te encuentras errores, [Actualización Automática por Inactividad](/tools/ui/auto-refresh-inactivity) recarga la página tras 10 minutos sin clics, desplazamiento ni movimiento del ratón. Nunca recarga mientras trabajas.

### 17. Ve la comisión de Booking.com dentro de la reserva

[Mostrar Comisiones de Booking.com](/tools/ui/show-booking-commissions) añade a cada reserva de Booking.com un desglose estimado de la comisión y tu neto aproximado. Cómo funciona la comisión real está en [cuánta comisión cobra Booking.com](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumen de una reserva de Little Hotelier en español con líneas adicionales para el cargo por transferencia, la comisión de Booking.com, el total de comisiones con IVA y el neto aproximado" caption="Una estimación de lo que se queda Booking.com y de lo que te queda a ti, dentro de la reserva."}
::

### 18. Que quepa más en la pantalla (y en una tablet)

- [UI Compacta del Calendario](/tools/ui/compact-calendar-ui) pone las cabeceras de fecha en una fila y reduce los nombres de los tipos de habitación.
- [Tabla de Reservas a Todo Ancho](/tools/ui/full-width-reservation-table) ensancha la lista de reservas para que no tengas que desplazarte hacia los lados.
- [Mejorar Estilo para Pantallas Táctiles](/tools/ui/improve-style-touch-screens) agranda los botones y muestra siempre el botón de quitar habitación, que si no solo aparece al pasar el ratón.

Todos los scripts, con imágenes del antes y el después, están en la [página de extensiones del navegador](/chrome-extensions) y en [extensiones de Chrome gratuitas para Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Dos trucos si usas el panel de Hotelier Tools

Hotelier Tools es un panel independiente que funciona junto a Little Hotelier, con el propio acceso de tu alojamiento a Little Hotelier. No está afiliado ni respaldado por SiteMinder ni por Little Hotelier, y es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

### 19. Pulsa Ctrl+K para encontrar lo que sea

**Ctrl+K** (**Cmd+K** en Mac) busca páginas, entradas de la lista de espera, tareas programadas y conversaciones. Ignora los acentos y entiende palabras en inglés y en español para lo mismo: «lista de espera» encuentra la Availability Queue.

::screenshot{src="/images/blog/demo/es/global-search-waitlist.webp" alt="Buscador global abierto con Ctrl+K sobre el panel de Hotelier Tools, con la consulta lista de espera y páginas coincidentes como Formulario público de lista de espera, Lista de espera, Historial, Lista de no volver a alojar y Facturas programadas, cada una con su sección" caption="Escribe una palabra y salta directo a la página que necesitas." path="/"}
::

### 20. Deja que una revisión nocturna encuentre los documentos que faltan antes de que lleguen los huéspedes

Las **comprobaciones automáticas** leen las próximas reservas y marcan lo que de otro modo descubrirías en recepción: sin habitación asignada, documento de identidad o dirección que faltan, un saldo pendiente o un huésped de tu lista de «no volver a alojar». Los problemas aparecen en una sola página de incidencias, y cada ejecución envía un correo de informe. Mira [la lista de comprobaciones diarias de recepción](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Resumen

- **Los que más tiempo ahorran:** passkeys, el informe de limpieza y los enlaces directos del motor de reservas.
- **Los que más dinero ahorran:** una tarifa mínima del alojamiento y un plan de tarifas para noches huecas.
- **Cuando los canales se portan mal:** flush, y después el registro de auditoría y el release period.
- **Para lo que Little Hotelier no hace:** userscripts gratuitos para ver precios en el calendario y las comisiones de Booking.com, e [integraciones](/blog/little-hotelier-integrations) para el resto.
