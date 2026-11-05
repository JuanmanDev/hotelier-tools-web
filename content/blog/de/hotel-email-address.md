---
title: "Eine Hotel-E-Mail-Adresse für Lieferantenrechnungen und Portal-Logins: So funktionieren reine Empfangsadressen"
seoTitle: "Hotel-E-Mail-Adresse für Lieferantenrechnungen und Logins"
description: "Geben Sie Ihrem Hotel eine private Empfangsadresse für Lieferantenrechnungen und eine pro Portal-Login. Kein IMAP-Passwort, nichts wird geteilt."
date: 2026-11-01
category: operations
tags: [e-mail, lieferantenrechnungen, little hotelier, booking.com, expedia, sicherheit]
keywords: [e-mail adresse für rechnungen hotel, eigene e-mail für eingangsrechnungen, rechnungseingang per e-mail, e-mail adresse nur empfangen, eigene e-mail für little hotelier benutzer, e-mail adresse booking.com extranet benutzer, rechnungen an buchhaltung weiterleiten, rechnungspostfach hotel]
feature: dashboard
demoPath: /credentials
cover: /images/blog/demo/en/supplier-invoices-mailbox-settings.webp
coverAlt: "Einstellungen Received invoices: die Karte Suggestions mit eingeschaltetem Suggest invoices that have not arrived und 24 Monaten Verlauf, und die Karte Mailboxes mit verbundenem reservas@example.com, eingeschaltetem Read for invoices, INBOX als zu lesendem Ordner, einem ersten Scan über 120 Tage zurück und leeren Listen Never read mail from und Always read mail from"
faq:
  - q: "Was ist eine reine Empfangsadresse für ein Hotel?"
    a: "Eine Adresse, die nur E-Mails annimmt und nie welche sendet. In Hotelier Tools kann jedes Haus seine eigene bekommen, etwa inv-7k2m9qx4hp@in.hotelier.tools für Lieferantenrechnungen. Was dort ankommt, landet im Konto dieses Hauses, ohne IMAP-Passwort oder Microsoft-Anmeldung."
  - q: "Kann ein anderes Hotel sehen, was an meine Adresse geschickt wird?"
    a: "Nein. Jede Adresse und jeder Login gehört genau einem Haus. Die Adresse besteht aus zufälligen Zeichen, verrät also nicht den Namen Ihres Hotels, und niemand kann daraus Ihre anderen Adressen erraten."
  - q: "Wird in.hotelier.tools mein Login bei Little Hotelier oder Booking.com?"
    a: "Nein. Die Domain von Hotelier Tools wird nirgends Ihr Haupt-Login oder Ihre Wiederherstellungs-E-Mail. Ein Service-Login ist ein zusätzlicher Nutzer, den Sie in Ihrem eigenen Extranet anlegen und jederzeit wieder entfernen können."
  - q: "Was passiert mit E-Mails an eine Adresse, die es nicht gibt?"
    a: "Sie werden stillschweigend verworfen, ohne Rückläufer. So kann niemand ausprobieren, welche Adressen existieren. E-Mails an eine ersetzte Rechnungsadresse kommen noch 30 Tage lang an, danach werden auch sie verworfen."
  - q: "Gibt es eine Grenze, wie viele E-Mails eine Adresse empfangen kann?"
    a: "Ja. Jedes Haus kann auf dem Mailserver von Hotelier Tools 100 Nachrichten im Monat empfangen. Darüber hinaus werden Nachrichten gespeichert und verarbeitet, wenn der neue Monat beginnt oder der Support die Grenze anhebt. Ihr eigenes verbundenes Postfach zählt nie mit."
  - q: "Gehört Hotelier Tools zu Little Hotelier, Booking.com oder Expedia?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder, Little Hotelier, Booking.com oder Expedia und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels."
---

Hotelier Tools gibt jedem Haus eigene, reine Empfangsadressen unter der Domain `in.hotelier.tools`. Eine ist für Lieferantenrechnungen: Lieferanten schicken ihre PDFs, Fotos und E-Rechnungen dorthin, und jede wartet unter **Received invoices** (Eingangsrechnungen) auf Ihre Prüfung. Kein IMAP-Passwort und keine Microsoft-Anmeldung nötig. Die anderen sind je eine pro Portal (Little Hotelier, Booking.com, Expedia), für einen eigenen Login „Hotelier Tools als Nutzer“. Stand November 2026 werden Einladungen an diese Adressen für eine Person zurückgehalten und nicht automatisch angenommen.

## Was ist eine reine Empfangsadresse für ein Hotel?

Eine Adresse, die E-Mails annimmt und nie welche sendet. Jede sieht so aus:

```text
inv-7k2m9qx4hp@in.hotelier.tools
```

