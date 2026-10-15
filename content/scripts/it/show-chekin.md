---
title: "Connessione con Chekin"
description: "Mostra i dati di check-in Chekin di ogni ospite nella prenotazione di Little Hotelier, compila i moduli ospite con un clic e condivide il link di registrazione."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Dettagli prenotazione"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Questo script collega Chekin, il servizio di check-in online, con Little Hotelier. Quando apri una prenotazione, un pannello Chekin mostra gli ospiti che si sono già registrati e ti permette di copiare i loro dati nei moduli ospite di Little Hotelier. È pensato per i team di reception che usano Chekin per raccogliere i documenti degli ospiti.

## Il problema che risolve

Senza di esso, a ogni arrivo bisogna trovare la prenotazione in Chekin, controllare chi si è registrato e copiare a mano numeri di documento e indirizzi. È lento, e i numeri di documento copiati sono facili da sbagliare.

## Cosa cambia

Nella schermata di modifica della prenotazione in Front Desk, viene aggiunto un pannello Chekin nella sezione principale dei contatti:

- **Stato:** se la prenotazione è stata trovata in Chekin e quanti ospiti sono registrati, con un link **View in Chekin**.
- **Tabella degli ospiti:** nome, telefono, numero di documento, città, provincia e paese di ogni ospite registrato.
- **Use as Primary:** copia il numero di documento di quell'ospite nel campo ID dell'ospite principale, pronto per la fattura.
- **Save Guest** e **Save All Guests:** compilano i moduli degli ospiti aggiuntivi di Little Hotelier con i dati di Chekin. Poi premi il pulsante Save di Little Hotelier per confermare.
- **Link del modulo di registrazione:** quando nessuno si è ancora registrato, il link del modulo per l'ospite con i pulsanti Open, Copy, Email e WhatsApp, usando email e telefono dell'ospite presenti nella prenotazione.
- **Create Checkin Reservation:** se non c'è nessuna corrispondenza, crea la prenotazione in Chekin a partire dalle date, dalle camere, dal numero di ospiti e dai dati di contatto di Little Hotelier.

Nel calendario, lo script carica anche in background i dati Chekin delle prenotazioni visibili, così le prenotazioni si aprono più rapidamente.

## Come installarlo

Ti servono l'estensione gratuita Tampermonkey e un account Chekin. Premi **Install on Tampermonkey**, conferma, poi accedi a dashboard.chekin.com nello stesso browser. La [guida all'installazione](/tools/ui/instructions) mostra i passaggi. Lo script funziona nelle pagine di modifica delle prenotazioni di Little Hotelier, nel calendario e nelle pagine della dashboard di Chekin che apre da solo. È gratuito e open source: [leggi il codice su GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Da sapere

- Usa il tuo accesso a Chekin. Se non hai effettuato l'accesso, il pannello mostra un pulsante **Login Required on Chekin**.
- Per cercare, apre in background una scheda di Chekin.
- La prenotazione deve avere una data di check-in e una camera assegnata. L'abbinamento avviene prima per riferimento di prenotazione, poi per numero di camera.
- I risultati vengono conservati nel tuo browser fino a 24 ore, e i precaricamenti del calendario fino a 4 ore.
- Il pannello segue la lingua del tuo browser (inglese o spagnolo). I messaggi condivisi terminano con la firma della struttura dell'autore; modificala nello script.

## Correlati

- [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Regole di registrazione degli ospiti per paese](/blog/guest-registration-rules-by-country)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
