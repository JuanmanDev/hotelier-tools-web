---
title: "Little Hotelier mit Claude Code, Cursor und VS Code nutzen: MCP einrichten (Anleitung)"
seoTitle: "Claude Code MCP einrichten: Little Hotelier, Cursor, VS Code"
description: "MCP-Server von Hotelier Tools in Claude Code, Cursor, VS Code, Windsurf oder Gemini CLI einrichten und Auslastungsberichte, Sheets-Sync oder Dashboard bauen."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code mcp einrichten, mcp claude code, claude code installieren, cursor mcp.json, vscode mcp.json, little hotelier mcp, gemini cli mcp, claude code verbinden]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "MCP-Einrichtungsanleitung in Hotelier Tools: eine Erklärung What is MCP? und Client-Konfigurations-Tabs für Claude Desktop, VS Code, Cursor und Custom / SDK, mit ausgewähltem Claude Desktop und seinem Ausschnitt claude_desktop_config.json"
faq:
  - q: "Wie lautet der Befehl claude mcp add für Little Hotelier?"
    a: "Führen Sie aus: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Ersetzen Sie den Schlüssel durch einen aus Developer, API Keys in Hotelier Tools und prüfen Sie ihn dann mit /mcp in Claude Code."
  - q: "Wo liegt mcp.json in Cursor und VS Code?"
    a: "Cursor liest ~/.cursor/mcp.json für alle Projekte und .cursor/mcp.json innerhalb eines Projekts. VS Code liest .vscode/mcp.json im Arbeitsbereich und eine Datei auf Benutzerebene, die Sie mit dem Befehl MCP: Open User Configuration öffnen. VS Code verwendet den Schlüssel servers, nicht mcpServers."
  - q: "Muss ich Entwickler sein, um Claude Code mit meinen Hoteldaten zu nutzen?"
    a: "Nein. Sie installieren Claude Code, fügen einen Befehl ein und fragen dann in normalen Worten. Es hilft zu wissen, wo Ihre Dateien liegen und wie man ein Skript ausführt, aber Claude Code kann jeden Schritt beim Arbeiten erklären."
  - q: "Kann ich mich anmelden, statt einen API-Schlüssel zu nutzen?"
    a: "Ja, in Clients, die OAuth unterstützen. Fügen Sie die Server-URL ohne Header hinzu und melden Sie sich an, wenn der Client danach fragt: In Claude Code führen Sie /mcp aus und wählen die Authentifizierung. Die Anmeldung gilt 30 Tage. Für Skripte, die unbeaufsichtigt laufen, sind Schlüssel besser."
  - q: "Ist das eine offizielle API von Little Hotelier oder SiteMinder?"
    a: "Nein. Hotelier Tools ist unabhängig und weder mit SiteMinder oder Little Hotelier verbunden noch von ihnen empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Betriebs und bietet eine eigene REST-API und einen eigenen MCP-Server."
---

Fügen Sie einen Remote-MCP-Server, `https://dashboard.hotelier.tools/api/mcp`, mit einem Hotelier-Tools-API-Schlüssel hinzu, und Claude Code, Cursor, VS Code (Copilot-Agentenmodus), Windsurf oder Gemini CLI können Ihre Little-Hotelier-Reservierungen, Preise und Rechnungen lesen, während sie Code für Sie schreiben. In Claude Code ist es ein einziger Befehl: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

Unten stehen die genauen Konfigurationen für jedes Werkzeug (im Oktober 2026 gegen die Dokumentation des jeweiligen Anbieters geprüft), drei Dinge, die sich zu bauen lohnen, und wann Sie stattdessen direkt die REST-API aufrufen.

## Bevor Sie starten: einen API-Schlüssel erstellen

Little Hotelier veröffentlicht keinen MCP-Server, und die eigene Partner-API-Dokumentation von SiteMinder sagt, dass Verfügbarkeits- und Preisdaten [nicht von Little Hotelier bezogen werden können](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). Hotelier Tools bietet beides, einen MCP-Server und eine REST-API, mit dem eigenen Little-Hotelier-Login Ihres Betriebs. Es ist weder mit SiteMinder oder Little Hotelier verbunden noch von ihnen empfohlen. Hintergrund: [Hat Little Hotelier eine API?](/blog/little-hotelier-api)

