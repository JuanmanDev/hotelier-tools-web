---
title: "Una REST API e un server MCP per i dati di Little Hotelier"
---

Hotelier Tools offre alla tua struttura su Little Hotelier una REST API su `https://dashboard.hotelier.tools/api/v1` e un server MCP su `https://dashboard.hotelier.tools/api/mcp`. I tuoi script, fogli di calcolo, Claude, ChatGPT, Cursor o VS Code possono così leggere prenotazioni, ospiti, prezzi e disponibilità e fare alcune modifiche, con gli stessi permessi del tuo account Hotelier Tools.

## Come funziona

- **Il tuo accesso, non un'API per partner.** Colleghi Little Hotelier una sola volta in **Credentials**, con salvataggio cifrato. Hotelier Tools usa gli stessi endpoint web dell'app web di Little Hotelier, quindi può fare ciò che può fare quell'accesso, niente di più.
- **REST API.** JSON su HTTPS: `/reservations` (con fatture e PDF per prenotazione), `/guests`, `/prices`, `/room-types` e `/methods` per i metodi grezzi di Little Hotelier. L'elenco completo è nella specifica OpenAPI pubblica in `/api/v1/openapi.json`, con un esploratore interattivo e modelli di codice in **REST API & Swagger** (`/developer/rest-api`).
- **Server MCP.** Un server HTTP remoto con più di 100 strumenti per hotel. Le configurazioni pronte per ogni client sono in **MCP Setup** (`/developer/mcp-setup`).

## Come funziona l'autenticazione

- **Chiavi API.** Creane una in **Developer > API & MCP > API Keys** (`/developer/api-keys`). Le chiavi iniziano con `htk_`, vengono mostrate una sola volta e vanno in un'intestazione `Authorization: Bearer`. Una chiave non ha ambiti: agisce su una struttura come la persona che l'ha creata. Ogni persona può avere fino a 10 chiavi e revocarle quando vuole.
- **Accesso per MCP.** I client che supportano OAuth possono collegarsi accedendo con le proprie credenziali. Quell'accesso dura 30 giorni.

## Chiamate di lettura e di scrittura

Le chiamate di lettura non cambiano nulla in Little Hotelier. Le scritture sono reali: `POST /reservations/{id}/invoices` crea ogni volta una nuova fattura. Tramite MCP, un'IA può modificare prenotazioni (prima una proposta, poi un passaggio di applicazione con `confirmed: true`), registrazioni di pagamento, prezzi, stop vendita, voci della lista d'attesa e attività pianificate. Fuori dalla dashboard non c'è nessuna scheda di approvazione, quindi tieni attive le approvazioni degli strumenti del tuo client. Le azioni irreversibili, come i rimborsi o l'invio delle fatture per email, sono bloccate per i client esterni.

## Limiti e da sapere

- **Stato:** REST API e server MCP sono in beta. Le schede incorporabili sono in alpha.
- **Limite di richieste:** 100 richieste al minuto per indirizzo IP, poi `429` con `Retry-After`.
- **Paginazione:** al massimo 100 prenotazioni per chiamata, filtrate per data di check-in.
- **Non disponibili:** webhook in uscita, una chiave sandbox pubblica, pacchetti SDK.
- **I dati mascherati restano mascherati:** Little Hotelier maschera i dati degli ospiti 180 giorni dopo il check-out.
- Non è un'API ufficiale di SiteMinder.

Inizia con [Little Hotelier ha un'API?](/blog/little-hotelier-api) e [cos'è un server MCP](/blog/what-is-mcp-server-hotels), poi configura [Claude](/blog/connect-claude-to-little-hotelier) o [Claude Code, Cursor e VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
