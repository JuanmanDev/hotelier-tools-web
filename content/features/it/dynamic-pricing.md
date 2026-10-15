---
title: "Prezzi dinamici e stop vendita per Little Hotelier"
---

I prezzi dinamici confrontano le tue tariffe di Little Hotelier con quelle di hotel simili nelle vicinanze e consigliano un prezzo per ogni camera e ogni notte, con la motivazione. Nulla viene scritto su Little Hotelier finché non confermi, a meno che tu non attivi il pilota automatico.

## Come funziona

1. **Prezzi della concorrenza.** Imposta la tua città e i veri concorrenti in **Competitors & market**. **Competitor Prices** (`/competitor-prices`) mostra poi quanto addebitano ogni notte accanto alla tua tariffa.
2. **Un consiglio per notte.** In **Recommendations** (`/price-recommendations`), ogni prezzo parte dalla tua tariffa, viene avvicinato un po' alla mediana degli hotel comparabili e poi si muove con la domanda: occupazione, camere rimaste, last minute, weekend, eventi locali approvati e ospiti nella tua lista d'attesa. I tuoi limiti pongono un tetto alla variazione. **Why?** mostra il calcolo.
3. **Regole in parole semplici.** Scrivi una regola come una frase. L'IA la trasforma in una regola strutturata e la approvi prima che abbia effetto. Le regole per date possono fissare, congelare o limitare un prezzo.
4. **Eventi locali.** Una scansione IA trova fiere, concerti e festività vicino a te. Approvi o rifiuti ciascuno.
5. **Applica.** Seleziona le notti e premi **Apply to Little Hotelier**. La stessa finestra può impostare lo stop vendita di SiteMinder, inviato solo per le notti in cui la modifica del prezzo è riuscita.
6. **Controlla i risultati.** **History & outcomes** (`/pricing-log`) elenca ogni tariffa scritta, con le camere rimaste allora e adesso.

Il metodo, e una routine manuale che puoi seguire senza alcuno strumento, sono in [prezzi dinamici per piccoli hotel](/blog/dynamic-pricing-little-hotelier). Per le restrizioni, vedi [CTA, CTD, soggiorno minimo e stop vendita](/blog/little-hotelier-cta-ctd-stop-sell).

## Cosa ti serve

- Little Hotelier collegato in **Credentials**.
- Un prezzo minimo per tipologia di camera e i concorrenti con cui competi davvero.
- Una verifica di quali fonti di prezzi della concorrenza restituiscono dati per la tua città. È pensato per leggere Booking.com, Expedia, Google Hotels, Hostelworld e Agoda.

## Limiti e da sapere

- **Stato:** i prezzi della concorrenza sono in beta. Consigli, regole, eventi, pilota automatico e stop vendita sono in alpha.
- **Il pilota automatico è disattivato per impostazione predefinita.** Quando è attivo, viene eseguito al massimo ogni 3 ore, sposta ogni notte al massimo del 20% per impostazione predefinita, non scende mai sotto il tuo minimo e lavora da 1 a 90 giorni in avanti (14 per impostazione predefinita). Non cambia mai lo stop vendita.
- I calcoli notturni dei prezzi sono semplice aritmetica. L'IA si limita a leggere le frasi delle tue regole e a trovare gli eventi.
- La stima dei ricavi nel registro dei prezzi è un'indicazione, non una prova.
