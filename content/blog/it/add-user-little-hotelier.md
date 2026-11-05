---
title: "Come aggiungere un utente a Little Hotelier (e dare a uno strumento il suo login invece della tua password)"
seoTitle: "Aggiungere un utente a Little Hotelier, passo per passo"
description: "Aggiungi un collaboratore o un utente per un'integrazione in Little Hotelier, imposta permessi e MFA e collega gli strumenti senza dare la tua password."
date: 2026-11-05
category: tips
tags: [little hotelier, utenti, permessi, mfa, passkey, sicurezza]
keywords: [aggiungere utente little hotelier, little hotelier nuovo utente, permessi utenti little hotelier, gestire utenti little hotelier, little hotelier autenticazione a due fattori, little hotelier email di attivazione scaduta, utente integrazione little hotelier, dare accesso al personale little hotelier, little hotelier passkey]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "Pagina dell'account Advanced: Use an alias of your own email con l'indirizzo suggerito demo+hoteliertools@hotelier.tools e un pulsante Copy, poi The invite email: copy the link, do not open it, con l'avviso di non cliccare il pulsante nell'email e tre passaggi che terminano con il campo Activation link"
faq:
  - q: "Come aggiungo un nuovo utente in Little Hotelier?"
    a: "Da un dispositivo attendibile, clicca sul nome della struttura in alto a destra e scegli Manage users, poi Add user. Inserisci email, nome e lingua, scegli le app e il livello utente e clicca su Save. La persona riceve un'email di attivazione valida 24 ore."
  - q: "Quali permessi può avere un utente di Little Hotelier?"
    a: "Un utente Admin ha tutti i permessi. Un utente General ha solo ciò che spunti per ogni app: per Front Desk, Calendar, Reservations, Inventory, Guests, Reports, Housekeeping e Setup; per Channel Manager, Config, Inventory, Reservations e Payments."
  - q: "Serve l'MFA per aggiungere utenti in Little Hotelier?"
    a: "Sì. Per gestire gli utenti serve un dispositivo attendibile, e devi configurare l'autenticazione a più fattori prima di poterne aggiungere uno. L'MFA funziona con l'app Little Hotelier, un'app di autenticazione o un'estensione del browser; SMS ed email non sono supportati."
  - q: "Devo dare a un'integrazione la mia password di Little Hotelier?"
    a: "Meglio di no. Un utente dedicato allo strumento tiene privato il tuo login, mostra le sue azioni separate nel registro e si può disattivare senza toccare nessun altro. Hotelier Tools lo chiama account Advanced."
  - q: "Cosa succede se il link di attivazione è già stato aperto?"
    a: "Il token di attivazione funziona una sola volta. Se qualcuno ha cliccato il pulsante nell'email prima di incollare il link in Hotelier Tools, fai reinviare l'invito da Little Hotelier e copia il nuovo link senza aprirlo."
  - q: "Hotelier Tools fa parte di Little Hotelier?"
    a: "No. Hotelier Tools è indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con un utente Little Hotelier che il tuo hotel crea e controlla."
---

Per aggiungere un utente a Little Hotelier, accedi da un dispositivo attendibile, clicca sul nome della struttura in alto a destra, scegli **Manage users** e premi **Add user**. Inserisci email, nome e lingua della persona, scegli le app che le servono, seleziona **Admin** o **General** (e spunta i permessi), poi **Save**. Riceverà un'email di attivazione valida 24 ore. Per un software fai lo stesso con un utente separato: non condividere mai la password del titolare con uno strumento.

I passaggi di Little Hotelier qui sotto sono stati verificati sul suo centro assistenza a novembre 2026.

## Come aggiungere un utente in Little Hotelier

Prima di iniziare, due requisiti ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)):

- Ti serve il permesso **Manage users**.
- Devi essere su un **dispositivo attendibile** (trusted device), da un browser desktop o mobile. La gestione utenti non è disponibile nell'app mobile, e puoi aggiungere un dispositivo attendibile solo dopo aver configurato l'MFA.

Poi:

1. Clicca sul nome della struttura in alto a destra e seleziona **Manage users**.
2. Clicca su **Add user**.
3. Inserisci email, nome e lingua preferita dell'utente.
4. Seleziona le app che gli servono (Front Desk, Channel Manager, Direct Booking, Payments).
5. Scegli un livello utente per ognuna e spunta i permessi.
6. Clicca su **Save**.

Il nuovo utente riceve un'email di attivazione, valida 24 ore, per impostare la password. Se quell'indirizzo email ha già un utente Little Hotelier, l'email di attivazione non viene inviata: accede con la password che ha già oppure usa **Reset password**.

La piattaforma più recente di Little Hotelier descrive la stessa procedura sotto **User management** ([articolo help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Usa l'articolo che corrisponde alle schermate che vedi.

### Quali permessi dare

- **Admin**: tutti i permessi.
- **General**: solo ciò che spunti. Per **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping e Setup. Per **Channel Manager**: Config, Inventory, Reservations e Payments.

A un receptionist di solito serve Front Desk con Calendar, Reservations e Guests. Dai **Manage users** al minor numero di persone possibile.

::screenshot{src="/images/config/permissions.webp" alt="Pagina di modifica utente di Little Hotelier in spagnolo per un utente chiamato Bot Facturas 2: permesso di gestione degli utenti non spuntato, Channel Manager e Insights spenti, Direct Booking attivo come General e Front Desk attivo come General con solo Calendar e Reservations spuntati" caption="Un utente General con solo Calendar e Reservations di Front Desk: la configurazione minima di una connessione semplice." width="1639" height="1742"}
::

### Modificare, disattivare o rimuovere un utente

- **Modifica i permessi** quando vuoi dall'elenco utenti.
- **Disable** (disattiva) è il modo consigliato per togliere l'accesso: puoi riattivarlo più tardi. **Delete** (elimina) è definitivo.
- **L'email non si può modificare.** Crea un nuovo utente con l'indirizzo giusto, poi elimina quello vecchio.
- Un utente viene bloccato dopo 6 o più tentativi di accesso falliti e si sblocca con **Forgot password**.

## Autenticazione a due fattori (MFA) e passkey

Little Hotelier rende obbligatoria l'MFA entro 30 giorni dal primo accesso di un utente ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Ogni utente sceglie un metodo:

- l'**app mobile Little Hotelier** (consigliata): confermi un numero corrispondente con il volto o l'impronta;
- un'**app di autenticazione** come Google Authenticator, Microsoft Authenticator o Authy (un codice di 6 cifre);
- un'**estensione di autenticazione per il browser** in Chrome, Edge o Firefox.

Codici via telefono, SMS ed email non sono supportati. Un utente con **Manage users** può reimpostare l'MFA di un altro utente ([come fare](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), che poi imposta un nuovo metodo al login successivo.

La pagina di accesso, gestita da SiteMinder, può anche offrire **Continue with a passkey** a un utente che ne ha creata una. A novembre 2026 il centro assistenza di Little Hotelier non documenta le passkey, quindi considerale facoltative e tieni configurata l'MFA.

C'è una conseguenza importante per gli strumenti: **un utente con MFA chiede un codice all'accesso.** Uno strumento che conserva solo una password si ferma a quella richiesta, perché non c'è nessuno a rispondere.

## Perché uno strumento dovrebbe avere il suo utente

Molte integrazioni chiedono "la tua email e la tua password di Little Hotelier". Condividere il login del titolare ha costi reali:

- **La password scade** circa ogni tre mesi, e lo strumento si ferma finché qualcuno non inserisce quella nuova.
- **Il registro non vi distingue.** Le modifiche fatte dallo strumento sembrano tue.
- **Le sessioni si scontrano.** Lo stesso utente collegato due volte può far scadere una delle due sessioni.
- **Quando quella persona se ne va**, la connessione se ne va con lei.
- **L'MFA sul tuo login** è una richiesta a cui lo strumento non può rispondere.

Un utente dedicato allo strumento risolve tutto: il suo indirizzo, i suoi permessi, il suo secondo fattore, e puoi disattivarlo senza toccare nessun altro.

## Il modo più veloce: l'account Advanced di Hotelier Tools

Hotelier Tools offre due connessioni in **Credentials** (`/credentials`):

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Login | La tua email e password di Little Hotelier | Un nuovo utente Little Hotelier, solo per Hotelier Tools |
| Password | Scade circa ogni 3 mesi; incolli tu quella nuova | Robusta, casuale, impostata da Hotelier Tools; nessuno deve ricordarla |
| Due fattori | Non supportato: una richiesta di codice lo blocca | Conserva il suo segreto di autenticazione e può conservare una passkey |
| Permessi | Front Desk (Calendar, Reservations) e Direct Booking | Tutti i permessi: funziona ogni funzione |

La pagina Simple mette di proposito i limiti in primo piano: prezzi e disponibilità non si possono scrivere, e una password scaduta ferma in silenzio le automazioni giorni dopo.

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="Pagina dell'account Simple con Before you use this: the limits, che elenca una password che scade circa ogni 3 mesi, nessun supporto per i due fattori, permessi limitati con cosa funziona e cosa è limitato o spento, e un login personale condiviso con un robot, più un pulsante Use the Advanced way" caption="L'account Simple è rapido, ma i suoi limiti fermano le automazioni settimane dopo. Leggili prima di sceglierlo." path="/credentials/hotelier-simple"}
::

### Configura l'account Advanced (cosa fai oggi)

1. Apri **Credentials > Advanced** (`/credentials/hotelier-advanced`). In **Use an alias of your own email** copia il **Suggested address for the new user**, per esempio `tu+hoteliertools@iltuohotel.it`. Little Hotelier richiede un indirizzo nuovo; con la maggior parte dei provider (Gmail, Outlook / Microsoft 365, iCloud, Fastmail) un'etichetta con il più arriva comunque nella tua casella.
2. In Little Hotelier aggiungi un utente con quell'indirizzo e **tutti i permessi attivi**, seguendo i passaggi qui sopra.
3. Apri l'email d'invito e **non cliccare il pulsante**. Fai clic destro e scegli **Copia indirizzo link** (da telefono: tieni premuto, **Copia link**). Il token di attivazione funziona una sola volta: aprirlo lo consuma sulla pagina password di Little Hotelier.
4. Torna alla pagina Advanced, scegli **Use an activation link**, incollalo in **Activation link** e salva.
5. Hotelier Tools attiva l'utente: imposta una password robusta e casuale, la conserva cifrata e accede una volta per verificare.

Hai già creato l'utente e ne conosci la password? Scegli invece **Enter the credentials** e aggiungi il suo segreto di autenticazione (OTP) o una passkey.

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="Pagina dell'account Advanced: Use an alias of your own email con l'indirizzo suggerito demo+hoteliertools@hotelier.tools e un pulsante Copy, poi The invite email: copy the link, do not open it, con l'avviso di non cliccare il pulsante nell'email e tre passaggi che terminano con il campo Activation link" caption="Crea l'utente con la tua email più un'etichetta, poi incolla il link d'invito invece di aprirlo." path="/credentials/hotelier-advanced"}
::

