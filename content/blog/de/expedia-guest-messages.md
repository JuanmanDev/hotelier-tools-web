---
title: "Expedia-Gästenachrichten lesen und beantworten (Partner Central, App und E-Mail)"
seoTitle: "Expedia-Gästenachrichten in Partner Central beantworten"
description: "Wo Expedia-Gästenachrichten landen, wie Sie aus Partner Central, der App oder Ihrem Postfach antworten, geplante Vorlagen und ein Posteingang mit WhatsApp."
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, gästenachrichten, partner central, posteingang, vorlagen, little hotelier]
keywords: [expedia partner central nachrichten, expedia gästenachrichten beantworten, expedia gast e-mail alias, expedia nachrichtencenter, expedia geplante nachrichten, expedia telefonnummer gast wird nicht angezeigt, expedia nachrichten in einem posteingang, expedia partner central app nachrichten]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/en/expedia-guest-messages-channels.webp
coverAlt: "Seite Channels in Hotelier Tools: die Verbindung Booking.com messages sammelt Nachrichten im Modus Draft (I approve everything), darunter Expedia Partner Central messages, noch nicht verbunden, mit der Schaltfläche Switch on Expedia messages und einem Link zur Anmeldung bei Partner Central"
faq:
  - q: "Wo finde ich Expedia-Gästenachrichten?"
    a: "In Partner Central von Expedia Group unter Guest relations > Messages. Sie können nach Gästename oder Reservierungsnummer suchen oder die Liste filtern, um eine Unterhaltung zu finden. Sie und der Gast erhalten außerdem E-Mail-Benachrichtigungen über neue Nachrichten."
  - q: "Kann ich einem Expedia-Gast aus meinem eigenen E-Mail-Postfach antworten?"
    a: "Ja. Jede Reservierung hat einen E-Mail-Alias für den Gast, eine eindeutige Adresse, die Sie aus der Reservierung oder aus Messages kopieren. Die E-Mail muss von einer Adresse kommen, die zu einem validierten Partner-Central-Nutzer gehört. Die Antworten des Gastes erscheinen in Ihrem Postfach und in Partner Central."
  - q: "Warum sehe ich bei Expedia-Buchungen die Telefonnummer des Gastes nicht?"
    a: "Expedia hat das Anzeigen und Exportieren von Telefonnummern der Reisenden in Partner Central wegen Phishing gegen Reisende vorübergehend deaktiviert. Per API empfangene Reservierungen erhalten eine allgemeine Nummer. Expedia bittet Unterkünfte, stattdessen das eigene Messaging zu nutzen."
  - q: "Kann ich Expedia-Gästen geplante Nachrichten senden?"
    a: "Ja. Öffnen Sie in Messages den Bereich Manage templates, legen Sie eine Vorlage an, schalten Sie Send on a schedule ein und wählen Sie den Zeitpunkt. Expedia versendet geplante Nachrichten um 22 Uhr Ortszeit."
  - q: "Kann Hotelier Tools Expedia-Gästen antworten?"
    a: "Nein. Hotelier Tools sendet nie eine Nachricht an einen Expedia-Gast. Sein Posteingang listet Expedia-Unterhaltungen auf (Beta, funktioniert seit Version 1.71 vom November 2026). Eine dort geschriebene Antwort wird als Entwurf gespeichert, den Sie in Partner Central senden."
  - q: "Gehört Hotelier Tools zu Expedia oder Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und Ihrem eigenen Partner-Central-Login."
---

Expedia-Gästenachrichten finden Sie in Partner Central unter **Guest relations > Messages**. Dort suchen Sie nach Gästename oder Reservierungsnummer und antworten im Verlauf. Sie können auch aus der Partner-Central-App antworten oder aus Ihrem eigenen Postfach über den E-Mail-Alias jeder Reservierung. Vorlagen und geplante Nachrichten decken die Routinefragen ab. Um Expedia neben WhatsApp, Booking.com und E-Mail zu sehen, kann der Posteingang von Hotelier Tools Expedia-Unterhaltungen anzeigen (Beta), aber Antworten gehen immer aus Partner Central hinaus.

Die folgenden Expedia-Funktionen wurden mit der Partner-Central-Hilfe von Expedia Group, Stand November 2026, geprüft.

## Wo sind Expedia-Gästenachrichten?

Öffnen Sie Partner Central und wählen Sie **Guest relations**, dann **Messages** ([Partner Central help: About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center)). Dort können Sie:

- **Suchen:** einen Gast nach Name oder Reservierungsnummer finden, um eine neue Nachricht zu senden.
- **Filtern:** die Liste eingrenzen, um eine bestehende Unterhaltung zu finden.
- **Antworten:** im Verlauf schreiben und Check-in-Anweisungen oder Fotos anhängen.