1. Verbinden Sie in Hotelier Tools Little Hotelier unter **Credentials** (`/credentials`), falls noch nicht geschehen.
2. Öffnen Sie **Developer → API & MCP → API Keys** (`/developer/api-keys`).
3. Geben Sie einen Namen ein, der sagt, wo der Schlüssel liegen wird, etwa `cursor-laptop`, und klicken Sie auf **Generate key**.
4. Kopieren Sie ihn sofort: „Copy this key now — it will not be shown again.“ (Kopieren Sie diesen Schlüssel jetzt, er wird nicht noch einmal angezeigt.) Er beginnt mit `htk_`.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Seite API keys in Hotelier Tools: das Formular Generate a new key mit Namensfeld und der Schaltfläche Generate key, ein aktiver Schlüssel (MCP internal (chat), maskiert) mit einer Schaltfläche Revoke und die Hinweise Good security practice" caption="Ein Schlüssel pro Werkzeug macht es leicht, genau den zu widerrufen, den Sie nicht mehr nutzen." path="/developer/api-keys"}
::

Ein Schlüssel hat dieselben Berechtigungen wie Ihr Hotelier-Tools-Konto, für den einen Betrieb, in dem Sie ihn erstellt haben. Sie können bis zu 10 Schlüssel haben.

**Halten Sie den Schlüssel aus Ihren Dateien heraus.** Speichern Sie ihn in einer Umgebungsvariablen namens `HT_API_KEY` und verweisen Sie in den Konfigurationen darauf:

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # oder ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Öffnen Sie ein neues Terminal (und starten Sie Ihren Editor neu), damit er die Variable übernimmt.

## So fügen Sie den MCP-Server zu Claude Code, Cursor, VS Code, Windsurf und Gemini CLI hinzu

Jedes Werkzeug speichert dieselben drei Angaben (Adresse, Transport, Schlüssel) in einer etwas anderen Datei. Wählen Sie Ihres.

### Claude Code

