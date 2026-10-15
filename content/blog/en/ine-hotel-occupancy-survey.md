---
title: "How to fill in the INE hotel occupancy survey from Little Hotelier (Spain)"
seoTitle: "INE hotel occupancy survey from Little Hotelier (Spain)"
description: "Mandatory if the INE selects your hotel, with fines up to €30,050. What the survey asks, how IRIA works, and how to fill it in from Little Hotelier."
date: 2026-10-03
category: compliance
tags: [ine, spain, compliance, reports, little hotelier]
keywords: [ine hotel occupancy survey, ine survey spain hotel, encuesta ocupacion hotelera ine, encuesta ine hoteles, iria ine encuesta, encuesta ine obligatoria multa]
feature: ine-reports
demoPath: /reports/guest-origins
cover: /images/blog/demo/en/ine-guest-origins-report.webp
coverAlt: "Guest Origin Statistics (INE HOT survey) in Hotelier Tools for 27 September to 3 October 2026: 8 arrivals, 24 overnight stays, 3.4 guests a day and 3 with missing data, above the Daily summary, By guest origin, Rooms, ADR by client and Data quality tabs"
faq:
  - q: "Is the INE occupancy survey mandatory for a small hostal or B&B?"
    a: "Yes, if the INE has selected your establishment. The survey covers every hotel-type property in Spain, including hostales and pensiones, and the INE questionnaire states that answering is compulsory under Spain's statistics law. If you have received an INE letter or email with an order number and password, you must answer."
  - q: "How much is the fine for not answering the INE survey?"
    a: "The INE questionnaire quotes the statistics law: €60.10 to €300.51 for minor infringements, €300.52 to €3,005.06 for serious ones and €3,005.07 to €30,050.61 for very serious ones, such as sending false data. A late or missing answer is minor unless it seriously harms the statistic."
  - q: "Does the INE survey need my guests' passport or DNI numbers?"
    a: "No. The INE asks for totals: how many guests arrived and how many nights they stayed, grouped by country of residence or Spanish region, plus rooms, rates and staff. No ID numbers, names or addresses are sent. Guest identity data goes to SES.Hospedajes, which is a separate obligation."
  - q: "Does the INE survey use the guest's nationality or where they live?"
    a: "Where they live. The INE classifies travelers by place of residence: Spanish residents by region and everyone else by country. A German citizen who lives in Valencia counts as a Valencia resident, so make sure the guest's address country and province are filled in."
  - q: "Can I use this for tourist apartments or rural houses?"
    a: "Apartments, campsites, rural houses and albergues answer their own INE questionnaires. Hotelier Tools builds the hotel survey (HOT) for hotel-type establishments such as hotels, hostales and pensiones."
  - q: "Is Hotelier Tools an official INE or Little Hotelier product?"
    a: "No. Hotelier Tools is independent and not affiliated with or endorsed by the INE, SiteMinder or Little Hotelier. It reads your reservations with your own Little Hotelier login and sends the report through the INE's IRIA system with your establishment's own IRIA access."
---

