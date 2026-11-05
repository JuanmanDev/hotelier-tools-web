---
title: "Gästenachrichten im Hotel mit KI beantworten (WhatsApp, Booking.com, Expedia und E-Mail)"
seoTitle: "Gästenachrichten im Hotel sicher mit KI beantworten"
description: "Lassen Sie die KI Antworten an Gäste auf WhatsApp, Booking.com, Expedia und per E-Mail aus Buchung und FAQ entwerfen. Eine Person gibt jede frei."
date: 2026-11-02
updated: 2026-11-05
category: ai
tags: [ki, gästenachrichten, whatsapp, booking.com, e-mail, posteingang, vorlagen]
keywords: [ki gästenachrichten hotel beantworten, ki gästekommunikation hotel, whatsapp gästenachrichten automatisieren hotel, vorlagen gästenachrichten hotel, chatgpt hotel gästeanfragen beantworten, ki posteingang kleine hotels, whatsapp ki assistent hotel, booking.com nachrichten automatisch beantworten ki]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/ai-replies-inbox-thread-plan.webp
coverAlt: "Gäste-Posteingang von Hotelier Tools mit geöffneter WhatsApp-Unterhaltung von Noah Nilsson: markiert als Identity verified, seine Buchung vom 3. bis 7. November eingecheckt und bezahlt, ein KI-Plan als Entwurf für eine späte Anreise mit Begründung und bearbeitbarer Antwort auf Spanisch, dazu das private Assistant-Panel"
featured: true
faq:
  - q: "Kann eine KI Gästenachrichten im Hotel allein beantworten?"
    a: "Sie kann, sollte es aber nicht standardmäßig tun. Eine sichere Einrichtung lässt die KI eine Antwort aus Ihren Buchungsdaten und Ihrer FAQ entwerfen, und eine Person gibt sie frei. Hotelier Tools startet jeden Kanal im Modus Draft; automatisches Senden ist eine eigene Entscheidung pro Kanal und auf einfache Fragen beschränkt."
  - q: "Woher weiß die KI, um welche Buchung es in einer Nachricht geht?"
    a: "Sie ordnet den Absender genau einer Reservierung zu: Bei WhatsApp muss die Telefonnummer mindestens in den letzten 8 Ziffern übereinstimmen, bei E-Mail die Adresse exakt. Passen zwei Gäste oder keiner, sieht die KI keine Buchung und antwortet nur aus Ihrer FAQ."
  - q: "Erfindet die KI Preise oder Leistungen?"
    a: "Das sollte sie nicht, und der Posteingang ist so gebaut, dass sie es nicht verstecken kann. Die KI antwortet nur aus Ihren FAQ-Quellen, Hausnotizen und Objektdaten, schreibt „wird geklärt“ bei allem, was Sie nicht aufgeführt haben, und ein Preis, den keine Abfrage Ihrer Buchungsmaschine geliefert hat, wird neben dem Entwurf markiert."
  - q: "Sendet die KI Antworten auf Booking.com oder Expedia selbst?"
    a: "Nein. Bei Booking.com entwirft die KI nur, und eine Person drückt auf Send. Expedia-Nachrichten (Beta) können nur gesammelt oder entworfen werden, und die Antwort schreiben Sie in Partner Central."
  - q: "Brauche ich die offizielle WhatsApp Business API?"
    a: "Für Hotelier Tools nicht. Es verbindet sich über WAHA, einen selbst betriebenen Server, der eine WhatsApp-Web-Sitzung ausführt. Das erspart den Genehmigungsprozess von Meta, aber WhatsApp erlaubt keine inoffiziellen Clients, eine so genutzte Nummer könnte also gesperrt werden."
  - q: "Gehört Hotelier Tools zu WhatsApp, Booking.com oder Expedia?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels."
---

Der sichere Weg, KI für Gästenachrichten zu nutzen: Sie entwirft, sie entscheidet nicht. Geben Sie ihr die Buchung des Gastes und Ihre eigenen Fakten (FAQ, Hausregeln, Preise aus Ihrer Buchungsmaschine), lassen Sie sie eine Antwort in der Sprache des Gastes vorbereiten, und eine Person gibt sie frei, bevor sie hinausgeht. In Hotelier Tools landen WhatsApp-, E-Mail-, Booking.com- und Expedia-Nachrichten in einem Posteingang, jede ihrer Reservierung zugeordnet, mit einem KI-Entwurf, der auf einen Klick wartet.

