---
title: "Expedia Collect: So kommen Sie per virtueller Karte oder Zahlungsanforderung an Ihr Geld (und verpassen keine)"
seoTitle: "Expedia Collect: virtuelle Karte oder Zahlungsanforderung"
description: "Bei Expedia Collect zahlt der Gast an Expedia. Ihr Geld kommt erst, wenn Sie die virtuelle Karte belasten oder es anfordern. Fristen, Schritte, Automatik."
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, zahlungen, virtuelle karte, partner central, automatisierung]
keywords: [expedia collect zahlung anfordern, expedia collect geld bekommen, expedia virtuelle kreditkarte belasten, expedia zahlt nicht, expedia partner central zahlungen, expedia collect hotel collect unterschied, expedia automatische auszahlung, expedia virtuelle karte abgelaufen, expedia collect rechnung erstellen]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-payments-states.webp
coverAlt: "Karte Expedia Collect payments in Hotelier Tools für Abreisen vom 7. Oktober bis 5. November 2026: die Chips All 7, To request 2 (224,08 €), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 und Cancelled 1, sieben Demo-Aufenthalte mit Betrag, Status, wer angefordert hat (Check at check-out oder Demo Manager) und Expedia-Queue-IDs, darüber die Schaltfläche Request payment"
featured: true
faq:
  - q: "Wie lange habe ich Zeit, die Zahlung für eine Expedia-Collect-Buchung anzufordern?"
    a: "365 Tage ab dem Abreisedatum des Gastes. Danach bietet Partner Central die Zahlungsanforderung für diesen Aufenthalt nicht mehr an. Eine vergessene Buchung kann also Geld bedeuten, das Sie nie bekommen."
  - q: "Wann kann ich die virtuelle Karte von Expedia belasten?"
    a: "Ab dem Anreisedatum. Expedia empfiehlt, beim Check-in zu belasten und es wegen der Zeitzonen am Abend noch einmal zu versuchen, falls es nicht klappt. Belasten Sie genau den angezeigten Betrag. Die Karte wird sechs Monate nach der Abreise deaktiviert."
  - q: "Wie lange braucht Expedia, um eine Zahlungsanforderung zu bezahlen?"
    a: "Expedia überweist entsprechend Ihren Zahlungsbedingungen, üblicherweise 30 Tage nach der Anforderung. Die Bank kann weitere 2 bis 8 Tage brauchen."
  - q: "Muss ich jede Expedia-Collect-Zahlung von Hand anfordern?"
    a: "Nicht, wenn Sie die virtuelle Karte nutzen, die Sie selbst belasten, oder automatische Auszahlungen, wo Expedia sie anbietet (in einigen Märkten, mit 2 % Abzug). Sonst braucht jeder Aufenthalt eine Zahlungsanforderung in Partner Central oder ein Tool, das sie für Sie sendet."
  - q: "Kann Hotelier Tools Expedia-Collect-Zahlungen automatisch anfordern?"
    a: "Ja, in der Beta. Eine geplante Aufgabe bittet Expedia nach der Abreise um Zahlung. Sie startet im Vorschaumodus, fragt nie zweimal für denselben Aufenthalt, meldet sich nie selbst an und belastet nie virtuelle Karten."
  - q: "Gehört Hotelier Tools zu Expedia oder Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und Ihrem eigenen Partner-Central-Login."
---

Bei Expedia Collect zahlt der Gast bei der Buchung an Expedia, und Expedia schuldet Ihnen das Geld nach dem Aufenthalt. Sie bekommen es auf einem von drei Wegen: Sie belasten ab dem Anreisedatum die virtuelle Karte von Expedia, Sie senden innerhalb von 365 Tagen nach der Abreise eine Zahlungsanforderung in Partner Central (**Payments > Request a payment from Expedia Group**), oder Expedia zahlt Ihnen per automatischer Auszahlung, wo es sie gibt. Tun Sie nichts davon, wird das Geld nie eingezogen. Hotelier Tools (Beta) zeigt den Zahlungsstatus jedes Expedia-Aufenthalts und kann die Anforderungen nach Zeitplan für Sie senden.

