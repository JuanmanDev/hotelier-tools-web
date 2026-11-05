---
title: "Cómo funcionan los agentes de IA de un hotel y por qué no actúan solos (respuestas a huéspedes, chat del equipo, MCP)"
seoTitle: "Cómo funcionan los agentes de IA en hoteles, con seguridad"
description: "Qué lee y hace cada agente de IA de un panel hotelero, cómo se verifican los mensajes de Booking.com y WhatsApp y por qué los cambios los aprueba alguien."
date: 2026-11-05
category: ai
tags: [ia, agentes de ia, seguridad, mensajes de huéspedes, aprobaciones, mcp, prompt injection]
keywords: [cómo funcionan los agentes de ia en hoteles, es segura la ia para mensajes de huéspedes, seguridad agente ia hotel, prompt injection chatbot hotel, asistente ia hotel con aprobación humana, puede la ia cambiar una reserva sola, verificar identidad huésped whatsapp hotel, responder mensajes booking.com con ia, permisos servidor mcp hotel]
feature: ai-assistant
demoPath: /messaging
cover: /images/blog/demo/es/how-ai-agents-booking-thread-verified.webp
coverAlt: "Bandeja de huéspedes de Hotelier Tools filtrada por Booking.com con la pregunta en francés de Ingrid Larsen sobre el parking: Identidad verificada y el remitente coincide con la reserva en su estancia de 24 noches con 759,55 € pendientes, un borrador de la IA en francés marcado como no enviado y un Plan de la IA en borrador cuya línea Acceso dice que solo puede leer la reserva 71020550 y que cada cambio espera tu aprobación"
featured: true
faq:
  - q: "¿Puede un agente de IA de un hotel cambiar una reserva por su cuenta?"
    a: "En Hotelier Tools, no por defecto. El chat del panel, el asistente de la bandeja y el asistente para empleados convierten cada cambio en una tarjeta que aprueba una persona. La IA de respuestas a huéspedes no tiene herramientas; solo un canal en modo Autónomo le deja añadir una nota o una hora de llegada a la única reserva verificada."
  - q: "¿Cómo sabe la IA que un mensaje es de verdad de ese huésped?"
    a: "Solo cuenta el remitente, nunca el texto del mensaje. Booking.com archiva cada hilo bajo su reserva, un número de WhatsApp debe coincidir con la reserva al menos en sus 8 últimas cifras, un email debe coincidir exactamente y un hilo de Expedia debe indicar su referencia EXP-. Si coinciden dos huéspedes, no se muestra ninguna reserva."
  - q: "¿Puede un huésped engañar a la IA con un mensaje como «ignora tus reglas»?"
    a: "Puede intentarlo. El modelo que responde a huéspedes no tiene herramientas que usar mal, se le indica que el mensaje es texto no fiable, solo puede devolver un plan con cuatro acciones que no llevan ningún identificador de reserva, y su respuesta se revisa en busca de referencias de otras reservas antes de enviar nada."
  - q: "¿Tiene límites lo que puede consultar el chat de IA?"
    a: "Solo los de tu rol. El chat puede leer todo lo que tu rol permite en la cuenta, con hasta ocho pasos de herramientas por pregunta. Lo que no puede es cambiar nada sin tu clic, ponerse en marcha sin que nadie le pregunte ni programarse a sí mismo."
  - q: "¿Claude o ChatGPT reciben las mismas tarjetas de aprobación?"
    a: "No. Las apps externas conectadas por MCP pasan la misma comprobación de rol, pero una escritura se ejecuta cuando la app la llama, así que la confirmación de la propia app es tu único control. Los reembolsos, el envío de facturas por email, la encuesta del INE y las respuestas a huéspedes están bloqueados para ellas."
  - q: "¿Forma Hotelier Tools parte de Booking.com, WhatsApp o Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder ni Little Hotelier, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel."
---

