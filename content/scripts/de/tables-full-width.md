---
title: "Tabellen in voller Breite"
description: "Lässt Tabellen im Direct-Booking-Extranet von Little Hotelier die volle Bildschirmbreite nutzen und hebt die Zeile unter der Maus für bessere Lesbarkeit hervor."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

Dieses Skript verbreitert die Tabellen im Direct-Booking-Extranet von Little Hotelier, dem Back Office der Buchungsmaschine unter app.thebookingbutton.com, sodass sie die gesamte Bildschirmbreite nutzen. Es ist für Inhaber und Mitarbeiter gedacht, die dort auf einem Laptop oder großen Monitor Direktreservierungen, Berichte und Inventory prüfen.

## Das Problem, das es löst

Direct Booking hält seine Seiten in einer Spalte fester Breite. Reservierungslisten und Berichte werden in diese Spalte gepresst, Gästenamen werden abgeschnitten, und auf einem breiten Monitor bleibt die halbe Bildschirmfläche leer, während Sie seitlich durch eine Tabelle scrollen. Lange Tabellen sind außerdem schwer über eine Zeile hinweg zu verfolgen, ohne die Orientierung zu verlieren.

## Was sich ändert

Auf Seiten des Direct-Booking-Extranets:

- **Hauptinhaltsbereich:** nicht mehr von fester Breite, sodass sich Tabellen über den Bildschirm ausdehnen.
- **Reservierungsliste:** Die Spalte mit dem Gästenamen ist in der Breite nicht mehr begrenzt, sodass vollständige Namen angezeigt werden.
- **Hauptcontainer:** darf die volle Fensterbreite nutzen.
- **Berichte:** nutzen die volle Breite der Seite.
- **Inventory:** erhält eine größere Maximalbreite und wird zentriert, damit es sich auf sehr breiten Bildschirmen nicht zu weit streckt.
- **Zeilenhervorhebung:** In Datentabellen erhält die Zeile unter dem Mauszeiger einen hellgrauen Hintergrund, was das Lesen über die Zeile hinweg erleichtert.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Direct Booking neu. Die [Installationsanleitung](/tools/ui/instructions) enthält Schritt-für-Schritt-Bilder. Das Skript läuft nur auf Seiten des Direct-Booking-Extranets (app.thebookingbutton.com/extranet/...), das Front Desk ist also nicht betroffen. Es ist kostenlos und Open Source: [Den Code auf GitHub ansehen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Gut zu wissen

- Auf einem kleinen Laptop oder einem Tablet ist der Unterschied gering, weil die Seite den Bildschirm ohnehin ausfüllt.
- Die Zeilenhervorhebung folgt dem Mauszeiger und ist deshalb vor allem am Computer nützlich.
- Es fügt beim Laden der Seite nur Stilregeln hinzu. Es speichert nichts und sendet nichts irgendwohin.
- Für denselben Effekt auf der Seite Reservations im Front Desk installieren Sie [Full Width Reservation Table](/tools/ui/full-width-reservation-table).
- Gestaltet Little Hotelier Direct Booking neu, wirken einige dieser Anpassungen möglicherweise nicht mehr, bis das Skript aktualisiert wird.

## Verwandte Themen

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
