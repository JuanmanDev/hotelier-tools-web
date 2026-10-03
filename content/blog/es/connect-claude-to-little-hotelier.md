---
title: "Cómo conectar Claude con Little Hotelier (MCP, paso a paso)"
seoTitle: "Conectar Claude con Little Hotelier: MCP paso a paso"
description: "Conecta Claude con Little Hotelier con un conector personalizado: pega una URL, inicia sesión y permite el acceso. Primeras preguntas, seguridad y problemas."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [conectar claude con little hotelier, little hotelier mcp, servidor mcp claude, conectores claude mcp, claude desktop mcp configuración, conector personalizado claude]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/es/mcp-setup.webp
coverAlt: "Guía de configuración MCP de Hotelier Tools con la explicación ¿Qué es MCP? y la pestaña Claude Desktop seleccionada, con los pasos y el fragmento de configuración con la URL del servidor MCP"
featured: true
faq:
  - q: "¿Qué planes de Claude pueden añadir un conector personalizado?"
    a: "A octubre de 2026, Anthropic indica conectores personalizados en los planes Free, Pro, Max, Team y Enterprise. Las cuentas Free pueden añadir un conector personalizado. En Team y Enterprise, un propietario (Owner) lo añade para la organización y después cada miembro se conecta con su propio acceso."
  - q: "¿Funciona la conexión con Little Hotelier en la app móvil de Claude?"
    a: "Sí. Una vez que la conectas en claude.ai o en Claude Desktop, Anthropic dice que también está disponible en Claude para iOS y Android. Añadir conectores personalizados nuevos desde el móvil sigue en beta, así que configúralo desde un ordenador."
  - q: "¿Cómo desconecto Claude o cambio el acceso?"
    a: "En Claude, abre Customize, luego Connectors, y elige Disconnect o Remove. En Hotelier Tools, abre API y MCP, Claves API y revoca la conexión o la clave que usaste en Claves activas. Revocar desde Hotelier Tools corta el acceso al instante."
  - q: "¿Puede Claude cambiar mis reservas o mis precios?"
    a: "Sí, si se lo permites. Las herramientas de escritura se ejecutan cuando Claude las llama, y Hotelier Tools no añade una segunda tarjeta de aprobación fuera de su propio panel, así que mantén la aprobación por herramienta de Claude en Needs approval. Los reembolsos, el envío de facturas por email, la presentación de la encuesta del INE y otras acciones irreversibles están bloqueados para Claude."
  - q: "¿Tiene Little Hotelier su propio servidor MCP?"
    a: "No uno oficial a octubre de 2026. El trabajo de SiteMinder con MCP trata de vender habitaciones a través de asistentes de IA, no de que los propietarios consulten sus propios datos. Hotelier Tools ejecuta un servidor MCP independiente que se conecta con el acceso a Little Hotelier de tu propio alojamiento."
  - q: "¿Es una integración oficial de Anthropic o de Little Hotelier?"
    a: "No. Hotelier Tools es independiente y no está afiliado ni respaldado por Anthropic, SiteMinder ni Little Hotelier. Usa el protocolo estándar MCP que Claude admite para cualquier conector personalizado."
---

Little Hotelier no ofrece un servidor MCP propio (a octubre de 2026), pero aun así puedes conectar Claude con él a través de Hotelier Tools, que ejecuta uno para tu alojamiento. En Claude, abre **Customize → Connectors → Add custom connector**, pega `https://dashboard.hotelier.tools/api/mcp`, inicia sesión en Hotelier Tools y pulsa **Permitir acceso**. Claude podrá entonces responder con tus reservas en vivo y, si se lo permites, hacer cambios.

¿Es la primera vez que oyes hablar de esto? Lee antes [qué es un servidor MCP](/blog/what-is-mcp-server-hotels). Son tres minutos.

## Qué necesitas antes de empezar

::callout{type="tip" title="Lista de comprobación"}
- **Una cuenta de Claude.** A octubre de 2026, [Anthropic indica conectores personalizados](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) (en inglés) en los planes Free, Pro, Max, Team y Enterprise. Las cuentas Free pueden añadir uno.
- **Una cuenta de Hotelier Tools** con Little Hotelier conectado en **Credenciales** (`/credentials`). Es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.
- **Acceso a la API en Hotelier Tools.** Lo tiene el propietario del alojamiento. Sin él, la conexión se rechaza.
::

Hotelier Tools lee tus datos con el acceso a Little Hotelier de tu propio alojamiento. No está afiliado ni respaldado por SiteMinder, Little Hotelier ni Anthropic.

