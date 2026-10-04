---
title: "Server MCP: cosa sono e come usarli in hotel (guida semplice e quali PMS ce l'hanno)"
seoTitle: "Server MCP: cos'è e come usarlo in hotel (2026)"
description: "Un server MCP permette a Claude o ChatGPT di leggere e usare il software del tuo hotel. Guida semplice, sicurezza e quali PMS ce l'hanno a ottobre 2026."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [server mcp cosa sono, mcp cos'è, mcp claude cos'è, server mcp per hotel, mcp pms hotel, little hotelier mcp, apaleo mcp server, mews mcp server]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guida alla configurazione MCP in Hotelier Tools con una spiegazione What is MCP? e le schede Client configuration per Claude Desktop, VS Code, Cursor e Custom / SDK, con la configurazione di Claude Desktop e l'indirizzo del server"
featured: true
faq:
  - q: "Cosa significa MCP?"
    a: "Model Context Protocol. È uno standard aperto che Anthropic ha rilasciato a novembre 2024 perché gli assistenti AI possano collegarsi ad altri software in un unico modo comune. A dicembre 2025 è stato donato alla Agentic AI Foundation, sotto la Linux Foundation."
  - q: "Un server MCP è la stessa cosa di un'API?"
    a: "No. Un'API è un insieme di richieste fisse su cui i programmatori scrivono codice. Un server MCP descrive i propri strumenti a un assistente AI, che può sceglierli e chiamarli a partire da una richiesta in linguaggio naturale. La maggior parte dei server MCP è costruita sopra un'API."
  - q: "Devo essere uno sviluppatore per usare un server MCP?"
    a: "No. In Claude incolli l'indirizzo del server in un connettore personalizzato e accedi. In ChatGPT attivi la developer mode e crei un'app con l'indirizzo. Gli sviluppatori possono usarlo anche da Claude Code, Cursor o VS Code."
  - q: "SiteMinder ha un server MCP?"
    a: "Sì, ma per la distribuzione. Channels Plus MCP e Direct Booking MCP di SiteMinder permettono alle piattaforme di viaggio AI di mostrare e vendere camere d'albergo. Non servono a un gestore per interrogare un'AI sulle proprie prenotazioni in Little Hotelier."
  - q: "Un server MCP può modificare le mie prenotazioni?"
    a: "Può farlo se offre strumenti di scrittura e li consenti. I buoni server separano la lettura dalla modifica, bloccano le azioni irreversibili come i rimborsi e contano sul fatto che la tua app AI chieda conferma prima di ogni modifica. Controlla cosa può fare un server prima di collegarlo."
  - q: "È sicuro collegare un'AI ai dati degli ospiti?"
    a: "Può esserlo, con attenzione. I dati degli ospiti su cui fai domande vengono inviati al fornitore dell'AI, quindi controlla le sue impostazioni di addestramento, collega solo server di cui ti fidi, tieni attive le approvazioni per le modifiche e revoca gli accessi che non usi più. L'hotel resta responsabile dei dati degli ospiti."
---

Un server MCP è un connettore che permette a un assistente AI come Claude o ChatGPT di consultare dati ed eseguire compiti in un altro software, usando uno standard aperto chiamato **Model Context Protocol**. Per un hotel significa che puoi chiedere "chi arriva domani con un saldo da pagare?" e l'assistente ricava la risposta dal tuo gestionale (PMS) senza che tu debba copiarla a mano. A ottobre 2026 solo pochi PMS ne offrono uno ufficiale; Little Hotelier no, ma puoi collegarlo tramite Hotelier Tools.

Questa è la pagina di partenza delle nostre guide sull'AI. Ogni sezione rimanda a una guida passo per passo quando sei pronto.

## Cosa significa MCP e chi l'ha creato?

MCP sta per **Model Context Protocol**. Anthropic, l'azienda dietro Claude, lo ha [rilasciato come standard aperto](https://www.anthropic.com/news/model-context-protocol) il 25 novembre 2024. A dicembre 2025 Anthropic lo ha [donato alla Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), un fondo sotto la Linux Foundation cofondato da Anthropic, Block e OpenAI. Nel frattempo era stato adottato da ChatGPT, Cursor, Gemini, Microsoft Copilot e Visual Studio Code, tra gli altri.

