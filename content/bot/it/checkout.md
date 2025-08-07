---
Il checkout automatico consente di contrassegnare le prenotazioni come uscite senza doverlo fare manualmente. 
Questo è particolarmente utile per hotel o ostelli che non richiedono intervento manuale nel processo di checkout.

Attualmente il sistema funziona quotidianamente alle 15:00.
Le seguenti condizioni vengono controllate per contrassegnare una prenotazione come uscita:
- La prenotazione deve essere nello stato "Checked In".
- La data di checkout deve essere il giorno attuale.
- La data di check-in deve essere precedente al giorno attuale.
- La prenotazione non deve avere pagamenti in sospeso.
- La prenotazione deve avere un numero di identificazione fiscale per generare la fattura.
- La prenotazione non deve avere una fattura emessa.

Se una prenotazione soddisfa tutte queste condizioni, verrà automaticamente contrassegnata come uscita e verrà generata la fattura corrispondente.

Nel caso in cui una prenotazione non soddisfi alcune delle condizioni, verrà inviata un'email all'amministratore dell'hotel per notificare la situazione.

Esempio di email:
  
<br>

## Rapporto Check-in (2025-08-05)

Totale prenotazioni con check-in oggi: **7**

Prenotazioni con problemi: **1**

Prenotazioni con checkout automatico: **0**

| Camera | Nome Ospite | In sospeso | Totale | Stato | Problemi | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Problemi | ID/Passaporto mancante | [Visualizza Prenotazione](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Corretto | Tutto corretto | [Visualizza Prenotazione](#) |

### Riassunto:

*   **Verde:** Prenotazioni processate automaticamente (checkout completato)
*   **Rosso:** Prenotazioni che richiedono attenzione manuale

**⚠️ 1 prenotazioni richiedono attenzione manuale**


### Note:
- Le prenotazioni con problemi devono essere controllate manualmente.
