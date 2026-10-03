---
title: "INE-Beherbergungsstatistik in Spanien: Hotelumfrage mit Little Hotelier ausfüllen"
seoTitle: "INE-Beherbergungsstatistik Spanien mit Little Hotelier"
description: "Pflicht, wenn das INE Ihr Hotel auswählt, Bußgelder bis 30.050 €. Was die Umfrage verlangt, wie IRIA funktioniert und wie Sie sie mit Little Hotelier ausfüllen."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [ine beherbergungsstatistik spanien, encuesta ocupación hotelera ine, ine umfrage hotel spanien, iria ine umfrage, ine hotelumfrage pflicht, beherbergungsstatistik hotel spanien]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (INE HOT survey) in Hotelier Tools für 27. September bis 3. Oktober 2026: 8 Anreisen, 24 Übernachtungen, 3,4 Gäste pro Tag und 3 mit fehlenden Daten, über den Tabs Daily summary, By guest origin, Rooms, ADR by client und Data quality"
faq:
  - q: "Ist die INE-Umfrage für ein kleines Hostal oder B&B Pflicht?"
    a: "Ja, sobald das INE Ihren Betrieb ausgewählt hat. Die Umfrage erfasst alle Beherbergungsbetriebe vom Typ Hotel in Spanien, auch Hostales und Pensionen. Laut Fragebogen ist die Teilnahme nach dem spanischen Statistikgesetz verpflichtend. Wenn Sie einen Brief oder eine E-Mail des INE mit Ordnungsnummer und Passwort erhalten haben, müssen Sie antworten."
  - q: "Wie hoch ist das Bußgeld, wenn ich die INE-Umfrage nicht beantworte?"
    a: "Der INE-Fragebogen zitiert das Statistikgesetz: 60,10 bis 300,51 € bei leichten Verstößen, 300,52 bis 3.005,06 € bei schweren und 3.005,07 bis 30.050,61 € bei sehr schweren, etwa bei falschen Angaben. Eine verspätete oder fehlende Antwort gilt als leicht, solange sie die Statistik nicht ernsthaft beeinträchtigt."
  - q: "Braucht die INE-Umfrage Reisepass- oder DNI-Nummern meiner Gäste?"
    a: "Nein. Das INE fragt Summen ab: wie viele Gäste angereist sind und wie viele Nächte sie geblieben sind, gruppiert nach Wohnsitzland oder spanischer Region, dazu Zimmer, Preise und Personal. Es werden keine Ausweisnummern, Namen oder Adressen übermittelt. Die Identitätsdaten der Gäste gehen an SES.Hospedajes, eine separate Pflicht."
  - q: "Zählt bei der INE-Umfrage die Staatsangehörigkeit oder der Wohnort des Gastes?"
    a: "Der Wohnort. Das INE ordnet Reisende nach Wohnsitz ein: Gäste mit Wohnsitz in Spanien nach Region, alle anderen nach Land. Ein deutscher Staatsbürger, der in Valencia lebt, zählt als Einwohner von Valencia. Achten Sie deshalb darauf, dass Land und Provinz in der Adresse des Gastes ausgefüllt sind."
  - q: "Kann ich das auch für Ferienwohnungen oder Landhäuser nutzen?"
    a: "Apartments, Campingplätze, Landhäuser (casas rurales) und Albergues beantworten eigene INE-Fragebögen. Hotelier Tools erstellt die Hotelumfrage (HOT) für Beherbergungsbetriebe vom Typ Hotel, also Hotels, Hostales und Pensionen."
  - q: "Ist Hotelier Tools ein offizielles Produkt des INE oder von Little Hotelier?"
    a: "Nein. Hotelier Tools ist unabhängig und weder mit dem INE, SiteMinder oder Little Hotelier verbunden noch von ihnen empfohlen. Es liest Ihre Reservierungen mit Ihrem eigenen Little-Hotelier-Login und sendet den Bericht über das IRIA-System des INE mit dem eigenen IRIA-Zugang Ihres Betriebs."
---

