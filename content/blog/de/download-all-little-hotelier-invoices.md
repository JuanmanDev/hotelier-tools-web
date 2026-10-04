---
title: "Little-Hotelier-Rechnungen herunterladen: alle auf einmal für die Quartalsabrechnung"
seoTitle: "Alle Little-Hotelier-Rechnungen auf einmal herunterladen"
description: "Little Hotelier bündelt vorhandene Rechnungen als ZIP. So geht es, wie Sie fehlende erzeugen und dem Steuerberater pro Quartal ein ZIP und eine CSV senden."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [little hotelier rechnungen herunterladen, little hotelier rechnung, little hotelier rechnungsbericht, little hotelier export rechnungen, rechnung herunterladen hotel, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Seite Invoices in Hotelier Tools mit 66 Rechnungen insgesamt, Q4 und Q3 2026 jeweils mit den Schaltflächen Preview CSV und ZIP und dem geöffneten September 2026 als Tabelle mit Rechnungsnummern, Gästen, Steuernummern, Check-out-Daten und Summen"
featured: true
faq:
  - q: "Kann Little Hotelier alle meine Rechnungen auf einmal als PDF herunterladen?"
    a: "Ja, für Rechnungen, die bereits existieren. Gehen Sie zu Front Desk > Reports > Invoices, filtern Sie den Zeitraum, klicken Sie auf Download invoice PDFs und dann auf Download zip. Little Hotelier verlangt vorher eine Bestätigung per Multi-Faktor-Authentifizierung."
  - q: "Synchronisiert Little Hotelier Rechnungen automatisch mit Xero oder QuickBooks?"
    a: "Nein. Der Bericht Accounting exportiert als final markierte Rechnungen in eine CSV-Datei für den Import in Xero und QuickBooks, die Sie selbst importieren. Es sind nur abgeschlossene Rechnungen enthalten."
  - q: "Ändert Hotelier Tools meine Rechnungsnummern oder meine Vorlage?"
    a: "Nein. Hotelier Tools bittet Little Hotelier, jede Rechnung zu erstellen. Es ist also ein Dokument von Little Hotelier selbst, mit Ihrer Nummerierung, Ihrem Logo und Ihrem Layout aus Customise invoices."
  - q: "Was passiert mit stornierten Rechnungen in meinem Export?"
    a: "In Little Hotelier wandert eine stornierte, abgeschlossene Rechnung zu Older invoices mit dem Status Cancelled, und ihre Daten erscheinen weiterhin in Exporten. Sagen Sie es Ihrem Steuerberater, damit der Umsatz nicht doppelt gezählt wird."
  - q: "Was kostet Hotelier Tools?"
    a: "Es ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Hotels, die vor dem 31. Dezember 2026 starten, zahlen danach 50 € pro Hotel und Monat über das ganze Jahr 2027. Zum Start ist keine Karte nötig."
---

Ja. Little Hotelier kann jede Rechnung, die **schon existiert**, in ein ZIP packen: Öffnen Sie **Front Desk > Reports > Invoices**, filtern Sie das Quartal und klicken Sie auf **Download invoice PDFs**. Was es nicht tut: Rechnungen erstellen, die niemand erzeugt hat, oder Sie vor Rechnungen warnen, die noch nicht gestellt werden sollten. Dafür erzeugt Hotelier Tools die fehlenden Rechnungen in einem Durchlauf, weist riskante zurück und gibt Ihnen das Quartal als ein ZIP mit PDFs plus eine CSV-Zusammenfassung.

## Kann Little Hotelier alle Rechnungen von Haus aus exportieren?

Ja. Stand Oktober 2026 beschreibt das Hilfecenter von Little Hotelier drei Wege, Rechnungen herauszubekommen. Welcher passt, hängt davon ab, was Ihr Steuerberater verlangt.

| Methode | Was Sie bekommen | Der Haken |
|---|---|---|
| Rechnungsbericht (Invoice report) | Ein ZIP mit Rechnungs-PDFs und eine CSV-Liste | Nur Rechnungen, die bereits existieren |
| Buchhaltungsbericht (Accounting report) | Eine CSV für den Import in Xero und QuickBooks | Nur als final markierte Rechnungen |
| Eine Reservierung nach der anderen | Ein PDF (Print oder Save as PDF) | Für ein ganzes Quartal zu langsam |

### Der Invoice report (PDFs in einem ZIP)

1. Gehen Sie zu **My Apps > Front Desk > Reports** und klicken Sie auf **Invoices**.
2. Wählen Sie den Zeitraum Ihres Quartals. Optional filtern Sie nach **Invoice status** und **Payment status** und klicken dann auf **Apply**.
3. Klicken Sie auf **Download invoice PDFs**, dann auf **Download zip**.
4. Bestätigen Sie die Abfrage zur Multi-Faktor-Authentifizierung. Das ZIP wird heruntergeladen.

**Export** im selben Bericht liefert stattdessen eine CSV. Quelle: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### Der Accounting report (CSV für Xero oder QuickBooks)

Gehen Sie zu **My Apps > Front Desk > Reports > Accounting**, wählen Sie **Yesterday**, **Last 7 days** oder einen eigenen Zeitraum und klicken Sie auf **Export**. Sie erhalten eine CSV (bei großen Exporten ein ZIP) mit Kontakt, Adresse, Rechnungsnummer, Daten, Beträgen, Konto und Steuercodes.

Zwei Grenzen: Es werden nur Rechnungen exportiert, die **als final markiert** sind, und die Datei ist für den manuellen Import gedacht. Es ist keine Live-Synchronisierung. Die Kontocodes legen Sie einmal unter **Front Desk > Setup > Accounting Integration** fest. Quellen: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) und [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### Einzeln

Öffnen Sie die Reservierung, klicken Sie auf **Print**, wählen Sie **Invoice** und im Druckfenster **Save as PDF** ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). Tun Sie das oft, setzt das kostenlose Skript [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) einen direkten Druck-Link in die Reservierung.

