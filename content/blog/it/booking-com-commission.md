---
title: "Commissione Booking.com: che percentuale prende (e come vedere il netto reale in Little Hotelier)"
seoTitle: "Commissione Booking.com: percentuale e netto (2026)"
description: "Non esiste una percentuale unica: paghi quella del tuo contratto, più programmi e commissioni di pagamento. Su cosa si applica, IVA e netto reale."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [commissione booking percentuale, commissione booking b&b, commissione booking affitti brevi, commissione booking iva, calcolatore commissione booking, commissione booking genius]
feature: dynamic-pricing
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Riepilogo di una prenotazione in Little Hotelier (interfaccia in spagnolo) con la commissione di Booking.com, la commissione di pagamento e il netto approssimativo aggiunti da uno script gratuito"
faq:
  - q: "Che percentuale prende Booking.com agli hotel?"
    a: "Booking.com non pubblica una percentuale unica. Paghi quella indicata nel tuo contratto con Booking.com, che dipende dal paese, dal tipo di struttura e dall'accordo firmato. Vedi la commissione di ogni prenotazione nell'Extranet, in Finance > Reservation statements."
  - q: "Booking.com applica la commissione sulla tassa di soggiorno?"
    a: "No. Booking.com non applica commissioni sulle tasse locali come la tassa di soggiorno. Nella maggior parte dei paesi la applica invece sull'IVA, a seconda della legge locale e delle tue General Delivery Terms."
  - q: "Pago la commissione su un no-show?"
    a: "Solo se addebiti all'ospite una penale per il no-show, e in quel caso sull'importo della penale. Se segnali il no-show nell'Extranet entro 48 ore dal check-out previsto e rinunci alla penale, non c'è commissione."
  - q: "Il programma Genius aumenta la mia commissione?"
    a: "Genius non aggiunge una percentuale di commissione, ma lo sconto lo finanzi tu (10% di base, fino al 15% o 20% per i livelli Genius superiori, se li attivi). Preferred Partner, Preferred Plus e Visibility Booster sono invece i programmi che aumentano la commissione."
  - q: "Quando Booking.com fattura la commissione?"
    a: "Una volta al mese, per ogni prenotazione con check-out nel mese precedente. Le fatture vanno pagate entro 14 giorni. Con Payments by Booking.com la commissione può invece essere trattenuta dai tuoi pagamenti."
  - q: "Lo script per le commissioni in Little Hotelier è gratuito?"
    a: "Sì. Lo userscript Show Booking.com Commissions è gratuito per sempre. Funziona nel tuo browser con l'estensione gratuita Tampermonkey e legge solo la pagina della prenotazione che hai aperto."
---

Non esiste una commissione Booking.com unica. Paghi la percentuale del tuo contratto, che dipende dal paese, dal tipo di struttura e dall'accordo, e programmi come Preferred Partner o Visibility Booster la aumentano. Si applica sull'intero importo della prenotazione (nella maggior parte dei paesi IVA inclusa, mai sulla tassa di soggiorno) e Payments by Booking.com può aggiungere una commissione di pagamento: il tuo netto reale è quindi il totale della prenotazione meno tutte queste voci.

Le regole qui sotto sono state verificate sul Partner Help di Booking.com a ottobre 2026. Booking.com aggiorna spesso queste pagine, quindi i link rimandano alla fonte.

## Che percentuale di commissione prende Booking.com da hotel e B&B?

