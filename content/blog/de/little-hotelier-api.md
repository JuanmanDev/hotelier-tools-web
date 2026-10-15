---
title: "Hat Little Hotelier eine API (Schnittstelle)? Die Antwort 2026 und wie Sie Ihre Daten herausholen"
seoTitle: "Little Hotelier API: Gibt es eine Schnittstelle? (2026)"
description: "Kein API-Schlüssel für Ihre Buchungen oder Gäste. Was SiteMinder offiziell bietet und wie Sie Ihre Little-Hotelier-Daten in Minuten per REST auslesen."
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, little hotelier schnittstelle, little hotelier api dokumentation, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api, little hotelier integration]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "Seite REST API reference in Hotelier Tools mit Basis-URL, einem Download von openapi.json, dem Feld Quick authorize (Feld Bearer token, Authorize Swagger, Use my session) und Codevorlagen in cURL, JavaScript, Python und PowerShell"
featured: true
faq:
  - q: "Hat Little Hotelier eine öffentliche API für meine Reservierungen?"
    a: "Stand Oktober 2026 keine, die ein Betrieb für die eigenen Buchungen nutzen kann. Die APIs von SiteMinder sind für zertifizierte Technologiepartner gedacht, und der Direct-Booking-API-Schlüssel, den Sie selbst erzeugen können, deckt nur Preise, Verfügbarkeit und Betriebsdaten für eine Buchungswebsite ab."
  - q: "Was ist SiteMinder Exchange (SMX), und ist Little Hotelier darin enthalten?"
    a: "SMX ist die API von SiteMinder für Partner-Apps wie Check-in-, Nachrichten- und Revenue-Tools. Der Entwicklerleitfaden von SiteMinder führt Little Hotelier als Quelle für Reservierungen bei SMX auf, nicht aber für Verfügbarkeit und Preise. Nur zertifizierte Partner können sich anbinden."
  - q: "Wie werde ich SiteMinder-Integrationspartner, und wie lange dauert das?"
    a: "Sie senden das Bewerbungsformular für Integrationen von SiteMinder, unterzeichnen eine Partnerschaftsvereinbarung und entwickeln, zertifizieren und schalten dann live. Laut SiteMinder dauern die meisten Integrationen vom Start bis zum Livegang etwa 60 Tage. Das Programm ist für Softwareunternehmen gedacht, nicht für ein einzelnes Hotel."
  - q: "Ist eine inoffizielle API wie Hotelier Tools sicher und erlaubt?"
    a: "Hotelier Tools meldet sich mit Ihrem eigenen Little-Hotelier-Login an, speichert ihn verschlüsselt (AES-256-GCM) und kann nur tun, was dieser Login in der Little-Hotelier-Web-App kann. Es ist keine offizielle Integration von SiteMinder. Wenn Sie unsicher sind, prüfen Sie Ihren eigenen Vertrag mit SiteMinder. Sie können jeden Schlüssel jederzeit widerrufen."
  - q: "Hat Little Hotelier einen MCP-Server für KI-Assistenten?"
    a: "Stand Oktober 2026 keinen für Inhaber. Die KI-Arbeit von SiteMinder in Demand Plus dreht sich darum, dass Reisende Ihre Zimmer in ChatGPT und Claude finden und buchen. Um eine KI zu Ihren eigenen Buchungen zu befragen, brauchen Sie einen unabhängigen MCP-Server wie den in Hotelier Tools."
  - q: "Kann ich die API testen, ohne echte Daten zu gefährden?"
    a: "Es gibt keinen öffentlichen Sandbox-Schlüssel. Beginnen Sie mit reinen Leseaufrufen (Reservierungen, Preise, Zimmertypen). Sie ändern nichts in Little Hotelier. Schreibende Aufrufe, etwa das Erstellen einer Rechnung, erzeugen echte Dokumente."
---

