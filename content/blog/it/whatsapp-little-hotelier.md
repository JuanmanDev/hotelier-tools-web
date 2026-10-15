---
title: "WhatsApp Business per hotel con Little Hotelier: Messaging hub, app e altre opzioni"
seoTitle: "WhatsApp con Little Hotelier: le opzioni nel 2026"
description: "Il Messaging hub di Little Hotelier usa la WhatsApp Business API ufficiale. Confrontalo con l'app WhatsApp Business gratuita e un'inbox condivisa."
date: 2026-10-03
category: guests
tags: [whatsapp, messaging, little hotelier, guest engagement, inbox]
keywords: [whatsapp business per hotel, little hotelier whatsapp, whatsapp per hotel, whatsapp business api hotel, whatsapp business app b&b, template whatsapp check-in, little hotelier messaging hub]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp
coverAlt: "Inbox ospiti di Hotelier Tools con una conversazione WhatsApp di Ingrid Kowalski su un arrivo in ritardo (identità verificata, prenotazione collegata), un piano AI in bozza con una risposta modificabile e il pannello privato Assistant"
faq:
  - q: "Little Hotelier ha WhatsApp?"
    a: "Sì, tramite il Messaging hub dell'add-on Guest Engagement. Si collega alla WhatsApp Business API ufficiale, collega le conversazioni alla prenotazione dell'ospite e permette a più utenti di rispondere da un unico numero."
  - q: "Posso mantenere il numero della mia app WhatsApp Business quando collego il Messaging hub?"
    a: "Non su entrambi contemporaneamente. Un numero collegato alla WhatsApp Business API non può essere usato anche nell'app WhatsApp Business. Devi prima rimuoverlo dall'app, e lo storico delle chat dell'app non si può ripristinare, quindi Little Hotelier suggerisce di provare con un altro numero."
  - q: "Quanto costa WhatsApp per un piccolo hotel?"
    a: "L'app WhatsApp Business è gratuita. Sulla WhatsApp Business Platform (l'API dietro il Messaging hub), Meta addebita ogni messaggio template consegnato, mentre le risposte entro la finestra di assistenza clienti di 24 ore sono gratuite. Little Hotelier non aggiunge costi per WhatsApp, ma Guest Engagement stesso è un add-on a pagamento."
  - q: "Posso inviare messaggi automatici prima dell'arrivo su WhatsApp?"
    a: "Nel Messaging hub avvii le conversazioni WhatsApp con modelli approvati da WhatsApp, come le istruzioni per il check-in. L'app WhatsApp Business gratuita automatizza solo un messaggio di saluto e uno di assenza."
  - q: "La connessione WhatsApp di Hotelier Tools è la WhatsApp Business API ufficiale?"
    a: "No. Usa WAHA, che esegue una sessione di WhatsApp Web. Questo significa niente verifica Meta né approvazione dei modelli, ma WhatsApp non consente client non ufficiali, quindi un numero usato così potrebbe essere bloccato. Usala soprattutto per rispondere agli ospiti che ti scrivono."
  - q: "L'AI risponderà da sola agli ospiti su WhatsApp?"
    a: "Solo se scegli Automatic reply o Autonomous per quell'account. Il valore predefinito, Draft, prepara una risposta che attende una persona. Le risposte automatiche richiedono anche un ospite verificato, una richiesta consentita e una fiducia sufficiente, e hanno un limite orario e giornaliero."
---

Sì, Little Hotelier si collega a WhatsApp in modo nativo tramite il **Messaging hub**, parte dell'add-on a pagamento **Guest Engagement**, usando la WhatsApp Business API ufficiale: rispondere a un ospite che ha scritto nelle ultime 24 ore è gratuito, mentre scrivere per primi richiede un modello approvato, a pagamento secondo le tariffe di Meta. L'altra strada comune è l'app WhatsApp Business gratuita su un telefono, che non ha alcun legame con le tue prenotazioni. Hotelier Tools aggiunge una terza opzione, WhatsApp in un'unica inbox con email e Booking.com, tramite una sessione di WhatsApp Web (WAHA) invece dell'API ufficiale.

I dettagli su Little Hotelier e WhatsApp qui sotto sono stati verificati sulle rispettive pagine di assistenza a ottobre 2026.

## Little Hotelier supporta WhatsApp?

