---
title: "Automatische Reservierungsprüfungen für Little Hotelier"
---

Automatische Prüfungen lesen Ihre Little-Hotelier-Reservierungen zu fünf Zeitpunkten des Aufenthalts und melden, was zu korrigieren ist: kein Zimmer zugewiesen, ein offener Betrag, ein fehlender Ausweis oder eine fehlende Adresse oder ein Gast auf Ihrer Nicht-erneut-buchen-Liste. Die Probleme landen auf einer Seite Issues, und jeder Lauf sendet Ihnen eine Berichts-E-Mail.

## So funktioniert es

Jeder Zeitpunkt ist eine eigene geplante Aufgabe, die eine andere Auswahl an Reservierungen liest:

- **Nach der Buchung:** gestern und heute gebucht. Prüft Zimmer, Ausweis, Adresse und die Nicht-erneut-buchen-Liste.
- **Vor der Anreise:** Check-in von heute bis 7 Tage im Voraus (einstellbar von 1 bis 60). Prüft Zimmer, Zahlung und die Nicht-erneut-buchen-Liste.
- **Bei der Anreise:** Check-in heute. Prüft Ausweis, Adresse und Zimmer.
- **Während des Aufenthalts:** Check-in in den letzten 7 Tagen (einstellbar). Prüft Ausweis und Adresse.
- **Bei der Abreise:** Check-out heute. Prüft Ausweis, Adresse und offenen Betrag.

Öffnen Sie einen Zeitpunkt unter **Automated Checks** (`/automated-checks`), schalten Sie seine Prüfungen ein oder aus und klicken Sie auf **Save and activate task**. Probleme erscheinen unter `/automated-checks/issues`, nach Reservierung gruppiert. Korrigieren Sie die Buchung in Little Hotelier und klicken Sie auf **Verify**: Die Prüfungen laufen für diese eine Reservierung erneut, und das Problem wird geschlossen.

Die **Do-not-rebook list** (`/automated-checks/watchlist`) gleicht jede Nacht neue Buchungen und kommende Anreisen mit den Gästen ab, die Sie markiert haben. Ein Treffer wird zu einem Problem und einer Zeile im Bericht.

Den gesamten Ablauf finden Sie in [der Checkliste für die Rezeption](/blog/hotel-front-desk-checklist-automation). Wie Sie die Liste rechtmäßig führen, steht in [der Anleitung zur Do-not-rent-Liste](/blog/hotel-do-not-rent-list).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**.
- Einen eingeschalteten Zeitpunkt zum Start. **Before they arrive** ist der empfohlene erste, weil er einen Aufenthalt ohne Zimmer erkennt, solange noch Zeit bleibt, eines zuzuweisen.
- Berichtsempfänger, festgelegt unter **Settings > Notifications** (`/settings/notifications`).

## Grenzen und Gutes zu wissen

- **Status: Beta.**
- **Sie schlagen nur Alarm.** Keine Prüfung bearbeitet, storniert oder belastet eine Buchung, und ein Treffer auf der Nicht-erneut-buchen-Liste weist nie einen Gast ab. Die Ausnahme ist der optionale automatische Check-out, der in Little Hotelier schreibt und standardmäßig ausgeschaltet ist.
- **Höchstens einmal pro Stunde je Aufgabe**, weil sich jeder Lauf bei Little Hotelier anmeldet.
- **Drei Prüfungen bleiben manuell:** ungültige Booking.com-Karten, Gästezahlen und Ankunftszeiten. Siehe [was bei einer ungültigen Karte oder einem No-Show zu tun ist](/blog/booking-com-invalid-card-no-show).
- Läuft Ihr Little-Hotelier-Passwort ab, pausieren die Aufgaben, statt es erneut zu versuchen, bis Sie das neue speichern.
