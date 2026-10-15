---
title: "Kompakte Benutzeroberfläche für Reservierungsdetails"
description: "Entfernt überflüssigen Abstand im Little-Hotelier-Reservierungsfenster und vergrößert das Feld für Gästekommentare, damit Notizen ohne Scrollen lesbar sind."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

Dieses Skript strafft das Layout des Reservierungsfensters im Little Hotelier Front Desk und gibt dem Feld für Gästekommentare mehr Höhe. Es ist für Rezeptionsmitarbeiter gedacht, die täglich viele Reservierungen öffnen und die Notizen von Gästen oder Kollegen lesen wollen, ohne in einem kleinen Feld zu scrollen.

## Das Problem, das es löst

Gästekommentare enthalten oft genau das, was beim Check-in zählt: eine späte Ankunft, ein Kinderbett, einen Parkplatzwunsch, einen besonderen Anlass. Im Standard-Reservierungsfenster ist das Kommentarfeld niedrig, sodass längere Notizen abgeschnitten werden und Sie darin scrollen müssen. Gleichzeitig schieben Abstände am Anfang der Tabs sowie um Hinweisbereiche und Trennlinien die wichtigen Felder weiter nach unten.

## Was sich ändert

Auf dem Reservierungsbildschirm im Front Desk:

- Das Textfeld für **Gästekommentare** ist mindestens 126 Pixel hoch, sodass mehrere Zeilen Notizen gleichzeitig sichtbar sind.
- Der Abstand am Anfang des Inhalts der Reservierungstabs wird entfernt.
- Leere Platzhalter für Hinweise erzeugen keinen Abstand mehr.
- Die horizontalen Trennlinien verlieren ihren zusätzlichen Abstand.

Felder, Buttons und Tabs bleiben an ihrem Platz. Nur die Abstände und die Höhe des Kommentarfelds ändern sich.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) enthält Bilder zu jedem Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com, und seine Stile wirken sich nur auf das Reservierungsfenster aus. Es ist kostenlos und Open Source: [Der Code liegt auf GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Gut zu wissen

- Es funktioniert, indem beim Laden der Seite einige Stile hinzugefügt werden. Es liest, ändert oder speichert keine Reservierungsdaten.
- Notizen, die länger als die neue Höhe sind, scrollen weiterhin wie gewohnt im Feld.
- Es funktioniert auf Desktop und Touchscreens gleich. Für ein Tablet kombinieren Sie es mit [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), das die Menüs Print und Email vergrößert.
- Es passt auch gut zu [Easy Save Province and Country](/tools/ui/easy-save-province-country), das auf den Gästeformularen desselben Fensters arbeitet.
- Ändert Little Hotelier das Reservierungsfenster, wirken einige Abstandsanpassungen möglicherweise nicht mehr, bis das Skript aktualisiert wird.

## Verwandte Themen

- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens)
- [Tägliche Checkliste für die Hotelrezeption mit Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
