---
title: "Aggiornamento Automatico per Inattività"
description: "Ricarica Little Hotelier e Direct Booking dopo 10 minuti senza clic, scorrimento o movimenti del mouse, così la reception non ritrova mai una pagina obsoleta."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Questo script ricarica la pagina di Little Hotelier che hai aperto dopo 10 minuti di inattività. È pensato per i computer della reception dove Little Hotelier resta aperto tutto il giorno: chi torna al banco vede le prenotazioni aggiornate e una sessione funzionante, invece di una vecchia pagina che mostra errori.

## Il problema che risolve

Una pagina lasciata ferma continua a mostrare i dati caricati all'inizio. Nuove prenotazioni, cancellazioni e spostamenti di camera fatti dai canali o dai colleghi non compaiono finché qualcuno non ricarica. La sessione può anche scadere in background e il primo clic dopo una pausa fallisce. Ricaricare per abitudine è facile da dimenticare quando un ospite aspetta al banco.

## Cosa cambia

- Un timer di 10 minuti parte quando la pagina viene caricata.
- Qualsiasi clic, movimento del mouse, scorrimento o movimento touch sulla pagina fa ripartire il timer, quindi la pagina non si ricarica mai mentre qualcuno la sta usando.
- Quando passano 10 minuti senza nessuna di queste azioni, lo script ricarica lo stesso indirizzo in cui ti trovavi.
- Nient'altro nella pagina cambia: nessun pulsante o pannello nuovo.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) spiega ogni passaggio. Lo script funziona sui tre indirizzi di Little Hotelier: app.littlehotelier.com (Front Desk), application.littlehotelier.com (le schermate più recenti, come il calendario) e app.thebookingbutton.com (Direct Booking). È gratuito e open source; il [codice è su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Da sapere

- Un ricaricamento scarta tutto ciò che non è stato ancora salvato. Scrivere sulla tastiera non conta come attività: se qualcuno scrive una nota lunga per 10 minuti senza toccare il mouse, la pagina può ricaricarsi prima del salvataggio. Salva man mano.
- Il ritardo di 10 minuti è un valore fisso nello script (600 secondi). Per cambiarlo, modifica quel numero nell'editor di Tampermonkey.
- Funziona allo stesso modo su desktop e schermi touch, perché anche i movimenti e i tocchi touch contano come attività.
- Funziona in ogni pagina di Little Hotelier che corrisponde, compresi il calendario, l'elenco delle prenotazioni e Direct Booking.
- Lo script non memorizza nulla e non invia nulla da nessuna parte.

## Correlati

- [Trucchi e funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips)
- [Checklist quotidiana della reception per Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
