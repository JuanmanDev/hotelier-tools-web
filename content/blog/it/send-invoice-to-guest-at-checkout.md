---
title: "Fattura ospite Booking: come inviarla automaticamente al check-out da Little Hotelier"
seoTitle: "Fattura ospite Booking: invio al check-out"
description: "Booking.com non fattura i tuoi ospiti: lo fai tu. Invia la fattura da Little Hotelier a mano o in automatico per email quando l'ospite fa il check-out."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [fattura ospite booking, fattura booking cliente, come inviare fattura ospite booking, little hotelier fattura, fattura hotel al check-out, ospite chiede fattura hotel, fattura booking con iva]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "Pagina Invoice on leave in Hotelier Tools: l'attività Automatic invoicing at check-out eseguita ogni giorno alle 12:00, un intervallo di date con Search reservations e la tabella delle prenotazioni con un pulsante Auto-invoice per ogni soggiorno"
faq:
  - q: "Booking.com invia le fatture agli ospiti?"
    a: "No. Booking.com precisa che la prenotazione è un accordo tra te e l'ospite, quindi è la struttura a dover fornire la fattura, anche quando è Booking.com a incassare il pagamento."
  - q: "Little Hotelier può inviare la fattura per email in automatico al check-out?"
    a: "Da solo no. Le sue email automatiche agli ospiti sono la conferma della prenotazione, la cancellazione, il promemoria prima dell'arrivo e il ringraziamento dopo la partenza. La fattura la invii per email dalla prenotazione, oppure usi uno strumento come Invoice on Leave di Hotelier Tools per farlo dopo il check-out."
  - q: "Perché aspettare il check-out per emettere la fattura?"
    a: "Perché solo allora gli importi sono definitivi. Extra, pagamenti e cambi di data spesso avvengono durante il soggiorno, e una fattura emessa troppo presto va corretta con una nota di credito o una nuova fattura."
  - q: "L'ospite vedrà Hotelier Tools nell'email?"
    a: "No. Hotelier Tools chiede a Little Hotelier di inviare la fattura, quindi parte dal tuo modello di email e dal tuo mittente di Little Hotelier, esattamente come se premessi tu Email > Invoice."
  - q: "E se l'ospite non ha un indirizzo email nella prenotazione?"
    a: "Little Hotelier invia la fattura all'email del contatto principale della prenotazione, quindi senza non c'è dove inviarla. Invoice on Leave segnala un soggiorno passato senza email dell'ospite invece di riprovare ogni giorno, così puoi stampare la fattura o chiedere un indirizzo all'ospite."
---

Booking.com non fattura mai i tuoi ospiti: lo fa la struttura, anche quando è Booking.com a incassare il pagamento. In Little Hotelier la invii dalla prenotazione con **Invoices > Generate invoice**, poi **Email > Invoice**. Per renderla automatica, segna il soggiorno in **Invoice on Leave** di Hotelier Tools: quando l'ospite fa il check-out, un'attività giornaliera fa generare la fattura a Little Hotelier e la invia per email all'ospite.

## Booking.com invia la fattura all'ospite?

No. L'assistenza partner di Booking.com è chiara: ogni prenotazione è un accordo tra te e il tuo ospite, quindi "è tua responsabilità fornire all'ospite una fattura, non di Booking.com", chiunque abbia gestito il pagamento ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)).

La stessa pagina aggiunge tre regole pratiche:

- Emetti la fattura a nome dell'ospite, o a un altro nominativo concordato con lui.
- Non indicare Booking.com come venditore. Il fornitore sei tu.
- Se vieni pagato con carta virtuale, l'intestatario risulta "Booking.com (Agent)", ma devi comunque fatturare l'intero valore del soggiorno.

I viaggiatori d'affari che hanno prenotato tramite Booking.com for Business possono premere **Request invoice**, che in pratica ti manda solo un messaggio ([assistenza Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). Il lavoro ricade comunque sulla tua reception.

## Cosa deve contenere la fattura di un hotel?

Dipende dal tuo paese, ma nell'UE una fattura IVA completa comprende ([Commissione europea](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)):

