---
title: "Un'unica posta in arrivo per WhatsApp, email e Booking.com"
---

La posta in arrivo degli ospiti riunisce i messaggi di WhatsApp, email e Booking.com in un unico elenco, con la prenotazione di Little Hotelier accanto a ogni conversazione. Un'IA prepara ogni risposta a partire dalle tue FAQ e dalle note sulla struttura e, per impostazione predefinita, una persona la approva prima che venga inviato qualsiasi cosa.

## Come funziona

1. **Collega i tuoi canali.** Booking.com tramite **Credentials > Booking.com extranet** con il tuo accesso partner e il secondo fattore. Email da Google, Microsoft o qualsiasi account IMAP/SMTP. WhatsApp tramite una sessione WhatsApp Web (WAHA).
2. **I messaggi arrivano accanto alla prenotazione.** Una conversazione di Booking.com viene collegata automaticamente alla sua prenotazione. Le domande degli ospiti (Q&A) dalla tua pagina Booking.com arrivano nella stessa posta in arrivo.
3. **Scegli una modalità di risposta per account** in **Channels** (`/messaging/channels`): **Off**, **Draft** (l'impostazione predefinita, non succede nulla finché non approvi), **Automatic reply** dopo un ritardo che scegli tu, oppure **Autonomous**.
4. **Insegnale le tue risposte.** In **FAQ & knowledge** (`/messaging/faq`), aggiungi la tua pagina FAQ o un testo e note sulla struttura come wifi e parcheggio. Correggi una risposta una volta sola e l'assistente impara da essa.
5. **Le richieste di fattura vengono riconosciute senza IA.** I messaggi di richiesta di fattura di Booking.com propongono di iscrivere il soggiorno alla fattura al check-out.

Dettagli di configurazione per ogni canale: [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier) e [gestire i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages).

## Cosa ti serve

- Little Hotelier collegato in **Credentials** e la scheda della tua struttura compilata in `/settings/property`.
- Per WhatsApp, un server WAHA: il suo indirizzo, un nome di sessione e una chiave API.
- Crediti IA. Ogni messaggio che l'IA legge e di cui prepara una bozza li usa, e sono mostrati in **AI credits** (`/messaging/credits`).

## Limiti e da sapere

- **Stato: alpha.** È una versione iniziale e cambia spesso.
- **Booking.com resta inviato da una persona.** L'IA non invia mai da sola agli ospiti di Booking.com. L'invio della tua risposta approvata a Booking.com dalla posta in arrivo non è ancora garantito: copiala nell'Extranet o in Pulse.
- **L'IA per gli ospiti non ha strumenti.** Restituisce un piano scelto da un elenco chiuso e non può mai annullare, cambiare date o toccare i pagamenti.
- **Vede una prenotazione solo per un mittente verificato:** un telefono che corrisponde alle ultime 8 cifre, l'email esatta o una conversazione di Booking.com.
- **Un servizio che non hai indicato** riceve la risposta "da confermare", mai un sì.
- **WhatsApp tramite WAHA non è l'API ufficiale.** Un numero usato in questo modo potrebbe essere bloccato, quindi rispondi solo agli ospiti che scrivono per primi. Le chat di gruppo vengono ignorate.
- Le risposte automatiche si fermano a 4 all'ora o 12 al giorno.