Puoi dare a questo utente meno permessi, ma Hotelier Tools dice chiaramente che alcune funzioni non andranno e che quella configurazione non è supportata. Scrivere i prezzi, per esempio, richiede il ruolo Rates & Inventory.

### MFA e passkey sull'utente Advanced

- **Quando Little Hotelier inizia a richiedere l'MFA**, Hotelier Tools registra da solo un'app di autenticazione sull'utente Advanced, conserva il segreto cifrato e da quel momento risponde lui al codice. Non lo fa mai sul tuo login Simple, perché un segreto che solo l'app conosce ti chiuderebbe fuori dal tuo account. Se serve farlo a mano, il pannello dell'account ha **Set up two-step verification**.
- **Una passkey conservata sul server (beta).** **Passkeys and two-step verification** (`/credentials/passkeys`) può aggiungere una passkey all'utente Advanced (**Add passkey**, poi **Test passkey**). Gli accessi programmati la provano per prima: funziona anche quando la password è scaduta e salta il passaggio del codice. Il titolare può usare **Download passkey** per tenerne una copia. Aggiungerla o provarla corrisponde a un accesso a Little Hotelier.

### Per rimuoverlo

Disattiva o elimina l'utente in Little Hotelier. L'accesso di Hotelier Tools finisce con lui, e il tuo login resta intatto.

