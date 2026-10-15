---
title: "Button für Front Desk Überprüfung aus Direct Booking hinzufügen"
description: "Fügt Direct-Booking-Reservierungen in Little Hotelier einen Button hinzu, der dieselbe Buchung im Front Desk öffnet, um Details und Erstattungen zu prüfen."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

Dieses Skript fügt jeder Reservierung im Direct-Booking-Extranet von Little Hotelier einen Button hinzu, der dieselbe Buchung in einem neuen Tab im Front Desk öffnet. Es ist für Rezeptionsteams und Inhaber gedacht, die Direktbuchungen betreuen und die vollständige Reservierung oder eine Erstattung prüfen müssen, ohne sie von Hand zu suchen.

## Das Problem, das es löst

Direct Booking (das Back Office der Buchungsmaschine unter app.thebookingbutton.com) und Front Desk sind getrennte Bereiche. Wenn ein Gast, der über Ihre Website gebucht hat, wegen einer Änderung oder Erstattung anruft, finden Sie die Buchung in Direct Booking, aber Zimmer, Zahlungen und Gästedaten liegen im Front Desk. Ohne das Skript kopieren Sie die Referenz, wechseln zum Front Desk und suchen von Hand.

## Was sich ändert

- Auf dem Tab **Guest** einer Direct-Booking-Reservierung erscheint in der Aktionsliste ein neuer Button: "View reservation data in Front Desk and check refunds" (oder die spanische Version).
- Der Button öffnet die Liste **Reservations** im Front Desk in einem neuen Tab, bereits nach der Buchungsreferenz der Reservierung gefiltert.
- Die Suche deckt Check-in-Daten von vor zwei Monaten bis ein Jahr im Voraus ab, sodass aktuelle und kommende Aufenthalte gefunden werden.
- Das Skript liest Ihre Property-ID aus dem Front-Desk-Link auf der Seite, sodass die Suche in Ihrer eigenen Unterkunft geöffnet wird.
- Es prüft die Seite alle zwei Sekunden. Wenn Sie zu einer anderen Reservierung wechseln, wird der Button auf die neue Buchungsreferenz aktualisiert.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey. Klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Direct Booking neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft nur auf Reservierungsseiten von Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations). Es ist kostenlos und Open Source: Sie können den [Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js).

## Gut zu wissen

- Das Skript prüft nicht, ob Sie im Front Desk angemeldet sind. Falls nicht, melden Sie sich an und klicken Sie den Button ein zweites Mal.
- Reservierungen mit einem Check-in-Datum, das mehr als zwei Monate zurückliegt oder mehr als ein Jahr in der Zukunft liegt, liegen außerhalb des Suchbereichs und erscheinen nicht in den Ergebnissen.
- Fehlt der Front-Desk-Link auf der Seite, greift das Skript auf eine feste Property-ID im Code zurück, und die Suche öffnet sich nicht in Ihrer Unterkunft. Passen Sie in diesem Fall den Wert im Skript an.
- Der Button-Text existiert nur auf Englisch und Spanisch.
- Es speichert nichts und sendet nichts außerhalb von Little Hotelier.

## Verwandte Themen

- [Tables Full Width](/tools/ui/tables-full-width) für breitere Tabellen in Direct Booking
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
