---
title: "Die INE-Beherbergungsstatistik aus Little Hotelier"
---

INE-Meldungen erstellen die spanische INE-Beherbergungsstatistik für Hotels aus Ihren Little-Hotelier-Reservierungen: Ankünfte und Übernachtungen nach spanischer Region oder Land, belegte Zimmer, Zusatzbetten und Durchschnittspreis nach Kundentyp. Hotelier Tools validiert die Zahlen, sendet das XML über das IRIA-System des INE und bewahrt den Beleg auf.

## So funktioniert es

1. **Richten Sie Ihren Betrieb einmal ein.** Geben Sie unter **INE Setup** (`/ine-setup`) Ihre IRIA-Auftragsnummer (NOrden) und das Passwort ein, klicken Sie auf **Test IRIA connection** und füllen Sie Adresse, Kapazität, Typ und Kategorie für den XML-Kopf aus.
2. **Erstellen Sie den Bericht.** Wählen Sie unter **Guest Origins** (`/reports/guest-origins`) die Daten aus der Anforderung des INE und klicken Sie auf **Generate report**. Tabs teilen das Ergebnis in Tageszusammenfassung, Herkunft der Gäste, Zimmer, ADR nach Kunde und Datenqualität.
3. **Korrigieren Sie Gäste ohne Herkunft.** Reservierungen ohne Nationalität oder Provinz werden markiert. Korrigieren Sie sie in Little Hotelier und aktualisieren Sie nur diese Zeilen.
4. **Validieren, ansehen und senden.** Klicken Sie auf **Validate for the INE**, dann auf **Preview XML**, dann auf **Send to the INE**. Der Beleg des INE wird mit dem Bericht gespeichert.
5. **Bewahren Sie den Verlauf auf.** **Saved Reports** (`/reports/list`) listet jeden Monat mit Status und Beleg auf.

Ist das Postfach, das die E-Mails des INE empfängt, mit dem Gästepostfach verbunden, zeigt die Anforderung des INE einen Button, der den Bericht genau für die angeforderten Daten erstellt.

Was die Erhebung abfragt, die Bußgelder und die IRIA-Ablehnungen, die Sie vermeiden sollten, finden Sie unter [So füllen Sie die INE-Beherbergungsstatistik für Hotels aus](/blog/ine-hotel-occupancy-survey).

## Was Sie brauchen

- Eine Anforderung des INE mit Ihrer Auftragsnummer und Ihrem Passwort. Die Erhebung gilt erst, wenn das INE Ihren Betrieb auswählt.
- Little Hotelier, verbunden unter **Credentials**.
- Ausgefülltes Land und ausgefüllte Provinz der Gäste. Das INE zählt Gäste nach ihrem Wohnort, nicht nach der Nationalität. Das kostenlose Skript [Easy Save Province and Country](/tools/ui/easy-save-province-country) und die [automatischen Prüfungen](/tools/bot/automated-checks) helfen, sie vollständig zu halten.

## Grenzen und Gutes zu wissen

- **Status: Stabil.**
- Es erstellt den Hotelfragebogen für Betriebe vom Typ Hotel: Hotels, Hostales und Pensiones. Ferienwohnungen, Campingplätze, Landhäuser und Albergues beantworten andere INE-Fragebögen.
- Ein gesendeter Bericht lässt sich nicht mehr ändern oder löschen, sein XML können Sie aber weiterhin herunterladen.
- Ihr IRIA-Passwort wird verschlüsselt gespeichert und nie im Klartext angezeigt.
- In der öffentlichen Demo ist das Senden an das INE ausgeschaltet. Geben Sie dort nie echte IRIA-Zugangsdaten ein.
- Hotelier Tools ist weder mit dem INE noch mit SiteMinder oder Little Hotelier verbunden.
