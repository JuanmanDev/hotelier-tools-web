---
title: "Un assistente IA per la reception di Little Hotelier"
---

L'assistente IA risponde in parole semplici alle domande sulle tue prenotazioni, ospiti, prezzi, fatture, controlli e lista d'attesa di Little Hotelier, e prepara le modifiche per te. Legge liberamente, ma ogni modifica compare come una scheda che approvi o rifiuti prima che qualsiasi cosa arrivi su Little Hotelier.

## Come funziona

1. **Chiedi nella chat.** Apri **AI Chat** (`/chat`) e scrivi una richiesta, per esempio chi arriva domani e chi deve ancora pagare. Le risposte arrivano sotto forma di testo e schede: riepiloghi delle prenotazioni, una modifica proposta con una tabella di prove o una tabella di prezzi consigliati.
2. **Approva o rifiuta.** Ogni scrittura richiede una scheda. Se il sistema non sa dire se uno strumento legge o scrive, lo tratta come una scrittura. La scheda mostra il valore in Little Hotelier accanto a quello nuovo e da dove proviene.
3. **Approvare esegue esattamente quella modifica.** La chiamata salvata viene eseguita sul server e l'IA non ha una seconda possibilità di riscriverla. Ogni approvazione funziona una sola volta e scade dopo 24 ore. I rimborsi hanno sempre una scheda a parte.
4. **Anche il tuo staff può chiedere.** In **Staff assistant** (`/staff`), registra un dipendente con il suo numero WhatsApp o la sua email e un ruolo: **Read only** o **Can request changes**. Scrivono al tuo numero o alla tua casella collegati, e ogni modifica richiesta attende l'approvazione del titolare.

Le richieste reali e cosa succede dopo ciascuna sono in [Assistente IA per la reception di un piccolo hotel](/blog/ai-assistant-hotel-front-desk).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**.
- La scheda della tua struttura in `/settings/property`, letta da Little Hotelier.
- Per l'assistente dello staff, un numero WhatsApp o una casella email collegati.
- Crediti IA: ogni risposta li usa e il tuo saldo è in **AI credits**.

## Limiti e da sapere

- **Stato:** la chat e le approvazioni sono in beta, l'assistente dello staff è in alpha e gli account del team con ruoli di proprietario, responsabile e staff sono in arrivo.
- **Per ora la voce è in spagnolo.** Il microfono usa il riconoscimento vocale del tuo browser impostato sullo spagnolo (es-ES). Puoi scrivere in qualsiasi lingua.
- **L'identità dello staff è il mittente.** Un numero di telefono registrato, o un'email che supera i controlli DKIM/DMARC. I messaggi dello staff più vecchi di 30 minuti non ricevono risposta.
- **Fuori dalla dashboard non c'è nessuna scheda.** Quando Claude o ChatGPT chiamano uno strumento di scrittura tramite il [server MCP](/tools/bot/api-mcp), viene eseguito subito, e i rimborsi sono bloccati.
