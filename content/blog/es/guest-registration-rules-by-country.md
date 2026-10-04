---
title: "Parte de viajeros y registro de huéspedes por países (2026): España (SES.Hospedajes), Italia, Portugal, Alemania, Francia, Brasil, Tailandia e Indonesia"
seoTitle: "Parte de viajeros y registro de huéspedes por países (2026)"
description: "Qué huéspedes registrar, con qué datos, en qué plazo y dónde: España, Italia, Portugal, Alemania, Francia, Brasil, Tailandia, Indonesia. Enlaces oficiales."
date: 2026-10-03
category: compliance
tags: [guest registration, compliance, id, police, little hotelier]
keywords: [parte de viajeros ses hospedajes, es legal pedir dni hotel, registro de viajeros hoteles, por qué piden el pasaporte en un hotel, alloggiati web, meldeschein hotel, fiche de police hôtel, siba alojamento local]
demoPath: /
cover: /images/blog/demo/es/automated-checks-moment-on-arrival.webp
coverAlt: "Comprobaciones A la llegada en Hotelier Tools: DNI / Pasaporte (Registro policial), asignación de habitación física y validación de dirección y procedencia activadas, con lo que cada comprobación puede y no puede hacer"
faq:
  - q: "¿Por qué piden el pasaporte en el check-in de un hotel?"
    a: "Porque la ley de muchos países lo exige. España, Italia y Brasil registran a todos los huéspedes, y Portugal, Francia, Alemania, Tailandia e Indonesia registran a los huéspedes extranjeros, normalmente anotando los datos del pasaporte o del documento de identidad y enviándolos a la policía o a inmigración en horas o días."
  - q: "¿Cuentan los ciudadanos de la UE como huéspedes extranjeros?"
    a: "Sí, cuando la norma habla de extranjeros. El SIBA de Portugal y la fiche de police de Francia incluyen expresamente a otros nacionales de la UE, y el formulario de registro de Alemania se aplica ahora a todo huésped que no sea ciudadano alemán."
  - q: "¿Puede un hotel quedarse una copia de mi pasaporte?"
    a: "Depende del país y de la ley de protección de datos. La mayoría de las normas de registro piden al hotel que compruebe el documento y anote sus datos, no que guarde una copia. En España, la agencia de protección de datos dice que, en general, no hace falta una copia del DNI. Pregunta al hotel por qué guarda una copia y durante cuánto tiempo."
  - q: "¿Puede mi PMS enviar los registros automáticamente?"
    a: "A menudo, sí. España, Italia, Portugal y Brasil aceptan datos de programas a través de servicios web. El envío automático a las autoridades (Automated compliance reporting) de Guest Engagement, en Little Hotelier, cubre Italia, España, Portugal, Alemania, Suiza, Austria, Croacia, la República Checa y Colombia, y apps de partners como Chekin cubren más países."
  - q: "¿Hay que registrar a los niños?"
    a: "Normalmente sí, pero los detalles varían. España registra a los menores con los datos que aporta el adulto y exige indicar el parentesco; Francia permite que los menores de 15 años figuren en la ficha de un adulto; Alemania solo cuenta a los niños acompañantes; Brasil vincula a los menores al registro de uno de los padres."
  - q: "¿Envía Hotelier Tools datos de huéspedes a la policía?"
    a: "No. Hotelier Tools no envía registros a ninguna autoridad. Señala las reservas a las que les falta el documento de identidad o la dirección para que las completes a tiempo. Es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo."
---

Muchos países obligan a los alojamientos a anotar la identidad de sus huéspedes y a comunicarla a la policía o a inmigración. España, Italia y Brasil registran a **todos** los huéspedes; Portugal, Francia, Alemania (desde 2025), Tailandia e Indonesia registran a los huéspedes **extranjeros**. Los plazos van de 6 horas (estancias cortas en Italia) a 3 días hábiles (Portugal). Abajo tienes la norma de cada país con enlaces oficiales y después cómo recoger los documentos de identidad en Little Hotelier.

