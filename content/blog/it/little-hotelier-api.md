---
title: "Little Hotelier ha un'API? La risposta 2026 e come estrarre i tuoi dati"
seoTitle: "Little Hotelier ha un'API? Risposta 2026 e guida"
description: "Nessuna chiave API per prenotazioni e ospiti. Cosa offre SiteMinder ufficialmente e come leggere i tuoi dati di Little Hotelier via REST in pochi minuti."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, little hotelier api documentazione, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api, little hotelier integrazioni]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "Pagina REST API reference in Hotelier Tools con l'URL di base, il download di openapi.json, il riquadro Quick authorize (campo Bearer token, Authorize Swagger, Use my session) e modelli di codice in cURL, JavaScript, Python e PowerShell"
featured: true
faq:
  - q: "Little Hotelier ha un'API pubblica per le mie prenotazioni?"
    a: "Non una che una struttura possa usare per le proprie prenotazioni, a ottobre 2026. Le API di SiteMinder sono per partner tecnologici certificati e la chiave Direct Booking API che puoi generare da solo copre solo tariffe, disponibilità e dati della struttura per un sito di prenotazione."
  - q: "Cos'è SiteMinder Exchange (SMX) e include Little Hotelier?"
    a: "SMX è l'API di SiteMinder per le app partner, come check-in, messaggistica e strumenti di revenue. La guida per sviluppatori di SiteMinder indica Little Hotelier come fonte di prenotazioni per SMX, ma non di disponibilità e tariffe. Si collegano solo i partner certificati."
  - q: "Come si diventa partner di integrazione di SiteMinder e quanto tempo ci vuole?"
    a: "Si invia il modulo di candidatura per le integrazioni di SiteMinder, si firma un accordo di partnership, poi si sviluppa, si certifica e si va in produzione. SiteMinder dice che la maggior parte delle integrazioni richiede circa 60 giorni dall'inizio al lancio. È pensato per aziende di software, non per un singolo hotel."
  - q: "Un'API non ufficiale come Hotelier Tools è sicura e consentita?"
    a: "Hotelier Tools accede con il tuo login di Little Hotelier, lo conserva cifrato (AES-256-GCM) e può fare solo ciò che quel login può fare nell'app web di Little Hotelier. Non è un'integrazione ufficiale di SiteMinder, quindi se hai dubbi controlla il tuo contratto con SiteMinder. Puoi revocare ogni chiave in qualsiasi momento."
  - q: "Little Hotelier ha un server MCP per gli assistenti AI?"
    a: "Non per i gestori, a ottobre 2026. Il lavoro di SiteMinder sull'AI in Demand Plus riguarda i viaggiatori che trovano e prenotano le tue camere in ChatGPT e Claude. Per interrogare un'AI sulle tue prenotazioni serve un server MCP indipendente, come quello di Hotelier Tools."
  - q: "Posso provare l'API senza rischiare dati reali?"
    a: "Non esiste una chiave sandbox pubblica. Inizia con chiamate in sola lettura (prenotazioni, prezzi, tipi di camera): non modificano nulla in Little Hotelier. Le chiamate che scrivono, come generare una fattura, creano documenti reali."
---

Non una che puoi usare per le tue prenotazioni. A ottobre 2026 il centro assistenza di Little Hotelier non documenta alcuna chiave API che una struttura possa usare per prenotazioni, ospiti o fatture: le API di SiteMinder sono per partner tecnologici certificati e l'unica chiave che puoi generare da solo, la **Direct Booking API**, copre tariffe, disponibilità e dati della struttura per un sito di prenotazione. Per leggere i tuoi dati da uno script, un foglio di calcolo o un assistente AI puoi usare un'API REST indipendente come Hotelier Tools, che si collega con il tuo login di Little Hotelier.

Qui sotto: cosa offre esattamente SiteMinder, poi una configurazione di cinque minuti con esempi `curl` reali.

## Little Hotelier ha un'API pubblica?

Ci sono quattro modi ufficiali per far entrare o uscire dati da Little Hotelier. Nessuno ti dà una chiave API per l'elenco delle tue prenotazioni.

