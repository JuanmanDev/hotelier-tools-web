---
title: "Expedia Collect: come farsi pagare con la carta virtuale o la richiesta di pagamento (senza dimenticarne nessuna)"
seoTitle: "Pagamenti Expedia Collect: carta virtuale o richiesta"
description: "Con Expedia Collect l'ospite paga Expedia, ma tu incassi solo se addebiti la carta virtuale o chiedi il pagamento. Scadenze, passaggi e automazione."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, pagamenti, carta virtuale, partner central, automazione]
keywords: [expedia collect come funziona, richiesta pagamento expedia collect, expedia non mi ha pagato, carta virtuale expedia quando addebitare, carta virtuale expedia rifiutata, pagamenti expedia partner central, expedia collect vs hotel collect, fatturazione expedia collect hotel, expedia pagamenti automatici]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-payments-states.webp
coverAlt: "Scheda Expedia Collect payments in Hotelier Tools per i check-out dal 7 ottobre al 5 novembre 2026: i chip All 7, To request 2 (€224.08), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 e Cancelled 1, e sette soggiorni demo con importo, stato, chi ha chiesto (Check at check-out o Demo Manager) e ID di coda Expedia, sopra il pulsante Request payment"
featured: true
faq:
  - q: "Quanto tempo ho per richiedere il pagamento di una prenotazione Expedia Collect?"
    a: "365 giorni dalla data di check-out dell'ospite. Dopo, Partner Central non offre più la richiesta di pagamento per quel soggiorno, quindi una prenotazione dimenticata può diventare denaro che non incasserai mai."
  - q: "Quando posso addebitare la carta virtuale di Expedia?"
    a: "Dalla data di check-in. Expedia consiglia di addebitarla al check-in e di riprovare a fine giornata se non passa, per via dei fusi orari. Addebita l'importo esatto indicato; la carta si disattiva sei mesi dopo il check-out."
  - q: "Quanto ci mette Expedia a pagare una richiesta di pagamento?"
    a: "Expedia invia il pagamento alla tua banca secondo i tuoi termini di pagamento, di solito 30 giorni dopo la richiesta. La banca può impiegare altri 2-8 giorni."
  - q: "Devo richiedere a mano ogni pagamento Expedia Collect?"
    a: "No, se usi la carta virtuale, che addebiti tu, o i pagamenti automatici dove Expedia li offre (solo in alcuni mercati, con una trattenuta del 2%). Altrimenti ogni soggiorno richiede una richiesta di pagamento in Partner Central, o uno strumento che la invii per te."
  - q: "Hotelier Tools può richiedere in automatico i pagamenti Expedia Collect?"
    a: "Sì, in beta. Un'attività programmata chiede a Expedia di pagare i soggiorni dopo il check-out. Parte in anteprima, non chiede mai due volte lo stesso soggiorno, non accede mai da sola e non addebita mai carte virtuali."
  - q: "Hotelier Tools fa parte di Expedia o di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da Expedia Group, SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e con il tuo login di Partner Central."
---

Con Expedia Collect l'ospite paga Expedia al momento della prenotazione, ed Expedia ti deve quei soldi dopo il soggiorno. Li ricevi in uno di tre modi: addebiti la carta virtuale di Expedia dalla data di check-in, invii una richiesta di pagamento in Partner Central (**Payments > Request a payment from Expedia Group**) entro 365 giorni dal check-out, oppure Expedia ti paga con i pagamenti automatici, dove esistono. Se non fai nessuna di queste cose, quei soldi non li incassi mai. Hotelier Tools (beta) mostra lo stato del pagamento di ogni soggiorno Expedia e può inviare le richieste per te in modo programmato.

Le regole di Expedia qui sotto sono state verificate sulla guida di Partner Central di Expedia Group a novembre 2026.

## Come ti paga Expedia per le prenotazioni Expedia Collect?

Con **Expedia Collect (EC)** i viaggiatori pagano in anticipo Expedia o uno dei suoi partner B2B, e la notifica di prenotazione mostra la tariffa netta: quello che Expedia ti paga dopo la sua commissione ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)). Dopo il soggiorno incassi in uno di questi modi:

| Come vieni pagato | Cosa fai | Quando arrivano i soldi | Costo |
|---|---|---|---|
| **Carta virtuale** | La addebiti sul tuo POS, dalla data di check-in | Con i tempi abituali del tuo circuito di pagamento | Nessuna commissione Expedia, solo quella del tuo circuito |
| **Richiesta di pagamento** (bonifico) | La invii in Partner Central entro 365 giorni dal check-out | Di solito 30 giorni dopo, più 2-8 giorni bancari | Gratis |
| **Pagamenti automatici** (alcuni mercati) | Nulla per ogni soggiorno | L'ultimo giorno del mese successivo al check-out | Trattenuta del 2% |

Due altri modelli sembrano simili ma funzionano diversamente. Con **Hotel Collect** l'ospite paga te in struttura, quindi non c'è nulla da chiedere a Expedia. **Expedia Traveler Preference** lascia scegliere all'ospite l'uno o l'altro al momento della prenotazione.

In alcuni mercati Expedia ha sostituito EC con **Updated Expedia Collect (EC+)**. Nel modello netto la carta virtuale viene caricata con il totale della prenotazione meno la commissione di Expedia e le tasse. Nel modello lordo porta l'importo intero, ed Expedia ti fattura a parte ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## Come addebitare la carta virtuale di Expedia

La **Expedia Virtual Card (EVC)**, oggi chiamata semplicemente "virtual card" in Partner Central, è una carta monouso che Expedia emette per ogni prenotazione Expedia Collect dopo che hai aderito al servizio ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Trova i dati della carta: nella notifica di prenotazione (se hai un channel manager), sulla prenotazione in Partner Central sotto **Payment method**, oppure nella pagina di ricerca **Virtual cards** con l'ID prenotazione e la data di check-in ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Addebitala **dalla data di check-in**, per il totale esatto indicato, nella valuta del tuo contratto.
3. Se al mattino viene rifiutata, riprova a fine giornata. Expedia spiega che la carta potrebbe non essere ancora attiva per via dei fusi orari.
4. Addebita extra e tassa di soggiorno sulla carta dell'ospite, mai sulla carta virtuale.

Attenzione alle scadenze. L'articolo sull'addebito dice che la carta resta valida 180 giorni dopo il check-out, quello sulla ricerca dice che si disattiva sei mesi dopo il check-out. Addebiti in un'altra valuta? Usa il cambio del giorno, altrimenti rischi un rifiuto o un chargeback.

## Come richiedere il pagamento a Expedia Group in Partner Central

Se non usi la carta virtuale, ogni soggiorno Expedia Collect richiede una richiesta di pagamento ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. Seleziona **Payments** nel menu.
2. In **Quick tasks**, seleziona **Request a payment from Expedia Group**.
3. Cerca **By Date Range** (al massimo 31 giorni alla volta) o **By Reservation ID** (fino a 200 ID).
4. Spunta le prenotazioni, controlla gli importi della prenotazione e delle tasse e seleziona **Create Invoice**.
5. Conserva il **Transmission Queue ID** mostrato nella conferma. È il riferimento di quella richiesta.

Se Partner Central non ha i dettagli di una prenotazione, carica invece un file di richiesta di pagamento. Se i tuoi dati bancari sono incompleti, un pop-up nella pagina della richiesta te lo segnala: sistemali prima, altrimenti il pagamento arriva in ritardo.

## Quando paga Expedia, e cosa succede se te ne dimentichi?

Expedia invia i soldi secondo i tuoi termini di pagamento, di solito 30 giorni dopo la richiesta, e la banca può impiegare altri 2-8 giorni. Una prenotazione fatturata solo in parte richiede una nuova richiesta per il resto. Per un no-show o una partenza anticipata, contatta Expedia per chiedere un rimborso.

Se nessuno richiede un soggiorno, **Expedia non lo paga**. Dopo 365 giorni dal check-out l'opzione sparisce da Partner Central. Un'estate piena con dieci soggiorni dimenticati sono soldi veri rimasti a Expedia.

