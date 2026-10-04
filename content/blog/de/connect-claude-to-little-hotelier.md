---
title: "Claude mit Little Hotelier verbinden (MCP, Schritt für Schritt)"
seoTitle: "Claude mit Little Hotelier verbinden: MCP-Anleitung"
description: "Claude mit Little Hotelier verbinden per Custom Connector: URL einfügen, anmelden, Zugriff erlauben. Erste Prompts, sichere Schreibrechte, Fehlerbehebung."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [claude mit little hotelier verbinden, little hotelier mcp, claude mcp verbinden, claude desktop mcp einrichten, claude custom connector, mcp server claude, ki hotelsoftware]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "MCP-Einrichtungsanleitung von Hotelier Tools mit der Erklärung What is MCP? und dem ausgewählten Reiter Claude Desktop, der die Schritte und den Konfigurationsausschnitt mit der MCP-Server-URL zeigt"
featured: true
faq:
  - q: "Welche Claude-Tarife können einen Custom Connector hinzufügen?"
    a: "Stand Oktober 2026 nennt Anthropic Custom Connectors für die Tarife Free, Pro, Max, Team und Enterprise. Free-Konten können einen Custom Connector hinzufügen. Bei Team und Enterprise fügt ein Owner ihn für die Organisation hinzu, und jedes Mitglied verbindet sich dann mit dem eigenen Login."
  - q: "Funktioniert die Verbindung zu Little Hotelier in der mobilen Claude-App?"
    a: "Ja. Haben Sie sie in claude.ai oder in Claude Desktop verbunden, ist sie laut Anthropic auch in Claude für iOS und Android verfügbar. Neue Custom Connectors direkt am Handy hinzuzufügen, ist noch in der Beta. Richten Sie die Verbindung deshalb am Computer ein."
  - q: "Wie trenne ich Claude oder tausche den Zugriff aus?"
    a: "Öffnen Sie in Claude Customize, dann Connectors, und wählen Sie Disconnect oder Remove. Öffnen Sie in Hotelier Tools Developer, API Keys und widerrufen Sie unter Active keys die Verbindung oder den verwendeten Schlüssel. Ein Widerruf auf Seiten von Hotelier Tools kappt den Zugriff sofort."
  - q: "Kann Claude meine Reservierungen oder Preise ändern?"
    a: "Ja, wenn Sie es zulassen. Schreibwerkzeuge laufen, wenn Claude sie aufruft, und Hotelier Tools fügt außerhalb des eigenen Dashboards keine zweite Freigabekarte hinzu. Lassen Sie die Freigabe pro Werkzeug in Claude daher auf Needs approval. Rückerstattungen, der E-Mail-Versand von Rechnungen, die INE-Meldung und andere nicht umkehrbare Aktionen sind für Claude gesperrt."
  - q: "Hat Little Hotelier einen eigenen MCP-Server?"
    a: "Stand Oktober 2026 keinen offiziellen. Die MCP-Arbeit von SiteMinder dreht sich darum, Zimmer über KI-Assistenten zu verkaufen, nicht darum, dass Inhaber ihre eigenen Daten abfragen. Hotelier Tools betreibt einen unabhängigen MCP-Server, der sich mit dem eigenen Little-Hotelier-Login Ihres Hauses verbindet."
  - q: "Ist das eine offizielle Integration von Anthropic oder Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu Anthropic, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es nutzt das Standardprotokoll MCP, das Claude für jeden Custom Connector unterstützt."
---

Little Hotelier hat (Stand Oktober 2026) keinen eigenen MCP-Server. Sie können Claude aber trotzdem anbinden: über Hotelier Tools, das einen MCP-Server für Ihr Haus betreibt. Öffnen Sie in Claude **Customize → Connectors → Add custom connector**, fügen Sie `https://dashboard.hotelier.tools/api/mcp` ein, melden Sie sich bei Hotelier Tools an und klicken Sie auf **Allow access**. Claude kann dann Fragen anhand Ihrer aktuellen Buchungen beantworten und, wenn Sie es zulassen, Änderungen vornehmen.

