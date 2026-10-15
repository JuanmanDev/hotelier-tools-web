---
title: "Scaricare tutte le fatture di Little Hotelier in una volta (per il commercialista)"
seoTitle: "Scaricare tutte le fatture Little Hotelier in una volta"
description: "Little Hotelier mette in uno ZIP le fatture già emesse. Ecco come, come creare quelle mancanti e dare al commercialista uno ZIP e un CSV a trimestre."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [scaricare tutte le fatture little hotelier, scaricare fatture little hotelier, esportare fatture little hotelier, little hotelier fatture pdf, fatture trimestrali per il commercialista, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Pagina Invoices di Hotelier Tools con 66 fatture in totale, il quarto e il terzo trimestre 2026 ciascuno con i pulsanti Preview CSV e ZIP, e settembre 2026 aperto come tabella di numeri di fattura, ospiti, codici fiscali, date di check-out e totali"
featured: true
faq:
  - q: "Little Hotelier può scaricare tutte le mie fatture in PDF in una volta sola?"
    a: "Sì, per le fatture già emesse. Vai su Front Desk > Reports > Invoices, filtra le date, premi Download invoice PDFs e poi Download zip. Little Hotelier ti chiede prima di confermare con l'autenticazione a più fattori."
  - q: "Little Hotelier sincronizza automaticamente le fatture con Xero o QuickBooks?"
    a: "No. L'Accounting report esporta le fatture segnate come definitive (final) in un CSV pensato per l'importazione in Xero e QuickBooks, e il file lo importi tu. Sono incluse solo le fatture definitive."
  - q: "Hotelier Tools cambia la numerazione o il modello delle mie fatture?"
    a: "No. Hotelier Tools chiede a Little Hotelier di generare ogni fattura, quindi è un documento di Little Hotelier, con la numerazione, il logo e il layout impostati in Customise invoices."
  - q: "Cosa succede alle fatture annullate nella mia esportazione?"
    a: "In Little Hotelier, una fattura definitiva poi annullata passa in Older invoices con lo stato Cancelled e i suoi dati compaiono ancora nelle esportazioni. Dillo al tuo commercialista, così i ricavi non vengono contati due volte."
  - q: "Quanto costa Hotelier Tools?"
    a: "È gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Le strutture che iniziano prima del 31 dicembre 2026 pagano poi 50 € per struttura al mese per tutto il 2027. Per iniziare non serve la carta."
---

Sì. Little Hotelier può mettere in un unico ZIP ogni fattura **già emessa**: apri **Front Desk > Reports > Invoices**, filtra il trimestre e premi **Download invoice PDFs**. Quello che non fa è creare le fatture che nessuno ha generato, né avvisarti di quelle che non andrebbero ancora emesse. Per questo Hotelier Tools genera in un'unica esecuzione le fatture mancanti, rifiuta quelle a rischio e ti dà il trimestre come un solo ZIP di PDF più un CSV riepilogativo.

## Little Hotelier può esportare tutte le fatture in modo nativo?

Sì. A ottobre 2026 il centro assistenza di Little Hotelier descrive tre modi per estrarre le fatture. Quale ti serve dipende da cosa chiede il tuo commercialista.

| Metodo | Cosa ottieni | Il limite |
|---|---|---|
| Invoice report | Uno ZIP di fatture in PDF e un elenco in CSV | Solo le fatture già emesse |
| Accounting report | Un CSV pensato per l'importazione in Xero e QuickBooks | Solo le fatture segnate come definitive |
| Una prenotazione alla volta | Un PDF (Print o Save as PDF) | Lento per un trimestre intero |

### L'Invoice report (PDF in uno ZIP)

1. Vai su **My Apps > Front Desk > Reports** e clicca su **Invoices**.
2. Scegli l'intervallo di date del tuo trimestre. Se vuoi, filtra per **Invoice status** e **Payment status**, poi clicca su **Apply**.
3. Clicca su **Download invoice PDFs**, poi su **Download zip**.
4. Conferma la richiesta di autenticazione a più fattori. Lo ZIP si scarica.

**Export** nello stesso report ti dà invece un CSV. Fonte: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### L'Accounting report (CSV per Xero o QuickBooks)

Vai su **My Apps > Front Desk > Reports > Accounting**, scegli **Yesterday**, **Last 7 days** oppure date personalizzate, e clicca su **Export**. Ottieni un CSV (o uno ZIP per le esportazioni grandi) con contatto, indirizzo, numero di fattura, date, importi, codici conto e codici IVA.

Due limiti: vengono esportate solo le fatture **segnate come definitive (final)** e il file serve per un'importazione manuale. Non è una sincronizzazione in tempo reale. I codici dei conti si impostano una volta sola in **Front Desk > Setup > Accounting Integration**. Fonti: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) e [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Una prenotazione alla volta

Apri la prenotazione, clicca su **Print**, scegli **Invoice** e seleziona **Save as PDF** nella finestra di stampa ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Se lo fai spesso, lo script gratuito [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) mette un link di stampa diretto sulla prenotazione.

## Cosa non fa l'esportazione nativa

Il download è la parte facile. Di solito i problemi del trimestre nascono prima:

- **Fatture mancanti.** Lo ZIP contiene solo le fatture che qualcuno ha generato. Il centro assistenza descrive la creazione una prenotazione alla volta (scheda **Invoices** > **Generate invoice**), quindi un soggiorno su cui nessuno ha cliccato semplicemente non c'è.
- **Duplicati.** Ogni richiesta di generazione crea un nuovo documento in Little Hotelier, quindi rigenerare un soggiorno può lasciare due fatture dove il commercialista ne aspetta una.
- **Fatture anticipate.** Una fattura emessa prima del check-out dell'ospite diventa obsoleta appena si aggiunge un extra o un pagamento, e per correggerla serve una fattura correttiva, una nota di credito o, in Spagna, una *factura rectificativa*.
- **Finalizzazione.** L'esportazione contabile richiede che ogni fattura sia segnata come definitiva e il centro assistenza descrive come farlo prenotazione per prenotazione.

## Come scaricare un intero trimestre in un solo ZIP e CSV (il modo più veloce)

Hotelier Tools è una dashboard che si collega a Little Hotelier con il tuo login. La pagina **Invoice Download** crea le fatture di un intervallo di date in un'unica esecuzione e ti consegna il risultato per trimestre.

1. Registrati su [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) e collega Little Hotelier in **Credentials**. Il tuo login viene conservato cifrato.
2. Nel menu apri **Invoice Download** (`/invoices`).
3. Premi **Generate invoices** e scegli le date, per esempio dal 1° luglio al 30 settembre.
4. L'app legge quelle prenotazioni da Little Hotelier e crea le fatture per i soggiorni che ne hanno i requisiti. Tutto ciò che non riesce a fatturare finisce in **Errors** con il motivo. Niente viene saltato in silenzio.
5. Le tue fatture compaiono raggruppate per trimestre e mese. Sul trimestre premi **ZIP** per scaricare tutti i PDF, oppure **Preview CSV** per controllare prima il riepilogo.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Pagina Invoices raggruppata per trimestre, con i pulsanti Preview CSV e ZIP sul quarto e sul terzo trimestre 2026, la tabella delle fatture di settembre 2026 aperta e un avviso Pack downloaded che conferma il download del pacchetto di fatture del terzo trimestre 2026" caption="Ogni trimestre ha il suo ZIP di PDF e un CSV riepilogativo. Un clic su ZIP scarica l'intero trimestre." path="/invoices"}
::

Le fatture sono documenti di Little Hotelier. Hotelier Tools chiede a Little Hotelier di generarle una per una, quindi la numerazione, il logo e il layout impostati in **Customise invoices** restano esattamente come sono.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura.
::

## Controlli prima di fatturare: partite IVA mancanti, fatture anticipate e duplicati

Prima di chiedere una fattura a Little Hotelier, Hotelier Tools esegue un controllo preliminare. Rifiuta di fatturare un soggiorno quando:

- l'ospite **non ha ancora fatto il check-out**, perché le cifre non sono definitive
- è una **fattura a un'azienda senza codice fiscale/partita IVA** o indirizzo fiscale
- il **codice fiscale o la partita IVA hanno un formato errato**
- il soggiorno è **già fatturato**, il che evita i duplicati

Un ospite privato non ha bisogno di dati fiscali, quindi per lui un documento d'identità mancante è solo un avviso.

È la differenza tra uno ZIP di cui il commercialista può fidarsi e uno ZIP che ti rimanda indietro con delle domande.

## Cosa succede alle prenotazioni che non si possono fatturare?

Finiscono in **Errors** (`/invoices/errors`), una riga per prenotazione con il motivo.

1. Scegli l'intervallo di date in alto.
2. Filtra per tipo di problema: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** e altri.
3. Correggi la prenotazione in Little Hotelier: aggiungi il codice fiscale o la partita IVA, registra il pagamento o fai il check-out dell'ospite.
4. Torna in Errors e ricontrolla la prenotazione oppure segnala come risolta. **Copy CSV** ti dà l'elenco da passare a un collega.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Pagina Errors and issues dal 1° luglio al 30 settembre 2026 con Copy CSV, chip di filtro per tipo di problema come Missing DNI, Pending payment, Not checked out e Download failed, e una tabella di prenotazioni con ID fattura, date del soggiorno, totale, badge del problema, motivo (in spagnolo) e azioni" caption="Ogni prenotazione che un'esecuzione non ha potuto fatturare, con il motivo e un modo per riprovare." path="/invoices/errors"}
::

Se un soggiorno è bloccato da un saldo di arrotondamento di un centesimo o due, l'opzione cent-fix in **Settings > Invoices** può chiudere quei saldi minuscoli.

::demo-cta{path="/invoices"}
::

## In che lingua saranno le fatture?

La scegli in **Settings > Invoices** (`/settings/invoices`):

- **From the guest's country** (dal paese dell'ospite): ogni fattura usa la lingua del paese indicato nell'indirizzo dell'ospite. Un paese mancante o non riconosciuto usa la tua lingua di riserva.
- **Always the same language** (sempre la stessa lingua): tutte le fatture in una sola lingua, chiunque sia l'ospite.

