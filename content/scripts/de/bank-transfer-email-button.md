---
title: "Banküberweisung E-Mail Button"
description: "Ein Button für Little-Hotelier-Reservierungen, der eine E-Mail mit Überweisungsdaten, offenem Betrag und Aufenthaltsdaten vorbereitet. Nur auf Anfrage."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

Dieses Skript fügt Little-Hotelier-Reservierungen einen Button hinzu, der eine fertige E-Mail öffnet, in der der Gast um Zahlung per Banküberweisung gebeten wird. Die E-Mail enthält bereits den offenen Betrag, die Aufenthaltsdaten und die gebuchten Zimmer. Es richtet sich an Inhaber und Rezeptionsteams von Unterkünften, die Überweisungen akzeptieren. Es ist nicht allgemein veröffentlicht: Die aktuelle Version ist für eine einzelne Unterkunft geschrieben und wird deshalb auf Anfrage eingerichtet.

## Das Problem, das es löst

Möchte ein Gast per Überweisung zahlen, muss jedes Mal dieselbe E-Mail geschrieben werden: Kontonummer, Bank, Begünstigter, ein Verwendungszweck, der genaue Betrag und die Buchungsdaten. Betrag und Daten von Hand zu kopieren ist langsam, und ein falscher Verwendungszweck erschwert später die Zuordnung der Zahlung.

## Was sich ändert

Auf dem Reservierungsbildschirm im Front Desk:

- Das Menü **Email** erhält eine neue Option, und neben dem Button **Print** erscheint ein neuer Button mit Umschlag-Symbol.
- Ein Klick auf eines von beiden öffnet Ihr E-Mail-Programm mit einer neuen Nachricht an die E-Mail-Adresse des Gastes.
- Die Nachricht wird aus der Reservierung befüllt: der offene Betrag, ein Verwendungszweck aus Check-in-Datum und Vorname des Gastes, die Check-in- und Check-out-Daten sowie die Zimmer, nach Zimmertyp gruppiert und mit der Anzahl je Typ.
- Sie enthält außerdem einen Link zur Reservierung in Little Hotelier, für Ihre eigene Referenz.

## So installieren Sie es

Dieses Skript ist noch nicht allgemein veröffentlicht. [Kontaktieren Sie mich](/contact), dann passe ich es an Ihre Unterkunft an. Nach der Anpassung wird es wie die anderen Skripte installiert: Sie brauchen die kostenlose Erweiterung Tampermonkey, und die [Installationsanleitung](/tools/ui/instructions) zeigt die Schritte. Es läuft nur auf Front-Desk-Seiten von Little Hotelier (app.littlehotelier.com). Es ist Open Source, und den [aktuellen Code auf GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js) können Sie lesen.

## Gut zu wissen

- Bankdaten, Name der Unterkunft, Signatur, Ankunftszeit und Formulierung der E-Mail stehen direkt im Code, auf Spanisch, für die Unterkunft des Autors. Sie müssen geändert werden, bevor jemand anderes es nutzen kann.
- Der Betrag wird in Euro angezeigt.
- Die E-Mail öffnet sich über einen Standard-E-Mail-Link im Standard-E-Mail-Programm Ihres Computers. Gesendet wird erst, wenn Sie dort auf Senden klicken.
- Die E-Mail bittet Gäste, die Kontonummer telefonisch zu bestätigen, als Schutz vor betrügerischen E-Mails mit geänderten Bankdaten.
- Das Skript speichert nichts und sendet keine Daten irgendwohin. Es liest nur Felder, die bereits auf dem Reservierungsbildschirm stehen.

## Verwandte Themen

- [Update Payment Link Button](/tools/ui/update-payment-link-button) für Kartenzahlungen per Link
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
