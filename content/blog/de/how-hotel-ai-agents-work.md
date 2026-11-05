---
title: "Wie KI-Agenten im Hotel arbeiten und warum sie nicht allein handeln (Gästeantworten, Mitarbeiter-Chat, MCP)"
seoTitle: "Wie KI-Agenten im Hotel arbeiten und sicher bleiben"
description: "Die KI-Agenten im Hotel-Dashboard: was jeder lesen und tun darf, wie Nachrichten von Booking.com und WhatsApp geprüft werden und wer Änderungen freigibt."
date: 2026-11-05
category: ai
tags: [ki, ki-agenten, sicherheit, gästenachrichten, freigaben, mcp, prompt injection]
keywords: [ki agent hotel, wie funktionieren ki agenten im hotel, ki gästenachrichten hotel sicher, prompt injection hotel chatbot, ki assistent hotel freigabe, kann ki eine hotelbuchung ändern, gast identität whatsapp prüfen hotel, booking.com nachrichten ki beantworten sicher, mcp server hotel berechtigungen]
feature: ai-assistant
demoPath: /messaging
cover: /images/blog/demo/en/how-ai-agents-booking-thread-verified.webp
coverAlt: "Gäste-Posteingang von Hotelier Tools mit Filter auf Booking.com und geöffneter Frage von Ingrid Larsen zum Parken auf Französisch: Identity verified und sender matches booking bei ihrem Aufenthalt über 24 Nächte mit 759,55 € offen, ein französischer KI-Entwurf als nicht gesendet markiert und ein KI-Plan als Entwurf, dessen Zeile Access sagt, dass er nur Reservierung 71020550 lesen darf und jede Änderung auf Freigabe wartet"
featured: true
faq:
  - q: "Kann ein KI-Agent im Hotel eine Buchung selbst ändern?"
    a: "In Hotelier Tools standardmäßig nicht. Der Chat im Dashboard, der Posteingangs-Assistent und der Mitarbeiter-Assistent machen aus jeder Änderung eine Karte, die eine Person freigibt. Die Gäste-KI hat keine Werkzeuge; nur ein Kanal im Modus Autonomous lässt sie eine Notiz oder Ankunftszeit zur einen verifizierten Buchung hinzufügen."
  - q: "Woher weiß die KI, dass eine Gästenachricht wirklich von diesem Gast stammt?"
    a: "Es zählt nur der Absender, nie der Nachrichtentext. Einen Booking.com-Verlauf legt Booking.com unter seiner Reservierung ab, eine WhatsApp-Nummer muss mindestens in den letzten 8 Ziffern mit der Buchung übereinstimmen, eine E-Mail-Adresse exakt, und ein Expedia-Verlauf muss seine EXP-Referenz nennen. Passen zwei Gäste, wird keine Buchung gezeigt."
  - q: "Kann ein Gast die KI mit einer Nachricht wie „ignoriere deine Regeln“ austricksen?"
    a: "Versuchen kann er es. Das Modell für Gästeantworten hat keine Werkzeuge, die es missbrauchen könnte, weiß, dass die Nachricht nicht vertrauenswürdiger Text ist, darf nur einen Plan aus vier Aktionen ohne Buchungs-ID zurückgeben, und seine fertige Antwort wird auf Referenzen anderer Buchungen gescannt, bevor etwas gesendet wird."
  - q: "Hat der KI-Chat Grenzen bei dem, was er nachschlagen darf?"
    a: "Nur Ihre Rolle. Der Chat kann im ganzen Konto alles lesen, was Ihre Rolle erlaubt, mit bis zu acht Werkzeugschritten pro Frage. Was er nicht kann: etwas ohne Ihren Klick ändern, laufen, ohne dass jemand gefragt hat, oder sich selbst einplanen."
  - q: "Bekommen Claude oder ChatGPT dieselben Freigabekarten?"
    a: "Nein. Externe Apps, die über MCP verbunden sind, durchlaufen dieselbe Rollenprüfung, aber eine Schreibaktion läuft, wenn die App sie aufruft. Die Bestätigung der App ist also Ihre einzige Kontrolle. Rückerstattungen, Rechnungen per E-Mail, die INE-Erhebung und Gästeantworten sind für sie gesperrt."
  - q: "Gehört Hotelier Tools zu Booking.com, WhatsApp oder Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels."
