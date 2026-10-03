---
title: "Sperrliste für Gäste im Hotel: So führen Sie sie rechtssicher in Little Hotelier"
seoTitle: "Sperrliste Gäste Hotel: rechtssicher führen (DSGVO)"
description: "Ein Hotel darf nach DSGVO eine Sperrliste führen, wenn es bei Fakten bleibt. Was Sie erfassen, was nie, und wie Sie in Little Hotelier Warnungen erhalten."
date: 2026-10-03
category: operations
tags: [do not rent list, gdpr, guests, watchlist, little hotelier]
keywords: [sperrliste gäste hotel, hotel schwarze liste gäste, hotel gästesperre dsgvo, gast sperren booking.com, hotel hausverbot gast, little hotelier gastnotizen]
feature: automated-checks
demoPath: /automated-checks/watchlist
cover: /images/blog/demo/en/automated-checks-do-not-rebook-list.webp
coverAlt: "Liste Do-not-rebook in Hotelier Tools: die Karte der nächtlichen Prüfung, eine Reservierungsprüfung mit einem starken Treffer und der sachlichen Begründung sowie ein Eintrag mit Edit, Deactivate und Delete"
faq:
  - q: "Ist es für ein Hotel legal, eine schwarze Liste von Gästen zu führen?"
    a: "In der EU und im Vereinigten Königreich kann es das sein, wenn Sie es als berechtigtes Interesse begründen können, nur objektive Tatsachen erfassen, Einträge nicht länger als nötig aufbewahren und jeden Fall von einer Person entscheiden lassen. Die Regeln unterscheiden sich je nach Land, wenden Sie sich im Zweifel an Ihre Datenschutzbehörde."
  - q: "Muss ich Gäste über meine Sperrliste informieren?"
    a: "Seien Sie transparent: Erwähnen Sie in Ihrer Datenschutzerklärung, dass Sie Gäste erfassen, die nach schweren Vorfällen abgewiesen wurden. In Frankreich sagt die CNIL außerdem, dass Personen gewarnt werden sollten, bevor sie aufgenommen werden, und Zeit zum Antworten erhalten."
  - q: "Kann ein Gast einsehen, was ich über ihn notiert habe?"
    a: "Ja. Nach dem Auskunftsrecht der DSGVO kann ein Gast eine Kopie der Daten verlangen, die Sie über ihn halten, einschließlich der Begründung auf Ihrer Liste. Normalerweise haben Sie einen Monat zur Antwort, ein guter Grund, nur Tatsachen zu notieren."
  - q: "Kann ich einen Gast bei Booking.com sperren?"
    a: "Ja. Öffnen Sie im Extranet die Reservierung, klicken Sie auf Report guest misconduct, wählen Sie das Szenario und setzen Sie das Häkchen, um den Gast künftig an Buchungen Ihrer Unterkunft zu hindern. Sie können vom Check-in bis sieben Tage nach dem Check-out melden."
  - q: "Storniert Hotelier Tools die Buchung eines gelisteten Gastes?"
    a: "Nein. Die Liste Do-not-rebook löst nur einen Alarm auf der Seite Issues und in der Berichts-E-Mail aus. Sie storniert, lehnt ab oder ändert nie eine Buchung: Eine Person entscheidet."
---

Ja, in der EU und im Vereinigten Königreich dürfen Sie eine Liste von Gästen führen, die Sie nicht wieder aufnehmen wollen, solange Sie sie als berechtigtes Interesse begründen können, nur objektive Tatsachen erfassen, Einträge nicht länger als nötig aufbewahren und jeden Fall eine Person entscheiden lassen, nicht eine Software. Das Help Center von Little Hotelier beschreibt keine Markierung "nicht vermieten", und Gästeprofile können keine Notizen speichern. Praktisch bewährt sich eine kurze, sachliche Liste, die Sie warnt, wenn ein gelisteter Gast erneut bucht, plus die eigene Sperrfunktion von Booking.com.

::callout{type="warning" title="Keine Rechtsberatung"}
Das sind allgemeine Informationen, Stand Oktober 2026. Datenschutz- und Gleichbehandlungsregeln unterscheiden sich je nach Land. Für alles, was über eine einfache interne Liste hinausgeht, fragen Sie einen Anwalt oder Ihre nationale Datenschutzbehörde.
::

## Ist eine Sperrliste für Gäste nach der DSGVO legal?

