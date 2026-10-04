---
title: "CTA, CTD, Mindestaufenthalt und Stop-Sell im Hotel: Bedeutung in Little Hotelier"
seoTitle: "CTA, CTD und Stop-Sell im Hotel: Bedeutung und Einstellung"
description: "CTA sperrt Anreisen, CTD Abreisen, der Mindestaufenthalt legt die kürzeste Buchung fest, Stop-Sell stoppt den Verkauf. So geht es in Little Hotelier."
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [cta ctd hotel bedeutung, closed to arrival bedeutung, cta hotel, stop sell hotel bedeutung, mindestaufenthalt hotel, little hotelier cta ctd, siteminder stop sell]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "Preisempfehlungen in Hotelier Tools für das Zimmer Doble Estándar, 3. bis 16. Oktober 2026: aktueller und empfohlener Preis pro Nacht, eine Spalte CTA / CTD mit den Schaltern A und D, der Mindestaufenthalt, eine Spalte Channel und die Schaltfläche Apply to Little Hotelier"
faq:
  - q: "Was ist der Unterschied zwischen Closed to Arrival und Stop-Sell?"
    a: "Closed to Arrival verhindert nur neue Anreisen an diesem Datum: Ein Gast, der am Vortag anreist, kann trotzdem über diese Nacht hinaus bleiben. Ein Stop-Sell nimmt die Rate an diesem Datum aus dem Verkauf, sodass keine neue Buchung diese Nacht enthalten kann."
  - q: "Ist ein Stop-Sell dasselbe wie Verfügbarkeit 0?"
    a: "Für den Gast sieht das Ergebnis gleich aus: Die Nacht ist nicht buchbar. Für Sie ist es ein Unterschied. Bei einem Stop-Sell bleibt Ihre Zimmerzahl erhalten, zum Wiederöffnen genügt also ein Handgriff. Eine Zimmersperrung (Room Closure) in Little Hotelier senkt die an die Kanäle gemeldete Verfügbarkeit und setzt keinen Stop-Sell."
  - q: "Wann sollte ein kleines Hotel Closed to Arrival einsetzen?"
    a: "Nutzen Sie CTA, um längere Aufenthalte zu sichern: am Samstag eines gefragten Wochenendes, damit Gäste schon am Freitag anreisen, oder in Veranstaltungsnächten, wenn Sie lieber komplette Aufenthalte verkaufen. Prüfen Sie die Sperre, wenn das Datum näher rückt, und heben Sie sie auf, falls die Nacht noch frei ist."
  - q: "Warum erscheint meine Beschränkung nicht bei Booking.com oder Airbnb?"
    a: "Nicht jede Kanalrate akzeptiert jede Beschränkung. In der Inventarübersicht von Little Hotelier bedeutet ein Strich in einer Kanalzelle, dass der Kanal dieses Update nicht unterstützt, und Updates jenseits des maximalen Buchungsfensters eines Kanals werden nicht synchronisiert. In der Konfiguration der Kanalrate im Channel-Manager sehen Sie, welche Update-Typen sie unterstützt."
  - q: "Ändert Hotelier Tools Beschränkungen selbstständig?"
    a: "Nein. Beschränkungsregeln werden Nacht für Nacht auf der Seite Recommendations vorgeschlagen, und in Little Hotelier geschrieben wird erst, wenn Sie sie übernehmen. Der Autopilot setzt Mindestaufenthalte nur, wenn Sie das gesondert erlauben, und rührt den Stop-Sell der Kanäle nie an. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen."
---

In Little Hotelier bedeutet **CTA** (Closed to Arrival, Anreisesperre), dass Gäste an diesem Datum nicht einchecken können, und **CTD** (Closed to Departure, Abreisesperre), dass sie an diesem Datum nicht auschecken können. Der **Mindestaufenthalt** (Minimum Stay) ist die Mindestzahl an Nächten, für die ein Zimmer gebucht werden muss. Ein **Stop-Sell** (Verkaufsstopp) nimmt eine Rate an einem Datum aus dem Verkauf, Ihre Zimmer bleiben aber im Inventar. Alle vier stellen Sie pro Zimmerrate unter **Front Desk > Inventory** ein, einzeln pro Datum oder gesammelt mit **Bulk Update**.

