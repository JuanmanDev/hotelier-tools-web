---
title: "Prenotazione Booking.com o Expedia che non compare in Little Hotelier: cause, controlli e come evitare un overbooking"
seoTitle: "Prenotazione Booking.com o Expedia non in Little Hotelier?"
description: "Perché una prenotazione OTA non arriva in Little Hotelier, dove vedere lo stato di consegna, come proteggere la camera e avere un avviso se ne manca una."
date: 2026-10-29
category: operations
tags: [booking.com, expedia, channel manager, overbooking, little hotelier, siteminder]
keywords: [prenotazione booking non arriva su little hotelier, prenotazione booking.com non compare in little hotelier, prenotazione expedia non arriva al channel manager, prenotazione mancante little hotelier, siteminder prenotazione non consegnata, prenotazione booking non sincronizzata con il gestionale, overbooking channel manager, reinviare prenotazione a little hotelier]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "Calendario delle prenotazioni di Hotelier Tools dal 4 al 17 novembre 2026: camere raggruppate per tipologia con le prenotazioni confermate e con check-in fatto come barre, una riga No room yet, la camera 104 chiusa per manutenzione e la legenda con Checked in, Checked out, Confirmed, Double booked e Room closed"
faq:
  - q: "Perché una prenotazione Booking.com non compare in Little Hotelier?"
    a: "Di solito la camera o la tariffa prenotata non è mappata, o è disattivata, nel Channel Manager di Little Hotelier, la prenotazione è stata fatta con un altro codice struttura, oppure la consegna non è andata a buon fine. Controlla il suo stato di consegna in My apps > Channel Manager > Reservations."
  - q: "Come reinvio a Little Hotelier una prenotazione non consegnata?"
    a: "In My apps > Channel Manager > Reservations clicca sull'ID della prenotazione, apri la scheda Little Hotelier nel Booking summary e clicca su Resend PMS message. Una prenotazione senza stato di consegna non si può reinviare: inseriscila a mano."
  - q: "Qual è la prima cosa da fare quando manca una prenotazione?"
    a: "Proteggi la camera. Crea la prenotazione a mano in Front Desk > Calendar con i dati dell'extranet: così la disponibilità scende su tutti i canali. Poi scopri perché non è arrivata."
  - q: "Booking.com mi avvisa quando una prenotazione non arriva al mio channel manager?"
    a: "Sì. Booking.com scrive via email alla struttura quando c'è un problema nell'aggiungere una prenotazione al sistema del fornitore di connettività, quindi tieni aggiornati i contatti nell'Extranet. La prenotazione in sé è sempre nell'Extranet."
  - q: "Quanto in fretta Hotelier Tools segnala una prenotazione mancante?"
    a: "Per Expedia il controllo gira ogni 15 minuti e segnala una prenotazione che manca ancora dopo 30 minuti, vista mancare in almeno due letture: circa 30-45 minuti dopo la prenotazione. Avvisa una volta per prenotazione, e un'altra volta quando arriva. Per Booking.com al momento segnala solo gli incidenti sulle prenotazioni."
  - q: "Hotelier Tools fa parte di Little Hotelier, SiteMinder, Booking.com o Expedia?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da nessuno di loro. Legge i tuoi extranet e Little Hotelier con i tuoi login e non crea, modifica né cancella mai una prenotazione."
---

Quando una prenotazione Booking.com o Expedia manca in Little Hotelier, quasi sempre si è fermata in uno di tre punti: la camera o la tariffa non è mappata (o è disattivata) nel Channel Manager, la prenotazione è andata a un altro codice struttura, oppure la consegna non è riuscita. Controlla il suo stato in **My apps > Channel Manager > Reservations** e reinviala se è fallita. Qualunque sia la causa, prima crea la prenotazione a mano, così la camera non può essere venduta due volte.

Le schermate di Little Hotelier, Booking.com ed Expedia descritte qui sotto sono state verificate a novembre 2026.

## Perché la prenotazione non è arrivata in Little Hotelier?

