---
title: "Come raccogliere in automatico le fatture dei fornitori via email (e dare al commercialista un trimestre in ordine)"
seoTitle: "Raccogliere le fatture dei fornitori via email in automatico"
description: "Ricevi le fatture dei fornitori a un unico indirizzo o dalla tua casella, controllale, scopri duplicati e IBAN cambiati ed esporta il trimestre."
date: 2026-10-31
category: invoicing
tags: [fatture fornitori, fatture passive, email, commercialista, iva, facturae]
keywords: [raccogliere fatture fornitori automaticamente, estrarre fatture dagli allegati email, indirizzo email per fatture fornitori, fatture passive hotel commercialista, quanto tempo conservare le fatture in spagna, come nominare i file delle fatture, fatture fornitori duplicate, fornitore ha cambiato iban truffa, esportare fatture ricevute per il commercialista]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/en/supplier-invoices-review-iban-warning.webp
coverAlt: "Fattura ricevuta da Electra Norte, To review, di 218,70 €: i pulsanti Confirm, Mark as duplicate e Reject, un riquadro rosso Check this invoice before you confirm it che avvisa che l'IBAN non è quello delle fatture precedenti del fornitore, una casella I checked this supplier through a known channel non spuntata con un pulsante Acknowledge, e i dettagli dell'email con mittente, oggetto in spagnolo, casella reservas@example.com, Sender check Not available ed Email risk Medium risk"
faq:
  - q: "Come posso raccogliere in automatico le fatture dei fornitori dalle email?"
    a: "O dai ai fornitori un indirizzo che riceve solo fatture, o lasci che un software legga la casella a cui scrivono già. In Hotelier Tools puoi fare entrambe le cose: ogni struttura ha un indirizzo privato per le fatture, e le caselle collegate possono essere analizzate ogni giorno, in sola lettura, alla ricerca di fatture allegate."
  - q: "Per quanto tempo vanno conservate le fatture dei fornitori in Spagna?"
    a: "Almeno quattro anni ai fini fiscali, il termine di prescrizione della Ley General Tributaria, come spiega l'Agencia Tributaria. Il Código de Comercio chiede alle imprese di conservare la documentazione per sei anni, quindi molti commercialisti consigliano di tenere tutto sei anni. Per il tuo paese chiedi al tuo commercialista."
  - q: "Posso conservare le fatture dei fornitori solo come PDF o scansioni?"
    a: "In Spagna sì, purché il metodo garantisca l'autenticità dell'origine, l'integrità del contenuto e la leggibilità, e l'agenzia delle entrate possa accedervi senza ritardi. Conserva il file originale ricevuto, non una copia ribattuta."
  - q: "Come riconosco una fattura falsa di un fornitore?"
    a: "Diffida quando il conto bancario è diverso dalle fatture precedenti, il dominio del mittente è cambiato o l'email non supera il controllo di autenticità. Hotelier Tools segnala questi casi e blocca la conferma e il pagamento finché una persona non conferma l'avviso dopo aver chiamato il fornitore a un numero già noto."
  - q: "È l'AI a decidere cosa entra nella mia contabilità?"
    a: "No. Ogni fattura parte come To review. Le fatture elettroniche vengono lette in modo esatto e l'AI legge PDF e foto, ma solo una persona può confermare una fattura o segnarla come pagata, e ciò che una persona corregge non viene mai sovrascritto da una nuova lettura."
  - q: "Hotelier Tools fa parte di Little Hotelier o del mio software di contabilità?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. L'esportazione delle fatture ricevute è un CSV e un file ZIP generici per il tuo commercialista, non un registro fiscale certificato."
---

Per raccogliere in automatico le fatture dei fornitori, falle arrivare tutte in un unico posto e lascia che un software estragga i file: dai ai fornitori un indirizzo dedicato alle fatture, oppure fai leggere a uno strumento la casella a cui scrivono già. In Hotelier Tools i fornitori possono scrivere a un indirizzo privato della tua struttura, oppure la tua casella collegata viene analizzata ogni giorno, in sola lettura. Le fatture elettroniche vengono lette in modo esatto, l'AI legge PDF e foto, e una persona controlla ogni fattura prima che entri nel trimestre che esporti per il commercialista.

## Perché il commercialista vuole le fatture dei fornitori in ordine

Le fatture dei fornitori sono l'altra metà della contabilità. Al commercialista servono per:

- **Detrarre l'IVA sugli acquisti.** In Spagna l'IVA pagata su lavanderia, elettricità o commissioni delle OTA si detrae nel [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) trimestrale, e solo se c'è una fattura valida.
- **Tenere il registro delle fatture ricevute.** Le imprese spagnole tengono un "libro registro de facturas recibidas": una riga per fattura con data, numero, partita IVA del fornitore, imponibile, aliquota e imposta.
- **Registrare i costi ai fini delle imposte sul reddito**, e verificare che quanto pagato corrisponda a quanto fatturato.

