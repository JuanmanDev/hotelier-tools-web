---
title: "Cuánto cobra Booking.com de comisión (y cómo ver tu neto real en Little Hotelier)"
seoTitle: "Cuánto cobra Booking de comisión a los hoteles (2026)"
description: "Cuánto cobra Booking de comisión: el % de tu contrato, más programas y cargo por pago. Sobre qué se cobra, el IVA y tu neto real por reserva."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [cuánto cobra booking de comisión, comisión booking españa, cuánto cobra booking a los propietarios, comisión booking iva, comisión genius booking, calculadora comisión booking]
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Resumen de una reserva de Little Hotelier (interfaz en español) con la comisión de Booking.com, el cargo por pago y el neto aproximado añadidos por un script gratuito"
faq:
  - q: "¿Qué porcentaje cobra Booking.com a los hoteles?"
    a: "Booking.com no publica un porcentaje único. Pagas el porcentaje de tu contrato de alojamiento, que depende de tu país, del tipo de establecimiento y de lo que firmaste. La comisión de cada reserva la ves en la extranet, en Finance > Reservation statements."
  - q: "¿Cobra Booking.com comisión sobre la tasa turística?"
    a: "No. Booking.com no cobra comisión sobre impuestos locales como la tasa turística. En la mayoría de los países sí la cobra sobre el IVA (VAT o GST), según la ley local y tus condiciones generales de contratación."
  - q: "¿Pago comisión por un no-show?"
    a: "Solo si cobras al huésped una penalización por no presentarse, y entonces sobre ese importe. Si marcas el no-show en la extranet en las 48 horas siguientes a la fecha de salida prevista y renuncias a la penalización, no hay comisión."
  - q: "¿Sube mi comisión el programa Genius?"
    a: "Genius no añade un porcentaje de comisión, pero el descuento lo financias tú (un 10 % por defecto, y hasta un 15 % o un 20 % en los niveles superiores si los activas). Los que suben tu comisión son Preferred Partner, Preferred Plus y Visibility Booster."
  - q: "¿Cuándo factura Booking.com la comisión?"
    a: "Una vez al mes, por todas las reservas cuyo huésped hizo el check-out el mes anterior. Las facturas deben pagarse en 14 días. Con Payments by Booking.com, en cambio, la comisión puede descontarse de tus pagos."
  - q: "¿Es gratis el script de comisiones para Little Hotelier?"
    a: "Sí. El userscript Mostrar Comisiones de Booking.com es gratis para siempre. Funciona en tu propio navegador con la extensión gratuita Tampermonkey y solo lee la página de reserva que tienes abierta."
---

No existe una única comisión de Booking.com. Pagas el porcentaje de tu propio contrato, que depende de tu país, del tipo de alojamiento y de lo que firmaste, y programas como Preferred Partner o Visibility Booster se suman a él. Se cobra sobre el importe total de la reserva (en la mayoría de los países, con el IVA incluido, y nunca sobre la tasa turística), y Payments by Booking.com puede añadir un cargo por pago, de modo que tu neto real es el total de la reserva menos todo eso.

Las reglas de abajo se han contrastado con la ayuda para partners de Booking.com (Partner Help) a fecha de octubre de 2026. Booking.com actualiza estas páginas a menudo, por eso los enlaces llevan a la fuente.

## ¿Cuánto cobra Booking.com de comisión a los hoteles?

