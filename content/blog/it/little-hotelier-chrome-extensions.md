---
title: "Estensioni Chrome per Little Hotelier: userscript gratuiti per lavorare più in fretta"
seoTitle: "Estensione Chrome per Little Hotelier: script gratuiti"
description: "Userscript gratuiti per Little Hotelier: prezzi nel calendario, tabelle più larghe, commissioni Booking.com stimate e fatture con un clic. Come installarli."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [estensione chrome little hotelier, tampermonkey script, userscript chrome, little hotelier prezzi calendario, little hotelier tabelle a larghezza piena, little hotelier commissioni booking.com]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "Calendario di Little Hotelier (interfaccia in spagnolo) con il prezzo di ogni notte sotto ogni tipo di camera, aggiunto dallo script Prices Display"
faq:
  - q: "Questi script li ha creati Little Hotelier?"
    a: "No. Sono script gratuiti e indipendenti pubblicati da Hotelier Tools, che non è affiliato né approvato da SiteMinder o Little Hotelier. Funzionano nel tuo browser, dentro la tua sessione di Little Hotelier."
  - q: "Tampermonkey o un'estensione di Chrome: cosa mi serve?"
    a: "In un certo senso entrambi: Tampermonkey è l'estensione di Chrome e gli script girano al suo interno. Installi Tampermonkey una volta sola, poi aggiungi solo gli script che vuoi."
  - q: "Gli script funzionano su un tablet?"
    a: "Tampermonkey funziona su diversi browser e il suo menu offre una versione per telefoni e tablet. Per i touch screen installa Improve Style For Touch Screens, che ingrandisce pulsanti e menu. Prova prima sul tuo dispositivo."
  - q: "Uno script smette di funzionare quando Little Hotelier si aggiorna?"
    a: "Può succedere. Gli script modificano le pagine di Little Hotelier, quindi un restyling può bloccarne uno finché non viene aggiornato. Disattivalo dal menu di Tampermonkey e segnala il problema su GitHub."
  - q: "Come disinstallo uno script?"
    a: "Clicca sull'icona di Tampermonkey e disattiva lo script, oppure apri Dashboard ed eliminalo. Ricarica Little Hotelier e la pagina torna normale."
  - q: "Gli script hanno un costo?"
    a: "No. Gli script per il browser sono gratuiti per sempre, senza bisogno di alcun account."
---

Puoi rendere Little Hotelier più veloce con gli userscript gratuiti: piccoli add-on che girano nel tuo browser tramite l'estensione Tampermonkey. Aggiungono i prezzi al calendario, allargano le tabelle strette, stimano la commissione di Booking.com su ogni prenotazione, mettono un pulsante per la fattura con un clic nelle prenotazioni e altro ancora. Installa Tampermonkey una volta sola, attiva **Allow User Scripts** in Chrome, poi premi **Install on Tampermonkey** nella pagina dello script che ti interessa.

## Cos'è Tampermonkey e perché script invece di un'estensione?

Tampermonkey è un'estensione del browser che esegue gli **userscript**: piccoli file JavaScript che modificano una pagina web dopo il caricamento. Invece di un'estensione separata per ogni modifica, installi Tampermonkey una volta sola e aggiungi solo gli script che ti servono. Funziona su Chrome, Edge, Firefox, Safari e Opera.

