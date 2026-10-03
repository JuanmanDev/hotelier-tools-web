---
title: "ChatGPT mit Little Hotelier verbinden (plus 18 Prompts für kleine Hotels)"
seoTitle: "ChatGPT mit Little Hotelier verbinden + 18 Prompts"
description: "ChatGPT mit Little Hotelier verbinden: Entwicklermodus und MCP-App, was Ihr Tarif erlaubt, und 18 Prompts für Anreisen, Zahlungen und Preise zum Kopieren."
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [chatgpt mit little hotelier verbinden, chatgpt hotellerie, chatgpt mcp connector, chatgpt prompts hotel, chatgpt hotelverwaltung, chatgpt entwicklermodus mcp]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "Seite Authorize MCP access von Hotelier Tools, die ein KI-Assistent beim Verbinden öffnet, mit Hinweis auf ein 30-Tage-Token und den Schaltflächen Deny und Allow access"
faq:
  - q: "Welche ChatGPT-Tarife können sich mit Little Hotelier verbinden?"
    a: "Stand Oktober 2026 nennt das Help Center von OpenAI vollen MCP-Support inklusive Schreibaktionen für Business, Enterprise und Edu im Web, während Pro im Entwicklermodus MCP-Apps mit Lese- und Abrufrechten verbinden kann. Die Entwicklerdokumentation von OpenAI nennt auch Plus. Free und Go werden nicht genannt. Prüfen Sie, was Ihr eigenes Konto anzeigt."
  - q: "Kann ich statt der Anmeldung einen API-Schlüssel verwenden?"
    a: "Nein. Laut OpenAI kann ChatGPT keine eigenen API-Schlüssel an einen MCP-Server übergeben, wählen Sie also OAuth. Sie melden sich in einem Browserfenster bei Hotelier Tools an und klicken auf Allow access."
  - q: "Kann ChatGPT meine Reservierungen oder Preise ändern?"
    a: "Nur wenn Ihr Tarif Schreibaktionen erlaubt und Sie sie bestätigen. OpenAI verlangt standardmäßig eine Bestätigung vor Schreibaktionen. Hotelier Tools fügt außerhalb seines Dashboards keine zweite Freigabe hinzu und sperrt Rückerstattungen, den E-Mail-Versand von Rechnungen, die INE-Meldung und andere nicht umkehrbare Aktionen für ChatGPT vollständig."
  - q: "Funktioniert es in der ChatGPT-App auf dem Handy?"
    a: "Nicht für eigene MCP-Apps. Laut Help Center von OpenAI gibt es MCP-Apps im Entwicklermodus nur im Web. Nutzen Sie chatgpt.com im Browser."
  - q: "Werden meine Gästedaten zum Training der Modelle von OpenAI verwendet?"
    a: "Bei Business, Enterprise und Edu trainiert OpenAI laut eigener Angabe standardmäßig nicht mit Informationen aus verbundenen Apps. Bei Free, Plus, Go und Pro kann es das, wenn in den Datenkontrollen Improve the model for everyone aktiviert ist. Schalten Sie es aus, bevor Sie Hoteldaten verbinden."
  - q: "Claude oder ChatGPT: Was eignet sich besser für Hotelaufgaben?"
    a: "Beide funktionieren mit demselben Hotelier-Tools-Server. Stand Oktober 2026 erlaubt Claude eigene Connectors mit Schreibwerkzeugen in jedem Tarif, auch Free (ein Connector), während ChatGPT vollen Lese- und Schreibzugriff über MCP auf Business, Enterprise und Edu beschränkt. Nehmen Sie den Assistenten, den Ihr Team ohnehin nutzt."
---

Ja, Sie können ChatGPT mit Little Hotelier verbinden. Aktivieren Sie in ChatGPT den **Entwicklermodus** (developer mode), erstellen Sie eine App, die per **OAuth** auf den MCP-Server von Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) zeigt, und melden Sie sich bei Hotelier Tools an. Was ChatGPT danach tun darf, hängt von Ihrem Tarif ab: Stand Oktober 2026 reserviert OpenAI vollen Lese- und Schreibzugriff für Business, Enterprise und Edu, während Pro (und laut Entwicklerdokumentation von OpenAI auch Plus) nur mit Leserechten verbindet.