Die folgenden Expedia-Regeln wurden mit der Partner-Central-Hilfe von Expedia Group, Stand November 2026, geprüft.

## Wie werden Sie für Expedia-Collect-Buchungen bezahlt?

Bei **Expedia Collect (EC)** zahlen Reisende im Voraus an Expedia oder einen seiner B2B-Partner, und Ihre Buchungsbenachrichtigung zeigt die Nettorate: das, was Expedia Ihnen nach Abzug seiner Vergütung zahlt ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)). Nach dem Aufenthalt holen Sie es sich auf einem dieser Wege:

| Wie Sie bezahlt werden | Was Sie tun | Wann das Geld ankommt | Kosten |
|---|---|---|---|
| **Virtuelle Karte** | Am Kartenterminal belasten, ab dem Anreisedatum | Wie bei Ihrem Zahlungsdienstleister üblich | Keine Expedia-Gebühr, nur die Ihres Dienstleisters |
| **Zahlungsanforderung** (Überweisung) | Innerhalb von 365 Tagen nach der Abreise in Partner Central anfordern | Üblicherweise 30 Tage später, plus 2 bis 8 Banktage | Kostenlos |
| **Automatische Auszahlung** (einige Märkte) | Nichts pro Aufenthalt | Letzter Tag des Monats nach der Abreise | 2 % Abzug |

Zwei andere Modelle sehen ähnlich aus, funktionieren aber anders. Bei **Hotel Collect** bezahlt der Gast Sie direkt im Haus, Sie müssen also nichts bei Expedia anfordern. Bei **Expedia Traveler Preference** wählt jeder Gast bei der Buchung das eine oder das andere.

In manchen Märkten hat Expedia EC durch **Updated Expedia Collect (EC+)** ersetzt. Im Nettomodell ist die virtuelle Karte mit dem Buchungsbetrag abzüglich Vergütung und Steuer von Expedia geladen. Im Bruttomodell trägt sie den vollen Betrag, und Expedia stellt Ihnen seine Vergütung separat in Rechnung ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card)).

## So belasten Sie die virtuelle Karte von Expedia

Die **Expedia Virtual Card (EVC)**, in Partner Central inzwischen einfach „virtual card“, ist eine Einmalkarte, die Expedia für jede Expedia-Collect-Buchung ausstellt, sobald Sie sich dafür angemeldet haben ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings)).

1. Suchen Sie die Kartendaten: in der Buchungsbenachrichtigung (wenn Sie einen Channel-Manager haben), in der Reservierung in Partner Central unter **Payment method** oder auf der Suchseite **Virtual cards** mit Reservierungsnummer und Anreisedatum ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information)).
2. Belasten Sie sie **ab dem Anreisedatum**, mit genau dem angezeigten Gesamtbetrag, in Ihrer vertraglich vereinbarten Währung.
3. Wird sie morgens abgelehnt, versuchen Sie es am Ende des Tages noch einmal. Laut Expedia ist die Karte wegen der Zeitzonen eventuell noch nicht aktiv.
4. Nebenkosten und Kurtaxe belasten Sie auf die eigene Karte des Gastes, nie auf die virtuelle Karte.

Achten Sie auf die Fristen. Der Artikel zum Belasten sagt, die Karte bleibt 180 Tage nach der Abreise gültig, der Artikel zur Kartensuche sagt, sie wird sechs Monate nach der Abreise deaktiviert. Belasten Sie in einer anderen Währung? Nutzen Sie den Wechselkurs des Tages, sonst riskieren Sie eine Ablehnung oder Rückbuchung.

## So fordern Sie in Partner Central eine Zahlung von Expedia Group an

Wenn Sie die virtuelle Karte nicht nutzen, braucht jeder Expedia-Collect-Aufenthalt eine Zahlungsanforderung ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. Wählen Sie im Menü **Payments**.
2. Wählen Sie unter **Quick tasks** die Option **Request a payment from Expedia Group**.
3. Suchen Sie **By Date Range** (höchstens 31 Tage auf einmal) oder **By Reservation ID** (bis zu 200 Nummern).
4. Haken Sie die Reservierungen an, prüfen Sie Buchungs- und Steuerbeträge und wählen Sie **Create Invoice**.
5. Notieren Sie die **Transmission Queue ID** aus der Bestätigung. Sie ist die Referenz für diese Anforderung.

