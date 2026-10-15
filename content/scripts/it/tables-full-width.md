---
title: "Tabelle Larghezza Completa"
description: "Fa usare alle tabelle dell'extranet Direct Booking di Little Hotelier tutta la larghezza dello schermo ed evidenzia la riga sotto il mouse per leggere meglio."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Questo script allarga le tabelle dell'extranet Direct Booking di Little Hotelier, il back office del motore di prenotazione su app.thebookingbutton.com, in modo che usino tutta la larghezza dello schermo. È pensato per titolari e personale che controllano lì prenotazioni dirette, report e inventario su un portatile o un monitor grande.

## Il problema che risolve

Direct Booking mantiene le sue pagine in una colonna di larghezza fissa. Gli elenchi delle prenotazioni e i report vengono compressi in quella colonna, i nomi degli ospiti sono tagliati e, su un monitor largo, metà dello schermo resta vuota mentre scorri di lato in una tabella. Anche seguire una riga di una tabella lunga senza perdere il segno è difficile.

## Cosa cambia

Nelle pagine dell'extranet di Direct Booking:

- **Area principale del contenuto:** non ha più larghezza fissa, quindi le tabelle si estendono su tutto lo schermo.
- **Elenco delle prenotazioni:** la colonna del nome dell'ospite non ha più un limite di larghezza, così si vedono i nomi completi.
- **Contenitore principale:** può usare tutta la larghezza della finestra.
- **Report:** usano tutta la larghezza della pagina.
- **Inventory:** ottiene una larghezza massima maggiore ed è centrato, così non si allunga troppo sugli schermi molto larghi.
- **Evidenziazione delle righe:** nelle tabelle di dati, la riga sotto il puntatore del mouse ottiene uno sfondo grigio chiaro, che facilita la lettura lungo la riga.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Direct Booking. La [guida all'installazione](/tools/ui/instructions) ha le immagini passo passo. Lo script funziona solo nelle pagine dell'extranet di Direct Booking (app.thebookingbutton.com/extranet/...), quindi Front Desk non è interessato. È gratuito e open source: [guarda il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Da sapere

- Su un piccolo portatile o un tablet la differenza è minima, perché la pagina riempie già lo schermo.
- L'evidenziazione delle righe segue il puntatore del mouse, quindi è utile soprattutto su un computer.
- Aggiunge solo regole di stile quando la pagina si carica. Non memorizza nulla e non invia nulla da nessuna parte.
- Per lo stesso effetto nella pagina Reservations di Front Desk, installa [Full Width Reservation Table](/tools/ui/full-width-reservation-table).
- Se Little Hotelier ridisegna Direct Booking, alcune di queste modifiche potrebbero smettere di applicarsi finché lo script non viene aggiornato.

## Correlati

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
