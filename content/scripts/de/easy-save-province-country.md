---
title: "Einfaches Speichern von Provinz und Land"
description: "Auswahl spanischer Provinzen und Länder für Little-Hotelier-Gästeformulare: Ein Tipp setzt Provinz und Spanien, füllt leere Namen, öffnet jedes Formular."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.webp"
  after: "/images/scripts/easy-save-province-country/to.webp"
  gallery:
    - "/images/scripts/easy-save-province-country/from.webp"
    - "/images/scripts/easy-save-province-country/to.webp"
    - "/images/scripts/easy-save-province-country/three.webp"
---

Dieses Skript beschleunigt das Ausfüllen der Gästedaten in einer Little-Hotelier-Reservierung, besonders bei spanischen Gästen. Klicken Sie auf das Feld für die Provinz, sehen Sie eine Liste spanischer Provinzen zum Antippen, und die Auswahl setzt zugleich das Land auf Spanien. Es ist für Rezeptionsteams von Unterkünften in Spanien gebaut und lässt sich gut auf einem Tablet bedienen.

## Das Problem, das es löst

Für spanische Gäste verlangt Little Hotelier neben dem Land auch eine Provinz, und Berichte wie die INE-Belegungserhebung gruppieren Gäste nach Wohnprovinz. Provinznamen von Hand zu tippen führt zu Schreibvarianten (Vizcaya oder Bizkaia, Orense oder Ourense), die Länderliste ist lang zum Scrollen, und das Formular eines weiteren Gastes lässt sich nicht speichern, solange seine Namensfelder leer sind.

## Was sich ändert

Auf dem Bearbeitungsbildschirm einer Reservierung im Front Desk:

- **Provinzauswahl:** Der Fokus auf dem Provinzfeld öffnet ein Raster mit den 50 spanischen Provinzen sowie Ceuta und Melilla. Tippen filtert es, und gängige Alternativen wie Gerona, Lérida, Seville, Mallorca oder Tenerife führen zur richtigen Provinz.
- **Land wird gesetzt:** Die Auswahl einer Provinz setzt das Land des Gastes auf Spanien.
- **Länderauswahl:** Das Länderfeld öffnet ein durchsuchbares Raster, das jedes Land auf Spanisch zeigt, darunter den englischen Namen.
- **Leere Namen werden gefüllt:** Wenn Sie eine Provinz oder ein Land wählen, erhalten leere Vor- und Nachnamenfelder dieses Gästeformulars den Namen des Hauptgastes oder einen Unterstrich "_", falls auch dieser leer ist, damit sich das Formular speichern lässt.
- **Gästeformulare werden geöffnet:** Eingeklappte Gästeformulare werden automatisch aufgeklappt, und der Cursor springt in das Provinzfeld.
- **Touchfreundliche Buttons:** Der Button zum Hinzufügen von Gästen und die Pfeile zum Aufklappen sind größer, und das rote Kreuz zum Entfernen eines Gastes ist immer sichtbar.

## So installieren Sie es

Sie brauchen die kostenlose Erweiterung Tampermonkey. Klicken Sie auf **Install on Tampermonkey**, bestätigen Sie und laden Sie die Reservierung neu. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt. Das Skript läuft nur auf Bearbeitungsseiten von Reservierungen (app.littlehotelier.com/extranet/properties/.../reservations/.../edit). Es ist kostenlos und Open Source: [Den Code auf GitHub lesen](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js).

## Gut zu wissen

- Die Provinzauswahl erscheint nur, wenn das Land des Gastes leer oder Spanien ist. Bei anderen Ländern funktioniert das Feld wie gewohnt.
- Suchfeld und Ländernamen sind auf Spanisch, unabhängig von der Sprache von Little Hotelier.
- Gefüllte Namensfelder übernehmen den Namen des Hauptgastes. Korrigieren Sie sie, wenn der weitere Gast anders heißt.
- Änderungen erfolgen nur im Formular. Gespeichert wird erst, wenn Sie auf Save klicken, und das Skript speichert nichts.

## Verwandte Themen

- [SES Hospedajes mit Little Hotelier](/blog/ses-hospedajes-little-hotelier)
- [So füllen Sie die INE-Belegungserhebung für Hotels aus](/blog/ine-hotel-occupancy-survey)
- [Chekin Connection](/tools/ui/show-chekin)
