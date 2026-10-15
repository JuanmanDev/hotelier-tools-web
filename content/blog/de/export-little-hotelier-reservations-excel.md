---
title: "Little-Hotelier-Reservierungen nach Excel exportieren: Gästelisten sichern, bevor Daten maskiert werden"
seoTitle: "Little-Hotelier-Reservierungen nach Excel exportieren"
description: "Little Hotelier maskiert Gästedaten 180 Tage nach dem Check-out. So exportieren Sie Reservierungen und Gästelisten nach Excel, manuell oder automatisch."
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [little hotelier reservierungen exportieren, little hotelier export excel, little hotelier berichte, little hotelier csv, gästeliste hotel excel, hotel reservierungen tabelle, little hotelier gästedaten maskiert]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Entwicklerportal von Hotelier Tools mit Karten für REST API und Swagger, MCP setup, API keys und LH methods, über einem Authentifizierungsbeispiel mit einem API-Schlüssel"
faq:
  - q: "Was genau wird nach 180 Tagen maskiert?"
    a: "Laut Little Hotelier werden personenbezogene Gästedaten (PII) 180 Tage nach dem Check-out-Datum der Reservierung maskiert. Die Buchung bleibt bestehen, aber Berichte und Suchen zeigen die persönlichen Daten des Gastes nicht mehr an. Exportieren Sie, was Sie brauchen, vor diesem Datum."
  - q: "Warum fehlen Telefonnummern in meinem Little-Hotelier-Export?"
    a: "Little Hotelier lässt Telefonnummern der Gäste aus Sicherheitsgründen in der Reservierungs-CSV weg. In der Reservierung oder im Gästeprofil sehen Sie weiterhin eine Nummer, und die Gästesuche in der API von Hotelier Tools liefert ein Feld phone_number, wenn Little Hotelier eine hat."
  - q: "Kann ich den Export in Little Hotelier planen?"
    a: "Die Artikel des Hilfecenters, die wir im Oktober 2026 geprüft haben, beschreiben das manuelle Ausführen und Exportieren von Berichten, ohne geplanten Export. Zum Automatisieren nutzen Sie ein Skript oder einen Google-Sheets-Trigger, der die Daten über eine API liest."
  - q: "Kann ich mehr als ein Jahr auf einmal exportieren?"
    a: "Little Hotelier begrenzt den Export der Gästesummen auf 365 Tage, und die Reservierungssuche des Channel-Managers reicht nur 548 Tage zurück. Exportieren Sie jeweils ein Jahr (oder einen Monat) und bewahren Sie die Dateien auf."
  - q: "Wie exportiere ich nur Booking.com-Reservierungen?"
    a: "Filtern Sie in den Berichten des Channel-Managers nach Kanal oder exportieren Sie alles und filtern in Excel nach der Buchungsnummer. Nummern mit BDC sind Booking.com, EXP Expedia, ABB Airbnb, AGO Agoda, HWL Hostelworld und LH Ihre eigene Rezeption oder Ihre Buchungsmaschine."
---

Öffnen Sie **Reservations**, legen Sie den Zeitraum fest, klicken Sie auf **Search** und dann auf **Export**: Little Hotelier lädt eine CSV-Datei herunter, die sich in Excel oder Google Sheets öffnen lässt. Tun Sie das regelmäßig, denn Little Hotelier maskiert persönliche Gästedaten **180 Tage nach dem Check-out**, und der Export enthält nie Telefonnummern. Wollen Sie eine Kopie, die jeden Monat automatisch entsteht, lesen Sie dieselben Daten über eine API.

## Warum Sie exportieren sollten, bevor Gästedaten maskiert werden

