---
title: "Gast fragt nach Terminen, die Sie noch nicht verkaufen können? Führen Sie eine Warteschlange für Verfügbarkeitsanfragen"
seoTitle: "Verfügbarkeitsanfragen im Hotel: nie wieder eine verlieren"
description: "Gäste fragen nach vollen oder noch nicht bepreisten Terminen, und die E-Mail geht unter. Führen Sie eine Liste oder lassen Sie eine Warteschlange prüfen."
date: 2026-11-05
updated: 2026-11-05
category: operations
tags: [verfügbarkeit, warteliste, anfragen, little hotelier, gruppenanfragen, direktbuchungen]
keywords: [hotel verfügbarkeitsanfrage, hotel anfrage termine noch nicht buchbar, hotel anfragen verwalten, gast benachrichtigen wenn zimmer frei, hotel preise noch nicht eingepflegt, gruppenanfrage hotel ausgebucht, warteliste hotel zukünftige termine, anfrageliste hotel vorlage, verfügbarkeit little hotelier prüfen]
feature: waitlist
demoPath: /availability-watch
cover: /images/blog/demo/en/availability-queue-requests.webp
coverAlt: "Seite Availability queue in Hotelier Tools: die Schaltfläche Add to the queue, die Karte Public waiting-list page mit dem Status offen und ihrem Link sowie In the queue mit drei aktiven Anfragen: Tom Walker (E-Mail und WhatsApp, 1 Zimmer beliebigen Typs, 27. bis 29. Nov.), Lena Fischer (1 Doble Superior, 18. bis 21. Dez.) und Viajes Ejemplo (Agentur) mit 3 Doble Estándar plus 1 Familiar 4 pax für den 26. bis 29. März 2027"
featured: true
faq:
  - q: "Was tun, wenn ein Gast nach Terminen fragt, für die ich noch keine Preise habe?"
    a: "Notieren Sie die Anfrage mit den genauen Nächten, Zimmern und Kontaktdaten, sagen Sie dem Gast, dass Sie sich melden, sobald die Termine offen sind, und sehen Sie jedes Mal in die Liste, wenn Sie neue Preise einpflegen. Ein Tool wie die Availability Queue von Hotelier Tools übernimmt das Prüfen und schreibt dem Gast, sobald die Zimmer zum ersten Mal buchbar sind."
  - q: "Hält eine Verfügbarkeitsanfrage ein Zimmer für den Gast frei?"
    a: "Nein. Es wird nichts reserviert oder blockiert. Werden die Zimmer frei, bekommt der Gast eine Nachricht mit Buchungslink, und das Zimmer bekommt, wer zuerst bucht. Sagen Sie das in jeder Antwort deutlich."
  - q: "Woher weiß die Warteschlange, dass ein Aufenthalt wirklich frei ist?"
    a: "Sie liest das Inventar von Little Hotelier für jede Nacht des Aufenthalts und nimmt den niedrigsten Wert. Eine Nacht mit Stop-Sell, mit Anreisesperre am Anreisetag oder ohne Eintrag im Inventar zählt als null. „Keine Daten“ bedeutet also nie „frei“."
  - q: "Was, wenn nur ein Teil der Zimmer frei wird, die eine Agentur angefragt hat?"
    a: "Das ist ein Teiltreffer („partial“). Standardmäßig erfährt nur Ihr Betrieb davon, einmal, damit Sie die Agentur anrufen und anbieten können, was frei ist. Die Anfrage bleibt in der Warteschlange, bis alle Zimmer frei sind."
  - q: "Bekommt ein Gast dieselbe Nachricht zweimal?"
    a: "Nein. Eine Anfrage meldet „verfügbar“ einmal und wird dann geschlossen. Hotelier Tools nimmt dieselbe Person außerdem nie zweimal für dieselben Termine auf, egal ob sie über das Dashboard, einen Assistenten, die API oder die öffentliche Seite eingetragen wurde."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Hotelier Tools ist ein unabhängiges Tool, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es liest die Verfügbarkeit mit dem eigenen Little-Hotelier-Login Ihres Hotels und legt aus der Warteschlange heraus nie eine Buchung an oder ändert eine."
---

