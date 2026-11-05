---
title: "Link di pagamento in Little Hotelier: come inviarne uno, incassare caparre e sollecitare gli ospiti che non hanno pagato"
seoTitle: "Link di pagamento e promemoria in Little Hotelier"
description: "Invia richieste di pagamento da Little Hotelier, imposta caparre e sollecita in automatico chi deve pagare, senza chiedere quanto già pagato a Booking.com."
date: 2026-10-28
updated: 2026-11-05
category: invoicing
tags: [pagamenti, link di pagamento, little hotelier, siteminder pay, caparre, automazione]
keywords: [link di pagamento little hotelier, little hotelier richiesta di pagamento, little hotelier pay payment request, siteminder pay link di pagamento, email promemoria pagamento hotel, sollecito pagamento saldo prima dell'arrivo, caparra little hotelier, prenotazione booking prepagata little hotelier saldo]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/en/payment-links-modal.webp
coverAlt: "Finestra Payment link di Hotelier Tools per la prenotazione BBN-DEMO102550: 759,55 euro da pagare, il campo dell'importo, la casella SiteMinder Pay emails it to non spuntata con l'email dell'ospite, la nota Valid for 48 hours, il pulsante Create payment link e nessun link di pagamento precedente"
faq:
  - q: "Come invio un link di pagamento da Little Hotelier?"
    a: "Apri la prenotazione nel Front Desk e clicca su Send Payment Request. Compila importo, motivo e messaggio, clicca su Create request, poi inviala via email da un modello o copia il link da mandare in chat o via SMS. Serve Little Hotelier Pay attivo."
  - q: "Per quanto tempo è valido un link di pagamento di Little Hotelier?"
    a: "48 ore dalla creazione. Dopo, l'ospite vede che la richiesta non è più attiva. Una richiesta non si può modificare: se l'importo cambia, annullala e creane una nuova."
  - q: "Posso inviare una richiesta di pagamento per una prenotazione Booking.com o Expedia?"
    a: "Solo quando incassi tu il pagamento. Le richieste di pagamento di Little Hotelier non funzionano per le prenotazioni incassate dal canale né per le carte virtuali dell'OTA. A un ospite che ha prepagato su Booking.com o con Expedia Collect va chiesto solo ciò che è stato aggiunto in struttura."
  - q: "Little Hotelier invia in automatico i promemoria di pagamento?"
    a: "Il suo centro assistenza descrive le caparre automatiche per le prenotazioni dirette e i pagamenti automatici che addebitano una carta salvata, ma non email di promemoria per un saldo da pagare. Hotelier Tools aggiunge regole di promemoria di pagamento, con lo stesso link di pagamento."
  - q: "Hotelier Tools addebita la carta dell'ospite?"
    a: "No. Un link di pagamento chiede solo all'ospite di pagare sulla pagina sicura di SiteMinder. Hotelier Tools non vede né salva mai i numeri di carta e non addebita mai una carta."
  - q: "Hotelier Tools fa parte di Little Hotelier o SiteMinder?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura."
---

Per inviare un link di pagamento in Little Hotelier, apri la prenotazione e clicca su **Send Payment Request**. Inserisci l'importo, clicca su **Create request**, poi invialo via email o copia il link. Serve Little Hotelier Pay attivo, e il link è valido per 48 ore. Little Hotelier non fa solleciti al posto tuo. I promemoria di pagamento di Hotelier Tools sì: nei giorni che scegli, inviano via email agli ospiti che non hanno pagato un link per quanto devono ancora.

Le schermate di Little Hotelier descritte qui sotto sono state verificate sul suo centro assistenza a novembre 2026.

## Come inviare una richiesta di pagamento in Little Hotelier

Le richieste di pagamento fanno parte di **Little Hotelier Pay**, il servizio di pagamento integrato di Little Hotelier. Le richieste girano sulla piattaforma di pagamento di SiteMinder, ed è per questo che le schermate di Hotelier Tools le chiamano **SiteMinder Pay**. Prima attivalo in **Front Desk > Setup > Guest Payment Options > Payment Gateways**. Le richieste non funzionano con un gateway di terze parti ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)).

**Dal computer:**

1. Apri la prenotazione nel Front Desk e clicca su **Send Payment Request**.
2. Controlla prenotazione, nome dell'ospite e importo, e aggiungi un motivo e un messaggio per l'ospite.
3. Clicca su **Create request**.
4. Per inviarla via email, scegli il modello di email, controlla l'indirizzo dell'ospite, clicca su **Preview email** e poi su **Send request**. Oppure copia il link e incollalo su WhatsApp, in un SMS o in un'email.