Il problema di solito non è il lavoro del commercialista. È la scatola delle scarpe: fatture sparse in tre caselle, una foto su WhatsApp, un portale del fornitore e una che non è mai arrivata.

## Per quanto tempo vanno conservate le fatture dei fornitori?

Dipende dal paese. Nell'UE l'articolo 247 della direttiva IVA lascia a ogni Stato membro la scelta del periodo ([testo dell'articolo 247](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted)). Per la Spagna:

| Norma | Periodo | Fonte |
|---|---|---|
| Fiscale (fatture ricevute e copie di quelle emesse) | 4 anni, il termine di prescrizione della Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Fatture legate all'IVA su beni con un periodo di rettifica | Quel periodo più i 4 anni successivi | Stessa pagina |
| Commerciale (libri, corrispondenza, documentazione) | 6 anni dall'ultima registrazione | [Código de Comercio, art. 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

L'Agencia Tributaria dice anche come: le fatture si conservano "con il loro contenuto originale, in ordine", su carta o in formato elettronico, purché il metodo garantisca l'autenticità dell'origine, l'integrità del contenuto e la leggibilità, e l'agenzia possa accedervi senza ritardi. In pratica: conserva il file inviato dal fornitore, in ordine, e non cancellare nulla che il commercialista abbia registrato. Verifica con il tuo commercialista il periodo valido nel tuo paese.

## Un criterio per nominare i file che evita domande

Se archivi le fatture a mano, dai a ogni file lo stesso tipo di nome, così una cartella si ordina da sola:

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

Prima la data (anno-mese-giorno, così si ordina per data), poi il fornitore, poi il numero della fattura. Tieni una cartella per trimestre. Non cambiare il numero del fornitore: è quello che usa il commercialista per abbinare la fattura al pagamento.

## Il modo più veloce: Received invoices in Hotelier Tools

**Received invoices** (fatture ricevute, `/received-invoices`) raccoglie ciò che inviano i fornitori, lo legge e lo tiene in attesa finché non lo confermi. Ci sono quattro vie d'ingresso, e puoi usarle tutte insieme:

| Via d'ingresso | Ideale per | Cosa configuri |
|---|---|---|
| **Indirizzo per le fatture** | Fornitori che possono scrivere a qualsiasi indirizzo | Copia l'indirizzo `inv-…` della tua struttura e mandalo a loro |
| **La tua casella** | Fornitori che scrivono già all'email del tuo hotel | Collegala in Messaging, poi attiva **Read for invoices** |
| **Trascina o incolla** | Fatture cartacee, foto, download dai portali | Niente: trascina i file sulla pagina |
| **API REST** | I tuoi script | `POST /api/v1/received-invoices/upload` |

Lo stesso file non entra mai due volte: qualunque sia la via da cui arriva, un file già presente viene riconosciuto dal contenuto.

### Opzione 1: dai ai fornitori il tuo indirizzo per le fatture

1. Apri **Settings > Received invoices** (`/settings/received-invoices`), trova **Invoice address** e premi **Create the address**.
2. Premi **Copy** e mandalo ai tuoi fornitori. Puoi anche inoltrargli le fatture che hai già.
3. Lascia attiva l'attività **Read the hotel mailbox** (consigliato ogni 5 minuti).

L'indirizzo ha questo aspetto: `inv-7k2m9qx4hp@in.hotelier.tools`. Appartiene solo alla tua struttura e non richiede alcuna password di casella. Come funzionano questi indirizzi, e cosa non sono, è spiegato in [un indirizzo email dell'hotel per fatture e login](/blog/hotel-email-address).

### Opzione 2: analizza la casella che i fornitori usano già

1. Collega la casella (Google, Microsoft o qualsiasi account IMAP) in **Messaging > Channels**.
2. In **Received invoices** apri la **Setup guide**. Ha quattro passaggi:
   - **Choose the mailboxes your suppliers write to**: scegli le caselle a cui scrivono i fornitori e attivale.
   - **Choose how far back to read**: **The past** N giorni, mesi o anni, oppure **Since the start of this** settimana, mese, trimestre o anno. Al massimo 5 anni indietro.
   - **Read the mail you already have** con **Read the mail now**. I recuperi lunghi si fermano dopo un po' e la scansione giornaliera legge il resto.
   - **Read new mail every day**: la scansione programmata, consigliata alle 06:20.
3. In **Settings > Received invoices** regola ogni casella: **Folders to read**, **Always read mail from** (gli indirizzi esatti dei tuoi fornitori) e **Never read mail from**.

La lettura è in sola lettura: nulla viene segnato come letto, spostato o eliminato, e Spam, Inviati, Cestino e Bozze non vengono mai letti. Un messaggio conta come fattura quando arriva da un fornitore noto, ha allegata una fattura elettronica, contiene una parola come fattura ("invoice", "factura", "fattura"…) o porta una foto.

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Impostazioni Received invoices: la scheda Suggestions con Suggest invoices that have not arrived attivo e 24 mesi di storico, e la scheda Mailboxes con reservas@example.com collegata, Read for invoices attivo, INBOX come cartella da leggere, una prima scansione di 120 giorni indietro e gli elenchi Never read mail from e Always read mail from vuoti" caption="Ogni casella viene letta solo dopo che l'hai attivata, e solo per le fatture." path="/settings/received-invoices"}
::

### Opzione 3: trascina i file

Trascina sulla pagina PDF, foto (PNG, JPEG, WebP) e file XML di fatture elettroniche, oppure premi **Choose files**. Fino a 20 file alla volta, 15 MB ciascuno. Puoi anche incollare una foto. Le foto HEIC dell'iPhone non si possono ancora leggere: esportale prima in JPEG.

## Come viene letta ogni fattura

- **Le fatture elettroniche vengono lette in modo esatto.** I file XML Facturae, UBL e CII vengono analizzati dal codice, senza AI e senza costi. Un file Facturae con più fatture diventa più righe. Una firma viene mostrata come presente, non verificata.
- **L'AI legge PDF e foto.** PDF fino a 10 MB e sei pagine, foto fino a 5 MB. Ogni lettura usa la tua quota mensile di AI, la stessa delle risposte agli ospiti, e mostra token e costo sulla fattura. Per impostazione predefinita l'AI legge al massimo 40 fatture al giorno; puoi cambiarlo.
- **Gli allegati delle email per impostazione predefinita aspettano te.** **Read email attachments automatically** resta spento finché non lo attivi, e la posta con avvisi di frode non viene mai letta da una macchina.

Ogni campo mostra da dove viene il suo valore (**E-invoice**, **AI** o **You**). Ciò che correggi non viene mai sovrascritto da una nuova lettura.

## Confronta con l'originale, poi conferma

Ogni fattura parte come **To review** (da controllare). Aprila, confronta i campi con l'originale accanto e premi **Confirm** (o **Confirm and next** per scorrere la coda). Più tardi, **Mark as paid** con la data. Qualcosa non va? **Mark as duplicate**, oppure **Reject** con un motivo: **Not for this property**, **Not an invoice**, **Spam or fraud** o **Other**. Un file rifiutato non viene mai riportato dentro dalla scansione della casella.

::screenshot{src="/images/blog/demo/en/supplier-invoices-review-iban-warning.webp" alt="Fattura ricevuta da Electra Norte, To review, di 218,70 €: i pulsanti Confirm, Mark as duplicate e Reject, un riquadro rosso Check this invoice before you confirm it che avvisa che l'IBAN non è quello delle fatture precedenti del fornitore, una casella I checked this supplier through a known channel non spuntata con un pulsante Acknowledge, e i dettagli dell'email con mittente, oggetto in spagnolo, casella reservas@example.com, Sender check Not available ed Email risk Medium risk" caption="Un conto bancario cambiato blocca Confirm finché qualcuno non ha verificato con il fornitore per telefono." path="/received-invoices"}
::

### Gli avvisi che fermano un pagamento sbagliato

La frode più comune sui fornitori è semplice: una fattura che sembra giusta, con un nuovo conto bancario. Hotelier Tools confronta ogni fattura con lo storico del fornitore e con l'email da cui è arrivata:

- **Il conto bancario (IBAN) non è quello delle fatture precedenti del fornitore.** Vengono conservate solo le ultime quattro cifre.
- **L'indirizzo del mittente non ha superato il controllo di autenticità (DMARC).** La pagina della fattura mostra una riga **Sender check** (**Passed**, **Failed** o **Not available**), letta dall'intestazione del server di posta, mai dalla riga From.
- **L'email da cui è arrivata ha avvisi di frode**, la fattura è intestata alla partita IVA di un'altra azienda, l'emittente è la tua stessa struttura, oppure il PDF contiene script.

Ognuno di questi casi blocca **Confirm** e **Mark as paid** finché una persona non spunta **I checked this supplier through a known channel** e preme **Acknowledge**. Chiama il fornitore a un numero che hai già, mai a uno preso dall'email. Nessuna chiave API né strumento AI può confermare al posto tuo.

Gli avvisi più leggeri non bloccano, ma si vedono: gli importi non tornano, la partita IVA non supera il controllo della cifra di verifica, il fornitore di solito scrive da un altro dominio.

### Duplicati

Una fattura viene segnalata come possibile duplicato quando un'altra ha la stessa partita IVA del fornitore e lo stesso numero, oppure lo stesso fornitore e lo stesso totale con una data di emissione entro tre giorni. Decidi tu: **Mark as duplicate** e scegli l'originale; resta nell'elenco, esclusa dai totali.

### Cosa non puoi mai fare

Eliminare una fattura confermata o pagata. Resta in archivio (quattro anni in Spagna) e si può solo rifiutare, il che la esclude dai totali e dall'esportazione.

## Esporta il trimestre per il commercialista

1. In **Received invoices** l'elenco è raggruppato per trimestri solari (Q1 = da gennaio a marzo, come nel modelo 303) per impostazione predefinita. Puoi raggruppare per mese, anno, fornitore o categoria, e impostare il mese di inizio del tuo anno fiscale.
2. Premi **Export for accountant** su un trimestre.
3. Scegli **Confirmed and paid invoices** (predefinito) o **Also the ones waiting for review**, e **ZIP with the originals and the CSV** o **CSV only**.
4. Se vuoi, spunta **List the invoices that have not arrived**.

Lo ZIP contiene un file per fattura, **rinominato con data, fornitore e numero**, un CSV impostato come il libro registro de facturas recibidas (una riga per riga d'imposta) e un README. Fino a 500 file per esportazione.

::screenshot{src="/images/blog/demo/en/supplier-invoices-export-dialog.webp" alt="Finestra Export for the accountant per il periodo 2026: Confirmed and paid invoices selezionato, ZIP with the originals and the CSV selezionato, List the invoices that have not arrived non spuntato, 29 fatture da esportare e un avviso che 3 fatture in attesa di controllo non sono incluse" caption="Un trimestre, uno ZIP: gli originali rinominati più un CSV in stile registro." path="/received-invoices"}
::

Sii onesto con il commercialista su un punto: il CSV segue l'impostazione del registro, ma **non è certificato** dall'agenzia delle entrate. È lui a decidere cosa entra in contabilità.

### Le fatture che potrebbero mancarti

Per i fornitori che fatturano con regolarità (lavanderia mensile, elettricità bimestrale, una gestoría trimestrale), **Invoices you may be missing** dice "Expected from Lavandería Sol SL around October 1" (attesa da Lavandería Sol SL intorno al 1° ottobre) quando la successiva non è arrivata. Sono stime, non debiti. **Not this time** nasconde un periodo; **Stop expecting** nasconde il fornitore.

::screenshot{src="/images/blog/demo/en/supplier-invoices-quarter-list.webp" alt="Pagina Received invoices: caselle lette di recente con 2 importate, la zona Drop invoices here con Read PDFs and photos with AI attivo, riquadri Spent 25.852,14 €, VAT 796,87 €, IGIC 0,00 €, 3 da controllare e 1 non pagata, Invoices you may be missing con Lavandería Sol SL in ritardo dal 1° ottobre ed Electra Norte arrivata da controllare, e l'attività Scan the mailboxes in pausa" caption="Vedi quanto hai speso, cosa resta da controllare e quale fattura ricorrente non è ancora arrivata." path="/received-invoices"}
::

## Chi può fare cosa

Dai al commercialista un login tutto suo in **Settings > Team & roles** (`/settings/team`). Il ruolo predefinito **accountant** può vedere, modificare e far leggere le fatture, ma non analizzare le caselle. Analizzare la posta aziendale e spendere crediti AI sono permessi separati che concedi di proposito.

Anche l'assistente può aiutarti: "Quali fatture di fornitori mi mancano per il terzo trimestre?" o "Quanta IVA sugli acquisti finora in questo trimestre?" ricevono risposta dagli stessi dati, e tutto ciò che modifica una fattura aspetta la tua approvazione.

::demo-cta{path="/received-invoices"}
::

Received invoices fa parte della [funzione Invoicing](/tools/bot/invoicing). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Le fatture ricevute restano in Hotelier Tools; in Little Hotelier non viene scritto nulla.
::

Guide correlate: [scaricare tutte le fatture di Little Hotelier](/blog/download-all-little-hotelier-invoices), [un indirizzo email dell'hotel per le fatture](/blog/hotel-email-address), [inviare la fattura all'ospite al check-out](/blog/send-invoice-to-guest-at-checkout).

## Riepilogo

- Fai arrivare le fatture dei fornitori in un unico posto: un indirizzo privato per le fatture, la tua casella analizzata ogni giorno, oppure trascinandole.
- Conservale: in Spagna almeno quattro anni ai fini fiscali e sei per il Código de Comercio, come file originali, in ordine.
- Le fatture elettroniche vengono lette in modo esatto; l'AI legge PDF e foto; una persona conferma ognuna.
- Un IBAN cambiato, un controllo del mittente fallito o un punteggio di frode bloccano il pagamento finché qualcuno non verifica con il fornitore.
- Esporta ogni trimestre come ZIP di originali rinominati più un CSV in stile registro per il commercialista.
