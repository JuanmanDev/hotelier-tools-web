---
title: "Assistente AI per hotel: cosa può fare alla reception, con la tua approvazione"
seoTitle: "Assistente AI per hotel: cosa fa alla reception"
description: "Un assistente AI consulta le prenotazioni, prepara risposte agli ospiti e propone modifiche. Cosa può fare in sicurezza e perché approvi ogni modifica."
date: 2026-10-03
category: ai
tags: [ai, ai assistant, front desk, approvals, little hotelier]
keywords: [assistente ai per hotel, agente ai per hotel, intelligenza artificiale per hotel, chatbot ai per hotel, receptionist ai hotel, assistente ai reception]
feature: ai-assistant
demoPath: /chat
cover: /images/blog/demo/en/ai-chat-start.webp
coverAlt: "Schermata iniziale dell'assistente AI di Hotelier Tools: avvisa che qualsiasi azione che modifica i dati chiede prima conferma, con domande suggerite e la cronologia delle chat a sinistra"
faq:
  - q: "Un assistente AI può sostituire il receptionist di un hotel?"
    a: "No. Toglie dal banco le ricerche e le prime bozze: chi arriva, chi deve ancora pagare, cosa rispondere. Le decisioni su soldi, prenotazioni e ospiti difficili restano a una persona, che approva ogni modifica."
  - q: "L'AI può cancellare una prenotazione o fare un rimborso da sola?"
    a: "Non nella chat della dashboard. Ogni modifica mostra prima una scheda da approvare o rifiutare, e il rimborso è un'azione irreversibile a parte che richiede sempre una scheda. L'AI che risponde agli ospiti non può cancellare, cambiare date né toccare i pagamenti."
  - q: "L'assistente vocale capisce l'italiano?"
    a: "Per ora no. Il pulsante del microfono usa il riconoscimento vocale integrato nel browser, impostato sullo spagnolo (es-ES), e il browser deve supportarlo. Puoi sempre scrivere in qualsiasi lingua."
  - q: "L'AI risponde da sola agli ospiti di Booking.com?"
    a: "No. I messaggi di Booking.com e le domande degli ospiti arrivano nella stessa inbox, ma l'invio automatico dell'AI verso Booking.com non è mai consentito. Decide una persona."
  - q: "Quanto costa l'assistente AI?"
    a: "Hotelier Tools è gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Le strutture che iniziano nel 2026 pagano poi 50 € al mese per tutto il 2027. Le risposte dell'assistente usano crediti AI, che puoi controllare nella pagina AI credits."
  - q: "Hotelier Tools fa parte di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura."
---

Sì, un assistente AI può già togliere lavoro vero dalla reception di una piccola struttura: rispondere a "chi arriva domani e chi deve ancora pagare?", preparare le risposte agli ospiti, proporre modifiche alle prenotazioni o fatture. Il modo sicuro di usarlo è semplice: può leggere liberamente, ma **ogni modifica aspetta l'approvazione di una persona**, e rimborsi, applicazione dei prezzi e risposte agli ospiti di Booking.com non vengono mai lasciati all'AI da sola.

In questa guida vedi come funziona nella pratica con Hotelier Tools sopra Little Hotelier, con richieste reali e quello che succede dopo aver premuto Invio.

## Cosa può fare oggi un assistente AI alla reception di un piccolo hotel?

Pensa a tre tipi di lavoro, ognuno con un diverso livello di fiducia.

| Tipo di lavoro | Esempi | Chi decide |
|---|---|---|
| **Consultare** | Arrivi di domani, saldi da incassare, camere non assegnate, se un soggiorno può essere fatturato, le tariffe di stasera | Risponde l'assistente. Non cambia nulla. |
| **Preparare bozze** | Una risposta a una domanda su WhatsApp o via email, una nota per il portiere di notte | La leggi e la invii, oppure prima la modifichi. |
| **Modificare** | Aggiornare il telefono di un ospite, iscrivere un soggiorno alla fattura al check-out, applicare un prezzo | L'assistente prepara una scheda. Tu premi **Approve** o **Reject**. |

