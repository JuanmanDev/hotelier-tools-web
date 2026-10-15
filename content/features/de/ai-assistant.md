---
title: "Ein KI-Assistent für die Rezeption Ihrer Little-Hotelier-Unterkunft"
---

Der KI-Assistent beantwortet Fragen zu Ihren Little-Hotelier-Buchungen, Gästen, Preisen, Rechnungen, Prüfungen und zur Warteliste in einfachen Worten und bereitet Änderungen für Sie vor. Er liest frei, aber jede Änderung erscheint als Karte, die Sie genehmigen oder ablehnen, bevor irgendetwas bei Little Hotelier ankommt.

## So funktioniert es

1. **Fragen Sie im Chat.** Öffnen Sie **AI Chat** (`/chat`) und tippen Sie eine Anfrage ein, etwa wer morgen anreist und wer noch Geld schuldet. Die Antworten kommen als Text und Karten: Zusammenfassungen von Reservierungen, eine vorgeschlagene Änderung mit Belegtabelle oder eine Tabelle mit Preisempfehlungen.
2. **Genehmigen oder ablehnen.** Jeder Schreibvorgang braucht eine Karte. Kann das System nicht erkennen, ob ein Werkzeug liest oder schreibt, behandelt es es als Schreibvorgang. Die Karte zeigt den Wert in Little Hotelier neben dem neuen und woher er stammt.
3. **Genehmigen führt genau diese Änderung aus.** Der gespeicherte Aufruf läuft auf dem Server, und die KI bekommt keine zweite Chance, ihn umzuschreiben. Jede Genehmigung gilt nur einmal und läuft nach 24 Stunden ab. Erstattungen liegen immer hinter einer eigenen Karte.
4. **Ihr Team kann auch fragen.** Registrieren Sie auf **Staff assistant** (`/staff`) einen Mitarbeiter mit WhatsApp-Nummer oder E-Mail-Adresse und einer Rolle: **Read only** oder **Can request changes**. Er schreibt an Ihre verbundene Nummer oder Ihr Postfach, und jede gewünschte Änderung wartet auf die Genehmigung des Inhabers.

Echte Anfragen und was nach jeder passiert, finden Sie unter [KI-Assistent für die Rezeption eines kleinen Hotels](/blog/ai-assistant-hotel-front-desk).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**.
- Ihre Unterkunftskarte unter `/settings/property`, aus Little Hotelier gelesen.
- Für den Assistenten fürs Team eine verbundene WhatsApp-Nummer oder ein verbundenes Postfach.
- KI-Guthaben: Jede Antwort verbraucht es, und Ihr Kontostand steht unter **AI credits**.

## Grenzen und Gutes zu wissen

- **Status:** Chat und Genehmigungen sind in der Beta, der Assistent fürs Team ist in der Alpha, und Teamkonten mit den Rollen Inhaber, Manager und Mitarbeiter kommen demnächst.
- **Die Sprachsteuerung ist vorerst spanisch.** Das Mikrofon nutzt die Spracherkennung Ihres Browsers, auf Spanisch (es-ES) eingestellt. Tippen können Sie in jeder Sprache.
- **Die Identität des Mitarbeiters ist der Absender.** Eine registrierte Telefonnummer oder eine E-Mail, die die DKIM/DMARC-Prüfung besteht. Nachrichten von Mitarbeitern, die älter als 30 Minuten sind, werden nicht beantwortet.
- **Außerhalb des Dashboards gibt es keine Karte.** Ruft Claude oder ChatGPT über den [MCP-Server](/tools/bot/api-mcp) ein Schreibwerkzeug auf, läuft es sofort, und Erstattungen sind dort gesperrt.