## Was der Export von Little Hotelier nicht leistet

Der Download ist der leichte Teil. Das Quartal geht meist schon früher schief:

- **Fehlende Rechnungen.** Das ZIP enthält nur Rechnungen, die jemand erzeugt hat. Laut Hilfecenter erstellen Sie sie einzeln pro Reservierung (Reiter **Invoices** > **Generate invoice**). Ein Aufenthalt, den niemand angeklickt hat, fehlt also schlicht.
- **Duplikate.** Jede Erstellungsanfrage legt in Little Hotelier ein neues Dokument an, sodass ein erneutes Erzeugen eines Aufenthalts zwei Rechnungen hinterlassen kann, wo Ihr Steuerberater eine erwartet.
- **Zu frühe Rechnungen.** Eine Rechnung, die vor dem Check-out des Gastes erstellt wird, ist veraltet, sobald ein Extra oder eine Zahlung hinzukommt. Die Korrektur bedeutet dann eine berichtigte Rechnung, eine Gutschrift oder, in Spanien, eine Rechnungsberichtigung (factura rectificativa).
- **Finalisieren.** Der Buchhaltungsexport verlangt, dass jede Rechnung als final markiert ist, und laut Hilfecenter geschieht das pro Reservierung.

## So laden Sie ein ganzes Quartal als ein ZIP und eine CSV herunter (der schnellere Weg)

Hotelier Tools ist ein Dashboard, das sich mit Ihrem eigenen Login mit Little Hotelier verbindet. Die Seite **Invoice Download** erstellt die Rechnungen eines Zeitraums in einem Durchlauf und übergibt Ihnen das Ergebnis pro Quartal.

1. Registrieren Sie sich bei [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) und verbinden Sie Little Hotelier unter **Credentials**. Ihr Login wird verschlüsselt gespeichert.
2. Öffnen Sie im Menü **Invoice Download** (`/invoices`).
3. Klicken Sie auf **Generate invoices** und wählen Sie den Zeitraum, zum Beispiel 1. Juli bis 30. September.
4. Die App liest diese Reservierungen aus Little Hotelier und erstellt Rechnungen für die Aufenthalte, die infrage kommen. Alles, was sie nicht abrechnen kann, landet mit Begründung unter **Errors**. Nichts wird stillschweigend übersprungen.
5. Ihre Rechnungen erscheinen nach Quartal und Monat gruppiert. Klicken Sie beim Quartal auf **ZIP**, um alle PDFs herunterzuladen, oder auf **Preview CSV**, um die Zusammenfassung zuerst zu prüfen.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Seite Invoices nach Quartalen gruppiert, mit den Schaltflächen Preview CSV und ZIP bei Q4 und Q3 2026, der geöffneten Rechnungstabelle September 2026 und einer Meldung Pack downloaded, die den Download des Rechnungspakets für Q3 2026 bestätigt" caption="Jedes Quartal hat sein eigenes ZIP mit PDFs und eine CSV-Zusammenfassung. Ein Klick auf ZIP lädt das ganze Quartal herunter." path="/invoices"}
::

Die Rechnungen sind Dokumente von Little Hotelier selbst. Hotelier Tools bittet Little Hotelier, jede zu erstellen, sodass Ihre Nummerierung, Ihr Logo und Ihr Layout aus **Customise invoices** genau so bleiben, wie sie sind.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels.
::

## Prüfungen vor der Rechnungsstellung: fehlende Steuernummern, zu frühe Rechnungen und Duplikate

Bevor es Little Hotelier um eine Rechnung bittet, führt Hotelier Tools eine Vorabprüfung durch. Es verweigert die Rechnung für einen Aufenthalt, wenn:

- der Gast **noch nicht ausgecheckt** hat, weil die Zahlen nicht final sind
- es eine **Firmenrechnung ohne Steuernummer** oder Rechnungsanschrift ist
- die **Steuernummer fehlerhaft** ist
- der Aufenthalt **bereits abgerechnet** ist, was Duplikate verhindert

