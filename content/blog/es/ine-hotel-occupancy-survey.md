---
title: "Encuesta de ocupación hotelera del INE: cómo rellenarla desde Little Hotelier"
seoTitle: "Encuesta de ocupación hotelera INE con Little Hotelier"
description: "Obligatoria si el INE selecciona tu hotel, con multas de hasta 30.050 €. Qué pide, cómo funciona IRIA y cómo rellenarla desde Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [encuesta ocupacion hotelera ine, encuesta ine hoteles, iria ine encuesta, encuesta ine obligatoria multa, ine encuesta ocupacion apartamentos turisticos, rellenar encuesta ine online]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/es/ine-guest-origins-report.webp
coverAlt: "Estadísticas de origen de huéspedes (encuesta INE) en Hotelier Tools del 27 de septiembre al 3 de octubre de 2026: 8 entradas, 24 pernoctaciones, 3,4 huéspedes al día y 3 con datos que faltan, sobre las pestañas Resumen diario, Por origen, Habitaciones, ADR por cliente y Calidad de datos"
faq:
  - q: "¿Es obligatoria la encuesta de ocupación del INE para un hostal o un B&B pequeño?"
    a: "Sí, si el INE ha seleccionado tu establecimiento. La encuesta abarca todos los establecimientos hoteleros de España, incluidos hostales y pensiones, y el cuestionario del INE indica que es de cumplimentación obligatoria según la ley de la función estadística. Si has recibido una carta o un correo del INE con un número de orden y una contraseña, tienes que responder."
  - q: "¿Cuánto es la multa por no contestar la encuesta del INE?"
    a: "El cuestionario del INE cita la ley de la función estadística: de 60,10 a 300,51 € las infracciones leves, de 300,52 a 3.005,06 € las graves y de 3.005,07 a 30.050,61 € las muy graves, como enviar datos falsos. Responder tarde o no responder es leve, salvo que perjudique gravemente a la estadística."
  - q: "¿La encuesta del INE pide el DNI o el pasaporte de los huéspedes?"
    a: "No. El INE pide totales: cuántos viajeros han entrado y cuántas noches se han alojado, agrupados por país de residencia o comunidad autónoma, además de habitaciones, tarifas y personal. No se envían números de documento, nombres ni direcciones. Los datos de identidad van a SES.Hospedajes, que es otra obligación distinta."
  - q: "¿La encuesta del INE usa la nacionalidad del huésped o dónde vive?"
    a: "Dónde vive. El INE clasifica a los viajeros por lugar de residencia: los residentes en España por comunidad autónoma y el resto por país. Un ciudadano alemán que vive en Valencia cuenta como residente en Valencia, así que revisa que el país y la provincia de la dirección del huésped estén rellenos."
  - q: "¿Sirve para apartamentos turísticos o casas rurales?"
    a: "Los apartamentos, campings, casas rurales y albergues responden a sus propios cuestionarios del INE. Hotelier Tools genera la encuesta de ocupación hotelera (EOH) para establecimientos hoteleros: hoteles, hostales y pensiones."
  - q: "¿Hotelier Tools es un producto oficial del INE o de Little Hotelier?"
    a: "No. Hotelier Tools es independiente y no está afiliado ni respaldado por el INE, SiteMinder ni Little Hotelier. Lee tus reservas con tu propio acceso a Little Hotelier y envía el informe por IRIA, el sistema del INE, con el acceso IRIA de tu propio establecimiento."
---

Si el INE (Instituto Nacional de Estadística) ha seleccionado tu hotel u hostal para su encuesta de ocupación, responder es obligatorio. El propio cuestionario del INE cita multas de 60,10 a 30.050,61 €. Respondes en el portal web **IRIA** del INE o enviando un fichero XML. En ambos casos informas de las entradas y pernoctaciones según el lugar de residencia de los huéspedes, las habitaciones ocupadas, las tarifas medias por tipo de cliente y el personal.

Little Hotelier guarda la mayoría de esas cifras. Esta guía explica qué pide el INE, cómo reunirlo desde Little Hotelier y cómo Hotelier Tools genera, comprueba y envía el informe por ti.

::callout{type="info" title="Última verificación: octubre de 2026"}
Los datos de abajo salen de la [metodología de la encuesta hotelera 2025](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) del INE y de su [cuestionario hotelero](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). La carta o el correo que te envíe el INE tiene siempre la última palabra sobre fechas y plazos.
::

