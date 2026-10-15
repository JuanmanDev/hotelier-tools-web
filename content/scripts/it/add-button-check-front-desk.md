---
title: "Aggiungi Pulsante Verifica Front Desk da Direct Booking"
description: "Aggiunge alle prenotazioni di Direct Booking un pulsante che apre la stessa prenotazione in Front Desk, per vederne i dettagli e gli eventuali rimborsi."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Questo script aggiunge a ogni prenotazione dell'extranet Direct Booking di Little Hotelier un pulsante che apre la stessa prenotazione in Front Desk, in una nuova scheda. È pensato per il personale della reception e per i titolari che gestiscono prenotazioni dirette e devono controllare la prenotazione completa o verificare un rimborso senza cercarla a mano.

## Il problema che risolve

Direct Booking (il back office del motore di prenotazione su app.thebookingbutton.com) e Front Desk sono schermate separate. Quando un ospite che ha prenotato sul tuo sito chiama per una modifica o un rimborso, trovi la prenotazione in Direct Booking, ma camera, pagamenti e dati dell'ospite sono in Front Desk. Senza lo script, copi il riferimento, passi a Front Desk e cerchi a mano.

## Cosa cambia

- Nella scheda **Guest** di una prenotazione di Direct Booking compare un nuovo pulsante nell'elenco delle azioni: "View reservation data in Front Desk and check refunds" (o la sua versione in spagnolo).
- Il pulsante apre in una nuova scheda l'elenco **Reservations** di Front Desk, già filtrato per il riferimento di prenotazione.
- La ricerca copre le date di check-in da due mesi fa a un anno nel futuro, così si trovano i soggiorni recenti e quelli in arrivo.
- Lo script legge l'ID della struttura dal link a Front Desk presente nella pagina, quindi la ricerca si apre sulla tua struttura.
- Controlla la pagina ogni due secondi. Quando passi a un'altra prenotazione, il pulsante viene aggiornato con il nuovo riferimento di prenotazione.

## Come installarlo

Ti serve l'estensione gratuita Tampermonkey. Premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Direct Booking. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona solo nelle pagine delle prenotazioni di Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). È gratuito e open source: puoi [leggere il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Da sapere

- Lo script non verifica se hai effettuato l'accesso a Front Desk. Se non l'hai fatto, accedi e premi di nuovo il pulsante.
- Le prenotazioni con check-in più di due mesi nel passato, o più di un anno nel futuro, sono fuori dall'intervallo di ricerca e non compaiono nei risultati.
- Se nella pagina manca il link a Front Desk, lo script ripiega su un ID struttura fisso scritto nel codice e la ricerca non si apre sulla tua struttura. In tal caso modifica quel valore nello script.
- Il testo del pulsante esiste solo in inglese e spagnolo.
- Non memorizza nulla e non invia nulla fuori da Little Hotelier.

## Correlati

- [Tables Full Width](/tools/ui/tables-full-width) per tabelle più larghe in Direct Booking
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
