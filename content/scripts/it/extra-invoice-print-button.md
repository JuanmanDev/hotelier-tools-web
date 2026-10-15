---
title: "Pulsante Stampa Fattura Extra"
description: "Aggiunge un pulsante Print Invoice a ogni prenotazione di Little Hotelier, accanto al menu Print, così la reception stampa la fattura con un clic invece di due."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Questo script mette un pulsante **Print Invoice** direttamente nella schermata della prenotazione di Little Hotelier, accanto al menu **Print** esistente. Un clic apre la fattura, senza dover aprire prima un menu. È pensato per il personale della reception che stampa o scarica una fattura a quasi ogni check-out.

## Il problema che risolve

In Front Desk la fattura si trova dentro il menu Print della prenotazione: apri il menu, poi scegli la fattura. Due clic non sono molti una volta sola, ma al momento del check-out, con gli ospiti in attesa, si accumulano, e su un tablet il piccolo menu è facile da non vedere. Inoltre, il nuovo personale non sempre sa che la fattura è dentro quel menu.

## Cosa cambia

- Un nuovo pulsante con l'icona di un documento compare nel piè di pagina della prenotazione, subito dopo il pulsante del menu **Print**.
- La sua etichetta è **Print Invoice**, oppure **Imprimir Factura** quando Little Hotelier è in spagnolo.
- Cliccandolo si attiva il link di stampa della fattura di Little Hotelier, lo stesso che sceglieresti dal menu Print. Il risultato è esattamente la fattura prodotta da Little Hotelier; lo script non crea né modifica fatture.
- Il menu Print originale resta com'è, con tutte le altre opzioni.

## Come installarlo

Ti serve l'estensione gratuita Tampermonkey. Premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) ha le immagini per ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com e aggiunge il pulsante solo dove esiste il pulsante Print della prenotazione. È gratuito e open source: [guarda il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Da sapere

- Lo script cerca il pulsante Print alcune volte nei primi cinque secondi dopo il caricamento della pagina. Se il pulsante manca perché la prenotazione si è aperta più tardi, ricarica la pagina.
- Controlla prima se il suo pulsante è già presente, quindi non ne avrai mai due.
- Le etichette esistono in inglese e spagnolo. Le altre lingue dell'interfaccia mostrano l'etichetta in inglese.
- Funziona su desktop e schermi touch. Con [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), anche i pulsanti del piè di pagina ricevono uno sfondo evidenziato.
- Non memorizza nulla e non invia nulla fuori da Little Hotelier.

## Correlati

- [Come inviare la fattura all'ospite al check-out](/blog/send-invoice-to-guest-at-checkout)
- [Scarica tutte le fatture di Little Hotelier](/blog/download-all-little-hotelier-invoices)
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
