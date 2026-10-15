---
title: "Ihre Little-Hotelier-Unterkunft in einem Dashboard"
---

Das Hotelier-Tools-Dashboard ist der Bildschirm, auf dem Sie nach der Anmeldung landen: Er zeigt, welche Verbindungen funktionieren, welche Funktionen laufen, wer als Nächstes anreist und was zuletzt passiert ist. Es steht neben Little Hotelier und nutzt den eigenen Little-Hotelier-Login Ihrer Unterkunft, sodass Ihre Buchungen dort bleiben, wo sie sind.

## So funktioniert es

1. **Einmal verbinden.** Unter **Credentials** (`/credentials`) speichern Sie Ihren Little-Hotelier-Login. Er wird verschlüsselt gespeichert (AES-256-GCM). Booking.com, ein Postfach und WhatsApp sind optionale Verbindungen, die Sie später am selben Ort hinzufügen.
2. **Ihre Unterkunftskarte füllt sich von selbst.** Adresse, Zimmer, Steuern und Bedingungen werden aus Little Hotelier gelesen und unter **Settings > Property & AI knowledge** (`/settings/property`) aktuell gehalten. Das Gästepostfach und die öffentliche Wartelistenseite nutzen diese Karte.
3. **Die Startseite zeigt den Stand der Dinge.** Verbindungen, laufende Funktionen, kommende Anreisen und die letzten Aktivitäten stehen auf einem Bildschirm.
4. **Die Suche findet den Rest.** Drücken Sie **Strg+K** (**Cmd+K** auf dem Mac), um Seiten, Wartelisteneinträge, geplante Aufgaben und Unterhaltungen zu durchsuchen. Sie ignoriert Akzente und versteht englische und spanische Wörter für dieselbe Sache: "lista de espera" findet die Availability Queue.

Weitere Zeitsparer für die Rezeption finden Sie unter [Little Hotelier Tipps und versteckte Funktionen](/blog/little-hotelier-tips).

## Was Sie brauchen

- Ein Little-Hotelier-Konto und seinen Login.
- Ein Hotelier-Tools-Konto, erstellt unter [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register). Sie können sich mit einem Passkey anmelden.
- Nichts zu installieren. Es läuft im Browser.

Möchten Sie sich zuerst umsehen? Die [öffentliche Demo](https://demo.hotelier.tools/) nutzt ein erfundenes Hotel, und die Zugangsdaten stehen auf ihrer Anmeldeseite.

## Grenzen und Gutes zu wissen

- **Status: Beta.** Es funktioniert gut und wird noch verfeinert.
- **Unabhängig.** Hotelier Tools ist weder mit SiteMinder oder Little Hotelier verbunden noch von ihnen empfohlen. Es kann nur das tun, was Ihr Little-Hotelier-Login in der Webanwendung kann.
- **Abgelaufene Passwörter pausieren alles.** Funktioniert Ihr Little-Hotelier-Passwort nicht mehr, pausieren die geplanten Jobs, statt es erneut zu versuchen, was Ihr Konto vor einer Sperrung schützt. Speichern Sie das neue Passwort unter **Credentials** oder klicken Sie auf **Check now & resume**.
- **Die Suche spricht zwei Sprachen.** Sie versteht englische und spanische Begriffe.

## Fragen

**Ersetzt es Little Hotelier?**
Nein. Reservierungen, Preise und der Kalender bleiben in Little Hotelier. Das Dashboard liest sie und ergänzt, was Little Hotelier nicht bietet.

**Was kostet es?**
Alle Funktionen sind für jedes Hotel bis zum 10. Januar 2027 kostenlos.