| Opzione ufficiale | Chi può usarla | Cosa copre |
|---|---|---|
| SiteMinder Exchange (SMX) | App di partner certificati | Prenotazioni da Little Hotelier. Non disponibilità né tariffe |
| Direct Booking API | Strutture che usano Direct Booking | Prezzi in tempo reale, disponibilità, struttura, tipi di camera, piani tariffari |
| Esportazioni CSV | Qualsiasi utente, a mano | Prenotazioni, ricavi, fatture, contabilità |
| App dell'App Store | Qualsiasi struttura, tramite il fornitore dell'app | Ciò che quell'app sincronizza |

### SiteMinder Exchange (SMX): per le aziende di software

La [guida per sviluppatori](https://developer.siteminder.com/get-started/siteminder-apis) di SiteMinder elenca cinque API: pmsXchange, SiteConnect, Channels Plus, SMX e Direct Booking. Quella che conta per Little Hotelier è SMX, l'API dietro app come il check-in online e la messaggistica con gli ospiti.

Nell'[elenco dei publisher SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) di SiteMinder, Little Hotelier invia le **prenotazioni** ma non disponibilità e tariffe. La [guida rapida di SMX](https://developer.siteminder.com/smx-api/guides/quick-start) dice lo stesso: "non è possibile ottenere dati ARI" da Little Hotelier.

L'accesso è riservato ai partner. Le [FAQ](https://developer.siteminder.com/get-started/resources/faq) di SiteMinder dicono che devi prima firmare un accordo di partnership tramite la [candidatura per le integrazioni](https://www.siteminder.com/integrations/apply-now/), poi sviluppare, certificare e andare in produzione, cosa che "la maggior parte" dei partner completa entro 60 giorni. È un percorso adatto a un'azienda di software. Un singolo hotel non può ottenere una chiave SMX per sé.

### La Direct Booking API: l'unica chiave che puoi generare

Se il tuo account è sulla piattaforma più recente di Little Hotelier (iscrizioni dal maggio 2025 o account aggiornati), il [centro assistenza](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) documenta una Direct Booking API:

1. Vai su **Direct booking → Configuration → API integration**.
2. Clicca su **Generate key**.
3. Dai la chiave e la guida per sviluppatori di SiteMinder al tuo sviluppatore web.

Restituisce prezzi e disponibilità in tempo reale, dati della struttura, tipi di camera e piani tariffari, così uno sviluppatore può creare una pagina di prenotazione o un'app personalizzata. È inclusa in Direct Booking senza costi aggiuntivi. **Non** restituisce prenotazioni, ospiti, pagamenti o fatture, e l'assistenza di Little Hotelier non aiuta a creare o riparare ciò che sviluppi con essa.

### Esportazioni CSV e App Store

Tutto il resto è manuale o gestito dal fornitore. La pagina Reservations e la maggior parte dei report esportano un CSV (passo per passo in [come esportare le prenotazioni in Excel](/blog/export-little-hotelier-reservations-excel)). Le app dell'[App Store di Little Hotelier](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) si collegano contattando il fornitore dell'app: i dati non li ottieni tu. Leggi [le migliori integrazioni per Little Hotelier](/blog/little-hotelier-integrations) per vedere cosa c'è.

## Come estrarre i tuoi dati di Little Hotelier in modo programmatico

Hotelier Tools è una dashboard indipendente per le strutture che usano Little Hotelier. Include un'API REST (stato: beta) e un server MCP per gli assistenti AI.

Come funziona, in parole semplici:

- Colleghi una volta sola il tuo login di Little Hotelier, in **Credentials** (`/credentials`). Viene salvato cifrato (AES-256-GCM).
- Hotelier Tools usa poi gli stessi endpoint web che usa l'app web di Little Hotelier. Può leggere e fare ciò che quel login può fare, niente di più.
- I tuoi script chiamano Hotelier Tools con una chiave API e Hotelier Tools parla con Little Hotelier.

::callout{type="note" title="Indipendente, non ufficiale"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Non è un'API ufficiale di SiteMinder e si collega con il login di Little Hotelier della tua struttura. La dashboard è gratuita per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027.
::

## Come creare una chiave API e fare la prima chiamata

Ti serve un account Hotelier Tools (registrati su [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) con Little Hotelier collegato in **Credentials**. Il proprietario della struttura ha l'accesso all'API di default.

1. Apri **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Sotto "Generate a new key", scrivi un nome che riconoscerai in seguito, come `sheets-export`, e premi **Generate key**.
3. Copia subito la chiave. La pagina avverte: "Copy this key now — it will not be shown again." Le chiavi iniziano con `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Pagina API keys subito dopo la generazione di una chiave: il riquadro verde Key generated con la chiave monouso mascherata e un pulsante di copia, la nuova chiave Blog integration sotto Active keys con un pulsante Revoke e una notifica API key created" caption="Copia subito la chiave dal riquadro verde: viene mostrata una sola volta. Dai a ogni chiave il nome di ciò che la userà, così saprai quale revocare in seguito." path="/developer/api-keys"}
::

4. Verifica che l'API risponda. Questa chiamata è pubblica e non richiede chiave:

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Ora una chiamata con la tua chiave. Restituisce l'ID della tua struttura su Little Hotelier e il login che usa:

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

Su Windows, in PowerShell scrivi `curl.exe` invece di `curl`, oppure usa il comando di PowerShell:

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

Cosa può fare una chiave: **non ci sono scope**. Una chiave agisce sulla struttura per cui è stata creata, come la persona che l'ha creata, con i permessi che quella persona ha in quel momento. Ogni persona può avere fino a 10 chiavi e puoi revocarle dalla stessa pagina.

### Preferisci cliccare a scrivere? Usa l'explorer

Apri **REST API & Swagger** (`/developer/rest-api`). In **Quick authorize**, incolla la chiave in "Bearer token (API key or session JWT)" e premi **Authorize Swagger**, oppure premi **Use my session** per saltare la chiave. Poi prova qualsiasi endpoint nell'"Interactive API explorer". La pagina ha anche **Download spec** e "Code templates" in cURL, JavaScript, Python e PowerShell.

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="Interactive API explorer (Swagger) dopo Try it out ed Execute su GET /property: l'URL della richiesta https://demo.hotelier.tools/api/v1/property e un corpo di risposta 200 con propertyId 90210" caption="Autorizzati una volta, poi esegui qualsiasi endpoint dal browser e vedi la richiesta esatta e il JSON restituito." path="/developer/rest-api"}
::

## Quali endpoint puoi usare?

L'URL di base è `https://dashboard.hotelier.tools/api/v1`. L'elenco completo e aggiornato è nella [specifica OpenAPI](https://dashboard.hotelier.tools/api/v1/openapi.json) pubblica. Questi sono quelli da cui parte la maggior parte delle persone:

| Metodo | Percorso | Cosa ottieni |
|---|---|---|
| GET | `/reservations` | Prenotazioni per data di check-in, con `status` e `limit` opzionali |
| GET | `/reservations/{id}` | Dettagli completi di una prenotazione (id numerico o riferimento `LH…`) |
| GET | `/reservations/{id}/invoices` | Le fatture di una prenotazione |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Una fattura in PDF |
| POST | `/reservations/{id}/invoices` | Crea una nuova fattura in Little Hotelier (nessuna email all'ospite) |
| GET | `/guests` | Ricerca ospiti per testo, nome, email o telefono |
| GET | `/prices` | Tariffe e disponibilità per un intervallo di date |
| GET | `/room-types` | Tipi di camera con il numero di camere di ciascuno |
| GET | `/methods` | I metodi grezzi di Little Hotelier che puoi chiamare (pubblico) |
| POST | `/methods/{methodName}` | Esegue uno di essi, per esempio `getReservationsByDateRange` |

Alcuni esempi da copiare e incollare (date e ID sono inventati):

```bash
# Prenotazioni con check-out effettuato e check-in a novembre 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Tutto su una prenotazione
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Tariffe e disponibilità per una settimana
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Trova un ospite per cognome
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Ogni prenotazione che si sovrappone a un intervallo (metodo grezzo, parametri con nome)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

Le chiamate di elenco restituiscono un JSON come `{ "success": true, "count": 2, "data": [ … ] }`. Per provare un metodo grezzo senza codice, apri **LH Methods** (`/methods`) nella dashboard ed eseguilo dal browser. Le esecuzioni vengono registrate in **Run History**.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Workbench dei metodi di Little Hotelier in Hotelier Tools con una scheda per ogni metodo grezzo, come getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation e generateInvoice, ciascuna con il numero di parametri" caption="Esegui a mano qualsiasi metodo grezzo di Little Hotelier prima di scriverne lo script." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Limiti, errori e cosa non è disponibile

**Limite di richieste.** 100 richieste al minuto per indirizzo IP. Ogni risposta contiene `X-RateLimit-Limit`, `X-RateLimit-Remaining` e `X-RateLimit-Reset`. Oltre il limite ricevi `429` con un'intestazione `Retry-After`.

**Paginazione.** `/reservations` restituisce al massimo 100 risultati per chiamata (`limit`, predefinito 50) e filtra sulla data di check-in. Per un anno di dati, chiedi un mese alla volta; se un mese restituisce esattamente 100 risultati, dividilo in due. `/guests` pagina con `page` e `perPage` (fino a 50). `/prices` divide in blocchi gli intervalli più lunghi di due settimane, quindi gli intervalli lunghi sono più lenti.

**Gli errori** arrivano come JSON con `statusCode` e `statusMessage`:

| Codice | Di solito significa |
|---|---|
| 401 | Chiave mancante, errata o revocata |
| 404 | Prenotazione inesistente o non della tua struttura |
| 422 | Un parametro è sbagliato, per esempio una data non in formato `YYYY-MM-DD` |
| 429 | Troppe richieste; attendi `Retry-After` |
| 500 / 502 | Little Hotelier non ha risposto; riprova più tardi |

**I dati mascherati restano mascherati.** L'API legge ciò che Little Hotelier conserva ancora. Little Hotelier [maschera i dati degli ospiti 180 giorni dopo il check-out](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation) e nessuna API può riportarli indietro. Esporta prima.

**Non disponibili:** webhook in uscita o notifiche in tempo reale, una chiave sandbox pubblica e pacchetti SDK su npm o PyPI. Per eseguire qualcosa a intervalli regolari usa un tuo scheduler (un cron job, l'Utilità di pianificazione di Windows o un trigger di Google Sheets).

**Le scritture sono reali.** `POST /reservations/{id}/invoices` crea ogni volta un nuovo documento di fattura in Little Hotelier. Inizia con chiamate in sola lettura e tieni le chiavi lontane da fogli di calcolo condivisi e codice pubblico.

## Cosa puoi costruire?

- **Un foglio prenotazioni in tempo reale.** Porta i soggiorni del mese scorso in Google Sheets o Excel a intervalli regolari: leggi [esportare le prenotazioni in Excel e Google Sheets](/blog/export-little-hotelier-reservations-excel).
- **Pacchetti per il commercialista.** Scarica i PDF delle fatture per prenotazione, oppure salta il codice con lo ZIP trimestrale in [scaricare tutte le fatture in una volta](/blog/download-all-little-hotelier-invoices).
- **Dashboard.** Porta occupazione e ricavi in Looker Studio o Power BI da un foglio che l'API tiene aggiornato.
- **Assistenti AI.** La stessa chiave funziona con il server MCP di Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), che offre a Claude, ChatGPT, Cursor o VS Code più di 100 strumenti per l'hotel. Parti da [cos'è un server MCP](/blog/what-is-mcp-server-hotels), poi [collega Claude](/blog/connect-claude-to-little-hotelier) o configura [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
- **Collante tra strumenti.** Dove non esiste un'app nell'App Store, un piccolo script può spostare dati tra Little Hotelier e il resto dei tuoi strumenti. Confronta le opzioni in [le migliori integrazioni per Little Hotelier](/blog/little-hotelier-integrations).

## Prossimi passi

- Se sviluppi software per molti hotel, candidati al programma partner di SiteMinder e a SMX.
- Se ti servono solo i dati della tua struttura, crea una chiave Hotelier Tools su `/developer/api-keys` e chiama `/reservations`.
- Esporta i dati degli ospiti che devi conservare prima che Little Hotelier li mascheri a 180 giorni.
- Tutto ciò che offrono l'API e il server MCP è nella [pagina della funzione API & MCP](/tools/bot/api-mcp).
