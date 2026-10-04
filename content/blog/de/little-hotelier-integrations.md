---
title: "Die besten Little-Hotelier-Integrationen 2026: Buchhaltung, Check-in, Preise, Nachrichten und KI"
seoTitle: "Die besten Little-Hotelier-Integrationen 2026"
description: "Was sich 2026 mit Little Hotelier verbinden lässt: Xero- und QuickBooks-Export, Chekin und Duve, Preis-Tools, Nachrichten, KI und kostenlose Zusätze."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [little hotelier integrationen, little hotelier schnittstellen, little hotelier app store, little hotelier xero, little hotelier buchungs-widget, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Developer-Portal in Hotelier Tools mit Karten für REST API & Swagger, MCP setup, API keys und LH methods sowie einem Feld Authentication mit einem cURL-Beispiel mit Platzhalter-API-Schlüssel"
faq:
  - q: "Lässt sich Little Hotelier mit Xero oder QuickBooks verbinden?"
    a: "Über eine Datei, nicht über eine Live-Synchronisierung. Sie ordnen in Little Hotelier Ihre Konten und Steuercodes zu und exportieren dann abgeschlossene Rechnungen als CSV, die für den Import in Xero und QuickBooks gebaut ist. Stand Oktober 2026 führt der App Store keine Buchhaltungs-App auf."
  - q: "Funktioniert Little Hotelier mit Zapier?"
    a: "Bei unserer Prüfung am 3. Oktober 2026 fanden wir keine Little-Hotelier-App auf Zapier; die Integrationsseite zu Little Hotelier lieferte „nicht gefunden“. Um Little Hotelier mit anderen Werkzeugen zu verbinden, nutzen Sie eine App aus dem App Store oder ein Skript, das Ihre Daten über eine API liest."
  - q: "Was kosten die Apps aus dem Little Hotelier App Store?"
    a: "Little Hotelier berechnet nichts für die Anbindung. Jede App legt ihren eigenen Preis fest, und laut der App-Store-Seite von Little Hotelier kosten die meisten unter 50 US-Dollar im Monat. Viele bieten eine kostenlose Testphase."
  - q: "Wie füge ich das Little-Hotelier-Buchungs-Widget zu WordPress hinzu?"
    a: "Öffnen Sie in Direct Booking den Widget-Assistenten, wählen Sie eine Schaltfläche Book now, ein Widget zur Datumsauswahl oder ein eigenes Widget und kopieren Sie den angezeigten Code. Fügen Sie ihn in einen Block „Eigenes HTML“ (Custom HTML) Ihrer WordPress-Seite ein. Little Hotelier verlangt, dass Sie den Code kopieren, nicht abtippen."
  - q: "Kann eine Revenue-Management-App meine Mindestaufenthalte ändern?"
    a: "In der Regel nicht. Das Hilfecenter von Little Hotelier sagt, dass eine verbundene RMS-App die Preis-Updates steuert, während Mindestaufenthalt und Stop-Sell in Little Hotelier verwaltet bleiben."
  - q: "Ist Hotelier Tools im Little Hotelier App Store?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Betriebs, Sie richten es also selbst ein, statt über den App Store."
---

Little Hotelier verbindet sich an drei Stellen mit externer Software: dem **Little Hotelier App Store** (Stand Oktober 2026 rund 30 Partner-Apps für Check-in, Nachrichten, Upselling, Bewertungen, schlüssellosen Zutritt und Preise), **Plug-ins für die Buchungsmaschine** und den eigenen **Add-ons** wie Guest Engagement und Dynamic Revenue Plus. Die Buchhaltung läuft über einen CSV-Export für Xero und QuickBooks, nicht über eine Live-Synchronisierung. Für alles, was fehlt, können Sie eine Schicht ergänzen, die Ihre Daten über eine API (Schnittstelle) liest, oder ein kostenloses Browser-Skript.

## Wo die Little-Hotelier-Integrationen liegen

| Art | Wo Sie sie finden | Wie sie sich verbindet |
|---|---|---|
| Apps im App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | Sie kontaktieren den App-Anbieter, der die App einrichtet |
| Plug-ins für die Buchungsmaschine | **Direct booking → Configuration → Plug-in apps** | Sie fügen die Zugangsdaten der App ein und klicken auf **Enable** |
| Little-Hotelier-Add-ons | Ihr Tarif ([Preisseite](https://www.littlehotelier.com/pricing/)) | Von Little Hotelier freigeschaltet |
| Kanäle (OTAs) | **Distribution → Channels** | Im Channel-Manager zugeordnet |

Einige Regeln aus dem [Hilfeartikel zum App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- Apps werden „not set up inside your platform“ (nicht in Ihrer Plattform eingerichtet). Sie nutzen das Kontaktformular auf der Seite der App, und der Anbieter verbindet sie.
- Little Hotelier berechnet für die Anbindung nichts, jede App hat ihren eigenen Preis. Die [App-Store-Seite](https://www.littlehotelier.com/app-store/) sagt, die meisten kosten unter 50 USD im Monat.
- Die Einrichtung dauert Minuten, bei manchen Apps bis zu 48 Stunden. Support für eine App kommt vom Anbieter der App.

Plug-ins betreffen nur Ihre Buchungsmaschine. Stand Oktober 2026 umfasst die [Liste](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) Google Analytics 4 und Meta Pixel, Preisvergleich (123compare.me, TripTease), Chatbots (HiJiffy, Book Me Bob), Tripadvisor Review Express, Treueprogramme (The Guestbook, Laasie) und Werbetools (Google Ads, Sojern, The Hotels Network, Flip.to und andere).

## Buchhaltung: Xero, QuickBooks und andere

In der App-Store-Liste, die wir im Oktober 2026 geprüft haben, gibt es keine Live-Synchronisierung für die Buchhaltung. Little Hotelier bietet einen **Buchhaltungsexport** (Accounting Export):

1. Richten Sie zuerst Ihren Kontenplan und Ihre Steuercodes in Xero, QuickBooks oder Ihrer eigenen Software ein.
2. Öffnen Sie in Little Hotelier **Setup → Accounting exports** (klassisch: **Front Desk → Setup → Accounting Integration**) und tragen Sie die Standardkonten und Steuercodes für Zimmerumsatz, Extras, Steuern, Kartenaufschläge und Servicegebühren ein.
3. Öffnen Sie in jeder Periode **Reports → Operational → Accounting**, wählen Sie die Daten und klicken Sie auf **Export**.

Exportiert werden nur Rechnungen, die als **final** markiert sind, als CSV (oder als ZIP mit CSVs bei großen Zeiträumen), „designed for Xero and QuickBooks“ für den Import ([Einrichtungsanleitung](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [Exportanleitung](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). In Spanien steht die E-Rechnung VeriFactu unter den Tarifmerkmalen auf der [Preisseite](https://www.littlehotelier.com/pricing/).

Hier üben Rezensenten die meiste Kritik. Auf [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/) schreiben Nutzer, „the reports and syncing to accounting software can be improved“ (die Berichte und die Synchronisierung mit Buchhaltungssoftware könnten besser sein). Wenn Ihr Steuerberater eigentlich jedes Rechnungs-PDF des Quartals will, lesen Sie [alle Little-Hotelier-Rechnungen auf einmal herunterladen](/blog/download-all-little-hotelier-invoices).

## Online-Check-in und Gästemeldung

Der App Store hat mehrere Check-in-Apps, mit den Preisbereichen, die seine Seite zeigt (Oktober 2026):

- **Chekin** (0–50 USD/Monat): Ausweisprüfung mit biometrischem Abgleich, digitale Anmeldeformulare, Polizei- und Statistikmeldungen und Kurtaxe in 18 Ländern und Regionen, darunter Spanien, Italien, Portugal, Frankreich, Deutschland und Thailand ([Hilfeartikel](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (0–50 USD): Online-Check-in, eine Gäste-App und Bewertungsanfragen.
- **Vikey** (0–50 USD): Self-Check-in und Smart Locks.
- **Abitari Kiosk**, **OpenKey** und **Akia**: Kiosk, mobile Schlüssel und kontaktloser Check-in.

Little Hotelier hat auch eine eigene Option. Mit dem Add-on **Guest Engagement** kann ein Compliance-Check-in-Formular Gästedaten an die Behörden in Italien, Spanien, Portugal, Deutschland, der Schweiz, Österreich, Kroatien, Tschechien und Kolumbien senden ([Quelle](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Betriebe in Spanien sehen in [SES Hospedajes mit Little Hotelier](/blog/ses-hospedajes-little-hotelier), wie das zu SES Hospedajes passt, und die Regeln jedes Landes stehen im Leitfaden [Meldepflicht für Gäste nach Land](/blog/guest-registration-rules-by-country).

Wenn Sie Chekin nutzen, zeigt das kostenlose Userscript **Chekin Connection** den Chekin-Check-in-Status direkt in der Little-Hotelier-Reservierung: gefundene Gäste, Telefon- und Ausweisnummern, mit einer Schaltfläche, die das Dokument für die Rechnung in die Buchung kopiert.

::screenshot{src="/images/scripts/show-chekin/to.png" alt="Little-Hotelier-Reservierung auf Spanisch mit einem Chekin-Panel: Status 1 Gast gefunden, eine Tabelle mit Name, Telefon und Ausweisdokument sowie den Schaltflächen Use document und View in Chekin" caption="Das kostenlose Skript Chekin Connection zeigt Check-in-Daten, ohne die Reservierung zu verlassen."}
::

Installieren Sie es über [Chekin Connection](/tools/ui/show-chekin). Mit der [Installationsanleitung](/tools/ui/instructions) dauert das nur wenige Minuten.

## Preise und Revenue Management

Zu den Revenue-Management-Apps im App Store gehören **RoomPriceGenie**, **Smartpricing**, **Happyhotel** und **Pricepoint**. Das Hilfecenter nennt außerdem **Aiosell** und **Right Revenue** ([Quelle](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

Eine Grenze, die Sie vor Vertragsabschluss kennen sollten: Das klassische Hilfecenter sagt, ein verbundenes RMS „can control rate updates, not restrictions“ (kann Preis-Updates steuern, keine Beschränkungen). Mindestaufenthalte und Stop-Sells bleiben in Little Hotelier ([Quelle](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

Die eigene Option von Little Hotelier ist **Dynamic Revenue Plus**, ein Add-on im Tarif Pro mit datenbasierten Preisempfehlungen. Der Tarif Pro selbst enthält Berichte zu Mitbewerberpreisen und Ratenparität.

Hotelier Tools ergänzt Mitbewerberpreise von Booking.com und Google (Beta) und Preisempfehlungen mit einem schrittweisen „Why?“ (Alpha). In Little Hotelier ändert sich nichts, bevor Sie bestätigen. Siehe [dynamische Preise für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Gästenachrichten und WhatsApp

Von Haus aus bündelt der **Messaging hub** in Guest Engagement WhatsApp, Airbnb, SMS (über Twilio), Booking.com und den E-Mail-Verlauf in einem Posteingang. WhatsApp läuft über die WhatsApp Business API: Antworten innerhalb des 24-Stunden-Fensters sind kostenlos, Vorlagennachrichten berechnet WhatsApp ([Quelle](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

Alternativen im App Store sind **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** und **Zingle**.

::callout{type="tip" title="Booking.com-Gäste bekommen Ihre E-Mails nicht?"}
Booking.com blockiert E-Mails und Links von Systemen, die es nicht kennt. Little Hotelier bittet Sie, im Extranet `@app.littlehotelier.com` und `@guestjoy.com` als E-Mail-Adressen und `siteminder.com` und `guestjoy.com` als Links unter **Property → Messaging preferences → Security settings** hinzuzufügen ([Schritte](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Hotelier Tools hat ebenfalls einen Gäste-Posteingang (Alpha): WhatsApp, Gmail, Outlook oder jedes IMAP-Postfach und Booking.com-Nachrichten in einer Liste, mit KI-entworfenen Antworten, die ein Mensch freigibt. Die WhatsApp-Verbindung nutzt eine WhatsApp-Web-Sitzung (WAHA), nicht die offizielle Business API. Vergleichen Sie die Optionen in [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier).

## KI- und API-Integrationen

„KI-Integration“ bedeutet für einen Betrieb mit Little Hotelier zwei verschiedene Dinge.

**KI, die Ihre Zimmer verkauft.** Demand Plus enthält **AI bookings**: Ihr Betrieb kann über den Partner DirectBooker mit Live-Preisen in ChatGPT und Claude erscheinen, und Gäste schließen die Buchung auf Ihrer Buchungsmaschine ab. Die Funktion ist in der Beta-Phase, mit 0 % Provision bis zum 30. November 2026. Ab dem 1. Dezember 2026 gelten 6 % zuzüglich Steuern auf abgeschlossene KI-Buchungen, ein Opt-out gibt es nicht ([Quelle](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbots wie HiJiffy und Book Me Bob docken an die Buchungsmaschine an.

**KI, die mit Ihren eigenen Daten arbeitet.** Hier gibt es keine offizielle Option. Little Hotelier gibt Betrieben keinen API-Schlüssel für Reservierungen oder Gäste (die ganze Antwort steht in [Hat Little Hotelier eine API?](/blog/little-hotelier-api)).

Hotelier Tools füllt diese Lücke mit einer REST-API und einem MCP-Server (beide Beta). Es ist ein unabhängiges Produkt, das sich mit Ihrem eigenen, verschlüsselt gespeicherten Little-Hotelier-Login verbindet. Damit können Sie:

- Claude oder ChatGPT nach Anreisen, offenen Salden oder fehlenden Rechnungen fragen ([Was ist ein MCP-Server?](/blog/what-is-mcp-server-hotels), [ChatGPT verbinden](/blog/connect-chatgpt-to-little-hotelier))
- jeden Monat eine Google-Tabelle füllen ([Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel))
- Werkzeuge ohne App im App Store mit einem kleinen Skript verbinden

::demo-cta{path="/developer/rest-api"}
::

## Kostenlose Userscripts für kleine Lücken

Manche Lücken brauchen keine Integration, nur eine bessere Ansicht. Die kostenlosen [Userscripts](/tools/ui) laufen über Tampermonkey in Ihrem Browser, ändern nur, wie Little Hotelier für Sie aussieht, und bleiben für immer kostenlos. Nützlich als Ergänzung zu den Integrationen oben:

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): eine Schätzung der Booking.com-Provision und Ihres Nettos, direkt in der Reservierung.
- [Prices Display](/tools/ui/prices-display): Ihre Preise in der Kalenderansicht.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): eine Auswahlliste spanischer Provinzen, die auch das Land ausfüllt.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): die Rechnung drucken, ohne Menüs zu öffnen.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Zusammenfassung einer Little-Hotelier-Reservierung auf Spanisch mit zusätzlichen Zeilen für Überweisungsgebühr, Booking.com-Provision, Gesamtprovision mit Mehrwertsteuer und ungefähres Netto" caption="Show Booking.com Commissions ergänzt jede Booking.com-Reservierung um eine geschätzte Provision und das Netto."}
::

Das ganze Set steht auf der [Seite der Browser-Erweiterungen](/chrome-extensions), und [kostenlose Chrome-Erweiterungen für Little Hotelier](/blog/little-hotelier-chrome-extensions) erklärt jedes einzelne.

## Nächste Schritte

- Sie brauchen Check-in, Upselling oder Bewertungen? Beginnen Sie im App Store und fragen Sie nach einer kostenlosen Testphase.
- Sie brauchen Buchhaltung? Ordnen Sie Ihre Codes einmal unter **Setup → Accounting exports** zu und exportieren Sie dann jeden Monat die abgeschlossenen Rechnungen.
- Sie brauchen Ihre eigenen Daten in einer Tabelle, einem Skript oder einem KI-Assistenten? Nutzen Sie eine API-Schicht wie [API & MCP von Hotelier Tools](/tools/bot/api-mcp), für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.