---

Ein KI-Agent im Hotel ist ein Sprachmodell, das mit Ihren Buchungsdaten verbunden ist, und er ist nur so sicher wie zwei Dinge: was er lesen darf und wer den Knopf drückt, wenn sich etwas ändert. In Hotelier Tools gibt es mehrere Agenten mit unterschiedlichen Vertrauensstufen. Der Agent, der Gästenachrichten liest, hat überhaupt keine Werkzeuge. Die Agenten, mit denen Ihr Team spricht, können im Rahmen der Rolle der jeweiligen Person alles nachschlagen, aber **jede Änderung wartet auf den Klick einer Person**, und keiner läuft nach eigenem Zeitplan.

Dieser Leitfaden erklärt, wie jeder Agent arbeitet, wie eine Nachricht von Booking.com, WhatsApp, Expedia oder per E-Mail genau einer Reservierung zugeordnet wird und was verhindert, dass der Text eines Gastes die KI steuert. Was der Assistent im Alltag kann, lesen Sie in [der KI-Assistent für die Rezeption eines kleinen Hotels](/blog/ai-assistant-hotel-front-desk). Die Angaben zu Drittanbietern wurden im November 2026 geprüft.

## Was sollte ein KI-Agent im Hotel überhaupt dürfen?

Zwei öffentliche Referenzen sind ein guter Maßstab für jeden Anbieter. OWASP stuft Prompt Injection als größtes Risiko für KI-Anwendungen ein und rät: „restrict the model's access privileges to the minimum necessary“ (die Zugriffsrechte des Modells auf das Nötigste beschränken), wobei eine Person privilegierte Aktionen freigibt ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)). Das Model Context Protocol, über das Claude und ChatGPT externe Werkzeuge aufrufen, sagt: „SHOULD always be a human in the loop with the ability to deny tool invocations“ (es sollte immer ein Mensch beteiligt sein, der Werkzeugaufrufe ablehnen kann) ([MCP tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)).

Stellen Sie also jeder Hotel-KI vier Fragen: Wer hat den Text geschrieben, den sie liest? Was darf sie anfassen? Wer gibt eine Änderung frei? Läuft sie jemals, ohne dass jemand gefragt hat?

## Die Agenten in Hotelier Tools und ihre Vertrauensstufen

Eine Tabelle legt fest, wo jedes Werkzeug laufen darf, und ein Werkzeug, das niemand eingestuft hat, gilt als Schreibaktion. Eine zweite Prüfung fragt in dem Moment, in dem es läuft, ob **die Rolle dieser Person** es nutzen darf.

| Agent | Mit wem er spricht | Was er lesen darf | Was er ändern darf | Wer freigibt |
|---|---|---|---|---|
| **Gäste-KI** (Inbox, Alpha) | Gäste auf WhatsApp, per E-Mail, auf Booking.com und Expedia | Eine verifizierte Buchung, Ihre FAQ, Hausnotizen, Objektdaten | Nichts direkt. Sie gibt einen Plan aus 4 Aktionen zurück | Sie, im Posteingang (oder ein eng begrenzter Kanalmodus) |
| **AI Chat** (`/chat`, Beta) | Sie und Ihr Team im Dashboard | Alles, was Ihre Rolle erlaubt | Alles, was Ihre Rolle erlaubt, als Karte | Die Person, die gefragt hat, per Klick auf die Karte |
| **Posteingangs-Assistent** (Panel neben einem Verlauf) | Sie, zur geöffneten Unterhaltung | Die Buchung, Preise aus Ihrer Buchungsmaschine, Objektdaten | Vorschläge als Karten; sendet nie an den Gast | Jede Person im Team, deren Rolle es abdeckt |
| **Mitarbeiter-Assistent** (`/staff`) | Mitarbeitende per WhatsApp oder E-Mail | Buchungen, Verfügbarkeit, Preise, Rechnungen, Prüfungen | Nur bei **Can request changes**, in der Warteschlange | Der Inhaber, unter `/staff` |
| **Externe KI-Apps** (Claude, ChatGPT, über MCP) | Sie, in dieser App | Was Ihre Rolle erlaubt | Schreibaktionen laufen, wenn die App sie aufruft; nichts Unumkehrbares | Sie, in der Bestätigungsabfrage der App |
| **Browser-Agenten** (WebMCP) | Sie, in Ihrem Browser | Nur Lesen | Nichts; Vorschläge öffnen das Formular der App, schon ausgefüllt | Sie drücken den Knopf auf der Seite |