Sì. Il **Messaging hub** di Guest Engagement riunisce in un'unica inbox le conversazioni di WhatsApp, Booking.com, Airbnb, SMS ed email, con il profilo dell'ospite e la prenotazione collegati a ogni chat ([FAQ del Messaging hub](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Guest Engagement è un add-on, indicato per il piano Pro nella [pagina dei prezzi](https://www.littlehotelier.com/pricing/) di Little Hotelier.

Per collegare WhatsApp ([Connect WhatsApp in Guest Engagement](https://helpcentre.littlehotelier.com/en/articles/9525852-connect-whatsapp-in-guest-engagement)):

1. Vai su **Guest Engagement > Communication > Settings** e clicca **Configure** su WhatsApp.
2. Verifica la tua attività con il tuo profilo Facebook (WhatsApp e Facebook appartengono entrambi a Meta).
3. Crea o collega il tuo account e il tuo profilo WhatsApp Business.
4. Aggiungi i tuoi dati di pagamento. WhatsApp ti fattura direttamente; Little Hotelier non aggiunge costi per WhatsApp.

::callout{type="warning" title="Il tuo numero attuale"}
Un numero non può stare contemporaneamente nell'app WhatsApp Business e nel Messaging hub. Per spostarlo, esegui prima il backup e rimuovilo dall'app; le sue chat non potranno essere ripristinate lì in seguito. Little Hotelier suggerisce di provare prima il Messaging hub con un numero diverso.
::

## App WhatsApp Business o WhatsApp Business API?

| | App WhatsApp Business | WhatsApp Business Platform (API) |
|---|---|---|
| Costo | Download gratuito | Per ogni messaggio consegnato da Meta; le risposte nella finestra di 24 ore sono gratuite |
| Dove la usi | Sul telefono, più dispositivi collegati come WhatsApp Web | Tramite software come il Messaging hub |
| Scrivere per primi | In qualsiasi momento, agli ospiti che hanno acconsentito | Solo con un modello approvato da WhatsApp |
| Legame con le prenotazioni | Nessuno | Dipende dal software |

**L'app** ti dà un profilo aziendale, **risposte rapide** per le risposte frequenti, un **messaggio di saluto** e un **messaggio di assenza** automatici, **etichette** per ordinare le chat e un catalogo ([funzioni dell'app WhatsApp Business](https://whatsappbusiness.com/products/business-app-features/)). Funziona bene per un piccolo B&B in cui risponde una sola persona.

**La Platform** addebita "per messaggio, per ogni messaggio che consegniamo agli utenti". Quando un ospite scrive, si apre una finestra di assistenza clienti di 24 ore, durante la quale le tue risposte sono gratuite, e si azzera a ogni messaggio dell'ospite ([prezzi della WhatsApp Business Platform](https://whatsappbusiness.com/products/platform-pricing/)). Fuori da quella finestra serve un modello, e l'approvazione può richiedere fino a 24 ore.

## Modelli WhatsApp per conferme e istruzioni di check-in

Nel Messaging hub crei i modelli in **Guest Engagement > Communication > Settings > WhatsApp > Templates** ([Create and manage WhatsApp templates](https://helpcentre.littlehotelier.com/en/articles/9525848-create-and-manage-whatsapp-templates)):

- **Template name:** minuscolo con trattini bassi, come `checkin_instructions`. Gli ospiti non lo vedono mai.
- **Category:** **Utility** per conferme di prenotazione, istruzioni di check-in e promemoria di pagamento. **Marketing** per offerte e upselling, con un pulsante Unsubscribe. Una promozione inviata come Utility viene rifiutata.
- **Variables:** usa **Add variable** per nome dell'ospite, date, nome e indirizzo della struttura.

Tre modelli da adattare (ogni parentesi quadra diventa una variabile):

```text [whatsapp-templates.txt]
booking_confirmation (Utility)
Ciao [nome ospite], il tuo soggiorno presso [nome struttura] è confermato: dal [data di arrivo] al [data di partenza]. Rispondi qui se hai domande.

checkin_instructions (Utility)
Ciao [nome ospite], ti aspettiamo il [data di arrivo]! Il check-in è dalle [ora check-in] in [indirizzo]. Rispondi con il tuo orario di arrivo e troverai tutto pronto.

payment_reminder (Utility)
Ciao [nome ospite], c'è un saldo di [importo] per il tuo soggiorno del [data di arrivo]. Puoi pagare in modo sicuro qui: [link di pagamento]. In questa chat non chiediamo mai i dati della carta.
```

WhatsApp rifiuta i modelli che chiedono informazioni personali sensibili, quindi non richiedere documenti o numeri di carta.

## Più persone dello staff possono usare lo stesso numero WhatsApp?

- **Messaging hub:** sì. L'API è pensata per questo: più utenti rispondono da un'unica inbox condivisa e la prenotazione sta accanto a ogni chat.
- **App WhatsApp Business:** le stesse chat compaiono sul telefono e sui dispositivi collegati, come WhatsApp Web alla reception. Non c'è assegnazione e nulla collega una chat a una prenotazione. Con Meta Verified, WhatsApp dice che puoi collegare fino a 10 dispositivi e operatori.
- **Hotelier Tools:** l'inbox è una pagina web, quindi chiunque abbia effettuato l'accesso alla dashboard vede le stesse conversazioni, con la prenotazione accanto a ciascuna.

Una novità riguarda tutte le opzioni: dal 28 settembre 2026 Booking.com non invia più i numeri di telefono degli ospiti ai channel manager, quindi le nuove prenotazioni di Booking.com arrivano in Little Hotelier senza numero ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Copia il numero dall'Extranet (**Show phone number**) quando vuoi scrivere a quell'ospite su WhatsApp.

## WhatsApp, email e Booking.com in un'unica inbox con Hotelier Tools

L'**Inbox** di Hotelier Tools (`/messaging`, alpha) mostra in un unico elenco i messaggi di WhatsApp, email e Booking.com. Per ogni conversazione mostra la prenotazione e una risposta redatta dall'AI che una persona approva.

### Cosa significa per te "WAHA, non l'API ufficiale"

WhatsApp arriva a Hotelier Tools tramite [WAHA](https://waha.devlike.pro/docs/overview/introduction/), un server che esegue una sessione di WhatsApp Web. Prima di sceglierlo:

- **Il tuo numero resta sul tuo telefono.** Funziona come WhatsApp Web aperto su un computer, quindi continui a usare la tua app WhatsApp o WhatsApp Business come sempre.
- **Niente verifica aziendale Meta e niente approvazione dei modelli**, perché non passa dalla WhatsApp Business Platform.
- **Non è ufficialmente consentito.** La documentazione di WAHA stessa dice "WhatsApp non consente bot o client non ufficiali sulla sua piattaforma, quindi non va considerato del tutto sicuro." Un numero usato così potrebbe essere bloccato. Il consiglio di WAHA è rispondere alle persone che ti scrivono invece di avviare conversazioni, e non inviare mai messaggi in massa ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Ti serve un server WAHA.** La dashboard chiede il suo indirizzo, un nome di sessione e una chiave API. Chiedi a Hotelier Tools se può fornirtene uno per la tua struttura; altrimenti dovrai gestirne uno tuo.
- **Le chat di gruppo vengono ignorate.**

Se ti serve l'API ufficiale, il Messaging hub è la scelta giusta. Se rispondi soprattutto agli ospiti che ti scrivono e vuoi WhatsApp accanto a email e Booking.com, l'inbox è più adatta.

### Come collegarla

1. Apri **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`). Inserisci **WAHA base URL**, **Session name** e **WAHA API key**, poi salva.
2. Clicca **Copy webhook URL** e incollalo nel webhook della tua sessione WAHA, per l'evento "message". Tratta quell'URL come una password.
3. Premi **Test connection**.
4. Apri **Inbox** e filtra per **WhatsApp**. I messaggi arrivano non appena vengono inviati.
5. In **Channels** (`/messaging/channels`), scegli la modalità di risposta per questo numero. **Draft** è il valore predefinito: l'AI prepara una risposta e nulla viene inviato finché non la approvi.

::screenshot{src="/images/blog/demo/en/guest-inbox.webp" alt="Inbox ospiti di Hotelier Tools con i filtri All, WhatsApp, Email e Booking.com, quattro conversazioni WhatsApp ed email ciascuna segnata come bozza e un avviso giallo che WhatsApp arriva tramite webhook e che l'URL generato va incollato nella sessione WAHA per l'evento message" caption="WhatsApp, email e Booking.com in un unico elenco, ciascuno con una bozza dell'AI. Se non arriva nulla, controlla l'URL del webhook nella tua sessione WAHA." path="/messaging"}
::

### Cosa può fare l'AI su WhatsApp

- **Vede una prenotazione solo quando il mittente è verificato.** Su WhatsApp, il numero deve coincidere con il telefono della prenotazione almeno nelle ultime 8 cifre. Se due ospiti coincidono, non vede nessuno dei due. Per gli ospiti di Booking.com, aggiungi il telefono alla prenotazione di Little Hotelier in modo che la chat possa essere abbinata.
- **Risponde in base ai tuoi dati.** Usa le tue FAQ, le tue note interne e la scheda della struttura (`/messaging/faq`), e risponde "da confermare" per tutto ciò che non hai indicato.
- **Non ha strumenti.** Restituisce un piano scelto da un elenco chiuso (invia un messaggio, segnala allo staff, aggiungi una nota alla prenotazione, imposta l'orario di arrivo). Non può cancellare, cambiare date né toccare i pagamenti.
- **La risposta automatica ha delle condizioni.** Richiede un ospite verificato, una richiesta consentita e una fiducia sufficiente, e si ferma a 4 risposte all'ora, 12 al giorno o 3 di fila senza una risposta dell'ospite.
- **Prima aspetta te.** Un messaggio WhatsApp viene analizzato dopo 5 minuti; se qualcuno del tuo team ha già risposto, non viene analizzato né addebitato nulla. Ogni analisi usa crediti AI.

Il tuo staff può anche interrogare l'AI sulle prenotazioni scrivendo allo stesso numero collegato, tramite lo **Staff assistant** (`/staff`, alpha). I loro messaggi non entrano mai nell'inbox degli ospiti e ogni modifica che chiedono attende l'approvazione del titolare.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Pagina Channels con il menu When a guest writes aperto sulla connessione WhatsApp (WAHA): Off, collect only; Draft, I approve everything (selezionato); Automatic reply, no reservation changes; Autonomous, replies and changes reservations" caption="Una modalità di risposta per numero. Draft attende una persona." path="/messaging/channels"}
::

::demo-cta{path="/messaging"}
::

Come l'inbox gestisce le conversazioni di Booking.com è spiegato in [come gestire i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages), e l'elenco completo delle funzioni è nella [pagina Guest inbox](/tools/bot/guest-inbox). La dashboard è gratuita per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder, Little Hotelier, WhatsApp o Meta. Si collega con il login di Little Hotelier del tuo hotel.
::

## Consenso e privacy su WhatsApp

La Business Policy di WhatsApp dice che puoi contattare solo persone che ti hanno dato il loro numero e "l'autorizzazione (opt-in) ... a confermare che desiderano ricevere messaggi o chiamate successivi da te" ([WhatsApp Business Policy](https://business.whatsapp.com/policy)). In pratica:

- Chiedi al momento della prenotazione o del check-in se l'ospite vuole ricevere aggiornamenti su WhatsApp e annotalo nella prenotazione.
- Usa il numero solo per il suo soggiorno. Il marketing richiede un consenso a parte.
- Indica nell'informativa sulla privacy che usi WhatsApp e smetti quando un ospite lo chiede.

Guide correlate: [la guida a Little Hotelier](/blog/little-hotelier-tips), [l'assistente IA per la reception](/blog/ai-assistant-hotel-front-desk), [una lista d'attesa per le date esaurite](/blog/hotel-waitlist-sold-out-dates), [carte non valide e no-show su Booking.com](/blog/booking-com-invalid-card-no-show).

## Riepilogo

- Il **Messaging hub** (add-on Guest Engagement) è l'opzione nativa di Little Hotelier con l'API ufficiale: inbox condivisa, prenotazione collegata, modelli, costi Meta per i messaggi che avvii tu.
- **L'app WhatsApp Business** è gratuita e va bene per una persona, ma non sa nulla delle tue prenotazioni.
- **L'inbox di Hotelier Tools** riunisce WhatsApp con email e Booking.com, con bozze dell'AI che una persona approva. Usa una sessione di WhatsApp Web (WAHA), non l'API ufficiale, quindi limitala alle conversazioni avviate dagli ospiti.
- Dal 28 settembre 2026, le prenotazioni di Booking.com arrivano senza numero di telefono: copialo dall'Extranet quando ti serve.
