---
title: "CTA, CTD, Mindestaufenthalt und Stop Sell im Hotel: Bedeutung in Little Hotelier"
seoTitle: "CTA, CTD und Stop Sell im Hotel: Bedeutung"
description: "CTA sperrt Anreisen, CTD sperrt Abreisen, Mindestaufenthalt setzt die kürzeste Buchung, Stop Sell stoppt den Verkauf. Einstellung in Little Hotelier."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [cta ctd hotel bedeutung, closed to arrival bedeutung, cta hotel, stop sell hotel bedeutung, mindestaufenthalt hotel, little hotelier cta ctd, siteminder stop sell]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Price recommendations in Hotelier Tools für das Zimmer Doble Estándar, 3. bis 16. Oktober 2026: aktueller und empfohlener Preis pro Nacht, eine Spalte CTA / CTD mit Schaltern A und D, der Mindestaufenthalt, eine Spalte Channel und eine Schaltfläche Apply to Little Hotelier"
faq:
  - q: "Was ist der Unterschied zwischen Closed to Arrival und Stop Sell?"
    a: "Closed to Arrival stoppt nur neue Anreisen an diesem Datum: Ein Gast, der am Tag davor anreist, darf weiter durchbleiben. Stop Sell schließt die Rate an diesem Datum für den Verkauf, sodass keine neue Buchung diese Nacht überhaupt enthalten kann."
  - q: "Ist Stop Sell dasselbe wie Verfügbarkeit 0?"
    a: "Für den Gast sieht das Ergebnis gleich aus: Die Nacht lässt sich nicht buchen. Auf Ihrer Seite ist es anders. Ein Stop Sell behält Ihre Zimmerzahl, das Wiederöffnen ist also ein einziger Schalter. Eine Zimmersperrung (Room Closure) in Little Hotelier senkt die an die Kanäle gesendete Verfügbarkeit und setzt keinen Stop Sell."
  - q: "Wann sollte ein kleines Hotel Closed to Arrival einsetzen?"
    a: "Nutzen Sie es, um längere Aufenthalte zu schützen: am Samstag eines vollen Wochenendes, damit Gäste am Freitag anreisen müssen, oder an Veranstaltungsnächten, wenn Sie lieber ganze Aufenthalte verkaufen. Prüfen Sie es, wenn das Datum näher rückt, und heben Sie es auf, falls die Nacht noch leer ist."
  - q: "Warum erscheint meine Beschränkung nicht bei Booking.com oder Airbnb?"
    a: "Nicht jede Kanalrate akzeptiert jede Beschränkung. Im Inventar-Raster von Little Hotelier bedeutet ein Strich in einer Kanalzelle, dass der Kanal dieses Update nicht unterstützt, und Updates jenseits des maximalen Buchungsfensters eines Kanals werden nicht synchronisiert. Prüfen Sie in der Konfiguration der Kanalrate im Channel Manager, welche Update-Typen sie unterstützt."
  - q: "Ändert Hotelier Tools Beschränkungen von allein?"
    a: "Nein. Beschränkungsregeln werden Nacht für Nacht auf der Seite Recommendations vorgeschlagen, und geschrieben wird erst, wenn Sie sie anwenden. Der Autopilot schreibt Mindestaufenthalte nur, wenn Sie es separat erlauben, und er berührt nie den Stop Sell der Kanäle. Hotelier Tools ist unabhängig und weder mit SiteMinder noch mit Little Hotelier verbunden."
---

In Little Hotelier bedeutet **CTA** (Closed to Arrival, Anreisesperre), dass Gäste an diesem Datum nicht einchecken können, und **CTD** (Closed to Departure, Abreisesperre), dass sie an diesem Datum nicht auschecken können. Der **Mindestaufenthalt** (Minimum Stay) ist die geringste Zahl an Nächten, für die ein Zimmer gebucht werden muss. Ein **Stop Sell** (Verkaufsstopp) schließt eine Rate an einem Datum für den Verkauf, während Ihre Zimmer im Inventar bleiben. Alles stellen Sie pro Zimmerrate unter **Front Desk > Inventory** ein, Datum für Datum oder mit **Bulk Update**.

| Begriff | Bedeutung | Typische Verwendung |
|---|---|---|
| **CTA** (Closed to Arrival) | „Gäste können an diesem Datum nicht anreisen.“ Gäste, die früher angereist sind, bleiben durch. | Gäste an einem vollen Wochenende zur Anreise am Freitag bringen. |
| **CTD** (Closed to Departure) | „Gäste können an diesem Datum nicht abreisen.“ Gäste dürfen durchbleiben, aber nicht an dem Tag abreisen. | Ein Wochenende zusammenhalten. |
| **Min stay** (Min LOS) | „Minimum or maximum nights a room must be booked for“ (Min/Max Stay), also Mindest- oder Höchstzahl an Nächten. | Zwei Nächte an Veranstaltungswochenenden. |
| **Max stay** | Die längste akzeptierte Buchung. | Bei kleinen Hotels selten. |
| **Stop sell** | Die Rate ist an diesem Datum für den Verkauf geschlossen, auf allen Kanälen oder nur auf einigen. Heißt in Front Desk **Close Channels** und im Channel Manager **Stop Sell**. | Ein Datum schnell schließen: Wartung, eine Sperre des Eigentümers, ein Kanal, den Sie pausieren wollen. |

