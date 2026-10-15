---
title: "Little Hotelier Anleitung: 20 Tipps und versteckte Funktionen, die die meisten nicht kennen (2026)"
seoTitle: "Little Hotelier Anleitung: Tipps und Funktionen (2026)"
description: "20 Little-Hotelier-Tipps: schnellerer Kalender, Passkeys, Mindestpreis, Lückennächte, Buchungslinks, Audit-Log, kostenlose Skripte für Preise im Kalender."
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier anleitung, little hotelier erfahrungen, little hotelier tipps, little hotelier handbuch, little hotelier bedienung, little hotelier kalender, little hotelier versteckte funktionen]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "Reservierungsseite von Little Hotelier (spanische Oberfläche), vom Skript Full Width Reservation Table auf die volle Bildschirmbreite gezogen: Suchfilter, die Schaltfläche Buscar, 36 gefundene Reservierungen und der Link Exportar"
faq:
  - q: "Wie verhindere ich, dass Little Hotelier ständig nach einem MFA-Code fragt?"
    a: "Little Hotelier fragt alle 30 Tage erneut, außerdem bei einem neuen Browser oder Gerät und vor sensiblen Aktionen. Am schnellsten geht es mit einem Passkey (My account, Passkeys, Create passkey) oder mit der Freigabe über die Little-Hotelier-App, die statt eines Codes eine Zahl zum Abgleichen anzeigt."
  - q: "Wie vermeide ich Sitzungs-Timeouts in Little Hotelier?"
    a: "In den von uns geprüften Artikeln des Hilfecenters gibt es dafür keine Einstellung. Das kostenlose Userscript Auto Refresh On Inactivity lädt die Seite nach 10 Minuten ohne Aktivität neu. Sie finden dann eine aktuelle Seite vor statt einer veralteten."
  - q: "Kann ich Zimmerpreise im Little-Hotelier-Kalender sehen?"
    a: "Nicht von Haus aus: Der Kalender zeigt Buchungen, die Preise stehen in der Inventarübersicht. Das kostenlose Userscript Prices Display liest sie von der Inventarseite und zeigt sie im Kalender unter jedem Zimmertyp an."
  - q: "Hat Little Hotelier Tastenkürzel?"
    a: "In den Hilfecentern von Little Hotelier fanden wir keine Tastenkürzel (Oktober 2026). Die Pfeilschaltflächen des Kalenders springen um 1, 7 oder 14 Tage, und View today springt zurück zu heute. Im Hotelier-Tools-Dashboard öffnet Strg+K (Cmd+K auf dem Mac) die Suche."
  - q: "Wo finde ich das Little-Hotelier-Handbuch?"
    a: "Es gibt kein einzelnes Handbuch. Little Hotelier führt zwei Hilfecenter, eines für die klassische Version und eines für die neuere Plattform, dazu Sim, einen KI-Chatbot, den Sie nach dem Login über das Chat-Symbol öffnen."
---

Little Hotelier versteckt einige seiner nützlichsten Funktionen ein bis zwei Klicks tief: Login mit Passkey, einen Mindestpreis für den Betrieb, Buchungslinks, die ein bestimmtes Zimmer öffnen, eine Flush-Schaltfläche für Kanäle, die sich nicht aktualisieren, und ein Änderungsprotokoll, das zeigt, wer was geändert hat. Hier sind 20 Tipps: 14 direkt in Little Hotelier (jeweils mit Link zum offiziellen Hilfeartikel), 4 kostenlose Browser-Skripte für das, was Little Hotelier nicht kann, und 2 für Inhaber, die das Hotelier-Tools-Dashboard nutzen.