**Dall'app mobile:** apri la prenotazione, tocca **Take payment**, compila la scheda **Request**, scegli email, SMS o link e tocca **Send request**.

Cosa sapere prima di inviarne una:

- **48 ore.** Il link è valido per 48 ore. Dopo, l'ospite vede che la richiesta non è più attiva.
- **Niente modifiche.** Se l'importo cambia, annulla la richiesta e creane una nuova. Annullala anche se la prenotazione viene cancellata.
- **Dove seguirla.** **My apps > Payments > Payment requests** elenca tutte le richieste. Da **Actions** puoi annullarne una o copiarne il link per condividerlo di nuovo. Una richiesta pagata compare anche nella scheda **Payments** della prenotazione.
- **Sovrapprezzi.** Quando crei una richiesta compare l'opzione **Apply surcharge**. I sovrapprezzi sulle carte non sono ammessi ovunque, quindi verifica le regole del tuo paese.
- **Solo pagamento in struttura.** Le richieste non funzionano per le prenotazioni incassate dal canale né per la carta virtuale di un'OTA.

## Caparre e saldi: cosa automatizza Little Hotelier

Little Hotelier ha due opzioni automatiche, entrambe con Little Hotelier Pay:

| Funzione | Cosa fa | Dove |
|---|---|---|
| **Automatic deposits** (caparre automatiche) | Il tuo booking engine incassa una caparra quando un ospite prenota direttamente: **Full amount**, **Percentage**, **First night**, **Fixed amount** o **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Automated payments** (pagamenti automatici) | Addebita il saldo da pagare sulla carta salvata dell'ospite un certo numero di giorni prima del check-in, al check-in o al check-out | **My Apps > Payments > Automated payments > Create a rule** ([FAQ](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

I pagamenti automatici hanno bisogno di una carta che funzioni. Quando un addebito fallisce, o non c'è una carta, Little Hotelier suggerisce di inviare una richiesta di pagamento, e da lì in poi è compito di una persona: inviarla, aspettare e mandarne un'altra quando scadono le 48 ore.

## Prepagata su Booking.com o Expedia? Non chiedere due volte

Una prenotazione Booking.com "pre-paid" o una prenotazione Expedia Collect è stata pagata al canale. Little Hotelier mostra comunque il soggiorno come **outstanding** (da pagare) finché qualcuno non registra quel denaro come pagamento "OTA Paid". Se invii un promemoria su quel saldo, chiedi all'ospite di pagare di nuovo notti che ha già pagato.

C'è una seconda trappola. Little Hotelier calcola le notti con le proprie tariffe, mentre l'ospite ha pagato il prezzo del canale (con uno sconto Genius o mobile, per esempio). Quindi, anche dopo aver registrato il pagamento dell'OTA, l'importo da pagare può mescolare due cose:

- **Notti aggiunte alla reception** dopo la prenotazione: il canale non le ha mai vendute, quindi l'ospite le paga in struttura.
- **La differenza tra le tue tariffe e il prezzo del canale:** l'ospite ha già pagato il prezzo del canale. Quella differenza non tocca a lui.

Prendi una prenotazione prepagata di 2 notti, allungata alla reception di una notte da 75 €. Little Hotelier può mostrare 88 € da pagare, ma l'ospite ne deve 75. L'assistente IA di Hotelier Tools legge il soggiorno in questo modo e dice alla reception quanto deve l'ospite in struttura, non solo la cifra di Little Hotelier. Per carte Booking.com non valide e no-show, vedi [cosa fare con una carta non valida](/blog/booking-com-invalid-card-no-show).

## Il modo più veloce: promemoria di pagamento con un link

I **Payment reminders** (promemoria di pagamento) di Hotelier Tools (`/automated-checks/payments`, parte dei controlli automatici, beta) trovano le prenotazioni che devono ancora pagare e sollecitano l'ospite nei giorni che scegli tu, con un link se vuoi. Inviano anche un riepilogo al tuo team. Non viene addebitato nulla: è l'ospite a decidere se pagare.

