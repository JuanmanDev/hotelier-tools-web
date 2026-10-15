---
title: "Un asistente de IA para la recepción de tu Little Hotelier"
---

El asistente de IA responde con palabras sencillas a preguntas sobre tus reservas, huéspedes, precios, facturas, comprobaciones y lista de espera de Little Hotelier, y prepara cambios por ti. Lee con libertad, pero cada cambio aparece como una tarjeta que apruebas o rechazas antes de que llegue nada a Little Hotelier.

## Cómo funciona

1. **Pregunta en el chat.** Abre **Chat IA** (`/chat`) y escribe una petición, por ejemplo quién llega mañana y quién todavía debe dinero. Las respuestas llegan como texto y tarjetas: resúmenes de reservas, un cambio propuesto con una tabla de evidencias o una tabla de recomendaciones de precios.
2. **Aprueba o rechaza.** Toda escritura necesita una tarjeta. Si el sistema no puede saber si una herramienta lee o escribe, la trata como una escritura. La tarjeta muestra el valor en Little Hotelier junto al nuevo y de dónde viene.
3. **Aprobar ejecuta exactamente ese cambio.** La llamada guardada se ejecuta en el servidor, y la IA no tiene una segunda oportunidad para reescribirla. Cada aprobación sirve una sola vez y caduca a las 24 horas. Los reembolsos siempre van detrás de su propia tarjeta.
4. **Tu equipo también puede preguntar.** En **Asistente para empleados** (`/staff`), da de alta a un empleado con su número de WhatsApp o su email y un rol: **Solo consulta** o **Puede pedir cambios**. Escriben a tu número o buzón conectado, y cualquier cambio que pidan espera la aprobación del propietario.

Las peticiones reales y lo que ocurre después de cada una están en [Asistente de IA para la recepción de un hotel pequeño](/blog/ai-assistant-hotel-front-desk).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**.
- La ficha de tu alojamiento en `/settings/property`, leída de Little Hotelier.
- Para el asistente para empleados, un número de WhatsApp o un buzón de correo conectado.
- Créditos de IA: cada respuesta los consume, y tu saldo está en **Créditos IA**.

## Límites y conviene saber

- **Estado:** el chat y las aprobaciones están en beta, el asistente para empleados está en alfa, y las cuentas de equipo con roles de propietario, gerente y personal llegarán próximamente.
- **La voz es en español por ahora.** El micrófono usa el reconocimiento de voz de tu navegador configurado en español (es-ES). Puedes escribir en cualquier idioma.
- **La identidad del empleado es el remitente.** Un número de teléfono registrado, o un email que supere las comprobaciones DKIM/DMARC. Los mensajes del personal con más de 30 minutos no se responden.
- **Fuera del panel no hay tarjeta.** Cuando Claude o ChatGPT llaman a una herramienta de escritura a través del [servidor MCP](/tools/bot/api-mcp), se ejecuta de inmediato, y los reembolsos están bloqueados allí.
