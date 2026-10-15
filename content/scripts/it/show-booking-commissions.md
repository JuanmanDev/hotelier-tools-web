---
title: "Mostra Commissioni Booking.com"
description: "Aggiunge alle prenotazioni di Little Hotelier una stima delle commissioni Booking.com e del netto approssimativo, con commissione del 17% e costo dell'1,3%."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Questo script aggiunge alla schermata della prenotazione di Little Hotelier una stima di ciò che Booking.com trattiene da ogni prenotazione. Per le prenotazioni Booking.com mostra il costo di trasferimento, la commissione, il totale detratto IVA inclusa e un importo netto approssimativo. È pensato per titolari e responsabili che vogliono un'idea rapida di quanto renda davvero una prenotazione Booking.com.

## Il problema che risolve

Il totale della prenotazione in Little Hotelier è ciò che paga l'ospite, non ciò che arriva sul tuo conto. Con Booking.com, commissione e costi di pagamento vengono detratti dopo, con una fattura separata. Senza una cifra approssimativa a portata di mano, è difficile confrontare una prenotazione da un canale con una diretta, o capire se uno sconto lascia ancora un margine.

## Cosa cambia

Quando la fonte della prenotazione è **Booking.com**, vengono aggiunte quattro righe al riepilogo della prenotazione, subito sopra la linea di separazione. Le etichette sono in spagnolo:

- **Cargo por transferencia (1.3%)**: il costo di trasferimento, l'1,3% del totale della prenotazione.
- **Comisiones Booking (17%)**: la commissione di Booking.com, il 17% del totale della prenotazione.
- **Total comisiones con IVA**: il costo di trasferimento più la commissione più l'importo dell'IVA mostrato nella prenotazione.
- **Neto Bruto (Aprox.)**: il netto approssimativo, cioè il totale della prenotazione meno quella somma.

Le prenotazioni di qualsiasi altra fonte restano invariate.

## Come installarlo

Installa l'estensione gratuita Tampermonkey, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com e aggiunge righe solo alle prenotazioni Booking.com. È gratuito e open source: [guarda il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Da sapere

- Le percentuali sono fisse nel codice: 17% di commissione e 1,3% di costo di trasferimento. Se il tuo contratto con Booking.com prevede una percentuale diversa, modifica quei numeri nell'editor di Tampermonkey.
- Le etichette restano in spagnolo e gli importi sono mostrati in euro, qualunque sia la lingua della tua interfaccia.
- È una stima. La fattura di Booking.com è la cifra definitiva.
- Le righe vengono calcolate una sola volta, alcuni secondi dopo il caricamento della prenotazione. Se cambi il totale, ricarica la pagina per ricalcolare.
- Legge solo la fonte della prenotazione, il totale e l'IVA già presenti sullo schermo. Non memorizza nulla e non invia nulla da nessuna parte.

## Correlati

- [Quanta commissione prende Booking.com](/blog/booking-com-commission)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
