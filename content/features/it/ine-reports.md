---
title: "L'indagine INE sull'occupazione alberghiera da Little Hotelier"
---

I report INE costruiscono l'indagine INE spagnola sull'occupazione alberghiera a partire dalle tue prenotazioni di Little Hotelier: arrivi e pernottamenti per regione spagnola o paese, camere occupate, letti aggiuntivi e tariffa media per tipo di cliente. Hotelier Tools convalida i dati, invia l'XML tramite il sistema IRIA dell'INE e conserva la ricevuta.

## Come funziona

1. **Configura una volta la tua struttura.** In **INE Setup** (`/ine-setup`), inserisci il numero d'ordine IRIA (NOrden) e la password, premi **Test IRIA connection** e compila indirizzo, capacità, tipo e categoria per l'intestazione dell'XML.
2. **Genera il report.** In **Guest Origins** (`/reports/guest-origins`), scegli le date indicate nella richiesta dell'INE e premi **Generate report**. Le schede dividono il risultato in riepilogo giornaliero, provenienza degli ospiti, camere, ADR per cliente e qualità dei dati.
3. **Correggi gli ospiti senza provenienza.** Le prenotazioni senza nazionalità o provincia vengono segnalate. Correggile in Little Hotelier e aggiorna solo quelle righe.
4. **Convalida, anteprima e invio.** Premi **Validate for the INE**, poi **Preview XML**, poi **Send to the INE**. La ricevuta dell'INE viene salvata con il report.
5. **Conserva la cronologia.** **Saved Reports** (`/reports/list`) elenca ogni mese con il suo stato e la ricevuta.

Se la casella che riceve le email dell'INE è collegata alla posta in arrivo degli ospiti, la richiesta dell'INE mostra un pulsante che genera il report esattamente per le date richieste.

Cosa chiede l'indagine, le sanzioni e i rifiuti di IRIA da evitare sono in [come compilare l'indagine INE sull'occupazione alberghiera](/blog/ine-hotel-occupancy-survey).

## Cosa ti serve

- Una richiesta dell'INE con il tuo numero d'ordine e la tua password. L'indagine si applica solo dopo che l'INE ha selezionato la tua struttura.
- Little Hotelier collegato in **Credentials**.
- Paese e provincia degli ospiti compilati. L'INE conta gli ospiti in base a dove vivono, non alla nazionalità. Lo script gratuito [Easy Save Province and Country](/tools/ui/easy-save-province-country) e i [controlli automatici](/tools/bot/automated-checks) aiutano a mantenerli completi.

## Limiti e da sapere

- **Stato: stabile.**
- Costruisce il questionario alberghiero per le strutture di tipo alberghiero: hotel, hostales e pensiones. Appartamenti turistici, campeggi, case rurali e albergues rispondono ad altri questionari dell'INE.
- Un report inviato non può più essere modificato né eliminato, ma puoi ancora scaricarne l'XML.
- La tua password IRIA viene memorizzata cifrata e non è mai mostrata in chiaro.
- Nella demo pubblica l'invio all'INE è disattivato. Non digitare mai lì credenziali IRIA reali.
- Hotelier Tools non è affiliato con l'INE, SiteMinder o Little Hotelier.
