---
title: "Booking.com- oder Expedia-Reservierung fehlt in Little Hotelier: Ursachen, Prüfungen und wie Sie eine Überbuchung vermeiden"
seoTitle: "Booking.com- oder Expedia-Buchung fehlt in Little Hotelier?"
description: "Warum eine OTA-Buchung nie in Little Hotelier ankommt, wo Sie den Zustellstatus prüfen, wie Sie das Zimmer schützen und wie Sie eine Warnung erhalten."
date: 2026-10-29
category: operations
tags: [booking.com, expedia, channel manager, überbuchung, little hotelier, siteminder]
keywords: [booking.com buchung nicht in little hotelier, expedia buchung nicht im channel manager, little hotelier reservierung fehlt, siteminder reservierung nicht übertragen, booking.com reservierung nicht im pms, überbuchung channel manager, reservierung erneut an little hotelier senden, booking.com buchung fehlt im channel manager]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "Reservierungskalender von Hotelier Tools vom 4. bis 17. November 2026: Zimmer nach Typ gruppiert mit bestätigten und eingecheckten Buchungen als Balken, eine Zeile No room yet, Zimmer 104 wegen Wartung gesperrt und die Legende mit Checked in, Checked out, Confirmed, Double booked und Room closed"
faq:
  - q: "Warum wird eine Booking.com-Reservierung nicht in Little Hotelier angezeigt?"
    a: "Meist ist das gebuchte Zimmer oder die Rate im Channel Manager von Little Hotelier nicht gemappt oder deaktiviert, die Buchung lief unter einem anderen Unterkunftscode, oder die Zustellung ist fehlgeschlagen. Prüfen Sie den Zustellstatus unter My apps > Channel Manager > Reservations."
  - q: "Wie sende ich eine fehlgeschlagene Reservierung erneut an Little Hotelier?"
    a: "Klicken Sie unter My apps > Channel Manager > Reservations auf die Reservierungsnummer, öffnen Sie im Fenster Booking summary den Reiter Little Hotelier und klicken Sie auf Resend PMS message. Eine Reservierung ohne Zustellstatus lässt sich nicht erneut senden: Legen Sie sie von Hand an."
  - q: "Was sollte ich zuerst tun, wenn eine Buchung fehlt?"
    a: "Das Zimmer schützen. Legen Sie die Reservierung von Hand unter Front Desk > Calendar mit den Daten aus dem Extranet an. Das senkt die Verfügbarkeit auf allen Kanälen. Danach finden Sie heraus, warum sie nicht angekommen ist."
  - q: "Sagt mir Booking.com, wenn eine Reservierung meinen Channel-Manager nicht erreicht?"
    a: "Ja. Booking.com schickt der Unterkunft eine E-Mail, wenn es ein Problem gab, eine Reservierung in das System des Connectivity-Anbieters zu übertragen. Halten Sie Ihre Kontaktdaten im Extranet also aktuell. Die Reservierung selbst steht immer im Extranet."
  - q: "Wie schnell warnt Hotelier Tools bei einer fehlenden Buchung?"
    a: "Bei Expedia läuft die Prüfung alle 15 Minuten und meldet eine Buchung, die nach 30 Minuten immer noch fehlt und in mindestens zwei Abfragen fehlte: etwa 30 bis 45 Minuten nach der Buchung. Jede Buchung wird einmal gemeldet und noch einmal, wenn sie ankommt. Bei Booking.com meldet sie derzeit nur Störungen bei Reservierungen."
  - q: "Gehört Hotelier Tools zu Little Hotelier, SiteMinder, Booking.com oder Expedia?"
    a: "Nein. Hotelier Tools ist unabhängig, steht mit keinem davon in Verbindung und wird von keinem unterstützt oder empfohlen. Es liest Ihre Extranets und Little Hotelier mit Ihren eigenen Logins und legt nie eine Reservierung an, ändert oder storniert sie."
---

