---
title: "Sammelrechnungen und Rechnungen beim Check-out für Little Hotelier"
---

Die Rechnungsfunktion erstellt die fehlenden Little-Hotelier-Rechnungen für einen Zeitraum in einem Lauf und liefert Ihnen jedes Quartal als ZIP mit PDFs plus einer CSV-Übersicht für Ihren Steuerberater. Sie kann außerdem Little Hotelier veranlassen, dem Gast die Rechnung automatisch per E-Mail zu senden, sobald er ausgecheckt hat.

## So funktioniert es

1. **Einen Zeitraum erstellen.** Klicken Sie unter **Invoice Download** (`/invoices`) auf **Generate invoices** und wählen Sie die Daten, zum Beispiel 1. Juli bis 30. September. Hotelier Tools liest diese Reservierungen und bittet Little Hotelier, für jeden infrage kommenden Aufenthalt eine Rechnung zu erstellen.
2. **Riskante Rechnungen werden abgelehnt.** Eine Vorabprüfung stoppt einen Aufenthalt ohne Check-out, eine Firmenrechnung ohne Steuernummer oder Steueradresse, eine fehlerhafte Steuernummer und einen Aufenthalt, der bereits abgerechnet ist.
3. **Nichts wird stillschweigend übersprungen.** Jede Ablehnung landet mit ihrem Grund unter **Errors** (`/invoices/errors`). Korrigieren Sie die Reservierung in Little Hotelier und prüfen Sie sie dann erneut.
4. **Herunterladen.** Rechnungen sind nach Quartal und Monat gruppiert. Klicken Sie auf **ZIP** für alle PDFs oder auf **Preview CSV**, um zuerst die Übersicht zu prüfen.
5. **Rechnung beim Check-out.** Markieren Sie unter **Invoice on Leave** (`/invoice-on-leave`) einen Aufenthalt einmal. Eine tägliche Aufgabe (standardmäßig 16:00 Uhr) lässt Little Hotelier nach dem Check-out die Rechnung erstellen und mit Ihrer eigenen Vorlage und Ihrem eigenen Absender per E-Mail versenden.

Die Rechnungen sind eigene Dokumente von Little Hotelier, sodass Ihre Nummerierung, Ihr Logo und Ihr Layout genau so bleiben, wie sie sind. Schritt-für-Schritt-Anleitungen: [alle Rechnungen auf einmal herunterladen](/blog/download-all-little-hotelier-invoices) und [die Rechnung beim Check-out senden](/blog/send-invoice-to-guest-at-checkout).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**.
- In Little Hotelier ausgecheckte Gäste. Macht Ihr Team das nicht von Hand, schließt eine optionale Aufgabe **Automatic check-out** (15:05 Uhr) die Abreisen des Tages ab.
- Firmenname, Steuernummer und Steueradresse in der Reservierung bei Geschäftsgästen.
- Eine E-Mail-Adresse des Gastes in der Reservierung für Rechnungen, die beim Check-out gesendet werden.
- Die Rechnungssprache, festgelegt unter **Settings > Invoices**: nach dem Land des Gastes oder immer dieselbe, mit einer Ausweichsprache.

## Grenzen und Gutes zu wissen

- **Status:** Sammel-Download, Vorabprüfungen, Fehler und Sprache sind stabil. Die Rechnung beim Check-out ist in der Beta.
- Die Check-out-Aufgabe schaut 8 Tage zurück, um verpasste Läufe nachzuholen, und liest bis zu 100 Check-outs pro Lauf. Ein vergangener Aufenthalt ohne E-Mail-Adresse des Gastes wird einmal gemeldet, nicht jeden Tag erneut versucht.
- Es gibt keine VeriFactu-Funktion. In Spanien belassen Sie diesen Schritt in Little Hotelier.
