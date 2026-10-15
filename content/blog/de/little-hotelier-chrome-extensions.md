---
title: "Chrome-Erweiterung für Little Hotelier: kostenlose Userscripts für schnelleres Arbeiten"
seoTitle: "Chrome-Erweiterung für Little Hotelier: kostenlose Skripte"
description: "Kostenlose Userscripts für Little Hotelier: Kalenderpreise, breitere Tabellen, Booking.com-Provision, Rechnung per Klick. So installieren Sie sie sicher."
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [chrome erweiterung little hotelier, little hotelier chrome extension, tampermonkey skripte, userscript chrome, little hotelier kalender preise, little hotelier booking.com provision]
demoPath: /
cover: /images/scripts/prices-display/to.webp
coverAlt: "Little-Hotelier-Kalender (spanische Oberfläche) mit dem Preis jeder Nacht unter jedem Zimmertyp, eingefügt vom Skript Prices Display"
faq:
  - q: "Stammen diese Skripte von Little Hotelier?"
    a: "Nein. Es sind kostenlose, unabhängige Skripte von Hotelier Tools. Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Die Skripte laufen in Ihrem eigenen Browser, in Ihrer eigenen Little-Hotelier-Sitzung."
  - q: "Tampermonkey oder eine Chrome-Erweiterung: Was brauche ich?"
    a: "In gewisser Weise beides: Tampermonkey ist die Chrome-Erweiterung, und die Skripte laufen darin. Sie installieren Tampermonkey einmal und fügen dann nur die Skripte hinzu, die Sie wollen."
  - q: "Funktionieren die Skripte auf einem Tablet?"
    a: "Tampermonkey läuft in mehreren Browsern, und sein Menü bietet eine Version für Smartphones und Tablets an. Für Touchscreens installieren Sie Improve Style For Touch Screens, das Schaltflächen und Menüs vergrößert. Testen Sie zuerst auf Ihrem eigenen Gerät."
  - q: "Geht ein Skript kaputt, wenn Little Hotelier aktualisiert wird?"
    a: "Das kann passieren. Skripte verändern die Seiten von Little Hotelier. Nach einem Redesign funktioniert eines davon womöglich nicht mehr, bis es aktualisiert ist. Schalten Sie es im Tampermonkey-Menü aus und melden Sie das Problem auf GitHub."
  - q: "Wie deinstalliere ich ein Skript?"
    a: "Klicken Sie auf das Tampermonkey-Symbol und schalten Sie das Skript aus, oder öffnen Sie das Dashboard und löschen Sie es. Laden Sie Little Hotelier neu, dann sieht die Seite wieder normal aus."
  - q: "Kosten die Skripte etwas?"
    a: "Nein. Die Browser-Skripte sind für immer kostenlos, ein Konto ist nicht nötig."
---

Mit kostenlosen Userscripts machen Sie Little Hotelier schneller: kleine Zusätze, die über die Erweiterung Tampermonkey in Ihrem Browser laufen. Sie blenden Preise im Kalender ein, verbreitern enge Tabellen, schätzen die Booking.com-Provision je Buchung, fügen der Reservierung eine Schaltfläche für die Rechnung per Klick hinzu und mehr. Installieren Sie Tampermonkey einmal, schalten Sie in Chrome **Allow User Scripts** ein und klicken Sie dann auf der Seite eines Skripts auf **Install on Tampermonkey**.

## Was ist Tampermonkey, und warum Skripte statt einer Erweiterung?

Tampermonkey ist eine Browser-Erweiterung, die **Userscripts** ausführt: kleine JavaScript-Dateien, die eine Webseite nach dem Laden anpassen. Statt für jede Kleinigkeit eine eigene Erweiterung zu installieren, richten Sie Tampermonkey einmal ein und fügen nur die Skripte hinzu, die Sie brauchen. Es läuft in Chrome, Edge, Firefox, Safari und Opera.

