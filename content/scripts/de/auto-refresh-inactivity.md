---
title: "Automatische Aktualisierung bei Inaktivität"
description: "Lädt Little Hotelier und Direct Booking nach 10 Minuten ohne Klicks, Scrollen oder Mausbewegung neu, damit die Rezeption nie eine veraltete Seite sieht."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

Dieses Skript lädt die geöffnete Little-Hotelier-Seite nach 10 Minuten ohne Aktivität neu. Es ist für Rezeptionsrechner gedacht, auf denen Little Hotelier den ganzen Tag geöffnet bleibt: Wer an den Empfang zurückkehrt, sieht aktuelle Buchungen und eine funktionierende Sitzung statt einer alten Seite mit Fehlermeldungen.

## Das Problem, das es löst

Eine unberührte Seite zeigt weiter die Daten an, die beim Start geladen wurden. Neue Buchungen, Stornierungen und Zimmerwechsel durch Kanäle oder Kollegen erscheinen erst, wenn jemand neu lädt. Auch die Sitzung kann im Hintergrund ablaufen, und der erste Klick nach einer Pause schlägt dann fehl. Das gewohnheitsmäßige Neuladen ist leicht vergessen, wenn ein Gast am Empfang wartet.

## Was sich ändert

- Beim Laden der Seite startet ein 10-Minuten-Timer.
- Jeder Klick, jede Mausbewegung, jedes Scrollen oder jede Touch-Bewegung auf der Seite startet den Timer neu, sodass die Seite nie neu lädt, solange jemand sie benutzt.
- Vergehen 10 Minuten ohne eine dieser Aktionen, lädt das Skript dieselbe Adresse neu, auf der Sie sich befanden.
- Sonst ändert sich nichts auf der Seite: keine neuen Buttons oder Bereiche.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) führt durch jeden Schritt. Das Skript läuft auf den drei Little-Hotelier-Adressen: app.littlehotelier.com (Front Desk), application.littlehotelier.com (die neueren Bildschirme wie der Kalender) und app.thebookingbutton.com (Direct Booking). Es ist kostenlos und Open Source; den [Code finden Sie auf GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Gut zu wissen

- Ein Neuladen verwirft alles, was noch nicht gespeichert ist. Tastatureingaben zählen nicht als Aktivität: Schreibt jemand 10 Minuten lang eine lange Notiz, ohne die Maus zu berühren, kann die Seite neu laden, bevor gespeichert wurde. Speichern Sie zwischendurch.
- Die Wartezeit von 10 Minuten ist ein fester Wert im Skript (600 Sekunden). Um sie zu ändern, bearbeiten Sie diese Zahl im Tampermonkey-Editor.
- Es funktioniert auf Desktop und Touchscreens gleich, weil auch Touch-Bewegungen und Tippen als Aktivität zählen.
- Es läuft auf jeder passenden Little-Hotelier-Seite, auch im Kalender, in der Reservierungsliste und in Direct Booking.
- Das Skript speichert nichts und sendet nichts irgendwohin.

## Verwandte Themen

- [Little Hotelier Tipps und versteckte Funktionen](/blog/little-hotelier-tips)
- [Tägliche Checkliste für die Hotelrezeption mit Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