## In arrivo: Hotelier Tools come utente, su invito

La pagina Advanced ha anche una scheda **Hotelier Tools as a user in Little Hotelier**. L'idea: Hotelier Tools dà alla tua struttura un indirizzo di login privato sul suo dominio (`lh-…@in.hotelier.tools`). Inviti quell'indirizzo in Little Hotelier con i permessi che scegli, e Hotelier Tools accetta l'invito, imposta password e verifica in due passaggi e mantiene la sessione. Nulla viene condiviso con altri hotel, e il dominio non diventa mai il tuo login principale né la tua email di recupero ([come funzionano questi indirizzi](/blog/hotel-email-address)).

Ecco esattamente a che punto siamo, al 5 novembre 2026:

- **Pronto:** l'indirizzo (**Get the login address**, dopo aver inserito il numero di struttura di Little Hotelier), gli stati del login (**Waiting for the invitation**, **Active**, **Paused**, **Retired**), **Retire this login** e le regole di sicurezza. Gli avvisi di sicurezza vengono inoltrati al titolare e mai cliccati.
- **Non ancora pronto:** leggere e accettare l'invito di Little Hotelier. Nessun invito reale è stato ancora catturato, quindi **ogni messaggio all'indirizzo di login viene trattenuto per una persona**, e nulla al suo interno viene aperto. È la scheda stessa a dirlo.
- **Cosa fa oggi una persona:** usa i passaggi con il link di attivazione descritti sopra.

## I tuoi colleghi: gli account del team di Hotelier Tools

I membri del team non hanno bisogno dell'utente per l'integrazione. In **Settings > Team & roles** (`/settings/team`) premi **Invite someone**, inserisci la loro email e scegli un ruolo: **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only** o un ruolo personalizzato. Accettano dal link nell'email (valido 7 giorni) e accedono con il loro login di Hotelier Tools.

Questi sono login di Hotelier Tools, non utenti di Little Hotelier. Hotelier Tools lavora in Little Hotelier tramite l'unica connessione della struttura, e nessuno del team ne vede la password; solo il titolare può. Le modifiche di un collega compaiono in Little Hotelier come fatte dall'utente collegato, mentre Hotelier Tools registra chi le ha fatte davvero. Chi lavora direttamente nell'extranet di Little Hotelier ha comunque bisogno di un suo utente Little Hotelier.

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="Impostazioni del team con i pulsanti Roles e Invite someone, un riquadro che spiega che questi login sono solo per Hotelier Tools e non per Little Hotelier, 1 posto usato, e la tabella del team con Demo Manager come Owner, Active" caption="Ogni collega ha il suo login e il suo ruolo in Hotelier Tools; la password di Little Hotelier resta al titolare." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

La dashboard è gratuita per ogni struttura fino all'inizio della fatturazione, il 10 gennaio 2027.

::callout{type="info" title="Strumento indipendente"}
Hotelier Tools non è affiliato né approvato da SiteMinder o Little Hotelier. Si collega con un utente Little Hotelier che il tuo hotel crea, controlla e può disattivare in qualsiasi momento.
::

Guide correlate: [l'API di Little Hotelier](/blog/little-hotelier-api), [collegare Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier), [un indirizzo email dell'hotel per login e fatture](/blog/hotel-email-address).

## Riepilogo

- In Little Hotelier: nome della struttura > **Manage users** > **Add user**, da un dispositivo attendibile; l'email di attivazione vale 24 ore.
- **Admin** ha tutto; **General** ha solo i permessi che spunti per ogni app.
- L'MFA è obbligatoria entro 30 giorni; i codici via SMS ed email non sono supportati.
- Dai agli strumenti un utente loro, non la tua password. In Hotelier Tools è l'account **Advanced**: incolli il link d'invito e lui imposta da solo password e verifica in due passaggi.
- L'invito a un indirizzo privato `lh-…` è in arrivo; oggi quei messaggi vengono trattenuti per una persona.
- I colleghi ricevono login del team di Hotelier Tools con dei ruoli, non la tua password di Little Hotelier.
