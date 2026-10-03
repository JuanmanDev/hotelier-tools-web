---
title: "Alloggiati Web e registrazione ospiti per paese (2026): Italia, Spagna, Portogallo, Germania, Francia, Brasile, Thailandia, Indonesia"
seoTitle: "Alloggiati Web e registrazione ospiti per paese (2026)"
description: "Quali ospiti registrare, con quali dati, entro quando e dove: Italia, Spagna, Portogallo, Germania, Francia, Brasile, Thailandia, Indonesia."
date: 2026-10-03
category: compliance
tags: [guest registration, compliance, id, police, little hotelier]
keywords: [alloggiati web, comunicazione ospiti questura, alloggiati web polizia di stato, registrazione ospiti hotel documento, perché gli hotel chiedono il passaporto, schedina alloggiati]
demoPath: /
cover: /images/blog/demo/en/automated-checks-moment-on-arrival.webp
coverAlt: "Controlli When they arrive in Hotelier Tools: ID / passport (police register), assegnazione fisica della camera e validazione di indirizzo e provenienza attivati, con ciò che ogni controllo può e non può fare"
faq:
  - q: "Perché gli hotel chiedono il passaporto al check-in?"
    a: "Perché in molti paesi la legge lo richiede. Spagna, Italia e Brasile registrano ogni ospite, mentre Portogallo, Francia, Germania, Thailandia e Indonesia registrano gli ospiti stranieri, di solito annotando i dati del passaporto o del documento e inviandoli alla polizia o all'immigrazione entro poche ore o giorni."
  - q: "I cittadini UE contano come ospiti stranieri?"
    a: "Sì, dove la regola riguarda gli stranieri. Il SIBA portoghese e la fiche de police francese includono esplicitamente gli altri cittadini UE e il modulo di registrazione tedesco si applica ora a ogni ospite che non sia cittadino tedesco."
  - q: "Un hotel può tenere una copia del mio passaporto?"
    a: "Dipende dal paese e dalla normativa sulla protezione dei dati. La maggior parte delle regole di registrazione chiede alla struttura di verificare il documento e annotarne i dati, non di conservarne una copia. In Spagna l'autorità per la protezione dei dati dice che di norma la copia del DNI non serve. Chiedi alla struttura perché conserva una copia e per quanto tempo."
  - q: "Il mio gestionale può inviare le registrazioni in automatico?"
    a: "Spesso sì. Spagna, Italia, Portogallo e Brasile accettano dati dai software tramite web service. La reportistica di conformità di Guest Engagement di Little Hotelier copre Italia, Spagna, Portogallo, Germania, Svizzera, Austria, Croazia, Repubblica Ceca e Colombia, e app partner come Chekin coprono più paesi."
  - q: "Vanno registrati anche i bambini?"
    a: "Di solito sì, ma i dettagli cambiano. La Spagna registra i minori con i dati forniti dall'adulto e richiede il rapporto di parentela; la Francia permette ai minori di 15 anni di stare sul modulo di un adulto; la Germania conta solo i bambini che accompagnano; il Brasile collega i minori alla scheda di un genitore."
  - q: "Hotelier Tools invia i dati degli ospiti alla polizia?"
    a: "No. Hotelier Tools non invia registrazioni ad alcuna autorità. Segnala le prenotazioni con documento o indirizzo mancante, così puoi completarle in tempo. È indipendente e non è affiliato né approvato da SiteMinder o Little Hotelier."
---

Molti paesi obbligano le strutture ricettive a registrare l'identità degli ospiti e a trasmetterla alla polizia o all'immigrazione. Italia, Spagna e Brasile registrano **ogni** ospite; Portogallo, Francia, Germania (dal 2025), Thailandia e Indonesia registrano gli ospiti **stranieri**. Le scadenze vanno da 6 ore (soggiorni brevi in Italia) a 3 giorni lavorativi (Portogallo). Qui sotto trovi la regola di ciascun paese con i link ufficiali e poi come raccogliere i documenti in Little Hotelier.

