---
title: "Una API REST y un servidor MCP para los datos de Little Hotelier"
---

Hotelier Tools da a tu alojamiento de Little Hotelier una API REST en `https://dashboard.hotelier.tools/api/v1` y un servidor MCP en `https://dashboard.hotelier.tools/api/mcp`. Tus scripts, hojas de cálculo, Claude, ChatGPT, Cursor o VS Code pueden así leer reservas, huéspedes, precios y disponibilidad, y hacer algunos cambios, con los mismos permisos que tu cuenta de Hotelier Tools.

## Cómo funciona

- **Tu propio acceso, no una API de partner.** Conectas Little Hotelier una sola vez en **Credenciales**, y se guarda cifrado. Hotelier Tools usa los mismos endpoints web que la aplicación web de Little Hotelier, así que puede hacer lo que haga ese acceso, y nada más.
- **API REST.** JSON sobre HTTPS: `/reservations` (con facturas y PDF por reserva), `/guests`, `/prices`, `/room-types`, y `/methods` para métodos en bruto de Little Hotelier. La lista completa está en la especificación OpenAPI pública en `/api/v1/openapi.json`, con un explorador interactivo y plantillas de código en **REST API y Swagger** (`/developer/rest-api`).
- **Servidor MCP.** Un servidor HTTP remoto con más de 100 herramientas de hotel. Las configuraciones ya preparadas para cada cliente están en **Configurar MCP** (`/developer/mcp-setup`).

## Cómo funciona la autenticación

- **Claves API.** Crea una en **API y MCP > Claves API** (`/developer/api-keys`). Las claves empiezan por `htk_`, se muestran una sola vez y van en una cabecera `Authorization: Bearer`. Una clave no tiene ámbitos: actúa sobre un alojamiento como la persona que la creó. Cada persona puede tener hasta 10 claves y revocar cualquiera de ellas.
- **Inicio de sesión para MCP.** Los clientes que admiten OAuth pueden conectarse iniciando sesión en lugar de usar una clave. Ese inicio de sesión dura 30 días.

## Llamadas de lectura y de escritura

Las llamadas de lectura no cambian nada en Little Hotelier. Las escrituras son reales: `POST /reservations/{id}/invoices` crea una factura nueva cada vez. Por MCP, una IA puede cambiar reservas (primero una propuesta y luego un paso de aplicación con `confirmed: true`), registros de pago, precios, stop sell, entradas de la lista de espera y tareas programadas. Fuera del panel no hay tarjeta de aprobación, así que mantén activadas las aprobaciones de herramientas de tu cliente. Las acciones irreversibles, como los reembolsos o enviar facturas por email, están bloqueadas para los clientes externos.

## Límites y conviene saber

- **Estado:** la API REST y el servidor MCP están en beta. Las tarjetas incrustables están en alfa.
- **Límite de uso:** 100 peticiones por minuto por dirección IP, y después `429` con `Retry-After`.
- **Paginación:** como máximo 100 reservas por llamada, filtradas por fecha de entrada.
- **No disponible:** webhooks de salida, una clave de sandbox pública, paquetes SDK.
- **Los datos enmascarados siguen enmascarados:** Little Hotelier enmascara los datos de los huéspedes 180 días después del check-out.
- No es una API oficial de SiteMinder.

Empieza con [¿tiene Little Hotelier una API?](/blog/little-hotelier-api) y [qué es un servidor MCP](/blog/what-is-mcp-server-hotels), y después configura [Claude](/blog/connect-claude-to-little-hotelier) o [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
