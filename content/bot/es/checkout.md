---
El checkout automatico permite marcar las reservas como salidas sin tener que hacerlo manualmente. 
Esto es especialmente útil para los hoteles u hostales que no requieren intervención manual en el proceso de checkout.

Actualmente el sistema se ejecuta a diario a las 15:00.
Se revisan las siguientes condiciones para marcar una reserva como salida:
- La reserva debe estar en estado "Checked In".
- La fecha de salida debe ser el día actual.
- La fecha de entrada debe ser anterior al día actual.
- La reserva no debe tener pagos pendientes.
- La reserva debe tener un número de identificación fiscal para generar la factura.
- La reserva no debe tener una factura emitida.

Si una reserva cumple con todas estas condiciones, se marcará automáticamente como salida y se generará la factura correspondiente.

En caso de que una reserva no cumpla con alguna de las condiciones, se enviará un correo electrónico al administrador del hotel notificando la situación.

Ejemplo de correo electrónico:
  
<br>

## Reporte de Check-ins (2025-08-05)

Total de reservas con check-in hoy: **7**

Reservas con problemas: **1**

Reservas con check-out automático: **0**

| Habitación | Nombre del Huésped | Pendiente | Total | Estado | Problemas | Enlace |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Problemas | Falta ID/Pasaporte | [Ver Reserva](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Correcto | Todo correcto | [Ver Reserva](#) |

### Resumen:

*   **Verde:** Reservas procesadas automáticamente (check-out realizado)
*   **Rojo:** Reservas que requieren atención manual

**⚠️ 1 reservas requieren atención manual**


### Notas:
- Las reservas con problemas deben ser revisadas manualmente.
