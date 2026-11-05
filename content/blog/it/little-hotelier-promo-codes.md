---
title: "Codici promozionali in Little Hotelier: come crearli, condividerli e controllarli sul tuo booking engine"
seoTitle: "Codici promozionali Little Hotelier: crearli e controllarli"
description: "Crea un codice promozionale sul booking engine di Little Hotelier, condividilo come link, imposta date e soggiorno minimo, evita codici sotto i prezzi."
date: 2026-10-26
category: pricing
tags: [codici promozionali, booking engine, prenotazioni dirette, little hotelier, sconti, prezzi]
keywords: [codice promozionale little hotelier, come creare un codice promozionale little hotelier, little hotelier promotion code booking engine, codice sconto prenotazione diretta hotel, codice promozionale hotel soggiorno minimo, link codice promozionale booking engine, thebookingbutton codice promozionale, codice sconto sito hotel]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/en/promo-codes-list.webp
coverAlt: "Pagina Promo codes in Hotelier Tools: i pulsanti Read from the booking engine e New code, poi i codici DEMOSOL e banco, entrambi Active, ognuno con il suo riepilogo in parole semplici, un prezzo di esempio per un letto in dormitorio il 6 novembre, le prenotazioni degli ultimi 90 giorni, gli avvisi e i pulsanti Edit, Pause ed elimina"
faq:
  - q: "Dove sono i codici promozionali in Little Hotelier?"
    a: "Nelle impostazioni del booking engine, non nel front desk. Nella versione attuale vai su Direct booking > Promotion codes. Nella versione classica vai su My Apps > Direct booking, apri la scheda Setup e clicca il riquadro Promotion Codes."
  - q: "Un codice promozionale di Little Hotelier può richiedere un soggiorno minimo?"
    a: "Non sul codice stesso. Crea una tariffa con il soggiorno minimo che vuoi, collegaci il codice e, nella scheda Promotions di quella tariffa, scegli di mostrarla solo quando viene inserito un codice promozionale collegato."
  - q: "Posso limitare quante volte viene usato un codice promozionale?"
    a: "No. I codici promozionali di Little Hotelier non hanno un limite di utilizzi e non si possono riservare ai nuovi ospiti. Usa le date di prenotazione per dare una fine a ogni codice, e cambia i codici regolarmente."
  - q: "I codici promozionali di Little Hotelier funzionano su Booking.com o Expedia?"
    a: "No. Funzionano solo sul tuo booking engine. Ogni canale ha le sue promozioni, da configurare nella sua extranet. Un codice che pubblichi ovunque può contare come prezzo pubblico ai fini della parità tariffaria, quindi controlla i tuoi contratti con i canali."
  - q: "Come metto in pausa un codice promozionale senza eliminarlo?"
    a: "Il booking engine non ha un interruttore on/off per un codice. Cambia le sue date di prenotazione in modo che finiscano ieri. La funzione Pause di Hotelier Tools fa esattamente questo e conserva le date precedenti, così Resume rimette il codice com'era."
  - q: "Hotelier Tools fa parte di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e modifica un codice solo quando una persona preme il pulsante."
---

I codici promozionali di Little Hotelier si trovano nel suo booking engine. Vai su **Direct booking** > **Promotion codes** (versione classica: **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), crea un codice, imposta uno sconto, le date di prenotazione e di soggiorno, e collega le tariffe a cui si applica. Condividilo come link con `?promotion_code=YOURCODE`. Hotelier Tools aggiunge una pagina che spiega ogni codice in una frase e avvisa quando un codice va sotto il tuo prezzo minimo o si somma ad altri sconti. Puoi mettere in pausa un codice e riattivarlo più tardi.

## Dove sono i codici promozionali in Little Hotelier?

I codici promozionali appartengono al booking engine del tuo sito (direct-book.com), basato su TheBookingButton. Non cambiano le tue tariffe nel front desk né su alcun canale.

- **Versione attuale:** **Direct booking** > **Promotion codes** ([centro assistenza](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)).
- **Versione classica:** **My Apps** > **Direct booking**, la scheda **Setup**, poi il riquadro **Promotion Codes** ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)).