Una prenotazione viaggia dall'OTA al channel manager di SiteMinder, e da lì al Front Desk di Little Hotelier. Può fermarsi a ogni passaggio. Le cause più comuni, secondo la [guida alle prenotazioni mancanti](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) di Little Hotelier e la [guida alla sincronizzazione](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) di Booking.com:

| Causa | Come si presenta |
|---|---|
| **Piano tariffario o camera non mappati** | L'ospite ha prenotato una tariffa non collegata nel Channel Manager. La prenotazione non ha alcuno stato di consegna. |
| **Tariffa o canale disattivati** | Gli elementi disattivati non inviano aggiornamenti, ma l'OTA continua a vendere sulla vecchia disponibilità. |
| **Prenotata prima della mappatura** | Le prenotazioni fatte prima di attivare o mappare una tariffa del canale non si sincronizzano da sole. |
| **Codice struttura sbagliato** | Un secondo account extranet con un altro codice. Le sue prenotazioni non arrivano mai in Little Hotelier. |
| **Consegna non riuscita** | Il channel manager ha ricevuto la prenotazione, ma Little Hotelier l'ha rifiutata o non è riuscito a confermarla. |
| **Incidente lato OTA** | L'API delle prenotazioni dell'OTA non funziona. Nuove prenotazioni, modifiche e cancellazioni smettono di arrivare per un po'. |

Non dimenticare modifiche e cancellazioni. Fanno la stessa strada. Una cancellazione persa tiene bloccata una camera che potresti vendere. Un cambio di date perso mette l'ospite nelle notti sbagliate. Si risolvono allo stesso modo: confronta la prenotazione nell'extranet con Little Hotelier.

Una prenotazione accettata a disponibilità zero è un altro problema. Little Hotelier consiglia di chiedere all'OTA perché l'ha accettata, e di chiedere al supporto il registro degli aggiornamenti di inventario inviati a quel canale come prova.

## Come controllare lo stato di consegna in Little Hotelier

1. Vai su **My apps > Channel Manager > Reservations**. Usa il filtro **All PMS status** per vedere lo stato di consegna di ogni prenotazione.
2. Leggi lo stato ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: Little Hotelier l'ha accettata. Se ancora non la trovi, cerca nel Front Desk per nome dell'ospite e con l'anno giusto, poi contatta il supporto.
   - **PENDING**: non ancora ricevuta. Di solito si sblocca in pochi minuti.
   - **FAILED**: rifiutata o non confermata. L'errore ti arriva anche via email.
   - **Nessuno stato**: la tariffa non è mappata. Non si può reinviare, quindi inseriscila a mano.
3. Per reinviare una prenotazione fallita, clicca sul suo ID. Nella finestra **Booking summary** apri la scheda **Little Hotelier** e clicca su **Resend PMS message**.

