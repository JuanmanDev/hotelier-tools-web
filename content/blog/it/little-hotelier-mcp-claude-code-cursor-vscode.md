---
title: "Claude Code MCP: come usare i dati di Little Hotelier in Claude Code, Cursor e VS Code"
seoTitle: "Little Hotelier MCP in Claude Code, Cursor e VS Code"
description: "Collega il server MCP di Hotelier Tools a Claude Code, Cursor, VS Code, Windsurf o Gemini CLI e crea report di occupazione, sync con Sheets o dashboard."
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code mcp, configurare mcp claude code, cursor mcp.json, vscode mcp.json, claude code per non sviluppatori, little hotelier mcp, gemini cli mcp, windsurf mcp config]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guida alla configurazione MCP in Hotelier Tools: una spiegazione What is MCP? e le schede Client configuration per Claude Desktop, VS Code, Cursor e Custom / SDK, con Claude Desktop selezionato e il suo frammento claude_desktop_config.json"
faq:
  - q: "Qual è il comando claude mcp add per Little Hotelier?"
    a: "Esegui: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\". Sostituisci la chiave con una di Developer, API Keys in Hotelier Tools, poi verifica con /mcp dentro Claude Code."
  - q: "Dove si trova mcp.json in Cursor e VS Code?"
    a: "Cursor legge ~/.cursor/mcp.json per ogni progetto e .cursor/mcp.json dentro un progetto. VS Code legge .vscode/mcp.json nel workspace e un file a livello utente che apri con il comando MCP: Open User Configuration. VS Code usa la chiave servers, non mcpServers."
  - q: "Devo essere uno sviluppatore per usare Claude Code con i dati del mio hotel?"
    a: "No. Installi Claude Code, incolli un comando e poi chiedi a parole tue. Aiuta sapere dove vanno i tuoi file e come eseguire uno script, ma Claude Code può spiegare ogni passaggio mentre lavora."
  - q: "Posso accedere con il login invece di usare una chiave API?"
    a: "Sì, nei client che supportano OAuth. Aggiungi l'URL del server senza intestazione, poi accedi quando il client lo chiede: in Claude Code esegui /mcp e scegli di autenticarti. L'accesso dura 30 giorni. Le chiavi sono meglio per gli script che girano senza supervisione."
  - q: "È un'API ufficiale di Little Hotelier o SiteMinder?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login di Little Hotelier della tua struttura e offre una propria API REST e un proprio server MCP."
---