Fehlt eine Booking.com- oder Expedia-Buchung in Little Hotelier, ist sie fast immer an einer von drei Stellen hängen geblieben: Das Zimmer oder die Rate ist im Channel Manager nicht gemappt (oder deaktiviert), die Buchung ging an einen anderen Unterkunftscode, oder die Zustellung ist fehlgeschlagen. Prüfen Sie ihren Status unter **My apps > Channel Manager > Reservations** und senden Sie sie erneut, wenn sie fehlgeschlagen ist. Egal, was die Ursache ist: Legen Sie die Buchung zuerst von Hand an, damit das Zimmer nicht doppelt verkauft wird.

Die folgenden Bildschirme von Little Hotelier, Booking.com und Expedia wurden im November 2026 geprüft.

## Warum ist die Buchung nicht in Little Hotelier angekommen?

Eine Buchung reist von der OTA zum Channel-Manager von SiteMinder und von dort in den Front Desk von Little Hotelier. Sie kann an jeder Station hängen bleiben. Die üblichen Ursachen, laut dem [Leitfaden zu fehlenden Reservierungen](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings) von Little Hotelier und dem [Synchronisierungsleitfaden](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager) von Booking.com:

| Ursache | Woran Sie sie erkennen |
|---|---|
| **Rate oder Zimmer nicht gemappt** | Der Gast hat eine Rate gebucht, die im Channel Manager nicht verbunden ist. Die Buchung hat überhaupt keinen Zustellstatus. |
| **Rate oder Kanal deaktiviert** | Deaktivierte Einträge senden keine Updates, aber die OTA verkauft weiter mit der alten Verfügbarkeit. |
| **Gebucht, bevor die Rate gemappt war** | Buchungen, die vor dem Aktivieren oder Mappen einer Kanalrate eingingen, synchronisieren sich nicht von selbst. |
| **Falscher Unterkunftscode** | Ein zweites Extranet-Konto unter einem anderen Code. Seine Buchungen erreichen Little Hotelier nie. |
| **Zustellung fehlgeschlagen** | Der Channel-Manager hat die Buchung erhalten, aber Little Hotelier hat sie abgelehnt oder nicht bestätigt. |
| **Störung auf Seiten der OTA** | Die Reservierungs-API der OTA ist ausgefallen. Neue Buchungen, Änderungen und Stornierungen kommen eine Zeit lang nicht an. |

Denken Sie auch an Änderungen und Stornierungen. Sie nehmen denselben Weg. Eine verlorene Stornierung blockiert ein Zimmer, das Sie verkaufen könnten. Eine verlorene Datumsänderung setzt den Gast auf die falschen Nächte. Beides beheben Sie gleich: Vergleichen Sie die Buchung im Extranet mit Little Hotelier.

Eine Buchung, die bei null Verfügbarkeit angenommen wurde, ist ein anderes Problem. Little Hotelier rät, die OTA zu fragen, warum sie sie angenommen hat, und beim Support das Protokoll der an diesen Kanal gesendeten Verfügbarkeitsupdates als Nachweis anzufordern.

## So prüfen Sie den Zustellstatus in Little Hotelier

1. Gehen Sie zu **My apps > Channel Manager > Reservations**. Mit dem Filter **All PMS status** sehen Sie den Zustellstatus jeder Buchung.
2. Lesen Sie den Status ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: Little Hotelier hat sie angenommen. Finden Sie sie trotzdem nicht, suchen Sie im Front Desk nach dem Gastnamen und dem richtigen Jahr und wenden Sie sich dann an den Support.
   - **PENDING**: noch nicht empfangen. Das erledigt sich meist innerhalb weniger Minuten.
   - **FAILED**: abgelehnt oder nicht bestätigt. Den Fehler erhalten Sie zusätzlich per E-Mail.
   - **Kein Status**: Die Rate ist nicht gemappt. Sie lässt sich nicht erneut senden, legen Sie sie also von Hand an.