1. Apri **Automated Checks** e la scheda **Payment reminders**, oppure vai direttamente su `/automated-checks/payments`. Clicca su **New rule**. Una nuova regola parte disattivata.
2. In **Which bookings** imposta il **Minimum outstanding amount** (per ignorare un centesimo mancante). Scegli se saltare le caparre già pagate (**Only bookings with nothing paid**) e se includere gli ospiti già in struttura (**Include guests already in the house**). In **Channels** scegli **Every channel**, **Only these channels** o **Every channel except these**.
3. Aggiungi fino a sei **Reminders**. Ognuno è un numero di giorni prima, il giorno stesso o dopo la prenotazione, il check-in o il check-out. Per esempio: 7 giorni prima del check-in, poi 2 giorni prima del check-in.
4. Per ogni promemoria scegli cosa riceve l'ospite: **Reminder only**, **Reminder with a payment link** oppure **Payment request sent by SiteMinder Pay** (l'email di SiteMinder). Il nostro testo parte nella lingua dell'ospite, oppure clicca su **Write my own text**. Attiva **Tell the team** per aggiungere la prenotazione al riepilogo del team, con una nota.
5. Clicca su **Preview today** per vedere a quali ospiti scriverebbe oggi la regola. Legge Little Hotelier e non invia nulla.
6. Attiva la regola e dalle una pianificazione. Quella consigliata è **Every day at 10:00**.

::screenshot{src="/images/blog/demo/en/payment-reminders-rule-editor.webp" alt="Editor di una regola di promemoria di pagamento in Hotelier Tools: l'avviso This rule is off, il nome della regola, la sezione Which bookings con Minimum outstanding amount 1, Channels impostato su Every channel, Only bookings with nothing paid disattivato e Include guests already in the house attivato, e l'inizio della sezione Reminders" caption="Una regola: quali prenotazioni sollecita, quando parte ogni promemoria e chi ne viene informato. Le nuove regole partono disattivate." path="/automated-checks/payments"}
::

### Cosa lo rende sicuro

- **Mai due volte.** Ogni promemoria viene registrato per ogni prenotazione prima dell'invio, così un'esecuzione ripetuta, due pianificazioni o un'esecuzione manuale non possono ripeterlo.
- **Un promemoria al giorno per ospite**, considerando tutte le tue regole.
- **Recupero senza valanghe.** Se un'esecuzione è saltata, un promemoria parte comunque fino a due giorni dopo. Se ne scadono diversi insieme, parte solo l'ultimo.
- **L'importo è aggiornato.** Il saldo viene letto dalla prenotazione subito prima dell'invio, e una prenotazione pagata nel frattempo non riceve nulla. Le prenotazioni cancellate e i no-show non vengono mai sollecitati.
- **Link riutilizzati.** Un link in attesa per la stessa prenotazione e lo stesso importo, con più di due ore di validità residua, viene riutilizzato invece di crearne un secondo.
- **Avviso quando è pagato.** Ogni esecuzione segue i link inviati dai suoi promemoria. Quando uno viene pagato, il team riceve un'email "payments received" (pagamenti ricevuti), se la regola informa il team.

Per provare un promemoria, **Send now…** lo invia a una singola prenotazione, qualunque sia il suo giorno. Tutto ciò che è stato inviato è elencato in **Activity**: quando, prenotazione, ospite o team, stato, importo da pagare e stato del link (**Waiting for payment**, **Paid**, **Expired**, **Cancelled**).

::screenshot{src="/images/blog/demo/en/payment-reminders-activity.webp" alt="Pagina Payment reminders con due regole attive: Prepago reservas directas — 7 días antes (7 days before check-in, Reminder + link; negli ultimi 30 giorni 3 inviati, 1 fallito) e Saldo pendiente — 2 días antes (2 days before check-in, SiteMinder Pay e Team; 11 inviati, 1 fallito), ognuna con la sua attività giornaliera delle 10:00 in esecuzione; poi la tabella Activity con promemoria agli ospiti e riepiloghi al team, inviati con link SiteMinder Pay Waiting for payment o Expired, e uno fallito perché SiteMinder Pay non ha confermato di aver mandato l'email all'ospite" caption="Due regole, ognuna con la sua programmazione giornaliera, e un registro di ogni promemoria con lo stato del suo link di pagamento." path="/automated-checks/payments"}
::

### I soggiorni prepagati sono gestiti per te

Quando la prenotazione dice che è stata prepagata su Booking.com o Expedia, il promemoria non chiede mai il denaro del canale:

