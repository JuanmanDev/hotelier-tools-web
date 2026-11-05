---
title: "Zahlungslinks in Little Hotelier: So senden Sie einen, ziehen Anzahlungen ein und erinnern Gäste an offene Beträge"
seoTitle: "Little Hotelier: Zahlungslink und Zahlungserinnerungen"
description: "Zahlungsanfragen aus Little Hotelier senden, Anzahlungen einrichten, Gäste automatisch an Restbeträge erinnern, ohne bei Booking.com Bezahltes zu fordern."
date: 2026-10-28
category: invoicing
tags: [zahlungen, zahlungslink, little hotelier, siteminder pay, anzahlungen, automatisierung]
keywords: [little hotelier zahlungslink, little hotelier zahlungsanfrage senden, little hotelier pay zahlungsanfrage, siteminder pay zahlungslink, zahlungserinnerung hotel e-mail, gast an restzahlung vor anreise erinnern, little hotelier anzahlung, little hotelier ota paid booking.com vorausbezahlt]
feature: automated-checks
demoPath: /automated-checks/payments
cover: /images/blog/demo/en/payment-links-modal.webp
coverAlt: "Fenster Payment link in Hotelier Tools für die Buchung BBN-DEMO102550: 759,55 Euro offen, das Feld für den Betrag, ein nicht angehaktes Kästchen SiteMinder Pay emails it to mit der E-Mail-Adresse des Gastes, der Hinweis Valid for 48 hours, die Schaltfläche Create payment link und keine früheren Zahlungslinks"
faq:
  - q: "Wie sende ich einen Zahlungslink aus Little Hotelier?"
    a: "Öffnen Sie die Reservierung im Front Desk und klicken Sie auf Send Payment Request. Füllen Sie Betrag, Grund und Nachricht aus, klicken Sie auf Create request und senden Sie den Link dann per E-Mail-Vorlage oder kopieren Sie ihn für Chat oder SMS. Little Hotelier Pay muss eingeschaltet sein."
  - q: "Wie lange ist ein Zahlungslink von Little Hotelier gültig?"
    a: "48 Stunden ab der Erstellung. Danach sieht der Gast, dass die Anfrage nicht mehr aktiv ist. Eine Anfrage lässt sich nicht bearbeiten: Ändert sich der Betrag, stornieren Sie sie und erstellen eine neue."
  - q: "Kann ich für eine Booking.com- oder Expedia-Buchung eine Zahlungsanfrage senden?"
    a: "Nur, wenn Sie das Geld selbst einziehen. Die Zahlungsanfragen von Little Hotelier funktionieren nicht bei Channel-Collect-Buchungen oder virtuellen Karten der OTA. Einen Gast, der bei Booking.com vorausbezahlt hat oder über Expedia Collect gebucht hat, sollten Sie nur um das bitten, was im Haus dazugekommen ist."
  - q: "Verschickt Little Hotelier automatisch Zahlungserinnerungen?"
    a: "Das Hilfecenter beschreibt automatische Anzahlungen für Direktbuchungen und automatische Zahlungen, die eine hinterlegte Karte belasten, aber keine Erinnerungs-E-Mails für offene Beträge. Hotelier Tools ergänzt Regeln für Zahlungserinnerungen, mit demselben Zahlungslink."
  - q: "Belastet Hotelier Tools die Karte des Gastes?"
    a: "Nein. Ein Zahlungslink bittet den Gast nur, auf der sicheren Seite von SiteMinder zu bezahlen. Hotelier Tools sieht oder speichert nie Kartennummern und belastet nie eine Karte."
  - q: "Gehört Hotelier Tools zu Little Hotelier oder SiteMinder?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels."
---

Um in Little Hotelier einen Zahlungslink zu senden, öffnen Sie die Reservierung und klicken auf **Send Payment Request**. Geben Sie den Betrag ein, klicken Sie auf **Create request** und senden Sie den Link per E-Mail oder kopieren Sie ihn. Little Hotelier Pay muss eingeschaltet sein, und der Link ist 48 Stunden gültig. Little Hotelier hakt nicht für Sie nach. Die Zahlungserinnerungen von Hotelier Tools tun es: An den Tagen, die Sie wählen, schicken sie Gästen mit offenem Betrag einen Link für das, was sie noch schulden.

