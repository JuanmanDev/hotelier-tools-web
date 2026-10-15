---
title: "Booking.com-Provision: Wie hoch ist sie für Hotels? So sehen Sie Ihr echtes Netto in Little Hotelier"
seoTitle: "Booking.com-Provision für Hotels: Höhe und Netto (2026)"
description: "Kein Einheitssatz: Sie zahlen den Prozentsatz Ihres Vertrags plus Programme und Zahlungsgebühren. Worauf er anfällt, USt. und Ihr Netto je Buchung."
date: 2026-10-03
category: tips
tags: [booking.com, commission, little hotelier, userscript, vat]
keywords: [booking provision hotel, booking provision höhe, booking.com provision umsatzsteuer, booking.com provision rechner, booking genius provision, booking.com zahlungsgebühr]
feature: dynamic-pricing
demoPath: /
cover: /images/scripts/show-booking-commissions/to.png
coverAlt: "Reservierungsübersicht in Little Hotelier (spanische Oberfläche) mit Booking.com-Provision, Zahlungsgebühr und ungefährem Netto, ergänzt durch ein kostenloses Skript"
faq:
  - q: "Wie viel Prozent nimmt Booking.com von Hotels?"
    a: "Booking.com veröffentlicht keinen einheitlichen Satz. Sie zahlen den Prozentsatz aus Ihrer Unterkunftsvereinbarung, der von Land, Unterkunftsart und Vertrag abhängt. Die Provision jeder Buchung sehen Sie im Extranet unter Finance > Reservation statements."
  - q: "Berechnet Booking.com Provision auf City-Tax oder Kurtaxe?"
    a: "Nein. Auf lokale Abgaben wie City-Tax oder Kurtaxe berechnet Booking.com keine Provision. Auf die Umsatzsteuer (VAT/GST) fällt in den meisten Ländern dagegen Provision an, je nach örtlichem Recht und Ihren General Delivery Terms."
  - q: "Zahle ich bei einem No-Show Provision?"
    a: "Nur wenn Sie dem Gast eine No-Show-Gebühr berechnen, und dann auf diese Gebühr. Markieren Sie den No-Show innerhalb von 48 Stunden nach der geplanten Abreise im Extranet und verzichten auf die Gebühr, fällt keine Provision an."
  - q: "Erhöht das Genius-Programm meine Provision?"
    a: "Genius erhöht Ihren Provisionssatz nicht, aber Sie finanzieren den Rabatt selbst (standardmäßig 10 %, bei höheren Genius-Stufen bis 15 % oder 20 %, wenn Sie sie aktivieren). Preferred Partner, Preferred Plus und Visibility Booster sind die Programme, die Ihre Provision erhöhen."
  - q: "Wann stellt Booking.com die Provision in Rechnung?"
    a: "Einmal im Monat, für jede Reservierung, bei der der Gast im Vormonat ausgecheckt hat. Rechnungen sind innerhalb von 14 Tagen zu zahlen. Bei Payments by Booking.com kann die Provision stattdessen von Ihren Auszahlungen abgezogen werden."
  - q: "Ist das Provisionsskript für Little Hotelier kostenlos?"
    a: "Ja. Das Userscript Show Booking.com Commissions ist dauerhaft kostenlos. Es läuft in Ihrem eigenen Browser mit der kostenlosen Erweiterung Tampermonkey und liest nur die Reservierungsseite, die Sie gerade geöffnet haben."
---

Es gibt keine einheitliche Booking.com-Provision. Sie zahlen den Prozentsatz aus Ihrer eigenen Vereinbarung, der von Land, Unterkunftsart und Vertrag abhängt. Programme wie Preferred Partner oder Visibility Booster erhöhen ihn. Berechnet wird die Provision auf den gesamten Buchungsbetrag (in den meisten Ländern inklusive Umsatzsteuer, nie auf die City-Tax), und Payments by Booking.com kann eine Zahlungsgebühr hinzufügen. Ihr tatsächliches Netto ist also der Buchungsbetrag abzüglich all dieser Posten.