Ein Privatgast braucht keine steuerlichen Angaben, ein fehlendes Ausweisdokument ist für ihn daher nur eine Warnung.

Das ist der Unterschied zwischen einem ZIP, dem Ihr Steuerberater vertrauen kann, und einem, das er mit Rückfragen zurückschickt.

## Was passiert mit Buchungen, die nicht abgerechnet werden können?

Sie landen unter **Errors** (`/invoices/errors`), eine Zeile pro Reservierung mit der Begründung.

1. Wählen Sie oben den Zeitraum.
2. Filtern Sie nach Problemart: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** und weitere.
3. Beheben Sie die Reservierung in Little Hotelier: Steuernummer ergänzen, Zahlung erfassen oder den Gast auschecken.
4. Prüfen Sie die Reservierung anschließend unter Errors erneut oder markieren Sie sie als erledigt. **Copy CSV** liefert die Liste für einen Kollegen.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Seite Errors and issues für den 1. Juli bis 30. September 2026 mit Copy CSV, Filterchips für Problemarten wie Missing DNI, Pending payment, Not checked out und Download failed sowie einer Tabelle der Reservierungen mit Rechnungs-ID, Aufenthaltsdaten, Summe, Problem-Badge, Begründung (auf Spanisch) und Aktionen" caption="Jede Reservierung, die ein Durchlauf nicht abrechnen konnte, mit Begründung und einer Möglichkeit, es erneut zu versuchen." path="/invoices/errors"}
::

Hängt ein Aufenthalt an einem Rundungssaldo von einem oder zwei Cent, kann die Cent-Korrektur unter **Settings > Invoices** diese winzigen Salden ausgleichen.

::demo-cta{path="/invoices"}
::

## In welcher Sprache werden die Rechnungen erstellt?

Sie wählen unter **Settings > Invoices** (`/settings/invoices`):

- **From the guest's country** (Nach Land des Gastes): Jede Rechnung nutzt die Sprache des Landes in der Anschrift des Gastes. Fehlt das Land oder passt keines, gilt Ihre Ersatzsprache.
- **Always the same language** (Immer dieselbe Sprache): Alle Rechnungen in einer Sprache, egal wer der Gast ist.

Wählen Sie die **Fallback language** und klicken Sie auf **Save changes**.

## Was Sie Ihrem Steuerberater jedes Quartal schicken

Eine kurze Routine, die die meisten Rückfragen vermeidet:

1. **Starten Sie den Lauf für das Quartal** ein paar Tage nach Quartalsende, damit späte Check-outs abgeschlossen sind.
2. **Arbeiten Sie die Errors ab**, bis nur noch Aufenthalte übrig sind, die wirklich keine Rechnung brauchen.
3. **Laden Sie das ZIP und die CSV herunter** und senden Sie beides.
4. **Prüfen Sie die Rechnungsnummern** auf Lücken oder Wiederholungen, bevor Sie senden.
5. **Erwähnen Sie stornierte Rechnungen.** Wird in Little Hotelier eine abgeschlossene Rechnung storniert, wandert sie zu **Older invoices** mit dem Status Cancelled, und ihre Daten erscheinen weiterhin in Exporten ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Ihr Steuerberater muss das wissen, damit der Umsatz nicht doppelt gezählt wird.

In Spanien fließt das in Ihre Umsatzsteuererklärung ein ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). Nutzen Sie VeriFactu, schließt Little Hotelier Rechnungen ab, indem es sie selbst an die AEAT übermittelt ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools hat keine eigene VeriFactu-Funktion; erledigen Sie diesen Schritt also in Little Hotelier. In jedem Land mit Pflicht zur E-Rechnung behandeln Sie das ZIP als Kopien für Ihre Unterlagen und klären die Regeln mit Ihrem Steuerberater.

Entwickler können Rechnungs-PDFs auch einzeln über die [REST-API von Hotelier Tools](/blog/little-hotelier-api) abrufen. Und wenn Ihr Steuerberater auch Reservierungsdaten möchte, lesen Sie [Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel).

## Zusammenfassung

- Der **Invoice report** von Little Hotelier packt die PDFs bereits vorhandener Rechnungen in ein ZIP, der **Accounting report** exportiert abgeschlossene Rechnungen als CSV für Xero oder QuickBooks.
- Keiner erstellt fehlende Rechnungen oder verhindert Duplikate und zu frühe Rechnungen.
- Hotelier Tools erzeugt die Rechnungen eines Zeitraums in einem Durchlauf, weist riskante Rechnungen zurück, listet jeden Fehler mit Begründung auf und gibt Ihnen pro Quartal ein ZIP und eine CSV.
- Um den Rückstau an der Quelle zu stoppen, [senden Sie jede Rechnung automatisch beim Check-out](/blog/send-invoice-to-guest-at-checkout). Alles, was die Rechnungsfunktion kann, sehen Sie auf der Seite [Invoicing](/tools/bot/invoicing).