3. Um eine fehlgeschlagene Buchung erneut zu senden, klicken Sie auf ihre Nummer. Öffnen Sie im Fenster **Booking summary** den Reiter **Little Hotelier** und klicken Sie auf **Resend PMS message**.

Fehlschläge erscheinen außerdem unter der Glocke, in **Reservation delivery failures**. Beheben Sie dann die Ursache unter **My apps > Channel Manager > Channels > Configure**: nicht gemappte Raten mappen, deaktivierte wieder aktivieren und prüfen, dass **Rates Mapped** zweimal dieselbe Zahl zeigt (zum Beispiel 44/44). Eine Rate, die immer wieder mit „Unable to locate“ fehlschlägt, wurde auf Seiten der OTA gelöscht oder geändert und muss neu gemappt werden ([Mapping-Fehler](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors)).

## So prüfen Sie bei Booking.com und Expedia

**Booking.com.** Jede Buchung steht in der Liste **Reservations** des Extranets, egal, was danach passiert ist. Laut Booking.com kann eine Buchung bei Ihrem Anbieter fehlen, wenn das Zimmer oder die Rate dort noch nicht verbunden ist, oder nach einem technischen Problem. Außerdem schickt es Ihnen eine E-Mail, wann immer es eine Buchung nicht in das System Ihres Anbieters übertragen konnte. Halten Sie Ihre Kontaktdaten im Extranet also aktuell ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)). Fehlen mehrere Buchungen auf einmal, schauen Sie auf der öffentlichen [Statusseite für Connectivity](https://connect.booking.com/status) von Booking.com nach einer Störung bei Reservierungen.

**Expedia.** Öffnen Sie die Reservierungsseite in Partner Central, suchen Sie nach Bestätigungsnummer oder Daten und notieren Sie Zimmer und Rate, die der Gast gebucht hat. Steht die Buchung in Partner Central, aber nicht in Little Hotelier, liegt die Lücke zwischen Expedia und SiteMinder: Prüfen Sie, ob SiteMinder noch Ihr Connectivity-Anbieter für Raten und Reservierungen ist und ob die Rate gemappt ist.

In beiden Fällen kann Little Hotelier die OTA nicht für Sie kontaktieren. Stimmt das Mapping und sagt die OTA, sie habe die Buchung gesendet, fordern Sie bei der OTA das XML-Zustellprotokoll der Reservierung an und schicken es an den Support von Little Hotelier.

## So vermeiden Sie eine Überbuchung, während Sie nachforschen

1. **Legen Sie die Buchung von Hand an.** Klicken Sie unter **Front Desk > Calendar** auf das Anreisedatum, wählen Sie **Add Reservation** und übernehmen Sie die Daten aus dem Extranet. Das Anlegen senkt Ihre Verfügbarkeit auf allen Kanälen.
2. **Denken Sie daran, dass sie manuell ist.** Spätere Änderungen oder Stornierungen dieser Buchung müssen Sie ebenfalls von Hand im Front Desk vornehmen. Kommt das Original später doch an, achten Sie darauf, nicht beide zu behalten.
3. **Schon voll?** Bitten Sie die OTA, den Gast umzubuchen.
4. **Verhindern Sie, dass die Ursache wiederkommt.** Mappen Sie jede Rate, die Sie verkaufen, achten Sie auf deaktivierte Kanäle und erwägen Sie einen Stop-Sell auf schwächeren Kanälen, wenn nur noch ein Zimmer frei ist.

## Der schnellere Weg: eine Warnung, wenn eine OTA-Buchung fehlt

Von Hand prüfen funktioniert, sobald Sie wissen, dass eine Buchung fehlt. Das Schwierige ist, es zu wissen. Hotelier Tools vergleicht alle 15 Minuten die eigene Reservierungsliste von Expedia mit Little Hotelier und schickt Ihnen eine E-Mail zu einer Buchung, die nicht ankommt. Für Booking.com meldet es heute Störungen bei Reservierungen; der Abgleich Buchung für Buchung ist noch nicht fertig (mehr dazu unten).

1. Verbinden Sie das Extranet unter **Credentials** (Zugangsdaten): **Expedia Partner Central** (`/credentials/expedia-extranet`) oder **Booking.com extranet** (`/credentials/booking-extranet`).
2. Halten Sie die Sitzung auf derselben Seite mit **Keep Expedia signed in** (bei Booking.com **Keep the session signed in**) aktiv. Eine abgelaufene Sitzung kann die Prüfung nicht lesen.
3. Planen Sie auf ihrer Karte **Check Expedia reservations are in Little Hotelier** (oder die Booking.com-Variante) mit der empfohlenen Einstellung: **Every 15 minutes** (alle 15 Minuten). Sobald das Extranet verbunden ist und angemeldet bleibt, legt Hotelier Tools diese Aufgabe für Sie an.
4. Sorgen Sie dafür, dass die richtigen Personen die E-Mail erhalten: **Settings > Notifications** (`/settings/notifications`). Ohne Adressen dort geht sie an die Kontakt-E-Mail des Inhabers.
5. Kommt die E-Mail, suchen Sie die Buchung im Extranet, legen Sie sie in Little Hotelier an oder sperren Sie das Zimmer für diese Nächte, und beheben Sie dann die Ursache wie oben beschrieben.

Jeder Lauf liest die heute gemachten Buchungen und die Anreisen der nächsten 14 Tage sowie die Reservierungen in Little Hotelier. Expedia-Buchungen werden über ihren Bestätigungscode zugeordnet (`EXP-` plus die Nummer), denselben Code, den Little Hotelier speichert.

### Eine Warnung pro Buchung, nicht eine alle 15 Minuten

Die Zustellung dauert regelmäßig ein paar Minuten, eine einzelne Abfrage reicht also nie. Jede fehlende Buchung kommt in ein Register:

- **Gemeldet nach 30 Minuten, in mindestens zwei Abfragen fehlend.** Das ist etwa 30 bis 45 Minuten nach der Buchung.
- **Einmal gemeldet.** Die E-Mail wird vor dem Versand vorgemerkt, sodass nicht zwei Läufe sie beide senden können. Hat die E-Mail niemanden erreicht, wird die Vormerkung aufgehoben, und der nächste Lauf versucht es erneut.
- **Noch einmal gemeldet, wenn es behoben ist.** Taucht die Buchung in Little Hotelier auf, storniert die OTA sie oder ist der Aufenthalt vorbei, bekommen Sie eine E-Mail „fehlt nicht mehr“.
- **Keine falsche Entwarnung.** Konnte eine Liste nicht vollständig gelesen werden, schlägt der Lauf fehl und sagt das. Nichts gilt als geprüft.

Die Expedia-Prüfung notiert außerdem Abweichungen bei Status und Daten (zum Beispiel bei Expedia storniert, in Little Hotelier aber aktiv) und Buchungen ohne Zimmer. Diese stehen in der Zusammenfassung des Laufs unter **Run History** (Laufverlauf, `/cron-logs`).

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="Reservierungskalender von Hotelier Tools vom 4. bis 17. November 2026: Zimmer nach Typ gruppiert mit bestätigten und eingecheckten Buchungen als Balken, eine Zeile No room yet, Zimmer 104 wegen Wartung gesperrt und die Legende mit Checked in, Checked out, Confirmed, Double booked und Room closed" caption="Der Kalender markiert zwei Buchungen im selben Zimmer als Double booked, so fällt eine bereits passierte Überbuchung sofort auf." path="/reservations/calendar"}
::

