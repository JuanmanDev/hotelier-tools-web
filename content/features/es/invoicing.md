---
title: "Facturas masivas y facturas al hacer el check-out para Little Hotelier"
---

La facturación crea las facturas de Little Hotelier que faltan para un rango de fechas en una sola ejecución y te da cada trimestre como un ZIP de PDF más un resumen en CSV para tu asesoría. También puede hacer que Little Hotelier envíe la factura por email a un huésped automáticamente cuando hace el check-out.

## Cómo funciona

1. **Genera un periodo.** En **Descarga de facturas** (`/invoices`), pulsa **Generar facturas** y elige las fechas, por ejemplo del 1 de julio al 30 de septiembre. Hotelier Tools lee esas reservas y pide a Little Hotelier que genere una factura por cada estancia que cumpla los requisitos.
2. **Las facturas arriesgadas se rechazan.** Una comprobación previa detiene una estancia que no ha hecho el check-out, una factura de empresa sin NIF ni dirección fiscal, un NIF mal formado y una estancia que ya está facturada.
3. **Nada se omite en silencio.** Cada rechazo llega a **Errores** (`/invoices/errors`) con su motivo. Corrige la reserva en Little Hotelier y vuelve a comprobarla.
4. **Descarga.** Las facturas se agrupan por trimestre y mes. Pulsa **ZIP** para todos los PDF, o **Vista previa del CSV** para revisar antes el resumen.
5. **Factura al hacer el check-out.** En **Factura a la salida** (`/invoice-on-leave`), marca una estancia una sola vez. Una tarea diaria (16:00 por defecto) hace que Little Hotelier genere la factura después del check-out y la envíe por email con tu propia plantilla y remitente.

Las facturas son documentos propios de Little Hotelier, así que tu numeración, tu logotipo y tu diseño se quedan exactamente como están. Guías paso a paso: [descargar todas tus facturas de una vez](/blog/download-all-little-hotelier-invoices) y [enviar la factura al hacer el check-out](/blog/send-invoice-to-guest-at-checkout).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**.
- Huéspedes con el check-out hecho en Little Hotelier. Si tu equipo no lo hace a mano, una tarea opcional de **Check-out automático** (15:05) cierra las salidas del día.
- Nombre de la empresa, NIF y dirección fiscal en la reserva para los huéspedes de empresa.
- Un email del huésped en la reserva para las facturas enviadas al hacer el check-out.
- El idioma de la factura, que se fija en **Ajustes > Facturas**: según el país del huésped, o siempre el mismo, con un idioma de reserva.

## Límites y conviene saber

- **Estado:** la descarga masiva, las comprobaciones previas, los errores y el idioma son estables. La factura al hacer el check-out está en beta.
- La tarea de check-out mira 8 días atrás para recuperar ejecuciones perdidas y lee hasta 100 check-outs por ejecución. Una estancia pasada sin email del huésped se notifica una vez, no se reintenta cada día.
- No hay ninguna función de VeriFactu. En España, deja ese paso en Little Hotelier.