::callout{type="warning" title="Non è una consulenza legale: verifica con l'autorità locale"}
È un riepilogo a ottobre 2026, verificato sulle fonti ufficiali linkate in ogni sezione. Le regole cambiano e regioni o comuni possono aggiungere le proprie (moduli per l'imposta di soggiorno, polizia regionale). Conferma con la polizia locale, l'ufficio immigrazione o un consulente prima di farci affidamento.
::

| Paese | Sistema | Chi viene registrato | Scadenza |
|---|---|---|---|
| Spagna | SES.Hospedajes | Tutti gli ospiti | 24 h dopo la prenotazione e dopo il check-in |
| Italia | Alloggiati Web | Tutti gli ospiti | 24 h dopo l'arrivo (6 h per soggiorni fino a 24 h) |
| Portogallo | SIBA | Ospiti stranieri, anche UE | 3 giorni lavorativi dopo l'arrivo e dopo la partenza |
| Germania | Meldeschein | Ospiti stranieri | Firmato all'arrivo |
| Francia | Fiche individuelle de police | Ospiti non francesi, anche UE | All'arrivo; mostrata su richiesta |
| Brasile | FNRH Digital | Tutti gli ospiti | Al check-in |
| Thailandia | TM30 | Ospiti stranieri | 24 h |
| Indonesia | APOA | Ospiti stranieri | 24 h |

## Spagna: SES.Hospedajes

- **Chi:** ogni ospite, in hotel, hostal, B&B, case rurali, campeggi e affitti turistici, secondo il [Real Decreto 933/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-17461). La Catalogna comunica ai Mossos d'Esquadra e i Paesi Baschi all'Ertzaintza.
- **Cosa:** nomi, sesso, tipo e numero del documento con il suo numero di supporto, cittadinanza, data di nascita, indirizzo, telefono ed email, il rapporto tra i viaggiatori quando uno è minorenne, più i dati della prenotazione e del pagamento.
- **Scadenza:** entro 24 ore dalla prenotazione o dalla cancellazione, ed entro 24 ore dal check-in. Conserva i registri per 3 anni.
- **Come:** il modulo web di [SES.Hospedajes](https://sede.interior.gob.es/portal/sede/informacion_hospedajes), il caricamento di un file XML o un web service dal tuo software.

Guida completa: [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Italia: Alloggiati Web

- **Chi:** ogni ospite, italiani compresi, negli alberghi e in tutte le altre strutture ricettive, compresi gli affitti brevi sotto i 30 giorni (art. 109 TULPS, [testo dalla Polizia di Stato](https://questure.poliziadistato.it/statics/43/art.-109-tulps.pdf?lang=it)).
- **Cosa:** per l'ospite capofamiglia o capogruppo, cognome, nome, sesso, data e luogo di nascita, cittadinanza e tipo, numero e luogo di rilascio del documento, più data di arrivo e durata del soggiorno. I familiari o i componenti del gruppo richiedono i dati anagrafici ma non quelli del documento ([manuale utente](https://questure.poliziadistato.it/statics/13/manualeutente_alloggiatiweb.pdf?lang=it)).
- **Scadenza:** entro 24 ore dall'arrivo, oppure entro **6 ore** per soggiorni fino a 24 ore.
- **Come:** solo tramite il [portale Alloggiati Web](https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/): inserimento manuale, caricamento di un file o web service. L'accesso si richiede alla Questura di competenza. Conserva le ricevute giornaliere.
- **Self check-in:** la circolare del Ministero dell'Interno del novembre 2024 impone di identificare gli ospiti di persona e vieta il check-in con keybox. Il TAR Lazio l'ha annullata a maggio 2025, ma il Consiglio di Stato ha ribaltato quella sentenza il 21 novembre 2025 ([sentenza 9101/2025](https://mdp.giustizia-amministrativa.it/visualizza/?nodeRef=&schema=cds&nrg=202505732&nomeFile=202509101_11.xml&subDir=Provvedimenti)), quindi la circolare si applica di nuovo. Il giudice ha accennato al fatto che l'identificazione in videochiamata potrebbe essere accettabile.

La comunicazione statistica all'ISTAT o alla tua regione (per esempio Ross1000) è un obbligo separato.

## Portogallo: SIBA (boletim de alojamento)

- **Chi:** ogni ospite straniero, "including nationals of other European Union member states" (compresi i cittadini di altri Stati membri dell'UE), in hotel, alloggio locale (*alojamento local*) e chiunque offra alloggio a pagamento (Lei 23/2007, articoli 15 e 16).
- **Cosa:** nome completo, nazionalità, data di nascita, tipo e numero del documento, paese di rilascio, paese di residenza e date di check-in e check-out. Luogo di nascita e residenza sono facoltativi ([domande tecniche SIBA](https://siba.ssi.gov.pt/en/ajuda/perguntas-tecnicas/)).
- **Scadenza:** entro **3 giorni lavorativi** dall'arrivo e di nuovo entro 3 giorni lavorativi dalla partenza.
- **Come:** sul [SIBA](https://siba.ssi.gov.pt/), ora gestito dall'unità di coordinamento del Sistema di Sicurezza Interna (UCFE) dopo lo scioglimento dello SEF nel 2023. Usa il modulo online, il caricamento di un file o i web service ([modalità di invio](https://siba.ssi.gov.pt/en/ajuda/modos-de-envio/)). Alcune pagine del SIBA citano ancora lo SEF. Conserva i boletins per 1 anno.
- **Sanzioni:** da 100 a 500 € per 1-10 ospiti non comunicati, fino a 400-2.000 € oltre i 50 ospiti (articolo 203, [Lei 23/2007](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis)).

## Germania: Meldeschein

- **Chi:** dal **1° gennaio 2025**, solo gli ospiti **stranieri**. La legge di sgravio burocratico IV (BEG IV) ha eliminato l'obbligo per i cittadini tedeschi ([Gazzetta ufficiale federale 2024 I n. 323](https://www.recht.bund.de/bgbl/1/2024/323/regelungstext.pdf?__blob=publicationFile&v=3)). Coniugi, partner e figli minorenni stranieri che accompagnano vengono solo conteggiati. Per i gruppi di più di 10 persone firma il capogruppo.
- **Cosa:** date di arrivo e di partenza prevista, cognome, nomi, data di nascita, cittadinanze, indirizzo, numero e cittadinanza dei compagni di viaggio stranieri e numero di serie del passaporto. Devi confrontare il modulo con il documento d'identità ([§ 30 BMG](https://www.gesetze-im-internet.de/bmg/__30.html)).
- **Scadenza:** l'ospite firma a mano il giorno dell'arrivo ([§ 29 BMG](https://www.gesetze-im-internet.de/bmg/__29.html)). Conserva i moduli per 1 anno dopo la partenza, distruggili entro 3 mesi da allora e mostrali alle autorità su richiesta.
- **Come:** su carta, oppure in digitale con il consenso dell'ospite: un pagamento con carta con autenticazione forte del cliente, la funzione di identità elettronica o una procedura pilota approvata.
- **Sanzioni:** fino a 1.000 €.

La legge dei Länder può aggiungere campi per l'imposta turistica o di soggiorno termale, quindi per gli ospiti tedeschi può comunque applicarsi un modulo locale.

## Francia: fiche individuelle de police

- **Chi:** ogni ospite che non sia francese, "including" i cittadini UE, in hotel, villaggi vacanze, residenze turistiche, alloggi turistici ammobiliati, *chambres d'hôtes* e campeggi ([Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33458)).
- **Cosa:** cognome e nomi, data e luogo di nascita, nazionalità, indirizzo abituale, telefono cellulare ed email e date di arrivo e di partenza prevista. I minori di 15 anni possono stare sul modulo di un adulto che li accompagna (CESEDA articolo R814-2, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042803266/)).
- **Scadenza:** compilata all'arrivo. Conserva i moduli per **6 mesi**.
- **Come:** non c'è una comunicazione online di routine. Consegni i moduli alla polizia o alla gendarmeria quando li chiedono, su carta o in formato elettronico. Il modello del modulo è fissato dal [decreto del 1° ottobre 2015](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031285813).

## Brasile: FNRH Digital

- **Chi:** ogni ospite, brasiliano o straniero, in ogni tipo di struttura. Ogni ospite ha la propria scheda e i minori sono collegati a quella di un genitore ([Portaria MTur 41/2025](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2025/portaria-mtur-no-41-de-14-de-novembro-de-2025)). La struttura deve avere una registrazione Cadastur attiva.
- **Cosa:** nome, data di nascita, nazionalità, sesso, documento d'identità, CPF o passaporto, telefono, email, indirizzo di residenza, motivo del viaggio, provenienza e prossima destinazione, mezzo di trasporto e dati della prenotazione e del soggiorno.
- **Quando:** obbligatorio dal **20 aprile 2026**, dopo una proroga con la [Portaria MTur 4/2026](https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/atos-normativos-2/2026/portaria-mtur-no-4-de-18-de-fevereiro-de-2026). I dati vengono confermati al check-in con l'ospite presente e viene registrato anche il check-out.
- **Come:** il [modulo web FNRH](https://fnrh.turismo.serpro.gov.br/FNRH_SRH/Login) gratuito oppure il tuo PMS tramite l'API del Ministero. Vedi le [FAQ ufficiali](https://www.gov.br/turismo/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/ficha-nacional-de-registro-de-hospedes/faq).

## Thailandia: TM30

- **Chi:** i gestori degli hotel, e ogni proprietario o house-master, devono comunicare gli stranieri che soggiornano da loro (Immigration Act B.E. 2522, sezione 38).
- **Cosa:** il modulo TM.30 con i dati del passaporto dell'ospite.
- **Scadenza:** entro **24 ore** dall'arrivo dello straniero.
- **Come:** presso l'ufficio immigrazione locale (o la polizia dove non c'è), per raccomandata o online dopo la registrazione sul sito dell'Immigration Bureau. Fonte: il [manuale pubblico](http://web.archive.org/web/20240612020418/https://www.immigration.go.th/wp-content/uploads/2023/01/16-Public-Handbook-Notification-of-Residence-for-a-house-master-owner-or-possessor-of-residence-or-hotel-manager.pdf) dell'Ufficio (copia archiviata).
- **Sanzioni:** fino a 2.000 THB e da 2.000 a 10.000 THB per i gestori di hotel (sezione 77).

A ottobre 2026 il sito dell'Immigration Bureau non si caricava dall'Europa, quindi conferma il sistema online attuale con il tuo ufficio immigrazione locale.

## Indonesia: APOA

- **Chi:** hotel, appartamenti, guest house, ville, *losmen*, pensioni (*kos*), case in affitto e altre strutture ricettive commerciali, più i privati che ospitano stranieri ([ufficio regionale di Bali](http://web.archive.org/web/20240302132213/https://bali.kemenkumham.go.id/layanan-publik/keimigrasian/apoa), copia archiviata).
- **Cosa:** i dati del passaporto e del soggiorno dell'ospite straniero e poi il check-out ([ufficio immigrazione di Yogyakarta, 2025](https://jogja.imigrasi.go.id/pengelola-penginapan-wajib-laporkan-keberadaan-tamu-asing-lewat-apoa/)).
- **Scadenza:** entro **1 x 24 ore** dall'inizio del soggiorno dello straniero, secondo le istruzioni della Direzione generale dell'immigrazione citate dall'ufficio di Bali.
- **Come:** l'app mobile APOA o il [sito APOA](https://apoa.imigrasi.go.id).
- **Sanzioni:** fino a tre mesi di detenzione o una multa fino a 25 milioni di Rp secondo la legge sull'immigrazione (Legge 6/2011, modificata nel 2024).

## Come raccogliere i documenti degli ospiti in Little Hotelier

La prenotazione di Little Hotelier ha una scheda **Guests** con un modulo per ogni ospite. Oltre a nome, email e telefono ci sono il genere, un secondo cognome e, sotto la freccia di espansione, il tipo di documento, il numero del documento, la nazionalità, la data di rilascio, la data di scadenza, la data di nascita e un indirizzo completo con paese, città, provincia e CAP ([modificare una prenotazione](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)). Aggiungi i compagni di viaggio come ospiti aggiuntivi.

::screenshot{src="/images/scripts/easy-save-province-country/from.png" alt="Scheda Guests di una prenotazione di Little Hotelier in spagnolo con nome, cognomi, tipo di documento, numero del documento, nazionalità, date di rilascio e di scadenza, data di nascita e campi dell'indirizzo" caption="La scheda Guests ha già i campi che la maggior parte delle regole di registrazione richiede (interfaccia in spagnolo)."}
::

Tre modi per compilarli senza riscrivere tutto:

1. **Il check-in online di Little Hotelier.** Con Guest Engagement, gli ospiti compilano un modulo di check-in prima dell'arrivo e le risposte finiscono nella prenotazione. La sua reportistica di conformità automatica invia i dati alle autorità in Italia, Spagna, Portogallo, Germania, Svizzera, Austria, Croazia, Repubblica Ceca e Colombia ([centro assistenza di Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/10066500-automated-compliance-reporting), maggio 2026).
2. **Un partner di check-in.** [Chekin](https://helpcentre.littlehotelier.com/en/articles/8674162-connecting-to-chekin) si collega tramite l'App Store e comunica alla polizia in molti paesi, tra cui Spagna, Italia, Portogallo, Francia, Germania e Thailandia. Se lo usi, lo userscript gratuito [Chekin Connection](/tools/ui/show-chekin) mostra la registrazione di ogni ospite dentro la prenotazione di Little Hotelier.
3. **Alla reception.** Per gli ospiti spagnoli, lo userscript gratuito [Easy Save Province and Country](/tools/ui/easy-save-province-country) trasforma il campo della provincia in un elenco di province spagnole e imposta il paese su Spagna quando ne scegli una.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Scheda Guests di Little Hotelier con l'elenco delle province spagnole di Easy Save Province and Country aperto sotto il campo Province/Region" caption="Scegli la provincia da un elenco e il paese si compila da solo."}
::

### Individua i documenti mancanti prima della scadenza

Dati incompleti o in ritardo sono un illecito in sé in vari paesi; in Spagna, per esempio, è una violazione lieve sanzionata da 100 €. I [controlli automatici](/tools/bot/automated-checks) di Hotelier Tools guardano ogni prenotazione dopo che è stata effettuata, all'arrivo, durante il soggiorno e al check-out, e segnalano un documento o un indirizzo mancante in un'unica pagina Issues e in un'email di report. Non inviano nulla alle autorità. Vedi la [checklist quotidiana della reception](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

## Riepilogo

- Italia, Spagna e Brasile registrano ogni ospite; Portogallo, Francia, Germania, Thailandia e Indonesia registrano gli ospiti stranieri, compresi i cittadini UE dove la regola dice "stranieri".
- La scadenza più breve è quella italiana di 6 ore per i soggiorni di una notte; Spagna, Thailandia e Indonesia concedono 24 ore; il Portogallo 3 giorni lavorativi.
- Little Hotelier ha già i campi per i documenti; il check-in online o un'app partner possono compilarli e inoltrarli.
- Usa i [controlli automatici](/tools/bot/automated-checks) e gli [userscript](/tools/ui) gratuiti per mantenere i dati completi. Hotelier Tools è gratuito per ogni struttura fino al 10 gennaio 2027.
- La Spagna nel dettaglio: [SES Hospedajes con Little Hotelier](/blog/ses-hospedajes-little-hotelier) e [l'indagine INE sull'occupazione](/blog/ine-hotel-occupancy-survey).