Wenn das INE (das spanische Nationale Statistikinstitut) Ihr Hotel oder Hostal für seine Belegungsumfrage ausgewählt hat, ist die Antwort Pflicht. Auf dem INE-Formular selbst stehen Bußgelder von 60,10 € bis 30.050,61 €. Sie antworten im **IRIA**-Webportal des INE oder per XML-Datei. In beiden Fällen melden Sie Anreisen und Übernachtungen nach Wohnort der Gäste, belegte Zimmer, Durchschnittspreise je Kundentyp und das Personal.

Little Hotelier enthält die meisten dieser Zahlen. Diese Anleitung zeigt, was das INE verlangt, wie Sie die Daten aus Little Hotelier zusammentragen und wie Hotelier Tools den Bericht für Sie erstellt, prüft und sendet. Sie richtet sich an deutschsprachige Eigentümer, die ein Haus in Spanien betreiben. Die offiziellen spanischen Begriffe bleiben deshalb stehen, mit deutscher Erklärung.

::callout{type="info" title="Zuletzt geprüft: Oktober 2026"}
Die folgenden Angaben stammen aus der [Methodik der Hotelumfrage 2025](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) des INE und seinem [Hotelfragebogen](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). Für Termine und Fristen gilt immer das Schreiben oder die E-Mail, die Sie vom INE bekommen haben.
::

## Was ist die INE-Beherbergungsstatistik (Encuesta de Ocupación Hotelera)?

Der offizielle Name lautet **Encuesta de Ocupación en Alojamientos Turísticos** (Belegungsumfrage in touristischen Unterkünften). Der Hotelteil heißt **Encuesta de Ocupación Hotelera (EOH)**. Das INE veröffentlicht damit monatlich Zahlen zu Reisenden, Übernachtungen, Auslastung und Beschäftigten in der Hotellerie, für ganz Spanien, jede Region und die wichtigsten Tourismusgebiete.

