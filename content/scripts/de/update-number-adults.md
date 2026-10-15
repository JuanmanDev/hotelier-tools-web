---
title: "Anzahl Erwachsene aktualisieren"
description: "Setzt das Feld für Erwachsene auf 2, wenn ein Little-Hotelier-Reservierungsformular mit 0 Erwachsenen öffnet, damit keine Buchung ohne Gäste entsteht."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-number-adults/from.png"
  after: "/images/scripts/update-number-adults/to.png"
  gallery:
    - "/images/scripts/update-number-adults/from.png"
    - "/images/scripts/update-number-adults/to.png"
---

Dieses Skript ändert die Standardanzahl der Erwachsenen bei einer neuen Little-Hotelier-Reservierung von 0 auf 2. Es ist für Rezeptionsmitarbeiter gedacht, die spontane und telefonische Buchungen von Hand anlegen, bei denen die meisten Reservierungen für zwei Personen sind und ein vergessenes Feld für Erwachsene später Probleme macht.

## Das Problem, das es löst

Wenn Sie im Front Desk eine Reservierung anlegen, kann das Feld für Erwachsene mit 0 beginnen. Ändert es niemand, wird die Buchung ohne Erwachsene gespeichert. Null Erwachsene können die Gästemeldung, die Frühstückszahlen und eine pro Person erhobene Kurtaxe durcheinanderbringen, und die nachträgliche Korrektur heißt, jede Reservierung zu suchen und erneut zu öffnen.

## Was sich ändert

- Beim Laden einer Reservierungsseite prüft das Skript das Feld für die **Anzahl der Erwachsenen**.
- Steht dort 0, setzt das Skript den Wert auf 2 und teilt Little Hotelier mit, dass sich der Wert geändert hat, als hätten Sie ihn eingetippt.
- Steht dort eine andere Zahl, bleibt sie unverändert, sodass bestehende Reservierungen nicht angetastet werden.
- Sie können den Wert vor dem Speichern weiterhin auf 1, 3 oder eine andere Zahl ändern.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com und wird nur aktiv, wenn das Feld für Erwachsene auf der Seite vorhanden ist. Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateNumberAdults.user.js).

## Gut zu wissen

- Der Wert 2 ist fest im Code hinterlegt. Verkauft Ihre Unterkunft überwiegend Einzelzimmer oder Betten, bearbeiten Sie die Zahl im Tampermonkey-Editor.
- Die Prüfung läuft einmal, eine halbe Sekunde nach dem Laden der Seite. Öffnet sich ein Reservierungsformular später ohne Neuladen der Seite, wird das Feld nicht geändert.
- Es ändert nur das Feld im Formular. Gespeichert wird erst, wenn Sie auf Save klicken.
- Die Anzahl der Kinder wird nicht geändert.
- Es funktioniert auf Desktop und Touchscreens gleich. Es speichert nichts und sendet nichts irgendwohin.

## Verwandte Themen

- [Tägliche Checkliste für die Hotelrezeption mit Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
- [Little Hotelier Tipps und versteckte Funktionen](/blog/little-hotelier-tips)
