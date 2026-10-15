---
title: "KI-Rezeption im Hotel: Was ein KI-Assistent sicher übernehmen kann"
seoTitle: "KI-Rezeption Hotel: Was ein KI-Assistent sicher kann"
description: "Ein KI-Assistent sucht Buchungen heraus, entwirft Gästeantworten und bereitet Änderungen vor. Was sicher geht und warum Sie jede Änderung freigeben."
date: 2026-10-03
category: ai
tags: [ai, ai assistant, front desk, approvals, little hotelier]
keywords: [ki rezeption hotel, ki assistent hotel, ki telefonassistent für hotels, ki in der hotellerie, ki hotelsoftware, ki agent hotel]
feature: ai-assistant
demoPath: /chat
cover: /images/blog/demo/en/ai-chat-start.webp
coverAlt: "Startbildschirm des KI-Assistenten von Hotelier Tools mit dem Hinweis, dass alles, was Daten ändert, zuerst eine Bestätigung verlangt, mit Beispielfragen und dem Chatverlauf links"
faq:
  - q: "Kann ein KI-Assistent eine Hotelrezeption ersetzen?"
    a: "Nein. Er nimmt der Rezeption Abfragen und erste Entwürfe ab: Wer reist an, wer schuldet noch Geld, was antworte ich? Entscheidungen über Geld, Buchungen und schwierige Gäste bleiben bei einer Person, die jede Änderung freigibt."
  - q: "Kann die KI selbstständig eine Buchung stornieren oder eine Rückerstattung auslösen?"
    a: "Nicht im Chat des Dashboards. Jede Änderung zeigt vorher eine Karte zum Freigeben oder Ablehnen, und Rückerstattungen sind eine eigene, nicht umkehrbare Aktion, die immer eine Karte verlangt. Die KI im Gästekontakt kann weder stornieren noch Daten ändern noch Zahlungen anfassen."
  - q: "Versteht der Sprachassistent Deutsch?"
    a: "Noch nicht. Die Mikrofontaste nutzt die eingebaute Spracherkennung Ihres Browsers, die auf Spanisch (es-ES) eingestellt ist, und Ihr Browser muss sie unterstützen. Tippen können Sie jederzeit in jeder Sprache."
  - q: "Antwortet die KI meinen Booking.com-Gästen automatisch?"
    a: "Nein. Booking.com-Nachrichten und Gästefragen landen im selben Posteingang, aber ein automatischer KI-Versand an Booking.com ist nie erlaubt. Ein Mensch entscheidet."
  - q: "Was kostet der KI-Assistent?"
    a: "Hotelier Tools ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Hotels, die 2026 starten, zahlen danach das ganze Jahr 2027 über 50 € pro Monat. Antworten des Assistenten verbrauchen KI-Guthaben, das Sie auf der Seite AI credits einsehen."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hauses."
---

Ja, ein KI-Assistent kann der Rezeption eines kleinen Hotels schon heute echte Arbeit abnehmen: „Wer reist morgen an und wer schuldet noch Geld?“ beantworten, Gästeantworten entwerfen und Buchungsänderungen oder Rechnungen vorbereiten. Sicher ist das nur, wenn er frei lesen darf, aber **jede Änderung auf die Freigabe durch eine Person wartet**. Rückerstattungen, Preisänderungen und Antworten an Booking.com-Gäste überlässt man nie allein der KI.

Dieser Leitfaden zeigt, wie das mit Hotelier Tools auf Basis von Little Hotelier in der Praxis aussieht, mit echten Anfragen und dem, was nach dem Druck auf Enter passiert.

## Was kann eine KI-Rezeption im kleinen Hotel heute übernehmen?

Denken Sie an drei Arten von Arbeit, jede mit einem anderen Maß an Vertrauen.

