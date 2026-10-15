---
title: "Checklist reception hotel per Little Hotelier: 8 problemi da individuare prima dell'arrivo"
seoTitle: "Checklist reception hotel per Little Hotelier"
description: "Checklist quotidiana per la reception con Little Hotelier: 8 problemi da individuare prima dell'arrivo, dove vederli e come automatizzarne cinque."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checklist reception hotel, checklist check-in hotel, modello checklist reception hotel, checklist reception little hotelier, prenotazioni senza camera little hotelier, automazione reception hotel]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Pagina Automated Checks di Hotelier Tools: come funzionano i controlli in quattro passaggi, un avviso Nothing runs any check yet che suggerisce Before they arrive e l'animazione The journey of a reservation con le sue cinque fasi"
faq:
  - q: "Cosa deve controllare ogni giorno la reception di un hotel?"
    a: "Per gli arrivi di oggi e di domani: camera assegnata, saldo pagato, carta valida, documento d'identità, indirizzo, numero corretto di ospiti, orario di arrivo e nessuna corrispondenza con la tua lista do-not-rebook. Per le partenze di oggi: il saldo e tutto ciò che serve alla fattura."
  - q: "Come trovo le prenotazioni senza camera in Little Hotelier?"
    a: "Apri Front Desk > Reservations, filtra per data di check-in e cerca la colonna Room vuota. Il Calendar mostra anche in alto un contatore delle prenotazioni non assegnate."
  - q: "Con che frequenza possono girare i controlli automatici?"
    a: "Ogni attività di controllo ha una sua pianificazione. Quelle consigliate girano una volta al giorno e un'attività può girare al massimo una volta all'ora, perché ogni esecuzione accede a Little Hotelier."
  - q: "Hotelier Tools modifica o cancella le mie prenotazioni?"
    a: "No. I controlli generano solo avvisi. L'unica eccezione è il check-out automatico, che scrive su Little Hotelier ed è spento finché non lo attivi."
  - q: "Posso stampare questa checklist?"
    a: "Sì. Copia la tabella di questa guida in un documento, oppure esporta in CSV gli arrivi filtrati da Front Desk > Reservations e stampa quello."
  - q: "Hotelier Tools fa parte di Little Hotelier?"
    a: "No. È una dashboard indipendente, non affiliata né approvata da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura."
---

Ogni giorno controlla otto cose sugli arrivi di oggi e di domani: camera assegnata, saldo pagato, carta valida, documento d'identità, indirizzo, numero corretto di ospiti, orario di arrivo e nessuna corrispondenza con la tua lista do-not-rebook. In Little Hotelier la maggior parte sta in una sola schermata: **Front Desk > Reservations**, filtrata per data di check-in. Hotelier Tools ne esegue cinque su otto in automatico in cinque momenti del soggiorno e ti scrive via email solo ciò che va corretto.

## Gli 8 problemi delle prenotazioni da individuare prima che l'ospite arrivi

