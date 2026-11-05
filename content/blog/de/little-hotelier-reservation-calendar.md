---
title: "Ein schnellerer Reservierungskalender für Little Hotelier: Belegungsplan, Preise und neue Buchungen"
seoTitle: "Schnellerer Belegungsplan für Little Hotelier"
description: "So funktioniert der Kalender von Little Hotelier und so legen Sie dort Buchungen an. Dazu ein Belegungsplan mit Preisen pro Zimmertyp und schneller buchen."
date: 2026-10-24
category: operations
tags: [kalender, belegungsplan, reservierungen, rezeption, little hotelier]
keywords: [little hotelier kalender, little hotelier reservierung anlegen, little hotelier belegungsplan, belegungsplan hotel, little hotelier kalender preise, little hotelier manuelle buchung, reservierungskalender kleines hotel, little hotelier kalender handy, zimmerplan hotel]
feature: dashboard
demoPath: /reservations/calendar
cover: /images/blog/demo/en/reservation-calendar-prices.webp
coverAlt: "Reservierungskalender von Hotelier Tools über 14 Nächte ab 4. November 2026: die Zimmertypen Doble Estándar, Doble Superior, Individual und Familiar 4 pax, jeweils mit einer Zeile Lowest rate und Preisen pro Nacht wie 63,47 € und 74,89 €, Buchungsbalken mit Symbolen für Kanal, Gäste und Bezahlung, eine schraffierte Zimmersperrung bei Zimmer 104, eine Zeile No room yet und die Legende für Status, Herkunft und Zahlungsmarkierungen"
faq:
  - q: "Wie lege ich in Little Hotelier eine Reservierung an?"
    a: "Klicken Sie im Calendar auf +Reservation oder unter Reservations auf Create reservation. Wählen Sie Daten, Zimmertyp, Rate, Zimmernummer und Gäste, füllen Sie den Hauptkontakt aus und klicken Sie auf Save. Manuelle Buchungen senden keine Bestätigungs-E-Mail: Drücken Sie nach dem Speichern auf Email."
  - q: "Kann ich im Kalender von Little Hotelier Preise sehen?"
    a: "Nicht im eigenen Kalender von Little Hotelier, der Buchungen und Zahlungsstatus zeigt. Die Raten stehen im Inventory-Raster. Der Kalender von Hotelier Tools kann pro Zimmertyp eine Zeile mit der niedrigsten aktuellen Rate für jede Nacht ergänzen, und ein kostenloses Userscript fügt Preise in den Kalender von Little Hotelier ein."
  - q: "Wie viele Tage kann der Kalender von Little Hotelier anzeigen?"
    a: "14 oder 28 Tage, auswählbar in einem Drop-down. Der Kalender von Hotelier Tools zeigt beliebig viele Nächte von 1 bis 92, mit Schnellauswahl für 7, 14, 30, 60 und 90."
  - q: "Kann ich eine Buchung aus Hotelier Tools in ein anderes Zimmer verschieben?"
    a: "Nein. Der Kalender von Hotelier Tools liest nur. Einen Aufenthalt verschieben, seine Daten ändern oder ihn stornieren tun Sie in Little Hotelier, das Sie über den Link Open in Little Hotelier der Buchung öffnen."
  - q: "Schickt eine in Hotelier Tools angelegte Reservierung dem Gast eine E-Mail?"
    a: "Nein. Sie legt die Buchung in Little Hotelier an, ohne erfasste Zahlung und ohne E-Mail, genau wie eine manuelle Buchung dort. Senden Sie die Bestätigung aus Little Hotelier und erfassen Sie Zahlungen an der Reservierung."
  - q: "Gehört Hotelier Tools zu Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig, steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es liest und erstellt Reservierungen mit dem eigenen Little-Hotelier-Login Ihres Hotels."
---

