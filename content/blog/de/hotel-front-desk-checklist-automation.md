---
title: "Checkliste Rezeption Hotel für Little Hotelier: 8 Probleme vor der Anreise erkennen"
seoTitle: "Checkliste Rezeption Hotel: täglich mit Little Hotelier"
description: "Tägliche Checkliste für die Rezeption mit Little Hotelier: 8 Reservierungsprobleme vor der Anreise, wo Sie sie finden und wie Sie fünf automatisieren."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [checkliste rezeption hotel, checkliste check-in hotel, rezeption checkliste vorlage, little hotelier nicht zugewiesene reservierungen, automatisierung hotel, hotel rezeption tägliche aufgaben]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Seite Automated Checks in Hotelier Tools: wie die Prüfungen in vier Schritten funktionieren, ein Hinweis Nothing runs any check yet, der Before they arrive vorschlägt, und The journey of a reservation durch ihre fünf Phasen"
faq:
  - q: "Was sollte eine Hotelrezeption jeden Tag prüfen?"
    a: "Bei den Anreisen von heute und morgen: ein zugewiesenes Zimmer, bezahlter Saldo, gültige Karte, ein Ausweisdokument, eine Anschrift, die richtige Personenzahl, eine Ankunftszeit und kein Treffer auf Ihrer Sperrliste. Bei den heutigen Abreisen: der Saldo und alles, was die Rechnung braucht."
  - q: "Wie finde ich Buchungen ohne Zimmer in Little Hotelier?"
    a: "Öffnen Sie Front Desk > Reservations, filtern Sie nach Check-in-Datum und achten Sie auf eine leere Spalte Room. Der Kalender zeigt oben außerdem einen Zähler für nicht zugewiesene Buchungen."
  - q: "Wie oft können die automatischen Prüfungen laufen?"
    a: "Jede Prüfaufgabe hat ihren eigenen Zeitplan. Die empfohlenen laufen einmal am Tag, und eine Aufgabe kann höchstens einmal pro Stunde laufen, weil jeder Lauf sich in Little Hotelier anmeldet."
  - q: "Ändert oder storniert Hotelier Tools meine Reservierungen?"
    a: "Nein. Die Prüfungen geben nur Warnungen aus. Die einzige Ausnahme ist der automatische Check-out, der in Little Hotelier schreibt und ausgeschaltet ist, bis Sie ihn einschalten."
  - q: "Kann ich diese Checkliste ausdrucken?"
    a: "Ja. Kopieren Sie die Tabelle in diesem Leitfaden in ein Dokument oder exportieren Sie die gefilterten Anreisen aus Front Desk > Reservations als CSV und drucken Sie diese."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Es ist ein unabhängiges Dashboard, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels."
---

Prüfen Sie jeden Tag bei den Anreisen von heute und morgen acht Dinge: ein zugewiesenes Zimmer, bezahlter Saldo, gültige Karte, ein Ausweisdokument, eine Anschrift, die richtige Personenzahl, eine Ankunftszeit und kein Treffer auf Ihrer Sperrliste. In Little Hotelier passen die meisten auf einen Bildschirm: **Front Desk > Reservations**, nach Check-in-Datum gefiltert. Hotelier Tools prüft fünf der acht automatisch zu fünf Zeitpunkten des Aufenthalts und schickt Ihnen per E-Mail nur, was behoben werden muss.

## Die 8 Reservierungsprobleme, die Sie vor der Anreise eines Gastes erkennen sollten

1. **Kein Zimmer zugewiesen.** Eine Buchung ohne Zimmernummer übersieht man leicht, bis der Gast an der Rezeption steht.
2. **Offener Saldo.** Sie wollen vor der Anreise wissen, ob Sie kassieren, eine Anzahlung nachfordern oder einen Zahlungslink senden.
3. **Ungültige Karte bei einer Booking.com-Buchung.** Booking.com gibt dem Gast eine Frist, die Karte zu aktualisieren. Bemerken Sie es zu spät, bleiben Ihnen weniger Möglichkeiten.
4. **Fehlendes Ausweisdokument.** Viele Länder verlangen es für die Gästemeldung. Siehe [Meldepflicht für Gäste nach Land](/blog/guest-registration-rules-by-country).
5. **Fehlende Anschrift oder fehlendes Land.** Nötig für die Meldung, für amtliche Statistiken wie Spaniens INE-Erhebung und für eine korrekte Rechnung.
6. **Falsche Personenzahl.** Null Erwachsene oder zwei Gäste in einer Buchung für vier können Meldung, Frühstück und eine pro Person erhobene Kurtaxe durcheinanderbringen.
7. **Keine Ankunftszeit.** Späte Anreisen und Self-Check-in brauchen am Vortag einen Plan.
8. **Ein Gast, den Sie nicht wieder aufnehmen wollten.** Besser, Sie wissen es vor der Anreise. Siehe [Sperrliste für Gäste rechtssicher führen](/blog/hotel-do-not-rent-list).

