---
title: "Come intestare la fattura a un'azienda invece che all'ospite in Little Hotelier (e far chiedere la fattura agli ospiti)"
seoTitle: "Fattura intestata a un'azienda in Little Hotelier"
description: "Ragione sociale e partita IVA di un'azienda su una fattura Little Hotelier, cosa serve in una fattura completa e come gli ospiti inviano i propri dati."
date: 2026-10-27
category: invoicing
tags: [fatture, fattura aziendale, little hotelier, booking.com, dati ospite, check-out]
keywords: [little hotelier fattura intestata azienda, fattura hotel intestata a un'azienda, intestare fattura albergo a società, cambiare intestatario fattura hotel, ospite chiede fattura con dati aziendali, fattura booking.com intestata azienda, fattura hotel agenzia di viaggi, fattura con partita iva hotel]
feature: invoicing
demoPath: /invoice-on-leave/links
cover: /images/blog/demo/en/guest-invoice-links.webp
coverAlt: "Pagina Guest invoice links in Hotelier Tools: i pulsanti New link e Settings, un'introduzione in quattro passi (crea un link, invialo, l'ospite compila il modulo, controlla), Waiting for your review senza nulla in attesa, e la tabella All links con ospiti, riferimenti di prenotazione, date del soggiorno, stato Used, Active o Expired, e Automatic invitation come autore"
faq:
  - q: "Come metto il nome di un'azienda su una fattura Little Hotelier?"
    a: "Aggiungi i dati dell'azienda alla prenotazione prima di generare la fattura. Il centro assistenza di Little Hotelier dice di scrivere la ragione sociale nella sezione Primary contact della scheda Details, il suo numero fiscale nel campo ID number, e le righe di indirizzo in più sotto Organisation. Poi genera la fattura."
  - q: "Posso cambiare l'intestatario di una fattura già emessa?"
    a: "Modifica i dati nella prenotazione, poi genera una fattura corretta: Little Hotelier segna quella vecchia come superata. Se la fattura era segnata come definitiva, prima annullala, oppure in Spagna con VeriFactu usa Rectify invoice. Verifica con il tuo commercialista come il tuo paese gestisce le correzioni."
  - q: "Cosa deve contenere una fattura aziendale in Spagna?"
    a: "Una fattura completa (factura completa) richiede numero e serie, data di emissione, nome completo, codice fiscale (NIF) e indirizzo sia tuoi sia dell'azienda, una descrizione del soggiorno, l'aliquota IVA e l'importo dell'IVA indicato a parte. Una fattura semplificata per l'alloggio è ammessa solo fino a 400 euro IVA inclusa."
  - q: "Gli ospiti possono compilare da soli i dati aziendali per la fattura?"
    a: "Non con il solo Little Hotelier. I link fattura per gli ospiti di Hotelier Tools danno a ogni ospite una pagina privata in cui controlla i dati in archivio, aggiunge azienda, partita IVA e indirizzo, e può chiedere che la fattura gli venga inviata per email al check-out. Scegli tu quali campi sono obbligatori."
  - q: "Un ospite può richiedere di nuovo la fattura dopo la partenza?"
    a: "Sì, con Hotelier Tools. Quando il soggiorno è fatturato o concluso, il link dell'ospite offre Send my invoice again. Little Hotelier invia la stessa fattura all'indirizzo della prenotazione, al massimo 3 volte, a 12 ore di distanza. Non viene emesso nulla di nuovo."
  - q: "Hotelier Tools fa parte di Little Hotelier o di Booking.com?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder, Little Hotelier o Booking.com. Si collega con il login Little Hotelier della tua struttura, e la fattura è il documento di Little Hotelier."
---

Per intestare la fattura a un'azienda invece che all'ospite, inserisci ragione sociale, partita IVA e indirizzo dell'azienda nella prenotazione **prima** di generare la fattura. In Little Hotelier questo significa il **Primary contact** nella scheda **Details** della prenotazione, il campo **ID number** e **Organisation**. Se la fattura esiste già, modifica i dati e genera una fattura corretta. Hotelier Tools aggiunge due scorciatoie: un editor **Billing and address** (fatturazione e indirizzo) su ogni prenotazione, e un link privato in cui gli ospiti scrivono da soli i dati della propria azienda.

## "A un altro nome": a chi, o da parte di chi?

Dietro "una fattura a un altro nome" si nascondono due richieste diverse:

- **Intestata A qualcun altro.** Un'azienda paga il soggiorno di un dipendente, o un'agenzia di viaggi paga per il suo cliente. La fattura parte comunque dalla tua struttura; cambia solo il blocco del cliente. È il caso comune, e la maggior parte di questa guida.
- **Emessa DA qualcun altro.** È un'altra attività a emettere la fattura: un'altra società che gestisce alcune delle tue camere, o il proprietario a suo nome per un gruppo di soggiorni. Cambia la tua intestazione, non quella del cliente. È raro, e lo trattiamo alla fine.

Non confonderli mai. L'azienda dell'ospite va nel blocco del cliente, mai nella tua intestazione.

## Cosa deve contenere una fattura aziendale?

Nell'UE una fattura IVA completa comprende data di emissione, un numero progressivo univoco, nome e indirizzo tuoi e del cliente, il numero di partita IVA del cliente quando è il cliente a essere debitore dell'imposta, una descrizione del servizio, il prezzo al netto dell'imposta, l'aliquota IVA e l'importo dell'IVA ([Commissione europea](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)).

In Spagna, l'Agenzia delle Entrate (AEAT) elenca cosa deve riportare una **factura completa** ([AEAT: contenido de las facturas](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/contenido-facturas.html)):

- numero e, se la usi, serie, con numerazione progressiva
- data di emissione, e la data del soggiorno se è diversa
- nome completo o ragione sociale, NIF e indirizzo tuoi **e** del cliente
- una descrizione del servizio, il prezzo unitario al netto dell'imposta ed eventuali sconti
- l'aliquota IVA e l'importo dell'IVA, indicati a parte

Una **factura simplificada** non riporta i dati del cliente. Per l'alloggio è ammessa solo fino a **400 euro IVA inclusa**. Il limite di 3.000 euro vale per i servizi di ristorazione e bar, non per le camere ([AEAT: facturas simplificadas](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2026/capitulo-10-obligac-formales-suj-registro/obligaciones-materia-facturacion/facturas-simplificadas.html)). Un ospite d'affari che vuole detrarre l'IVA ha bisogno della fattura completa intestata all'azienda, quindi chiedi ragione sociale, partita IVA e indirizzo.

## Come mettere il nome di un'azienda su una fattura Little Hotelier

Little Hotelier non ha un interruttore separato per "fatturare a un'azienda". Il suo centro assistenza descrive questo metodo, a novembre 2026 ([Reservations FAQ](https://helpcentre.littlehotelier.com/en/articles/8674048-reservations-frequently-asked-questions)):

1. Apri la prenotazione e vai alla scheda **Details**.
2. In **Primary contact**, scrivi la ragione sociale. La fattura stampa il nome senza le etichette dei campi.
3. Scrivi il numero fiscale dell'azienda nel campo **ID number**. Viene stampato subito sotto la ragione sociale.
4. Aggiungi altri dati dell'indirizzo sotto **Organisation**, se serve.
5. Tieni gli ospiti reali nella scheda **Guests**, come consiglia Little Hotelier.
6. Vai su **Invoices**, clicca **Generate invoice**, poi **Email** > **Invoice** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)).

I tuoi dati in alto (titolo, numerazione, logo) si impostano una volta sola in **Customise invoices** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

**Già emessa?** Modifica i dati, e la scheda **Invoices** mostra **Invoice is outdated**: cliccaci per generare una fattura corretta. Se l'avevi segnata come definitiva, annullala e generala di nuovo ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). In Spagna con VeriFactu, una fattura definitiva si modifica con **Rectify invoice** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

### Ospiti di Booking.com e agenzie di viaggi

Booking.com dice che è la struttura a fatturare l'ospite, a nome dell'ospite o a un altro nome concordato con lui, e che Booking.com non va mai indicata come venditore ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)). Quindi un ospite di Booking.com può chiedere il nome del suo datore di lavoro. Un viaggiatore d'affari che preme **Request invoice** in Booking.com for Business ti manda semplicemente un messaggio con i dati ([assistenza Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)).