Hat Partner Central zu einer Buchung keine Angaben, laden Sie stattdessen eine Datei mit der Zahlungsanforderung hoch. Sind Ihre Bankdaten unvollständig, weist ein Pop-up auf der Anforderungsseite darauf hin: Korrigieren Sie sie zuerst, sonst verzögert sich die Zahlung.

## Wann zahlt Expedia, und was passiert, wenn Sie es vergessen?

Expedia überweist entsprechend Ihren Zahlungsbedingungen, üblicherweise 30 Tage nach der Anforderung, und die Bank kann weitere 2 bis 8 Tage brauchen. Wurde eine Buchung nur teilweise abgerechnet, braucht der Rest eine neue Anforderung. Bei einem No-Show oder einer vorzeitigen Abreise wenden Sie sich stattdessen an Expedia und beantragen eine Erstattung.

Fordert niemand einen Aufenthalt an, **zahlt Expedia ihn nicht**. 365 Tage nach der Abreise verschwindet die Option aus Partner Central. Ein voller Sommer mit zehn vergessenen Aufenthalten ist echtes Geld, das bei Expedia bleibt.

Automatische Auszahlungen ersparen Ihnen den Schritt pro Aufenthalt, gibt es aber nur in einigen Märkten, und sie kosten 2 % ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)). Ob Ihr Haus sie hat, sehen Sie unter **Payments > Payment Settings**.

## So gleichen Sie Expedia-Collect-Zahlungen ab

Gleichen Sie jeden Monat drei Listen ab:

- **Ihre Abreisen:** jeder Expedia-Collect-Aufenthalt, der zu Ende ging.
- **Ihre Anforderungen:** in Partner Central unter **Payments > See all invoices**, einen Zeitraum wählen, dann die Spalte **Status**. Zwei Jahre Verlauf werden aufbewahrt, mit Überweisungsbetrag und Zahlungsdatum ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status)).
- **Ihre Bank:** die eingegangenen Überweisungen mit den Queue-IDs.

Eine Abreise ohne Anforderung ist Geld, das Sie noch anfordern müssen. Eine Anforderung ohne Überweisung nach 40 Tagen ist eine Nachfrage bei Expedia wert. Ist ein Aufenthalt bezahlt, erfassen Sie die Zahlung in Ihrem Hotelverwaltungssystem, damit Little Hotelier keinen offenen Saldo zeigt, den der Gast gar nicht schuldet.

## Der schnellere Weg: Expedia-Collect-Zahlungen aus Hotelier Tools anfordern (Beta)

Hotelier Tools verbindet sich mit Ihrem Partner-Central-Konto und übernimmt die Runde oben für Sie. Es liest jeden Expedia-Aufenthalt, zeigt, wo das Geld steht, und bittet Expedia um Zahlung, von Hand oder nach Zeitplan.

### 1. Partner Central verbinden

Öffnen Sie **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). Die Anmeldung läuft in einem Browser auf dem Server: Hotelier Tools gibt E-Mail und Passwort ein, und Sie beantworten nur, was Expedia fragt.

- **I have a login** (Ich habe einen Login): Geben Sie Anmelde-E-Mail und Passwort ein. Auf einem neuen Gerät schickt Expedia einen Code per E-Mail, den Sie in das Feld **Code from Expedia** eintippen. Spätere Anmeldungen nutzen das gespeicherte Gerät und brauchen normalerweise keinen Code.
- **I have an invitation link** (Ich habe einen Einladungslink): Sauberer ist ein eigener Partner-Central-Nutzer für Hotelier Tools. Laden Sie ihn aus Ihrem Konto ein und fügen Sie dann den Link aus der Einladungs-E-Mail von Expedia unverändert ein. Der Assistent legt das Passwort an (12 bis 64 Zeichen, mit Groß- und Kleinbuchstaben, einer Zahl und einem Sonderzeichen) und das Profil, das Expedia verlangt, inklusive Telefonnummer.