| Begriff | Bedeutung | Typische Verwendung |
|---|---|---|
| **CTA** (Closed to Arrival) | „Gäste können an diesem Datum nicht anreisen.“ Wer früher angereist ist, kann über das Datum hinaus bleiben. | An einem gefragten Wochenende die Anreise auf Freitag lenken. |
| **CTD** (Closed to Departure) | „Gäste können an diesem Datum nicht abreisen.“ Gäste können über das Datum hinaus bleiben, aber an diesem Tag nicht abreisen. | Wochenendaufenthalte zusammenhalten. |
| **Mindestaufenthalt** (Min Stay, Min LOS) | „Mindest- oder Höchstzahl an Nächten, für die ein Zimmer gebucht werden muss“ (Min/Max Stay). | Zwei Nächte an Veranstaltungswochenenden. |
| **Höchstaufenthalt** (Max Stay) | Die längste akzeptierte Buchung. | Bei kleinen Hotels selten. |
| **Stop-Sell** | Die Rate ist an diesem Datum nicht buchbar, auf allen Kanälen oder nur auf einigen. Heißt im Front Desk **Close Channels** und im Channel-Manager **Stop Sell**. | Ein Datum schnell schließen: Wartung, Eigennutzung, ein Kanal, den Sie pausieren möchten. |