If the INE (Spain's National Statistics Institute) has selected your hotel or hostal for its occupancy survey, answering is compulsory. The INE's own form quotes fines from €60.10 to €30,050.61. You answer on the INE's **IRIA** web portal or by sending an XML file. Either way you report arrivals and overnight stays by where guests live, rooms occupied, average rates by type of client, and staff.

Little Hotelier holds most of those figures. This guide shows what the INE asks for, how to collect it from Little Hotelier, and how Hotelier Tools builds, checks and sends the report for you.

::callout{type="info" title="Last verified: October 2026"}
Facts below come from the INE's [2025 hotel survey methodology](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf) and its [hotel questionnaire](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf). Your INE letter or email always has the final word on dates and deadlines.
::

## What is the INE hotel occupancy survey?

Its official name is the **Encuesta de Ocupación en Alojamientos Turísticos** (tourist accommodation occupancy survey). The hotel part is the **Encuesta de Ocupación Hotelera (EOH)**. The INE uses it to publish monthly figures on travelers, overnight stays, occupancy and hotel jobs for Spain, each region and the main tourist areas.

It covers every *establecimiento hotelero*: hotel, aparthotel, motel, **hostal**, **pensión**, fonda and casa de huéspedes. Tourist apartments, campsites, rural houses and *albergues* (hostels) have their own questionnaires in the same family ([INE: hospitality and tourism statistics](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735576863)).

### Who has to answer it?

Not every hotel. The INE draws a random sample by province, category and size. Five-star hotels and the largest properties in each group are always included. A selected hotel normally stays in the sample for four years, with about a quarter of the sample renewed ([methodology, section 6](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

If you are selected, the INE writes to you with an **order number** (*número de orden*, often shown as "NOrden") and a password for its portal. That message is your signal that the survey now applies to you.

## Is the INE survey mandatory? What is the fine?

Yes, once you are selected. The questionnaire is marked *"Estadística de cumplimentación obligatoria"*. Spain's statistics law (Ley 12/1989, LFEP) says respondents must answer "truthfully, accurately, completely and within the deadline" (article 10.2). Laws 4/1990 and 13/1996 make this survey compulsory.

Fines quoted on the INE form (article 51 LFEP):

| Infringement | Example in the law | Fine |
|---|---|---|
| Minor (*leve*) | Late, missing or incomplete data, without serious harm | €60.10 to €300.51 |
| Serious (*grave*) | The same, causing serious harm to the statistic | €300.52 to €3,005.06 |
| Very serious (*muy grave*) | False data, or repeated refusal | €3,005.07 to €30,050.61 |

The examples come from article 50 of the [Ley 12/1989 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1989-10767). Your answers are protected by statistical secrecy (article 13 LFEP). The INE says it does not share individual data with other administrations, except statistical offices bound by the same secrecy ([INE information for respondents](https://www.ine.es/dyngs/COL/index.htm?cid=441)).

## What data does the INE survey ask for?

| What the INE asks (Spanish term) | What you report | Where you find it |
|---|---|---|
| *Viajeros entrados* | Guests who arrive, by place of residence | Reservations and guest addresses |
| *Pernoctaciones* | Nights stayed, by place of residence | Stay dates and number of guests |
| *Habitaciones ocupadas* | Rooms occupied (double or single use) | Room assignments |
| *Camas supletorias* | Extra beds and cots used | Your own records |
| *Personal ocupado* | Staff that month: unpaid, paid permanent, paid temporary | Payroll, not Little Hotelier |
| *ADR por tipo de cliente* | Average daily rate and share of rooms per client type | Rates and booking source |

Three details catch people out:

- **Residence, not nationality.** The INE groups guests by where they live: Spanish residents by region (the XML file uses the province), everyone else by country. A French citizen living in Málaga counts as Málaga.
- **The ADR has strict rules.** The INE wants the rate of a double room, room only (no breakfast or board), gross of commissions and without VAT. It splits it across nine client types: traditional tour operator, traditional travel agency, companies, individuals, groups, direct booking on your website, online tour operator, online travel agency and others.
- **Cots are extra beds.** The INE counts cots as *camas supletorias*. Declare them, or the nights you report can exceed your beds.

The survey asks for no passport or DNI numbers. It is aggregate data, not a guest register. Registering guests with the police is a separate obligation: see [SES Hospedajes with Little Hotelier](/blog/ses-hospedajes-little-hotelier).

## Which dates does it cover, and when is it due?

The INE's 2025 methodology says the basic questionnaire covers **seven consecutive days of each month, chosen at random**, so that all hotels together cover the whole month. Three-, four- and five-star hotels are also asked for whole-month totals. An XML file carries every day of the reference month ([methodology, sections 7 and 8](https://www.ine.es/daco/daco42/ocuphotel/meto_eoh.pdf)).

The complementary questionnaire (staff and ADR) is due within **five calendar days after the end of the month** the data refer to, according to the [INE form](https://www.ine.es/daco/daco42/ocuphotel/eohxml_20.pdf).

In practice, use exactly the dates and deadline in the INE's request to your establishment.

## How do you send it: IRIA web form or XML file?

1. **IRIA web form.** IRIA is the INE's online data collection portal ([iria.ine.es](https://iria.ine.es/iriaPortal/contents/index.jsf)). Enter the order number and password from the INE's message, then type the figures into a form that mirrors the paper questionnaire. When you submit, IRIA issues a certificate with a unique number ([IRIA help](https://iria.ine.es/iriaPortal/contents/static/varios/ayuda.jsf)). Keep it.
2. **XML file.** Management software can generate a file in the INE's published format and send it, so nobody retypes figures. The INE's [monthly questionnaire](https://www.ine.es/daco/daco42/ocuphotel/eohm_13.pdf) also points to its ARCE system for XML uploads.

Typing it by hand means going through every reservation in the period and counting guests and nights per country and per Spanish province. That is where the time goes, and where mistakes creep in.

## How to get guest country and province right in Little Hotelier

Little Hotelier's guest record already has the fields the INE needs: **Country** and **Province/Region** in the address, plus **Nationality**. The trouble is that bookings from Booking.com and other channels often arrive without an address, so the fields stay empty.

Three habits fix most of it:

1. Fill in country and province at check-in, from the guest's ID or a quick question.
2. Install the free [Easy Save Province and Country](/tools/ui/easy-save-province-country) userscript. When you click the province field, it shows a list of Spain's provinces, and picking one sets the country to Spain.
3. Let [automated checks](/tools/bot/automated-checks) flag reservations with a missing country or province after booking, on arrival and at check-out, while the guest is still there to ask.

::screenshot{src="/images/scripts/easy-save-province-country/to.webp" alt="Little Hotelier guest tab with the Easy Save Province and Country list of Spanish provinces open under the Province/Region field" caption="The free userscript turns the province field into a pick list and sets the country for you."}
::

## The faster way: the INE report straight from Little Hotelier

As of October 2026 we found no INE survey export in Little Hotelier's help centre. Hotelier Tools fills that gap: it reads your reservations with your own Little Hotelier login, builds the INE figures, validates them and sends the XML through IRIA. The INE reports feature is marked stable.

### 1. Set up your establishment once

Open **INE Setup** (`/ine-setup`). Enter your IRIA order number (**NOrden**) and password, press **Test IRIA connection**, fill in the establishment's address and capacity, and choose the type and category. These go into the XML header. The password is stored encrypted and never shown in clear text.

::screenshot{src="/images/blog/demo/en/ine-establishment-setup.webp" alt="INE setup, Establishment page in Hotelier Tools: a read-only demo notice, the IRIA access card with the NOrden field, the masked IRIA password stored encrypted and a Test IRIA connection button, then the establishment details with business name and address" caption="Enter your IRIA access and establishment details once." path="/ine-setup"}
::

### 2. Generate the report for the dates the INE asks for

Open **Guest Origins** (`/reports/guest-origins`), pick the dates in the INE's request and press **Generate report**. Hotelier Tools reads those reservations and counts each day's arrivals and overnight stays by Spanish region or country, plus rooms occupied, extra beds and average rate by client type. Tabs split the result into **Daily summary**, **By guest origin**, **Rooms**, **ADR by client** and **Data quality**.

If the mailbox that receives the INE's emails is connected to the Hotelier Tools inbox, the INE's email shows a card with a button that generates the report for exactly the requested dates. The one-time IRIA password stays in the email.

::screenshot{src="/images/blog/demo/en/ine-guest-origins-by-origin.webp" alt="By guest origin tab of the Guest Origins report: arrivals and stays for each night from 27/9 to 3/10, grouped under Other countries (Irlanda, Países Bajos, Reino Unido) and Missing/Unknown for guests with no Spanish province, above the start of the INE submission card" caption="Each night's arrivals and stays by guest origin, with guests missing a province listed apart so you can fix them." path="/reports/guest-origins"}
::

### 3. Fix guests with no origin

Reservations without a nationality or province are flagged. Correct them in Little Hotelier, then refresh only those rows. You don't need to rebuild the whole report.

### 4. Validate, preview and send

Press **Validate for the INE**, then **Preview XML** to see exactly what will go, then **Send to the INE**. The report goes to IRIA and the INE's receipt (*justificante*) is stored with it.

### 5. Keep every receipt

**Saved Reports** (`/reports/list`) lists every report with its period, status and INE receipt. A sent report can no longer be changed or deleted, and you can still download its XML.

::screenshot{src="/images/blog/demo/en/ine-saved-reports.webp" alt="Saved reports page in Hotelier Tools listing three guest-origin reports in Draft status, with Period, Status, INE receipt, Staff and Created columns, View and delete actions, and a New report button" caption="Every report with its period, status and, once sent, the INE's receipt." path="/reports/list"}
::

::callout{type="note" title="Trying it in the demo"}
The public demo has a fictional hotel with a saved INE report. Sending to the INE is switched off there, so nothing reaches the INE, and you should never type real IRIA credentials into it.
::

::demo-cta{path="/reports/guest-origins"}
::

### Why does IRIA reject a questionnaire?

Developers of an open-source hotel PMS who fixed recurring rejections listed these causes ([commitsun/pms, pull request 233](https://github.com/commitsun/pms/pull/233)):

- the hotel questionnaire sent for a property registered as apartments
- a date range that crosses two months, which repeats day numbers in the file
- cots or extra beds not declared, so overnight stays exceed declared beds
- a guest from a country with no standard ISO code, which leaves the country empty

Run the validation step before every send, and keep your INE type and category in setup matching what the INE has on file.

## Summary

- The INE survey is compulsory once the INE selects your establishment, and fines go up to €30,050.61 for false data.
- It asks for totals by guest residence (not nationality), rooms, extra beds, ADR by client type and staff. No ID numbers.
- Send it on IRIA by hand, or as an XML file from software.
- Keep country and province filled in Little Hotelier, with the free [province userscript](/tools/ui/easy-save-province-country) and [automated checks](/tools/bot/automated-checks).
- [Hotelier Tools INE reports](/tools/bot/ine-reports) builds, validates and sends the report through IRIA and keeps the receipts. It is free for every hotel until 10 January 2027. Hotelier Tools is independent and not affiliated with or endorsed by SiteMinder, Little Hotelier or the INE.

For the police guest register and other countries' rules, read [guest registration rules by country](/blog/guest-registration-rules-by-country).