Claude Code hat einen eingebauten Befehl für Remote-Server ([Dokumentation von Anthropic](https://code.claude.com/docs/en/mcp)):

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Starten Sie dann `claude` und geben Sie `/mcp` ein. Hotelier Tools sollte als **connected** erscheinen. Ein Status `failed` mit 401 bedeutet, dass der Schlüssel falsch ist.

- **Geltungsbereich (Scope).** Standardmäßig wird der Server nur für den aktuellen Ordner gespeichert. Fügen Sie `--scope user` nach dem Namen hinzu, um ihn in jedem Projekt zu nutzen, oder `--scope project`, um eine gemeinsame `.mcp.json` zu schreiben.
- **Anmelden statt Schlüssel.** Führen Sie den Befehl ohne `--header` aus, geben Sie dann in Claude Code `/mcp` ein und authentifizieren Sie sich im Browser. Wenn Sie Hotelier Tools schon als Connector auf claude.ai verbunden haben, kann Claude Code ihn übernehmen, sobald Sie sich mit demselben Claude-Konto anmelden.

Für ein Projekt, das Sie mit einem Kollegen teilen oder in Git halten, legen Sie den Server in `.mcp.json` ab und lassen jede Person ihren eigenen Schlüssel liefern:

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

Die Zeile `"type": "http"` ist erforderlich: Claude Code wertet einen Eintrag mit `url`, aber ohne `type` als Konfigurationsfehler.

### Cursor

Cursor liest `~/.cursor/mcp.json` für alle Projekte oder `.cursor/mcp.json` innerhalb eines Projekts ([Cursor-Dokumentation](https://cursor.com/docs/context/mcp)):

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

Speichern Sie und prüfen Sie dann in den MCP-Einstellungen von Cursor, ob der Server aktiviert ist (neuere Versionen listen Server in der Seitenleiste unter **Customize**). Fragen Sie im **Agent**-Chat. Cursor bittet standardmäßig um Freigabe, bevor es ein Werkzeug ausführt. Lassen Sie das für diesen Server so. Lassen Sie `headers` weg, bietet Cursor stattdessen die Anmeldung im Browser an.

### VS Code mit GitHub Copilot

VS Code nutzt `.vscode/mcp.json`, mit `servers` als oberstem Schlüssel und einem erforderlichen `"type": "http"` ([VS-Code-Dokumentation](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). Seine Funktion `inputs` fragt den Schlüssel einmal ab und bewahrt ihn im sicheren Speicher von VS Code auf, sodass er nie in der Datei steht:

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

Öffnen Sie Copilot Chat, wechseln Sie in den Modus **Agent** und sehen Sie über **Configure Tools** die Werkzeuge von Hotelier Tools. VS Code bittet Sie möglicherweise beim ersten Start, dem Server zu vertrauen. Für alle Arbeitsbereiche führen Sie **MCP: Open User Configuration** aus und fügen denselben Block dort ein. VS Code unterstützt auch die Anmeldung im Browser, wenn Sie `headers` weglassen.

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="Tab VS Code / GitHub Copilot der MCP-Einrichtungsseite von Hotelier Tools: ein Ausschnitt .vscode/mcp.json mit servers, hotelier-tools, type http, der /api/mcp-URL der Demo und einem Header Authorization mit dem Platzhalter htk_YOUR_API_KEY, dann Turn on Agent mode in Copilot Chat" caption="Die Seite MCP Setup hat für jeden Client einen fertigen Ausschnitt. Die Demo zeigt ihre eigene Adresse, Ihre lautet dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf und Gemini CLI

**Windsurf** (dessen Dokumentation jetzt unter Devin liegt) liest `~/.codeium/windsurf/mcp_config.json` und nutzt `serverUrl` für Remote-Server ([Dokumentation](https://docs.devin.ai/windsurf/plugins/cascade/mcp)):

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

Windsurf begrenzt Cascade auf insgesamt 100 Werkzeuge, und Hotelier Tools bietet mehr als 100. Sie müssen daher eventuell Werkzeuge, die Sie nicht nutzen, im MCP-Panel ausschalten.

**Gemini CLI** liest `~/.gemini/settings.json` (oder `.gemini/settings.json` in einem Projekt) und nutzt für diese Art Server `httpUrl`. `url` würde den älteren SSE-Transport bedeuten, den Hotelier Tools nicht bedient ([Dokumentation](https://geminicli.com/docs/tools/mcp-server/)):

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

Oder im Terminal: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Geben Sie in Gemini CLI `/mcp` ein, um es zu prüfen.

Diese beiden Konfigurationen folgen der Dokumentation des jeweiligen Anbieters. Wir haben sie nicht in jeder Version getestet.

| Werkzeug | Konfigurationsdatei | Oberster Schlüssel | URL-Schlüssel |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Drei Dinge, die sich zu bauen lohnen

Der Trick: Lassen Sie den Agenten per MCP Ihre echten Daten *ansehen* und dann Code schreiben, der die [REST-API](/tools/bot/api-mcp) aufruft, damit das Ergebnis jeden Monat ohne KI läuft.

### Ein monatlicher Auslastungsbericht

Fragen Sie Claude Code (oder den Agenten von Cursor) in einem leeren Ordner:

::prompt{label="Claude Code"}
Nutze den MCP-Server hotelier-tools, um dir meine Zimmertypen und die Reservierungen des letzten Monats anzusehen. Schreibe dann ein Node.js-Skript, das die REST-API von Hotelier Tools aufruft (Spezifikation: https://dashboard.hotelier.tools/api/v1/openapi.json), mit dem Schlüssel aus HT_API_KEY, und für jeden Monat, den ich übergebe, Auslastung und durchschnittlichen Tagespreis je Zimmertyp ausgibt und in einer CSV speichert.
::

Ein gutes Skript beginnt so. Es holt die Zimmertypen und jede Reservierung, die den Monat überschneidet, und speichert die Rohantwort, damit Sie die Felder prüfen können, bevor gerechnet wird:

```js [fetch-month.mjs]
// Aufruf: node fetch-month.mjs 2026-09   (HT_API_KEY muss in Ihrer Umgebung gesetzt sein)
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

Die eigene Spezifikation der API sagt, Reservierungsobjekte kämen aus Little Hotelier und ihre „shape may vary“ (Struktur kann variieren). Lassen Sie den Agenten also die gespeicherte Datei lesen, bevor er etwas berechnet. `/room-types` liefert `totalRooms` je Typ, die andere Hälfte der Auslastungsrechnung.

### Ein Google-Sheets-Sync

Für eine Tabelle, die die Anreisen der nächsten 30 Tage auflistet und sich jeden Morgen aktualisiert, öffnen Sie Ihre Tabelle, gehen zu **Erweiterungen → Apps Script** und fügen ein:

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

Speichern Sie den Schlüssel unter **Projekteinstellungen → Skripteigenschaften** als `HT_API_KEY`, führen Sie das Skript einmal aus, um den Zugriff zu erteilen, und legen Sie dann unter **Trigger** einen täglichen zeitgesteuerten Trigger an. `/reservations` liefert höchstens 100 Aufenthalte pro Aufruf, gefiltert nach Anreisedatum, teilen Sie volle Monate also in Wochen. Denken Sie daran: Die Tabelle enthält jetzt Gästenamen, geben Sie sie mit Bedacht frei.

### Ein kleines eigenes Dashboard

::prompt{label="Cursor"}
Baue eine kleine Node.js-Web-App, die die Auslastung von heute Nacht, die Anreisen und Abreisen von heute und Aufenthalte mit offenem Saldo zeigt, über die REST-API von Hotelier Tools. HT_API_KEY bleibt nur auf dem Server. Der Browser muss meinen Server aufrufen, nie direkt die API. Antworten werden fünf Minuten zwischengespeichert.
::

Zwei Regeln machen das sicher: Der Schlüssel bleibt auf dem Server (jeder, der eine Seite öffnet, kann Schlüssel im Browsercode lesen), und Sie nutzen einen Cache, denn die API erlaubt 100 Anfragen pro Minute und IP-Adresse.

## MCP oder REST-API: Was sollten Sie nutzen?

| | MCP-Server | REST-API |
|---|---|---|
| Am besten für | Fragen stellen, einen Agenten beim Programmieren erkunden lassen | Skripte, Sheets, Dashboards, die nach Zeitplan laufen |
| Adresse | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Authentifizierung | API-Schlüssel oder Anmeldung im Browser | API-Schlüssel (`Authorization: Bearer htk_…`) |
| Dokumentation | Seite MCP Setup (`/developer/mcp-setup`) | Swagger-Explorer (`/developer/rest-api`) |

Beide nutzen denselben Schlüssel und dieselben Berechtigungen. Die REST-Anleitung steht in [Little Hotelier API](/blog/little-hotelier-api).

## Lese- und Schreibwerkzeuge: Halten Sie den Agenten an der kurzen Leine

Coding-Agenten führen Werkzeuge schnell aus, und genau deshalb sollten Sie sie hier ausbremsen.

- **Schreibzugriffe laufen, sobald der Agent sie aufruft.** Außerhalb des Hotelier-Tools-Dashboards gibt es keine Freigabekarte. Eine Reservierung zu ändern, eine Zahlung zu erfassen, Preise anzuwenden oder Stop Sell zu setzen geschieht, sobald das Werkzeug läuft. Lassen Sie die Einstellung Ihres Editors „vor dem Ausführen von Werkzeugen fragen“ an und nutzen Sie mit diesem Server keine Auto-Run-Modi.
- **Nicht umkehrbare Aktionen sind ohnehin gesperrt.** Acht Werkzeuge (Rechnungen per E-Mail an Gäste senden, Erstattungen, die INE-Umfrage einreichen, Team-Einladungen, Gästelinks per E-Mail senden, Booking.com-Fragen beantworten und die Wartelistenprüfung, die Gäste anschreibt) gibt es nur im Dashboard.
- **Reservierungsänderungen laufen in zwei Schritten.** `propose_reservation_changes` zeigt das Vorher und Nachher, `apply_reservation_changes` braucht `confirmed: true`. Lesen Sie den Vorschlag.
- **Committen Sie nie einen Schlüssel.** Nutzen Sie Verweise im Stil `${HT_API_KEY}`, tragen Sie lokale Konfigurationsdateien in `.gitignore` ein und widerrufen Sie jeden durchgesickerten Schlüssel unter `/developer/api-keys`.

## Fehlersuche: „Server wird nicht angezeigt“

- **Nach dem Bearbeiten einer Konfiguration erscheint nichts:** Starten Sie Editor oder CLI neu. Die meisten Werkzeuge lesen MCP-Konfigurationen beim Start.
- **Claude Code oder VS Code ignoriert den Server:** Prüfen Sie `"type": "http"`.
- **Gemini CLI verbindet, scheitert aber:** Nutzen Sie `httpUrl`, nicht `url`.
- **401:** falscher oder widerrufener Schlüssel, oder die Umgebungsvariable ist in diesem Terminal nicht gesetzt.
- **400 „No Little Hotelier credentials configured“:** Verbinden Sie Little Hotelier unter `/credentials`.
- **423 `lh_frozen`:** Die Anmeldung bei Little Hotelier ist nach einem fehlgeschlagenen Login pausiert (oft ein abgelaufenes Passwort). Speichern Sie das neue Passwort unter **Credentials** oder klicken Sie auf **Check now & resume**.
- **429:** zu viele Anfragen, warten Sie die Zeit in `Retry-After` ab.
- **Der Zeilenumbruch mit Backslash schlägt unter Windows fehl:** PowerShell nutzt `\` nicht zum Fortsetzen von Zeilen. Fügen Sie Befehle in einer Zeile ein, wie oben gezeigt.

::demo-cta{path="/developer/mcp-setup"}
::

## Nächste Schritte

- Kein Entwickler? [Verbinden Sie Claude](/blog/connect-claude-to-little-hotelier) oder [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) stattdessen im Browser.
- Neu bei der Idee? Lesen Sie [Was ist ein MCP-Server?](/blog/what-is-mcp-server-hotels).
- Tabellen ohne Code gewünscht? Siehe [Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel).