Scegli la **Fallback language** (lingua di riserva) e premi **Save changes**.

## Cosa mandare al commercialista ogni trimestre

Una breve routine che evita la maggior parte delle email di sollecito:

1. **Genera le fatture del trimestre** qualche giorno dopo la chiusura, così anche i check-out in ritardo sono chiusi.
2. **Svuota la pagina Errors** finché non restano solo i soggiorni che davvero non richiedono fattura.
3. **Scarica lo ZIP e il CSV** e invia entrambi.
4. **Controlla che la numerazione non abbia salti o doppioni** prima di inviare.
5. **Segnala le fatture annullate.** In Little Hotelier, annullare una fattura definitiva la sposta in **Older invoices** con lo stato Cancelled e i suoi dati compaiono ancora nelle esportazioni ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Il tuo commercialista deve saperlo, così i ricavi non vengono contati due volte.

In Spagna questo alimenta la dichiarazione IVA ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Se usi VeriFactu, Little Hotelier finalizza le fatture inviandole direttamente all'AEAT ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools non ha una funzione VeriFactu propria, quindi lascia quel passaggio in Little Hotelier. In qualsiasi paese con fatturazione elettronica obbligatoria, come l'Italia con il Sistema di Interscambio (SDI), considera i PDF dello ZIP come copie di cortesia per il tuo archivio e verifica le regole con il tuo commercialista.

Gli sviluppatori possono anche recuperare i PDF delle fatture uno per uno tramite l'[API REST di Hotelier Tools](/blog/little-hotelier-api). E se il commercialista vuole anche i dati delle prenotazioni, vedi [come esportare le prenotazioni in Excel](/blog/export-little-hotelier-reservations-excel).

Guide correlate: [la guida a Little Hotelier](/blog/little-hotelier-tips), [le integrazioni di Little Hotelier](/blog/little-hotelier-integrations).

## Riepilogo

- L'**Invoice report** di Little Hotelier comprime in ZIP i PDF delle fatture già emesse; l'**Accounting report** esporta le fatture definitive come CSV per Xero o QuickBooks.
- Nessuno dei due crea le fatture mancanti né ferma duplicati e fatture anticipate.
- Hotelier Tools genera le fatture di un intervallo di date in un'unica esecuzione, rifiuta le fatture a rischio, elenca ogni errore con il suo motivo e ti dà uno ZIP e un CSV a trimestre.
- Per non accumulare arretrati, [invia ogni fattura automaticamente al check-out](/blog/send-invoice-to-guest-at-checkout). Vedi tutto ciò che fa la funzione di fatturazione nella [pagina Invoicing](/tools/bot/invoicing).
