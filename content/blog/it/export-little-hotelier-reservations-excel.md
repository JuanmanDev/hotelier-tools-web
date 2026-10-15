---
title: "Esportare prenotazioni ed elenco ospiti da Little Hotelier in Excel (prima che i dati vengano mascherati)"
seoTitle: "Esportare prenotazioni Little Hotelier in Excel o Sheets"
description: "Little Hotelier maschera i dati degli ospiti 180 giorni dopo il check-out. Esporta prenotazioni ed elenco ospiti in Excel o Sheets, a mano o in automatico."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [esportare prenotazioni little hotelier in excel, little hotelier report, little hotelier esportare csv, elenco ospiti hotel excel, foglio prenotazioni hotel excel, little hotelier dati ospiti mascherati]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portale per sviluppatori di Hotelier Tools con schede per REST API e Swagger, MCP setup, API keys e LH methods, sopra un esempio di autenticazione con una chiave API"
faq:
  - q: "Cosa viene mascherato esattamente dopo 180 giorni?"
    a: "Little Hotelier dice che i dati personali identificabili (PII) dell'ospite vengono mascherati 180 giorni dopo la data di check-out della prenotazione. La prenotazione resta, ma report e ricerche non mostrano più i dati personali dell'ospite. Esporta ciò che ti serve prima di quella data."
  - q: "Perché mancano i numeri di telefono nell'esportazione di Little Hotelier?"
    a: "Little Hotelier lascia fuori i numeri di telefono degli ospiti dal CSV delle prenotazioni per motivi di sicurezza. Il telefono lo vedi comunque nella prenotazione o nel profilo dell'ospite, e la ricerca ospiti dell'API di Hotelier Tools restituisce un campo phone_number quando Little Hotelier lo ha."
  - q: "Posso programmare l'esportazione dentro Little Hotelier?"
    a: "Gli articoli del centro assistenza che abbiamo controllato a ottobre 2026 descrivono l'esecuzione e l'esportazione dei report a mano, senza esportazioni programmate. Per automatizzare, usa uno script o un trigger di Google Sheets che legge i dati tramite un'API."
  - q: "Posso esportare più di un anno in una volta sola?"
    a: "Little Hotelier limita l'esportazione dei totali ospiti a 365 giorni e la ricerca prenotazioni del channel manager arriva solo a 548 giorni indietro. Esporta un anno (o un mese) alla volta e conserva i file."
  - q: "Come esporto solo le prenotazioni di Booking.com?"
    a: "Filtra per canale nei report del Channel Manager, oppure esporta tutto e filtra il riferimento della prenotazione in Excel. I riferimenti che iniziano con BDC sono Booking.com, EXP Expedia, ABB Airbnb, AGO Agoda, HWL Hostelworld e LH la tua reception o il tuo booking engine."
---

Apri **Reservations**, imposta le date, premi **Search**, poi **Export**: Little Hotelier scarica un file CSV che si apre in Excel o Google Sheets. Fallo con regolarità, perché Little Hotelier maschera i dati personali degli ospiti **180 giorni dopo il check-out** e l'esportazione non include mai i numeri di telefono. Se vuoi una copia che si aggiorna da sola ogni mese, leggi gli stessi dati tramite un'API.

## Perché esportare prima che i dati degli ospiti vengano mascherati

