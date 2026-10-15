---
title: "Messaggi Booking.com agli ospiti: come gestirli senza stare sempre nell'extranet"
seoTitle: "Messaggi Booking.com: gestirli senza extranet"
description: "Pulse, template, messaggi programmati e risposte automatiche, come riconoscere i messaggi falsi di Booking.com e un'unica inbox con WhatsApp ed email."
date: 2026-10-03
category: guests
tags: [booking.com, guest messages, inbox, templates, little hotelier]
keywords: [messaggi booking, messaggi booking non funzionano, booking messaggi automatici, template messaggi booking, messaggi extranet booking, messaggi booking truffa, messaggi booking su whatsapp]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-draft-availability.webp
coverAlt: "Inbox ospiti di Hotelier Tools con i filtri WhatsApp, Email e Booking.com, un'email di un ospite che chiede di una camera doppia a settembre, il piano dell'AI in bozza con una risposta modificabile e il pannello dell'assistente privato"
faq:
  - q: "Perché i miei messaggi di Booking.com non compaiono nell'extranet?"
    a: "Forse la messaggistica agli ospiti è gestita dal tuo channel manager. Nell'Extranet apri Connection management: le funzioni segnate in verde sono gestite sulla piattaforma del tuo provider, come il Messaging hub di Little Hotelier. Controlla anche che il tuo utente abbia i permessi giusti."
  - q: "Posso programmare i messaggi per gli ospiti di Booking.com?"
    a: "Sì. Nell'Extranet o in Pulse vai su Property > Messaging preferences > Template scheduler e abbina un template a una fase: alla prenotazione, una settimana, tre giorni o un giorno prima dell'arrivo, il giorno dell'arrivo o un giorno prima della partenza."
  - q: "Come capisco che un messaggio arriva davvero da Booking.com?"
    a: "Le email di Booking.com arrivano sempre da un indirizzo che finisce in @booking.com e i suoi link portano a indirizzi che finiscono in .booking.com. Diffida delle richieste urgenti che non ti sono state annunciate: Booking.com dice di non farne mai senza una comunicazione precedente."
  - q: "Perché le nuove prenotazioni Booking.com non mostrano il telefono in Little Hotelier?"
    a: "Dal 28 settembre 2026 Booking.com non include più i numeri di telefono degli ospiti nelle prenotazioni che invia ai channel manager. Il numero lo vedi comunque nell'Extranet o in Pulse con Show phone number."
  - q: "In Hotelier Tools l'AI può rispondere in automatico agli ospiti di Booking.com?"
    a: "No. Per Booking.com l'AI prepara solo una bozza e decide una persona. L'invio automatico dell'AI non è mai consentito sulle conversazioni di Booking.com, qualunque modalità di risposta tu scelga."
  - q: "Hotelier Tools fa parte di Booking.com o di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da Booking.com, SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e con il tuo login dell'extranet di Booking.com."
---

Non serve tenere l'extranet aperto tutto il giorno. L'app Pulse porta i messaggi di Booking.com sul telefono con le notifiche, mentre template, messaggi programmati e risposte automatiche gestiscono le domande di routine al posto tuo. Per vedere Booking.com accanto a WhatsApp ed email puoi usare il Messaging hub di Little Hotelier (un componente aggiuntivo a pagamento) oppure l'inbox di Hotelier Tools, che prepara anche le risposte da far approvare a una persona.

Le funzioni di Booking.com qui sotto sono state verificate sul suo Partner Help a ottobre 2026.

## Dove sono i messaggi di Booking.com e perché non compaiono?

