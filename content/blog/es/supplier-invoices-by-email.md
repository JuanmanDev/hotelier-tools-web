---
title: "Cómo recoger automáticamente las facturas de proveedores por email (y entregarle a tu gestor un trimestre limpio)"
seoTitle: "Recoger facturas de proveedores por email automáticamente"
description: "Recibe las facturas de proveedores en una dirección o léelas de tu buzón, revisa cada una, detecta duplicados e IBAN cambiados y exporta el trimestre."
date: 2026-10-31
category: invoicing
tags: [facturas de proveedores, facturas recibidas, email, gestor, iva, facturae]
keywords: [recoger facturas de proveedores automáticamente, extraer facturas de adjuntos de email, email para facturas de proveedores, facturas recibidas hotel gestoría, cuántos años conservar facturas recibidas, libro registro de facturas recibidas, cómo nombrar archivos de facturas, detectar facturas duplicadas de proveedores, fraude cambio de cuenta bancaria proveedor, exportar facturas recibidas para el gestor]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/es/supplier-invoices-review-iban-warning.webp
coverAlt: "Factura recibida de Electra Norte, Por revisar, de 218,70 €: botones Confirmar, Marcar como duplicada y Rechazar, un recuadro rojo Comprueba esta factura antes de confirmarla que dice que el IBAN no es el de las facturas anteriores de este proveedor, la casilla sin marcar He comprobado a este proveedor por un canal conocido con un botón Reconocer, y los datos del correo con remitente, asunto en español, buzón reservas@example.com, Comprobación del remitente No disponible y Riesgo del correo Riesgo medio"
faq:
  - q: "¿Cómo puedo recoger automáticamente las facturas de proveedores del email?"
    a: "O das a los proveedores una dirección que solo recibe facturas, o dejas que un programa lea el buzón al que ya escriben. En Hotelier Tools puedes hacer las dos cosas: cada alojamiento tiene una dirección privada para facturas, y los buzones conectados se pueden revisar a diario, en solo lectura, en busca de facturas adjuntas."
  - q: "¿Cuánto tiempo tengo que conservar las facturas de proveedores en España?"
    a: "Al menos cuatro años a efectos fiscales, el plazo de prescripción de la Ley General Tributaria, como explica la Agencia Tributaria. El Código de Comercio pide a las empresas conservar su documentación durante seis años, así que muchos gestores aconsejan guardarlo todo seis años."
  - q: "¿Puedo conservar las facturas de proveedores solo en PDF o escaneadas?"
    a: "En España, sí, siempre que el método garantice la autenticidad del origen, la integridad del contenido y la legibilidad, y que la Agencia Tributaria pueda acceder a ellas sin demora. Guarda el archivo original que recibiste, no una copia pasada a mano."
  - q: "¿Cómo detecto una factura falsa de un proveedor?"
    a: "Desconfía cuando la cuenta bancaria es distinta de la de facturas anteriores, ha cambiado el dominio del remitente o el email no supera su comprobación de autenticidad. Hotelier Tools lo señala y bloquea la confirmación o el pago hasta que una persona reconoce el aviso tras llamar al proveedor a un número que ya conoce."
  - q: "¿Decide la IA lo que entra en mi contabilidad?"
    a: "No. Toda factura empieza como Por revisar. Las facturas electrónicas se leen con exactitud y la IA lee los PDF y las fotos, pero solo una persona puede confirmar una factura o marcarla como pagada, y lo que corrige una persona nunca se sobrescribe con una nueva lectura."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier o de mi programa de contabilidad?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Su exportación de facturas recibidas es un CSV y un ZIP genéricos para tu gestor, no un libro registro certificado."
---