Booking.com definisce la commissione come "a set percentage of the total booking amount" (una percentuale fissa dell'importo totale della prenotazione) per ogni prenotazione ([Partner Help: Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)). Non pubblica una percentuale uguale per tutti: "the exact percentage depends on your country, property type, and the accommodation agreement you signed". I nuovi partner la vedono nel passaggio **Agreement** della registrazione ([Booking.com FAQ](https://join.booking.com/faq.html?lang=en)).

La percentuale viene fissata quando l'ospite prenota. Se la tua commissione è cambiata di recente, le prenotazioni più vecchie mantengono la vecchia percentuale.

Per trovare la percentuale che paghi davvero:

1. Accedi all'Extranet e apri **Finance > Reservation statements**. Ogni prenotazione mostra la sua commissione.
2. Confrontala con il tuo contratto. Per ottenere una copia delle General Delivery Terms vai in **Contracts**, sotto l'icona utente.
3. Se l'estratto mostra una percentuale più alta, apri **Boost performance**: Preferred Partner o Visibility Booster aggiungono una percentuale alla tua commissione base.
4. Con Payments by Booking.com, anche **Finance help** mostra la tua percentuale e la commissione di pagamento.

## Su cosa si applica la commissione di Booking.com?

La commissione copre "the room rate as well as any additional fees you charge—such as cleaning fees, service fees, and costs for no-shows or cancellations" (la tariffa della camera e i costi aggiuntivi che addebiti, come pulizie, servizi, no-show o cancellazioni) e si applica dopo il check-out dell'ospite ([fonte](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Paghi la commissione su:**

- soggiorni completati
- prenotazioni non rimborsabili e parzialmente rimborsabili, che l'ospite si presenti o no
- penali di cancellazione e di no-show che addebiti
- overbooking (non dovuta se sei online da meno di 30 giorni o hai avuto meno di cinque overbooking negli ultimi 12 mesi)

**Non paghi la commissione su:**

- penali di cancellazione a cui scegli di rinunciare
- no-show che segnali nell'Extranet entro 48 ore dal check-out, rinunciando alla penale
- prenotazioni in cui hai segnalato la carta dell'ospite come non valida

**Imposte.** Booking.com non applica commissioni sulle tasse locali come la tassa di soggiorno. "However, in most countries, commission is charged on VAT or GST" (tuttavia, nella maggior parte dei paesi la commissione si applica su IVA o GST), a seconda della legge locale. Le tue General Delivery Terms indicano cosa vale per te.

::callout{type="warning" title="La regola delle 48 ore"}
Segnala no-show, cancellazioni e altre modifiche nell'Extranet entro 48 ore dal check-out. Dopo, Booking.com applica la commissione piena sulla prenotazione originale. La procedura passo passo è in [Booking.com carta non valida o no-show: cosa fare](/blog/booking-com-invalid-card-no-show).
::

## Come Genius, Preferred e Visibility Booster cambiano quello che paghi

- **Genius** non aggiunge alcuna percentuale di commissione, ma lo sconto lo paghi tu. Con l'adesione si applica il 10% alla tipologia di camera più economica e più popolare, e puoi attivare il 15% o il 20% per i livelli Genius superiori. Booking.com afferma che lo sconto standard "is funded by you, the accommodation partner" ([programma Genius](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- **Preferred Partner Program** dà più visibilità e un badge "in exchange for a small increase in commission" (in cambio di un piccolo aumento della commissione). Serve un punteggio di performance di almeno il 70%, verificato ogni 90 giorni ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). **Preferred Plus** richiede un punteggio dell'80% e un investimento maggiore in commissione ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). Booking.com non pubblica la percentuale aggiuntiva: controllala in **Boost performance** nell'Extranet.
- **Visibility Booster** ti permette di scegliere una commissione più alta con un cursore, solo per le date di check-in e i paesi di provenienza degli ospiti che indichi ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## Cosa aggiunge Payments by Booking.com?

Non ci sono costi di attivazione ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). Quello che paghi dipende da come ricevi i pagamenti:

| Modalità di accredito | Costo aggiuntivo |
|---|---|
| Bonifico bancario | Una commissione per il servizio di pagamento, in percentuale su ogni prenotazione completata. Dipende dalla località della struttura. |
| Carta di credito virtuale (VCC) | La commissione della tua banca o del tuo gestore di pagamenti per l'addebito sulla carta. Non la stabilisce Booking.com. |