Jeder Schritt, den der Assistent nicht kennt, etwa eine SMS-Einrichtung oder eine Sicherheitsprüfung, zeigt ein Bild der Seite: Sie klicken darauf und tippen ins Feld. **Keep me signed in** ist immer angehakt, und die Sitzung wird verschlüsselt gespeichert. Die Aufgabe **Keep Expedia signed in** (alle 20 Minuten) nutzt sie, damit sie nicht abläuft, und meldet sich nie selbst an. Läuft die Sitzung ab, meldet sich eine Person erneut an.

### 2. Den Zahlungsstatus jedes Aufenthalts sehen

Die Karte **Expedia Collect payments** auf derselben Seite listet jeden Expedia-Aufenthalt mit Abreise im gewählten Zeitraum. Wählen Sie **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year** oder **Last year**, oder einen beliebigen Zeitraum bis 366 Tage. Expedia wird in Abschnitten von 31 Tagen gelesen, genau wie das Formular von Partner Central selbst.

Jeder Aufenthalt bekommt einen Status, mit einem Chip, der die Liste filtert:

| Status | Bedeutung |
|---|---|
| **To request** | Abgereist, nichts bezahlt, nie angefordert: Sie können ihn jetzt anfordern |
| **Not yet** | Noch nicht abgereist, oder nichts anzufordern |
| **Requested** | Aus Hotelier Tools angefordert; Expedia hat ihn angenommen und eine Queue-ID vergeben |
| **Refused by Expedia** | Expedia hat mit einem Fehler geantwortet; eine Person kann erneut anfordern |
| **Check in Partner Central** | Keine lesbare Antwort: Sehen Sie in Partner Central nach, bevor Sie erneut anfordern |
| **Reconciled by Expedia** | Von hier angefordert; laut Expedias Abrechnungen ist der Betrag akzeptiert und die Zahlung steht noch aus |
| **Paid by Expedia** | Von hier angefordert; Expedias Abrechnungen nennen Datum und gezahlten Betrag |
| **Paid** / **Invoiced** | Laut Expedias eigenen Daten wurde ein Betrag gezahlt, oder der Aufenthalt ist abgerechnet |
| **Not in Expedia's list** | Von Hand in Partner Central angefordert oder per automatischer Auszahlung bezahlt |
| **Virtual card** | Belasten Sie die Karte: Es gibt nichts anzufordern |
| **Hotel Collect** | Der Gast bezahlt Sie direkt |

Haken Sie die Aufenthalte an oder nutzen Sie das Kästchen zum Auswählen aller und drücken Sie **Request payment for N stays**. Nach Ihrer Bestätigung sendet Hotelier Tools eine einzige Anforderung für alle, dieselbe **Create Invoice**-Anforderung wie Partner Central. Jeder Aufenthalt wird vorher reserviert, sodass er nie zweimal gesendet wird. **Details** zeigt, was Expedia zu einem Aufenthalt sagt, und den Verlauf der Anforderung.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-states.webp" alt="Karte Expedia Collect payments in Hotelier Tools für Abreisen vom 7. Oktober bis 5. November 2026: die Chips All 7, To request 2 (224,08 €), Refused by Expedia 1, Check in Partner Central 1, Requested 1, Reconciled by Expedia 1 und Cancelled 1, sieben Demo-Aufenthalte mit Betrag, Status, wer angefordert hat (Check at check-out oder Demo Manager) und Expedia-Queue-IDs, darüber die Schaltfläche Request payment" caption="Jeder Expedia-Aufenthalt im gewählten Zeitraum und wo sein Geld steht. Haken Sie die anzufordernden an und fordern Sie sie in einem Schritt an." path="/credentials/expedia-extranet"}
::

### 3. Nach Zeitplan laufen lassen