1. **Nessuna camera assegnata.** Una prenotazione senza numero di camera passa facilmente inosservata finché l'ospite non è già alla reception.
2. **Saldo da pagare.** Vuoi sapere prima dell'arrivo se incassare, sollecitare una caparra o inviare un link di pagamento.
3. **Carta non valida su una prenotazione Booking.com.** Booking.com concede all'ospite una scadenza per aggiornare la carta, quindi accorgertene tardi ti toglie opzioni.
4. **Documento d'identità mancante.** In molti paesi serve per la registrazione degli ospiti, per esempio per Alloggiati Web in Italia. Vedi [regole di registrazione degli ospiti per paese](/blog/guest-registration-rules-by-country).
5. **Indirizzo o paese mancante.** Serve per la registrazione, per le statistiche ufficiali (come l'indagine INE spagnola o la comunicazione ISTAT) e per una fattura corretta.
6. **Numero di ospiti sbagliato.** Zero adulti, o due ospiti in una prenotazione per quattro, possono falsare registrazione, colazione e l'eventuale imposta di soggiorno calcolata a persona.
7. **Nessun orario di arrivo.** Arrivi tardivi e self check-in richiedono un piano il giorno prima.
8. **Un ospite a cui hai chiesto di non tornare.** Meglio saperlo prima che arrivi. Vedi [come tenere una lista nera degli ospiti](/blog/hotel-do-not-rent-list).

Copia questa tabella e usala come checklist da stampare:

| Controllo | Dove guardare in Little Hotelier | Automatizzato in Hotelier Tools |
|---|---|---|
| Camera assegnata | Colonna **Room** in Reservations; contatore delle non assegnate nel Calendar | Sì |
| Saldo pagato | Colonna **Outstanding** in Reservations | Sì |
| Carta valida (Booking.com) | Channel Manager > prenotazione > **Manage Reservation** | No |
| Documento d'identità | Prenotazione > scheda **Guests** | Sì |
| Indirizzo e paese | Prenotazione > schede **Details** e **Guests** | Sì |
| Numero di ospiti | Colonna **Occupants** in Reservations | No |
| Orario di arrivo | Colonna **ETA** in Reservations | No |
| Corrispondenza do-not-rebook | La tua lista | Sì |

## Come controllarli in Little Hotelier senza aprire ogni prenotazione

1. Vai su **My Apps > Front Desk > Reservations**.
2. Imposta il tipo di data su **Check-in date**, scegli oggi e domani (o i prossimi sette giorni), imposta lo stato su **Confirmed** e clicca su **Search**.
3. Scorri le colonne: una **Room** vuota, il numero di **Occupants**, un **ETA** in bianco e qualsiasi valore in **Outstanding**.
4. Lo vuoi su carta? Clicca su **Export** per un CSV. I numeri di telefono degli ospiti sono esclusi dal file per motivi di sicurezza.

Fonte: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

Documenti e indirizzi sono la parte lenta. Si trovano nelle schede **Details** e **Guests** di ogni prenotazione ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), quindi devi aprire ogni arrivo.

### Carte Booking.com non valide

In Little Hotelier apri la prenotazione in **Channel Manager > Reservations**, vai alla scheda **Manage Reservation** e clicca su **Report payment card as invalid to Booking.com** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