Per un'agenzia di viaggi che ti paga direttamente, il cliente è l'agenzia: ragione sociale, partita IVA e indirizzo dell'agenzia vanno in fattura, e il nome del viaggiatore può andare nella descrizione.

## Come possono gli ospiti inviare da soli i dati per la fattura?

Con il solo Little Hotelier, non possono. L'ospite ti scrive, qualcuno ricopia i dati aziendali nella prenotazione, e la richiesta si perde se nessuno se ne occupa prima del check-out. Le email automatiche di Little Hotelier agli ospiti non chiedono i dati per la fattura ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)).

## Il modo più veloce: dati di fatturazione, link per gli ospiti e reinvio in Hotelier Tools

Hotelier Tools lavora sopra il tuo account Little Hotelier. Queste funzioni fanno parte di **Invoice on Leave**, che è in beta.

| Situazione | Dove in Hotelier Tools |
|---|---|
| Hai i dati dell'azienda e vuoi inserirli tu | **Guests** > **Billing and address** nella prenotazione |
| L'ospite deve inviare i dati da solo | **Guest links** (`/invoice-on-leave/links`) |
| Vuoi chiederli a ogni ospite in partenza | **Guest link settings** > **Invite every guest** |
| L'ospite non ha mai ricevuto la fattura | **Send again** nella prenotazione, o **Send my invoice again** sul link dell'ospite |
| La fattura deve partire da un'altra attività | **Invoices in another name** (`/invoices/issuers`) |