Unten finden Sie die Schritte, wie OpenAI sie heute dokumentiert, was Sie in Ihrem eigenen Konto prüfen sollten, und 18 Prompts, die in einem kleinen Hotel funktionieren.

## Was Sie vor dem Start brauchen

- **Einen ChatGPT-Tarif mit Entwicklermodus.** Der [Developer-Mode-Leitfaden](https://developers.openai.com/api/docs/guides/developer-mode) von OpenAI nennt Pro-, Plus-, Business-, Enterprise- und Education-Konten im Web. Das [Help Center](https://help.openai.com/en/articles/12584461) ergänzt, dass **voller MCP-Zugriff inklusive Schreibaktionen für Business und Enterprise/Edu** gilt und Pro nur mit Lese- und Abrufrechten verbinden kann.
- **Einen Browser am Computer.** Laut OpenAI gibt es eigene MCP-Apps nur im Web, nicht in den mobilen Apps.
- **Ein Hotelier-Tools-Konto** mit Little Hotelier, verbunden unter **Credentials** (`/credentials`). Der Login des Inhabers hat den nötigen API-Zugriff. Hotelier Tools ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Was wir geprüft haben und was Sie prüfen sollten"}
Der Hotelier-Tools-Server unterstützt die Anmeldung, die ChatGPT verwendet: OAuth mit PKCE und automatische Client-Registrierung. Menüs und Tarifregeln von ChatGPT ändern sich oft, und wir haben nicht jeden Tarif von Anfang bis Ende getestet. Bestätigen Sie in Ihrem Konto drei Dinge: dass **Developer mode** erscheint, dass die Werkzeuge von Hotelier Tools nach dem Verbinden auftauchen und ob Ihr Tarif ChatGPT Schreibaktionen erlaubt.
::

Hotelier Tools ist unabhängig. Es steht in keiner Verbindung zu OpenAI, SiteMinder oder Little Hotelier und wird von keinem von ihnen empfohlen, und es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hauses.

## So verbinden Sie ChatGPT mit Little Hotelier, Schritt für Schritt

Diese Schritte folgen der [Verbindungsanleitung](https://developers.openai.com/plugins/deploy/connect-chatgpt) von OpenAI, Stand Oktober 2026. Sehen Ihre Bildschirme anders aus, ist in jedem Schritt der ältere Pfad aus dem Help Center vermerkt.

1. Gehen Sie im Browser zu [chatgpt.com](https://chatgpt.com) und öffnen Sie **Settings → Security and login**. Aktivieren Sie **Developer mode**. (Manche Konten zeigen es unter **Settings → Apps → Advanced settings**.)
2. Öffnen Sie **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) und klicken Sie auf **+**, um eine App im Entwicklermodus zu erstellen. (Ältere Bildschirme: **Settings → Apps → Create**.)
3. Füllen Sie das Formular aus:
   - **Name:** `Hotelier Tools`
   - **Description:** `Reservations, guests, invoices and prices from my Little Hotelier property`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. Erstellen Sie die App. ChatGPT zeigt eventuell zuerst **Scan Tools**. Ein Fenster von Hotelier Tools öffnet sich.
5. Melden Sie sich bei Hotelier Tools an. Wählen Sie auf **Authorize MCP access** bei mehreren Objekten das gewünschte aus und klicken Sie auf **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Karte Authorize MCP access: AI assistant (MCP client) möchte über die MCP-API auf Ihr Hotelier-Tools-Konto zugreifen, mit der angemeldeten E-Mail-Adresse, einem Token, das in 30 Tagen abläuft, und den Schaltflächen Deny und Allow access" caption="Klicken Sie auf Allow access. ChatGPT sieht nie Ihr Passwort für Hotelier Tools oder Little Hotelier." path="/oauth/authorize" width="472" height="327"}
::

6. Prüfen Sie die Liste der Werkzeuge, die ChatGPT gefunden hat. Die App erscheint mit der Kennzeichnung **Dev**.
7. Starten Sie einen neuen Chat. Öffnen Sie das Menü **+**, wählen Sie **Developer mode** und dann **Hotelier Tools** (neuere Konten erlauben auch, `@` zu tippen und die App auszuwählen).

Die Anmeldung gilt **30 Tage**. Danach bittet ChatGPT Sie, sich neu zu verbinden. Die Verbindung sehen und widerrufen Sie in Hotelier Tools unter **Developer → API Keys** (`/developer/api-keys`), wo sie die Kennzeichnung **MCP client** trägt.

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="Seite API keys in Hotelier Tools mit dem Formular Generate a new key, einer Liste Active keys mit einem maskierten Schlüssel und einer Schaltfläche Revoke sowie den Hinweisen Good security practice" caption="Schlüssel und Verbindungen stehen unter Active keys. Mit Revoke kappen Sie den Zugriff sofort." path="/developer/api-keys"}
::

### In einem Business-, Enterprise- oder Edu-Workspace

Bei **Business** dürfen laut OpenAI nur Admins und Inhaber den Entwicklermodus nutzen und Apps veröffentlichen. Um die App mit Kollegen zu teilen, veröffentlicht ein Admin sie unter **Workspace settings → Apps → Drafts → Publish**. Bei **Enterprise und Edu** können Admins ausgewählten Mitgliedern den Entwicklermodus rollenbasiert freigeben. Jede Person meldet sich weiterhin mit einem Login mit API-Zugriff bei Hotelier Tools an.

### Warum kein API-Schlüssel?

Die [Authentifizierungsdokumentation](https://developers.openai.com/plugins/build/auth) von OpenAI sagt, ChatGPT "cannot present custom API keys". Die `htk_`-API-Schlüssel, die in [Claude Code, Cursor und VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) funktionieren, kommen hier also nicht zum Einsatz. Der Weg hinein ist die Anmeldung im Browser.

## 18 Prompts, die in kleinen Hotels funktionieren

Starten Sie jeden Chat mit ausgewähltem Hotelier Tools. Es hilft, die App im Prompt zu nennen, damit ChatGPT Ihre Daten statt des Webs nutzt. Die Buchungsnummer unten ist erfunden.

### Anreisen und Zimmer

::prompt{label="ChatGPT"}
Wer reist heute an? Nutze Hotelier Tools und liste Gast, Nächte, Zimmertyp und ob ein Zimmer zugewiesen ist.
::

::prompt{label="ChatGPT"}
Welche Reservierungen mit Anreise in den nächsten 7 Tagen haben noch kein zugewiesenes Zimmer?
::

::prompt{label="ChatGPT"}
Wer reist heute ab, und hat noch jemand einen offenen Saldo?
::

::prompt{label="ChatGPT"}
Wie viele Zimmer jedes Typs sind heute Nacht und morgen Nacht noch frei?
::

### Zahlungen und Rechnungen

::prompt{label="ChatGPT"}
Liste die Reservierungen mit Anreise in den nächsten 14 Tagen und offenem Saldo auf, nach Betrag sortiert, der höchste zuerst.
::

::prompt{label="ChatGPT"}
Welche Aufenthalte sind letzte Woche abgereist und haben noch keine Rechnung? Sag mir zu jedem, warum er noch nicht abgerechnet werden kann.
::

::prompt{label="ChatGPT"}
Ist die Buchung BDC-1234567890 bereit zur Rechnungsstellung? Wenn nicht, was genau fehlt?
::

::prompt{label="ChatGPT"}
Schreibe für jeden Gast, der diese Woche mit offenem Saldo anreist, eine kurze, freundliche Zahlungserinnerung. Sende nichts, gib mir nur die Texte.
::

### Preise und Verfügbarkeit

::prompt{label="ChatGPT"}
Zeig mir meine Preise und die Verfügbarkeit für nächsten Freitag und Samstag nach Zimmertyp.
::

::prompt{label="ChatGPT"}
Vergleiche meine Preise für die nächsten 14 Nächte mit den Mitbewerberpreisen, die du hast. In welchen Nächten bin ich am günstigsten und in welchen am teuersten?
::

::prompt{label="ChatGPT"}
Erkläre Schritt für Schritt, warum der empfohlene Preis für ein Doppelzimmer am Samstag, 14. November, so hoch ist.
::

::prompt{label="ChatGPT"}
Welche Nächte in den nächsten 30 Tagen haben die niedrigste Auslastung? Schlage vor, welche ich mir zuerst ansehen sollte.
::

### Gäste

::prompt{label="ChatGPT"}
Finde den Gast, dessen Telefonnummer auf 4521 endet, und zeig mir seine vergangenen und kommenden Aufenthalte.
::

::prompt{label="ChatGPT"}
Passt eine Anreise der nächsten 7 Tage zu meiner Liste "nicht erneut buchen"?
::

::prompt{label="ChatGPT"}
Bei welchen Gästen mit Anreise diese Woche fehlt noch ein Ausweisdokument oder eine Adresse?
::

### Berichte

::prompt{label="ChatGPT"}
Fasse den letzten Monat zusammen: Anreisen, verkaufte Nächte nach Zimmertyp, Stornierungen und No-Shows. Stelle es als Tabelle dar.
::

::prompt{label="ChatGPT"}
Was haben die geplanten Aufgaben diese Woche getan, und ist eine davon fehlgeschlagen? Erkläre einen Fehler in einfachen Worten.
::

::prompt{label="ChatGPT"}
Wer steht auf der Warteliste, für welche Termine, und ist etwas für sie frei geworden?
::

Die Antworten sind nur so gut wie die Daten in Little Hotelier. Sieht eine Zahl falsch aus, bitten Sie ChatGPT, die Reservierungen zu zeigen, die es verwendet hat.

## ChatGPT verbunden oder per Copy-and-paste: Wo liegt der Unterschied?

Ohne Verbindung exportieren Sie einen Bericht aus Little Hotelier, fügen ihn in ChatGPT ein und fragen. Das taugt für eine einmalige Analyse, aber die Daten sind eine Momentaufnahme, Ihr Export kann Felder auslassen, und die eingefügte Gästeliste bleibt im Chat.

Mit der MCP-App fragt ChatGPT Hotelier Tools genau nach dem, was es braucht, wenn es das braucht: die Anreisen von heute, den Saldo eines Gastes, die Preise der nächsten Woche. Sie exportieren nichts, und die Antwort spiegelt Little Hotelier in diesem Moment wider.

Wollen Sie trotzdem Tabellen, lesen Sie [Reservierungen nach Excel exportieren](/blog/export-little-hotelier-reservations-excel).

## Kann ChatGPT Änderungen vornehmen, und wie werden sie freigegeben?

In Tarifen mit vollem MCP: ja. Hotelier Tools bietet Schreibwerkzeuge wie das Aktualisieren einer Reservierung (zuerst ein Vorher-nachher-Vorschlag, dann ein Schritt zum Anwenden), das Erfassen einer Zahlung, das Vormerken eines Aufenthalts für die [Rechnung beim Check-out](/blog/send-invoice-to-guest-at-checkout) und das Übernehmen von Preisen.

::callout{type="warning" title="Die Bestätigung in ChatGPT ist die einzige Freigabe"}
Im Dashboard von Hotelier Tools wartet jede Änderung auf eine Freigabekarte. Außerhalb gibt es keine: **Ein Schreibwerkzeug läuft, wenn ChatGPT es aufruft.** OpenAI sagt, "write actions by default require confirmation", und warnt, falsche Schreibaktionen "could destroy data". Lesen Sie jede Bestätigung, bevor Sie sie akzeptieren.
::

Praktische Regeln:

- **Lassen Sie die App-Berechtigungen auf Always ask.** Die [App-Berechtigungen](https://help.openai.com/en/articles/20001495) von OpenAI reichen von **Always ask** bis **Allow all actions**. Letzteres überspringt Rückfragen und birgt "elevated risk". ChatGPT behandelt jedes Werkzeug, das nicht als reine Leseaktion gekennzeichnet ist, als Schreibaktion, rechnen Sie also auch bei manchen Abfragen mit einer Rückfrage.
- **Lassen Sie sich Freigaben für Schreibaktionen in langen Unterhaltungen nicht merken.** Eine gemerkte Auswahl gilt nur für diesen Chat, aber ein Chat kann viel anrichten.
- **Achten Sie auf Anweisungen, die in Gästenachrichten versteckt sind.** OpenAI warnt vor Prompt Injection. Schlägt ChatGPT etwas vor, worum Sie nicht gebeten haben, lehnen Sie ab.

Manche Aktionen sind für ChatGPT nie verfügbar, egal was Sie freigeben. Nicht umkehrbare Werkzeuge sind für jeden externen Client gesperrt, darunter das Mailen einer Rechnung an einen Gast, Rückerstattungen, die INE-Meldung, das Versenden von Team-Einladungen, das Mailen eines Rechnungslinks an einen Gast, das Beantworten einer Booking.com-Frage und die Wartelistenprüfung, die Gäste anschreibt. Sie bleiben im [Assistenten des Dashboards](/blog/ai-assistant-hotel-front-desk), hinter einer Karte.

## Datenschutz: Wohin gehen die Daten?

Ruft ChatGPT ein Werkzeug von Hotelier Tools auf, gelangt das Ergebnis, etwa Gästenamen, Daten und Beträge, in die Unterhaltung und wird von OpenAI verarbeitet.

Laut dem Artikel von OpenAI zu [verbundenen Apps](https://help.openai.com/en/articles/11487775) gilt Stand Oktober 2026:

- Bei **Business, Enterprise und Edu** "does not use information accessed from connectors to train models by default".
- Bei **Free, Plus, Go und Pro** "may use information accessed from apps to train our models", wenn **Improve the model for everyone** aktiviert ist. Schalten Sie es in den [Datenkontrollen](https://help.openai.com/en/articles/7730893) aus, bevor Sie Hoteldaten verbinden.
- Der Speicher von ChatGPT kann Details behalten, die es über eine App gelesen hat. Prüfen Sie **Memory** in den Einstellungen, falls Ihnen das wichtig ist.

Gästedaten sind personenbezogene Daten, und Ihr Hotel bleibt dafür verantwortlich. Fragen Sie nur nach dem, was Sie brauchen.

::demo-cta{path="/developer/mcp-setup"}
::

## Fehlerbehebung

- **Developer mode fehlt.** Ihr Tarif enthält ihn vielleicht nicht, oder bei Business können nur Admins ihn nutzen. Bei Enterprise und Edu bitten Sie einen Admin, ihn freizugeben.
- **Keine oder nur einige Hotelier-Tools-Werkzeuge erscheinen.** Ihr Tarif erlaubt womöglich nur Lese- und Abrufrechte. Fragen Sie das Help Center von OpenAI zu Ihrem Tarif oder nutzen Sie [Claude](/blog/connect-claude-to-little-hotelier), das eigene Connectors mit Schreibwerkzeugen in jedem Tarif erlaubt.
- **ChatGPT funktioniert nach einem Monat nicht mehr mit der App.** Die Anmeldung galt 30 Tage. Verbinden Sie sich neu unter **Settings → Plugins** (oder **Apps**).
- **Fehler "No Little Hotelier credentials configured".** Verbinden Sie in Hotelier Tools zuerst Little Hotelier unter **Credentials**.
- **"lh_frozen" oder Ähnliches.** Die Anmeldung bei Little Hotelier ist nach einem fehlgeschlagenen Login pausiert, oft wegen eines abgelaufenen Passworts. Speichern Sie das neue Passwort unter **Credentials** oder klicken Sie auf **Check now & resume**.

## Zusammenfassung

- Aktivieren Sie den Entwicklermodus, erstellen Sie eine App mit der URL `https://dashboard.hotelier.tools/api/mcp` und **OAuth** und klicken Sie auf **Allow access**.
- Prüfen Sie Ihren Tarif: Voller Lese- und Schreibzugriff über MCP gilt für Business, Enterprise und Edu, Pro und eventuell Plus bekommen laut OpenAI nur Leserechte.
- Lassen Sie die App-Berechtigungen auf **Always ask**. Rückerstattungen und andere nicht umkehrbare Aktionen sind ohnehin gesperrt.
- Neu bei MCP? Beginnen Sie mit [Was ist ein MCP-Server?](/blog/what-is-mcp-server-hotels). Alle Werkzeuge finden Sie auf der Seite [API & MCP](/tools/bot/api-mcp).
