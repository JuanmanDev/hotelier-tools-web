---
title: "Lieferantenrechnungen automatisch per E-Mail sammeln (und Ihrem Steuerberater ein sauberes Quartal übergeben)"
seoTitle: "Lieferantenrechnungen automatisch per E-Mail sammeln"
description: "Rechnungen an eine Adresse schicken lassen oder aus dem Postfach lesen, jede prüfen, Dubletten und geänderte IBANs erkennen und das Quartal exportieren."
date: 2026-10-31
category: invoicing
tags: [lieferantenrechnungen, eingangsrechnungen, e-mail, steuerberater, mehrwertsteuer, facturae]
keywords: [eingangsrechnungen automatisch erfassen, rechnungen aus e-mail anhängen extrahieren, e-mail adresse für eingangsrechnungen, eingangsrechnungen hotel steuerberater, rechnungen aufbewahren spanien wie lange, factura recibida conservar cuantos años, dateinamen rechnungen benennen, doppelte rechnungen erkennen, lieferant geänderte bankverbindung betrug, eingangsrechnungen für steuerberater exportieren]
feature: invoicing
demoPath: /received-invoices
cover: /images/blog/demo/en/supplier-invoices-review-iban-warning.webp
coverAlt: "Eingangsrechnung von Electra Norte, Status To review, über 218,70 €: die Schaltflächen Confirm, Mark as duplicate und Reject, ein roter Kasten Check this invoice before you confirm it mit dem Hinweis, dass die IBAN nicht die der früheren Rechnungen dieses Lieferanten ist, ein nicht angehaktes Kästchen I checked this supplier through a known channel mit der Schaltfläche Acknowledge, und die E-Mail-Details mit Absender, spanischem Betreff, Postfach reservas@example.com, Sender check Not available und Email risk Medium risk"
faq:
  - q: "Wie kann ich Lieferantenrechnungen automatisch aus E-Mails sammeln?"
    a: "Entweder Sie geben Lieferanten eine Adresse, die nur Rechnungen empfängt, oder Sie lassen eine Software das Postfach lesen, an das sie ohnehin schreiben. In Hotelier Tools geht beides: Jedes Haus bekommt eine private Rechnungsadresse, und verbundene Postfächer können täglich, nur lesend, nach Rechnungsanhängen durchsucht werden."
  - q: "Wie lange muss ich Lieferantenrechnungen in Spanien aufbewahren?"
    a: "Steuerlich mindestens vier Jahre, die Verjährungsfrist der Ley General Tributaria, wie die Agencia Tributaria erklärt. Der Código de Comercio verlangt, Unterlagen sechs Jahre aufzubewahren, deshalb raten viele Steuerberater, alles sechs Jahre zu behalten. Für Deutschland und andere Länder klären Sie die Frist mit Ihrem Steuerberater."
  - q: "Darf ich Lieferantenrechnungen nur als PDF oder Scan aufbewahren?"
    a: "In Spanien ja, solange das Verfahren die Echtheit der Herkunft, die Unversehrtheit des Inhalts und die Lesbarkeit garantiert und die Steuerbehörde ohne Verzögerung darauf zugreifen kann. Bewahren Sie die Originaldatei auf, die Sie erhalten haben, keine abgetippte Kopie."
  - q: "Woran erkenne ich eine gefälschte Lieferantenrechnung?"
    a: "Seien Sie vorsichtig, wenn die Bankverbindung von früheren Rechnungen abweicht, die Domain des Absenders sich geändert hat oder die E-Mail ihre Echtheitsprüfung nicht besteht. Hotelier Tools markiert solche Fälle und sperrt Bestätigen und Bezahlen, bis eine Person die Warnung bestätigt, nachdem sie den Lieferanten unter einer bereits bekannten Nummer angerufen hat."
  - q: "Entscheidet die KI, was in meine Buchhaltung kommt?"
    a: "Nein. Jede Rechnung startet als To review. E-Rechnungen werden exakt gelesen und die KI liest PDFs und Fotos, aber nur eine Person kann eine Rechnung bestätigen oder als bezahlt markieren, und was eine Person korrigiert, wird nie durch ein erneutes Auslesen überschrieben."
  - q: "Gehört Hotelier Tools zu Little Hotelier oder zu meiner Buchhaltungssoftware?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Der Export der Eingangsrechnungen ist eine allgemeine CSV- und ZIP-Datei für Ihren Steuerberater, kein zertifiziertes Steuerregister."
