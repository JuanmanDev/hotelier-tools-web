---
title: "Preisanzeige"
description: "Zeigt den Zimmerpreis jeder Nacht im Little-Hotelier-Kalender an, aus Inventory in einem Hintergrund-Tab gelesen, damit Sie Preise ohne Seitenwechsel nennen."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js"
category: "Calendar View"
images:
  before: "/images/scripts/prices-display/from.webp"
  after: "/images/scripts/prices-display/to.webp"
  gallery:
    - "/images/scripts/prices-display/from.webp"
    - "/images/scripts/prices-display/to.webp"
---

Dieses Skript zeigt den Preis jedes Zimmertyps für jede Nacht direkt im Little-Hotelier-Kalender an. Wenn ein Gast anruft und fragt, was der Freitag kostet, sieht die Rezeption den Preis auf demselben Bildschirm wie die Verfügbarkeit, ohne die Seite Inventory zu öffnen. Es ist für Rezeptionsmitarbeiter gedacht, die telefonische und spontane Buchungen entgegennehmen, sowie für Inhaber.

## Das Problem, das es löst

In Little Hotelier liegt die Verfügbarkeit im Kalender und liegen die Preise auf der Seite Inventory. Um einen Preis zu nennen, wechseln Sie den Bildschirm, suchen die richtigen Daten und den richtigen Zimmertyp und gehen dann zurück zum Kalender, um zu buchen. In hektischen Momenten ist das langsam und fehleranfällig.

## Was sich ändert

- Im Kalender zeigt die letzte Zeile jedes Zimmertyps (die Zeile Unallocated) den Preis des Zimmertyps für diese Nacht.
- Die Preise stammen von Ihrer Seite Inventory: Das Skript öffnet sie in einem Hintergrund-Tab, liest die erste Preiszeile jedes Zimmertyps und schließt den Tab wieder.
- Die Seite Inventory deckt jeweils 14 Tage ab, daher liest das Skript sie bei längeren Kalenderansichten in 14-Tage-Blöcken nacheinander.
- Solange ein Preis lädt, zeigt die Zelle "...". Vergangene Daten bleiben leer.
- Preise erscheinen in größerer grauer Schrift, sodass sie sich von Buchungen abheben.
- Beim Wechsel zu anderen Daten werden die Preise für den neuen Zeitraum geladen.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey. Klicken Sie auf dieser Seite auf **Install on Tampermonkey**. Der Installationsbildschirm listet die zusätzlichen Berechtigungen auf, die das Skript nutzt: Damit kann es einen Hintergrund-Tab öffnen und Preise in Tampermonkey speichern. Bestätigen Sie und laden Sie dann den Kalender neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft im Kalender (application.littlehotelier.com) und auf der Seite Inventory, die es liest (app.littlehotelier.com). Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/prices.user.js).

## Gut zu wissen

- Preise werden bis zu einer Stunde im Speicher von Tampermonkey auf Ihrem Computer gehalten und dann neu gelesen. Ein in Inventory geänderter Preis kann bis zu einer Stunde brauchen, bis er im Kalender erscheint.
- Sie müssen bei Little Hotelier angemeldet sein, weil der Hintergrund-Tab Ihre Sitzung nutzt. Ein Tab, der kurz auf- und wieder zugeht, ist normal.
- Es zeigt nur die erste Preiszeile jedes Zimmertyps auf der Seite Inventory, nicht jeden Rate Plan.
- Die Namen der Zimmertypen müssen im Kalender und auf der Seite Inventory übereinstimmen, damit ein Preis erscheint.
- Das Skript startet vier Sekunden nach dem Laden des Kalenders und wartet bis zu 30 Sekunden auf jeden Inventory-Block. Nichts wird außerhalb von Little Hotelier gesendet.

## Verwandte Themen

- [Change Inventory Name](/tools/ui/change-inventory-name)
- [Dynamische Preisgestaltung für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Compact Calendar UI](/tools/ui/compact-calendar-ui)