## ¿Qué es la encuesta de ocupación hotelera del INE?

Su nombre oficial es **Encuesta de Ocupación en Alojamientos Turísticos**. La parte hotelera es la **Encuesta de Ocupación Hotelera (EOH)**. El INE la usa para publicar cada mes cifras de viajeros, pernoctaciones, ocupación y empleo hotelero de España, de cada comunidad autónoma y de las principales zonas turísticas.

Abarca todos los *establecimientos hoteleros*: hotel, aparthotel, motel, **hostal**, **pensión**, fonda y casa de huéspedes. Los apartamentos turísticos, los campings, el turismo rural y los albergues tienen sus propios cuestionarios dentro de la misma familia de encuestas ([INE: estadísticas de hostelería y turismo](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### ¿Quién tiene que contestarla?

No todos los hoteles. El INE extrae una muestra aleatoria por provincia, categoría y tamaño. Los hoteles de cinco estrellas y los mayores de cada grupo entran siempre. Un hotel seleccionado suele permanecer cuatro años en la muestra, y cada año se renueva aproximadamente una cuarta parte ([metodología, apartado 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Si te seleccionan, el INE te escribe con un **número de orden** (el «NOrden») y una contraseña para su portal. Ese mensaje es la señal de que la encuesta ya te afecta.

## ¿Es obligatoria la encuesta del INE? ¿Cuánto es la multa?

Sí, desde el momento en que te seleccionan. El cuestionario lleva la leyenda *«Estadística de cumplimentación obligatoria»*. La ley de la función estadística pública (Ley 12/1989, LFEP) dice que los informantes deben responder «de forma veraz, exacta, completa y dentro del plazo» (artículo 10.2). Las leyes 4/1990 y 13/1996 hacen obligatoria esta encuesta.

Multas que cita el formulario del INE (artículo 51 LFEP):

| Infracción | Ejemplo en la ley | Multa |
|---|---|---|
| Leve | Datos fuera de plazo, ausentes o incompletos, sin perjuicio grave | De 60,10 a 300,51 € |
| Grave | Lo mismo, con perjuicio grave para la estadística | De 300,52 a 3.005,06 € |
| Muy grave | Datos falsos o negativa reiterada | De 3.005,07 a 30.050,61 € |

Los ejemplos salen del artículo 50 de la [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Tus respuestas están protegidas por el secreto estadístico (artículo 13 LFEP). El INE asegura que no cede datos individuales a otras administraciones, salvo a oficinas estadísticas sujetas al mismo secreto ([información del INE para informantes](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## ¿Qué datos pide la encuesta del INE?

| Qué pide el INE | Qué informas | Dónde lo encuentras |
|---|---|---|
| *Viajeros entrados* | Huéspedes que llegan, por lugar de residencia | Reservas y direcciones de los huéspedes |
| *Pernoctaciones* | Noches de estancia, por lugar de residencia | Fechas de estancia y número de huéspedes |
| *Habitaciones ocupadas* | Habitaciones ocupadas (uso doble o individual) | Asignación de habitaciones |
| *Camas supletorias* | Camas supletorias y cunas usadas | Tus propios registros |
| *Personal ocupado* | Personal del mes: no remunerado, remunerado fijo y remunerado eventual | Nóminas, no Little Hotelier |
| *ADR por tipo de cliente* | Tarifa media diaria y porcentaje de habitaciones por tipo de cliente | Tarifas y canal de reserva |

Tres detalles que suelen pillar a la gente:

- **Residencia, no nacionalidad.** El INE agrupa a los huéspedes por dónde viven: los residentes en España por comunidad autónoma (el fichero XML usa la provincia) y el resto por país. Un francés que vive en Málaga cuenta como Málaga.
- **El ADR tiene reglas estrictas.** El INE quiere la tarifa de una habitación doble, solo alojamiento (sin desayuno ni pensión), bruta de comisiones y sin IVA. La reparte en nueve tipos de cliente: touroperador tradicional, agencia de viajes tradicional, empresas, particulares, grupos, reserva directa en tu web, touroperador online, agencia de viajes online y otros.
- **Las cunas son camas supletorias.** El INE cuenta las cunas como *camas supletorias*. Decláralas, o las noches que informes podrán superar tus camas.

La encuesta no pide números de pasaporte ni de DNI. Son datos agregados, no un registro de viajeros. Registrar a los huéspedes ante la policía (los partes de viajeros) es otra obligación distinta: lee [SES.Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## ¿Qué fechas cubre y cuándo hay que enviarla?

La metodología 2025 del INE indica que el cuestionario básico cubre **siete días consecutivos de cada mes, elegidos al azar**, de modo que entre todos los hoteles se cubra el mes entero. A los hoteles de tres, cuatro y cinco estrellas también se les piden totales del mes completo. Un fichero XML lleva todos los días del mes de referencia ([metodología, apartados 7 y 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

El cuestionario complementario (personal y ADR) debe enviarse dentro de los **cinco días naturales siguientes al fin del mes** al que se refieren los datos, según el [formulario del INE](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

En la práctica, usa exactamente las fechas y el plazo que figuren en la petición del INE a tu establecimiento.

## ¿Cómo se envía: formulario web de IRIA o fichero XML?

1. **Formulario web de IRIA.** IRIA es el portal de recogida de datos por internet del INE ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Introduces el número de orden y la contraseña del mensaje del INE y escribes las cifras en un formulario que reproduce el cuestionario en papel. Al enviarlo, IRIA emite un justificante con un número único ([ayuda de IRIA](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Guárdalo.
2. **Fichero XML.** El software de gestión puede generar un fichero en el formato publicado por el INE y enviarlo, sin que nadie reescriba cifras. El [cuestionario mensual](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) del INE también remite a su sistema ARCE para subir ficheros XML.

Hacerlo a mano significa repasar todas las reservas del periodo y contar huéspedes y noches por país y por provincia. Ahí se va el tiempo, y ahí se cuelan los errores.

## Cómo tener bien el país y la provincia del huésped en Little Hotelier

La ficha de huésped de Little Hotelier ya tiene los campos que necesita el INE: **País** y **Provincia/Región** en la dirección, además de **Nacionalidad**. El problema es que las reservas de Booking.com y de otros canales suelen llegar sin dirección, y esos campos quedan vacíos.

Tres hábitos lo arreglan casi todo:

1. Rellena el país y la provincia en el check-in, con el documento de identidad o una pregunta rápida.
2. Instala el userscript gratuito [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country). Al hacer clic en el campo de provincia, muestra la lista de provincias de España, y al elegir una pone España como país.
3. Deja que las [comprobaciones automáticas](/tools/bot/automated-checks) avisen de las reservas sin país o sin provincia tras la reserva, a la llegada y a la salida, cuando el huésped aún está ahí para preguntarle.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Pestaña de huésped de Little Hotelier con la lista de provincias españolas de Easy Save Province and Country abierta bajo el campo Provincia/Región" caption="El userscript gratuito convierte el campo de provincia en una lista y pone el país por ti."}
::

## La forma más rápida: el informe del INE directo desde Little Hotelier

A octubre de 2026 no hemos encontrado ninguna exportación para la encuesta del INE en el centro de ayuda de Little Hotelier. Hotelier Tools cubre ese hueco: lee tus reservas con tu propio acceso a Little Hotelier, genera las cifras del INE, las valida y envía el XML por IRIA. La función de informes del INE está marcada como estable.

### 1. Configura tu establecimiento una sola vez

Abre **Configuración INE** (`/ine-setup`). Introduce tu número de orden de IRIA (**NOrden**) y tu contraseña, pulsa **Probar conexión IRIA**, rellena la dirección y la capacidad del establecimiento y elige el tipo y la categoría. Todo esto va en la cabecera del XML. La contraseña se guarda cifrada y nunca se muestra en claro.

::screenshot{src="/images/blog/demo/es/ine-establishment-setup.webp" alt="Configuración INE, página Establecimiento en Hotelier Tools: aviso de solo lectura en la demostración, la tarjeta de acceso IRIA con el campo NOrden, la contraseña IRIA oculta y guardada cifrada, el botón Probar conexión IRIA y debajo los datos del establecimiento con razón social y dirección" caption="Introduce tu acceso a IRIA y los datos del establecimiento una sola vez." path="/ine-setup"}
::

### 2. Genera el informe de las fechas que pide el INE

Abre **Origen de huéspedes** (`/reports/guest-origins`), elige las fechas de la petición del INE y pulsa **Generar informe**. Hotelier Tools lee esas reservas y cuenta las entradas y pernoctaciones de cada día por comunidad autónoma o país, además de las habitaciones ocupadas, las camas supletorias y la tarifa media por tipo de cliente. Las pestañas separan el resultado en **Resumen diario**, **Por origen**, **Habitaciones**, **ADR por cliente** y **Calidad de datos**.

Si el buzón que recibe los correos del INE está conectado a la bandeja de Hotelier Tools, el correo del INE muestra una tarjeta con un botón que genera el informe justo para las fechas pedidas. La contraseña de IRIA de un solo uso se queda en el correo.

::screenshot{src="/images/blog/demo/es/ine-guest-origins-by-origin.webp" alt="Pestaña Por origen del informe de origen de huéspedes: entradas y pernoctaciones de cada noche del 27/9 al 3/10, agrupadas en Resto de países (Irlanda, Países Bajos, Reino Unido) y Sin datos/Desconocido para los huéspedes sin provincia española, sobre el inicio de la tarjeta Envío al INE" caption="Entradas y pernoctaciones de cada noche por origen, con los huéspedes sin provincia aparte para que los corrijas." path="/reports/guest-origins"}
::

### 3. Corrige los huéspedes sin origen

Las reservas sin nacionalidad o sin provincia quedan marcadas. Corrígelas en Little Hotelier y actualiza solo esas filas. No hace falta rehacer todo el informe.

### 4. Valida, previsualiza y envía

Pulsa **Validar para INE**, luego **Previsualizar XML** para ver exactamente qué se enviará y después **Enviar al INE**. El informe va a IRIA y el justificante del INE se guarda con él.

### 5. Guarda todos los justificantes

**Informes guardados** (`/reports/list`) muestra cada informe con su periodo, su estado y el justificante del INE. Un informe enviado ya no se puede modificar ni borrar, y aun así puedes descargar su XML.

::screenshot{src="/images/blog/demo/es/ine-saved-reports.webp" alt="Página Informes guardados de Hotelier Tools con tres informes de origen de huéspedes en estado Borrador, con las columnas Periodo, Estado, Justificante INE, Personal y Creado, las acciones Ver y eliminar y el botón Nuevo informe" caption="Cada informe con su periodo, su estado y, una vez enviado, el justificante del INE." path="/reports/list"}
::

::callout{type="note" title="Pruébalo en la demo"}
La demo pública tiene un hotel ficticio con un informe del INE guardado. El envío al INE está desactivado allí, así que no llega nada al INE, y no debes escribir nunca credenciales reales de IRIA.
::

::demo-cta{path="/reports/guest-origins"}
::

### ¿Por qué IRIA rechaza un cuestionario?

Los desarrolladores de un PMS hotelero de código abierto que corrigieron rechazos recurrentes enumeraron estas causas ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)):

- enviar el cuestionario hotelero de un establecimiento registrado como apartamentos
- un rango de fechas que cruza dos meses, lo que repite números de día en el fichero
- cunas o camas supletorias sin declarar, de modo que las pernoctaciones superan las camas declaradas
- un huésped de un país sin código ISO estándar, lo que deja el país vacío

Ejecuta el paso de validación antes de cada envío y mantén el tipo y la categoría del INE de la configuración iguales a los que el INE tiene registrados.

## Resumen

- La encuesta del INE es obligatoria desde que el INE selecciona tu establecimiento, y las multas llegan a 30.050,61 € por datos falsos.
- Pide totales por residencia del huésped (no nacionalidad), habitaciones, camas supletorias, ADR por tipo de cliente y personal. Sin números de documento.
- Se envía en IRIA a mano, o como fichero XML desde un programa.
- Mantén el país y la provincia rellenos en Little Hotelier, con el [userscript de provincias](/tools/ui/easy-save-province-country) gratuito y las [comprobaciones automáticas](/tools/bot/automated-checks).
- Los [informes INE de Hotelier Tools](/tools/bot/ine-reports) generan, validan y envían el informe por IRIA y guardan los justificantes. Es gratis para todos los hoteles hasta el 10 de enero de 2027. Hotelier Tools es independiente y no está afiliado ni respaldado por SiteMinder, Little Hotelier ni el INE.

Para el registro de viajeros ante la policía y las reglas de otros países, lee [normas de registro de huéspedes por país](/blog/guest-registration-rules-by-country).