Para recoger automáticamente las facturas de proveedores, haz que lleguen todas a un mismo sitio y deja que un programa saque los archivos: da a tus proveedores una dirección dedicada a facturas, o haz que una herramienta lea el buzón al que ya escriben. En Hotelier Tools, los proveedores pueden enviar sus facturas a una dirección privada de tu alojamiento, o tu buzón conectado se revisa cada día, en solo lectura. Las facturas electrónicas se leen con exactitud, la IA lee los PDF y las fotos, y una persona revisa cada factura antes de que entre en el trimestre que exportas para tu gestor.

## Por qué tu gestor quiere las facturas de proveedores ordenadas

Las facturas de proveedores son la otra mitad de la contabilidad. Tu gestor las necesita para:

- **Deducir el IVA soportado.** En España, el IVA que pagaste por la lavandería, la luz o la comisión de las OTA se deduce en el [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) trimestral, y solo si hay una factura válida detrás.
- **Llevar el libro registro de facturas recibidas.** Las empresas españolas llevan un «libro registro de facturas recibidas»: una línea por factura con fecha, número, NIF del proveedor, base, tipo y cuota.
- **Anotar los gastos para el impuesto sobre la renta o de sociedades**, y comprobar que lo pagado coincide con lo facturado.

El problema habitual no es el trabajo del gestor. Es la caja de zapatos: facturas repartidas en tres buzones, una foto de WhatsApp, un portal de proveedor y una que nunca llegó.

## ¿Cuánto tiempo hay que conservar las facturas de proveedores?

Depende del país. En la UE, el artículo 247 de la Directiva del IVA deja que cada Estado miembro fije el plazo ([texto del artículo 247](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted), en inglés). En España:

