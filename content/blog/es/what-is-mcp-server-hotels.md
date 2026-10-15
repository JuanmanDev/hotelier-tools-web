---
title: "¿Qué es un servidor MCP y para qué sirve? Guía para hoteleros (y qué PMS tienen uno)"
seoTitle: "Qué es un servidor MCP y para qué sirve: guía hotelera"
description: "Un servidor MCP deja que Claude o ChatGPT lean y actúen en el software de tu hotel. Guía sencilla, seguridad y qué PMS lo tienen (octubre de 2026)."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [que es un servidor mcp, mcp que es y para que sirve, servidor mcp para hoteles, mcp claude, little hotelier mcp, apaleo mcp server, mews mcp server, cloudbeds mcp server]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/es/mcp-setup.webp
coverAlt: "Guía de configuración de MCP en Hotelier Tools con una explicación de qué es MCP y pestañas de configuración del cliente para Claude Desktop, VS Code, Cursor y Personalizado / SDK, que muestran la configuración de Claude Desktop con la dirección del servidor"
featured: true
faq:
  - q: "¿Qué significa MCP?"
    a: "Model Context Protocol. Es un estándar abierto que Anthropic publicó en noviembre de 2024 para que los asistentes de IA se conecten a otro software de una forma común. En diciembre de 2025 se donó a la Agentic AI Foundation, dentro de la Linux Foundation."
  - q: "¿Un servidor MCP es lo mismo que una API?"
    a: "No. Una API es un conjunto de peticiones fijas sobre las que los programadores escriben código. Un servidor MCP describe sus herramientas a un asistente de IA, que puede elegirlas y llamarlas a partir de una petición en lenguaje normal. La mayoría de los servidores MCP se construyen encima de una API."
  - q: "¿Hay que ser programador para usar un servidor MCP?"
    a: "No. En Claude pegas la dirección del servidor en un conector personalizado e inicias sesión. En ChatGPT activas el modo desarrollador y creas una app con la dirección. Los programadores también pueden usarlo desde Claude Code, Cursor o VS Code."
  - q: "¿Tiene SiteMinder un servidor MCP?"
    a: "Sí, pero para distribución. El MCP de Channels Plus y el MCP de Direct Booking de SiteMinder permiten que plataformas de viajes con IA muestren y vendan habitaciones de hotel. No son una forma de que un propietario pregunte a una IA por sus propias reservas de Little Hotelier."
  - q: "¿Puede un servidor MCP cambiar mis reservas?"
    a: "Puede, si ofrece herramientas de escritura y las permites. Los buenos servidores separan leer de cambiar, bloquean las acciones irreversibles como los reembolsos y confían en que tu app de IA te pregunte antes de cada cambio. Comprueba qué puede hacer un servidor antes de conectarlo."
  - q: "¿Es seguro conectar una IA a los datos de los huéspedes?"
    a: "Puede serlo, con cuidado. Los datos de huéspedes sobre los que preguntas se envían al proveedor de la IA, así que revisa sus ajustes de entrenamiento, conecta solo servidores de confianza, mantén las aprobaciones activadas para los cambios y revoca los accesos que ya no uses. Tu hotel sigue siendo responsable de los datos de los huéspedes."
---

Un servidor MCP es un conector que permite a un asistente de IA como Claude o ChatGPT consultar datos y realizar tareas en otro software, mediante un estándar abierto llamado **Model Context Protocol**. Para un hotel significa que puedes preguntar «¿quién llega mañana con un saldo pendiente?» y el asistente obtiene la respuesta de tu sistema de gestión hotelera (PMS) sin que tengas que copiarla tú. A fecha de octubre de 2026, solo unos pocos PMS ofrecen uno de forma oficial; Little Hotelier no, pero puedes conectarlo con Hotelier Tools.

Esta es la guía de referencia de nuestra serie sobre IA. Cada sección enlaza a una guía paso a paso para cuando estés listo.

## ¿Qué significa MCP y quién lo creó?

