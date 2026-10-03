---
title: "Come collegare Claude a Little Hotelier (MCP, guida passo passo)"
seoTitle: "Collegare Claude a Little Hotelier: guida MCP"
description: "Collega Claude a Little Hotelier con un connettore personalizzato: incolla un URL, accedi, consenti l'accesso. Primi prompt, sicurezza e problemi."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [collegare claude a little hotelier, little hotelier mcp, connettori mcp claude, claude desktop mcp configurazione, connettore personalizzato claude, little hotelier ai]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Guida alla configurazione MCP di Hotelier Tools con la spiegazione What is MCP? e la scheda Claude Desktop selezionata, che mostra i passaggi e lo snippet di configurazione con l'URL del server MCP"
featured: true
faq:
  - q: "Quali piani di Claude possono aggiungere un connettore personalizzato?"
    a: "A ottobre 2026 Anthropic indica i connettori personalizzati sui piani Free, Pro, Max, Team ed Enterprise. Gli account Free possono aggiungere un connettore personalizzato. Su Team ed Enterprise lo aggiunge un Owner per l'organizzazione e poi ogni membro si collega con il proprio login."
  - q: "Il collegamento a Little Hotelier funziona nell'app mobile di Claude?"
    a: "Sì. Una volta collegato su claude.ai o in Claude Desktop, Anthropic dice che è disponibile anche in Claude per iOS e Android. Aggiungere nuovi connettori personalizzati dal telefono è ancora in beta, quindi fai la configurazione da un computer."
  - q: "Come scollego Claude o cambio l'accesso?"
    a: "In Claude apri Customize, poi Connectors, e scegli Disconnect o Remove. In Hotelier Tools apri Developer, API Keys e revoca la connessione o la chiave che hai usato in Active keys. Revocare dal lato Hotelier Tools interrompe subito l'accesso."
  - q: "Claude può modificare le mie prenotazioni o i miei prezzi?"
    a: "Sì, se glielo permetti. Gli strumenti di scrittura partono quando Claude li chiama e Hotelier Tools non aggiunge una seconda scheda di approvazione fuori dalla sua dashboard, quindi tieni l'approvazione per strumento di Claude su Needs approval. Rimborsi, invio di fatture via email, presentazione dell'indagine INE e altre azioni irreversibili sono bloccati per Claude."
  - q: "Little Hotelier ha un proprio server MCP?"
    a: "Non uno ufficiale, a ottobre 2026. Il lavoro di SiteMinder sull'MCP riguarda la vendita di camere tramite assistenti AI, non i titolari che interrogano i propri dati. Hotelier Tools gestisce un server MCP indipendente che si collega con il login Little Hotelier della tua struttura."
  - q: "È un'integrazione ufficiale di Anthropic o di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da Anthropic, SiteMinder o Little Hotelier. Usa il protocollo MCP standard che Claude supporta per qualsiasi connettore personalizzato."
---

Little Hotelier non offre un proprio server MCP (a ottobre 2026), ma puoi comunque collegarci Claude tramite Hotelier Tools, che ne gestisce uno per la tua struttura. In Claude apri **Customize → Connectors → Add custom connector**, incolla `https://dashboard.hotelier.tools/api/mcp`, accedi a Hotelier Tools e premi **Allow access**. Claude potrà poi rispondere alle domande dalle tue prenotazioni in tempo reale e, se glielo permetti, fare modifiche.

Nuovo all'idea? Leggi prima [cos'è un server MCP](/blog/what-is-mcp-server-hotels). Bastano tre minuti.

## Cosa serve prima di iniziare

::callout{type="tip" title="Lista di controllo"}
- **Un account Claude.** A ottobre 2026 [Anthropic indica i connettori personalizzati](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) sui piani Free, Pro, Max, Team ed Enterprise. Gli account Free possono aggiungerne uno.
- **Un account Hotelier Tools** con Little Hotelier collegato in **Credentials** (`/credentials`). È gratuito per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.
- **Accesso API in Hotelier Tools.** Ce l'ha il titolare della struttura. Senza, la connessione viene rifiutata.
::

Hotelier Tools legge i tuoi dati con il login Little Hotelier della tua struttura. Non è affiliato né approvato da SiteMinder, Little Hotelier o Anthropic.