Die zitierten Definitionen stammen aus dem Hilfecenter von Little Hotelier: [Preise, Verfügbarkeit und Beschränkungen in der Inventarübersicht verwalten](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (aktualisiert im August 2026).

## CTA oder CTD: Was ist der Unterschied?

Beide Beschränkungen betreffen den **Tag der Anreise oder Abreise**, nicht die Nächte dazwischen.

Nehmen wir ein Festival-Wochenende: Freitag- und Samstagnacht sind stark gefragt, der Sonntag ist ruhig.

- **CTA am Samstag**: Niemand kann am Samstag anreisen. Wer nur die Samstagnacht buchen möchte, kann das nicht, ein Gast mit Anreise am Freitag für zwei Nächte dagegen schon. Sie verkaufen das ganze Wochenende statt einer einzelnen Samstagnacht, die den Freitag leer lässt.
- **CTD am Samstag**: Niemand kann am Samstag abreisen. Ein Gast, der am Freitag anreist, muss mindestens bis Sonntag bleiben.

Keine der beiden Beschränkungen betrifft Gäste, die schon eine Buchung haben. Sie filtern nur, welche neuen Buchungen angenommen werden. In Little Hotelier gelten CTA und CTD für alle Ihre Kanäle, auch für Ihre eigene Buchungsmaschine ([Videoanleitung zu CTA und CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video)).

## Mindestaufenthalt: ab Anreise oder durchgehend?

Ein Mindestaufenthalt (Min LOS, Minimum Length of Stay) legt fest, wie viele Nächte eine Buchung mindestens umfassen muss. Die Kanäle wenden ihn auf eine von zwei Arten an:

- **Ab Anreise** („on arrival“): Maßgeblich ist das Anreisedatum. Ein Minimum von 2 am Freitag bedeutet: Wer freitags anreist, muss mindestens 2 Nächte buchen; wer samstags anreist, kann weiterhin eine einzelne Nacht buchen.
- **Durchgehend** („through“): Maßgeblich ist jede Nacht des Aufenthalts. Ein Minimum von 2 am Samstag bedeutet, dass jede Buchung mit der Samstagnacht mindestens 2 Nächte umfassen muss, egal an welchem Tag sie beginnt.

Die Inventarübersicht von Little Hotelier kennt nur **Min Stay** und **Max Stay**. Wie ein Kanal diese Werte auslegt, hängt von den Kanaleinstellungen ab. Little Hotelier sendet Mindest- und Höchstaufenthalt standardmäßig als „through“ an Booking.com ([Verbindung mit Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)). Arbeitet Ihr Booking.com-Konto mit „Min. stay from arrival“, setzen Sie unter **My Apps > Channel Manager > Channels > Booking.com > Configure** die Option **Use Length of Stay on Arrival** auf **Yes** ([Fehler bei der Kanalzuordnung](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)). Ist ein Mindestaufenthalt höher als der Höchstaufenthalt, wird die Rate automatisch deaktiviert.

## Was ist ein Stop-Sell, und was unterscheidet ihn?

Ein Stop-Sell nimmt eine Rate an einem Datum aus dem Verkauf, ohne Ihre Zimmerzahl zu ändern. Little Hotelier baut auf dem Channel-Manager von SiteMinder auf. Eine Nacht kann deshalb eine einwandfreie Rate haben und sich trotzdem nirgends verkaufen, weil sie auf Stop-Sell steht.

Little Hotelier bietet dafür zwei Wege, von denen Sie immer nur einen nutzen können:

- **Close Channels** unter **Front Desk > Inventory** stoppt den Verkauf „on all connected channels (including your booking engine)“ (auf allen verbundenen Kanälen, einschließlich Ihrer Buchungsmaschine) für die gewählten Zimmerraten und Daten.
- **Stop Sell** im **Channel Manager** schließt bestimmte Kanäle. Gehen Sie zu **My Apps > Channel Manager > Inventory**, klicken Sie auf die blaue Schaltfläche **Channels** neben der Rate, suchen Sie die Kanalrate und wählen Sie **Stop Sell**. Für einen Zeitraum nutzen Sie **Bulk Update** und setzen **Stop Sell** auf **On** ([Stop-Sells für bestimmte Kanäle](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels)).

Stop-Sells im Channel-Manager greifen nicht, solange im Front Desk für dieselben Daten **Close Channels** aktiviert ist.

| | Stop-Sell | Zimmersperrung (weniger Verfügbarkeit) | CTA |
|---|---|---|---|
| Neue Buchungen mit dieser Nacht | Blockiert | Blockiert, sobald die Verfügbarkeit 0 erreicht | Erlaubt, wenn sie früher anreisen |
| Ihre Zimmerzahl | Unverändert | Für diesen Zimmertyp reduziert | Unverändert |
| Gut für | Schnell schließen, nach Kanal | Zimmer, die wirklich außer Betrieb sind | Aufenthalte steuern |

Eine **Room Closure** (**Front Desk > Calendar**) „reduces the availability sent to the channels for the closed room type. It does not apply a stop sell“ (senkt die an die Kanäle gemeldete Verfügbarkeit für den gesperrten Zimmertyp und setzt keinen Stop-Sell) ([Zimmersperrungen](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures)).

## So stellen Sie CTA, CTD und Mindestaufenthalt in Little Hotelier ein

### Für ein einzelnes Datum

1. Gehen Sie zu **Front Desk > Inventory**.
2. Wählen Sie eine Ansicht, die die benötigten Felder zeigt.
3. Springen Sie zu den gewünschten Daten und bearbeiten Sie die Zellen der Zimmerrate: Min Stay, Max Stay, CTA, CTD.
4. Klicken Sie auf **Save**.

### Einen Zeitraum mit Bulk Update ändern

1. Klicken Sie in **Front Desk > Inventory** auf **Bulk Update**.
2. **When?**: Wählen Sie den Zeitraum.
3. **Which days?**: Wählen Sie die Wochentage, zum Beispiel nur Samstage.
4. **Which room rates?**: Wählen Sie die Raten.
5. **What changes?**: Legen Sie die Beschränkung fest, zum Beispiel einen Mindestaufenthalt von 2, oder aktivieren Sie CTA.
6. Klicken Sie auf **Update**.

Gut zu wissen:

- Beschränkungen gelten **pro Zimmerrate**, nicht pro Zimmertyp.
- Abgeleitete Raten sind in der Übersicht ausgegraut. Ändern Sie die Rate, von der sie abgeleitet sind.
- Front Desk nimmt standardmäßig Updates für etwa 716 Tage im Voraus an.

## Wie Beschränkungen bei Booking.com, Expedia und Airbnb ankommen

Little Hotelier sendet Ihre Beschränkungen über den Channel-Manager an jeden verbundenen Kanal, mit einigen Einschränkungen ([Inventarübersicht](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [Update-Zeitraum der Kanäle](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period)):

- **Nicht jede Kanalrate unterstützt jede Beschränkung.** Ein Strich (-) in einer Kanalzelle bedeutet, dass der Kanal diesen Update-Typ nicht unterstützt. Im Channel-Manager zeigt die Ansicht **Configure** einer Kanalrate, welche Update-Typen sie akzeptiert.
- **Buchungsfenster unterscheiden sich.** Der Channel-Manager sendet Updates standardmäßig 400 Tage im Voraus (bis zu 750). Was über das Maximum eines Kanals hinausgeht, wird nicht synchronisiert; bei Booking.com liegt es bei 545 Tagen.
- **Expedia** übernimmt Stop-Sells von Little Hotelier nur auf Ratenebene. Stop-Sells auf Zimmerebene verwalten Sie in Expedia Partner Central ([Probleme mit Expedia-Stop-Sells](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues)).
- **Airbnb** erhält mit Enhanced Sync Preise, Verfügbarkeit und Beschränkungen, aber ein Feld, das Sie im eigenen Extranet von Airbnb ändern, ist danach im Channel-Manager ausgegraut ([Zuordnung zu Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb)).

Haben Sie eine wichtige Beschränkung gesetzt, öffnen Sie das Extranet des Kanals und prüfen Sie stichprobenartig ein Datum.

## Wann sollte ein kleines Hotel sie einsetzen?

- **Gefragte Wochenenden und Veranstaltungen.** Ein Mindestaufenthalt von zwei Nächten in den Veranstaltungsnächten oder CTA in der gefragtesten Nacht bringt Ihnen komplette Aufenthalte statt einzelner Nächte, die Lücken hinterlassen.
- **Einzelne freie Nächte.** Eine freie Nacht zwischen zwei ausgebuchten lässt sich nur als Einzelnacht verkaufen. Blockiert ein Mindestaufenthalt sie, heben Sie ihn für diese Nacht auf, wenn das Datum näher rückt.
- **Kurz vor dem Datum.** Beschränkungen, die einen Monat vorher sinnvoll waren, können wenige Tage vorher Buchungen verhindern, die sonst problemlos hereinkämen. Prüfen Sie sie wöchentlich.
- **Tage, an denen niemand den Check-in übernehmen kann.** Setzen Sie an diesen Tagen CTA, sofern Ihre Hausregeln das zulassen.
- **Schnell schließen.** Nutzen Sie einen Stop-Sell statt eines Preises von 999, wenn Sie ein Datum aus dem Verkauf nehmen müssen.

## Der schnellere Weg: Beschränkungsregeln und Stop-Sell in Hotelier Tools

Hotelier Tools setzt mit Ihrem eigenen Login auf Little Hotelier auf. Statt Beschränkungen Datum für Datum zu setzen, legen Sie die Regel einmal fest, und sie wird Nacht für Nacht neben dem Preis vorgeschlagen. Die Preisfunktionen sind noch im **Alpha**-Stadium.

### 1. Regel einmal festlegen

Öffnen Sie **Pricing settings → Arrivals, departures & stays** (Anreisen, Abreisen und Aufenthalte, `/pricing/settings/restrictions`). Sie können Anreisen oder Abreisen sperren:

- an festen Wochentagen oder bestimmten Daten
- nach Auslastung oder verbleibenden Zimmern
- nur, wenn die Nächte davor und danach noch offen sind

Hotelier Tools erkennt das Wochentagsmuster, das Sie in Little Hotelier schon nutzen, und bietet an, es zu übernehmen. Optionale **Weekend packages** (Wochenendpakete) setzen einen Mindestaufenthalt. Sie sind standardmäßig deaktiviert; schalten Sie sie ein, gelten zunächst Freitag und Samstag mit 2 Nächten. Ein Paket senkt nie einen längeren Mindestaufenthalt, den jemand von Hand gesetzt hat. Diese Seite schreibt nichts in Little Hotelier.

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="Seite Arrivals, departures & stays in Hotelier Tools: die Regel No arrivals mit Every week und Wochentagsschaltern von Mon bis Sun, On these dates, den Bedingungen An event fills the town und The nights either side are still open, Occupancy above und Rooms left at most, dann der Beginn von No departures" caption="Legen Sie einmal fest, an welchen Tagen keine Anreise oder Abreise möglich ist. Diese Seite schreibt nichts in Little Hotelier." path="/pricing/settings/restrictions"}
::

### 2. Nacht für Nacht prüfen und anwenden

Auf der Seite **Recommendations** (Empfehlungen, `/price-recommendations`) zeigt jede Nacht neben dem Preis ihren Status für Anreise (A) und Abreise (D). Schalten Sie um, wo Sie anderer Meinung sind, markieren Sie die Nächte und klicken Sie auf **Apply to Little Hotelier…**. Geändert wird erst, wenn Sie bestätigen.

Für einzelne Termine gibt es unter **Date rules** (`/pricing/settings/dates`) eine „stay“-Regel, die für diese Nächte nur einen Mindestaufenthalt oder eine Anreiseregel setzt.

### 3. Stop-Sell der Kanäle prüfen und setzen

Klicken Sie auf der Seite Recommendations auf **Check channel manager**. Hotelier Tools liest den Stop-Sell-Status bei SiteMinder über dieselbe Little-Hotelier-Sitzung aus, und zwar nur, wenn Sie klicken. Eine Spalte Channel zeigt dann für jede Nacht offen, geschlossen oder gemischt. Wählen Sie ein Ziel (alle öffnen, alle schließen, beibehalten). Es wird **nach** der Preisänderung in Little Hotelier gesendet, und nur für Nächte, in denen diese Änderung erfolgreich war.

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="Dialog Apply to Little Hotelier für drei Nächte von Doble Estándar (Sa 3. Okt., So 4. Okt., Mo 5. Okt.) mit aktuellen und neuen Preisen und den Spalten Arr und Dep, einer Warnung, dass Preise und Beschränkungen sich sofort und ohne automatisches Rückgängigmachen ändern, einer Option Send me an email, einer Option Also update sales in the Channel Manager (SiteMinder) und Apply 3 change(s)" caption="Preise, Anreise- und Abreiseregeln sowie der SiteMinder-Stop-Sell werden in einem Dialog bestätigt. Geändert wird erst, wenn Sie übernehmen." path="/price-recommendations"}
::