Sie kann es sein. Eine Sperrliste besteht aus personenbezogenen Daten, also gilt dafür jede Regel der DSGVO. Das frühere Beratungsgremium der EU zum Datenschutz, die Artikel-29-Datenschutzgruppe, nannte schwarze Listen "an intrusion" (einen Eingriff) und sagte, sie dürften nur rechtmäßig existieren, wenn sie die üblichen Grundsätze und die Rechte der gelisteten Personen achten ([Working Document on Blacklists, WP 65](https://ec.europa.eu/justice/article-29/documentation/opinion-recommendation/files/2002/wp65_en.pdf)).

Für ein Hotel passt als Rechtsgrundlage normalerweise das **berechtigte Interesse** (Art. 6 Abs. 1 lit. f DSGVO): Schutz Ihres Personals, Ihres Eigentums und Ihrer Einnahmen. Die britische ICO beschreibt es als dreiteiligen Test ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/legitimate-interests/)):

1. **Zweck:** Gibt es ein echtes Interesse? Eine Wiederholung unbezahlter Aufenthalte, von Schäden oder Aggression zu vermeiden, ist eines.
2. **Erforderlichkeit:** Ist die Liste ein gezielter, verhältnismäßiger Weg dorthin, ohne weniger eingreifende Alternative?
3. **Abwägung:** Würde der Gast sie vernünftigerweise erwarten, und vermeidet sie ungerechtfertigten Schaden für ihn?

Der Europäische Datenschutzausschuss nennt dieselben drei Bedingungen in seinen [Leitlinien 1/2024 zum berechtigten Interesse](https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202401_legitimateinterest_en.pdf). Halten Sie Ihre Antworten in einem kurzen Dokument fest. Diese Aufzeichnung ist Ihr Nachweis, falls jemand fragt.

