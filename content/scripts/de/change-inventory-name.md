---
title: "Inventarname ändern"
description: "Benennt das Menü Inventory in Little Hotelier in Inventory - Prices um (auch auf Spanisch), damit neue Rezeptionsmitarbeiter wissen, wo sie Zimmerpreise ändern."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

Dieses kleine Skript benennt den Punkt **Inventory** im oberen Menü von Little Hotelier in **Inventory - Prices** um (auf Spanisch **Inventario - Precios**). Es ist für Inhaber gedacht, die neue Rezeptionsmitarbeiter einarbeiten: Die Beschriftung zeigt, dass auf diesem Bildschirm die Preise festgelegt werden und nicht nur die Zimmerverfügbarkeit.

## Das Problem, das es löst

In Little Hotelier werden Zimmerpreise im Bildschirm Inventory bearbeitet. Für Neulinge klingt "Inventory" nach Lagerbestand oder Zimmeranzahl, also suchen sie ein Menü "Prices" oder "Rates", das es nicht gibt. Eine klarere Beschriftung erspart dieselbe Frage bei jedem Schichtwechsel.

## Was sich ändert

- Im horizontalen Navigationsmenü der neueren Little-Hotelier-Bildschirme wird der Punkt "Inventory" zu "Inventory - Prices".
- Ist das Menü auf Spanisch, wird aus "Inventario" der Text "Inventario - Precios".
- Der Zusatz richtet sich nach der Sprache der Seite: Spanische Seiten erhalten "Precios", jede andere Sprache "Prices".
- Nur die sichtbare Beschriftung ändert sich. Der Link führt weiterhin zum selben Bildschirm Inventory.
- Da das Menü schrittweise lädt, versucht das Skript es in den ersten Sekunden nach dem Laden der Seite dreimal und fügt den Zusatz nie doppelt ein.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey. Klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft nur auf application.littlehotelier.com, der Adresse der neueren Little-Hotelier-Bildschirme wie dem Kalender. Es ist kostenlos und Open Source: [Den Code auf GitHub ansehen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js).

## Gut zu wissen

- Es erkennt den Menüpunkt nur, wenn er genau "Inventory" oder "Inventario" lautet. Ist Little Hotelier auf eine andere Sprache eingestellt, etwa Französisch oder Deutsch, bleibt die Beschriftung unverändert.
- Es ändert nur das obere Navigationsmenü. Seiten auf app.littlehotelier.com und Direct Booking werden nicht erfasst, ihre Menüs bleiben unverändert.
- Es funktioniert auf Desktop und Touchscreens gleich.
- Es speichert nichts und sendet nichts irgendwohin.
- Benennt Little Hotelier das Menü um oder gestaltet es neu, ändert sich die Beschriftung möglicherweise nicht mehr, bis das Skript aktualisiert wird.

## Verwandte Themen

- [Prices Display](/tools/ui/prices-display) zeigt Ihre Preise aus Inventory im Kalender an
- [Dynamische Preisgestaltung für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [Little Hotelier Tipps und versteckte Funktionen](/blog/little-hotelier-tips)