Aggiungi un unico server MCP remoto, `https://dashboard.hotelier.tools/api/mcp`, con una chiave API di Hotelier Tools, e Claude Code, Cursor, VS Code (modalità agente di Copilot), Windsurf o Gemini CLI potranno leggere prenotazioni, tariffe e fatture di Little Hotelier mentre scrivono codice per te. In Claude Code basta un solo comando: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`.

Qui sotto trovi le configurazioni esatte per ogni strumento (verificate sulla documentazione di ciascun fornitore a ottobre 2026), tre cose utili da costruire e quando chiamare direttamente l'API REST.

## Prima di iniziare: crea una chiave API

Little Hotelier non pubblica un server MCP, e la documentazione delle API partner di SiteMinder dice che i dati di disponibilità e tariffe [non si possono ottenere da Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers). Hotelier Tools offre sia un server MCP sia un'API REST, usando il login di Little Hotelier della tua struttura. Non è affiliato né approvato da SiteMinder o Little Hotelier. Per approfondire: [Little Hotelier ha un'API?](/blog/little-hotelier-api)

1. In Hotelier Tools collega Little Hotelier in **Credentials** (`/credentials`), se non l'hai ancora fatto.
2. Apri **Developer → API & MCP → API Keys** (`/developer/api-keys`).
3. Scrivi un nome che indichi dove userai la chiave, per esempio `cursor-laptop`, e premi **Generate key**.
4. Copiala subito: "Copy this key now — it will not be shown again." Inizia con `htk_`.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Pagina API keys in Hotelier Tools: il modulo Generate a new key con un campo nome e il pulsante Generate key, una chiave attiva (MCP internal (chat), mascherata) con un pulsante Revoke e le note Good security practice" caption="Una chiave per ogni strumento rende facile revocare solo quella che non usi più." path="/developer/api-keys"}
::

Una chiave ha gli stessi permessi del tuo account Hotelier Tools, sulla sola struttura in cui l'hai creata. Puoi avere fino a 10 chiavi.

**Tieni la chiave fuori dai tuoi file.** Salvala in una variabile d'ambiente chiamata `HT_API_KEY` e richiamala dalle configurazioni:

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # oppure ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

Apri un nuovo terminale (e riavvia l'editor) in modo che legga la variabile.

## Come aggiungere il server MCP a Claude Code, Cursor, VS Code, Windsurf e Gemini CLI

Ogni strumento conserva gli stessi tre dati (indirizzo, trasporto, chiave) in un file leggermente diverso. Scegli il tuo.

### Claude Code

Claude Code ha un comando integrato per i server remoti ([documentazione di Anthropic](https://code.claude.com/docs/en/mcp)):

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

Poi avvia `claude` e digita `/mcp`. Hotelier Tools dovrebbe risultare **connected**; uno stato `failed` con un 401 significa che la chiave è sbagliata.

- **Ambito.** Per impostazione predefinita il server viene salvato solo per la cartella corrente. Aggiungi `--scope user` dopo il nome per usarlo in ogni progetto, oppure `--scope project` per scrivere un `.mcp.json` condiviso.
- **Accesso con login invece della chiave.** Esegui il comando senza `--header`, poi dentro Claude Code digita `/mcp` e autenticati nel browser. Se hai già collegato Hotelier Tools come connettore su claude.ai, Claude Code può recuperarlo quando accedi con lo stesso account Claude.

Per un progetto che condividi con un collega o tieni in Git, metti il server in `.mcp.json` e lascia che ognuno inserisca la propria chiave:

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

La riga `"type": "http"` è obbligatoria: Claude Code considera un errore di configurazione una voce con `url` ma senza `type`.

### Cursor

Cursor legge `~/.cursor/mcp.json` per tutti i progetti, oppure `.cursor/mcp.json` dentro un singolo progetto ([documentazione di Cursor](https://cursor.com/docs/context/mcp)):

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

Salva, poi verifica che il server sia attivo nelle impostazioni MCP di Cursor (le versioni recenti elencano i server sotto **Customize** nella barra laterale). Fai le tue richieste nella chat **Agent**. Per impostazione predefinita Cursor chiede l'approvazione prima di eseguire uno strumento; lasciala così per questo server. Se ometti `headers`, Cursor propone invece l'accesso dal browser.

### VS Code con GitHub Copilot

VS Code usa `.vscode/mcp.json`, con `servers` come chiave principale e un `"type": "http"` obbligatorio ([documentazione di VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)). La sua funzione `inputs` chiede la chiave una sola volta e la conserva nell'archivio sicuro di VS Code, così non resta mai nel file:

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

Apri Copilot Chat, passa alla modalità **Agent** e usa **Configure Tools** per vedere gli strumenti di Hotelier Tools. VS Code può chiederti di considerare attendibile il server al primo avvio. Per tutti i workspace, esegui **MCP: Open User Configuration** e incolla lì lo stesso blocco. VS Code supporta anche l'accesso dal browser se ometti `headers`.

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="Scheda VS Code / GitHub Copilot della pagina di configurazione MCP di Hotelier Tools: un frammento .vscode/mcp.json con servers, hotelier-tools, type http, l'URL /api/mcp della demo e un'intestazione Authorization con il segnaposto htk_YOUR_API_KEY, poi Turn on Agent mode in Copilot Chat" caption="La pagina MCP Setup ha un frammento pronto per ogni client. La demo mostra il proprio indirizzo; il tuo è dashboard.hotelier.tools." path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf e Gemini CLI

**Windsurf** (la cui documentazione ora è sotto Devin) legge `~/.codeium/windsurf/mcp_config.json` e usa `serverUrl` per i server remoti ([documentazione](https://docs.devin.ai/windsurf/plugins/cascade/mcp)):

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

Windsurf limita Cascade a 100 strumenti in totale e Hotelier Tools ne offre più di 100, quindi potresti dover disattivare nel pannello MCP quelli che non usi.

**Gemini CLI** legge `~/.gemini/settings.json` (oppure `.gemini/settings.json` in un progetto) e usa `httpUrl` per questo tipo di server; `url` indicherebbe il vecchio trasporto SSE, che Hotelier Tools non offre ([documentazione](https://geminicli.com/docs/tools/mcp-server/)):

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

Oppure dal terminale: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp`. Digita `/mcp` dentro Gemini CLI per verificare.