::callout{type="warning" title="No es asesoramiento jurídico: consulta a tu autoridad local"}
Resumen actualizado a octubre de 2026 y contrastado con las fuentes oficiales enlazadas en cada sección. Las normas cambian y las regiones o los municipios pueden añadir las suyas (formularios de tasa turística, policía autonómica). Confírmalo con la policía de tu zona, la oficina de inmigración o tu asesor antes de basarte en él.
::

| País | Sistema | Quién se registra | Plazo |
|---|---|---|---|
| España | SES.Hospedajes | Todos los huéspedes | 24 h tras la reserva y tras el check-in |
| Italia | Alloggiati Web | Todos los huéspedes | 24 h tras la llegada (6 h en estancias de hasta 24 h) |
| Portugal | SIBA | Huéspedes extranjeros, incl. UE | 3 días hábiles tras la llegada y tras la salida |
| Alemania | Meldeschein | Huéspedes extranjeros | Firmado a la llegada |
| Francia | Fiche individuelle de police | Huéspedes no franceses, incl. UE | A la llegada; se presenta si la policía la pide |
| Brasil | FNRH Digital | Todos los huéspedes | En el check-in |
| Tailandia | TM30 | Huéspedes extranjeros | 24 h |
| Indonesia | APOA | Huéspedes extranjeros | 24 h |

## España: parte de viajeros en SES.Hospedajes