Keine, die Sie für Ihre eigenen Buchungen nutzen können. Stand Oktober 2026 dokumentiert das Hilfecenter von Little Hotelier keinen API-Schlüssel, den ein Betrieb für Reservierungen, Gäste oder Rechnungen verwenden kann: Die APIs von SiteMinder sind für zertifizierte Technologiepartner gedacht, und der einzige Schlüssel, den Sie selbst erzeugen können, die **Direct Booking API**, deckt Preise, Verfügbarkeit und Betriebsdaten für eine Buchungswebsite ab. Um Ihre eigenen Daten aus einem Skript, einer Tabelle oder einem KI-Assistenten zu lesen, können Sie eine unabhängige REST-API wie die von Hotelier Tools nutzen, die sich mit Ihrem eigenen Little-Hotelier-Login verbindet.

Unten: genau das, was SiteMinder anbietet, danach eine Einrichtung in fünf Minuten mit echten `curl`-Beispielen.

## Hat Little Hotelier eine öffentliche API (Schnittstelle)?

Es gibt vier offizielle Wege, Daten in Little Hotelier hinein oder aus ihm heraus zu bekommen. Keiner davon gibt Ihnen einen API-Schlüssel für Ihre Reservierungsliste.

| Offizielle Option | Wer sie nutzen kann | Was sie abdeckt |
|---|---|---|
| SiteMinder Exchange (SMX) | Zertifizierte Partner-Apps | Reservierungen aus Little Hotelier. Nicht Verfügbarkeit oder Preise |
| Direct Booking API | Betriebe mit Direct Booking | Live-Preise, Verfügbarkeit, Betrieb, Zimmertypen, Ratenpläne |
| CSV-Exporte | Jeder Nutzer, von Hand | Reservierungen, Umsatz, Rechnungen, Buchhaltung |
| Apps aus dem App Store | Jeder Betrieb, über den Anbieter der App | Was die jeweilige App synchronisiert |

### SiteMinder Exchange (SMX): für Softwareunternehmen