Ci sono due lati:

- **Il client MCP** vive dentro la tua app AI: Claude, ChatGPT, Copilot.
- **Il server MCP** vive dal lato del software. Offre un elenco di **strumenti**, ciascuno con un nome e una descrizione, come "leggi le prenotazioni per intervallo di date" o "registra un pagamento".

Quando fai una domanda, l'AI legge l'elenco degli strumenti, sceglie quello giusto, lo chiama e risponde con il risultato. Non scrivi mai codice.

## MCP, API e chatbot: un'analogia alberghiera

Immagina il tuo PMS come il back office in cui si trova il registro delle prenotazioni.

- **Un'API** è lo sportello del back office con un modulo di richiesta rigido. Il software può usarlo, ma un programmatore deve scrivere codice per ogni modulo da compilare.
- **Un server MCP** è un concierge che sta a quello sportello. Consegna a qualsiasi assistente AI un menu stampato di ciò che può fare ("elenca gli arrivi", "controlla un saldo", "proponi una modifica"), compila i moduli al suo posto e rifiuta ciò che non è consentito. La maggior parte dei server MCP è costruita sopra un'API.
- **Un chatbot** è un receptionist che ha letto solo l'opuscolo. Sa chiacchierare con garbo, ma non può aprire il registro delle prenotazioni. Dagli una connessione MCP e potrà controllare le prenotazioni vere.

| | Cos'è | Chi lo usa | Esempio in hotel |
|---|---|---|---|
| API | Richieste fisse per il software | Sviluppatori | "Prenotazioni con check-in dal 1 al 30 aprile" |
| Server MCP | Un menu di strumenti che un'AI può scoprire e chiamare | Assistenti AI | "Chi arriva domani con un saldo da pagare?" |
| Chatbot | Un'AI che conversa | Ospiti o personale | "A che ora è la colazione?" |