Der Autopilot ändert nie den Stop-Sell und setzt Mindestaufenthalte nur, wenn Sie das gesondert erlauben.

::demo-cta{path="/pricing/settings/restrictions"}
::

## Zusammenfassung

- **CTA** sperrt Anreisen an einem Datum, **CTD** sperrt Abreisen, der **Mindestaufenthalt** legt die kürzeste Buchung fest, und ein **Stop-Sell** nimmt die Rate aus dem Verkauf, ohne Ihre Zimmerzahl zu ändern.
- In Little Hotelier stellen Sie alles pro Zimmerrate unter **Front Desk > Inventory** ein, für einen Zeitraum mit **Bulk Update**. Den Stop-Sell pro Kanal setzen Sie im Channel-Manager.
- Prüfen Sie, welche Beschränkungen jeder Kanal akzeptiert, und überprüfen Sie sie wöchentlich, je näher die Daten rücken.
- Mit der [dynamischen Preisgestaltung von Hotelier Tools](/tools/bot/dynamic-pricing) legen Sie die Regel einmal fest, sehen sie neben dem Preis und setzen den SiteMinder-Stop-Sell auf derselben Seite. Hotelier Tools ist bis zum 10. Januar 2027 für jedes Hotel kostenlos.
- Als Nächstes: [dynamische Preise für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier) und [Little-Hotelier-Tipps und versteckte Funktionen](/blog/little-hotelier-tips).
