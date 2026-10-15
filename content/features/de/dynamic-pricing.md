---
title: "Dynamische Preisgestaltung und Stop Sell für Little Hotelier"
---

Die dynamische Preisgestaltung vergleicht Ihre Little-Hotelier-Preise mit ähnlichen Hotels in der Nähe und empfiehlt für jedes Zimmer und jede Nacht einen Preis, samt Begründung. Nichts wird in Little Hotelier geschrieben, bis Sie bestätigen, es sei denn, Sie schalten den Autopiloten selbst ein.

## So funktioniert es

1. **Mitbewerberpreise.** Legen Sie unter **Competitors & market** Ihre Stadt und Ihre echten Konkurrenten fest. **Competitor Prices** (`/competitor-prices`) zeigt dann, was sie jede Nacht verlangen, neben Ihrem eigenen Preis.
2. **Eine Empfehlung pro Nacht.** Unter **Recommendations** (`/price-recommendations`) beginnt jeder Preis bei Ihrem eigenen Preis, wird ein wenig zum Median vergleichbarer Hotels gezogen und bewegt sich dann mit der Nachfrage: Belegung, verbleibende Zimmer, Last Minute, Wochenenden, genehmigte lokale Veranstaltungen und Gäste auf Ihrer Warteliste. Ihre Grenzen deckeln die Bewegung. **Why?** zeigt die Rechnung.
3. **Regeln in einfachen Worten.** Tippen Sie eine Regel als Satz. Die KI macht daraus eine strukturierte Regel, und Sie genehmigen sie, bevor sie zählt. Datumsregeln können einen Preis festlegen, einfrieren oder begrenzen.
4. **Lokale Veranstaltungen.** Ein KI-Scan findet Messen, Konzerte und Feiertage in Ihrer Nähe. Sie genehmigen oder lehnen jede ab.
5. **Anwenden.** Markieren Sie die Nächte und klicken Sie auf **Apply to Little Hotelier**. Derselbe Dialog kann SiteMinder Stop Sell setzen, das nur für Nächte gesendet wird, bei denen die Preisänderung erfolgreich war.
6. **Ergebnisse prüfen.** **History & outcomes** (`/pricing-log`) listet jeden geschriebenen Preis auf, mit den verbleibenden Zimmern damals und heute.

Die Methode und eine manuelle Routine, die Sie ohne Werkzeug ausführen können, finden Sie unter [dynamische Preisgestaltung für kleine Hotels](/blog/dynamic-pricing-little-hotelier). Zu Beschränkungen siehe [CTA, CTD, Mindestaufenthalt und Stop Sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**.
- Einen Mindestpreis pro Zimmertyp und die Konkurrenten, mit denen Sie wirklich im Wettbewerb stehen.
- Eine Prüfung, welche Mitbewerberquellen für Ihren Ort Preise liefern. Es ist darauf ausgelegt, Booking.com, Expedia, Google Hotels, Hostelworld und Agoda zu lesen.

## Grenzen und Gutes zu wissen

- **Status:** Mitbewerberpreise sind in der Beta. Empfehlungen, Regeln, Veranstaltungen, der Autopilot und Stop Sell sind in der Alpha.
- **Der Autopilot ist standardmäßig ausgeschaltet.** Eingeschaltet läuft er höchstens alle 3 Stunden, verändert jede Nacht standardmäßig um höchstens 20 %, unterschreitet nie Ihre Untergrenze und arbeitet 1 bis 90 Tage im Voraus (standardmäßig 14). Er ändert nie Stop Sell.
- Die nächtlichen Preisläufe sind reine Arithmetik. Die KI liest nur Ihre Regelsätze und findet Veranstaltungen.
- Die Umsatzschätzung im Preisprotokoll ist ein Richtwert, kein Beweis.