Ogni script di Hotelier Tools è un unico file leggibile in un [repository GitHub pubblico](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Sono 16: 15 pronti da installare e uno realizzato su richiesta. Tutti sono gratuiti per sempre.

## Gli userscript sono sicuri? Cosa possono e non possono toccare

Domanda legittima, visto che uno script gira nella pagina in cui si trovano le tue prenotazioni. Ecco cosa fanno e cosa non fanno questi script:

- **Girano solo su Little Hotelier.** Ogni script dichiara i siti su cui può funzionare: gli indirizzi di Little Hotelier (compreso Direct Booking) e, per lo script Chekin, quelli di Chekin.
- **I tuoi dati restano dove sono.** Gli script parlano con Little Hotelier (e con Chekin, per quell'unico script). Nulla viene inviato a Hotelier Tools.
- **Agiscono come te.** Uno script usa la tua sessione aperta, quindi può fare solo ciò che potresti fare tu con i tuoi clic. Alcuni modificano un modulo prima che tu prema Save, per esempio impostando il paese o il numero di adulti.
- **Puoi leggerli.** Il codice è pubblico e Tampermonkey lo mostra prima dell'installazione.
- **Si aggiornano da soli.** Ogni script contiene il proprio indirizzo GitHub, così Tampermonkey può scaricare le nuove versioni.

La regola generale per qualsiasi userscript: installa solo da fonti di cui ti fidi. E se Little Hotelier cambia una pagina, uno script può smettere di funzionare finché non viene aggiornato. Disattivalo dal menu di Tampermonkey e segnalalo su GitHub.

::callout{type="info" title="Indipendenti e gratuiti"}
Questi script sono pubblicati da Hotelier Tools, che non è affiliato né approvato da SiteMinder o Little Hotelier. Funzionano dentro il login di Little Hotelier del tuo hotel e non richiedono alcun account.
::

## Come installare uno script (circa cinque minuti la prima volta)

1. **Installa Tampermonkey** da [tampermonkey.net](https://www.tampermonkey.net/). Scegli la versione normale per il tuo browser, non la beta.
2. **Consenti l'esecuzione degli script.** In Chrome 138 o successivo, clicca con il tasto destro sull'icona di Tampermonkey, scegli **Manage extension** e attiva **Allow User Scripts**. Nelle versioni precedenti di Chrome o in Edge, apri `chrome://extensions` (o `edge://extensions`) e attiva **Developer mode** ([FAQ di Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209)).
3. **Apri la pagina di uno script** su questo sito, per esempio [Prices Display](/tools/ui/prices-display), e premi **Install on Tampermonkey**. Tampermonkey apre una scheda con il codice: premi **Install**.
4. **Ricarica Little Hotelier** (F5). La modifica compare subito.

Se il pulsante non funziona, copia il codice da GitHub, scegli **Create a new script…** nel menu di Tampermonkey, incollalo e salva con Ctrl+S. La [guida all'installazione](/tools/ui/instructions) mostra ogni passaggio con immagini, e [tutti gli script sono elencati qui](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="Menu di Tampermonkey in Chrome con le voci Enabled, Create a new script e Dashboard" caption="Il menu di Tampermonkey: attiva o disattiva gli script, creane uno a mano o apri la Dashboard per rimuoverne uno." width="624" height="645"}
::

Per rimuovere uno script, clicca sull'icona di Tampermonkey e disattivalo, oppure apri **Dashboard** ed eliminalo.

## Gli script, divisi per compito

Ogni script ha la sua pagina con immagini prima e dopo e il pulsante di installazione.

### Vedere di più in una sola schermata

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table): l'elenco Reservations usa tutta la larghezza dello schermo. Niente più scorrimento laterale.
- [Tables Full Width](/tools/ui/tables-full-width): lo stesso per ogni tabella di Direct Booking.
- [Compact Calendar UI](/tools/ui/compact-calendar-ui): giorno e data su una riga invece di tre e righe dei tipi di camera più basse, così nel calendario entrano più camere.
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details): una schermata di prenotazione più compatta con un campo commenti più alto.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Calendario di Little Hotelier (interfaccia in spagnolo) dopo Compact Calendar UI, con giorno della settimana e data su una sola riga e righe compatte dei tipi di camera" caption="Compact Calendar UI fa entrare più camere e più giorni in una sola schermata." width="1187" height="1306"}
::

### Prezzi e commissioni di Booking.com

- [Prices Display](/tools/ui/prices-display): mostra nel calendario il prezzo della camera per ogni notte, letto dalla tua pagina Inventory. Comodo quando un ospite chiama per chiedere del venerdì.
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): aggiunge alle prenotazioni di Booking.com una stima della commissione e un importo netto approssimativo. È una stima; la fattura di Booking.com è la cifra definitiva. Approfondisci in [quanta commissione prende Booking.com](/blog/booking-com-commission).
- [Change Inventory Name](/tools/ui/change-inventory-name): rinomina il menu **Inventory** in "Inventory - Prices" (inglese e spagnolo), così il personale nuovo trova le tariffe.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Prenotazione Booking.com in Little Hotelier (interfaccia in spagnolo) con righe di riepilogo in più per il costo del bonifico, la commissione di Booking.com, il totale delle commissioni con IVA e un importo netto approssimativo" caption="Una stima di quanto ti resta di una prenotazione Booking.com dopo la commissione." width="752" height="715"}
::

### Pagamenti e fatture con meno clic

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): un link diretto per stampare la fattura nella prenotazione, senza aprire il menu Print.
- [Update Payment Link Button](/tools/ui/update-payment-link-button): testo più chiaro sul pulsante del link di pagamento, e il numero di telefono dell'ospite viene aggiunto automaticamente dal modulo.
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button): un pulsante che invia per email le tue coordinate bancarie con un testo precompilato. Non è ancora pubblicato e si configura su richiesta.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Piè di pagina di una prenotazione di Little Hotelier (interfaccia in spagnolo) con un link in più Imprimir Factura accanto ai menu Print ed Email" caption="Un clic per stampare la fattura." width="604" height="265"}
::