- **Der erste Teil sagt, wofür sie da ist.** `inv` steht für Lieferantenrechnungen; `lh`, `bk` und `ex` für die Logins bei Little Hotelier, Booking.com und Expedia. Dieser Code entscheidet, wohin eine Nachricht geht. Absender und Inhalt entscheiden das nie.
- **Der Rest ist zufällig.** Zehn Zeichen, ohne `0/o` oder `1/l/i`, die man verwechseln könnte. Sie enthält weder den Namen noch die ID Ihres Hotels: Nur die Datenbank von Hotelier Tools weiß, zu welchem Haus sie gehört.
- **Jeder Zweck hat sein eigenes Token.** Kennt ein Lieferant Ihre Rechnungsadresse, verrät ihm das nichts über Ihre Login-Adressen.
- **Von ihr wird nichts gesendet.** Die Domain veröffentlicht eine Regel, nach der kein Server in ihrem Namen E-Mails senden darf. Also kann auch niemand sonst von Ihrer Adresse aus senden.

## Warum nicht das eigene Postfach des Hotels nutzen?

Das können Sie, und viele Hotels fangen so an. Bewährt hat sich eine separate Adresse nur für Rechnungen (zum Beispiel `rechnungen@ihrhotel.de`) mit einer Weiterleitungsregel, damit Lieferantenpost nicht zwischen Buchungs-E-Mails untergeht:

- **Gmail:** **Einstellungen > Alle Einstellungen aufrufen > Weiterleitung und POP/IMAP**, Adresse hinzufügen und bestätigen, dann einen Filter anlegen, der nur passende E-Mails weiterleitet ([Google-Hilfe](https://support.google.com/mail/answer/10957)).
- **Outlook:** Legen Sie eine Regel an, die Nachrichten Ihrer Lieferanten weiterleitet ([Microsoft-Support](https://support.microsoft.com/office/45aa9664-4911-4f96-9663-ece42816d746)).

Der Haken ist der nächste Schritt. Damit eine Software dieses Postfach lesen kann, geben Sie ihr ein IMAP-Passwort oder genehmigen eine Microsoft- oder Google-Anmeldung, und dann sieht sie das ganze Postfach. Eine reine Empfangsadresse dreht das um: Lieferanten schicken an eine Adresse, die nur Rechnungen empfängt, und in Ihrem eigenen Postfach wird nichts geöffnet.

Hotelier Tools unterstützt beides. Wenn Sie lieber alles in Ihrem eigenen Postfach behalten, verbinden Sie es unter **Messaging > Channels** und schalten es unter **Settings > Received invoices** ein. Der Zugriff ist nur lesend: Nichts wird als gelesen markiert, verschoben oder gelöscht (siehe [Lieferantenrechnungen per E-Mail sammeln](/blog/supplier-invoices-by-email)).

::screenshot{src="/images/blog/demo/en/supplier-invoices-mailbox-settings.webp" alt="Einstellungen Received invoices: die Karte Suggestions mit eingeschaltetem Suggest invoices that have not arrived und 24 Monaten Verlauf, und die Karte Mailboxes mit verbundenem reservas@example.com, eingeschaltetem Read for invoices, INBOX als zu lesendem Ordner, einem ersten Scan über 120 Tage zurück und leeren Listen Never read mail from und Always read mail from" caption="Der andere Weg: Ihr eigenes verbundenes Postfach, nur auf Rechnungen gelesen. Die Rechnungsadresse braucht gar kein Postfach." path="/settings/received-invoices"}
::

## Wird zwischen Hotels etwas geteilt?

Nein. Jede Adresse und jeder Login gehört genau einem Haus:

- Es gibt keinen Login von Hotelier Tools, der die Extranets zweier Hotels sehen kann. Ein gestohlener Login oder ein gesperrtes Konto betrifft nur ein Hotel.
- **Unsere Domain wird nirgends Ihr Haupt-Login oder Ihre Wiederherstellungs-E-Mail.** Würden unsere E-Mails je kompromittiert oder hörten Sie auf, Hotelier Tools zu nutzen, verlören Sie nicht den Zugang zu Ihrem eigenen Extranet.
- Jeder Server (Deployment) hat seine eigene Domain und sein eigenes Postfach. E-Mails werden nie von der Datenbank eines Servers an die eines anderen weitergegeben.

## So richten Sie die Adresse für Lieferantenrechnungen ein

1. Öffnen Sie **Settings > Received invoices** (`/settings/received-invoices`) und suchen Sie die Karte **Invoice address**.
2. Drücken Sie **Create the address**. Sie erhalten eine Adresse für das Haus, aus zufälligen Zeichen.
3. Drücken Sie **Copy** und schicken Sie sie Ihren Lieferanten: „Bitte senden Sie Ihre Rechnungen an diese Adresse.“ Die Liste **Received invoices** (`/received-invoices`) zeigt dieselbe Adresse unter **Suppliers can email invoices to**.
4. Achten Sie darauf, dass die Aufgabe **Read the hotel mailbox** eingeschaltet ist. Sie holt herein, was an der Adresse ankommt; alle 5 Minuten ist der empfohlene Zeitplan.
5. Behalten Sie **Recent mail** auf derselben Karte im Blick: Jede Nachricht zeigt Absender, Dateien und was mit ihr geschehen ist.

Sie können auch Rechnungen, die Sie schon haben, an die Adresse weiterleiten. Hotelier Tools ordnet nach der Adresse zu, an die die Nachricht zugestellt wurde, sodass auch eine weitergeleitete oder per BCC gesendete Nachricht das richtige Haus erreicht. Haben Sie eine E-Mail als Datei gespeichert, nimmt **Add an email by hand** eine `.eml`-Datei an und durchläuft dieselben Prüfungen.

Brauchen Sie eine neue Adresse, etwa nach einer Spamwelle? Drücken Sie **New address**. Die alte stellt noch 30 Tage lang zu, mit einem Hinweis an jeder Nachricht, dass sie an eine ersetzte Adresse ging, und hört dann auf.

## Was passiert mit E-Mails an die Rechnungsadresse?

Jede Nachricht gilt als nicht vertrauenswürdig:

- **Zuerst die Betrugsprüfung.** Eine Nachricht mit hohem Risiko wird für eine Person zurückgehalten, nie importiert, und ihr Original wird aufbewahrt.
- **Die Absenderprüfung machen wir selbst.** Ob die Domain des Absenders ihre Echtheitsprüfung (DMARC) bestanden hat, wird aus dem Header gelesen, den unser eigener Mailserver hinzufügt, nie aus der Zeile **From**. Bei einem Lieferanten, dessen Prüfung fehlschlägt, erscheint eine Warnung, die eine Person bestätigen muss, bevor die Rechnung bestätigt oder bezahlt werden kann.
- **Anhänge laufen durch den normalen Import.** PDFs, Fotos (PNG, JPEG, WebP) und E-Rechnungen (Facturae, UBL, CII) werden zu **Received invoices** hinzugefügt. Jede startet als **To review**: Nichts wird von selbst bestätigt oder bezahlt.
- **Nie doppelt.** Eine Datei, die schon über Ihr eigenes Postfach oder von Hand ankam, wird an ihrem Inhalt erkannt und nicht erneut hinzugefügt.
- **Größe und Tarif.** Eine Nachricht über 25 MB wird nicht aufbewahrt. In einem Tarif ohne Rechnungsstellung werden E-Mails an die Adresse gespeichert und zurückgehalten, und keine KI liest etwas.

E-Mails an eine Adresse, die es nicht gibt, werden stillschweigend verworfen, ohne Rückläufer. Niemand kann ausprobieren, welche Adressen echt sind.

## Service-Logins: eine Adresse pro Portal

Der zweite Einsatz sind Logins. Statt Hotelier Tools Ihr eigenes Passwort für Little Hotelier, Booking.com oder Expedia zu geben, legen Sie in Ihrem Extranet einen neuen Nutzer mit einer privaten Adresse an, und dieser Nutzer ist Hotelier Tools, nur für Ihr Haus. Sie wählen seine Berechtigungen und können ihn mit einem Klick entfernen.

| Portal | Adresse | Wo sie verwaltet wird |
|---|---|---|
| Little Hotelier | `lh-…@in.hotelier.tools` | `/credentials/hotelier-advanced` |
| Booking.com-Extranet | `bk-…@in.hotelier.tools` | `/credentials/booking-extranet` |
| Expedia Partner Central | `ex-…@in.hotelier.tools` | `/credentials/expedia-extranet` |

Jede dieser Seiten hat eine Karte wie **Hotelier Tools as a user in Little Hotelier**: Sie geben die Unterkunftsnummer des Portals ein, drücken **Get the login address** und laden diese Adresse in Ihrem Extranet ein.

Wichtig ist, wo das Ganze steht, Stand November 2026:

- **Was automatisch läuft:** die Adresse, die Prüfung, dass eine Nachricht wirklich von der Domain des Portals kommt, und die Sicherheitsregeln. Auf eine Sicherheitswarnung („New sign-in“, „Password changed“) wird nie geklickt: Sie wird an den Inhaber des Hauses weitergeleitet. Einer Passwortzurücksetzung, die niemand angefordert hat, wird nie gefolgt, und der Inhaber wird informiert.
- **Was heute eine Person macht:** Bisher wurde noch keine Einladung eines Portals erfasst und ausgewertet, deshalb kann Hotelier Tools keine von selbst annehmen. Jede Nachricht an eine Login-Adresse wird **für eine Person zurückgehalten**, und die Karte sagt das auch. Bis sich das ändert, verbinden Sie sich mit dem Formular weiter unten auf derselben Seite. Bei Little Hotelier heißt das: den Aktivierungslink des neuen Nutzers einfügen (siehe [einen Nutzer in Little Hotelier hinzufügen](/blog/add-user-little-hotelier)).

Sobald das gebaut ist, wird eine Einladung nur angenommen, wenn sie für die von Ihnen angegebene Unterkunftsnummer gilt. So kann eine geleakte Adresse nicht das Haus eines Fremden in Ihr Konto ziehen.

Lieber Ihre eigene Adresse? Mit der Option **Where the portal writes to this login** auf der Karte kann ein Login **Your own mailbox** nutzen, eines Ihrer verbundenen Postfächer. Gelesen werden nur die Nachrichten, die das Portal sendet. Gmail und Microsoft 365 / Outlook können nachweisen, dass eine Nachricht echt ist; bei anderen Anbietern wird jede Portalnachricht für eine Person zurückgehalten.

## Wo finde ich alle meine Adressen?

**Credentials** (`/credentials`) endet mit **Hotel mailbox addresses**: der Rechnungsadresse und den drei Login-Adressen, jeweils mit Status (etwa **Waiting for the invitation** oder **Active**) und einem Link **Open** zur Seite, die sie verwaltet. Die Liste ist nur lesbar.

Zwei Sichtbarkeitsregeln gelten:

- Eine Login-Adresse sehen nur Personen in Ihrem Team, die Verbindungen verwalten. Andere sehen ihren Status mit dem Hinweis „The address is shown only to people who manage connections“.
- Die Rechnungsadresse sehen Personen, die Eingangsrechnungen sehen dürfen.

Hat Ihr Server keine Maildomain eingerichtet, sagt der Bereich das einmal, statt leere Adressen aufzulisten.

## Wie viele E-Mails kann jedes Haus empfangen?

Jedes Haus kann auf dem Mailserver von Hotelier Tools **100 Nachrichten im Monat** empfangen. Das schützt den Server; es ist kein Preis.

- Sie sehen es unter **Plan and billing** (`/subscriptions`) bei **Received mail**: die Anzahl, die wartenden Nachrichten und die Liste des Monats.
- **Über der Grenze** wird eine Nachricht gespeichert, nicht verloren. Sie wartet und wird automatisch verarbeitet, die älteste zuerst, wenn der neue Monat beginnt oder die Grenze angehoben wird. Der Inhaber erhält in dem Monat eine E-Mail.
- **Brauchen Sie mehr?** Nutzen Sie **Contact support** auf derselben Karte.
- E-Mails aus Ihrem eigenen verbundenen Postfach und hochgeladene `.eml`-Dateien zählen nie mit.

## Fragen Sie den Assistenten

Für die Adressen gibt es Werkzeuge für den KI-Assistenten (`/chat`) und für MCP-Clients wie Claude:

- „An welche Adresse schicken Lieferanten Rechnungen?“ → `list_hotel_mail_addresses`
- „Ist diese Woche etwas an der Rechnungsadresse angekommen?“ → `list_hotel_mail_messages`
- „Erstelle eine neue Adresse für Lieferantenrechnungen“ → `rotate_hotel_mail_address`, erst nachdem Sie die Karte freigegeben haben
- „Ist der Hotelier-Tools-Nutzer in Booking.com verbunden?“ → `get_service_login`

Kein Werkzeug gibt je eine Login-Adresse zurück: Sie wird nur einer Person auf der Verbindungsseite angezeigt. Eine Einladung anzunehmen, ist ebenfalls nie Aufgabe eines Werkzeugs.

::demo-cta{path="/received-invoices"}
::

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder, Little Hotelier, Booking.com oder Expedia und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels, und seine Adressen ersetzen nie Ihren eigenen Login oder Ihre Wiederherstellungs-E-Mail.
::

Siehe auch: [Lieferantenrechnungen per E-Mail](/blog/supplier-invoices-by-email), [einen Nutzer in Little Hotelier hinzufügen](/blog/add-user-little-hotelier), [das Dashboard](/tools/bot/dashboard).

## Zusammenfassung

- Jedes Haus bekommt private, reine Empfangsadressen unter `in.hotelier.tools`: `inv-…` für Lieferantenrechnungen und eine pro Portal-Login.
- Lieferantenrechnungen an `inv-…` landen nach einer Betrugsprüfung als **To review** in **Received invoices**, ohne IMAP-Passwort.
- Zwischen Hotels wird nichts geteilt, und die Domain wird nie Ihr Login oder Ihre Wiederherstellungs-E-Mail.
- Login-Adressen gibt es schon, aber Einladungen werden für eine Person zurückgehalten, bis der Annahmeschritt für jedes Portal gebaut ist.
- 100 Nachrichten im Monat pro Haus; alle Adressen finden Sie unten auf `/credentials`.