**Geplante Aufgaben sind keine KI-Agenten.** Die Rechnung beim Check-out, die automatischen Prüfungen und der Preis-Autopilot sind gewöhnlicher Code mit Zeitplan. Zwei Hintergrundaufgaben nutzen ein Modell nur, um Text in Daten zu verwandeln (die Felder einer Lieferantenrechnung, lokale Veranstaltungen für die Preisgestaltung), ohne Werkzeuge und ohne Möglichkeit, jemandem zu schreiben oder eine Buchung anzufassen.

## Wie aus einer Gästenachricht eine Antwort wird

| Schritt | Was passiert | Modell? |
|---|---|---|
| 1. Eingang | Ein Webhook (WhatsApp) oder eine regelmäßige Abfrage (E-Mail, Booking.com, Expedia) speichert die Nachricht | Nein |
| 2. Sortierung | Nur E-Mail: Newsletter, Lieferanten und wahrscheinlicher Betrug bleiben hier hängen | Nein |
| 3. Identität | Der Absender wird einer Reservierung zugeordnet oder keiner, und die Entscheidung wird protokolliert | Nein |
| 4. Warten | 5 Minuten bei WhatsApp, eine Stunde bei E-Mail. Schon beantwortet? Dann wird nichts analysiert oder berechnet | Nein |
| 5. Plan | Nach einer Guthabenprüfung liest das Modell den begrenzten Kontext und gibt eine Antwort und Aktionen als Daten zurück | **Ja, einmal** |
| 6. Prüfungen | Die Aktionen werden gegen die geschlossene Liste geprüft; der Antwortfilter scannt den Text | Nein |
| 7. Entscheidung | Eine Person gibt frei, oder der Kanalmodus erlaubt es nach einer Verzögerung | Nein |
| 8. Ausführung | Der gespeicherte Plan läuft; der Filter prüft den Text vor dem Senden noch einmal | Nein |

Das Modell kommt genau einmal vor, und was es liefert, ist nur ein Vorschlag. Alles drumherum ist gewöhnlicher Code.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-thread-verified.webp" alt="Gäste-Posteingang mit Filter auf Booking.com und geöffneter Unterhaltung von Ingrid Larsen: die Markierung Identity verified, ihr Aufenthalt vom 24. Oktober bis 17. November als Checked-in markiert, sender matches booking und 759,55 € offen, ein französischer KI-Entwurf (nicht gesendet) zum Parken und der KI-Plan als Entwurf (parking, 91 %), dessen Zeile Access lautet: Identity verified, darf Reservierung 71020550 lesen, jede Änderung wartet auf Ihre Freigabe, dazu die bearbeitbare Antwort, die Aktion send_message und die Schaltfläche Send" caption="Der Plan nennt, was die KI sehen durfte: eine verifizierte Reservierung. Im Modus Draft geht nichts hinaus, bevor Sie freigeben." path="/messaging"}
::

## Woher Gästenachrichten kommen und warum die Quelle zählt

