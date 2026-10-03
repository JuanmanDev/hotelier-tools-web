---
title: "CTA, CTD, soggiorno minimo e stop sell: cosa significano in Little Hotelier"
seoTitle: "CTA, CTD, soggiorno minimo e stop sell: significato"
description: "CTA blocca i check-in, CTD i check-out, il soggiorno minimo fissa la durata minima, lo stop sell chiude la vendita. Cosa significano e come impostarli."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [cta ctd hotel cosa significa, little hotelier cta ctd, closed to arrival significato, stop sell hotel cos'è, siteminder stop sell, soggiorno minimo hotel]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Raccomandazioni di prezzo in Hotelier Tools per la camera Doble Estándar, dal 3 al 16 ottobre 2026: prezzo attuale e consigliato per notte, una colonna CTA / CTD con interruttori A e D, il soggiorno minimo, una colonna Channel e un pulsante Apply to Little Hotelier"
faq:
  - q: "Che differenza c'è tra closed to arrival e stop sell?"
    a: "Il closed to arrival blocca solo i nuovi check-in in quella data: un ospite arrivato il giorno prima può comunque fermarsi anche quella notte. Lo stop sell chiude la tariffa alla vendita in quella data, quindi nessuna nuova prenotazione può includere quella notte."
  - q: "Lo stop sell è come impostare la disponibilità a 0?"
    a: "Per l'ospite il risultato è lo stesso: la notte non si può prenotare. Dal tuo lato è diverso. Uno stop sell mantiene il numero di camere, quindi riaprire richiede un solo interruttore. Una chiusura camera in Little Hotelier riduce la disponibilità inviata ai canali e non applica uno stop sell."
  - q: "Quando conviene a un piccolo hotel usare il closed to arrival?"
    a: "Usalo per proteggere i soggiorni più lunghi: il sabato di un fine settimana pieno, così gli ospiti devono arrivare il venerdì, o nelle notti di un evento in cui preferisci vendere soggiorni completi. Rivedilo man mano che la data si avvicina e toglilo se la notte è ancora vuota."
  - q: "Perché la mia restrizione non compare su Booking.com o Airbnb?"
    a: "Non ogni tariffa di un canale accetta ogni restrizione. Nella griglia dell'inventario di Little Hotelier un trattino in una cella di canale significa che quel canale non supporta quell'aggiornamento, e gli aggiornamenti oltre la finestra massima di prenotazione di un canale non si sincronizzano. Controlla la configurazione della tariffa del canale in Channel Manager per vedere quali tipi di aggiornamento supporta."
  - q: "Hotelier Tools cambia le restrizioni da solo?"
    a: "No. Le politiche di restrizione vengono proposte notte per notte nella pagina Recommendations e nulla viene scritto finché non applichi. L'autopilota scrive i soggiorni minimi solo se lo consenti a parte e non tocca mai lo stop sell dei canali. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier."
---

In Little Hotelier, **CTA** (closed to arrival, chiuso in arrivo) significa che gli ospiti non possono fare check-in in quella data, e **CTD** (closed to departure, chiuso in partenza) che non possono fare check-out in quella data. Il **soggiorno minimo** (minimum stay) è il numero minimo di notti per cui si può prenotare una camera. Uno **stop sell** chiude una tariffa alla vendita in una data, mentre le camere restano in inventario. Imposti tutto per tariffa della camera in **Front Desk > Inventory**, una data alla volta o con **Bulk Update**.

| Termine | Cosa significa | Uso tipico |
|---|---|---|
| **CTA** (Closed to Arrival) | "Gli ospiti non possono fare check-in in questa data." Chi è arrivato prima si ferma comunque. | Far arrivare gli ospiti il venerdì per un fine settimana pieno. |
| **CTD** (Closed to Departure) | "Gli ospiti non possono fare check-out in questa data." Possono fermarsi quella notte ma non partire quel giorno. | Tenere unito un weekend. |
| **Min stay** (min LOS) | "Numero minimo o massimo di notti per cui si può prenotare una camera" (Min/Max Stay). | Due notti nei weekend degli eventi. |
| **Max stay** | La prenotazione più lunga accettata. | Raro nei piccoli hotel. |
| **Stop sell** | La tariffa è chiusa alla vendita in quella data, su tutti i canali o solo su alcuni. Si chiama **Close Channels** in Front Desk e **Stop Sell** in Channel Manager. | Chiudere una data in fretta: manutenzione, blocco del titolare, un canale da mettere in pausa. |

Le definizioni tra virgolette provengono dal centro assistenza di Little Hotelier: [gestire tariffe, disponibilità e restrizioni nella griglia dell'inventario](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (aggiornato ad agosto 2026).

## CTA e CTD: che differenza c'è?

Entrambe le restrizioni riguardano il **giorno di arrivo o di partenza**, non le notti nel mezzo.

Prendi il weekend di un festival: le notti di venerdì e sabato sono molto richieste, la domenica è tranquilla.

- **CTA sul sabato**: nessuno può fare check-in il sabato. Un ospite che vuole solo la notte di sabato non può prenotarla, ma uno che arriva il venerdì per due notti sì. Vendi tutto il weekend invece di un sabato isolato che lascia vuoto il venerdì.
- **CTD sul sabato**: nessuno può fare check-out il sabato. Un ospite che arriva il venerdì deve fermarsi almeno fino a domenica.

Nessuna delle due restrizioni riguarda gli ospiti che hanno già una prenotazione. Filtrano solo le nuove prenotazioni accettate. In Little Hotelier, CTA e CTD valgono per tutti i tuoi canali, compreso il tuo motore di prenotazione ([video guida su CTA e CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Soggiorno minimo: all'arrivo o "through"?

Un soggiorno minimo (min LOS, minimum length of stay) fissa il numero minimo di notti di una prenotazione. I canali lo applicano in due modi:

- **All'arrivo (on arrival)**: verificato sulla data di arrivo. Un minimo di 2 sul venerdì significa che chi arriva il venerdì deve prenotare almeno 2 notti; chi arriva il sabato può ancora prenotare una notte.
- **"Through"**: verificato su ogni notte del soggiorno. Un minimo di 2 sul sabato significa che ogni prenotazione che include la notte di sabato deve essere di almeno 2 notti, a prescindere da quando inizia.

La griglia di Little Hotelier ha solo **Min Stay** e **Max Stay**. Il modo in cui un canale li interpreta è un'impostazione del canale. Little Hotelier invia il soggiorno minimo e massimo a Booking.com come "through" per impostazione predefinita ([collegarsi a Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Se il tuo account Booking.com usa "Min. stay from arrival", imposta **Use Length of Stay on Arrival** su **Yes** in **My Apps > Channel Manager > Channels > Booking.com > Configure** ([errori di mappatura dei canali](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Se un soggiorno minimo è più alto del massimo, la tariffa viene disattivata automaticamente.

## Cos'è lo stop sell e in cosa è diverso?

Uno stop sell chiude una tariffa alla vendita in una data lasciando invariato il numero di camere. Little Hotelier poggia sul channel manager di SiteMinder, e una notte può avere una tariffa perfettamente valida e non vendersi da nessuna parte perché è in stop sell.

Little Hotelier offre due modi per farlo e puoi usarne uno alla volta:

- **Close Channels** in **Front Desk > Inventory** interrompe la vendita "su tutti i canali collegati (compreso il tuo motore di prenotazione)" per le tariffe e le date selezionate.
- **Stop Sell** in **Channel Manager** chiude canali specifici. Vai su **My Apps > Channel Manager > Inventory**, premi il pulsante blu **Channels** accanto alla tariffa, trova la tariffa del canale e scegli **Stop Sell**. Per un intervallo di date usa **Bulk Update** e imposta **Stop Sell** su **On** ([stop sell per canali specifici](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Gli stop sell di Channel Manager non funzionano finché **Close Channels** è spuntato in Front Desk per le stesse date.

| | Stop sell | Chiusura camera (meno disponibilità) | CTA |
|---|---|---|---|
| Nuove prenotazioni che includono quella notte | Bloccate | Bloccate quando la disponibilità arriva a 0 | Consentite se arrivano prima |
| Il tuo numero di camere | Invariato | Ridotto per quel tipo di camera | Invariato |
| Utile per | Chiudere in fretta, per canale | Camere davvero fuori servizio | Modellare i soggiorni |

Una **Room Closure** (**Front Desk > Calendar**) "riduce la disponibilità inviata ai canali per il tipo di camera chiuso. Non applica uno stop sell" ([chiusure camera](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## Come impostare CTA, CTD e soggiorno minimo in Little Hotelier

### Una data alla volta

1. Vai su **Front Desk > Inventory**.
2. Scegli una vista che mostri i campi che ti servono.
3. Vai alle date e modifica le celle della tariffa della camera: Min Stay, Max Stay, CTA, CTD.
4. Premi **Save**.

### Un intervallo di date con Bulk Update

1. In **Front Desk > Inventory**, premi **Bulk Update**.
2. **When?**: scegli l'intervallo di date.
3. **Which days?**: scegli i giorni della settimana, per esempio solo i sabati.
4. **Which room rates?**: scegli le tariffe.
5. **What changes?**: imposta la restrizione, per esempio un soggiorno minimo di 2 o CTA attivo.
6. Premi **Update**.

Da sapere:

- Le restrizioni si impostano **per tariffa della camera**, non per tipo di camera.
- Le tariffe derivate sono in grigio nella griglia. Modifica la tariffa da cui derivano.
- Front Desk accetta aggiornamenti fino a circa 716 giorni in avanti per impostazione predefinita.

## Come le restrizioni arrivano a Booking.com, Expedia e Airbnb

Little Hotelier invia le tue restrizioni a ogni canale collegato tramite il channel manager, con alcuni limiti ([griglia dell'inventario](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [periodo di aggiornamento dei canali](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **Non ogni tariffa di un canale supporta ogni restrizione.** Un trattino (-) in una cella di canale significa che quel canale non supporta quel tipo di aggiornamento. In Channel Manager, la schermata **Configure** della tariffa di un canale mostra quali tipi di aggiornamento accetta.
- **Le finestre di prenotazione differiscono.** Channel Manager invia aggiornamenti fino a 400 giorni in avanti per impostazione predefinita (fino a 750). Gli aggiornamenti oltre il massimo di un canale non si sincronizzano; per Booking.com il massimo è 545 giorni.
- **Expedia** accetta gli stop sell da Little Hotelier solo a livello di tariffa. Gli stop sell a livello di camera si gestiscono in Expedia Partner Central ([problemi di stop sell su Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** con Enhanced Sync riceve tariffe, disponibilità e restrizioni, ma un campo che modifichi nell'extranet di Airbnb diventa grigio in Channel Manager ([collegamento ad Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Dopo aver impostato una restrizione importante, apri l'extranet del canale e controlla una data.

## Quando conviene usarli a un piccolo hotel?

- **Weekend pieni ed eventi.** Un minimo di due notti nelle notti dell'evento, o CTA sulla notte più richiesta, vende soggiorni completi invece di singole notti che lasciano buchi.
- **Singole notti vuote.** Una notte libera isolata tra due piene si vende solo come soggiorno di una notte. Se un soggiorno minimo la blocca, togli il minimo su quella notte quando la data si avvicina.
- **Vicino alla data.** Le restrizioni sensate a un mese di distanza possono bloccare prenotazioni facili pochi giorni prima. Rivedile ogni settimana.
- **Giorni in cui nessuno può gestire i check-in.** CTA su quei giorni, se le regole della casa lo permettono.
- **Chiudere in fretta.** Usa lo stop sell invece di un prezzo di 999 quando devi togliere una data dalla vendita.

## Il modo più veloce: politiche di restrizione e stop sell in Hotelier Tools

Hotelier Tools lavora sopra Little Hotelier con il tuo login. Invece di impostare le restrizioni data per data, scrivi la politica una volta sola e viene proposta notte per notte, accanto al prezzo. Le funzioni di pricing sono in **alpha**.

### 1. Scrivi la politica una volta sola

Apri **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`). Puoi chiudere gli arrivi o le partenze:

- in giorni della settimana fissi o in date specifiche
- in base all'occupazione o alle camere rimaste
- solo quando le notti prima e dopo sono ancora aperte

Hotelier Tools rileva lo schema dei giorni della settimana che usi già in Little Hotelier e propone di adottarlo. I **weekend packages** facoltativi impostano un soggiorno minimo; sono disattivati per impostazione predefinita e, una volta attivati, il valore predefinito è venerdì e sabato, 2 notti. Un pacchetto non abbassa mai un soggiorno minimo più lungo impostato a mano. Nulla in questa pagina scrive su Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Pagina Arrivals, departures & stays in Hotelier Tools: la regola No arrivals con Every week e i pulsanti dei giorni da Mon a Sun, On these dates, le condizioni An event fills the town e The nights either side are still open, Occupancy above e Rooms left at most, poi l'inizio di No departures" caption="Indica una volta sola quali notti rifiutano un check-in o un check-out. Nulla in questa pagina scrive su Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Controlla e applica notte per notte

In **Recommendations** (`/price-recommendations`), ogni notte mostra il suo stato di arrivo (A) e partenza (D) accanto al prezzo. Cambia gli interruttori dove non sei d'accordo, spunta le notti e premi **Apply to Little Hotelier…**. Nulla cambia finché non confermi.

Per le date singole, **Date rules** (`/pricing/settings/dates`) ha una regola "stay" che imposta solo un soggiorno minimo o una regola di arrivo su quelle notti.

### 3. Controlla e imposta lo stop sell dei canali

Premi **Check channel manager** nella pagina Recommendations. Hotelier Tools legge lo stato di stop sell di SiteMinder con la stessa sessione di Little Hotelier, solo quando premi, e una colonna dei canali mostra aperto, chiuso o misto per ogni notte. Scegli un obiettivo (apri tutto, chiudi tutto, mantieni). Viene inviato **dopo** la modifica del prezzo su Little Hotelier, e solo per le notti in cui quella modifica è riuscita.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Finestra Apply to Little Hotelier per tre notti di Doble Estándar (sab 3 ott, dom 4 ott, lun 5 ott) con tariffe attuali e nuove e colonne Arr e Dep, un avviso che tariffe e restrizioni cambiano subito senza annullamento automatico, un'opzione Send me an email, un'opzione Also update sales in the Channel Manager (SiteMinder) e Apply 3 change(s)" caption="Prezzi, modifiche di arrivo e partenza e lo stop sell di SiteMinder si confermano in un'unica finestra. Nulla cambia finché non applichi." path="/price-recommendations"}
::

L'autopilota non cambia mai lo stop sell e scrive i soggiorni minimi solo se lo consenti a parte.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Riepilogo

- **CTA** blocca i check-in in una data, **CTD** i check-out, il **soggiorno minimo** fissa la prenotazione più breve e **stop sell** chiude la tariffa alla vendita mantenendo il numero di camere.
- In Little Hotelier si impostano per tariffa della camera in **Front Desk > Inventory**, o con **Bulk Update** per un intervallo di date. Lo stop sell per canale sta in Channel Manager.
- Controlla quali restrizioni accetta ogni canale e rivedile ogni settimana man mano che le date si avvicinano.
- Con i [prezzi dinamici di Hotelier Tools](/tools/bot/dynamic-pricing) scrivi la politica una volta, la vedi accanto al prezzo e imposti lo stop sell di SiteMinder dalla stessa pagina. È gratuito per tutti gli hotel fino al 10 gennaio 2027.
- Poi: [prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier) e [trucchi e funzioni nascoste di Little Hotelier](/blog/little-hotelier-tips).