Fragt ein Gast nach Terminen, die Sie heute nicht verkaufen können (voll, geschlossen oder noch ohne Preise), notieren Sie die Anfrage mit den genauen Nächten, Zimmern und Kontaktdaten und sehen Sie jedes Mal in diese Liste, wenn sich etwas ändert. Schneller geht es mit einer Warteschlange, die Little Hotelier für Sie prüft: Die **Availability Queue** (Verfügbarkeits-Warteschlange) von Hotelier Tools prüft jede Anfrage nach Zeitplan und schickt dem Gast eine einzige Nachricht mit Buchungslink, sobald jede gewünschte Nacht buchbar ist.

## Warum gehen Verfügbarkeitsanfragen verloren?

Weil die Anfrage an einem Ort liegt und die Antwort Wochen später woanders auftaucht. Die typischen Fälle:

- **Die E-Mail oder WhatsApp-Nachricht ist untergegangen.** „Haben Sie ein Doppelzimmer für die erste Augustwoche?“ kommt im März. Wenn Zimmer frei werden, liegt die Nachricht 400 E-Mails weiter unten, und niemand weiß mehr, wer gefragt hat.
- **Für die Termine gibt es noch keine Preise.** Sie haben die Preise für den nächsten Sommer noch nicht eingepflegt, die Buchungsmaschine zeigt nichts an, und der Gast schreibt Ihnen. Sie antworten „Wir melden uns“, und dann pflegen Sie die Preise an einem hektischen Nachmittag ein.
- **Die Termine sind ausgebucht.** Am Dienstag um 10:00 Uhr wird durch eine Stornierung ein Zimmer frei. Der Gast, der im Januar gefragt hat, erfährt nichts davon, und eine OTA verkauft es neu.
- **Eine Agentur will mehrere Zimmer.** Drei Doppelzimmer und ein Familienzimmer fürs Osterwochenende. Sie haben zwei Doppelzimmer. Ist das ein Nein oder ein Anruf?
- **Ein Teil der Anfrage wird möglich.** Zwei der drei Nächte werden frei, oder eines der zwei Zimmer. Niemand prüft jede Nacht jeder Anfrage von Hand.

Jeder dieser Fälle ist eine Direktbuchung, die schon in Ihrem Posteingang lag.

## Wie behalten Sie Verfügbarkeitsanfragen von Hand im Blick?

Eine einfache Liste funktioniert, wenn jemand sie pflegt. Eine Zeile pro Anfrage:

| Was Sie notieren | Warum |
|---|---|
| Datum der Anfrage und Weg (E-Mail, WhatsApp, Telefon) | Damit Sie die ursprüngliche Nachricht wiederfinden |
| Name, E-Mail und Telefon mit Ländervorwahl | Damit Sie auf dem Kanal antworten, den der Gast genutzt hat |
| Erste Nacht und Abreisetag | Ein Aufenthalt braucht jede Nacht, nicht nur die erste |
| Zimmer und Zimmertypen, bei Gruppen pro Typ | „3 Doppelzimmer + 1 Familienzimmer“ ist nicht dasselbe wie „4 Zimmer“ |
| Warum Sie nicht verkaufen konnten | Voll, geschlossen oder noch keine Preise: Daraus ergibt sich, wann Sie wieder nachsehen |
| Status und Datum | Wartet, angeboten, gebucht, aufgegeben |

**Wann Sie nachsehen:**

- **Jedes Mal, wenn Sie Preise einpflegen oder Termine öffnen.** In Little Hotelier legen Sie Preise fest und schließen oder öffnen Termine unter **Front Desk > Inventory**, einzeln oder mit **Bulk Update** ([Hilfecenter von Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), Stand November 2026). Filtern Sie Ihre Liste nach den Terminen, die Sie gerade geöffnet haben.
- **Jedes Mal, wenn eine Stornierung** für Termine aus der Liste eintrifft.
- **Einmal pro Woche**, um Anfragen zu schließen, deren Termine vorbei sind.

