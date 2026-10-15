---
title: "Una lista d'attesa per le date esaurite in Little Hotelier"
---

La lista d'attesa, chiamata **Availability Queue** nella dashboard, tiene d'occhio i soggiorni per cui sei al completo e controlla Little Hotelier con una pianificazione. Quando ogni camera richiesta è libera in ogni notte, l'ospite, il tuo team o entrambi ricevono un solo messaggio via email o WhatsApp, con un link di prenotazione diretta.

## Come funziona

1. **Aggiungi un soggiorno da monitorare.** In `/availability-watch`, scegli la prima e l'ultima notte, le camere necessarie e, facoltativamente, le tipologie di camera. Un gruppo misto può chiedere numeri diversi per tipologia di camera.
2. **Scegli chi viene avvisato.** Aggiungi il contatto dell'ospite e il tuo. Scegli gli avvisi: **available** (tutte le camere libere, che chiude il monitoraggio), **partial** (meno camere di quelle richieste, per impostazione predefinita solo per la struttura) o **expiring** (il soggiorno inizia entro 48 ore e non è stato trovato nulla).
3. **Pianifica il controllo.** Premi **Check every night at 01:00**, oppure scegli qualsiasi frequenza da ogni 20 minuti a una volta al giorno. **Check the queue now** lo esegue subito.
4. **Un messaggio per ogni monitoraggio.** Decide la notte più debole: un soggiorno è libero solo quando ogni notte ha le camere. Dopo l'invio del messaggio, la voce si chiude e **History** conserva il testo esatto inviato.
5. **Lascia che gli ospiti si iscrivano.** La **Public waiting-list page** (`/availability-watch/public`) è un modulo che inserisci come link nel tuo sito. Gli ospiti scelgono le notti, lasciano un'email e spuntano una casella di consenso.

Un metodo con foglio di calcolo e le regole su chi ha la precedenza sono in [come gestire una lista d'attesa per le date esaurite](/blog/hotel-waitlist-sold-out-dates).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**.
- Il controllo pianificato. Non viene controllato nulla finché quell'attività non esiste.
- Per i messaggi WhatsApp, un numero WhatsApp collegato.
- La tua ragione sociale e il tuo indirizzo nella scheda della struttura, perché l'informativa sulla privacy del modulo pubblico viene costruita a partire da essi.

## Limiti e da sapere

- **Stato: beta.**
- **Nulla viene trattenuto.** La lista d'attesa non riserva mai una camera né modifica una prenotazione. Il primo ospite che prenota ottiene la camera.
- **Un controllo notturno può arrivare in ritardo.** Controlla più spesso in alta stagione.
- **La pagina pubblica è disattivata finché non la apri.** Per impostazione predefinita chiede agli ospiti di confermare l'email e accetta soggiorni fino a 14 notti e 2 camere per richiesta. Limita l'elenco a 100 persone in attesa e 40 iscrizioni al giorno. I dati di contatto vengono rimossi dalle voci chiuse dopo 90 giorni.
- **Alimenta i tuoi prezzi.** Ogni gruppo in attesa aumenta del 3% il [prezzo consigliato](/tools/bot/dynamic-pricing) di quella notte, fino al 12%.