Se rinunci alla penale di cancellazione di un ospite, non c'è nemmeno la commissione di pagamento. Quando Booking.com gestisce tutti i pagamenti degli ospiti, trattiene da ogni accredito sia la commissione sia la commissione di pagamento. Altrimenti ricevi una fattura a fine mese.

Per vedere entrambe le voci di una prenotazione, apri la scheda **Reservations** dell'Extranet e guarda la colonna **Commission and charges**. In **Reservation details** trovi il dettaglio.

## C'è IVA sulla commissione di Booking.com?

Nell'UE dipende dalla tua partita IVA ([EU VAT and commission invoices](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)):

- **Con una partita IVA valida per le operazioni UE** (Booking.com la verifica nel database VIES dell'UE), la fattura della commissione arriva senza IVA. Resti "responsible for reporting any VAT you may owe" (responsabile di dichiarare l'IVA eventualmente dovuta) al fisco. I commercialisti lo chiamano reverse charge, o inversione contabile.
- **Senza**, Booking.com aggiunge l'IVA alla fattura della commissione. Sugli accrediti netti via bonifico, trattiene la commissione, la commissione di pagamento e l'IVA su entrambe.

Per aggiungere il tuo numero: **Finance > Finance settings > VAT details > Edit details**, conferma che sia valido per le operazioni UE, inseriscilo e salva. Fuori dall'UE le regole cambiano da paese a paese, quindi chiedi al tuo commercialista.

Le fatture della commissione arrivano una volta al mese, per ogni ospite che ha fatto il check-out il mese precedente, e vanno pagate entro 14 giorni. Le fatture non pagate possono chiudere temporaneamente la tua struttura.

## Come vedere il netto di ogni prenotazione Booking.com in Little Hotelier

Il riepilogo della prenotazione in Little Hotelier mostra il totale della camera, gli extra, gli sconti e i costi delle carte. Non mostra quanto trattiene Booking.com. La commissione esatta e la commissione di pagamento di ogni prenotazione sono nell'Extranet (**Reservation statements**, o la colonna **Commission and charges**). Quello che incassi è il totale meno queste voci e le imposte incluse nel prezzo.

### Un esempio concreto: dal prezzo della prenotazione al tuo netto

Sono le cifre degli screenshot qui sotto: una prenotazione Booking.com da 125,18 €, con il 17% di commissione e l'1,3% di commissione di pagamento. Le tue percentuali possono essere diverse.

| Voce | Importo |
|---|---|
| Totale della prenotazione (imposte incluse) | 125,18 € |
| Commissione, 17% del totale | −21,28 € |
| Commissione di pagamento, 1,3% del totale | −1,63 € |
| Imposte incluse nel prezzo | −11,38 € |
| **Netto approssimativo** | **90,89 €** |

Circa un quarto di quanto ha pagato l'ospite non arriva mai a te. Se Booking.com aggiunge l'IVA alla fattura della commissione, sottraila a sua volta.

### Vedilo su ogni prenotazione con uno script gratuito

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Riepilogo di una prenotazione Booking.com in Little Hotelier (interfaccia in spagnolo) con totale della camera, extra, sconto e totale incassato, senza alcuna riga di commissione" caption="Prima: Little Hotelier mostra il totale, non quello che trattiene Booking.com." width="720" height="669"}
::

Per una stima veloce direttamente dentro Little Hotelier, usa lo script gratuito **Show Booking.com Commissions**:

1. Installa l'estensione gratuita Tampermonkey nel browser. La [guida all'installazione](/tools/ui/instructions) ti accompagna passo per passo.
2. Apri [Show Booking.com Commissions](/tools/ui/show-booking-commissions) e clicca su **Install on Tampermonkey**.
3. Apri in Little Hotelier una qualsiasi prenotazione con origine Booking.com. Dopo un paio di secondi compaiono quattro righe sopra i totali: la commissione di trasferimento (1,3%), la commissione di Booking.com (17%), il totale delle trattenute e il netto approssimativo.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Riepilogo di una prenotazione in Little Hotelier con quattro righe in più: commissione di trasferimento 1,3%, commissione Booking.com 17%, totale trattenute e netto approssimativo di 90,89 euro" caption="Dopo: commissione, commissione di pagamento e netto approssimativo su ogni prenotazione Booking.com." width="752" height="715"}
::

