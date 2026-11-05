---
title: "Come funzionano gli agenti AI per hotel, e perché non possono agire da soli (risposte agli ospiti, chat dello staff, MCP)"
seoTitle: "Come funzionano gli agenti AI per hotel, in sicurezza"
description: "Cosa legge e fa ogni agente AI di una dashboard per hotel, come si verificano i messaggi da Booking.com e WhatsApp e perché ogni modifica la approvi tu."
date: 2026-11-05
category: ai
tags: [ai, agenti ai, sicurezza, messaggi ospiti, approvazioni, mcp, prompt injection]
keywords: [come funzionano gli agenti ai per hotel, agente ai hotel sicurezza, l'ai è sicura per i messaggi degli ospiti, prompt injection chatbot hotel, assistente ai hotel approvazione umana, l'ai può modificare una prenotazione da sola, verificare identità ospite whatsapp hotel, risposte ai messaggi booking.com con ai, permessi server mcp hotel]
feature: ai-assistant
demoPath: /messaging
cover: /images/blog/demo/en/how-ai-agents-booking-thread-verified.webp
coverAlt: "Inbox ospiti di Hotelier Tools filtrata su Booking.com con aperta la domanda in francese di Ingrid Larsen sul parcheggio: Identity verified e mittente corrispondente alla prenotazione per il suo soggiorno di 24 notti con 759,55 euro da saldare, una bozza dell'AI in francese non inviata e un piano dell'AI in bozza la cui riga Access indica che può leggere solo la prenotazione 71020550 e che ogni modifica aspetta l'approvazione"
featured: true
faq:
  - q: "Un agente AI per hotel può modificare una prenotazione da solo?"
    a: "In Hotelier Tools, non per impostazione predefinita. La chat della dashboard, l'assistente dell'inbox e l'assistente per lo staff trasformano ogni modifica in una scheda che una persona approva. L'AI che risponde agli ospiti non ha strumenti; solo un canale impostato su Autonomous le permette di aggiungere una nota o un orario di arrivo all'unica prenotazione verificata."
  - q: "Come fa l'AI a sapere che un messaggio arriva davvero da quell'ospite?"
    a: "Conta solo il mittente, mai il testo del messaggio. Una conversazione di Booking.com è archiviata da Booking.com sotto la sua prenotazione, un numero WhatsApp deve coincidere con quello della prenotazione almeno nelle ultime 8 cifre, un indirizzo email deve coincidere esattamente e una conversazione Expedia deve indicare il suo riferimento EXP-. Se corrispondono due ospiti, non viene mostrata alcuna prenotazione."
  - q: "Un ospite può ingannare l'AI con un messaggio come \"ignora le tue regole\"?"
    a: "Può provarci. Il modello che risponde agli ospiti non ha strumenti da usare in modo improprio, sa che il messaggio è testo non attendibile, può restituire solo un piano con quattro azioni che non contengono alcun ID di prenotazione, e la risposta finale viene controllata alla ricerca di riferimenti di altre prenotazioni prima di qualsiasi invio."
  - q: "La chat AI ha limiti su cosa può consultare?"
    a: "Solo il tuo ruolo. La chat può leggere tutto ciò che il tuo ruolo consente in tutto l'account, con un massimo di otto passaggi di strumenti per domanda. Quello che non può fare è modificare qualcosa senza il tuo clic, avviarsi senza che nessuno l'abbia chiesto o programmarsi da sola."
  - q: "Claude o ChatGPT ricevono le stesse schede di approvazione?"
    a: "No. Le app esterne collegate tramite MCP superano lo stesso controllo del ruolo, ma una scrittura viene eseguita quando l'app la chiama, quindi l'unico controllo è la richiesta di approvazione dell'app stessa. Rimborsi, invio di fatture via email, invio della rilevazione INE e risposte agli ospiti sono bloccati per queste app."
  - q: "Hotelier Tools fa parte di Booking.com, WhatsApp o Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder o Little Hotelier. Si collega con i login della tua struttura."