## Cómo conectar Claude con Little Hotelier (claude.ai y Claude Desktop)

Es la vía recomendada. Inicias sesión con el navegador, así que no hay ninguna clave que copiar. Estos pasos siguen las [instrucciones actuales de Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) para cuentas Free, Pro y Max. Los nombres de los menús de Claude van en inglés; si tu Claude está en español, los verás traducidos.

1. Abre [claude.ai](https://claude.ai) o la app Claude Desktop y ve a **Customize → Connectors**. Algunas pantallas todavía lo llaman **Settings → Connectors**.
2. Haz clic en **Add custom connector** (en algunas cuentas: **+ Add** y luego **Add custom connector**).
3. Ponle de nombre `Hotelier Tools` y pega la URL del servidor MCP: `https://dashboard.hotelier.tools/api/mcp`
4. Si Claude te pregunta cómo inicia sesión la gente, elige **Sign in now**. Si te pide un cliente OAuth, elige **Register automatically**: el servidor de Hotelier Tools admite ese registro automático. Si solo ves **Advanced settings**, déjalos vacíos.
5. Haz clic en **Add** y luego en **Connect**. Se abre una ventana de Hotelier Tools.
6. Inicia sesión en Hotelier Tools. En **Autorizar acceso MCP**, elige el alojamiento (solo si tienes varios) y pulsa **Permitir acceso**.

::screenshot{src="/images/blog/demo/es/mcp-oauth-consent-card.webp" alt="Tarjeta Autorizar acceso MCP: el asistente de IA (cliente MCP) quiere acceder a tu cuenta de Hotelier Tools a través de la API MCP, el email con el que has iniciado sesión, un token que caduca en 30 días y los botones Denegar y Permitir acceso" caption="Pulsa Permitir acceso (si tienes varios alojamientos, eliges uno antes). Claude nunca ve tu contraseña." path="/oauth/authorize" width="472" height="327"}
::

7. Empieza un chat nuevo, haz clic en **+**, abre **Connectors** y comprueba que **Hotelier Tools** está activado.
8. Haz una primera pregunta (ejemplos abajo). Claude muestra qué herramienta quiere usar y pregunta antes de ejecutarla.

El inicio de sesión dura **30 días**. Después, Claude te pide que vuelvas a conectar.

### En un plan Team o Enterprise

Un propietario (Owner) añade el conector una sola vez: **Organization settings → Connectors → Add → Custom → Web**, con la misma URL. Cada compañero abre entonces **Customize → Connectors**, busca Hotelier Tools con la etiqueta **Custom** y hace clic en **Connect**. Cada conexión inicia sesión por separado en Hotelier Tools, y Claude actúa con los permisos del acceso que se haya usado.

### En la app móvil

Según [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), un conector que configuras en claude.ai o en Claude Desktop también está disponible en Claude para iOS y Android. Añadir uno directamente desde el móvil sigue en beta, así que haz la configuración en un ordenador.

## Usar una clave de API en lugar de iniciar sesión

La mayoría debería usar el inicio de sesión de arriba. Una clave de API es útil cuando quieres un acceso que no caduque a los 30 días, o para un cliente que no puede hacer el inicio de sesión en el navegador.

1. En Hotelier Tools, abre **API y MCP → Claves API** (`/developer/api-keys`).
2. En "Generar una clave nueva", escribe un nombre como `claude-desktop` y pulsa **Generar clave**.
3. Cópiala ahora. La página avisa: "Copia esta clave ahora: no se volverá a mostrar." Las claves empiezan por `htk_`.

::screenshot{src="/images/blog/demo/es/api-key-generated-masked.webp" alt="Página de claves de API justo después de generar una clave: recuadro verde Clave generada que dice Copia esta clave ahora: no se volverá a mostrar, con la clave enmascarada y un botón de copiar, la nueva clave Integración del blog en Claves activas junto a otra clave, cada una con Revocar, y un aviso de Clave de API creada" caption="Crea una clave, o revoca una, en la página Claves API. La clave completa solo se muestra una vez." path="/developer/api-keys"}
::

**En claude.ai**, algunas organizaciones ven una sección **Request headers** en el cuadro del conector. Anthropic la marca como beta y solo disponible para un conjunto limitado de organizaciones. Si la tienes, elige **No sign-in**, añade la cabecera `authorization` e introduce `Bearer htk_TU_CLAVE_DE_API` (con la palabra Bearer y un espacio).

**En Claude Desktop**, el archivo de configuración (**Settings → Developer → Edit Config**) está pensado para servidores que se ejecutan en tu propio ordenador. La documentación de Anthropic dice que los servidores remotos se añaden [mediante Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). La página de configuración MCP de Hotelier Tools muestra un fragmento con `url` + `headers`; si Claude Desktop lo ignora, el truco habitual es el puente gratuito de la comunidad [mcp-remote](https://github.com/punkpeye/mcp-remote), que necesita [Node.js](https://nodejs.org) instalado. Es una configuración típica que no hemos probado en todas las versiones de Claude Desktop:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Guarda el archivo y cierra del todo Claude Desktop y vuelve a abrirlo. La cabecera se escribe sin espacio después de los dos puntos a propósito: la documentación de mcp-remote explica que Claude Desktop en Windows puede estropear los espacios en los argumentos.

### Clave de API o inicio de sesión: ¿cuál usar?

| | Inicio de sesión (OAuth) | Clave de API (`htk_…`) |
|---|---|---|
| Configuración | Pegar la URL, iniciar sesión, **Permitir acceso** | Generar una clave y pegarla en una configuración |
| Dura | 30 días, luego hay que reconectar | Hasta que la revoques |
| Ideal para | claude.ai, Claude Desktop, móvil | Scripts, [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Se revoca en | `/developer/api-keys` (Claves activas) | `/developer/api-keys` |

Las dos funcionan igual una vez conectadas: Claude actúa **como la persona que inició sesión o creó la clave**, en **un solo alojamiento**, con los permisos actuales de esa persona.

## Qué preguntarle primero a Claude

Empieza con preguntas que solo lean. Mencionar "Hotelier Tools" ayuda a Claude a elegir el conector correcto en lugar de buscar en la web.

::prompt{label="Claude"}
Con Hotelier Tools, ¿quién llega hoy y mañana? Muéstrame nombre, noches, habitación y cualquier saldo todavía sin pagar.
::

::prompt{label="Claude"}
¿Qué reservas que llegan en los próximos 7 días todavía no tienen habitación asignada?
::

::prompt{label="Claude"}
¿Qué huéspedes hicieron el check-out la semana pasada y siguen sin factura? De cada uno, dime por qué todavía no se puede facturar.
::

::prompt{label="Claude"}
Enséñame las incidencias abiertas de las comprobaciones automáticas, agrupadas por fecha de llegada, con lo que tengo que corregir en Little Hotelier.
::

::prompt{label="Claude"}
¿Cuáles son mis tarifas y mi disponibilidad del próximo fin de semana, y cómo se comparan con los precios de la competencia que tengas?
::

::prompt{label="Claude"}
Explícame, paso a paso, el precio recomendado para una habitación doble el sábado 14 de noviembre.
::

Claude también puede combinar respuestas: "Haz una tabla con las llegadas de la semana que viene con saldo pendiente y redacta un recordatorio de pago educado para cada una" funciona bien. Los borradores se quedan en Claude; no se envía nada.

## ¿Qué puede hacer Claude con los datos de tu hotel y cómo lo mantienes seguro?

El servidor MCP de Hotelier Tools ofrece a Claude más de 100 herramientas de hotel, siempre limitadas por tus permisos.

**Puede leer:** reservas y huéspedes, pagos, facturas y si están listas para facturar, tarifas y disponibilidad, precios de la competencia y recomendaciones de precio con sus razones, incidencias de las comprobaciones automáticas, la lista «no volver a alojar», la lista de espera, las tareas programadas y los datos del alojamiento leídos de Little Hotelier.

**Puede cambiar, cuando Claude llama a la herramienta:** los datos de una reserva (primero una propuesta con antes y después, luego un paso de aplicar que necesita `confirmed: true`), registros de pago, la inscripción para la [factura al check-out](/blog/send-invoice-to-guest-at-checkout), precios a partir de las recomendaciones, el cierre de ventas (stop sell) de un canal, entradas de la lista de espera y tareas programadas.

**No puede** hacer nada irreversible: esas herramientas están bloqueadas para Claude y para cualquier otro cliente externo. Por ejemplo, no puede:

- enviar una factura por email a un huésped
- hacer un reembolso
- presentar la encuesta del INE
- enviar invitaciones al equipo
- enviar por email un enlace de factura a un huésped
- responder a una pregunta de un huésped de Booking.com
- ejecutar la revisión de la lista de espera que escribe a los huéspedes

Eso se queda en el chat del panel de Hotelier Tools, detrás de una tarjeta de aprobación. Claude tampoco puede ver otros alojamientos, ir más allá de tus permisos ni hacer nada que la propia Little Hotelier rechazaría.

### Acciones de escritura: cómo mantener a Claude seguro

::callout{type="warning" title="El aviso de Claude es tu aprobación"}
Dentro del panel de Hotelier Tools, todo cambio espera una tarjeta de aprobar o rechazar. Fuera de él no hay una segunda tarjeta: **cuando Claude llama a una herramienta de escritura, se ejecuta.** La aprobación que das en Claude es la única.
::

Cinco hábitos que lo mantienen seguro:

1. **Mantén la aprobación activada en las herramientas de escritura.** En **Customize → Connectors → Hotelier Tools**, Anthropic te deja poner cada herramienta en **Always allow**, **Needs approval** o **Blocked**. Las herramientas de lectura pueden ir en "Always allow". Deja en "Needs approval" todo lo que modifique datos.
2. **Bloquea lo que nunca uses.** Si Claude nunca debería tocar los precios, pon `apply_price_recommendations` y `set_channel_stop_sell` en **Blocked**.
3. **Lee la propuesta.** En los cambios de reserva, Claude primero muestra un antes y un después de `propose_reservation_changes`. Comprueba la referencia de la reserva y los valores antes de decir que sí.
4. **Ojo con las instrucciones escondidas en un texto.** Los mensajes de huéspedes y las webs los escriben desconocidos. Si el resultado de una herramienta pide de repente que Claude haga algo que tú no pediste, para. Anthropic da el [mismo consejo](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Sabe quién está conectado.** Cada conexión actúa como el acceso de Hotelier Tools que la creó. Revoca las antiguas en `/developer/api-keys`, y siempre que alguien deje el equipo.

## ¿Se envían los datos de mis huéspedes a Anthropic?

Sí, las partes que Claude lee. Cuando Claude llama a una herramienta, el resultado (nombres de huéspedes, fechas, importes) pasa a formar parte de tu conversación y lo procesa Anthropic según las condiciones de tu plan.

A octubre de 2026, Anthropic dice que los datos de entrenamiento de sus planes de consumo "no incluyen contenido en bruto de conectores… incluidos servidores MCP remotos y locales", salvo que lo copies en el chat ([fuente](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). En los planes comerciales (Team, Enterprise, API), las entradas y salidas [no se usan para entrenar por defecto](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Los datos de los huéspedes son datos personales y tu hotel sigue siendo responsable de ellos. Pídele a Claude solo lo que necesites y desactiva el conector en los chats que no lo necesiten.

::demo-cta{path="/developer/mcp-setup"}
::

## Solución de problemas

| Qué ves | Causa probable | Qué hacer |
|---|---|---|
| Claude dice que no puede conectar, o un error 401 | El inicio de sesión caducó (30 días), se revocó la clave o ya no tienes acceso al alojamiento | **Disconnect** y **Connect** de nuevo, o crea una clave nueva |
| 400 "No Little Hotelier credentials configured" | Little Hotelier todavía no está conectado | Conéctalo en **Credenciales** (`/credentials`) |
| 403 `permission_denied` | Tu acceso no tiene permiso para la API | Pide al propietario que dé acceso a la API a tu rol |
| 423 `lh_frozen` | El inicio de sesión en Little Hotelier está en pausa tras un fallo de acceso, a menudo por una contraseña caducada | Guarda la contraseña nueva en **Credenciales** o pulsa **Comprobar ahora y reanudar** |
| Las herramientas no aparecen en el chat | El conector está desactivado en este chat, o no se reinició Desktop | **+ → Connectors** → actívalo; reinicia Claude Desktop tras editar la configuración |
| La ventana de inicio de sesión no se abre | Ventanas emergentes bloqueadas | Permite las ventanas emergentes para claude.ai y prueba **Connect** de nuevo |

## Próximos pasos

- ¿Lo quieres también en ChatGPT? Sigue [conectar ChatGPT con Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- ¿Vas a crear informes o scripts? Mira [Claude Code, Cursor y VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) o la [guía de la API REST](/blog/little-hotelier-api).
- ¿Prefieres tarjetas de aprobación para cada cambio? Usa el [asistente integrado](/blog/ai-assistant-hotel-front-desk) del panel.
- Todo lo que ofrece el servidor está en la [página de funciones de API y MCP](/tools/bot/api-mcp).