### Modifica i dati di fatturazione nella prenotazione

1. Apri **Reservations** (`/reservations`) e clicca sul soggiorno.
2. In **Guests**, trova **Billing and address** ("Who the invoice is made out to. Saved straight to Little Hotelier.", cioè a chi è intestata la fattura, salvato direttamente in Little Hotelier) e clicca **Edit**.
3. Compila **Company**, **Tax ID or document number**, **Address**, **City**, **State or province**, **Postcode** e **Country**, poi **Save**.

La modifica viene scritta nella scheda principale dell'ospite in Little Hotelier. Se qualcuno ha modificato la prenotazione dopo che l'hai aperta, non viene sovrascritto nulla e vedi cosa contiene ora Little Hotelier. Un codice fiscale che non sembra tale (da 8 a 16 lettere e cifre, con almeno una cifra) viene rifiutato. Una volta emessa una fattura, azienda e codice fiscale non si possono più cambiare qui: correggili in Little Hotelier ed emetti di nuovo la fattura.

::screenshot{src="/images/blog/demo/en/reservation-billing-address.webp" alt="Pannello della prenotazione di Camila Berg, una prenotazione Booking.com: la sezione Guests con la scheda Billing and address e il suo pulsante Edit, con Company e Tax ID or document number vuoti, indirizzo Calle Ejemplo 1, città Demo City, CAP 08001 e paese Paesi Bassi" caption="Inserisci l'azienda una volta sola nella prenotazione. Va dritta in Little Hotelier, e la prossima fattura la stampa." path="/reservations"}
::

### Invia all'ospite un link privato

Un link fattura per l'ospite è una pagina privata per una sola prenotazione. L'ospite vede i dati in archivio (in parte nascosti), aggiunge o corregge azienda, partita IVA e indirizzo, e può spuntare **Email me the invoice when I check out** (inviami la fattura per email al check-out).

1. Apri **Guest link settings** (`/invoice-on-leave/links/settings`) e attiva **Guest links**.
2. In **What guests may change**, imposta ogni campo come non richiesto, facoltativo o obbligatorio. Email e telefono non sono mai modificabili: decidono chi riceve la fattura.
3. In **Message for guests**, scrivi il testo in cima al modulo, una volta come predefinito e, se vuoi, una volta per lingua.
4. Scegli **How changes are applied**: **Fill blanks automatically** (i dati nuovi vanno direttamente in Little Hotelier, le modifiche ai dati in archivio aspettano un controllo) oppure **Review everything**.
5. In **Guest links** (`/invoice-on-leave/links`), premi **New link**, trova la prenotazione e scegli **Create and copy link** o **Create and email to the guest**. L'email va all'indirizzo della prenotazione.