Le etichette qui sotto vengono dal centro assistenza di Little Hotelier, a novembre 2026.

## Come creare un codice promozionale

1. Apri **Promotion Codes** e clicca **Create**.
2. In **Code**, scrivi ciò che gli ospiti inseriranno. Niente spazi, e ogni codice deve essere unico.
3. In **Description**, scrivi il testo che gli ospiti vedono nel booking engine.
4. In **Default rate discount**, scegli una percentuale o un importo, e inseriscilo.
5. Imposta **Available From/To**: le date in cui gli ospiti possono **prenotare** con il codice.
6. Imposta **Applicable From/To**: le notti in cui gli ospiti possono **soggiornare** con il codice.
7. Se vuoi, spunta **Hide Promo Code in reservation summary**.
8. Seleziona le tariffe a cui si applica il codice. Una tariffa può avere un suo sconto, che prevale su quello predefinito.
9. Clicca **Save**.

Fonte: [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Due impostazioni sorprendono. Di default, un codice valido **nasconde tutte le tue tariffe pubbliche**, quindi l'ospite vede solo le tariffe collegate al codice. Per cambiarlo, togli la spunta da **Hide public rates when a Promo Code is applied** in **Setup** > **Properties** > **Customisation**. E il campo **Add Promo Code** è sempre visibile sul booking engine.

## Come condividere un codice promozionale come link

Gli ospiti si dimenticano di inserire i codici. Invia un link che applica il codice al posto loro. In **Promotion codes**, espandi il codice e clicca **Promotion code link** per copiarlo ([centro assistenza](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). Il formato è:

- Europa, Medio Oriente, Africa e Americhe: `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Asia-Pacifico: `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

Anche un **codice allo 0%** è utile: collegalo alle tariffe di una sola tipologia di camera e il link mostra solo quella tipologia (con le tariffe pubbliche nascoste).

## Soggiorno minimo, limiti di utilizzo e nuovi ospiti

Le risposte di Little Hotelier, a novembre 2026 ([centro assistenza](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)):

- **Soggiorno minimo:** i codici non ne hanno. Crea una tariffa con, per esempio, un minimo di due notti, collegaci il codice e, nella scheda **Promotions** della tariffa, scegli "Show only when a linked promotional code is entered" (mostra solo quando viene inserito un codice promozionale collegato).
- **Limiti di utilizzo:** non c'è un tetto a quante volte si usa un codice. Dagli una data di fine e cambia i codici regolarmente.
- **Nuovi ospiti:** il booking engine non sa se un ospite ha già prenotato in passato.
- **Offerte pubbliche:** per uno sconto che vedono tutti, Little Hotelier suggerisce sconti dinamici o un moltiplicatore di tariffa per Direct booking invece di un codice.

## Buone pratiche per i codici promozionali

- **Metti sempre una fine.** Un codice senza date di prenotazione vive per sempre, e i codici vecchi girano sui siti di coupon.
- **Tieni separate date di prenotazione e date di soggiorno.** "Prenota questa settimana per soggiorni a gennaio" sono due finestre, non una.
- **Conosci il tuo prezzo minimo.** Un codice del 15% su una tariffa già scontata può scendere sotto quello che una camera deve rendere. Controlla la notte più bassa, non la media.
- **Attenzione agli sconti che si sommano.** Il codice si applica alla tariffa che mostra il booking engine. Se le tue tariffe web sono già più basse di quelle del front desk, l'ospite ottiene entrambi gli sconti.
- **Un codice, uno scopo.** Un codice per campagna o per partner ti dice quale ha portato prenotazioni.
- **Occhio alla parità.** Un codice che chiunque può trovare funziona come un prezzo pubblico. I gruppi chiusi (newsletter, ospiti abituali, un'azienda locale) sono più sicuri. Controlla i tuoi contratti con i canali.
- **I codici valgono solo per le prenotazioni dirette.** Non arrivano su Booking.com o Expedia, che hanno le loro promozioni.

## Il modo più veloce: ogni codice spiegato, controllato e messo in pausa in Hotelier Tools

Hotelier Tools legge i codici del tuo booking engine e li mostra in parole semplici in **Promo codes** (`/pricing/promo-codes`), sotto Pricing. La pagina è nuova (ottobre 2026). La lettura dei codici è la parte collaudata; la creazione e la modifica da Hotelier Tools non sono ancora state verificate su un booking engine reale, ed è per questo che ogni modifica viene riletta e indicata come confermata o no.

1. Apri **Promo codes** e premi **Read from the booking engine**. Aprire la pagina non legge mai nulla; lo fa il pulsante.
2. Ogni codice mostra il suo stato (**Active**, **Scheduled**, **Paused**, **Expired** o **Does nothing**), un riepilogo di una riga come "10% off the room price (not the extra-guest supplement) on 8 rates. Any booking date. Any stay date." (10% sul prezzo della camera, non sul supplemento per ospite in più, su 8 tariffe; qualsiasi data di prenotazione e di soggiorno), un prezzo di esempio e quante prenotazioni l'hanno usato negli ultimi 90 giorni.
3. Leggi gli avvisi sotto ogni codice, poi usa **Edit**, **Pause**, **Resume** o il pulsante per eliminarlo.

::screenshot{src="/images/blog/demo/en/promo-codes-list.webp" alt="Pagina Promo codes: il codice DEMOSOL, Active e Used for quotes and links, 10% di sconto su 8 tariffe con un prezzo di esempio da 27,09 a 24,38 euro e 14 prenotazioni negli ultimi 90 giorni, tre avvisi sotto; poi il codice banco, Active, 15% di sconto su 1 tariffa nascosta senza codice" caption="Ogni codice in una frase, con l'effetto su un prezzo reale e i problemi che causa." path="/pricing/promo-codes"}
::

### Crea o modifica un codice con un'anteprima

Premi **New code**. Compila **Code** (da 3 a 40 lettere, cifre, - o _; maiuscole e minuscole non contano), **Discount** (**% off the rate**, fino al 90%, oppure **Amount off the rate**), **Description**, **Booking dates**, **Stay dates** e **Rates it applies to** (**Select all public rates** spunta quelle abituali). **What this code will do** mostra il risultato prima che tu prema **Create in TheBookingButton**.

::screenshot{src="/images/blog/demo/en/promo-codes-new-code.webp" alt="Finestra New promo code: codice AUTUMN26, sconto 10 con % off the rate, una descrizione vuota, Show the discount in the booking summary non spuntato, Booking dates e Stay dates vuote, Rates it applies to con Tarifa Flexible e No reembolsable per Doble Estándar spuntate, e What this code will do: 10% off the room price (not the extra-guest supplement) on 2 rates. Any booking date. Any stay date." caption="Date di prenotazione e date di soggiorno sono separate, e l'anteprima dice cosa farà il codice prima di salvare qualsiasi cosa." path="/pricing/promo-codes"}
::

Ogni modifica viene controllata così:

- Il codice viene riletto subito prima della modifica. Se nel frattempo qualcuno l'ha cambiato nel booking engine, ti viene chiesto di rileggerlo.
- La modifica viene inviata una volta, poi riletta. Il risultato è **Confirmed**, **Differs** o **Unknown**. Un risultato sconosciuto non viene mai reinviato da solo: premi **Read again** in **Recent changes**.
- Creare, modificare, mettere in pausa ed eliminare richiedono il permesso **Publish prices**, perché un codice arriva subito agli ospiti. Per eliminare devi digitare il codice.

### Gli avvisi che ti fanno risparmiare

| Avviso | Cosa significa |
|---|---|
| Sotto il tuo prezzo minimo | Con lo sconto, alcune notti dei prossimi 90 giorni scendono sotto il tuo prezzo minimo |
| Si somma al tuo sconto applicato | Le tue tariffe sono già scritte sotto il prezzo consigliato; con il codice, un ospite dal web paga entrambi gli sconti |
| Nasconde le tue tariffe pubbliche | Il codice sblocca tariffe solo con codice, e un ospite che lo usa vede solo quelle |
| Non fa nulla | Nessuna tariffa è collegata: il codice viene accettato e l'ospite vede il prezzo normale |
| Stesso codice, altre maiuscole | Il booking engine non distingue `SUMMER` da `summer` |
| Codice pubblico | I tuoi preventivi e link di prenotazione lo usano, quindi la parità tariffaria di Booking.com potrebbe tenerne conto |
| Modificato fuori da questa app | Qualcuno l'ha modificato in TheBookingButton dall'ultima lettura |

Se la schermata delle promozioni di Little Hotelier (un sistema separato) contiene promozioni, la pagina ti dice anche che il tuo sito non le usa.

### Pausa e ripresa

Il booking engine non ha un interruttore on/off per un codice. **Pause** fa finire ieri le date di prenotazione del codice e conserva le date precedenti. Sconto, tariffe e date di soggiorno restano come sono, e le prenotazioni già fatte mantengono il loro prezzo. **Resume** rimette le date salvate. Se un codice sblocca tariffe prenotabili solo con un codice, la finestra di pausa avvisa che quelle tariffe smettono di essere prenotabili.

### Lettura ogni giorno, e domande in parole semplici

Un'attività programmata, **Read the codes every day** (alle 06:40 di default, creata automaticamente da novembre 2026), tiene aggiornati la pagina e gli assistenti. Si limita a leggere.

Nella chat AI (beta) chiedi "Quali codici sono attivi?" o "Cosa succederebbe se WEB desse il 18%?": l'assistente risponde in base ai codici e mostra l'anteprima di una modifica senza scriverla. Per cambiare un codice mostra una scheda di approvazione, e non succede nulla finché non approvi. Gli sviluppatori hanno le stesse azioni tramite la REST API (`/api/v1/pricing/promo-codes`) e MCP. Gli agenti del browser che usano WebMCP possono solo proporre: aprono il modulo compilato, e il pulsante lo preme una persona.

### Scopri a che prezzo vende davvero il tuo sito

Altri due punti usano il tuo codice:

- **Pricing settings** > **Channels & discounts** (`/pricing/settings/channels`), scheda **What your web really sells at** (a che prezzo vende davvero il tuo sito): **Check the web** legge la tua pagina di prenotazione per le prossime 30 notti, con e senza il tuo codice, e la confronta con la tariffa del front desk e con quanto paga un ospite di Booking.com. Consiglia uno sconto web generale.
- **New reservation** (`/reservations/new`) mostra quanto costa lo stesso soggiorno sul tuo sito, sul tuo sito con il codice, e una stima per Booking.com, accanto alle tariffe con cui prenoti.

Imposta il codice che usano i tuoi preventivi e link di prenotazione in **Direct-booking promo code** nella scheda della struttura.

::demo-cta{path="/pricing/promo-codes"}
::

**Non ancora disponibile:** un'email quando un codice cambia fuori da Hotelier Tools (la pagina lo mostra alla lettura successiva), e limiti che il booking engine stesso non ha, come un tetto agli utilizzi.

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Il resto del motore dei prezzi è nella [pagina Prezzi dinamici](/tools/bot/dynamic-pricing).

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura, e i codici restano nel tuo booking engine.
::

Guide correlate: [prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier), [la commissione di Booking.com](/blog/booking-com-commission), [CTA, CTD, soggiorno minimo e stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Riepilogo

- I codici promozionali di Little Hotelier sono impostazioni del booking engine: **Direct booking** > **Promotion codes**.
- Ogni codice ha uno sconto, date di prenotazione, date di soggiorno e tariffe collegate. Di default nasconde le tue tariffe pubbliche.
- Condividi i codici come link con `?promotion_code=`. Per un soggiorno minimo, collega il codice a una tariffa solo con codice che abbia quel minimo.
- Dai una fine a ogni codice, controllalo rispetto al tuo prezzo minimo, e ricorda che i codici non arrivano alle OTA.
- Hotelier Tools spiega ogni codice in una frase, avvisa su prezzo minimo, sconti sommati e parità, e ti permette di mettere in pausa e riattivare un codice senza perderne le impostazioni.
