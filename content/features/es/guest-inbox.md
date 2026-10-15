---
title: "Una sola bandeja de huéspedes para WhatsApp, email y Booking.com"
---

La bandeja de huéspedes reúne en una sola lista los mensajes de WhatsApp, email y Booking.com, con la reserva de Little Hotelier junto a cada conversación. Una IA redacta cada respuesta a partir de tus propias FAQ y notas de la casa, y por defecto una persona la aprueba antes de enviar nada.

## Cómo funciona

1. **Conecta tus canales.** Booking.com, mediante **Credenciales > Extranet de Booking.com** con tu usuario de partner y el segundo factor. El email, desde Google, Microsoft o cualquier cuenta IMAP/SMTP. WhatsApp, mediante una sesión de WhatsApp Web (WAHA).
2. **Los mensajes llegan junto a la reserva.** Una conversación de Booking.com se vincula automáticamente a su reserva. Las preguntas de huéspedes (Q&A) de tu página de Booking.com llegan a la misma bandeja.
3. **Elige un modo de respuesta por cuenta** en **Canales** (`/messaging/channels`): **Desactivado**, **Borrador** (el predeterminado, no pasa nada hasta que apruebas), **Respuesta automática** tras un retraso que elijas, o **Autónomo**.
4. **Enséñale tus respuestas.** En **FAQ y conocimiento** (`/messaging/faq`), añade tu página de FAQ o texto y notas de la casa, como el wifi y el aparcamiento. Corrige una respuesta una vez y el asistente aprende de ella.
5. **Las solicitudes de factura se reconocen sin IA.** Los mensajes de solicitud de factura de Booking.com ofrecen inscribir la estancia para su factura al hacer el check-out.

Detalles de configuración por canal: [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier) y [gestionar los mensajes de huéspedes de Booking.com](/blog/booking-com-guest-messages).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**, y la ficha de tu alojamiento rellenada en `/settings/property`.
- Para WhatsApp, un servidor WAHA: su dirección, un nombre de sesión y una clave de API.
- Créditos de IA. Cada mensaje que la IA lee y redacta los consume, y se muestran en **Créditos IA** (`/messaging/credits`).

## Límites y conviene saber

- **Estado: alfa.** Es una versión inicial y cambia con frecuencia.
- **Booking.com sigue siendo de envío manual.** La IA nunca escribe por su cuenta a los huéspedes de Booking.com. Enviar tu respuesta aprobada a Booking.com desde la bandeja todavía no está garantizado: cópiala en la Extranet o en Pulse.
- **La IA de huéspedes no tiene herramientas.** Devuelve un plan a partir de una lista cerrada y nunca puede cancelar, cambiar fechas ni tocar pagos.
- **Solo ve una reserva si el remitente está verificado:** un teléfono que coincida en los últimos 8 dígitos, el email exacto o una conversación de Booking.com.
- **Un servicio que no has listado** se responde "a confirmar", nunca con un sí.
- **WhatsApp mediante WAHA no es la API oficial.** Un número usado así podría ser bloqueado, así que responde solo a los huéspedes que escriban primero. Los chats de grupo se ignoran.
- Las respuestas automáticas se detienen en 4 por hora o 12 al día.