| Art der Arbeit | Beispiele | Wer entscheidet |
|---|---|---|
| **Nachschlagen** | Anreisen von morgen, offene Salden, nicht zugewiesene Zimmer, ob ein Aufenthalt abgerechnet werden kann, heutige Preise | Der Assistent antwortet. Nichts ändert sich. |
| **Entwerfen** | Eine Antwort auf eine WhatsApp- oder E-Mail-Frage, eine Notiz für den Nachtportier | Sie lesen sie und senden sie ab oder bearbeiten sie vorher. |
| **Ändern** | Telefonnummer eines Gastes aktualisieren, einen Aufenthalt für die Rechnung beim Check-out vormerken, einen Preis übernehmen | Der Assistent bereitet eine Karte vor. Sie klicken auf **Approve** (Freigeben) oder **Reject** (Ablehnen). |

Little Hotelier bietet an der Rezeption bereits viel. Der eigene [Guest Engagement Messaging Hub](https://www.littlehotelier.com/blog/learn-about-tech/unified-inbox/) bündelt E-Mail-, SMS-, WhatsApp- und Airbnb-Unterhaltungen in einem Posteingang, mit Vorlagen und geplanten Nachrichten. Ein Assistent ergänzt, dass Sie in normalen Worten *fragen* können und eine Antwort aus Ihren aktuellen Buchungen erhalten, statt sich durch Kalender und Reservierungsmasken zu klicken.

## Drei Orte, an denen der Assistent in Hotelier Tools arbeitet

[Hotelier Tools](/tools/bot/ai-assistant) nutzt an drei Stellen dieselben Werkzeuge. Überall gilt dieselbe Regel: Lesen läuft durch, Änderungen warten auf eine Person.

### Der Assistenten-Chat im Dashboard (Beta)

Öffnen Sie **AI Chat** (`/chat`) und stellen Sie eine Frage zu Buchungen, Gästen, Preisen, Rechnungen, Prüfungen oder zur Warteliste. Der leere Chat sagt es deutlich: „Anything that changes data asks for your confirmation first.“ (Alles, was Daten ändert, verlangt zuerst Ihre Bestätigung.)

Antworten kommen als Text und als Karten: eine Reservierungsübersicht, eine vorgeschlagene Änderung mit Belegtabelle, eine Karte zur Anmeldung für die Rechnung beim Check-out, eine Tabelle mit Preisempfehlungen oder Schieberegler für Preisregeln. Jede frühere Unterhaltung bleibt im **Chat History** (`/chat/history`) erhalten.

Es gibt auch eine Mikrofontaste. Sie nutzt die eingebaute Spracherkennung Ihres Browsers, die derzeit **auf Spanisch (es-ES) eingestellt** ist. Spracheingabe eignet sich also für Spanischsprachige. Alle anderen tippen.

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="KI-Chat von Hotelier Tools beantwortet die Frage nach den Anreisen dieser Woche mit einem Tool-Aufruf und einer Liste Reservations (14) aus Karten, die je Gast An- und Abreisedatum, Paid oder Pending und ein Badge für ausgecheckt, eingecheckt oder bestätigt zeigen" caption="Fragen Sie in normalen Worten, die Antwort kommt als Reservierungskarten. Eine Abfrage wie diese ändert nichts." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

### Der Mitarbeiter-Assistent per WhatsApp oder E-Mail (Alpha)

Unter **Staff assistant** (`/staff`) legen Sie einen Mitarbeiter mit Namen, WhatsApp-Nummer und/oder E-Mail-Adresse und einer Rolle an: **Read only** (nur lesen) oder **Can request changes** (darf Änderungen anfragen).

Schreibt diese Person an die verbundene WhatsApp-Nummer oder das Postfach Ihres Hotels, behandelt die KI sie als Teammitglied und antwortet im selben Kanal mit Ihren Little-Hotelier-Daten. Ihre Nachrichten vermischen sich nie mit dem Gäste-Posteingang.

- Ein Mitarbeiter mit **Read only** darf nur Fragen stellen.
- Ein Mitarbeiter mit **Can request changes** darf Änderungen anfragen, aber jede wird zu einer Anfrage, die der Inhaber unter `/staff` freigibt.
- Die Identität ist der Absender selbst: die registrierte Telefonnummer oder eine E-Mail-Adresse, die die DKIM/DMARC-Prüfung besteht.
- Nachrichten, die älter als 30 Minuten sind, werden nicht beantwortet, damit eine verspätete Antwort nie auf veralteten Informationen beruht.

WhatsApp läuft hier über eine WhatsApp-Web-Sitzung (WAHA), nicht über die offizielle WhatsApp Business API. Die Optionen finden Sie unter [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier).

### Antwortentwürfe im Gäste-Posteingang (Alpha)

Der [Gäste-Posteingang](/tools/bot/guest-inbox) (`/messaging`) sammelt WhatsApp-, E-Mail- und Booking.com-Nachrichten. Für jedes verbundene Konto wählen Sie unter `/messaging/channels` einen Antwortmodus:

| Modus | Was passiert |
|---|---|
| Off | Nachrichten werden angezeigt. Nichts wird analysiert oder gesendet. |
| **Draft** (Standard) | Die KI bereitet eine Antwort und einen Plan vor. Ohne Ihre Freigabe passiert nichts. |
| Auto | Die KI sendet ihre Antwort nach einer Verzögerung, kann aber nie eine Reservierung ändern. |
| Autonomous | Die KI führt zusätzlich erlaubte Reservierungsänderungen ohne Freigabe aus. Kontrollieren Sie sie mehrmals täglich. |

Starten Sie mit **Draft** und bleiben Sie dabei, bis Sie den Antworten vertrauen. Die KI im Gästekontakt hat gar keine Werkzeuge: Sie kann nur einen Plan aus einer kurzen Liste zurückgeben (Nachricht senden, für das Personal markieren, Reservierungsnotiz hinzufügen, Ankunftszeit setzen).

## Wie Freigabekarten die KI vor teuren Fehlern bewahren

Eine KI kann eine Nachricht falsch verstehen oder die falsche Buchung wählen. Freigabekarten sorgen dafür, dass ein Fehlgriff nie in Little Hotelier ankommt.

1. **Jede Schreibaktion braucht eine Karte.** Kann das System nicht erkennen, ob ein Werkzeug liest oder schreibt, behandelt es dieses als Schreibaktion.
2. **Die Karte zeigt die genaue Änderung.** Bei einer Reservierung sehen Sie eine Belegtabelle: den Wert in Little Hotelier, was der Absender angegeben hat und was im Nachrichtentext steht.
3. **Sie bestätigen die Quelle.** Reservierungsänderungen aus dem Chat enthalten ein Kontrollkästchen („das ist die richtige Reservierung und ich vertraue der Quelle“), denn eine Chatnachricht ist eine Behauptung, kein Nachweis, wer jemand ist.
4. **Approve führt genau diesen Aufruf aus.** Mit **Approve** wird die gespeicherte Änderung auf dem Server ausgeführt. Die KI bekommt keine zweite Chance, sie umzuschreiben.
5. **Jede Freigabe gilt nur einmal.** Sie ist an dieses Werkzeug, diese Werte, diese Unterhaltung und diese Person gebunden und läuft nach 24 Stunden ab.
6. **Rückerstattungen sind getrennt.** Eine Rückerstattung ist eine nicht umkehrbare Aktion und liegt immer hinter einer eigenen Karte.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Karte Approve these changes? mit dem Hinweis Nothing written yet: vollständige Übereinstimmung mit dem WhatsApp-Absender, eine Belegtabelle mit den Spalten Little Hotelier, WhatsApp sender und message text, die neuen Werte für Company und Tax ID mit den Markierungen New und Claim, ein Kontrollkästchen Also invoice this reservation automatically at checkout sowie die Schaltflächen Reject und Approve and apply" caption="Die Änderungskarte zeigt, was Little Hotelier jetzt hat, was geschrieben würde und woher jeder Wert stammt. Ohne Ihre Freigabe wird nichts geschrieben." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

## Echte Anfragen und was danach passiert

So etwas tippt eine Rezeptionskraft an einem normalen Morgen. Die Buchungsnummern sind erfunden.

::prompt{label="Hotelier Tools Assistent"}
Wer reist morgen an, und hat jemand davon noch einen offenen Betrag?
::

Der Assistent liest die Anreisen von morgen samt Zahlungen und listet sie auf, mit einer Reservierungskarte pro Gast. Es ändert sich nichts, also gibt es keine Karte freizugeben.

::prompt{label="Hotelier Tools Assistent"}
Der Gast der Buchung BDC-1234567890 hat uns per E-Mail eine neue Handynummer geschickt: +34 600 000 000. Bitte aktualisieren.
::

Der Assistent findet die Reservierung und bereitet eine Karte **proposed change** (vorgeschlagene Änderung) vor: die alte Nummer, die neue Nummer und woher der neue Wert stammt. Sie bestätigen per Häkchen, dass Sie der Quelle vertrauen, und klicken auf **Approve**. Erst dann wird Little Hotelier aktualisiert.

::prompt{label="Hotelier Tools Assistent"}
Der Gast in BDC-1234567890 möchte eine Rechnung. Schick sie automatisch beim Check-out.
::

Sie erhalten die Karte zur Anmeldung für die Rechnung beim Check-out. Nach Ihrer Freigabe ist der Aufenthalt für die tägliche Rechnungsaufgabe vorgemerkt, und Little Hotelier versendet die Rechnung nach der Abreise aus Ihrer eigenen Vorlage. Details dazu in [Rechnung automatisch beim Check-out senden](/blog/send-invoice-to-guest-at-checkout).

::prompt{label="Hotelier Tools Assistent"}
Was sollte ein Doppelzimmer nächsten Samstag kosten, und warum?
::

Sie erhalten die Tabelle mit Preisempfehlungen samt den Gründen hinter jeder Zahl: Mitbewerber, Nachfrage, Grenzen. Das Lesen ändert nichts. Einen Preis zu übernehmen ist eine Schreibaktion und wartet auf Ihre Freigabe.

::prompt{label="Hotelier Tools Assistent"}
Erstatte die Anzahlung von 40 € für BDC-1234567890 zurück.
::

Die Rückerstattung erscheint als eigene Karte. Erst nach Ihrer Freigabe wird etwas erstattet. Außerhalb des Dashboards sind Rückerstattungen über [externe KI-Assistenten](/blog/connect-claude-to-little-hotelier) vollständig gesperrt.

Und vom Mitarbeiter-Assistenten per WhatsApp:

::prompt{label="Mitarbeiter per WhatsApp"}
Ist Zimmer 5 heute Nacht frei? Wenn ja, leg die Buchung von Martin mit Anreise heute dorthin um.
::

Die erste Hälfte wird sofort beantwortet. Die Umbuchung ist eine Änderung und wird daher zu einer offenen Anfrage unter `/staff`, die der Inhaber freigibt.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Seite Staff assistant mit einer Änderung, die auf Freigabe wartet: eine Anfrage invoice_on_leave_add von Lucía (recepción) mit den Schaltflächen Reject und Approve and run, zwei Mitarbeitende mit den Rollen Can request changes und Read only sowie die letzten WhatsApp-Nachrichten" caption="Änderungen, die Ihr Team per WhatsApp oder E-Mail anfragt, warten hier auf Freigabe." path="/staff"}
::

## Was sollte eine KI nie allein tun?

Egal welches Werkzeug Sie nutzen: Das hier bleibt bei einer Person. So setzt Hotelier Tools jeden Punkt durch.

- **Geld bewegen.** Rückerstattungen brauchen immer eine eigene Karte. Externe KI-Apps, die über MCP verbunden sind, können gar nicht erstatten.
- **Eine Buchung ändern, nur weil eine Nachricht es sagt.** Die Gäste-KI sieht eine Reservierung nur, wenn der Absender verifiziert ist: eine Telefonnummer, die in den letzten 8 oder mehr Ziffern mit der Buchung übereinstimmt, die exakte E-Mail-Adresse oder ein Booking.com-Verlauf. Passen zwei Gäste, wird keine Buchung zugeordnet.
- **Booking.com-Gästen selbst antworten.** Automatischer KI-Versand an Booking.com ist nie erlaubt.
- **Dinge erfinden.** Die Gäste-KI antwortet nur auf Grundlage Ihrer FAQ, Hausnotizen und Objektdaten. Haben Sie nicht angegeben, ob es einen Parkplatz gibt, lautet die Antwort „wird geklärt“, nie „ja“.
- **Andere Gäste erwähnen.** Ein Antwortfilter blockiert Buchungsnummern, die nicht zum Gast der Unterhaltung gehören.
- **Preise ohne Grenzen übertragen.** Die KI ist an der Preisberechnung pro Nacht nicht beteiligt. Der Autopilot ist standardmäßig aus und ändert eine Nacht, wenn er an ist, standardmäßig um höchstens ±20 % und nie unter Ihren Mindestpreis.
- **Offizielle Meldungen einreichen oder von außen Gäste per E-Mail anschreiben.** Die INE-Erhebung abzusenden, eine Rechnung per E-Mail zu verschicken oder Gäste auf der Warteliste anzuschreiben ist für externe KI-Apps gesperrt. Im Dashboard-Chat steht jeweils eine Karte davor.

Unbeaufsichtigte Antworten haben außerdem Mengenlimits: 4 pro Stunde, 12 pro Tag und 3 in Folge ohne Antwort des Gastes.

## Rollen, Datenschutz und Kosten

**Rollen.** Anfragen des Mitarbeiter-Assistenten gibt der Inhaber unter `/staff` frei. Teamkonten mit Rollen stehen auf der [Assistenten-Seite](/tools/bot/ai-assistant) als „soon“ (demnächst). Sie sind so gedacht, dass etwa ein Rezeptionslogin Preise sehen, aber nicht ändern kann und auch mit einer Karte keine Rückerstattung ausführen darf.

**Datenschutz.** Logins für Little Hotelier, Booking.com und Postfächer werden verschlüsselt gespeichert (AES-256-GCM). Gästenachrichten und Buchungsdetails verarbeitet ein KI-Anbieter, wenn der Assistent sie liest. Der [Auftragsverarbeitungsvertrag](https://dashboard.hotelier.tools/legal/dpa) und die [Datenschutzerklärung](https://dashboard.hotelier.tools/legal/privacy) erklären, was verarbeitet wird.

**Kosten.** Hotelier Tools ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Hotels, die 2026 starten, zahlen danach das ganze Jahr 2027 über 50 € pro Monat, mit allen Funktionen. Jede Antwort des Assistenten und jede Analyse einer Gästenachricht verbraucht KI-Guthaben. Kontingent, Stand und Verbrauch sehen Sie unter **AI credits** (`/messaging/credits`).

::callout{type="note" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hauses, und jede Änderung ist in Little Hotelier wie gewohnt sichtbar.
::

## So probieren Sie es gefahrlos aus

1. Öffnen Sie die öffentliche Demo unten. Sie nutzt ein erfundenes Hotel, und nichts erreicht echte Systeme.
2. Fragen Sie nach den Anreisen von morgen, bitten Sie dann um eine Änderung und sehen Sie sich die Karte an, die Sie erhalten.
3. Verbinden Sie in Ihrem eigenen Dashboard Little Hotelier unter **Credentials**, füllen Sie die Objektdaten unter `/settings/property` aus (sie liest Adresse, Richtlinien und Zimmer aus Little Hotelier) und tragen Sie Ihre FAQ unter `/messaging/faq` ein.
4. Lassen Sie den Gäste-Posteingang in den ersten Wochen auf **Draft** und korrigieren Sie unter `/messaging/training`, was die KI falsch versteht.

::demo-cta{path="/chat"}
::

Siehe auch: [Gästenachrichten von Booking.com](/blog/booking-com-guest-messages), [Rezeptions-Checklisten automatisieren](/blog/hotel-front-desk-checklist-automation).

## Zusammenfassung

- Ein KI-Assistent ist an der Rezeption sicher, wenn er frei liest und **vor jeder Änderung fragt**.
- In Hotelier Tools funktioniert das im Dashboard-Chat, per WhatsApp oder E-Mail für Mitarbeitende und als Antwortentwürfe im Gäste-Posteingang.
- Rückerstattungen, Booking.com-Antworten, Preisgrenzen und offizielle Meldungen bleiben bei Menschen.
- Dieselben Antworten in Claude oder ChatGPT? Lesen Sie, [was ein MCP-Server ist](/blog/what-is-mcp-server-hotels), und [verbinden Sie danach Claude mit Little Hotelier](/blog/connect-claude-to-little-hotelier).