Das Hilfecenter von Little Hotelier sagt es klar: „Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date“ ([Suche im Channel-Manager](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [Berichte im Channel-Manager](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [Berichte der Buchungsmaschine](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).

Zwei weitere Grenzen sollten Sie kennen:

- Die Reservierungssuche des Channel-Managers findet nur Buchungen, die „created or checked out within the last 548 days“ (innerhalb der letzten 548 Tage erstellt oder ausgecheckt wurden).
- Sind Daten einmal maskiert, kann sie kein Export und keine API zurückholen.

Brauchen Sie Gästedaten für Rechnungen, eine Liste wiederkehrender Gäste, einen Streitfall oder Ihre eigene Statistik, exportieren Sie sie also, solange sie noch da sind. Bewahren Sie nur auf, wofür Sie einen Grund haben, und speichern Sie die Dateien zugriffsgeschützt: Sie enthalten personenbezogene Daten.

::callout{type="info" title="Zwei Versionen von Little Hotelier"}
Konten, die seit Mai 2025 angelegt (oder aktualisiert) wurden, nutzen die neuere **Plattform** mit einem [eigenen Hilfecenter](https://help-platform.littlehotelier.com/en/). Ältere Konten nutzen die **klassische** Version. Die folgenden Schritte nennen beide Menüpfade.
::

## So exportieren Sie Reservierungen aus Little Hotelier nach Excel

1. Öffnen Sie **Reservations**. In der klassischen Version: **My Apps → Front Desk → Reservations**.
2. Legen Sie **Date type** (**Check-in date**, **Check-out date** oder **Booked on date**) sowie **Date from** und **Date to** fest. Ein Kalendermonat ist eine gute Einheit.
3. Wählen Sie bei Bedarf einen **Status**: **All**, **Confirmed**, **Checked-in**, **Checked-out** oder **Cancelled**.
4. Klicken Sie auf **Search**.
5. Klicken Sie auf **Export**. Die Datei wird als `.csv` heruntergeladen. Auf der neueren Plattform verlangt Little Hotelier vor Exporten von Reservierungen, Gästen, Zahlungen, Umsatz und Rechnungen Ihren MFA-Code oder Passkey.

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="Klassische Seite Reservations in Little Hotelier auf Spanisch: Filter für Nachname des Gastes, Buchungsnummer, Rechnungsnummer, Datumstyp, Status, Daten und Quelle, die Schaltfläche Search, 36 gefundene Reservierungen und der Link Export" caption="Die klassische Seite Reservations (spanische Oberfläche). Erst suchen, dann lädt Export alle Ergebnisse als CSV herunter."}
::

Zwei Details aus dem [Hilfecenter](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) ersparen Verwirrung:

- Liefert eine Suche viele Treffer, zeigt der Bildschirm nur die **ersten 31 Tage**. Der Export enthält alles.
- Um Gäste für einen Zeitraum zu zählen, stimmen Sie Date type und Status ab (Check-in mit **Checked-in**, Check-out mit **Checked-out**). Der [klassische Leitfaden](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) begrenzt diesen Export auf **365 Tage**.

### Was in der CSV steht (und was nicht)

Der Export hat mehr Spalten als der Bildschirm. Laut [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) erhalten Sie:

- **Buchung:** Nummer, Buchungsdatum, Kanal, Status, Stornodatum
- **Gast:** Vor- und Nachname, E-Mail, Organisation, vollständige Anschrift
- **Aufenthalt:** Check-in, Check-out, Nächte, Ankunftszeit, Gästekommentare, Zimmertypen, Zimmer, Ratenpläne
- **Geld:** Zwischensumme, Extras, Zuschläge, Steuern, erhaltene Zahlungen, offener Saldo
- **Personen:** Erwachsene, Kinder, Kleinkinder; Antworten auf eigene Buchungsfragen

Nicht enthalten: **Telefonnummern** („for security reasons“, also aus Sicherheitsgründen) und ein Änderungsverlauf, etwa der genaue Zeitpunkt, zu dem ein Gast eingecheckt wurde.

## Welche anderen Berichte kann Little Hotelier exportieren?

Die meisten Berichte haben eine Schaltfläche **Export**, die eine CSV erzeugt. Die Pfade gelten für die neuere Plattform, außer den Zeilen für Channel-Manager und Buchungsmaschine, die aus der klassischen Version stammen (unter **My Apps**). Klassische Konten finden die meisten anderen Berichte unter **My Apps → Front Desk → Reports**.

| Bericht | Wo | Was Sie bekommen |
|---|---|---|
| Guests | Reports → Operational → Guests | Gäste, die übernachtet haben, nach Zeitraum |
| Invoices | Reports → Operational → Invoices | Rechnungsliste als CSV, PDFs als ZIP |
| Accounting | Reports → Operational → Accounting | Abgeschlossene Rechnungen im Layout für Xero und QuickBooks |
| Revenue (7 Ansichten) | Reports → Strategic → Revenue | Summary, Zimmertyp, Zimmer, Ratenplan, Kanal, Steuern, Extras |
| Channel manager | Channel Manager → Reports | Reservierungsübersicht, Zimmeraufenthalte, Check-ins, Channel Yield |
| Booking engine | Direct Booking → Reports | Buchungen mit genutztem Gerät und DSGVO-Einwilligung |
| Spanish police | Reports → Operational → Police report | Nur Spanien: Gästedatensätze für das Polizeiregister |

Quellen: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports).

Tipp: Der Umsatzexport **Summary** hat eine Spalte „Rate per night“ mit einer Zeile pro Nacht. So sehen Sie am schnellsten, zu welchem Preis jede Nacht eines langen Aufenthalts verkauft wurde.

## So öffnen Sie die CSV in Excel ohne kaputte Umlaute

Wird aus „Müller“ plötzlich „MÃ¼ller“, hat Excel die falsche Kodierung erraten. Importieren Sie die Datei, statt sie doppelt anzuklicken:

1. Gehen Sie in Excel zu **Daten → Aus Text/CSV** und wählen Sie die Datei ([Schritte von Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)).
2. Stellen Sie **Dateiursprung** auf **65001: Unicode (UTF-8)** und **Trennzeichen** auf **Komma**.
3. Klicken Sie auf **Laden**.

In Google Sheets nutzen Sie **Datei → Importieren → Hochladen** und lassen das Trennzeichen auf automatisch. Sheets liest UTF-8 richtig.

## Eine Liste wiederkehrender Gäste: Was Sie exportieren können und was Sie brauchen

Die Reservierungs-CSV enthält Namen, E-Mail-Adressen und Anschriften, genug für ein Dankeschön oder eine „Kommen Sie wieder“-E-Mail. Prüfen Sie vor dem Versand, wer zugestimmt hat, von Ihnen zu hören:

- Der Export des Berichts der Buchungsmaschine (**Booking engine**) hat eine Spalte **GDPR consent**. Laut Little Hotelier ist sie gefüllt, wenn der Gast eingewilligt hat, und leer, wenn nicht ([Quelle](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)).
- Nutzen Sie Guest Engagement, sendet **Guest engagement → Guests → Mailchimp export** Gäste an eine Mailchimp-Liste. Alle Gäste werden „regardless of GDPR consent status“ (unabhängig vom DSGVO-Einwilligungsstatus) exportiert, mit markiertem Opt-in-Status, filtern Sie also danach ([Quelle](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp)).

Die Regeln für Werbung unterscheiden sich je nach Land. Schreiben Sie nur Gäste an, die eingewilligt haben, es sei denn, Sie haben mit einem Berater geklärt, dass eine andere Rechtsgrundlage gilt.

## Der schnellere Weg: automatische Exporte mit einer API

Little Hotelier hat keinen API-Schlüssel für Ihre Reservierungen (Details unter [Hat Little Hotelier eine API?](/blog/little-hotelier-api)). Hotelier Tools, ein unabhängiges Dashboard, verbindet sich mit Ihrem eigenen Little-Hotelier-Login und gibt Ihnen eine REST-API und einen MCP-Server für KI-Assistenten. Es steht in keiner Verbindung zu SiteMinder oder Little Hotelier, wird von ihnen weder unterstützt noch empfohlen und ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="warning" title="Eine API kann Daten nicht entmaskieren"}
Hotelier Tools liest, was Little Hotelier noch hält. Buchungen, deren Check-out länger als 180 Tage zurückliegt, kommen auch über die API maskiert zurück. Automatisieren Sie den Export jetzt, damit er jeden Monat sichert, solange die Daten noch vollständig sind.
::

Erstellen Sie zuerst einen Schlüssel: **Developer → API & MCP → API Keys** (`/developer/api-keys`), geben Sie einen Namen ein, klicken Sie auf **Generate key** und kopieren Sie ihn. Die Seite zeigt ihn nur einmal.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Seite API keys direkt nach dem Erzeugen eines Schlüssels namens Blog integration: das Formular Generate a new key, ein grünes Feld Key generated mit dem Hinweis Copy this key now, it will not be shown again, der maskierte Schlüssel mit Kopierschaltfläche und der neue Schlüssel unter Active keys mit Revoke" caption="Ein Schlüssel pro Verwendung: Benennen Sie ihn nach der Tabelle oder dem Skript, das ihn verwendet, und kopieren Sie ihn, solange er angezeigt wird." path="/developer/api-keys"}
::

### Ohne Code: Export im Dashboard ausführen

1. Öffnen Sie **LH Methods** (`/methods`) und wählen Sie `fetchReservationsCSV`.
2. Tragen Sie `dateFrom` und `dateTo` ein (zum Beispiel `2026-09-01` und `2026-09-30`).
3. Führen Sie die Methode aus. Sie holt Ihre Reservierungen als CSV, die Sie in eine Tabelle einfügen können.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Seite Little Hotelier methods in Hotelier Tools mit einer Karte pro Methode, etwa getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parameters), generateInvoice und getInvoices" caption="Wählen Sie fetchReservationsCSV unter LH Methods, um den CSV-Export der Reservierungen aus Ihrem Browser auszuführen, ganz ohne Code." path="/methods"}
::