Der [Entwicklerleitfaden](https://developer.siteminder.com/get-started/siteminder-apis) von SiteMinder nennt fünf APIs: pmsXchange, SiteConnect, Channels Plus, SMX und Direct Booking. Für Little Hotelier zählt SMX, die API hinter Apps wie Online-Check-in und Gästenachrichten.

In der [Liste der SMX-Publisher](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) von SiteMinder sendet Little Hotelier **Reservierungen**, aber keine Verfügbarkeit und Preise. Die [SMX-Schnellstartanleitung](https://developer.siteminder.com/smx-api/guides/quick-start) sagt dasselbe: „you are not able to obtain ARI data“ von Little Hotelier, also keine Daten zu Verfügbarkeit, Preisen und Inventar.

Der Zugang ist Partnern vorbehalten. Laut [FAQ](https://developer.siteminder.com/get-started/resources/faq) von SiteMinder müssen Sie zuerst über die [Integrationsbewerbung](https://www.siteminder.com/integrations/apply-now/) eine Partnerschaftsvereinbarung unterzeichnen, dann entwickeln, zertifizieren und live gehen, was „die meisten“ Partner innerhalb von 60 Tagen schaffen. Dieser Weg passt zu einem Softwareunternehmen. Ein einzelnes Hotel kann für sich keinen SMX-Schlüssel bekommen.

### Die Direct Booking API: der eine Schlüssel, den Sie erzeugen können

Wenn Ihr Konto auf der neueren Little-Hotelier-Plattform läuft (Anmeldungen seit Mai 2025 oder umgestellte Konten), dokumentiert das [Hilfecenter](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api) eine Direct Booking API:

1. Gehen Sie zu **Direct booking → Configuration → API integration**.
2. Klicken Sie auf **Generate key**.
3. Geben Sie den Schlüssel und den Entwicklerleitfaden von SiteMinder an Ihren Webentwickler weiter.

Sie liefert Preise und Verfügbarkeit in Echtzeit, Betriebsdaten, Zimmertypen und Ratenpläne, sodass ein Entwickler eine eigene Buchungsseite oder App bauen kann. Sie ist ohne Aufpreis in Direct Booking enthalten. Sie liefert **keine** Reservierungen, Gäste, Zahlungen oder Rechnungen, und der Little-Hotelier-Support hilft nicht beim Bauen oder Reparieren dessen, was Sie damit erstellen.

### CSV-Exporte und der App Store

Alles andere ist Handarbeit oder Sache der Anbieter. Die Seite Reservations und die meisten Berichte exportieren eine CSV (Schritt für Schritt in [Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel)). Apps im [Little Hotelier App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) verbinden sich, wenn Sie den App-Anbieter kontaktieren. Die Daten selbst bekommen Sie dabei nicht. Was es gibt, steht in [den besten Little-Hotelier-Integrationen](/blog/little-hotelier-integrations).

## So holen Sie Ihre Little-Hotelier-Daten per Programm heraus

Hotelier Tools ist ein unabhängiges Dashboard für Betriebe mit Little Hotelier. Es enthält eine REST-API (Status: Beta) und einen MCP-Server für KI-Assistenten.

So funktioniert es, einfach erklärt:

- Sie verbinden Ihren eigenen Little-Hotelier-Login einmalig unter **Credentials** (`/credentials`). Er wird verschlüsselt gespeichert (AES-256-GCM).
- Hotelier Tools nutzt dann dieselben Web-Endpunkte wie die Little-Hotelier-Web-App. Es kann lesen und tun, was dieser Login kann, nicht mehr.
- Ihre Skripte rufen Hotelier Tools mit einem API-Schlüssel auf, und Hotelier Tools spricht mit Little Hotelier.

::callout{type="note" title="Unabhängig, nicht offiziell"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es ist keine offizielle SiteMinder-API und verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Betriebs. Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.
::

## So erstellen Sie einen API-Schlüssel und machen den ersten Aufruf

Sie brauchen ein Hotelier-Tools-Konto (Anmeldung unter [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) mit verbundenem Little Hotelier unter **Credentials**. Der Inhaber des Betriebs hat standardmäßig API-Zugang.

1. Öffnen Sie **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Geben Sie unter „Generate a new key“ einen Namen ein, den Sie später wiedererkennen, etwa `sheets-export`, und klicken Sie auf **Generate key**.
3. Kopieren Sie den Schlüssel sofort. Die Seite warnt: „Copy this key now — it will not be shown again.“ (Kopieren Sie diesen Schlüssel jetzt, er wird nicht noch einmal angezeigt.) Schlüssel beginnen mit `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="Seite API keys direkt nach dem Erzeugen eines Schlüssels: das grüne Feld Key generated mit dem maskierten Einmalschlüssel und einer Kopierschaltfläche, der neue Schlüssel Blog integration unter Active keys mit einer Schaltfläche Revoke und eine Meldung API key created" caption="Kopieren Sie den Schlüssel sofort aus dem grünen Feld: Er wird nur einmal angezeigt. Benennen Sie jeden Schlüssel nach dem, was ihn nutzt, damit Sie später wissen, welchen Sie widerrufen." path="/developer/api-keys"}
::

4. Prüfen Sie, ob die API antwortet. Dieser Aufruf ist öffentlich und braucht keinen Schlüssel:

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. Jetzt ein Aufruf mit Ihrem Schlüssel. Er liefert die Little-Hotelier-Betriebs-ID und den verwendeten Login:

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

Unter Windows schreiben Sie in PowerShell `curl.exe` statt `curl` oder nutzen den eigenen Befehl von PowerShell:

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

Was ein Schlüssel kann: Es gibt **keine Scopes**. Ein Schlüssel handelt für den einen Betrieb, für den er erstellt wurde, als die Person, die ihn erstellt hat, mit deren aktuellen Berechtigungen. Jede Person kann bis zu 10 Schlüssel haben, und Sie können jeden davon auf derselben Seite widerrufen.

### Lieber klicken als tippen? Nutzen Sie den Explorer

Öffnen Sie **REST API & Swagger** (`/developer/rest-api`). Fügen Sie unter **Quick authorize** Ihren Schlüssel in „Bearer token (API key or session JWT)“ ein und klicken Sie auf **Authorize Swagger**, oder klicken Sie auf **Use my session**, um den Schlüssel zu überspringen. Probieren Sie dann jeden Endpunkt im „Interactive API explorer“ aus. Die Seite hat außerdem **Download spec** und „Code templates“ in cURL, JavaScript, Python und PowerShell.

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="Interactive API explorer (Swagger) nach Try it out und Execute bei GET /property: die Anfrage-URL https://demo.hotelier.tools/api/v1/property und ein Antwortkörper mit Status 200 und propertyId 90210" caption="Einmal autorisieren, dann jeden Endpunkt im Browser ausführen und die genaue Anfrage samt zurückgegebenem JSON sehen." path="/developer/rest-api"}
::

## Welche Endpunkte können Sie nutzen?

Die Basis-URL lautet `https://dashboard.hotelier.tools/api/v1`. Die vollständige, aktuelle Liste steht in der öffentlichen [OpenAPI-Spezifikation](https://dashboard.hotelier.tools/api/v1/openapi.json). Mit diesen beginnen die meisten:

| Methode | Pfad | Was Sie bekommen |
|---|---|---|
| GET | `/reservations` | Reservierungen nach Anreisedatum, optional `status` und `limit` |
| GET | `/reservations/{id}` | Alle Details einer Buchung (numerische ID oder `LH…`-Referenz) |
| GET | `/reservations/{id}/invoices` | Die Rechnungen einer Buchung |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | Eine Rechnung als PDF |
| POST | `/reservations/{id}/invoices` | Erstellt eine neue Rechnung in Little Hotelier (keine E-Mail an den Gast) |
| GET | `/guests` | Gastsuche nach Text, Name, E-Mail oder Telefon |
| GET | `/prices` | Preise und Verfügbarkeit für einen Zeitraum |
| GET | `/room-types` | Zimmertypen mit der Zahl der Zimmer je Typ |
| GET | `/methods` | Die rohen Little-Hotelier-Methoden, die Sie aufrufen können (öffentlich) |
| POST | `/methods/{methodName}` | Führt eine davon aus, zum Beispiel `getReservationsByDateRange` |

Einige Beispiele zum Kopieren (Daten und IDs sind erfunden):

```bash
# Ausgecheckte Reservierungen mit Anreise im November 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Alles zu einer Buchung
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Preise und Verfügbarkeit für eine Woche
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Einen Gast nach Nachnamen finden
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Jede Reservierung, die einen Zeitraum überschneidet (rohe Methode, benannte Parameter)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

Listenaufrufe liefern JSON wie `{ "success": true, "count": 2, "data": [ … ] }`. Um eine rohe Methode ohne Code auszuprobieren, öffnen Sie im Dashboard **LH Methods** (`/methods`) und führen sie im Browser aus. Die Läufe werden unter **Run History** protokolliert.

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="Methoden-Werkbank für Little Hotelier in Hotelier Tools mit einer Karte pro roher Methode, etwa getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation und generateInvoice, jeweils mit der Zahl ihrer Parameter" caption="Führen Sie jede rohe Little-Hotelier-Methode von Hand aus, bevor Sie sie skripten." path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## Grenzen, Fehler und was nicht verfügbar ist

**Rate Limit.** 100 Anfragen pro Minute und IP-Adresse. Jede Antwort enthält `X-RateLimit-Limit`, `X-RateLimit-Remaining` und `X-RateLimit-Reset`. Oberhalb des Limits erhalten Sie `429` mit einem `Retry-After`-Header.

**Seitenweiser Abruf.** `/reservations` liefert höchstens 100 pro Aufruf (`limit`, Standard 50) und filtert nach dem Anreisedatum. Für ein ganzes Jahr fragen Sie jeweils einen Monat ab. Liefert ein Monat genau 100, teilen Sie ihn in zwei Hälften. `/guests` blättert mit `page` und `perPage` (bis 50). `/prices` teilt Zeiträume von mehr als zwei Wochen in Abschnitte, lange Zeiträume sind also langsamer.

**Fehler** kommen als JSON mit `statusCode` und `statusMessage` zurück:

| Code | Bedeutet meistens |
|---|---|
| 401 | Schlüssel fehlt, ist falsch oder widerrufen |
| 404 | Keine solche Reservierung oder nicht in Ihrem Betrieb |
| 422 | Ein Parameter ist falsch, zum Beispiel ein Datum nicht im Format `YYYY-MM-DD` |
| 429 | Zu viele Anfragen, warten Sie auf `Retry-After` |
| 500 / 502 | Little Hotelier hat nicht geantwortet, versuchen Sie es später erneut |

**Maskierte Daten bleiben maskiert.** Die API liest, was Little Hotelier noch hält. Little Hotelier [maskiert Gästedaten 180 Tage nach dem Check-out](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), und keine API kann sie zurückholen. Exportieren Sie vorher.

**Nicht verfügbar:** ausgehende Webhooks oder Echtzeit-Benachrichtigungen, ein öffentlicher Sandbox-Schlüssel und SDK-Pakete auf npm oder PyPI. Um etwas nach Zeitplan auszuführen, nutzen Sie Ihren eigenen Scheduler (einen Cronjob, die Windows-Aufgabenplanung oder einen Google-Sheets-Trigger).

**Schreibzugriffe sind echt.** `POST /reservations/{id}/invoices` erzeugt bei jedem Aufruf ein neues Rechnungsdokument in Little Hotelier. Beginnen Sie mit reinen Leseaufrufen und halten Sie Schlüssel aus gemeinsamen Tabellen und öffentlichem Code heraus.

## Was können Sie damit bauen?

- **Eine Live-Reservierungstabelle.** Ziehen Sie die Aufenthalte des Vormonats nach Zeitplan in Google Sheets oder Excel: siehe [Reservierungen nach Excel und Google Sheets exportieren](/blog/export-little-hotelier-reservations-excel).
- **Unterlagen für den Steuerberater.** Laden Sie Rechnungs-PDFs je Buchung herunter oder sparen Sie sich den Code mit dem Quartals-ZIP in [alle Rechnungen auf einmal herunterladen](/blog/download-all-little-hotelier-invoices).
- **Dashboards.** Speisen Sie Auslastung und Umsatz in Looker Studio oder Power BI aus einer Tabelle, die die API aktuell hält.
- **KI-Assistenten.** Derselbe Schlüssel funktioniert mit dem MCP-Server von Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`), der Claude, ChatGPT, Cursor oder VS Code mehr als 100 Hotel-Werkzeuge gibt. Beginnen Sie mit [Was ist ein MCP-Server?](/blog/what-is-mcp-server-hotels), dann [verbinden Sie Claude](/blog/connect-claude-to-little-hotelier) oder richten [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) ein.
- **Verbindung zwischen Werkzeugen.** Wo es keine App im App Store gibt, kann ein kleines Skript Daten zwischen Little Hotelier und dem Rest Ihrer Software bewegen. Vergleichen Sie die Optionen in [den besten Little-Hotelier-Integrationen](/blog/little-hotelier-integrations).

Siehe auch: [Alternativen zu Little Hotelier](/blog/little-hotelier-alternatives).

## Nächste Schritte

- Wenn Sie Software für viele Hotels entwickeln, bewerben Sie sich für das Partnerprogramm von SiteMinder und SMX.
- Wenn Sie nur die Daten Ihres eigenen Betriebs brauchen, erstellen Sie unter `/developer/api-keys` einen Hotelier-Tools-Schlüssel und rufen `/reservations` auf.
- Exportieren Sie Gästedaten, die Sie aufbewahren müssen, bevor Little Hotelier sie nach 180 Tagen maskiert.
- Alles, was API und MCP-Server bieten, steht auf der [Funktionsseite API & MCP](/tools/bot/api-mcp).
