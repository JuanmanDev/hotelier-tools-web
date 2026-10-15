---
title: "Interfaccia Compatta Dettagli Prenotazione"
description: "Elimina il padding superfluo dalla finestra della prenotazione di Little Hotelier e allunga il riquadro dei commenti, così le note si leggono senza scorrere."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Questo script rende più compatto il layout della finestra della prenotazione in Little Hotelier Front Desk e dà più altezza al riquadro dei commenti dell'ospite. È pensato per il personale della reception che apre molte prenotazioni al giorno e vuole leggere le note lasciate da ospiti o colleghi senza scorrere dentro un riquadro piccolo.

## Il problema che risolve

I commenti dell'ospite contengono spesso le informazioni che contano al check-in: un arrivo tardivo, una culla, una richiesta di parcheggio, una ricorrenza speciale. Nella finestra standard della prenotazione il campo dei commenti è corto, quindi le note più lunghe vengono tagliate e bisogna scorrere al suo interno. Allo stesso tempo, il padding in cima alle schede e gli spazi attorno alle aree di avviso e alle linee di separazione spingono più in basso i campi utili.

## Cosa cambia

Nella schermata della prenotazione in Front Desk:

- Il riquadro di testo dei **commenti dell'ospite** è alto almeno 126 pixel, così sono visibili più righe di note contemporaneamente.
- Il padding in cima al contenuto delle schede della prenotazione viene rimosso.
- Le aree segnaposto vuote degli avvisi non aggiungono più margine.
- Le linee di separazione orizzontali perdono il margine extra.

I campi, i pulsanti e le schede restano dove sono. Cambiano solo gli spazi e l'altezza del riquadro dei commenti.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) ha le immagini per ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com e i suoi stili agiscono solo sulla finestra della prenotazione. È gratuito e open source: [il codice è su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Da sapere

- Funziona aggiungendo alcuni stili quando la pagina si carica. Non legge, non modifica e non memorizza dati delle prenotazioni.
- Le note più lunghe della nuova altezza continuano a scorrere dentro il riquadro come al solito.
- Funziona allo stesso modo su desktop e schermi touch. Per un tablet, abbinalo a [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), che ingrandisce i menu Print ed Email.
- Si abbina bene anche a [Easy Save Province and Country](/tools/ui/easy-save-province-country), che lavora sui moduli degli ospiti della stessa finestra.
- Se Little Hotelier cambia la finestra della prenotazione, alcune modifiche agli spazi potrebbero smettere di applicarsi finché lo script non viene aggiornato.

## Correlati

- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens)
- [Checklist quotidiana della reception per Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