---

Un agente AI per hotel è un modello linguistico collegato ai dati delle tue prenotazioni, ed è sicuro solo quanto due cose: cosa gli è permesso leggere, e chi preme il pulsante quando qualcosa cambia. In Hotelier Tools ci sono diversi agenti con livelli di fiducia diversi. Quello che legge i messaggi degli ospiti non ha alcuno strumento. Quelli con cui parla il tuo team possono consultare qualsiasi cosa entro il ruolo della persona, ma **ogni modifica aspetta il clic di una persona**, e nessuno di loro si avvia da solo secondo un proprio programma.

Questa guida spiega come funziona ogni agente, come un messaggio da Booking.com, WhatsApp, Expedia o email viene legato a una sola prenotazione, e cosa impedisce al testo di un ospite di guidare l'AI. Per sapere cosa fa l'assistente nel lavoro di tutti i giorni, leggi [l'assistente AI per la reception di un piccolo hotel](/blog/ai-assistant-hotel-front-desk). I dettagli dei servizi di terzi sono stati verificati a novembre 2026.

## Cosa dovrebbe poter fare un agente AI per hotel?

Due riferimenti pubblici sono un buon metro per giudicare qualsiasi fornitore. OWASP mette la prompt injection al primo posto tra i rischi delle app AI e consiglia di "restrict the model's access privileges to the minimum necessary" (limitare i privilegi di accesso del modello al minimo necessario), con una persona che approva le azioni privilegiate ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)). Il Model Context Protocol, che Claude e ChatGPT usano per chiamare strumenti esterni, dice che "SHOULD always be a human in the loop with the ability to deny tool invocations" (dovrebbe sempre esserci una persona nel ciclo, in grado di rifiutare le chiamate agli strumenti) ([specifica degli strumenti MCP](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)).

Quindi fai quattro domande a qualsiasi AI per hotel: chi ha scritto il testo che legge? Cosa può toccare? Chi approva una modifica? Si avvia mai senza che nessuno l'abbia chiesto?

## Gli agenti di Hotelier Tools e i loro livelli di fiducia

Una tabella decide dove può essere eseguito ogni strumento, e uno strumento che nessuno ha classificato viene trattato come una scrittura. Un secondo controllo verifica se **il ruolo di questa persona** può usarlo, nel momento in cui viene eseguito.

| Agente | Con chi parla | Cosa può leggere | Cosa può modificare | Chi approva |
|---|---|---|---|---|
| **AI per le risposte agli ospiti** (Inbox, alpha) | Ospiti su WhatsApp, email, Booking.com, Expedia | Una prenotazione verificata, le tue FAQ, le note della struttura, la scheda della struttura | Nulla direttamente. Restituisce un piano con 4 azioni | Tu, nell'inbox (o una modalità del canale ristretta) |
| **AI Chat** (`/chat`, beta) | Tu e il tuo team nella dashboard | Tutto ciò che il tuo ruolo consente | Tutto ciò che il tuo ruolo consente, come scheda | La persona che ha chiesto, cliccando la scheda |
| **Assistente dell'inbox** (pannello accanto alla conversazione) | Tu, sulla conversazione aperta | La prenotazione, i prezzi del tuo booking engine, i dati della struttura | Proposte come schede; non invia mai all'ospite | Qualsiasi collega il cui ruolo lo copra |
| **Assistente per lo staff** (`/staff`) | Dipendenti su WhatsApp o email | Prenotazioni, disponibilità, prezzi, fatture, controlli | Solo con **Can request changes**, in coda | Il titolare, su `/staff` |
| **App AI esterne** (Claude, ChatGPT, tramite MCP) | Tu, in quell'app | Ciò che il tuo ruolo consente | Le scritture vengono eseguite quando l'app le chiama; nulla di irreversibile | Tu, nella richiesta di approvazione dell'app |
| **Agenti del browser** (WebMCP) | Tu, nel tuo browser | Solo letture | Nulla; le proposte aprono il modulo dell'app già compilato | Tu premi il pulsante nella pagina |

