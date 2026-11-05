---
title: "Come rispondere ai messaggi degli ospiti con l'AI (WhatsApp, Booking.com, Expedia ed email)"
seoTitle: "Rispondere agli ospiti con l'AI, in sicurezza"
description: "L'AI prepara le risposte agli ospiti su WhatsApp, Booking.com, Expedia ed email dai dati della prenotazione e dalle FAQ, e una persona le approva."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ai, messaggi ospiti, whatsapp, booking.com, email, inbox, template]
keywords: [rispondere ai messaggi degli ospiti con ai, intelligenza artificiale messaggi ospiti hotel, automatizzare messaggi ospiti whatsapp hotel, template messaggi ospiti hotel, chatgpt per rispondere agli ospiti hotel, risposte automatiche booking.com ai, assistente ai whatsapp per hotel, inbox unica messaggi ospiti piccolo hotel]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/ai-replies-inbox-thread-plan.webp
coverAlt: "Inbox ospiti di Hotelier Tools con la conversazione WhatsApp di Noah Nilsson aperta: segnata Identity verified, la sua prenotazione dal 3 al 7 novembre con check-in fatto e pagata, un piano dell'AI in bozza per un arrivo tardivo con il motivo e una risposta modificabile in spagnolo, e il pannello privato Assistant"
featured: true
faq:
  - q: "L'AI può rispondere da sola ai messaggi degli ospiti?"
    a: "Può farlo, ma non dovrebbe farlo di default. Una configurazione sicura lascia che l'AI prepari una risposta dai dati della prenotazione e dalle tue FAQ, e una persona la approva. Hotelier Tools avvia ogni canale in modalità Draft; l'invio automatico è una scelta separata per canale, limitata alle domande semplici."
  - q: "Come fa l'AI a sapere a quale prenotazione si riferisce un messaggio?"
    a: "Abbina il mittente a una sola prenotazione: su WhatsApp il numero deve coincidere almeno nelle ultime 8 cifre, via email l'indirizzo deve coincidere esattamente. Se corrispondono due ospiti, o nessuno, l'AI non vede alcuna prenotazione e risponde solo dalle tue FAQ."
  - q: "L'AI inventerà prezzi o servizi?"
    a: "Non dovrebbe, e l'inbox è costruita in modo che non possa nasconderlo. L'AI risponde solo dalle tue fonti FAQ, dalle note della struttura e dalla scheda della struttura, scrive \"da confermare\" per tutto ciò che non hai elencato, e un prezzo che nessun preventivo del booking engine ha restituito viene segnalato accanto alla bozza."
  - q: "L'AI invia da sola le risposte su Booking.com o Expedia?"
    a: "No. Su Booking.com l'AI prepara solo la bozza e una persona preme Send. I messaggi Expedia (beta) si possono solo raccogliere o preparare in bozza, e la risposta si scrive in Partner Central."
  - q: "Mi serve l'API ufficiale di WhatsApp Business?"
    a: "Non per Hotelier Tools. Si collega tramite WAHA, un server ospitato da te che esegue una sessione di WhatsApp Web. Così eviti la procedura di approvazione di Meta, ma WhatsApp non consente client non ufficiali, quindi un numero usato in questo modo potrebbe essere bloccato."
  - q: "Hotelier Tools fa parte di WhatsApp, Booking.com o Expedia?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder o Little Hotelier. Si collega con i login della tua struttura."
---

Il modo sicuro di usare l'AI per i messaggi degli ospiti è lasciarle preparare la risposta, non decidere. Dalle la prenotazione dell'ospite e i tuoi dati (FAQ, regole della casa, prezzi del tuo booking engine), lascia che prepari una risposta nella lingua dell'ospite e fai approvare a una persona prima dell'invio. In Hotelier Tools i messaggi di WhatsApp, email, Booking.com ed Expedia arrivano in un'unica inbox, ognuno abbinato alla sua prenotazione, con una bozza dell'AI che aspetta solo un clic.

I dettagli dei servizi di terzi qui sotto sono stati verificati a novembre 2026.

## Cosa chiedono più spesso gli ospiti di un hotel?

In un piccolo hotel la maggior parte dei messaggi sono sempre le stesse dieci o dodici domande:

- **Orari di check-in e check-out**, e se è possibile un check-in anticipato.
- **Arrivo tardivo:** "Arriviamo verso le 23:30, c'è qualcuno alla reception?"
- **Parcheggio, wifi, colazione**: orari e prezzi.
- **Indicazioni** e come ritirare le chiavi.
- **Modifiche e cancellazioni:** date, ospiti in più, rimborsi.
- **Fatture**, spesso con ragione sociale e partita IVA.
- **Disponibilità e prezzi** da parte di chi non ha ancora prenotato.

Il primo gruppo ha una sola risposta giusta, che conosci già. Gli ultimi due richiedono una persona o dati aggiornati: una cancellazione è un impegno, e un prezzo dipende da date, numero di ospiti e da cosa resta da vendere. È questa divisione a decidere quanto può fare l'AI da sola.

## Quanto in fretta si aspettano una risposta gli ospiti?

- **WhatsApp:** gli ospiti scrivono spesso mentre sono in viaggio e aspettano la risposta con il telefono in mano. Sulla WhatsApp Business Platform ufficiale, il messaggio di un ospite apre una finestra di assistenza clienti di 24 ore in cui le tue risposte sono gratuite ([prezzi WhatsApp](https://whatsappbusiness.com/products/platform-pricing/)).
- **Booking.com:** il centro assistenza di Little Hotelier spiega che Booking.com tiene un punteggio interno di risposta basato sulla tua rapidità, e che segnare un messaggio come **No reply needed** chiude la sua finestra di 24 ore ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Approfondisci in [gestire i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages).
- **Expedia:** gli ospiti scrivono dall'app Expedia e tu rispondi in Partner Central sotto **Messages**. Vedi [i messaggi degli ospiti Expedia](/blog/expedia-guest-messages).
- **Email:** più lenta, ma un ospite che chiede disponibilità probabilmente sta scrivendo anche ad altri hotel.

Una bozza già pronta nell'inbox riduce il tempo di risposta senza saltare il controllo.

## Perché l'AI non deve mai inventare una risposta

Un orario di check-in sbagliato è fastidioso. Un posto auto promesso che non hai, un prezzo sotto la tua tariffa o i dati della prenotazione di un altro ospite costano cari. I chatbot riempiono i vuoti con testo plausibile, quindi un'AI che parla con gli ospiti ha bisogno di tre limiti:

1. **Fonti chiuse.** Risponde solo da ciò che le hai dato: la tua pagina FAQ, le tue note, la prenotazione. Tutto il resto è "da confermare".
2. **Una prenotazione, e solo per la persona giusta.** Vede una prenotazione solo quando è provato che il mittente è quell'ospite.
3. **Niente mani.** Propone; una persona (o una regola ristretta e con limiti) decide cosa arriva all'ospite o alla prenotazione.

## Un set di template da cui partire

Qualunque strumento usi, scrivili una volta sola. Diventano le tue FAQ, i dati della tua AI e le tue risposte rapide:

```text [template-risposte-ospiti.txt]
CHECK-IN
Ciao [nome], il check-in è dalle [orario] e il check-out entro le [orario]. Se arrivi prima puoi lasciare i bagagli da noi.

ARRIVO TARDIVO
Grazie per averci avvisato, [nome]. La reception è aperta fino alle [orario]. Dopo, [come ritirare la chiave]. Abbiamo annotato il tuo orario di arrivo.

PARCHEGGIO
Abbiamo un parcheggio [gratuito / a pagamento, X a notte] [nella struttura / in indirizzo]. [Non si può prenotare / indicaci la tua targa].

COLAZIONE
La colazione è servita dalle [orario] alle [orario] e costa [prezzo] a persona. [Inclusa / non inclusa] nella tua tariffa.

FATTURA
Certo. Inviaci ragione sociale, partita IVA o codice fiscale e indirizzo di fatturazione ed emetteremo la fattura al check-out.

CANCELLAZIONE (serve una persona)
Grazie, [nome]. Abbiamo passato la tua richiesta al nostro team e ti confermeremo a breve le condizioni della tua prenotazione.

Non ti chiederemo mai i dati della carta via WhatsApp o SMS.
```

## Il modo più veloce: un'unica inbox in cui l'AI prepara e una persona approva

L'**Inbox** di Hotelier Tools (`/messaging`, alpha) raccoglie i messaggi degli ospiti da quattro canali, abbina ognuno alla sua prenotazione e prepara una risposta e un piano da approvare.

::screenshot{src="/images/blog/demo/en/ai-replies-inbox-thread-plan.webp" alt="Inbox ospiti con la conversazione WhatsApp di Noah Nilsson aperta: il badge Identity verified, la sua prenotazione dal 3 al 7 novembre (4 notti, 1 ospite, check-in fatto, pagata), il piano dell'AI in bozza classificato come arrivo tardivo al 93%, la sezione Why, una risposta modificabile in spagnolo e l'azione send_message, con il pannello Assistant sulla destra" caption="Il messaggio, la prenotazione e una bozza fianco a fianco. Non parte nulla finché non approvi." path="/messaging"}
::

### Passo 1: collega i tuoi canali

| Canale | Dove | Come si collega |
|---|---|---|
| **WhatsApp** | **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Un server WAHA, la sua sessione e chiave API, e un webhook |
| **Email** | **Credentials > Guest mailbox** (`/credentials/messaging-email`) | Accesso con **Google** o **Microsoft** (OAuth), oppure **Other (IMAP/SMTP)** |
| **Booking.com** | **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) | Il tuo login dell'extranet con il secondo fattore |
| **Expedia** (beta) | **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`), poi **Switch on Expedia messages** | Il tuo login di Partner Central |

Expedia è l'ultimo arrivato: dalla versione 1.71 (novembre 2026) le sue conversazioni arrivano con l'ospite, il soggiorno e l'ultimo messaggio, e le risposte si inviano sempre da Partner Central ([dettagli](/blog/expedia-guest-messages)).

Le caselle Outlook e Microsoft 365 richiedono l'accesso Microsoft, perché Microsoft rifiuta i login con password via IMAP. Una nuova casella parte in **Off** (solo raccolta): le bozze usano crediti AI, quindi attivarle è una tua scelta.

### Cos'è WAHA, e quali rischi comporta

[WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) è un server ospitato da te che esegue una sessione di WhatsApp Web e permette ad altri software di leggere e inviare i messaggi di quel numero via HTTP. Funziona come WhatsApp Web aperto su un computer: il telefono e l'app continuano a funzionare.

1. Nella pagina WhatsApp inserisci **WAHA base URL**, **Session name** e **WAHA API key**, poi salva.
2. Nel pannello **WhatsApp session** premi **Start session**. Quando compare un codice QR, apri WhatsApp sul telefono dell'hotel, vai in **Impostazioni > Dispositivi collegati > Collega un dispositivo** e scansionalo.
3. Premi **Connect webhook**, così WAHA invia i nuovi messaggi all'inbox, poi **Test connection**.
4. Se vuoi, in **Message history** scegli quanto indietro andare (7, 30 o 90 giorni, oppure **Last year**) e premi **Import history**. Le chat importate servono solo come contesto: nulla viene analizzato, risposto o segnato come non letto.

::screenshot{src="/images/blog/demo/en/ai-replies-whatsapp-session.webp" alt="Pagina delle credenziali WhatsApp (WAHA) con i campi WAHA base URL, Session name e WAHA API key, e il pannello WhatsApp session che mostra Connected, Webhook not configured, i pulsanti Restart session e Connect webhook, e Message history con Last 90 days e Import history" caption="Abbina il numero, collega il webhook e importa le chat passate da un solo pannello." path="/credentials/messaging-whatsapp"}
::

I rischi, detti chiaramente:

- **Non è l'API ufficiale.** La documentazione di WAHA dice: "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe" (WhatsApp non consente bot o client non ufficiali sulla sua piattaforma, quindi non va considerato del tutto sicuro). Un numero potrebbe essere bloccato. Rispondi agli ospiti che ti scrivono; non inviare mai messaggi di massa ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Proteggi WAHA.** Il pannello avvisa quando **WAHA answers without an API key**: chiunque lo raggiunga potrebbe leggere e inviare i messaggi di quel numero.
- **L'URL del webhook è un segreto.** Il suo token è ciò che fa entrare i messaggi nella tua inbox. Le chat di gruppo vengono ignorate.

Per l'API ufficiale di Meta, vedi il Messaging hub di Little Hotelier in [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

### Passo 2: come viene costruita ogni risposta

1. **Il mittente viene abbinato a una sola prenotazione.** Il pannello mostra il risultato: **Identity verified** (identità verificata), **Ambiguous — refused** (più di un ospite corrisponde, quindi non viene mostrata alcuna prenotazione), **No reservation match** (l'AI risponde solo dalle tue FAQ) oppure **Not checked**. Su WhatsApp il numero deve coincidere con il telefono della prenotazione almeno nelle ultime 8 cifre; via email, l'indirizzo esatto. Una conversazione di Booking.com indica la propria prenotazione; una conversazione Expedia si collega solo tramite il riferimento `EXP-` che contiene.
2. **Prima aspetta te.** Un messaggio WhatsApp viene analizzato dopo 5 minuti, un'email dopo un'ora. Se nel frattempo qualcuno risponde, il piano indica **already answered** e non viene addebitato nulla.
3. **L'AI legge** quella sola prenotazione, le tue fonti **FAQ & knowledge** (`/messaging/faq`), le note della struttura e la scheda della struttura da **Settings > Property & AI knowledge**.
4. **Restituisce un piano scelto da un elenco chiuso:** inviare un messaggio, segnalare allo staff, aggiungere una nota alla prenotazione o impostare l'orario di arrivo. Non ha strumenti, non può cancellare, cambiare date né toccare i pagamenti, e ogni azione vale solo per la prenotazione abbinata.
5. **Decide una persona.** Modifica la risposta, poi **Approve (respect delay)** o **Confirm & send now**. I piani non toccati scadono dopo 48 ore.

Prima di ogni invio, un controllo blocca una risposta che contiene il riferimento di un'altra prenotazione, o qualsiasi numero lungo quando il mittente non è verificato.

### Passo 3: scegli quanto può fare l'AI

In **Channels** (`/messaging/channels`) ogni account collegato ha una sua modalità:

| Modalità | Cosa succede |
|---|---|
| **Off — collect only** | I messaggi vengono raccolti e mostrati. Nulla viene analizzato né inviato. |
| **Draft — I approve everything** (predefinita) | L'AI prepara una risposta e un piano; non succede nulla finché non approvi. |
| **Automatic reply — no reservation changes** | L'AI invia dopo un'attesa, solo per domande semplici (orario di check-in o check-out, wifi, parcheggio, arrivo tardivo, indicazioni, servizi), per un ospite verificato e con sufficiente sicurezza. |
| **Autonomous — replies AND changes reservations** | Aggiunge anche note o imposta l'orario di arrivo su una prenotazione verificata senza approvazione. Controllala più volte al giorno. |

Limiti per canale: le conversazioni **Booking.com** non vengono mai inviate dall'AI, qualunque sia la modalità; preme Send una persona. **Expedia** offre solo Off e Draft, e la risposta si scrive in Partner Central. Le risposte automatiche si fermano a 4 all'ora, 12 al giorno, o 3 di fila senza risposta dall'ospite, così un ciclo con una risposta automatica di assenza non può andare fuori controllo.

### Passo 4: firme, formattazione e file per canale

In **Signatures** (`/messaging/signatures`) tieni più firme con un nome (Reception, Direzione, Inglese…), ognuna scritta una volta per canale nel modo in cui quel canale la mostra, e ne scegli una predefinita. Gli esempi vengono compilati con i dati della tua struttura. Le risposte di Booking.com nella conversazione di prenotazione di un ospite sono firmate in testo semplice; le risposte pubbliche alle Q&A non lo sono mai.

::screenshot{src="/images/blog/demo/en/ai-replies-signatures.webp" alt="Pagina Signatures con l'esempio Reception aperto: nome Reception impostata come Default, schede Email, WhatsApp e Booking.com, la versione email con il nome dell'hotel, il telefono della reception e il link al sito, un campo Text version vuoto, e firme di esempio (Reception, Formal, Short, Full contact, Bilingual) sulla sinistra" caption="Una firma, tre versioni: formattata per l'email, con i simboli di WhatsApp, in testo semplice per Booking.com." path="/messaging/signatures"}
::

L'AI scrive una sola bozza, e l'inbox la adatta al canale:

| Canale | Formattazione | File |
|---|---|---|
| Email | Testo formattato: grassetto, link, elenchi, citazioni | Sì, fino a 18 MB in totale |
| WhatsApp | Formattazione di WhatsApp `*grassetto*`, `_corsivo_`, elenchi | Fino a 10 file da 16 MB ciascuno, più note vocali registrate nel browser |
| Booking.com | Testo semplice; una risposta pubblica alle Q&A resta sotto i 320 caratteri | No |

Su WhatsApp le foto, le note vocali e i documenti inviati dagli ospiti compaiono nella conversazione. WhatsApp conserva i file multimediali solo per un certo tempo, quindi un file vecchio può non esserci più.

### Passo 5: insegnale le tue risposte

- **FAQ & knowledge** (`/messaging/faq`): aggiungi la tua pagina FAQ o del testo semplice, e compila le note della struttura. La pagina lo dice chiaramente: l'AI "answers from these sources and nothing else" (risponde da queste fonti e da nient'altro).
- **AI training** (`/messaging/training`): in **Review recent** premi **Correct** quando l'AI ha frainteso un messaggio; diventa un esempio. Aggiungi **Rules** di una frase e usa il **Test bench** per verificare che sia ancora d'accordo (ogni test è un'analisi reale e usa crediti).
- **Memoria delle risposte:** nessuna configurazione. Le risposte inviate dal tuo team nell'ultimo anno vengono abbinate alla domanda che le precede, e le più simili vengono mostrate all'AI quando arriva un messaggio analogo, senza nome, date, riferimenti e contatti dell'altro ospite. Scrivi una volta "6 € a notte per un cane, da pagare all'arrivo", e il prossimo ospite che chiede riceve la stessa risposta. Le note della struttura prevalgono comunque su una vecchia risposta.

::screenshot{src="/images/blog/demo/en/ai-replies-training-examples.webp" alt="Pagina AI training nella scheda Examples con tre esempi salvati: una domanda in francese sul parcheggio su Booking.com senza azioni, un arrivo tardivo in tedesco su WhatsApp che imposta l'orario di arrivo alle 01:00, e una richiesta di fattura in spagnolo via email che aggiunge una nota alla prenotazione, ciascuno con un breve suggerimento" caption="Le correzioni diventano esempi che l'AI vede la volta successiva che arriva un messaggio simile." path="/messaging/training"}
::

### Cos'altro gestisce l'inbox

- **I prezzi arrivano dal tuo booking engine.** L'assistente privato sulla destra fa un preventivo dalla tua pagina di prenotazione diretta per quelle date e quegli ospiti, con il tuo codice promozionale. Un prezzo che nessun preventivo ha restituito viene segnalato come non verificato.
- **Notti al completo:** quando un ospite chiede una data esaurita e la tua [lista d'attesa](/blog/hotel-waitlist-sold-out-dates) è attiva, l'assistente propone una scheda per aggiungerlo.
- **Richieste di fattura:** i due messaggi fissi di Booking.com per chiedere la fattura vengono letti senza AI e diventano una scheda che programma la [fattura al check-out](/blog/send-invoice-to-guest-at-checkout) per quel soggiorno, più una risposta nella lingua dell'ospite.
- **Crediti AI** (`/messaging/credits`): un'analisi è un messaggio dell'ospite letto, pianificato e con bozza, addebitato al costo reale del modello, prima dalla quota mensile, poi dal tuo saldo. I prezzi dei pacchetti indicati lì sono ancora provvisori.

::demo-cta{path="/messaging"}
::

Tutto quello che fa l'inbox è nella [pagina Guest inbox](/tools/bot/guest-inbox). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder o Little Hotelier. Si collega con i login Little Hotelier, Booking.com ed Expedia della tua struttura.
::

Guide correlate: [come riconoscere i messaggi truffa](/blog/hotel-scam-messages), [l'assistente IA per la reception](/blog/ai-assistant-hotel-front-desk), [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

## Riepilogo

- Scrivi una volta le risposte alle dieci o dodici domande più comuni: sono i tuoi template, le tue FAQ e i dati della tua AI.
- Lascia che l'AI prepari le bozze, e tieni una persona su cancellazioni, rimborsi, prezzi e reclami.
- L'AI dovrebbe vedere una prenotazione solo quando il mittente corrisponde esattamente a una prenotazione, e rispondere "da confermare" per tutto ciò che non hai elencato.
- In Hotelier Tools, WhatsApp (tramite WAHA), email, Booking.com ed Expedia (beta) condividono un'unica inbox, ogni canale parte in **Draft**, e su Booking.com ed Expedia l'AI non invia mai nulla.
- Firme, formattazione, training e memoria delle risposte fanno sì che le bozze suonino come la tua reception.