Sie und Ihre Gäste erhalten E-Mail-Benachrichtigungen über neue Nachrichten, und Gäste können eine Unterhaltung aus ihrem Reiseplan oder ihrer Bestätigung heraus beginnen. Expedia nennt das Message Center „the recommended option“ (die empfohlene Option): Es ist mit der Buchung verknüpft, hält einen nachprüfbaren Verlauf fest und gibt die Kontaktdaten des Gastes nicht preis ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)).

Zwei Dinge überraschen neue Partner:

- **Manche Buchungen haben kein Message Center.** Viele Buchungen von B2B-Partnern von Expedia, etwa Reisebüros, lassen sich nicht anschreiben. Wenden Sie sich dann an den B2B-Partner oder bitten Sie Expedia, eine dringende Nachricht weiterzuleiten.
- **Telefonnummern sind ausgeblendet.** Expedia hat das Anzeigen und Exportieren von Telefonnummern der Reisenden in Partner Central vorübergehend deaktiviert, und API-Reservierungen erhalten eine allgemeine Nummer. Der Grund ist Phishing: Betrüger geben sich mit geleakten Nummern auf WhatsApp als Hotels aus ([Phishing-Hinweis](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)). Auch Ihr Channel-Manager hat die echte Nummer nicht.

### Unterwegs: die Partner-Central-App

Mit der App Expedia Group Partner Central beginnen Sie Unterhaltungen und antworten Gästen, mit Benachrichtigungen zu Buchungen, Bewertungen und Stornierungen. Laut Expedia antworten aktive App-Nutzer 20 % schneller als nicht aktive (eigener Durchschnitt von 2021, [App-Seite](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand)).

## So antworten Sie aus Ihrem eigenen Postfach: der E-Mail-Alias des Gastes

Jede Reservierung hat einen **guest email alias**, eine eindeutige Adresse, die Ihre E-Mail über Expedia an den Gast weiterleitet ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)). So kopieren Sie ihn:

1. **Aus einer Reservierung:** Wählen Sie **Reservations**, suchen Sie die Buchung, wählen Sie den Namen des Gastes und dann **Copy email to clipboard**.
2. **Aus Messages:** Wählen Sie **Guest relations > Messages**, öffnen Sie den Gast, wählen Sie **Show contact details** und dann **Copy email to clipboard**.

Die wichtigen Regeln:

- Der Alias funktioniert für Buchungen über Expedia, Hotels.com, Travelocity, Orbitz und Wotif. Stand November 2026 funktioniert er nicht für B2B-Buchungen und Egencia.
- Die Absenderadresse **muss zu einem validierten Partner-Central-Nutzer gehören**. E-Mails von anderen Adressen werden nicht zugestellt. Legen Sie also Ihr Rezeptionspostfach als Partner-Central-Nutzer an, wenn Sie von dort antworten möchten.
- Die Antwort des Gastes landet in Ihrem Postfach und im Message Center.
- Eine E-Mail mit einer Kreditkartennummer wird blockiert. Nummern virtueller Expedia-Karten sind erlaubt.
- Sie können PDF- oder Word-Dateien anhängen, etwa ein Formular vor der Anreise.

## Wie schnell sollten Sie Expedia-Gästen antworten?

Die Hilfe von Expedia bittet Sie, „respond to every guest in a timely manner“ (jedem Gast zeitnah zu antworten) und „reply promptly to avoid delays, cancellations, or escalations“ (umgehend zu antworten, um Verzögerungen, Stornierungen oder Eskalationen zu vermeiden). Eine feste Frist für normale Nachrichten nennt sie nicht. In der Praxis gilt: spätestens am selben Tag, und bei allem rund um die Anreise innerhalb von Minuten. Späte Anreise, Türcodes und Parken fragen Gäste am Reisetag.

Expedia nennt auch, was Sie lassen sollten ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)):

- **Kein Marketing.** Keine Upsells oder Werbeaktionen über Expedia-Nachrichten.
- **Keine doppelten Bestätigungen.** Der Gast hat bereits eine von Expedia.
- **Keine Änderung der Buchungsbedingungen außerhalb von Expedia.** Daten und Preise ändern Sie in Partner Central.
- **Vermeiden Sie externe Links und Anhänge**, wo es geht. Gäste könnten sie für verdächtig halten.

Wird während des Aufenthalts etwas persönlich vereinbart, empfiehlt Expedia, es im Message Center schriftlich zu bestätigen. Diese Nachricht ist Ihr Nachweis, falls es später Streit gibt.