Die zitierten Definitionen stammen aus dem Hilfecenter von Little Hotelier: [Preise, Verfügbarkeit und Beschränkungen im Inventar-Raster verwalten](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (aktualisiert im August 2026).

## CTA oder CTD: Was ist der Unterschied?

Beide Beschränkungen betreffen den **Tag der Anreise oder Abreise**, nicht die Nächte dazwischen.

Nehmen Sie ein Festival-Wochenende: Die Nächte von Freitag und Samstag sind stark gefragt, der Sonntag ist ruhig.

- **CTA am Samstag**: Niemand kann am Samstag anreisen. Ein Gast, der nur die Nacht auf Samstag will, kann sie nicht buchen, ein Gast mit Anreise am Freitag für zwei Nächte aber schon. Sie verkaufen das ganze Wochenende statt eines einzelnen Samstags, der den Freitag leer lässt.
- **CTD am Samstag**: Niemand kann am Samstag abreisen. Ein Gast, der am Freitag anreist, muss mindestens bis Sonntag bleiben.

Keine der beiden Beschränkungen betrifft Gäste, die schon eine Buchung haben. Sie filtern nur, welche neuen Buchungen angenommen werden. In Little Hotelier gelten CTA und CTD für alle Ihre Kanäle, auch für Ihre eigene Buchungsmaschine ([Videoanleitung zu CTA und CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Mindestaufenthalt: bei Anreise oder durchgehend?

Ein Mindestaufenthalt (Min LOS, Minimum Length of Stay) legt die geringste Nächtezahl einer Buchung fest. Kanäle wenden ihn auf eine von zwei Arten an:

- **Bei Anreise** („on arrival“): geprüft wird gegen das Anreisedatum. Ein Minimum von 2 am Freitag bedeutet, dass Anreisen am Freitag mindestens 2 Nächte buchen müssen. Eine Anreise am Samstag kann weiterhin eine Nacht buchen.
- **Durchgehend** („through“): geprüft wird gegen jede Nacht des Aufenthalts. Ein Minimum von 2 am Samstag bedeutet, dass jede Buchung, die die Nacht auf Samstag enthält, mindestens 2 Nächte lang sein muss, egal wo sie beginnt.

Das Raster von Little Hotelier kennt nur **Min Stay** und **Max Stay**. Wie ein Kanal sie liest, ist eine Einstellung des Kanals. Little Hotelier sendet Mindest- und Höchstaufenthalt standardmäßig als „through“ an Booking.com ([Verbindung mit Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Nutzt Ihr Booking.com-Konto „Min. stay from arrival“, setzen Sie **Use Length of Stay on Arrival** auf **Yes**, unter **My Apps > Channel Manager > Channels > Booking.com > Configure** ([Fehler bei der Kanalzuordnung](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Ist ein Mindestaufenthalt höher als der Höchstaufenthalt, wird die Rate automatisch deaktiviert.

## Was ist ein Stop Sell, und wie unterscheidet er sich?

Ein Stop Sell schließt eine Rate an einem Datum für den Verkauf und lässt Ihre Zimmerzahl unverändert. Little Hotelier sitzt auf dem Channel Manager von SiteMinder, und eine Nacht kann eine völlig gute Rate haben und trotzdem nirgends verkauft werden, weil sie auf Stop Sell steht.

Little Hotelier bietet dafür zwei Wege, und Sie können immer nur einen nutzen:

- **Close Channels** unter **Front Desk > Inventory** stoppt den Verkauf „on all connected channels (including your booking engine)“ (auf allen verbundenen Kanälen, einschließlich Ihrer Buchungsmaschine) für die gewählten Zimmerraten und Daten.
- **Stop Sell** im **Channel Manager** schließt bestimmte Kanäle. Gehen Sie zu **My Apps > Channel Manager > Inventory**, klicken Sie auf die blaue Schaltfläche **Channels** neben der Rate, suchen Sie die Kanalrate und wählen Sie **Stop Sell**. Für einen Zeitraum nutzen Sie **Bulk Update** und setzen **Stop Sell** auf **On** ([Stop Sells für bestimmte Kanäle](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Stop Sells im Channel Manager funktionieren nicht, solange **Close Channels** in Front Desk für dieselben Daten angekreuzt ist.

| | Stop Sell | Zimmersperrung (weniger Verfügbarkeit) | CTA |
|---|---|---|---|
| Neue Buchungen mit dieser Nacht | Blockiert | Blockiert, sobald die Verfügbarkeit 0 erreicht | Erlaubt, wenn sie früher anreisen |
| Ihre Zimmerzahl | Unverändert | Für diesen Zimmertyp reduziert | Unverändert |
| Gut für | Schnell schließen, nach Kanal | Zimmer, die wirklich außer Betrieb sind | Aufenthalte steuern |

Eine **Room Closure** (**Front Desk > Calendar**) „reduces the availability sent to the channels for the closed room type. It does not apply a stop sell“ (senkt die an die Kanäle gesendete Verfügbarkeit für den gesperrten Zimmertyp und setzt keinen Stop Sell) ([Zimmersperrungen](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## So stellen Sie CTA, CTD und Mindestaufenthalt in Little Hotelier ein

### Datum für Datum

1. Gehen Sie zu **Front Desk > Inventory**.
2. Wählen Sie eine Ansicht, die die benötigten Felder zeigt.
3. Wechseln Sie zu den Daten und bearbeiten Sie die Zellen der Zimmerrate: Min Stay, Max Stay, CTA, CTD.
4. Klicken Sie auf **Save**.

### Ein Zeitraum mit Bulk Update

1. Klicken Sie in **Front Desk > Inventory** auf **Bulk Update**.
2. **When?**: Wählen Sie den Zeitraum.
3. **Which days?**: Wählen Sie die Wochentage, zum Beispiel nur Samstage.
4. **Which room rates?**: Wählen Sie die Raten.
5. **What changes?**: Legen Sie die Beschränkung fest, zum Beispiel einen Mindestaufenthalt von 2 oder CTA an.
6. Klicken Sie auf **Update**.

Gut zu wissen:

- Beschränkungen gelten **pro Zimmerrate**, nicht pro Zimmertyp.
- Abgeleitete Raten sind im Raster ausgegraut. Ändern Sie die Rate, von der sie abgeleitet sind.
- Front Desk nimmt standardmäßig Updates für etwa 716 Tage im Voraus an.

## Wie Beschränkungen bei Booking.com, Expedia und Airbnb ankommen

Little Hotelier sendet Ihre Beschränkungen über den Channel Manager an jeden verbundenen Kanal, mit einigen Grenzen ([Inventar-Raster](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [Update-Zeitraum der Kanäle](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **Nicht jede Kanalrate unterstützt jede Beschränkung.** Ein Strich (-) in einer Kanalzelle bedeutet, dass der Kanal diesen Update-Typ nicht unterstützt. Im Channel Manager zeigt der Bildschirm **Configure** einer Kanalrate, welche Update-Typen sie akzeptiert.
- **Buchungsfenster unterscheiden sich.** Der Channel Manager sendet Updates standardmäßig 400 Tage im Voraus (bis zu 750). Updates jenseits des Maximums eines Kanals werden nicht synchronisiert, bei Booking.com liegt es bei 545 Tagen.
- **Expedia** nimmt Stop Sells von Little Hotelier nur auf Ratenebene an. Stop Sells auf Zimmerebene verwalten Sie im Expedia Partner Central ([Probleme mit Expedia-Stop-Sells](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** erhält mit Enhanced Sync Preise, Verfügbarkeit und Beschränkungen, aber ein Feld, das Sie im eigenen Extranet von Airbnb ändern, ist danach im Channel Manager ausgegraut ([Zuordnung zu Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Öffnen Sie nach einer wichtigen Beschränkung das Extranet des Kanals und prüfen Sie ein Datum.

## Wann sollte ein kleines Hotel sie einsetzen?

- **Volle Wochenenden und Veranstaltungen.** Ein Mindestaufenthalt von zwei Nächten an den Veranstaltungsnächten oder CTA an der vollsten Nacht verkauft ganze Aufenthalte statt einzelner Nächte, die Lücken hinterlassen.
- **Einzelne leere Nächte.** Eine einzelne freie Nacht zwischen zwei vollen kann nur als Ein-Nacht-Aufenthalt verkauft werden. Blockiert ein Mindestaufenthalt sie, heben Sie das Minimum für diese Nacht auf, wenn das Datum näher rückt.
- **Kurz vor dem Datum.** Beschränkungen, die einen Monat vorher sinnvoll waren, können wenige Tage vorher leichte Buchungen blockieren. Prüfen Sie sie wöchentlich.
- **Tage, an denen niemand Check-ins machen kann.** CTA an diesen Tagen, wenn Ihre Hausregeln es zulassen.
- **Schnell schließen.** Nutzen Sie Stop Sell statt eines Preises von 999, wenn Sie ein Datum aus dem Verkauf nehmen müssen.

## Der schnellere Weg: Beschränkungsregeln und Stop Sell in Hotelier Tools

Hotelier Tools arbeitet mit Ihrem eigenen Login auf Little Hotelier. Statt Beschränkungen Datum für Datum zu setzen, schreiben Sie die Regel einmal, und sie wird Nacht für Nacht neben dem Preis vorgeschlagen. Die Preisfunktionen sind in **Alpha**.

### 1. Regel einmal schreiben

Öffnen Sie **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`). Sie können Anreisen oder Abreisen sperren:

- an festen Wochentagen oder bestimmten Daten
- nach Auslastung oder verbleibenden Zimmern
- nur, wenn die Nächte davor und danach noch offen sind

Hotelier Tools erkennt das Wochentagsmuster, das Sie in Little Hotelier schon nutzen, und bietet an, es zu übernehmen. Optionale **Wochenendpakete** (weekend packages) setzen einen Mindestaufenthalt. Sie sind standardmäßig aus, und eingeschaltet gilt standardmäßig Freitag und Samstag, 2 Nächte. Ein Paket senkt nie einen längeren Mindestaufenthalt, den jemand von Hand gesetzt hat. Nichts auf dieser Seite schreibt nach Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Seite Arrivals, departures & stays in Hotelier Tools: die Regel No arrivals mit Every week und Wochentagsschaltern von Mon bis Sun, On these dates, den Bedingungen An event fills the town und The nights either side are still open, Occupancy above und Rooms left at most, dann der Beginn von No departures" caption="Legen Sie einmal fest, welche Nächte keine Anreise oder Abreise zulassen. Nichts auf dieser Seite schreibt nach Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Nacht für Nacht prüfen und anwenden

Auf **Recommendations** (`/price-recommendations`) zeigt jede Nacht ihren Anreise- (A) und Abreisestatus (D) neben dem Preis. Schalten Sie sie um, wo Sie anderer Meinung sind, haken Sie die Nächte an und klicken Sie auf **Apply to Little Hotelier…**. Nichts ändert sich, bevor Sie bestätigen.

Für einzelne Daten hat **Date rules** (`/pricing/settings/dates`) eine „stay“-Regel, die nur einen Mindestaufenthalt oder eine Anreiseregel für diese Nächte setzt.

### 3. Stop Sell der Kanäle prüfen und setzen

Klicken Sie auf der Seite Recommendations auf **Check channel manager**. Hotelier Tools liest den Stop-Sell-Status von SiteMinder mit derselben Little-Hotelier-Sitzung, nur wenn Sie klicken, und eine Spalte Channel zeigt für jede Nacht offen, geschlossen oder gemischt. Wählen Sie ein Ziel (alle öffnen, alle schließen, beibehalten). Es wird **nach** der Preisänderung in Little Hotelier gesendet und nur für Nächte, in denen diese Änderung erfolgreich war.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Dialog Apply to Little Hotelier für drei Nächte von Doble Estándar (Sa 3. Okt., So 4. Okt., Mo 5. Okt.) mit aktuellen und neuen Preisen und den Spalten Arr und Dep, einer Warnung, dass Preise und Beschränkungen sich sofort und ohne automatisches Rückgängigmachen ändern, einer Option Send me an email, einer Option Also update sales in the Channel Manager (SiteMinder) und Apply 3 change(s)" caption="Preise, Anreise- und Abreiseänderungen und der SiteMinder-Stop-Sell werden in einem Dialog bestätigt. Nichts ändert sich, bevor Sie anwenden." path="/price-recommendations"}
::

Der Autopilot ändert nie den Stop Sell und schreibt Mindestaufenthalte nur, wenn Sie es separat erlauben.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Zusammenfassung

- **CTA** stoppt Anreisen an einem Datum, **CTD** stoppt Abreisen, der **Mindestaufenthalt** legt die kürzeste Buchung fest, und **Stop Sell** schließt die Rate für den Verkauf, während Ihre Zimmerzahl bleibt.
- In Little Hotelier stellen Sie sie pro Zimmerrate unter **Front Desk > Inventory** ein oder mit **Bulk Update** für einen Zeitraum. Der Stop Sell pro Kanal liegt im Channel Manager.
- Prüfen Sie, welche Beschränkungen jeder Kanal akzeptiert, und kontrollieren Sie sie wöchentlich, wenn die Daten näher rücken.
- Mit der [dynamischen Preisgestaltung von Hotelier Tools](/tools/bot/dynamic-pricing) schreiben Sie die Regel einmal, sehen sie neben dem Preis und setzen den SiteMinder-Stop-Sell von derselben Seite aus. Sie ist bis zum 10. Januar 2027 für jedes Hotel kostenlos.
- Als Nächstes: [dynamische Preise für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier) und [Little-Hotelier-Tipps und versteckte Funktionen](/blog/little-hotelier-tips).