Das Thema ist neu für Sie? Lesen Sie zuerst, [was ein MCP-Server ist](/blog/what-is-mcp-server-hotels). Das dauert drei Minuten.

## Was Sie vor dem Start brauchen

::callout{type="tip" title="Checkliste"}
- **Ein Claude-Konto.** Stand Oktober 2026 [nennt Anthropic Custom Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) für die Tarife Free, Pro, Max, Team und Enterprise. Free-Konten können einen hinzufügen.
- **Ein Hotelier-Tools-Konto** mit Little Hotelier, verbunden unter **Credentials** (`/credentials`). Es ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.
- **API-Zugriff in Hotelier Tools.** Der Inhaber des Hauses hat ihn. Ohne ihn wird die Verbindung abgelehnt.
::

Hotelier Tools liest Ihre Daten mit dem eigenen Little-Hotelier-Login Ihres Hauses. Es steht in keiner Verbindung zu SiteMinder, Little Hotelier oder Anthropic und wird von ihnen weder unterstützt noch empfohlen.

## So verbinden Sie Claude mit Little Hotelier (claude.ai und Claude Desktop)

Das ist der empfohlene Weg. Sie melden sich im Browser an, es gibt also keinen Schlüssel zu kopieren. Diese Schritte folgen den [aktuellen Anweisungen von Anthropic](https://claude.com/docs/connectors/custom/add-unlisted) für Free-, Pro- und Max-Konten.

1. Öffnen Sie [claude.ai](https://claude.ai) oder die Claude-Desktop-App und gehen Sie zu **Customize → Connectors**. Auf manchen Bildschirmen heißt es noch **Settings → Connectors**.
2. Klicken Sie auf **Add custom connector** (bei manchen Konten: **+ Add**, dann **Add custom connector**).
3. Nennen Sie ihn `Hotelier Tools` und fügen Sie die MCP-Server-URL ein: `https://dashboard.hotelier.tools/api/mcp`
4. Fragt Claude, wie die Anmeldung erfolgen soll, wählen Sie **Sign in now**. Fragt es nach einem OAuth-Client, wählen Sie **Register automatically**: Der Hotelier-Tools-Server unterstützt diese automatische Registrierung. Sehen Sie nur **Advanced settings**, lassen Sie sie leer.
5. Klicken Sie auf **Add**, dann auf **Connect**. Ein Fenster von Hotelier Tools öffnet sich.
6. Melden Sie sich bei Hotelier Tools an. Wählen Sie auf **Authorize MCP access** das Objekt (nur wenn Sie mehrere haben) und klicken Sie auf **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Karte Authorize MCP access: AI assistant (MCP client) möchte über die MCP-API auf Ihr Hotelier-Tools-Konto zugreifen, mit der angemeldeten E-Mail-Adresse, einem Token, das in 30 Tagen abläuft, und den Schaltflächen Deny und Allow access" caption="Klicken Sie auf Allow access (bei mehreren Objekten wählen Sie zuerst eines). Claude sieht nie Ihr Passwort." path="/oauth/authorize" width="472" height="327"}
::

7. Starten Sie einen neuen Chat, klicken Sie auf **+**, öffnen Sie **Connectors** und prüfen Sie, ob **Hotelier Tools** eingeschaltet ist.
8. Stellen Sie eine erste Frage (Beispiele unten). Claude zeigt, welches Werkzeug es verwenden will, und fragt nach, bevor es das Werkzeug ausführt.

Die Anmeldung gilt **30 Tage**. Danach bittet Claude Sie, sich erneut zu verbinden.

### Mit einem Team- oder Enterprise-Tarif

Ein Owner fügt den Connector einmal hinzu: **Organization settings → Connectors → Add → Custom → Web**, mit derselben URL. Jede Kollegin und jeder Kollege öffnet dann **Customize → Connectors**, findet Hotelier Tools mit der Kennzeichnung **Custom** und klickt auf **Connect**. Jede Verbindung meldet sich separat bei Hotelier Tools an, und Claude handelt mit den Berechtigungen des verwendeten Logins.

### In der mobilen App

Laut [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) steht ein Connector, den Sie in claude.ai oder Claude Desktop eingerichtet haben, auch in Claude für iOS und Android zur Verfügung. Einen Connector direkt am Handy hinzuzufügen, ist noch in der Beta. Erledigen Sie die Einrichtung deshalb am Computer.

## Mit einem API-Schlüssel statt der Anmeldung

Die meisten sollten die Anmeldung oben nutzen. Ein API-Schlüssel ist nützlich, wenn der Zugriff nicht nach 30 Tagen ablaufen soll oder wenn Ihr Client die Browser-Anmeldung nicht unterstützt.

1. Öffnen Sie in Hotelier Tools **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Geben Sie unter „Generate a new key“ einen Namen wie `claude-desktop` ein und klicken Sie auf **Generate key**.
3. Kopieren Sie ihn sofort. Die Seite warnt: „Copy this key now — it will not be shown again.“ (Der Schlüssel wird nur einmal angezeigt.) Schlüssel beginnen mit `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Seite API keys direkt nach dem Erzeugen eines Schlüssels: grünes Feld Key generated mit dem Hinweis Copy this key now, it will not be shown again, der maskierte Schlüssel mit Kopierschaltfläche, der neue Schlüssel Blog integration unter Active keys neben einem weiteren Schlüssel, jeweils mit Revoke, und eine Meldung API key created" caption="Auf der Seite API Keys erstellen oder widerrufen Sie einen Schlüssel. Der vollständige Schlüssel wird nur einmal angezeigt." path="/developer/api-keys"}
::

**In claude.ai** sehen manche Organisationen im Dialog des Connectors einen Bereich **Request headers**. Anthropic kennzeichnet ihn als Beta und nur für eine begrenzte Zahl von Organisationen verfügbar. Haben Sie ihn, wählen Sie **No sign-in**, fügen Sie den Header `authorization` hinzu und tragen Sie `Bearer htk_YOUR_API_KEY` ein (mit dem Wort Bearer und einem Leerzeichen).

**In Claude Desktop** ist die Konfigurationsdatei (**Settings → Developer → Edit Config**) für Server gedacht, die auf Ihrem eigenen Computer laufen. Laut Anthropic-Dokumentation werden entfernte Server [über Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) hinzugefügt. Die Seite MCP Setup von Hotelier Tools zeigt einen Ausschnitt mit `url` + `headers`. Ignoriert Claude Desktop ihn, ist der übliche Umweg die kostenlose Community-Brücke [mcp-remote](https://github.com/punkpeye/mcp-remote), für die [Node.js](https://nodejs.org) installiert sein muss. Das ist eine typische Konfiguration, die wir nicht in jeder Version von Claude Desktop getestet haben:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Speichern Sie die Datei und beenden Sie Claude Desktop vollständig, bevor Sie es neu öffnen. Der Header steht absichtlich ohne Leerzeichen nach dem Doppelpunkt: Die Dokumentation von mcp-remote erklärt, dass Claude Desktop unter Windows Leerzeichen in Argumenten verfälschen kann.

### API-Schlüssel oder Anmeldung: Was nehmen Sie?

| | Anmeldung (OAuth) | API-Schlüssel (`htk_…`) |
|---|---|---|
| Einrichtung | URL einfügen, anmelden, **Allow access** | Schlüssel erzeugen, in eine Konfiguration einfügen |
| Gültigkeit | 30 Tage, dann neu verbinden | Bis Sie ihn widerrufen |
| Am besten für | claude.ai, Claude Desktop, Handy | Skripte, [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Widerrufen unter | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

Beide funktionieren nach dem Verbinden gleich: Claude handelt **als die Person, die sich angemeldet oder den Schlüssel erstellt hat**, für **ein Objekt**, mit den aktuellen Berechtigungen dieser Person.

## Was Sie Claude zuerst fragen sollten

Beginnen Sie mit Fragen, die nur Daten lesen. Wenn Sie „Hotelier Tools“ erwähnen, wählt Claude den richtigen Connector, statt im Web zu suchen.

::prompt{label="Claude"}
Wer reist heute und morgen an? Nutze Hotelier Tools und zeig Name, Nächte, Zimmer und einen noch offenen Saldo.
::

::prompt{label="Claude"}
Welche Reservierungen mit Anreise in den nächsten 7 Tagen haben noch kein zugewiesenes Zimmer?
::

::prompt{label="Claude"}
Welche Gäste sind letzte Woche abgereist und haben noch keine Rechnung? Sag mir zu jedem, warum er noch nicht abgerechnet werden kann.
::

::prompt{label="Claude"}
Zeig mir die offenen Probleme aus den automatischen Prüfungen, nach Anreisedatum gruppiert, mit dem, was ich in Little Hotelier beheben muss.
::

::prompt{label="Claude"}
Wie sind meine Preise und die Verfügbarkeit für nächstes Wochenende, und wie stehen sie im Vergleich zu den Mitbewerberpreisen, die du hast?
::

::prompt{label="Claude"}
Erkläre Schritt für Schritt den empfohlenen Preis für ein Doppelzimmer am Samstag, 14. November.
::

Claude kann Antworten auch kombinieren: „Erstelle eine Tabelle der Anreisen nächste Woche mit offenen Salden und entwirf für jeden Gast eine höfliche Zahlungserinnerung“ funktioniert gut. Die Entwürfe bleiben in Claude, es wird nichts gesendet.

## Was kann Claude mit Ihren Hoteldaten tun, und wie bleibt es sicher?

Der MCP-Server von Hotelier Tools bietet Claude mehr als 100 Hotelwerkzeuge, immer begrenzt durch Ihre Berechtigungen.

**Es kann lesen:** Reservierungen und Gäste, Zahlungen, Rechnungen und Rechnungsreife, Preise und Verfügbarkeit, Mitbewerberpreise und Preisempfehlungen mit ihren Gründen, Probleme aus den automatischen Prüfungen, die Sperrliste (Do-not-rebook list), die Warteliste, geplante Aufgaben und die aus Little Hotelier gelesenen Objektdaten.

**Es kann ändern, wenn Claude das Werkzeug aufruft:** Reservierungsdetails (zuerst ein Vorschlag mit Vorher-nachher, dann ein Schritt zum Anwenden, der `confirmed: true` braucht), Zahlungseinträge, die Vormerkung für die [Rechnung beim Check-out](/blog/send-invoice-to-guest-at-checkout), Preise aus den Empfehlungen, den Stop-Sell der Kanäle, Wartelisteneinträge und geplante Aufgaben.

**Es kann nichts Unumkehrbares tun:** Diese Werkzeuge sind für Claude und jeden anderen externen Client gesperrt. Es kann zum Beispiel nicht:

- einem Gast eine Rechnung per E-Mail senden
- eine Rückerstattung auslösen
- die INE-Erhebung einreichen
- Team-Einladungen versenden
- einen Rechnungslink per E-Mail an einen Gast senden
- eine Frage eines Booking.com-Gastes beantworten
- die Wartelistenprüfung ausführen, die Gäste anschreibt

Diese bleiben im Dashboard-Chat von Hotelier Tools, hinter einer Freigabekarte. Claude kann außerdem keine anderen Objekte sehen, nicht über Ihre Berechtigungen hinausgehen und nichts tun, was Little Hotelier selbst ablehnen würde.

### Schreibaktionen: So bleibt Claude sicher

::callout{type="warning" title="Die Rückfrage in Claude ist Ihre Freigabe"}
Im Dashboard von Hotelier Tools wartet jede Änderung auf eine Karte zum Freigeben oder Ablehnen. Außerhalb gibt es keine zweite Karte: **Ruft Claude ein Schreibwerkzeug auf, läuft es.** Die Freigabe, die Sie in Claude geben, ist die einzige.
::

Mit fünf Gewohnheiten bleibt das sicher:

1. **Lassen Sie Freigaben für Schreibwerkzeuge eingeschaltet.** Unter **Customize → Connectors → Hotelier Tools** können Sie jedes Werkzeug auf **Always allow**, **Needs approval** oder **Blocked** setzen. Lesewerkzeuge können auf „Always allow“ stehen. Alles, was Daten ändert, lassen Sie auf „Needs approval“.
2. **Sperren Sie, was Sie nie nutzen.** Soll Claude nie Preise anfassen, setzen Sie `apply_price_recommendations` und `set_channel_stop_sell` auf **Blocked**.
3. **Lesen Sie den Vorschlag.** Bei Reservierungsänderungen zeigt Claude zuerst ein Vorher-nachher aus `propose_reservation_changes`. Prüfen Sie Buchungsnummer und Werte, bevor Sie zustimmen.
4. **Achten Sie auf Anweisungen, die in Texten versteckt sind.** Gästenachrichten und Websites stammen von Fremden. Verlangt ein Werkzeugergebnis plötzlich von Claude etwas, worum Sie nicht gebeten haben, brechen Sie ab. Anthropic gibt den [gleichen Rat](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Behalten Sie im Blick, wer verbunden ist.** Jede Verbindung handelt als der Hotelier-Tools-Login, der sie erstellt hat. Widerrufen Sie alte Verbindungen unter `/developer/api-keys`, und zwar immer, wenn jemand Ihr Team verlässt.

## Werden meine Gästedaten an Anthropic gesendet?

Ja, die Teile, die Claude liest. Ruft Claude ein Werkzeug auf, wird das Ergebnis (Gästenamen, Daten, Beträge) Teil Ihrer Unterhaltung und von Anthropic nach den Bedingungen Ihres Tarifs verarbeitet.

Stand Oktober 2026 erklärt Anthropic, dass die Trainingsdaten der Verbrauchertarife „does not include raw content from connectors… including remote and local MCP servers“ (keine Rohinhalte aus Connectors, auch nicht aus entfernten oder lokalen MCP-Servern, enthalten), es sei denn, Sie kopieren diese Inhalte in den Chat ([Quelle](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). In den kommerziellen Tarifen (Team, Enterprise, API) werden Ein- und Ausgaben [standardmäßig nicht für das Training verwendet](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Gästedaten sind personenbezogene Daten, und Ihr Hotel bleibt dafür verantwortlich. Fragen Sie Claude nur nach dem, was Sie brauchen, und schalten Sie den Connector in Chats aus, die ihn nicht brauchen.

::demo-cta{path="/developer/mcp-setup"}
::

## Fehlerbehebung

| Was Sie sehen | Wahrscheinliche Ursache | Was tun |
|---|---|---|
| Claude meldet, dass es sich nicht verbinden kann, oder ein 401-Fehler | Anmeldung abgelaufen (30 Tage), Schlüssel widerrufen oder Sie haben keinen Zugriff mehr auf das Objekt | **Disconnect** und erneut **Connect**, oder einen neuen Schlüssel erstellen |
| 400 „No Little Hotelier credentials configured“ | Little Hotelier ist noch nicht verbunden | Verbinden Sie es unter **Credentials** (`/credentials`) |
| 403 `permission_denied` | Ihrem Login fehlt der API-Zugriff | Bitten Sie den Inhaber, Ihrer Rolle API-Zugriff zu geben |
| 423 `lh_frozen` | Anmeldung bei Little Hotelier nach einem Login-Fehler pausiert, oft wegen eines abgelaufenen Passworts | Speichern Sie das neue Passwort unter **Credentials** oder klicken Sie auf **Check now & resume** |
| Die Werkzeuge erscheinen nicht im Chat | Connector für diesen Chat ausgeschaltet oder Desktop nicht neu gestartet | **+ → Connectors** → einschalten. Claude Desktop nach Änderungen an der Konfiguration neu starten |
| Das Anmeldefenster öffnet sich nie | Pop-ups blockiert | Erlauben Sie Pop-ups für claude.ai und versuchen Sie **Connect** erneut |

## Nächste Schritte

- Dasselbe in ChatGPT? Folgen Sie [ChatGPT mit Little Hotelier verbinden](/blog/connect-chatgpt-to-little-hotelier).
- Berichte oder Skripte bauen? Siehe [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) oder den [Leitfaden zur REST-API](/blog/little-hotelier-api).
- Lieber Freigabekarten für jede Änderung? Nutzen Sie den [integrierten Assistenten](/blog/ai-assistant-hotel-front-desk) im Dashboard.
- Alles, was der Server bietet, steht auf der [Funktionsseite API & MCP](/tools/bot/api-mcp).
