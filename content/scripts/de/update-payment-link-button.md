---
title: "Zahlungslink-Button aktualisieren"
description: "Gibt dem Zahlungslink-Button in Little Hotelier eine klarere Beschriftung und hängt die Telefonnummer des Gastes an den Link, damit sie nicht neu getippt wird."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

Dieses Skript verbessert den Zahlungslink-Button auf dem Reservierungsbildschirm von Little Hotelier. Es gibt dem Button eine klarere Beschriftung und hängt die Telefonnummer des Gastes aus der Reservierung an den Zahlungslink. Es ist für Rezeptionsmitarbeiter gedacht, die Gäste bitten, eine Anzahlung oder den Restbetrag per Karte über einen Zahlungslink zu bezahlen.

## Das Problem, das es löst

Die Standardbeschriftung des Buttons für die Zahlungsanforderung macht nicht jedem Mitarbeiter klar, dass man darüber einen Gast zur Kartenzahlung auffordert. Und die Telefonnummer des Gastes, die bereits in der Reservierung gespeichert ist, wird nicht in den Zahlungslink übernommen und muss erneut eingegeben werden. Beides kostet Zeit, während ein Gast am Telefon ist.

## Was sich ändert

Auf dem Reservierungsbildschirm im Front Desk:

- Der Button für die Zahlungsanforderung wird in **Generate Payment Link** umbenannt, oder in **Cobrar con tarjeta por correo electronico (Email)**, wenn Little Hotelier auf Spanisch eingestellt ist.
- Die Nummer im Telefonfeld des Gastes wird als Telefonparameter an den Link des Buttons angehängt, wobei Leerzeichen und das Zeichen "+" entfernt werden.
- Baut Little Hotelier den Link neu auf, wendet das Skript die Änderung erneut an.
- Enthält der Link bereits eine Telefonnummer, bleibt er unverändert.

## So installieren Sie es

Installieren Sie die kostenlose Erweiterung Tampermonkey, klicken Sie auf dieser Seite auf **Install on Tampermonkey**, bestätigen Sie und laden Sie Little Hotelier neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft auf Front-Desk-Seiten unter app.littlehotelier.com und wird nur aktiv, wenn eine Reservierung den Button für die Zahlungsanforderung zeigt. Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Gut zu wissen

- Es ändert nur den Text und den Link des Buttons. Die Zahlung selbst wird wie gewohnt von Little Hotelier abgewickelt, und das Skript sieht nie Kartendaten.
- Das Skript liest das Telefonfeld einmal, sobald es die Nummer an den Link hängt. Tippen oder korrigieren Sie die Nummer danach, behält der Link den zuerst gelesenen Wert. Speichern Sie die Reservierung daher und laden Sie sie neu, bevor Sie den Button nutzen.
- Die Nummer wird nur als Ziffern angehängt, tragen Sie also die Landesvorwahl im Telefonfeld der Reservierung ein.
- Die Beschriftungen gibt es auf Englisch und Spanisch. Andere Oberflächensprachen zeigen die englische Beschriftung.
- Es speichert nichts und sendet nichts außerhalb von Little Hotelier.

## Verwandte Themen

- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
- [So nutzen Sie WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier)
- [Little Hotelier Chrome-Erweiterungen: kostenlose Userscripts](/blog/little-hotelier-chrome-extensions)