Jedes Skript von Hotelier Tools ist eine einzelne, lesbare Datei in einem [öffentlichen GitHub-Repository](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Es gibt 16: 15 sind sofort installierbar, eines wird auf Anfrage eingerichtet. Alle sind für immer kostenlos.

## Sind Userscripts sicher? Worauf sie zugreifen können und worauf nicht

Eine berechtigte Frage, denn ein Skript läuft auf der Seite, auf der Ihre Buchungen liegen. Das tun diese Skripte, und das tun sie nicht:

- **Sie laufen nur auf Little Hotelier.** Jedes Skript legt fest, auf welchen Seiten es laufen darf: den eigenen Adressen von Little Hotelier (einschließlich Direct Booking) und, beim Chekin-Skript, denen von Chekin.
- **Ihre Daten bleiben, wo sie sind.** Die Skripte sprechen mit Little Hotelier (und bei diesem einen Skript mit Chekin). An Hotelier Tools wird nichts gesendet.
- **Sie handeln in Ihrem Namen.** Ein Skript nutzt Ihre offene Sitzung, es kann also nur tun, was Sie mit eigenen Klicks tun könnten. Einige passen ein Formular an, bevor Sie auf Speichern klicken, etwa um das Land oder die Zahl der Erwachsenen zu setzen.
- **Sie können sie lesen.** Der Code ist öffentlich, und Tampermonkey zeigt ihn vor der Installation an.
- **Sie aktualisieren sich selbst.** Jedes Skript enthält seine GitHub-Adresse, damit Tampermonkey neue Versionen holen kann.

Die allgemeine Regel für jedes Userscript: Installieren Sie nur aus Quellen, denen Sie vertrauen. Und wenn Little Hotelier eine Seite ändert, kann ein Skript aufhören zu funktionieren, bis es aktualisiert ist. Schalten Sie es im Tampermonkey-Menü aus und melden Sie es auf GitHub.

::callout{type="info" title="Unabhängig und kostenlos"}
Diese Skripte werden von Hotelier Tools veröffentlicht. Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Die Skripte arbeiten mit dem eigenen Little-Hotelier-Login Ihres Hotels und brauchen kein Konto.
::

## So installieren Sie ein Skript (beim ersten Mal etwa fünf Minuten)

1. **Installieren Sie Tampermonkey** von [tampermonkey.net](https://www.tampermonkey.net/). Wählen Sie die normale Version für Ihren Browser, nicht die Beta.
2. **Erlauben Sie das Ausführen von Skripten.** In Chrome 138 oder neuer klicken Sie mit der rechten Maustaste auf das Tampermonkey-Symbol, wählen **Manage extension** (Erweiterung verwalten) und schalten **Allow User Scripts** ein. In älteren Chrome-Versionen oder in Edge öffnen Sie `chrome://extensions` (bzw. `edge://extensions`) und schalten den **Developer mode** (Entwicklermodus) ein ([Tampermonkey-FAQ](https://www.tampermonkey.net/faq.php?q=Q209)).
3. **Öffnen Sie die Seite eines Skripts** auf dieser Website, zum Beispiel [Prices Display](/tools/ui/prices-display), und klicken Sie auf **Install on Tampermonkey**. Tampermonkey öffnet einen Tab mit dem Code: Klicken Sie auf **Install**.
4. **Laden Sie Little Hotelier neu** (F5). Die Änderung erscheint sofort.

Funktioniert die Schaltfläche nicht, kopieren Sie den Code von GitHub, wählen im Tampermonkey-Menü **Create a new script…**, fügen ihn ein und speichern mit Strg+S. Die [Installationsanleitung](/tools/ui/instructions) zeigt jeden Schritt mit Bildern, und [alle Skripte stehen hier](/chrome-extensions).

::screenshot{src="/images/ui/tamperMonkeyMenu.webp" alt="Tampermonkey-Menü in Chrome mit Enabled, Create a new script und Dashboard" caption="Das Tampermonkey-Menü: Skripte ein- oder ausschalten, von Hand eines anlegen oder im Dashboard eines entfernen." width="624" height="645"}
::

Um ein Skript zu entfernen, klicken Sie auf das Tampermonkey-Symbol und schalten es aus, oder öffnen das **Dashboard** und löschen es.

## Die Skripte, nach Aufgabe gruppiert

Jedes Skript hat eine eigene Seite mit Vorher-nachher-Bildern und der Installationsschaltfläche.

### Mehr auf einem Bildschirm sehen

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table): Die Reservierungsliste nutzt die volle Breite Ihres Bildschirms. Kein seitliches Scrollen mehr.
- [Tables Full Width](/tools/ui/tables-full-width): dasselbe für jede Tabelle in Direct Booking.
- [Compact Calendar UI](/tools/ui/compact-calendar-ui): Tag und Datum in einer Zeile statt in dreien und kürzere Zeilen für Zimmertypen, damit mehr Zimmer in den Kalender passen.
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details): eine kompaktere Reservierungsansicht mit höherem Kommentarfeld.

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="Little-Hotelier-Kalender (spanische Oberfläche) nach Compact Calendar UI, mit Wochentag und Datum in einer Zeile und kompakten Zeilen für Zimmertypen" caption="Compact Calendar UI bringt mehr Zimmer und Tage auf einen Bildschirm." width="1187" height="1306"}
::

### Preise und Booking.com-Provisionen

- [Prices Display](/tools/ui/prices-display): zeigt den Zimmerpreis jeder Nacht im Kalender an, ausgelesen aus Ihrer Seite Inventory. Praktisch, wenn ein Gast anruft und nach Freitag fragt.
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): ergänzt Booking.com-Reservierungen um eine geschätzte Aufschlüsselung der Provision und einen ungefähren Nettobetrag. Es ist eine Schätzung, maßgeblich ist Ihre Booking.com-Rechnung. Mehr in [Wie viel Provision nimmt Booking.com?](/blog/booking-com-commission).
- [Change Inventory Name](/tools/ui/change-inventory-name): benennt das Menü **Inventory** in „Inventory - Prices“ um (Englisch und Spanisch), damit neue Mitarbeiter die Preise finden.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Booking.com-Reservierung in Little Hotelier (spanische Oberfläche) mit zusätzlichen Zeilen für die Überweisungsgebühr, die Booking.com-Provision, die Provisionen insgesamt mit Mehrwertsteuer und einen ungefähren Nettobetrag" caption="Eine Schätzung, was Ihnen eine Booking.com-Buchung nach Provision übrig lässt." width="752" height="715"}
::