Booking.com define la comisión como «un porcentaje fijo del importe total de la reserva» en cada reserva ([Partner Help: Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission), en inglés). No publica un porcentaje para todos: «el porcentaje exacto depende de tu país, del tipo de alojamiento y del contrato de alojamiento que firmaste». Los partners nuevos lo ven en el paso **Agreement** del registro ([FAQ de Booking.com](https://join.booking.com/faq.html?lang=en)).

El porcentaje queda fijado en el momento en que el huésped reserva. Si tu comisión cambió hace poco, las reservas anteriores conservan la antigua.

Para saber qué porcentaje pagas de verdad:

1. Entra en la extranet y abre **Finance > Reservation statements**. Cada reserva muestra su comisión.
2. Compárala con tu contrato de alojamiento. Para obtener una copia de tus condiciones generales (General Delivery Terms), ve a **Contracts**, bajo el icono de usuario.
3. Si el extracto muestra un porcentaje mayor, abre **Boost performance**: Preferred Partner o Visibility Booster añaden un porcentaje sobre tu comisión base.
4. Con Payments by Booking.com, **Finance help** también muestra tu porcentaje de comisión y tu cargo por pago.

## ¿Sobre qué se cobra la comisión de Booking.com?

La comisión cubre «la tarifa de la habitación y cualquier cargo adicional que cobres, como gastos de limpieza, gastos de servicio y costes por no-shows o cancelaciones», y se aplica cuando el huésped hace el check-out ([fuente](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Pagas comisión por:**

- las estancias completadas
- las reservas no reembolsables y parcialmente reembolsables, venga o no el huésped
- las penalizaciones por cancelación y por no-show que cobres
- el overbooking (no se cobra si llevas menos de 30 días activo o has tenido menos de cinco overbookings en los últimos 12 meses)

**No pagas comisión por:**

- las penalizaciones por cancelación a las que decides renunciar
- los no-shows que marcas en la extranet en las 48 horas siguientes a la salida, cuando renuncias a la penalización
- las reservas en las que marcaste la tarjeta del huésped como no válida

**Impuestos.** Booking.com no cobra comisión sobre impuestos locales como la tasa turística. «Sin embargo, en la mayoría de los países se cobra comisión sobre el IVA (VAT o GST)», según la ley local. Tus condiciones generales dicen qué se aplica en tu caso.

::callout{type="warning" title="La regla de las 48 horas"}
Marca los no-shows, las cancelaciones y otros cambios en la extranet dentro de las 48 horas siguientes a la salida. Pasado ese plazo, Booking.com cobra la comisión completa sobre la reserva original. El paso a paso está en [tarjeta no válida o no-show en Booking.com: qué hacer](/blog/booking-com-invalid-card-no-show).
::

## Cómo cambian lo que pagas Genius, Preferred y Visibility Booster

- **Genius** no añade ningún porcentaje de comisión, pero pagas el descuento. Al unirte se aplica un 10 % a tu tipo de habitación más barato y más popular, y puedes activar un 15 % o un 20 % para niveles Genius superiores. Booking.com dice que el descuento estándar «lo financias tú, el partner de alojamiento» ([programa Genius](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- El **Preferred Partner Program** da más visibilidad y una insignia «a cambio de un pequeño aumento de la comisión». Necesitas una puntuación de rendimiento de al menos el 70 %, que se comprueba cada 90 días ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). **Preferred Plus** exige un 80 % y una inversión de comisión mayor ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). Booking.com no publica el porcentaje extra; consúltalo en **Boost performance** en la extranet.
- **Visibility Booster** te deja elegir una comisión más alta con un deslizador, solo para las fechas de llegada y los países de origen de los huéspedes que escojas ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## ¿Qué añade Payments by Booking.com?

No hay cuota de alta ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). Lo que pagas depende de cómo te abonen:

| Forma de cobro | Coste extra |
|---|---|
| Transferencia bancaria | Un cargo por servicio de pago, como porcentaje de cada reserva completada. Depende de la ubicación de tu alojamiento. |
| Tarjeta virtual (VCC) | La comisión de tu propio banco o proveedor de pagos por cobrar la tarjeta. No la fija Booking.com. |

Si renuncias a la penalización por cancelación de un huésped, tampoco hay cargo por pago. Cuando Booking.com gestiona todos los pagos de tus huéspedes, descuenta la comisión y el cargo por pago de cada abono. Si no, recibes una sola factura a final de mes.

Para ver ambos en una reserva, abre la pestaña **Reservations** de la extranet y mira la columna **Commission and charges**. **Reservation details** tiene el desglose.

## ¿Lleva IVA la comisión de Booking.com?

En la UE depende de tu número de IVA ([IVA en la UE y facturas de comisión](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)):

- **Con un número de IVA válido para operaciones intracomunitarias** (Booking.com lo comprueba en la base de datos VIES de la UE), la factura de comisión llega sin IVA. Sigues «siendo responsable de declarar el IVA que puedas deber» ante Hacienda. Los asesores lo llaman inversión del sujeto pasivo.
- **Sin él**, Booking.com añade IVA a tu factura de comisión. En los abonos netos por transferencia, descuenta la comisión, el cargo por pago y el IVA de ambos.

Para añadir tu número: **Finance > Finance settings > VAT details > Edit details**, confirma que es válido para operaciones en la UE, introdúcelo y guarda. Fuera de la UE las reglas cambian según el país, así que consúltalo con tu asesor.

Las facturas de comisión llegan una vez al mes, por cada huésped que hizo el check-out el mes anterior, y deben pagarse en 14 días. Las facturas impagadas pueden cerrar temporalmente tu alojamiento.

## Cómo ver el neto de cada reserva de Booking.com en Little Hotelier

El resumen de reserva de Little Hotelier muestra el total de la habitación, los extras, los descuentos y los recargos por tarjeta. No muestra lo que se queda Booking.com. La comisión exacta y el cargo por pago de cada reserva están en la extranet (**Reservation statements**, o la columna **Commission and charges**). Lo que te queda es el total menos eso y menos el impuesto incluido en el precio.

### Un ejemplo: del precio de la reserva a tu neto

Son las cifras de las capturas de abajo: una reserva de Booking.com de 125,18 €, con una comisión del 17 % y un cargo por pago del 1,3 %. Tus porcentajes pueden ser distintos.

| Línea | Importe |
|---|---|
| Total de la reserva (impuestos incluidos) | 125,18 € |
| Comisión, 17 % del total | −21,28 € |
| Cargo por pago, 1,3 % del total | −1,63 € |
| Impuesto incluido en el precio | −11,38 € |
| **Neto aproximado** | **90,89 €** |

Aproximadamente una cuarta parte de lo que pagó el huésped no te llega. Si Booking.com añade IVA a tu factura de comisión, réstalo también.

### Velo en cada reserva con un script gratuito

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Resumen de una reserva de Booking.com en Little Hotelier (interfaz en español), con el total de la habitación, los extras, el descuento y el total recibido, sin ninguna línea de comisión" caption="Antes: Little Hotelier muestra el total, no lo que se queda Booking.com." width="720" height="669"}
::

Para una estimación rápida dentro de Little Hotelier, usa el script gratuito **Mostrar Comisiones de Booking.com**:

1. Instala la extensión gratuita Tampermonkey en tu navegador. La [guía de instalación](/tools/ui/instructions) te lleva paso a paso.
2. Abre [Mostrar Comisiones de Booking.com](/tools/ui/show-booking-commissions) y haz clic en **Instalar en Tampermonkey**.
3. Abre en Little Hotelier cualquier reserva cuyo origen sea Booking.com. Tras un par de segundos aparecen cuatro líneas encima de los totales: el cargo por transferencia (1,3 %), la comisión de Booking.com (17 %), todo lo deducido y el neto aproximado.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Resumen de una reserva de Little Hotelier con cuatro líneas extra: cargo por transferencia 1,3 %, comisión de Booking.com 17 %, total de deducciones y neto aproximado de 90,89 euros" caption="Después: comisión, cargo por pago y neto aproximado en cada reserva de Booking.com." width="752" height="715"}
::

Lo que debes saber antes de usarlo:

- **Los porcentajes están fijos en el script**: 17 % de comisión y 1,3 % de cargo por pago. Si los tuyos son distintos, abre el script en el editor de Tampermonkey y cambia `0.17` y `0.013`.
- **Las etiquetas están en español** y los importes en euros.
- **Es una estimación.** No conoce Preferred, Visibility Booster ni el IVA que se añade a tu factura de comisión.
- **Se queda en tu navegador.** Lee la página que tienes abierta y no envía nada a ningún sitio.

Tienes más scripts gratuitos como este en [extensiones de Chrome gratuitas para Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Booking.com, a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Los scripts se ejecutan dentro de tu propia sesión de Little Hotelier, y el panel de Hotelier Tools se conecta con el acceso a Little Hotelier de tu propio alojamiento.
::

## Fija precios pensando en la comisión: Canales y descuentos

Genius y otros descuentos de canal cambian lo que paga el huésped y, por tanto, lo que te queda a ti. En el panel de Hotelier Tools (los precios dinámicos están en alfa), **Ajustes de precios > Canales y descuentos** (`/pricing/settings/channels`) reúne dos cifras:

1. **Descuento al aplicar precios.** Los precios que aplicas desde Recomendaciones se rellenan como «recomendado menos este %». Con un 5 %, una recomendación de 100,00 se aplica como 95,00. Deja 0 para aplicar las recomendaciones tal cual.
2. **Lo que paga el huésped en cada canal.** Haz clic en **Añadir un canal** e introduce el descuento que ese canal da a sus propios huéspedes, como Genius o los precios para miembros. La página de Recomendaciones muestra entonces lo que de verdad paga un huésped en cada canal.
3. Pulsa **Guardar cambios**.

::screenshot{src="/images/blog/demo/es/pricing-settings-channels-discounts.webp" alt="Página Canales y descuentos en los ajustes de precios de Hotelier Tools: Descuento al aplicar precios en 5 % (una recomendación de 100,00 se aplica como 95,00) y Lo que paga el huésped en cada canal con el botón Añadir un canal, sugerencias de Booking Genius 10 %, precio para miembros de Expedia 10 % y oferta Insider de Agoda 10 %, y ningún descuento de canal añadido todavía" caption="Cuéntale al motor de precios tus descuentos para que las recomendaciones muestren lo que de verdad paga el huésped de cada canal." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

El resto del motor de precios (precios de la competencia, reglas, eventos locales) se explica en [precios dinámicos para hoteles pequeños en Little Hotelier](/blog/dynamic-pricing-little-hotelier) y en la [página de precios dinámicos](/tools/bot/dynamic-pricing). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027; los scripts del navegador siguen siendo gratis.

## Resumen

- La comisión de Booking.com es el porcentaje de tu contrato. Preferred, Preferred Plus y Visibility Booster se suman a él, y Genius te cuesta el descuento.
- Se cobra sobre el importe total de la reserva, normalmente con el IVA incluido, y nunca sobre la tasa turística.
- Payments by Booking.com añade un cargo por pago en los abonos por transferencia. En la UE, un número de IVA válido evita el IVA en tu factura de comisión.
- Consulta las cifras exactas en **Finance > Reservation statements** y mira una estimación en cada reserva de Booking.com en Little Hotelier con el script gratuito [Mostrar Comisiones de Booking.com](/tools/ui/show-booking-commissions).