Gli errori compaiono anche sotto la campanella, in **Reservation delivery failures**. Poi correggi la causa in **My apps > Channel Manager > Channels > Configure**: mappa le tariffe non mappate, riattiva quelle disattivate e verifica che **Rates Mapped** mostri due numeri uguali (per esempio 44/44). Una tariffa che continua a fallire con "Unable to locate" è stata eliminata o modificata lato OTA e va mappata di nuovo ([errori di mappatura](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## Come controllare su Booking.com ed Expedia

**Booking.com.** Ogni prenotazione è nell'elenco **Reservations** dell'Extranet, qualunque cosa sia successa dopo. Booking.com spiega che una prenotazione può mancare nel sistema del tuo fornitore quando la camera o la tariffa non è ancora collegata lì, oppure dopo un problema tecnico. Ti scrive anche via email ogni volta che non è riuscita ad aggiungere una prenotazione al sistema del tuo fornitore, quindi tieni aggiornati i contatti nell'Extranet ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Quando mancano più prenotazioni insieme, guarda la [pagina pubblica sullo stato della connettività](https://connect.booking.com/status) di Booking.com per vedere se c'è un incidente sulle prenotazioni.

**Expedia.** Apri la pagina delle prenotazioni di Partner Central, cerca per numero di conferma o per date e annota la camera e la tariffa prenotate dall'ospite. Se è in Partner Central ma non in Little Hotelier, il buco è tra Expedia e SiteMinder: verifica che SiteMinder sia ancora il tuo fornitore di connettività sia per le tariffe sia per le prenotazioni, e che la tariffa sia mappata.

In entrambi i casi Little Hotelier non può contattare l'OTA al posto tuo. Se la mappatura è corretta e l'OTA dice di aver inviato la prenotazione, chiedi all'OTA il registro XML di consegna della prenotazione e mandalo al supporto di Little Hotelier.

## Come evitare un overbooking mentre indaghi

1. **Crea la prenotazione a mano.** In **Front Desk > Calendar** clicca sulla data di check-in, scegli **Add Reservation** e copia i dati dall'extranet. Crearla abbassa la disponibilità su tutti i canali.
2. **Ricorda che è manuale.** Anche le modifiche o le cancellazioni successive di quella prenotazione vanno fatte a mano nel Front Desk. Se l'originale arriva più tardi, controlla di non tenerle entrambe.
3. **Già al completo?** Chiedi all'OTA di trasferire l'ospite in un'altra struttura.
4. **Evita che la causa si ripresenti.** Mappa ogni tariffa che vendi, tieni d'occhio i canali disattivati e valuta uno stop sell sui canali meno importanti quando resta una sola camera.

## Il modo più veloce: ricevere un avviso quando manca una prenotazione OTA

Controllare a mano funziona quando sai già che manca una prenotazione. Il difficile è saperlo. Hotelier Tools confronta ogni 15 minuti l'elenco delle prenotazioni di Expedia con Little Hotelier e ti scrive via email per ogni prenotazione che non arriva. Per Booking.com oggi segnala gli incidenti sulle prenotazioni; il controllo prenotazione per prenotazione non è ancora finito (dettagli più sotto).

1. Collega l'extranet in **Credentials**: **Expedia Partner Central** (`/credentials/expedia-extranet`) o **Booking.com extranet** (`/credentials/booking-extranet`).
2. Mantieni attiva la sessione con **Keep Expedia signed in** (o **Keep the session signed in** per Booking.com) nella stessa pagina. Il controllo non può leggere una sessione scaduta.
3. Programma **Check Expedia reservations are in Little Hotelier** (o quello di Booking.com) dalla sua scheda, con l'impostazione consigliata: **Every 15 minutes**. Quando l'extranet è collegato e la sessione resta attiva, Hotelier Tools crea questa attività per te.
4. Assicurati che l'email arrivi alle persone giuste: **Settings > Notifications** (`/settings/notifications`). Se lì non ci sono indirizzi, va all'email di contatto del titolare.
5. Quando arriva l'email, trova la prenotazione nell'extranet, creala in Little Hotelier o chiudi la camera per quelle notti, poi correggi la causa come sopra.

Ogni esecuzione legge le prenotazioni fatte oggi e gli arrivi dei prossimi 14 giorni, e le prenotazioni di Little Hotelier. Le prenotazioni Expedia vengono abbinate tramite il codice di conferma (`EXP-` più il numero), lo stesso codice che salva Little Hotelier.

### Un avviso per prenotazione, non uno ogni 15 minuti

La consegna richiede normalmente qualche minuto, quindi una sola lettura non basta mai. Ogni prenotazione mancante finisce in un registro:

- **Avviso dopo 30 minuti, se manca in almeno due letture.** Cioè circa 30-45 minuti dopo che è stata fatta la prenotazione.
- **Un solo avviso.** L'invio viene registrato prima che l'email parta, così due esecuzioni non possono mandarla entrambe. Se l'email non è arrivata a nessuno, la registrazione viene annullata e l'esecuzione successiva riprova.
- **Un altro avviso quando è risolta.** Quando la prenotazione compare in Little Hotelier, o l'OTA la cancella, o il soggiorno è finito, ricevi un'email "no longer missing" (non manca più).
- **Nessun falso via libera.** Se un elenco non è stato letto per intero, l'esecuzione fallisce e lo dice. Nulla viene considerato controllato.

Il controllo Expedia annota anche le differenze di stato e di date (cancellata su Expedia ma attiva in Little Hotelier, per esempio) e le prenotazioni senza camera. Compaiono nel riepilogo dell'esecuzione in **Run History** (`/cron-logs`).

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="Calendario delle prenotazioni di Hotelier Tools dal 4 al 17 novembre 2026: camere raggruppate per tipologia con le prenotazioni confermate e con check-in fatto come barre, una riga No room yet, la camera 104 chiusa per manutenzione e la legenda con Checked in, Checked out, Confirmed, Double booked e Room closed" caption="Il calendario segna come Double booked due prenotazioni nella stessa camera, così un overbooking già avvenuto salta subito all'occhio." path="/reservations/calendar"}
::

### Booking.com: gli avvisi sugli incidenti funzionano, il controllo prenotazione per prenotazione non è finito

Prima di leggere l'extranet, il controllo Booking.com legge la pagina di stato pubblica di Booking.com. Un incidente sulla sua API delle prenotazioni ti viene segnalato via email una volta quando si apre e una volta quando è risolto, anche se la sessione dell'extranet è scaduta. È proprio il momento in cui nessun altro se ne accorgerebbe.

Il confronto prenotazione per prenotazione per Booking.com **non funziona ancora**. L'Extranet disegna l'elenco delle prenotazioni con uno script, quindi la pagina che riceve Hotelier Tools ha la tabella senza righe. Invece di dire "tutto a posto" su prenotazioni che nessuno ha visto, il controllo fallisce in modo evidente a ogni esecuzione finché quell'elenco non si potrà leggere. Per ora l'avviso per singola prenotazione funziona per Expedia, e Booking.com ti dà gli avvisi sugli incidenti.

### Cosa non fa mai

- **È in sola lettura** su ogni lato. Non crea, modifica né chiude mai una prenotazione, e non chiude mai una camera al posto tuo.
- **Solo due OTA.** Airbnb, Hostelworld e gli altri non vengono controllati.
- **Non sostituisce la mappatura.** Se una tariffa non è mappata, devi comunque correggerla in Little Hotelier.

## Email più rare e più utili dagli altri controlli

La stessa regola vale per gli altri avvisi di Hotelier Tools. In **Automated Checks** (`/automated-checks`) imposta **Send email on** di un'attività su **Only with new or changed issues**: il report conterrà solo i problemi che nessun report precedente aveva segnalato, o che sono cambiati. E quando una persona segna un problema come risolto in **Issues** (`/automated-checks/issues`), resta risolto anche se il controllo continua a trovare la stessa cosa. Un problema diverso apre una nuova segnalazione.

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="Pagina Issues di Hotelier Tools: l'introduzione in quattro passaggi (un controllo trova un problema, viene elencato per prenotazione, lo correggi in Little Hotelier, Verify lo ricontrolla), i contatori 21 aperti, 5 risolti e 26 in totale, i filtri e un errore do-not-rebook su una prenotazione con il pulsante Verify" caption="I problemi trovati dai controlli programmati, raggruppati per prenotazione. Il Resolved di una persona resta finché qualcosa non cambia." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Tutti i controlli sono nella [pagina Automated checks](/tools/bot/automated-checks).

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da Booking.com, Expedia, SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e con i tuoi login degli extranet.
::

Guide correlate: [la checklist quotidiana della reception](/blog/hotel-front-desk-checklist-automation), [il calendario delle prenotazioni di Little Hotelier](/blog/little-hotelier-reservation-calendar), [i link di pagamento di Little Hotelier](/blog/little-hotelier-payment-links).

## Riepilogo

- Una prenotazione OTA mancante di solito significa una tariffa non mappata o disattivata, un codice struttura sbagliato o una consegna non riuscita.
- Controlla **My apps > Channel Manager > Reservations**: una **FAILED** si reinvia con **Resend PMS message**; **nessuno stato** significa che la tariffa non è mappata.
- Prima proteggi la camera: aggiungi la prenotazione a mano in **Front Desk > Calendar**, poi correggi la causa.
- Hotelier Tools confronta Expedia con Little Hotelier ogni 15 minuti e ti scrive una sola volta per ogni prenotazione mancante, oltre agli incidenti sulle prenotazioni di Booking.com. Il controllo prenotazione per prenotazione di Booking.com non è ancora finito.