## So richten Sie Vorlagen und geplante Nachrichten ein

Wählen Sie unter **Guest relations > Messages** die Option **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)):

1. Wählen Sie **Create new template**, geben Sie einen Namen ein und schreiben Sie den Text.
2. Fügen Sie unter **Insert custom information** variable Inhalte wie den Namen des Gastes ein.
3. Hängen Sie bei Bedarf Dateien an, zum Beispiel eine Karte oder Check-in-Anweisungen.
4. Schalten Sie **Send on a schedule** ein und wählen Sie den Zeitpunkt, ohne Enddatum oder für einen Zeitraum.
5. Wählen Sie **Save**.

Alle geplanten Nachrichten werden um 22 Uhr Ortszeit versendet. Ein **smart template** kann automatisch auf ein Thema antworten; Stand November 2026 gibt es nur eines, eine Bitte um Bewertung nach dem Aufenthalt. **Send bulk message** sendet eine Vorlage an mehrere Gäste gleichzeitig.

Eine Vorlage für die Zeit vor der Anreise, die Sie anpassen können:

```text [expedia-pre-arrival.txt]
Guten Tag [Name des Gastes], wir freuen uns auf Ihren Aufenthalt im [Name der Unterkunft].

Der Check-in ist ab [Uhrzeit] möglich. Wenn Sie nach 22:00 Uhr ankommen, antworten Sie hier mit Ihrer Ankunftszeit, und wir hinterlegen Ihnen eine Anleitung.
Parken: [Ihre Parkinfos]. Frühstück: [Zeiten und Preis].

Wir kontaktieren Sie nur über diese Expedia-Unterhaltung und fragen Sie niemals per WhatsApp oder SMS nach Ihren Kartendaten.
```

Die letzte Zeile ist wichtiger geworden, seit Betrüger Expedia-Gästen auf WhatsApp schreiben. Mehr dazu in [Betrugsnachrichten im Hotel erkennen](/blog/hotel-scam-messages).

## Der schnellere Weg: Expedia-Unterhaltungen im Posteingang von Hotelier Tools (Beta)

Hotelier Tools kann Ihre Expedia-Unterhaltungen in seiner **Inbox** (Posteingang, `/messaging`) anzeigen, neben WhatsApp, Booking.com und E-Mail, jede neben ihrer Little-Hotelier-Buchung. Antworten schreiben Sie in Partner Central. So richten Sie es ein:

1. **Verbinden Sie Partner Central** unter **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). Hotelier Tools meldet sich in einem Browser auf dem Server für Sie an; Sie beantworten, was Expedia fragt, etwa den Code, den es auf einem neuen Gerät per E-Mail schickt. Die Sitzung wird verschlüsselt gespeichert, und **Keep Expedia signed in** verhindert, dass sie abläuft. Die Einrichtung ist dieselbe wie bei den [Expedia-Collect-Zahlungsanforderungen](/blog/expedia-collect-payment-requests).
2. Schalten Sie auf derselben Seite in der Karte **Guest messages** die Option **Read Expedia guest messages** ein. Oder öffnen Sie **Channels** (`/messaging/channels`) und drücken Sie **Switch on Expedia messages**.
3. Wählen Sie den Modus unter **Channels**. Für Expedia gibt es nur zwei: **Off (collect only)**, bei dem Nachrichten angezeigt und nicht analysiert werden, und **Draft**, bei dem die KI eine Antwort vorbereitet, die Sie prüfen. Ein neuer Expedia-Kanal startet im Modus „nur sammeln“.
4. Öffnen Sie **Inbox** und filtern Sie nach **Expedia**. Jede Unterhaltung hat einen Link **Conversation on Expedia**, der den Verlauf in Partner Central öffnet.

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-card.webp" alt="Karte Guest messages auf der Seite Expedia Partner Central: der Schalter ist aus, der Hinweis lautet Sign in to Partner Central first, ein Kasten Replies stay in Partner Central erklärt, dass Hotelier Tools nie eine Nachricht an einen Expedia-Gast sendet und Ihre Antwort als Entwurf speichert, dazu ein Link Mode and timing; darunter folgt die Karte Expedia Collect payments" caption="Der Schalter sitzt neben der Anmeldung bei Partner Central. Antworten an Expedia-Gäste bleiben immer in Partner Central." path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-channels.webp" alt="Seite Channels: Booking.com messages wird im Modus Draft (I approve everything) mit eingeschaltetem Collect messages gesammelt, Expedia Partner Central messages ist als noch nicht verbunden markiert, mit Switch on Expedia messages und Anmeldung bei Partner Central" caption="Expedia steht auf der Seite Channels bei Ihren anderen Konten. In der Demo ist es nicht eingeschaltet." path="/messaging/channels"}
::

