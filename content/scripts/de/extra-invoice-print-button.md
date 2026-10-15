---
title: "Zusätzlicher Rechnungsdruck-Button"
description: "Fügt jeder Little-Hotelier-Reservierung neben dem Menü Print einen Button Print Invoice hinzu, damit die Rezeption die Rechnung mit nur einem Klick druckt."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

Dieses Skript setzt einen Button **Print Invoice** direkt auf den Reservierungsbildschirm von Little Hotelier, neben das vorhandene Menü **Print**. Ein Klick öffnet die Rechnung, ohne dass zuerst ein Menü geöffnet werden muss. Es ist für Rezeptionsmitarbeiter gedacht, die bei fast jedem Check-out eine Rechnung drucken oder herunterladen.

## Das Problem, das es löst

Im Front Desk liegt die Rechnung im Menü Print der Reservierung: Sie öffnen das Menü und wählen dann die Rechnung. Zwei Klicks sind einmal nicht viel, aber beim Check-out, wenn Gäste warten, summiert sich das, und auf einem Tablet übersieht man das kleine Menü leicht. Neue Mitarbeiter wissen auch nicht immer, dass die Rechnung in diesem Menü liegt.

## Was sich ändert

- In der Fußzeile der Reservierung erscheint direkt nach dem Menü-Button **Print** ein neuer Button mit Dokument-Symbol.
- Seine Beschriftung lautet **Print Invoice**, oder **Imprimir Factura**, wenn Little Hotelier auf Spanisch eingestellt ist.
- Ein Klick löst den eigenen Link von Little Hotelier zum Rechnungsdruck aus, denselben, den Sie im Menü Print wählen würden. Das Ergebnis ist exakt die Rechnung, die Little Hotelier erzeugt; das Skript erstellt oder ändert keine Rechnungen.
- Das ursprüngliche Menü Print bleibt mit allen anderen Optionen unverändert.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey. Klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) enthält Bilder zu jedem Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com und fügt den Button nur dort ein, wo der Button Print der Reservierung vorhanden ist. Es ist kostenlos und Open Source: [Den Code auf GitHub ansehen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js).

## Gut zu wissen

- Das Skript sucht in den ersten fünf Sekunden nach dem Laden der Seite mehrmals nach dem Button Print. Fehlt der Button, weil die Reservierung erst später geöffnet wurde, laden Sie die Seite neu.
- Es prüft zuerst, ob sein Button bereits vorhanden ist, sodass Sie nie zwei erhalten.
- Die Beschriftungen gibt es auf Englisch und Spanisch. Andere Oberflächensprachen zeigen die englische Beschriftung.
- Es funktioniert auf Desktop und Touchscreens. Mit [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) erhalten die Buttons in der Fußzeile außerdem einen hervorgehobenen Hintergrund.
- Es speichert nichts und sendet nichts außerhalb von Little Hotelier.

## Verwandte Themen

- [So senden Sie dem Gast beim Check-out die Rechnung](/blog/send-invoice-to-guest-at-checkout)
- [Alle Little-Hotelier-Rechnungen herunterladen](/blog/download-all-little-hotelier-invoices)
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
