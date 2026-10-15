---
title: "SES.Hospedajes con Little Hotelier: cómo registrar viajeros paso a paso"
seoTitle: "SES.Hospedajes con Little Hotelier: registrar viajeros"
description: "SES.Hospedajes explicado: quién debe usarlo, datos obligatorios, plazo de 24 horas, cómo enviar el parte de viajeros y cómo hacerlo desde Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ses hospedajes, spain, compliance, guest registration, little hotelier]
keywords: [ses hospedajes, ses hospedajes como registrar viajeros, parte de viajeros, ses hospedajes datos obligatorios, ses hospedajes servicio web, ses hospedajes booking, ses hospedajes little hotelier]
feature: automated-checks
demoPath: /
cover: /images/blog/demo/es/automated-checks-moment-on-arrival.webp
coverAlt: "Ajustes de A la llegada en Hotelier Tools con las comprobaciones DNI / Pasaporte (Registro policial), Asignación de habitación física y Validación de dirección y procedencia activadas, cada una con lo que puede y no puede hacer"
faq:
  - q: "¿Es obligatorio SES.Hospedajes para un B&B pequeño o una vivienda de uso turístico?"
    a: "Sí. El Real Decreto 933/2021 abarca hoteles, hostales, pensiones, casas rurales, campings, apartamentos turísticos y alojamientos similares de toda España, y las preguntas frecuentes del Ministerio del Interior confirman que también están incluidos los particulares que alquilan alojamiento. Cataluña y el País Vasco comunican los datos a sus propios sistemas policiales."
  - q: "¿Hay que registrar también a los niños y a los bebés?"
    a: "Sí. Los menores de 14 años entran en el registro, con sus datos aportados por el adulto que los acompaña, y el documento de identidad es obligatorio desde los 14. Si algún viajero es menor, también debes anotar la relación entre los viajeros, como padre, madre o tutor."
  - q: "¿Cuál es la multa por no enviar los datos de los huéspedes a SES.Hospedajes?"
    a: "Según la Ley Orgánica 4/2015 de protección de la seguridad ciudadana, no llevar el registro o no enviar los datos es una infracción grave, con multa de 601 a 30.000 euros. Los errores o el envío fuera de plazo son infracciones leves, de 100 a 600 euros."
  - q: "¿Cuánto tiempo hay que conservar los datos de los huéspedes?"
    a: "Tres años desde el final de la estancia. El Ministerio del Interior indica que no te enviará listados de tus comunicaciones anteriores, así que guarda tus propias copias o apóyate en el historial de tu herramienta de check-in."
  - q: "¿Hotelier Tools envía los datos de los huéspedes a SES.Hospedajes?"
    a: "No. Hotelier Tools no envía nada a SES.Hospedajes ni a la policía. Marca las reservas a las que les falta el documento de identidad o la dirección para que las corrijas antes de la llegada. Para enviarlos, usa el envío automático de Little Hotelier (Automated compliance reporting) o un proveedor de check-in online. Hotelier Tools es independiente y no está afiliado a SiteMinder ni a Little Hotelier."
---

Todo hotel, hostal, B&B y vivienda de uso turístico de España debe enviar los datos de sus huéspedes a **SES.Hospedajes**, el registro en línea del Ministerio del Interior (Cataluña y el País Vasco usan sus propios sistemas policiales). Las reservas y las cancelaciones se comunican en un plazo de 24 horas, y los datos de los viajeros en las 24 horas siguientes al inicio de la estancia ([Real Decreto 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461)). Little Hotelier puede enviar ambas cosas automáticamente con el check-in online de Guest Engagement, o con una aplicación asociada como Chekin, para que nadie tenga que teclear dos veces los datos del mismo huésped.

::callout{type="warning" title="No es asesoramiento jurídico"}
Última verificación en octubre de 2026 con el BOE, la sede electrónica del Ministerio del Interior y el centro de ayuda de Little Hotelier. Las normas y los formularios cambian: consulta con el Ministerio o con tu gestor antes de basarte en cualquier detalle.
::

## ¿Qué es SES.Hospedajes y quién tiene que usarlo?

SES.Hospedajes es la plataforma del Ministerio del Interior para el registro documental que deben llevar los establecimientos de hospedaje. Muchos propietarios siguen llamando **partes de viajeros** a esos registros. El Ministerio activó la plataforma el **2 de diciembre de 2024**, tras varios aplazamientos ([nota de prensa de La Moncloa](https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/2024/021224-registro-hospedaje-alquiler-vehiculos.aspx)).