### Was der Posteingang liest und was er nie tut

- **Die Liste der Unterhaltungen, nicht jede Nachricht.** Für jeden Verlauf liest er den Gast, den Aufenthalt und die letzte Nachricht, so wie die Nachrichtenliste von Partner Central sie in der Vorschau zeigt. Der vollständige Verlauf bleibt in Partner Central.
- **Er sendet nie an einen Expedia-Gast.** Weder automatisch noch auf Knopfdruck. Was Sie tippen, wird als Entwurf der Unterhaltung gespeichert (**Save as a draft: Expedia replies are sent from Partner Central**). Kopieren Sie ihn in Partner Central oder die App.
- **Buchungen werden nur über den Bestätigungscode zugeordnet.** Little Hotelier speichert eine Expedia-Buchung als `EXP-` plus Bestätigungscode von Expedia. Ein Verlauf, der diesen Code nennt, wird mit der Buchung verknüpft und gilt als verifiziert. Ein Gästename gilt nie als Nachweis: Ein Verlauf ohne Code bleibt unzugeordnet, und die KI sieht dazu keine Buchungsdaten.

Im Modus **Draft** schreibt die KI ihren Vorschlag auf Grundlage der verifizierten Buchung und dessen, was Sie ihr unter **FAQ & knowledge** (`/messaging/faq`) beigebracht haben: Ihre FAQ-Seite, Hausnotizen und Objektdaten. Eine Leistung, die Sie nicht aufgeführt haben, wird mit „wird geklärt“ beantwortet, nie mit „ja“. Wie diese Entwürfe funktionieren, lesen Sie in [KI-Antworten auf Gästenachrichten](/blog/ai-replies-guest-messages).

::callout{type="warning" title="Stand November 2026"}
Expedia-Unterhaltungen sind in der Beta. Bis zum 5. November 2026 verweigerte Partner Central die Anfrage, die seine Nachrichtenliste liest (ein HTTP 403), daher erreichte keine Expedia-Unterhaltung den Posteingang. Version 1.71 (November 2026) behebt das: Hotelier Tools sendet jetzt dieselbe Anfrage wie der Posteingang von Partner Central selbst, und Expedia-Unterhaltungen kommen mit Gast, Aufenthalt und letzter Nachricht an. Ändert Expedia diese Anfrage erneut, zeigt die Expedia-Seite einen Fehler statt eines leeren Posteingangs, bis sie angepasst ist. Antworten senden Sie weiterhin aus Partner Central oder der App.
::

Zwei weitere ehrliche Grenzen:

- **Es nutzt Ihre eigene Partner-Central-Sitzung.** Die Partnerbedingungen von Expedia schränken automatisierten Zugriff auf Partner Central ein. Der von Expedia unterstützte Weg ist seine Messaging API, die über Connectivity-Anbieter verfügbar ist.
- **Expedia ist hier nur lesbar.** WhatsApp- und E-Mail-Verläufe können Sie aus dem Posteingang beantworten, Expedia-Verläufe nicht.

::demo-cta{path="/messaging/channels"}
::

Alles, was der Posteingang kann, steht auf der Seite [Guest inbox](/tools/bot/guest-inbox). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und Ihrem eigenen Expedia-Partner-Central-Login.
::

Siehe auch: [Booking.com-Nachrichten ohne Extranet](/blog/booking-com-guest-messages), [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier), [KI-Antworten auf Gästenachrichten](/blog/ai-replies-guest-messages).

## Zusammenfassung

- Expedia-Nachrichten finden Sie in Partner Central unter **Guest relations > Messages** und in der Partner-Central-App.
- Um aus Ihrem eigenen Postfach zu antworten, kopieren Sie den E-Mail-Alias der Reservierung und senden von einer Adresse, die ein validierter Partner-Central-Nutzer ist.
- Telefonnummern der Gäste sind vorerst ausgeblendet: Bleiben Sie im Messaging von Expedia und sagen Sie Gästen, dass Sie nie anderswo nach Kartendaten fragen.
- Vorlagen mit **Send on a schedule** decken Check-in-Anweisungen ab; geplante Nachrichten gehen um 22 Uhr Ortszeit hinaus.
- Der Posteingang von Hotelier Tools kann Expedia-Unterhaltungen neben WhatsApp und Booking.com auflisten (Beta, funktioniert seit Version 1.71 vom November 2026), aber jede Expedia-Antwort wird aus Partner Central gesendet.