I pagamenti automatici eliminano il passaggio per ogni soggiorno, ma solo in alcuni mercati, e trattengono il 2% ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Controlla in **Payments > Payment Settings** se la tua struttura li ha.

## Come riconciliare i pagamenti Expedia Collect

Ogni mese confronta tre elenchi:

- **I tuoi check-out:** ogni soggiorno Expedia Collect concluso.
- **Le tue richieste:** in Partner Central, **Payments > See all invoices**, un intervallo di date, poi la colonna **Status**. Vengono conservati due anni di storico, con importo della rimessa e data di pagamento ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **La tua banca:** i bonifici ricevuti, con i queue ID.

Un check-out senza richiesta sono soldi da chiedere. Una richiesta senza bonifico dopo 40 giorni merita una domanda a Expedia. Quando un soggiorno è pagato, registra il pagamento nel tuo gestionale, così Little Hotelier non mostra un saldo che l'ospite non deve.

## Il modo più veloce: richiedere i pagamenti Expedia Collect da Hotelier Tools (beta)

Hotelier Tools si collega al tuo account Partner Central e fa per te il giro descritto sopra. Legge ogni soggiorno Expedia, mostra a che punto è il pagamento e chiede a Expedia di pagare, a mano o in modo programmato.

### 1. Collega Partner Central

Apri **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). L'accesso avviene in un browser sul server: Hotelier Tools digita email e password, e tu rispondi solo a quello che chiede Expedia.

