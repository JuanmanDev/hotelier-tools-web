---
title: "Verbindung mit Chekin"
description: "Zeigt die Chekin-Check-in-Daten jedes Gastes in der Little-Hotelier-Reservierung an, füllt Gästeformulare mit einem Klick und teilt den Anmeldeformular-Link."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "Reservierungsdetails"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

Dieses Skript verbindet Chekin, den Online-Check-in-Dienst, mit Little Hotelier. Öffnen Sie eine Reservierung, zeigt ein Chekin-Bereich die Gäste, die sich bereits registriert haben, und lässt Sie deren Daten in die Gästeformulare von Little Hotelier übernehmen. Es ist für Rezeptionsteams gedacht, die Chekin zur Erfassung der Gästeausweise nutzen.

## Das Problem, das es löst

Ohne das Skript müssen Sie bei jeder Ankunft die Buchung in Chekin finden, prüfen, wer sich registriert hat, und Dokumentnummern und Adressen von Hand abtippen. Das ist langsam, und abgeschriebene Ausweisnummern enthalten leicht Tippfehler.

## Was sich ändert

Auf dem Bearbeitungsbildschirm einer Reservierung im Front Desk wird dem Bereich des Hauptkontakts ein Chekin-Bereich hinzugefügt:

- **Status:** ob die Reservierung in Chekin gefunden wurde und wie viele Gäste registriert sind, mit einem Link **View in Chekin**.
- **Gästetabelle:** Name, Telefon, Dokumentnummer, Stadt, Provinz und Land jedes registrierten Gastes.
- **Use as Primary:** übernimmt die Dokumentnummer dieses Gastes in das Ausweisfeld des Hauptgastes, bereit für die Rechnung.
- **Save Guest** und **Save All Guests:** füllen die Formulare für weitere Gäste in Little Hotelier mit den Chekin-Daten. Anschließend bestätigen Sie mit dem Button Save von Little Hotelier.
- **Link zum Anmeldeformular:** Hat sich noch niemand registriert, erscheint der Link zum Gästeformular mit den Buttons Open, Copy, Email und WhatsApp, der die E-Mail-Adresse und das Telefon des Gastes aus der Reservierung nutzt.
- **Create Checkin Reservation:** Gibt es keinen Treffer, legt es die Reservierung in Chekin aus den Little-Hotelier-Daten zu Terminen, Zimmern, Gästezahl und Kontaktdaten an.

Im Kalender lädt das Skript außerdem im Hintergrund die Chekin-Daten für sichtbare Reservierungen, damit sich Reservierungen schneller öffnen.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey und ein Chekin-Konto. Klicken Sie auf **Install on Tampermonkey**, bestätigen Sie und melden Sie sich dann im selben Browser bei dashboard.chekin.com an. Die [Installationsanleitung](/tools/ui/instructions) zeigt die Schritte. Das Skript läuft auf den Bearbeitungsseiten von Reservierungen in Little Hotelier, im Kalender und auf Chekin-Dashboard-Seiten, die es selbst öffnet. Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js).

## Gut zu wissen

- Es nutzt Ihren eigenen Chekin-Login. Sind Sie abgemeldet, zeigt der Bereich einen Button **Login Required on Chekin**.
- Für die Suche öffnet es im Hintergrund einen Chekin-Tab.
- Die Reservierung braucht ein Check-in-Datum und ein zugewiesenes Zimmer. Der Abgleich erfolgt zuerst über die Buchungsreferenz, dann über die Zimmernummer.
- Ergebnisse bleiben bis zu 24 Stunden in Ihrem Browser gespeichert, Vorabladungen aus dem Kalender bis zu 4 Stunden.
- Der Bereich folgt Ihrer Browsersprache (Englisch oder Spanisch). Die geteilten Nachrichten enden mit der Signatur der Unterkunft des Autors; bearbeiten Sie sie im Skript.

## Verwandte Themen

- [SES Hospedajes mit Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [Meldepflichten für Gäste nach Land](/blog/guest-registration-rules-by-country)
- [Easy Save Province and Country](/tools/ui/easy-save-province-country)
