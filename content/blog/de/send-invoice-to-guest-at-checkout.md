---
title: "Rechnung an Gast senden: automatisch beim Check-out aus Little Hotelier"
seoTitle: "Rechnung an Gast senden: automatisch beim Check-out"
description: "Booking.com stellt Ihren Gästen keine Rechnung aus, das tun Sie. Senden Sie sie aus Little Hotelier von Hand oder automatisch beim Check-out per E-Mail."
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [rechnung an gast senden, booking rechnung anfordern, booking rechnung auf firma, little hotelier rechnung, hotelrechnung beim check-out, gast bittet um rechnung hotel, booking.com rechnung gast]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "Seite Invoice on leave in Hotelier Tools: die Aufgabe Automatic invoicing at check-out, die täglich um 12:00 läuft, ein Zeitraum mit Search reservations und die Reservierungstabelle mit einer Schaltfläche Auto-invoice für jeden Aufenthalt"
faq:
  - q: "Sendet Booking.com Rechnungen an Gäste?"
    a: "Nein. Booking.com sagt, die Reservierung sei eine Vereinbarung zwischen Ihnen und dem Gast, die Unterkunft muss also die Rechnung stellen, auch wenn Booking.com die Zahlung eingezogen hat."
  - q: "Kann Little Hotelier die Rechnung beim Check-out automatisch per E-Mail senden?"
    a: "Nicht von allein. Seine automatischen Gäste-E-Mails sind Buchungsbestätigung, Stornierung, Erinnerung vor der Anreise und Dankeschön nach der Abreise. Sie senden die Rechnung aus der Reservierung per E-Mail oder nutzen ein Werkzeug wie Invoice on Leave von Hotelier Tools, das es nach dem Check-out übernimmt."
  - q: "Warum bis zum Check-out mit der Rechnung warten?"
    a: "Weil die Beträge erst dann endgültig sind. Extras, Zahlungen und Datumsänderungen kommen oft während des Aufenthalts, und eine zu früh ausgestellte Rechnung muss mit einer Gutschrift oder einer neuen Rechnung korrigiert werden."
  - q: "Sieht der Gast Hotelier Tools in der E-Mail?"
    a: "Nein. Hotelier Tools bittet Little Hotelier, die Rechnung zu senden, sie wird also mit Ihrer eigenen E-Mail-Vorlage und Ihrem eigenen Absender aus Little Hotelier versendet, genau als würden Sie selbst auf Email > Invoice klicken."
  - q: "Was, wenn der Gast keine E-Mail-Adresse in der Buchung hat?"
    a: "Little Hotelier sendet die Rechnung an die primäre Kontakt-E-Mail der Reservierung, ohne sie gibt es keinen Empfänger. Invoice on Leave meldet einen vergangenen Aufenthalt ohne Gäste-E-Mail, statt es jeden Tag erneut zu versuchen, sodass Sie die Rechnung drucken oder den Gast um eine Adresse bitten können."
---

Booking.com stellt Ihren Gästen nie eine Rechnung aus: Das tut die Unterkunft, auch wenn Booking.com die Zahlung eingezogen hat. In Little Hotelier senden Sie sie aus der Reservierung mit **Invoices > Generate invoice** und dann **Email > Invoice**. Automatisch geht es mit **Invoice on Leave** von Hotelier Tools: Sie markieren den Aufenthalt, und sobald der Gast ausgecheckt hat, lässt eine tägliche Aufgabe die Rechnung von Little Hotelier erzeugen und ihm per E-Mail zusenden.

## Sendet Booking.com dem Gast eine Rechnung?

Nein. Die Partnerhilfe von Booking.com ist eindeutig: Jede Reservierung ist eine Vereinbarung zwischen Ihnen und Ihrem Gast, daher „it's your responsibility to provide the guest with an invoice – not Booking.com“ (die Rechnung zu stellen ist Ihre Verantwortung, nicht die von Booking.com), egal wer die Zahlung abgewickelt hat ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices)).

Dieselbe Seite nennt drei praktische Regeln:

- Stellen Sie die Rechnung auf den Namen des Gastes oder einen anderen mit ihm vereinbarten Namen aus.
- Zeigen Sie Booking.com nicht als Verkäufer. Sie sind der Leistungserbringer.
- Wenn Sie per virtueller Karte bezahlt werden, erscheint als Karteninhaber „Booking.com (Agent)“, Sie stellen aber trotzdem den vollen Wert des Aufenthalts in Rechnung.

Geschäftsreisende, die über Booking.com for Business gebucht haben, können auf **Request invoice** klicken, was Ihnen schlicht eine Nachricht schickt ([Hilfe von Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)). Die Arbeit landet trotzdem an Ihrer Rezeption.

## Was muss eine Hotelrechnung enthalten?

Das hängt von Ihrem Land ab, aber in der EU enthält eine vollständige Umsatzsteuerrechnung ([Europäische Kommission](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en)):

