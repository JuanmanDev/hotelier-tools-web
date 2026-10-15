---
title: "Fatture in blocco e fatture al check-out per Little Hotelier"
---

La fatturazione crea in una sola esecuzione le fatture di Little Hotelier mancanti per un intervallo di date e ti dà ogni trimestre come uno ZIP di PDF più un riepilogo CSV per il tuo commercialista. Può anche far inviare automaticamente da Little Hotelier la fattura all'ospite per email, una volta effettuato il check-out.

## Come funziona

1. **Genera un periodo.** In **Invoice Download** (`/invoices`), premi **Generate invoices** e scegli le date, per esempio dal 1° luglio al 30 settembre. Hotelier Tools legge quelle prenotazioni e chiede a Little Hotelier di generare una fattura per ogni soggiorno idoneo.
2. **Le fatture a rischio vengono rifiutate.** Un controllo preliminare blocca un soggiorno senza check-out, una fattura aziendale senza partita IVA o indirizzo fiscale, una partita IVA malformata e un soggiorno già fatturato.
3. **Nulla viene saltato in silenzio.** Ogni rifiuto finisce in **Errors** (`/invoices/errors`) con il suo motivo. Sistema la prenotazione in Little Hotelier, poi controllala di nuovo.
4. **Scarica.** Le fatture sono raggruppate per trimestre e mese. Premi **ZIP** per tutti i PDF, oppure **Preview CSV** per controllare prima il riepilogo.
5. **Fattura al check-out.** In **Invoice on Leave** (`/invoice-on-leave`), segna un soggiorno una volta sola. Un'attività giornaliera (alle 16:00 per impostazione predefinita) fa generare a Little Hotelier la fattura dopo il check-out e la invia per email dal tuo modello e dal tuo mittente.

Le fatture sono documenti di Little Hotelier, quindi numerazione, logo e layout restano esattamente come sono. Guide passo passo: [scarica tutte le fatture in una volta](/blog/download-all-little-hotelier-invoices) e [invia la fattura al check-out](/blog/send-invoice-to-guest-at-checkout).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**.
- Ospiti con il check-out registrato in Little Hotelier. Se il tuo team non lo fa a mano, un'attività facoltativa di **Automatic check-out** (15:05) chiude le partenze del giorno.
- Ragione sociale, partita IVA e indirizzo fiscale nella prenotazione per gli ospiti aziendali.
- Un'email dell'ospite nella prenotazione per le fatture inviate al check-out.
- La lingua delle fatture, impostata in **Settings > Invoices**: in base al paese dell'ospite, oppure sempre la stessa, con una lingua di riserva.

## Limiti e da sapere

- **Stato:** download in blocco, controlli preliminari, errori e lingua sono stabili. La fattura al check-out è in beta.
- L'attività di check-out guarda indietro di 8 giorni per recuperare le esecuzioni saltate e legge fino a 100 check-out per esecuzione. Un soggiorno passato senza email dell'ospite viene segnalato una volta, non riprovato ogni giorno.
- Non esiste una funzione VeriFactu. In Spagna, tieni quel passaggio in Little Hotelier.