**Le attività programmate non sono agenti AI.** La fattura al check-out, i controlli automatici e l'autopilota dei prezzi sono codice normale con un timer. Due processi in background usano un modello solo per trasformare testo in dati (i campi di una fattura del fornitore, gli eventi locali per i prezzi), senza strumenti e senza alcun modo di scrivere a qualcuno o toccare una prenotazione.

## Come un messaggio dell'ospite diventa una risposta

| Passaggio | Cosa succede | Modello? |
|---|---|---|
| 1. Arrivo | Un webhook (WhatsApp) o un controllo periodico (email, Booking.com, Expedia) salva il messaggio | No |
| 2. Smistamento | Solo email: newsletter, fornitori e probabili truffe si fermano qui | No |
| 3. Identità | Il mittente viene abbinato a una prenotazione, o a nessuna, e la decisione viene registrata | No |
| 4. Attesa | 5 minuti su WhatsApp, un'ora per l'email. Già risposto? Nulla viene analizzato né addebitato | No |
| 5. Piano | Dopo un controllo dei crediti, il modello legge il contesto limitato e restituisce una risposta e delle azioni, come dati | **Sì, una volta** |
| 6. Controlli | Le azioni vengono verificate sull'elenco chiuso; il filtro delle risposte esamina il testo | No |
| 7. Decisione | Una persona approva, oppure la modalità del canale lo consente dopo un'attesa | No |
| 8. Esecuzione | Il piano salvato viene eseguito; il filtro ricontrolla il testo prima dell'invio | No |

Il modello compare una sola volta, e il suo risultato è solo una proposta. Tutto il resto è codice normale.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-thread-verified.webp" alt="Inbox ospiti filtrata su Booking.com con aperta la conversazione di Ingrid Larsen: il badge Identity verified, il suo soggiorno dal 24 ottobre al 17 novembre segnato come Checked-in e mittente corrispondente alla prenotazione con 759,55 euro da saldare, una bozza dell'AI in francese (non inviata) sul parcheggio, e il piano dell'AI in bozza (parcheggio, 91%) la cui riga Access dice Identity verified, può leggere la prenotazione 71020550, ogni modifica aspetta la tua approvazione, con la risposta modificabile, l'azione send_message e il pulsante Send" caption="Il piano indica cosa poteva vedere l'AI: una sola prenotazione verificata. In modalità Draft non parte nulla finché non approvi." path="/messaging"}
::

## Da dove arrivano i messaggi degli ospiti, e perché la provenienza conta

Un messaggio porta con sé solo ciò che il canale stesso garantisce. Hotelier Tools si fida del **mittente**, mai di ciò che il messaggio dice di sé.

| Canale | Come arriva nell'inbox | Cosa lo lega a una prenotazione |
|---|---|---|
| **Booking.com** | Letto tramite la tua sessione dell'extranet (il tuo login e il suo secondo fattore) | Booking.com archivia la conversazione sotto la sua prenotazione, quindi conta come verificata |
| **Expedia** (beta) | Letto tramite la tua sessione di Partner Central; solo l'elenco delle conversazioni e l'ultimo messaggio | Solo il riferimento `EXP-` indicato nella conversazione. Il nome dell'ospite non viene mai usato |
| **WhatsApp** | WAHA, una sessione di WhatsApp Web sul numero della struttura, che invia a un webhook con un token segreto per canale | Il numero coincide con il telefono della prenotazione almeno nelle ultime 8 cifre |
| **Email** | La tua casella, tramite accesso Google o Microsoft (OAuth) o IMAP | L'indirizzo esatto. Nessuna corrispondenza parziale, nessun punto ignorato |

L'email ha un livello in più. Gli esiti SPF, DKIM e DMARC di ogni messaggio (i controlli che i provider di posta usano per scoprire mittenti falsi, vedi le [linee guida per i mittenti di Gmail](https://support.google.com/a/answer/81126)) alimentano un **punteggio truffa** insieme ad altri segnali, come link di condivisione file o un rimborso per un soggiorno che nessuno trova. Dal 75% in su, l'email va a una persona e l'AI non prepara nessuna bozza. Approfondisci in [come riconoscere i messaggi truffa](/blog/hotel-scam-messages).

