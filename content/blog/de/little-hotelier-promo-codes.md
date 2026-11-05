---
title: "Promo-Codes in Little Hotelier: so erstellen, teilen und kontrollieren Sie sie in Ihrer Buchungsmaschine"
seoTitle: "Promo-Codes in Little Hotelier erstellen und kontrollieren"
description: "Promo-Code in der Buchungsmaschine von Little Hotelier anlegen, als Link teilen, Daten und Mindestaufenthalt setzen und Codes unter Ihrem Preis vermeiden."
date: 2026-10-26
category: pricing
tags: [promo-codes, buchungsmaschine, direktbuchungen, little hotelier, rabatte, preise]
keywords: [little hotelier promo code, little hotelier promo code erstellen, little hotelier buchungsmaschine aktionscode, promo code direktbuchung hotel, hotel rabattcode mindestaufenthalt, promo code link buchungsmaschine, thebookingbutton promotion code, hotel gutscheincode direktbuchung]
feature: dynamic-pricing
demoPath: /pricing/promo-codes
cover: /images/blog/demo/en/promo-codes-list.webp
coverAlt: "Seite Promo codes in Hotelier Tools: die Schaltflächen Read from the booking engine und New code, darunter die Codes DEMOSOL und banco, beide Active, jeweils mit Zusammenfassung in einfachen Worten, einem Beispielpreis für ein Schlafsaalbett am 6. November, Buchungen der letzten 90 Tage, Warnungen und den Schaltflächen Edit, Pause und Löschen"
faq:
  - q: "Wo finde ich Promo-Codes in Little Hotelier?"
    a: "In den Einstellungen der Buchungsmaschine, nicht im Front Desk. In der aktuellen Version unter Direct booking > Promotion codes. In der klassischen Version unter My Apps > Direct booking, Reiter Setup, Kachel Promotion Codes."
  - q: "Kann ein Promo-Code in Little Hotelier einen Mindestaufenthalt verlangen?"
    a: "Nicht am Code selbst. Legen Sie eine Zimmerrate mit dem gewünschten Mindestaufenthalt an, verknüpfen Sie den Code damit und wählen Sie im Reiter Promotions dieser Rate, dass sie nur angezeigt wird, wenn ein verknüpfter Promo-Code eingegeben wird."
  - q: "Kann ich begrenzen, wie oft ein Promo-Code genutzt wird?"
    a: "Nein. Promo-Codes in Little Hotelier haben keine Nutzungsgrenze und lassen sich nicht auf Erstgäste beschränken. Geben Sie jedem Code über die Buchungsdaten ein Ende und wechseln Sie Codes regelmäßig."
  - q: "Funktionieren Promo-Codes von Little Hotelier auf Booking.com oder Expedia?"
    a: "Nein. Sie funktionieren nur in Ihrer eigenen Buchungsmaschine. Jeder Kanal hat eigene Aktionen, die Sie in seinem Extranet einrichten. Ein Code, den Sie breit veröffentlichen, kann für die Ratenparität als öffentlicher Preis gelten, prüfen Sie also Ihre Kanalverträge."
  - q: "Wie pausiere ich einen Promo-Code, ohne ihn zu löschen?"
    a: "Die Buchungsmaschine hat keinen Ein/Aus-Schalter für Codes. Ändern Sie die Buchungsdaten so, dass sie gestern enden. Pause in Hotelier Tools tut genau das und speichert die alten Daten, sodass Resume den Code wiederherstellt, wie er war."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels und ändert einen Code nur, wenn eine Person auf die Schaltfläche drückt."
---