Queste due configurazioni seguono la documentazione di ciascun fornitore; non le abbiamo provate in ogni versione.

| Strumento | File di configurazione | Chiave principale | Chiave dell'URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## Tre cose utili da costruire

Il trucco è lasciare che l'agente usi MCP per *guardare* i tuoi dati reali, poi scrivere codice che chiama l'[API REST](/tools/bot/api-mcp), così il risultato gira ogni mese senza AI.

### Un report mensile di occupazione

Chiedi a Claude Code (o all'agente di Cursor) in una cartella vuota:

::prompt{label="Claude Code"}
Usa il server MCP hotelier-tools per guardare le mie tipologie di camera e le prenotazioni del mese scorso. Poi scrivi uno script Node.js che chiami l'API REST di Hotelier Tools (specifica: https://dashboard.hotelier.tools/api/v1/openapi.json) con la chiave in HT_API_KEY e che, per qualsiasi mese gli passi, stampi occupazione e tariffa media giornaliera per tipologia di camera e li salvi in un CSV.
::

Un buon script inizia così. Recupera le tipologie di camera e ogni prenotazione che si sovrappone al mese e salva la risposta grezza, così puoi controllare i campi prima di fare i calcoli:

```js [fetch-month.mjs]
// Uso: node fetch-month.mjs 2026-09   (serve HT_API_KEY nel tuo ambiente)
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

La specifica dell'API dice che gli oggetti prenotazione provengono da Little Hotelier e che la loro "forma può variare", quindi lascia che l'agente legga il file salvato prima di calcolare qualsiasi cosa. `/room-types` restituisce `totalRooms` per tipologia, che è l'altra metà del calcolo dell'occupazione.

### Una sincronizzazione con Google Sheets

Per un foglio che elenca gli arrivi dei prossimi 30 giorni e si aggiorna ogni mattina, apri il tuo foglio di calcolo, vai su **Estensioni → Apps Script** e incolla:

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

Salva la chiave in **Impostazioni progetto → Proprietà script** come `HT_API_KEY`, esegui la funzione una volta per concedere l'accesso, poi aggiungi un attivatore giornaliero basato sul tempo in **Attivatori**. `/reservations` restituisce al massimo 100 soggiorni per chiamata, filtrati per data di check-in, quindi dividi in settimane i mesi molto pieni. Ricorda che ora il foglio contiene i nomi degli ospiti: condividilo con attenzione.

### Una piccola dashboard personalizzata

::prompt{label="Cursor"}
Crea una piccola web app Node.js che mostri l'occupazione di stanotte, gli arrivi e le partenze di oggi e i soggiorni con un saldo da pagare, usando l'API REST di Hotelier Tools. Tieni HT_API_KEY solo sul server; il browser deve chiamare il mio server, mai l'API direttamente. Metti le risposte in cache per cinque minuti.
::

Due regole la rendono sicura: la chiave resta sul server (chiunque apra una pagina può leggere le chiavi nel codice del browser) e usi la cache, perché l'API consente 100 richieste al minuto per indirizzo IP.

## MCP o API REST: quale usare?

| | Server MCP | API REST |
|---|---|---|
| Ideale per | Fare domande, lasciare che un agente esplori mentre scrive codice | Script, Sheets, dashboard che girano a intervalli regolari |
| Indirizzo | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| Autenticazione | Chiave API o accesso dal browser | Chiave API (`Authorization: Bearer htk_…`) |
| Documentazione | Pagina MCP Setup (`/developer/mcp-setup`) | Explorer Swagger (`/developer/rest-api`) |

Entrambi usano la stessa chiave e gli stessi permessi. La guida all'API REST è in [API di Little Hotelier](/blog/little-hotelier-api).

## Strumenti di lettura e scrittura: tieni l'agente al guinzaglio

Gli agenti di programmazione sono bravi a eseguire strumenti in fretta, ed è esattamente per questo che qui conviene rallentarli.

- **Le scritture vengono eseguite appena l'agente le richiama.** Fuori dalla dashboard di Hotelier Tools non c'è nessuna scheda di approvazione. Modificare una prenotazione, registrare un pagamento, applicare prezzi o impostare uno stop sell avviene non appena lo strumento viene eseguito. Lascia attiva l'impostazione del tuo editor "chiedi prima di eseguire gli strumenti" e non usare modalità di esecuzione automatica con questo server.
- **Le azioni irreversibili sono comunque bloccate.** Otto strumenti (invio di fatture per email agli ospiti, rimborsi, invio dell'indagine INE, inviti al team, invio di link agli ospiti per email, risposte alle domande di Booking.com e il controllo della lista d'attesa che scrive agli ospiti) sono disponibili solo nella dashboard.
- **Le modifiche alle prenotazioni sono in due passaggi.** `propose_reservation_changes` mostra il prima e il dopo; `apply_reservation_changes` richiede `confirmed: true`. Leggi la proposta.
- **Non committare mai una chiave.** Usa riferimenti del tipo `${HT_API_KEY}`, aggiungi i file di configurazione locali a `.gitignore` e, se una chiave trapela, revocala su `/developer/api-keys`.

## Risoluzione dei problemi: "il server non compare"

- **Non compare nulla dopo aver modificato una configurazione:** riavvia l'editor o la CLI. La maggior parte degli strumenti legge le configurazioni MCP all'avvio.
- **Claude Code o VS Code ignora il server:** controlla che ci sia `"type": "http"`.
- **Gemini CLI si connette ma fallisce:** usa `httpUrl`, non `url`.
- **401:** chiave sbagliata o revocata, oppure la variabile d'ambiente non è impostata in quel terminale.
- **400 "No Little Hotelier credentials configured":** collega Little Hotelier in `/credentials`.
- **423 `lh_frozen`:** l'accesso a Little Hotelier è sospeso dopo un login fallito (spesso una password scaduta). Salva la nuova password in **Credentials** oppure premi **Check now & resume**.
- **429:** troppe richieste; attendi il tempo indicato in `Retry-After`.
- **L'a capo con la barra rovesciata non funziona su Windows:** PowerShell non usa `\` per proseguire le righe. Incolla i comandi su una sola riga, come mostrato sopra.

::demo-cta{path="/developer/mcp-setup"}
::

## Prossimi passi

- Non sei uno sviluppatore? [Collega Claude](/blog/connect-claude-to-little-hotelier) o [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) direttamente dal browser.
- Il concetto è nuovo per te? Leggi [cos'è un server MCP](/blog/what-is-mcp-server-hotels).
- Vuoi fogli di calcolo senza codice? Leggi [esportare le prenotazioni in Excel](/blog/export-little-hotelier-reservations-excel).