- data di emissione e un numero progressivo univoco
- nome e indirizzo completi tuoi e del cliente
- il numero di partita IVA del cliente, quando il cliente è debitore dell'imposta (di solito un'azienda)
- una descrizione del soggiorno, il prezzo unitario al netto dell'imposta e la data della prestazione se diversa
- l'aliquota IVA, l'importo dell'IVA e una ripartizione per aliquota

Molti paesi consentono anche una fattura "semplificata" più breve per alcune vendite. Quando un ospite d'affari chiede una fattura, di solito gli serve quella completa, intestata all'azienda e con il suo codice fiscale o partita IVA.

Imposta una volta sola il layout in Little Hotelier in **Front Desk > Setup > Guest Payment Options > Customise invoices**: titolo (**Invoice**, **Tax Invoice** o uno tuo), prefisso e suffisso della numerazione, logo e imposta mostrata inclusa o esclusa. Le modifiche valgono solo per le nuove fatture ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## Come inviare una fattura per email da Little Hotelier (il modo manuale)

1. Assicurati che il soggiorno sia concluso: nella scheda **Details** della prenotazione, imposta lo stato su **Checked-out** e controlla il saldo.
2. Vai alla scheda **Invoices** e clicca **Generate invoice**.
3. Clicca **Email** e scegli **Invoice**. Little Hotelier la invia all'email del contatto principale della prenotazione.

Puoi anche spuntare **Email invoice** quando fai **Record Payment**. Se modifichi la prenotazione dopo, la scheda Invoices mostra **Invoice is outdated**; cliccaci per generare una fattura corretta e inviare quella. Fonti: [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) e [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Per stampare invece, clicca **Print** e scegli **Invoice**. Lo script gratuito [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) aggiunge un link diretto, così salti il menu:

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Piè di pagina di una prenotazione di Little Hotelier (interfaccia in spagnolo) con un link in più Imprimir Factura accanto ai menu Print ed Email" caption="Lo script Extra Invoice Print Button aggiunge un link per la fattura con un clic accanto a Print ed Email." width="604" height="265"}
::

Il problema: è un passaggio manuale per ogni ospite. Le email automatiche di Little Hotelier agli ospiti sono la conferma della prenotazione, la cancellazione, il promemoria prima dell'arrivo e il ringraziamento dopo la partenza ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Nessuna invia la fattura.

## Come inviare la fattura automaticamente quando l'ospite fa il check-out

**Invoice on Leave** di Hotelier Tools (beta) esegue al posto tuo i passaggi manuali qui sopra, dopo il check-out. Segni una prenotazione una volta sola; segnarla non invia nulla in quel momento.

1. Apri **Invoice on Leave** (`/invoice-on-leave`). Se il banner dice che non c'è ancora un'attività, premi **Create the daily task (16:00, after check-out)**.
2. Una fattura viene emessa solo per un soggiorno con **check-out effettuato** in Little Hotelier. Se il tuo team non registra a mano il check-out degli ospiti prima delle 16:00, usa la scheda **Automatic check-out** e premi **Create the daily task (15:05)**. Chiude le partenze del giorno in Little Hotelier, quindi resta disattivata finché non la crei.
3. Trova la prenotazione e attiva **Auto-invoice**. I filtri **Enrolled** e **Not enrolled** mostrano a che punto è ogni soggiorno. Puoi attivarla anche per un ospite ancora in struttura: la fattura parte alla prima esecuzione dopo la sua partenza.
4. Dopo il check-out, l'attività giornaliera chiede a Little Hotelier di generare la fattura e Little Hotelier la invia per email dal tuo modello e dal tuo mittente.
5. Controlla **Pending invoices to send** (`/invoice-on-leave/scheduled`) per vedere cosa è in coda, in scadenza oggi, in ritardo o già fatturato.

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="Pagina Invoice on leave completa: un avviso rosso che nulla fa il check-out degli ospiti in automatico, la scheda Automatic check-out (non ancora configurata) con Create the daily task (15:05), l'attività Automatic invoicing at check-out in esecuzione, il link Pending invoices to send e nove prenotazioni, ciascuna con un pulsante Auto-invoice" caption="Crea l'attività di check-out se ti serve, poi segna il soggiorno con Auto-invoice. La fattura viene creata e inviata per email dopo il check-out dell'ospite." path="/invoice-on-leave" width="1440" height="1526"}
::