Promo-Codes von Little Hotelier liegen in seiner Buchungsmaschine. Gehen Sie zu **Direct booking** > **Promotion codes** (klassische Version: **My Apps** > **Direct booking** > **Setup** > **Promotion Codes**), legen Sie einen Code an, setzen Sie einen Rabatt, die Buchungs- und Aufenthaltsdaten und verknüpfen Sie die Zimmerraten, für die er gilt. Teilen Sie ihn als Link mit `?promotion_code=YOURCODE`. Hotelier Tools ergänzt eine Seite, die jeden Code in einem Satz erklärt und warnt, wenn ein Code Ihren Mindestpreis unterschreitet oder sich mit anderen Rabatten addiert. Sie können einen Code pausieren und später fortsetzen.

## Wo finde ich Promo-Codes in Little Hotelier?

Promo-Codes gehören zur Buchungsmaschine auf Ihrer Website (direct-book.com), die auf TheBookingButton aufbaut. Sie ändern Ihre Raten weder im Front Desk noch auf einem Kanal.

- **Aktuelle Version:** **Direct booking** > **Promotion codes** ([Hilfecenter](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)).
- **Klassische Version:** **My Apps** > **Direct booking**, Reiter **Setup**, dann die Kachel **Promotion Codes** ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)).

Die Bezeichnungen unten stammen aus dem Hilfecenter von Little Hotelier, Stand November 2026.

## So erstellen Sie einen Promo-Code

1. Öffnen Sie **Promotion Codes** und klicken Sie auf **Create**.
2. Tippen Sie unter **Code** ein, was Gäste eingeben werden. Keine Leerzeichen, und jeder Code muss eindeutig sein.
3. Schreiben Sie unter **Description** den Text, den Gäste in der Buchungsmaschine sehen.
4. Wählen Sie unter **Default rate discount** einen Prozentsatz oder einen Betrag und tragen Sie ihn ein.
5. Setzen Sie **Available From/To**: die Tage, an denen Gäste mit dem Code **buchen** können.
6. Setzen Sie **Applicable From/To**: die Nächte, in denen Gäste mit dem Code **übernachten** können.
7. Haken Sie optional **Hide Promo Code in reservation summary** an.
8. Wählen Sie die Zimmerraten, für die der Code gilt. Eine Rate kann einen eigenen Rabatt haben, der den Standard ersetzt.
9. Klicken Sie auf **Save**.

Quelle: [Set up and manage promotion codes](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes).

Zwei Einstellungen überraschen viele. Standardmäßig **blendet ein gültiger Code alle Ihre öffentlichen Raten aus**, der Gast sieht also nur die mit dem Code verknüpften Raten. Um das zu ändern, entfernen Sie den Haken bei **Hide public rates when a Promo Code is applied** unter **Setup** > **Properties** > **Customisation**. Und das Feld **Add Promo Code** ist in der Buchungsmaschine immer sichtbar.

## So teilen Sie einen Promo-Code als Link

