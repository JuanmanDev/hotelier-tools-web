---
title: "Indagine INE sull'occupazione alberghiera in Spagna: come compilarla da Little Hotelier"
seoTitle: "Indagine INE occupazione alberghiera con Little Hotelier"
description: "Se l'INE ti seleziona, rispondere è obbligatorio (multe fino a 30.050 €). Cosa chiede l'indagine, come funziona IRIA e come compilarla da Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [encuesta ocupación hotelera ine, indagine ine hotel spagna, ine hotel occupancy survey, iria ine encuesta, encuesta ine obligatoria multa, encuesta ine hoteles, little hotelier ine]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (indagine INE HOT) in Hotelier Tools dal 27 settembre al 3 ottobre 2026: 8 arrivi, 24 pernottamenti, 3,4 ospiti al giorno e 3 con dati mancanti, sopra le schede Daily summary, By guest origin, Rooms, ADR by client e Data quality"
faq:
  - q: "L'indagine INE sull'occupazione è obbligatoria per un piccolo hostal o B&B?"
    a: "Sì, se l'INE ha selezionato la tua struttura. L'indagine riguarda tutte le strutture di tipo alberghiero in Spagna, compresi hostales e pensiones, e il questionario INE indica che rispondere è obbligatorio ai sensi della legge spagnola sulla statistica. Se hai ricevuto una lettera o un'email dell'INE con numero d'ordine e password, devi rispondere."
  - q: "A quanto ammonta la multa per chi non risponde all'indagine INE?"
    a: "Il questionario INE cita la legge sulla statistica: da 60,10 a 300,51 euro per le infrazioni lievi, da 300,52 a 3.005,06 euro per quelle gravi e da 3.005,07 a 30.050,61 euro per quelle molto gravi, come l'invio di dati falsi. Una risposta tardiva o mancante è lieve, a meno che non danneggi seriamente la statistica."
  - q: "L'indagine INE richiede i numeri di passaporto o DNI degli ospiti?"
    a: "No. L'INE chiede totali: quanti ospiti sono arrivati e quante notti si sono fermati, raggruppati per paese di residenza o regione spagnola, più camere, tariffe e personale. Non vengono inviati numeri di documento, nomi o indirizzi. I dati di identità degli ospiti vanno a SES.Hospedajes, che è un obbligo separato."
  - q: "L'indagine INE considera la nazionalità o il luogo di residenza dell'ospite?"
    a: "Il luogo di residenza. L'INE classifica i viaggiatori in base alla residenza: i residenti in Spagna per regione e tutti gli altri per paese. Un cittadino tedesco che vive a Valencia conta come residente a Valencia, quindi assicurati che paese e provincia dell'indirizzo dell'ospite siano compilati."
  - q: "Posso usarlo per appartamenti turistici o case rurali?"
    a: "Appartamenti, campeggi, case rurali e albergues rispondono a questionari INE propri. Hotelier Tools prepara l'indagine alberghiera (HOT) per le strutture di tipo alberghiero, come hotel, hostales e pensiones."
  - q: "Hotelier Tools è un prodotto ufficiale dell'INE o di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da INE, SiteMinder o Little Hotelier. Legge le tue prenotazioni con il tuo login di Little Hotelier e invia il report tramite il sistema IRIA dell'INE con l'accesso IRIA della tua struttura."
---

Se l'INE (l'Istituto nazionale di statistica spagnolo) ha selezionato il tuo hotel o hostal per la sua indagine sull'occupazione, rispondere è obbligatorio. Il modulo dell'INE cita multe da 60,10 a 30.050,61 euro. Rispondi sul portale web **IRIA** dell'INE oppure inviando un file XML. In ogni caso comunichi arrivi e pernottamenti per luogo di residenza degli ospiti, camere occupate, tariffe medie per tipo di cliente e personale.

Little Hotelier contiene già la maggior parte di questi dati. Questa guida, pensata per chi gestisce una struttura in Spagna, spiega cosa chiede l'INE, come raccogliere i dati da Little Hotelier e come Hotelier Tools prepara, controlla e invia il report al posto tuo.