### Google Sheets, jeden Monat aktualisiert

Dieses Apps Script fügt bei jedem Lauf ein Tabellenblatt mit den Reservierungen des Vormonats (nach Check-in-Datum) hinzu.

1. Öffnen Sie in einer neuen Google-Tabelle **Erweiterungen → Apps Script**.
2. Fügen Sie unter **Projekteinstellungen** eine Skripteigenschaft namens `HT_API_KEY` mit Ihrem Schlüssel `htk_…` hinzu. So bleibt der Schlüssel aus dem Code heraus.
3. Fügen Sie diesen Code ein und speichern Sie:

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. Klicken Sie einmal auf **Ausführen** und erlauben Sie den Zugriff, wenn Google fragt.
5. Zum Planen öffnen Sie **Trigger → Trigger hinzufügen**, wählen `importLastMonth`, als Ereignisquelle **Zeitgesteuert** und einen **Monatstimer** am Tag 1 ([Anleitung von Google](https://developers.google.com/apps-script/guides/triggers/installable)).

Die API liefert bis zu 100 Reservierungen pro Aufruf. Füllt ein Monat alle 100 Zeilen, teilen Sie ihn in zwei Hälften. Jeder, der das Skript bearbeiten kann, kann den Schlüssel lesen. Geben Sie die Tabelle also mit Bedacht frei und widerrufen Sie den Schlüssel unter `/developer/api-keys`, falls er in falsche Hände gerät.

### Einen KI-Assistenten die Tabelle bauen lassen

Haben Sie Claude oder ChatGPT mit Hotelier Tools verbunden (siehe [Claude mit Little Hotelier verbinden](/blog/connect-claude-to-little-hotelier)), fragen Sie in normalen Worten:

::prompt{label="Claude"}
Liste mit Hotelier Tools alle Reservierungen, die im September 2026 ausgecheckt haben, als Tabelle auf: Buchungsnummer, Gastname, E-Mail, Check-in, Check-out, Nächte, Kanal und Summe. Gib mir dieselbe Tabelle danach als CSV.
::

Der Assistent liest Ihre Reservierungen über den MCP-Server und gibt die Tabelle zurück. Denken Sie daran, dass das, was er liest (Namen, E-Mail-Adressen, Beträge), Teil Ihres Chats mit diesem KI-Anbieter wird.

::demo-cta{path="/methods"}
::

Siehe auch: [Little-Hotelier-Integrationen](/blog/little-hotelier-integrations), [alle Rechnungen auf einmal herunterladen](/blog/download-all-little-hotelier-invoices), [die INE-Belegungsstatistik](/blog/ine-hotel-occupancy-survey).

## Zusammenfassung

- **Von Hand:** **Reservations → Search → Export** liefert eine CSV mit Gästenamen, E-Mail-Adressen und Anschriften, aber ohne Telefonnummern.
- **Frist:** Gästedaten werden 180 Tage nach dem Check-out maskiert, exportieren Sie also jeden Monat.
- **Umlaute:** In Excel mit **Daten → Aus Text/CSV** und UTF-8 importieren.
- **Automatisch:** ein Google-Sheets-Trigger mit der API von Hotelier Tools oder eine Anfrage an Ihren KI-Assistenten. Mehr auf der Funktionsseite [API & MCP](/tools/bot/api-mcp).
