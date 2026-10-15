---
title: "Little Hotelier: tutorial con 20 trucchi e funzioni nascoste (2026)"
seoTitle: "Tutorial Little Hotelier: trucchi e funzioni nascoste"
description: "20 trucchi per Little Hotelier: calendario più veloce, passkey, tariffa minima, notti isolate, link di prenotazione, audit log e script per i prezzi."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier tutorial, little hotelier come funziona, little hotelier guida, little hotelier manuale, little hotelier trucchi, little hotelier funzioni nascoste, little hotelier calendario]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Pagina Reservations di Little Hotelier (interfaccia in spagnolo) allargata a tutta la larghezza dello schermo dallo script Full Width Reservation Table: filtri di ricerca, il pulsante Buscar, 36 prenotazioni trovate e il link Exportar"
faq:
  - q: "Come evito che Little Hotelier mi chieda sempre il codice MFA?"
    a: "Little Hotelier lo richiede di nuovo ogni 30 giorni, quando cambi browser o dispositivo e prima di azioni sensibili. Il modo più rapido è una passkey (My account, Passkeys, Create passkey) oppure l'approvazione con l'app mobile di Little Hotelier, che mostra un numero da far coincidere invece di un codice."
  - q: "Come evito la scadenza della sessione di Little Hotelier?"
    a: "Negli articoli del centro assistenza che abbiamo controllato non c'è alcuna impostazione per farlo. Lo userscript gratuito Auto Refresh On Inactivity ricarica la pagina dopo 10 minuti senza attività, così trovi una schermata aggiornata invece di una scaduta."
  - q: "Posso vedere i prezzi delle camere nel calendario di Little Hotelier?"
    a: "Non in modo nativo: il calendario mostra le prenotazioni e i prezzi stanno nella griglia dell'inventario. Lo userscript gratuito Prices Display li legge dalla pagina Inventory e li mostra sotto ogni tipologia di camera nel calendario."
  - q: "Little Hotelier ha scorciatoie da tastiera?"
    a: "Nei centri assistenza di Little Hotelier non ne abbiamo trovate (ottobre 2026). I pulsanti freccia del calendario spostano di 1, 7 o 14 giorni e View today riporta a oggi. Nella dashboard di Hotelier Tools, Ctrl+K (Cmd+K su Mac) apre la ricerca."
  - q: "Dov'è il manuale utente di Little Hotelier?"
    a: "Non c'è un manuale unico. Little Hotelier ha due centri assistenza, uno per la versione classica e uno per la piattaforma più recente, più Sim, un chatbot AI che apri dall'icona della chat dopo il login."
---

Little Hotelier nasconde alcune delle sue funzioni più utili a uno o due clic di distanza: l'accesso con passkey, una tariffa minima della struttura, link del motore di prenotazione che aprono una camera specifica, un pulsante flush per i canali che non si aggiornano e un audit log di chi ha cambiato cosa. Ecco 20 trucchi: 14 integrati in Little Hotelier (ciascuno con il link all'articolo ufficiale), 4 script gratuiti per il browser per ciò che non fa e 2 per chi usa la dashboard di Hotelier Tools.