L'inbox mostra il risultato dell'identità su ogni conversazione:

- **Identity verified** (identità verificata): corrisponde esattamente un ospite, quindi l'AI può vedere quella sola prenotazione (per un ospite abituale, un solo soggiorno: quello in corso, uno recente o il prossimo).
- **Ambiguous — refused** (ambigua, rifiutata): corrispondono due ospiti diversi, quindi non viene mostrata alcuna prenotazione e te ne occupi tu.
- **No reservation match** (nessuna prenotazione corrispondente): l'AI risponde alle domande generali dalle tue FAQ e non conferma né smentisce mai che esista una prenotazione.
- **Not checked** (non verificata): l'identità non è ancora stata stabilita.

Una domanda pubblica sul tuo annuncio Booking.com non ha una prenotazione dietro, quindi riceve risposta solo dai dati della struttura.

## Cosa legge l'AI per rispondere, e cosa non vede mai

| L'AI per le risposte agli ospiti legge | Non vede mai |
|---|---|
| L'**unica** prenotazione verificata: riferimento, date, camera, ospiti, stato, totale, importo da saldare, orario di arrivo, note interne | Nessun altro ospite o prenotazione |
| Le tue fonti **FAQ & knowledge** (solo quelle che hai spuntato) | I tuoi login, le chiavi API o i numeri delle carte |
| Le note della struttura e la scheda della struttura da **Settings > Property & AI knowledge** | Little Hotelier stesso. Non può consultare nulla |
| Esempi corretti e regole da **AI training** | I dati della prenotazione quando il mittente non è verificato |
| Memoria delle risposte: risposte simili inviate dal tuo team, senza nomi, date, riferimenti e contatti | |

Gli estratti delle FAQ, gli esempi di training e la memoria delle risposte sono indicati nel prompt come dati citati, mai come istruzioni. I prezzi in tempo reale arrivano dal tuo booking engine pubblico tramite l'**assistente dell'inbox** sul lato dello staff, e un prezzo che nessun preventivo ha restituito viene segnalato.

## Cosa impedisce al messaggio di un ospite di guidare l'AI?

Il messaggio di un ospite è scritto da uno sconosciuto, quindi il sistema presume che possa essere ostile:

1. **Nessuno strumento.** Il modello che risponde agli ospiti non ha nulla da chiamare. Un "cerca la prenotazione 999" iniettato non ha dove andare.
2. **Dati, non ordini.** Il prompt dice che il messaggio dell'ospite è testo non attendibile. Se chiede di ignorare le regole, cambiare ruolo, rivelare il testo di sistema o agire su un'altra prenotazione, il modello deve rifiutare e segnalarlo allo staff.
3. **Un elenco chiuso.** La risposta deve rispettare uno schema fisso: al massimo quattro azioni tra **inviare un messaggio**, **segnalare allo staff**, **aggiungere una nota alla prenotazione** e **impostare l'orario di arrivo**. Tutto il resto viene scartato e segnalato.
4. **Nessun ID di prenotazione nelle azioni.** Il server applica una nota o un orario di arrivo alla prenotazione legata alla conversazione, quindi una modifica non può essere indirizzata altrove.
5. **Il filtro delle risposte.** Prima che una risposta parta, e di nuovo dopo ogni modifica, il testo viene controllato. Il riferimento di un'altra prenotazione, o qualsiasi numero lungo quando il mittente non è verificato, blocca l'invio e passa la conversazione a una persona. Se la prenotazione della conversazione è cambiata mentre un piano era in attesa, il piano viene rifiutato.
6. **Limiti per canale.** **Draft — I approve everything** è l'impostazione predefinita. Su Booking.com l'AI non invia mai, in nessuna modalità; Expedia offre solo Off e Draft. Anche **Autonomous — replies AND changes reservations** può solo aggiungere una nota o un orario di arrivo alla prenotazione verificata, e le risposte senza supervisione si fermano a 4 all'ora, 12 al giorno o 3 di fila senza risposta.
7. **L'approvazione viene eseguita senza il modello.** Approvare esegue esattamente il piano salvato. L'AI non ha una seconda occasione per riscriverlo.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-channel-send-by-hand.webp" alt="Pagina Channels con la scheda dei messaggi Booking.com segnata Active: un avviso Collects messages — replies are sent by hand che spiega che le risposte automatiche non vengono inviate tramite Booking.com e che una risposta parte solo quando una persona preme Send nell'inbox, l'impostazione When a guest writes su Draft — I approve everything, Timing con attesa di 5 minuti, e sotto i messaggi di Expedia Partner Central non ancora collegati" caption="Booking.com è un canale che l'AI può leggere e per cui può preparare bozze, ma solo il Send di una persona pubblica una risposta." path="/messaging/channels"}
::

