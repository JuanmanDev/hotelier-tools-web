---
title: "Controlli automatici delle prenotazioni per Little Hotelier"
---

I controlli automatici leggono le tue prenotazioni di Little Hotelier in cinque momenti del soggiorno e segnalano ciò che va sistemato: nessuna camera assegnata, un saldo non pagato, un documento d'identità o un indirizzo mancante, o un ospite nella tua lista da non riprenotare. I problemi finiscono in un'unica pagina Issues e ogni esecuzione ti invia un report via email.

## Come funziona

Ogni momento è un'attività pianificata a sé, che legge un diverso insieme di prenotazioni:

- **Dopo una prenotazione:** prenotate ieri e oggi. Controlla camera, documento, indirizzo e lista da non riprenotare.
- **Prima dell'arrivo:** check-in da oggi fino a 7 giorni avanti (regolabile da 1 a 60). Controlla camera, pagamento e lista da non riprenotare.
- **All'arrivo:** check-in oggi. Controlla documento, indirizzo e camera.
- **Durante il soggiorno:** check-in negli ultimi 7 giorni (regolabile). Controlla documento e indirizzo.
- **Alla partenza:** check-out oggi. Controlla documento, indirizzo e saldo.

Apri un momento in **Automated Checks** (`/automated-checks`), attiva o disattiva i suoi controlli e premi **Save and activate task**. I problemi compaiono in `/automated-checks/issues`, raggruppati per prenotazione. Sistema la prenotazione in Little Hotelier e premi **Verify**: i controlli vengono eseguiti di nuovo su quella singola prenotazione e il problema si chiude.

La **Do-not-rebook list** (`/automated-checks/watchlist`) confronta ogni notte le nuove prenotazioni e i prossimi arrivi con gli ospiti che hai segnalato. Una corrispondenza diventa un problema e una riga nel report.

La routine completa è in [la checklist della reception](/blog/hotel-front-desk-checklist-automation). Come mantenere la lista conforme alla legge è nella [guida alla lista degli ospiti da non ospitare](/blog/hotel-do-not-rent-list).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**.
- Un momento attivato per iniziare. **Before they arrive** è il primo consigliato, perché individua un soggiorno senza camera quando c'è ancora tempo per assegnarla.
- I destinatari dei report, impostati in **Settings > Notifications** (`/settings/notifications`).

## Limiti e da sapere

- **Stato: beta.**
- **Segnalano soltanto.** Nessun controllo modifica, annulla o addebita una prenotazione, e una corrispondenza nella lista da non riprenotare non rifiuta mai un ospite. L'eccezione è il check-out automatico facoltativo, che scrive su Little Hotelier ed è disattivato per impostazione predefinita.
- **Al massimo una volta all'ora per attività**, perché ogni esecuzione accede a Little Hotelier.
- **Tre controlli restano manuali:** carte Booking.com non valide, numero di ospiti e orari di arrivo. Vedi [cosa fare con una carta non valida o un no-show](/blog/booking-com-invalid-card-no-show).
- Se la password di Little Hotelier scade, le attività si mettono in pausa invece di riprovare finché non salvi quella nuova.