Il centro assistenza di Little Hotelier lo dice chiaramente: "Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date" ([ricerca nel channel manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [report del channel manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [report del booking engine](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).

Vale la pena conoscere altri due limiti:

- La ricerca prenotazioni del channel manager trova solo le prenotazioni "created or checked out within the last 548 days" (create o con check-out negli ultimi 548 giorni).
- Una volta mascherati, nessuna esportazione né API può riportare indietro i dati.

Quindi, se ti servono i dati degli ospiti per fatture, un elenco di ospiti abituali, una contestazione o le tue statistiche, esportali finché ci sono. Conserva solo ciò che hai un motivo di conservare e tieni i file in un posto con accesso controllato: contengono dati personali.

::callout{type="info" title="Due versioni di Little Hotelier"}
Gli account creati da maggio 2025 (o aggiornati) usano la nuova **platform**, con un [centro assistenza separato](https://help-platform.littlehotelier.com/en/). Gli account più vecchi usano la versione **classic**. I passaggi qui sotto riportano entrambi i percorsi di menu.
::

## Come esportare le prenotazioni da Little Hotelier in Excel

1. Apri **Reservations**. Nella versione classic: **My Apps → Front Desk → Reservations**.
2. Imposta **Date type** (**Check-in date**, **Check-out date** o **Booked on date**), poi **Date from** e **Date to**. Un mese di calendario è un buon intervallo.
3. Scegli uno **Status** se vuoi: **All**, **Confirmed**, **Checked-in**, **Checked-out** o **Cancelled**.
4. Clicca su **Search**.
5. Clicca su **Export**. Il file si scarica come `.csv`. Sulla nuova platform, Little Hotelier chiede il codice MFA o la passkey prima delle esportazioni di prenotazioni, ospiti, pagamenti, ricavi e fatture.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Pagina Reservations di Little Hotelier classic in spagnolo: filtri per cognome dell'ospite, riferimento della prenotazione, numero di fattura, tipo di data, stato, date e origine, il pulsante Search, 36 prenotazioni trovate e il link Export" caption="La pagina Reservations della versione classic (interfaccia in spagnolo). Prima Search, poi Export scarica tutti i risultati in CSV."}
::

Due dettagli dal [centro assistenza](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) evitano confusione:

- Se una ricerca restituisce molti risultati, la schermata mostra solo i **primi 31 giorni**. L'esportazione contiene tutto.
- Per contare gli ospiti di un periodo, imposta Date type e Status in modo coerente (check-in con **Checked-in**, check-out con **Checked-out**). La [guida classic](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) limita quell'esportazione a **365 giorni**.

### Cosa c'è nel CSV (e cosa no)

L'esportazione ha più colonne della schermata. Secondo [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) ottieni:

- **Prenotazione:** riferimento, data di prenotazione, canale, stato, data di cancellazione
- **Ospite:** nome e cognome, email, organizzazione, indirizzo completo
- **Soggiorno:** check-in, check-out, notti, orario di arrivo, commenti dell'ospite, tipologie di camera, camere, piani tariffari
- **Denaro:** subtotale, extra, supplementi, imposte, pagamenti ricevuti, saldo da pagare
- **Ospiti:** adulti, bambini, neonati; risposte alle domande personalizzate della prenotazione

Non inclusi: i **numeri di telefono** ("for security reasons") e uno storico delle modifiche, come l'ora esatta in cui un ospite ha fatto il check-in.

## Quali altri report può esportare Little Hotelier?

La maggior parte dei report ha un pulsante **Export** che produce un CSV. I percorsi sono quelli della nuova platform, tranne le righe di channel manager e booking engine, che vengono dalla versione classic (in **My Apps**). Gli account classic trovano la maggior parte degli altri report in **My Apps → Front Desk → Reports**.

| Report | Dove | Cosa ottieni |
|---|---|---|
| Guests | Reports → Operational → Guests | Gli ospiti che hanno soggiornato, per intervallo di date |
| Invoices | Reports → Operational → Invoices | Elenco fatture in CSV, PDF in uno ZIP |
| Accounting | Reports → Operational → Accounting | Fatture definitive, impostate per Xero e QuickBooks |
| Revenue (7 viste) | Reports → Strategic → Revenue | Riepilogo, tipologia di camera, camera, piano tariffario, canale, imposte, extra |
| Channel manager | Channel Manager → Reports | Riepilogo prenotazioni, soggiorni per camera, check-in, resa dei canali |
| Booking engine | Direct Booking → Reports | Prenotazioni con dispositivo usato e consenso GDPR |
| Polizia spagnola | Reports → Operational → Police report | Solo Spagna: schede degli ospiti per il registro di polizia |

Fonti: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Un consiglio: l'esportazione **Summary** del report Revenue ha una colonna "Rate per night", una riga per notte. È il modo più rapido per vedere a che prezzo è stata venduta ogni notte di un soggiorno lungo.

## Come aprire il CSV in Excel senza problemi con gli accenti

Se nomi come "José" diventano "JosÃ©", Excel ha scelto la codifica sbagliata. Importa il file invece di fare doppio clic:

1. In Excel vai su **Dati → Da testo/CSV** (**Data → From Text/CSV** nelle versioni in inglese) e scegli il file ([i passaggi di Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Imposta **Origine file** su **65001: Unicode (UTF-8)** e **Delimitatore** su **Virgola**.
3. Clicca su **Carica**.

In Google Sheets usa **File → Importa → Carica** e lascia il separatore su automatico. Sheets legge correttamente l'UTF-8.

## Un elenco di ospiti abituali: cosa puoi esportare e cosa ti serve

Il CSV delle prenotazioni contiene nomi, email e indirizzi, quanto basta per un ringraziamento o un'email di "torna a trovarci". Prima di inviare qualsiasi cosa, controlla chi ha acconsentito a ricevere tue comunicazioni:

- L'esportazione del **report del booking engine** ha una colonna **GDPR consent**. Little Hotelier dice che è compilata quando l'ospite ha dato il consenso e vuota quando non l'ha dato ([fonte](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Se usi Guest Engagement, **Guest engagement → Guests → Mailchimp export** invia gli ospiti a una lista Mailchimp. Tutti gli ospiti vengono esportati "regardless of GDPR consent status", con lo stato di opt-in indicato, quindi filtra in base a quello ([fonte](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

Le regole sul marketing cambiano da paese a paese. Scrivi via email solo agli ospiti che hanno dato il consenso, a meno che tu non abbia confermato con un consulente che si applica un'altra base giuridica.

## Il modo più veloce: esportazioni automatiche con un'API

Little Hotelier non ha una chiave API per le tue prenotazioni (i dettagli sono in [Little Hotelier ha un'API?](/blog/little-hotelier-api)). Hotelier Tools, una dashboard indipendente, si collega con il tuo login Little Hotelier e ti dà un'API REST e un server MCP per gli assistenti AI. Non è affiliato né approvato da SiteMinder o Little Hotelier ed è gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="warning" title="Un'API non può smascherare i dati"}
Hotelier Tools legge ciò che Little Hotelier conserva ancora. Le prenotazioni con più di 180 giorni dal check-out tornano mascherate anche tramite l'API. Automatizza l'esportazione adesso, così salvi ogni mese finché i dati sono ancora completi.
::

Per prima cosa crea una chiave: **Developer → API & MCP → API Keys** (`/developer/api-keys`), scrivi un nome, premi **Generate key** e copiala. La pagina la mostra una sola volta.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Pagina API keys subito dopo la generazione di una chiave chiamata Blog integration: il modulo Generate a new key, un riquadro verde Key generated con l'avviso Copy this key now, it will not be shown again, la chiave mascherata e un pulsante di copia, e la nuova chiave elencata in Active keys con Revoke" caption="Una chiave per ogni uso: dalle il nome del foglio o dello script che la conterrà e copiala finché viene mostrata." path="/developer/api-keys"}
::

### Senza codice: esegui l'esportazione dalla dashboard

1. Apri **LH Methods** (`/methods`) e scegli `fetchReservationsCSV`.
2. Compila `dateFrom` e `dateTo` (per esempio `2026-09-01` e `2026-09-30`).
3. Eseguilo. Il metodo recupera le tue prenotazioni come CSV, che puoi incollare in un foglio.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Pagina dei metodi di Little Hotelier in Hotelier Tools con una scheda per metodo, come getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parametri), generateInvoice e getInvoices" caption="Scegli fetchReservationsCSV in LH Methods per eseguire dal browser l'esportazione CSV delle prenotazioni, senza scrivere codice." path="/methods"}
::

### Google Sheets, aggiornato ogni mese

Questo Apps Script aggiunge un foglio con le prenotazioni del mese scorso (per data di check-in) a ogni esecuzione.

1. In un nuovo foglio Google apri **Estensioni → Apps Script**.
2. In **Impostazioni progetto** aggiungi una proprietà dello script chiamata `HT_API_KEY` con la tua chiave `htk_…`. Così la chiave resta fuori dal codice.
3. Incolla questo codice e salva:

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Clicca su **Esegui** una volta e consenti l'accesso quando Google lo chiede.
5. Per programmarlo, apri **Attivatori → Aggiungi attivatore**, scegli `importLastMonth`, origine evento **Basato sul tempo** e un **Timer mensile** il giorno 1 ([guida di Google](https://developers.google.com/apps-script/guides/triggers/installable)).

L'API restituisce fino a 100 prenotazioni per chiamata. Se un mese riempie tutte le 100 righe, dividilo in due metà. Chiunque possa modificare lo script può leggere la chiave, quindi condividi il foglio con attenzione e revoca la chiave in `/developer/api-keys` se viene compromessa.

### Chiedi a un assistente AI di costruire la tabella

Se hai collegato Claude o ChatGPT a Hotelier Tools (vedi [collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier)), chiedi a parole tue:

::prompt{label="Claude"}
Usando Hotelier Tools, elenca in una tabella tutte le prenotazioni con check-out a settembre 2026: riferimento prenotazione, nome dell'ospite, email, check-in, check-out, notti, canale e totale. Poi dammi la stessa tabella in formato CSV.
::

L'assistente legge le tue prenotazioni tramite il server MCP e restituisce la tabella. Ricorda che ciò che legge (nomi, email, importi) diventa parte della tua chat con quel fornitore di AI.

::demo-cta{path="/methods"}
::

Guide correlate: [le integrazioni di Little Hotelier](/blog/little-hotelier-integrations), [scaricare tutte le fatture in una volta](/blog/download-all-little-hotelier-invoices), [l'indagine sull'occupazione dell'INE](/blog/ine-hotel-occupancy-survey).

## Riepilogo

- **A mano:** **Reservations → Search → Export** dà un CSV con nomi, email e indirizzi degli ospiti, ma senza numeri di telefono.
- **Scadenza:** i dati degli ospiti vengono mascherati 180 giorni dopo il check-out, quindi esporta ogni mese.
- **Accenti:** importa con **Dati → Da testo/CSV** e UTF-8 in Excel.
- **Automatico:** un trigger di Google Sheets con l'API di Hotelier Tools, oppure una richiesta al tuo assistente AI. Maggiori informazioni nella [pagina della funzione API & MCP](/tools/bot/api-mcp).
