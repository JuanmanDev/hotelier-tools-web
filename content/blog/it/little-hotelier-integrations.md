---
title: "Integrazioni Little Hotelier 2026: le migliori per contabilità, check-in, prezzi, messaggi e AI"
seoTitle: "Integrazioni Little Hotelier: le migliori nel 2026"
description: "Cosa si collega a Little Hotelier nel 2026: export per Xero e QuickBooks, check-in con Chekin e Duve, strumenti di prezzo, messaggi, AI e script gratuiti."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [integrazioni little hotelier, little hotelier xero integrazione, little hotelier app store, little hotelier widget prenotazione, little hotelier plugin wordpress, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Portale per sviluppatori in Hotelier Tools con schede per REST API & Swagger, configurazione MCP, chiavi API e metodi LH, e un riquadro Authentication con un esempio cURL che usa una chiave API segnaposto"
faq:
  - q: "Little Hotelier si integra con Xero o QuickBooks?"
    a: "Tramite un file, non con una sincronizzazione in tempo reale. Mappi il tuo piano dei conti e i codici IVA in Little Hotelier, poi esporti le fatture definitive come CSV pensato per l'importazione in Xero e QuickBooks. A ottobre 2026 l'App Store non elenca alcuna app di contabilità."
  - q: "Little Hotelier funziona con Zapier?"
    a: "Quando abbiamo controllato, il 3 ottobre 2026, non abbiamo trovato alcuna app di Little Hotelier su Zapier; la sua pagina delle integrazioni per Little Hotelier restituiva un errore di pagina non trovata. Per collegare Little Hotelier ad altri strumenti usa un'app dell'App Store o uno script che legge i tuoi dati tramite un'API."
  - q: "Quanto costano le app dell'App Store di Little Hotelier?"
    a: "Little Hotelier non fa pagare per collegarle. Ogni app stabilisce il proprio prezzo e la pagina dell'App Store di Little Hotelier dice che la maggior parte costa meno di 50 dollari USA al mese. Molte offrono una prova gratuita."
  - q: "Come aggiungo il widget di prenotazione di Little Hotelier a WordPress?"
    a: "In Direct Booking apri la procedura guidata dei widget, scegli un pulsante Book now, un widget di selezione date o un widget personalizzato e copia il codice mostrato. Incollalo in un blocco HTML personalizzato nella tua pagina WordPress. Little Hotelier chiede di copiare il codice, non di riscriverlo."
  - q: "Un'app di revenue management può cambiare i miei soggiorni minimi?"
    a: "Di solito no. Il centro assistenza di Little Hotelier dice che un'app RMS collegata controlla gli aggiornamenti delle tariffe, mentre soggiorno minimo e stop sell restano gestiti in Little Hotelier."
  - q: "Hotelier Tools è nell'App Store di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login di Little Hotelier della tua struttura, quindi lo configuri tu stesso invece di passare dall'App Store."
---

Little Hotelier si collega a software esterni in tre punti: l'**App Store di Little Hotelier** (circa 30 app partner per check-in, messaggistica, upselling, recensioni, accesso senza chiavi e prezzi, a ottobre 2026), i **plug-in del motore di prenotazione** e i suoi **add-on** come Guest Engagement e Dynamic Revenue Plus. La contabilità è un export CSV pensato per Xero e QuickBooks, non una sincronizzazione in tempo reale. Per ciò che manca puoi aggiungere un livello che legge i tuoi dati tramite un'API, oppure uno script gratuito per il browser.

## Dove si trovano le integrazioni di Little Hotelier

| Tipo | Dove si trova | Come si collega |
|---|---|---|
| App dell'App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Contatti il fornitore dell'app, che la configura |
| Plug-in del motore di prenotazione | **Direct booking → Configuration → Plug-in apps** | Incolli le credenziali dell'app e clicchi **Enable** |
| Add-on di Little Hotelier | Il tuo piano ([pagina dei prezzi](https://www.littlehotelier.com/pricing/)) | Attivati da Little Hotelier |
| Canali (OTA) | **Distribution → Channels** | Mappati nel channel manager |

Alcune regole dall'[articolo di aiuto sull'App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- Le app "non si configurano dentro la tua piattaforma". Usi il modulo di contatto nella pagina dell'app e il fornitore la collega.
- Little Hotelier non fa pagare nulla per il collegamento; ogni app ha un proprio prezzo. La [pagina dell'App Store](https://www.littlehotelier.com/app-store/) dice che la maggior parte costa meno di 50 USD al mese.
- La configurazione richiede pochi minuti, o fino a 48 ore per alcune app. L'assistenza per un'app la fornisce il suo fornitore.

I plug-in influiscono solo sul tuo motore di prenotazione. A ottobre 2026 l'[elenco](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) comprende Google Analytics 4 e Meta Pixel, comparatori di prezzo (123compare.me, TripTease), chatbot (HiJiffy, Book Me Bob), Tripadvisor Review Express, fedeltà (The Guestbook, Laasie) e strumenti pubblicitari (Google Ads, Sojern, The Hotels Network, Flip.to e altri).

## Contabilità: Xero, QuickBooks e gli altri

Nell'elenco dell'App Store che abbiamo controllato a ottobre 2026 non c'è nessuna sincronizzazione contabile in tempo reale. Little Hotelier offre un **export contabile**:

1. Imposta prima il tuo piano dei conti e i codici IVA in Xero, QuickBooks o nel tuo software.
2. In Little Hotelier apri **Setup → Accounting exports** (versione classica: **Front Desk → Setup → Accounting Integration**) e inserisci il conto predefinito e i codici IVA per ricavi delle camere, extra, imposte, supplementi carta e costi di servizio.
3. A ogni periodo, apri **Reports → Operational → Accounting**, scegli le date e clicca **Export**.

Vengono esportate solo le fatture contrassegnate come definitive (**final**), in un CSV (o in uno ZIP di CSV per periodi lunghi) "progettato per l'importazione in Xero e QuickBooks" ([guida alla configurazione](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [guida all'export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). In Spagna, la fatturazione elettronica VeriFactu è elencata tra le funzioni dei piani nella [pagina dei prezzi](https://www.littlehotelier.com/pricing/).

È l'aspetto più criticato nelle recensioni. Su [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/) gli utenti scrivono che "i report e la sincronizzazione con i software di contabilità si possono migliorare". Se ciò che il tuo commercialista vuole davvero è il PDF di ogni fattura del trimestre, leggi [scaricare tutte le fatture di Little Hotelier in una volta](/blog/download-all-little-hotelier-invoices).

## Check-in online e registrazione degli ospiti

L'App Store ha diverse app di check-in, con le fasce di prezzo mostrate nella sua pagina (ottobre 2026):

- **Chekin** (0-50 USD/mese): controllo del documento con confronto biometrico, moduli di registrazione digitali, comunicazioni alla polizia e per le statistiche e tassa di soggiorno in 18 paesi e regioni, tra cui Spagna, Italia, Portogallo, Francia, Germania e Thailandia ([articolo di aiuto](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (0-50 USD): check-in online, app per gli ospiti e richieste di recensione.
- **Vikey** (0-50 USD): self check-in e serrature intelligenti.
- **Abitari Kiosk**, **OpenKey** e **Akia**: chiosco, chiavi digitali sul telefono e check-in contactless.

Little Hotelier ha anche un'opzione nativa. Con l'add-on **Guest Engagement**, un modulo di check-in per la conformità può inviare i dati degli ospiti alle autorità in Italia, Spagna, Portogallo, Germania, Svizzera, Austria, Croazia, Repubblica Ceca e Colombia ([fonte](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Chi ha una struttura in Spagna può vedere come si inserisce SES Hospedajes in [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier), e le regole di ogni paese sono in [le regole di registrazione degli ospiti per paese](/blog/guest-registration-rules-by-country).

Se usi Chekin, lo userscript gratuito **Chekin Connection** mostra lo stato del check-in di Chekin dentro la prenotazione di Little Hotelier: ospiti trovati, numeri di telefono e numeri di documento, con un pulsante per copiare il documento nella prenotazione per la fattura.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Prenotazione di Little Hotelier in spagnolo con un pannello Chekin: stato trovato 1 ospite, una tabella con nome, telefono e documento d'identità e i pulsanti Use document e View in Chekin" caption="Lo script gratuito Chekin Connection mostra i dati del check-in senza uscire dalla prenotazione."}
::

Installalo da [Chekin Connection](/tools/ui/show-chekin); la [guida all'installazione](/tools/ui/instructions) richiede pochi minuti.

## Prezzi e revenue management

Le app di revenue management nell'App Store comprendono **RoomPriceGenie**, **Smartpricing**, **Happyhotel** e **Pricepoint**. Il centro assistenza nomina anche **Aiosell** e **Right Revenue** ([fonte](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Un limite da conoscere prima di firmare: il centro assistenza classico dice che un RMS collegato "può controllare gli aggiornamenti delle tariffe, non le restrizioni". Soggiorni minimi e stop sell restano in Little Hotelier ([fonte](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

L'opzione di Little Hotelier è **Dynamic Revenue Plus**, un add-on del piano Pro con suggerimenti di prezzo basati sui dati. Il piano Pro include già i report sui prezzi dei concorrenti e sulla parità tariffaria.

Hotelier Tools aggiunge i prezzi dei concorrenti da Booking.com e Google (beta) e prezzi consigliati con un "Why?" passo per passo (alpha). Nulla cambia in Little Hotelier finché non confermi. Leggi [prezzi dinamici per piccoli hotel su Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Messaggi agli ospiti e WhatsApp

In modo nativo, il **Messaging hub** di Guest Engagement riunisce in un'unica inbox WhatsApp, Airbnb, SMS (tramite Twilio), Booking.com e lo storico delle email. WhatsApp funziona con la WhatsApp Business API: le risposte entro la finestra di 24 ore sono gratuite, i messaggi template sono a pagamento secondo le tariffe di WhatsApp ([fonte](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

Le alternative dell'App Store comprendono **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** e **Zingle**.

::callout{type="tip" title="Gli ospiti di Booking.com non ricevono le tue email?"}
Booking.com blocca email e link da sistemi che non conosce. Little Hotelier chiede di aggiungere `@app.littlehotelier.com` e `@guestjoy.com` come indirizzi email e `siteminder.com` e `guestjoy.com` come link nell'extranet, in **Property → Messaging preferences → Security settings** ([passaggi](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Anche Hotelier Tools ha una inbox per gli ospiti (alpha): WhatsApp, Gmail, Outlook o qualsiasi casella IMAP e i messaggi di Booking.com in un unico elenco, con risposte redatte dall'AI che una persona approva. La sua connessione WhatsApp usa una sessione di WhatsApp Web (WAHA), non la Business API ufficiale. Confronta le opzioni in [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

## Integrazioni AI e API

"Integrazione AI" significa due cose diverse per una struttura che usa Little Hotelier.

**L'AI che vende le tue camere.** Demand Plus include le **AI bookings**: la tua struttura può comparire in ChatGPT e Claude tramite il partner DirectBooker, con tariffe in tempo reale, e gli ospiti completano la prenotazione sul tuo motore di prenotazione. È in beta con 0% di commissione fino al 30 novembre 2026; dal 1° dicembre 2026 si applica il 6% più imposte alle prenotazioni AI completate, e non è possibile rinunciare ([fonte](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbot come HiJiffy e Book Me Bob si integrano nel motore di prenotazione.

**L'AI che lavora sui tuoi dati.** Qui non esiste un'opzione ufficiale. Little Hotelier non dà alle strutture una chiave API per prenotazioni od ospiti (la risposta completa è in [Little Hotelier ha un'API?](/blog/little-hotelier-api)).

Hotelier Tools colma questa lacuna con un'API REST e un server MCP (entrambi in beta). È un prodotto indipendente che si collega con il tuo login di Little Hotelier, salvato cifrato. Con esso puoi:

- fare domande a Claude o ChatGPT su arrivi, saldi o fatture mancanti ([cos'è un server MCP](/blog/what-is-mcp-server-hotels), [collegare ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- riempire ogni mese un foglio Google ([esportare le prenotazioni in Excel](/blog/export-little-hotelier-reservations-excel))
- collegare strumenti che non hanno un'app nell'App Store, con un piccolo script

::demo-cta{path="/developer/rest-api"}
::

## Userscript gratuiti che colmano le piccole lacune

Alcune lacune non richiedono un'integrazione, solo uno schermo migliore. Gli [userscript](/tools/ui) gratuiti girano nel tuo browser tramite Tampermonkey, cambiano solo l'aspetto di Little Hotelier per te e restano gratuiti per sempre. Quelli più utili insieme alle integrazioni qui sopra:

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): una stima della commissione di Booking.com e del tuo netto, dentro la prenotazione.
- [Prices Display](/tools/ui/prices-display): le tue tariffe nella vista calendario.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): un elenco a scelta delle province spagnole che compila anche il paese.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): stampa la fattura senza aprire menu.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Riepilogo di una prenotazione di Little Hotelier in spagnolo con righe in più per costo del bonifico, commissione di Booking.com, commissione totale con IVA e netto approssimativo" caption="Show Booking.com Commissions aggiunge a ogni prenotazione Booking.com una stima di commissione e netto."}
::

Il set completo è nella [pagina delle estensioni per il browser](/chrome-extensions), e la guida [estensioni Chrome gratuite per Little Hotelier](/blog/little-hotelier-chrome-extensions) li spiega uno per uno.

## Prossimi passi

- Ti servono check-in, upselling o recensioni? Parti dall'App Store e chiedi una prova gratuita.
- Ti serve la contabilità? Mappa i tuoi codici una volta in **Setup → Accounting exports**, poi esporta ogni mese le fatture definitive.
- Ti servono i tuoi dati in un foglio, in uno script o in un assistente AI? Usa un livello API come [API & MCP di Hotelier Tools](/tools/bot/api-mcp), gratuito per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027.