---

Um Lieferantenrechnungen automatisch zu sammeln, schicken Sie alle an einen Ort und lassen eine Software die Dateien herausholen: Geben Sie Lieferanten eine eigene Rechnungsadresse, oder lassen Sie ein Tool das Postfach lesen, an das sie ohnehin schreiben. In Hotelier Tools können Lieferanten an eine private Adresse Ihres Hauses mailen, oder Ihr verbundenes Postfach wird jeden Tag nur lesend durchsucht. E-Rechnungen werden exakt gelesen, die KI liest PDFs und Fotos, und eine Person prüft jede Rechnung, bevor sie in das Quartal kommt, das Sie für Ihren Steuerberater exportieren.

## Warum Ihr Steuerberater geordnete Lieferantenrechnungen will

Lieferantenrechnungen sind die andere Hälfte der Buchhaltung. Ihr Steuerberater braucht sie, um:

- **Die Vorsteuer abzuziehen.** In Spanien wird die Mehrwertsteuer, die Sie auf Wäscherei, Strom oder OTA-Provision gezahlt haben, in der vierteljährlichen [modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml) abgezogen, und nur mit einer gültigen Rechnung dahinter.
- **Das Register der Eingangsrechnungen zu führen.** Spanische Unternehmen führen ein „libro registro de facturas recibidas“: eine Zeile pro Rechnung mit Datum, Nummer, Steuernummer des Lieferanten, Bemessungsgrundlage, Steuersatz und Steuer.
- **Ausgaben für die Einkommen- oder Körperschaftsteuer zu erfassen** und zu prüfen, ob das Bezahlte zum Berechneten passt.

Das übliche Problem ist nicht die Arbeit des Steuerberaters. Es ist der Schuhkarton: Rechnungen verteilt auf drei Postfächer, ein WhatsApp-Foto, ein Lieferantenportal und eine, die nie angekommen ist.

## Wie lange müssen Sie Lieferantenrechnungen aufbewahren?

