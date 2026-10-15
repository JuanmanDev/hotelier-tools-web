---
title: "Eine Warteliste für ausgebuchte Termine in Little Hotelier"
---

Die Warteliste, im Dashboard **Availability Queue** genannt, beobachtet Aufenthalte, für die Sie ausgebucht sind, und prüft Little Hotelier nach Zeitplan. Sind alle gewünschten Zimmer in jeder Nacht frei, erhalten der Gast, Ihr Team oder beide eine Nachricht per E-Mail oder WhatsApp, mit direktem Buchungslink.

## So funktioniert es

1. **Einen zu beobachtenden Aufenthalt hinzufügen.** Wählen Sie unter `/availability-watch` die erste und letzte Nacht, die benötigten Zimmer und optional die Zimmertypen. Eine gemischte Gruppe kann je Zimmertyp unterschiedliche Anzahlen anfragen.
2. **Festlegen, wer benachrichtigt wird.** Fügen Sie den Kontakt des Gastes und Ihren eigenen hinzu. Wählen Sie die Benachrichtigungen: **available** (alle Zimmer frei, was die Beobachtung schließt), **partial** (weniger Zimmer als angefragt, standardmäßig nur für die Unterkunft) oder **expiring** (der Aufenthalt beginnt innerhalb von 48 Stunden und nichts wurde gefunden).
3. **Die Prüfung planen.** Klicken Sie auf **Check every night at 01:00** oder wählen Sie etwas zwischen alle 20 Minuten und einmal täglich. **Check the queue now** führt sie sofort aus.
4. **Eine Nachricht pro Beobachtung.** Die schwächste Nacht entscheidet: Ein Aufenthalt ist nur frei, wenn jede Nacht die Zimmer hat. Nach dem Versand der Nachricht wird der Eintrag geschlossen, und **History** bewahrt den genauen gesendeten Text auf.
5. **Gäste sich eintragen lassen.** Die **Public waiting-list page** (`/availability-watch/public`) ist ein Formular, das Sie von Ihrer Website aus verlinken. Gäste wählen ihre Nächte, hinterlassen eine E-Mail-Adresse und setzen ein Häkchen bei der Einwilligung.

Eine Tabellenmethode und Regeln, wer zuerst drankommt, finden Sie unter [So führen Sie eine Warteliste für ausgebuchte Termine](/blog/hotel-waitlist-sold-out-dates).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**.
- Die geplante Prüfung. Solange diese Aufgabe nicht existiert, wird nichts geprüft.
- Für WhatsApp-Nachrichten eine verbundene WhatsApp-Nummer.
- Ihren rechtlichen Namen und Ihre Adresse auf der Unterkunftskarte, weil die Datenschutzhinweise des öffentlichen Formulars daraus erstellt werden.

## Grenzen und Gutes zu wissen

- **Status: Beta.**
- **Nichts wird reserviert.** Die Warteliste reserviert nie ein Zimmer und ändert keine Buchung. Der erste Gast, der bucht, bekommt das Zimmer.
- **Eine nächtliche Prüfung kann zu spät kommen.** Prüfen Sie in der Hochsaison häufiger.
- **Die öffentliche Seite ist ausgeschaltet, bis Sie sie öffnen.** Standardmäßig bittet sie Gäste, ihre E-Mail-Adresse zu bestätigen, und nimmt Aufenthalte von bis zu 14 Nächten und 2 Zimmern pro Anfrage an. Sie begrenzt die Liste auf 100 Wartende und 40 Anmeldungen pro Tag. Kontaktdaten werden aus geschlossenen Einträgen nach 90 Tagen entfernt.
- **Sie fließt in Ihre Preise ein.** Jede wartende Gruppe erhöht die [Preisempfehlung](/tools/bot/dynamic-pricing) dieser Nacht um 3 %, bis zu 12 %.