Little Hotelier ti dà già molto al banco. Il suo [Guest Engagement Messaging Hub](https://www.littlehotelier.com/blog/learn-about-tech/unified-inbox/) riunisce in un'unica inbox le conversazioni via email, SMS, WhatsApp e Airbnb, con modelli e messaggi programmati. Quello che aggiunge un assistente è la possibilità di *chiedere* a parole tue e ricevere una risposta costruita sulle prenotazioni in tempo reale, senza scorrere calendario e schede delle prenotazioni.

## Dove funziona l'assistente in Hotelier Tools

[Hotelier Tools](/tools/bot/ai-assistant) usa lo stesso set di strumenti in tre posti. Tutti seguono la stessa regola: le letture partono, le modifiche aspettano una persona.

### La chat dell'assistente nella dashboard (beta)

Apri **AI Chat** (`/chat`) e scrivi una domanda su prenotazioni, ospiti, prezzi, fatture, controlli o lista d'attesa. La chat vuota lo dice chiaramente: "Anything that changes data asks for your confirmation first" (qualsiasi azione che modifica i dati chiede prima la tua conferma).

Le risposte arrivano come testo e come schede: il riepilogo di una prenotazione, una modifica proposta con una tabella di evidenze, la scheda per iscrivere un soggiorno alla fattura al check-out, una tabella di prezzi consigliati o i cursori delle regole di prezzo. Ogni conversazione passata resta in **Chat History** (`/chat/history`).

C'è anche un pulsante microfono. Usa il riconoscimento vocale integrato nel browser, che per ora è **impostato sullo spagnolo (es-ES)**, quindi la voce è adatta a chi parla spagnolo. Tutti gli altri scrivono.

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Chat AI di Hotelier Tools che risponde a Which bookings arrive this week? con una chiamata a uno strumento e un elenco Reservations (14) di schede con ospite, date di check-in e check-out, Paid o Pending e un badge checked-out, checked-in o confirmed" caption="Chiedi a parole tue e la risposta arriva come schede di prenotazione. Una consultazione così non cambia nulla." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

### L'assistente per lo staff su WhatsApp o email (alpha)

In **Staff assistant** (`/staff`) registri un dipendente con nome, numero WhatsApp e/o email e un ruolo: **Read only** (sola lettura) o **Can request changes** (può richiedere modifiche).

Quando quella persona scrive al numero WhatsApp o alla casella email collegati alla struttura, l'AI risponde come allo staff, sullo stesso canale, usando i dati di Little Hotelier. I suoi messaggi non si mescolano mai con l'inbox degli ospiti.

- Un dipendente con **Read only** può solo fare domande.
- Un dipendente con **Can request changes** può chiedere modifiche, ma ognuna diventa una richiesta che il titolare approva su `/staff`.
- L'identità è il mittente stesso: il numero di telefono registrato oppure un'email che supera i controlli DKIM/DMARC.
- I messaggi più vecchi di 30 minuti non ricevono risposta, così una risposta in ritardo non agisce mai su informazioni superate.

Qui WhatsApp funziona tramite una sessione di WhatsApp Web (WAHA), non tramite l'API ufficiale di WhatsApp Business. Per le alternative vedi [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).

### Bozze di risposta nell'inbox ospiti (alpha)

L'[inbox ospiti](/tools/bot/guest-inbox) (`/messaging`) raccoglie i messaggi di WhatsApp, email e Booking.com. Per ogni account collegato scegli una modalità di risposta in `/messaging/channels`:

| Modalità | Cosa succede |
|---|---|
| Off | I messaggi vengono mostrati. Nulla viene analizzato né inviato. |
| **Draft** (predefinita) | L'AI prepara una risposta e un piano. Non succede nulla finché non approvi. |
| Auto | L'AI invia la risposta dopo un'attesa, ma non può mai modificare una prenotazione. |
| Autonomous | L'AI esegue anche le modifiche consentite alle prenotazioni senza passaggio di approvazione. Controllala più volte al giorno. |

Parti da **Draft** e restaci finché non ti fidi delle risposte. L'AI per gli ospiti non ha alcuno strumento: può solo restituire un piano scelto da un elenco breve (inviare un messaggio, segnalare allo staff, aggiungere una nota alla prenotazione, impostare un orario di arrivo).

## Come le schede di approvazione evitano all'AI errori costosi

Un'AI può interpretare male un messaggio o scegliere la prenotazione sbagliata. Le schede di approvazione servono a questo: un errore non arriva mai fino a Little Hotelier.

1. **Ogni scrittura richiede una scheda.** Se il sistema non sa se uno strumento legge o scrive, lo tratta come una scrittura.
2. **La scheda mostra la modifica esatta.** Per una prenotazione vedi una tabella di evidenze: il valore in Little Hotelier, quello fornito dal mittente e quello scritto nel testo del messaggio.
3. **Confermi la fonte.** Le modifiche alle prenotazioni scritte in chat includono una casella ("è la prenotazione giusta e mi fido della fonte"), perché un messaggio in chat è una dichiarazione, non una prova di chi sia la persona.
4. **Approve esegue esattamente quella chiamata.** Premendo **Approve** il server esegue la modifica memorizzata. L'AI non ha una seconda occasione per riscriverla.
5. **Ogni approvazione vale una volta sola.** È legata a quello strumento, a quei valori, a quella conversazione e a quella persona, e scade dopo 24 ore.
6. **I rimborsi sono a parte.** Un rimborso è un'azione irreversibile che sta sempre dietro una scheda dedicata.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Scheda Approve these changes? con l'indicazione Nothing written yet: una corrispondenza completa sul mittente WhatsApp, una tabella di evidenze con le colonne Little Hotelier, WhatsApp sender e message text, i nuovi valori di Company e Tax ID con le etichette New e Claim, la casella Also invoice this reservation automatically at checkout e i pulsanti Reject e Approve and apply" caption="La scheda mostra cosa c'è ora in Little Hotelier, cosa verrebbe scritto e da dove arriva ogni valore. Non viene scritto nulla finché non approvi." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

## Richieste reali e cosa succede dopo

Sono il tipo di richieste che un receptionist scrive in una mattina qualunque. I codici prenotazione sono inventati.

::prompt{label="Assistente Hotelier Tools"}
Chi arriva domani, e qualcuno ha ancora un saldo da pagare?
::

L'assistente legge i check-in di domani e i relativi pagamenti e li elenca, con una scheda riepilogativa per ogni ospite. Non cambia nulla, quindi non c'è nessuna scheda da approvare.

::prompt{label="Assistente Hotelier Tools"}
L'ospite della prenotazione BDC-1234567890 ci ha scritto un nuovo cellulare: +34 600 000 000. Aggiornalo, per favore.
::

L'assistente trova la prenotazione e prepara una scheda di **modifica proposta**: il vecchio telefono, il nuovo e da dove arriva il nuovo valore. Spunti la casella di fiducia e premi **Approve**. Solo allora Little Hotelier viene aggiornato.

::prompt{label="Assistente Hotelier Tools"}
L'ospite della BDC-1234567890 vuole la fattura. Inviagliela in automatico al check-out.
::

Ricevi la scheda per iscrivere il soggiorno alla fattura al check-out. Dopo l'approvazione, il soggiorno viene segnato per l'attività giornaliera di fatturazione e Little Hotelier invia la fattura via email con il tuo modello dopo il check-out. I dettagli sono in [come inviare la fattura al check-out](/blog/send-invoice-to-guest-at-checkout).

::prompt{label="Assistente Hotelier Tools"}
Quanto dovrebbe costare una doppia sabato prossimo, e perché?
::

Ricevi la tabella dei prezzi consigliati con i motivi di ogni cifra: concorrenti, domanda, limiti. Leggerla non cambia nulla. Applicare un prezzo è una scrittura, quindi aspetta la tua approvazione.

::prompt{label="Assistente Hotelier Tools"}
Rimborsa la caparra di 40 € sulla BDC-1234567890.
::

Il rimborso compare in una scheda tutta sua. Non viene rimborsato nulla finché non approvi. Fuori dalla dashboard, con gli [assistenti AI esterni](/blog/connect-claude-to-little-hotelier), i rimborsi sono bloccati del tutto.

E dall'assistente per lo staff su WhatsApp:

::prompt{label="Staff su WhatsApp"}
La camera 5 è libera stanotte? Se sì, sposta lì la prenotazione Martin in arrivo oggi.
::

Alla prima parte risponde subito. Lo spostamento è una modifica, quindi diventa una richiesta in sospeso su `/staff` che il titolare deve approvare.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Pagina Staff assistant con una modifica in attesa di approvazione, una richiesta invoice_on_leave_add di Lucía (recepción) con i pulsanti Reject e Approve and run, due dipendenti con i ruoli Can request changes e Read only e gli ultimi messaggi WhatsApp" caption="Le modifiche che il tuo team chiede via WhatsApp o email aspettano qui la tua approvazione." path="/staff"}
::

## Cosa non dovrebbe mai fare da sola un'AI?

Qualunque strumento usi, tieni queste cose in mano a una persona. Ecco come Hotelier Tools fa rispettare ciascuna regola.

- **Muovere denaro.** I rimborsi richiedono sempre una scheda dedicata. Le app AI esterne collegate tramite MCP non possono rimborsare affatto.
- **Cambiare una prenotazione perché lo dice un messaggio.** L'AI per gli ospiti vede una prenotazione solo se il mittente è verificato: un telefono che coincide con la prenotazione su almeno 8 cifre finali, l'email esatta o una conversazione di Booking.com. Se due ospiti coincidono, non viene collegata nessuna prenotazione.
- **Rispondere da sola agli ospiti di Booking.com.** L'invio automatico dell'AI verso Booking.com non è mai consentito.
- **Inventare.** L'AI per gli ospiti risponde solo in base alle tue FAQ, alle note della struttura e alla scheda della proprietà. Se non hai indicato se c'è il parcheggio, la risposta è "da confermare", mai "sì".
- **Nominare altri ospiti.** Un filtro sulle risposte blocca i codici prenotazione che non appartengono all'ospite della conversazione.
- **Spingere i prezzi senza limiti.** L'AI non entra nel calcolo notturno dei prezzi. L'autopilota è spento per impostazione predefinita e, quando è attivo, sposta una notte al massimo del ±20% (valore predefinito) e mai sotto il tuo prezzo minimo.
- **Presentare dichiarazioni ufficiali o scrivere agli ospiti dall'esterno.** L'invio dell'indagine INE, l'invio di una fattura via email o i messaggi agli ospiti in lista d'attesa sono bloccati per le app AI esterne. Nella chat della dashboard, ognuno sta dietro una scheda.

Le risposte senza supervisione hanno anche dei limiti di volume: 4 all'ora, 12 al giorno e 3 di fila senza risposta dell'ospite.

## Ruoli, privacy e costi

**Ruoli.** Le richieste dell'assistente per lo staff le approva il titolare su `/staff`. Gli account di team con ruoli sono indicati come "soon" nella [pagina dell'assistente](/tools/bot/ai-assistant); sono pensati in modo che, per esempio, un login della reception possa vedere i prezzi ma non modificarli, e non possa eseguire un rimborso nemmeno con una scheda.

