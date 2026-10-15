---
title: "Cambia Nome Inventario"
description: "Rinomina il menu Inventory di Little Hotelier in Inventory - Prices, in inglese e spagnolo, così il nuovo personale trova subito le tariffe delle camere."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Questo piccolo script rinomina la voce **Inventory** del menu superiore di Little Hotelier in **Inventory - Prices** (o **Inventario - Precios** in spagnolo). È pensato per i titolari che formano nuovo personale di reception: l'etichetta indica che in quella schermata si impostano le tariffe, non solo la disponibilità delle camere.

## Il problema che risolve

In Little Hotelier le tariffe delle camere si modificano nella schermata Inventory. Per chi è nuovo del sistema, "Inventory" fa pensare a scorte o a numeri di camere, quindi si cerca un menu "Prices" o "Rates" che non esiste. Un'etichetta più chiara evita che la stessa domanda venga ripetuta a ogni cambio turno.

## Cosa cambia

- Nel menu di navigazione orizzontale delle schermate più recenti di Little Hotelier, la voce "Inventory" diventa "Inventory - Prices".
- Se il menu è in spagnolo, "Inventario" diventa "Inventario - Precios".
- Il suffisso segue la lingua della pagina: le pagine in spagnolo ottengono "Precios", qualsiasi altra lingua ottiene "Prices".
- Cambia solo l'etichetta visibile. Il link porta sempre alla stessa schermata Inventory.
- Poiché il menu si carica a fasi, lo script ci prova tre volte nei primi secondi dopo il caricamento della pagina e non aggiunge mai il suffisso due volte.

## Come installarlo

Ti serve l'estensione gratuita Tampermonkey. Premi **Install on Tampermonkey** in questa pagina, conferma e ricarica Little Hotelier. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona solo su application.littlehotelier.com, l'indirizzo usato dalle schermate più recenti di Little Hotelier, come il calendario. È gratuito e open source: [guarda il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Da sapere

- Riconosce la voce di menu solo se riporta esattamente "Inventory" o "Inventario". Se Little Hotelier è impostato in un'altra lingua, come francese o tedesco, l'etichetta resta invariata.
- Cambia solo il menu di navigazione superiore. Le pagine su app.littlehotelier.com e Direct Booking non corrispondono, quindi i loro menu restano invariati.
- Funziona allo stesso modo su desktop e schermi touch.
- Non memorizza nulla e non invia nulla da nessuna parte.
- Se Little Hotelier rinomina o ridisegna il menu, l'etichetta potrebbe smettere di cambiare finché lo script non viene aggiornato.

## Correlati

- [Prices Display](/tools/ui/prices-display) mostra i prezzi di Inventory nel calendario
- [Prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Trucchi e funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips)
