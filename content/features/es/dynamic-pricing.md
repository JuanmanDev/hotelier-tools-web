---
title: "Precios dinámicos y stop sell para Little Hotelier"
---

Los precios dinámicos comparan tus tarifas de Little Hotelier con las de hoteles similares de la zona y recomiendan un precio para cada habitación y noche, con el motivo. No se escribe nada en Little Hotelier hasta que lo confirmes, salvo que actives tú mismo el piloto automático.

## Cómo funciona

1. **Precios de la competencia.** Indica tu ciudad y tus rivales reales en **Competencia y mercado**. **Precios de la competencia** (`/competitor-prices`) muestra entonces lo que cobran cada noche junto a tu propia tarifa.
2. **Una recomendación por noche.** En **Recomendaciones** (`/price-recommendations`), cada precio parte de tu propia tarifa, se acerca un poco a la mediana de los hoteles comparables y luego se mueve con la demanda: ocupación, habitaciones que quedan, última hora, fines de semana, eventos locales aprobados y huéspedes de tu lista de espera. Tus límites acotan el movimiento. **¿Por qué?** muestra la aritmética.
3. **Reglas con palabras sencillas.** Escribe una regla como una frase. La IA la convierte en una regla estructurada, y tú la apruebas antes de que cuente. Las reglas por fechas pueden fijar, congelar o acotar un precio.
4. **Eventos locales.** Un análisis de IA encuentra ferias, conciertos y festivos cerca de ti. Aprueba o rechaza cada uno.
5. **Aplica.** Marca las noches y pulsa **Aplicar en Little Hotelier**. El mismo cuadro de diálogo puede fijar el stop sell de SiteMinder, que solo se envía para las noches en las que el cambio de precio se hizo correctamente.
6. **Revisa los resultados.** **Historial y resultados** (`/pricing-log`) lista cada tarifa escrita, con las habitaciones que quedaban entonces y ahora.

El método, y una rutina manual que puedes seguir sin ninguna herramienta, están en [precios dinámicos para hoteles pequeños](/blog/dynamic-pricing-little-hotelier). Para las restricciones, consulta [CTA, CTD, estancia mínima y stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Qué necesitas

- Little Hotelier conectado en **Credenciales**.
- Un precio mínimo por tipo de habitación y los rivales con los que compites de verdad.
- Una comprobación de qué fuentes de la competencia devuelven precios para tu localidad. Está preparado para leer Booking.com, Expedia, Google Hotels, Hostelworld y Agoda.

## Límites y conviene saber

- **Estado:** los precios de la competencia están en beta. Las recomendaciones, las reglas, los eventos, el piloto automático y el stop sell están en alfa.
- **El piloto automático está desactivado por defecto.** Cuando está activado, se ejecuta como máximo cada 3 horas, mueve cada noche como máximo un 20 % por defecto, nunca baja de tu mínimo y trabaja de 1 a 90 días por delante (14 por defecto). Nunca cambia el stop sell.
- Los cálculos nocturnos de precios son aritmética sencilla. La IA solo lee las frases de tus reglas y busca eventos.
- La estimación de ingresos del historial de precios es una orientación, no una prueba.