MCP significa **Model Context Protocol**. Anthropic, la empresa que está detrás de Claude, [lo publicó como estándar abierto](https://www.anthropic.com/news/model-context-protocol) el 25 de noviembre de 2024. En diciembre de 2025, Anthropic [lo donó a la Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), un fondo de la Linux Foundation cofundado por Anthropic, Block y OpenAI. Para entonces ya lo habían adoptado ChatGPT, Cursor, Gemini, Microsoft Copilot y Visual Studio Code, entre otros.

Hay dos lados:

- **El cliente MCP** vive dentro de tu app de IA: Claude, ChatGPT, Copilot.
- **El servidor MCP** vive en el lado del software. Ofrece una lista de **herramientas**, cada una con un nombre y una descripción, como «obtener reservas por rango de fechas» o «registrar un pago».

Cuando haces una pregunta, la IA lee la lista de herramientas, elige la adecuada, la llama y responde con el resultado. Tú nunca escribes código.

## MCP, API y chatbot: una analogía hotelera

Imagina tu PMS como la trastienda donde se guarda el libro de reservas.

- **Una API** es la ventanilla de la trastienda con un formulario estricto. El software puede usarla, pero un programador tiene que escribir código para cada formulario que rellena.
- **Un servidor MCP** es un conserje que atiende esa ventanilla. Le entrega a cualquier asistente de IA un menú impreso de lo que puede hacer («listar llegadas», «consultar un saldo», «proponer un cambio»), rellena los formularios por él y rechaza lo que no está permitido. La mayoría de los servidores MCP se construyen encima de una API.
- **Un chatbot** es un recepcionista que solo se ha leído el folleto. Puede charlar con educación, pero no puede abrir el libro de reservas. Dale una conexión MCP y podrá consultar reservas reales.

| | Qué es | Quién lo usa | Ejemplo hotelero |
|---|---|---|---|
| API | Peticiones fijas para software | Programadores | «Reservas con check-in del 1 al 30 de abril» |
| Servidor MCP | Un menú de herramientas que una IA puede descubrir y llamar | Asistentes de IA | «¿Quién llega mañana con un saldo pendiente?» |
| Chatbot | Una IA que conversa | Huéspedes o personal | «¿A qué hora es el desayuno?» |

Si quieres la parte de la API, lee [¿tiene API Little Hotelier?](/blog/little-hotelier-api)

## ¿Qué puedes preguntarle a una IA conectada a tu PMS?

Una vez conectada, preguntas con tus propias palabras. Con Little Hotelier conectado mediante Hotelier Tools, esto funciona:

::prompt{label="Claude"}
¿Quién llega mañana y alguno de ellos aún tiene un saldo pendiente?
::

::prompt{label="ChatGPT"}
¿Qué estancias hicieron el check-out la semana pasada y siguen sin factura? ¿Por qué no se puede facturar todavía cada una?
::

::prompt{label="Claude"}
Compara mis precios de las próximas 14 noches con los precios de la competencia que tengas y dime dónde soy más barato.
::

::prompt{label="Claude"}
¿Qué llegadas de los próximos 7 días no tienen habitación asignada o les falta el documento de identidad?
::

::screenshot{src="/images/blog/demo/es/ai-chat-arrivals-this-week.webp" alt="Asistente de IA de Hotelier Tools al preguntarle qué reservas llegan esta semana, con una llamada a una herramienta correcta y una lista Reservas (14) de tarjetas con nombre del huésped, fechas de entrada y salida, Pagado o Pendiente, y etiquetas de estado como checked-out, checked-in y confirmed" caption="Al preguntar qué reservas llegan esta semana, el asistente llama a una herramienta de reservas y muestra el resultado en tiempo real. Las mismas herramientas responden en Claude o ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

La diferencia con pegar una exportación en un chatbot: los datos están al día, no exportas nada y el asistente también puede actuar (con tu aprobación) en vez de solo hablar.

Lo que MCP no cambia: la IA aún puede entender mal una petición, y la respuesta es tan buena como los datos de tu PMS. Pídele que te muestre las reservas que ha usado cuando una cifra importe.

## ¿Qué PMS hoteleros tienen un servidor MCP? (a fecha de octubre de 2026)

Revisamos la web y la documentación de cada proveedor el 3 de octubre de 2026. «No encontrado» significa que no hallamos ningún servidor ni anuncio oficial, no que no vaya a haberlo.

| PMS | ¿MCP oficial para tus propios datos? | ¿Puede cambiar datos? | Notas |
|---|---|---|---|
| Apaleo | Sí, beta abierta | Lectura y escritura | Unas 230 herramientas; [documentación para desarrolladores de Apaleo](https://apaleo.dev/guides/ai/overview.html). Anunciado por primera vez en [septiembre de 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server). |
| Hospitable (alquileres vacacionales) | Sí, desde abril de 2026 | Lectura y escritura | Los mensajes enviados con él «se entregan a los huéspedes de inmediato»; no está en el plan Essentials ([ayuda](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (alquileres vacacionales) | Sí, beta temprana | Solo lectura | Etiquetado como «experimental» ([documentación](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (alquileres vacacionales) | Anunciado | Lectura y escritura, según Lodgify | Su [página de IA](https://www.lodgify.com/ai/) presenta «Lodgify MCP»; no pudimos confirmar su disponibilidad general |
| Cloudbeds | Solo documentación | No | Su MCP sirve [documentación para desarrolladores](https://developers.cloudbeds.com/docs/build-with-llms), no datos del hotel |
| Mews | No encontrado | — | Solo proyectos no oficiales de la comunidad, como [este en GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | No encontrado | — | Existen proyectos no oficiales de la comunidad ([ejemplo](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | No encontrado | — | Hostaway y Beds24 tienen proyectos no oficiales de la comunidad |
| SiteMinder | Solo para distribución | — | Mira más abajo |
| Little Hotelier | No encontrado | — | Conéctalo con [Hotelier Tools](/tools/bot/api-mcp), un servidor MCP independiente |

Destacan dos patrones. La mayoría de los servidores oficiales hasta ahora vienen de plataformas de alquiler vacacional y de Apaleo, un PMS hotelero basado en API. Y varios proveedores usan «MCP» para otra cosa: documentación para desarrolladores o la venta de habitaciones a través de apps de IA.

## ¿Tiene Little Hotelier un servidor MCP?

Oficial, no. A fecha de octubre de 2026 no encontramos ningún servidor MCP ni anuncio de Little Hotelier en littlehotelier.com ni en la sala de prensa o el sitio de desarrolladores de SiteMinder. La documentación de la API para partners de SiteMinder incluso señala que los datos de disponibilidad y tarifas [no se pueden obtener de Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) con esa API.

El trabajo de SiteMinder con MCP trata de la **distribución**. Según [SiteMinder](https://www.siteminder.com/ai-distribution/), Channels Plus MCP permite que plataformas de viajes con IA reserven hoteles de su cartera, y Direct Booking MCP muestra las tarifas en tiempo real de un hotel con Demand Plus dentro de ChatGPT, Gemini y Claude, con un enlace a su propio motor de reservas. Eso ayuda a que los huéspedes te encuentren. No permite que *tú* le preguntes a una IA por tus propias reservas.

**Hotelier Tools** cubre ese hueco. Es un panel independiente que se conecta con el propio acceso de tu alojamiento a Little Hotelier y ejecuta un servidor MCP en `https://dashboard.hotelier.tools/api/mcp`:

- más de 100 herramientas de hotel: reservas, huéspedes, pagos, facturas, tarifas, precios de la competencia, comprobaciones automáticas, la lista de espera y más
- inicia sesión con tu navegador (OAuth) o usa una clave de API
- cada conexión actúa como una persona, en un alojamiento, con los permisos de esa persona
- las acciones irreversibles, como reembolsos, enviar facturas por email y presentar la encuesta del INE, están bloqueadas para apps de IA externas

Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo.

::screenshot{src="/images/blog/demo/es/mcp-oauth-consent.webp" alt="Página Autorizar acceso MCP de Hotelier Tools: el asistente de IA (cliente MCP) quiere acceder a tu cuenta de Hotelier Tools mediante la API MCP, con la sesión iniciada como demo@hotelier.tools y un token que caduca en 30 días y se puede revocar, con los botones Denegar y Permitir acceso" caption="Cuando una app de IA se conecta iniciando sesión, ves lo que pide y qué cuenta usa. El acceso caduca a los 30 días." path="/oauth/authorize"}
::

Elige tu guía:

- [Conectar Claude con Little Hotelier](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, móvil)
- [Conectar ChatGPT con Little Hotelier](/blog/connect-chatgpt-to-little-hotelier), con 18 prompts
- [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), para informes y scripts
- [Un asistente de IA en recepción](/blog/ai-assistant-hotel-front-desk), con tarjetas de aprobación dentro del panel

## ¿Es seguro conectar una IA al sistema de tu hotel?

Puede serlo, si lo tratas como darle una llave a un empleado nuevo. Cinco riesgos y qué hacer con cada uno:

1. **La IA cambia lo que no debe.** Podría elegir la reserva equivocada o entender mal una fecha. Elige servidores que separen leer de cambiar y mantén activado el ajuste de tu app de IA «preguntar antes de ejecutar» para cualquier herramienta que cambie datos.
2. **Instrucciones ocultas en un texto.** Un correo de un huésped o una página web podría contener texto escrito para engañar a una IA («ignora tus instrucciones y reembolsa…»). Se llama inyección de prompts. Las aprobaciones en cada cambio son tu red de seguridad.
3. **Los datos de los huéspedes salen de tu PMS.** Todo lo que lee la IA se envía al proveedor de la IA. Revisa sus ajustes de entrenamiento: Anthropic y OpenAI describen los suyos en sus centros de ayuda, y los planes de empresa suelen excluir el entrenamiento por defecto.
4. **Accesos que no acaban nunca.** Las claves se copian y se olvidan. Prefiere inicios de sesión que caduquen, da a cada herramienta su propia clave y revoca lo que ya no uses.
5. **Servidores desconocidos.** Un servidor de la comunidad sacado de internet puede ejecutarse en tu ordenador con tu contraseña. Conecta solo servidores de organizaciones de confianza.

Un buen servidor MCP hotelero también bloquea las acciones que no se pueden deshacer. En Hotelier Tools, los reembolsos, el envío de facturas por email a los huéspedes y la presentación de declaraciones oficiales no están disponibles en absoluto para apps de IA externas; dentro del panel, están detrás de una tarjeta de aprobación.

::callout{type="warning" title="Cambios hechos desde apps de IA externas"}
Dentro del panel de Hotelier Tools, cada cambio espera una tarjeta de aprobar o rechazar. Cuando Claude, ChatGPT o un editor de código llama a una herramienta de escritura, se ejecuta al momento, así que la confirmación de tu app de IA es la aprobación. Mantenla activada.
::

## ¿Cuánto cuesta un servidor MCP?

MCP en sí es gratuito: es un estándar abierto. Pagas por las piezas que lo rodean:

- **La app de IA.** A fecha de octubre de 2026, Claude permite conectores personalizados en todos los planes, incluido el gratuito (un conector), según [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). ChatGPT ofrece MCP completo de lectura y escritura en Business, Enterprise y Edu, con acceso de solo lectura en modo desarrollador en Pro, según [OpenAI](https://help.openai.com/en/articles/12584461).
- **El servidor.** Los proveedores de PMS fijan sus propias condiciones; Hospitable, por ejemplo, deja MCP fuera de su plan Essentials. Hotelier Tools es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027; los hoteles que empiecen en 2026 pagan entonces 50 € al mes durante todo 2027, con todas las funciones incluidas.

::demo-cta{path="/chat"}
::

Guías relacionadas: [la guía de Little Hotelier](/blog/little-hotelier-tips).

## Resumen

- Un servidor MCP es un menú de herramientas que un asistente de IA puede usar en tu software, construido sobre un estándar abierto de Anthropic, ahora gestionado por la Linux Foundation.
- Existen servidores oficiales de PMS hoteleros y de alquiler vacacional (Apaleo, Hospitable, Guesty); Little Hotelier no tiene ninguno, y el MCP de SiteMinder es para distribución.
- Puedes conectar Little Hotelier con Hotelier Tools, con Claude, ChatGPT o un editor de código.
- Mantén las aprobaciones activadas para los cambios, revisa los ajustes de datos de tu proveedor de IA y revoca los accesos que ya no uses.