**Wie Sie antworten:** Schicken Sie dem Gast einen direkten Buchungslink für seine genauen Termine, sagen Sie klar, dass nichts zurückgehalten wird, und setzen Sie eine Frist, wenn Sie das Zimmer mehreren Personen anbieten. Arbeiten Sie mit Gmail, hält ein Label wie „Verfügbarkeitsanfragen“ die ursprünglichen E-Mails zusammen ([Gmail-Hilfe](https://support.google.com/mail/answer/118708)).

Die Schwachstelle bleibt der Mensch: Jemand muss jede Nacht jeder Zeile mit dem Inventar abgleichen und daran denken, es zu tun.

## Der schnellere Weg: die Availability Queue von Hotelier Tools

Die **Availability Queue** (`/availability-watch`, Beta) führt die Liste und übernimmt das Prüfen. Sie tragen einen Aufenthalt einmal ein. Eine geplante Aufgabe liest Little Hotelier für die ganze Warteschlange, und sind die Zimmer in jeder Nacht buchbar, erfahren der Gast und/oder Sie es per E-Mail oder WhatsApp. Nichts wird reserviert oder zurückgehalten, und darauf weist die Nachricht auch hin.

1. Öffnen Sie **Availability Queue** und füllen Sie **Add a stay to watch** aus: die Nächte, **Rooms needed** (benötigte Zimmer) und **Room types** (Zimmertypen). Für eine Agentur setzen Sie das Häkchen bei **Different numbers per room type**.
2. Wählen Sie unter **Tell the guest** und **Tell the property** die Kanäle und wann wer benachrichtigt wird.
3. Klicken Sie auf **Add to the queue**.
4. Sehen Sie auf die Karte **Checks on the queue**. Konten mit Little-Hotelier-Login haben diese Aufgabe normalerweise schon, jede Nacht um 01:00 Uhr. Steht dort **Not configured yet**, klicken Sie auf **Check every night at 01:00** oder wählen mit **Choose** einen anderen Zeitplan (höchstens alle 20 Minuten).

Die Schritt-für-Schritt-Anleitung für ausgebuchte Termine und Stornierungen steht im Begleitartikel [Warteliste für ausgebuchte Termine](/blog/hotel-waitlist-sold-out-dates). Dieser Artikel erklärt, wie die Warteschlange entscheidet und auf welchen neuen Wegen Anfragen hineinkommen.

::screenshot{src="/images/blog/demo/en/availability-queue-requests.webp" alt="Seite Availability queue: die Schaltfläche Add to the queue, die Karte Public waiting-list page mit dem Status offen und ihrer Adresse sowie In the queue mit drei aktiven Einträgen: Tom Walker per E-Mail und WhatsApp für 1 Zimmer beliebigen Typs, 27. bis 29. Nov. 2026; Lena Fischer für 1 Doble Superior, 18. bis 21. Dez. 2026; und Viajes Ejemplo (Agentur) für 3 Doble Estándar plus 1 Familiar 4 pax, 26. bis 29. März 2027, jeweils mit dem Vermerk Not checked yet" caption="Eine Liste für jede Anfrage: ein einzelner Gast, eine WhatsApp-Anfrage und eine Agenturgruppe Monate im Voraus." path="/availability-watch"}
::

### Wie entscheidet die Warteschlange, dass ein Aufenthalt frei ist?

- **Die schwächste Nacht entscheidet.** Ein Zimmertyp mit vier freien Zimmern am Freitag und keinem am Samstag lässt sich nicht von Freitag bis Sonntag verkaufen. Die Warteschlange nimmt den niedrigsten Wert über alle Nächte, also die Zahl, die Sie tatsächlich verkaufen können.
- **Geschlossen heißt nicht buchbar.** Eine Nacht mit Stop-Sell (**Close Channels** in Little Hotelier), mit Anreisesperre am Anreisetag oder ohne Eintrag im Inventar zählt als null, auch wenn die Zimmerzahl etwas anderes sagt. „Keine Daten“ bedeutet nie „frei“.
- **Deshalb funktionieren auch Termine ohne Preise.** Halten Sie die nächste Saison geschlossen, bis die Preise eingepflegt sind, wartet ein Gast, der nach August fragt, in der Warteschlange. Die erste Prüfung, nachdem Sie Preise eingepflegt und die Termine geöffnet haben, findet die Zimmer frei, und der Gast erfährt es, ohne dass Sie etwas nachschlagen.
- **Eine Prüfung für die ganze Warteschlange.** Bei jedem Lauf wird jede wartende Anfrage geprüft. Zwei Gäste, die auf dieselbe Nacht warten, erfahren also gleichzeitig von derselben Stornierung. Little Hotelier wird einmal pro Anreisedatum gelesen, nicht einmal pro Anfrage.
- **Sie meldet es einmal.** Wird eine Anfrage als verfügbar gemeldet, wird sie geschlossen. Die Verfügbarkeit schwankt, und ein Gast soll nicht alle 30 Minuten eine Nachricht über dasselbe Zimmer bekommen.
- **Ein bereits begonnener Aufenthalt wird beendet**, ohne dass etwas gesendet wird.

### Wer was erfährt: available, partial oder expiring

Jede Prüfung endet in einer von drei Situationen, und Gast und Betrieb abonnieren sie getrennt:

| Situation | Bezeichnung im Formular | Wer standardmäßig benachrichtigt wird |
|---|---|---|
| **Available** (verfügbar): Jedes angefragte Zimmer ist in jeder Nacht buchbar | **Everything asked for is free** | Gast und Betrieb. Die Anfrage wird geschlossen. |
| **Partial** (teilweise): Etwas ist frei geworden, aber weniger Zimmer als angefragt | **Some rooms came free, but not all** | Nur der Betrieb. Das ist ein Fall für einen Anruf, nicht für eine automatische E-Mail. |
| **Expiring** (läuft ab): Der Aufenthalt beginnt innerhalb von 48 Stunden, und nichts wurde gefunden | **About to expire with nothing found** | Nur der Betrieb. Ihre letzte Chance, eine Alternative anzubieten. |

Ein Teiltreffer, der sich nicht ändert, wird einmal gemeldet, nicht bei jedem Lauf, und die Anfrage wartet weiter auf alle Zimmer. Das ist der Agenturfall: „2 der 3 Doppelzimmer sind frei“ landet an der Rezeption, und die Agentur bekommt keine E-Mail, mit der sie nichts anfangen kann.

### E-Mail oder WhatsApp, für den Gast und für Sie

Der Gast kann per E-Mail, WhatsApp oder beidem benachrichtigt werden, der Betrieb über seine eigenen Kanäle. WhatsApp-Nachrichten gehen von Ihrer verbundenen Nummer aus ([WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier)). Eine Telefonnummer muss die Ländervorwahl enthalten, Hotelier Tools rät nie eine. Lassen Sie **Property email** leer, wird die Benachrichtigungsadresse Ihres Kontos verwendet. Die E-Mail an den Gast ist in der Sprache geschrieben, die Sie unter **Guest's language** wählen, und eine **available**-Nachricht enthält einen direkten Buchungslink, in dem Termine und Zimmerzahl schon ausgefüllt sind. **History** (`/availability-watch/history`) speichert für jede Anfrage die genaue Nachricht.

::screenshot{src="/images/blog/demo/en/availability-queue-history.webp" alt="Verlaufsseite Waiting list history: Zähler mit 1 erfüllten, 1 abgelaufenen, 1 stornierten und 3 Einträgen mit Nachricht, dann Closed entries: Pierre Dubois erfüllt, ein Zimmer wurde frei und gemeldet (AVAILABLE Doble Superior ×3, Gast per E-Mail, Hotel per E-Mail informiert) mit einer Schaltfläche What was sent; Lucas Moreau abgelaufen, weil der Aufenthalt begann, bevor etwas frei wurde; Sean Murphy von der Rezeption storniert, weil der Gast telefonisch andere Termine gebucht hat" caption="Jede abgeschlossene Anfrage bleibt gespeichert, mit der genauen Nachricht, die der Gast bekommen hat." path="/availability-watch/history"}
::

### Anfragen, die im Posteingang ankommen

Die KI-Assistenten ([AI Chat](/blog/ai-assistant-hotel-front-desk), Beta, und der Assistent im Posteingang, Alpha) wissen, wenn Ihr Betrieb die Warteschlange nutzt. Fragt ein Gast nach Terminen und findet die Buchungsmaschine nichts zu verkaufen, bietet der Assistent in derselben Antwort die Warteliste an, statt bei „keine Verfügbarkeit“ stehen zu bleiben. Vorher prüft er, ob diese Person schon wartet, per E-Mail oder Telefon, und nimmt sie nie zweimal für dieselben Termine auf. Die Anfrage erscheint als Karte, die Sie bestätigen, mit Gast, Aufenthalt, Zimmern und wer benachrichtigt wird. Sind nur einige Zimmer buchbar, nennt er diese und bietet für den Rest die Warteschlange an. Mehr dazu in [KI-Antworten auf Gästenachrichten](/blog/ai-replies-guest-messages).

## Gäste auf Ihrer Website anfragen lassen: die öffentliche Wartelistenseite

Über die **Public waiting-list page** (öffentliche Wartelistenseite, `/availability-watch/public`) tragen sich Gäste selbst ein. Sie bleibt ausgeschaltet, bis Sie **Page open** aktivieren, und **Ask guests to confirm their email (double opt-in)** ist standardmäßig eingeschaltet: Eine Anfrage kommt erst in die Warteschlange, wenn der Gast in einer Bestätigungs-E-Mail auf eine Schaltfläche klickt.

**Jetzt buchbar: buchen statt warten.** Wählt ein Gast einen Aufenthalt, prüft die Seite Ihre öffentliche Buchungsmaschine (nie Little Hotelier) für diese Termine und diese Personenzahl. Sind Zimmer frei, zeigt sie die Preise mit Ihrem direkten Promo-Code und eine Schaltfläche **Book now**, und sie nimmt diesen Aufenthalt nicht auf die Warteliste. Sind nur andere Zimmertypen oder weniger Zimmer frei, zeigt sie diese und lässt den Gast trotzdem für den Rest auf die Liste. Lässt sich die Buchungsmaschine nicht lesen, sagt die Seite das, und der Gast kann sich trotzdem eintragen.

::screenshot{src="/images/blog/demo/en/availability-queue-bookable-now.webp" alt="Öffentliches Wartelistenformular für den 18. bis 21. Dez. 2026, 1 Zimmer für 2 Erwachsene: ein grüner Kasten mit dem Text Good news: you can book these dates now, der Dormitorio 6 camas mixto, Doble Estándar, Doble Superior und Familiar 4 pax mit verbleibenden Zimmern, durchgestrichenen Preisen und rabattierten Gesamtpreisen pro Rate auflistet, dem Hinweis auf den direkten Rabattcode DEMOSOL und einer Schaltfläche Book now" caption="Sind die Termine buchbar, sieht der Gast Ihren Direktpreis und bucht, statt zu warten." path="/waitlist"}
::

Diese Prüfung schalten Sie unter **When a room is free now** aus, zusammen mit dem Link **Book on our website**. Die übrigen Einstellungen bestimmen, was Gäste sehen:

- **Look of your booking page** (Aussehen Ihrer Buchungsseite): Fügen Sie Ihre direct-book.com-Adresse ein und übernehmen Sie mit **Import** Farben, Banner, Fotos des Hauses und Zimmerbeschreibungen. Angezeigt wird erst etwas, wenn Sie ankreuzen, was verwendet werden soll.
- **What the page shows about your property** (was die Seite über Ihr Haus zeigt): Name, Adresse, Telefon, E-Mail und Website, jeweils **From the property card** (aus den Objektdaten), **Own value for this page** (eigener Wert für diese Seite) oder **Do not show** (nicht anzeigen). Anmeldeadressen werden Gästen nie gezeigt.
- **Kartenlinks und weitere Kontaktwege:** Links zu Google Maps und Apple Maps, aus Ihrer Adresse erzeugt, bis zu drei weitere Kartenlinks, WhatsApp und bis zu drei zusätzliche E-Mail-Adressen (zum Beispiel für Gruppen).
- **Hinweise zu An- und Abreise:** Die Seite warnt, lehnt aber nie ab, wenn ein Gast einen Tag wählt, an dem Sie normalerweise keine An- oder Abreisen annehmen.

::screenshot{src="/images/blog/demo/en/availability-queue-public-settings.webp" alt="Einstellungen der öffentlichen Wartelistenseite: die Karte When a room is free now mit eingeschaltetem Check availability on the booking engine und Show a Book on our website link sowie dem Direct promo code DEMOSOL mit seinem Buchungslink; darunter die Karte Look of your booking page mit einem Feld für die direct-book.com-Adresse, einer Schaltfläche Import und dem Hinweis Nothing imported yet" caption="Erst die Buchungsmaschine prüfen, dann das Aussehen Ihrer Buchungsseite übernehmen." path="/availability-watch/public"}
::

### Einen vorausgefüllten Link teilen oder das Formular einbetten

**Share and embed** (`/availability-watch/embed`) erstellt zwei Dinge zum Kopieren. Einen **Link**, der das Formular ausfüllt, mit denselben Parameternamen wie Ihre Buchungsseite (`checkInDate`, `checkOutDate`, `items[0][adults]`, `promocode`, `locale`). So beantworten Sie eine Anfrage mit einem Link, der die Termine des Gastes schon enthält. Und einen **Frame for your website**: ein `<iframe>` in voller Breite oder mit 480, 640 oder 800 px, mit Vorschau. Nur diese öffentliche Seite lässt sich in andere Websites einbetten, der Rest des Dashboards nicht.

::screenshot{src="/images/blog/demo/en/availability-queue-embed.webp" alt="Seite Share and embed: What the link fills in mit Your nights, Rooms, Adults, Children, Room type (optional), Language auf The guest's own und Promo code DEMOSOL sowie die Karte Link mit der Adresse der Warteliste, Copy link und Open" caption="Beantworten Sie eine Anfrage mit einem Link, der die Termine des Gastes schon enthält." path="/availability-watch/embed"}
::

## Die Warteschlange fließt in Ihre Preise ein

Wer auf eine Nacht wartet, ist Nachfrage. In der dynamischen Preisgestaltung von Hotelier Tools (Alpha) hebt jede wartende Partei die Preisempfehlung dieser Nacht um 3 % an, höchstens um 12 % pro Nacht, nur für die angefragten Zimmertypen und für denselben Gast nur einmal. Ändern oder abschalten können Sie das in den Preisregeln (`/pricing/settings/rules`): **Raise per guest on the waiting list** und **Never raise for the waiting list more than**. Siehe [dynamische Preise für kleine Hotels](/blog/dynamic-pricing-little-hotelier).

## Für Entwickler: MCP und REST

Die MCP-Tools (`availability_watch_list`, `_add`, `_update`, `_cancel`, `_check_now`, `_schedule`, `_set_schedule` sowie `list_room_types`) und die REST-API (`/api/v1/availability-watch`) können dasselbe, mit derselben Prüfung auf Duplikate. Eine Prüfung der Warteschlange verschickt echte Nachrichten, deshalb fragt AI Chat vorher nach Ihrer Bestätigung. Siehe [den Leitfaden zur Little-Hotelier-API](/blog/little-hotelier-api) und [Claude mit Little Hotelier verbinden](/blog/connect-claude-to-little-hotelier).

## Was die Warteschlange nicht kann

- **Sie hält nichts zurück und reserviert nichts.** Das Zimmer bekommt, wer zuerst bucht, auf welchem Kanal auch immer.
- **Sie legt keine Buchungen an** und ändert nichts in Little Hotelier.
- **Sie ist nur so schnell wie ihr Zeitplan.** Prüfen Sie in der Hochsaison alle 20 bis 30 Minuten statt einmal pro Nacht.
- **Sie sieht, was Little Hotelier anzeigt.** Liefert das Inventar Preise, aber keine Zimmerzahlen, zeigt die Seite **Little Hotelier is not returning room counts**, statt die Termine als voll zu melden.
- **Preise sind nicht Teil der Prüfung.** Die Warteschlange liest Zimmerzahlen und Schließungen. Halten Sie Termine ohne Preise also geschlossen, wenn sie nicht gemeldet werden sollen.

::demo-cta{path="/availability-watch"}
::

Alles, was die Warteschlange kann, steht auf der Seite [Waitlist](/tools/bot/waitlist). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es liest die Verfügbarkeit mit dem eigenen Little-Hotelier-Login Ihres Hotels und legt aus der Warteschlange heraus nie eine Buchung an oder ändert eine.
::

Siehe auch: [CTA, CTD, Mindestaufenthalt und Stop-Sell](/blog/little-hotelier-cta-ctd-stop-sell), [eine Hotel-E-Mail-Adresse für Gäste](/blog/hotel-email-address), [Promo-Codes in Little Hotelier](/blog/little-hotelier-promo-codes).

## Zusammenfassung

- Anfragen gehen verloren, weil die Frage lange vor der Antwort kommt: untergegangene Nachrichten, Termine ohne Preise, ausgebuchte Nächte, Gruppenanfragen, Teiltreffer.
- Von Hand: Nächte, Zimmer pro Typ, Kontakt und den Grund notieren, warum Sie nicht verkaufen konnten, und die Liste prüfen, wann immer Sie Preise einpflegen oder eine Stornierung kommt.
- Die **Availability Queue** von Hotelier Tools prüft nach einem Zeitplan jede Nacht jeder Anfrage, zählt geschlossene oder fehlende Nächte als voll und benachrichtigt den Gast einmal, mit Buchungslink.
- **Partial** und **expiring** gehen standardmäßig an den Betrieb, **available** an beide.
- Gäste können sich über eine öffentliche Seite eintragen, die die Termine zuerst zum Buchen anbietet, wenn sie jetzt buchbar sind. Es wird nie etwas zurückgehalten.
