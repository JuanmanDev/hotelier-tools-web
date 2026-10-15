---
title: "Pulsante Email Bonifico Bancario"
description: "Un pulsante nelle prenotazioni di Little Hotelier che prepara un'email con i dati del bonifico, l'importo dovuto e le date del soggiorno. Solo su richiesta."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Questo script aggiunge alle prenotazioni di Little Hotelier un pulsante che apre un'email già pronta per chiedere all'ospite di pagare con bonifico bancario. L'email contiene già l'importo da saldare, le date del soggiorno e le camere prenotate. È pensato per titolari e personale della reception di strutture che accettano bonifici. Non è pubblicato per uso generale: la versione attuale è scritta per una sola struttura, quindi si configura su richiesta.

## Il problema che risolve

Quando un ospite vuole pagare con bonifico, qualcuno deve scrivere ogni volta la stessa email: numero di conto, banca, beneficiario, un riferimento di pagamento, l'importo esatto e le date della prenotazione. Copiare importo e date a mano è lento, e un riferimento sbagliato rende il pagamento difficile da abbinare in seguito.

## Cosa cambia

Nella schermata della prenotazione in Front Desk:

- Viene aggiunta una nuova voce al menu **Email** e compare un nuovo pulsante con l'icona di una busta accanto al pulsante **Print**.
- Cliccando su uno dei due si apre il tuo programma di posta con un nuovo messaggio indirizzato all'email dell'ospite.
- Il messaggio viene compilato a partire dalla prenotazione: l'importo da saldare, un riferimento di pagamento composto dalla data di check-in e dal nome dell'ospite, le date di check-in e check-out e le camere raggruppate per tipologia con il numero di ciascuna.
- Include anche un link alla prenotazione in Little Hotelier, per tuo riferimento.

## Come installarlo

Questo script non è ancora pubblicato per uso generale. [Contattami](/contact) e posso adattarlo alla tua struttura. Una volta adattato, si installa come gli altri script: ti serve l'estensione gratuita Tampermonkey e la [guida all'installazione](/tools/ui/instructions) mostra i passaggi. Funziona solo nelle pagine di Front Desk di Little Hotelier (app.littlehotelier.com). È open source e puoi leggere il [codice attuale su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Da sapere

- I dati bancari, il nome della struttura, la firma, l'orario di arrivo e il testo dell'email sono scritti direttamente nel codice, in spagnolo, per la struttura dell'autore. Vanno cambiati prima che qualcun altro possa usarlo.
- L'importo è mostrato in euro.
- L'email si apre nel programma di posta predefinito del tuo computer tramite un normale link email. Non viene inviato nulla finché non premi invia lì.
- L'email chiede agli ospiti di confermare il numero di conto per telefono, come protezione contro le email fraudolente che cambiano i dati bancari.
- Lo script non memorizza nulla e non invia dati da nessuna parte. Legge solo i campi già presenti nella schermata della prenotazione.

## Correlati

- [Update Payment Link Button](/tools/ui/update-payment-link-button) per i pagamenti con carta tramite link
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