### Booking.com: Störungsmeldungen funktionieren, der Abgleich Buchung für Buchung ist nicht fertig

Bevor die Booking.com-Prüfung das Extranet liest, liest sie die öffentliche Statusseite von Booking.com. Eine Störung der Reservierungs-API wird einmal gemeldet, wenn sie beginnt, und einmal, wenn sie behoben ist, auch wenn Ihre Extranet-Sitzung gerade nicht aktiv ist. Genau dann würde es sonst niemand bemerken.

Der Abgleich Buchung für Buchung für Booking.com **funktioniert noch nicht**. Das Extranet baut seine Reservierungsliste per Skript auf, daher erhält Hotelier Tools eine Seite mit der Tabelle, aber ohne Zeilen. Statt „alles in Ordnung“ über Buchungen zu melden, die niemand gesehen hat, schlägt die Prüfung bei jedem Lauf deutlich sichtbar fehl, bis diese Liste gelesen werden kann. Vorerst funktioniert die Warnung pro Buchung für Expedia, und Booking.com liefert Ihnen die Störungsmeldungen.

### Was sie nie tut

- **Sie liest nur**, auf allen Seiten. Sie legt nie eine Reservierung an, ändert oder schließt sie und sperrt nie ein Zimmer für Sie.
- **Nur zwei OTAs.** Airbnb, Hostelworld und andere werden nicht geprüft.
- **Sie ersetzt nicht das Mapping.** Ist eine Rate nicht gemappt, beheben Sie das weiterhin in Little Hotelier.