Manche Länder haben eigene Erwartungen. In Frankreich sagt die CNIL, ein Unternehmen müsse Personen mitteilen, dass es eine solche Liste gibt und wozu sie dient, sie **vor** der Aufnahme warnen und ihnen angemessen Zeit zum Antworten geben ([CNIL](https://www.cnil.fr/fr/cnil-direct/question/liste-noire-doit-minformer-que-je-suis-fiche)).

## Was Sie erfassen und was nie

Halten Sie jeden Eintrag so kurz, dass es Ihnen nichts ausmachen würde, wenn der Gast ihn läse. Nach dem Auskunftsrecht der DSGVO kann er das verlangen.

| Feld | Beispiel | Warum |
|---|---|---|
| Name und ein starkes Merkmal | E-Mail oder Telefonnummer, die Sie bereits haben | Damit ein Treffer zuverlässig ist |
| Aufenthalt und Nummer | 12.–14. März 2026, Reservierung 10234 | Verknüpft mit den Tatsachen |
| Was geschah, als Tatsachen | "Ohne Zahlung abgereist, 2 Nächte (240 €). Drei Zahlungsanfragen unbeantwortet." | Objektiv und belegbar |
| Entscheidung | Sperren oder warnen und prüfen | Eine Person hat entschieden |
| Prüfdatum | März 2027 | Nicht ewig aufbewahrt |

**Nie erfassen:**

- Meinungen und Etiketten ("unhöflich", "zwielichtig"). Beschreiben Sie stattdessen das Verhalten: "Um 02:00 Uhr das Nachtpersonal angeschrien, zwei Gäste haben sich schriftlich beschwert."
- Gesundheit, ethnische Herkunft, Religion, sexuelle Orientierung oder politische Ansichten. Das sind besondere Kategorien nach Art. 9 DSGVO.
- Beschuldigungen von Straftaten. Daten über Straftaten unterliegen nach Art. 10 zusätzlichen Grenzen, schreiben Sie also, was Sie gesehen haben ("beim Check-out fehlten zwei Handtücher und eine Lampe"), kein Urteil.
- Wer der Gast ist, als Grund. Eine Liste ist für das, was jemand getan hat, nie für Nationalität, Aussehen oder ein anderes persönliches Merkmal. Das wäre Diskriminierung.

Den vollständigen Text der DSGVO finden Sie auf [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

### Wie lange jemand auf der Liste bleibt

Die DSGVO nennt keine Zahl von Jahren. Sie sagt, Daten dürften nicht länger als nötig aufbewahrt werden (Art. 5). Wählen Sie eine Prüffrist, die zur Schwere passt, zum Beispiel ein Jahr für einen lauten Aufenthalt und länger für schwere Schäden, und entfernen Sie Einträge, die sich nicht mehr begründen lassen.

Erwähnen Sie die Liste in Ihrer Datenschutzerklärung (Art. 13). Fragt ein Gast, was Sie über ihn halten, oder widerspricht er, antworten Sie unverzüglich und innerhalb eines Monats (Art. 12).

## Was Little Hotelier und Booking.com nativ bieten

### In Little Hotelier

- **Notizen gehören an Reservierungen, nicht an Gäste.** Gästeprofile enthalten Name, Anschrift, Telefon und Ausweisdaten, aber laut Help Center lassen sich Notizen zu Gästen nicht in Profilen speichern, nur an den zugehörigen Reservierungen ([Help Center](https://helpcentre.littlehotelier.com/en/articles/8673754-update-and-manage-guest-profiles)). Der Reiter **Notes** der Reservierung ist für interne Notizen nur für das Personal ([Help Center](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)).
- **Sie können Gäste suchen** im Reiter **Guests** nach Name, E-Mail, Telefon oder Buchungsnummer.
- **Die Grenzen:** Jemand muss jede neue Buchung von Hand suchen. Und Little Hotelier maskiert persönliche Gästedaten 180 Tage nach dem Check-out ([Help Center](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports)), eine Notiz zum Aufenthalt des Vorjahrs ist daher kaum noch über den Namen zu finden.

Eine praktikable manuelle Routine: Schreiben Sie die Tatsachen in die Notizen der Reservierung, führen Sie separat eine kurze Liste mit E-Mail und Telefon des Gastes und prüfen Sie jede neue Buchung dagegen.

### Bei Booking.com

Booking.com hat eine eigene Sperre. Gehen Sie im Extranet zu **Reservations**, öffnen Sie die Buchung des Gastes, klicken Sie auf **Report guest misconduct**, wählen Sie das Szenario, fügen Sie unter **Details** einen kurzen sachlichen Kommentar hinzu, setzen Sie das Häkchen, um den Gast künftig an Buchungen Ihrer Unterkunft zu hindern, und klicken Sie auf **Submit report**. Meldungen sind vom Check-in bis sieben Tage nach dem Check-out möglich ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/first-steps/first-reservations/reporting-guest-misconduct)).

Das gilt nur für Booking.com. Derselbe Gast kann weiterhin direkt oder über einen anderen Kanal buchen.

## Darf ich eine OTA-Buchung eines gelisteten Gastes ablehnen oder stornieren?

Bei Booking.com nicht im Alleingang. **Request to cancel reservation** sendet dem Gast eine E-Mail mit der Bitte um Bestätigung, und die Buchung bleibt aktiv, bis er zustimmt. Sie können es bis 48 Stunden vor dem Check-in nutzen, danach bittet Booking.com Sie, den Gast an den Kundenservice zu verweisen ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/reservations/changes-cancellations/handling-cancellations-and-guests-cancellation-requests)). Ungültige Karten folgen einem eigenen Ablauf: siehe [Booking.com Kreditkarte ungültig oder No-Show](/blog/booking-com-invalid-card-no-show).

In der Praxis heißt das: den Gast früh kontaktieren, ruhig erklären und eine kostenlose Stornierung anbieten. Bei Direktbuchungen gelten Ihre eigenen Bedingungen. In beiden Fällen gibt Ihnen ein Alarm in der Nacht, in der die Buchung eintrifft, Tage zum Handeln statt Minuten an der Rezeption.

## So erhalten Sie einen Alarm, wenn ein gelisteter Gast erneut bucht

Hotelier Tools hat eine **Do-not-rebook list** (Beta) unter `/automated-checks/watchlist`. Jede Nacht werden die neuen Buchungen des Tages und die anstehenden Anreisen mit der Liste verglichen. Ein Treffer wird zu einem Issue und einer Zeile in der Berichts-E-Mail.

1. **Gast aus einer Reservierung hinzufügen.** Klicken Sie unter **Issues** oder im Reservierungsbereich des Posteingangs auf **Do not rebook…**. Wählen Sie den Gast (Buchenden oder Mitreisenden), einen Schweregrad (etwa **Do not accept again**) und eine sachliche Begründung.
2. **Oder von Hand hinzufügen.** Klicken Sie auf **Add a guest** oder suchen Sie mit **Find a reservation…** nach Aufenthaltsdaten, Name, E-Mail oder Telefon.
3. **Nächtliche Aufgabe erstellen.** Klicken Sie auf derselben Seite auf **Every night at 23:30, over the bookings made that day**. Ohne sie wird nichts verglichen.
4. **Entscheiden, wenn ein Treffer erscheint.** Öffnen Sie das Issue, sehen Sie sich die Tatsachen an und entscheiden Sie, was zu tun ist. Die Software entscheidet nie für Sie.
5. **Aufräumen.** **Deactivate** stoppt Alarme und behält den Datensatz. **Delete** entfernt die personenbezogenen Daten endgültig.

::screenshot{src="/images/blog/demo/en/automated-checks-do-not-rebook-add-dialog.webp" alt="Dialog Add to the do-not-rebook list, aus einer Reservierung befüllt mit aus Little Hotelier gelesenen Angaben: vollständiger Name, Dokument, E-Mail, Telefon, Nationalität, Geburtsdatum, Schweregrad Do not accept again, eine sachliche Begründung, Abgleichsregeln mit optionalen Warnungen bei ähnlichem Namen und ähnlicher Telefonnummer sowie die Schaltflächen Cancel und Add to list" caption="Einen Gast aus einer Reservierung hinzufügen: Die Angaben kommen aus Little Hotelier, und die Begründung sollte nur Tatsachen enthalten. Ein Treffer löst einen Alarm aus, nichts wird storniert oder geändert." path="/automated-checks/watchlist"}
::

### Wie es einen Gast erkennt, dessen Daten sich geändert haben

- **Starker Treffer:** dieselbe Dokumentnummer, die exakt gleiche E-Mail-Adresse oder eine Telefonnummer, die in den letzten 8 oder mehr Ziffern übereinstimmt.
- **Schwacher Treffer:** derselbe Name **plus** dieselbe Nationalität oder dasselbe Geburtsdatum.
- **Ein Name allein führt nie zu einem Treffer.** Für einen Eintrag können Sie "ähnlicher Name" oder "ähnliche Telefonnummer" aktivieren (ähnliche Schreibweisen, ein Zahlendreher). Diese lösen immer nur eine Warnung aus.

Eine Person im Prozess zu halten ist auch rechtlich wichtig: Art. 22 DSGVO schränkt Entscheidungen ein, die ausschließlich automatisiert getroffen werden und jemanden erheblich beeinträchtigen.

::callout{type="info" title="Unabhängiges Tool"}
Hotelier Tools steht in keiner Verbindung zu SiteMinder oder Little Hotelier und wird von beiden nicht empfohlen. Es verbindet sich mit dem eigenen Little-Hotelier-Login Ihres Hotels.
::

::demo-cta{path="/automated-checks/watchlist"}
::

Derselbe nächtliche Lauf kann auch Zimmer, Ausweise und Zahlungen prüfen. Siehe die [tägliche Checkliste für die Rezeption](/blog/hotel-front-desk-checklist-automation) und die Seite [Automated checks](/tools/bot/automated-checks).

## Dürfen Hotels eine Sperrliste teilen?

Seien Sie sehr vorsichtig. Eine Liste, die Sie mit anderen Hotels teilen, ist eine andere Verarbeitung: Die anderen Hotels hatten nie mit dem Gast zu tun, und der Schaden für jemanden, der zu Unrecht gelistet ist, wächst mit jedem Haus, das sie sieht. Die Artikel-29-Datenschutzgruppe stellte fest, dass die üblichen geteilten Listen, etwa Schuldnerdateien, auf besonderen nationalen Gesetzen beruhen (WP 65, oben verlinkt). Teilen Sie Einträge nicht zwischen Unternehmen, ohne rechtlichen Rat einzuholen.

## Zusammenfassung

- Eine Sperrliste kann nach der DSGVO rechtmäßig sein: berechtigtes Interesse, nur Tatsachen, ein Prüfdatum und eine Person, die entscheidet.
- Erfassen Sie, was geschehen ist, mit Daten und Beträgen. Nie Meinungen, sensible Merkmale oder Beschuldigungen von Straftaten.
- Little Hotelier hält Notizen nur an Reservierungen, Booking.com lässt Sie einen Gast über **Report guest misconduct** sperren.
- Die **Do-not-rebook list** von Hotelier Tools gleicht neue Buchungen jede Nacht mit Ihrer Liste ab und warnt Sie. Sie storniert nie etwas.