Vuoi che la fattura parta senza nemmeno un clic? Leggi [come inviare la fattura automaticamente al check-out](/blog/send-invoice-to-guest-at-checkout).

### Dati degli ospiti e check-in

- [Chekin Connection](/tools/ui/show-chekin): se usi Chekin per il check-in online, mostra dentro la prenotazione la registrazione Chekin di ogni ospite (nome, telefono, numero del documento). Puoi copiare il documento nella fattura e condividere il modulo di registrazione per email o WhatsApp. Usa il tuo login di Chekin.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): per le strutture in Spagna, un elenco delle province spagnole nel campo provincia. Sceglierne una imposta il paese su Spagna e i campi nome e cognome vuoti ricevono un trattino basso.
- [Update Number Adults](/tools/ui/update-number-adults): i nuovi moduli di prenotazione partono con 2 adulti invece di 0, evitando di salvare una prenotazione senza adulti.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Prenotazione di Little Hotelier (interfaccia in spagnolo) con un pannello Chekin che elenca un ospite registrato, il numero del documento e un pulsante Use document" caption="Le registrazioni Chekin dentro la prenotazione di Little Hotelier." width="1484" height="831"}
::

### Comodità di ogni giorno: ricaricamenti, tablet e scorciatoie

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity): ricarica la pagina dopo 10 minuti senza clic, movimenti del mouse o scorrimento, così non torni a una sessione scaduta. Non ricarica mai mentre stai lavorando.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens): pulsanti e menu più grandi per i tablet, e il pulsante per rimuovere una camera, che di solito compare solo al passaggio del mouse, è sempre visibile.
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk): da una prenotazione di Direct Booking, un pulsante per fare il check in Front Desk e controllare i rimborsi. Se non hai effettuato l'accesso a Front Desk, potrebbe servire premerlo due volte.

## Quali script installare per primi

- **Reception su un portatile:** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button.
- **Titolare o revenue:** Prices Display e Show Booking.com Commissions.
- **Strutture in Spagna:** Easy Save Province and Country, più Chekin Connection se usi Chekin.
- **Tablet alla reception:** Improve Style For Touch Screens.

## Quando serve più di un ritocco all'interfaccia

Gli script cambiano ciò che vedi mentre sei davanti allo schermo. Non possono lavorare quando non ci sei. Per i compiti che girano da soli, come controllare ogni arrivo per documenti mancanti o inviare le fatture al check-out, c'è la [dashboard di Hotelier Tools](/tools/bot). È gratuita per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027; gli script restano gratuiti per sempre. Per altre scorciatoie dentro Little Hotelier, leggi [i trucchi e le funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

## Riepilogo

- Installa Tampermonkey una volta sola, consenti gli script utente, poi premi **Install on Tampermonkey** su ogni script che vuoi.
- Gli script girano solo su Little Hotelier (e su Chekin per uno di essi), non inviano nulla a Hotelier Tools e si aggiornano da soli.
- Parti da quelli adatti al tuo ruolo: tabelle più larghe e ricaricamento automatico per la reception, prezzi e commissioni per il titolare.
- Se uno si comporta male dopo un aggiornamento di Little Hotelier, disattivalo dal menu di Tampermonkey.
