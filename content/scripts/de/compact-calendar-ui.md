---
title: "Kompakte Kalender-Benutzeroberfläche"
description: "Strafft den Little-Hotelier-Kalender: Datum in einer Zeile statt drei und schmalere Zimmertyp-Zeilen, damit mehr Zimmer und Tage auf den Bildschirm passen."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/compact-calendar-ui/from.png"
  after: "/images/scripts/compact-calendar-ui/to.png"
  gallery:
    - "/images/scripts/compact-calendar-ui/from.png"
    - "/images/scripts/compact-calendar-ui/to.png"
---

Dieses Skript entfernt leeren Platz aus dem Little-Hotelier-Kalender, sodass mehr Zimmer ohne Scrollen auf den Bildschirm passen. Es ist für Rezeptionsmitarbeiter gedacht, die den Kalender den ganzen Tag geöffnet haben und die gesamte Unterkunft oder zumindest den Großteil auf einen Blick sehen wollen.

## Das Problem, das es löst

Der Standardkalender braucht viel vertikalen Platz, bevor die erste Buchung erscheint. Die Kopfzeile jedes Tages stapelt ihre Informationen auf drei Zeilen, jeder Zimmertyp hat eine eigene hohe Überschriftszeile, und die Navigations- und Filterleiste fügen zusätzliche Abstände hinzu. Auf einem Laptop-Bildschirm schiebt das Zimmer aus dem sichtbaren Bereich, sodass Sie auf und ab scrollen, um die Verfügbarkeit zu prüfen, während ein Gast wartet.

## Was sich ändert

Alle Änderungen sind rein visuell und werden mit Stilen vorgenommen, die der Seite hinzugefügt werden:

- **Datumskopfzeilen:** Wochentag und Datum stehen nebeneinander in einer Zeile, statt auf drei Zeilen gestapelt zu sein.
- **Kopfzelle oben links:** Ihre Höhe wird begrenzt, sodass die Kopfzeile niedrig bleibt.
- **Überschriftszeilen der Zimmertypen:** niedriger, mit transparentem Hintergrund und ohne Rahmen, sodass sie zwischen den Zimmern weniger Platz brauchen.
- **Button zum Ein- oder Ausklappen aller Zeilen:** Innen- und Außenabstände werden entfernt.
- **Navigation und Filter:** Die Abstände über der Datumsnavigation und unter den Filteroptionen werden verringert.

Die Buchungsbalken und die Zimmerzeilen selbst bleiben unverändert. Nur Abstände und das Layout der Kopfzeile ändern sich.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie den Kalender neu. Schritt-für-Schritt-Bilder finden Sie in der [Installationsanleitung](/tools/ui/instructions). Das Skript erfasst app.littlehotelier.com und application.littlehotelier.com, seine Stile wirken sich aber nur auf die Kalendertabelle und ihre Symbolleiste aus. Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/compactCalendarUI.user.js).

## Gut zu wissen

- Es fügt seine Stile einmal beim Laden der Seite hinzu. Es liest oder speichert keine Buchungsdaten.
- Es ändert nicht die Anzahl der angezeigten Tage. Nutzen Sie dafür die eigenen Zeitraumoptionen von Little Hotelier.
- Es funktioniert mit der Maus und auf Touchscreens gleich.
- Es arbeitet zusammen mit [Prices Display](/tools/ui/prices-display), das den Preis jeder Nacht unter jedem Zimmertyp im selben Kalender anzeigt.
- Ändert Little Hotelier das Layout des Kalenders, wirken einige Anpassungen möglicherweise nicht mehr, bis das Skript aktualisiert wird. Schalten Sie es im Tampermonkey-Menü aus, falls etwas falsch aussieht.

## Verwandte Themen

- [Prices Display](/tools/ui/prices-display)
- [Little Hotelier Tipps und versteckte Funktionen](/blog/little-hotelier-tips)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