::callout{type="info" title="Ultima verifica: ottobre 2026"}
Le informazioni qui sotto provengono dalla [metodologia 2025 dell'indagine alberghiera](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) dell'INE e dal suo [questionario alberghiero](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). Per date e scadenze fa sempre fede la lettera o l'email che hai ricevuto dall'INE. I nomi ufficiali restano in spagnolo, con la spiegazione in italiano.
::

## Cos'è l'indagine INE sull'occupazione alberghiera (encuesta de ocupación hotelera)?

Il nome ufficiale è **Encuesta de Ocupación en Alojamientos Turísticos** (indagine sull'occupazione negli alloggi turistici). La parte dedicata agli hotel è la **Encuesta de Ocupación Hotelera (EOH)**. L'INE la usa per pubblicare ogni mese i dati su viaggiatori, pernottamenti, occupazione e posti di lavoro negli hotel, per la Spagna, ogni regione e le principali zone turistiche.

Riguarda ogni *establecimiento hotelero* (struttura alberghiera): hotel, aparthotel, motel, **hostal**, **pensión**, fonda e casa de huéspedes. Appartamenti turistici, campeggi, case rurali e *albergues* (ostelli) hanno questionari propri, nella stessa famiglia di indagini ([INE: statistiche su alloggi e turismo](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Chi deve rispondere?

Non tutti gli hotel. L'INE estrae un campione casuale per provincia, categoria e dimensione. Gli hotel a cinque stelle e le strutture più grandi di ogni gruppo sono sempre inclusi. Una struttura selezionata resta di norma nel campione per quattro anni, con circa un quarto del campione rinnovato ogni anno ([metodologia, sezione 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Se sei selezionato, l'INE ti scrive con un **numero d'ordine** (*número de orden*, spesso indicato come "NOrden") e una password per il suo portale. Quel messaggio ti dice che l'indagine ora riguarda te.

## L'indagine INE è obbligatoria? A quanto ammonta la multa?

Sì, una volta che sei stato selezionato. Il questionario riporta la dicitura *"Estadística de cumplimentación obligatoria"* (statistica a compilazione obbligatoria). La legge spagnola sulla statistica (Ley 12/1989, LFEP) stabilisce che chi risponde deve farlo "con veridicità, esattezza, completezza e nei termini stabiliti" (articolo 10.2). Le leggi 4/1990 e 13/1996 rendono obbligatoria questa indagine.

Le multe riportate nel modulo INE (articolo 51 LFEP):

| Infrazione | Esempio nella legge | Multa |
|---|---|---|
| Lieve (*leve*) | Dati tardivi, mancanti o incompleti, senza danno grave | da 60,10 a 300,51 euro |
| Grave (*grave*) | Come sopra, con grave danno alla statistica | da 300,52 a 3.005,06 euro |
| Molto grave (*muy grave*) | Dati falsi o rifiuto reiterato | da 3.005,07 a 30.050,61 euro |

Gli esempi derivano dall'articolo 50 della [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Le tue risposte sono protette dal segreto statistico (articolo 13 LFEP). L'INE dichiara di non condividere i dati individuali con altre amministrazioni, salvo gli uffici statistici vincolati dallo stesso segreto ([informazioni INE per i rispondenti](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## Quali dati chiede l'indagine INE?

| Cosa chiede l'INE (termine spagnolo) | Cosa comunichi | Dove lo trovi |
|---|---|---|
| *Viajeros entrados* | Ospiti arrivati, per luogo di residenza | Prenotazioni e indirizzi degli ospiti |
| *Pernoctaciones* | Notti di soggiorno, per luogo di residenza | Date del soggiorno e numero di ospiti |
| *Habitaciones ocupadas* | Camere occupate (uso doppio o singolo) | Assegnazione delle camere |
| *Camas supletorias* | Letti aggiunti e culle usati | I tuoi registri |
| *Personal ocupado* | Personale del mese: non retribuito, retribuito fisso, retribuito temporaneo | Buste paga, non Little Hotelier |
| *ADR por tipo de cliente* | Tariffa media giornaliera e quota di camere per tipo di cliente | Tariffe e canale di prenotazione |

Tre dettagli su cui molti sbagliano:

- **Residenza, non nazionalità.** L'INE raggruppa gli ospiti in base a dove vivono: i residenti in Spagna per regione (il file XML usa la provincia), tutti gli altri per paese. Un cittadino francese che vive a Málaga conta come Málaga.
- **L'ADR ha regole precise.** L'INE vuole la tariffa di una camera doppia, solo pernottamento (senza colazione né pensione), al lordo delle commissioni e senza IVA. La suddivide in nove tipi di cliente: tour operator tradizionale, agenzia di viaggi tradizionale, aziende, privati, gruppi, prenotazione diretta sul tuo sito, tour operator online, agenzia di viaggi online e altri.
- **Le culle sono letti aggiunti.** L'INE conta le culle come *camas supletorias*. Dichiarale, altrimenti i pernottamenti che comunichi possono superare i tuoi posti letto.

L'indagine non chiede numeri di passaporto o DNI. Sono dati aggregati, non un registro degli ospiti. La registrazione degli ospiti presso la polizia è un obbligo separato: leggi [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Quali date copre e quando va inviata?

La metodologia 2025 dell'INE indica che il questionario di base copre **sette giorni consecutivi di ogni mese, scelti a caso**, in modo che tutti gli hotel insieme coprano l'intero mese. Agli hotel a tre, quattro e cinque stelle vengono chiesti anche i totali dell'intero mese. Un file XML contiene tutti i giorni del mese di riferimento ([metodologia, sezioni 7 e 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Il questionario complementare (personale e ADR) va inviato entro **cinque giorni di calendario dalla fine del mese** a cui si riferiscono i dati, secondo il [modulo INE](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

In pratica, usa esattamente le date e la scadenza indicate nella richiesta che l'INE ha inviato alla tua struttura.

## Come si invia: modulo web IRIA o file XML?

1. **Modulo web IRIA.** IRIA è il portale online di raccolta dati dell'INE ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Inserisci il numero d'ordine e la password del messaggio dell'INE, poi digiti i dati in un modulo che riproduce il questionario cartaceo. Quando invii, IRIA rilascia un certificato con un numero univoco ([guida di IRIA](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Conservalo.
2. **File XML.** Un software gestionale può generare un file nel formato pubblicato dall'INE e inviarlo, così nessuno ricopia i dati. Il [questionario mensile](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) dell'INE rimanda anche al sistema ARCE per il caricamento degli XML.

Farlo a mano significa passare in rassegna ogni prenotazione del periodo e contare ospiti e notti per paese e per provincia spagnola. È qui che si perde tempo, ed è qui che si insinuano gli errori.

## Come ottenere paese e provincia corretti in Little Hotelier

La scheda ospite di Little Hotelier ha già i campi che servono all'INE: **Country** e **Province/Region** nell'indirizzo, più **Nationality**. Il problema è che le prenotazioni da Booking.com e da altri canali spesso arrivano senza indirizzo, quindi i campi restano vuoti.

Tre abitudini risolvono quasi tutto:

1. Compila paese e provincia al check-in, dal documento dell'ospite o con una domanda veloce.
2. Installa lo userscript gratuito [Easy Save Province and Country](/tools/ui/easy-save-province-country). Quando clicchi sul campo provincia, mostra l'elenco delle province spagnole e, scegliendone una, imposta il paese su Spagna.
3. Lascia che i [controlli automatici](/tools/bot/automated-checks) segnalino le prenotazioni senza paese o provincia dopo la prenotazione, all'arrivo e al check-out, quando l'ospite è ancora in struttura e puoi chiederglieli.

::screenshot{src="/images/scripts/easy-save-province-country/to.webp" alt="Scheda ospite di Little Hotelier con l'elenco delle province spagnole di Easy Save Province and Country aperto sotto il campo Province/Region" caption="Lo userscript gratuito trasforma il campo provincia in un elenco a scelta e imposta il paese al posto tuo."}
::

## Il modo più veloce: il report INE direttamente da Little Hotelier

A ottobre 2026 non abbiamo trovato nel centro assistenza di Little Hotelier nessuna esportazione per l'indagine INE. Hotelier Tools colma questa lacuna: legge le tue prenotazioni con il tuo login di Little Hotelier, calcola i dati INE, li convalida e invia l'XML tramite IRIA. La funzione dei report INE è contrassegnata come stabile.

### 1. Configura la tua struttura una volta sola

Apri **INE Setup** (`/ine-setup`). Inserisci il tuo numero d'ordine IRIA (**NOrden**) e la password, premi **Test IRIA connection**, compila indirizzo e capacità della struttura e scegli tipo e categoria. Questi dati finiscono nell'intestazione dell'XML. La password viene salvata cifrata e non è mai mostrata in chiaro.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="Pagina INE setup, Establishment, in Hotelier Tools: un avviso di demo in sola lettura, la scheda di accesso IRIA con il campo NOrden, la password IRIA mascherata e salvata cifrata con il pulsante Test IRIA connection, poi i dati della struttura con ragione sociale e indirizzo" caption="Inserisci una sola volta l'accesso IRIA e i dati della struttura." path="/ine-setup"}
::

### 2. Genera il report per le date richieste dall'INE

Apri **Guest Origins** (`/reports/guest-origins`), scegli le date indicate nella richiesta dell'INE e premi **Generate report**. Hotelier Tools legge quelle prenotazioni e conta arrivi e pernottamenti di ogni giorno per regione spagnola o paese, più camere occupate, letti aggiunti e tariffa media per tipo di cliente. Le schede dividono il risultato in **Daily summary**, **By guest origin**, **Rooms**, **ADR by client** e **Data quality**.

Se la casella che riceve le email dell'INE è collegata alla inbox di Hotelier Tools, l'email dell'INE mostra una scheda con un pulsante che genera il report esattamente per le date richieste. La password IRIA monouso resta nell'email.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="Scheda By guest origin del report Guest Origins: arrivi e soggiorni per ogni notte dal 27/9 al 3/10, raggruppati sotto Other countries (Irlanda, Paesi Bassi, Regno Unito) e Missing/Unknown per gli ospiti senza provincia spagnola, sopra l'inizio della scheda di invio all'INE" caption="Arrivi e soggiorni di ogni notte per provenienza degli ospiti, con gli ospiti senza provincia elencati a parte, così puoi correggerli." path="/reports/guest-origins"}
::

### 3. Correggi gli ospiti senza provenienza

Le prenotazioni senza nazionalità o provincia vengono segnalate. Correggile in Little Hotelier, poi aggiorna solo quelle righe. Non devi rigenerare l'intero report.

### 4. Convalida, controlla l'anteprima e invia

Premi **Validate for the INE**, poi **Preview XML** per vedere esattamente cosa verrà inviato, quindi **Send to the INE**. Il report va a IRIA e la ricevuta dell'INE (*justificante*) viene salvata insieme al report.

### 5. Conserva tutte le ricevute

**Saved Reports** (`/reports/list`) elenca ogni report con periodo, stato e ricevuta INE. Un report inviato non può più essere modificato né eliminato, ma puoi comunque scaricarne l'XML.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Pagina Saved reports in Hotelier Tools con tre report sulla provenienza degli ospiti in stato Draft, con le colonne Period, Status, INE receipt, Staff e Created, le azioni View ed elimina e il pulsante New report" caption="Ogni report con il suo periodo, lo stato e, una volta inviato, la ricevuta dell'INE." path="/reports/list"}
::

::callout{type="note" title="Provarlo nella demo"}
La demo pubblica ha un hotel fittizio con un report INE salvato. L'invio all'INE è disattivato, quindi nulla arriva all'INE, e non devi mai inserirvi credenziali IRIA reali.
::

::demo-cta{path="/reports/guest-origins"}
::

### Perché IRIA rifiuta un questionario?

Gli sviluppatori di un PMS alberghiero open source che hanno risolto i rifiuti ricorrenti hanno elencato queste cause ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)):

- il questionario alberghiero inviato per una struttura registrata come appartamenti
- un intervallo di date a cavallo di due mesi, che ripete i numeri dei giorni nel file
- culle o letti aggiunti non dichiarati, per cui i pernottamenti superano i letti dichiarati
- un ospite di un paese senza codice ISO standard, che lascia il paese vuoto

Esegui la convalida prima di ogni invio e fai in modo che tipo e categoria INE nella configurazione coincidano con quelli che l'INE ha in archivio.

## Riepilogo

- L'indagine INE è obbligatoria una volta che l'INE seleziona la tua struttura, e le multe arrivano a 30.050,61 euro per dati falsi.
- Chiede totali per residenza degli ospiti (non nazionalità), camere, letti aggiunti, ADR per tipo di cliente e personale. Nessun numero di documento.
- Si invia su IRIA a mano, oppure come file XML da un software.
- Tieni compilati paese e provincia in Little Hotelier, con lo [userscript per le province](/tools/ui/easy-save-province-country) gratuito e i [controlli automatici](/tools/bot/automated-checks).
- I [report INE di Hotelier Tools](/tools/bot/ine-reports) preparano, convalidano e inviano il report tramite IRIA e conservano le ricevute. È gratuito per tutti gli hotel fino al 10 gennaio 2027. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder, Little Hotelier o INE.

Per il registro degli ospiti della polizia e le regole di altri paesi, leggi [le regole di registrazione degli ospiti per paese](/blog/guest-registration-rules-by-country).
