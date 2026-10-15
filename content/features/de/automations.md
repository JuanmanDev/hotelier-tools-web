---
title: "Geplante Aufgaben für Little Hotelier, mit Protokoll jedes Laufs"
---

Automatisierungen sind die geplanten Aufgaben hinter Hotelier Tools: Reservierungsprüfungen, Rechnungen beim Check-out, die Aktualisierung der Mitbewerberpreise, die Prüfung der Warteliste und das Abrufen des Postfachs laufen von selbst, nach dem Zeitplan, den Sie wählen. Jeder Lauf wird protokolliert, und Fehler erreichen Ihre E-Mail.

## So funktioniert es

1. **Jede Funktion legt ihre eigene Aufgabe an.** Sie beginnen selten mit einem leeren Zeitplan. Zum Beispiel:
   - Automatische Prüfungen: **Save and activate task** setzt den empfohlenen Zeitplan, etwa jede Nacht um 23:30 für neue Buchungen.
   - Rechnung beim Check-out: **Create the daily task (16:00, after check-out)**.
   - Automatischer Check-out: **Create the daily task (15:05)**.
   - Warteliste: **Check every night at 01:00**.
   - Preis-Autopilot: Empfohlen wird alle 3 Stunden.
   - Gästepostfach: Ihre FAQ-Seite kann stündlich neu gelesen werden.
2. **Passen Sie den Zeitplan an.** Führen Sie eine Aufgabe sofort aus, alle paar Minuten, täglich, wöchentlich oder monatlich, innerhalb der Grenzen der jeweiligen Funktion.
3. **Lesen Sie, was passiert ist.** **Cron Jobs** (`/cron`) listet jede Aufgabe auf, und **Run History** (`/cron-logs`) gibt eine lesbare Zusammenfassung dessen, was jeder Lauf getan hat.
4. **Erhalten Sie den Bericht.** Aufgaben wie die Reservierungsprüfungen senden pro Lauf eine Berichts-E-Mail. Gemeinsame Empfänger legen Sie unter **Settings > Notifications** fest.

Wie Aufgaben in der Praxis arbeiten, sehen Sie in [der Checkliste für die Rezeption](/blog/hotel-front-desk-checklist-automation), beim [Senden der Rechnung beim Check-out](/blog/send-invoice-to-guest-at-checkout) und in [der Warteliste für ausgebuchte Termine](/blog/hotel-waitlist-sold-out-dates).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**. Jeder Lauf meldet sich mit diesem Login an.
- Zuerst die Funktion hinter der Aufgabe eingerichtet, etwa die gewünschten Prüfungen oder die beobachteten Termine.

## Grenzen und Gutes zu wissen

- **Status: Beta.**
- **Sichere Pause.** Läuft Ihr Little-Hotelier-Passwort ab, pausieren die Aufgaben, statt es erneut zu versuchen, damit das Konto nie gesperrt wird. Das Dashboard zeigt, dass automatische Jobs pausiert sind, bis Sie das neue Passwort unter **Credentials** speichern oder auf **Check now & resume** klicken.
- **Die Mindestintervalle unterscheiden sich je Aufgabe.** Reservierungsprüfungen laufen höchstens einmal pro Stunde und Job, die Wartelistenprüfung höchstens alle 20 Minuten, und der Preis-Autopilot nicht häufiger als alle 3 Stunden.
- **Eine Aufgabe tut nur, was ihre Funktion tut.** Prüfungen schlagen nur Alarm. Der automatische Check-out schreibt in Little Hotelier und bleibt daher ausgeschaltet, bis Sie ihn anlegen.
- **KI-Assistenten können Aufgaben verwalten.** Über den [MCP-Server](/tools/bot/api-mcp) können Claude oder ChatGPT geplante Aufgaben lesen und ändern.
- **Keine ausgehenden Webhooks.** Ihre eigenen Skripte brauchen einen eigenen Scheduler, etwa einen Cron-Job.
