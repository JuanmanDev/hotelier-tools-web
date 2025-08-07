---
Der automatische Checkout ermöglicht es, Reservierungen als ausgecheckt zu markieren, ohne dies manuell tun zu müssen. 
Dies ist besonders nützlich für Hotels oder Hostels, die keine manuelle Intervention beim Checkout-Prozess benötigen.

Derzeit läuft das System täglich um 15:00 Uhr.
Die folgenden Bedingungen werden überprüft, um eine Reservierung als ausgecheckt zu markieren:
- Die Reservierung muss im Status "Checked In" sein.
- Das Checkout-Datum muss der aktuelle Tag sein.
- Das Check-in-Datum muss vor dem aktuellen Tag liegen.
- Die Reservierung darf keine ausstehenden Zahlungen haben.
- Die Reservierung muss eine Steueridentifikationsnummer haben, um die Rechnung zu erstellen.
- Die Reservierung darf keine ausgestellte Rechnung haben.

Wenn eine Reservierung alle diese Bedingungen erfüllt, wird sie automatisch als ausgecheckt markiert und die entsprechende Rechnung wird erstellt.

Falls eine Reservierung eine der Bedingungen nicht erfüllt, wird eine E-Mail an den Hoteladministrator gesendet, um die Situation zu melden.

Beispiel-E-Mail:
  
<br>

## Check-in-Bericht (2025-08-05)

Gesamte Reservierungen mit Check-in heute: **7**

Reservierungen mit Problemen: **1**

Reservierungen mit automatischem Check-out: **0**

| Zimmer | Gastname | Ausstehend | Gesamt | Status | Probleme | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Probleme | Ausweis/Pass fehlt | [Reservierung anzeigen](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Korrekt | Alles korrekt | [Reservierung anzeigen](#) |

### Zusammenfassung:

*   **Grün:** Reservierungen automatisch verarbeitet (Check-out abgeschlossen)
*   **Rot:** Reservierungen, die manuelle Aufmerksamkeit erfordern

**⚠️ 1 Reservierungen erfordern manuelle Aufmerksamkeit**


### Hinweise:
- Reservierungen mit Problemen müssen manuell überprüft werden.