::callout{type="info" title="Classic oder Plattform?"}
Konten, die seit Mai 2025 erstellt (oder umgestellt) wurden, nutzen die neuere Little-Hotelier-**Plattform**. Ältere Konten nutzen die **klassische** Version mit [eigenem Hilfecenter](https://helpcentre.littlehotelier.com/en/). Die Menünamen unterscheiden sich, deshalb nennt jeder Tipp den Pfad der Version, die der Hilfeartikel beschreibt.
::

## Tipps zu Kalender und Rezeption

### 1. Den Kalender auf einen Blick lesen

Wählen Sie im Dropdown eine Ansicht mit **14 oder 28 Tagen**. In der 14-Tage-Ansicht springen `<`, `<<` und `<<<` um 1, 7 und 14 Tage, **View today** springt zurück. Farben zeigen den Status: orange bestätigt, grün eingecheckt, grau ausgecheckt, blau nicht zugewiesen, rot Zimmersperrung. Ein **rotes Dreieck** in der Ecke bedeutet, dass noch ein Betrag offen ist ([Kalenderanleitung](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)).

### 2. Mit der Zeile Unallocated noch eine Buchung unterbringen

Wenn ein Zimmertyp voll aussieht, die Nächte aber nicht zusammenpassen, schieben Sie eine Buchung in **Unallocated** (nicht zugewiesen), ordnen die anderen um und ziehen sie dann zurück in ein Zimmer. Nicht zugewiesene Buchungen werden weiterhin von der Verfügbarkeit abgezogen. Eine Buchung dort zu parken, bringt das Zimmer also nicht zurück in den Verkauf ([klassische Anleitung](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

### 3. Das Anmeldeformular als Check-in-Blatt drucken

Klicken Sie bei einer Buchung auf die Lupe, dann auf **Print → Registration form**. Little Hotelier empfiehlt, es als fertiges Check-in-Formular zu nutzen.

### 4. Dem Housekeeping einen eigenen Bericht geben

Öffnen Sie **Reservations → Housekeeping**. Markieren Sie jedes Zimmer als **Cleaned**, **Uncleaned** oder **Skip cleaning**, ergänzen Sie Zimmernotizen, wechseln Sie zwischen **Today**, **Tomorrow** oder gewählten Daten und klicken Sie auf **Print report**. Geben Sie Ihren Housekeeping-Mitarbeitern einen eigenen Benutzer mit Front-Desk-Zugriff, damit sie den Stand live sehen. In der mobilen App gibt es das nicht ([Housekeeping-Anleitung](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier)).

### 5. An der Referenz ablesen, woher eine Buchung kam

Die Buchstaben am Anfang der Buchungsreferenz zeigen die Quelle: **LH** Ihre Rezeption oder Buchungsmaschine, **BDC** Booking.com, **EXP** Expedia, **ABB** Airbnb, **AGO** Agoda, **HWL** Hostelworld ([Reservierungsanleitung](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)). Praktisch, wenn Sie einen Export in Excel filtern.

## Preise, Beschränkungen und Kanäle

### 6. Einen Mindestpreis setzen, damit nichts zu billig verkauft wird

Ein Mindestpreis für den Betrieb verhindert, dass eine Zimmerrate oder ein in Little Hotelier verwalteter Rabatt darunter fällt. Auf der Plattform: **Setup → Property settings → General information**, der Stift neben **Inventory**, dann **Minimum rate** ([Anleitung](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)). In Classic: **Channel Manager**, klicken Sie auf den Namen Ihres Betriebs, dann **Property settings → General** ([Anleitung](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)). Aktionen, die Sie direkt bei Booking.com oder anderen Kanälen anlegen, können weiterhin darunter liegen.

### 7. Lückennächte nach Mindestaufenthalten retten

Ein Mindestaufenthalt von drei Nächten hinterlässt Lücken von zwei Nächten, die niemand buchen kann. Die Lösung von Little Hotelier: ein zweiter Ratenplan, von Ihrem Standardplan abgeleitet und etwas teurer (ihr Beispiel: +5 %), mit kürzerem Mindestaufenthalt und Ihren Kanälen zugeordnet ([Anleitung zu Lückennächten](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)). Was CTA, CTD und Stop-Sell bewirken, steht in [CTA, CTD, Mindestaufenthalt und Stop-Sell erklärt](/blog/little-hotelier-cta-ctd-stop-sell).

### 8. Ein „Flush“ senden, wenn ein Kanal sich nicht aktualisiert

In Classic wählen Sie unter **Setup → Property & Room Settings → Rooms & Rates** den Zimmertyp oder die Rate und klicken unten auf **Flush**. Das sendet Preise, Beschränkungen und Verfügbarkeit erneut an jeden Kanal. Warten Sie nach einer kleinen Änderung fünf Minuten, bevor Sie den Flush auslösen, und beheben Sie zuerst Zuordnungsfehler ([Flush-Anleitung](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush)).

### 9. Herausfinden, wer eine Rate oder Kanalzuordnung geändert hat

Öffnen Sie eine Zimmerrate oder einen Kanal und wählen Sie **Audit**. Das Lifecycle Audit zeigt, wann eine Einstellung geändert wurde, und die E-Mail-Adresse des Benutzers, der sie geändert hat. Preise, Beschränkungswerte oder Reservierungsänderungen zeichnet es nicht auf ([Audit-Anleitung](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)). Bei einem rätselhaften Stop-Sell prüfen Sie zuerst die **Release period** der Rate. Ist sie leer, hat eine Yield-Regel die Rate geschlossen ([Anleitung](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule)).

## Buchungsmaschine und Booking.com

### 10. Direkt auf ein Zimmer, eine Rate oder einen Promo-Code verlinken

Fügen Sie der Adresse Ihrer Buchungsmaschine einen Parameter hinzu:

- `?room_type=ID` öffnet einen Zimmertyp (die ID steht in der URL des Zimmertyps in der Einrichtung von Direct Booking)
- `?promocode=CODE` wendet einen Promo-Code an
- `?ratePlanId=ID` zeigt einen Ratenplan (Little Hotelier erklärt, wie Sie die ID mit den Entwicklertools Ihres Browsers finden)

Die Adresse beginnt mit `direct-book.com/properties/` in Europa, Afrika, im Nahen Osten und in Amerika oder mit `book-directonline.com/properties/` im Asien-Pazifik-Raum ([Zimmer- und Promo-Links](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [Ratenplan-Links](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan)).

### 11. Ungültige Karte oder No-Show bei Booking.com ohne Extranet melden

Öffnen Sie die Booking.com-Reservierung im Channel-Manager und gehen Sie zum Reiter **Manage Reservation**. Dort können Sie die Karte als ungültig melden, Booking.com bitten, wegen ungültiger Karte zu stornieren, oder einen No-Show markieren und wählen, ob Sie die Gebühr erlassen ([Anleitung](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)). Die Fristen stehen in [Booking.com: ungültige Karte oder No-Show, was tun?](/blog/booking-com-invalid-card-no-show).

### 12. Sicherstellen, dass Booking.com-Gäste Ihre E-Mails bekommen

Booking.com blockiert E-Mails von Systemen, die es nicht kennt. Wenn Sie Bestätigungen oder Zahlungsanfragen aus Little Hotelier senden, erlauben Sie `@app.littlehotelier.com` und `@guestjoy.com` (und die Links `siteminder.com` und `guestjoy.com`) im Extranet unter **Property → Messaging preferences → Security settings** ([Schritte](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).

## Login, Support und Exporte

### 13. Mit einem Passkey statt mit Codes anmelden

MFA ist Pflicht, und Little Hotelier fragt alle 30 Tage oder in einem neuen Browser erneut. Zwei Wege, wie es bequemer geht ([MFA-Anleitung](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)):

- **Mit der Little-Hotelier-App freigeben.** Sie tippen auf die passende Zahl und bestätigen mit Gesicht oder Fingerabdruck. SMS- und E-Mail-Codes werden nicht unterstützt.
- **Einen Passkey nutzen.** Profilsymbol → **My account** → **Passkeys** → **Create passkey**, dann melden Sie sich mit **Continue with a passkey** an. Das funktioniert in Webbrowsern (Chrome und Edge 109+, Safari 16+), nicht in der mobilen App, und setzt eingerichtetes MFA voraus ([Passkey-Anleitung](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys)).

Jede Person sollte einen eigenen Benutzer haben: MFA-Codes gehören zu einer Person und einem Gerät.

### 14. Sim fragen, bevor Sie suchen, und vor Tag 180 exportieren

Öffnen Sie nach dem Login das Chat-Symbol unten rechts und wählen Sie **Ask a question**. Sim, der KI-Chatbot von Little Hotelier, antwortet rund um die Uhr in acht Sprachen aus dem Hilfecenter und kann Sie an einen Menschen weiterreichen. Stellen Sie jeweils eine konkrete Frage, mit dem Namen des Kanals und der genauen Fehlermeldung ([Tipps](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support)).

Und eine Gewohnheit, die sich lohnt: Exportieren Sie Ihre Reservierungen jeden Monat. Gästedaten werden 180 Tage nach dem Check-out maskiert, und Exporte enthalten nie Telefonnummern. Schritt für Schritt: [Reservierungen nach Excel oder Google Sheets exportieren](/blog/export-little-hotelier-reservations-excel).

## Kostenlose Userscript-Anpassungen

Diese kostenlosen [Userscripts](/tools/ui) laufen mit der Erweiterung Tampermonkey in Ihrem Browser und ändern nur, was Sie sehen. Sie bleiben für immer kostenlos. Mit der [Installationsanleitung](/tools/ui/instructions) brauchen Sie etwa fünf Minuten pro Skript.

### 15. Ihre Preise im Kalender sehen

[Prices Display](/tools/ui/prices-display) liest Ihre Preise von der Inventarseite und zeigt sie im Kalender unter jedem Zimmertyp an, sodass Sie am Telefon einen Preis nennen können, ohne den Bildschirm zu wechseln.

::screenshot{src="/images/scripts/prices-display/to.webp" alt="Little-Hotelier-Kalender auf Spanisch mit 7-Tage-Ansicht, Buchungen in Grün, Orange und Grau und dem Nachtpreis jedes Zimmertyps in großen Ziffern unter seinen Zimmern" caption="Mit Prices Display steht der Nachtpreis jedes Zimmertyps direkt unter seinen Zimmern."}
::

### 16. Nicht mehr zu einer veralteten Seite zurückkehren

Wenn Sie Little Hotelier an der Rezeption offen lassen und bei Ihrer Rückkehr Fehler sehen, lädt [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) die Seite nach 10 Minuten ohne Klicks, Scrollen oder Mausbewegung neu. Es lädt nie neu, während Sie arbeiten.

### 17. Die Provision von Booking.com in der Reservierung sehen

[Show Booking.com Commissions](/tools/ui/show-booking-commissions) ergänzt jede Booking.com-Reservierung um eine geschätzte Aufschlüsselung der Provision und Ihr ungefähres Netto. Wie die echte Provision funktioniert, steht in [Wie viel Provision nimmt Booking.com?](/blog/booking-com-commission).

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Zusammenfassung einer Little-Hotelier-Reservierung auf Spanisch mit zusätzlichen Zeilen für Überweisungsgebühr, Booking.com-Provision, Gesamtprovision mit Mehrwertsteuer und ungefähres Netto" caption="Eine Schätzung, was Booking.com behält und was Ihnen bleibt, direkt in der Reservierung."}
::

### 18. Mehr auf den Bildschirm bekommen (und auf ein Tablet)

- [Compact Calendar UI](/tools/ui/compact-calendar-ui) legt die Datumsköpfe in eine Zeile und kürzt die Namen der Zimmertypen.
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) verbreitert die Reservierungsliste, damit Sie nicht mehr seitlich scrollen.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) macht Schaltflächen größer und zeigt die Schaltfläche „Zimmer entfernen“, die sonst nur beim Darüberfahren erscheint, immer an.

Alle Skripte mit Vorher-nachher-Bildern stehen auf der [Seite der Browser-Erweiterungen](/chrome-extensions) und in [kostenlose Chrome-Erweiterungen für Little Hotelier](/blog/little-hotelier-chrome-extensions).

## Zwei Tipps, wenn Sie das Hotelier-Tools-Dashboard nutzen

Hotelier Tools ist ein unabhängiges Dashboard, das neben Little Hotelier arbeitet, mit dem eigenen Little-Hotelier-Login Ihres Betriebs. Es steht in keiner Verbindung zu SiteMinder oder Little Hotelier, wird von ihnen weder unterstützt noch empfohlen und ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

### 19. Mit Strg+K alles finden

**Strg+K** (**Cmd+K** auf dem Mac) durchsucht Seiten, Wartelisteneinträge, geplante Aufgaben und Unterhaltungen. Die Suche ignoriert Akzente und versteht englische und spanische Wörter für dieselbe Sache: „lista de espera“ findet die Availability Queue.

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="Mit Strg+K geöffnete Befehlspalette über dem Hotelier-Tools-Dashboard, mit der Suche waitlist und passenden Seiten wie Public waitlist form, Availability Queue, History, Do-not-rebook list und Scheduled invoices, jeweils mit ihrem Bereich gekennzeichnet" caption="Tippen Sie ein Wort und springen Sie direkt zur gewünschten Seite." path="/"}
::

### 20. Fehlende Ausweise per nächtlicher Prüfung vor der Anreise finden

**Automated checks** lesen kommende Reservierungen und markieren, was Sie sonst erst an der Rezeption bemerken würden: kein zugewiesenes Zimmer, fehlendes Ausweisdokument oder fehlende Adresse, ein offener Saldo oder ein Gast auf Ihrer Do-not-rebook-Liste. Probleme landen gesammelt auf der Seite Issues, und nach jedem Lauf kommt ein Bericht per E-Mail. Siehe [die tägliche Rezeptions-Checkliste](/blog/hotel-front-desk-checklist-automation).

::demo-cta{path="/automated-checks/issues"}
::

Siehe auch: [was ein MCP-Server ist](/blog/what-is-mcp-server-hotels), [dynamische Preise in Little Hotelier](/blog/dynamic-pricing-little-hotelier), [alle Rechnungen auf einmal herunterladen](/blog/download-all-little-hotelier-invoices), [Meldepflichten für Gäste nach Land](/blog/guest-registration-rules-by-country), [WhatsApp mit Little Hotelier nutzen](/blog/whatsapp-little-hotelier), [Alternativen zu Little Hotelier](/blog/little-hotelier-alternatives), [das Hotelier-Tools-Dashboard](/tools/bot/dashboard), [die Hotelier-Tools-Automatisierungen](/tools/bot/automations).

## Zusammenfassung

- **Größte Zeitersparnis:** Passkeys, der Housekeeping-Bericht und Deep Links in die Buchungsmaschine.
- **Größte Geldersparnis:** ein Mindestpreis für den Betrieb und ein Ratenplan für Lückennächte.
- **Wenn Kanäle nicht mitspielen:** Flush, dann Änderungsprotokoll und Release period prüfen.
- **Für das, was Little Hotelier nicht kann:** kostenlose Userscripts für Preise im Kalender und Booking.com-Provisionen und [Integrationen](/blog/little-hotelier-integrations) für den Rest.