Eine Nachricht trägt nur das, was der Kanal selbst garantiert. Hotelier Tools vertraut dem **Absender**, nie dem, was die Nachricht über sich selbst sagt.

| Kanal | Wie sie in den Posteingang kommt | Was sie mit einer Buchung verbindet |
|---|---|---|
| **Booking.com** | Gelesen über Ihre eigene Extranet-Sitzung (Ihr Login und sein zweiter Faktor) | Booking.com legt den Verlauf unter seiner Reservierung ab, daher gilt er als verifiziert |
| **Expedia** (Beta) | Gelesen über Ihre eigene Partner-Central-Sitzung; nur die Liste der Unterhaltungen und die letzte Nachricht | Nur die `EXP-`-Referenz, die der Verlauf nennt. Ein Gastname wird nie verwendet |
| **WhatsApp** | WAHA, eine WhatsApp-Web-Sitzung auf der eigenen Nummer des Hotels, die an einen Webhook mit geheimem Token pro Kanal sendet | Die Nummer stimmt mindestens in den letzten 8 Ziffern mit der Telefonnummer der Buchung überein |
| **E-Mail** | Ihr Postfach, über die Anmeldung mit Google oder Microsoft (OAuth) oder IMAP | Die exakte Adresse. Keine Teiltreffer, keine ignorierten Punkte |

