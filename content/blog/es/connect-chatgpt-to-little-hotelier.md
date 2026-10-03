---
title: "Cómo conectar ChatGPT con Little Hotelier (y 18 prompts para hoteles pequeños)"
seoTitle: "Conectar ChatGPT con Little Hotelier + 18 prompts"
description: "Conecta ChatGPT con Little Hotelier con el modo desarrollador y una app MCP, comprueba qué permite tu plan y copia 18 prompts de llegadas, cobros y precios."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [conectar chatgpt con little hotelier, chatgpt para hoteles, prompts chatgpt hoteles, conector mcp chatgpt, chatgpt gestión hotelera, modo desarrollador chatgpt mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/es/mcp-oauth-consent.webp
coverAlt: "Página Autorizar acceso MCP de Hotelier Tools que abre un asistente de IA al conectarse, con el aviso de token de 30 días y los botones Denegar y Permitir acceso"
faq:
  - q: "¿Qué planes de ChatGPT pueden conectarse con Little Hotelier?"
    a: "A octubre de 2026, el centro de ayuda de OpenAI indica que el soporte completo de MCP, con acciones de escritura, es para Business, Enterprise y Edu en la web, mientras que Pro puede conectar apps MCP con permisos de lectura y consulta en modo desarrollador. La documentación para desarrolladores de OpenAI incluye también Plus. Free y Go no figuran. Comprueba lo que te muestra tu propia cuenta."
  - q: "¿Puedo usar una clave de API en lugar de iniciar sesión?"
    a: "No. OpenAI indica que ChatGPT no puede presentar claves de API personalizadas a un servidor MCP, así que elige OAuth. Inicias sesión en Hotelier Tools en una ventana del navegador y pulsas Permitir acceso."
  - q: "¿Puede ChatGPT cambiar mis reservas o mis precios?"
    a: "Solo si tu plan permite acciones de escritura y tú las confirmas. OpenAI pide confirmación antes de las acciones de escritura por defecto. Hotelier Tools no añade una segunda aprobación fuera de su panel, y bloquea por completo para ChatGPT los reembolsos, el envío de facturas por email, la presentación de la encuesta del INE y otras acciones irreversibles."
  - q: "¿Funciona en la app móvil de ChatGPT?"
    a: "No para apps MCP personalizadas. El centro de ayuda de OpenAI dice que las apps MCP en modo desarrollador solo funcionan en la web. Usa chatgpt.com en un navegador."
  - q: "¿Se usan los datos de mis huéspedes para entrenar los modelos de OpenAI?"
    a: "En Business, Enterprise y Edu, OpenAI dice que por defecto no entrena con la información de las apps conectadas. En Free, Plus, Go y Pro puede hacerlo si Mejorar el modelo para todos está activado en Controles de datos. Desactívalo antes de conectar datos del hotel."
  - q: "¿Claude o ChatGPT: cuál va mejor para tareas de hotel?"
    a: "Los dos funcionan con el mismo servidor de Hotelier Tools. A octubre de 2026, Claude permite conectores personalizados con herramientas de escritura en todos los planes, incluido Free (un conector), mientras que ChatGPT limita el MCP completo de lectura y escritura a Business, Enterprise y Edu. Elige el asistente que ya use tu equipo."
---

Sí, puedes conectar ChatGPT con Little Hotelier. Activa el **modo desarrollador** en ChatGPT, crea una app que apunte al servidor MCP de Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) con **OAuth** e inicia sesión en Hotelier Tools. Lo que ChatGPT podrá hacer después depende de tu plan: a octubre de 2026, OpenAI reserva el acceso completo de lectura y escritura para Business, Enterprise y Edu, mientras que Pro (y, según la documentación para desarrolladores de OpenAI, Plus) se conecta con permisos de solo lectura.

Abajo tienes los pasos tal como los documenta hoy OpenAI, qué comprobar en tu propia cuenta y 18 prompts que funcionan en un hotel pequeño.

## Qué necesitas antes de empezar