Erfasst wird jeder *establecimiento hotelero* (Hotelbetrieb): Hotel, Aparthotel, Motel, **Hostal**, **Pensión**, Fonda und Casa de Huéspedes. Touristische Apartments, Campingplätze, Landhäuser und *albergues* (Herbergen) haben eigene Fragebögen derselben Familie ([INE: Statistiken zu Gastgewerbe und Tourismus](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Wer muss sie beantworten?

Nicht jedes Hotel. Das INE zieht eine Zufallsstichprobe nach Provinz, Kategorie und Größe. Fünf-Sterne-Hotels und die größten Betriebe jeder Gruppe sind immer dabei. Ein ausgewähltes Hotel bleibt normalerweise vier Jahre in der Stichprobe, etwa ein Viertel der Stichprobe wird jeweils erneuert ([Methodik, Abschnitt 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Wenn Sie ausgewählt wurden, schreibt das INE Sie an. Sie erhalten eine **Ordnungsnummer** (*número de orden*, oft als „NOrden“ bezeichnet) und ein Passwort für das Portal. Diese Nachricht ist Ihr Zeichen, dass die Umfrage jetzt für Sie gilt.

## Ist die INE-Umfrage Pflicht? Wie hoch ist das Bußgeld?

Ja, sobald Sie ausgewählt sind. Der Fragebogen trägt den Vermerk *„Estadística de cumplimentación obligatoria“* (Statistik mit Auskunftspflicht). Das spanische Statistikgesetz (Ley 12/1989, LFEP) verlangt, dass Auskunftspflichtige „wahrheitsgemäß, genau, vollständig und fristgerecht“ antworten (Artikel 10.2). Die Gesetze 4/1990 und 13/1996 machen diese Umfrage verpflichtend.

Bußgelder laut INE-Formular (Artikel 51 LFEP):

| Verstoß | Beispiel im Gesetz | Bußgeld |
|---|---|---|
| Leicht (*leve*) | Verspätete, fehlende oder unvollständige Daten, ohne ernsten Schaden | 60,10 bis 300,51 € |
| Schwer (*grave*) | Dasselbe, mit ernstem Schaden für die Statistik | 300,52 bis 3.005,06 € |
| Sehr schwer (*muy grave*) | Falsche Daten oder wiederholte Verweigerung | 3.005,07 bis 30.050,61 € |

Die Beispiele stammen aus Artikel 50 des Gesetzes [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Ihre Angaben fallen unter das Statistikgeheimnis (Artikel 13 LFEP). Nach Angaben des INE gibt es Einzeldaten nicht an andere Behörden weiter, außer an Statistikämter, die demselben Geheimnis unterliegen ([INE-Informationen für Auskunftspflichtige](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## Welche Daten verlangt die INE-Umfrage?

| Was das INE fragt (spanischer Begriff) | Was Sie melden | Wo Sie es finden |
|---|---|---|
| *Viajeros entrados* | Angereiste Gäste, nach Wohnort | Reservierungen und Gästeadressen |
| *Pernoctaciones* | Übernachtungen, nach Wohnort | Aufenthaltsdaten und Zahl der Gäste |
| *Habitaciones ocupadas* | Belegte Zimmer (Doppel- oder Einzelnutzung) | Zimmerzuweisungen |
| *Camas supletorias* | Genutzte Zustell- und Kinderbetten | Ihre eigenen Aufzeichnungen |
| *Personal ocupado* | Beschäftigte im Monat: unbezahlt, bezahlt fest, bezahlt befristet | Lohnbuchhaltung, nicht Little Hotelier |
| *ADR por tipo de cliente* | Durchschnittlicher Tagespreis und Anteil der Zimmer je Kundentyp | Preise und Buchungsquelle |

Drei Details stolpern viele:

- **Wohnort, nicht Staatsangehörigkeit.** Das INE gruppiert Gäste nach ihrem Wohnsitz: Gäste aus Spanien nach Region (die XML-Datei verwendet die Provinz), alle anderen nach Land. Ein französischer Staatsbürger mit Wohnsitz in Málaga zählt als Málaga.
- **Für den ADR gelten strenge Regeln.** Das INE will den Preis eines Doppelzimmers, nur Zimmer (ohne Frühstück oder Verpflegung), brutto vor Provisionen und ohne Mehrwertsteuer. Er wird auf neun Kundentypen aufgeteilt: traditioneller Reiseveranstalter, traditionelles Reisebüro, Firmen, Einzelpersonen, Gruppen, Direktbuchung auf Ihrer Website, Online-Reiseveranstalter, Online-Reisebüro und Sonstige.
- **Kinderbetten sind Zustellbetten.** Das INE zählt Kinderbetten als *camas supletorias*. Geben Sie sie an, sonst können die gemeldeten Übernachtungen Ihre Bettenzahl übersteigen.

Die Umfrage verlangt keine Reisepass- oder DNI-Nummern. Es sind Summenwerte, kein Gästeverzeichnis. Die Meldung der Gäste an die Polizei ist eine eigene Pflicht: siehe [SES Hospedajes mit Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Welchen Zeitraum deckt sie ab, und wann ist sie fällig?

Laut INE-Methodik 2025 deckt der Basisfragebogen **sieben aufeinanderfolgende Tage jedes Monats ab, zufällig gewählt**, sodass alle Hotels zusammen den ganzen Monat abdecken. Drei-, Vier- und Fünf-Sterne-Hotels müssen zusätzlich Summen für den ganzen Monat angeben. Eine XML-Datei enthält jeden Tag des Berichtsmonats ([Methodik, Abschnitte 7 und 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

Der ergänzende Fragebogen (Personal und ADR) ist laut [INE-Formular](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf) innerhalb von **fünf Kalendertagen nach Ende des Monats** fällig, auf den sich die Daten beziehen.

In der Praxis gelten genau die Zeiträume und die Frist aus der Anfrage des INE an Ihren Betrieb.

## Wie senden Sie die Daten: IRIA-Webformular oder XML-Datei?

1. **IRIA-Webformular.** IRIA ist das Online-Portal des INE zur Datenerhebung ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Sie geben die Ordnungsnummer und das Passwort aus der INE-Nachricht ein und tippen die Zahlen in ein Formular, das den Papierfragebogen nachbildet. Beim Absenden stellt IRIA eine Bescheinigung mit einer eindeutigen Nummer aus ([IRIA-Hilfe](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Bewahren Sie sie auf.
2. **XML-Datei.** Verwaltungssoftware kann eine Datei im veröffentlichten Format des INE erzeugen und senden, sodass niemand Zahlen abtippen muss. Der [Monatsfragebogen](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) des INE verweist außerdem auf sein System ARCE für XML-Uploads.

Von Hand heißt das: jede Reservierung des Zeitraums durchgehen und Gäste und Nächte je Land und je spanischer Provinz zählen. Dort geht die Zeit verloren, und dort schleichen sich Fehler ein.

## So pflegen Sie Gästeland und Provinz in Little Hotelier richtig

Der Gästedatensatz in Little Hotelier hat die Felder, die das INE braucht, bereits: **Country** (Land) und **Province/Region** (Provinz/Region) in der Adresse, dazu **Nationality** (Staatsangehörigkeit). Das Problem: Buchungen von Booking.com und anderen Kanälen kommen oft ohne Adresse an, die Felder bleiben dann leer.

Drei Gewohnheiten lösen das meiste:

1. Tragen Sie Land und Provinz beim Check-in ein, aus dem Ausweis des Gastes oder mit einer kurzen Frage.
2. Installieren Sie das kostenlose Userscript [Easy Save Province and Country](/tools/ui/easy-save-province-country). Wenn Sie in das Feld für die Provinz klicken, erscheint eine Liste der spanischen Provinzen, und die Auswahl setzt das Land auf Spanien.
3. Lassen Sie [automatische Prüfungen](/tools/bot/automated-checks) Reservierungen mit fehlendem Land oder fehlender Provinz melden, nach der Buchung, bei der Anreise und beim Check-out, solange der Gast noch da ist und Sie nachfragen können.

::screenshot{src="/images/scripts/easy-save-province-country/to.png" alt="Gäste-Tab in Little Hotelier mit der Liste spanischer Provinzen von Easy Save Province and Country unter dem Feld Province/Region" caption="Das kostenlose Userscript macht aus dem Provinzfeld eine Auswahlliste und setzt das Land für Sie."}
::

## Der schnellere Weg: der INE-Bericht direkt aus Little Hotelier

Stand Oktober 2026 haben wir im Hilfecenter von Little Hotelier keinen Export für die INE-Umfrage gefunden. Hotelier Tools schließt diese Lücke: Es liest Ihre Reservierungen mit Ihrem eigenen Little-Hotelier-Login, berechnet die INE-Zahlen, validiert sie und sendet das XML über IRIA. Die Funktion INE reports ist als stabil eingestuft.

### 1. Betrieb einmalig einrichten

Öffnen Sie **INE Setup** (`/ine-setup`). Geben Sie Ihre IRIA-Ordnungsnummer (**NOrden**) und das Passwort ein, klicken Sie auf **Test IRIA connection**, tragen Sie Adresse und Kapazität des Betriebs ein und wählen Sie Typ und Kategorie. Diese Angaben kommen in den Kopf der XML-Datei. Das Passwort wird verschlüsselt gespeichert und nie im Klartext angezeigt.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="INE Setup, Seite Establishment in Hotelier Tools: ein Hinweis, dass die Demo schreibgeschützt ist, die Karte mit dem IRIA-Zugang und dem Feld NOrden, das maskierte, verschlüsselt gespeicherte IRIA-Passwort und eine Schaltfläche Test IRIA connection, darunter die Betriebsdaten mit Firmenname und Adresse" caption="Geben Sie Ihren IRIA-Zugang und die Betriebsdaten einmalig ein." path="/ine-setup"}
::

### 2. Bericht für den vom INE verlangten Zeitraum erstellen

Öffnen Sie **Guest Origins** (`/reports/guest-origins`), wählen Sie den Zeitraum aus der INE-Anfrage und klicken Sie auf **Generate report**. Hotelier Tools liest diese Reservierungen und zählt Anreisen und Übernachtungen je Tag nach spanischer Region oder Land, dazu belegte Zimmer, Zustellbetten und Durchschnittspreis je Kundentyp. Tabs gliedern das Ergebnis in **Daily summary**, **By guest origin**, **Rooms**, **ADR by client** und **Data quality**.

Wenn das Postfach, das die INE-E-Mails empfängt, mit dem Hotelier-Tools-Posteingang verbunden ist, zeigt die E-Mail des INE eine Karte mit einer Schaltfläche, die den Bericht genau für den angefragten Zeitraum erstellt. Das einmalige IRIA-Passwort bleibt in der E-Mail.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="Tab By guest origin des Guest-Origins-Berichts: Anreisen und Aufenthalte je Nacht vom 27.9. bis 3.10., gruppiert unter Other countries (Irlanda, Países Bajos, Reino Unido) und Missing/Unknown für Gäste ohne spanische Provinz, über dem Beginn der Karte zur INE-Übermittlung" caption="Anreisen und Aufenthalte jeder Nacht nach Herkunft der Gäste. Gäste ohne Provinz stehen separat, damit Sie sie korrigieren können." path="/reports/guest-origins"}
::

### 3. Gäste ohne Herkunft korrigieren

Reservierungen ohne Staatsangehörigkeit oder Provinz werden markiert. Korrigieren Sie sie in Little Hotelier und aktualisieren Sie dann nur diese Zeilen. Den ganzen Bericht müssen Sie nicht neu erstellen.

### 4. Validieren, Vorschau ansehen und senden

Klicken Sie auf **Validate for the INE**, dann auf **Preview XML**, um genau zu sehen, was gesendet wird, und danach auf **Send to the INE**. Der Bericht geht an IRIA, und die Empfangsbestätigung des INE (*justificante*) wird dazu gespeichert.

### 5. Jede Empfangsbestätigung aufbewahren

Unter **Saved Reports** (`/reports/list`) steht jeder Bericht mit Zeitraum, Status und INE-Bestätigung. Ein gesendeter Bericht lässt sich nicht mehr ändern oder löschen, sein XML können Sie aber weiterhin herunterladen.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Seite Saved reports in Hotelier Tools mit drei Guest-Origin-Berichten im Status Draft, mit den Spalten Period, Status, INE receipt, Staff und Created, den Aktionen View und Löschen und einer Schaltfläche New report" caption="Jeder Bericht mit Zeitraum, Status und, nach dem Senden, der Bestätigung des INE." path="/reports/list"}
::

::callout{type="note" title="Ausprobieren in der Demo"}
Die öffentliche Demo enthält ein fiktives Hotel mit einem gespeicherten INE-Bericht. Das Senden an das INE ist dort abgeschaltet, also erreicht nichts das INE. Geben Sie dort niemals echte IRIA-Zugangsdaten ein.
::

::demo-cta{path="/reports/guest-origins"}
::

### Warum lehnt IRIA einen Fragebogen ab?

Entwickler eines Open-Source-Hotel-PMS, die wiederkehrende Ablehnungen behoben haben, nennen diese Ursachen ([commitsun/pms, Pull Request 233](https://github.com/commitsun/pms/pull/233)):

- der Hotelfragebogen wurde für eine Unterkunft gesendet, die als Apartments registriert ist
- ein Zeitraum über zwei Monate, wodurch sich Tagesnummern in der Datei wiederholen
- Zustell- oder Kinderbetten nicht angegeben, sodass die Übernachtungen die angegebenen Betten übersteigen
- ein Gast aus einem Land ohne Standard-ISO-Code, wodurch das Land leer bleibt

Führen Sie vor jedem Senden die Validierung durch und halten Sie Typ und Kategorie in der Einrichtung deckungsgleich mit den Daten, die das INE von Ihnen hat.

## Zusammenfassung

- Die INE-Umfrage ist Pflicht, sobald das INE Ihren Betrieb auswählt. Bei falschen Angaben drohen Bußgelder bis 30.050,61 €.
- Sie verlangt Summen nach Wohnort der Gäste (nicht Staatsangehörigkeit), Zimmer, Zustellbetten, ADR je Kundentyp und Personal. Keine Ausweisnummern.
- Senden Sie sie von Hand über IRIA oder als XML-Datei aus einer Software.
- Halten Sie Land und Provinz in Little Hotelier ausgefüllt, mit dem kostenlosen [Provinz-Userscript](/tools/ui/easy-save-province-country) und [automatischen Prüfungen](/tools/bot/automated-checks).
- Die [INE-Berichte von Hotelier Tools](/tools/bot/ine-reports) erstellen, validieren und senden den Bericht über IRIA und bewahren die Bestätigungen auf. Sie sind bis zum 10. Januar 2027 für jedes Hotel kostenlos. Hotelier Tools ist unabhängig und weder mit SiteMinder, Little Hotelier oder dem INE verbunden noch von ihnen empfohlen.

Für das Gästeverzeichnis bei der Polizei und die Regeln anderer Länder lesen Sie [Meldepflicht für Gäste nach Ländern](/blog/guest-registration-rules-by-country).
