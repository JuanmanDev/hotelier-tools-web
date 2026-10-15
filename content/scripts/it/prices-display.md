---
title: "Visualizzazione Prezzi"
description: "Mostra il prezzo di ogni notte nel calendario di Little Hotelier, letto dalla pagina Inventory in background, per dare le tariffe senza cambiare schermata."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Questo script mostra il prezzo di ogni tipologia di camera per ogni notte direttamente nel calendario di Little Hotelier. Quando un ospite telefona per sapere quanto costa il venerdì, la reception lo vede nella stessa schermata della disponibilità, senza aprire la pagina Inventory. È pensato per il personale della reception che gestisce prenotazioni al telefono e di passaggio, e per i titolari.

## Il problema che risolve

In Little Hotelier la disponibilità sta nel calendario e le tariffe nella pagina Inventory. Comunicare un prezzo significa cambiare schermata, trovare le date e la tipologia di camera giuste e poi tornare al calendario per fare la prenotazione. Nei momenti di punta è lento e soggetto a errori.

## Cosa cambia

- Nel calendario, l'ultima riga di ogni tipologia di camera (la riga non assegnata) mostra il prezzo di quella notte per la tipologia.
- I prezzi arrivano dalla tua pagina Inventory: lo script la apre in una scheda in background, legge la prima riga di tariffa di ogni tipologia di camera e poi chiude la scheda.
- La pagina Inventory copre 14 giorni alla volta, quindi per le viste del calendario più lunghe lo script la legge a blocchi di 14 giorni, uno dopo l'altro.
- Mentre un prezzo si sta caricando, la cella mostra "...". Le date passate restano vuote.
- I prezzi appaiono in un carattere grigio più grande, così si distinguono dalle prenotazioni.
- Passando ad altre date si caricano i prezzi del nuovo intervallo.

## Come installarlo

Ti serve l'estensione gratuita Tampermonkey. Premi **Install on Tampermonkey** in questa pagina. La schermata di installazione elenca i permessi aggiuntivi usati dallo script, che gli permettono di aprire una scheda in background e di salvare i prezzi in Tampermonkey. Conferma, poi ricarica il calendario. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio. Lo script funziona nel calendario (application.littlehotelier.com) e nella pagina Inventory che legge (app.littlehotelier.com). È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Da sapere

- I prezzi sono conservati nella memoria di Tampermonkey sul tuo computer per un massimo di un'ora, poi vengono letti di nuovo. Una tariffa che modifichi in Inventory può impiegare fino a un'ora per comparire nel calendario.
- Devi aver effettuato l'accesso a Little Hotelier, perché la scheda in background usa la tua sessione. Una scheda che si apre e si chiude brevemente è normale.
- Mostra solo la prima riga di tariffa di ogni tipologia di camera nella pagina Inventory, non tutti i piani tariffari.
- I nomi delle tipologie di camera devono coincidere tra il calendario e la pagina Inventory perché compaia un prezzo.
- Lo script parte quattro secondi dopo il caricamento del calendario e aspetta fino a 30 secondi per ogni blocco di Inventory. Non viene inviato nulla fuori da Little Hotelier.

## Correlati

- [Change Inventory Name](/tools/ui/change-inventory-name)
- [Prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Compact Calendar UI](/tools/ui/compact-calendar-ui)