Kopieren Sie diese Tabelle als Ihre druckbare Checkliste:

| Prüfung | Wo Sie in Little Hotelier nachsehen | In Hotelier Tools automatisiert |
|---|---|---|
| Zimmer zugewiesen | Spalte **Room** in Reservations, Zähler für nicht zugewiesene Buchungen im Kalender | Ja |
| Saldo bezahlt | Spalte **Outstanding** in Reservations | Ja |
| Gültige Karte (Booking.com) | Channel Manager > Reservierung > **Manage Reservation** | Nein |
| Ausweisdokument | Reservierung > Reiter **Guests** | Ja |
| Anschrift und Land | Reservierung > Reiter **Details** und **Guests** | Ja |
| Personenzahl | Spalte **Occupants** in Reservations | Nein |
| Ankunftszeit | Spalte **ETA** in Reservations | Nein |
| Treffer auf der Sperrliste | Ihre eigene Liste | Ja |

## So prüfen Sie sie in Little Hotelier, ohne jede Buchung zu öffnen

1. Gehen Sie zu **My Apps > Front Desk > Reservations**.
2. Stellen Sie den Datumstyp auf **Check-in date**, wählen Sie heute und morgen (oder die kommende Woche), setzen Sie den Status auf **Confirmed** und klicken Sie auf **Search**.
3. Lesen Sie die Spalten durch: ein leeres **Room**, die Anzahl bei **Occupants**, eine leere **ETA** und alles, was bei **Outstanding** steht.
4. Lieber auf Papier? Klicken Sie auf **Export** für eine CSV. Telefonnummern der Gäste sind aus Sicherheitsgründen nicht in der Datei.

Quelle: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

Ausweisdokumente und Anschriften sind der langsame Teil. Sie stehen in den Reitern **Details** und **Guests** jeder Reservierung ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), Sie müssen also jede Anreise öffnen.

### Ungültige Booking.com-Karten

Öffnen Sie in Little Hotelier die Buchung unter **Channel Manager > Reservations**, gehen Sie zum Reiter **Manage Reservation** und klicken Sie auf **Report payment card as invalid to Booking.com** ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