A ottobre 2026 l'ospite ha poi 24 ore per aggiornare la carta. Per le prenotazioni fatte entro 48 ore dal check-in sono 12 ore, oppure fino alle 15:00 del giorno del check-in, a seconda di quale scade prima. Se non lo fa, puoi cancellare fino alle 15:00 (ora locale) del giorno del check-in ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). Per questo le carte vanno nella lista della sera prima. Guida completa: [Booking.com carta non valida o no-show](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Script gratuiti che rendono più veloce questa schermata"}
[Full Width Reservation Table](/tools/ui/full-width-reservation-table) mostra tutte le colonne senza scorrere in orizzontale. [Update Number Adults](/tools/ui/update-number-adults) imposta le nuove prenotazioni su 2 adulti, così uno 0 non passa inosservato. Altri script in [estensioni Chrome gratuite per Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## La sera prima o lo stesso giorno: quando eseguire ogni controllo

Alcuni problemi richiedono tempo per essere risolti (una carta, una camera), altri si possono verificare solo quando l'ospite è davanti a te (il documento). Hotelier Tools divide il soggiorno in cinque momenti, ciascuno con la sua attività programmata:

| Momento | Prenotazioni che legge | Cosa controlla |
|---|---|---|
| Dopo la prenotazione | Prenotate ieri e oggi | Camera, documento, indirizzo, lista do-not-rebook |
| Prima dell'arrivo | Check-in da oggi fino a 7 giorni (1–60, a tua scelta) | Camera, pagamento, lista do-not-rebook |
| All'arrivo | Check-in oggi | Documento, indirizzo, camera |
| Durante il soggiorno | Check-in negli ultimi 7 giorni (modificabile) | Documento, indirizzo |
| Alla partenza | Check-out oggi | Documento, indirizzo, saldo |

Una regola semplice: camere, pagamenti e carte la sera prima; documento e indirizzo il giorno dell'arrivo; il saldo il giorno della partenza.

## Come automatizzare la checklist con Hotelier Tools

1. Registrati su [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) e collega Little Hotelier in **Credentials**.
2. Apri **Automated Checks** (`/automated-checks`). Se non gira ancora nulla, la pagina suggerisce di iniziare da **Before they arrive**: individua un soggiorno senza camera quando c'è ancora tempo per assegnarla.
3. Apri un momento, attiva o disattiva i suoi controlli e premi **Save and activate task**. Si crea così l'attività programmata con la pianificazione consigliata, per esempio ogni notte alle 23:30 per "After a booking is made".
4. I problemi compaiono in **Issues** (`/automated-checks/issues`), raggruppati per prenotazione. Filtra per problemi aperti, tipo di controllo o date del soggiorno.
5. Correggi la prenotazione in Little Hotelier, poi premi **Verify**. I controlli vengono rieseguiti su quella singola prenotazione e il problema si chiude una volta risolto.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="Momento When they arrive in Hotelier Tools: la scheda dell'attività non ancora configurata con Every 3 hours, Choose e Run now, il pulsante Save and activate task e i controlli ID / passport (police register), physical room assignment e address and origin validation attivati" caption="Ogni momento del soggiorno ha i suoi controlli e la sua pianificazione. Qui, When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Pagina Issues con 20 problemi aperti, 5 risolti e 25 in totale, filtri per problemi aperti, tipo di controllo e date del soggiorno, e prenotazioni elencate con un avviso di saldo da pagare all'arrivo e un pulsante Verify" caption="I problemi raggruppati per prenotazione. Correggili in Little Hotelier, poi premi Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## Come si presenta il report via email

Ogni esecuzione invia **un'email di report per attività**, nella lingua che imposti per quell'attività: un riepilogo chiaro di ciò che l'esecuzione ha trovato, facile da leggere sul telefono. Ogni problema è anche in **Issues**, quindi l'email è il tuo promemoria e la dashboard è il posto in cui intervieni. I destinatari condivisi, come il titolare e la reception, si impostano in **Settings > Notifications** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Pagina delle impostazioni Report recipients in Hotelier Tools con un indirizzo condiviso nel campo Addresses, un indirizzo suggerito da aggiungere e la nota che il report di ogni attività programmata va a questo elenco, a meno che l'attività non indichi il proprio" caption="La pagina Report recipients in Settings: gli indirizzi condivisi ricevono l'email di report di ogni attività di controllo." path="/settings/notifications"}
::

## Limiti e cosa i controlli non cambiano mai

- **Avvisano e basta.** Nessun controllo modifica, cancella o addebita una prenotazione. L'eccezione è il **check-out automatico** facoltativo, che scrive su Little Hotelier ed è spento per impostazione predefinita.
- **Al massimo una volta all'ora per attività.** Ogni esecuzione accede a Little Hotelier, quindi l'intervallo minimo è di 60 minuti.
- **Si mettono in pausa in sicurezza.** Se la password di Little Hotelier scade, le attività programmate si mettono in pausa da sole invece di riprovare, il che protegge il tuo account da un blocco. La dashboard mostra "Automated jobs are paused" finché non salvi la nuova password in **Credentials** o premi **Check now & resume**.
- **Tre controlli restano manuali.** Carte, numero di ospiti e orari di arrivo non vengono controllati in automatico, quindi tienili nella tua lista del mattino.

Ogni attività è elencata in **Cron Jobs** (`/cron`) e ogni esecuzione in **Run History** (`/cron-logs`). La funzione è in beta. Maggiori informazioni sulla pianificazione nella [pagina Automations](/tools/bot/automations) e sull'intera funzione in [Automated checks](/tools/bot/automated-checks).

Guide correlate: [la guida a Little Hotelier](/blog/little-hotelier-tips), [l'assistente IA per la reception](/blog/ai-assistant-hotel-front-desk), [una lista d'attesa per le date esaurite](/blog/hotel-waitlist-sold-out-dates).

## Riepilogo

- Controlla otto cose prima di ogni arrivo: camera, saldo, carta, documento, indirizzo, numero di ospiti, orario di arrivo e la tua lista do-not-rebook.
- In Little Hotelier, l'elenco **Reservations** filtrato per data di check-in ne mostra quattro a colpo d'occhio; per documento e indirizzo bisogna aprire ogni prenotazione.
- Hotelier Tools controlla camera, pagamento, documento, indirizzo e lista do-not-rebook in cinque momenti del soggiorno, elenca i problemi in **Issues** e invia un report via email.
- Parti da **Before they arrive**, poi aggiungi gli altri momenti.