## La chat AI: nessun limite per consultare, nessuna autonomia

L'**AI Chat** (`/chat`, beta) è costruita al contrario rispetto all'AI per gli ospiti: a scrivere è una persona di cui ti fidi, quindi riceve tutti gli strumenti che **il tuo ruolo** consente. Chiedi di qualsiasi prenotazione, fattura, prezzo, controllo, report o della lista d'attesa, in tutto l'account, con un massimo di otto passaggi di strumenti per domanda.

Quello che non può fare è agire da sola:

- **Ogni modifica è una scheda.** Una scrittura viene intercettata prima di essere eseguita e mostrata con **Approve** o **Reject** e i valori esatti. Le azioni irreversibili (un rimborso, l'invio di una fattura via email, l'invio della rilevazione INE, l'invio di una risposta a un ospite) sono possibili solo qui, dietro la loro scheda.
- **Il clic viene eseguito senza il modello.** Approvare esegue la chiamata salvata, non una nuova richiesta all'AI.
- **L'approvazione è solo tua.** Ogni scheda è un'autorizzazione monouso per quello strumento, quei valori, quella chat e la persona a cui è stata mostrata, e scade dopo 24 ore. Un doppio clic o una scheda copiata vengono rifiutati.
- **Il tuo ruolo accompagna ogni chiamata.** Ogni chiamata a uno strumento porta una dichiarazione firmata di chi l'ha chiesta, valida 15 minuti, quindi viene eseguita con i tuoi permessi, non con quelli del titolare. Un collega sospeso a metà risposta viene rifiutato al passaggio successivo.
- **Non si avvia mai da sola.** Il modello viene eseguito solo quando qualcuno invia un messaggio. Non può riattivarsi più tardi né programmarsi. Può *proporre* di creare o spostare un'attività programmata, come scheda, e quell'attività poi esegue codice fisso, non l'AI.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Scheda Approve these changes? con l'indicazione Nothing written yet: una corrispondenza completa sul mittente WhatsApp, una tabella di evidenze con le colonne Little Hotelier, WhatsApp sender e message text, i nuovi valori di Company e Tax ID con le etichette New e Claim, la casella Also invoice this reservation automatically at checkout e i pulsanti Reject e Approve and apply" caption="Una modifica alla prenotazione mostra da dove arriva ogni valore. Un valore scritto solo nel messaggio è una dichiarazione, non una prova." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

I ruoli si gestiscono in **Team & roles** (team e ruoli, `/settings/team`). Un login della reception che chiede un rimborso alla chat riceve un rifiuto, con o senza scheda.

## L'assistente per lo staff e le app AI esterne

**Assistente per lo staff** (`/staff`). Un dipendente scrive al numero WhatsApp o alla casella email della struttura e riceve risposta come membro dello staff. L'identità è il mittente: il numero registrato, oppure l'indirizzo esatto con un'email che supera DKIM o DMARC (il solo SPF non basta). I dipendenti **Read only** possono solo fare domande. Con **Can request changes**, ogni scrittura diventa una richiesta che il titolare approva con **Approve and run**, che esegue quella chiamata esatta una sola volta.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Pagina Staff assistant con una modifica in attesa di approvazione, una richiesta invoice_on_leave_add di Lucía (recepción) con i pulsanti Reject e Approve and run, due dipendenti con i ruoli Can request changes e Read only e gli ultimi messaggi WhatsApp" caption="La richiesta di un dipendente arriva con lo strumento e i valori esatti, e viene eseguita solo quando il titolare la approva." path="/staff"}
::

**Claude, ChatGPT e altre app MCP** accedono con OAuth a una struttura che scegli tu e superano lo stesso controllo del ruolo. Fuori dalla dashboard non c'è una seconda scheda: una scrittura viene eseguita quando l'app la chiama, quindi tieni attiva l'approvazione dell'app stessa. Le azioni irreversibili e le risposte agli ospiti sono bloccate. Vedi [come collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier).

**Gli agenti del browser (WebMCP)**, uno standard web ancora agli inizi e per ora una [bozza della community](https://webmachinelearning.github.io/webmcp/), hanno solo accesso in lettura. Un rimborso o una risposta a un ospite si possono solo *proporre*: si apre il modulo dell'app già compilato, e premi tu il pulsante. Nelle pagine rivolte agli ospiti gli strumenti vengono ritirati.

## Registri, costi e limiti, detti chiaramente

**Cosa viene registrato.** Ogni decisione sull'identità con il suo motivo, rifiuti compresi. Ogni modifica alle prenotazioni applicata, rifiutata o respinta, con le evidenze esaminate. L'attività del team (inviti, ruoli, contatti dello staff). Ogni addebito AI in **AI credits** (`/messaging/credits`). Nessuna analisi viene eseguita senza crediti.

**Cosa non è ancora costruito, o non è finito:**

- L'Inbox è in **alpha**, l'AI Chat in **beta**, i messaggi Expedia in **beta** (solo l'elenco e l'ultimo messaggio; rispondi in Partner Central).
- WhatsApp funziona tramite WAHA, non tramite l'API ufficiale di Meta, quindi un numero potrebbe essere bloccato. Vedi [WhatsApp con Little Hotelier](/blog/whatsapp-little-hotelier).
- Dal 28 settembre 2026 Booking.com non invia più i numeri di telefono degli ospiti ai channel manager, quindi un WhatsApp di un ospite Booking.com può risultare **No reservation match**.
- L'AI per gli ospiti non può cancellare, cambiare date né incassare pagamenti, in nessuna modalità.

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::demo-cta{path="/messaging"}
::

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder o Little Hotelier. Si collega con i login Little Hotelier, Booking.com ed Expedia della tua struttura.
::

Guide correlate: [rispondere ai messaggi degli ospiti con l'AI](/blog/ai-replies-guest-messages), [l'assistente AI per la reception](/blog/ai-assistant-hotel-front-desk), [cos'è un server MCP](/blog/what-is-mcp-server-hotels).

## Riepilogo

- L'AI per le risposte agli ospiti non ha strumenti: legge una prenotazione verificata e i tuoi dati, e restituisce un piano con quattro azioni.
- Un messaggio viene legato a una prenotazione dal mittente (conversazione Booking.com, almeno 8 cifre del telefono, email esatta, riferimento `EXP-`), mai dal suo testo. Due corrispondenze significano nessuna prenotazione.
- Il testo dell'ospite è un dato, non un'istruzione; un filtro delle risposte blocca i riferimenti di altri ospiti, e su Booking.com l'AI non invia mai.
- L'AI Chat può consultare tutto ciò che il tuo ruolo consente, ma ogni modifica è una scheda monouso intestata a te, eseguita senza il modello, e non si avvia mai da sola.
- Dipendenti, Claude o ChatGPT e agenti del browser superano lo stesso controllo del ruolo, ognuno con il proprio passaggio di approvazione.