### Zahlungen und Rechnungen mit weniger Klicks

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): ein direkter Link zum Drucken der Rechnung in der Reservierung, ohne das Menü Print zu öffnen.
- [Update Payment Link Button](/tools/ui/update-payment-link-button): klarere Beschriftung der Schaltfläche für den Zahlungslink, und die Telefonnummer des Gastes wird automatisch aus dem Formular ergänzt.
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button): eine Schaltfläche, die Ihre Bankdaten mit vorbereitetem Text per E-Mail versendet. Sie ist noch nicht veröffentlicht und wird auf Anfrage eingerichtet.

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="Fußbereich einer Little-Hotelier-Reservierung (spanische Oberfläche) mit einem zusätzlichen Link Imprimir Factura neben den Menüs Print und Email" caption="Ein Klick, um die Rechnung zu drucken." width="604" height="265"}
::

Sie möchten, dass die Rechnung ganz ohne Klick verschickt wird? Siehe [Rechnung automatisch beim Check-out an den Gast senden](/blog/send-invoice-to-guest-at-checkout).

### Gästedaten und Check-in

- [Chekin Connection](/tools/ui/show-chekin): Wenn Sie Chekin für den Online-Check-in nutzen, zeigt es die Chekin-Registrierung jedes Gastes (Name, Telefon, Dokumentnummer) in der Reservierung an. Sie können die Ausweisnummer in die Rechnung kopieren und das Registrierungsformular per E-Mail oder WhatsApp teilen. Es nutzt Ihren eigenen Chekin-Login.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): für Betriebe in Spanien eine Liste spanischer Provinzen im Feld Province. Die Auswahl setzt das Land auf Spanien, und leere Felder für Vor- und Nachname erhalten einen Unterstrich.
- [Update Number Adults](/tools/ui/update-number-adults): neue Reservierungsformulare beginnen mit 2 statt 0 Erwachsenen, damit keine Buchung ohne Erwachsene gespeichert wird.