- **I have a login** (ho già un login): inserisci email e password di accesso. Su un nuovo dispositivo Expedia invia un codice via email, che scrivi nel campo **Code from Expedia**. Gli accessi successivi riutilizzano il dispositivo salvato e di solito non chiedono il codice.
- **I have an invitation link** (ho un link d'invito): un'opzione più pulita è un utente Partner Central separato per Hotelier Tools. Invitalo dal tuo account, poi incolla così com'è il link dell'email d'invito di Expedia. La procedura guidata crea la password (da 12 a 64 caratteri, con maiuscole e minuscole, un numero e un simbolo) e il profilo richiesto da Expedia, che include un telefono.

Ogni passaggio che la procedura guidata non conosce, come la configurazione di un SMS o un controllo di sicurezza, mostra un'immagine della pagina: ci clicchi sopra e scrivi nel campo. **Keep me signed in** è sempre spuntato e la sessione viene conservata cifrata. L'attività **Keep Expedia signed in** (ogni 20 minuti) la usa perché non scada per inattività, e non accede mai da sola. Se la sessione scade, una persona accede di nuovo.

### 2. Guarda lo stato del pagamento di ogni soggiorno

La scheda **Expedia Collect payments** nella stessa pagina elenca ogni soggiorno Expedia con check-out nelle date che scegli. Scegli **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year** o **Last year**, oppure un intervallo qualsiasi fino a 366 giorni. Expedia viene letto 31 giorni alla volta, come fa il modulo di Partner Central.

Ogni soggiorno ha uno stato, con un chip che filtra l'elenco:

| Stato | Cosa significa |
|---|---|
| **To request** | Check-out fatto, nulla pagato, mai richiesto: puoi richiederlo ora |
| **Not yet** | Check-out non ancora avvenuto, o niente da richiedere |
| **Requested** | Richiesto da Hotelier Tools; Expedia l'ha accettato e ha dato un queue ID |
| **Refused by Expedia** | Expedia ha risposto con un errore; una persona può richiederlo di nuovo |
| **Check in Partner Central** | Nessuna risposta leggibile: controlla in Partner Central prima di richiederlo di nuovo |
| **Reconciled by Expedia** | Richiesto da qui; secondo gli estratti di Expedia l'importo è accettato e il pagamento è in attesa |
| **Paid by Expedia** | Richiesto da qui; gli estratti di Expedia riportano la data e l'importo pagato |
| **Paid** / **Invoiced** | I registri di Expedia dicono che è stato pagato un importo, o che il soggiorno è fatturato |
| **Not in Expedia's list** | Richiesto a mano in Partner Central, o pagato con i pagamenti automatici |
| **Virtual card** | Addebita la carta: non c'è nulla da richiedere |
| **Hotel Collect** | L'ospite paga direttamente te |

Spunta i soggiorni, o usa la casella per selezionarli tutti, e premi **Request payment for N stays**. Dopo la tua conferma, Hotelier Tools invia un'unica richiesta per tutti, la stessa richiesta **Create Invoice** di Partner Central. Ogni soggiorno viene prima riservato, così non viene mai inviato due volte. **Details** mostra cosa dice Expedia di un soggiorno e lo storico della richiesta.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-states.webp" alt="Scheda Expedia Collect payments in Hotelier Tools per i check-out dal 7 ottobre al 5 novembre 2026: i chip All 7, To request 2 (€224.08), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 e Cancelled 1, e sette soggiorni demo con importo, stato, chi ha chiesto (Check at check-out o Demo Manager) e ID di coda Expedia, sopra il pulsante Request payment" caption="Ogni soggiorno Expedia nelle date che scegli, e a che punto è il suo pagamento. Spunta quelli da richiedere e chiedili tutti in una volta." path="/credentials/expedia-extranet"}
::

### 3. Lascialo girare in modo programmato

In **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`) premi **Every day at 09:30** (la programmazione consigliata) oppure **Choose** per scegliere un orario. Così crei l'attività **Request Expedia Collect payments**. Parte in **Preview**: ogni esecuzione scrive nel suo log quali soggiorni richiederebbe e non invia nulla. Quando l'elenco ti convince, imposta **What a run does** su **Request: ask Expedia to pay**.

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Days after check-out** | 1 | Richiede quando il check-out ha almeno questi giorni |
| **Look back (days)** | 30 | Quanto indietro vengono cercati i check-out |
| **Most per stay** | Nessun limite | Un soggiorno che chiede di più viene lasciato a una persona |
| **Most stays per run** | 20 | Gli altri aspettano l'esecuzione successiva |

Cosa non fa mai: accedere a Partner Central, chiedere due volte lo stesso soggiorno, chiedere un soggiorno pagato con carta virtuale o con check-out non ancora avvenuto, o chiedere di nuovo un soggiorno che Expedia ha rifiutato o a cui non ha risposto. Questi restano a una persona, e il log dell'esecuzione li indica per nome.

::screenshot{src="/images/blog/demo/en/expedia-collect-preview-run.webp" alt="Dettagli dell'esecuzione dell'attività Request Expedia Collect payments del 5 novembre 2026, segnata Success, con il riepilogo del risultato: Preview, nothing sent: 1 stay would be requested from Expedia (54.08 EUR): EXP-2570209049. 2 stays Expedia refused or did not answer before are left for a person" caption="In anteprima, ogni esecuzione scrive quali soggiorni richiederebbe e non invia nulla. I soggiorni rifiutati da Expedia restano a una persona." path="/credentials/expedia-extranet/automatic-requests"}
::

Usi già i controlli **When they leave** (alla partenza)? Il suo controllo **Expedia Collect payment** avvisa di un importo non ancora richiesto. Con la correzione **Request the payment from Expedia (asks Expedia for money)** attivata, invia la richiesta quando l'ospite parte. Possono essere attivi entrambi: un soggiorno viene riservato una sola volta.

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="Pagina dei controlli When they leave: i controlli Address and origin validation e Automatic check-out, poi il controllo Expedia Collect payment, disattivato, con cosa può fare (avvisare di un importo non ancora richiesto e, con la correzione attiva, chiedere a Expedia una volta per soggiorno) e cosa non fa (richiedere di nuovo un soggiorno rifiutato, addebitare carte virtuali)" caption="Il momento del check-out può chiedere a Expedia ogni soggiorno quando l'ospite parte, una volta per soggiorno." path="/automated-checks/moment/at_checkout"}
::

### 4. Segui lo storico

**Expedia payments** (`/automated-checks/expedia-payments`) è il registro di ogni richiesta fatta da Hotelier Tools: da una persona, dall'attività programmata, dal controllo al check-out, da un assistente o dall'API. Filtra per stato, **Who asked** e date di check-out, e apri una riga per vedere ogni riserva e ogni risposta di Expedia. **Ask again** riprova i soggiorni che Expedia ha rifiutato. Per un soggiorno senza risposta devi prima spuntare **I checked Partner Central and these stays are not there**, perché chiedere due volte potrebbe significare essere pagati due volte.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-history.webp" alt="Pagina dello storico Expedia payments: i filtri Search, Who asked e date di check-out, i chip Requested 12, Refused by Expedia 1, Check in Partner Central 1 e Sending 0, un pulsante Ask again e le richieste: Lucas Alvarez rifiutata da Expedia perché l'importo non corrispondeva alla prenotazione, Chiara Larsen richiesta con un ID di coda, Sean Bianchi senza una risposta leggibile, da verificare in Partner Central, e soggiorni richiesti dal controllo al check-out" caption="Ogni richiesta fatta da Hotelier Tools, chi l'ha chiesta e cosa ha risposto Expedia. I soggiorni rifiutati o senza risposta si possono richiedere di nuovo." path="/automated-checks/expedia-payments"}
::

Su una prenotazione Expedia (`EXP-` seguito dal codice di conferma), la sezione **Payments** della prenotazione ha un pannello **Expedia payment** con **Check with Expedia** e un link che apre la scheda dei pagamenti con quel soggiorno già spuntato.

Puoi anche chiedere all'assistente AI della dashboard, o a Claude e ChatGPT tramite il [server MCP](/blog/what-is-mcp-server-hotels). "Quali pagamenti Expedia sono stati rifiutati questo mese?" chiama `list_expedia_payment_requests`. "Chiedi di nuovo a Expedia per EXP-2570237397" chiama `request_expedia_payments`, uno strumento che richiede la tua approvazione: nella chat della dashboard mostra una scheda, e nulla viene inviato finché non confermi. Le stesse letture e richieste sono nell'API REST.

### Limiti onesti

- **Beta, e recente.** Le richieste di pagamento sono arrivate a novembre 2026.
- **Il pagamento si segue solo per le richieste fatte da qui.** Dalla versione 1.71 (novembre 2026) Hotelier Tools legge la pagina **Statements and invoices** di Partner Central (gli ultimi 12 mesi) e mostra una richiesta come **Reconciled by Expedia** (accettata, pagamento in attesa) o **Paid by Expedia** (con data e importo), anche nel pannello Expedia della prenotazione. Una richiesta non ancora presente in quella pagina resta **Requested**.
- **Non addebita mai carte virtuali.** Quei soggiorni compaiono come **Virtual card**: addebitali sul tuo POS.
- **Usa la tua sessione di Partner Central.** I termini per i partner di Expedia limitano l'accesso automatizzato a Partner Central. Hotelier Tools accede come il tuo utente, mai da solo, e nulla viene condiviso tra strutture.
- **La demo usa un Partner Central simulato.** I suoi soggiorni Expedia mostrano ogni stato, e una richiesta inviata lì viene accettata solo in memoria: a Expedia non arriva nulla.

::demo-cta{path="/credentials/expedia-extranet"}
::

Tutti i controlli sono nella [pagina Automated checks](/tools/bot/automated-checks). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da Expedia Group, SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e con il tuo login di Expedia Partner Central.
::

Guide correlate: [i messaggi degli ospiti Expedia](/blog/expedia-guest-messages), [prenotazioni OTA che mancano in Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [carta non valida o no-show su Booking.com](/blog/booking-com-invalid-card-no-show).

## Riepilogo

- Expedia Collect significa che Expedia tiene i soldi dell'ospite finché non li reclami.
- Carta virtuale: addebitala dalla data di check-in, per l'importo esatto, prima che si disattivi sei mesi dopo il check-out.
- Richiesta di pagamento: **Payments > Request a payment from Expedia Group**, entro 365 giorni dal check-out; di solito pagata 30 giorni dopo.
- Riconcilia ogni mese: check-out contro **See all invoices** contro la tua banca.
- Hotelier Tools (beta) mostra lo stato di ogni soggiorno e può richiedere i pagamenti in modo programmato, partendo in anteprima e senza mai chiedere due volte.