Die folgenden Regeln haben wir im Oktober 2026 anhand der Partner Help von Booking.com geprüft. Booking.com ändert diese Seiten häufig, deshalb führen die Links direkt zur Quelle.

## Wie hoch ist die Booking.com-Provision für Hotels?

Booking.com definiert die Provision als „a set percentage of the total booking amount“ (ein fester Prozentsatz des gesamten Buchungsbetrags) je Reservierung ([Partner Help: Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)). Einen einheitlichen Satz für alle gibt es nicht: „the exact percentage depends on your country, property type, and the accommodation agreement you signed.“ Neue Partner sehen ihn bei der Registrierung im Schritt **Agreement** ([Booking.com FAQ](https://join.booking.com/faq.html?lang=en)).

Der Satz wird festgeschrieben, sobald der Gast bucht. Hat sich Ihre Provision kürzlich geändert, behalten ältere Buchungen den alten Satz.

So finden Sie den Prozentsatz, den Sie tatsächlich zahlen:

1. Melden Sie sich im Extranet an und öffnen Sie **Finance > Reservation statements**. Jede Buchung zeigt ihre Provision.
2. Vergleichen Sie sie mit Ihrer Unterkunftsvereinbarung. Eine Kopie Ihrer General Delivery Terms finden Sie über das Benutzersymbol unter **Contracts**.
3. Zeigt die Abrechnung einen höheren Prozentsatz, öffnen Sie **Boost performance**: Preferred Partner oder Visibility Booster schlagen einen Prozentsatz auf Ihren Basissatz auf.
4. Bei Payments by Booking.com zeigt auch **Finance help** Ihren Satz und die Zahlungsgebühr.

## Worauf wird die Booking.com-Provision berechnet?

Die Provision gilt für „the room rate as well as any additional fees you charge—such as cleaning fees, service fees, and costs for no-shows or cancellations“ (den Zimmerpreis und alle zusätzlichen Gebühren, etwa Reinigungs- und Servicegebühren sowie Kosten für No-Shows oder Stornierungen) und wird berechnet, sobald der Gast ausgecheckt hat ([Quelle](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission)).

**Provision zahlen Sie auf:**

- abgeschlossene Aufenthalte
- nicht erstattbare und teilweise erstattbare Buchungen, ob der Gast kam oder nicht
- Stornierungs- und No-Show-Gebühren, die Sie berechnen
- Überbuchungen (entfällt, wenn Ihre Unterkunft seit weniger als 30 Tagen online ist oder Sie in den letzten 12 Monaten weniger als fünf Überbuchungen hatten)

**Keine Provision zahlen Sie auf:**

- Stornogebühren, auf die Sie verzichten
- No-Shows, die Sie innerhalb von 48 Stunden nach der Abreise im Extranet markieren, wenn Sie auf die Gebühr verzichten
- Buchungen, bei denen Sie die Karte des Gastes als ungültig markiert haben

**Steuern.** Auf lokale Abgaben wie City-Tax oder Kurtaxe berechnet Booking.com keine Provision. „However, in most countries, commission is charged on VAT or GST“ (in den meisten Ländern wird die Provision jedoch auf die Umsatzsteuer berechnet), je nach örtlichem Recht. Was für Sie gilt, steht in Ihren General Delivery Terms.

::callout{type="warning" title="Die 48-Stunden-Regel"}
Markieren Sie No-Shows, Stornierungen und andere Änderungen innerhalb von 48 Stunden nach der Abreise im Extranet. Danach berechnet Booking.com die volle Provision auf die ursprüngliche Buchung. Die Schritt-für-Schritt-Anleitung finden Sie unter [Booking.com Kreditkarte ungültig oder No-Show: Was tun?](/blog/booking-com-invalid-card-no-show).
::

## So verändern Genius, Preferred und Visibility Booster Ihre Kosten

- **Genius** erhöht den Provisionssatz nicht, aber den Rabatt bezahlen Sie selbst. Mit dem Beitritt gelten 10 % für Ihren günstigsten und beliebtesten Zimmertyp, und Sie können für höhere Genius-Stufen 15 % oder 20 % aktivieren. Booking.com schreibt, der Standardrabatt „is funded by you, the accommodation partner“ ([Genius program](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-genius-marketing-program)).
- Das **Preferred Partner Program** bringt mehr Sichtbarkeit und ein Abzeichen „in exchange for a small increase in commission“ (im Austausch gegen eine geringe Provisionserhöhung). Sie brauchen einen Performance-Score von mindestens 70 %, der alle 90 Tage geprüft wird ([Preferred Partner](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-partner-program)). **Preferred Plus** verlangt einen Score von 80 % und eine höhere Provisionsinvestition ([Preferred Plus](https://partner.booking.com/en-us/help/growing-your-business/tools-programs/understanding-preferred-plus)). Den Aufschlag veröffentlicht Booking.com nicht; Sie sehen ihn im Extranet unter **Boost performance**.
- Mit **Visibility Booster** wählen Sie per Schieberegler eine höhere Provision, nur für die Anreisedaten und Gästeländer, die Sie festlegen ([Visibility Booster](https://partner.booking.com/en-us/help/growing-your-business/increase-revenue/all-you-need-know-about-visibility-booster)).

## Welche Kosten kommen durch Payments by Booking.com hinzu?

Es gibt keine Einrichtungsgebühr ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom)). Was Sie zahlen, hängt davon ab, wie Sie ausgezahlt werden:

| Auszahlungsart | Zusätzliche Kosten |
|---|---|
| Banküberweisung | Eine Zahlungsgebühr als Prozentsatz jeder abgeschlossenen Reservierung. Sie hängt vom Standort Ihrer Unterkunft ab. |
| Virtuelle Kreditkarte (VCC) | Die Gebühr Ihrer eigenen Bank oder Ihres Zahlungsdienstleisters für das Belasten der Karte. Booking.com legt sie nicht fest. |

Verzichten Sie auf die Stornogebühr eines Gastes, entfällt auch die Zahlungsgebühr. Wickelt Booking.com alle Gästezahlungen ab, zieht es Provision und Zahlungsgebühr von jeder Auszahlung ab. Andernfalls erhalten Sie am Monatsende eine Rechnung.

Beides für eine Buchung sehen Sie im Extranet im Reiter **Reservations** in der Spalte **Commission and charges**. Die Aufschlüsselung steht in den **Reservation details**.

## Fällt auf die Booking.com-Provision Umsatzsteuer an?

In der EU hängt es von Ihrer USt-IdNr. ab ([EU VAT and commission invoices](https://partner.booking.com/en-us/compliance/tax-remittance-management/eu-vat-and-commission-invoices)):

- **Mit einer für EU-Umsätze gültigen USt-IdNr.** (Booking.com prüft sie in der VIES-Datenbank der EU) erhalten Sie die Provisionsrechnung ohne Umsatzsteuer. Sie bleiben aber „responsible for reporting any VAT you may owe“, müssen also die geschuldete Umsatzsteuer selbst bei Ihrem Finanzamt anmelden. Steuerberater nennen das Reverse-Charge-Verfahren.
- **Ohne eine solche Nummer** stellt Booking.com die Provision zuzüglich Umsatzsteuer in Rechnung. Bei Netto-Auszahlungen per Überweisung zieht es Provision, Zahlungsgebühr und die Umsatzsteuer auf beide ab.

So tragen Sie Ihre Nummer ein: Öffnen Sie **Finance > Finance settings > VAT details > Edit details**, bestätigen Sie, dass sie für EU-Umsätze gültig ist, geben Sie sie ein und speichern Sie. Außerhalb der EU gelten je nach Land andere Regeln; fragen Sie hier Ihren Steuerberater.

Provisionsrechnungen erhalten Sie einmal im Monat, für jeden Gast, der im Vormonat ausgecheckt hat. Sie sind innerhalb von 14 Tagen zu zahlen. Bleiben sie unbezahlt, kann Ihre Unterkunft vorübergehend geschlossen werden.

## So sehen Sie das Netto jeder Booking.com-Buchung in Little Hotelier

Die Reservierungsübersicht von Little Hotelier zeigt Zimmersumme, Extras, Rabatte und Kartengebühren. Was Booking.com einbehält, zeigt sie nicht. Provision und Zahlungsgebühr jeder Buchung stehen im Extranet (**Reservation statements** oder die Spalte **Commission and charges**). Was Sie behalten, ist die Summe abzüglich dieser Beträge und der im Preis enthaltenen Steuer.

### Rechenbeispiel: vom Buchungspreis zu Ihrem Netto

Das sind die Zahlen aus den Screenshots unten: eine Booking.com-Reservierung über 125,18 € mit 17 % Provision und 1,3 % Zahlungsgebühr. Ihre Prozentsätze können abweichen.

| Zeile | Betrag |
|---|---|
| Buchungssumme (inkl. Steuer) | 125,18 € |
| Provision, 17 % der Summe | −21,28 € |
| Zahlungsgebühr, 1,3 % der Summe | −1,63 € |
| Im Preis enthaltene Steuer | −11,38 € |
| **Ungefähres Netto** | **90,89 €** |

Rund ein Viertel dessen, was der Gast zahlt, kommt nie bei Ihnen an. Stellt Booking.com Ihnen die Provision zuzüglich Umsatzsteuer in Rechnung, ziehen Sie auch diese ab.

### Mit einem kostenlosen Skript bei jeder Buchung sehen

::screenshot{src="/images/scripts/show-booking-commissions/from.png" alt="Reservierungsübersicht in Little Hotelier (spanische Oberfläche) für eine Booking.com-Buchung mit Zimmersumme, Extras, Rabatt und erhaltenem Gesamtbetrag, ohne Provisionszeile" caption="Vorher: Little Hotelier zeigt die Summe, nicht das, was Booking.com einbehält." width="720" height="669"}
::

Für eine schnelle Schätzung direkt in Little Hotelier nutzen Sie das kostenlose Skript **Show Booking.com Commissions**:

1. Installieren Sie die kostenlose Browser-Erweiterung Tampermonkey. Die [Installationsanleitung](/tools/ui/instructions) führt Sie durch die Schritte.
2. Öffnen Sie [Show Booking.com Commissions](/tools/ui/show-booking-commissions) und klicken Sie auf **Install on Tampermonkey**.
3. Öffnen Sie in Little Hotelier eine beliebige Reservierung mit der Quelle Booking.com. Nach ein paar Sekunden erscheinen über den Summen vier Zeilen: die Überweisungsgebühr (1,3 %), die Booking.com-Provision (17 %), alle Abzüge und das ungefähre Netto.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Reservierungsübersicht in Little Hotelier mit vier zusätzlichen Zeilen: Überweisungsgebühr 1,3 %, Booking.com-Provision 17 %, Summe der Abzüge und ungefähres Netto von 90,89 Euro" caption="Nachher: Provision, Zahlungsgebühr und ungefähres Netto bei jeder Booking.com-Reservierung." width="752" height="715"}
::

Was Sie wissen sollten, bevor Sie sich darauf verlassen:

- **Die Sätze sind im Skript fest eingetragen**: 17 % Provision und 1,3 % Zahlungsgebühr. Weichen Ihre ab, öffnen Sie das Skript im Editor von Tampermonkey und ändern `0.17` und `0.013`.
- **Die Beschriftungen sind auf Spanisch**, die Beträge in Euro.
- **Es ist eine Schätzung.** Preferred, Visibility Booster oder Umsatzsteuer auf Ihrer Provisionsrechnung kennt es nicht.
- **Es bleibt in Ihrem Browser.** Es liest nur die geöffnete Seite und sendet keine Daten nach außen.

Weitere kostenlose Skripte dieser Art finden Sie unter [kostenlose Chrome-Erweiterungen für Little Hotelier](/blog/little-hotelier-chrome-extensions).

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools ist unabhängig, steht in keiner Verbindung zu Booking.com, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Die Skripte laufen in Ihrer eigenen Little-Hotelier-Sitzung, und das Hotelier-Tools-Dashboard verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels.
::

## Preise mit Blick auf die Provision gestalten: Channels & discounts

Genius und andere Kanalrabatte verändern, was ein Gast zahlt, und damit, was Sie behalten. Im Hotelier-Tools-Dashboard (die dynamische Preisgestaltung ist im Alpha-Stadium) bündelt **Pricing settings > Channels & discounts** (`/pricing/settings/channels`) zwei Angaben:

1. **Discount when applying prices** (Rabatt beim Übernehmen von Preisen). Die Preise, die Sie aus den Empfehlungen übernehmen, sind mit „Empfehlung minus diesem Prozentsatz“ vorausgefüllt. Bei 5 % wird aus einer Empfehlung von 100,00 ein übernommener Preis von 95,00. Lassen Sie 0 stehen, um Empfehlungen unverändert zu übernehmen.
2. **What the guest pays per channel** (Was der Gast pro Kanal zahlt). Klicken Sie auf **Add a channel** und geben Sie den Rabatt ein, den der Kanal seinen eigenen Gästen gibt, etwa Genius- oder Mitgliederpreise. Die Seite Recommendations zeigt dann, was ein Gast auf jedem Kanal wirklich zahlt.
3. Klicken Sie auf **Save changes**.

::screenshot{src="/images/blog/demo/en/pricing-settings-channels-discounts.webp" alt="Seite Channels and discounts in den Preiseinstellungen von Hotelier Tools: Discount when applying prices auf 5 % gesetzt (eine Empfehlung von 100,00 wird als 95,00 übernommen) und What the guest pays per channel mit der Schaltfläche Add a channel, Vorschlägen für Booking Genius 10 %, Expedia member price 10 % und Agoda insider deal 10 %, noch ohne hinzugefügte Kanalrabatte" caption="Teilen Sie der Preis-Engine Ihre Rabatte mit, damit die Empfehlungen zeigen, was der Gast auf jedem Kanal wirklich zahlt." path="/pricing/settings/channels"}
::

::demo-cta{path="/pricing/settings/channels"}
::

Wie der Rest der Preis-Engine funktioniert (Mitbewerberpreise, Regeln, lokale Veranstaltungen), erklären der Leitfaden [dynamische Preise für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier) und die Seite [Dynamic pricing](/tools/bot/dynamic-pricing). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Die Browser-Skripte bleiben kostenlos.

Siehe auch: [CTA/CTD und Stop-Sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Zusammenfassung

- Die Booking.com-Provision ist der Prozentsatz Ihrer Vereinbarung. Preferred, Preferred Plus und Visibility Booster erhöhen sie, und Genius kostet Sie den Rabatt.
- Sie wird auf den vollen Buchungsbetrag berechnet, meist inklusive Umsatzsteuer, nie auf die City-Tax.
- Payments by Booking.com fügt bei Auszahlung per Überweisung eine Zahlungsgebühr hinzu. In der EU sorgt eine gültige USt-IdNr. dafür, dass auf Ihrer Provisionsrechnung keine Umsatzsteuer steht.
- Die genauen Zahlen prüfen Sie unter **Finance > Reservation statements**, und eine Schätzung für jede Booking.com-Buchung sehen Sie in Little Hotelier mit dem kostenlosen Skript [Show Booking.com Commissions](/tools/ui/show-booking-commissions).
