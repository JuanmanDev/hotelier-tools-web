---
title: "Booking.com Provisionen anzeigen"
description: "Fügt Little-Hotelier-Reservierungen eine geschätzte Booking.com-Provision und einen ungefähren Nettobetrag hinzu (fest 17 % Provision und 1,3 % Gebühr)."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

Dieses Skript fügt dem Reservierungsbildschirm in Little Hotelier eine Schätzung hinzu, was Booking.com von jeder Buchung einbehält. Für Booking.com-Reservierungen zeigt es die Überweisungsgebühr, die Provision, die Gesamtabzüge inklusive Steuer und einen ungefähren Nettobetrag. Es ist für Inhaber und Manager gedacht, die schnell einschätzen wollen, wie viel eine Booking.com-Reservierung tatsächlich einbringt.

## Das Problem, das es löst

Die Reservierungssumme in Little Hotelier ist das, was der Gast zahlt, nicht das, was auf Ihrem Konto ankommt. Bei Booking.com werden Provision und Zahlungsgebühren später mit einer separaten Rechnung abgezogen. Ohne eine grobe Zahl zur Hand ist es schwer, eine Kanalbuchung mit einer Direktbuchung zu vergleichen oder zu sehen, ob nach einem Rabatt noch eine Marge bleibt.

## Was sich ändert

Ist die Buchungsquelle der Reservierung **Booking.com**, werden der Zusammenfassung der Reservierung direkt über der Trennlinie vier Zeilen hinzugefügt. Die Beschriftungen sind auf Spanisch:

- **Cargo por transferencia (1.3%)**: die Überweisungsgebühr, 1,3 % der Reservierungssumme.
- **Comisiones Booking (17%)**: die Booking.com-Provision, 17 % der Reservierungssumme.
- **Total comisiones con IVA**: Überweisungsgebühr plus Provision plus der auf der Reservierung angezeigte Steuerbetrag.
- **Neto Bruto (Aprox.)**: der ungefähre Nettobetrag, also die Reservierungssumme minus diese Summe.

Reservierungen aus jeder anderen Quelle bleiben unverändert.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com und fügt nur Booking.com-Reservierungen Zeilen hinzu. Es ist kostenlos und Open Source: [Den Code auf GitHub ansehen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Gut zu wissen

- Die Sätze sind fest im Code hinterlegt: 17 % Provision und 1,3 % Überweisungsgebühr. Gilt in Ihrem Booking.com-Vertrag ein anderer Satz, bearbeiten Sie diese Zahlen im Tampermonkey-Editor.
- Die Beschriftungen bleiben auf Spanisch und Beträge werden in Euro angezeigt, unabhängig von Ihrer Oberflächensprache.
- Es ist eine Schätzung. Maßgeblich ist Ihre Rechnung von Booking.com.
- Die Zeilen werden einmal berechnet, wenige Sekunden nachdem die Reservierung geladen wurde. Ändern Sie die Summe, laden Sie die Seite neu, um neu zu berechnen.
- Es liest nur die Buchungsquelle, die Summe und die Steuer, die bereits auf dem Bildschirm stehen. Es speichert nichts und sendet nichts irgendwohin.

## Verwandte Themen

- [Wie viel Provision Booking.com verlangt](/blog/booking-com-commission)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