- Ausstellungsdatum und eine eindeutige fortlaufende Nummer
- Ihren vollständigen Namen und Ihre Anschrift sowie die des Kunden
- die USt-IdNr. des Kunden, wenn der Kunde die Steuer schuldet (typischerweise ein Unternehmen)
- eine Beschreibung des Aufenthalts, den Einzelpreis vor Steuern und das Leistungsdatum, falls abweichend
- den Steuersatz, den Steuerbetrag und eine Aufschlüsselung nach Steuersatz

Viele Länder erlauben für manche Umsätze auch eine kürzere „vereinfachte“ Rechnung (in Deutschland etwa die Kleinbetragsrechnung). Wenn ein Geschäftsgast um eine Rechnung bittet, braucht er meist die vollständige auf den Namen der Firma, mit deren Steuernummer bzw. USt-IdNr.

Richten Sie Ihr Layout einmal in Little Hotelier unter **Front Desk > Setup > Guest Payment Options > Customise invoices** ein: Titel (**Invoice**, **Tax Invoice** oder Ihr eigener), Präfix und Suffix der Nummerierung, Logo und ob Steuern inklusive oder exklusive angezeigt werden. Änderungen gelten nur für neue Rechnungen ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices)).

## So senden Sie eine Rechnung aus Little Hotelier per E-Mail (von Hand)

1. Stellen Sie sicher, dass der Aufenthalt beendet ist: Setzen Sie im Reiter **Details** der Reservierung den Status auf **Checked-out** und prüfen Sie den Saldo.
2. Gehen Sie zum Reiter **Invoices** und klicken Sie auf **Generate invoice**.
3. Klicken Sie auf **Email** und wählen Sie **Invoice**. Little Hotelier sendet sie an die primäre Kontakt-E-Mail der Reservierung.

Sie können auch **Email invoice** ankreuzen, wenn Sie **Record Payment** erfassen. Bearbeiten Sie die Reservierung danach, zeigt der Reiter Invoices **Invoice is outdated**. Klicken Sie darauf, um eine korrigierte Rechnung zu erzeugen, und senden Sie diese per E-Mail. Quellen: [Gästerechnung erzeugen, drucken und per E-Mail senden](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) und [Eine Zahlung erfassen](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation).

Zum Drucken klicken Sie auf **Print** und wählen **Invoice**. Das kostenlose Skript [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) ergänzt einen direkten Link, damit Sie das Menü überspringen:

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Fußbereich einer Little-Hotelier-Reservierung (spanische Oberfläche) mit einem zusätzlichen Link Imprimir Factura neben den Menüs Print und Email" caption="Das Skript Extra Invoice Print Button ergänzt neben Print und Email einen Rechnungslink mit einem Klick." width="604" height="265"}
::

Der Haken: Es ist ein manueller Schritt für jeden Gast. Die automatischen Gäste-E-Mails von Little Hotelier sind Buchungsbestätigung, Stornierung, Erinnerung vor der Anreise und Dankeschön nach der Abreise ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)). Keine davon sendet die Rechnung.

## So senden Sie die Rechnung automatisch, wenn der Gast auscheckt

**Invoice on Leave** in Hotelier Tools (Beta) übernimmt die manuellen Schritte oben nach dem Check-out für Sie. Sie markieren eine Reservierung einmal. Das Markieren sendet in diesem Moment nichts.

1. Öffnen Sie **Invoice on Leave** (`/invoice-on-leave`). Wenn das Banner sagt, dass es noch keine Aufgabe gibt, klicken Sie auf **Create the daily task (16:00, after check-out)**.
2. Eine Rechnung wird nur für einen Aufenthalt ausgestellt, der in Little Hotelier **checked out** ist. Wenn Ihr Team Gäste vor 16:00 Uhr nicht von Hand auscheckt, nutzen Sie die Karte **Automatic check-out** und klicken auf **Create the daily task (15:05)**. Sie schließt die Abreisen des Tages in Little Hotelier und bleibt aus, bis Sie sie anlegen.
3. Suchen Sie die Reservierung und schalten Sie dafür Auto-Invoice ein. Die Filter **Enrolled** und **Not enrolled** zeigen, wo jeder Aufenthalt steht. Sie können einen Gast eintragen, der noch im Haus ist: Die Rechnung wird beim ersten Lauf nach seiner Abreise versendet.
4. Nach dem Check-out bittet die tägliche Aufgabe Little Hotelier, die Rechnung zu erzeugen, und Little Hotelier sendet sie per E-Mail mit Ihrer eigenen Vorlage und Ihrem eigenen Absender.
5. Unter **Pending invoices to send** (`/invoice-on-leave/scheduled`) sehen Sie, was in der Warteschlange ist, heute fällig, überfällig oder schon in Rechnung gestellt.

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="Vollständige Seite Invoice on leave: ein roter Hinweis, dass niemand Gäste automatisch auscheckt, die Karte Automatic check-out (noch nicht konfiguriert) mit Create the daily task (15:05), die laufende Aufgabe Automatic invoicing at check-out, der Link Pending invoices to send und neun Reservierungen, jeweils mit einer Schaltfläche Auto-invoice" caption="Legen Sie bei Bedarf die Check-out-Aufgabe an und markieren Sie dann den Aufenthalt mit Auto-invoice. Die Rechnung wird nach dem Check-out des Gastes erstellt und per E-Mail gesendet." path="/invoice-on-leave" width="1440" height="1526"}
::

