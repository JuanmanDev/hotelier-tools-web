---
title: "Attività pianificate per Little Hotelier, con il registro di ogni esecuzione"
---

Le automazioni sono le attività pianificate alla base di Hotelier Tools: controlli sulle prenotazioni, fatture al check-out, aggiornamento dei prezzi della concorrenza, controllo della lista d'attesa e lettura della posta in arrivo vengono eseguiti da soli, con la pianificazione che scegli. Ogni esecuzione viene registrata e gli errori arrivano alla tua email.

## Come funziona

1. **Ogni funzione crea la sua attività.** Raramente parti da una pianificazione vuota. Per esempio:
   - Controlli automatici: **Save and activate task** imposta la pianificazione consigliata, come ogni notte alle 23:30 per le nuove prenotazioni.
   - Fattura al check-out: **Create the daily task (16:00, after check-out)**.
   - Check-out automatico: **Create the daily task (15:05)**.
   - Lista d'attesa: **Check every night at 01:00**.
   - Pilota automatico dei prezzi: ogni 3 ore è il valore suggerito.
   - Posta in arrivo degli ospiti: la tua pagina FAQ può essere riletta ogni ora.
2. **Regola la pianificazione.** Esegui un'attività subito, ogni pochi minuti, ogni giorno, ogni settimana o ogni mese, entro i limiti di ciascuna funzione.
3. **Leggi cosa è successo.** **Cron Jobs** (`/cron`) elenca ogni attività e **Run History** (`/cron-logs`) offre un riepilogo leggibile di ciò che ha fatto ogni esecuzione.
4. **Ricevi il report.** Attività come i controlli sulle prenotazioni inviano un'email di report a ogni esecuzione. I destinatari condivisi si impostano in **Settings > Notifications**.

Vedi le attività all'opera in [la checklist della reception](/blog/hotel-front-desk-checklist-automation), [inviare la fattura al check-out](/blog/send-invoice-to-guest-at-checkout) e [la lista d'attesa per le date esaurite](/blog/hotel-waitlist-sold-out-dates).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**. Ogni esecuzione accede con quelle credenziali.
- La funzione alla base dell'attività configurata prima, come i controlli che vuoi o le date che monitori.

## Limiti e da sapere

- **Stato: beta.**
- **Pausa di sicurezza.** Se la password di Little Hotelier scade, le attività si mettono in pausa invece di riprovare, così l'account non viene mai bloccato. La dashboard mostra che le attività automatiche sono in pausa finché non salvi la nuova password in **Credentials** o premi **Check now & resume**.
- **Gli intervalli minimi cambiano da attività ad attività.** I controlli sulle prenotazioni vengono eseguiti al massimo una volta all'ora per attività, il controllo della lista d'attesa al massimo ogni 20 minuti e il pilota automatico dei prezzi non più spesso che ogni 3 ore.
- **Un'attività fa solo ciò che fa la sua funzione.** I controlli segnalano soltanto. Il check-out automatico scrive su Little Hotelier, quindi resta disattivato finché non lo crei.
- **Gli assistenti IA possono gestire le attività.** Tramite il [server MCP](/tools/bot/api-mcp), Claude o ChatGPT possono leggere e modificare le attività pianificate.
- **Nessun webhook in uscita.** I tuoi script hanno bisogno di un proprio scheduler, come un cron job.
