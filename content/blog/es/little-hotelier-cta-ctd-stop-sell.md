---
title: "¿Qué significan CTA, CTD, estancia mínima y stop sell en Little Hotelier?"
seoTitle: "CTA, CTD, estancia mínima y stop sell en Little Hotelier"
description: "CTA impide check-ins, CTD impide check-outs, la estancia mínima fija las noches mínimas y stop sell cierra la venta. Qué es cada uno y cómo ponerlos."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [little hotelier cta ctd, que es cta en hoteles, cerrado a la llegada hotel, que es stop sell hotel, siteminder stop sell, estancia minima hotel]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/es/price-recommendations.webp
coverAlt: "Recomendaciones de precios en Hotelier Tools para la habitación Doble Estándar, del 3 al 16 de octubre de 2026: precio actual y recomendado por noche, una columna CTA/CTD con interruptores A y D, la estancia mínima, una columna Canal y el botón Aplicar en Little Hotelier"
faq:
  - q: "¿Qué diferencia hay entre cerrado a la llegada y stop sell?"
    a: "Cerrado a la llegada (CTA) solo impide nuevos check-ins ese día: un huésped que llega el día anterior puede seguir alojado esa noche. Stop sell cierra la tarifa a la venta ese día, así que ninguna reserva nueva puede incluir esa noche."
  - q: "¿Stop sell es lo mismo que poner la disponibilidad a 0?"
    a: "Para el huésped el resultado se ve igual: la noche no se puede reservar. Para ti es distinto. Un stop sell mantiene tu número de habitaciones, así que reabrir es un solo interruptor. Un cierre de habitación en Little Hotelier reduce la disponibilidad que se envía a los canales y no aplica un stop sell."
  - q: "¿Cuándo debería un hotel pequeño usar cerrado a la llegada?"
    a: "Úsalo para proteger estancias más largas: el sábado de un fin de semana con mucha demanda, para que los huéspedes tengan que llegar el viernes, o en noches de eventos en las que prefieres vender estancias completas. Revísalo según se acerca la fecha y quítalo si la noche sigue vacía."
  - q: "¿Por qué mi restricción no aparece en Booking.com o Airbnb?"
    a: "No todas las tarifas de canal aceptan todas las restricciones. En la cuadrícula de inventario de Little Hotelier, un guion en la celda de un canal significa que ese canal no admite esa actualización, y las actualizaciones más allá de la ventana máxima de reserva de un canal no se sincronizan. Mira la configuración de la tarifa del canal en Channel Manager para ver qué tipos de actualización admite."
  - q: "¿Hotelier Tools cambia las restricciones por su cuenta?"
    a: "No. Las políticas de restricciones se proponen noche a noche en la página de Recomendaciones y no se escribe nada hasta que las aplicas. El piloto automático solo escribe estancias mínimas si lo permites por separado, y nunca toca el stop sell de los canales. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo."
---

En Little Hotelier, **CTA** (*closed to arrival*, cerrado a la llegada) significa que los huéspedes no pueden hacer el check-in ese día, y **CTD** (*closed to departure*, cerrado a la salida) que no pueden hacer el check-out ese día. La **estancia mínima** es el número mínimo de noches que se puede reservar una habitación. Un **stop sell** cierra una tarifa a la venta en una fecha mientras tus habitaciones siguen en el inventario. Todo se configura por tarifa de habitación en **Front Desk > Inventory**, fecha a fecha o con **Bulk Update**.

| Término | Qué significa | Uso típico |
|---|---|---|
| **CTA** (cerrado a la llegada) | «Los huéspedes no pueden hacer el check-in este día.» Los que llegaron antes pueden seguir alojados. | Obligar a llegar el viernes en un fin de semana con mucha demanda. |
| **CTD** (cerrado a la salida) | «Los huéspedes no pueden hacer el check-out este día.» Pueden alojarse esa noche, pero no irse ese día. | Mantener unido un fin de semana. |
| **Estancia mínima** (min LOS) | «Noches mínimas o máximas por las que debe reservarse una habitación» (Min/Max Stay). | Dos noches en fines de semana de eventos. |
| **Estancia máxima** | La reserva más larga que se acepta. | Poco habitual en hoteles pequeños. |
| **Stop sell** | La tarifa queda cerrada a la venta ese día, en todos los canales o solo en algunos. Se llama **Close Channels** en Front Desk y **Stop Sell** en Channel Manager. | Cerrar una fecha rápido: obras, un bloqueo del propietario, un canal que quieres pausar. |