::screenshot{src="/images/scripts/show-chekin/to.webp" alt="Little-Hotelier-Reservierung (spanische Oberfläche) mit einem Chekin-Panel, das einen registrierten Gast, die Dokumentnummer und eine Schaltfläche Use document zeigt" caption="Chekin-Registrierungen direkt in der Little-Hotelier-Reservierung." width="1484" height="831"}
::

### Alltagskomfort: Neuladen, Tablets und Abkürzungen

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity): lädt die Seite nach 10 Minuten ohne Klicks, Mausbewegung oder Scrollen neu, damit Sie nicht zu einer abgelaufenen Sitzung zurückkommen. Es lädt nie neu, während Sie arbeiten.
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens): größere Schaltflächen und Menüs für Tablets, und die Schaltfläche zum Entfernen eines Zimmers, die sonst nur beim Darüberfahren mit der Maus erscheint, ist immer sichtbar.
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk): bei einer Direct-Booking-Reservierung eine Schaltfläche, um die Reservierungsdetails im Front Desk zu prüfen und Erstattungen zu kontrollieren. Wenn Sie nicht im Front Desk angemeldet sind, müssen Sie sie eventuell zweimal drücken.

## Welche Skripte zuerst installieren?

- **Rezeption am Laptop:** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button.
- **Inhaber oder Revenue-Management:** Prices Display und Show Booking.com Commissions.
- **Betriebe in Spanien:** Easy Save Province and Country, dazu Chekin Connection, wenn Sie Chekin nutzen.
- **Tablet an der Rezeption:** Improve Style For Touch Screens.

## Wenn Sie mehr brauchen als Änderungen an der Oberfläche

Skripte verändern, was Sie sehen, solange Sie vor dem Bildschirm sitzen. Wenn Sie nicht da sind, können sie nichts tun. Für Aufgaben, die selbstständig laufen, etwa jede Anreise auf fehlende Ausweise zu prüfen oder Rechnungen beim Check-out per E-Mail zu versenden, gibt es das [Hotelier-Tools-Dashboard](/tools/bot). Es ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Die Skripte bleiben für immer kostenlos. Weitere Abkürzungen in Little Hotelier selbst finden Sie unter [Little-Hotelier-Tipps und versteckte Funktionen](/blog/little-hotelier-tips).

::demo-cta{path="/"}
::

Siehe auch: [Alternativen zu Little Hotelier](/blog/little-hotelier-alternatives).

## Zusammenfassung

- Installieren Sie Tampermonkey einmal, erlauben Sie Userscripts und klicken Sie dann bei jedem gewünschten Skript auf **Install on Tampermonkey**.
- Die Skripte laufen nur auf Little Hotelier (und bei einem davon auf Chekin), senden nichts an Hotelier Tools und aktualisieren sich selbst.
- Beginnen Sie mit denen, die zu Ihrer Aufgabe passen: breitere Tabellen und Auto Refresh für die Rezeption, Preise und Provisionen für Inhaber.
- Wenn eines nach einem Update von Little Hotelier Probleme macht, schalten Sie es im Tampermonkey-Menü aus.
