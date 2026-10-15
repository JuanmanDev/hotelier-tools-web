---
title: "Aggiorna Numero Adulti"
description: "Imposta gli adulti a 2 quando il modulo di prenotazione di Little Hotelier si apre con 0, così alla reception non si salva una prenotazione senza ospiti."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Questo script cambia il numero predefinito di adulti in una nuova prenotazione di Little Hotelier da 0 a 2. È pensato per il personale della reception che crea a mano prenotazioni di passaggio e telefoniche, dove la maggior parte delle prenotazioni è per due persone e un campo adulti dimenticato crea problemi più avanti.

## Il problema che risolve

Quando crei una prenotazione in Front Desk, il campo adulti può partire da 0. Se nessuno lo cambia, la prenotazione viene salvata senza adulti. Zero adulti può falsare la registrazione degli ospiti, il conteggio delle colazioni e qualsiasi tassa di soggiorno addebitata per persona, e correggerlo dopo significa trovare e riaprire ogni prenotazione.

## Cosa cambia

- Quando una pagina di prenotazione si carica, lo script controlla il campo del **numero di adulti**.
- Se è 0, lo script lo imposta a 2 e comunica a Little Hotelier che il valore è cambiato, come se lo avessi digitato tu.
- Se contiene qualsiasi altro numero, lo lascia com'è, quindi le prenotazioni esistenti non vengono toccate.
- Prima di salvare puoi comunque cambiare il valore in 1, 3 o qualsiasi altro numero.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com e agisce solo quando il campo adulti è presente nella pagina. È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Da sapere

- Il valore 2 è fisso nel codice. Se la tua struttura vende soprattutto camere singole o posti letto, modifica il numero nell'editor di Tampermonkey.
- Il controllo viene eseguito una sola volta, mezzo secondo dopo il caricamento della pagina. Se un modulo di prenotazione si apre più tardi senza ricaricare la pagina, il campo non viene cambiato.
- Cambia solo il campo nel modulo. Non viene salvato nulla finché non premi Save.
- Il numero di bambini non viene modificato.
- Funziona allo stesso modo su desktop e schermi touch. Non memorizza nulla e non invia nulla da nessuna parte.

## Correlati

- [Checklist quotidiana della reception per Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Trucchi e funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips)