| Norma | Plazo | Fuente |
|---|---|---|
| Fiscal (facturas recibidas y copias de las emitidas) | 4 años, el plazo de prescripción de la Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Facturas ligadas al IVA de bienes con periodo de regularización | Ese periodo más los 4 años siguientes | La misma página |
| Mercantil (libros, correspondencia, documentación) | 6 años desde el último asiento | [Código de Comercio, art. 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

La Agencia Tributaria también dice cómo: las facturas se conservan «con su contenido original, de forma ordenada», en papel o en formato electrónico, siempre que el método garantice la autenticidad del origen, la integridad del contenido y la legibilidad, y que la Agencia Tributaria pueda acceder a ellas sin demora. En la práctica: guarda el archivo que envió el proveedor, ordenado, y no borres nada que tu gestor haya contabilizado. Si estás en otro país, consulta el plazo con tu gestor.

## Una forma de nombrar los archivos que ahorra preguntas

Si archivas las facturas a mano, nombra cada archivo siempre igual para que la carpeta se ordene sola:

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

Primero la fecha (año-mes-día, para que se ordene por fecha), después el proveedor y después el número de factura. Ten una carpeta por trimestre. No cambies el número del proveedor: es lo que usa tu gestor para casar la factura con el pago.

## La forma más rápida: Facturas recibidas en Hotelier Tools

**Facturas recibidas** (`/received-invoices`) recoge lo que te envían tus proveedores, lo lee y lo deja esperándote hasta que lo confirmas. Hay cuatro vías de entrada, y puedes usarlas todas a la vez:

| Vía de entrada | Ideal para | Qué configuras |
|---|---|---|
| **Dirección para facturas** | Proveedores que pueden enviar a cualquier dirección | Copia la dirección `inv-…` de tu alojamiento y envíasela |
| **Tu propio buzón** | Proveedores que ya escriben al email de tu hotel | Conéctalo en Mensajería y activa **Leer en busca de facturas** |
| **Arrastrar o pegar** | Facturas en papel, fotos, descargas de portales | Nada: arrastra los archivos a la página |
| **API REST** | Tus propios scripts | `POST /api/v1/received-invoices/upload` |

El mismo archivo nunca entra dos veces: llegue por donde llegue, un archivo que ya está se reconoce por su contenido.

### Opción 1: da a tus proveedores tu dirección para facturas

1. Abre **Ajustes > Facturas recibidas** (`/settings/received-invoices`), busca **Dirección para facturas** y pulsa **Crear la dirección**.
2. Pulsa **Copiar** y envíasela a tus proveedores. También puedes reenviar a ella las facturas que ya tienes.
3. Mantén activa la tarea **Leer el buzón del alojamiento** (se recomienda cada 5 minutos).

La dirección tiene esta forma: `inv-7k2m9qx4hp@in.hotelier.tools`. Pertenece solo a tu alojamiento y no necesita ninguna contraseña de buzón. Cómo funcionan estas direcciones, y lo que no son, lo tienes en [una dirección de email del hotel para facturas y accesos](/blog/hotel-email-address).

### Opción 2: revisa el buzón que ya usan los proveedores

1. Conecta el buzón (Google, Microsoft o cualquier cuenta IMAP) en **Mensajería > Canales**.
2. En **Facturas recibidas**, abre la **Guía de configuración**. Tiene cuatro pasos:
   - **Elige los buzones a los que escriben tus proveedores** y actívalos.
   - **Elige hasta cuándo leer hacia atrás**: **Los últimos** N días, meses o años, o **Desde el inicio de este periodo** (semana, mes, trimestre o año). Como mucho, 5 años atrás.
   - **Lee el correo que ya tienes** con **Leer el correo ahora**. Las lecturas largas del histórico se detienen al cabo de un rato y la revisión diaria lee el resto.
   - **Lee el correo nuevo cada día**: la revisión programada, recomendada a las 06:20.
3. En **Ajustes > Facturas recibidas**, ajusta cada buzón: **Carpetas que leer**, **Leer siempre el correo de** (las direcciones exactas de tus proveedores) y **No leer nunca el correo de**.

La lectura es de solo lectura: nada se marca como leído, se mueve ni se borra, y nunca se leen las carpetas de correo no deseado, enviados, papelera ni borradores. Un mensaje cuenta como factura cuando viene de un proveedor conocido, lleva adjunta una factura electrónica, menciona una palabra de factura («invoice», «factura», «fattura»…) o lleva una foto.

::screenshot{src="/images/blog/demo/es/supplier-invoices-mailbox-settings.webp" alt="Ajustes de Facturas recibidas: la tarjeta Sugerencias con Sugerir facturas que no han llegado activado y 24 meses de historial, y la tarjeta Buzones con reservas@example.com conectado, Leer en busca de facturas activado, INBOX como carpeta que se lee, una primera revisión que mira 120 días atrás y las listas No leer nunca el correo de y Leer siempre el correo de vacías" caption="Cada buzón se lee solo después de que lo actives, y solo en busca de facturas." path="/settings/received-invoices"}
::

### Opción 3: suelta los archivos

Arrastra a la página los PDF, las fotos (PNG, JPEG, WebP) y los XML de factura electrónica, o pulsa **Elegir archivos**. Hasta 20 archivos cada vez, de 15 MB como máximo cada uno. También puedes pegar una foto. Las fotos HEIC del iPhone todavía no se pueden leer: expórtalas antes como JPEG.

## Cómo se lee cada factura

- **Las facturas electrónicas se leen con exactitud.** Los XML Facturae, UBL y CII los interpreta el código, sin IA y sin coste. Un archivo Facturae con varias facturas se convierte en varias filas. Una firma se muestra como presente, no como verificada.
- **La IA lee los PDF y las fotos.** PDF de hasta 10 MB y seis páginas, fotos de hasta 5 MB. Cada lectura consume tu IA mensual incluida, la misma que las respuestas a huéspedes, y muestra sus tokens y su coste en la factura. Por defecto, la IA lee como mucho 40 facturas al día; puedes cambiarlo.
- **Los adjuntos del correo te esperan por defecto.** **Leer automáticamente los adjuntos del correo** está desactivado hasta que lo actives, y el correo con avisos de fraude nunca lo lee una máquina.

Cada campo muestra de dónde salió su valor (**Factura electrónica**, **IA** o **Tú**). Lo que corriges nunca se sobrescribe con una nueva lectura.

## Compara con el original y confirma

Toda factura empieza como **Por revisar**. Ábrela, compara los campos con el original que tienen al lado y pulsa **Confirmar** (o **Confirmar y siguiente** para ir pasando la cola). Más adelante, **Marcar como pagada** con la fecha. ¿Algo no cuadra? **Marcar como duplicada**, o **Rechazar** con un motivo: **No es de esta propiedad**, **No es una factura**, **Spam o fraude** u **Otro**. Un archivo rechazado nunca vuelve a entrar con la revisión del buzón.

::screenshot{src="/images/blog/demo/es/supplier-invoices-review-iban-warning.webp" alt="Factura recibida de Electra Norte, Por revisar, de 218,70 €: botones Confirmar, Marcar como duplicada y Rechazar, un recuadro rojo Comprueba esta factura antes de confirmarla que dice que el IBAN no es el de las facturas anteriores de este proveedor, la casilla sin marcar He comprobado a este proveedor por un canal conocido con un botón Reconocer, y los datos del correo con remitente, asunto en español, buzón reservas@example.com, Comprobación del remitente No disponible y Riesgo del correo Riesgo medio" caption="Una cuenta bancaria cambiada bloquea Confirmar hasta que alguien lo ha comprobado con el proveedor por teléfono." path="/received-invoices"}
::

### Los avisos que frenan un pago indebido

El fraude de proveedores más común es sencillo: una factura que parece correcta, con una cuenta bancaria nueva. Hotelier Tools compara cada factura con el historial del proveedor y con el email en el que llegó:

- **La cuenta bancaria (IBAN) no es la de las facturas anteriores de este proveedor.** Solo se guardan los cuatro últimos dígitos.
- **La dirección del remitente no superó su comprobación de autenticidad (DMARC).** La página de la factura muestra una línea **Comprobación del remitente** (**Superada**, **Fallida** o **No disponible**), leída de la cabecera del propio servidor de correo, nunca de la línea De.
- **El email en el que llegó tiene avisos de fraude**, la factura va dirigida al NIF de otra empresa, el emisor es tu propio alojamiento o el PDF contiene scripts.

Cualquiera de estos avisos bloquea **Confirmar** y **Marcar como pagada** hasta que una persona marca **He comprobado a este proveedor por un canal conocido** y pulsa **Reconocer**. Llama al proveedor a un número que ya tengas, nunca a uno que venga en el email. Ninguna clave de API ni herramienta de IA puede reconocerlo por ti.

Los avisos más leves no bloquean, pero se muestran: los importes no cuadran, el NIF no supera su dígito de control, el proveedor suele escribir desde otro dominio.

### Duplicados

Una factura se marca como posible duplicada cuando otra tiene el mismo NIF de proveedor y el mismo número de factura, o el mismo proveedor y el mismo total con una fecha de emisión a menos de tres días. Decides tú: **Marcar como duplicada** y eliges la original, y se queda en la lista, fuera de los totales.

### Lo que nunca puedes hacer

Borrar una factura confirmada o pagada. Se conserva en el registro (cuatro años en España) y solo se puede rechazar, lo que la deja fuera de los totales y de la exportación.

## Exporta el trimestre para tu gestor

1. En **Facturas recibidas**, la lista se agrupa por defecto en trimestres naturales (el T1 va de enero a marzo, como en el modelo 303). Puedes agrupar por mes, año, proveedor o categoría, y fijar el mes en que empieza tu año fiscal.
2. Pulsa **Exportar para el gestor** en un trimestre.
3. Elige **Facturas confirmadas y pagadas** (la opción por defecto) o **También las pendientes de revisar**, y **ZIP con los originales y el CSV** o **Solo CSV**.
4. Si quieres, marca **Listar las facturas que no han llegado**.

El ZIP contiene un archivo por factura, **con el nombre de fecha, proveedor y número**, un CSV con la estructura del libro registro de facturas recibidas (una fila por línea de impuesto) y un LÉEME. Hasta 500 archivos por exportación.

::screenshot{src="/images/blog/demo/es/supplier-invoices-export-dialog.webp" alt="Diálogo Exportar para el gestor del periodo 2026: Facturas confirmadas y pagadas seleccionado, ZIP con los originales y el CSV seleccionado, Listar las facturas que no han llegado sin marcar, 29 facturas para exportar y un aviso de que no se incluyen 3 facturas pendientes de revisar" caption="Un trimestre, un ZIP: los originales renombrados y un CSV con formato de libro registro." path="/received-invoices"}
::

Sé claro con tu gestor en una cosa: el CSV sigue la estructura del libro registro, pero **no está certificado** por la Agencia Tributaria. Lo que entra en la contabilidad lo decide tu gestor.

### Facturas que puede que te falten

Para los proveedores que facturan con un ritmo fijo (la lavandería mensual, la luz bimestral, la gestoría trimestral), **Facturas que puede que te falten** dice «Se espera de Lavandería Sol SL hacia el 1 de octubre» cuando la siguiente no ha llegado. Son suposiciones, no deudas. **Esta vez no** oculta un periodo; **Dejar de esperarla** oculta al proveedor.

::screenshot{src="/images/blog/demo/es/supplier-invoices-quarter-list.webp" alt="Página Facturas recibidas: buzones leídos por última vez con 2 importadas, la zona Suelta aquí las facturas con Leer PDF y fotos con IA activado, cuadros de Gastado 25.852,14 €, IVA 796,87 €, IGIC 0,00 €, 3 por revisar y 1 sin pagar, Facturas que puede que te falten con Lavandería Sol SL con retraso desde el 1 de octubre y Electra Norte llegada y por revisar, y la tarea Revisar los buzones en pausa" caption="Mira lo que has gastado, lo que queda por revisar y qué factura habitual no ha llegado todavía." path="/received-invoices"}
::

## Quién puede hacer qué

Dale a tu gestor su propio acceso en **Ajustes > Equipo y roles** (`/settings/team`). El rol integrado **Contable** puede ver y editar facturas y hacer que se lean, pero no revisar buzones. Revisar el correo del negocio y gastar crédito de IA son permisos aparte que concedes a propósito.

El asistente también puede ayudarte: «¿Qué facturas de proveedores me faltan del tercer trimestre?» o «¿Cuánto IVA soportado llevo este trimestre?» se responden con los mismos datos, y todo lo que cambie una factura espera tu aprobación.

::demo-cta{path="/received-invoices"}
::

Facturas recibidas forma parte de la [función de facturación](/tools/bot/invoicing). El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Las facturas recibidas se guardan en Hotelier Tools; no se escribe nada en Little Hotelier.
::

Guías relacionadas: [descargar todas tus facturas de Little Hotelier](/blog/download-all-little-hotelier-invoices), [una dirección de email del hotel para facturas](/blog/hotel-email-address), [enviar la factura al huésped en el check-out](/blog/send-invoice-to-guest-at-checkout).

## Resumen

- Haz que las facturas de proveedores lleguen a un solo sitio: una dirección privada para facturas, tu propio buzón revisado a diario, o arrastrar y soltar.
- Consérvalas: en España, al menos cuatro años a efectos fiscales y seis por el Código de Comercio, como archivos originales y ordenadas.
- Las facturas electrónicas se leen con exactitud; la IA lee los PDF y las fotos; una persona confirma cada una.
- Un IBAN cambiado, una comprobación del remitente fallida o una puntuación de fraude bloquean el pago hasta que alguien lo comprueba con el proveedor.
- Exporta cada trimestre como un ZIP con los originales renombrados y un CSV con formato de libro registro para tu gestor.