Stand Oktober 2026 hat der Gast dann 24 Stunden, die Karte zu aktualisieren. Bei Buchungen innerhalb von 48 Stunden vor dem Check-in sind es 12 Stunden oder bis 15 Uhr am Anreisetag, je nachdem, was zuerst eintritt. Tut er es nicht, können Sie bis 15 Uhr (Ihrer Ortszeit) am Anreisetag stornieren ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). Deshalb gehören Karten auf die Liste für den Vorabend. Komplette Anleitung: [Booking.com Kreditkarte ungültig oder No-Show](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Kostenlose Skripte, die diesen Bildschirm schneller machen"}
[Full Width Reservation Table](/tools/ui/full-width-reservation-table) zeigt alle Spalten ohne seitliches Scrollen. [Update Number Adults](/tools/ui/update-number-adults) setzt neue Buchungen auf 2 Erwachsene, damit keine 0 durchrutscht. Mehr unter [kostenlose Chrome-Erweiterungen für Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## Am Vorabend oder am selben Tag: Wann welche Prüfung laufen sollte

Manche Probleme brauchen Zeit zur Behebung (eine Karte, ein Zimmer), andere lassen sich erst prüfen, wenn der Gast vor Ihnen steht (der Ausweis). Hotelier Tools teilt den Aufenthalt in fünf Zeitpunkte, jeder mit eigener geplanter Aufgabe:

| Zeitpunkt | Welche Reservierungen gelesen werden | Was geprüft wird |
|---|---|---|
| Nach einer Buchung | Gestern und heute gebucht | Zimmer, Ausweis, Anschrift, Sperrliste |
| Vor der Anreise | Check-in von heute bis 7 Tage im Voraus (1 bis 60, Ihre Wahl) | Zimmer, Zahlung, Sperrliste |
| Bei der Anreise | Check-in heute | Ausweis, Anschrift, Zimmer |
| Während des Aufenthalts | Check-in in den letzten 7 Tagen (anpassbar) | Ausweis, Anschrift |
| Bei der Abreise | Check-out heute | Ausweis, Anschrift, Saldo |

Eine einfache Regel: Zimmer, Zahlungen und Karten am Vorabend, Ausweis und Anschrift am Anreisetag, der Saldo am Abreisetag.

## So automatisieren Sie die Checkliste mit Hotelier Tools

1. Registrieren Sie sich bei [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) und verbinden Sie Little Hotelier unter **Credentials**.
2. Öffnen Sie **Automated Checks** (`/automated-checks`). Läuft noch nichts, schlägt die Seite vor, mit **Before they arrive** zu beginnen: Damit erkennen Sie einen Aufenthalt ohne Zimmer, solange noch Zeit zum Zuweisen bleibt.
3. Öffnen Sie einen Zeitpunkt, schalten Sie seine Prüfungen ein oder aus und klicken Sie auf **Save and activate task**. Das erstellt die geplante Aufgabe mit dem empfohlenen Zeitplan, zum Beispiel jede Nacht um 23:30 für „After a booking is made“.
4. Probleme erscheinen unter **Issues** (`/automated-checks/issues`), nach Reservierung gruppiert. Filtern Sie nach offenen Problemen, Prüfart oder Aufenthaltsdaten.
5. Beheben Sie die Reservierung in Little Hotelier und klicken Sie dann auf **Verify**. Die Prüfungen laufen für genau diese Reservierung erneut, und das Problem schließt sich, sobald es behoben ist.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="Zeitpunkt When they arrive in Hotelier Tools: die noch nicht eingerichtete Aufgabenkarte mit Every 3 hours, Choose und Run now, die Schaltfläche Save and activate task und die eingeschalteten Prüfungen ID / passport (police register), physical room assignment und address and origin validation" caption="Jeder Zeitpunkt des Aufenthalts hat eigene Prüfungen und einen eigenen Zeitplan. Hier: When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Seite Issues mit 20 offenen, 5 behobenen und 25 Problemen insgesamt, Filtern für offene Probleme, Prüfart und Aufenthaltsdaten und Reservierungen mit einer Warnung zu einem offenen Saldo bei der Anreise und einer Schaltfläche Verify" caption="Probleme nach Reservierung gruppiert. Beheben Sie sie in Little Hotelier und klicken Sie dann auf Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## Wie die Berichts-E-Mail aussieht

Jeder Lauf sendet **eine Berichts-E-Mail pro Aufgabe**, in der Sprache, die Sie für diese Aufgabe festgelegt haben: eine klare Zusammenfassung dessen, was der Lauf gefunden hat, gut lesbar am Handy. Jedes Problem steht außerdem unter **Issues**, die E-Mail ist also Ihr Anstoß und das Dashboard der Ort, an dem Sie arbeiten. Gemeinsame Empfänger, etwa der Inhaber und die Rezeption, legen Sie unter **Settings > Notifications** (`/settings/notifications`) fest.

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Einstellungsseite Report recipients in Hotelier Tools mit einer gemeinsamen Adresse im Feld Addresses, einer vorgeschlagenen Adresse zum Hinzufügen und dem Hinweis, dass der Bericht jeder geplanten Aufgabe an diese Liste geht, sofern die Aufgabe keine eigene nennt" caption="Die Seite Report recipients in den Einstellungen: Gemeinsame Adressen erhalten die Berichts-E-Mail jeder Prüfaufgabe." path="/settings/notifications"}
::

## Grenzen, und was die Prüfungen nie ändern

- **Sie warnen nur.** Keine Prüfung bearbeitet, storniert oder belastet eine Buchung. Die Ausnahme ist der optionale **automatische Check-out**, der in Little Hotelier schreibt und standardmäßig aus ist.
- **Höchstens einmal pro Stunde je Aufgabe.** Jeder Lauf meldet sich in Little Hotelier an, daher beträgt das Mindestintervall 60 Minuten.
- **Sie pausieren sicher.** Läuft Ihr Passwort für Little Hotelier ab, pausieren geplante Aufgaben von selbst, statt es erneut zu versuchen, was Ihr Konto vor einer Sperre schützt. Das Dashboard zeigt „Automated jobs are paused“, bis Sie das neue Passwort unter **Credentials** speichern oder auf **Check now & resume** klicken.
- **Drei Prüfungen bleiben manuell.** Karten, Personenzahl und Ankunftszeiten werden nicht automatisch geprüft, lassen Sie sie also auf Ihrer Morgenliste.

Jede Aufgabe steht unter **Cron Jobs** (`/cron`) und jeder Lauf unter **Run History** (`/cron-logs`). Die Funktion ist in der Beta-Phase. Mehr zur Planung auf der Seite [Automations](/tools/bot/automations) und die komplette Funktion unter [Automated checks](/tools/bot/automated-checks).

## Zusammenfassung

- Prüfen Sie vor jeder Anreise acht Dinge: Zimmer, Saldo, Karte, Ausweis, Anschrift, Personenzahl, Ankunftszeit und Ihre Sperrliste.
- In Little Hotelier zeigt die Liste **Reservations**, nach Check-in-Datum gefiltert, vier davon auf einen Blick. Ausweis und Anschrift erfordern, jede Reservierung zu öffnen.
- Hotelier Tools prüft Zimmer, Zahlung, Ausweis, Anschrift und die Sperrliste zu fünf Zeitpunkten des Aufenthalts, listet Probleme unter **Issues** auf und verschickt einen Bericht per E-Mail.
- Beginnen Sie mit **Before they arrive** und ergänzen Sie dann die anderen Zeitpunkte.
