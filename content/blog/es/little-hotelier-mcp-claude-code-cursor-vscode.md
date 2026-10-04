---
title: "Cómo usar tus datos de Little Hotelier en Claude Code, Cursor y VS Code (configurar MCP)"
seoTitle: "Configurar MCP de Little Hotelier en Claude Code y Cursor"
description: "Añade el servidor MCP de Hotelier Tools a Claude Code, Cursor, VS Code, Windsurf o Gemini CLI y crea informes de ocupación, una hoja o un panel."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [configurar mcp en claude code, que es claude code y para que sirve, mcp.json cursor, mcp.json vscode, claude code para no programadores, little hotelier mcp, gemini cli mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/es/mcp-setup.webp
coverAlt: "Guía de configuración de MCP en Hotelier Tools: una explicación de qué es MCP y pestañas de configuración del cliente para Claude Desktop, VS Code, Cursor y Personalizado / SDK, con Claude Desktop seleccionado y su fragmento de claude_desktop_config.json"
faq:
  - q: "¿Cuál es el comando claude mcp add para Little Hotelier?"
    a: "Ejecuta: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Sustituye la clave por una creada en API y MCP → Claves API de Hotelier Tools, y compruébalo con /mcp dentro de Claude Code."
  - q: "¿Dónde está mcp.json en Cursor y en VS Code?"
    a: "Cursor lee ~/.cursor/mcp.json para todos los proyectos y .cursor/mcp.json dentro de un proyecto. VS Code lee .vscode/mcp.json en el espacio de trabajo y un fichero a nivel de usuario que abres con el comando MCP: Open User Configuration. VS Code usa la clave servers, no mcpServers."
  - q: "¿Hace falta ser programador para usar Claude Code con los datos de mi hotel?"
    a: "No. Instalas Claude Code, pegas un comando y después pides las cosas con tus propias palabras. Ayuda saber dónde van tus ficheros y cómo ejecutar un script, pero Claude Code puede explicarte cada paso mientras trabaja."
  - q: "¿Puedo iniciar sesión en vez de usar una clave de API?"
    a: "Sí, en los clientes que admiten OAuth. Añade la URL del servidor sin cabecera y luego inicia sesión cuando el cliente te lo pida: en Claude Code ejecuta /mcp y elige autenticarte. La sesión dura 30 días. Las claves son mejores para scripts que se ejecutan sin supervisión."
  - q: "¿Es una API oficial de Little Hotelier o de SiteMinder?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con el propio acceso de tu alojamiento a Little Hotelier y ofrece su propia REST API y su propio servidor MCP."
---

Añade un servidor MCP remoto, `https://dashboard.hotelier.tools/api/mcp`, con una clave de API de Hotelier Tools, y Claude Code, Cursor, VS Code (modo agente de Copilot), Windsurf o Gemini CLI podrán leer tus reservas, tarifas y facturas de Little Hotelier mientras te escriben código. En Claude Code es un solo comando: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

Abajo tienes la configuración exacta para cada herramienta (revisada con la documentación de cada proveedor en octubre de 2026), tres cosas que merece la pena construir y cuándo llamar directamente a la REST API.

## Antes de empezar: crea una clave de API

Little Hotelier no publica un servidor MCP, y la propia documentación de la API para partners de SiteMinder dice que los datos de disponibilidad y tarifas [no se pueden obtener de Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). Hotelier Tools ofrece un servidor MCP y una REST API, con el propio acceso de tu alojamiento a Little Hotelier. No está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Contexto: [¿tiene API Little Hotelier?](/blog/little-hotelier-api)

1. En Hotelier Tools, conecta Little Hotelier en **Credenciales** (`/credentials`) si aún no lo has hecho.
2. Abre **API y MCP → Claves API** (`/developer/api-keys`).
3. Escribe un nombre que indique dónde vas a usar la clave, como `cursor-portatil`, y pulsa **Generar clave**.
4. Cópiala enseguida: «Copia esta clave ahora: no se volverá a mostrar». Empieza por `htk_`.

::screenshot{src="/images/blog/demo/es/api-keys.webp" alt="Página de claves de API en Hotelier Tools: el formulario Generar una clave nueva con un campo de nombre y el botón Generar clave, una clave activa (MCP internal (chat), enmascarada) con un botón Revocar y las notas de Buenas prácticas de seguridad" caption="Una clave por herramienta permite revocar solo la que dejes de usar." path="/developer/api-keys"}
::

Una clave tiene los mismos permisos que tu cuenta de Hotelier Tools, en el único alojamiento donde la creaste. Puedes tener hasta 10 claves.

**Mantén la clave fuera de tus ficheros.** Guárdala en una variable de entorno llamada `HT_API_KEY` y haz referencia a ella desde las configuraciones:

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # o ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Abre una terminal nueva (y reinicia tu editor) para que reconozca la variable.

## Cómo añadir el servidor MCP a Claude Code, Cursor, VS Code, Windsurf y Gemini CLI

Cada herramienta guarda los mismos tres datos (dirección, transporte, clave) en un fichero ligeramente distinto. Elige la tuya.

### Claude Code

Claude Code tiene un comando integrado para servidores remotos ([documentación de Anthropic](https://code.claude.com/docs/en/mcp)):

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Después inicia `claude` y escribe `/mcp`. Hotelier Tools debería aparecer como **connected**; un estado `failed` con un 401 significa que la clave es incorrecta.

- **Ámbito.** Por defecto el servidor se guarda solo para la carpeta actual. Añade `--scope user` después del nombre para usarlo en todos los proyectos, o `--scope project` para escribir un `.mcp.json` compartido.
- **Iniciar sesión en vez de usar una clave.** Ejecuta el comando sin `--header`, y dentro de Claude Code escribe `/mcp` y autentícate en el navegador. Si ya conectaste Hotelier Tools como conector en claude.ai, Claude Code puede recogerlo cuando inicies sesión con la misma cuenta de Claude.

Para un proyecto que compartes con un compañero o guardas en Git, pon el servidor en `.mcp.json` y deja que cada persona aporte su propia clave:

```json [.mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${HT_API_KEY}" }
    }
  }
}
```

La línea `"type": "http"` es obligatoria: Claude Code trata una entrada con `url` pero sin `type` como un error de configuración.

### Cursor

Cursor lee `~/.cursor/mcp.json` para todos los proyectos, o `.cursor/mcp.json` dentro de uno ([documentación de Cursor](https://cursor.com/docs/context/mcp)):

```json [~/.cursor/mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Guarda y comprueba que el servidor está activado en los ajustes de MCP de Cursor (las versiones recientes listan los servidores en **Customize** en la barra lateral). Pregunta en el chat de **Agent**. Cursor pide aprobación antes de ejecutar una herramienta por defecto; déjalo así con este servidor. Si omites `headers`, Cursor te ofrece iniciar sesión en el navegador.

### VS Code con GitHub Copilot

VS Code usa `.vscode/mcp.json`, con `servers` como clave principal y un `"type": "http"` obligatorio ([documentación de VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). Su función `inputs` te pide la clave una vez y la guarda en el almacenamiento seguro de VS Code, así que nunca queda en el fichero:

```json [.vscode/mcp.json]
{
  "inputs": [
    {
      "type": "promptString",
      "id": "ht-api-key",
      "description": "Hotelier Tools API key (htk_…)",
      "password": true
    }
  ],
  "servers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${input:ht-api-key}" }
    }
  }
}
```

Abre Copilot Chat, cambia al modo **Agent** y usa **Configure Tools** para ver las herramientas de Hotelier Tools. VS Code puede pedirte que confíes en el servidor la primera vez que arranque. Para todos los espacios de trabajo, ejecuta **MCP: Open User Configuration** y pega ahí el mismo bloque. VS Code también admite el inicio de sesión en el navegador si omites `headers`.

::screenshot{src="/images/blog/demo/es/mcp-config-vscode-copilot.webp" alt="Pestaña VS Code / GitHub Copilot de la página de configuración de MCP de Hotelier Tools: un fragmento de .vscode/mcp.json con servers, hotelier-tools, type http, la URL /api/mcp de la demo y una cabecera Authorization con el marcador htk_YOUR_API_KEY, y después Activa el modo agente en Copilot Chat" caption="La página Configurar MCP tiene un fragmento listo para cada cliente. La demo muestra su propia dirección; la tuya es dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf y Gemini CLI

**Windsurf** (cuya documentación ahora está en Devin) lee `~/.codeium/windsurf/mcp_config.json` y usa `serverUrl` para los servidores remotos ([documentación](https://docs.devin.ai/windsurf/plugins/cascade/mcp)):

```json [~/.codeium/windsurf/mcp_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "serverUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Windsurf limita Cascade a 100 herramientas en total, y Hotelier Tools ofrece más de 100, así que puede que tengas que desactivar en el panel de MCP las que no uses.

**Gemini CLI** lee `~/.gemini/settings.json` (o `.gemini/settings.json` en un proyecto) y usa `httpUrl` para este tipo de servidor; `url` significaría el transporte SSE antiguo, que Hotelier Tools no ofrece ([documentación](https://geminicli.com/docs/tools/mcp-server/)):

```json [~/.gemini/settings.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "httpUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer $HT_API_KEY" }
    }
  }
}
```

O desde la terminal: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Escribe `/mcp` dentro de Gemini CLI para comprobarlo.

Estas dos configuraciones siguen la documentación de cada proveedor; no las hemos probado en todas las versiones.

| Herramienta | Fichero de configuración | Clave principal | Clave de la URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Tres cosas que merece la pena construir

El truco es dejar que el agente use MCP para *mirar* tus datos reales, y que después escriba código que llame a la [REST API](/tools/bot/api-mcp) para que el resultado se ejecute cada mes sin IA.

### Un informe mensual de ocupación

Pide a Claude Code (o al agente de Cursor) en una carpeta vacía:

::prompt{label="Claude Code"}
Usa el servidor MCP hotelier-tools para mirar mis tipos de habitación y las reservas del mes pasado. Después escribe un script de Node.js que llame a la REST API de Hotelier Tools (especificación: https://dashboard.hotelier.tools/api/v1/openapi.json) con la clave en HT_API_KEY y, para el mes que yo le pase, muestre la ocupación y la tarifa media diaria por tipo de habitación y las guarde en un CSV.
::

Un buen script empieza así. Obtiene los tipos de habitación y todas las reservas que se solapan con el mes, y guarda la respuesta en bruto para que puedas comprobar los campos antes de hacer cuentas:

```js [fetch-month.mjs]
// Uso: node fetch-month.mjs 2026-09   (necesita HT_API_KEY en tu entorno)
import { writeFile } from "node:fs/promises";

const API = "https://dashboard.hotelier.tools/api/v1";
const headers = {
  Authorization: `Bearer ${process.env.HT_API_KEY}`,
  "Content-Type": "application/json",
};

async function call(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const month = process.argv[2];
const [year, mon] = month.split("-").map(Number);
const startDate = `${month}-01`;
const endDate = new Date(Date.UTC(year, mon, 0)).toISOString().slice(0, 10);

const roomTypes = await call("/room-types");
const reservations = await call("/methods/getReservationsByDateRange", {
  method: "POST",
  body: JSON.stringify({ params: { startDate, endDate } }),
});

await writeFile(
  `raw-${month}.json`,
  JSON.stringify({ roomTypes: roomTypes.data, reservations: reservations.result }, null, 2)
);
console.log(`Saved raw-${month}.json`);
```

La propia especificación de la API dice que los objetos de reserva vienen de Little Hotelier y que su «forma puede variar», así que deja que el agente lea el fichero guardado antes de calcular nada. `/room-types` da `totalRooms` por tipo, que es la otra mitad de la cuenta de ocupación.

### Una sincronización con Google Sheets

Para una hoja que liste las llegadas de los próximos 30 días y se actualice cada mañana, abre tu hoja de cálculo, ve a **Extensiones → Apps Script** y pega:

```js [Code.gs]
function syncArrivals() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const fmt = d => Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const today = new Date();
  const in30 = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + fmt(today) + '&endDate=' + fmt(in30) + '&limit=100';

  const res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(res.getContentText());

  const rows = JSON.parse(res.getContentText()).data.map(r => [
    r.id, r.guestName, r.status, r.checkIn, r.checkOut, r.roomType, r.totalAmount,
  ]);
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Arrivals') || book.insertSheet('Arrivals');
  sheet.clearContents();
  sheet.appendRow(['ID', 'Guest', 'Status', 'Check-in', 'Check-out', 'Room type', 'Total']);
  if (rows.length) sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}
```

Guarda la clave en **Configuración del proyecto → Propiedades del script** como `HT_API_KEY`, ejecútalo una vez para conceder el acceso y añade un activador diario basado en tiempo en **Activadores**. `/reservations` devuelve como máximo 100 estancias por llamada, filtradas por fecha de check-in, así que divide los meses con mucha actividad en semanas. Recuerda que la hoja ahora contiene nombres de huéspedes: compártela con cuidado.

### Un pequeño panel a medida

::prompt{label="Cursor"}
Crea una pequeña aplicación web en Node.js que muestre la ocupación de esta noche, las llegadas y salidas de hoy y las estancias con saldo pendiente, usando la REST API de Hotelier Tools. Deja HT_API_KEY solo en el servidor; el navegador debe llamar a mi servidor, nunca directamente a la API. Guarda las respuestas en caché cinco minutos.
::

Dos reglas lo hacen seguro: la clave se queda en el servidor (cualquiera que abra una página puede leer las claves del código del navegador) y usas caché, porque la API permite 100 peticiones por minuto por dirección IP.

## ¿MCP o REST API: cuál debes usar?

| | Servidor MCP | REST API |
|---|---|---|
| Ideal para | Hacer preguntas, dejar que un agente explore mientras programa | Scripts, hojas de cálculo y paneles que se ejecutan de forma programada |
| Dirección | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Autenticación | Clave de API o inicio de sesión en el navegador | Clave de API (`Authorization: Bearer htk_…`) |
| Documentación | Página Configurar MCP (`/developer/mcp-setup`) | Explorador Swagger (`/developer/rest-api`) |

Las dos usan la misma clave y los mismos permisos. La guía de REST está en [API de Little Hotelier](/blog/little-hotelier-api).

## Herramientas de lectura y de escritura: mantén al agente atado en corto

Los agentes de programación son buenos ejecutando herramientas rápido, y por eso mismo conviene frenarlos aquí.

- **Las escrituras se ejecutan cuando el agente las llama.** Fuera del panel de Hotelier Tools no hay tarjeta de aprobación. Cambiar una reserva, registrar un pago, aplicar precios o poner un stop sell ocurre en cuanto se ejecuta la herramienta. Mantén activado el ajuste de tu editor «pedir confirmación antes de ejecutar herramientas» y no uses modos de ejecución automática con este servidor.
- **Las acciones irreversibles están bloqueadas de todas formas.** Ocho herramientas (enviar facturas por email a los huéspedes, reembolsos, presentar la encuesta del INE, invitaciones al equipo, enviar enlaces por email a los huéspedes, responder preguntas de Booking.com y la comprobación de la lista de espera que envía mensajes a los huéspedes) solo están disponibles en el panel.
- **Los cambios de reserva tienen dos pasos.** `propose_reservation_changes` muestra el antes y el después; `apply_reservation_changes` necesita `confirmed: true`. Lee la propuesta.
- **No subas nunca una clave a un repositorio.** Usa referencias del estilo `${HT_API_KEY}`, añade los ficheros de configuración locales a `.gitignore` y revoca en `/developer/api-keys` cualquier clave que se filtre.

## Solución de problemas: «no aparece el servidor»

- **No aparece nada tras editar una configuración:** reinicia el editor o la CLI. La mayoría de las herramientas leen las configuraciones de MCP al arrancar.
- **Claude Code o VS Code ignoran el servidor:** comprueba que está `"type": "http"`.
- **Gemini CLI conecta pero falla:** usa `httpUrl`, no `url`.
- **401:** clave incorrecta o revocada, o la variable de entorno no está definida en esa terminal.
- **400 «No Little Hotelier credentials configured»:** conecta Little Hotelier en `/credentials`.
- **423 `lh_frozen`:** el inicio de sesión de Little Hotelier está en pausa tras un acceso fallido (a menudo una contraseña caducada). Guarda la contraseña nueva en **Credenciales** o pulsa **Comprobar ahora y reanudar**.
- **429:** demasiadas peticiones; espera el tiempo indicado en `Retry-After`.
- **El salto de línea con barra invertida falla en Windows:** PowerShell no usa `\` para continuar líneas. Pega los comandos en una sola línea, como se muestra arriba.

::demo-cta{path="/developer/mcp-setup"}
::

## Próximos pasos

- ¿No eres programador? [Conecta Claude](/blog/connect-claude-to-little-hotelier) o [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) desde el navegador.
- ¿Es la primera vez que oyes hablar de MCP? Lee [qué es un servidor MCP](/blog/what-is-mcp-server-hotels).
- ¿Quieres hojas de cálculo sin código? Mira [exportar reservas a Excel](/blog/export-little-hotelier-reservations-excel).
