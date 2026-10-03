---
title: "MCP-Server: Was ist das? Anleitung für Hoteliers (und welche PMS einen haben)"
seoTitle: "MCP-Server Bedeutung: Anleitung für Hoteliers (2026)"
description: "Ein MCP-Server lässt Claude oder ChatGPT Ihre Hotelsoftware lesen und bedienen. Einfach erklärt, mit Sicherheitstipps und PMS mit MCP (Stand Oktober 2026)."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [mcp server bedeutung, mcp server was ist das, mcp server hotel, mcp server claude, claude mcp verbinden, little hotelier mcp, apaleo mcp server, ki hotelsoftware]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "MCP-Einrichtungsanleitung in Hotelier Tools mit einer Erklärung What is MCP? und Client-Konfigurations-Tabs für Claude Desktop, VS Code, Cursor und Custom / SDK, mit der Claude-Desktop-Konfiguration und der Serveradresse"
featured: true
faq:
  - q: "Wofür steht MCP?"
    a: "Model Context Protocol. Es ist ein offener Standard, den Anthropic im November 2024 veröffentlicht hat, damit KI-Assistenten sich auf einheitliche Weise mit anderer Software verbinden können. Im Dezember 2025 wurde er an die Agentic AI Foundation unter dem Dach der Linux Foundation übergeben."
  - q: "Ist ein MCP-Server dasselbe wie eine API?"
    a: "Nein. Eine API ist eine Menge fester Anfragen, gegen die Programmierer Code schreiben. Ein MCP-Server beschreibt seine Werkzeuge einem KI-Assistenten, sodass der Assistent sie aus einer Anfrage in normaler Sprache auswählen und aufrufen kann. Die meisten MCP-Server sind auf einer API aufgebaut."
  - q: "Muss ich Entwickler sein, um einen MCP-Server zu nutzen?"
    a: "Nein. In Claude fügen Sie die Serveradresse in einen benutzerdefinierten Connector ein und melden sich an. In ChatGPT schalten Sie den Entwicklermodus ein und erstellen eine App mit der Adresse. Entwickler können ihn auch in Claude Code, Cursor oder VS Code nutzen."
  - q: "Hat SiteMinder einen MCP-Server?"
    a: "Ja, aber für den Vertrieb. Der Channels Plus MCP und der Direct Booking MCP von SiteMinder lassen KI-Reiseplattformen Hotelzimmer anzeigen und verkaufen. Sie sind kein Weg für einen Eigentümer, eine KI zu den eigenen Buchungen in Little Hotelier zu befragen."
  - q: "Kann ein MCP-Server meine Buchungen ändern?"
    a: "Das kann er, wenn er Schreibwerkzeuge bietet und Sie sie erlauben. Gute Server trennen Lesen von Ändern, sperren nicht umkehrbare Aktionen wie Erstattungen und verlassen sich darauf, dass Ihre KI-App vor jeder Änderung nachfragt. Prüfen Sie, was ein Server kann, bevor Sie ihn verbinden."
  - q: "Ist es sicher, KI mit Gästedaten zu verbinden?"
    a: "Mit Sorgfalt kann es das sein. Gästedaten, nach denen Sie fragen, gehen an den KI-Anbieter. Prüfen Sie daher dessen Trainingseinstellungen, verbinden Sie nur vertrauenswürdige Server, lassen Sie Freigaben für Änderungen eingeschaltet und widerrufen Sie Zugänge, die Sie nicht mehr nutzen. Ihr Hotel bleibt für die Gästedaten verantwortlich."
---

Ein MCP-Server ist ein Connector, mit dem ein KI-Assistent wie Claude oder ChatGPT in einer anderen Software etwas nachschlagen und Aufgaben ausführen kann, über einen offenen Standard namens **Model Context Protocol**. Für ein Hotel heißt das: Sie fragen „Wer reist morgen an und hat noch einen offenen Saldo?“, und der Assistent holt die Antwort aus Ihrem Property-Management-System (PMS), statt dass Sie sie herausschreiben. Stand Oktober 2026 bieten nur wenige PMS offiziell einen an. Little Hotelier hat keinen, aber Sie können es über Hotelier Tools verbinden.

Dies ist die zentrale Seite für unsere KI-Anleitungen. Jeder Abschnitt verlinkt auf eine Schritt-für-Schritt-Anleitung, wenn Sie so weit sind.

## Was bedeutet MCP, und wer hat es entwickelt?