**Privacy.** I login di Little Hotelier, Booking.com e della casella email sono conservati cifrati (AES-256-GCM). I messaggi degli ospiti e i dettagli delle prenotazioni vengono elaborati da un fornitore di AI quando l'assistente li legge. L'[accordo sul trattamento dei dati](https://dashboard.hotelier.tools/legal/dpa) e l'[informativa sulla privacy](https://dashboard.hotelier.tools/legal/privacy) spiegano cosa viene trattato.

**Costi.** Hotelier Tools è gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027. Le strutture che iniziano nel 2026 pagano poi 50 € al mese per tutto il 2027, con tutte le funzioni incluse. Ogni risposta dell'assistente e ogni analisi di un messaggio degli ospiti usa crediti AI; il tuo budget, il saldo e la spesa sono in **AI credits** (`/messaging/credits`).

::callout{type="note" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con il login Little Hotelier della tua struttura e ogni modifica che fa è visibile in Little Hotelier come sempre.
::

## Come provarlo in sicurezza

1. Apri la demo pubblica qui sotto. Usa un hotel inventato e nulla arriva a sistemi reali.
2. Chiedi gli arrivi di domani, poi chiedi una modifica e guarda la scheda che ricevi.
3. Nella tua dashboard, collega Little Hotelier in **Credentials**, compila la scheda della struttura in `/settings/property` (legge indirizzo, politiche e camere da Little Hotelier) e aggiungi le tue FAQ in `/messaging/faq`.
4. Lascia l'inbox ospiti su **Draft** per le prime settimane e correggi in `/messaging/training` ciò che l'AI interpreta male.

::demo-cta{path="/chat"}
::

## Riepilogo

- Un assistente AI è sicuro alla reception quando legge liberamente e **chiede prima di ogni modifica**.
- In Hotelier Tools funziona nella chat della dashboard, su WhatsApp o email per lo staff e come bozze di risposta nell'inbox ospiti.
- Rimborsi, risposte su Booking.com, limiti di prezzo e dichiarazioni ufficiali restano alle persone.
- Vuoi le stesse risposte dentro Claude o ChatGPT? Leggi [cos'è un server MCP](/blog/what-is-mcp-server-hotels) e poi [come collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier).