E-Mail bekommt eine zusätzliche Ebene. Die SPF-, DKIM- und DMARC-Ergebnisse jeder Nachricht (die Prüfungen, mit denen Mailanbieter gefälschte Absender erkennen, siehe [Gmails Richtlinien für Absender](https://support.google.com/a/answer/81126)) fließen zusammen mit anderen Signalen in einen **Betrugswert** ein, etwa Links zu Filesharing-Diensten oder eine Erstattung für einen Aufenthalt, den niemand finden kann. Ab 75 % geht die Mail an eine Person, und die KI entwirft nichts. Mehr dazu in [Betrugsnachrichten erkennen](/blog/hotel-scam-messages).

Der Posteingang zeigt bei jeder Unterhaltung das Ergebnis der Identitätsprüfung:

- **Identity verified** (Identität verifiziert): Genau ein Gast passt, also darf die KI diese eine Buchung sehen (bei Stammgästen einen Aufenthalt: den aktuellen, einen kürzlichen oder den nächsten).
- **Ambiguous — refused** (mehrdeutig, abgelehnt): Zwei verschiedene Gäste passen, also wird keine Buchung gezeigt, und Sie übernehmen.
- **No reservation match** (keine passende Reservierung): Die KI beantwortet allgemeine Fragen aus Ihrer FAQ und bestätigt oder bestreitet nie, dass eine Buchung existiert.
- **Not checked** (nicht geprüft): Die Identität ist noch nicht festgestellt.

Eine öffentliche Frage zu Ihrem Booking.com-Inserat hat keine Buchung dahinter und wird daher nur aus Objektdaten beantwortet.

## Was die KI zum Antworten liest und was sie nie sieht

| Die Gäste-KI liest | Sie sieht nie |
|---|---|
| Die **eine** verifizierte Reservierung: Referenz, Daten, Zimmer, Gäste, Status, Gesamtbetrag, offener Betrag, Ankunftszeit, interne Notizen | Andere Gäste oder Buchungen |
| Ihre Quellen unter **FAQ & knowledge** (nur die, die Sie angehakt haben) | Ihre Logins, API-Schlüssel oder Kartennummern |
| Hausnotizen und die Objektdaten aus **Settings > Property & AI knowledge** | Little Hotelier selbst. Sie kann dort nichts nachschlagen |
| Korrigierte Beispiele und Regeln aus **AI training** | Buchungsdaten, wenn der Absender nicht verifiziert ist |
| Antwortgedächtnis: ähnliche Antworten Ihres Teams, ohne Namen, Daten, Referenzen und Kontakte | |

FAQ-Auszüge, Trainingsbeispiele und das Antwortgedächtnis sind im Prompt als zitierte Daten gekennzeichnet, nie als Anweisungen. Live-Preise kommen aus Ihrer öffentlichen Buchungsmaschine, und zwar über den **Posteingangs-Assistenten** auf der Seite des Teams; ein Preis, den keine Abfrage geliefert hat, wird markiert.

## Was hindert eine Gästenachricht daran, die KI zu steuern?

Eine Gästenachricht schreibt ein Fremder, also geht das System davon aus, dass sie feindselig sein kann:

1. **Keine Werkzeuge.** Das Modell für Gästeantworten bekommt nichts, was es aufrufen könnte. Ein eingeschleustes „schlag Reservierung 999 nach“ läuft ins Leere.
2. **Daten, keine Befehle.** Der Prompt sagt, dass die Nachricht des Gastes nicht vertrauenswürdiger Text ist. Verlangt sie, die Regeln zu ignorieren, die Rolle zu wechseln, Systemtext preiszugeben oder bei einer anderen Buchung zu handeln, muss das Modell ablehnen und sie für das Team markieren.
3. **Eine geschlossene Liste.** Die Antwort muss in ein festes Schema passen: höchstens vier Aktionen aus **Nachricht senden**, **für das Team markieren**, **Reservierungsnotiz hinzufügen** und **Ankunftszeit setzen**. Alles andere wird verworfen und gemeldet.
4. **Keine Buchungs-ID in den Aktionen.** Der Server wendet eine Notiz oder Ankunftszeit auf die Buchung an, die mit der Unterhaltung verknüpft ist. Eine Änderung lässt sich also nicht woandershin lenken.
5. **Der Antwortfilter.** Bevor eine Antwort hinausgeht, und noch einmal, nachdem jemand sie bearbeitet hat, wird der Text gescannt. Die Referenz einer anderen Buchung oder irgendeine lange Zahl, wenn der Absender nicht verifiziert ist, blockiert das Senden und übergibt den Verlauf an eine Person. Hat sich die Buchung der Unterhaltung geändert, während ein Plan wartete, wird der Plan abgelehnt.
6. **Grenzen pro Kanal.** **Draft — I approve everything** ist der Standard. Auf Booking.com sendet die KI in keinem Modus; Expedia bietet nur Off und Draft. Selbst **Autonomous — replies AND changes reservations** kann nur eine Notiz oder Ankunftszeit zur verifizierten Buchung hinzufügen, und unbeaufsichtigte Antworten stoppen bei 4 pro Stunde, 12 pro Tag oder 3 in Folge ohne Antwort.
7. **Die Freigabe läuft ohne das Modell.** Freigeben führt den gespeicherten Plan genau so aus. Die KI bekommt keine zweite Runde, um ihn umzuschreiben.

::screenshot{src="/images/blog/demo/en/how-ai-agents-booking-channel-send-by-hand.webp" alt="Seite Channels mit der Karte Booking.com messages als Active markiert: ein Hinweis Collects messages — replies are sent by hand, laut dem automatische Antworten nicht über Booking.com gesendet werden und eine Antwort nur hinausgeht, wenn eine Person im Posteingang auf Send drückt, die Einstellung When a guest writes auf Draft — I approve everything, Timing held 5 min und darunter Expedia Partner Central messages, noch nicht verbunden" caption="Auf Booking.com kann die KI lesen und entwerfen, aber eine Antwort geht nur hinaus, wenn eine Person auf Send drückt." path="/messaging/channels"}
::

## Der KI-Chat: keine Grenzen beim Nachschlagen, keine Eigenständigkeit

Der **AI Chat** (KI-Chat, `/chat`, Beta) ist umgekehrt gebaut wie die Gäste-KI: Hier tippt eine Person, der Sie vertrauen, also bekommt er jedes Werkzeug, das **Ihre Rolle** erlaubt. Fragen Sie nach jeder Reservierung, Rechnung, jedem Preis, jeder Prüfung, jedem Bericht oder nach der Warteliste, im ganzen Konto, mit bis zu acht Werkzeugschritten pro Frage.

Was er nicht kann, ist selbst handeln:

- **Jede Änderung ist eine Karte.** Eine Schreibaktion wird abgefangen, bevor sie läuft, und mit den genauen Werten als **Approve** (Freigeben) oder **Reject** (Ablehnen) gezeigt. Unumkehrbare Aktionen (eine Rückerstattung, eine Rechnung per E-Mail senden, die INE-Erhebung einreichen, eine Gästeantwort senden) sind nur hier möglich, hinter ihrer Karte.
- **Der Klick läuft ohne das Modell.** Die Freigabe führt den gespeicherten Aufruf aus, nicht eine neue Anfrage an die KI.
- **Die Freigabe gehört nur Ihnen.** Jede Karte ist eine einmalige Erlaubnis für dieses Werkzeug, diese Werte, diesen Chat und die Person, der sie gezeigt wurde, und sie läuft nach 24 Stunden ab. Ein Doppelklick oder eine kopierte Karte wird abgelehnt.
- **Ihre Rolle reist mit jedem Aufruf.** Jeder Werkzeugaufruf trägt eine signierte Angabe, wer gefragt hat, 15 Minuten gültig. Er läuft also mit Ihren Rechten, nicht mit denen des Inhabers. Wird jemand im Team mitten in einer Antwort gesperrt, wird schon der nächste Schritt abgelehnt.
- **Er läuft nie von selbst.** Das Modell läuft nur, wenn jemand eine Nachricht sendet. Es kann nicht später aufwachen oder sich selbst einplanen. Es kann als Karte *vorschlagen*, eine geplante Aufgabe anzulegen oder zeitlich zu verschieben, und diese Aufgabe führt dann festen Code aus, nicht die KI.

::screenshot{src="/images/blog/demo/en/embed-card-change-approval.webp" alt="Karte Approve these changes? mit dem Hinweis Nothing written yet: vollständige Übereinstimmung mit dem WhatsApp-Absender, eine Belegtabelle mit den Spalten Little Hotelier, WhatsApp sender und message text, die neuen Werte für Company und Tax ID mit den Markierungen New und Claim, ein Kontrollkästchen Also invoice this reservation automatically at checkout sowie die Schaltflächen Reject und Approve and apply" caption="Eine Reservierungsänderung zeigt, woher jeder Wert stammt. Ein Wert, der nur in der Nachricht steht, ist eine Behauptung, kein Nachweis." path="/mcp-ui/reservation-change-proposal" width="690" height="494"}
::

Die Rollen kommen aus **Team & roles** (Team und Rollen, `/settings/team`). Ein Rezeptionslogin, der im Chat eine Rückerstattung verlangt, bekommt eine Ablehnung, mit oder ohne Karte.

## Der Mitarbeiter-Assistent und externe KI-Apps

**Staff assistant** (Mitarbeiter-Assistent, `/staff`). Eine Mitarbeiterin oder ein Mitarbeiter schreibt an die WhatsApp-Nummer oder das Postfach des Hotels und wird als Teammitglied beantwortet. Die Identität ist der Absender: die registrierte Nummer oder die exakte Adresse mit einer Mail, die DKIM oder DMARC besteht (SPF allein zählt nicht). Mitarbeitende mit **Read only** (nur lesen) können nur fragen. Mit **Can request changes** (darf Änderungen anfragen) wird jede Schreibaktion zu einer Anfrage, die der Inhaber mit **Approve and run** freigibt; das führt genau diesen Aufruf einmal aus.

::screenshot{src="/images/blog/demo/en/staff-assistant.webp" alt="Seite Staff assistant mit einer Änderung, die auf Freigabe wartet: eine Anfrage invoice_on_leave_add von Lucía (recepción) mit den Schaltflächen Reject und Approve and run, zwei Mitarbeitende mit den Rollen Can request changes und Read only sowie die letzten WhatsApp-Nachrichten" caption="Die Anfrage aus dem Team kommt mit dem genauen Werkzeug und den Werten an und läuft erst, wenn der Inhaber sie freigibt." path="/staff"}
::

**Claude, ChatGPT und andere MCP-Apps** melden sich per OAuth für ein Objekt Ihrer Wahl an und durchlaufen dieselbe Rollenprüfung. Außerhalb des Dashboards gibt es keine zweite Karte: Eine Schreibaktion läuft, wenn die App sie aufruft, lassen Sie also die Bestätigung in der App eingeschaltet. Unumkehrbare Aktionen und Gästeantworten sind gesperrt. Siehe [Claude mit Little Hotelier verbinden](/blog/connect-claude-to-little-hotelier).

**Browser-Agenten (WebMCP)**, ein früher Webstandard, der noch ein [Community-Entwurf](https://webmachinelearning.github.io/webmcp/) ist, bekommen nur Lesezugriff. Eine Rückerstattung oder Gästeantwort kann nur *vorgeschlagen* werden: Das Formular der App öffnet sich ausgefüllt, und Sie drücken den Knopf. Auf Seiten, die Gäste sehen, werden die Werkzeuge zurückgezogen.

## Protokolle, Kosten und ehrliche Grenzen

**Was protokolliert wird.** Jede Identitätsentscheidung mit ihrem Grund, Ablehnungen eingeschlossen. Jede Reservierungsänderung, ob ausgeführt, verweigert oder abgelehnt, mit den geprüften Belegen. Teamaktivität (Einladungen, Rollen, Mitarbeiterkontakte). Jede KI-Abrechnung unter **AI credits** (KI-Guthaben, `/messaging/credits`). Ohne Guthaben läuft keine Analyse.

**Was nicht gebaut oder noch nicht fertig ist:**

- Die Inbox ist **Alpha**, der AI Chat **Beta**, Expedia-Nachrichten sind **Beta** (nur die Liste und die letzte Nachricht; Sie antworten in Partner Central).
- WhatsApp läuft über WAHA, nicht über die offizielle API von Meta, eine Nummer könnte also gesperrt werden. Siehe [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier).
- Seit dem 28. September 2026 übermittelt Booking.com keine Telefonnummern von Gästen mehr an Channel-Manager. Eine WhatsApp-Nachricht eines Booking.com-Gastes kann daher **No reservation match** zeigen.
- Die Gäste-KI kann in keinem Modus stornieren, Daten ändern oder Zahlungen annehmen.

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::demo-cta{path="/messaging"}
::

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu Booking.com, Expedia Group, WhatsApp, Meta, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels für Little Hotelier, Booking.com und Expedia.
::

Siehe auch: [Gästenachrichten mit KI beantworten](/blog/ai-replies-guest-messages), [der KI-Assistent für die Rezeption](/blog/ai-assistant-hotel-front-desk), [was ein MCP-Server ist](/blog/what-is-mcp-server-hotels).

## Zusammenfassung

- Die Gäste-KI hat keine Werkzeuge: Sie liest eine verifizierte Buchung und Ihre eigenen Fakten und gibt einen Plan aus vier Aktionen zurück.
- Eine Nachricht wird über ihren Absender einer Buchung zugeordnet (Booking.com-Verlauf, mindestens 8 Ziffern der Telefonnummer, exakte E-Mail, `EXP-`-Referenz), nie über ihren Text. Zwei Treffer bedeuten: keine Buchung.
- Gästetext ist Daten, keine Anweisung; ein Antwortfilter blockiert Referenzen anderer Gäste, und auf Booking.com sendet die KI nie.
- Der AI Chat kann alles nachschlagen, was Ihre Rolle erlaubt, aber jede Änderung ist eine einmalige, an Sie gebundene Karte, die ohne das Modell ausgeführt wird, und er läuft nie von selbst.
- Mitarbeitende, Claude oder ChatGPT und Browser-Agenten durchlaufen dieselbe Rollenprüfung, jeweils mit eigenem Freigabeschritt.
