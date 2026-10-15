---
title: "Eine REST API und ein MCP-Server für Little-Hotelier-Daten"
---

Hotelier Tools gibt Ihrer Little-Hotelier-Unterkunft eine REST API unter `https://dashboard.hotelier.tools/api/v1` und einen MCP-Server unter `https://dashboard.hotelier.tools/api/mcp`. Ihre Skripte, Tabellen, Claude, ChatGPT, Cursor oder VS Code können dann Reservierungen, Gäste, Preise und Verfügbarkeit lesen und einige Änderungen vornehmen, mit denselben Berechtigungen wie Ihr Hotelier-Tools-Konto.

## So funktioniert es

- **Ihr eigener Login, keine Partner-API.** Sie verbinden Little Hotelier einmal unter **Credentials**, verschlüsselt gespeichert. Hotelier Tools nutzt dieselben Web-Endpunkte wie die Little-Hotelier-Webanwendung und kann daher tun, was dieser Login kann, nicht mehr.
- **REST API.** JSON über HTTPS: `/reservations` (mit Rechnungen und PDFs je Buchung), `/guests`, `/prices`, `/room-types` und `/methods` für rohe Little-Hotelier-Methoden. Die vollständige Liste steht in der öffentlichen OpenAPI-Spezifikation unter `/api/v1/openapi.json`, mit interaktivem Explorer und Codevorlagen unter **REST API & Swagger** (`/developer/rest-api`).
- **MCP-Server.** Ein entfernter HTTP-Server mit mehr als 100 Hotel-Werkzeugen. Fertige Konfigurationen für jeden Client finden Sie unter **MCP Setup** (`/developer/mcp-setup`).

## So funktioniert die Authentifizierung

- **API-Schlüssel.** Erstellen Sie einen unter **Developer > API & MCP > API Keys** (`/developer/api-keys`). Schlüssel beginnen mit `htk_`, werden nur einmal angezeigt und gehören in einen Header `Authorization: Bearer`. Ein Schlüssel hat keine Scopes: Er handelt für eine Unterkunft als die Person, die ihn erstellt hat. Jede Person kann bis zu 10 Schlüssel haben und jeden davon widerrufen.
- **Anmeldung für MCP.** Clients, die OAuth unterstützen, können sich stattdessen per Anmeldung verbinden. Diese Anmeldung gilt 30 Tage.

## Lese- und Schreibaufrufe

Leseaufrufe ändern in Little Hotelier nichts. Schreibaufrufe sind real: `POST /reservations/{id}/invoices` erstellt jedes Mal eine neue Rechnung. Über MCP kann eine KI Reservierungen ändern (zuerst ein Vorschlag, dann ein Schritt zum Anwenden mit `confirmed: true`), Zahlungsvermerke, Preise, Stop Sell, Wartelisteneinträge und geplante Aufgaben. Außerhalb des Dashboards gibt es keine Genehmigungskarte, lassen Sie daher die Werkzeugfreigaben Ihres Clients eingeschaltet. Nicht umkehrbare Aktionen, etwa Erstattungen oder der Versand von Rechnungen per E-Mail, sind für externe Clients gesperrt.

## Grenzen und Gutes zu wissen

- **Status:** REST API und MCP-Server sind in der Beta. Einbettbare Karten sind in der Alpha.
- **Ratenlimit:** 100 Anfragen pro Minute und IP-Adresse, danach `429` mit `Retry-After`.
- **Seitenweise Abruf:** höchstens 100 Reservierungen pro Aufruf, gefiltert nach Check-in-Datum.
- **Nicht verfügbar:** ausgehende Webhooks, ein öffentlicher Sandbox-Schlüssel, SDK-Pakete.
- **Maskierte Daten bleiben maskiert:** Little Hotelier maskiert Gästedaten 180 Tage nach dem Check-out.
- Es ist keine offizielle SiteMinder-API.

Beginnen Sie mit [Hat Little Hotelier eine API?](/blog/little-hotelier-api) und [Was ist ein MCP-Server?](/blog/what-is-mcp-server-hotels) und richten Sie dann [Claude](/blog/connect-claude-to-little-hotelier) oder [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) ein.