## Come collegare Claude a Little Hotelier (claude.ai e Claude Desktop)

È il percorso consigliato. Accedi dal browser, quindi non c'è nessuna chiave da copiare. Questi passaggi seguono le [istruzioni attuali di Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) per gli account Free, Pro e Max.

1. Apri [claude.ai](https://claude.ai) o l'app Claude Desktop e vai su **Customize → Connectors**. In alcune schermate si chiama ancora **Settings → Connectors**.
2. Clicca su **Add custom connector** (in alcuni account: **+ Add**, poi **Add custom connector**).
3. Chiamalo `Hotelier Tools` e incolla l'URL del server MCP: `https://dashboard.hotelier.tools/api/mcp`
4. Se Claude chiede come accedono le persone, scegli **Sign in now**. Se chiede un client OAuth, scegli **Register automatically**: il server di Hotelier Tools supporta questa registrazione automatica. Se vedi solo **Advanced settings**, lasciale vuote.
5. Clicca su **Add**, poi su **Connect**. Si apre una finestra di Hotelier Tools.
6. Accedi a Hotelier Tools. In **Authorize MCP access** scegli la struttura (solo se ne hai più di una) e premi **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Scheda Authorize MCP access: AI assistant (MCP client) vuole accedere al tuo account Hotelier Tools tramite l'API MCP, l'email con cui hai effettuato l'accesso, un token che scade tra 30 giorni e i pulsanti Deny e Allow access" caption="Premi Allow access (con più strutture, ne scegli prima una). Claude non vede mai la tua password." path="/oauth/authorize" width="472" height="327"}
::

7. Avvia una nuova chat, clicca su **+**, apri **Connectors** e verifica che **Hotelier Tools** sia attivo.
8. Fai una prima domanda (esempi qui sotto). Claude mostra quale strumento vuole usare e chiede prima di eseguirlo.

L'accesso dura **30 giorni**. Dopo, Claude ti chiede di collegarti di nuovo.

### Con un piano Team o Enterprise

Un Owner aggiunge il connettore una sola volta: **Organization settings → Connectors → Add → Custom → Web**, con lo stesso URL. Ogni collega apre poi **Customize → Connectors**, trova Hotelier Tools con l'etichetta **Custom** e clicca su **Connect**. Ogni connessione accede separatamente a Hotelier Tools e Claude agisce con i permessi del login usato.

### Nell'app mobile

Secondo [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), un connettore configurato su claude.ai o in Claude Desktop è disponibile anche in Claude per iOS e Android. Aggiungerne uno direttamente dal telefono è ancora in beta, quindi fai la configurazione da un computer.

## Usare una chiave API invece dell'accesso con login

La maggior parte delle persone dovrebbe usare l'accesso qui sopra. Una chiave API serve quando vuoi un accesso che non scada dopo 30 giorni, o per un client che non può fare l'accesso dal browser.

1. In Hotelier Tools apri **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Sotto "Generate a new key" scrivi un nome come `claude-desktop` e premi **Generate key**.
3. Copiala subito. La pagina avverte: "Copy this key now — it will not be shown again." Le chiavi iniziano con `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Pagina API keys subito dopo la generazione di una chiave: riquadro verde Key generated con l'avviso Copy this key now, it will not be shown again, la chiave mascherata e un pulsante di copia, la nuova chiave Blog integration in Active keys accanto a un'altra chiave, ciascuna con Revoke, e un avviso di API key created" caption="Crea una chiave, o revocane una, nella pagina API Keys. La chiave completa viene mostrata una sola volta." path="/developer/api-keys"}
::

**Su claude.ai**, alcune organizzazioni vedono una sezione **Request headers** nella finestra del connettore. Anthropic la indica come beta e disponibile solo per un gruppo limitato di organizzazioni. Se ce l'hai, scegli **No sign-in**, aggiungi l'header `authorization` e inserisci `Bearer htk_YOUR_API_KEY` (con la parola Bearer e uno spazio).

**In Claude Desktop**, il file di configurazione (**Settings → Developer → Edit Config**) è pensato per server che girano sul tuo computer. La documentazione di Anthropic dice che i server remoti si aggiungono [tramite Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). La pagina MCP Setup di Hotelier Tools mostra uno snippet con `url` + `headers`; se Claude Desktop lo ignora, la soluzione abituale è il bridge gratuito della community [mcp-remote](https://github.com/punkpeye/mcp-remote), che richiede [Node.js](https://nodejs.org) installato. È una configurazione tipica che non abbiamo provato in ogni versione di Claude Desktop:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Salva il file e chiudi del tutto e riapri Claude Desktop. L'header è scritto senza spazio dopo i due punti di proposito: la documentazione di mcp-remote spiega che Claude Desktop su Windows può rovinare gli spazi negli argomenti.

### Chiave API o accesso con login: quale usare?

| | Accesso (OAuth) | Chiave API (`htk_…`) |
|---|---|---|
| Configurazione | Incolla l'URL, accedi, **Allow access** | Genera una chiave, incollala in una configurazione |
| Dura | 30 giorni, poi ti ricolleghi | Finché non la revochi |
| Ideale per | claude.ai, Claude Desktop, mobile | Script, [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Si revoca in | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

Una volta collegati, funzionano allo stesso modo: Claude agisce **come la persona che ha effettuato l'accesso o creato la chiave**, su **una sola struttura**, con i permessi attuali di quella persona.

## Cosa chiedere per prima cosa a Claude

Parti da domande che si limitano a leggere. Scrivere "Hotelier Tools" aiuta Claude a scegliere il connettore giusto invece di cercare sul web.

::prompt{label="Claude"}
Usando Hotelier Tools, chi arriva oggi e domani? Mostrami nome, notti, camera e l'eventuale saldo ancora da pagare.
::

::prompt{label="Claude"}
Quali prenotazioni in arrivo nei prossimi 7 giorni non hanno ancora una camera assegnata?
::

::prompt{label="Claude"}
Quali ospiti hanno fatto il check-out la settimana scorsa e non hanno ancora una fattura? Per ciascuno, dimmi perché non si può ancora fatturare.
::

::prompt{label="Claude"}
Mostrami i problemi aperti dei controlli automatici, raggruppati per data di arrivo, con ciò che devo correggere in Little Hotelier.
::

::prompt{label="Claude"}
Quali sono le mie tariffe e la mia disponibilità per il prossimo weekend e come si confrontano con i prezzi dei concorrenti che hai?
::

::prompt{label="Claude"}
Spiegami, passo per passo, il prezzo consigliato per una doppia sabato 14 novembre.
::

Claude può anche combinare le risposte: "Fai una tabella degli arrivi della prossima settimana con i saldi da pagare e prepara un cordiale promemoria di pagamento per ciascuno" funziona bene. Le bozze restano in Claude; non viene inviato nulla.

## Cosa può fare Claude con i dati del tuo hotel e come tenerli al sicuro?

Il server MCP di Hotelier Tools offre a Claude più di 100 strumenti per l'hotel, sempre limitati dai tuoi permessi.

**Può leggere:** prenotazioni e ospiti, pagamenti, fatture e stato di fatturabilità, tariffe e disponibilità, prezzi dei concorrenti e prezzi consigliati con i relativi motivi, problemi dei controlli automatici, la lista do-not-rebook, la lista d'attesa, le attività programmate e i dati della struttura letti da Little Hotelier.

**Può modificare, quando Claude chiama lo strumento:** i dettagli di una prenotazione (prima una proposta con prima/dopo, poi un passaggio di applicazione che richiede `confirmed: true`), i registri dei pagamenti, l'iscrizione alla [fattura al check-out](/blog/send-invoice-to-guest-at-checkout), i prezzi dalle raccomandazioni, lo stop sell del canale, le voci della lista d'attesa e le attività programmate.

**Non può** fare nulla di irreversibile: quegli strumenti sono bloccati per Claude e per ogni altro client esterno. Per esempio, non può:

- inviare una fattura via email a un ospite
- fare un rimborso
- presentare l'indagine INE
- inviare inviti al team
- inviare via email il link di una fattura a un ospite
- rispondere a una domanda di un ospite di Booking.com
- eseguire il controllo della lista d'attesa che scrive agli ospiti

Quelle azioni restano nella chat della dashboard di Hotelier Tools, dietro una scheda di approvazione. Claude inoltre non può vedere altre strutture, andare oltre i tuoi permessi né fare ciò che Little Hotelier stesso rifiuterebbe.

### Azioni di scrittura: come tenere Claude al sicuro

::callout{type="warning" title="La richiesta di Claude è la tua approvazione"}
Dentro la dashboard di Hotelier Tools, ogni modifica aspetta una scheda da approvare o rifiutare. Fuori, non c'è una seconda scheda: **quando Claude chiama uno strumento di scrittura, questo parte.** L'approvazione che dai in Claude è l'unica.
::

Cinque abitudini per stare tranquilli:

1. **Tieni attive le approvazioni per gli strumenti di scrittura.** In **Customize → Connectors → Hotelier Tools**, Anthropic ti permette di impostare ogni strumento su **Always allow**, **Needs approval** o **Blocked**. Gli strumenti di lettura possono stare su "Always allow". Lascia su "Needs approval" tutto ciò che modifica i dati.
2. **Blocca ciò che non usi mai.** Se Claude non deve mai toccare i prezzi, imposta `apply_price_recommendations` e `set_channel_stop_sell` su **Blocked**.
3. **Leggi la proposta.** Per le modifiche alle prenotazioni, Claude mostra prima un prima/dopo da `propose_reservation_changes`. Controlla il codice prenotazione e i valori prima di dire di sì.
4. **Attenzione alle istruzioni nascoste nel testo.** I messaggi degli ospiti e i siti web sono scritti da sconosciuti. Se il risultato di uno strumento chiede all'improvviso a Claude di fare qualcosa che non gli hai chiesto, fermati. Anthropic dà lo [stesso consiglio](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Sappi chi è collegato.** Ogni connessione agisce come il login di Hotelier Tools che l'ha creata. Revoca quelle vecchie in `/developer/api-keys`, e sempre quando qualcuno lascia il team.

## I dati dei miei ospiti vengono inviati ad Anthropic?

Sì, le parti che Claude legge. Quando Claude chiama uno strumento, il risultato (nomi degli ospiti, date, importi) diventa parte della tua conversazione ed è elaborato da Anthropic secondo i termini del tuo piano.

A ottobre 2026 Anthropic dice che i dati di addestramento dei suoi piani consumer "does not include raw content from connectors… including remote and local MCP servers", a meno che tu non li copi nella chat ([fonte](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). Sui piani commerciali (Team, Enterprise, API), input e output [non sono usati per l'addestramento per impostazione predefinita](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

I dati degli ospiti sono dati personali e la tua struttura ne resta responsabile. Chiedi a Claude solo ciò che ti serve e disattiva il connettore nelle chat che non ne hanno bisogno.

::demo-cta{path="/developer/mcp-setup"}
::

## Risoluzione dei problemi

| Cosa vedi | Causa probabile | Cosa fare |
|---|---|---|
| Claude dice di non riuscire a connettersi, o un errore 401 | Accesso scaduto (30 giorni), chiave revocata o non hai più accesso alla struttura | **Disconnect** e **Connect** di nuovo, oppure crea una nuova chiave |
| 400 "No Little Hotelier credentials configured" | Little Hotelier non è ancora collegato | Collegalo in **Credentials** (`/credentials`) |
| 403 `permission_denied` | Il tuo login non ha accesso API | Chiedi al titolare di dare accesso API al tuo ruolo |
| 423 `lh_frozen` | Accesso a Little Hotelier in pausa dopo un login fallito, spesso per una password scaduta | Salva la nuova password in **Credentials** o premi **Check now & resume** |
| Gli strumenti non compaiono nella chat | Connettore disattivato per questa chat, o Desktop non riavviato | **+ → Connectors** → attivalo; riavvia Claude Desktop dopo le modifiche alla configurazione |
| La finestra di accesso non si apre | Pop-up bloccati | Consenti i pop-up per claude.ai e riprova **Connect** |

## Prossimi passi

- Vuoi la stessa cosa in ChatGPT? Segui [collegare ChatGPT a Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- Costruisci report o script? Vedi [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) o la [guida all'API REST](/blog/little-hotelier-api).
- Preferisci le schede di approvazione per ogni modifica? Usa l'[assistente integrato](/blog/ai-assistant-hotel-front-desk) nella dashboard.
- Tutto ciò che offre il server è nella [pagina della funzione API & MCP](/tools/bot/api-mcp).