Sie brauchen sie sofort? Jede Zeile hat eine Aktion „process now“, die diese Rechnung sofort ausstellt.

### Was es sicher macht

- **Die Markierung liegt in Little Hotelier.** Die Vormerkung wird als Tag in den Notizen der Reservierung in Little Hotelier gespeichert, Ihr Team sieht sie dort also.
- **Kein doppeltes Senden.** Ein zweiter Tag markiert „Rechnung gesendet“ und wird erst geschrieben, nachdem Little Hotelier die E-Mail angenommen hat. Bereits abgerechnete Aufenthalte lassen sich nicht erneut eintragen.
- **Dieselbe Vorprüfung wie bei der Massenerstellung von Rechnungen.** Eine Firmenrechnung ohne Steuernummer oder Rechnungsanschrift oder mit fehlerhafter Steuernummer wird abgelehnt, statt halbfertig gesendet zu werden.
- **Nachholen und Grenzen.** Die tägliche Aufgabe schaut 8 Tage zurück, um verpasste Läufe nachzuholen, und liest bis zu 100 Check-outs pro Lauf. Ein vergangener Aufenthalt ohne Gäste-E-Mail wird einmal gemeldet, nicht jeden Tag erneut versucht.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels, und die Rechnung ist das eigene Dokument von Little Hotelier.
::

::demo-cta{path="/invoice-on-leave"}
::

## In welcher Sprache wird die Rechnung versendet?

Legen Sie das einmal unter **Settings > Invoices** (`/settings/invoices`) fest: **From the guest's country** (das Land in der Adresse des Gastes bestimmt die Sprache) oder **Always the same language**. Fehlt das Land oder passt es nicht, gilt Ihre **Fallback language**.

## Der Gast braucht sie auf den Namen einer Firma oder nach der Abreise

**Bevor die Rechnung existiert:** Tragen Sie Firmenname, Steuernummer bzw. USt-IdNr. und Rechnungsanschrift in den Gästedaten der Reservierung in Little Hotelier ein. Hotelier Tools weigert sich, eine Firmenrechnung auszustellen, solange Steuernummer oder Rechnungsanschrift fehlen oder fehlerhaft sind, sodass nichts Halbfertiges beim Gast ankommt.

**Nachdem sie ausgestellt wurde:** Bearbeiten Sie die Daten in Little Hotelier und nutzen Sie dann **Invoice is outdated**, um eine korrigierte Rechnung zu erzeugen. Haben Sie sie schon als final markiert, klicken Sie auf **Cancel invoice** und dann erneut auf **Generate invoice** ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). In Spanien mit VeriFactu wird eine finalisierte Rechnung über **Rectify invoice** geändert ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)).

Ein privater Link, über den Gäste ihre Firmendaten selbst eintragen, ist in Entwicklung und noch nicht verfügbar.

Wenn Rechnungsanfragen per Booking.com-Nachricht zu Ihnen kommen, lesen Sie [Booking.com-Gästenachrichten verwalten](/blog/booking-com-guest-messages).

## Wie sende ich eine Rechnung erneut?

Öffnen Sie die Reservierung und nutzen Sie erneut **Email > Invoice**. Ein Tipp zum Zeitpunkt: Sobald eine Rechnung **als final markiert** ist, bietet Little Hotelier dafür kein Print oder Email mehr an. Senden Sie sie zuerst und finalisieren Sie danach, oder laden Sie das PDF später aus dem Invoice report herunter.

::callout{type="tip" title="Gäste, die per Überweisung zahlen"}
Das Skript [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) ergänzt eine Schaltfläche, die Ihre Bankdaten aus der Reservierung per E-Mail versendet. Es ist noch nicht veröffentlicht und wird für jeden Betrieb auf Anfrage eingerichtet.
::

## Zusammenfassung

- Die Unterkunft, nicht Booking.com, muss dem Gast die Rechnung stellen.
- In Little Hotelier: **Invoices > Generate invoice**, dann **Email > Invoice**, am besten nach dem Check-out.
- **Invoice on Leave** von Hotelier Tools sendet sie nach dem Check-out automatisch, mit Ihrer eigenen Little-Hotelier-Vorlage und mit Prüfungen auf Firmendaten und Duplikate.
- Am Quartalsende [laden Sie alle Ihre Rechnungen auf einmal herunter](/blog/download-all-little-hotelier-invoices). Alles, was die Rechnungsfunktion kann, steht auf der [Seite Invoicing](/tools/bot/invoicing).