Das hängt vom Land ab. In der EU lässt Artikel 247 der Mehrwertsteuerrichtlinie jeden Mitgliedstaat die Frist selbst festlegen ([Text von Artikel 247](https://www.legislation.gov.uk/eudr/2006/112/article/247/adopted)). Für Spanien:

| Regel | Frist | Quelle |
|---|---|---|
| Steuerlich (Eingangsrechnungen und Kopien ausgestellter Rechnungen) | 4 Jahre, die Verjährungsfrist der Ley General Tributaria | [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html) |
| Rechnungen zur Mehrwertsteuer auf Anlagegüter mit Berichtigungszeitraum | Dieser Zeitraum plus die folgenden 4 Jahre | Dieselbe Seite |
| Handelsrechtlich (Bücher, Korrespondenz, Unterlagen) | 6 Jahre ab dem letzten Eintrag | [Código de Comercio, Art. 30](https://www.boe.es/buscar/act.php?id=BOE-A-1885-6627#a30) |

Die Agencia Tributaria sagt auch, wie: Rechnungen werden „mit ihrem ursprünglichen Inhalt, geordnet“ aufbewahrt, auf Papier oder elektronisch, solange das Verfahren die Echtheit der Herkunft, die Unversehrtheit des Inhalts und die Lesbarkeit garantiert und die Steuerbehörde ohne Verzögerung darauf zugreifen kann. In der Praxis: Bewahren Sie die Datei auf, die der Lieferant geschickt hat, geordnet, und löschen Sie nichts, was Ihr Steuerberater gebucht hat. Die Frist für Ihr eigenes Land klären Sie mit Ihrem Steuerberater.

## Eine Namenskonvention, die Rückfragen spart

Wenn Sie Rechnungen von Hand ablegen, benennen Sie jede Datei gleich, dann sortiert sich der Ordner von selbst:

```text [naming.txt]
2026-10-12_Electra-Norte_EL-20261012.pdf
2026-10-03_Booking.com_BO-20261003.pdf
```

Zuerst das Datum (Jahr-Monat-Tag, damit nach Datum sortiert wird), dann der Lieferant, dann die Rechnungsnummer. Legen Sie einen Ordner pro Quartal an. Ändern Sie die Nummer des Lieferanten nicht: Darüber ordnet Ihr Steuerberater die Rechnung der Zahlung zu.

## Der schnellere Weg: Received invoices in Hotelier Tools

**Received invoices** (Eingangsrechnungen, `/received-invoices`) sammelt, was Ihre Lieferanten schicken, liest es aus und lässt es auf Sie warten, bis Sie es bestätigen. Es gibt vier Wege hinein, und Sie können alle gleichzeitig nutzen:

| Weg | Am besten für | Was Sie einrichten |
|---|---|---|
| **Rechnungsadresse** | Lieferanten, die an jede Adresse mailen können | Die `inv-…`-Adresse Ihres Hauses kopieren und ihnen schicken |
| **Ihr eigenes Postfach** | Lieferanten, die schon an die E-Mail Ihres Hotels schreiben | Unter Messaging verbinden, dann **Read for invoices** einschalten |
| **Ablegen oder einfügen** | Papierrechnungen, Fotos, Downloads aus Portalen | Nichts: Dateien auf die Seite ziehen |
| **REST-API** | Ihre eigenen Skripte | `POST /api/v1/received-invoices/upload` |

Dieselbe Datei kommt nie zweimal hinein: Egal auf welchem Weg sie ankommt, eine bereits vorhandene Datei wird an ihrem Inhalt erkannt.

### Option 1: Geben Sie Lieferanten Ihre Rechnungsadresse

1. Öffnen Sie **Settings > Received invoices** (`/settings/received-invoices`), suchen Sie **Invoice address** und drücken Sie **Create the address**.
2. Drücken Sie **Copy** und schicken Sie sie Ihren Lieferanten. Sie können auch Rechnungen, die Sie schon haben, dorthin weiterleiten.
3. Lassen Sie die Aufgabe **Read the hotel mailbox** eingeschaltet (alle 5 Minuten wird empfohlen).

Die Adresse sieht so aus: `inv-7k2m9qx4hp@in.hotelier.tools`. Sie gehört nur Ihrem Haus und braucht kein Postfach-Passwort. Wie diese Adressen funktionieren und was sie nicht sind, lesen Sie in [eine Hotel-E-Mail-Adresse für Rechnungen und Logins](/blog/hotel-email-address).

### Option 2: Durchsuchen Sie das Postfach, das Lieferanten schon nutzen

1. Verbinden Sie das Postfach (Google, Microsoft oder ein beliebiges IMAP-Konto) unter **Messaging > Channels**.
2. Öffnen Sie in **Received invoices** den **Setup guide**. Er hat vier Schritte:
   - **Choose the mailboxes your suppliers write to**: Wählen Sie die Postfächer, an die Ihre Lieferanten schreiben, und schalten Sie sie ein.
   - **Choose how far back to read**: **The past** N Tage, Monate oder Jahre, oder **Since the start of this** Woche, Monat, Quartal oder Jahr. Höchstens 5 Jahre zurück.
   - **Read the mail you already have** mit **Read the mail now**. Lange Rückblicke stoppen nach einer Weile, und der tägliche Scan liest den Rest.
   - **Read new mail every day**: der geplante Scan, empfohlen um 06:20 Uhr.
3. Stimmen Sie unter **Settings > Received invoices** jedes Postfach fein ab: **Folders to read**, **Always read mail from** (die genauen Adressen Ihrer Lieferanten) und **Never read mail from**.

Der Zugriff ist nur lesend: Nichts wird als gelesen markiert, verschoben oder gelöscht, und Spam, Gesendet, Papierkorb und Entwürfe werden nie gelesen. Eine Nachricht gilt als Rechnung, wenn sie von einem bekannten Lieferanten kommt, eine E-Rechnung angehängt hat, ein Rechnungswort erwähnt („invoice“, „factura“, „fattura“…) oder ein Foto enthält.

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Einstellungen Received invoices: die Karte Suggestions mit eingeschaltetem Suggest invoices that have not arrived und 24 Monaten Verlauf, und die Karte Mailboxes mit verbundenem reservas@example.com, eingeschaltetem Read for invoices, INBOX als zu lesendem Ordner, einem ersten Scan über 120 Tage zurück und leeren Listen Never read mail from und Always read mail from" caption="Jedes Postfach wird erst gelesen, wenn Sie es einschalten, und nur auf Rechnungen." path="/settings/received-invoices"}
::

### Option 3: Dateien ablegen

Ziehen Sie PDFs, Fotos (PNG, JPEG, WebP) und XML-Dateien von E-Rechnungen auf die Seite oder drücken Sie **Choose files**. Bis zu 20 Dateien auf einmal, je 15 MB. Sie können auch ein Foto einfügen. HEIC-Fotos vom iPhone lassen sich noch nicht lesen: Exportieren Sie sie zuerst als JPEG.

## Wie jede Rechnung gelesen wird

- **E-Rechnungen werden exakt gelesen.** XML-Dateien in Facturae, UBL und CII werden per Code ausgewertet, ohne KI und ohne Kosten. Eine Facturae-Datei mit mehreren Rechnungen wird zu mehreren Zeilen. Eine Signatur wird als vorhanden angezeigt, nicht als geprüft.
- **Die KI liest PDFs und Fotos.** PDFs bis 10 MB und sechs Seiten, Fotos bis 5 MB. Jedes Auslesen verbraucht Ihr monatliches KI-Kontingent, dasselbe wie bei Gästeantworten, und zeigt Tokens und Kosten an der Rechnung. Standardmäßig liest die KI höchstens 40 Rechnungen am Tag; das können Sie ändern.
- **E-Mail-Anhänge warten standardmäßig auf Sie.** **Read email attachments automatically** ist aus, bis Sie es einschalten, und E-Mails mit Betrugswarnungen werden nie von einer Maschine gelesen.

Jedes Feld zeigt, woher sein Wert stammt (**E-invoice**, **AI** oder **You**). Was Sie korrigieren, wird nie durch ein erneutes Auslesen überschrieben.

## Mit dem Original vergleichen, dann bestätigen

Jede Rechnung startet als **To review**. Öffnen Sie sie, vergleichen Sie die Felder mit dem Original daneben und drücken Sie **Confirm** (oder **Confirm and next**, um die Warteschlange abzuarbeiten). Später setzen Sie mit Datum **Mark as paid**. Stimmt etwas nicht? **Mark as duplicate** oder **Reject** mit einem Grund: **Not for this property**, **Not an invoice**, **Spam or fraud** oder **Other**. Eine abgelehnte Datei holt der Postfach-Scan nie wieder zurück.

::screenshot{src="/images/blog/demo/en/supplier-invoices-review-iban-warning.webp" alt="Eingangsrechnung von Electra Norte, Status To review, über 218,70 €: die Schaltflächen Confirm, Mark as duplicate und Reject, ein roter Kasten Check this invoice before you confirm it mit dem Hinweis, dass die IBAN nicht die der früheren Rechnungen dieses Lieferanten ist, ein nicht angehaktes Kästchen I checked this supplier through a known channel mit der Schaltfläche Acknowledge, und die E-Mail-Details mit Absender, spanischem Betreff, Postfach reservas@example.com, Sender check Not available und Email risk Medium risk" caption="Eine geänderte Bankverbindung sperrt Confirm, bis jemand telefonisch beim Lieferanten nachgefragt hat." path="/received-invoices"}
::

### Die Warnungen, die eine falsche Zahlung stoppen

Der häufigste Lieferantenbetrug ist einfach: eine Rechnung, die richtig aussieht, mit einer neuen Bankverbindung. Hotelier Tools vergleicht jede Rechnung mit dem Verlauf des Lieferanten und mit der E-Mail, in der sie kam:

- **Die Bankverbindung (IBAN) ist nicht die der früheren Rechnungen dieses Lieferanten.** Gespeichert werden nur die letzten vier Ziffern.
- **Die Adresse des Absenders hat ihre Echtheitsprüfung (DMARC) nicht bestanden.** Die Rechnungsseite zeigt eine Zeile **Sender check** (**Passed**, **Failed** oder **Not available**), gelesen aus dem Header des eigenen Mailservers, nie aus der From-Zeile.
- **Die E-Mail, in der sie kam, hat Betrugswarnungen**, die Rechnung ist an die Steuernummer einer anderen Firma adressiert, der Aussteller ist Ihr eigenes Haus, oder das PDF enthält Skripte.

Jede davon sperrt **Confirm** und **Mark as paid**, bis eine Person **I checked this supplier through a known channel** anhakt und **Acknowledge** drückt. Rufen Sie den Lieferanten unter einer Nummer an, die Sie schon haben, nie unter einer aus der E-Mail. Kein API-Schlüssel und kein KI-Werkzeug kann das für Sie bestätigen.

Weichere Warnungen sperren nicht, werden aber angezeigt: Die Beträge gehen nicht auf, die Steuernummer besteht ihre Prüfziffer nicht, der Lieferant schreibt sonst von einer anderen Domain.

### Dubletten

Eine Rechnung wird als mögliche Dublette markiert, wenn eine andere dieselbe Steuernummer des Lieferanten und Rechnungsnummer hat, oder denselben Lieferanten und Gesamtbetrag mit einem Rechnungsdatum innerhalb von drei Tagen. Sie entscheiden: **Mark as duplicate** und das Original auswählen, dann bleibt sie in der Liste, aber außerhalb der Summen.

### Was Sie nie tun können

Eine bestätigte oder bezahlte Rechnung löschen. Sie bleibt dokumentiert (in Spanien vier Jahre) und kann nur abgelehnt werden, wodurch sie aus den Summen und dem Export herausfällt.

## Das Quartal für Ihren Steuerberater exportieren

1. In **Received invoices** ist die Liste standardmäßig nach Kalenderquartalen gruppiert (Q1 = Januar bis März, wie beim modelo 303). Sie können nach Monat, Jahr, Lieferant oder Kategorie gruppieren und den Monat festlegen, in dem Ihr Geschäftsjahr beginnt.
2. Drücken Sie bei einem Quartal **Export for accountant**.
3. Wählen Sie **Confirmed and paid invoices** (Standard) oder **Also the ones waiting for review**, und **ZIP with the originals and the CSV** oder **CSV only**.
4. Haken Sie optional **List the invoices that have not arrived** an.

Das ZIP enthält eine Datei pro Rechnung, **benannt nach Datum, Lieferant und Nummer**, eine CSV im Aufbau des libro registro de facturas recibidas (eine Zeile pro Steuerzeile) und eine README. Bis zu 500 Dateien pro Export.

::screenshot{src="/images/blog/demo/en/supplier-invoices-export-dialog.webp" alt="Dialog Export for the accountant für den Zeitraum 2026: Confirmed and paid invoices ausgewählt, ZIP with the originals and the CSV ausgewählt, List the invoices that have not arrived nicht angehakt, 29 Rechnungen zum Export und ein Hinweis, dass 3 Rechnungen, die auf Prüfung warten, nicht enthalten sind" caption="Ein Quartal, ein ZIP: die umbenannten Originale plus eine CSV im Aufbau des Registers." path="/received-invoices"}
::

Seien Sie bei einem Punkt ehrlich zu Ihrem Steuerberater: Die CSV folgt dem Aufbau des Registers, ist aber **nicht zertifiziert** von der Steuerbehörde. Was in die Bücher kommt, entscheidet er.

### Rechnungen, die Ihnen vielleicht fehlen

Bei Lieferanten, die regelmäßig abrechnen (monatlich die Wäscherei, alle zwei Monate der Strom, vierteljährlich die Gestoría), meldet **Invoices you may be missing** etwa „Expected from Lavandería Sol SL around October 1“, wenn die nächste nicht gekommen ist. Das sind Schätzungen, keine Schulden. **Not this time** blendet einen Zeitraum aus; **Stop expecting** blendet den Lieferanten aus.

::screenshot{src="/images/blog/demo/en/supplier-invoices-quarter-list.webp" alt="Seite Received invoices: Postfächer zuletzt gelesen mit 2 importierten Rechnungen, die Ablagezone Drop invoices here mit eingeschaltetem Read PDFs and photos with AI, Kacheln mit Ausgaben von 25.852,14 €, IVA 796,87 €, IGIC 0,00 €, 3 zu prüfen und 1 unbezahlt, Invoices you may be missing mit Lavandería Sol SL seit 1. Oktober überfällig und Electra Norte eingetroffen und zu prüfen, und die pausierte Aufgabe Scan the mailboxes" caption="Sehen Sie, was Sie ausgegeben haben, was noch zu prüfen ist und welche regelmäßige Rechnung noch nicht da ist." path="/received-invoices"}
::

## Wer was darf

Geben Sie Ihrem Steuerberater einen eigenen Login unter **Settings > Team & roles** (`/settings/team`). Die eingebaute Rolle **accountant** kann Rechnungen ansehen, bearbeiten und auslesen lassen, aber keine Postfächer durchsuchen. Geschäftliche E-Mails zu durchsuchen und KI-Guthaben auszugeben, sind eigene Berechtigungen, die Sie bewusst vergeben.

Auch der Assistent hilft: „Welche Lieferantenrechnungen fehlen mir für Q3?“ oder „Wie viel Vorsteuer habe ich in diesem Quartal bisher?“ werden aus denselben Daten beantwortet, und alles, was eine Rechnung ändert, wartet auf Ihre Freigabe.

::demo-cta{path="/received-invoices"}
::

Received invoices gehört zur Funktion [Invoicing](/tools/bot/invoicing). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Eingangsrechnungen liegen in Hotelier Tools; nichts wird in Little Hotelier geschrieben.
::

Siehe auch: [alle Rechnungen aus Little Hotelier herunterladen](/blog/download-all-little-hotelier-invoices), [eine Hotel-E-Mail-Adresse für Rechnungen](/blog/hotel-email-address), [die Gästerechnung beim Check-out senden](/blog/send-invoice-to-guest-at-checkout).

## Zusammenfassung

- Schicken Sie Lieferantenrechnungen an einen Ort: eine private Rechnungsadresse, Ihr eigenes, täglich durchsuchtes Postfach oder per Drag-and-drop.
- Bewahren Sie sie auf: in Spanien steuerlich mindestens vier Jahre und nach dem Código de Comercio sechs, als Originaldateien, geordnet.
- E-Rechnungen werden exakt gelesen; die KI liest PDFs und Fotos; eine Person bestätigt jede einzelne.
- Eine geänderte IBAN, eine fehlgeschlagene Absenderprüfung oder ein Betrugsrisiko sperrt die Zahlung, bis jemand beim Lieferanten nachgefragt hat.
- Exportieren Sie jedes Quartal als ZIP mit umbenannten Originalen und einer CSV im Aufbau des Registers für Ihren Steuerberater.