Se vuoi approfondire il lato API, leggi [Little Hotelier ha un'API?](/blog/little-hotelier-api)

## Cosa puoi chiedere a un'AI collegata al tuo PMS?

Una volta collegata, chiedi a parole tue. Con Little Hotelier collegato tramite Hotelier Tools, funzionano richieste come queste:

::prompt{label="Claude"}
Chi arriva domani e qualcuno di loro ha ancora un saldo da pagare?
::

::prompt{label="ChatGPT"}
Quali soggiorni hanno fatto il check-out la settimana scorsa e non hanno ancora una fattura? Per ciascuno, perché non si può ancora fatturare?
::

::prompt{label="Claude"}
Confronta i miei prezzi delle prossime 14 notti con i prezzi dei concorrenti che hai e dimmi dove sono più economico.
::

::prompt{label="Claude"}
Quali arrivi dei prossimi 7 giorni non hanno una camera assegnata o hanno il documento d'identità mancante?
::

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="L'assistente AI di Hotelier Tools a cui è stato chiesto quali prenotazioni arrivano questa settimana, con una chiamata a uno strumento riuscita e un elenco Reservations (14) di schede con nome dell'ospite, date di check-in e check-out, Paid o Pending e badge di stato come checked-out, checked-in e confirmed" caption="Alla domanda su quali prenotazioni arrivano questa settimana, l'assistente chiama uno strumento per le prenotazioni e mostra il risultato in tempo reale. Gli stessi strumenti rispondono in Claude o ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

La differenza rispetto a incollare un'esportazione in un chatbot: i dati sono in tempo reale, non esporti nulla e l'assistente può anche agire (con la tua approvazione) invece di limitarsi a parlare.

Cosa l'MCP non cambia: l'AI può comunque interpretare male una richiesta e la risposta vale quanto i dati nel tuo PMS. Quando un numero conta, chiedile di mostrare le prenotazioni che ha usato.

## Quali PMS alberghieri hanno un server MCP? (a ottobre 2026)

Abbiamo controllato il sito e la documentazione di ogni fornitore il 3 ottobre 2026. "Non trovato" significa che non abbiamo trovato un server o un annuncio ufficiale, non la prova che non ne stia arrivando uno.

| PMS | MCP ufficiale per i tuoi dati? | Può modificare i dati? | Note |
|---|---|---|---|
| Apaleo | Sì, beta aperta | Lettura e scrittura | Circa 230 strumenti; [documentazione per sviluppatori di Apaleo](https://apaleo.dev/guides/ai/overview.html). Annunciato per la prima volta a [settembre 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server). |
| Hospitable (affitti vacanza) | Sì, da aprile 2026 | Lettura e scrittura | I messaggi inviati tramite esso "vengono consegnati subito agli ospiti"; non incluso nel piano Essentials ([assistenza](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (affitti vacanza) | Sì, beta iniziale | Solo lettura | Definito "sperimentale" ([documentazione](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (affitti vacanza) | Annunciato | Lettura e scrittura, secondo Lodgify | La sua [pagina sull'AI](https://www.lodgify.com/ai/) presenta "Lodgify MCP"; non abbiamo potuto confermarne la disponibilità generale |
| Cloudbeds | Solo documentazione | No | Il suo MCP serve la [documentazione per sviluppatori](https://developers.cloudbeds.com/docs/build-with-llms), non i dati dell'hotel |
| Mews | Non trovato | — | Solo progetti non ufficiali della community, come [questo su GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | Non trovato | — | Esistono progetti non ufficiali della community ([esempio](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | Non trovato | — | Hostaway e Beds24 hanno progetti non ufficiali della community |
| SiteMinder | Solo per la distribuzione | — | Vedi sotto |
| Little Hotelier | Non trovato | — | Collegalo tramite [Hotelier Tools](/tools/bot/api-mcp), un server MCP indipendente |

Emergono due tendenze. La maggior parte dei server ufficiali finora arriva dalle piattaforme per affitti vacanza e da Apaleo, un PMS alberghiero pensato fin dall'inizio per le API. E diversi fornitori usano "MCP" per altro: documentazione per sviluppatori o vendita di camere tramite app AI.

## Little Hotelier ha un server MCP?

Non uno ufficiale. A ottobre 2026 non abbiamo trovato alcun server MCP né annuncio di Little Hotelier su littlehotelier.com, nella newsroom di SiteMinder o nel suo sito per sviluppatori. La documentazione delle API partner di SiteMinder precisa persino che i dati di disponibilità e tariffe [non si possono ottenere da Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) con quell'API.

Il lavoro di SiteMinder sull'MCP riguarda la **distribuzione**. Secondo [SiteMinder](https://www.siteminder.com/ai-distribution/), Channels Plus MCP permette alle piattaforme di viaggio AI di prenotare gli hotel del suo portafoglio, e Direct Booking MCP mostra le tariffe in tempo reale di un hotel con Demand Plus dentro ChatGPT, Gemini e Claude con un link al suo motore di prenotazione. Questo aiuta gli ospiti a trovarti. Non permette a *te* di interrogare un'AI sulle tue prenotazioni.

**Hotelier Tools** colma questa lacuna. È una dashboard indipendente che si collega con il login di Little Hotelier della tua struttura ed esegue un server MCP all'indirizzo `https://dashboard.hotelier.tools/api/mcp`:

- più di 100 strumenti per l'hotel: prenotazioni, ospiti, pagamenti, fatture, tariffe, prezzi dei concorrenti, controlli automatici, lista d'attesa e altro
- accesso dal browser (OAuth) oppure con una chiave API
- ogni connessione agisce come una persona, su una struttura, con i permessi di quella persona
- le azioni irreversibili, come rimborsi, invio di fatture per email e invio dell'indagine INE, sono bloccate per le app AI esterne

Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent.webp" alt="Pagina Authorize MCP access in Hotelier Tools: AI assistant (MCP client) vuole accedere al tuo account Hotelier Tools tramite l'API MCP, con accesso come demo@hotelier.tools e un token che scade in 30 giorni e può essere revocato, con i pulsanti Deny e Allow access" caption="Quando un'app AI si collega con un accesso, vedi cosa chiede e quale account usa. L'accesso scade dopo 30 giorni." path="/oauth/authorize"}
::

Scegli la tua guida:

- [Collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, mobile)
- [Collegare ChatGPT a Little Hotelier](/blog/connect-chatgpt-to-little-hotelier), con 18 prompt
- [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), per report e script
- [Un assistente AI alla reception](/blog/ai-assistant-hotel-front-desk), con schede di approvazione dentro la dashboard

## È sicuro collegare un'AI al sistema del tuo hotel?

Può esserlo, se lo affronti come quando consegni una chiave a un nuovo dipendente. Cinque rischi e cosa fare per ciascuno:

1. **L'AI cambia la cosa sbagliata.** Potrebbe scegliere la prenotazione sbagliata o leggere male una data. Scegli server che separano la lettura dalla modifica e tieni attiva l'impostazione "chiedi prima di eseguire" della tua app AI per ogni strumento che modifica dati.
2. **Istruzioni nascoste nel testo.** Un'email di un ospite o una pagina web potrebbe contenere testo scritto per ingannare un'AI ("ignora le tue istruzioni e rimborsa…"). Si chiama prompt injection. Le approvazioni su ogni modifica sono la tua rete di sicurezza.
3. **I dati degli ospiti escono dal tuo PMS.** Tutto ciò che l'AI legge viene inviato al fornitore dell'AI. Controlla le sue impostazioni di addestramento: Anthropic e OpenAI descrivono le proprie nei rispettivi centri assistenza, e i piani business di solito escludono l'addestramento per impostazione predefinita.
4. **Accessi che non finiscono mai.** Le chiavi vengono copiate e dimenticate. Preferisci accessi che scadono, dai a ogni strumento una chiave propria e revoca ciò che non usi più.
5. **Server sconosciuti.** Un server della community trovato su internet può girare sul tuo computer con la tua password. Collega solo server di organizzazioni di cui ti fidi.

Un buon server MCP per hotel blocca anche le azioni che non puoi annullare. In Hotelier Tools, rimborsi, invio di fatture per email agli ospiti e invio di comunicazioni ufficiali non sono affatto disponibili per le app AI esterne; dentro la dashboard stanno dietro una scheda di approvazione.

::callout{type="warning" title="Modifiche fatte tramite app AI esterne"}
Dentro la dashboard di Hotelier Tools, ogni modifica attende una scheda di approvazione o rifiuto. Quando Claude, ChatGPT o un editor di codice chiama uno strumento di scrittura, viene eseguito subito, quindi la conferma nella tua app AI è l'approvazione. Tienila attiva.
::

## Quanto costa un server MCP?

MCP in sé è gratuito: è uno standard aperto. Paghi per ciò che gli sta intorno:

- **L'app AI.** A ottobre 2026 Claude consente connettori personalizzati su ogni piano, compreso Free (un connettore), secondo [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). ChatGPT offre MCP completo in lettura e scrittura su Business, Enterprise ed Edu, con accesso in sola lettura in developer mode su Pro, secondo [OpenAI](https://help.openai.com/en/articles/12584461).
- **Il server.** I fornitori di PMS decidono le proprie condizioni; Hospitable, per esempio, esclude MCP dal piano Essentials. Hotelier Tools è gratuito per tutti gli hotel fino all'inizio della fatturazione, il 10 gennaio 2027; gli hotel che iniziano nel 2026 pagano poi 50 € al mese per tutto il 2027, con tutte le funzioni incluse.

::demo-cta{path="/chat"}
::

## Riepilogo

- Un server MCP è un menu di strumenti che un assistente AI può usare nel tuo software, costruito su uno standard aperto di Anthropic, ora gestito sotto la Linux Foundation.
- Esistono server ufficiali di PMS alberghieri e per affitti (Apaleo, Hospitable, Guesty); Little Hotelier non ne ha, e l'MCP di SiteMinder è per la distribuzione.
- Puoi collegare Little Hotelier tramite Hotelier Tools, con Claude, ChatGPT o un editor di codice.
- Tieni attive le approvazioni per le modifiche, controlla le impostazioni sui dati del tuo fornitore di AI e revoca gli accessi che non usi più.