Las definiciones entre comillas vienen del centro de ayuda de Little Hotelier: [gestionar tarifas, disponibilidad y restricciones en la cuadrícula de inventario](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (actualizado en agosto de 2026).

## CTA o CTD: ¿cuál es la diferencia?

Las dos restricciones afectan al **día de llegada o de salida**, no a las noches intermedias.

Piensa en un fin de semana de festival: las noches del viernes y del sábado tienen mucha demanda y el domingo está tranquilo.

- **CTA el sábado**: nadie puede hacer el check-in el sábado. Un huésped que solo quiere la noche del sábado no puede reservarla, pero uno que llega el viernes para dos noches sí. Vendes el fin de semana entero en vez de un sábado suelto que deja el viernes vacío.
- **CTD el sábado**: nadie puede hacer el check-out el sábado. Un huésped que llega el viernes tiene que quedarse al menos hasta el domingo.

Ninguna de las dos restricciones afecta a los huéspedes que ya tienen reserva. Solo filtran qué reservas nuevas se aceptan. En Little Hotelier, CTA y CTD se aplican a todos tus canales, incluido tu propio motor de reservas ([vídeo guía de CTA y CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Estancia mínima: ¿a la llegada o «through»?

Una estancia mínima (min LOS, *minimum length of stay*) fija el menor número de noches que puede tener una reserva. Los canales la aplican de dos maneras:

- **A la llegada** (*on arrival*): se comprueba con la fecha de llegada. Un mínimo de 2 el viernes significa que quien llega el viernes debe reservar al menos 2 noches; quien llega el sábado aún puede reservar una noche.
- **«Through»** (en todas las noches de la estancia): se comprueba con cada noche de la estancia. Un mínimo de 2 el sábado significa que cualquier reserva que incluya la noche del sábado debe ser de al menos 2 noches, empiece cuando empiece.

La cuadrícula de Little Hotelier solo tiene **Min Stay** y **Max Stay**. Cómo los interpreta un canal es un ajuste del canal. Little Hotelier envía la estancia mínima y máxima a Booking.com como «through» por defecto ([conectar con Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Si tu cuenta de Booking.com usa «Estancia mínima desde la llegada», pon **Use Length of Stay on Arrival** en **Yes** en **My Apps > Channel Manager > Channels > Booking.com > Configure** ([errores de asignación de canales](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Si una estancia mínima es mayor que la máxima, la tarifa se desactiva automáticamente.

## ¿Qué es un stop sell y en qué se diferencia?

Un stop sell cierra una tarifa a la venta en una fecha y deja intacto tu número de habitaciones. Little Hotelier se apoya en el channel manager de SiteMinder, y una noche puede tener una tarifa perfectamente válida y no venderse en ningún sitio porque está en stop sell.

Little Hotelier ofrece dos formas de hacerlo, y solo puedes usar una a la vez:

- **Close Channels** en **Front Desk > Inventory** deja de vender «en todos los canales conectados (incluido tu motor de reservas)» para las tarifas de habitación y las fechas seleccionadas.
- **Stop Sell** en **Channel Manager** cierra canales concretos. Ve a **My Apps > Channel Manager > Inventory**, pulsa el botón azul **Channels** junto a la tarifa, busca la tarifa del canal y elige **Stop Sell**. Para un rango de fechas, usa **Bulk Update** y pon **Stop Sell** en **On** ([stop sell para canales concretos](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Los stop sell de Channel Manager no funcionan mientras **Close Channels** esté marcado en Front Desk para las mismas fechas.

| | Stop sell | Cierre de habitación (menos disponibilidad) | CTA |
|---|---|---|---|
| Reservas nuevas que incluyen esa noche | Bloqueadas | Bloqueadas cuando la disponibilidad llega a 0 | Permitidas si llegan antes |
| Tu número de habitaciones | Sin cambios | Se reduce para ese tipo de habitación | Sin cambios |
| Sirve para | Cerrar rápido, por canal | Habitaciones realmente fuera de servicio | Dar forma a las estancias |

Un cierre de habitación (**Room Closure**, en **Front Desk > Calendar**) «reduce la disponibilidad enviada a los canales para el tipo de habitación cerrado. No aplica un stop sell» ([cierres de habitación](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## Cómo poner CTA, CTD y estancia mínima en Little Hotelier

### Una fecha cada vez

1. Ve a **Front Desk > Inventory**.
2. Elige una vista que muestre los campos que necesitas.
3. Desplázate a las fechas y edita las celdas de la tarifa de habitación: Min Stay, Max Stay, CTA, CTD.
4. Pulsa **Save**.

### Un rango de fechas con Bulk Update

1. En **Front Desk > Inventory**, pulsa **Bulk Update**.
2. **When?**: elige el rango de fechas.
3. **Which days?**: elige los días de la semana, por ejemplo solo los sábados.
4. **Which room rates?**: elige las tarifas.
5. **What changes?**: define la restricción, por ejemplo una estancia mínima de 2 o CTA activado.
6. Pulsa **Update**.

Conviene saber:

- Las restricciones se definen **por tarifa de habitación**, no por tipo de habitación.
- Las tarifas derivadas aparecen en gris en la cuadrícula. Cambia la tarifa de la que derivan.
- Front Desk acepta por defecto actualizaciones hasta unos 716 días vista.

## Cómo llegan las restricciones a Booking.com, Expedia y Airbnb

Little Hotelier envía tus restricciones a cada canal conectado a través del channel manager, con algunos límites ([cuadrícula de inventario](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [periodo de actualización de canales](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **No todas las tarifas de canal admiten todas las restricciones.** Un guion (-) en la celda de un canal significa que ese canal no admite ese tipo de actualización. En Channel Manager, la pantalla **Configure** de una tarifa de canal muestra qué tipos de actualización acepta.
- **Las ventanas de reserva son distintas.** Channel Manager envía actualizaciones con 400 días de antelación por defecto (hasta 750). Las actualizaciones más allá del máximo de un canal no se sincronizan; en Booking.com ese máximo es de 545 días.
- **Expedia** recibe los stop sell de Little Hotelier solo a nivel de tarifa. Los stop sell a nivel de habitación se gestionan en Expedia Partner Central ([problemas de stop sell en Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** con Enhanced Sync recibe tarifas, disponibilidad y restricciones, pero un campo que cambies en la extranet de Airbnb queda en gris en Channel Manager ([asignar a Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Después de poner una restricción importante, abre la extranet del canal y comprueba una fecha.

## ¿Cuándo debería usarlas un hotel pequeño?

- **Fines de semana y eventos con mucha demanda.** Una estancia mínima de dos noches en las noches del evento, o CTA en la noche más demandada, vende estancias completas en vez de noches sueltas que dejan huecos.
- **Noches libres sueltas.** Una noche libre entre dos ocupadas solo se puede vender como estancia de una noche. Si una estancia mínima la bloquea, quítala en esa noche según se acerque la fecha.
- **Cerca de la fecha.** Las restricciones que tenían sentido un mes antes pueden bloquear reservas fáciles a pocos días. Revísalas cada semana.
- **Días en que nadie puede atender check-ins.** CTA esos días, si las normas de tu alojamiento lo permiten.
- **Cerrar rápido.** Usa stop sell en lugar de un precio de 999 cuando necesites retirar una fecha de la venta.

## La forma más rápida: políticas de restricciones y stop sell en Hotelier Tools

Hotelier Tools funciona encima de Little Hotelier con tu propio acceso. En vez de poner restricciones fecha a fecha, escribes la política una vez y se propone noche a noche, junto al precio. Las funciones de precios están en **alfa**.

### 1. Escribe la política una vez

Abre **Ajustes de precios → Llegadas, salidas y estancias** (`/pricing/settings/restrictions`). Puedes cerrar llegadas o salidas:

- en días de la semana fijos o fechas concretas
- según la ocupación o las habitaciones libres
- solo cuando las noches de antes y de después siguen abiertas

Hotelier Tools detecta el patrón de días de la semana que ya usas en Little Hotelier y te ofrece adoptarlo. Los **paquetes de fin de semana** opcionales fijan una estancia mínima; están desactivados por defecto y, al activarlos, lo predeterminado es viernes y sábado, 2 noches. Un paquete nunca rebaja una estancia mínima más larga que alguien haya puesto a mano. Nada de esta página escribe en Little Hotelier.

::screenshot{src="/images/blog/demo/es/pricing-settings-arrivals-departures-stays.webp" alt="Página Llegadas, salidas y estancias de Hotelier Tools: la regla Sin llegadas con botones de días de la semana de lun a dom, En estas fechas, las condiciones Un evento llena la ciudad y Las noches de antes y después siguen abiertas, Ocupación por encima de y Habitaciones libres como mucho, y el comienzo de Sin salidas" caption="Indica una vez qué noches rechazan un check-in o un check-out. Nada de esta página escribe en Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Revisa y aplica noche a noche

En **Recomendaciones** (`/price-recommendations`), cada noche muestra su estado de llegada (A) y de salida (D) junto al precio. Cambia los interruptores donde no estés de acuerdo, marca las noches y pulsa **Aplicar en Little Hotelier…**. Nada cambia hasta que confirmes.

Para fechas puntuales, **Reglas por fecha** (`/pricing/settings/dates`) tiene una regla de «estancia» que fija solo una estancia mínima o una regla de llegada en esas noches.

### 3. Comprueba y define el stop sell de los canales

Pulsa **Comprobar channel manager** en la página de Recomendaciones. Hotelier Tools lee el estado de stop sell de SiteMinder con la misma sesión de Little Hotelier, solo cuando lo pulsas, y una columna de canal muestra abierto, cerrado o mixto en cada noche. Elige un objetivo (abrir todo, cerrar todo, mantener). Se envía **después** del cambio de precio en Little Hotelier, y solo para las noches en que ese cambio se hizo bien.

::screenshot{src="/images/blog/demo/es/price-recommendations-apply-dialog.webp" alt="Diálogo Aplicar en Little Hotelier para tres noches de Doble Estándar (sáb 3, dom 4 y lun 5 de octubre) con las tarifas actual y nueva, un aviso de que las tarifas y las restricciones cambian al momento sin deshacer automático, la opción Enviarme un email con estos cambios, la opción Actualizar también la venta en el Channel Manager (SiteMinder) y Aplicar 3 cambio(s)" caption="Precios, cambios de llegada y salida y el stop sell de SiteMinder se confirman en un solo diálogo. Nada cambia hasta que aplicas." path="/price-recommendations"}
::

El piloto automático nunca cambia el stop sell, y solo escribe estancias mínimas si lo permites por separado.

::demo-cta{path="/pricing/settings/restrictions"}
::

Guías relacionadas: [la comisión de Booking.com](/blog/booking-com-commission), [una lista de espera para fechas agotadas](/blog/hotel-waitlist-sold-out-dates).

## Resumen

- **CTA** impide los check-ins de un día, **CTD** impide los check-outs, la **estancia mínima** fija la reserva más corta y **stop sell** cierra la tarifa a la venta manteniendo tu número de habitaciones.
- En Little Hotelier se definen por tarifa de habitación en **Front Desk > Inventory**, o con **Bulk Update** para un rango de fechas. El stop sell por canal está en Channel Manager.
- Comprueba qué restricciones acepta cada canal y revísalas cada semana según se acercan las fechas.
- Con los [precios dinámicos de Hotelier Tools](/tools/bot/dynamic-pricing) escribes la política una vez, la ves junto al precio y defines el stop sell de SiteMinder desde la misma página. Es gratis para todos los hoteles hasta el 10 de enero de 2027.
- A continuación: [precios dinámicos para hoteles pequeños con Little Hotelier](/blog/dynamic-pricing-little-hotelier) y [trucos y funciones ocultas de Little Hotelier](/blog/little-hotelier-tips).