Ciò che l'ospite invia e che cambia un dato in archivio compare sotto **Waiting for your review**, con **Approve and apply** o **Reject**. Prima di scrivere, Hotelier Tools rilegge la prenotazione, e un dato che il tuo staff ha cambiato dopo l'invio del link aspetta sempre una persona. Un ospite che spunta la casella del check-out viene iscritto a Invoice on Leave, così la fattura viene generata e inviata per email dopo la partenza.

::screenshot{src="/images/blog/demo/en/guest-invoice-links.webp" alt="Pagina Guest invoice links: i pulsanti New link e Settings, l'introduzione Let guests fill in their own invoice details con quattro passi, Waiting for your review che indica Nothing is waiting for a person, e la tabella All links in cui Greta A. ha usato il suo link, Pierre M. ne ha uno attivo e quello di Aisha M. è scaduto, tutti creati da Automatic invitation" caption="Ogni link, chi l'ha creato e se l'ospite l'ha usato. Ciò che richiede una persona aspetta in cima." path="/invoice-on-leave/links"}
::

Alcune regole di sicurezza sono integrate. Un link mostrato una volta non si può mostrare di nuovo: se lo perdi premi **Get a new link**, che disattiva quello vecchio. I link utilizzabili più volte chiedono sempre prima il cognome o il riferimento della prenotazione, e cinque risposte sbagliate bloccano il link. Un link funziona per almeno 48 ore e al massimo 90 giorni.

### Invita ogni ospite al check-out

Invece di inviare i link uno per uno, attiva **Invite every guest** in **Guest link settings**. Ogni giorno, all'ora che scegli, ogni ospite dei soggiorni che selezioni riceve il proprio link: **On the check-out day** (il giorno del check-out, consigliato), **The day before check-out**, **On the arrival day** o **Another day**. Arriva via **Email** all'indirizzo della prenotazione (Booking.com ed Expedia lo inoltrano), via **WhatsApp** quando un numero di telefono ha il prefisso internazionale, o in entrambi i modi. Ogni soggiorno viene invitato una sola volta.

::screenshot{src="/images/blog/demo/en/guest-invoice-links-invite.webp" alt="Guest link settings, scheda Invite every guest: When impostato su On the check-out day (recommended) alle 11:00, How impostato su Email (recommended), Skip stays already invoiced e Guests can ask for their invoice again entrambi attivi, l'elenco Invitations sent con Run now, e sulla destra What the guest sees, un'anteprima del modulo dei dati di fatturazione con campi facoltativi per ragione sociale, numero di documento o passaporto, tipo di documento, paese, CAP e città" caption="Un'impostazione, e ogni ospite in partenza riceve un link privato per chiedere la fattura." path="/invoice-on-leave/links/settings"}
::

**Skip stays already invoiced** è attivo di default. Se lo disattivi, a quegli ospiti viene detto che la fattura è stata inviata per email, con un link per fargliela reinviare. Un **Reminder** può scrivere agli ospiti che non hanno compilato il modulo dopo 1-14 giorni; invia un nuovo link e quello precedente smette di funzionare.

### Reinvia una fattura già emessa

Quando un ospite dice che la fattura non è mai arrivata, apri la sezione **Invoices** della prenotazione e premi **Send again**. Little Hotelier invia la stessa fattura all'indirizzo della prenotazione. Non viene emesso nulla di nuovo.

