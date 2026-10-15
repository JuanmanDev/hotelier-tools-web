---
title: "Aggiorna Pulsante Link Pagamento"
description: "Dà al pulsante del link di pagamento di Little Hotelier un'etichetta più chiara e aggiunge al link il telefono dell'ospite, preso dalla prenotazione."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Questo script migliora il pulsante del link di pagamento nella schermata della prenotazione di Little Hotelier. Dà al pulsante un'etichetta più chiara e aggiunge al link di pagamento il numero di telefono dell'ospite preso dalla prenotazione. È pensato per il personale della reception che chiede agli ospiti di pagare un acconto o il saldo con carta tramite un link di pagamento.

## Il problema che risolve

La dicitura standard del pulsante di richiesta di pagamento non rende ovvio a tutto il personale che è così che si chiede a un ospite di pagare con carta. Inoltre il numero di telefono dell'ospite, già salvato nella prenotazione, non viene riportato nel link di pagamento, quindi va inserito di nuovo. Entrambe le cose fanno perdere tempo mentre un ospite è al telefono.

## Cosa cambia

Nella schermata della prenotazione in Front Desk:

- Il pulsante di richiesta di pagamento viene rinominato **Generate Payment Link**, oppure **Cobrar con tarjeta por correo electronico (Email)** quando Little Hotelier è in spagnolo.
- Il numero presente nel campo telefono dell'ospite viene aggiunto al link del pulsante come parametro telefono, senza spazi e senza il segno "+".
- Se Little Hotelier ricostruisce il link, lo script applica di nuovo la modifica.
- Se il link include già un numero di telefono, viene lasciato com'è.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com e agisce solo quando una prenotazione mostra il pulsante di richiesta di pagamento. È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Da sapere

- Cambia solo il testo e il link del pulsante. Il pagamento in sé è gestito da Little Hotelier come sempre e lo script non vede mai i dati della carta.
- Lo script legge il campo telefono una sola volta, appena aggiunge il numero al link. Se digiti o correggi il numero dopo, il link mantiene il primo valore letto, quindi salva la prenotazione e ricaricala prima di usare il pulsante.
- Il numero viene aggiunto come sole cifre, quindi includi il prefisso internazionale nel campo telefono della prenotazione.
- Le etichette esistono in inglese e spagnolo. Le altre lingue dell'interfaccia mostrano l'etichetta in inglese.
- Non memorizza nulla e non invia nulla fuori da Little Hotelier.

## Correlati

- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
- [Come usare WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
