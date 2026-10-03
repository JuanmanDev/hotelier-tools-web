---
title: "Recepcionista virtual para hoteles: qué puede hacer con seguridad (con aprobaciones)"
seoTitle: "Recepcionista virtual con IA para hoteles pequeños"
description: "Un asistente de IA consulta reservas, redacta respuestas y prepara cambios en un hotel pequeño. Qué puede hacer con seguridad y por qué apruebas cada cambio."
date: 2026-10-03
category: ai
tags: [ai, ai assistant, front desk, approvals, little hotelier]
keywords: [recepcionista virtual para hoteles, agente ia para hoteles, asistente ia recepción hotel, inteligencia artificial en hoteles ejemplos, ia para hostales, asistente de voz hotel]
feature: ai-assistant
demoPath: /chat
cover: /images/blog/demo/es/ai-chat-start.webp
coverAlt: "Pantalla de inicio del asistente de IA de Hotelier Tools con el aviso de que todo lo que modifica datos pide confirmación antes, preguntas sugeridas y el historial de chats a la izquierda"
faq:
  - q: "¿Puede un asistente de IA sustituir a un recepcionista?"
    a: "No. Quita de la mesa las consultas y los primeros borradores: quién llega, quién debe dinero, qué contestar. Las decisiones sobre dinero, reservas y huéspedes difíciles las toma una persona, que aprueba cada cambio."
  - q: "¿Puede la IA cancelar una reserva o hacer un reembolso por su cuenta?"
    a: "No en el chat del panel. Cada cambio muestra antes una tarjeta para aprobar o rechazar, y los reembolsos son una acción irreversible aparte que siempre necesita tarjeta. La IA que habla con los huéspedes no puede cancelar, cambiar fechas ni tocar pagos."
  - q: "¿Entiende el asistente de voz otros idiomas además del español?"
    a: "Por ahora está pensado para español. El botón del micrófono usa el reconocimiento de voz de tu navegador configurado en español (es-ES), y tu navegador debe admitirlo. Siempre puedes escribir en cualquier idioma."
  - q: "¿Responderá la IA sola a mis huéspedes de Booking.com?"
    a: "No. Los mensajes de Booking.com y las preguntas de los huéspedes llegan a la misma bandeja, pero el envío automático con IA a Booking.com no está permitido nunca. Decide una persona."
  - q: "¿Cuánto cuesta el asistente de IA?"
    a: "Hotelier Tools es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. Los hoteles que empiecen en 2026 pagarán después 50 € al mes durante todo 2027. Las respuestas del asistente consumen créditos de IA, que puedes consultar en la página de Créditos IA."
  - q: "¿Hotelier Tools forma parte de Little Hotelier?"
    a: "No. Hotelier Tools es independiente y no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Se conecta con el acceso a Little Hotelier de tu propio alojamiento."
---

Sí, un asistente de IA ya puede quitarle trabajo real a la recepción de un hotel pequeño: responder a "¿quién llega mañana y quién debe todavía dinero?", redactar respuestas a los huéspedes y preparar cambios en reservas o facturas. La forma segura de usarlo es sencilla: puede leer libremente, pero **cada cambio espera a que una persona lo apruebe**, y los reembolsos, los cambios de precio y las respuestas a huéspedes de Booking.com nunca se dejan solo en manos de la IA.

Esta guía te enseña cómo se ve eso en la práctica con Hotelier Tools sobre Little Hotelier, con peticiones reales y lo que ocurre exactamente al pulsar Enter.

## ¿Qué puede hacer hoy un asistente de IA en la recepción de un hotel pequeño?

Piensa en tres tipos de trabajo, cada uno con un nivel de confianza distinto.

| Tipo de trabajo | Ejemplos | Quién decide |
|---|---|---|
| **Consultar** | Llegadas de mañana, saldos pendientes, habitaciones sin asignar, si una estancia se puede facturar, tarifas de esta noche | El asistente responde. No cambia nada. |
| **Redactar** | Una respuesta a una pregunta por WhatsApp o email, una nota para el recepcionista de noche | Tú la lees y la envías, o la editas antes. |
| **Cambiar** | Actualizar el teléfono de un huésped, apuntar una estancia para la factura al salir, aplicar un precio | El asistente prepara una tarjeta. Tú pulsas **Aprobar** o **Rechazar**. |