Der Kalender von Little Hotelier zeigt 14 oder 28 Tage Buchungen, und Sie legen dort mit **+Reservation** eine Buchung an. Preise zeigt er nicht, und den Plan können Sie nicht anpassen. Hotelier Tools ergänzt einen zweiten Kalender, aus Little Hotelier gelesen, mit 1 bis 92 Nächten, der niedrigsten Rate pro Zimmertyp in jeder Nacht, Symbolen für Kanal und Zahlung und gespeicherten Ansichten. Dazu kommt eine Seite **New reservation** (Neue Reservierung), die den Aufenthalt berechnet, Verfügbarkeit und Dubletten prüft und ihn dann in Little Hotelier bucht.

Die folgenden Little-Hotelier-Funktionen wurden mit den Hilfecentern, Stand November 2026, geprüft.

## Wie funktioniert der Kalender von Little Hotelier?

Auf der neueren Plattform ([Getting started with Calendar](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar)):

- **Zeitraum:** Ein Drop-down wechselt zwischen **14 oder 28 Tagen**. **View today** springt zurück, eine Datumsauswahl springt nach vorn.
- **Blättern:** In der 14-Tage-Ansicht springt `<` einen Tag, `<<` sieben und `<<<` vierzehn. In der 28-Tage-Ansicht springt `<<<` 28 Tage.
- **Farben:** Orange oder Gelb bestätigt, Grün eingecheckt, Grau ausgecheckt, Hellblau nicht zugewiesen, Dunkelrot Zimmersperrung, und ein blasser Balken für eine unvollständige Zahlung. Ein Streifen am linken Rand zeigt bezahlt (grün) oder unbezahlt (rot).
- **Drag-and-drop:** Ziehen Sie eine Buchung in ein anderes Zimmer, einen anderen Zimmertyp oder auf andere Daten, oder ziehen Sie ihr Ende, um sie zu verlängern. Kanalbuchungen lassen sich so nicht verlängern.
- **Zeile Unallocated:** bestätigte Buchungen ohne physisches Zimmer. Ziehen Sie sie auf ein freies Zimmer.

Die klassische Version funktioniert genauso ([Overview of the front desk calendar](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar)).

## So legen Sie in Little Hotelier eine Reservierung an