Drücken Sie auf **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`) die Schaltfläche **Every day at 09:30** (der empfohlene Zeitplan) oder wählen Sie mit **Choose** Ihre eigene Uhrzeit. Damit entsteht die Aufgabe **Request Expedia Collect payments**. Sie startet im Modus **Preview**: Jeder Lauf schreibt in sein Protokoll, welche Aufenthalte er anfordern würde, und sendet nichts. Wenn die Liste stimmt, stellen Sie **What a run does** auf **Request: ask Expedia to pay** um.

| Einstellung | Standard | Was sie bewirkt |
|---|---|---|
| **Days after check-out** | 1 | Fordert an, sobald die Abreise so viele Tage zurückliegt |
| **Look back (days)** | 30 | Wie weit zurück nach Abreisen gesucht wird |
| **Most per stay** | Keine Grenze | Ein Aufenthalt mit höherem Betrag bleibt für eine Person liegen |
| **Most stays per run** | 20 | Der Rest wartet auf den nächsten Lauf |

Was sie nie tut: sich bei Partner Central anmelden, für einen Aufenthalt zweimal anfordern, einen per virtueller Karte bezahlten oder noch nicht abgereisten Aufenthalt anfordern, oder einen Aufenthalt erneut anfordern, den Expedia abgelehnt oder nicht beantwortet hat. Diese bleiben für eine Person liegen, und das Protokoll des Laufs nennt sie.

::screenshot{src="/images/blog/demo/en/expedia-collect-preview-run.webp" alt="Details des Laufs der Aufgabe Request Expedia Collect payments am 5. November 2026, Status Success, mit der Ergebniszusammenfassung: Preview, nothing sent: 1 stay would be requested from Expedia (54.08 EUR): EXP-2570209049. 2 stays Expedia refused or did not answer before are left for a person" caption="Im Modus Preview schreibt jeder Lauf, welche Aufenthalte er anfordern würde, und sendet nichts. Die von Expedia abgelehnten Aufenthalte bleiben für eine Person liegen." path="/credentials/expedia-extranet/automatic-requests"}
::

Nutzen Sie bereits die Prüfungen **When they leave** (beim Check-out)? Deren Prüfung **Expedia Collect payment** warnt vor einem noch nicht angeforderten Betrag. Ist die Korrektur **Request the payment from Expedia (asks Expedia for money)** eingeschaltet, sendet sie die Anforderung, sobald der Gast abreist. Beides kann gleichzeitig aktiv sein: Ein Aufenthalt wird nur einmal reserviert.

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="Seite der Prüfungen When they leave: die Prüfungen Address and origin validation und Automatic check-out, dann die ausgeschaltete Prüfung Expedia Collect payment mit dem, was sie kann (vor einem noch nicht angeforderten Betrag warnen und mit eingeschalteter Korrektur Expedia einmal pro Aufenthalt fragen) und was sie nicht tut (einen abgelehnten Aufenthalt erneut anfordern, virtuelle Karten belasten)" caption="Der Check-out-Moment kann Expedia bei jeder Abreise um Zahlung bitten, einmal pro Aufenthalt." path="/automated-checks/moment/at_checkout"}
::

### 4. Den Verlauf verfolgen

**Expedia payments** (`/automated-checks/expedia-payments`) ist das Register jeder Anforderung aus Hotelier Tools: von einer Person, der geplanten Aufgabe, der Check-out-Prüfung, einem Assistenten oder der API. Filtern Sie nach Status, **Who asked** und Abreisedaten, und öffnen Sie eine Zeile, um jede Reservierung und jede Antwort von Expedia zu sehen. **Ask again** wiederholt die Aufenthalte, die Expedia abgelehnt hat. Bei einem Aufenthalt ohne Antwort haken Sie zuerst **I checked Partner Central and these stays are not there** an, denn doppelt anzufordern könnte bedeuten, doppelt bezahlt zu werden.

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-history.webp" alt="Verlaufsseite Expedia payments: die Filter Search, Who asked und Abreisedatum, die Chips Requested 12, Refused by Expedia 1, Check in Partner Central 1 und Sending 0, eine Schaltfläche Ask again und die Anforderungen: Lucas Alvarez von Expedia abgelehnt, weil der Betrag nicht zur Reservierung passte, Chiara Larsen angefordert mit Queue-ID, Sean Bianchi ohne lesbare Antwort, in Partner Central zu prüfen, und von der Prüfung beim Check-out angeforderte Aufenthalte" caption="Jede Anforderung aus Hotelier Tools, wer angefordert hat und was Expedia geantwortet hat. Abgelehnte und unbeantwortete Aufenthalte lassen sich erneut anfordern." path="/automated-checks/expedia-payments"}
::

Bei einer Expedia-Buchung (`EXP-` gefolgt vom Bestätigungscode) hat der Bereich **Payments** der Reservierung ein Panel **Expedia payment** mit **Check with Expedia** und einen Link, der die Zahlungskarte mit diesem Aufenthalt angehakt öffnet.

Sie können auch den KI-Assistenten des Dashboards fragen, oder Claude und ChatGPT über den [MCP-Server](/blog/what-is-mcp-server-hotels). „Welche Expedia-Zahlungen wurden diesen Monat abgelehnt?“ ruft `list_expedia_payment_requests` auf. „Frag Expedia noch einmal für EXP-2570237397“ ruft `request_expedia_payments` auf, ein Werkzeug, das Ihre Freigabe braucht: Im Dashboard-Chat zeigt es eine Karte, und nichts wird gesendet, bis Sie bestätigen. Dieselben Abfragen und Anforderungen gibt es in der REST-API.

### Ehrliche Grenzen

- **Beta und neu.** Die Zahlungsanforderungen kamen im November 2026.
- **Ob bezahlt wurde, verfolgt es nur für Anforderungen von hier.** Seit Version 1.71 (November 2026) liest Hotelier Tools die Seite **Statements and invoices** in Partner Central (die letzten 12 Monate) und zeigt eine Anforderung als **Reconciled by Expedia** (akzeptiert, Zahlung ausstehend) oder **Paid by Expedia** (mit Datum und Betrag), auch im Expedia-Bereich der Reservierung. Eine Anforderung, die dort noch nicht steht, bleibt **Requested**.
- **Es belastet nie virtuelle Karten.** Diese Aufenthalte erscheinen als **Virtual card**: Belasten Sie sie an Ihrem Terminal.
- **Es nutzt Ihre eigene Partner-Central-Sitzung.** Die Partnerbedingungen von Expedia schränken automatisierten Zugriff auf Partner Central ein. Hotelier Tools meldet sich als Ihr Nutzer an, nie von selbst, und zwischen Häusern wird nichts geteilt.
- **Die Demo nutzt ein simuliertes Partner Central.** Ihre Expedia-Aufenthalte zeigen jeden Status, und eine dort gesendete Anforderung wird nur im Speicher angenommen: Nichts erreicht Expedia.

::demo-cta{path="/credentials/expedia-extranet"}
::

Alle Prüfungen finden Sie auf der Seite [Automated checks](/tools/bot/automated-checks). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und Ihrem eigenen Expedia-Partner-Central-Login.
::

Siehe auch: [Expedia-Gästenachrichten](/blog/expedia-guest-messages), [OTA-Buchungen fehlen in Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [Booking.com: ungültige Karte oder No-Show](/blog/booking-com-invalid-card-no-show).

## Zusammenfassung

- Expedia Collect heißt: Expedia hält das Geld des Gastes, bis Sie es einfordern.
- Virtuelle Karte: ab dem Anreisedatum mit genau dem Betrag belasten, bevor sie sechs Monate nach der Abreise deaktiviert wird.
- Zahlungsanforderung: **Payments > Request a payment from Expedia Group**, innerhalb von 365 Tagen nach der Abreise; bezahlt wird üblicherweise 30 Tage später.
- Monatlich abgleichen: Abreisen gegen **See all invoices** gegen Ihr Bankkonto.
- Hotelier Tools (Beta) zeigt den Status jedes Aufenthalts und kann Zahlungen nach Zeitplan anfordern, beginnend im Vorschaumodus und ohne je doppelt anzufordern.