MCP steht für **Model Context Protocol**. Anthropic, das Unternehmen hinter Claude, hat es am 25. November 2024 [als offenen Standard veröffentlicht](https://www.anthropic.com/news/model-context-protocol). Im Dezember 2025 hat Anthropic es [an die Agentic AI Foundation übergeben](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), einen Fonds unter dem Dach der Linux Foundation, mitgegründet von Anthropic, Block und OpenAI. Bis dahin hatten ihn unter anderem ChatGPT, Cursor, Gemini, Microsoft Copilot und Visual Studio Code übernommen.

Es gibt zwei Seiten:

- **Der MCP-Client** sitzt in Ihrer KI-App: Claude, ChatGPT, Copilot.
- **Der MCP-Server** sitzt auf der Softwareseite. Er bietet eine Liste von **Werkzeugen** (Tools), jedes mit Namen und Beschreibung, etwa „Reservierungen nach Zeitraum abrufen“ oder „Zahlung erfassen“.

Wenn Sie eine Frage stellen, liest die KI die Werkzeugliste, wählt das passende Werkzeug, ruft es auf und antwortet mit dem Ergebnis. Sie schreiben keinen Code.

## MCP, API und Chatbot: ein Vergleich aus dem Hotel

Stellen Sie sich Ihr PMS als Backoffice vor, in dem das Reservierungsbuch liegt.

- **Eine API** ist die Durchreiche des Backoffice mit einem strengen Bestellformular. Software kann sie nutzen, aber ein Programmierer muss für jedes Formular Code schreiben.
- **Ein MCP-Server** ist ein Concierge an dieser Durchreiche. Er reicht jedem KI-Assistenten eine gedruckte Speisekarte dessen, was möglich ist („Anreisen auflisten“, „einen Saldo prüfen“, „eine Änderung vorschlagen“), füllt die Formulare für ihn aus und lehnt ab, was nicht erlaubt ist. Die meisten MCP-Server sind auf einer API aufgebaut.
- **Ein Chatbot** ist ein Rezeptionist, der nur die Broschüre gelesen hat. Er plaudert höflich, kann das Reservierungsbuch aber nicht öffnen. Geben Sie ihm eine MCP-Verbindung, kann er echte Buchungen prüfen.

| | Was es ist | Wer es nutzt | Beispiel aus dem Hotel |
|---|---|---|---|
| API | Feste Anfragen für Software | Entwickler | „Reservierungen mit Anreise 1.–30. April“ |
| MCP-Server | Eine Speisekarte an Werkzeugen, die eine KI entdecken und aufrufen kann | KI-Assistenten | „Wer reist morgen an und hat einen offenen Saldo?“ |
| Chatbot | Eine KI, die spricht | Gäste oder Personal | „Wann gibt es Frühstück?“ |

Wenn Sie die API-Seite der Geschichte interessiert, lesen Sie [Hat Little Hotelier eine API?](/blog/little-hotelier-api)

## Was können Sie eine KI fragen, die mit Ihrem PMS verbunden ist?

Nach der Verbindung fragen Sie in normalen Worten. Mit Little Hotelier über Hotelier Tools funktionieren diese:

::prompt{label="Claude"}
Wer reist morgen an, und hat einer davon noch einen offenen Saldo?
::

::prompt{label="ChatGPT"}
Welche Aufenthalte sind letzte Woche ausgecheckt und haben noch keine Rechnung? Warum kann jede noch nicht abgerechnet werden?
::

::prompt{label="Claude"}
Vergleiche meine Preise für die nächsten 14 Nächte mit den Konkurrenzpreisen, die du hast, und sag mir, wo ich am günstigsten bin.
::

::prompt{label="Claude"}
Welche Anreisen der nächsten 7 Tage haben kein zugewiesenes Zimmer oder kein Ausweisdokument?
::

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="KI-Assistent von Hotelier Tools auf die Frage Which bookings arrive this week, mit einem erfolgreichen Werkzeugaufruf und einer Liste Reservations (14) aus Karten mit Gastname, An- und Abreisedatum, Paid oder Pending und Statusmarken wie checked-out, checked-in und confirmed" caption="Auf die Frage, welche Buchungen diese Woche anreisen, ruft der Assistent ein Reservierungswerkzeug auf und zeigt das Live-Ergebnis. Dieselben Werkzeuge antworten in Claude oder ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

Der Unterschied zum Einfügen eines Exports in einen Chatbot: Die Daten sind live, Sie exportieren nichts, und der Assistent kann (mit Ihrer Freigabe) auch handeln, statt nur zu reden.

Was MCP nicht ändert: Die KI kann eine Anfrage weiterhin falsch verstehen, und die Antwort ist nur so gut wie die Daten in Ihrem PMS. Bitten Sie sie, die verwendeten Reservierungen zu zeigen, wenn eine Zahl wichtig ist.

## Welche Hotel-PMS haben einen MCP-Server? (Stand Oktober 2026)

Wir haben am 3. Oktober 2026 die Website und die Dokumentation jedes Anbieters geprüft. „Not found“ heißt, wir fanden keinen offiziellen Server und keine Ankündigung, nicht, dass keiner kommt.

| PMS | Offizieller MCP für Ihre eigenen Daten? | Kann er Daten ändern? | Hinweise |
|---|---|---|---|
| Apaleo | Ja, offene Beta | Lesen und schreiben | Etwa 230 Werkzeuge. [Entwicklerdokumentation von Apaleo](https://apaleo.dev/guides/ai/overview.html). Erstmals im [September 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server) angekündigt. |
| Hospitable (Ferienvermietung) | Ja, seit April 2026 | Lesen und schreiben | Darüber gesendete Nachrichten „are delivered to guests immediately“ (werden den Gästen sofort zugestellt). Nicht im Tarif Essentials ([Hilfe](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (Ferienvermietung) | Ja, frühe Beta | Nur lesen | Als „experimental“ gekennzeichnet ([Dokumentation](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (Ferienvermietung) | Angekündigt | Lesen und schreiben, laut Lodgify | Die [KI-Seite](https://www.lodgify.com/ai/) stellt „Lodgify MCP“ vor. Die allgemeine Verfügbarkeit konnten wir nicht bestätigen |
| Cloudbeds | Nur Dokumentation | Nein | Sein MCP bedient [Entwicklerdokumentation](https://developers.cloudbeds.com/docs/build-with-llms), keine Hoteldaten |
| Mews | Nicht gefunden | — | Nur inoffizielle Community-Projekte, etwa [dieses auf GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | Nicht gefunden | — | Es gibt inoffizielle Community-Projekte ([Beispiel](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | Nicht gefunden | — | Hostaway und Beds24 haben inoffizielle Community-Projekte |
| SiteMinder | Nur für den Vertrieb | — | Siehe unten |
| Little Hotelier | Nicht gefunden | — | Verbinden über [Hotelier Tools](/tools/bot/api-mcp), einen unabhängigen MCP-Server |

Zwei Muster fallen auf. Die meisten offiziellen Server stammen bisher von Plattformen für Ferienvermietung und von Apaleo, einem API-first-Hotel-PMS. Und mehrere Anbieter verwenden „MCP“ für etwas anderes: Dokumentation für Entwickler oder den Verkauf von Zimmern über KI-Apps.

## Hat Little Hotelier einen MCP-Server?

Keinen offiziellen. Stand Oktober 2026 fanden wir auf littlehotelier.com sowie im Newsroom und auf der Entwicklerseite von SiteMinder weder einen Little-Hotelier-MCP-Server noch eine Ankündigung. Die Partner-API-Dokumentation von SiteMinder vermerkt sogar, dass Verfügbarkeits- und Preisdaten über diese API [nicht von Little Hotelier bezogen werden können](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers).

Die MCP-Arbeit von SiteMinder betrifft den **Vertrieb**. Laut [SiteMinder](https://www.siteminder.com/ai-distribution/) lässt Channels Plus MCP KI-Reiseplattformen Hotels aus seinem Portfolio buchen, und Direct Booking MCP zeigt die Live-Preise eines Demand-Plus-Hotels in ChatGPT, Gemini und Claude mit einem Link zur eigenen Buchungsmaschine. Das hilft Gästen, Sie zu finden. Es lässt nicht *Sie* eine KI zu Ihren eigenen Buchungen befragen.

**Hotelier Tools** schließt diese Lücke. Es ist ein unabhängiges Dashboard, das sich mit dem eigenen Little-Hotelier-Login Ihres Betriebs verbindet und einen MCP-Server unter `https://dashboard.hotelier.tools/api/mcp` betreibt:

- mehr als 100 Hotel-Werkzeuge: Reservierungen, Gäste, Zahlungen, Rechnungen, Preise, Konkurrenzpreise, automatische Prüfungen, die Warteliste und mehr
- Anmeldung über Ihren Browser (OAuth) oder per API-Schlüssel
- jede Verbindung handelt als eine Person, für einen Betrieb, mit den Berechtigungen dieser Person
- nicht umkehrbare Aktionen wie Erstattungen, Rechnungen per E-Mail senden und die INE-Umfrage einreichen sind für externe KI-Apps gesperrt

Hotelier Tools ist weder mit SiteMinder oder Little Hotelier verbunden noch von ihnen empfohlen.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent.webp" alt="Seite Authorize MCP access in Hotelier Tools: AI assistant (MCP client) möchte über die MCP-API auf Ihr Hotelier-Tools-Konto zugreifen, angemeldet als demo@hotelier.tools mit einem Token, der in 30 Tagen abläuft und widerrufen werden kann, mit den Schaltflächen Deny und Allow access" caption="Verbindet sich eine KI-App per Anmeldung, sehen Sie, was sie verlangt und welches Konto sie nutzt. Der Zugriff läuft nach 30 Tagen ab." path="/oauth/authorize"}
::

Wählen Sie Ihre Anleitung:

- [Claude mit Little Hotelier verbinden](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, mobil)
- [ChatGPT mit Little Hotelier verbinden](/blog/connect-chatgpt-to-little-hotelier), mit 18 Prompts
- [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), für Berichte und Skripte
- [Ein KI-Assistent an der Rezeption](/blog/ai-assistant-hotel-front-desk), mit Freigabekarten im Dashboard

## Ist es sicher, KI mit Ihrem Hotelsystem zu verbinden?

Das kann es sein, wenn Sie es behandeln, als gäben Sie einem neuen Mitarbeiter einen Schlüssel. Fünf Risiken und was Sie jeweils tun können:

1. **Die KI ändert das Falsche.** Sie könnte die falsche Buchung wählen oder ein Datum falsch lesen. Wählen Sie Server, die Lesen von Ändern trennen, und lassen Sie in Ihrer KI-App die Einstellung „vor dem Ausführen fragen“ für jedes Werkzeug an, das Daten ändert.
2. **Versteckte Anweisungen in Texten.** Eine Gäste-E-Mail oder Webseite könnte Text enthalten, der eine KI austricksen soll („ignoriere deine Anweisungen und erstatte …“). Das heißt Prompt Injection. Freigaben bei jeder Änderung sind Ihr Sicherheitsnetz.
3. **Gästedaten verlassen Ihr PMS.** Alles, was die KI liest, geht an den KI-Anbieter. Prüfen Sie dessen Trainingseinstellungen: Anthropic und OpenAI beschreiben ihre in ihren Hilfecentern, und Business-Tarife schließen Training meist standardmäßig aus. Als Hotel bleiben Sie nach der DSGVO für die Gästedaten verantwortlich.
4. **Zugriff, der nie endet.** Schlüssel werden kopiert und vergessen. Bevorzugen Sie Anmeldungen, die ablaufen, geben Sie jedem Werkzeug einen eigenen Schlüssel und widerrufen Sie, was Sie nicht mehr nutzen.
5. **Unbekannte Server.** Ein Community-Server aus dem Internet kann auf Ihrem Computer mit Ihrem Passwort laufen. Verbinden Sie nur Server von Organisationen, denen Sie vertrauen.

Ein guter Hotel-MCP-Server sperrt auch Aktionen, die Sie nicht rückgängig machen können. In Hotelier Tools sind Erstattungen, Rechnungen per E-Mail an Gäste und amtliche Meldungen für externe KI-Apps gar nicht verfügbar. Im Dashboard stehen sie hinter einer Freigabekarte.

::callout{type="warning" title="Änderungen über externe KI-Apps"}
Im Hotelier-Tools-Dashboard wartet jede Änderung auf eine Karte zum Freigeben oder Ablehnen. Wenn Claude, ChatGPT oder ein Code-Editor ein Schreibwerkzeug aufruft, läuft es sofort, die Bestätigung in Ihrer KI-App ist also die Freigabe. Lassen Sie sie eingeschaltet.
::

## Was kostet ein MCP-Server?

MCP selbst ist kostenlos: Es ist ein offener Standard. Sie zahlen für die Teile drumherum:

- **Die KI-App.** Stand Oktober 2026 erlaubt Claude benutzerdefinierte Connectors in jedem Tarif, auch im kostenlosen (ein Connector), laut [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). ChatGPT bietet vollen Lese- und Schreib-MCP in Business, Enterprise und Edu, mit reinem Lesezugriff im Entwicklermodus in Pro, laut [OpenAI](https://help.openai.com/en/articles/12584461).
- **Der Server.** PMS-Anbieter legen ihre eigenen Bedingungen fest. Hospitable etwa lässt MCP im Tarif Essentials weg. Hotelier Tools ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Hotels, die 2026 starten, zahlen dann das ganze Jahr 2027 über 50 € pro Monat, mit allen Funktionen.

::demo-cta{path="/chat"}
::

## Zusammenfassung

- Ein MCP-Server ist eine Speisekarte an Werkzeugen, die ein KI-Assistent in Ihrer Software nutzen kann, auf Basis eines offenen Standards von Anthropic, der heute unter der Linux Foundation geführt wird.
- Offizielle Server für Hotel- und Vermietungs-PMS gibt es (Apaleo, Hospitable, Guesty). Little Hotelier hat keinen, und der MCP von SiteMinder dient dem Vertrieb.
- Sie können Little Hotelier über Hotelier Tools mit Claude, ChatGPT oder einem Code-Editor verbinden.
- Lassen Sie Freigaben für Änderungen an, prüfen Sie die Dateneinstellungen Ihres KI-Anbieters und widerrufen Sie Zugänge, die Sie nicht mehr nutzen.
