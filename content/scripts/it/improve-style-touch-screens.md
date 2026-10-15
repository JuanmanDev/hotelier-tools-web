---
title: "Migliora Stile per Schermi Touch"
description: "Rende Little Hotelier più comodo su tablet: menu Print ed Email più grandi, pulsanti del piè di pagina evidenziati e rimozione camera sempre visibile."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Questo script adatta la schermata della prenotazione di Little Hotelier agli schermi touch, come un tablet alla reception. Ingrandisce i menu Print ed Email, evidenzia i loro pulsanti e mostra il pulsante di rimozione camera che altrimenti compare solo quando il mouse passa sopra. È pensato per i team di reception che lavorano con tablet o monitor touch.

## Il problema che risolve

La schermata della prenotazione di Little Hotelier è pensata per il mouse. Le opzioni Print ed Email si aprono in piccoli menu a comparsa con testo minuscolo, difficili da colpire con un dito. Il pulsante per rimuovere una camera da una prenotazione resta nascosto finché non passi sopra la camera, e uno schermo touch non ha hover, quindi su un tablet quel pulsante è difficile da raggiungere.

## Cosa cambia

Nella schermata della prenotazione in Front Desk:

- **Pulsante di rimozione camera:** il pulsante rotondo per rimuovere una camera dalla prenotazione è sempre visibile.
- **Menu Print ed Email:** le voci di questi menu a comparsa usano un testo molto più grande (30 pixel) e i menu si allargano per contenerle.
- **Pulsanti del piè di pagina:** i pulsanti Print ed Email nel piè di pagina della prenotazione ricevono uno sfondo azzurro chiaro e più spazio, così sono facili da trovare e da toccare.
- **Menu dell'email con fattura:** la piccola icona info accanto all'opzione della fattura viene nascosta.

## Come installarlo

Installa l'estensione gratuita Tampermonkey nel browser del tuo tablet o computer, premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona nelle pagine di Front Desk su app.littlehotelier.com. È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Da sapere

- Tampermonkey deve essere disponibile nel browser del tablet. Prova la configurazione sul tuo dispositivo prima di farci affidamento al banco.
- Le modifiche si applicano anche su un computer desktop. Il pulsante di rimozione camera è ora sempre sullo schermo, quindi fai attenzione a non cliccarlo per errore.
- Cambia solo gli stili. Non cambia ciò che fa ciascun pulsante e non memorizza nulla.
- Le schermate più recenti su application.littlehotelier.com, come il calendario, non sono interessate.
- Per moduli ospite più comodi al tocco, anche [Easy Save Province and Country](/tools/ui/easy-save-province-country) ingrandisce i pulsanti per aggiungere un ospite e per espandere.

## Correlati

- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Estensioni Chrome per Little Hotelier: userscript gratuiti](/blog/little-hotelier-chrome-extensions)
