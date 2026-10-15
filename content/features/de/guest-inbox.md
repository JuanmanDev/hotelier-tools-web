---
title: "Ein Gästepostfach für WhatsApp, E-Mail und Booking.com"
---

Das Gästepostfach vereint WhatsApp-, E-Mail- und Booking.com-Nachrichten in einer Liste, mit der Little-Hotelier-Reservierung neben jeder Unterhaltung. Eine KI entwirft jede Antwort aus Ihrer eigenen FAQ und Ihren Haus-Notizen, und standardmäßig genehmigt eine Person sie, bevor etwas gesendet wird.

## So funktioniert es

1. **Verbinden Sie Ihre Kanäle.** Booking.com über **Credentials > Booking.com extranet** mit Ihrem Partner-Login und dem zweiten Faktor. E-Mail von Google, Microsoft oder einem beliebigen IMAP/SMTP-Konto. WhatsApp über eine WhatsApp-Web-Sitzung (WAHA).
2. **Nachrichten erscheinen neben der Buchung.** Ein Booking.com-Thread wird automatisch mit seiner Reservierung verknüpft. Fragen aus dem Gäste-Q&A Ihrer Booking.com-Seite kommen im selben Postfach an.
3. **Wählen Sie pro Konto einen Antwortmodus** unter **Channels** (`/messaging/channels`): **Off**, **Draft** (die Voreinstellung, nichts passiert, bis Sie genehmigen), **Automatic reply** nach einer von Ihnen gewählten Verzögerung oder **Autonomous**.
4. **Bringen Sie ihm Ihre Antworten bei.** Fügen Sie unter **FAQ & knowledge** (`/messaging/faq`) Ihre FAQ-Seite oder Ihren Text und Haus-Notizen wie WLAN und Parkplatz hinzu. Korrigieren Sie eine Antwort einmal, und der Assistent lernt daraus.
5. **Rechnungsanfragen werden ohne KI erkannt.** Rechnungsanfragen von Booking.com bieten an, den Aufenthalt für die Rechnung beim Check-out anzumelden.

Einrichtungsdetails je Kanal: [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier) und [Gästenachrichten von Booking.com verwalten](/blog/booking-com-guest-messages).

## Was Sie brauchen

- Little Hotelier, verbunden unter **Credentials**, und Ihre Unterkunftskarte, ausgefüllt unter `/settings/property`.
- Für WhatsApp einen WAHA-Server: seine Adresse, einen Sitzungsnamen und einen API-Schlüssel.
- KI-Guthaben. Jede Nachricht, die die KI liest und entwirft, verbraucht es, angezeigt unter **AI credits** (`/messaging/credits`).

## Grenzen und Gutes zu wissen

- **Status: Alpha.** Es ist eine frühe Version und ändert sich häufig.
- **Booking.com bleibt von einer Person gesendet.** Die KI sendet nie von selbst an Booking.com-Gäste. Das Zurücksenden Ihrer genehmigten Antwort an Booking.com aus dem Postfach ist noch nicht zugesagt: Kopieren Sie sie in das Extranet oder Pulse.
- **Die Gäste-KI hat keine Werkzeuge.** Sie liefert einen Plan aus einer geschlossenen Liste und kann nie stornieren, Daten ändern oder Zahlungen anfassen.
- **Sie sieht eine Buchung nur für einen verifizierten Absender:** eine Telefonnummer, die in den letzten 8 Ziffern übereinstimmt, die genaue E-Mail-Adresse oder einen Booking.com-Thread.
- **Ein Service, den Sie nicht aufgeführt haben,** wird mit "zu bestätigen" beantwortet, nie mit Ja.
- **WhatsApp über WAHA ist nicht die offizielle API.** Eine so genutzte Nummer könnte gesperrt werden, antworten Sie also nur Gästen, die zuerst schreiben. Gruppenchats werden ignoriert.
- Automatische Antworten stoppen bei 4 pro Stunde oder 12 pro Tag.
