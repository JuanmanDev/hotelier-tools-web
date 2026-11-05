---
title: "Un indirizzo email dell'hotel per le fatture dei fornitori e i login dei portali: come funzionano gli indirizzi di sola ricezione"
seoTitle: "Indirizzo email hotel per fatture fornitori e login"
description: "Dai al tuo hotel un indirizzo privato di sola ricezione per le fatture dei fornitori e uno per ogni login. Niente password IMAP, nulla condiviso tra hotel."
date: 2026-11-01
updated: 2026-11-05
category: operations
tags: [email, fatture fornitori, little hotelier, booking.com, expedia, sicurezza]
keywords: [indirizzo email per fatture fornitori, email dedicata fatture passive, email per ricevere fatture hotel, indirizzo email solo ricezione, email separata utente little hotelier, email utente extranet booking.com, inoltrare fatture al commercialista email, casella fatture hotel]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/en/hotel-email-invoice-address.webp
coverAlt: "Scheda Invoice address in Hotelier Tools con l'indirizzo inv-qqxyc2dsnf@in.hotel-demo.invalid (in.hotel-demo.invalid è il dominio segnaposto della demo), i pulsanti Copy e New address, e Recent mail: un'email d'ordine trattenuta per revisione perché non c'era alcun file di fattura allegato, una modifica delle coordinate bancarie trattenuta perché sembra una frode e la fattura HE-2026/1102 di Horno Ejemplo importata; sotto, Upload an .eml file e l'attività Read the hotel mailbox in pausa"
faq:
  - q: "Cos'è un indirizzo email di sola ricezione per un hotel?"
    a: "Un indirizzo che accetta solo posta e non ne invia mai. In Hotelier Tools ogni struttura può averne uno suo, come inv-7k2m9qx4hp@in.hotelier.tools per le fatture dei fornitori. Quello che arriva lì finisce nell'account di quella struttura, senza password IMAP né accesso Microsoft."
  - q: "Un altro hotel può vedere cosa viene inviato al mio indirizzo?"
    a: "No. Ogni indirizzo e ogni login appartiene a una sola struttura. L'indirizzo è fatto di caratteri casuali, quindi non rivela il nome del tuo hotel, e nessuno può indovinare da esso i tuoi altri indirizzi."
  - q: "in.hotelier.tools diventerà il mio login di Little Hotelier o Booking.com?"
    a: "No. Il dominio di Hotelier Tools non diventa mai il tuo login principale né la tua email di recupero da nessuna parte. Un login di servizio è un utente in più che aggiungi alla tua extranet, e puoi rimuoverlo quando vuoi."
  - q: "Cosa succede alla posta inviata a un indirizzo che non esiste?"
    a: "Viene scartata in silenzio, senza messaggio di errore al mittente. Così nessuno può scoprire quali indirizzi esistono. La posta inviata a un indirizzo fatture ritirato continua ad arrivare per 30 giorni, poi viene scartata anche quella."
  - q: "C'è un limite alla posta che un indirizzo può ricevere?"
    a: "Sì. Ogni struttura può ricevere 100 messaggi al mese sul server di posta di Hotelier Tools. Oltre il limite, i messaggi vengono conservati e gestiti quando inizia il mese successivo o quando l'assistenza alza il limite. La tua casella collegata non conta mai."
  - q: "Hotelier Tools fa parte di Little Hotelier, Booking.com o Expedia?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder, Little Hotelier, Booking.com o Expedia. Si collega con i login della tua struttura."
---

Hotelier Tools dà a ogni struttura i suoi indirizzi email di sola ricezione sul dominio `in.hotelier.tools`. Uno è per le fatture dei fornitori: i fornitori inviano lì i loro PDF, foto e fatture elettroniche, e ognuna aspetta in **Received invoices** (fatture ricevute) che tu la controlli. Non servono password IMAP né accesso Microsoft. Gli altri sono uno per portale (Little Hotelier, Booking.com, Expedia), per un login dedicato "Hotelier Tools come utente". A novembre 2026 gli inviti che arrivano a questi indirizzi vengono lasciati a una persona, non accettati in automatico.

## Cos'è un indirizzo email di sola ricezione per un hotel?

