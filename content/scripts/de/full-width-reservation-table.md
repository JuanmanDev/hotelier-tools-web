---
title: "Reservierungstabelle in voller Breite"
description: "Dehnt die Reservierungsliste im Little Hotelier Front Desk auf die ganze Bildschirmbreite aus (bis 2000 Pixel), damit Spalten ohne seitliches Scrollen passen."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

Dieses Skript lässt die Liste Reservations im Little Hotelier Front Desk die volle Breite Ihres Monitors nutzen. Es ist für Rezeptionsmitarbeiter und Inhaber gedacht, die auf einem breiten Bildschirm Buchungen suchen und prüfen und genug von einer schmalen Tabelle in der Mitte mit leerem Raum auf beiden Seiten haben.

## Das Problem, das es löst

Die Seite Reservations im Front Desk hält ihren Inhalt in einer Spalte fester Breite. Auf einem großen Monitor wird die Buchungstabelle in diese Spalte gepresst, sodass lange Gästenamen auf mehrere Zeilen umbrechen und manche Spalten seitlich gescrollt werden müssen. Um eine einzelne Buchung zu prüfen, scrollen Sie seitwärts und nach unten, während die Hälfte des Bildschirms leer bleibt.

## Was sich ändert

- Auf der Seite Reservations können die Seitenüberschrift, der Inhaltsbereich und der Hauptcontainer bis zu 2000 Pixel breit werden statt der festen Standardbreite.
- Die Tabelle dehnt sich über den Bildschirm aus, sodass die Spalten mehr Platz haben und lange Gästenamen seltener umbrechen.
- Nichts wird entfernt oder umsortiert: Dieselben Spalten, Filter und Links bleiben an ihrem Platz.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie die Seite Reservations neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt mit Bildern. Das Skript läuft nur auf Front-Desk-Seiten, deren Adresse /reservations enthält (app.littlehotelier.com/extranet/properties/.../reservations). Es ist kostenlos und Open Source: [Der Code liegt auf GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Gut zu wissen

- Auf Bildschirmen, die breiter als 2000 Pixel sind, wächst der Inhalt nur bis zu dieser Breite.
- Auf einem kleinen Laptop oder einem Tablet gibt es kaum oder keinen Unterschied, weil die Seite den Bildschirm ohnehin ausfüllt.
- Da es jede Adresse unter /reservations erfasst, gilt das breitere Layout auch für andere Seiten dieses Bereichs, etwa eine aus der Liste geöffnete Reservierung.
- Es fügt beim Laden der Seite nur eine Stilregel hinzu. Es speichert nichts und sendet nichts irgendwohin.
- Für denselben Effekt bei den Tabellen von Direct Booking installieren Sie [Tables Full Width](/tools/ui/tables-full-width).
- Gestaltet Little Hotelier die Seite Reservations neu, wirkt das breitere Layout möglicherweise nicht mehr, bis das Skript aktualisiert wird.

## Verwandte Themen

- [Tables Full Width](/tools/ui/tables-full-width)
- [Little-Hotelier-Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel)
- [Tägliche Checkliste für die Hotelrezeption mit Little Hotelier](/blog/hotel-front-desk-checklist-automation)