Gäste vergessen, Codes einzutippen. Senden Sie einen Link, der den Code für sie anwendet. Klappen Sie unter **Promotion codes** den Code auf und klicken Sie auf **Promotion code link**, um ihn zu kopieren ([Hilfecenter](https://help-platform.littlehotelier.com/en/articles/10911579-use-promo-codes-to-create-custom-links-for-your-booking-engine)). Das Format:

- Europa, Naher Osten, Afrika und Amerika: `https://direct-book.com/properties/yourproperty?promotion_code=YOURCODE`
- Asien-Pazifik: `https://book-directonline.com/properties/yourproperty?promotion_code=YOURCODE`

Auch ein **0-%-Code** ist nützlich: Verknüpfen Sie ihn mit den Raten eines Zimmertyps, und der Link zeigt nur diesen Zimmertyp (bei ausgeblendeten öffentlichen Raten).

## Mindestaufenthalt, Nutzungsgrenzen und Erstgäste

Die Antworten von Little Hotelier selbst, Stand November 2026 ([Hilfecenter](https://helpcentre.littlehotelier.com/en/articles/8673900-set-up-and-manage-promotion-codes)):

- **Mindestaufenthalt:** Codes haben keinen. Legen Sie eine Zimmerrate mit zum Beispiel zwei Nächten Mindestaufenthalt an, verknüpfen Sie den Code damit und wählen Sie im Reiter **Promotions** der Rate „Show only when a linked promotional code is entered“ (nur anzeigen, wenn ein verknüpfter Promo-Code eingegeben wird).
- **Nutzungsgrenzen:** Es gibt keine Obergrenze, wie oft ein Code genutzt wird. Geben Sie ihm ein Enddatum und wechseln Sie Codes regelmäßig.
- **Erstgäste:** Die Buchungsmaschine kann nicht erkennen, ob ein Gast schon einmal gebucht hat.
- **Öffentliche Angebote:** Für einen Rabatt, den alle sehen, empfiehlt Little Hotelier statt eines Codes dynamische Rabatte oder einen Ratenmultiplikator für Direct booking.

## Gute Praxis für Promo-Codes

- **Setzen Sie immer ein Ende.** Ein Code ohne Buchungsdaten gilt ewig, und alte Codes wandern auf Gutscheinseiten.
- **Trennen Sie Buchungsdaten und Aufenthaltsdaten.** „Diese Woche buchen für Aufenthalte im Januar“ sind zwei Zeitfenster, nicht eines.
- **Kennen Sie Ihre Untergrenze.** Ein 15-%-Code auf eine bereits rabattierte Rate kann unter das fallen, was ein Zimmer einbringen muss. Prüfen Sie die günstigste Nacht, nicht den Durchschnitt.
- **Achten Sie auf Stapelung.** Der Code wird von der Rate abgezogen, die die Buchungsmaschine zeigt. Liegen Ihre Webraten schon unter Ihren Rezeptionsraten, bekommt der Gast beide Rabatte.
- **Ein Code, ein Zweck.** Ein Code pro Kampagne oder Partner zeigt Ihnen, welcher Buchungen gebracht hat.
- **Denken Sie an die Parität.** Ein Code, den jeder finden kann, wirkt wie ein öffentlicher Preis. Geschlossene Gruppen (Newsletter, Stammgäste, ein Unternehmen vor Ort) sind sicherer. Prüfen Sie Ihre Kanalverträge.
- **Codes gelten nur direkt.** Sie erreichen Booking.com oder Expedia nicht, die eigene Aktionen haben.

## Der schnellere Weg: jeder Code erklärt, geprüft und pausiert in Hotelier Tools

Hotelier Tools liest die Codes Ihrer Buchungsmaschine und zeigt sie in einfachen Worten unter **Promo codes** (`/pricing/promo-codes`) im Bereich Pricing. Die Seite ist neu (Oktober 2026). Das Lesen der Codes ist getestet; das Anlegen und Bearbeiten aus Hotelier Tools wurde noch nicht mit einer echten Buchungsmaschine geprüft. Deshalb wird jede Änderung zurückgelesen und als bestätigt oder nicht bestätigt angezeigt.

1. Öffnen Sie **Promo codes** und drücken Sie **Read from the booking engine**. Das Öffnen der Seite liest nie etwas; das tut die Schaltfläche.
2. Jeder Code zeigt seinen Status (**Active**, **Scheduled**, **Paused**, **Expired** oder **Does nothing**), eine Zusammenfassung in einer Zeile wie „10% off the room price (not the extra-guest supplement) on 8 rates. Any booking date. Any stay date.“, einen Beispielpreis und wie viele Buchungen ihn in den letzten 90 Tagen genutzt haben.
3. Lesen Sie die Warnungen unter jedem Code und nutzen Sie dann **Edit**, **Pause**, **Resume** oder die Schaltfläche zum Löschen.

::screenshot{src="/images/blog/demo/en/promo-codes-list.webp" alt="Seite Promo codes: der Code DEMOSOL, Active und Used for quotes and links, 10 % Rabatt auf 8 Raten mit einem Beispielpreis von 27,09 auf 24,38 Euro und 14 Buchungen in den letzten 90 Tagen, darunter drei Warnungen; dann der Code banco, Active, 15 % Rabatt auf 1 Rate, die ohne Code ausgeblendet ist" caption="Jeder Code in einem Satz, mit seiner Wirkung auf einen echten Preis und den Problemen, die er verursacht." path="/pricing/promo-codes"}
::

### Einen Code mit Vorschau anlegen oder bearbeiten

Drücken Sie **New code**. Füllen Sie **Code** (3 bis 40 Buchstaben, Ziffern, - oder _; Groß- und Kleinschreibung spielt keine Rolle), **Discount** (**% off the rate**, bis 90 %, oder **Amount off the rate**), **Description**, **Booking dates**, **Stay dates** und **Rates it applies to** aus (**Select all public rates** hakt die üblichen an). **What this code will do** zeigt das Ergebnis, bevor Sie **Create in TheBookingButton** drücken.

::screenshot{src="/images/blog/demo/en/promo-codes-new-code.webp" alt="Dialog New promo code: Code AUTUMN26, Rabatt 10 mit % off the rate, leere Beschreibung, Show the discount in the booking summary nicht angehakt, leere Booking dates und Stay dates, Rates it applies to mit angehakter Tarifa Flexible und No reembolsable für Doble Estándar, und What this code will do: 10% off the room price (not the extra-guest supplement) on 2 rates. Any booking date. Any stay date." caption="Buchungs- und Aufenthaltsdaten sind getrennt, und die Vorschau sagt, was der Code tun wird, bevor etwas gespeichert wird." path="/pricing/promo-codes"}
::

Jede Änderung wird so geprüft:

- Der Code wird vor der Änderung frisch gelesen. Hat ihn jemand zwischenzeitlich in der Buchungsmaschine geändert, werden Sie gebeten, ihn neu zu lesen.
- Die Änderung wird einmal gesendet und dann zurückgelesen. Das Ergebnis ist **Confirmed**, **Differs** oder **Unknown**. Ein unbekanntes Ergebnis wird nie von selbst erneut gesendet: Drücken Sie **Read again** unter **Recent changes**.
- Anlegen, Ändern, Pausieren und Löschen brauchen die Berechtigung **Publish prices**, weil ein Code Gäste sofort erreicht. Zum Löschen müssen Sie den Code eintippen.

### Die Warnungen, die Geld sparen

| Warnung | Was sie bedeutet |
|---|---|
| Unter Ihrem Mindestpreis | Mit dem Rabatt fallen einige Nächte in den nächsten 90 Tagen unter Ihre Untergrenze |
| Addiert sich mit Ihrem Anwendungsrabatt | Ihre Raten sind bereits unter der Empfehlung geschrieben; mit dem Code zahlt ein Webgast die Summe beider Rabatte |
| Blendet Ihre öffentlichen Raten aus | Der Code schaltet Raten frei, die nur mit Code buchbar sind, und ein Gast, der ihn nutzt, sieht nur diese |
| Bewirkt nichts | Keine Rate ist verknüpft: Der Code wird akzeptiert, und der Gast sieht den normalen Preis |
| Gleicher Code, andere Großschreibung | Die Buchungsmaschine unterscheidet `SUMMER` und `summer` nicht |
| Öffentlicher Code | Ihre Angebote und Buchungslinks nutzen ihn, die Ratenparität von Booking.com kann ihn also mitzählen |
| Außerhalb dieser App geändert | Jemand hat ihn seit dem letzten Lesen in TheBookingButton bearbeitet |

Hat der eigene Aktionsbildschirm von Little Hotelier (ein separates System) Aktionen, sagt Ihnen die Seite außerdem, dass Ihre Website sie nicht nutzt.

### Pausieren und fortsetzen

Die Buchungsmaschine hat keinen Ein/Aus-Schalter für Codes. **Pause** setzt die Buchungsdaten des Codes so, dass sie gestern enden, und speichert die alten Daten. Rabatt, Raten und Aufenthaltsdaten bleiben, wie sie sind, und bereits getätigte Buchungen behalten ihren Preis. **Resume** setzt die gespeicherten Daten zurück. Schaltet ein Code Raten frei, die nur mit Code buchbar sind, warnt der Pausen-Dialog, dass diese Raten dann nicht mehr buchbar sind.

### Täglich lesen und in einfachen Worten fragen

Eine geplante Aufgabe, **Read the codes every day** (standardmäßig um 06:40 Uhr, seit November 2026 automatisch angelegt), hält die Seite und die Assistenten aktuell. Sie liest nur.

Fragen Sie im KI-Chat (Beta) „Welche Codes sind aktiv?“ oder „Was passiert, wenn WEB 18 % gibt?“: Der Assistent antwortet aus den Codes und zeigt eine Änderung als Vorschau, ohne sie zu schreiben. Um einen Code zu ändern, zeigt er eine Freigabekarte, und nichts passiert, bevor Sie freigeben. Entwickler bekommen dieselben Aktionen über die REST-API (`/api/v1/pricing/promo-codes`) und MCP. Browser-Agenten mit WebMCP können nur vorschlagen: Sie öffnen das ausgefüllte Formular, und eine Person drückt die Schaltfläche.

### Sehen, zu welchem Preis Ihre Website wirklich verkauft

Zwei weitere Stellen nutzen Ihren Code:

- **Pricing settings** > **Channels & discounts** (`/pricing/settings/channels`), Karte **What your web really sells at**: **Check the web** liest Ihre Buchungsseite für die nächsten 30 Nächte, mit und ohne Ihren Code, und vergleicht sie mit der Rezeptionsrate und dem, was ein Booking.com-Gast zahlt. Sie empfiehlt einen allgemeinen Webrabatt.
- **New reservation** (`/reservations/new`) zeigt, was derselbe Aufenthalt auf Ihrer Website kostet, auf Ihrer Website mit dem Code und eine Schätzung für Booking.com, neben den Raten, zu denen Sie buchen.

Den Code, den Ihre Angebote und Buchungslinks nutzen, legen Sie unter **Direct-booking promo code** in den Objektdaten fest.

::demo-cta{path="/pricing/promo-codes"}
::

**Noch nicht gebaut:** eine E-Mail, wenn ein Code außerhalb von Hotelier Tools geändert wird (die Seite zeigt es beim nächsten Lesen), und Grenzen, die die Buchungsmaschine selbst nicht hat, etwa Nutzungsobergrenzen.

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Der Rest der Preis-Engine steht auf der Seite [Dynamic pricing](/tools/bot/dynamic-pricing).

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels, und die Codes bleiben in Ihrer eigenen Buchungsmaschine.
::

Siehe auch: [dynamische Preise für kleine Hotels mit Little Hotelier](/blog/dynamic-pricing-little-hotelier), [Booking.com-Provision](/blog/booking-com-commission), [CTA, CTD, Mindestaufenthalt und Stop-Sell](/blog/little-hotelier-cta-ctd-stop-sell).

## Zusammenfassung

- Promo-Codes von Little Hotelier sind Einstellungen der Buchungsmaschine: **Direct booking** > **Promotion codes**.
- Jeder Code hat einen Rabatt, Buchungsdaten, Aufenthaltsdaten und verknüpfte Raten. Standardmäßig blendet er Ihre öffentlichen Raten aus.
- Teilen Sie Codes als Links mit `?promotion_code=`. Für einen Mindestaufenthalt verknüpfen Sie den Code mit einer Rate, die nur mit Code buchbar ist und diesen Mindestaufenthalt hat.
- Geben Sie jedem Code ein Ende, prüfen Sie ihn gegen Ihre Untergrenze und denken Sie daran, dass Codes die OTAs nicht erreichen.
- Hotelier Tools erklärt jeden Code in einem Satz, warnt vor Untergrenzen, Stapelung und Parität und lässt Sie einen Code pausieren und fortsetzen, ohne seine Einstellungen zu verlieren.