È un indirizzo che accetta posta e non ne invia mai. Ognuno ha questo aspetto:

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **La prima parte dice a cosa serve.** `inv` sono le fatture dei fornitori; `lh`, `bk` ed `ex` sono i login di Little Hotelier, Booking.com ed Expedia. È quel codice a decidere dove va un messaggio. Il mittente e il contenuto non lo decidono mai.
- **Il resto è casuale.** Dieci caratteri, senza `0/o` o `1/l/i` che si possano confondere. Non contiene il nome né l'ID del tuo hotel: solo il database di Hotelier Tools sa a quale struttura appartiene.
- **Ogni scopo ha il suo codice.** Se un fornitore conosce il tuo indirizzo per le fatture, non sa nulla dei tuoi indirizzi di login.
- **Non invia nulla.** Il dominio pubblica una regola secondo cui nessun server può inviare posta a suo nome, quindi nessuno può nemmeno inviare dal tuo indirizzo.

## Perché non usare la casella dell'hotel?

Puoi farlo, e molti hotel partono da lì. La buona pratica abituale è un indirizzo separato solo per le fatture (per esempio `fatture@iltuohotel.it`) con una regola di inoltro, così la posta dei fornitori non si perde tra le email delle prenotazioni:

- **Gmail:** **Impostazioni > Visualizza tutte le impostazioni > Inoltro e POP/IMAP**, aggiungi e verifica l'indirizzo, poi crea un filtro che inoltri solo la posta corrispondente ([guida Google](https://support.google.com/mail/answer/10957)).
- **Outlook:** crea una regola che inoltri i messaggi dei tuoi fornitori ([supporto Microsoft](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

Il problema è il passo successivo. Perché un software legga quella casella devi dargli una password IMAP o approvare un accesso Microsoft o Google, e da lì può vedere tutta la casella. Un indirizzo di sola ricezione ribalta la situazione: i fornitori scrivono a un indirizzo che riceve solo fatture, e nella tua casella non viene aperto nulla.

Hotelier Tools supporta entrambe le strade. Se preferisci tenere tutto nella tua casella, collegala in **Messaging > Channels** e attivala in **Settings > Received invoices**. È in sola lettura: nulla viene segnato come letto, spostato o eliminato (vedi [raccogliere le fatture dei fornitori via email](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Impostazioni Received invoices: la scheda Suggestions con Suggest invoices that have not arrived attivo e 24 mesi di storico, e la scheda Mailboxes con reservas@example.com collegata, Read for invoices attivo, INBOX come cartella da leggere, una prima scansione di 120 giorni indietro e gli elenchi Never read mail from e Always read mail from vuoti" caption="L'altra strada: la tua casella collegata, letta solo per le fatture. L'indirizzo per le fatture non ha bisogno di alcuna casella." path="/settings/received-invoices"}
::

## Viene condiviso qualcosa tra hotel?

No. Ogni indirizzo e ogni login appartiene a una sola struttura:

- Non esiste un login di Hotelier Tools che possa vedere le extranet di due hotel. Un login rubato o un account bloccato riguarda un solo hotel.
- **Il nostro dominio non diventa mai il tuo login principale né la tua email di recupero da nessuna parte.** Se la nostra posta venisse compromessa, o smettessi di usare Hotelier Tools, non perderesti l'accesso alla tua extranet.
- Ogni server (deployment) ha il suo dominio e la sua casella. La posta non passa mai dal database di un server a quello di un altro.

## Come configurare l'indirizzo per le fatture dei fornitori

1. Apri **Settings > Received invoices** (`/settings/received-invoices`) e trova la scheda **Invoice address**.
2. Premi **Create the address**. Ottieni un indirizzo per la struttura, fatto di caratteri casuali.
3. Premi **Copy** e invialo ai tuoi fornitori: "Per favore inviate le vostre fatture a questo indirizzo." L'elenco **Received invoices** (`/received-invoices`) mostra lo stesso indirizzo sotto **Suppliers can email invoices to**.
4. Verifica che l'attività **Read the hotel mailbox** sia attiva. Porta dentro ciò che arriva all'indirizzo; ogni 5 minuti è la programmazione consigliata.
5. Tieni d'occhio **Recent mail** nella stessa scheda: ogni messaggio mostra il mittente, i file e cosa ne è stato fatto.

Puoi anche inoltrare all'indirizzo le fatture che hai già. Hotelier Tools smista in base all'indirizzo a cui il messaggio è stato consegnato, quindi un messaggio inoltrato o in copia nascosta arriva comunque alla struttura giusta. Se hai salvato un'email come file, **Add an email by hand** accetta un `.eml` e fa gli stessi controlli.

Ti serve un indirizzo nuovo, per esempio dopo un'ondata di spam? Premi **New address**. Quello vecchio continua a consegnare per 30 giorni, con una nota su ogni messaggio che è arrivato a un indirizzo ritirato, poi smette.

::screenshot{src="/images/blog/demo/en/hotel-email-invoice-address.webp" alt="Scheda Invoice address in Hotelier Tools con l'indirizzo inv-qqxyc2dsnf@in.hotel-demo.invalid (in.hotel-demo.invalid è il dominio segnaposto della demo), i pulsanti Copy e New address, e Recent mail: un'email d'ordine trattenuta per revisione perché non c'era alcun file di fattura allegato, una modifica delle coordinate bancarie trattenuta perché sembra una frode e la fattura HE-2026/1102 di Horno Ejemplo importata; sotto, Upload an .eml file e l'attività Read the hotel mailbox in pausa" caption="I fornitori scrivono a un unico indirizzo privato. Ogni messaggio mostra cosa ne è stato fatto, e tutto ciò che è sospetto aspetta una persona." path="/settings/received-invoices"}
::

## Cosa succede alla posta inviata all'indirizzo per le fatture?

Ogni messaggio viene trattato come non affidabile:

- **Prima il controllo antifrode.** Un messaggio valutato ad alto rischio viene trattenuto per una persona, mai importato, e il suo originale viene conservato.
- **Il controllo del mittente è nostro.** Se il dominio del mittente ha superato il controllo di autenticità (DMARC) si legge dall'intestazione aggiunta dal nostro server di posta, mai dalla riga **From**. Un fornitore che non supera il controllo riceve un avviso che una persona deve confermare prima che la fattura possa essere confermata o pagata.
- **Gli allegati passano dall'importazione normale.** PDF, foto (PNG, JPEG, WebP) e fatture elettroniche (Facturae, UBL, CII) vengono aggiunti a **Received invoices**. Ognuno parte come **To review** (da controllare): nulla viene confermato o pagato da solo.
- **Mai due volte.** Un file già arrivato dalla tua casella, o caricato a mano, viene riconosciuto dal contenuto e non viene aggiunto di nuovo.
- **Dimensioni e piano.** Un messaggio oltre i 25 MB non viene conservato. Con un piano senza fatturazione, la posta all'indirizzo viene conservata e trattenuta, e nulla viene letto dall'AI.

La posta inviata a un indirizzo che non esiste viene scartata in silenzio, senza messaggio di errore. Nessuno può scoprire quali indirizzi sono reali.

## Login di servizio: un indirizzo per portale

Il secondo uso sono i login. Invece di dare a Hotelier Tools la tua password di Little Hotelier, Booking.com o Expedia, aggiungi alla tua extranet un nuovo utente con un indirizzo privato, e quell'utente è Hotelier Tools, solo per la tua struttura. Scegli tu i suoi permessi e puoi rimuoverlo con un clic.

| Portale | Indirizzo | Dove si trova |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Extranet di Booking.com | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Ognuna di queste pagine ha una scheda come **Hotelier Tools as a user in Little Hotelier**: inserisci il numero di struttura del portale, premi **Get the login address** e invita quell'indirizzo nella tua extranet.

Chiariamo a che punto siamo, a novembre 2026:

- **Cosa è automatico:** l'indirizzo, il controllo che un messaggio arrivi davvero dal dominio del portale e le regole di sicurezza. Un avviso di sicurezza ("New sign-in", "Password changed") non viene mai cliccato: viene inoltrato al titolare della struttura. Un reset della password che nessuno ha chiesto non viene mai seguito, e il titolare viene avvisato.
- **Cosa fa oggi una persona:** nessun invito dei portali è stato ancora catturato e analizzato, quindi Hotelier Tools non può accettarne uno da solo. Ogni messaggio a un indirizzo di login viene **trattenuto per una persona**, e la scheda lo dice. Finché le cose non cambiano, collegati con il modulo più in basso nella stessa pagina. Per Little Hotelier significa incollare il link di attivazione del nuovo utente (vedi [come aggiungere un utente a Little Hotelier](/blog/add-user-little-hotelier)).

Quando sarà pronto, un invito verrà accettato solo se è per il numero di struttura che hai dichiarato, così un indirizzo trapelato non può portare la struttura di un estraneo nel tuo account.

Preferisci il tuo indirizzo? L'opzione **Where the portal writes to this login** della scheda permette a un login di usare **Your own mailbox**, una delle tue caselle collegate. Vengono letti solo i messaggi inviati dal portale. Gmail e Microsoft 365 / Outlook possono dimostrare che un messaggio è autentico; con gli altri provider ogni messaggio del portale viene trattenuto per una persona.

## Dove trovo tutti i miei indirizzi?

**Credentials** (`/credentials`) termina con **Hotel mailbox addresses**: l'indirizzo per le fatture e i tre indirizzi di login, ognuno con il suo stato (per esempio **Waiting for the invitation** o **Active**) e un link **Open** alla pagina che lo gestisce. L'elenco è in sola lettura.

::screenshot{src="/images/blog/demo/en/hotel-email-address-list.webp" alt="Hotel mailbox addresses in fondo alla pagina Credentials: Supplier invoices inv-qqxyc2dsnf@in.hotel-demo.invalid segnato Active, il login Little Hotelier lh-dwfenz3etz@ e il login Booking.com bk-59k2nwybrt@ segnati Waiting for the invitation, e il login Expedia Not created yet, ognuno con un link Open (in.hotel-demo.invalid è il dominio segnaposto della demo)" caption="Tutti gli indirizzi della struttura in un unico elenco, ognuno con il suo stato e un link alla pagina che lo gestisce." path="/credentials"}
::

Valgono due regole di visibilità:

- Un indirizzo di login viene mostrato solo a chi nel tuo team gestisce le connessioni. Gli altri vedono il suo stato, con "The address is shown only to people who manage connections".
- L'indirizzo per le fatture viene mostrato a chi può vedere le fatture ricevute.

Se il tuo server non ha un dominio di posta configurato, la sezione lo dice una volta invece di elencare indirizzi vuoti.

## Quanta posta può ricevere ogni struttura?

Ogni struttura può ricevere **100 messaggi al mese** sul server di posta di Hotelier Tools. Serve a proteggere il server; non è un prezzo.

- Lo controlli in **Plan and billing** (`/subscriptions`), sotto **Received mail**: il conteggio, i messaggi in attesa e l'elenco del mese.
- **Oltre il limite**, un messaggio viene conservato, non perso. Aspetta e viene gestito in automatico, dal più vecchio, quando inizia il mese successivo o quando il limite viene alzato. Il titolare riceve una sola email quel mese.
- **Te ne servono di più?** Usa **Contact support** nella stessa scheda.
- La posta letta dalla tua casella collegata e i file `.eml` che carichi non contano mai.

## Chiedi all'assistente

Gli indirizzi hanno strumenti per l'assistente AI (`/chat`) e per i client MCP come Claude:

- "A quale indirizzo i fornitori inviano le fatture?" → `list_hotel_mail_addresses`
- "È arrivato qualcosa all'indirizzo per le fatture questa settimana?" → `list_hotel_mail_messages`
- "Crea un nuovo indirizzo per le fatture dei fornitori" → `rotate_hotel_mail_address`, solo dopo che hai approvato la scheda
- "L'utente Hotelier Tools è collegato su Booking.com?" → `get_service_login`

Nessuno strumento restituisce mai un indirizzo di login: viene mostrato solo a una persona nella pagina della connessione. E accettare un invito non è mai compito di uno strumento.

::demo-cta{path="/received-invoices"}
::

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder, Little Hotelier, Booking.com o Expedia. Si collega con i login della tua struttura, e i suoi indirizzi non sostituiscono mai il tuo login né la tua email di recupero.
::

Guide correlate: [le fatture dei fornitori via email](/blog/supplier-invoices-by-email), [aggiungere un utente a Little Hotelier](/blog/add-user-little-hotelier), [la dashboard](/tools/bot/dashboard).

## Riepilogo

- Ogni struttura ha indirizzi privati di sola ricezione su `in.hotelier.tools`: `inv-…` per le fatture dei fornitori e uno per ogni login di portale.
- Le fatture dei fornitori inviate a `inv-…` arrivano in **Received invoices** come **To review**, dopo un controllo antifrode, senza password IMAP.
- Nulla viene condiviso tra hotel, e il dominio non diventa mai il tuo login né la tua email di recupero.
- Gli indirizzi di login esistono già, ma gli inviti vengono trattenuti per una persona finché il passaggio di accettazione di ogni portale non sarà pronto.
- 100 messaggi al mese per struttura; trovi tutti gli indirizzi in fondo a `/credentials`.