Manuelle Buchungen sind für Laufkundschaft, Anfragen per Telefon und E-Mail und Reisebüros ([Create a manual reservation](https://help-platform.littlehotelier.com/en/articles/13933574-create-a-manual-reservation-in-little-hotelier)):

1. Laden Sie die Seite neu und klicken Sie auf **View Today**, damit Sie die aktuelle Verfügbarkeit sehen.
2. Klicken Sie im **Calendar** auf **+Reservation** (oder ziehen Sie über die Nächte eines Zimmers). Unter **Reservations** klicken Sie auf **Create reservation**.
3. Wählen Sie An- und Abreisedatum, einen **Room type** und eine **Room rate**. Für einen Sonderpreis lassen Sie die Rate leer und tragen den Gesamtbetrag im Feld **Room** ein.
4. Wählen Sie eine **Room number**. Bleibt sie leer, wartet die Buchung in der Zeile **Unallocated**.
5. Geben Sie **Adults**, **Children** und **Infants** ein und gegebenenfalls einen **Discount**.
6. Füllen Sie den **Primary contact** und eventuelle **Guest comments** aus und klicken Sie dann auf **Save**.

Drei Dinge, die oft übersehen werden:

- **Bei einer manuellen Buchung wird keine Bestätigungs-E-Mail gesendet.** Drücken Sie nach dem Speichern auf **Email**.
- **Mehrere Zimmer:** **+Add another room** setzt sie auf eine Rechnung. Sie haben dieselben Daten.
- **Zahlungen:** **Record payment** für Bargeld oder ein externes Terminal, oder der Reiter **Payments**, um eine Karte zu belasten.

Klassische Konten folgen [Create a reservation](https://helpcentre.littlehotelier.com/en/articles/8673932-create-a-reservation).

## Wozu ein zweiter Kalender?

Im Kalender von Little Hotelier verschieben Sie Buchungen. Ein zweiter hilft, wenn Sie vor allem schauen: Preise neben den Zimmern, wenn ein Gast anruft, mehr als 28 Tage auf einmal, Ihr eigenes Layout und ein Plan, den Sie auf dem Handy lesen können.

Wenn Sie nur Preise in Little Hotelier brauchen, fügt das kostenlose Userscript [Prices Display](/tools/ui/prices-display) sie in dessen Kalender ein.

## Der schnellere Weg: der Reservierungsbereich in Hotelier Tools

Der Reservierungsbereich besteht aus drei Seiten unter **Reservations**: **Calendar** (`/reservations/calendar`), **Reservations** (`/reservations`) und die Reservierungsseite (`/reservations/:id`). Jede liest Little Hotelier einmal und behält die Daten ein paar Minuten, sodass das Wechseln schnell geht. **Refresh** liest neu.

### Der Kalender (Belegungsplan)

1. Öffnen Sie **Reservations > Calendar**. Er beginnt eine Nacht vor heute und ist 14 Nächte breit, damit die heutigen Abreisen im Bild sind.
2. Blättern Sie mit den Pfeilen um eine Nacht, eine Woche oder das ganze Fenster, oder drücken Sie **Today**. Tragen Sie neben dem Datum eine beliebige Zahl von Nächten zwischen 1 und 92 ein.
3. Klicken Sie auf einen Balken, um die Buchung in einer Seitenleiste neben dem Plan zu öffnen. Der Plan bleibt, wo er war.

Jeder Zimmertyp ist ein Band mit seinen belegten Zimmern pro Nacht. Buchungen ohne Zimmer stehen in einer Zeile **No room yet**, Sperrungen sind schraffiert, und ein Zimmer, das für dieselbe Nacht doppelt verkauft ist, ist rot eingekreist. Zeilen über dem Plan können pro Nacht **Occupied**, **Arrivals** und **Departures** zählen.

::screenshot{src="/images/blog/demo/en/reservation-calendar-prices.webp" alt="Reservierungskalender ab 4. November 2026, 14 Nächte: Belegungszahlen Occupied pro Nacht, Bänder pro Zimmertyp mit einer Zeile Lowest rate (63,47 € bis 128,88 €, manche durchgestrichen, eine Markierung für Stop Sell), Balken wie Larsen, Ingrid eingecheckt mit Website-Symbol und Markierung teilweise bezahlt, Marino, Onur bestätigt über Hostelworld, eine schraffierte Sperrung bei Zimmer 104 und die Legende für Statusfarben, Herkunft, Zahlung, Gäste und Preise" caption="Die niedrigste aktuelle Rate jedes Zimmertyps steht direkt über seinen Zimmern, Nacht für Nacht." path="/reservations/calendar"}
::

### Einstellungen, die ihn zu Ihrem machen

Öffnen Sie im Kalender **Settings**:

| Einstellung | Optionen |
|---|---|
| **Nights shown** | 7, 14, 30, 60 oder 90, oder **Any number of nights** (1 bis 92) |
| **Minimum night width** | **Narrow**, **Medium**, **Wide** oder eine beliebige Breite in Pixeln. Passen alle Nächte auf den Bildschirm, werden sie breiter, um ihn zu füllen |
| **Room type after the number** | **Full name**, **Abbreviated** oder **Hidden** |
| **Room order** | **As in Little Hotelier**, **By room number**, **By room type, then number** oder **My own order** (Zimmer ziehen) |
| **What a booking shows** | Gästename, Referenz, Kanal, Gäste, offener Betrag, Nächte |
| **Colour bookings by** | **Status**, **Channel** oder **Payment** |
| **Icons in a booking** | **Where it came from** (Booking.com, Expedia, Airbnb, Hostelworld, Ihre Website, die Rezeption), **Paid or not** und **Guests** als ein Symbol oder getrennt nach Erwachsenen, Kindern und Kleinkindern |
| **Show prices** | Die niedrigste aktuelle Rate jedes Zimmertyps pro Nacht |

**Show prices** liest das Inventory von Little Hotelier, einen Abruf je zwei angezeigte Wochen, und nimmt die niedrigste Rate aller Ratenpläne, nicht erstattbare eingeschlossen. Eine ausgebuchte Nacht zeigt den Preis durchgestrichen, ein Stop Sell eine Sperrmarkierung. Die Option steht Personen zur Verfügung, die Reservierungen bearbeiten dürfen, und ist aus, bis Sie sie einschalten.

Wenn der Plan passt, öffnen Sie **Saved views** und wählen **Save as new view…**. Geben Sie ihr einen Namen („Rezeption“), und wählen Sie **Share with the team** oder **Open by default**. Auch ein Link behält die Einstellungen: `/reservations/calendar?origin=1&paid=1&guests=split&prices=1&color=payment`.

### Auf dem Handy

Auf dem Handy öffnet sich der Kalender als **List of days**: die Anreisen, Abreisen und gesperrten Zimmer jedes Tages mit der niedrigsten Rate jedes Zimmertyps. Der Schalter **Layout** oben wechselt zu **Full calendar**, dem ganzen Plan zum seitlichen Scrollen, und Ihre Wahl merkt sich der Browser. Schritte, Einstellungen und Legende wandern ins Menü **More**.

::screenshot{src="/images/blog/demo/en/reservation-calendar-mobile.webp" alt="Kalender auf dem Handy als Liste der Tage ab Mittwoch, 4. November: Donnerstag, 5. November als Today markiert mit 2 belegten Zimmern, der niedrigsten Rate jedes Zimmertyps (Doble Estándar 63,47 €, Doble Superior 84,13 €, Individual 46,49 €, Familiar 4 pax 109,22 €) und zwei Abreisen, Okafor, Camila aus Zimmer 105 und Alvarez, Greta aus Zimmer 106, beide Checked out; Freitag, 6. November mit seinen Raten und zwei Anreisen" caption="Auf dem Handy wird der Kalender zu einer Liste der Tage. Stellen Sie Layout auf Full calendar für den ganzen Plan." path="/reservations/calendar" mobile}
::

### Die Reservierungstabelle

**Reservations** (`/reservations`) listet jede Buchung in einem Zeitfenster: **Today**, **Next 7 nights**, **Next 30 nights**, **This month** oder **Choose dates**, nach **Stay**, **Arrival**, **Departure** oder **Booking date**. Filtern Sie nach Status, Kanal und Zimmertyp, haken Sie **Owes money** oder **No room yet** an, wählen Sie aus 30 Spalten und exportieren Sie mit **Export CSV**, was auf dem Bildschirm steht.

### Alles zu einer Reservierung

Öffnen Sie eine Buchung in der Seitenleiste oder als eigene Seite:

- **Overview:** Aufenthalt, Zimmer, Gäste, Kanal, **Total**, **Received**, **Outstanding** und die Markierungen von Little Hotelier wie **Confirmation sent** oder **Card on file**.
- **Abschnitte:** Guests, Rooms and rates (die Rate jeder Nacht), Extras and taxes, Payments, Invoices, Notes, Channel and conversations, Check-in, History und **All other fields**. Zeigen Sie sie auf einer Seite oder als Reiter.
- **Aktionen:** **Confirm**, **Check in**, **Check out** (und rückgängig machen), die internen Notizen bearbeiten und Rechnungsdaten und Adresse des Hauptgastes bearbeiten (Firma, Steuernummer, Dokumenttyp, Adresse). Jede Aktion wird vorher bestätigt und einmal gesendet.
- **Zahlungen:** Erstattungen, Zahlungslinks und Rechnungen von derselben Seite.

::screenshot{src="/images/blog/demo/en/reservation-detail.webp" alt="Reservierungsseite von Emma Berg, Confirmed, Sa., 7. Nov. bis Do., 12. Nov. 2026, 5 Nächte, BBN-DEMO100408: die Schaltflächen Check in und Open in Little Hotelier, Abschnittsreiter von Overview bis All other fields (43), Karten für Stay, Rooms 201 Doble Superior, Guests 1 Erwachsener und Channel Extranet, Total 489,69 €, Received 146,91 € und Outstanding 342,78 €, Markierungen wie Payment: Partly paid und Confirmation sent, und der Kontakt Booked under" caption="Jedes Feld, das Little Hotelier zu einer Buchung speichert, auf einer Seite, mit dem Check-in einen Klick entfernt." path="/reservations"}
::

Bei einer Buchung über Ihre eigene Website kann die Seite die **Original booking** neben der aktuellen Fassung in Little Hotelier zeigen. Drücken Sie **Read the original booking**, und sie listet, warum sie sich unterscheiden: Der Aufenthalt wurde auf andere Daten verschoben, das Zimmer wird anders berechnet, der Direktbuchungsrabatt ist weggefallen, oder die Anzahlung wurde nach einer Verschiebung nicht neu berechnet. Das erklärt einen offenen Betrag, den ein Gast angeblich nicht schuldet.

### Eine Reservierung aus Hotelier Tools anlegen

**New reservation** (`/reservations/new`) ist der schnelle Weg für eine Buchung per Telefon oder an der Rezeption:

1. **Aufenthalt.** Wählen Sie An- und Abreise in einem Kalender, dessen Tage freie Zimmer, den niedrigsten Preis, Stop Sells, Anreisesperren und Mindestaufenthalte zeigen.
2. **Zimmer.** Die Ratentabelle öffnet sich mit jedem Zimmertyp und Ratenplan, berechnet für den Aufenthalt, Nacht für Nacht. Klicken Sie auf einen Preis, um dieses Zimmer und diese Rate zu wählen, oder auf **Custom rate**, um einen Preis pro Nacht einzugeben. Die Gästegrenzen jedes Zimmers in Little Hotelier begrenzen die Felder **Adults**, **Children** und **Infants**, und Gäste über den inklusiven Plätzen zeigen den Zuschlag für zusätzliche Gäste.
3. **Vergleichen.** Darunter zeigt **To compare** denselben Aufenthalt als **Direct booking** auf Ihrer Website (mit Ihrem Promo-Code), auf **Booking.com** mit einem typischen Genius-Rabatt, was die Preisempfehlungen vorschlagen, und **The market these nights** von vergleichbaren Häusern.
4. **Gast und Adresse.** Wählen Sie zuerst das Land. Eine Postleitzahl füllt Ort und Provinz aus, und ein Ort schlägt seine Postleitzahlen vor.
5. Drücken Sie **Check price and availability**. Das berechnet jede Nacht, bestätigt, dass Zimmer frei sind, und sucht nach demselben Gast, der für diese Daten schon gebucht ist. Es wird nichts geschrieben.
6. Drücken Sie **Create reservation**. Die Schaltfläche erscheint nur nach einer Prüfung genau des Formulars, das auf dem Bildschirm steht.

::screenshot{src="/images/blog/demo/en/reservation-new-rates.webp" alt="New reservation für Do., 12. Nov. bis Sa., 14. Nov. mit geöffneter Ratentabelle und Vergleich für 2 Gäste: Doble Estándar mit 3 freien Zimmern, Tarifa Flexible für 153,73 € für den Aufenthalt ausgewählt (70,52 € und 83,21 € pro Nacht) und No reembolsable für 138,36 €, Doble Superior für 203,79 € und 183,41 €, Individual als für diese Personenzahl ungeeignet markiert und eine Zeile Custom rate unter jedem Zimmertyp" caption="Jeder Zimmertyp und Ratenplan für den Aufenthalt berechnet. Klicken Sie auf einen Preis, um ihn zu wählen." path="/reservations/new"}
::

::screenshot{src="/images/blog/demo/en/reservation-new-compare.webp" alt="Der Bereich To compare der Ratentabelle: Suite Ático als Direct booking mit dem Code DEMOSOL −10 % für 329,81 € statt 366,46 €, Booking.com mit −10 % Genius nicht gelesen, Recommended mit 325,09 €, dann The market these nights mit sechs Häusern von Albergue Prueba Playa für 117,02 € bis Hotel Muestra Rambla für 211,56 €, mit Hotel Demo Sol (You) für 176,79 €" caption="Derselbe Aufenthalt auf Ihrer Website, auf Booking.com und bei Häusern in der Nähe, bevor Sie einen Preis nennen." path="/reservations/new"}
::

Eine ausgebuchte Nacht oder eine wahrscheinliche Dublette wird abgelehnt, mit einem eigenen Kästchen (**Book it anyway…** oder **It is a second stay — book it anyway**): Haken Sie es nur an, wenn Sie es wirklich wollen. Die Buchung wird einmal gesendet. Geht die Antwort verloren, bietet die Seite **Create** erst nach einer neuen Prüfung wieder an, und die findet die Buchung als Dublette, falls sie angelegt wurde.

Nach dem Anlegen steht die Reservierung im Kalender und ist auf allen Kanälen aus dem Verkauf genommen.

::demo-cta{path="/reservations/calendar"}
::

### Ehrliche Grenzen

- **Der Kalender liest nur.** Einen Aufenthalt in ein anderes Zimmer verschieben, Daten ändern, stornieren oder einen No-Show erfassen bleibt in Little Hotelier. Jede Buchung hat einen Link **Open in Little Hotelier**. Balken ziehen ist nicht möglich.
- **New reservation ist für einen einfachen Aufenthalt.** Für eine Anzahlung, Extras oder ein bestimmtes Zimmer nutzen Sie das Formular von Little Hotelier, das die Seite als Erstes verlinkt. Bis zu 30 Nächte und 10 Zimmer pro Buchung.
- **Keine Zahlung, keine E-Mail.** Eine hier angelegte Reservierung erfasst keine Zahlung und schickt dem Gast keine E-Mail.
- **Website- und Booking.com-Werte dienen dem Vergleich.** Die Buchung nutzt die Rate, die Sie wählen.

Das Dashboard ist für jedes Hotel kostenlos, bis die Abrechnung am 10. Januar 2027 beginnt. Mehr auf der [Dashboard-Seite](/tools/bot/dashboard).

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von ihnen weder unterstützt noch empfohlen. Es liest und erstellt Reservierungen mit dem eigenen Little-Hotelier-Login Ihres Hotels.
::

Siehe auch: [druckbare Tageslisten](/blog/little-hotelier-daily-lists), [Promo-Codes in Little Hotelier](/blog/little-hotelier-promo-codes), [Tipps für Little Hotelier](/blog/little-hotelier-tips).

## Zusammenfassung

- **In Little Hotelier:** Der Kalender zeigt 14 oder 28 Tage. Legen Sie eine Buchung mit **+Reservation** an und drücken Sie dann **Email**, um die Bestätigung zu senden.
- **Ein zweiter Kalender** in Hotelier Tools zeigt 1 bis 92 Nächte, die niedrigste Rate pro Zimmertyp, Symbole für Kanal und Zahlung und gespeicherte Ansichten für das Team.
- **Auf dem Handy:** eine Liste der Tage oder der ganze Plan.
- **New reservation:** eine berechnete Rate wählen, mit Ihrer Website und Booking.com vergleichen, prüfen und dann in Little Hotelier anlegen.
- **Änderungen** an Zimmern, Daten und Stornierungen bleiben in Little Hotelier.
