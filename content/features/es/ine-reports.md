---
title: "La encuesta de ocupación hotelera del INE desde Little Hotelier"
---

Los informes del INE elaboran la encuesta de ocupación hotelera del INE de España a partir de tus reservas de Little Hotelier: entradas y pernoctaciones por comunidad autónoma española o país, habitaciones ocupadas, camas supletorias y tarifa media por tipo de cliente. Hotelier Tools valida las cifras, envía el XML a través del sistema IRIA del INE y guarda el justificante.

## Cómo funciona

1. **Configura tu establecimiento una sola vez.** En **Configuración INE** (`/ine-setup`), introduce tu número de orden de IRIA (NOrden) y tu contraseña, pulsa **Probar conexión IRIA** y rellena la dirección, la capacidad, el tipo y la categoría para la cabecera del XML.
2. **Genera el informe.** En **Origen de huéspedes** (`/reports/guest-origins`), elige las fechas de la solicitud del INE y pulsa **Generar informe**. Las pestañas dividen el resultado en resumen diario, origen de los huéspedes, habitaciones, ADR por cliente y calidad de datos.
3. **Corrige los huéspedes sin origen.** Las reservas sin nacionalidad o provincia quedan marcadas. Corrígelas en Little Hotelier y actualiza solo esas filas.
4. **Valida, previsualiza y envía.** Pulsa **Validar para INE**, luego **Previsualizar XML** y después **Enviar al INE**. El justificante del INE se guarda con el informe.
5. **Conserva el historial.** **Informes guardados** (`/reports/list`) lista cada mes con su estado y su justificante.

Si el buzón que recibe los emails del INE está conectado a la bandeja de huéspedes, la solicitud del INE muestra un botón que genera el informe exactamente para las fechas pedidas.

Qué pregunta la encuesta, las multas y los rechazos de IRIA que conviene evitar están en [cómo rellenar la encuesta de ocupación hotelera del INE](/blog/ine-hotel-occupancy-survey).

## Qué necesitas

- Una solicitud del INE con tu número de orden y tu contraseña. La encuesta solo se aplica cuando el INE selecciona tu establecimiento.
- Little Hotelier conectado en **Credenciales**.
- El país y la provincia de los huéspedes rellenados. El INE cuenta a los huéspedes por el lugar donde viven, no por su nacionalidad. El script gratuito [Guardado Fácil de Provincia y País](/tools/ui/easy-save-province-country) y las [comprobaciones automáticas](/tools/bot/automated-checks) ayudan a mantenerlos completos.

## Límites y conviene saber

- **Estado: estable.**
- Elabora el cuestionario hotelero para establecimientos de tipo hotelero: hoteles, hostales y pensiones. Los apartamentos turísticos, los campings, las casas rurales y los albergues responden a otros cuestionarios del INE.
- Un informe enviado ya no se puede modificar ni eliminar, pero todavía puedes descargar su XML.
- Tu contraseña de IRIA se guarda cifrada y nunca se muestra en texto claro.
- En la demo pública, el envío al INE está desactivado. No escribas nunca allí credenciales reales de IRIA.
- Hotelier Tools no está afiliado al INE, a SiteMinder ni a Little Hotelier.