- **Quién:** todos los huéspedes, en hoteles, hostales, pensiones, casas rurales, campings y viviendas de uso turístico, según el [Real Decreto 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461). Cataluña comunica a los Mossos d'Esquadra y el País Vasco, a la Ertzaintza.
- **Qué:** nombres, sexo, tipo y número de documento con su número de soporte, nacionalidad, fecha de nacimiento, domicilio, teléfono y email, el parentesco entre los viajeros cuando alguno es menor, además de los datos de la reserva y del pago.
- **Plazo:** en las 24 horas siguientes a la reserva o a su cancelación, y en las 24 horas siguientes al check-in. Conserva los registros 3 años.
- **Cómo:** el formulario web de [SES.Hospedajes](https://sede.interior.gob.es/portal/sede/informacion_hospedajes), la subida de un fichero XML o un servicio web desde tu programa de gestión.

Guía completa: [SES.Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier).

¿Es legal pedir el DNI en un hotel? Sí: registrar a los viajeros es una obligación legal. Lo que en general no hace falta es quedarse una fotocopia: según la Agencia Española de Protección de Datos (AEPD), normalmente no se necesita una copia del DNI. Lo explicamos, con la fuente, en la guía completa.

## Italia: Alloggiati Web

- **Quién:** todos los huéspedes, italianos incluidos, en hoteles y en cualquier otro alojamiento, incluidos los alquileres cortos de menos de 30 días (art. 109 TULPS, [texto de la Polizia di Stato](https://questure.poliziadistato.it/statics/43/art.-109-tulps.pdf?lang=it)).
- **Qué:** del huésped principal, apellido, nombre, sexo, fecha y lugar de nacimiento, ciudadanía, y tipo, número y lugar de expedición del documento de identidad, además de la fecha de llegada y la duración de la estancia. De los familiares o miembros del grupo se piden los datos personales, pero no los del documento ([manual de usuario](https://questure.poliziadistato.it/statics/13/manualeutente_alloggiatiweb.pdf?lang=it)).
- **Plazo:** en las 24 horas siguientes a la llegada, o en las **6 horas** siguientes para estancias de hasta 24 horas.
- **Cómo:** solo a través del [portal Alloggiati Web](https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/): introducción manual, subida de fichero o servicio web. El acceso se solicita a la Questura de tu zona. Guarda los justificantes diarios.
- **Self check-in:** la circular del Ministerio del Interior de noviembre de 2024 exige identificar a los huéspedes en persona y prohíbe el check-in mediante cajetín de llaves. El TAR del Lazio la anuló en mayo de 2025, pero el Consiglio di Stato revocó esa sentencia el 21 de noviembre de 2025 ([sentencia 9101/2025](https://mdp.giustizia-amministrativa.it/visualizza/?nodeRef=&schema=cds&nrg=202505732&nomeFile=202509101_11.xml&subDir=Provvedimenti)), así que la circular vuelve a aplicarse. El tribunal mencionó que la identificación por videollamada podría ser aceptable.

El envío de estadísticas al ISTAT o a tu región (por ejemplo, Ross1000) es una obligación aparte.

## Portugal: SIBA (boletim de alojamento de estrangeiros)

- **Quién:** todo huésped extranjero, «incluidos los nacionales de otros Estados miembros de la Unión Europea», en hoteles, alojamientos locales (*alojamento local*) y cualquiera que ofrezca alojamiento de pago (Lei 23/2007, artículos 15 y 16).
- **Qué:** nombre completo, nacionalidad, fecha de nacimiento, tipo y número de documento, país de expedición, país de residencia y fechas de entrada y salida. El lugar de nacimiento y de residencia son opcionales ([preguntas técnicas del SIBA](https://siba.ssi.gov.pt/en/ajuda/perguntas-tecnicas/)).
- **Plazo:** en los **3 días hábiles** siguientes a la llegada, y de nuevo en los 3 días hábiles siguientes a la salida.
- **Cómo:** en el [SIBA](https://siba.ssi.gov.pt/), que ahora gestiona la unidad de coordinación del Sistema de Seguridad Interna (UCFE) tras la disolución del SEF en 2023. Usa el formulario en línea, la subida de un fichero o servicios web ([opciones de envío](https://siba.ssi.gov.pt/en/ajuda/modos-de-envio/)). Algunas páginas del SIBA aún mencionan al SEF. Conserva los boletines 1 año.
- **Multas:** de 100 a 500 € por 1 a 10 huéspedes no comunicados, que suben a 400–2.000 € con más de 50 huéspedes (artículo 203, [Lei 23/2007](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis)).

## Alemania: Meldeschein

- **Quién:** desde el **1 de enero de 2025**, solo los huéspedes **extranjeros**. La cuarta ley de reducción de burocracia (BEG IV) eliminó la obligación para los ciudadanos alemanes ([Boletín Oficial Federal 2024 I n.º 323](https://www.recht.bund.de/bgbl/1/2024/323/regelungstext.pdf?__blob=publicationFile&v=3)). Los cónyuges, parejas e hijos menores extranjeros acompañantes solo se cuentan. En grupos de más de 10 personas, firma el guía del grupo.
- **Qué:** fechas de llegada y de salida prevista, apellido, nombres, fecha de nacimiento, nacionalidades, dirección, número y nacionalidad de los acompañantes extranjeros y el número de serie del pasaporte. Debes cotejar el formulario con el documento de identidad ([§ 30 BMG](https://www.gesetze-im-internet.de/bmg/__30.html)).
- **Plazo:** el huésped firma a mano el día de la llegada ([§ 29 BMG](https://www.gesetze-im-internet.de/bmg/__29.html)). Conserva los formularios 1 año tras la salida, destrúyelos en los 3 meses siguientes y muéstralos a las autoridades si los piden.
- **Cómo:** en papel, o en formato digital con el consentimiento del huésped: un pago con tarjeta con autenticación reforzada, la función de identificación electrónica o un procedimiento piloto aprobado.
- **Multas:** hasta 1.000 €.

La normativa de cada estado federado puede añadir campos para la tasa turística o de balneario, así que puede seguir aplicándose un formulario local a los huéspedes alemanes.

## Francia: fiche individuelle de police

- **Quién:** todo huésped que no sea francés, «incluidos» los nacionales de la UE, en hoteles, pueblos de vacaciones, residencias de turismo, alojamientos turísticos amueblados, *chambres d'hôtes* y campings ([Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33458)).
- **Qué:** apellido y nombres, fecha y lugar de nacimiento, nacionalidad, domicilio habitual, móvil y email, y fechas de llegada y de salida prevista. Los menores de 15 años pueden ir en la ficha de un adulto acompañante (CESEDA artículo R814-2, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042803266/)).
- **Plazo:** se rellena a la llegada. Conserva las fichas **6 meses**.
- **Cómo:** no existe un envío en línea periódico. Entregas las fichas a la policía o a la gendarmería cuando las piden, en papel o en formato electrónico. El modelo de ficha lo fija la [orden de 1 de octubre de 2015](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031285813).

## Brasil: FNRH Digital

- **Quién:** todos los huéspedes, brasileños o extranjeros, en todo tipo de alojamiento. Cada huésped tiene su propio registro y los menores se vinculan al de uno de los padres ([Portaria MTur 41/2025](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2025/portaria-mtur-no-41-de-14-de-novembro-de-2025)). El establecimiento necesita un registro Cadastur activo.
- **Qué:** nombre, fecha de nacimiento, nacionalidad, sexo, documento de identidad, CPF o pasaporte, teléfono, email, domicilio, motivo del viaje, origen y próximo destino, transporte y los datos de la reserva y de la estancia.
- **Cuándo:** obligatorio desde el **20 de abril de 2026**, tras una prórroga mediante la [Portaria MTur 4/2026](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2026/portaria-mtur-no-4-de-18-de-fevereiro-de-2026). Los datos se confirman en el check-in con el huésped presente, y el check-out también se registra.
- **Cómo:** el [módulo web FNRH](https://fnrh.turismo.serpro.gov.br/FNRH_SRH/Login) gratuito o tu PMS mediante la API del Ministerio. Mira las [preguntas frecuentes oficiales](https://www.gov.br/turismo/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/ficha-nacional-de-registro-de-hospedes/faq).

## Tailandia: TM30

- **Quién:** los gerentes de hotel, y cualquier propietario o responsable de la vivienda (house-master), deben comunicar la estancia de los extranjeros que se alojan con ellos (Immigration Act B.E. 2522, artículo 38).
- **Qué:** el formulario TM.30 con los datos del pasaporte del huésped.
- **Plazo:** en las **24 horas** siguientes a la llegada del extranjero.
- **Cómo:** en la oficina de inmigración local (o en la policía donde no la haya), por correo certificado o en línea tras registrarte en la web de la Oficina de Inmigración. Fuente: el [manual público](http://web.archive.org/web/20240612020418/https://www.immigration.go.th/wp-content/uploads/2023/01/16-Public-Handbook-Notification-of-Residence-for-a-house-master-owner-or-possessor-of-residence-or-hotel-manager.pdf) de la Oficina (copia archivada).
- **Multas:** hasta 2.000 THB, y de 2.000 a 10.000 THB para gerentes de hotel (artículo 77).

La web de la Oficina de Inmigración no se pudo cargar desde Europa en octubre de 2026, así que confirma el sistema en línea vigente con tu oficina de inmigración local.

## Indonesia: APOA

- **Quién:** hoteles, apartamentos, casas de huéspedes, villas, *losmen*, pensiones (*kos*), casas de alquiler y otros alojamientos comerciales, además de particulares que alojan a extranjeros ([oficina regional de Bali](http://web.archive.org/web/20240302132213/https://bali.kemenkumham.go.id/layanan-publik/keimigrasian/apoa), copia archivada).
- **Qué:** el pasaporte del huésped extranjero y los datos de su estancia, y más tarde el check-out ([oficina de inmigración de Yogyakarta, 2025](https://jogja.imigrasi.go.id/pengelola-penginapan-wajib-laporkan-keberadaan-tamu-asing-lewat-apoa/)).
- **Plazo:** en **1 x 24 horas** desde que el extranjero empieza a alojarse, según las instrucciones de la Dirección General de Inmigración que cita la oficina de Bali.
- **Cómo:** la app móvil de APOA o la [web de APOA](https://apoa.imigrasi.go.id).
- **Multas:** hasta tres meses de detención o una multa de hasta 25 millones de rupias según la Ley de Inmigración (Ley 6/2011, modificada en 2024).

## Cómo recoger los documentos de identidad de los huéspedes en Little Hotelier

La reserva de Little Hotelier tiene una pestaña **Huéspedes** (Guests) con un formulario para cada huésped. Además del nombre, el email y el teléfono, tiene sexo, segundo apellido y, al desplegar la flecha, el tipo de documento de identidad, el número, la nacionalidad, la fecha de expedición, la de caducidad, la fecha de nacimiento y una dirección completa con país, ciudad, provincia o estado y código postal ([editar una reserva](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)). Añade a los acompañantes como huéspedes adicionales.

::screenshot{src="/images/scripts/easy-save-province-country/from.png" alt="Pestaña Huéspedes de una reserva de Little Hotelier en español con nombre, apellidos, tipo de documento de identidad, número, nacionalidad, fechas de expedición y caducidad, fecha de nacimiento y campos de dirección" caption="La pestaña Huéspedes ya tiene los campos que piden la mayoría de las normas de registro (interfaz en español)."}
::

Tres formas de rellenarlos sin volver a teclear:

1. **El check-in online de Little Hotelier.** Con Guest Engagement, los huéspedes responden a un formulario de check-in antes de llegar y las respuestas pasan a la reserva. Su envío automático (Automated compliance reporting) comunica los datos a las autoridades de Italia, España, Portugal, Alemania, Suiza, Austria, Croacia, la República Checa y Colombia ([centro de ayuda de Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting), mayo de 2026).
2. **Un partner de check-in.** [Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) se conecta a través de la App Store y comunica a la policía en muchos países, entre ellos España, Italia, Portugal, Francia, Alemania y Tailandia. Si lo usas, el userscript gratuito [Conexión con Chekin](/tools/ui/show-chekin) muestra el registro de cada huésped dentro de la reserva de Little Hotelier.
3. **En recepción.** Para huéspedes españoles, el userscript gratuito [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country) convierte el campo de provincia en un desplegable de provincias españolas y rellena España como país al elegir una.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Pestaña Huéspedes de Little Hotelier con la lista de provincias españolas del userscript Guardado Fácil de Provincia y País abierta bajo el campo Provincia/Región" caption="Elige la provincia de una lista y el país se rellena solo."}
::

### Detecta los documentos que faltan antes del plazo

En varios países, enviar datos incompletos o fuera de plazo ya es una infracción; en España, por ejemplo, es leve y se multa desde 100 €. Las [comprobaciones automáticas](/tools/bot/automated-checks) de Hotelier Tools revisan cada reserva tras hacerse, a la llegada, durante la estancia y a la salida, y avisan si falta el documento de identidad o la dirección en una sola página, **Incidencias**, y en un email de informe. No envían nada a las autoridades. Mira el [checklist diario de recepción](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Resumen

- España, Italia y Brasil registran a todos los huéspedes; Portugal, Francia, Alemania, Tailandia e Indonesia registran a los huéspedes extranjeros, incluidos los ciudadanos de la UE cuando la norma dice «extranjeros».
- El plazo más corto es el de 6 horas de Italia para estancias de una noche; España, Tailandia e Indonesia dan 24 horas; Portugal, 3 días hábiles.
- Little Hotelier ya tiene los campos de identidad; el check-in online o una app de un partner pueden rellenarlos y enviarlos.
- Usa las [comprobaciones automáticas](/tools/bot/automated-checks) y los [userscripts](/tools/ui) gratuitos para mantener los datos completos. Hotelier Tools es gratis para todos los hoteles hasta el 10 de enero de 2027.
- España en profundidad: [SES.Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier) y [la encuesta de ocupación del INE](/blog/ine-hotel-occupancy-survey).
