---
title: "Salvataggio Facile Provincia e Paese"
description: "Selettore di province e paesi per i moduli ospite di Little Hotelier: un tocco imposta provincia e Spagna, compila i nomi vuoti e apre ogni modulo ospite."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Questo script rende più veloce compilare i dati degli ospiti in una prenotazione di Little Hotelier, soprattutto per gli ospiti spagnoli. Quando clicchi sul campo provincia, mostra un elenco di province spagnole da toccare, e sceglierne una imposta anche il paese su Spagna. È pensato per il personale della reception di strutture in Spagna ed è progettato per essere comodo da usare su un tablet.

## Il problema che risolve

Per gli ospiti spagnoli, Little Hotelier richiede la provincia oltre al paese, e report come l'indagine INE sull'occupazione alberghiera raggruppano gli ospiti per provincia di residenza. Scrivere a mano i nomi delle province porta a varianti di grafia (Vizcaya o Bizkaia, Orense o Ourense), l'elenco dei paesi è lungo da scorrere e il modulo di un ospite aggiuntivo non si salva se i campi del nome sono vuoti.

## Cosa cambia

Nella schermata di modifica della prenotazione in Front Desk:

- **Selettore di province:** quando il campo provincia riceve il focus, si apre una griglia con le 50 province spagnole più Ceuta e Melilla. Scrivendo si filtra, e alternative comuni come Gerona, Lérida, Seville, Mallorca o Tenerife portano alla provincia giusta.
- **Paese impostato in automatico:** scegliendo una provincia, il paese dell'ospite viene impostato su Spagna.
- **Selettore di paesi:** il campo paese apre una griglia con ricerca che mostra ogni paese in spagnolo, con il nome inglese sotto.
- **Nomi vuoti compilati:** quando scegli una provincia o un paese, i campi nome e cognome vuoti di quel modulo ospite ricevono il nome dell'ospite principale, oppure un trattino basso "_" se anche quello è vuoto, così il modulo può essere salvato.
- **Moduli ospite aperti:** i moduli ospite compressi vengono espansi automaticamente e il cursore va sul campo provincia.
- **Pulsanti adatti al touch:** il pulsante per aggiungere un ospite e le frecce di espansione sono più grandi, e la croce rossa per rimuovere un ospite è sempre visibile.

## Come installarlo

Ti serve l'estensione gratuita Tampermonkey. Premi **Install on Tampermonkey**, conferma e ricarica la prenotazione. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona solo nelle pagine di modifica delle prenotazioni (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Da sapere

- Il selettore di province compare solo quando il paese dell'ospite è vuoto o Spagna. Per gli altri paesi il campo funziona normalmente.
- Il riquadro di ricerca e i nomi dei paesi sono in spagnolo, qualunque sia la lingua usata da Little Hotelier.
- I campi nome compilati copiano il nome dell'ospite principale. Correggili se l'ospite aggiuntivo ha un nome diverso.
- Le modifiche avvengono solo nel modulo. Non viene salvato nulla finché non premi Save, e lo script non memorizza nulla.

## Correlati

- [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Come compilare l'indagine INE sull'occupazione alberghiera](/blog/ine-hotel-occupancy-survey)
- [Chekin Connection](/tools/ui/show-chekin)