Cosa sapere prima di affidarti a questa stima:

- **Le percentuali sono fisse nello script**: 17% di commissione e 1,3% di commissione di pagamento. Se le tue sono diverse, apri lo script nell'editor di Tampermonkey e cambia `0.17` e `0.013`.
- **Le etichette sono in spagnolo** e gli importi in euro.
- **È una stima.** Non conosce Preferred, Visibility Booster né l'IVA aggiunta alla fattura della commissione.
- **Resta nel tuo browser.** Legge la pagina che hai aperto e non invia nulla da nessuna parte.

Altri script gratuiti come questo sono in [estensioni Chrome gratuite per Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da Booking.com, SiteMinder o Little Hotelier. Gli script girano dentro la tua sessione di Little Hotelier e la dashboard di Hotelier Tools si collega con il login Little Hotelier della tua struttura.
::

## Fissa i prezzi tenendo conto della commissione: Channels & discounts

Genius e altri sconti per canale cambiano quello che paga l'ospite, e quindi quello che resta a te. Nella dashboard di Hotelier Tools (i prezzi dinamici sono in alpha), **Pricing settings > Channels & discounts** (`/pricing/settings/channels`) riunisce due valori:

1. **Discount when applying prices** (sconto quando applichi i prezzi). I prezzi che applichi da Recommendations vengono precompilati come "consigliato meno questa %". Con il 5%, un prezzo consigliato di 100,00 viene applicato come 95,00. Lascia 0 per applicare i consigliati così come sono.
2. **What the guest pays per channel** (quanto paga l'ospite per canale). Clicca su **Add a channel** e inserisci lo sconto che quel canale concede ai propri ospiti, come Genius o i prezzi riservati ai membri. La pagina Recommendations mostra poi quanto paga davvero un ospite su ogni canale.
3. Premi **Save changes**.

::screenshot{src="/images/blog/demo/en/pricing-settings-channels-discounts.webp" alt="Pagina Channels and discounts nelle impostazioni dei prezzi di Hotelier Tools: Discount when applying prices impostato al 5% (un prezzo consigliato di 100,00 viene applicato come 95,00) e What the guest pays per channel con il pulsante Add a channel, suggerimenti per Booking Genius 10%, Expedia member price 10% e Agoda insider deal 10%, e nessuno sconto di canale ancora aggiunto" caption="Comunica al motore dei prezzi i tuoi sconti, così i prezzi consigliati mostrano quanto paga davvero l'ospite di ciascun canale." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

Il resto del motore dei prezzi (prezzi dei concorrenti, regole, eventi locali) è spiegato in [prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier) e nella [pagina Dynamic pricing](/tools/bot/dynamic-pricing). La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027; gli script per il browser restano gratuiti.

Guide correlate: [CTA/CTD e stop-sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Riepilogo

- La commissione di Booking.com è la percentuale del tuo contratto. Preferred, Preferred Plus e Visibility Booster la aumentano, e Genius ti costa lo sconto.
- Si applica sull'intero importo della prenotazione, di solito IVA inclusa, mai sulla tassa di soggiorno.
- Payments by Booking.com aggiunge una commissione di pagamento per gli accrediti via bonifico. Nell'UE, una partita IVA valida evita l'IVA sulla fattura della commissione.
- Controlla le cifre esatte in **Finance > Reservation statements** e vedi una stima su ogni prenotazione Booking.com in Little Hotelier con lo script gratuito [Show Booking.com Commissions](/tools/ui/show-booking-commissions).