Puoi leggerli e rispondere in tre posti ([Partner Help: Contacting guests](https://partner.booking.com/en-us/help/reservations/contact-extranet/contacting-your-guests)):

- **Extranet:** **Inbox > Reservation messages**, oppure apri una prenotazione e scorri fino a **Conversation with guest**.
- **App Pulse:** tocca **Bookings**, scegli l'ospite e scrivi sotto **Messages**.
- **Il tuo provider di connettività**, se gestisce la messaggistica agli ospiti per te.

Messaggi che mancano o non si caricano? Controlla queste tre cose:

1. **Chi gestisce la messaggistica.** Nell'Extranet apri la pagina **Connection management**. Le funzioni di messaggistica segnate in verde sono gestite sulla piattaforma del tuo provider (per esempio il Messaging hub di Little Hotelier), non nell'Extranet.
2. **I diritti del tuo utente.** Alcune funzioni richiedono permessi specifici: i template richiedono il diritto di gestire i modelli di messaggio agli ospiti, e i numeri di telefono richiedono i diritti per gestire le prenotazioni e vedere i contatti degli ospiti.
3. **Le notifiche.** In **Account > Notification settings** scegli come essere avvisato dei nuovi messaggi, per esempio via email.

## Come impostare template, messaggi programmati e risposte automatiche

Tutti e tre si trovano in **Property > Messaging preferences**, nell'Extranet o sotto **More** in Pulse ([Partner Help: Templates and automatic replies](https://partner.booking.com/en-us/help/reservations/contact-extranet/setting-templates-automatic-replies-and-message-notifications)).

### Template dei messaggi

1. Apri la scheda **Message templates** e clicca su **Create new template**.
2. Scrivi il messaggio. I blocchi informativi precompilati di Booking.com inseriscono il nome dell'ospite, l'orario di check-in, il nome della struttura e altri dati della prenotazione.
3. Aggiungi una lingua e delle immagini, se ti servono, poi clicca su **Continue**.
4. Dagli un **Template name** e un **Template topic**, e clicca su **Save template**.

Usa lo stesso nome di template per ogni versione linguistica. Booking.com invia poi la versione nella lingua dell'ospite e, se manca, quella nella tua lingua predefinita. Non si possono allegare PDF e codici QR, e ogni link (per esempio il tuo check-in online) deve prima essere approvato in **Security settings**.

Un template pre-arrivo che puoi adattare (sostituisci le parentesi con i blocchi informativi di Booking.com):

```text [pre-arrival-template.txt]
Ciao [nome ospite], non vediamo l'ora di accoglierti a [nome struttura].

Il check-in è a partire dalle [orario check-in]. Se pensi di arrivare dopo le 22:00, rispondi a questo messaggio con il tuo orario di arrivo.
Parcheggio: [info parcheggio]. Colazione: [orari e prezzo].

Non ti chiederemo mai i dati della carta via WhatsApp o SMS.
A presto!
```

### Messaggi programmati

Apri la scheda **Template scheduler**, clicca su **Schedule a template**, scegli quando inviarlo e quale template usare, poi **Add to schedule**. Le fasi sono: quando un ospite prenota, una settimana prima dell'arrivo, tre giorni prima, un giorno prima, il giorno dell'arrivo e un giorno prima della partenza. I template inviati compaiono nella tua inbox.

### Risposte automatiche

Nella scheda **Automatic replies**, apri le impostazioni di un argomento, spuntalo, scegli la risposta, abbina un template con **Select template** e **Save**. Le richieste in linea con le tue condizioni ricevono un'accettazione automatica; per quelle che non lo sono, abbini la risposta a un template. L'ospite la riceve via email e nella chat.

### Help me reply e traduzione

La chat dell'Extranet ha un pulsante **Help me reply** che suggerisce un template o una risposta libera. Sei tu a rivederla, modificarla e inviarla. I messaggi si possono anche tradurre nell'Extranet e in Pulse (inglese, tedesco, francese, spagnolo, olandese, polacco, russo, arabo e portoghese).

## Rispondere in fretta conta?

Sì. Il centro assistenza di Little Hotelier segnala che Booking.com tiene un punteggio interno di risposta che misura quanto in fretta rispondi. Quando un messaggio non richiede risposta ("Grazie, ci vediamo venerdì!"), contrassegnalo come **No reply needed**: chiude la finestra di risposta di 24 ore, così quella conversazione non ti penalizza ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

## Come rispondere alle Guest Q&A (le domande prima della prenotazione)

Con Guest Q&A i potenziali ospiti possono farti domande prima di prenotare. Le tue risposte vengono pubblicate sulla pagina della struttura dopo la moderazione. Gli altri ospiti possono votarle, così le più utili compaiono per prime ([Partner Help: Guest Q&A](https://partner.booking.com/en-us/help/property-page/general-info/guest-qa-feature)).

Puoi eliminare le risposte superate o rispondere in privato quando la domanda è personale. Per disattivare la funzione, vai nella scheda **Inbox** dell'Extranet, **Questions for your property**, **Guest Q&A preferences**. Le domande che tornano di continuo (parcheggio, check-in tardivo, animali) vanno anche nella descrizione della struttura.

## L'opzione di Little Hotelier: il Messaging hub

Se usi il componente **Guest Engagement** di Little Hotelier (indicato per il piano Pro nella [pagina dei prezzi](https://www.littlehotelier.com/pricing/) a ottobre 2026), il suo **Messaging hub** può programmare messaggi e chattare con gli ospiti di Booking.com, accanto a WhatsApp, Airbnb, SMS ed email. La messaggistica Booking.com lì non costa nulla in più ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

1. Verifica che Booking.com sia collegato in **Channels**.
2. Vai su **Guest Engagement > Communication > Settings**, trova Booking.com e clicca su **Configure**.
3. Clicca su **Connect** e concedi a SiteMinder il permesso di messaggistica agli ospiti nel widget di Booking.com.
4. Aggiorna la pagina e inizia a rispondere. Un'icona **No reply needed** chiude le conversazioni che non richiedono risposta.

La stessa inbox è nell'app mobile di Little Hotelier, con notifiche push per i nuovi messaggi ([app mobile](https://helpcentre.littlehotelier.com/en/articles/15547083-guest-messaging-in-the-little-hotelier-mobile-app)). Aggiungi i domini di Little Hotelier alla allowlist di Booking.com, altrimenti i suoi messaggi non arriveranno agli ospiti di Booking.com ([come fare](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Come riconoscere i messaggi falsi di Booking.com

I truffatori imitano Booking.com per rubare il tuo login dell'extranet e poi scrivono ai tuoi ospiti con falsi link di pagamento. Le indicazioni di Booking.com ([Partner Help: Phishing and email spoofing](https://partner.booking.com/en-us/help/account-and-log/security/online-security-awareness-phishing-and-email-spoofing)):

- **Controlla il mittente.** Le email di Booking.com arrivano sempre da un indirizzo che finisce in **@booking.com**, qualunque sia il sottodominio. Un indirizzo come support@booking-103266.com è falso.
- **Controlla i link prima di cliccare.** Passaci sopra con il mouse oppure, da telefono, tieni premuto. Se l'indirizzo non finisce in **.booking.com**, non aprirlo.
- **Fai attenzione al tono.** Minacce urgenti (il tuo account verrà sospeso), errori di ortografia e lingue mescolate sono segnali d'allarme. Booking.com "will never make urgent requests without sending prior communication" (non fa mai richieste urgenti senza una comunicazione precedente): chiama prima il tuo account manager o il servizio clienti.
- **Se hai cliccato:** reimposta prima la password della tua email, poi quella di Booking.com, fai una scansione del dispositivo e segnala l'accaduto entro 24 ore.

Proteggi anche i tuoi ospiti:

- **Attiva le Messaging security settings** (**Property > Messaging preferences > Security settings**, con l'autenticazione a due fattori). Elenca gli indirizzi email e i link autorizzati a raggiungere gli ospiti: le email da altri indirizzi non arrivano e gli altri link vengono rimossi ([Messaging security](https://partner.booking.com/en-us/help/account-and-login/security/understanding-messaging-security-settings)). Se Booking.com rileva attività sospette sul tuo account, disattiva i link nei tuoi messaggi.
- **Sappi dove sono i numeri di telefono.** Dal 28 settembre 2026 Booking.com non invia più i numeri di telefono degli ospiti ai channel manager ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Usa **Show phone number** nell'Extranet o in Pulse.
- **Spiega agli ospiti come chiederai i pagamenti**, come nell'ultima riga del template qui sopra.

## Il modo più veloce: Booking.com, WhatsApp ed email in un'unica inbox

L'**Inbox** di Hotelier Tools (`/messaging`, alpha) mette i messaggi di Booking.com e Guest Q&A accanto a WhatsApp ed email, con la prenotazione abbinata a ogni conversazione e una risposta preparata dall'AI che controlli tu.

1. Collega Booking.com una sola volta in **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) con nome utente partner, password e secondo fattore (Pulse, SMS o chiamata). La sessione viene conservata cifrata per la tua struttura. Booking.com può chiederti ogni tanto di verificare di nuovo; la procedura guidata se ne occupa.
2. Se vuoi, collega la tua casella email (Google, Microsoft o qualsiasi account IMAP/SMTP) e [WhatsApp](/blog/whatsapp-little-hotelier).
3. Apri **Inbox** e filtra per **Booking.com**. Una conversazione di Booking.com viene collegata automaticamente alla sua prenotazione.
4. Leggi la bozza e il piano dell'AI, modificali oppure chiedi all'assistente privato sulla destra di cercare qualcosa in Little Hotelier.

::screenshot{src="/images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp" alt="Inbox ospiti con una conversazione WhatsApp aperta: il messaggio dell'ospite su un arrivo tardivo in spagnolo, la prenotazione associata con identità verificata e pagata, il piano dell'AI in bozza con il motivo e una risposta modificabile, e il pannello privato Assistant sulla destra" caption="Ogni conversazione mostra la prenotazione, una bozza dell'AI che aspetta te e un assistente privato che l'ospite non vede mai." path="/messaging"}
::

Due limiti da conoscere:

- **Per Booking.com l'AI non invia mai nulla da sola.** E l'invio della risposta a Booking.com direttamente dall'inbox non è ancora garantito: copia la bozza approvata nell'Extranet o in Pulse.
- **Usa la tua sessione dell'extranet.** Hotelier Tools accede come te, perché l'API di messaggistica di Booking.com è aperta solo ai partner di connettività. La dashboard stessa segnala che i termini per i partner di Booking.com limitano l'accesso automatizzato all'extranet e che la Connectivity API resta la via supportata dove ce l'hai.

I due messaggi fissi di Booking.com con cui l'ospite chiede la fattura vengono riconosciuti senza alcuna AI: l'inbox propone di programmare la fattura al check-out per quel soggiorno (vedi [inviare la fattura automaticamente al check-out](/blog/send-invoice-to-guest-at-checkout)).

### Scegli quanto può fare l'AI

In **Channels** (`/messaging/channels`) ogni account collegato ha una modalità di risposta:

| Modalità | Cosa succede |
|---|---|
| **Off** | I messaggi vengono raccolti e mostrati. Nulla viene analizzato né inviato. |
| **Draft** (predefinita) | L'AI prepara una risposta e un piano. Non succede nulla finché non approvi. |
| **Automatic reply** | L'AI invia la risposta dopo un'attesa. Non può mai modificare una prenotazione. |
| **Autonomous** | L'AI risponde e può anche aggiungere una nota o impostare l'orario di arrivo su una prenotazione verificata, senza approvazione. Controllala più volte al giorno. |

Qualunque modalità tu scelga, sulle conversazioni di Booking.com l'invio resta sempre a una persona. L'AI per gli ospiti non ha alcuno strumento: restituisce un piano scelto da un elenco chiuso (inviare un messaggio, segnalare allo staff, aggiungere una nota alla prenotazione, impostare l'orario di arrivo) e non può mai cancellare, cambiare date né toccare i pagamenti. Vede una prenotazione solo quando il mittente è verificato, e una conversazione di Booking.com conta come verificata.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Pagina Messaging Channels con il menu When a guest writes aperto sulla connessione WhatsApp: Off (collect only), Draft (I approve everything, selezionato), Automatic reply (no reservation changes) e Autonomous (replies and changes reservations)" caption="Scegli una modalità di risposta per ogni account, qui mostrata per WhatsApp. Draft, la predefinita, aspetta te." path="/messaging/channels"}
::

### Insegnale le tue risposte: FAQ & knowledge

L'AI risponde agli ospiti solo in base a ciò che le dai, più la scheda della struttura. Apri **FAQ & knowledge** (`/messaging/faq`):

1. In **Pages and text the AI may quote** scegli **FAQ page (URL)** oppure **Plain text** e clicca su **Add source**. Un'attività programmata può rileggere la pagina ogni ora.
2. Compila **House notes** con tutto ciò che non è in quella pagina: wifi, orari di check-in e check-out, parcheggio, consigli locali. Clicca su **Save notes**.
3. In **Settings > Property & AI knowledge** (`/settings/property`) premi **Read from Little Hotelier** per importare indirizzo, politiche, tipologie di camera ed extra, poi **Save**.

Un servizio che non hai elencato riceve la risposta "da confermare", mai "sì". Ogni messaggio che l'AI legge e a cui prepara una bozza usa crediti AI, mostrati in **AI credits** (`/messaging/credits`).

::screenshot{src="/images/blog/demo/en/guest-messaging-faq-knowledge.webp" alt="Pagina FAQ and knowledge: una fonte FAQ page già aggiunta, le opzioni FAQ page (URL) e Plain text con il pulsante Add source e House notes compilate (in spagnolo) con orari di check-in e check-out, prezzo della colazione, reception 24 ore su 24 e wifi gratuito" caption="L'AI cita solo la tua pagina FAQ, le tue note e la scheda della struttura." path="/messaging/faq"}
::

::demo-cta{path="/messaging"}
::

Tutto quello che fa l'inbox è nella [pagina Guest inbox](/tools/bot/guest-inbox). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da Booking.com, SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e con il tuo login dell'extranet di Booking.com.
::

Guide correlate: [l'assistente IA per la reception](/blog/ai-assistant-hotel-front-desk), [una lista di ospiti da non accettare](/blog/hotel-do-not-rent-list).

## Riepilogo

- Rispondi in mobilità con Pulse e lascia che template, messaggi programmati e risposte automatiche coprano le domande di routine.
- Segna come **No reply needed** le conversazioni che non richiedono risposta e tieni le risposte alle Guest Q&A brevi e adatte a essere lette da tutti.
- Considera una truffa qualsiasi messaggio "Booking.com" che non arrivi da @booking.com o che abbia link fuori da .booking.com. Attiva le Messaging security settings.
- Per un'unica inbox con WhatsApp ed email, usa il Messaging hub di Little Hotelier o l'inbox di Hotelier Tools, dove l'AI prepara le bozze e una persona le invia.
