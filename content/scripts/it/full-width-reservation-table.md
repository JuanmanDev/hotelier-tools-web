---
title: "Tabella Prenotazioni Larghezza Completa"
description: "Allarga l'elenco Reservations di Little Hotelier Front Desk a tutto lo schermo, fino a 2000 pixel, così le colonne entrano senza scorrere in orizzontale."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Questo script permette all'elenco Reservations di Little Hotelier Front Desk di usare tutta la larghezza del monitor. È pensato per il personale della reception e per i titolari che cercano e controllano le prenotazioni su uno schermo largo e sono stanchi di una tabella stretta al centro con spazio vuoto ai lati.

## Il problema che risolve

La pagina Reservations di Front Desk mantiene il contenuto in una colonna di larghezza fissa. Su un monitor grande la tabella delle prenotazioni viene compressa in quella colonna, quindi i nomi lunghi degli ospiti vanno a capo su più righe e alcune colonne richiedono lo scorrimento orizzontale. Finisci per scorrere di lato e in basso per controllare una sola prenotazione, mentre metà dello schermo resta vuota.

## Cosa cambia

- Nella pagina Reservations, l'intestazione della pagina, l'area del contenuto e il contenitore principale possono crescere fino a 2000 pixel di larghezza invece della larghezza fissa standard.
- La tabella si estende su tutto lo schermo, quindi le colonne hanno più spazio e i nomi lunghi degli ospiti vanno a capo meno spesso.
- Nulla viene rimosso o riordinato: le stesse colonne, gli stessi filtri e gli stessi link restano al loro posto.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica la pagina Reservations. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio con le immagini. Lo script funziona solo nelle pagine di Front Desk il cui indirizzo contiene /reservations (app.littlehotelier.com/extranet/properties/.../reservations). È gratuito e open source: [il codice è su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Da sapere

- Sugli schermi più larghi di 2000 pixel, il contenuto smette di crescere a quella larghezza.
- Su un piccolo portatile o un tablet la differenza è minima o nulla, perché la pagina riempie già lo schermo.
- Poiché corrisponde a ogni indirizzo sotto /reservations, il layout più largo si applica anche alle altre pagine di quella sezione, come una prenotazione aperta dall'elenco.
- Aggiunge solo una regola di stile quando la pagina si carica. Non memorizza nulla e non invia nulla da nessuna parte.
- Per lo stesso effetto sulle tabelle di Direct Booking, installa [Tables Full Width](/tools/ui/tables-full-width).
- Se Little Hotelier ridisegna la pagina Reservations, il layout più largo potrebbe smettere di applicarsi finché lo script non viene aggiornato.

## Correlati

- [Tables Full Width](/tools/ui/tables-full-width)
- [Esportare le prenotazioni di Little Hotelier in Excel](/blog/export-little-hotelier-reservations-excel)
- [Checklist quotidiana della reception per Little Hotelier](/blog/hotel-front-desk-checklist-automation)