Ti serve subito? Ogni riga ha un'azione "process now" per emettere quella fattura immediatamente.

### Cosa lo rende sicuro

- **Il contrassegno resta in Little Hotelier.** L'attivazione viene salvata come tag nelle note della prenotazione in Little Hotelier, così il tuo personale la vede lì.
- **Nessun doppio invio.** Un secondo tag segna "fattura inviata", scritto solo dopo che Little Hotelier accetta l'email. I soggiorni già fatturati non possono essere riattivati.
- **Gli stessi controlli preliminari della fatturazione in blocco.** Una fattura aziendale senza partita IVA o codice fiscale, senza indirizzo fiscale o con un codice in formato errato viene rifiutata invece di essere inviata a metà.
- **Recupero e limiti.** L'attività giornaliera guarda indietro di 8 giorni per recuperare le esecuzioni saltate e legge fino a 100 check-out per esecuzione. Un soggiorno passato senza email dell'ospite viene segnalato una volta sola, non ritentato ogni giorno.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login di Little Hotelier del tuo hotel e la fattura è il documento di Little Hotelier.
::

::demo-cta{path="/invoice-on-leave"}
::

## In che lingua parte la fattura?

Impostala una volta sola in **Settings > Invoices** (`/settings/invoices`): **From the guest's country** (il paese dell'indirizzo dell'ospite sceglie la lingua) oppure **Always the same language**. Se il paese manca o non viene riconosciuto, si usa la tua **Fallback language** (lingua di riserva).

## L'ospite la vuole intestata a un'azienda, o dopo la partenza

**Prima che la fattura esista:** aggiungi ragione sociale, partita IVA o codice fiscale e indirizzo fiscale ai dati dell'ospite nella prenotazione in Little Hotelier. Hotelier Tools rifiuta di emettere una fattura aziendale finché la partita IVA o l'indirizzo fiscale mancano o hanno un formato errato, così all'ospite non arriva nulla di incompleto.

**Dopo l'emissione:** modifica i dati in Little Hotelier, poi usa **Invoice is outdated** per generare una fattura corretta. Se l'avevi già segnata come definitiva, clicca **Cancel invoice**, poi di nuovo **Generate invoice** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). In Spagna con VeriFactu, una fattura definitiva si modifica con **Rectify invoice** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Un link privato in cui gli ospiti compilano da soli i dati della propria azienda è in sviluppo e non ancora disponibile.

Se le richieste di fattura ti arrivano tramite i messaggi di Booking.com, leggi [come gestire i messaggi degli ospiti di Booking.com](/blog/booking-com-guest-messages).

## Come reinvio una fattura?

Apri la prenotazione e usa di nuovo **Email > Invoice**. Un consiglio sui tempi: quando una fattura è **segnata come definitiva**, Little Hotelier non offre più Print né Email per essa. Inviala prima e rendila definitiva dopo, oppure scarica il PDF più tardi dal report delle fatture.

::callout{type="tip" title="Ospiti che pagano con bonifico"}
Lo script [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) aggiunge un pulsante che invia per email le tue coordinate bancarie dalla prenotazione. Non è ancora pubblicato e si configura su richiesta per ogni struttura.
::

## Riepilogo

- È la struttura, non Booking.com, a dover fatturare l'ospite.
- In Little Hotelier: **Invoices > Generate invoice**, poi **Email > Invoice**, idealmente dopo il check-out.
- **Invoice on Leave** di Hotelier Tools la invia per email in automatico dopo il check-out, dal tuo modello di Little Hotelier, con controlli sui dati aziendali e sui duplicati.
- A fine trimestre, [scarica tutte le fatture in una volta](/blog/download-all-little-hotelier-invoices). Tutto ciò che fa la funzione di fatturazione è nella [pagina Fatturazione](/tools/bot/invoicing).
