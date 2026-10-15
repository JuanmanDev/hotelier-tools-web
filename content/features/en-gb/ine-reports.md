---
title: "The INE hotel occupancy survey from Little Hotelier"
---

INE reports build Spain's INE hotel occupancy survey from your Little Hotelier reservations: arrivals and overnight stays by Spanish region or country, rooms occupied, extra beds and average rate by client type. Hotelier Tools validates the figures, sends the XML through the INE's IRIA system and keeps the receipt.

## How it works

1. **Set up your establishment once.** On **INE Setup** (`/ine-setup`), enter your IRIA order number (NOrden) and password, press **Test IRIA connection**, and fill in the address, capacity, type and category for the XML header.
2. **Generate the report.** On **Guest Origins** (`/reports/guest-origins`), pick the dates in the INE's request and press **Generate report**. Tabs split the result into daily summary, guest origin, rooms, ADR by client and data quality.
3. **Fix guests with no origin.** Reservations without a nationality or province are flagged. Correct them in Little Hotelier and refresh only those rows.
4. **Validate, preview and send.** Press **Validate for the INE**, then **Preview XML**, then **Send to the INE**. The INE's receipt is stored with the report.
5. **Keep the history.** **Saved Reports** (`/reports/list`) lists every month with its status and receipt.

If the mailbox that receives the INE's emails is connected to the guest inbox, the INE's request shows a button that generates the report for exactly the requested dates.

What the survey asks, the fines and the IRIA rejections to avoid are in [how to fill in the INE hotel occupancy survey](/blog/ine-hotel-occupancy-survey).

## What you need

- A request from the INE with your order number and password. The survey only applies once the INE selects your establishment.
- Little Hotelier connected on **Credentials**.
- Guest country and province filled in. The INE counts guests by where they live, not their nationality. The free [Easy Save Province and Country](/tools/ui/easy-save-province-country) script and [automated checks](/tools/bot/automated-checks) help keep them complete.

## Limits and good to know

- **Status: stable.**
- It builds the hotel questionnaire for hotel-type establishments: hotels, hostales and pensiones. Tourist apartments, campsites, rural houses and albergues answer other INE questionnaires.
- A sent report can no longer be changed or deleted, but you can still download its XML.
- Your IRIA password is stored encrypted and never shown in clear text.
- In the public demo, sending to the INE is switched off. Never type real IRIA credentials there.
- Hotelier Tools is not affiliated with the INE, SiteMinder or Little Hotelier.