Se aplica en toda España a (RD 933/2021, artículo 2):

- hoteles, **hostales**, **pensiones**, casas de huéspedes y alojamientos de turismo rural
- campings y áreas de autocaravanas
- apartamentos turísticos, bungalows y alojamientos vacacionales similares
- particulares que alquilan alojamiento, según las [preguntas frecuentes de agosto de 2026](https://sede.interior.gob.es/portal/dam/jcr:995aad35-2632-4de2-97fe-94cc2489c9c6/Preguntas-frecuentes-hospedajes-alquiler-vehiculos-20260810.pdf) del Ministerio

**Cataluña y el País Vasco** mantienen sus propios sistemas. En Cataluña se comunica a los Mossos d'Esquadra a través de su plataforma actual ([Mossos](https://mossos.gencat.cat/ca/serveis_i_tramits/registre-dactivitats-dhostalatge-i-lloguer-de-vehicles-a-motor/)); en el País Vasco, a la Ertzaintza ([euskadi.eus](https://www.euskadi.eus/comunicacion/registro-hostelero/web01-tramite/es/)).

**Primero, da de alta tu establecimiento.** Tienes que darte de alta en SES.Hospedajes antes de iniciar la actividad, con certificado digital o Cl@ve ([sede electrónica](https://sede.interior.gob.es/portal/sede/informacion_hospedajes)). El alta te da el acceso a la aplicación web y unas credenciales distintas para el envío por servicio web.

## ¿Qué datos obligatorios pide SES.Hospedajes?

El anexo I del RD 933/2021 enumera tres bloques:

| Bloque | Datos |
|---|---|
| **Cada viajero** | Nombre, dos apellidos, sexo, tipo de documento de identidad (DNI, pasaporte, TIE) y número, *número de soporte* del documento, nacionalidad, fecha de nacimiento, domicilio habitual (dirección completa, localidad, país), teléfono fijo, móvil, correo electrónico, número de viajeros, parentesco entre los viajeros si alguno es menor |
| **La reserva** | Referencia y fecha del contrato, fecha y hora de entrada y de salida, dirección, número de habitaciones, acceso a internet sí o no |
| **El pago** | Tipo de pago, identificación del medio de pago (tipo y número de tarjeta, IBAN, pago por móvil…), titular, caducidad, fecha de pago |

Las preguntas frecuentes del Ministerio aclaran algunos puntos:

- El DNI es obligatorio desde los 14 años. Los menores de 14 se registran igualmente, con sus datos aportados por el adulto que los acompaña.
- Si algún viajero es menor, anota el *parentesco*: padre o madre, abuelo o abuela, tutor u otro.
- Si no hay correo electrónico, basta con un teléfono móvil.
- El sexo es obligatorio cuando figura en el documento.

Las [instrucciones oficiales para subir ficheros](https://hospedajes.ses.mir.es/hospedajes-sede/assets/docs/Instrucciones.pdf) marcan algunos campos como opcionales, pero el decreto los enumera todos. Recoge todo lo que razonablemente puedas.

## ¿Cuáles son los plazos y las multas?

El artículo 6.3 del decreto fija dos plazos distintos: la comunicación se hace «de manera inmediata, y en todo caso en un plazo no superior a 24 horas», a contar:

1. desde la **reserva**, el contrato o su **cancelación**
2. desde el **inicio de la estancia** (check-in)

Cualquier cambio posterior en una reserva requiere una nueva comunicación. Conserva los registros durante **tres años** desde el final de la estancia (artículo 5.3). El Ministerio dice que no te enviará listados de lo que has enviado, así que guarda tu propio historial.

Las multas vienen de la Ley de Seguridad Ciudadana, la [Ley Orgánica 4/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-3442):

| Infracción | Ejemplo | Multa |
|---|---|---|
| Leve (art. 37.9) | Errores en los datos o envío fuera de plazo | De 100 a 600 € |
| Grave (art. 36.20) | No llevar el registro o no enviar los datos | De 601 a 30.000 € |

## ¿Cómo se envían los datos: formulario web, fichero o servicio web?

SES.Hospedajes admite tres vías, todas descritas en la [guía visual](https://sede.interior.gob.es/portal/dam/jcr:01a016b6-5ec0-41b4-898c-7f77b2f16e7d/Guia-visual-de-Hospedajes-v.29.08.2025.pdf) del Ministerio:

1. **Formulario web.** Escribes cada reserva y cada viajero en la aplicación de SES.Hospedajes. Sirve para pocas habitaciones y se hace lento cuando hay movimiento.
2. **Subida de fichero.** Subes un fichero XML con muchas comunicaciones a la vez. Todas las comunicaciones de un fichero deben ser del mismo tipo.
3. **Servicio web.** Tu programa de gestión envía los datos directamente. Así es como un PMS o una aplicación de check-in elimina el doble trabajo.

Puedes entrar en la aplicación con certificado digital o con usuario y contraseña, y puedes ver y corregir las comunicaciones sea cual sea la vía por la que se enviaron.

## ¿Se conecta Little Hotelier con SES.Hospedajes?

Sí. A fecha de octubre de 2026 hay dos formas, además de una exportación más antigua.

### Opción 1: el envío automático de Little Hotelier (Automated compliance reporting)

**Guest Engagement** de Little Hotelier incluye un formulario de check-in para el registro de viajeros (compliance check-in form) que envía los datos a SES.Hospedajes por ti ([centro de ayuda, actualizado en junio de 2025](https://helpcentre.littlehotelier.com/en/articles/10303885-how-to-connect-automated-compliance-reporting-to-ses-hospedajes-platform)). Necesitas tener Guest Engagement en tu cuenta, así que pregunta a Little Hotelier si tu plan lo incluye.

1. **En SES.Hospedajes**, abre tus datos registrados (**Mis datos registrados**) y marca **Envío de comunicaciones por servicio web**. Recibes por correo un código de arrendador, un código de establecimiento, un usuario y una contraseña.
2. **En Little Hotelier**, ve a **Guest Engagement > Check-in > Settings** (Ajustes) y elige **Compliance reporting check-in form**.
3. Rellena los datos del alojamiento, elige cómo firman los huéspedes, activa **Authority connection**, selecciona **SES Hospedajes** en **Automatically send info to**, introduce las cuatro credenciales (el usuario termina en «WS») y pulsa **Validate**.
4. En **Booking registration sending**, elige **Enabled**. Los datos de la reserva se envían entonces al hacer la reserva, y los de los viajeros tras el check-in. Puedes excluir algunos orígenes de reserva.
5. Define un **Payment type** (tipo de pago) por defecto.

Cada envío muestra un estado (Scheduled, In progress, Done, Failed y otros), y la lista de documentos enviados está en la misma página de ajustes. La [página general sobre el envío automático](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting) de Little Hotelier añade que los cambios en una reserva se envían a Chekin y se actualizan ante la autoridad. Hay artículos de ayuda aparte para los Mossos y la Ertzaintza.

### Opción 2: Chekin desde la App Store

[Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) es una aplicación de pago de terceros en la App Store de Little Hotelier. Se encarga del check-in online, la verificación de documentos y los partes de viajeros a la policía en España y en otros países. Otros proveedores de check-in online ofrecen servicios parecidos: comprueba que el tuyo envía a SES.Hospedajes por servicio web y que lee tus reservas de Little Hotelier.

### La antigua exportación para la policía (Police Report)

**Front Desk > Reports > Police Report** exporta un fichero .txt con los huéspedes de 16 años o más para un rango de fechas ([centro de ayuda](https://helpcentre.littlehotelier.com/en/articles/8673944-run-and-export-a-spanish-police-report)). El artículo dice que hay que subirlo a «la web de la policía» y no menciona SES.Hospedajes, así que comprueba que SES lo acepta antes de contar con él.

## Cómo evitar el doble trabajo y los datos que faltan

El doble trabajo aparece cuando el mismo huésped se teclea en Little Hotelier y otra vez en SES.Hospedajes o en una aplicación de check-in. La solución es recoger los datos una sola vez, lo antes posible, y dejar que lleguen a los dos sitios:

1. **Envía el check-in online antes de la llegada.** Los huéspedes rellenan sus propios datos desde la confirmación de reserva o un enlace.
2. **Recoge lo que falte en recepción** en la misma herramienta, no en papel.
3. **Comprueba el documento.** El decreto dice que los documentos deben exhibirse o aportarse, y las preguntas frecuentes del Ministerio aceptan comprobaciones electrónicas que verifiquen su exactitud.
4. **Completa lo que falte antes de que venza el plazo de 24 horas**, no a final de mes.

### Si usas Chekin: consúltalo desde Little Hotelier

El userscript gratuito [Conexión con Chekin](/tools/ui/show-chekin) añade un panel de Chekin a la reserva en Little Hotelier. Ves de un vistazo si los huéspedes ya se han registrado, con sus nombres, teléfonos y números de documento, y puedes copiar el número de documento en la reserva, por ejemplo para la factura. Cuando nadie se ha registrado todavía, muestra el enlace de registro del huésped con botones para abrirlo, copiarlo, enviarlo por email o por WhatsApp. Necesitas haber iniciado sesión en Chekin en el mismo navegador. Es un script independiente: no es de Chekin ni de Little Hotelier. Guía de instalación: [cómo instalar los userscripts](/tools/ui/instructions).

::screenshot{src="/images/scripts/show-chekin/to.webp" alt="Reserva de Little Hotelier con el panel de Chekin: un huésped encontrado, con nombre, teléfono y número de documento, y los botones Utilizar Documento y Ver en Chekin" caption="El panel de Chekin dentro de la reserva de Little Hotelier, con el documento del huésped listo para usar."}
::

### Detecta los documentos que faltan antes de la llegada

Hotelier Tools **no** envía datos a SES.Hospedajes ni a la policía, ni pretende hacerlo. Lo que sí hace es revisar cada reserva por si falta el documento de identidad o la dirección, tras la reserva, a la llegada, durante la estancia y a la salida, con las [comprobaciones automáticas](/tools/bot/automated-checks). Los problemas aparecen en una sola página de incidencias y en un correo de informe, y así reclamas el dato al huésped mientras aún hay tiempo. Mira la [checklist diario de recepción](/blog/hotel-front-desk-checklist-automation).

::screenshot{src="/images/blog/demo/es/automated-checks-issues-full.webp" alt="Página Incidencias de Hotelier Tools con 20 abiertas, 5 corregidas y 25 en total, con reservas con avisos de saldo pendiente y, más abajo, errores de DNI / Pasaporte (Registro policial) que indican que el huésped principal no tiene documento de identidad, cada una con su botón Verificar" caption="Los problemas abiertos agrupados por reserva, incluidas las estancias en las que el huésped principal aún no tiene documento de identidad." path="/automated-checks/issues" width="1440" height="2400"}
::

::demo-cta{path="/automated-checks/issues"}
::

## ¿Es legal fotocopiar o escanear el DNI del huésped?

El decreto te pide ver el documento y registrar sus datos, no conservar una copia. La Agencia Española de Protección de Datos explica que, en general, no hace falta una copia del DNI para contratar, y que la empresa debe elegir la forma más adecuada de identificar a la persona salvo que una ley exija la copia ([preguntas frecuentes de la AEPD](https://www.aepd.es/preguntas-frecuentes/1-tus-derechos/3-identificacion-con-dni/FAQ-0115-es-necesario-proporcionar-una-copia-del-dni-para-realizar-una-contratacion)). Si tu herramienta de check-in guarda imágenes de los documentos, comprueba cuánto tiempo las conserva y para qué.

## Resumen

- SES.Hospedajes es obligatorio para todo tipo de alojamiento en España, salvo en Cataluña y el País Vasco, que comunican a su propia policía.
- Comunica las reservas y las cancelaciones en 24 horas, y los datos de los viajeros en las 24 horas siguientes al check-in. Conserva los registros tres años.
- Little Hotelier puede enviar a SES.Hospedajes con el formulario de check-in para el registro de viajeros de Guest Engagement, o con Chekin.
- Recoge los datos una sola vez, antes de la llegada, y deja que lleguen a Little Hotelier y a SES.
- Usa las [comprobaciones automáticas](/tools/bot/automated-checks) para detectar documentos que faltan, y el script gratuito [Conexión con Chekin](/tools/ui/show-chekin) si usas Chekin. Para otros países, lee [registro de viajeros por países](/blog/guest-registration-rules-by-country); para la estadística del INE, mira [la encuesta de ocupación del INE](/blog/ine-hotel-occupancy-survey).