- **L'importo è dimostrato** (indicato nei commenti della prenotazione, o esattamente la camera venduta) e l'opzione della struttura **Register proven OTA prepayments (whole property)** è attiva: Hotelier Tools registra in Little Hotelier un pagamento "OTA Paid", poi chiede solo le notti aggiunte e gli extra.
- **L'importo non è dimostrato** (un soggiorno Expedia con extra, un'altra valuta): nessuna email all'ospite. Il riepilogo del team lo elenca: controllalo e registra il pagamento.
- **Non resta nulla da pagare:** la prenotazione viene esclusa.

Scegli quando registrare quel pagamento in **When to register them**: **At the checks (before arrival and at checkout)** (ai controlli, prima dell'arrivo e al check-out) oppure **Some hours after arrival** (alcune ore dopo l'arrivo, da 0 a 48, 1 di default). Con la seconda opzione, le modifiche fatte alla reception al check-in, come extra o un cambio camera, sono già nel saldo. In quel caso serve l'attività oraria **Register OTA prepayments after arrival**, che programmi tu.

## Un link per una prenotazione

Non tutti i pagamenti richiedono una regola. Apri una prenotazione su `/reservations/<numero>` e, in **Payments**, clicca su **Payment link**. Lo stesso pulsante si trova accanto a un saldo nelle liste giornaliere e nel pannello della prenotazione dell'inbox.

1. La finestra mostra quanto deve la prenotazione e i link precedenti, ciascuno con il suo stato.
2. Chiedi il saldo intero o una parte (una caparra, per esempio) in **Amount**.
3. Spunta **SiteMinder Pay emails it to …** per farlo inviare via email, oppure lascialo vuoto e usa **Copy** per copiare il link e mandarlo tu.
4. Clicca su **Create payment link**. Un link in attesa si può annullare dalla stessa finestra.

::screenshot{src="/images/blog/demo/en/payment-links-reservation-payments.webp" alt="Sezione Payments di una prenotazione in Hotelier Tools: il pulsante Payment link, una caparra in contanti di 759,55 euro registrata a mano il 4 ottobre 2026 con un pulsante Refund, Still refundable in total 759,55 euro, nessuna carta salvata e il pannello Original booking" caption="Tutti i pagamenti del soggiorno in un solo posto, con il link di pagamento e i rimborsi a un clic." path="/reservations"}
::

La sezione **Payments** gestisce anche i rimborsi. Clicca su **Refund** su un pagamento, inserisci un importo totale o parziale (vanno bene sia la virgola sia il punto) e Hotelier Tools lo confronta con quanto è ancora rimborsabile prima di chiederlo a Little Hotelier, una sola volta. Se Little Hotelier non conferma, ti dice di controllare la prenotazione prima di rimborsare di nuovo, invece di inviare un secondo rimborso.

**Per sviluppatori e AI:** lo stesso link esiste nella REST API (`POST /api/v1/reservations/{id}/payment-link`, con email all'ospite solo con `"notifyGuest": true`) e come strumento `create_payment_link`, che chiede la tua approvazione nella chat AI. Tramite la chat AI o l'API, un pagamento con carta incassato sul POS della reception si può registrare sul soggiorno solo con il circuito e le ultime quattro cifre. Non addebita nulla. Una richiesta con qualcosa che somiglia a un numero di carta completo viene rifiutata. Vedi la [pagina REST API e MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

In **Settings > Team**, creare e annullare i link richiede il permesso **Record payments**, i rimborsi richiedono **Refund payments** e la modifica delle regole richiede **Run payment reminders**. La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura. I link di pagamento sono le richieste di pagamento di SiteMinder Pay: l'ospite paga sulla pagina di SiteMinder, e nessun dato della carta passa da Hotelier Tools.
::

Guide correlate: [inviare la fattura al check-out](/blog/send-invoice-to-guest-at-checkout), [la checklist quotidiana della reception](/blog/hotel-front-desk-checklist-automation), [carta non valida su Booking.com o no-show](/blog/booking-com-invalid-card-no-show).

## Riepilogo

- In Little Hotelier, **Send Payment Request** sulla prenotazione crea un link valido per 48 ore. Serve Little Hotelier Pay e funziona solo per le prenotazioni che incassi tu.
- Le caparre per le prenotazioni dirette e gli addebiti automatici sulla carta sono integrati. Le email di promemoria per i saldi non pagati no.
- I **Payment reminders** di Hotelier Tools inviano via email agli ospiti che non hanno pagato un link nei giorni che scegli, mai due volte, e avvisano il team quando un link viene pagato.
- Ai soggiorni prepagati su Booking.com ed Expedia non viene mai richiesto di nuovo il denaro del canale: solo notti ed extra aggiunti in struttura.