Un agente de IA de un hotel es un modelo de lenguaje conectado a tus datos de reservas, y solo es tan seguro como dos cosas: lo que se le permite leer y quién pulsa el botón cuando algo cambia. En Hotelier Tools hay varios agentes con distintos niveles de confianza. El que lee los mensajes de los huéspedes no tiene ninguna herramienta. Los que usa tu equipo pueden consultar cualquier cosa dentro del rol de cada persona, pero **cada cambio espera el clic de una persona**, y ninguno se pone en marcha por su cuenta.

Esta guía explica cómo funciona cada agente, cómo se asocia un mensaje de Booking.com, WhatsApp, Expedia o email a una sola reserva y qué impide que el texto de un huésped dirija a la IA. Para lo que el asistente puede hacer en el día a día, lee [el asistente de IA para la recepción de un hotel pequeño](/blog/ai-assistant-hotel-front-desk). Los datos de terceros se han contrastado a fecha de noviembre de 2026.

## ¿Qué debería poder hacer cualquier agente de IA de un hotel?

Dos referencias públicas sirven para medir a cualquier proveedor. OWASP sitúa la inyección de instrucciones (prompt injection) como el primer riesgo de las aplicaciones de IA y aconseja «restringir los privilegios de acceso del modelo al mínimo necesario», con una persona que apruebe las acciones con privilegios ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), en inglés). El Model Context Protocol, que Claude y ChatGPT usan para llamar a herramientas externas, dice que «siempre DEBERÍA haber una persona en el circuito con la capacidad de denegar llamadas a herramientas» ([especificación de herramientas de MCP](https://modelcontextprotocol.io/specification/2025-06-18/server/tools), en inglés).

Así que hazle cuatro preguntas a cualquier IA para hoteles: ¿quién ha escrito el texto que lee? ¿Qué puede tocar? ¿Quién aprueba un cambio? ¿Se pone en marcha alguna vez sin que nadie se lo pida?

## Los agentes de Hotelier Tools y sus niveles de confianza

Una tabla decide dónde puede usarse cada herramienta, y una herramienta que nadie ha clasificado se trata como una escritura. Una segunda comprobación mira si **el rol de esa persona** puede usarla, en el momento en que se ejecuta.

| Agente | Con quién habla | Qué puede leer | Qué puede cambiar | Quién aprueba |
|---|---|---|---|---|
| **IA de respuestas a huéspedes** (Bandeja, alfa) | Huéspedes en WhatsApp, email, Booking.com y Expedia | Una reserva verificada, tu FAQ, las notas de la casa y la ficha del alojamiento | Nada directamente. Devuelve un plan con 4 acciones posibles | Tú, en la bandeja (o un modo de canal muy limitado) |
| **Chat IA** (`/chat`, beta) | Tú y tu equipo, en el panel | Todo lo que permite tu rol | Lo que permite tu rol, como tarjeta | Quien preguntó, con un clic en la tarjeta |
| **Asistente de la bandeja** (panel junto a una conversación) | Tú, sobre la conversación abierta | La reserva, los precios de tu motor de reservas y los datos del alojamiento | Propuestas en tarjetas; nunca escribe al huésped | Cualquier compañero cuyo rol lo cubra |
| **Asistente para empleados** (`/staff`) | Empleados por WhatsApp o email | Reservas, disponibilidad, precios, facturas, comprobaciones | Solo con **Puede pedir cambios**, en cola | El propietario, en `/staff` |
| **Apps de IA externas** (Claude, ChatGPT, por MCP) | Tú, en esa app | Lo que permite tu rol | Las escrituras se ejecutan cuando la app las llama; nada irreversible | Tú, en la confirmación de la propia app |
| **Agentes del navegador** (WebMCP) | Tú, en tu navegador | Solo lectura | Nada; las propuestas abren el formulario de la app ya relleno | Tú pulsas el botón en la página |

**Las tareas programadas no son agentes de IA.** La factura a la salida, las comprobaciones automáticas y el piloto automático de precios son código normal con un horario. Dos procesos en segundo plano usan un modelo solo para convertir texto en datos (los campos de una factura de proveedor, los eventos locales para los precios), sin herramientas y sin forma de escribir a nadie ni de tocar una reserva.

## Cómo se convierte un mensaje de un huésped en una respuesta

| Paso | Qué ocurre | ¿Modelo? |
|---|---|---|
| 1. Llega | Un webhook (WhatsApp) o una lectura periódica (email, Booking.com, Expedia) guarda el mensaje | No |
| 2. Clasificación | Solo email: los boletines, los proveedores y las posibles estafas se quedan aquí | No |
| 3. Identidad | El remitente se asocia con una reserva, o con ninguna, y la decisión queda registrada | No |
| 4. Espera | 5 minutos en WhatsApp, una hora en el email. ¿Ya contestado? No se analiza ni se cobra nada | No |
| 5. Plan | Tras comprobar los créditos, el modelo lee el contexto acotado y devuelve una respuesta y unas acciones, como datos | **Sí, una vez** |
| 6. Comprobaciones | Las acciones se validan contra la lista cerrada; el filtro de respuestas revisa el texto | No |
| 7. Decisión | Aprueba una persona, o el modo del canal lo permite tras un retraso | No |
| 8. Ejecución | Se ejecuta el plan guardado; el filtro revisa otra vez el texto antes de enviarlo | No |

El modelo aparece una sola vez, y lo que produce es solo una propuesta. Todo lo que lo rodea es código normal.

::screenshot{src="/images/blog/demo/es/how-ai-agents-booking-thread-verified.webp" alt="Bandeja de huéspedes filtrada por Booking.com con la conversación de Ingrid Larsen abierta: la etiqueta Identidad verificada, su estancia del 24 de octubre al 17 de noviembre marcada Checked-in y el remitente coincide con la reserva, con 759,55 € pendientes, un Borrador de la IA (no enviado) en francés sobre el parking, y el Plan de la IA en borrador (parking, 91 %) cuya línea Acceso dice Identidad verificada, puede leer la reserva 71020550, cada cambio espera tu aprobación, con la respuesta editable, la acción send_message y el botón Enviar" caption="El plan dice qué se le ha dejado ver a la IA: una reserva verificada. En modo Borrador no sale nada hasta que lo apruebas." path="/messaging"}
::

## De dónde vienen los mensajes de los huéspedes y por qué importa el origen

Un mensaje solo lleva lo que el propio canal garantiza. Hotelier Tools se fía del **remitente**, nunca de lo que el mensaje dice de sí mismo.

| Canal | Cómo llega a la bandeja | Qué lo asocia a una reserva |
|---|---|---|
| **Booking.com** | Se lee con tu propia sesión de la extranet (tu acceso y su segundo factor) | Booking.com archiva el hilo bajo su reserva, así que cuenta como verificado |
| **Expedia** (beta) | Se lee con tu propia sesión de Partner Central; solo la lista de conversaciones y el último mensaje | Solo la referencia `EXP-` que indica el hilo. Nunca se usa el nombre de un huésped |
| **WhatsApp** | WAHA, una sesión de WhatsApp Web en el número del propio hotel, que envía a un webhook con un token secreto por canal | El número coincide con el teléfono de la reserva al menos en sus 8 últimas cifras |
| **Email** | Tu buzón, con inicio de sesión de Google o Microsoft (OAuth) o por IMAP | La dirección exacta. Sin coincidencias parciales ni puntos ignorados |

El email tiene una capa más. Los resultados SPF, DKIM y DMARC de cada mensaje (las comprobaciones que usan los proveedores de correo para detectar remitentes falsificados, mira las [directrices para remitentes de Gmail](https://support.google.com/a/answer/81126)) alimentan una **puntuación de estafa** junto con otras señales, como enlaces para compartir archivos o un reembolso de una estancia que nadie encuentra. Con un 75 % o más, el correo pasa a una persona y la IA no redacta nada. Más en [cómo detectar mensajes de estafa](/blog/hotel-scam-messages).

La bandeja muestra el resultado de identidad en cada conversación:

- **Identidad verificada**: ha coincidido exactamente un huésped, así que la IA puede ver esa reserva (si el huésped repite, una estancia: la actual, una reciente o la próxima).
- **Ambiguo — rechazado**: han coincidido dos huéspedes distintos, así que no se muestra ninguna reserva y te encargas tú.
- **Sin reserva coincidente**: la IA responde preguntas generales con tu FAQ y nunca confirma ni niega que exista una reserva.
- **Sin comprobar**: todavía no se ha establecido la identidad.

Una pregunta pública en tu ficha de Booking.com no tiene ninguna reserva detrás, así que se responde solo con los datos del alojamiento.

## Qué lee la IA para responder y qué no ve nunca

| La IA de respuestas a huéspedes lee | No ve nunca |
|---|---|
| La **única** reserva verificada: referencia, fechas, habitación, huéspedes, estado, total, importe pendiente, hora de llegada, notas internas | Ningún otro huésped ni ninguna otra reserva |
| Tus fuentes de **FAQ y conocimiento** (solo las que hayas marcado) | Tus accesos, tus claves de API ni números de tarjeta |
| Las notas de la casa y la ficha del alojamiento de **Ajustes > Alojamiento y conocimiento de la IA** | Little Hotelier. No puede consultar nada |
| Los ejemplos corregidos y las reglas de **Entrenar la IA** | Datos de reservas cuando el remitente no está verificado |
| La memoria de respuestas: respuestas parecidas que envió tu equipo, sin nombres, fechas, referencias ni contactos | |

Los fragmentos de la FAQ, los ejemplos de entrenamiento y la memoria de respuestas van marcados en las instrucciones como datos citados, nunca como órdenes. Los precios en tiempo real salen de tu motor de reservas público a través del **asistente de la bandeja**, del lado del personal, y se marca cualquier precio que no haya salido de una consulta.

## ¿Qué impide que el mensaje de un huésped dirija a la IA?

El mensaje de un huésped lo escribe un desconocido, así que el sistema da por hecho que puede ser hostil:

1. **Sin herramientas.** El modelo que responde a huéspedes no tiene nada a lo que llamar. Un «consulta la reserva 999» inyectado no tiene adónde ir.
2. **Datos, no órdenes.** Las instrucciones dicen que el mensaje del huésped es texto no fiable. Si pide ignorar las reglas, cambiar de papel, revelar el texto del sistema o actuar sobre otra reserva, el modelo debe negarse y avisar al personal.
3. **Una lista cerrada.** La respuesta debe ajustarse a un esquema fijo: como mucho cuatro acciones entre **enviar un mensaje**, **avisar al personal**, **añadir una nota a la reserva** y **fijar la hora de llegada**. Todo lo demás se descarta y se informa.
4. **Sin identificador de reserva en las acciones.** El servidor aplica una nota o una hora de llegada a la reserva asociada a la conversación, así que un cambio no se puede dirigir a otra.
5. **El filtro de respuestas.** Antes de que salga una respuesta, y otra vez después de que alguien la edite, se revisa el texto. La referencia de otra reserva, o cualquier número largo cuando el remitente no está verificado, bloquea el envío y pasa el hilo a una persona. Si la reserva de la conversación ha cambiado mientras un plan esperaba, el plan se rechaza.
6. **Límites por canal.** **Borrador — lo apruebo todo yo** es el modo por defecto. La IA nunca envía en Booking.com, sea cual sea el modo; Expedia solo ofrece Desactivado y Borrador. Incluso **Autónomo — responde Y cambia reservas** solo puede añadir una nota o una hora de llegada a la reserva verificada, y las respuestas sin supervisión se detienen a las 4 por hora, a las 12 al día o tras 3 seguidas sin respuesta.
7. **La aprobación se ejecuta sin el modelo.** Aprobar ejecuta exactamente el plan guardado. La IA no tiene un segundo turno para reescribirlo.

::screenshot{src="/images/blog/demo/es/how-ai-agents-booking-channel-send-by-hand.webp" alt="Página Canales con la tarjeta Booking.com messages marcada Activo: un aviso Recoge mensajes — las respuestas se envían a mano que dice que las respuestas automáticas no se envían por Booking.com y que una respuesta solo sale cuando una persona pulsa Enviar en la bandeja, el ajuste Cuando escribe un huésped en Borrador — lo apruebo todo yo, Tiempos retenido 5 min y, debajo, Expedia Partner Central messages aún no está conectado" caption="Booking.com es un canal que la IA puede leer y para el que puede redactar, pero solo el Enviar de una persona publica la respuesta." path="/messaging/channels"}
::

## El chat de IA: sin límites para consultar, sin autonomía

El **Chat IA** (`/chat`, beta) está hecho al revés que la IA de huéspedes: escribe una persona de confianza, así que tiene todas las herramientas que permite **tu rol**. Pregunta por cualquier reserva, factura, precio, comprobación, informe o la lista de espera, en toda la cuenta, con hasta ocho pasos de herramientas por pregunta.

Lo que no puede es actuar por su cuenta:

- **Cada cambio es una tarjeta.** Una escritura se intercepta antes de ejecutarse y se muestra con **Aprobar** o **Rechazar** y los valores exactos. Las acciones irreversibles (un reembolso, enviar una factura por email, enviar la encuesta del INE, enviar una respuesta a un huésped) solo son posibles aquí, detrás de su tarjeta.
- **El clic se ejecuta sin el modelo.** Aprobar ejecuta la llamada guardada, no una nueva petición a la IA.
- **La aprobación es solo tuya.** Cada tarjeta es un permiso de un solo uso para esa herramienta, esos valores, ese chat y la persona a la que se le mostró, y caduca a las 24 horas. Un doble clic o una tarjeta copiada se rechazan.
- **Tu rol acompaña a cada llamada.** Cada llamada a una herramienta lleva una declaración firmada de quién preguntó, válida 15 minutos, así que se ejecuta con tus permisos, no con los del propietario. Si se suspende a un compañero a mitad de respuesta, el siguiente paso se rechaza.
- **Nunca se pone en marcha solo.** El modelo solo se ejecuta cuando alguien envía un mensaje. No puede despertarse más tarde ni programarse. Puede *proponer* crear una tarea programada o cambiar su horario, como tarjeta, y esa tarea ejecuta después código fijo, no la IA.

::screenshot{src="/images/blog/demo/es/embed-card-change-approval.webp" alt="Tarjeta Approve these changes? marcada Nothing written yet: coincidencia completa con el remitente de WhatsApp, una tabla de evidencias con columnas Little Hotelier, WhatsApp sender y message text, los nuevos valores de Company y Tax ID con las etiquetas New y Claim, una casilla Also invoice this reservation automatically at checkout y los botones Reject y Approve and apply" caption="Un cambio en una reserva muestra de dónde sale cada valor. Un valor que solo aparece escrito en el mensaje es una afirmación, no una prueba." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

Los roles se definen en **Equipo y roles** (`/settings/team`). Un acceso de recepción que le pide un reembolso al chat recibe una negativa, con tarjeta o sin ella.

## El asistente para empleados y las apps de IA externas

**Asistente para empleados** (`/staff`). Un empleado escribe al número de WhatsApp o al buzón del hotel y se le responde como a un miembro del equipo. La identidad es el remitente: el número registrado, o la dirección exacta con un correo que pase DKIM o DMARC (SPF solo no basta). Los empleados con **Solo consulta** solo pueden preguntar. Con **Puede pedir cambios**, cada escritura se convierte en una solicitud que el propietario aprueba con **Aprobar y ejecutar**, que ejecuta esa llamada exacta una vez.

::screenshot{src="/images/blog/demo/es/staff-assistant.webp" alt="Página Asistente para empleados con un cambio pendiente de aprobación, una solicitud invoice_on_leave_add de Lucía (recepción) con los botones Rechazar y Aprobar y ejecutar, dos empleados marcados Puede pedir cambios y Solo consulta, y los mensajes recientes de WhatsApp" caption="La solicitud de un empleado llega con la herramienta y los valores exactos, y solo se ejecuta cuando la aprueba el propietario." path="/staff"}
::

**Claude, ChatGPT y otras apps con MCP** inician sesión con OAuth para un alojamiento que eliges tú y pasan la misma comprobación de rol. Fuera del panel no hay una segunda tarjeta: una escritura se ejecuta cuando la app la llama, así que deja activada la confirmación de la propia app. Las acciones irreversibles y las respuestas a huéspedes están bloqueadas. Mira [cómo conectar Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier).

**Los agentes del navegador (WebMCP)**, un estándar web incipiente que todavía es un [borrador de la comunidad](https://webmachinelearning.github.io/webmcp/) (en inglés), solo tienen lectura. Un reembolso o una respuesta a un huésped solo se pueden *proponer*: se abre el formulario de la propia app ya relleno y tú pulsas el botón. En las páginas que ven los huéspedes, las herramientas se retiran.

## Registros, costes y límites sin rodeos

**Qué queda registrado.** Cada decisión de identidad con su motivo, también los rechazos. Cada cambio en una reserva aplicado, denegado o rechazado, con las evidencias revisadas. La actividad del equipo (invitaciones, roles, contactos de empleados). Cada cargo de IA en **Créditos de IA** (`/messaging/credits`). Sin créditos no se ejecuta ningún análisis.

**Lo que no está hecho, o no está terminado:**

- La Bandeja está en **alfa**, el Chat IA en **beta** y los mensajes de Expedia en **beta** (solo la lista y el último mensaje; respondes en Partner Central).
- WhatsApp funciona con WAHA, no con la API oficial de Meta, así que un número podría ser bloqueado. Mira [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).
- Desde el 28 de septiembre de 2026, Booking.com ya no envía los teléfonos de los huéspedes a los channel managers, así que un WhatsApp de un huésped de Booking.com puede aparecer como **Sin reserva coincidente**.
- La IA de huéspedes no puede cancelar, cambiar fechas ni cobrar, en ningún modo.

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::demo-cta{path="/messaging"}
::

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder ni Little Hotelier, ni cuenta con su respaldo. Se conecta con los accesos de tu propio hotel a Little Hotelier, Booking.com y Expedia.
::

Guías relacionadas: [responder a los mensajes de huéspedes con IA](/blog/ai-replies-guest-messages), [el asistente de IA para recepción](/blog/ai-assistant-hotel-front-desk), [qué es un servidor MCP](/blog/what-is-mcp-server-hotels).

## Resumen

- La IA de respuestas a huéspedes no tiene herramientas: lee una reserva verificada y tus propios datos, y devuelve un plan con cuatro acciones posibles.
- Un mensaje se asocia a una reserva por su remitente (hilo de Booking.com, 8 o más cifras del teléfono, email exacto, referencia `EXP-`), nunca por su texto. Si coinciden dos, no hay reserva.
- El texto del huésped son datos, no órdenes; un filtro de respuestas bloquea las referencias de otros huéspedes, y la IA nunca envía en Booking.com.
- El Chat IA puede consultar todo lo que permite tu rol, pero cada cambio es una tarjeta de un solo uso firmada a tu nombre, que se ejecuta sin el modelo, y nunca se pone en marcha solo.
- Los empleados, Claude o ChatGPT y los agentes del navegador pasan la misma comprobación de rol, cada uno con su propio paso de aprobación.