Gli ospiti possono farlo anche da soli. Con **Guests can ask for their invoice again** attivo (l'impostazione predefinita), la pagina dell'ospite offre **Send my invoice again** quando il soggiorno è fatturato o concluso. Va sempre all'indirizzo della prenotazione, al massimo 3 volte, a 12 ore di distanza, e la pagina non dice mai se una fattura esiste.

### Le richieste di fattura di Booking.com nell'inbox

Quando un ospite preme la richiesta di fattura di Booking.com, Booking.com invia un messaggio fisso con ragione sociale, numero fiscale e "additional information" (informazioni aggiuntive). L'inbox di Hotelier Tools (alpha) riconosce questi due modelli senza usare l'AI. La sua analisi propone i dati aziendali e la fattura al check-out in un'unica scheda, con una risposta nella lingua dell'ospite. Non cambia nulla finché non approvi la scheda. Vedi [i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages).

### Quando la fattura deve partire da un'altra attività

Se alcuni soggiorni devono essere fatturati **da** un'altra società o dal proprietario, usa **Invoices in another name** (`/invoices/issuers`). È disattivato finché non attivi **Invoice issuer per reservation** in **Settings > Invoices**. Poi:

1. Crea un emittente con **New issuer**: nome, partita IVA, indirizzo, telefoni, email e, se vuoi, titolo della fattura e logo.
2. Nella prenotazione, sotto **Invoices**, scegli **Invoice in another name…** e seleziona l'emittente, oppure **Save and issue invoice**.
3. Hotelier Tools scrive un tag nelle note della prenotazione, sostituisce per qualche secondo i dati della struttura in Little Hotelier con quelli dell'emittente, genera e invia la fattura per email, poi rimette i tuoi dati.

::screenshot{src="/images/blog/demo/en/invoice-issuers-overview.webp" alt="Pagina Invoices in another name: l'avviso Always ask Hotelier Tools for these invoices, e lo schema How it works con tre prenotazioni, una senza tag che stampa Hotel Demo Sol, una con il tag #INVOICE_ISSUER:K7QM# che stampa Acme Rooms S.L., una con il tag #INVOICE_ISSUER:M2LP# che stampa María López (lavoratrice autonoma)" caption="Ogni prenotazione può essere fatturata da un'attività diversa. Solo Hotelier Tools legge il tag." path="/invoices/issuers"}
::

Conosci i limiti prima di usarlo:

- **Emetti queste fatture solo da Hotelier Tools.** Little Hotelier non legge il tag, quindi il suo pulsante di fatturazione stampa i dati della tua struttura.
- **Tutti gli emittenti condividono la tua numerazione delle fatture** in Little Hotelier. In Spagna ogni emittente di norma ha bisogno di una propria serie. Verifica prima con il tuo commercialista.
- **Per qualche secondo, Little Hotelier riporta l'altro emittente.** Un'esecuzione notturna facoltativa (consigliata alle 02:30) emette queste fatture quando nessun altro sta fatturando.
- Una fattura già emessa mantiene il suo emittente. Una correzione è una nota di credito in Little Hotelier.

::demo-cta{path="/invoice-on-leave/links"}
::

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Tutto ciò che fa la funzione di fatturazione è nella [pagina Fatturazione](/tools/bot/invoicing).

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder, Little Hotelier o Booking.com. Si collega con il login Little Hotelier della tua struttura, e la fattura è il documento di Little Hotelier.
::

Guide correlate: [inviare la fattura automaticamente al check-out](/blog/send-invoice-to-guest-at-checkout), [scaricare tutte le fatture di Little Hotelier](/blog/download-all-little-hotelier-invoices), [i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages).

## Riepilogo

- Una fattura per un'azienda ti lascia come venditore e mette ragione sociale, partita IVA e indirizzo dell'azienda nel blocco del cliente.
- In Little Hotelier: ragione sociale in **Primary contact**, numero fiscale in **ID number**, poi **Generate invoice**. Già emessa? Generane una corretta.
- In Spagna un ospite d'affari ha bisogno di una **factura completa**; una fattura semplificata per una camera è ammessa solo fino a 400 euro IVA inclusa.
- Hotelier Tools ti permette di modificare **Billing and address** nella prenotazione, inviare agli ospiti un link privato per compilare i propri dati, invitare ogni ospite al check-out e reinviare una fattura già emessa.
- Le fatture emesse **da** un'altra attività sono una funzione separata, da attivare, con limiti reali: numerazione condivisa, e solo da Hotelier Tools.