- **Un plan de ChatGPT con modo desarrollador.** La [guía del modo desarrollador](https://developers.openai.com/api/docs/guides/developer-mode) de OpenAI (en inglés) incluye las cuentas Pro, Plus, Business, Enterprise y Education, en la web. Su [centro de ayuda](https://help.openai.com/en/articles/12584461) añade que **el MCP completo, con acciones de escritura, es para Business y Enterprise/Edu**, y que Pro solo puede conectar con permisos de lectura y consulta.
- **Un navegador de ordenador.** OpenAI indica que las apps MCP personalizadas solo funcionan en la web, no en las apps móviles.
- **Una cuenta de Hotelier Tools** con Little Hotelier conectado en **Credenciales** (`/credentials`). El acceso del propietario tiene el acceso a la API que necesitas. Hotelier Tools es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Lo que hemos comprobado y lo que debes comprobar tú"}
El servidor de Hotelier Tools admite el inicio de sesión que usa ChatGPT: OAuth con PKCE y registro automático de cliente. Los menús y las reglas de plan de ChatGPT cambian a menudo y no hemos probado todos los planes de principio a fin. En tu cuenta, confirma tres cosas: que aparece **Developer mode**, que las herramientas de Hotelier Tools se muestran después de conectar y si tu plan deja a ChatGPT ejecutar acciones de escritura.
::

Hotelier Tools es independiente. No está afiliado ni respaldado por OpenAI, SiteMinder ni Little Hotelier, y se conecta con el acceso a Little Hotelier de tu propio alojamiento.

## Cómo conectar ChatGPT con Little Hotelier, paso a paso

Estos pasos siguen la [guía de conexión](https://developers.openai.com/plugins/deploy/connect-chatgpt) de OpenAI a octubre de 2026. Si tus pantallas son distintas, en cada paso se indica el camino antiguo del centro de ayuda. Los nombres de los menús de ChatGPT van en inglés; si tu ChatGPT está en español, los verás traducidos.

1. Entra en [chatgpt.com](https://chatgpt.com) desde un navegador y abre **Settings → Security and login**. Activa **Developer mode**. (Algunas cuentas lo muestran en **Settings → Apps → Advanced settings**.)
2. Abre **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) y pulsa el botón **+** para crear una app en modo desarrollador. (Pantallas antiguas: **Settings → Apps → Create**.)
3. Rellena el formulario:
   - **Name:** `Hotelier Tools`
   - **Description:** `Reservas, huéspedes, facturas y precios de mi alojamiento en Little Hotelier`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. Crea la app. Puede que ChatGPT muestre primero **Scan Tools**. Se abre una ventana de Hotelier Tools.
5. Inicia sesión en Hotelier Tools. En **Autorizar acceso MCP**, elige el alojamiento si tienes varios y pulsa **Permitir acceso**.

::screenshot{src="/images/blog/demo/es/mcp-oauth-consent-card.webp" alt="Tarjeta Autorizar acceso MCP: el asistente de IA (cliente MCP) quiere acceder a tu cuenta de Hotelier Tools a través de la API MCP, el email con el que has iniciado sesión, un token que caduca en 30 días y los botones Denegar y Permitir acceso" caption="Pulsa Permitir acceso. ChatGPT nunca ve tu contraseña de Hotelier Tools ni la de Little Hotelier." path="/oauth/authorize" width="472" height="327"}
::

6. Revisa la lista de herramientas que ha encontrado ChatGPT. La app aparece con la etiqueta **Dev**.
7. Empieza un chat nuevo. Abre el menú **+**, elige **Developer mode** y selecciona **Hotelier Tools** (las cuentas más nuevas también te dejan escribir `@` y elegirla).

El inicio de sesión dura **30 días**. Después, ChatGPT te pide que vuelvas a conectar. Puedes ver y revocar la conexión en Hotelier Tools en **API y MCP → Claves API** (`/developer/api-keys`), donde aparece con la etiqueta **MCP client**.

::screenshot{src="/images/blog/demo/es/api-keys.webp" alt="Página Claves de API de Hotelier Tools con el formulario Generar una clave nueva, una lista de Claves activas con una clave enmascarada y un botón Revocar, y las notas de Buenas prácticas de seguridad" caption="Las claves y las conexiones aparecen en Claves activas. Revoca una para cortar su acceso al instante." path="/developer/api-keys"}
::

### En un espacio de trabajo Business, Enterprise o Edu

En **Business**, OpenAI dice que solo los administradores y propietarios pueden usar el modo desarrollador y publicar apps. Para compartir la app con compañeros, un administrador la publica desde **Workspace settings → Apps → Drafts → Publish**. En **Enterprise y Edu**, los administradores pueden dar el modo desarrollador a miembros concretos con acceso por roles. Cada persona inicia sesión igualmente en Hotelier Tools con un acceso que tenga acceso a la API.

### ¿Por qué no una clave de API?

La [documentación de autenticación](https://developers.openai.com/plugins/build/auth) de OpenAI dice que ChatGPT "no puede presentar claves de API personalizadas". Por eso las claves de API `htk_` que funcionan en [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) no se usan aquí. La entrada es el inicio de sesión en el navegador.

## 18 prompts que funcionan en hoteles pequeños

Empieza cada chat con Hotelier Tools seleccionado. Nombrarlo en el prompt ayuda a que ChatGPT use tus datos en lugar de la web. La referencia de reserva de abajo es inventada.

### Llegadas y habitaciones

::prompt{label="ChatGPT"}
Con Hotelier Tools, ¿quién llega hoy? Lista huésped, noches, tipo de habitación y si tiene habitación asignada.
::

::prompt{label="ChatGPT"}
¿Qué reservas que llegan en los próximos 7 días todavía no tienen habitación asignada?
::

::prompt{label="ChatGPT"}
¿Quién sale hoy y alguien tiene todavía un saldo abierto?
::

::prompt{label="ChatGPT"}
¿Cuántas habitaciones de cada tipo quedan libres esta noche y mañana por la noche?
::

### Cobros y facturas

::prompt{label="ChatGPT"}
Lista las reservas que llegan en los próximos 14 días con saldo pendiente, ordenadas por importe, de mayor a menor.
::

::prompt{label="ChatGPT"}
¿Qué estancias hicieron el check-out la semana pasada y siguen sin factura? De cada una, dime por qué todavía no se puede facturar.
::

::prompt{label="ChatGPT"}
¿Está lista para facturar la reserva BDC-1234567890? Si no, ¿qué falta exactamente?
::

::prompt{label="ChatGPT"}
Redacta un recordatorio de pago corto y amable para cada huésped que llega esta semana con saldo pendiente. No envíes nada; solo dame los textos.
::

### Precios y disponibilidad

::prompt{label="ChatGPT"}
Muéstrame mis tarifas y mi disponibilidad del próximo viernes y sábado por tipo de habitación.
::

::prompt{label="ChatGPT"}
Compara mis precios de las próximas 14 noches con los precios de la competencia que tengas. ¿En qué noches soy el más barato y en cuáles el más caro?
::

::prompt{label="ChatGPT"}
Explícame, paso a paso, por qué el precio recomendado para una habitación doble el sábado 14 de noviembre es el que es.
::

::prompt{label="ChatGPT"}
¿Qué noches de los próximos 30 días tienen la ocupación más baja? Sugiere cuáles debería mirar primero.
::

### Huéspedes

::prompt{label="ChatGPT"}
Busca al huésped cuyo teléfono termina en 4521 y enséñame sus estancias pasadas y futuras.
::

::prompt{label="ChatGPT"}
¿Alguna llegada de los próximos 7 días coincide con mi lista de «no volver a alojar»?
::

::prompt{label="ChatGPT"}
¿A qué huéspedes que llegan esta semana les falta todavía el documento de identidad o la dirección?
::

### Informes

::prompt{label="ChatGPT"}
Resume el mes pasado: llegadas, noches vendidas por tipo de habitación, cancelaciones y no-shows. Preséntalo en una tabla.
::

::prompt{label="ChatGPT"}
¿Qué hicieron las tareas programadas esta semana y falló alguna? Explica cualquier fallo con palabras sencillas.
::

::prompt{label="ChatGPT"}
¿Quién está en la lista de espera, para qué fechas, y se ha liberado algo para ellos?
::

Las respuestas valen lo que valgan los datos de Little Hotelier. Si una cifra te parece rara, pídele a ChatGPT que te enseñe las reservas que ha usado.

## ChatGPT conectado o copiar y pegar: ¿cuál es la diferencia?

Sin conexión, exportas un informe de Little Hotelier, lo pegas en ChatGPT y preguntas. Sirve para un análisis puntual, pero los datos son una foto fija, tu exportación puede no incluir algunos campos y la lista de huéspedes que pegaste se queda en el chat.

Con la app MCP, ChatGPT le pide a Hotelier Tools exactamente lo que necesita, cuando lo necesita: las llegadas de hoy, el saldo de un huésped, las tarifas de la semana que viene. No exportas nada, y la respuesta refleja Little Hotelier en ese momento.

Si aun así prefieres hojas de cálculo, mira [exportar reservas a Excel](/blog/export-little-hotelier-reservations-excel).

## ¿Puede ChatGPT hacer cambios y cómo se aprueban?

En los planes con MCP completo, sí. Hotelier Tools ofrece herramientas de escritura como actualizar una reserva (primero una propuesta de antes y después, luego un paso de aplicar), registrar un pago, apuntar una estancia para la [factura al check-out](/blog/send-invoice-to-guest-at-checkout) y aplicar precios.

::callout{type="warning" title="La confirmación de ChatGPT es la única aprobación"}
Dentro del panel de Hotelier Tools, todo cambio espera una tarjeta de aprobación. Fuera de él no hay ninguna: **una herramienta de escritura se ejecuta cuando ChatGPT la llama.** OpenAI dice que "las acciones de escritura requieren confirmación por defecto" y advierte de que acciones de escritura erróneas "podrían destruir datos". Lee cada confirmación antes de aceptarla.
::

Reglas prácticas:

- **Mantén los permisos de la app en Always ask.** Los [permisos de apps](https://help.openai.com/en/articles/20001495) de OpenAI van de **Always ask** a **Allow all actions**; esta última se salta los avisos y conlleva un "riesgo elevado". ChatGPT trata cualquier herramienta que no esté marcada como de solo lectura como acción de escritura, así que espera un aviso incluso en algunas consultas.
- **No dejes que recuerde aprobaciones de escrituras** en conversaciones largas. Una elección recordada solo dura en ese chat, pero un chat puede hacer mucho.
- **Ojo con las instrucciones escondidas en mensajes de huéspedes.** OpenAI advierte de la inyección de prompts. Si ChatGPT propone algo que no pediste, recházalo.

Algunas acciones no están nunca disponibles para ChatGPT, apruebes lo que apruebes. Las herramientas irreversibles están bloqueadas para todo cliente externo, incluido enviar una factura por email a un huésped, los reembolsos, presentar la encuesta del INE, enviar invitaciones al equipo, enviar por email un enlace de factura a un huésped, responder a una pregunta de Booking.com y ejecutar la revisión de la lista de espera que escribe a los huéspedes. Se quedan en el [asistente del panel](/blog/ai-assistant-hotel-front-desk), detrás de una tarjeta.

## Privacidad: ¿adónde van los datos?

Cuando ChatGPT llama a una herramienta de Hotelier Tools, el resultado, como nombres de huéspedes, fechas e importes, entra en la conversación y lo procesa OpenAI.

Según el [artículo sobre apps conectadas](https://help.openai.com/en/articles/11487775) de OpenAI, a octubre de 2026:

- En **Business, Enterprise y Edu**, OpenAI "no usa por defecto la información a la que se accede desde conectores para entrenar modelos".
- En **Free, Plus, Go y Pro**, OpenAI "puede usar la información a la que se accede desde las apps para entrenar nuestros modelos" si **Improve the model for everyone** está activado. Desactívalo en [Data controls](https://help.openai.com/en/articles/7730893) antes de conectar datos del hotel.
- La memoria de ChatGPT puede conservar detalles que leyó a través de una app. Revisa **Memory** en los ajustes si te importa.

Los datos de los huéspedes son datos personales y tu hotel sigue siendo responsable de ellos. Pide solo lo que necesites.

::demo-cta{path="/developer/mcp-setup"}
::

## Solución de problemas

- **No aparece el modo desarrollador.** Puede que tu plan no lo incluya o que, en Business, solo lo puedan usar los administradores. En Enterprise y Edu, pídeselo a un administrador.
- **No aparece ninguna herramienta de Hotelier Tools, o solo algunas.** Puede que tu plan solo permita permisos de lectura y consulta. Consulta el centro de ayuda de OpenAI para tu plan, o usa [Claude](/blog/connect-claude-to-little-hotelier), que permite conectores personalizados con herramientas de escritura en todos los planes.
- **ChatGPT deja de funcionar con la app al cabo de un mes.** El inicio de sesión duró 30 días. Vuelve a conectar desde **Settings → Plugins** (o **Apps**).
- **Error "No Little Hotelier credentials configured".** Conecta antes Little Hotelier en **Credenciales** en Hotelier Tools.
- **"lh_frozen" o similar.** El inicio de sesión en Little Hotelier está en pausa tras un acceso fallido, a menudo por una contraseña caducada. Guarda la contraseña nueva en **Credenciales** o pulsa **Comprobar ahora y reanudar**.

## Resumen

- Activa el modo desarrollador, crea una app con la URL `https://dashboard.hotelier.tools/api/mcp` y **OAuth**, y pulsa **Permitir acceso**.
- Comprueba tu plan: el MCP completo de lectura y escritura es para Business, Enterprise y Edu; Pro, y posiblemente Plus, tienen permisos de solo lectura, según OpenAI.
- Mantén los permisos de la app en **Always ask**; los reembolsos y otras acciones irreversibles están bloqueados de todos modos.
- ¿Nuevo en MCP? Empieza por [qué es un servidor MCP](/blog/what-is-mcp-server-hotels). Todas las herramientas están en la [página de API y MCP](/tools/bot/api-mcp).
