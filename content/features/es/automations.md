---
title: "Tareas programadas para Little Hotelier, con registro de cada ejecución"
---

Las automatizaciones son las tareas programadas que hay detrás de Hotelier Tools: las comprobaciones de reservas, las facturas al hacer el check-out, la actualización de precios de la competencia, la revisión de la lista de espera y la lectura de la bandeja de entrada se ejecutan solas, con el horario que elijas. Cada ejecución queda registrada y los fallos llegan a tu email.

## Cómo funciona

1. **Cada función crea su propia tarea.** Rara vez partes de un horario en blanco. Por ejemplo:
   - Comprobaciones automáticas: **Guardar y activar tarea** fija el horario recomendado, como cada noche a las 23:30 para las reservas nuevas.
   - Factura al hacer el check-out: **Crear la tarea diaria (16:00, después del check-out)**.
   - Check-out automático: **Crear la tarea diaria (15:05)**.
   - Lista de espera: **Revisar cada noche a la 01:00**.
   - Piloto automático de precios: cada 3 horas es lo que se sugiere.
   - Bandeja de huéspedes: tu página de FAQ se puede volver a leer cada hora.
2. **Ajusta el horario.** Ejecuta una tarea ahora, cada pocos minutos, a diario, cada semana o cada mes, dentro de los límites de cada función.
3. **Lee lo que ha pasado.** **Tareas programadas** (`/cron`) lista todas las tareas, y **Historial de ejecuciones** (`/cron-logs`) da un resumen legible de lo que hizo cada ejecución.
4. **Recibe el informe.** Tareas como las comprobaciones de reservas envían un email de informe por ejecución. Los destinatarios compartidos se fijan en **Ajustes > Destinatarios de informes**.

Mira las tareas funcionando en la práctica en [la lista de tareas de recepción](/blog/hotel-front-desk-checklist-automation), [enviar la factura al hacer el check-out](/blog/send-invoice-to-guest-at-checkout) y [la lista de espera para fechas agotadas](/blog/hotel-waitlist-sold-out-dates).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**. Cada ejecución inicia sesión con ese acceso.
- La función que hay detrás de la tarea, configurada antes, como las comprobaciones que quieres o las fechas que vigilas.

## Límites y conviene saber

- **Estado: beta.**
- **Pausa segura.** Si caduca tu contraseña de Little Hotelier, las tareas se pausan en lugar de reintentar, para que la cuenta nunca se bloquee. El panel muestra que las tareas automáticas están en pausa hasta que guardes la contraseña nueva en **Credenciales** o pulses **Comprobar ahora y reanudar**.
- **Los intervalos mínimos difieren según la tarea.** Las comprobaciones de reservas se ejecutan como máximo una vez por hora por tarea, la revisión de la lista de espera como máximo cada 20 minutos, y el piloto automático de precios no más a menudo que cada 3 horas.
- **Una tarea solo hace lo que hace su función.** Las comprobaciones solo avisan. El check-out automático escribe en Little Hotelier, así que se queda desactivado hasta que lo creas.
- **Los asistentes de IA pueden gestionar tareas.** A través del [servidor MCP](/tools/bot/api-mcp), Claude o ChatGPT pueden leer y cambiar las tareas programadas.
- **Sin webhooks de salida.** Tus propios scripts necesitan su propio programador, como una tarea cron.
