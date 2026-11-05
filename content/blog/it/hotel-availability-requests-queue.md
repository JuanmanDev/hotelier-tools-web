---
title: "Un ospite chiede date che non puoi ancora vendere? Tieni una coda delle richieste di disponibilità"
seoTitle: "Richieste di disponibilità in hotel: non perderne più una"
description: "Gli ospiti chiedono date piene o ancora senza prezzi e l'email si perde. Tieni un registro delle richieste o lascia che una coda controlli e risponda."
date: 2026-11-05
updated: 2026-11-05
category: operations
tags: [disponibilità, lista d'attesa, richieste, little hotelier, gruppi, prenotazione diretta]
keywords: [richiesta disponibilità hotel, ospite chiede date non ancora disponibili, avvisare ospite quando si libera una camera, registro richieste hotel, lista d'attesa hotel date future, richiesta gruppo hotel al completo, tariffe non ancora caricate booking engine, gestire richieste di disponibilità b&b, little hotelier disponibilità]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-queue-requests.webp
coverAlt: "Pagina Availability queue di Hotelier Tools: il pulsante Add to the queue, la scheda Public waiting-list page segnata come aperta con il suo link e In the queue con tre richieste attive: Tom Walker (email e WhatsApp, 1 camera di qualsiasi tipologia, 27–29 nov), Lena Fischer (1 Doble Superior, 18–21 dic) e Viajes Ejemplo (agenzia), che chiede 3 Doble Estándar più 1 Familiar 4 pax dal 26 al 29 marzo 2027"
featured: true
faq:
  - q: "Cosa faccio quando un ospite chiede date per cui non ho ancora fissato i prezzi?"
    a: "Annota la richiesta con le notti esatte, le camere e il contatto, di' all'ospite che gli scriverai appena le date saranno aperte e controlla l'elenco ogni volta che carichi nuove tariffe. Uno strumento come la coda di disponibilità di Hotelier Tools fa il controllo per te e scrive all'ospite la prima volta che le camere sono prenotabili."
  - q: "Una richiesta di disponibilità trattiene una camera per l'ospite?"
    a: "No. Nulla viene riservato o bloccato. Quando le camere si liberano, l'ospite riceve un messaggio con un link di prenotazione e la camera va a chi prenota per primo. Dillo chiaramente in ogni risposta."
  - q: "Come fa la coda a sapere che un soggiorno è davvero libero?"
    a: "Legge l'inventario di Little Hotelier per ogni notte del soggiorno e prende il valore più basso. Una notte in stop sell, chiusa all'arrivo nel giorno di arrivo o assente dall'inventario conta come zero, quindi 'nessun dato' non significa mai 'libero'."
  - q: "E se si libera solo una parte delle camere chieste da un'agenzia?"
    a: "È una corrispondenza 'partial'. Per impostazione predefinita lo sa solo la struttura, una volta sola, così puoi chiamare l'agenzia e offrire ciò che è libero. La richiesta resta in coda finché non sono libere tutte le camere."
  - q: "Un ospite può ricevere due volte lo stesso messaggio?"
    a: "No. Una richiesta annuncia 'available' una volta sola e poi si chiude. Hotelier Tools rifiuta anche di mettere in coda due volte la stessa persona per le stesse date, che sia stata aggiunta dalla dashboard, da un assistente, dall'API o dalla pagina pubblica."
  - q: "Hotelier Tools fa parte di Little Hotelier?"
    a: "No. Hotelier Tools è uno strumento indipendente, non affiliato né approvato da SiteMinder o Little Hotelier. Legge la disponibilità con il login Little Hotelier della tua struttura e non crea né modifica mai una prenotazione dalla coda."
---

Quando un ospite chiede date che oggi non puoi vendere (piene, chiuse o ancora senza prezzi), annota la richiesta con le notti esatte, le camere e il contatto, e riguarda quell'elenco ogni volta che qualcosa cambia. Il modo più rapido è una coda che controlla Little Hotelier al posto tuo: la **Availability queue** (coda di disponibilità) di Hotelier Tools controlla ogni richiesta a intervalli programmati e invia all'ospite un solo messaggio, con un link di prenotazione, la prima volta che tutte le notti richieste sono prenotabili.

## Perché le richieste di disponibilità si perdono?

Perché la richiesta sta in un posto e la risposta compare da un'altra parte, settimane dopo. I casi tipici:

- **L'email o il WhatsApp finisce sepolto.** "Avete una doppia per la prima settimana di agosto?" arriva a marzo. Quando le camere si liberano, il messaggio è 400 email più in basso e nessuno ricorda chi l'aveva chiesto.
- **Le date non hanno ancora tariffe.** Non hai caricato i prezzi della prossima estate, quindi il motore di prenotazione non mostra nulla e l'ospite scrive a te. Rispondi "le faremo sapere", e poi carichi le tariffe in un pomeriggio pieno di lavoro.
- **Le date sono esaurite.** Una cancellazione libera una camera martedì alle 10:00. L'ospite che l'aveva chiesta a gennaio non ne sa nulla e un'OTA la rivende.
- **Un'agenzia vuole più camere.** Tre doppie e una familiare per il weekend di Pasqua. Tu hai due doppie. È un no o una telefonata?
- **Una parte della richiesta diventa possibile.** Si liberano due delle tre notti, o una delle due camere. Nessuno controlla a mano ogni notte di ogni richiesta.

Ognuno di questi casi è una prenotazione diretta che avevi già nella casella di posta.

## Come si tengono le richieste di disponibilità a mano?

Un semplice registro funziona, se qualcuno lo aggiorna. Una riga per richiesta:

| Cosa annotare | Perché |
|---|---|
| Data della richiesta e canale (email, WhatsApp, telefono) | Per ritrovare il messaggio originale |
| Nome, email e telefono con prefisso internazionale | Per rispondere sul canale che ha usato |
| Prima notte e giorno di partenza | Un soggiorno ha bisogno di tutte le notti, non solo della prima |
| Camere e tipologie, per tipologia nei gruppi | "3 doppie + 1 familiare" non è "4 camere" |
| Perché non hai potuto venderlo | Pieno, chiuso o senza tariffe: ognuno ti dice quando riguardare |
| Stato e data | In attesa, offerta, prenotata, rinunciato |

**Quando controllare:**

- **Ogni volta che carichi o apri tariffe.** In Little Hotelier imposti le tariffe e chiudi o apri le date in **Front Desk > Inventory**, una alla volta o con **Bulk Update** ([centro assistenza di Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), a novembre 2026). Filtra il registro per le date che hai appena aperto.
- **Ogni volta che arriva una cancellazione** per date presenti nel registro.
- **Una volta a settimana**, per chiudere le richieste con date già passate.

**Come rispondere:** dai all'ospite un link di prenotazione diretta per le sue date esatte, di' chiaramente che nulla è trattenuto e fissa una scadenza se lo offri a più persone. Se lavori in Gmail, un'etichetta come "Richieste disponibilità" tiene insieme le email originali ([Guida di Gmail](https://support.google.com/mail/answer/118708)).

Il punto debole restano le persone: qualcuno deve confrontare ogni notte di ogni riga con l'inventario, e ricordarsi di farlo.

## Il modo più rapido: la coda di disponibilità di Hotelier Tools

La **Availability queue** (`/availability-watch`, beta) tiene l'elenco e fa i controlli. Aggiungi un soggiorno una volta sola. Un'attività programmata legge Little Hotelier per l'intera coda e, quando le camere sono prenotabili in ogni notte, l'ospite e/o tu ricevete un messaggio via email o WhatsApp. Nulla viene riservato o trattenuto e il messaggio lo specifica.

1. Apri **Availability queue** e compila **Add a stay to watch** (aggiungi un soggiorno da controllare): le notti, **Rooms needed** (camere richieste) e **Room types** (tipologie di camera). Per un'agenzia, spunta **Different numbers per room type**.
2. In **Tell the guest** e **Tell the property** scegli i canali e quando ciascuno viene avvisato.
3. Clicca su **Add to the queue**.
4. Controlla la scheda **Checks on the queue**. Gli account con un login Little Hotelier di solito hanno già questa attività, ogni notte alle 01:00. Se indica **Not configured yet**, premi **Check every night at 01:00** oppure **Choose** un'altra pianificazione (al massimo ogni 20 minuti).

I passaggi per date esaurite e cancellazioni sono nella guida collegata, [come gestire una lista d'attesa per le date esaurite](/blog/hotel-waitlist-sold-out-dates). Questa guida spiega come decide la coda e i nuovi modi in cui le richieste ci arrivano.

::screenshot{src="/images/blog/demo/en/availability-queue-requests.webp" alt="Pagina Availability queue: il pulsante Add to the queue, la scheda Public waiting-list page segnata come aperta con il suo indirizzo e In the queue con tre voci attive: Tom Walker via email e WhatsApp per 1 camera di qualsiasi tipologia, 27–29 novembre 2026; Lena Fischer per 1 Doble Superior, 18–21 dicembre 2026; e Viajes Ejemplo (agenzia) per 3 Doble Estándar più 1 Familiar 4 pax, 26–29 marzo 2027, ciascuna segnata Not checked yet" caption="Un solo elenco per ogni richiesta: un singolo ospite, una richiesta via WhatsApp e un gruppo di un'agenzia con mesi di anticipo." path="/availability-watch"}
::

### Come decide la coda che un soggiorno è libero?

- **Conta la notte con meno camere libere.** Una tipologia con quattro camere libere venerdì e nessuna sabato non può vendere un soggiorno da venerdì a domenica. La coda prende il valore più basso tra le notti, cioè il numero che puoi davvero vendere.
- **Chiuso significa non prenotabile.** Una notte in stop sell (**Close Channels** in Little Hotelier), chiusa all'arrivo nel giorno di arrivo o assente dall'inventario conta come zero, anche se il numero di camere dice altro. "Nessun dato" non significa mai "libero".
- **Quindi funziona anche per le date senza prezzi.** Se tieni chiusa la prossima stagione finché non inserisci le tariffe, un ospite che chiede agosto aspetta in coda. Il primo controllo dopo che hai caricato le tariffe e aperto quelle date trova le camere libere, e l'ospite viene avvisato senza che tu debba cercare nulla.
- **Un solo controllo per tutta la coda.** Ogni richiesta in attesa viene controllata a ogni esecuzione, quindi due ospiti in attesa per la stessa notte vengono avvisati della stessa cancellazione nello stesso momento. Little Hotelier viene letto una volta per data di arrivo, non una volta per richiesta.
- **Lo dice una volta sola.** Quando una richiesta viene annunciata come disponibile, si chiude. La disponibilità va e viene, e un ospite non dovrebbe ricevere un messaggio ogni 30 minuti per la stessa camera.
- **Un soggiorno già iniziato viene ritirato** senza inviare nulla.

### Chi viene avvisato e di cosa: available, partial o expiring

Ogni controllo finisce in una di tre situazioni, e l'ospite e la struttura le scelgono separatamente:

| Situazione | Etichetta nel modulo | Chi la riceve per impostazione predefinita |
|---|---|---|
| **Available**: ogni camera richiesta è prenotabile in ogni notte | **Everything asked for is free** | L'ospite e la struttura. La richiesta si chiude. |
| **Partial**: si è liberato qualcosa, ma meno camere di quelle richieste | **Some rooms came free, but not all** | Solo la struttura. È una telefonata, non un'email automatica. |
| **Expiring**: il soggiorno inizia entro 48 ore e non è stato trovato nulla | **About to expire with nothing found** | Solo la struttura. L'ultima occasione per offrire un'alternativa. |

Una corrispondenza parziale che non cambia viene segnalata una volta, non a ogni esecuzione, e la richiesta continua ad aspettare tutte le camere. È il caso dell'agenzia: "2 delle 3 doppie sono libere" arriva alla reception, e l'agenzia non riceve un'email su cui non può fare nulla.

### Email o WhatsApp, per l'ospite e per te

L'ospite può essere avvisato via email, WhatsApp o entrambi, e la struttura sui propri canali. I messaggi WhatsApp partono dal numero che hai collegato ([WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier)); un numero di telefono deve includere il prefisso internazionale, e Hotelier Tools non lo indovina mai. Lascia vuoto **Property email** per usare l'indirizzo di notifica del tuo account. L'email all'ospite è scritta nella lingua che scegli in **Guest's language** e, in un messaggio **available**, contiene un link di prenotazione diretta con le date e il numero di camere già compilati. **History** (`/availability-watch/history`) conserva il messaggio esatto inviato da ogni richiesta.

::screenshot{src="/images/blog/demo/en/availability-queue-history.webp" alt="Pagina Waiting list history: i contatori 1 Fulfilled, 1 Expired, 1 Cancelled e 3 With a message, poi Closed entries: Pierre Dubois fulfilled, una camera si è liberata ed è stata annunciata (AVAILABLE Doble Superior ×3, told guest/email, hotel/email), con un pulsante What was sent; Lucas Moreau expired perché il soggiorno è iniziato prima che si liberasse qualcosa; Sean Murphy cancelled dalla reception perché l'ospite ha prenotato altre date per telefono" caption="Ogni richiesta chiusa resta registrata, con il messaggio esatto che l'ospite ha ricevuto." path="/availability-watch/history"}
::

### Le richieste che arrivano nella inbox

Gli assistenti AI ([AI Chat](/blog/ai-assistant-hotel-front-desk), beta, e l'assistente della inbox, alpha) sanno quando la tua struttura usa la coda. Quando un ospite chiede delle date e il motore di prenotazione non trova nulla da vendere, l'assistente propone la lista d'attesa nella stessa risposta invece di fermarsi a "nessuna disponibilità". Prima verifica se quella persona è già in attesa, per email o telefono, e non la mette mai in coda due volte per le stesse date. La richiesta compare come una scheda da confermare, con l'ospite, il soggiorno, le camere e chi verrà avvisato. Se solo alcune camere sono prenotabili, propone quelle e offre la coda per il resto. Maggiori dettagli in [risposte AI ai messaggi degli ospiti](/blog/ai-replies-guest-messages).

## Fai chiedere gli ospiti dal tuo sito: la pagina pubblica della lista d'attesa

La **Public waiting-list page** (`/availability-watch/public`) permette agli ospiti di aggiungersi da soli. Resta spenta finché non attivi **Page open**, e **Ask guests to confirm their email (double opt-in)** è attivo per impostazione predefinita: una richiesta entra in coda solo dopo che l'ospite ha premuto un pulsante in un'email di conferma.

**Prenotabile adesso: prenotalo, non aspettarlo.** Quando un ospite sceglie un soggiorno, la pagina controlla il tuo motore di prenotazione pubblico (mai Little Hotelier) per quelle date e quel numero di persone. Se ci sono camere libere, mostra i prezzi con il tuo codice promozionale diretto applicato e un pulsante **Book now**, e non mette quel soggiorno in lista d'attesa. Se sono libere solo altre tipologie o meno camere, mostra quelle e lascia comunque che l'ospite si iscriva per il resto. Se il motore non si può leggere, lo dice e l'ospite può iscriversi lo stesso.

::screenshot{src="/images/blog/demo/en/availability-queue-bookable-now.webp" alt="Modulo pubblico della lista d'attesa per il 18–21 dicembre 2026, 1 camera per 2 adulti: un riquadro verde con Good news: you can book these dates now, che elenca Dormitorio 6 camas mixto, Doble Estándar, Doble Superior e Familiar 4 pax con le camere rimaste, prezzi barrati e totali scontati per tariffa, la nota sul codice sconto diretto DEMOSOL e un pulsante Book now" caption="Se le date sono prenotabili, l'ospite vede il tuo prezzo diretto e prenota invece di aspettare." path="/waitlist"}
::

Disattivi questo controllo in **When a room is free now**, insieme al link **Book on our website**. Le altre impostazioni definiscono ciò che vedono gli ospiti:

- **Look of your booking page** (aspetto della pagina di prenotazione): incolla il tuo indirizzo direct-book.com e premi **Import** per importarne colori, banner, foto della struttura e descrizioni delle camere. Non viene mostrato nulla finché non spunti cosa usare.
- **What the page shows about your property** (cosa mostra la pagina sulla struttura): nome, indirizzo, telefono, email e sito web, ciascuno **From the property card**, con un **Own value for this page** oppure **Do not show**. Gli indirizzi di accesso non vengono mai mostrati agli ospiti.
- **Map links and more ways to reach you** (link alle mappe e altri contatti): link a Google Maps e Apple Maps generati dal tuo indirizzo, fino a tre altri link a mappe, WhatsApp e fino a tre indirizzi email aggiuntivi (per i gruppi, per esempio).
- **Arrival and departure warnings** (avvisi su arrivi e partenze): la pagina avvisa, ma non rifiuta mai, quando un ospite sceglie un giorno in cui di solito applichi la chiusura all'arrivo o alla partenza.

::screenshot{src="/images/blog/demo/en/availability-queue-public-settings.webp" alt="Impostazioni della pagina pubblica della lista d'attesa: la scheda When a room is free now con Check availability on the booking engine e Show a Book on our website link entrambi attivi, e Direct promo code DEMOSOL con il suo link di prenotazione; sotto, la scheda Look of your booking page con un campo per l'indirizzo direct-book.com e un pulsante Import, Nothing imported yet" caption="Prima controlla il motore di prenotazione, poi riprendi l'aspetto della tua pagina di prenotazione." path="/availability-watch/public"}
::

### Condividi un link precompilato o incorpora il modulo

**Share and embed** (condividi e incorpora, `/availability-watch/embed`) prepara due cose da copiare. Un **Link** che compila il modulo, con gli stessi nomi di parametro della tua pagina di prenotazione (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`), così puoi rispondere a una richiesta con un link che ha già le date dell'ospite. E un **Frame for your website**: un `<iframe>` a tutta larghezza o a 480, 640 o 800 px, con anteprima. Solo questa pagina pubblica può essere inserita in altri siti; il resto della dashboard no.

::screenshot{src="/images/blog/demo/en/availability-queue-embed.webp" alt="Pagina Share and embed: What the link fills in con Your nights, Rooms, Adults, Children, Room type (optional), Language impostato su The guest's own e Promo code DEMOSOL, e la scheda Link con l'indirizzo della lista d'attesa, Copy link e Open" caption="Rispondi a una richiesta con un link che ha già le date dell'ospite." path="/availability-watch/embed"}
::

## La coda alimenta i tuoi prezzi

Le persone in attesa per una notte sono domanda. Nei prezzi dinamici di Hotelier Tools (alpha), ogni gruppo in attesa alza del 3% il prezzo consigliato per quella notte, fino al 12% a notte, solo per le tipologie di camera richieste e contando lo stesso ospite una volta sola. Puoi cambiarlo o disattivarlo nelle regole di prezzo (`/pricing/settings/rules`): **Raise per guest on the waiting list** e **Never raise for the waiting list more than**. Vedi [prezzi dinamici per piccoli hotel](/blog/dynamic-pricing-little-hotelier).

## Per sviluppatori: MCP e REST

Gli strumenti MCP (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule`, più `list_room_types`) e la REST API (`/api/v1/availability-watch`) fanno lo stesso, con lo stesso controllo dei duplicati. Controllare la coda invia messaggi reali, quindi AI Chat ti chiede di confermarlo. Vedi [la guida all'API di Little Hotelier](/blog/little-hotelier-api) e [collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier).

## Cosa non fa la coda

- **Non trattiene né riserva nulla.** La camera va a chi prenota per primo, su qualsiasi canale.
- **Non crea prenotazioni** e non modifica nulla in Little Hotelier.
- **È veloce quanto la sua pianificazione.** In alta stagione controlla ogni 20–30 minuti invece che ogni notte.
- **Vede ciò che mostra Little Hotelier.** Se la lettura dell'inventario restituisce tariffe ma non il numero di camere, la pagina indica **Little Hotelier is not returning room counts** invece di segnalare le date come piene.
- **Le tariffe non fanno parte del controllo.** La coda legge il numero di camere e le chiusure, quindi tieni chiuse le date senza prezzi se non vuoi che vengano annunciate.

::demo-cta{path="/availability-watch"}
::

Tutto ciò che fa la coda è nella [pagina Waitlist](/tools/bot/waitlist). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Legge la disponibilità con il login Little Hotelier della tua struttura e non crea né modifica mai una prenotazione dalla coda.
::

Vedi anche: [CTA, CTD, soggiorno minimo e stop sell](/blog/little-hotelier-cta-ctd-stop-sell), [un indirizzo email dell'hotel per gli ospiti](/blog/hotel-email-address), [codici promozionali in Little Hotelier](/blog/little-hotelier-promo-codes).

## Riepilogo

- Le richieste si perdono perché la domanda arriva molto prima della risposta: messaggi sepolti, date senza prezzi, notti esaurite, richieste di gruppi, corrispondenze parziali.
- A mano: registra notti, camere per tipologia, contatto e il motivo per cui non hai potuto vendere, e controlla ogni volta che carichi tariffe o ricevi una cancellazione.
- La **Availability queue** di Hotelier Tools controlla ogni notte di ogni richiesta con un'unica pianificazione, conta come piene le notti chiuse o senza dati e avvisa l'ospite una volta sola, con un link di prenotazione.
- **Partial** ed **expiring** vanno alla struttura per impostazione predefinita; **available** va a entrambi.
- Gli ospiti possono iscriversi da una pagina pubblica che prima propone di vendere le date se sono già prenotabili. Nulla viene mai trattenuto.