## Weniger, bessere E-Mails von Ihren anderen Prüfungen

Dieselbe Regel gilt für die anderen Warnungen von Hotelier Tools. Stellen Sie unter **Automated Checks** (automatische Prüfungen, `/automated-checks`) bei einer Aufgabe **Send email on** auf **Only with new or changed issues**: Der Bericht enthält dann nur Probleme, die kein früherer Bericht erwähnt hat oder die sich geändert haben. Und wenn eine Person ein Problem unter **Issues** (`/automated-checks/issues`) als gelöst markiert, bleibt es gelöst, solange die Prüfung dasselbe findet. Ein anderes Problem öffnet einen neuen Eintrag.

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="Seite Issues in Hotelier Tools: die Einführung in vier Schritten (eine Prüfung findet ein Problem, es wird nach Reservierung aufgelistet, Sie beheben es in Little Hotelier, Verify prüft es erneut), Zähler mit 21 offenen, 5 behobenen und 26 Problemen insgesamt, Filter und ein Do-not-rebook-Fehler bei einer Reservierung mit einer Schaltfläche Verify" caption="Von den geplanten Prüfungen gefundene Probleme, nach Reservierung gruppiert. Das Resolved einer Person gilt, bis sich etwas ändert." path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Jede Prüfung finden Sie auf der Seite [Automated checks](/tools/bot/automated-checks).

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu Booking.com, Expedia, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und Ihren eigenen Extranet-Logins.
::

Siehe auch: [die tägliche Checkliste für die Rezeption](/blog/hotel-front-desk-checklist-automation), [der Reservierungskalender für Little Hotelier](/blog/little-hotelier-reservation-calendar), [Zahlungslinks in Little Hotelier](/blog/little-hotelier-payment-links).

## Zusammenfassung

- Eine fehlende OTA-Buchung bedeutet meist eine nicht gemappte oder deaktivierte Rate, den falschen Unterkunftscode oder eine fehlgeschlagene Zustellung.
- Prüfen Sie **My apps > Channel Manager > Reservations**: **FAILED** lässt sich mit **Resend PMS message** erneut senden; **kein Status** bedeutet, dass die Rate nicht gemappt ist.
- Schützen Sie zuerst das Zimmer: Legen Sie die Buchung von Hand unter **Front Desk > Calendar** an und beheben Sie dann die Ursache.
- Hotelier Tools vergleicht Expedia alle 15 Minuten mit Little Hotelier und meldet jede fehlende Buchung einmal per E-Mail, dazu Störungen bei Booking.com-Reservierungen. Der Booking.com-Abgleich Buchung für Buchung ist noch nicht fertig.