Die folgenden Bildschirme von Little Hotelier wurden im November 2026 mit dem Hilfecenter abgeglichen.

## So senden Sie eine Zahlungsanfrage in Little Hotelier

Zahlungsanfragen gehören zu **Little Hotelier Pay**, dem eingebauten Zahlungsdienst von Little Hotelier. Die Anfragen laufen über die Zahlungsplattform von SiteMinder, deshalb heißen sie in den Bildschirmen von Hotelier Tools **SiteMinder Pay**. Schalten Sie es zuerst unter **Front Desk > Setup > Guest Payment Options > Payment Gateways** ein. Mit einem Zahlungsgateway eines Drittanbieters funktionieren Anfragen nicht ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests)).

**Am Computer:**

1. Öffnen Sie die Reservierung im Front Desk und klicken Sie auf **Send Payment Request**.
2. Prüfen Sie Reservierung, Gastnamen und Betrag und fügen Sie einen Grund und eine Nachricht für den Gast hinzu.
3. Klicken Sie auf **Create request**.
4. Für den Versand per E-Mail wählen Sie die E-Mail-Vorlage, prüfen die Adresse des Gastes, klicken auf **Preview email** und dann auf **Send request**. Oder kopieren Sie den Link und fügen Sie ihn in WhatsApp, eine SMS oder eine E-Mail ein.

**In der mobilen App:** Öffnen Sie die Reservierung, tippen Sie auf **Take payment**, füllen Sie den Reiter **Request** aus, wählen Sie E-Mail, SMS oder Link und tippen Sie auf **Send request**.

Was Sie vor dem Senden wissen sollten:

- **48 Stunden.** Der Link ist 48 Stunden gültig. Danach sieht der Gast, dass die Anfrage nicht mehr aktiv ist.
- **Keine Änderungen.** Ändert sich der Betrag, stornieren Sie die Anfrage und erstellen eine neue. Stornieren Sie sie auch, wenn die Buchung storniert wird.
- **Wo Sie sie verfolgen.** **My apps > Payments > Payment requests** listet jede Anfrage auf. Unter **Actions** können Sie eine stornieren oder ihren Link kopieren, um ihn erneut zu teilen. Eine bezahlte Anfrage erscheint außerdem im Reiter **Payments** der Reservierung.
- **Zuschläge.** Beim Erstellen einer Anfrage erscheint die Option **Apply surcharge**. Kartenzuschläge sind nicht überall erlaubt, prüfen Sie also die Regeln in Ihrem Land.
- **Nur Hotel Collect.** Anfragen funktionieren nicht bei Channel-Collect-Buchungen oder der virtuellen Karte einer OTA.

## Anzahlungen und Restbeträge: was Little Hotelier automatisiert

Little Hotelier hat zwei automatische Optionen, beide mit Little Hotelier Pay:

| Funktion | Was sie tut | Wo |
|---|---|---|
| **Automatic deposits** (automatische Anzahlungen) | Ihre Buchungsmaschine nimmt eine Anzahlung, wenn ein Gast direkt bucht: **Full amount**, **Percentage**, **First night**, **Fixed amount** oder **No deposit** | **Front Desk > Setup > Guest Payment Options > Property Level Deposits** ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8951681-automatic-deposits)) |
| **Automated payments** (automatische Zahlungen) | Belastet den offenen Betrag auf der hinterlegten Karte des Gastes eine festgelegte Zahl von Tagen vor dem Check-in, beim Check-in oder beim Check-out | **My Apps > Payments > Automated payments > Create a rule** ([FAQ](https://helpcentre.littlehotelier.com/en/articles/8829554-automated-payments-frequently-asked-questions)) |

Automatische Zahlungen brauchen eine Karte, die funktioniert. Schlägt eine Belastung fehl oder gibt es keine Karte, schlägt Little Hotelier vor, eine Zahlungsanfrage zu senden, und ab dann ist es Sache einer Person: senden, warten und eine neue senden, wenn die 48 Stunden abgelaufen sind.

## Bei Booking.com oder Expedia vorausbezahlt? Nicht zweimal fragen

Eine „pre-paid“-Buchung von Booking.com oder eine Expedia-Collect-Buchung wurde an den Kanal bezahlt. Little Hotelier zeigt den Aufenthalt trotzdem als **outstanding** (offen), bis jemand dieses Geld als Zahlung „OTA Paid“ erfasst. Senden Sie auf diesen Saldo eine Erinnerung, bitten Sie den Gast, Nächte noch einmal zu bezahlen, die er schon bezahlt hat.

Es gibt eine zweite Falle. Little Hotelier berechnet die Nächte zu seinen eigenen Raten, während der Gast den Preis des Kanals bezahlt hat (zum Beispiel mit einem Genius- oder Mobilrabatt). Selbst nach dem Erfassen der OTA-Zahlung kann der offene Betrag also zwei Dinge vermischen:

- **An der Rezeption hinzugefügte Nächte** nach der Buchung: Der Kanal hat sie nie verkauft, also bezahlt der Gast sie im Haus.
- **Die Differenz zwischen Ihren Raten und dem Preis des Kanals:** Der Gast hat den Preis des Kanals bereits bezahlt. Diese Differenz muss er nicht zahlen.

Nehmen wir eine vorausbezahlte Buchung über 2 Nächte, die an der Rezeption um eine Nacht zu 75 € verlängert wird. Little Hotelier zeigt vielleicht 88 € offen, aber der Gast schuldet 75 €. Der KI-Assistent von Hotelier Tools liest den Aufenthalt genau so und sagt der Rezeption, was der Gast im Haus schuldet, nicht nur die Zahl aus Little Hotelier. Zu ungültigen Booking.com-Karten und No-Shows siehe [was bei einer ungültigen Karte zu tun ist](/blog/booking-com-invalid-card-no-show).

## Der schnellere Weg: Zahlungserinnerungen mit Link

Die **Payment reminders** (Zahlungserinnerungen, `/automated-checks/payments`, Teil der automatischen Prüfungen, Beta) von Hotelier Tools finden die Buchungen, bei denen noch Geld offen ist, und erinnern den Gast an den Tagen, die Sie wählen, auf Wunsch mit Link. Ihr Team bekommt zusätzlich eine Zusammenfassung. Nichts wird belastet: Der Gast entscheidet, ob er bezahlt.

1. Öffnen Sie **Automated Checks** und die Karte **Payment reminders** oder gehen Sie direkt zu `/automated-checks/payments`. Klicken Sie auf **New rule**. Eine neue Regel ist zunächst ausgeschaltet.
2. Legen Sie unter **Which bookings** den **Minimum outstanding amount** (Mindestbetrag) fest, um einen fehlenden Cent zu überspringen. Wählen Sie, ob bereits bezahlte Anzahlungen übersprungen werden (**Only bookings with nothing paid**) und ob Sie Gäste im Haus einschließen (**Include guests already in the house**). Wählen Sie unter **Channels** **Every channel**, **Only these channels** oder **Every channel except these**.
3. Fügen Sie bis zu sechs **Reminders** (Erinnerungen) hinzu. Jede ist eine Zahl von Tagen vor, am oder nach dem Buchungsdatum, dem Check-in oder dem Check-out. Zum Beispiel: 7 Tage vor dem Check-in, dann 2 Tage vor dem Check-in.
4. Wählen Sie für jede Erinnerung, was der Gast bekommt: **Reminder only**, **Reminder with a payment link** oder **Payment request sent by SiteMinder Pay** (die eigene E-Mail von SiteMinder). Unser Text geht in der Sprache des Gastes hinaus, oder Sie klicken auf **Write my own text**. Schalten Sie **Tell the team** ein, um die Buchung mit einer Notiz in die Zusammenfassung für das Team aufzunehmen.
5. Klicken Sie auf **Preview today**, um zu sehen, welchen Gästen die Regel heute schreiben würde. Die Vorschau liest Little Hotelier und sendet nichts.
6. Schalten Sie die Regel ein und geben Sie ihr einen Zeitplan. Empfohlen ist **Every day at 10:00** (täglich um 10:00 Uhr).

::screenshot{src="/images/blog/demo/en/payment-reminders-rule-editor.webp" alt="Editor für Regeln der Zahlungserinnerungen in Hotelier Tools: ein Hinweis This rule is off, der Name der Regel, der Bereich Which bookings mit Minimum outstanding amount 1, Channels auf Every channel, Only bookings with nothing paid aus und Include guests already in the house an, und der Beginn des Bereichs Reminders" caption="Eine Regel: welche Buchungen sie verfolgt, wann jede Erinnerung hinausgeht und wer davon erfährt. Neue Regeln sind zunächst ausgeschaltet." path="/automated-checks/payments"}
::

### Was es sicher macht

- **Nie zweimal.** Jede Erinnerung wird pro Buchung vor dem Versand erfasst, sodass ein wiederholter Lauf, zwei Zeitpläne oder ein manueller Lauf sie nicht wiederholen können.
- **Eine Erinnerung pro Tag und Gast**, über alle Ihre Regeln hinweg.
- **Nachholen ohne Flut.** Wurde ein Lauf verpasst, geht eine Erinnerung noch bis zu zwei Tage verspätet hinaus. Sind mehrere gleichzeitig fällig, wird nur die letzte gesendet.
- **Der Betrag ist aktuell.** Der Saldo wird direkt vor dem Versand aus der Buchung gelesen, und eine inzwischen bezahlte Buchung bekommt nichts. Stornierte Buchungen und No-Shows werden nie angemahnt.
- **Wiederverwendete Links.** Ein offener Link für dieselbe Buchung und denselben Betrag, der noch mehr als zwei Stunden gültig ist, wird wiederverwendet, statt einen zweiten zu erstellen.
- **Bescheid, wenn bezahlt wurde.** Jeder Lauf verfolgt die Links, die seine Erinnerungen gesendet haben. Wird einer bezahlt, bekommt das Team eine E-Mail „payments received“ (wenn die Regel das Team informiert).

Um eine Erinnerung zu testen, sendet **Send now…** sie an eine einzelne Buchung, egal an welchem Tag. Alles Gesendete steht unter **Activity**: wann, Buchung, Gast oder Team, Status, offener Betrag und der Zustand des Links (**Waiting for payment**, **Paid**, **Expired**, **Cancelled**).

### Vorausbezahlte Aufenthalte werden für Sie berücksichtigt

Steht in der Buchung, dass sie bei Booking.com oder Expedia vorausbezahlt wurde, fordert die Erinnerung nie das Geld des Kanals an:

- **Der Betrag ist belegt** (in den Kommentaren der Buchung angegeben oder genau das verkaufte Zimmer) und der Schalter für die Unterkunft **Register proven OTA prepayments (whole property)** ist an: Hotelier Tools erfasst eine Zahlung „OTA Paid“ in Little Hotelier und fragt dann nur nach hinzugefügten Nächten und Extras.
- **Der Betrag ist nicht belegt** (ein Expedia-Aufenthalt mit Extras, eine andere Währung): keine E-Mail an den Gast. Die Zusammenfassung für das Team listet ihn auf: Prüfen Sie ihn und erfassen Sie die Zahlung.
- **Nichts mehr zu zahlen:** Die Buchung bleibt außen vor.

Wann diese Zahlung erfasst wird, wählen Sie unter **When to register them**: **At the checks (before arrival and at checkout)** (bei den Prüfungen vor der Anreise und beim Check-out) oder **Some hours after arrival** (0 bis 48 Stunden nach der Anreise, standardmäßig 1). Bei der zweiten Option sind Änderungen an der Rezeption beim Check-in, etwa Extras oder ein Zimmerwechsel, schon im Saldo enthalten. Dafür braucht es die stündliche Aufgabe **Register OTA prepayments after arrival**, die Sie selbst planen.

## Ein Link für eine Buchung

Nicht jede Zahlung braucht eine Regel. Öffnen Sie eine Reservierung unter `/reservations/<number>` und klicken Sie unter **Payments** auf **Payment link**. Dieselbe Schaltfläche steht neben einem offenen Betrag in den Tageslisten und im Reservierungspanel des Posteingangs.

1. Das Fenster zeigt, was die Buchung schuldet, und ihre früheren Links, jeweils mit Zustand.
2. Fordern Sie unter **Amount** den vollen Saldo oder einen Teil davon an (zum Beispiel eine Anzahlung).
3. Haken Sie **SiteMinder Pay emails it to …** an, um ihn per E-Mail senden zu lassen, oder lassen Sie es frei und kopieren Sie den Link mit **Copy**, um ihn selbst zu senden.
4. Klicken Sie auf **Create payment link**. Ein offener Link lässt sich im selben Fenster stornieren.

::screenshot{src="/images/blog/demo/en/payment-links-reservation-payments.webp" alt="Bereich Payments einer Reservierung in Hotelier Tools: die Schaltfläche Payment link, eine von Hand am 4. Oktober 2026 erfasste Barzahlung als Anzahlung über 759,55 Euro mit einer Schaltfläche Refund, Still refundable insgesamt 759,55 Euro, keine hinterlegte Karte und das Panel Original booking" caption="Jede Zahlung des Aufenthalts an einem Ort, Zahlungslink und Erstattungen nur einen Klick entfernt." path="/reservations"}
::

Der Bereich **Payments** erledigt auch Erstattungen. Klicken Sie bei einer Zahlung auf **Refund**, geben Sie einen vollen oder teilweisen Betrag ein (Komma oder Punkt funktionieren beide), und Hotelier Tools gleicht ihn mit dem noch erstattbaren Betrag ab, bevor es Little Hotelier einmal anfragt. Bestätigt Little Hotelier nicht, sagt es Ihnen, dass Sie die Reservierung prüfen sollen, bevor Sie erneut erstatten, statt eine zweite Erstattung zu senden.

**Für Entwickler und KI:** Derselbe Link existiert in der REST-API (`POST /api/v1/reservations/{id}/payment-link`, der Gast bekommt nur mit `"notifyGuest": true` eine E-Mail) und als Werkzeug `create_payment_link`, das im KI-Chat um Ihre Freigabe bittet. Über den KI-Chat oder die API lässt sich eine am Kartenterminal der Rezeption angenommene Kartenzahlung im Aufenthalt erfassen, nur mit Kartenmarke und den letzten vier Ziffern. Dabei wird nichts belastet. Eine Anfrage mit etwas, das wie eine vollständige Kartennummer aussieht, wird abgelehnt. Siehe die Seite [REST API und MCP](/tools/bot/api-mcp).

::demo-cta{path="/automated-checks/payments"}
::

Unter **Settings > Team** braucht das Erstellen und Stornieren von Links die Berechtigung **Record payments**, Erstattungen brauchen **Refund payments**, und das Bearbeiten von Regeln braucht **Run payment reminders**. Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels. Zahlungslinks sind die eigenen Zahlungsanfragen von SiteMinder Pay: Der Gast bezahlt auf der Seite von SiteMinder, und keine Kartendaten laufen über Hotelier Tools.
::

Siehe auch: [die Rechnung beim Check-out senden](/blog/send-invoice-to-guest-at-checkout), [die tägliche Checkliste für die Rezeption](/blog/hotel-front-desk-checklist-automation), [Booking.com: ungültige Karte oder No-Show](/blog/booking-com-invalid-card-no-show).

## Zusammenfassung

- In Little Hotelier erstellt **Send Payment Request** an der Reservierung einen Link, der 48 Stunden gültig ist. Er braucht Little Hotelier Pay und funktioniert nur bei Buchungen, die Sie selbst einziehen.
- Anzahlungen für Direktbuchungen und automatische Kartenbelastungen sind eingebaut. Erinnerungs-E-Mails für offene Beträge nicht.
- Die **Payment reminders** von Hotelier Tools schicken Gästen mit offenem Betrag an den Tagen, die Sie wählen, einen Link, nie zweimal, und sagen dem Team, wenn ein Link bezahlt wurde.
- Vorausbezahlte Aufenthalte bei Booking.com und Expedia werden nie erneut um das Geld des Kanals gebeten: nur um Nächte und Extras, die im Haus dazugekommen sind.
