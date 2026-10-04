---
title: "Come collegare ChatGPT a Little Hotelier (e 18 prompt per piccoli hotel)"
seoTitle: "Collegare ChatGPT a Little Hotelier + 18 prompt"
description: "Collega ChatGPT a Little Hotelier con developer mode e un'app MCP, verifica cosa consente il tuo piano e copia 18 prompt per arrivi, pagamenti e prezzi."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [collegare chatgpt a little hotelier, chatgpt connettore mcp, chatgpt mcp, prompt chatgpt per hotel, chatgpt gestione hotel, chatgpt developer mode mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "Pagina Authorize MCP access di Hotelier Tools che un assistente AI apre quando si collega, con l'avviso del token di 30 giorni e i pulsanti Deny e Allow access"
faq:
  - q: "Quali piani di ChatGPT possono collegarsi a Little Hotelier?"
    a: "A ottobre 2026, il centro assistenza di OpenAI indica che il supporto MCP completo, comprese le azioni di scrittura, è per Business, Enterprise ed Edu sul web, mentre Pro può collegare app MCP con permessi di lettura e recupero in developer mode. Anche la documentazione per sviluppatori di OpenAI elenca Plus. Free e Go non sono elencati. Controlla cosa mostra il tuo account."
  - q: "Posso usare una chiave API invece di fare il login?"
    a: "No. OpenAI dice che ChatGPT non può presentare chiavi API personalizzate a un server MCP, quindi scegli OAuth. Accedi a Hotelier Tools in una finestra del browser e premi Allow access."
  - q: "ChatGPT può modificare le mie prenotazioni o i miei prezzi?"
    a: "Solo se il tuo piano consente le azioni di scrittura e le confermi tu. OpenAI chiede per impostazione predefinita la conferma prima delle azioni di scrittura. Hotelier Tools non aggiunge una seconda approvazione fuori dalla sua dashboard e blocca del tutto per ChatGPT rimborsi, invio di fatture via email, invio dell'indagine INE e altre azioni irreversibili."
  - q: "Funziona nell'app mobile di ChatGPT?"
    a: "Non per le app MCP personalizzate. Il centro assistenza di OpenAI dice che le app MCP in developer mode sono solo web. Usa chatgpt.com in un browser."
  - q: "I dati dei miei ospiti vengono usati per addestrare i modelli di OpenAI?"
    a: "Su Business, Enterprise ed Edu, OpenAI dice di non addestrare per impostazione predefinita sulle informazioni delle app collegate. Su Free, Plus, Go e Pro può farlo, se Improve the model for everyone è attivo in Data controls. Disattivalo prima di collegare i dati dell'hotel."
  - q: "Claude o ChatGPT: quale è meglio per le attività dell'hotel?"
    a: "Entrambi funzionano con lo stesso server di Hotelier Tools. A ottobre 2026 Claude consente connettori personalizzati con strumenti di scrittura su ogni piano, compreso Free (un connettore), mentre ChatGPT limita l'MCP completo in lettura e scrittura a Business, Enterprise ed Edu. Scegli l'assistente che il tuo team usa già."
---

Sì, puoi collegare ChatGPT a Little Hotelier. Attiva la **developer mode** in ChatGPT, crea un'app che punta al server MCP di Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) con **OAuth** e accedi a Hotelier Tools. Cosa potrà fare ChatGPT dipende poi dal tuo piano: a ottobre 2026 OpenAI riserva l'accesso completo in lettura e scrittura a Business, Enterprise ed Edu, mentre Pro (e, secondo la documentazione per sviluppatori di OpenAI, Plus) si collega con permessi di sola lettura.

Qui sotto trovi i passaggi come li documenta oggi OpenAI, cosa controllare nel tuo account e 18 prompt che funzionano per un piccolo hotel.

## Cosa serve prima di iniziare

- **Un piano ChatGPT con developer mode.** La [guida alla developer mode](https://developers.openai.com/api/docs/guides/developer-mode) di OpenAI elenca gli account Pro, Plus, Business, Enterprise ed Education, sul web. Il suo [centro assistenza](https://help.openai.com/en/articles/12584461) aggiunge che **l'MCP completo, comprese le azioni di scrittura, è per Business ed Enterprise/Edu**, e che Pro può collegarsi solo con permessi di lettura e recupero.
- **Un browser su computer.** OpenAI dice che le app MCP personalizzate sono solo web, non nelle app mobili.
- **Un account Hotelier Tools** con Little Hotelier collegato in **Credentials** (`/credentials`). Il login del titolare ha l'accesso API che ti serve. Hotelier Tools è gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Cosa abbiamo verificato e cosa devi verificare tu"}
Il server di Hotelier Tools supporta l'accesso che usa ChatGPT: OAuth con PKCE e registrazione automatica del client. I menu di ChatGPT e le regole dei piani cambiano spesso e non abbiamo provato ogni piano da cima a fondo. Nel tuo account controlla tre cose: che compaia **Developer mode**, che gli strumenti di Hotelier Tools si vedano dopo il collegamento e se il tuo piano permette a ChatGPT di eseguire azioni di scrittura.
::

Hotelier Tools è indipendente. Non è affiliato né approvato da OpenAI, SiteMinder o Little Hotelier e si collega con il login Little Hotelier della tua struttura.

## Come collegare ChatGPT a Little Hotelier, passo per passo

Questi passaggi seguono la [guida alla connessione](https://developers.openai.com/plugins/deploy/connect-chatgpt) di OpenAI a ottobre 2026. Se le tue schermate sono diverse, in ogni passaggio è indicato il percorso precedente del centro assistenza.

1. Vai su [chatgpt.com](https://chatgpt.com) in un browser e apri **Settings → Security and login**. Attiva **Developer mode**. (Alcuni account la mostrano in **Settings → Apps → Advanced settings**.)
2. Apri **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) e premi il pulsante **+** per creare un'app in developer mode. (Schermate precedenti: **Settings → Apps → Create**.)
3. Compila il modulo:
   - **Name:** `Hotelier Tools`
   - **Description:** `Prenotazioni, ospiti, fatture e prezzi della mia struttura su Little Hotelier`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. Crea l'app. ChatGPT può mostrare prima **Scan Tools**. Si apre una finestra di Hotelier Tools.
5. Accedi a Hotelier Tools. In **Authorize MCP access** scegli la struttura, se ne hai più di una, e premi **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Scheda Authorize MCP access: AI assistant (MCP client) vuole accedere al tuo account Hotelier Tools tramite l'API MCP, l'email con cui hai effettuato l'accesso, un token che scade tra 30 giorni e i pulsanti Deny e Allow access" caption="Premi Allow access. ChatGPT non vede mai la password di Hotelier Tools né quella di Little Hotelier." path="/oauth/authorize" width="472" height="327"}
::

6. Controlla l'elenco degli strumenti che ChatGPT ha trovato. L'app compare con l'etichetta **Dev**.
7. Avvia una nuova chat. Apri il menu **+**, scegli **Developer mode** e seleziona **Hotelier Tools** (negli account più recenti puoi anche digitare `@` e sceglierla).

L'accesso dura **30 giorni**. Dopo, ChatGPT ti chiede di ricollegarti. Puoi vedere e revocare la connessione in Hotelier Tools in **Developer → API Keys** (`/developer/api-keys`), dove ha un badge **MCP client**.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Pagina API keys di Hotelier Tools con il modulo Generate a new key, un elenco Active keys con una chiave mascherata e un pulsante Revoke, e le note Good security practice" caption="Chiavi e connessioni sono elencate in Active keys. Revocane una per interrompere subito il suo accesso." path="/developer/api-keys"}
::

### Con un workspace Business, Enterprise o Edu

Su **Business**, OpenAI dice che solo amministratori e proprietari possono usare la developer mode e pubblicare app. Per condividere l'app con i colleghi, un amministratore la pubblica da **Workspace settings → Apps → Drafts → Publish**. Su **Enterprise ed Edu**, gli amministratori possono concedere la developer mode a membri scelti con accesso basato sui ruoli. Ogni persona accede comunque a Hotelier Tools con un login che ha accesso API.

### Perché non una chiave API?

La [documentazione sull'autenticazione](https://developers.openai.com/plugins/build/auth) di OpenAI dice che ChatGPT "cannot present custom API keys". Le chiavi API `htk_` che funzionano in [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) quindi qui non si usano. L'unica via è l'accesso dal browser.

## 18 prompt che funzionano per i piccoli hotel

Inizia ogni chat con Hotelier Tools selezionato. Nominarlo nel prompt aiuta ChatGPT a usare i tuoi dati invece del web. Il codice prenotazione qui sotto è inventato.

### Arrivi e camere

::prompt{label="ChatGPT"}
Usando Hotelier Tools, chi arriva oggi? Elenca ospite, notti, tipologia di camera e se è già assegnata una camera.
::

::prompt{label="ChatGPT"}
Quali prenotazioni in arrivo nei prossimi 7 giorni non hanno ancora una camera assegnata?
::

::prompt{label="ChatGPT"}
Chi fa il check-out oggi e c'è qualcuno con un saldo ancora aperto?
::

::prompt{label="ChatGPT"}
Quante camere di ogni tipologia sono ancora disponibili stanotte e domani notte?
::

### Pagamenti e fatture

::prompt{label="ChatGPT"}
Elenca le prenotazioni in arrivo nei prossimi 14 giorni con un saldo da pagare, ordinate per importo, dal più alto.
::

::prompt{label="ChatGPT"}
Quali soggiorni hanno fatto il check-out la settimana scorsa e non hanno ancora una fattura? Per ciascuno, dimmi perché non si può ancora fatturare.
::

::prompt{label="ChatGPT"}
La prenotazione BDC-1234567890 è pronta per essere fatturata? Se no, cosa manca esattamente?
::

::prompt{label="ChatGPT"}
Scrivi un breve e cordiale promemoria di pagamento per ogni ospite che arriva questa settimana con un saldo da pagare. Non inviare nulla: dammi solo i testi.
::

### Prezzi e disponibilità

::prompt{label="ChatGPT"}
Mostrami tariffe e disponibilità per il prossimo venerdì e sabato, per tipologia di camera.
::

::prompt{label="ChatGPT"}
Confronta i miei prezzi delle prossime 14 notti con i prezzi dei concorrenti che hai. In quali notti sono il più economico e in quali il più caro?
::

::prompt{label="ChatGPT"}
Spiegami, passo per passo, perché il prezzo consigliato per una doppia sabato 14 novembre è quello che è.
::

::prompt{label="ChatGPT"}
Quali notti dei prossimi 30 giorni hanno la minore occupazione? Suggeriscimi quali dovrei guardare per prime.
::

### Ospiti

::prompt{label="ChatGPT"}
Trova l'ospite il cui telefono finisce con 4521 e mostrami i suoi soggiorni passati e futuri.
::

::prompt{label="ChatGPT"}
Qualche arrivo dei prossimi 7 giorni corrisponde alla mia lista do-not-rebook?
::

::prompt{label="ChatGPT"}
A quali ospiti in arrivo questa settimana manca ancora un documento d'identità o un indirizzo?
::

### Report

::prompt{label="ChatGPT"}
Riassumi il mese scorso: arrivi, notti vendute per tipologia di camera, cancellazioni e no-show. Presentalo in una tabella.
::

::prompt{label="ChatGPT"}
Cosa hanno fatto questa settimana le attività programmate e qualcuna è fallita? Spiegami in parole semplici ogni errore.
::

::prompt{label="ChatGPT"}
Chi è in lista d'attesa, per quali date, e si è liberato qualcosa per loro?
::

Le risposte valgono quanto i dati in Little Hotelier. Se una cifra ti sembra sbagliata, chiedi a ChatGPT di mostrarti le prenotazioni che ha usato.

## ChatGPT collegato o copia e incolla: che differenza c'è?

Senza collegamento, esporti un report da Little Hotelier, lo incolli in ChatGPT e fai la tua domanda. Va bene per un'analisi una tantum, ma i dati sono una fotografia, la tua esportazione può non avere alcuni campi e l'elenco ospiti che hai incollato resta nella chat.

Con l'app MCP, ChatGPT chiede a Hotelier Tools esattamente ciò che gli serve, quando gli serve: gli arrivi di oggi, il saldo di un ospite, le tariffe della prossima settimana. Non esporti nulla e la risposta riflette Little Hotelier in quel momento.

Se vuoi comunque i fogli di calcolo, vedi [esportare le prenotazioni in Excel](/blog/export-little-hotelier-reservations-excel).

## ChatGPT può fare modifiche e come vengono approvate?

Sui piani con MCP completo, sì. Hotelier Tools offre strumenti di scrittura come aggiornare una prenotazione (prima una proposta prima/dopo, poi un passaggio di applicazione), registrare un pagamento, programmare la [fattura al check-out](/blog/send-invoice-to-guest-at-checkout) di un soggiorno e applicare i prezzi.

::callout{type="warning" title="La conferma di ChatGPT è l'unica approvazione"}
Dentro la dashboard di Hotelier Tools, ogni modifica aspetta una scheda di approvazione. Fuori, non ce n'è: **uno strumento di scrittura viene eseguito non appena ChatGPT lo richiama.** OpenAI dice che "write actions by default require confirmation" e avverte che azioni di scrittura sbagliate "could destroy data". Leggi ogni conferma prima di accettarla.
::

Regole pratiche:

- **Tieni i permessi dell'app su Always ask.** I [permessi delle app](https://help.openai.com/en/articles/20001495) di OpenAI vanno da **Always ask** a **Allow all actions**; l'ultimo salta le richieste di conferma e comporta un "elevated risk". ChatGPT tratta come azione di scrittura qualsiasi strumento non etichettato come sola lettura, quindi aspettati una richiesta anche per alcune consultazioni.
- **Non lasciare che ricordi le approvazioni per le scritture** nelle conversazioni lunghe. Una scelta ricordata vale solo per quella chat, ma in una sola chat si possono fare molte cose.
- **Fai attenzione alle istruzioni nascoste nei messaggi degli ospiti.** OpenAI avverte della prompt injection. Se ChatGPT propone qualcosa che non hai chiesto, rifiuta.

Alcune azioni non sono mai disponibili per ChatGPT, qualunque cosa tu approvi. Gli strumenti irreversibili sono bloccati per ogni client esterno, compresi l'invio di una fattura via email a un ospite, i rimborsi, l'invio dell'indagine INE, l'invio di inviti al team, l'invio via email del link di una fattura a un ospite, la risposta a una domanda di Booking.com e il controllo della lista d'attesa che scrive agli ospiti. Restano nell'[assistente della dashboard](/blog/ai-assistant-hotel-front-desk), dietro una scheda.

## Privacy: dove vanno i dati?

Quando ChatGPT chiama uno strumento di Hotelier Tools, il risultato, come nomi degli ospiti, date e importi, entra nella conversazione ed è elaborato da OpenAI.

Secondo l'[articolo sulle app collegate](https://help.openai.com/en/articles/11487775) di OpenAI, a ottobre 2026:

- Su **Business, Enterprise ed Edu**, OpenAI "does not use information accessed from connectors to train models by default".
- Su **Free, Plus, Go e Pro**, OpenAI "may use information accessed from apps to train our models" se **Improve the model for everyone** è attivo. Disattivalo in [Data controls](https://help.openai.com/en/articles/7730893) prima di collegare i dati dell'hotel.
- La memoria di ChatGPT può conservare dettagli che ha letto tramite un'app. Se ti interessa, controlla **Memory** nelle impostazioni.

I dati degli ospiti sono dati personali e la tua struttura ne resta responsabile. Chiedi solo ciò che ti serve.

::demo-cta{path="/developer/mcp-setup"}
::

## Risoluzione dei problemi

- **Manca la developer mode.** Il tuo piano potrebbe non includerla o, su Business, solo gli amministratori possono usarla. Su Enterprise ed Edu, chiedi a un amministratore di concedertela.
- **Non compaiono gli strumenti di Hotelier Tools, o solo alcuni.** Il tuo piano potrebbe consentire solo permessi di lettura e recupero. Controlla nel centro assistenza di OpenAI per il tuo piano, oppure usa [Claude](/blog/connect-claude-to-little-hotelier), che consente connettori personalizzati con strumenti di scrittura su ogni piano.
- **ChatGPT smette di funzionare con l'app dopo un mese.** L'accesso è durato 30 giorni. Ricollegati da **Settings → Plugins** (o **Apps**).
- **Errore "No Little Hotelier credentials configured".** Collega prima Little Hotelier in **Credentials** in Hotelier Tools.
- **"lh_frozen" o simili.** L'accesso a Little Hotelier è in pausa dopo un login fallito, spesso per una password scaduta. Salva la nuova password in **Credentials** o premi **Check now & resume**.

## Riepilogo

- Attiva la developer mode, crea un'app con l'URL `https://dashboard.hotelier.tools/api/mcp` e **OAuth**, e premi **Allow access**.
- Controlla il tuo piano: l'MCP completo in lettura e scrittura è per Business, Enterprise ed Edu; Pro, e forse Plus, hanno permessi di sola lettura, secondo OpenAI.
- Tieni i permessi dell'app su **Always ask**; rimborsi e altre azioni irreversibili sono comunque bloccati.
- Non conosci ancora l'MCP? Parti da [cos'è un server MCP](/blog/what-is-mcp-server-hotels). Tutti gli strumenti sono nella [pagina API & MCP](/tools/bot/api-mcp).
