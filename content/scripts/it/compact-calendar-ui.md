---
title: "Interfaccia Calendario Compatta"
description: "Rende compatto il calendario di Little Hotelier: date su una riga invece di tre e righe delle tipologie più sottili, per vedere più camere e giorni insieme."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Questo script elimina gli spazi vuoti dal calendario di Little Hotelier, così più camere stanno nello schermo senza scorrere. È pensato per il personale della reception che tiene il calendario aperto tutto il giorno e vuole vedere tutta la struttura, o quasi, a colpo d'occhio.

## Il problema che risolve

Il calendario standard usa molto spazio verticale prima che compaia la prima prenotazione. L'intestazione di ogni giorno impila le informazioni su tre righe, ogni tipologia di camera ha una propria riga di titolo alta e la barra di navigazione e dei filtri aggiunge margini extra. Sullo schermo di un portatile questo spinge le camere fuori vista, e bisogna scorrere su e giù per controllare la disponibilità mentre un ospite aspetta.

## Cosa cambia

Tutte le modifiche sono visive, fatte con stili aggiunti alla pagina:

- **Intestazioni delle date:** il giorno della settimana e la data stanno affiancati su una sola riga invece di essere impilati su tre.
- **Cella in alto a sinistra:** l'altezza è limitata, così la riga dell'intestazione resta bassa.
- **Righe di titolo delle tipologie di camera:** più basse, con sfondo trasparente e senza bordi, così occupano meno spazio tra le camere.
- **Pulsante per espandere o comprimere tutto:** padding e margini vengono rimossi.
- **Navigazione e filtri:** si riducono i margini sopra la navigazione delle date e sotto le opzioni dei filtri.

Le barre delle prenotazioni e le righe delle camere non cambiano. Cambiano solo gli spazi e la disposizione dell'intestazione.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e poi ricarica il calendario. Le immagini passo passo sono nella [guida all'installazione](/tools/ui/instructions). Lo script corrisponde a app.littlehotelier.com e application.littlehotelier.com, ma i suoi stili agiscono solo sulla tabella del calendario e sulla sua barra degli strumenti. È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Da sapere

- Aggiunge i suoi stili una sola volta, quando la pagina si carica. Non legge né memorizza alcun dato delle prenotazioni.
- Non cambia il numero di giorni mostrati. Per quello usa le opzioni di intervallo date di Little Hotelier.
- Funziona allo stesso modo con il mouse o su uno schermo touch.
- Funziona insieme a [Prices Display](/tools/ui/prices-display), che scrive il prezzo di ogni notte sotto ogni tipologia di camera nello stesso calendario.
- Se Little Hotelier cambia il layout del calendario, alcune modifiche potrebbero smettere di applicarsi finché lo script non viene aggiornato. Disattivalo dal menu di Tampermonkey se qualcosa non ti sembra corretto.

## Correlati

- [Prices Display](/tools/ui/prices-display)
- [Trucchi e funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