::callout{type="info" title="Versione classica o piattaforma?"}
Gli account creati dal maggio 2025 (o aggiornati) usano la **piattaforma** più recente di Little Hotelier; quelli più vecchi usano la versione **classica**, che ha [un proprio centro assistenza](https://helpcentre.littlehotelier.com/en/). I nomi dei menu cambiano, quindi ogni trucco indica il percorso della versione descritta dall'articolo di aiuto.
::

## Trucchi per calendario e reception

### 1. Leggi il calendario a colpo d'occhio

Scegli una vista da **14 o 28 giorni** dal menu a discesa. Nella vista a 14 giorni, `<`, `<<` e `<<<` spostano di 1, 7 e 14 giorni; **View today** riporta a oggi. I colori indicano lo stato: arancione confermata, verde check-in effettuato, grigio check-out effettuato, blu non assegnata, rosso chiusura camera. Un **triangolo rosso** nell'angolo significa che c'è ancora un importo da incassare ([guida al calendario](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Usa la riga Unallocated per far entrare una prenotazione in più

Quando una tipologia di camera sembra piena ma le notti non combaciano, sposta una prenotazione in **Unallocated**, riorganizza le altre, poi trascinala di nuovo in una camera. Le prenotazioni non assegnate contano comunque sulla disponibilità, quindi parcheggiarne una lì non rimette la camera in vendita ([guida classica](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Stampa il modulo di registrazione come scheda di check-in

Clicca sulla lente d'ingrandimento di una prenotazione, poi **Print → Registration form**. Little Hotelier suggerisce di usarlo come modulo di check-in già pronto.

### 4. Dai alle pulizie un report tutto loro

Apri **Reservations → Housekeeping**. Segna ogni camera come **Cleaned**, **Uncleaned** o **Skip cleaning**, aggiungi note alle camere, passa tra **Today**, **Tomorrow** o date a scelta e premi **Print report**. Dai alle addette alle pulizie un utente proprio con accesso a Front desk, così lo vedono in tempo reale. Non è nell'app mobile ([guida all'housekeeping](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. Capisci da dove arriva una prenotazione dal suo riferimento

Le lettere all'inizio del riferimento della prenotazione indicano la fonte: **LH** la tua reception o il tuo motore di prenotazione, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([guida alle prenotazioni](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Comodo quando filtri un'esportazione in Excel.

## Tariffe, restrizioni e canali

### 6. Imposta una tariffa minima per non svendere mai le camere

Una tariffa minima della struttura impedisce a qualsiasi tariffa di camera, o sconto gestito in Little Hotelier, di scendere sotto di essa. Sulla piattaforma: **Setup → Property settings → General information**, la matita accanto a **Inventory**, poi **Minimum rate** ([guida](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). Nella versione classica: **Channel Manager**, clicca sul nome della struttura, poi **Property settings → General** ([guida](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). Le promozioni create direttamente su Booking.com o altri canali possono comunque scendere di più.

### 7. Recupera le notti isolate lasciate dai soggiorni minimi

Un minimo di tre notti lascia buchi di due notti che nessuno può prenotare. La soluzione di Little Hotelier: un secondo piano tariffario, derivato da quello standard a un prezzo leggermente superiore (il loro esempio è +5%), con un soggiorno minimo più breve, collegato ai tuoi canali ([guida alle notti isolate](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Per sapere cosa fanno CTA, CTD e stop sell, leggi [CTA, CTD, soggiorno minimo e stop sell: significato](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Invia un "flush" quando un canale non si aggiorna

Nella versione classica, **Setup → Property & Room Settings → Rooms & Rates**, seleziona la tipologia di camera o la tariffa e premi **Flush** in fondo. Rinvia prezzi, restrizioni e disponibilità a ogni canale. Dopo una piccola modifica aspetta cinque minuti prima di fare il flush e correggi prima gli errori di mappatura ([guida al flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Scopri chi ha cambiato una tariffa o una mappatura di canale

Apri una tariffa di camera o un canale e scegli **Audit**. Il Lifecycle audit mostra quando un'impostazione è cambiata e l'email dell'utente che l'ha cambiata. Non registra prezzi, valori delle restrizioni né modifiche alle prenotazioni ([guida all'audit](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Per uno stop sell misterioso, controlla prima il **Release period** della tariffa; se è vuoto, l'ha chiuso una regola di yield ([guida](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Motore di prenotazione e Booking.com

### 10. Crea un link diretto a una camera, una tariffa o un codice promozionale

Aggiungi un parametro all'indirizzo del tuo motore di prenotazione:

- `?room_type=ID` apre una tipologia di camera (l'ID è nell'URL della tipologia di camera nella configurazione di Direct Booking)
- `?promocode=CODE` applica un codice promozionale
- `?ratePlanId=ID` mostra un piano tariffario (Little Hotelier spiega come trovare l'ID con gli strumenti per sviluppatori del browser)

L'indirizzo inizia con `direct-book.com/properties/` in Europa, Africa, Medio Oriente e Americhe, oppure con `book-directonline.com/properties/` in Asia-Pacifico ([link per camere e promozioni](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [link ai piani tariffari](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Segnala una carta non valida o un no-show di Booking.com senza passare dall'extranet

Apri la prenotazione di Booking.com nel channel manager e vai alla scheda **Manage Reservation**. Da lì puoi segnalare la carta come non valida, chiedere a Booking.com di cancellare per carta non valida, oppure segnare un no-show e scegliere se rinunciare alla penale ([guida](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Le scadenze sono in [Booking.com carta non valida o no-show: cosa fare](/blog/booking-com-invalid-card-no-show).

### 12. Assicurati che gli ospiti di Booking.com ricevano le tue email

Booking.com blocca le email di sistemi che non conosce. Se invii conferme o richieste di pagamento da Little Hotelier, consenti `@app.littlehotelier.com` e `@guestjoy.com` (e i link `siteminder.com` e `guestjoy.com`) nell'extranet, in **Property → Messaging preferences → Security settings** ([passaggi](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Accesso, assistenza ed esportazioni

### 13. Accedi con una passkey invece dei codici

L'MFA è obbligatoria e Little Hotelier la richiede di nuovo ogni 30 giorni o su un nuovo browser. Due modi per renderla indolore ([guida all'MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)):

- **Approva con l'app di Little Hotelier.** Tocchi il numero corrispondente e confermi con il volto o l'impronta. I codici via SMS ed email non sono supportati.
- **Usa una passkey.** Icona del profilo → **My account** → **Passkeys** → **Create passkey**, poi accedi con **Continue with a passkey**. Funziona nei browser web (Chrome ed Edge 109+, Safari 16+), non nell'app mobile, e richiede prima di aver configurato l'MFA ([guida alle passkey](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Ognuno dovrebbe avere il proprio utente: i codici MFA appartengono a una persona e a un dispositivo.

### 14. Chiedi a Sim prima di cercare ed esporta prima del giorno 180

Dopo il login, apri l'icona della chat in basso a destra e scegli **Ask a question**. Sim, il chatbot AI di Little Hotelier, risponde dal centro assistenza 24 ore su 24 in otto lingue e può passarti a una persona. Fai una domanda specifica alla volta, con il nome del canale e l'errore esatto ([consigli](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

E un'abitudine che vale la pena prendere: esporta le prenotazioni ogni mese. I dati degli ospiti vengono mascherati 180 giorni dopo il check-out e le esportazioni non includono mai i numeri di telefono. Passo per passo: [esportare le prenotazioni in Excel o Google Sheets](/blog/export-little-hotelier-reservations-excel).

## Ritocchi con userscript gratuiti

Questi [userscript](/tools/ui) gratuiti girano nel tuo browser con l'estensione Tampermonkey e cambiano solo ciò che vedi. Restano gratuiti per sempre. La [guida all'installazione](/tools/ui/instructions) richiede circa cinque minuti per script.

### 15. Vedi i tuoi prezzi nel calendario

[Prices Display](/tools/ui/prices-display) legge le tue tariffe dalla pagina Inventory e le mostra sotto ogni tipologia di camera nel calendario, così puoi dare un prezzo al telefono senza cambiare schermata.

::screenshot{src="/images/scripts/prices-display/to.webp" alt="Calendario di Little Hotelier in spagnolo con vista a 7 giorni, prenotazioni in verde, arancione e grigio e il prezzo per notte di ogni tipologia di camera in cifre grandi sotto le sue camere" caption="Con Prices Display, la tariffa per notte di ogni tipologia di camera sta proprio sotto le sue camere."}
::

### 16. Smetti di tornare a una pagina scaduta

Se lasci Little Hotelier aperto alla reception e quando torni trovi errori, [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) ricarica la pagina dopo 10 minuti senza clic, scorrimento o movimenti del mouse. Non ricarica mai mentre lavori.

### 17. Vedi la commissione di Booking.com dentro la prenotazione

[Show Booking.com Commissions](/tools/ui/show-booking-commissions) aggiunge a ogni prenotazione Booking.com una stima dettagliata della commissione e il tuo netto approssimativo. Come funziona la commissione reale è spiegato in [che commissione prende Booking.com](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Riepilogo di una prenotazione di Little Hotelier in spagnolo con righe in più per costo del bonifico, commissione di Booking.com, commissione totale con IVA e netto approssimativo" caption="Una stima di quanto trattiene Booking.com e di quanto ti resta, dentro la prenotazione."}
::

### 18. Fai entrare più cose nello schermo (e su un tablet)

- [Compact Calendar UI](/tools/ui/compact-calendar-ui) mette le intestazioni delle date su una sola riga e riduce i nomi delle tipologie di camera.
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) allarga l'elenco delle prenotazioni così smetti di scorrere di lato.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) ingrandisce i pulsanti e mostra sempre il pulsante "rimuovi camera" che altrimenti compare solo al passaggio del mouse.

Tutti gli script, con immagini prima e dopo, sono nella [pagina delle estensioni per il browser](/chrome-extensions) e in [estensioni Chrome gratuite per Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Due trucchi se usi la dashboard di Hotelier Tools

Hotelier Tools è una dashboard indipendente che lavora accanto a Little Hotelier, con il login di Little Hotelier della tua struttura. Non è affiliato né approvato da SiteMinder o Little Hotelier ed è gratuito per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027.

### 19. Premi Ctrl+K per trovare qualsiasi cosa

**Ctrl+K** (**Cmd+K** su Mac) cerca tra pagine, voci della lista d'attesa, attività programmate e conversazioni. Ignora gli accenti e capisce parole inglesi e spagnole per la stessa cosa: "lista de espera" trova la Availability Queue.

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="Palette dei comandi aperta con Ctrl+K sulla dashboard di Hotelier Tools, con la ricerca waitlist e pagine corrispondenti come Public waitlist form, Availability Queue, History, Do-not-rebook list e Scheduled invoices, ciascuna con l'etichetta della sua sezione" caption="Scrivi una parola e vai direttamente alla pagina che ti serve." path="/"}
::

### 20. Lascia che un controllo notturno trovi i documenti mancanti prima dell'arrivo degli ospiti

Gli **Automated checks** leggono le prossime prenotazioni e segnalano ciò che altrimenti scopriresti alla reception: nessuna camera assegnata, documento o indirizzo mancante, un saldo da pagare o un ospite nella tua lista do-not-rebook. I problemi finiscono in un'unica pagina Issues e ogni esecuzione invia un'email di riepilogo. Leggi [la checklist quotidiana della reception](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

Guide correlate: [cos'è un server MCP](/blog/what-is-mcp-server-hotels), [i prezzi dinamici su Little Hotelier](/blog/dynamic-pricing-little-hotelier), [scaricare tutte le fatture in una volta](/blog/download-all-little-hotelier-invoices), [le regole di registrazione degli ospiti per paese](/blog/guest-registration-rules-by-country), [usare WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier), [le alternative a Little Hotelier](/blog/little-hotelier-alternatives), [la dashboard di Hotelier Tools](/tools/bot/dashboard), [le automazioni di Hotelier Tools](/tools/bot/automations).

## Riepilogo

- **Maggiori risparmi di tempo:** passkey, report di housekeeping e link diretti del motore di prenotazione.
- **Maggiori risparmi di denaro:** una tariffa minima della struttura e un piano tariffario per le notti isolate.
- **Quando i canali non si aggiornano:** flush, poi controlla l'audit log e il release period.
- **Per ciò che Little Hotelier non fa:** userscript gratuiti per i prezzi nel calendario e le commissioni di Booking.com, e [integrazioni](/blog/little-hotelier-integrations) per il resto.