Die Angaben zu Drittanbietern wurden im November 2026 geprüft.

## Was fragen Hotelgäste am häufigsten?

In einem kleinen Hotel sind die meisten Nachrichten dieselben zwölf Fragen:

- **Check-in- und Check-out-Zeiten**, und ob ein früher Check-in möglich ist.
- **Späte Anreise:** „Wir sind gegen 23:30 Uhr da, ist dann noch jemand an der Rezeption?“
- **Parken, WLAN, Frühstück:** Zeiten und Preise.
- **Anfahrt** und wie man an die Schlüssel kommt.
- **Änderungen und Stornierungen:** Daten, zusätzliche Gäste, Erstattungen.
- **Rechnungen**, oft mit Firmenname und Steuernummer.
- **Verfügbarkeit und Preise** von Leuten, die noch nicht gebucht haben.

Die erste Gruppe hat eine richtige Antwort, die Sie schon kennen. Die letzten beiden brauchen eine Person oder Live-Daten: Eine Stornierung ist eine Zusage, und ein Preis hängt von Daten, Personenzahl und dem ab, was noch frei ist. Diese Trennung entscheidet, wie viel eine KI allein tun darf.

## Wie schnell erwarten Gäste eine Antwort?

- **WhatsApp:** Gäste schreiben oft unterwegs und warten mit dem Handy in der Hand. Auf der offiziellen WhatsApp Business Platform öffnet die Nachricht eines Gastes ein 24-Stunden-Kundenservicefenster, in dem Ihre Antworten kostenlos sind ([WhatsApp pricing](https://whatsappbusiness.com/products/platform-pricing/)).
- **Booking.com:** Das Hilfecenter von Little Hotelier weist darauf hin, dass Booking.com einen internen Antwort-Score führt, der misst, wie schnell Sie reagieren, und dass **No reply needed** das 24-Stunden-Fenster einer Nachricht schließt ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Mehr dazu in [Booking.com-Gästenachrichten verwalten](/blog/booking-com-guest-messages).
- **Expedia:** Gäste schreiben über die Expedia-App, und Sie antworten in Partner Central unter **Messages**. Siehe [Expedia-Gästenachrichten](/blog/expedia-guest-messages).
- **E-Mail:** langsamer, aber wer nach Verfügbarkeit fragt, fragt wahrscheinlich auch andere Hotels.

Ein Entwurf, der im Posteingang wartet, verkürzt die Antwortzeit, ohne die Kontrolle auszulassen.

## Warum die KI nie eine Antwort erfinden darf

Eine falsche Check-in-Zeit ist ärgerlich. Ein zugesagter Parkplatz, den Sie nicht haben, ein Preis unter Ihrer Rate oder die Buchungsdaten eines anderen Gastes sind teuer. Chatbots füllen Lücken mit plausiblem Text, deshalb braucht eine KI im Gästekontakt drei Grenzen:

1. **Geschlossene Quellen.** Sie antwortet nur aus dem, was Sie ihr gegeben haben: Ihre FAQ-Seite, Ihre Notizen, die Buchung. Alles andere „wird geklärt“.
2. **Eine Buchung, und nur für die richtige Person.** Sie sieht eine Reservierung nur, wenn nachgewiesen ist, dass der Absender dieser Gast ist.
3. **Keine Hände.** Sie schlägt vor; eine Person (oder eine enge, begrenzte Regel) entscheidet, was den Gast oder die Buchung erreicht.

## Ein Vorlagenset für den Anfang

Egal welches Werkzeug Sie nutzen: Schreiben Sie diese einmal. Sie werden Ihre FAQ, die Fakten Ihrer KI und Ihre Schnellantworten:

```text [guest-reply-templates.txt]
CHECK-IN
Guten Tag [Name], der Check-in ist ab [Uhrzeit] möglich, der Check-out bis [Uhrzeit]. Wenn Sie früher ankommen, können Sie Ihr Gepäck bei uns lassen.

SPÄTE ANREISE
Danke für die Info, [Name]. Die Rezeption ist bis [Uhrzeit] besetzt. Danach [so kommen Sie an den Schlüssel]. Wir haben Ihre Ankunftszeit notiert.

PARKEN
Wir haben [kostenlose / kostenpflichtige, X pro Nacht] Parkplätze [am Haus / an Adresse]. [Sie können nicht reserviert werden / bitte nennen Sie uns Ihr Kennzeichen].

FRÜHSTÜCK
Frühstück gibt es von [Uhrzeit] bis [Uhrzeit] für [Preis] pro Person. In Ihrer Rate [enthalten / nicht enthalten].

RECHNUNG
Gern. Bitte senden Sie uns Firmenname, Steuernummer bzw. USt-IdNr. und Rechnungsanschrift, dann stellen wir die Rechnung beim Check-out aus.

STORNIERUNG (braucht eine Person)
Danke, [Name]. Wir haben Ihre Anfrage an unser Team weitergegeben und bestätigen Ihnen in Kürze die Bedingungen Ihrer Buchung.

Wir fragen Sie niemals per WhatsApp oder SMS nach Ihren Kartendaten.
```

## Der schnellere Weg: ein Posteingang, in dem die KI entwirft und eine Person freigibt

Die **Inbox** (Posteingang) von Hotelier Tools (`/messaging`, Alpha) sammelt Gästenachrichten aus vier Quellen, ordnet jede ihrer Reservierung zu und bereitet eine Antwort und einen Plan vor, die Sie freigeben.

::screenshot{src="/images/blog/demo/en/ai-replies-inbox-thread-plan.webp" alt="Gäste-Posteingang mit geöffneter WhatsApp-Unterhaltung von Noah Nilsson: die Markierung Identity verified, seine Buchung vom 3. bis 7. November (4 Nächte, 1 Gast, eingecheckt, bezahlt), der KI-Plan als Entwurf, zu 93 % als späte Anreise eingestuft, der Bereich Why, eine bearbeitbare Antwort auf Spanisch und die Aktion send_message, rechts das Assistant-Panel" caption="Nachricht, Buchung und Entwurf nebeneinander. Nichts wird gesendet, bevor Sie es freigeben." path="/messaging"}
::

### Schritt 1: Verbinden Sie Ihre Kanäle

| Kanal | Wo | Wie die Verbindung läuft |
|---|---|---|
| **WhatsApp** | **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) | Ein WAHA-Server, seine Sitzung und sein API-Schlüssel sowie ein Webhook |
| **E-Mail** | **Credentials > Guest mailbox** (`/credentials/messaging-email`) | Anmeldung mit **Google** oder **Microsoft** (OAuth) oder **Other (IMAP/SMTP)** |
| **Booking.com** | **Credentials > Booking.com extranet** (`/credentials/booking-extranet`) | Ihr eigener Extranet-Login mit zweitem Faktor |
| **Expedia** (Beta) | **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`), dann **Switch on Expedia messages** | Ihr eigener Partner-Central-Login |

Expedia ist der neueste Kanal: Seit Version 1.71 (November 2026) kommen Expedia-Verläufe mit Gast, Aufenthalt und letzter Nachricht an, und Antworten senden Sie weiterhin aus Partner Central ([Details](/blog/expedia-guest-messages)).

Postfächer von Outlook und Microsoft 365 brauchen die Microsoft-Anmeldung, weil Microsoft Passwort-Logins über IMAP ablehnt. Ein neues Postfach startet im Modus **Off** (nur sammeln): Entwürfe verbrauchen KI-Guthaben, also entscheiden Sie, ob Sie es einschalten.

### Was WAHA ist und welche Risiken es hat

[WAHA](https://waha.devlike.pro/docs/overview/introduction/) (WhatsApp HTTP API) ist ein Server, den Sie selbst betreiben. Er führt eine WhatsApp-Web-Sitzung aus und lässt andere Software die Nachrichten dieser Nummer über HTTP lesen und senden. Es funktioniert wie ein auf einem Computer geöffnetes WhatsApp Web: Ihr Handy und Ihre App funktionieren weiter.

1. Geben Sie auf der WhatsApp-Seite die **WAHA base URL**, den **Session name** und den **WAHA API key** ein und speichern Sie.
2. Drücken Sie im Panel **WhatsApp session** auf **Start session**. Sobald ein QR-Code erscheint, öffnen Sie WhatsApp auf dem Hoteltelefon, gehen zu **Einstellungen > Verknüpfte Geräte > Gerät hinzufügen** und scannen ihn.
3. Drücken Sie **Connect webhook**, damit WAHA neue Nachrichten an den Posteingang schickt, dann **Test connection**.
4. Wählen Sie optional unter **Message history**, wie weit zurück (7, 30 oder 90 Tage oder **Last year**), und drücken Sie **Import history**. Importierte Chats dienen nur als Kontext: Nichts wird analysiert, beantwortet oder als ungelesen markiert.

::screenshot{src="/images/blog/demo/en/ai-replies-whatsapp-session.webp" alt="Zugangsdaten-Seite WhatsApp (WAHA) mit den Feldern WAHA base URL, Session name und WAHA API key und dem Panel WhatsApp session mit Connected, Webhook not configured, den Schaltflächen Restart session und Connect webhook sowie Message history mit Last 90 days und Import history" caption="Nummer koppeln, Webhook verbinden und frühere Chats importieren, alles in einem Panel." path="/credentials/messaging-whatsapp"}
::

Die Risiken, klar gesagt:

- **Es ist nicht die offizielle API.** Die Dokumentation von WAHA sagt: „WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.“ (WhatsApp erlaubt keine Bots oder inoffiziellen Clients, es sollte also nicht als völlig sicher gelten.) Eine Nummer könnte gesperrt werden. Antworten Sie Gästen, die Ihnen schreiben, und senden Sie nie Massennachrichten ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **Sichern Sie WAHA ab.** Das Panel warnt, wenn **WAHA answers without an API key**: Jeder, der den Server erreicht, könnte die Nachrichten dieser Nummer lesen und senden.
- **Die Webhook-URL ist ein Geheimnis.** Ihr Token lässt Nachrichten in Ihren Posteingang. Gruppenchats werden ignoriert.

Für die offizielle API von Meta lesen Sie über den Messaging hub von Little Hotelier in [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier).

### Schritt 2: So entsteht jede Antwort

1. **Der Absender wird einer Reservierung zugeordnet.** Das Panel zeigt das Ergebnis: **Identity verified**, **Ambiguous — refused** (mehr als ein Gast passt, daher wird keine Buchung gezeigt), **No reservation match** (die KI antwortet nur aus Ihrer FAQ) oder **Not checked**. Bei WhatsApp muss die Nummer mindestens in den letzten 8 Ziffern mit der Telefonnummer der Buchung übereinstimmen, bei E-Mail die Adresse exakt. Ein Booking.com-Verlauf nennt seine eigene Reservierung; ein Expedia-Verlauf wird nur über die `EXP-`-Referenz zugeordnet, die er enthält.
2. **Zuerst wartet sie auf Sie.** Eine WhatsApp-Nachricht wird nach 5 Minuten analysiert, eine E-Mail nach einer Stunde. Antwortet in der Zwischenzeit jemand, lautet der Plan **already answered**, und es wird nichts berechnet.
3. **Die KI liest** diese eine Reservierung, Ihre Quellen unter **FAQ & knowledge** (`/messaging/faq`), Ihre Hausnotizen und Ihre Objektdaten aus **Settings > Property & AI knowledge**.
4. **Sie gibt einen Plan aus einer geschlossenen Liste zurück:** Nachricht senden, für das Personal markieren, Reservierungsnotiz hinzufügen oder Ankunftszeit setzen. Sie hat keine Werkzeuge, kann nicht stornieren, Daten ändern oder Zahlungen anfassen, und jede Aktion gilt nur für die zugeordnete Buchung.
5. **Eine Person entscheidet.** Bearbeiten Sie die Antwort, dann **Approve (respect delay)** oder **Confirm & send now**. Unbearbeitete Pläne verfallen nach 48 Stunden.

Bevor etwas hinausgeht, blockiert eine Prüfung jede Antwort, die die Referenz einer anderen Buchung enthält, oder irgendeine lange Zahl, wenn der Absender nicht verifiziert ist.

### Schritt 3: Legen Sie fest, wie viel die KI darf

Unter **Channels** (`/messaging/channels`) hat jedes verbundene Konto seinen eigenen Modus:

| Modus | Was passiert |
|---|---|
| **Off — collect only** | Nachrichten werden gesammelt und angezeigt. Nichts wird analysiert oder gesendet. |
| **Draft — I approve everything** (Standard) | Die KI bereitet eine Antwort und einen Plan vor; ohne Ihre Freigabe passiert nichts. |
| **Automatic reply — no reservation changes** | Die KI sendet nach einer Verzögerung, nur bei einfachen Fragen (Check-in- oder Check-out-Zeit, WLAN, Parken, späte Anreise, Anfahrt, Ausstattung), für einen verifizierten Gast und mit ausreichender Sicherheit. |
| **Autonomous — replies AND changes reservations** | Sie fügt bei einer verifizierten Buchung außerdem ohne Freigabe Notizen hinzu oder setzt die Ankunftszeit. Kontrollieren Sie sie mehrmals täglich. |

Grenzen pro Kanal: **Booking.com**-Unterhaltungen sendet die KI nie, egal in welchem Modus; eine Person drückt auf Send. **Expedia** bietet nur Off und Draft, und die Antwort schreiben Sie in Partner Central. Automatische Antworten stoppen bei 4 pro Stunde, 12 pro Tag oder 3 in Folge ohne Antwort des Gastes, damit eine Abwesenheitsschleife nicht ausufert.

### Schritt 4: Signaturen, Formatierung und Dateien pro Kanal

Unter **Signatures** (`/messaging/signatures`) verwalten Sie mehrere benannte Signaturen (Rezeption, Geschäftsführung, Englisch…), jede einmal pro Kanal so geschrieben, wie dieser Kanal sie darstellt, und wählen eine Standardsignatur. Die Beispiele werden aus Ihren Objektdaten befüllt. Booking.com-Antworten in der Buchungsunterhaltung eines Gastes werden in reinem Text signiert, öffentliche Q&A-Antworten nie.

::screenshot{src="/images/blog/demo/en/ai-replies-signatures.webp" alt="Seite Signatures mit geöffnetem Beispiel Reception: Name Reception als Default gesetzt, die Reiter Email, WhatsApp und Booking.com, die E-Mail-Version mit Hotelname, Telefon der Rezeption und Link zur Website, ein leeres Feld Text version und links Beispielsignaturen (Reception, Formal, Short, Full contact, Bilingual)" caption="Eine Signatur, drei Versionen: formatiert für E-Mail, mit WhatsApp-Markierungen, reiner Text für Booking.com." path="/messaging/signatures"}
::

Die KI schreibt einen Entwurf, und der Posteingang passt ihn an den Kanal an:

| Kanal | Formatierung | Dateien |
|---|---|---|
| E-Mail | Formatierter Text: fett, Links, Listen, Zitate | Ja, bis zu 18 MB zusammen |
| WhatsApp | WhatsApp-eigenes `*fett*`, `_kursiv_`, Listen | Bis zu 10 Dateien zu je 16 MB, dazu im Browser aufgenommene Sprachnachrichten |
| Booking.com | Reiner Text; eine öffentliche Q&A-Antwort bleibt unter 320 Zeichen | Nein |

Auf WhatsApp erscheinen Fotos, Sprachnachrichten und Dokumente, die Gäste senden, im Verlauf. WhatsApp hält Medien nur eine Weile vor, eine alte Datei kann also weg sein.

### Schritt 5: Bringen Sie ihr Ihre Antworten bei

- **FAQ & knowledge** (`/messaging/faq`): Fügen Sie Ihre FAQ-Seite oder reinen Text hinzu und füllen Sie die Hausnotizen aus. Die Seite sagt es deutlich: Die KI „answers from these sources and nothing else“ (antwortet aus diesen Quellen und aus nichts anderem).
- **AI training** (`/messaging/training`): Drücken Sie unter **Review recent** auf **Correct**, wenn die KI eine Nachricht falsch verstanden hat; daraus wird ein Beispiel. Fügen Sie **Rules** in einem Satz hinzu und prüfen Sie mit der **Test bench**, ob sie noch zustimmt (jeder Test ist eine echte Analyse und verbraucht Guthaben).
- **Antwortgedächtnis:** ohne Einrichtung. Antworten, die Ihr Team im letzten Jahr gesendet hat, werden mit der Frage davor gepaart, und die ähnlichsten werden der KI gezeigt, wenn eine ähnliche Nachricht kommt, ohne Namen, Daten, Referenzen und Kontakte des anderen Gastes. Schreiben Sie einmal „6 € pro Nacht für einen Hund, zahlbar bei Anreise“, und der nächste Gast, der fragt, bekommt dieselbe Antwort. Hausnotizen haben weiterhin Vorrang vor einer alten Antwort.

::screenshot{src="/images/blog/demo/en/ai-replies-training-examples.webp" alt="Seite AI training im Reiter Examples mit drei gespeicherten Beispielen: eine französische Frage zum Parken auf Booking.com ohne Aktionen, eine deutsche späte Anreise auf WhatsApp, die die Ankunftszeit auf 01:00 setzt, und eine spanische Rechnungsanfrage per E-Mail, die der Buchung eine Notiz hinzufügt, jeweils mit kurzem Hinweis" caption="Korrekturen werden zu Beispielen, die die KI bei der nächsten ähnlichen Nachricht sieht." path="/messaging/training"}
::

### Was der Posteingang sonst noch erledigt

- **Preise kommen aus Ihrer Buchungsmaschine.** Der private Assistent rechts nennt Preise von Ihrer Direktbuchungsseite für diese Daten und diese Personenzahl, mit Ihrem Promo-Code. Ein Preis, den keine Abfrage geliefert hat, wird als nicht verifiziert markiert.
- **Ausgebuchte Nächte:** Fragt ein Gast nach einem ausgebuchten Datum und ist Ihre [Warteliste](/blog/hotel-waitlist-sold-out-dates) eingeschaltet, bietet der Assistent eine Karte an, um den Gast darauf zu setzen.
- **Rechnungsanfragen:** Die beiden festen Rechnungsanfragen von Booking.com werden ohne KI gelesen und werden zu einer Karte, die den Aufenthalt für seine [Rechnung beim Check-out](/blog/send-invoice-to-guest-at-checkout) vormerkt, plus einer Antwort in der Sprache des Gastes.
- **AI credits** (KI-Guthaben, `/messaging/credits`): Eine Analyse ist eine gelesene, geplante und entworfene Gästenachricht, abgerechnet zu den echten Kosten des Modells, zuerst aus einem monatlichen Kontingent, dann aus Ihrem Guthaben. Die Paketpreise dort sind noch vorläufig.

::demo-cta{path="/messaging"}
::

Alles, was der Posteingang kann, steht auf der Seite [Guest inbox](/tools/bot/guest-inbox). Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu WhatsApp, Meta, Booking.com, Expedia Group, SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit den eigenen Logins Ihres Hotels für Little Hotelier, Booking.com und Expedia.
::

Siehe auch: [Betrugsnachrichten erkennen](/blog/hotel-scam-messages), [der KI-Assistent für die Rezeption](/blog/ai-assistant-hotel-front-desk), [WhatsApp mit Little Hotelier](/blog/whatsapp-little-hotelier).

## Zusammenfassung

- Schreiben Sie Ihre Antworten auf die zwölf häufigen Fragen einmal auf: Sie sind Ihre Vorlagen, Ihre FAQ und die Fakten Ihrer KI.
- Lassen Sie die KI entwerfen, und lassen Sie bei Stornierungen, Erstattungen, Preisen und Beschwerden eine Person entscheiden.
- Die KI sollte eine Buchung nur sehen, wenn der Absender genau einer Reservierung zugeordnet ist, und bei allem, was Sie nicht aufgeführt haben, „wird geklärt“ antworten.
- In Hotelier Tools teilen sich WhatsApp (über WAHA), E-Mail, Booking.com und Expedia (Beta) einen Posteingang, jeder Kanal startet im Modus **Draft**, und Booking.com und Expedia sendet die KI nie.
- Signaturen, Formatierung, Training und Antwortgedächtnis lassen die Entwürfe wie Ihre Rezeption klingen.