Little Hotelier ya te da mucho en recepción. Su [Guest Engagement Messaging Hub](https://www.littlehotelier.com/blog/learn-about-tech/unified-inbox/) reúne en una sola bandeja las conversaciones de email, SMS, WhatsApp y Airbnb, con plantillas y mensajes programados. Lo que añade un asistente es poder *preguntar* con palabras normales y recibir una respuesta construida con tus reservas en vivo, en lugar de ir de pantalla en pantalla por el calendario y las fichas de reserva.

## Tres sitios donde trabaja el asistente en Hotelier Tools

[Hotelier Tools](/tools/bot/ai-assistant) usa las mismas herramientas en tres lugares. Todos siguen la misma regla: las lecturas se ejecutan, los cambios esperan a una persona.

### El chat del asistente en el panel (beta)

Abre **Chat IA** (`/chat`) y escribe una pregunta sobre reservas, huéspedes, precios, facturas, comprobaciones o la lista de espera. El chat vacío lo dice claro: "Todo lo que modifica datos te pide confirmación antes."

Las respuestas llegan como texto y como tarjetas: un resumen de reserva, un cambio propuesto con su tabla de evidencias, una tarjeta para apuntar una factura al salir, una tabla de recomendaciones de precio o controles deslizantes de reglas de precio. Cada conversación anterior queda guardada en **Historial de chats** (`/chat/history`).

También hay un botón de micrófono. Usa el reconocimiento de voz integrado en tu navegador, que de momento está **configurado en español (es-ES)**, así que la voz encaja con quien habla español. Si no, se escribe.

::screenshot{src="/images/blog/demo/es/ai-chat-arrivals-this-week.webp" alt="Chat de IA de Hotelier Tools respondiendo a ¿Qué reservas llegan esta semana? con una llamada a herramienta y una lista Reservas (14) de tarjetas con huésped, fechas de entrada y salida, Pagado o Pendiente y una etiqueta checked-out, checked-in o confirmed" caption="Pregunta con tus palabras y la respuesta llega en tarjetas de reserva. Una consulta así no cambia nada." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

### El asistente para empleados por WhatsApp o email (alfa)

En **Asistente para empleados** (`/staff`) das de alta a un empleado con su nombre, su número de WhatsApp y/o su email, y un rol: **Solo consulta** o **Puede pedir cambios**.

Cuando esa persona escribe al WhatsApp o al buzón de tu hotel que está conectado, la IA le responde como a un miembro del equipo, por el mismo canal, con tus datos de Little Hotelier. Sus mensajes nunca se mezclan con la bandeja de huéspedes.

- Un empleado con **Solo consulta** solo puede hacer preguntas.
- Un empleado con **Puede pedir cambios** puede pedir cambios, pero cada uno se convierte en una solicitud que aprueba el propietario en `/staff`.
- La identidad es el propio remitente: el número de teléfono registrado o un email que supera las comprobaciones DKIM/DMARC.
- Los mensajes de más de 30 minutos no se responden, para que una respuesta tardía nunca actúe sobre información caducada.

Aquí WhatsApp funciona mediante una sesión de WhatsApp Web (WAHA), no con la API oficial de WhatsApp Business. Mira [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier) para ver las opciones.

### Borradores de respuesta en la bandeja de huéspedes (alfa)

La [bandeja de huéspedes](/tools/bot/guest-inbox) (`/messaging`) reúne los mensajes de WhatsApp, email y Booking.com. Para cada cuenta conectada eliges un modo de respuesta en `/messaging/channels`:

| Modo | Qué ocurre |
|---|---|
| Desactivado | Los mensajes se muestran. No se analiza ni se envía nada. |
| **Borrador** (por defecto) | La IA prepara una respuesta y un plan. No pasa nada hasta que lo apruebas. |
| Respuesta automática | La IA envía su respuesta tras una espera, pero nunca puede cambiar una reserva. |
| Autónomo | La IA también ejecuta los cambios de reserva permitidos sin paso de aprobación. Revísalo varias veces al día. |

Empieza en **Borrador** y quédate ahí hasta que confíes en las respuestas. La IA de cara al huésped no tiene herramientas: solo puede devolver un plan de una lista corta (enviar un mensaje, avisar al personal, añadir una nota a la reserva, fijar una hora de llegada).

## Cómo evitan las tarjetas de aprobación que la IA cometa un error costoso

Una IA puede interpretar mal un mensaje o elegir la reserva equivocada. Las tarjetas de aprobación existen para que una suposición errónea nunca llegue a Little Hotelier.

1. **Toda escritura necesita una tarjeta.** Si el sistema no sabe si una herramienta lee o escribe, la trata como escritura.
2. **La tarjeta muestra el cambio exacto.** En una reserva ves una tabla de evidencias: el valor en Little Hotelier, lo que aportó quien escribe y lo que dice el texto del mensaje.
3. **Tú confirmas el origen.** Los cambios de reserva escritos en el chat incluyen una casilla ("esta es la reserva correcta y me fío de la fuente"), porque un mensaje de chat es una afirmación, no una prueba de quién es alguien.
4. **Aprobar ejecuta exactamente esa llamada.** Al pulsar **Aprobar**, el servidor ejecuta el cambio guardado. La IA no tiene una segunda oportunidad para reescribirlo.
5. **Cada aprobación se usa una sola vez.** Está ligada a esa herramienta, a esos valores, a esa conversación y a esa persona, y caduca a las 24 horas.
6. **Los reembolsos van aparte.** Un reembolso es una acción irreversible que siempre está detrás de su propia tarjeta.

::screenshot{src="/images/blog/demo/es/embed-card-change-approval.webp" alt="Tarjeta Approve these changes? marcada Nothing written yet: coincidencia completa con el remitente de WhatsApp, una tabla de evidencias con columnas Little Hotelier, WhatsApp sender y message text, los nuevos valores de Company y Tax ID con las etiquetas New y Claim, una casilla Also invoice this reservation automatically at checkout y los botones Reject y Approve and apply" caption="La tarjeta de cambio muestra lo que tiene ahora Little Hotelier, lo que se escribiría y de dónde sale cada valor. No se escribe nada hasta que apruebas." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

## Peticiones reales y qué pasa después

Son el tipo de cosas que escribe un recepcionista en una mañana normal. Las referencias de reserva son inventadas.

::prompt{label="Asistente de Hotelier Tools"}
¿Quién llega mañana y alguien tiene todavía un saldo pendiente?
::

El asistente lee los check-ins de mañana y sus pagos y los lista, con una tarjeta de resumen de reserva por huésped. No cambia nada, así que no hay tarjeta que aprobar.

::prompt{label="Asistente de Hotelier Tools"}
El huésped de la reserva BDC-1234567890 nos ha escrito un móvil nuevo por email: +34 600 000 000. Actualízalo, por favor.
::

El asistente encuentra la reserva y prepara una tarjeta de **cambio propuesto**: el teléfono antiguo, el nuevo y de dónde sale el valor nuevo. Marcas la casilla de confianza y pulsas **Aprobar**. Solo entonces se actualiza Little Hotelier.

::prompt{label="Asistente de Hotelier Tools"}
El huésped de BDC-1234567890 quiere factura. Envíasela automáticamente cuando haga el check-out.
::

Recibes la tarjeta para apuntar la factura al salir. Cuando la apruebas, la estancia queda marcada para la tarea diaria de facturación, y Little Hotelier envía la factura por email con tu propia plantilla después del check-out. Los detalles están en [enviar la factura al check-out](/blog/send-invoice-to-guest-at-checkout).

::prompt{label="Asistente de Hotelier Tools"}
¿Cuánto debería costar una doble el próximo sábado y por qué?
::

Recibes la tabla de recomendaciones de precio con las razones de cada cifra: competencia, demanda, límites. Leerla no cambia nada. Aplicar un precio sí es una escritura, así que espera tu aprobación.

::prompt{label="Asistente de Hotelier Tools"}
Devuelve los 40 € de depósito de BDC-1234567890.
::

El reembolso aparece como una tarjeta propia. No se devuelve nada hasta que lo apruebas. Fuera del panel, a través de [asistentes de IA externos](/blog/connect-claude-to-little-hotelier), los reembolsos están bloqueados por completo.

Y desde el asistente para empleados por WhatsApp:

::prompt{label="Empleado por WhatsApp"}
¿Está libre la 5 esta noche? Si es así, pasa a ella la reserva de Martín que llega hoy.
::

La primera mitad se responde al momento. El traslado es un cambio, así que se convierte en una solicitud pendiente en `/staff` para que la apruebe el propietario.

::screenshot{src="/images/blog/demo/es/staff-assistant.webp" alt="Página Asistente para empleados con un cambio pendiente de aprobación, una solicitud invoice_on_leave_add de Lucía (recepción) con los botones Rechazar y Aprobar y ejecutar, dos empleados marcados Puede pedir cambios y Solo consulta, y los mensajes recientes de WhatsApp" caption="Los cambios que pide tu equipo por WhatsApp o email esperan aquí su aprobación." path="/staff"}
::

## ¿Qué no debería hacer nunca un asistente de IA por su cuenta?

Uses la herramienta que uses, deja esto en manos de una persona. Así lo aplica Hotelier Tools en cada caso.

- **Mover dinero.** Los reembolsos siempre necesitan su propia tarjeta. Las apps de IA externas conectadas por MCP no pueden reembolsar en absoluto.
- **Cambiar una reserva porque un mensaje lo diga.** La IA de huéspedes solo ve una reserva cuando el remitente está verificado: un teléfono que coincide con la reserva en los 8 o más últimos dígitos, el email exacto o un hilo de Booking.com. Si coinciden dos huéspedes, no se asocia ninguna reserva.
- **Responder sola a los huéspedes de Booking.com.** El envío automático con IA a Booking.com no está permitido nunca.
- **Inventarse cosas.** La IA de huéspedes responde solo a partir de tus FAQ, tus notas de la casa y la ficha del alojamiento. Si no has dicho si hay parking, la respuesta es "por confirmar", nunca "sí".
- **Mencionar a otros huéspedes.** Un filtro de respuestas bloquea las referencias de reserva que no pertenecen al huésped de la conversación.
- **Subir o bajar precios sin límites.** La IA no está dentro del cálculo nocturno de precios. El piloto automático viene desactivado y, cuando lo activas, mueve una noche como máximo ±20 % por defecto y nunca por debajo de tu precio mínimo.
- **Presentar declaraciones oficiales o escribir a huéspedes desde fuera.** Enviar la encuesta del INE, enviar una factura por email o escribir a huéspedes en lista de espera está bloqueado para las apps de IA externas. En el chat del panel, cada una va detrás de una tarjeta.

Las respuestas sin supervisión también tienen límites de volumen: 4 por hora, 12 por día y 3 seguidas sin respuesta del huésped.

## Roles, privacidad y coste

**Roles.** Las solicitudes del asistente para empleados las aprueba el propietario en `/staff`. Las cuentas de equipo con roles figuran como "próximamente" en la [página del asistente](/tools/bot/ai-assistant); están pensadas para que, por ejemplo, un acceso de recepción pueda ver precios pero no cambiarlos, y no pueda ejecutar un reembolso ni siquiera con una tarjeta.

**Privacidad.** Los accesos a Little Hotelier, Booking.com y al buzón se guardan cifrados (AES-256-GCM). Los mensajes de los huéspedes y los datos de las reservas los procesa un proveedor de IA cuando el asistente los lee. El [acuerdo de encargado del tratamiento](https://dashboard.hotelier.tools/legal/dpa) y el [aviso de privacidad](https://dashboard.hotelier.tools/legal/privacy) explican qué se procesa.

**Coste.** Hotelier Tools es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027. Los hoteles que empiecen en 2026 pagarán después 50 € al mes durante todo 2027, con todas las funciones incluidas. Cada respuesta del asistente y cada análisis de un mensaje de huésped consume créditos de IA; tu cupo, tu saldo y tu consumo están en **Créditos IA** (`/messaging/credits`).

::callout{type="note" title="Herramienta independiente"}
Hotelier Tools no está afiliado ni respaldado por SiteMinder ni por Little Hotelier. Se conecta con el acceso a Little Hotelier de tu propio alojamiento, y todo cambio que hace se ve en Little Hotelier como siempre.
::

## Cómo probarlo con seguridad

1. Abre la demo pública que tienes abajo. Usa un hotel inventado y nada llega a sistemas reales.
2. Pide las llegadas de mañana, luego pide un cambio y mira la tarjeta que recibes.
3. En tu propio panel, conecta Little Hotelier en **Credenciales**, rellena la ficha del alojamiento en `/settings/property` (lee tu dirección, políticas y habitaciones de Little Hotelier) y añade tus FAQ en `/messaging/faq`.
4. Deja la bandeja de huéspedes en **Borrador** las primeras semanas y corrige en `/messaging/training` todo lo que la IA interprete mal.

::demo-cta{path="/chat"}
::

## Resumen

- Un asistente de IA es seguro en recepción cuando lee libremente y **pregunta antes de cada cambio**.
- En Hotelier Tools eso funciona en el chat del panel, por WhatsApp o email para el personal, y como borradores de respuesta en la bandeja de huéspedes.
- Los reembolsos, las respuestas a Booking.com, los límites de precio y las declaraciones oficiales siguen en manos de personas.
- ¿Quieres las mismas respuestas dentro de Claude o ChatGPT? Lee [qué es un servidor MCP](/blog/what-is-mcp-server-hotels) y después [conecta Claude con Little Hotelier](/blog/connect-claude-to-little-hotelier).
