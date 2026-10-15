---
title: "Stil für Touchscreens verbessern"
description: "Little Hotelier auf dem Tablet leichter bedienen: größere Menüs Print und Email, hervorgehobene Fußzeilen-Buttons und immer sichtbares Entfernen von Zimmern."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

Dieses Skript passt den Reservierungsbildschirm von Little Hotelier an Touchscreens an, etwa ein Tablet an der Rezeption. Es vergrößert die Menüs Print und Email, hebt ihre Buttons hervor und zeigt den Button zum Entfernen von Zimmern, der sonst nur erscheint, wenn die Maus darüber schwebt. Es ist für Rezeptionsteams gedacht, die mit Tablets oder Touch-Monitoren arbeiten.

## Das Problem, das es löst

Der Reservierungsbildschirm von Little Hotelier ist für die Maus gemacht. Die Optionen Print und Email öffnen sich in kleinen Popover-Menüs mit kleiner Schrift, die mit dem Finger schwer zu treffen sind. Der Button zum Entfernen eines Zimmers aus einer Reservierung bleibt verborgen, bis Sie mit der Maus über das Zimmer fahren, und ein Touchscreen kennt kein Hovern, sodass der Button auf einem Tablet schwer erreichbar ist.

## Was sich ändert

Auf dem Reservierungsbildschirm im Front Desk:

- **Button zum Entfernen von Zimmern:** Der runde Button, mit dem ein Zimmer aus der Reservierung entfernt wird, ist immer sichtbar.
- **Menüs Print und Email:** Die Einträge dieser Popover-Menüs nutzen deutlich größere Schrift (30 Pixel), und die Menüs werden breiter, damit sie hineinpassen.
- **Buttons in der Fußzeile:** Die Buttons Print und Email in der Fußzeile der Reservierung erhalten einen hellblauen Hintergrund und mehr Abstand, sodass sie leicht zu finden und anzutippen sind.
- **Menü Email invoice:** Das kleine Info-Symbol neben der Rechnungsoption wird ausgeblendet.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey im Browser Ihres Tablets oder Computers, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com. Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js).

## Gut zu wissen

- Tampermonkey muss im Browser des Tablets verfügbar sein. Testen Sie die Einrichtung auf Ihrem eigenen Gerät, bevor Sie sich an der Rezeption darauf verlassen.
- Die Änderungen gelten auch auf einem Desktop-Computer. Der Button zum Entfernen von Zimmern ist nun immer sichtbar, achten Sie also darauf, ihn nicht versehentlich anzuklicken.
- Es ändert nur Stile. Es ändert nicht, was ein Button bewirkt, und speichert nichts.
- Die neueren Bildschirme unter application.littlehotelier.com, etwa der Kalender, sind nicht betroffen.
- Für touchfreundlichere Gästeformulare vergrößert auch [Easy Save Province and Country](/tools/ui/easy-save-province-country) die Buttons zum Hinzufügen und Aufklappen von Gästen.

## Verwandte Themen

- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
