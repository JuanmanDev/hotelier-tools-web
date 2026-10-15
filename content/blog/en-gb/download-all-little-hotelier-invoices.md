---
title: "How to download all your Little Hotelier invoices at once (for your quarterly tax return)"
seoTitle: "Download all Little Hotelier invoices at once (2026)"
description: "Little Hotelier can zip invoices that already exist. Here's how, plus how to create the missing ones and send your accountant one ZIP and CSV per quarter."
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [download all invoices little hotelier, little hotelier invoice, little hotelier invoice report, little hotelier billing, little hotelier export invoices, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "Invoices page in Hotelier Tools with 66 invoices in total, Q4 and Q3 2026 each with Preview CSV and ZIP buttons, and September 2026 open as a table of invoice numbers, guests, tax IDs, check-out dates and totals"
featured: true
faq:
  - q: "Can Little Hotelier download all my invoices as PDFs at once?"
    a: "Yes, for invoices that already exist. Go to Front Desk > Reports > Invoices, filter the dates, press Download invoice PDFs and then Download zip. Little Hotelier asks you to confirm with multi-factor authentication first."
  - q: "Does Little Hotelier sync invoices to Xero or QuickBooks automatically?"
    a: "No. The Accounting report exports invoices marked as final to a CSV file designed for Xero and QuickBooks import, and you import that file yourself. Only finalised invoices are included."
  - q: "Will Hotelier Tools change my invoice numbers or template?"
    a: "No. Hotelier Tools asks Little Hotelier to generate each invoice, so it is Little Hotelier's own document, with your numbering, logo and layout from Customise invoices."
  - q: "What happens to cancelled invoices in my export?"
    a: "In Little Hotelier, a cancelled finalised invoice moves to Older invoices with the status Cancelled, and its data still appears in exports. Tell your accountant so revenue is not counted twice."
  - q: "How much does Hotelier Tools cost?"
    a: "It is free for every hotel until billing starts on 10 January 2027. Hotels that start before 31 December 2026 then pay 50 € per hotel per month through 2027. No card is needed to start."
---

Yes. Little Hotelier can put every invoice that **already exists** into one ZIP: open **Front Desk > Reports > Invoices**, filter the quarter and press **Download invoice PDFs**. What it won't do is create the invoices nobody generated, or warn you about the ones that shouldn't be issued yet. For that, Hotelier Tools generates the missing invoices in one run, refuses the risky ones and gives you the quarter as one ZIP of PDFs plus a CSV summary.

## Can Little Hotelier export all invoices natively?

Yes. As of October 2026, Little Hotelier's help centre describes three ways to get invoices out. Which one you need depends on what your accountant asks for.

| Method | What you get | The catch |
|---|---|---|
| Invoice report | A ZIP of invoice PDFs and a CSV list | Only invoices that already exist |
| Accounting report | A CSV built for Xero and QuickBooks import | Only invoices marked as final |
| One reservation at a time | One PDF (Print or Save as PDF) | Slow for a full quarter |

### The Invoice report (PDFs in a ZIP)

1. Go to **My Apps > Front Desk > Reports** and click **Invoices**.
2. Choose the date range for your quarter. Optionally filter by **Invoice status** and **Payment status**, then click **Apply**.
3. Click **Download invoice PDFs**, then **Download zip**.
4. Confirm the multi-factor authentication prompt. The ZIP downloads.

**Export** on the same report gives you a CSV instead. Source: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report).

### The Accounting report (CSV for Xero or QuickBooks)

Go to **My Apps > Front Desk > Reports > Accounting**, choose **Yesterday**, **Last 7 days** or custom dates, and click **Export**. You get a CSV (or a ZIP for large exports) with contact, address, invoice number, dates, amounts, account and tax codes.

Two limits: only invoices **marked as final** are exported, and the file is for importing by hand. It is not a live sync. You set the account codes once in **Front Desk > Setup > Accounting Integration**. Sources: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) and [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup).

### One by one

Open the reservation, click **Print**, choose **Invoice** and pick **Save as PDF** in the print window ([help centre](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)). If you do this often, the free [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) script puts a direct print link on the reservation.

## What the native export doesn't do

The download is the easy part. The quarter usually goes wrong earlier:

- **Missing invoices.** The ZIP only holds invoices someone generated. The help centre describes creating them one reservation at a time (**Invoices** tab > **Generate invoice**), so a stay nobody clicked on is simply not there.
- **Duplicates.** Each generate request creates a new document in Little Hotelier, so regenerating a stay can leave two invoices where your accountant expects one.
- **Early invoices.** An invoice issued before the guest checks out goes stale as soon as an extra or a payment is added, and fixing it means a corrected invoice, a credit note or, in Spain, a rectification.
- **Finalising.** The accounting export needs each invoice marked as final, and the help centre describes doing that per reservation.

## How to download a whole quarter as one ZIP and CSV (the faster way)

Hotelier Tools is a dashboard that connects to Little Hotelier with your own login. Its **Invoice Download** page creates the invoices for a date range in one run and hands you the result per quarter.

1. Sign up at [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) and connect Little Hotelier on **Credentials**. Your login is stored encrypted.
2. In the menu, open **Invoice Download** (`/invoices`).
3. Press **Generate invoices** and choose the dates, for example 1 July to 30 September.
4. The app reads those reservations from Little Hotelier and creates invoices for the stays that qualify. Anything it can't invoice goes to **Errors** with the reason. Nothing is skipped silently.
5. Your invoices appear grouped by quarter and month. On the quarter, press **ZIP** to download every PDF, or **Preview CSV** to check the summary first.

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="Invoices page grouped by quarter, with Preview CSV and ZIP buttons on Q4 and Q3 2026, the September 2026 invoice table open, and a Pack downloaded notice confirming the invoice pack for Q3 2026 was downloaded" caption="Each quarter has its own ZIP of PDFs and a CSV summary. One click on ZIP downloads the whole quarter." path="/invoices"}
::

The invoices are Little Hotelier's own documents. Hotelier Tools asks Little Hotelier to generate each one, so your numbering, logo and layout from **Customise invoices** stay exactly as they are.

::callout{type="info" title="Independent tool"}
Hotelier Tools is not affiliated with or endorsed by SiteMinder or Little Hotelier. It connects using your hotel's own Little Hotelier login.
::

## Checks before invoicing: missing tax IDs, early invoices and duplicates

Before asking Little Hotelier for an invoice, Hotelier Tools runs a preflight check. It refuses to invoice a stay when:

- the guest **has not checked out** yet, because the figures are not final
- it is a **company invoice without a tax ID** or fiscal address
- the **tax ID is malformed**
- the stay is **already invoiced**, which prevents duplicates

A private guest doesn't need fiscal details, so a missing ID document is only a warning for them.

This is the difference between a ZIP your accountant can trust and a ZIP they send back with questions.

## What happens to bookings that can't be invoiced?

They land on **Errors** (`/invoices/errors`), one row per reservation with the reason.

1. Pick the date range at the top.
2. Filter by issue type: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** and others.
3. Fix the reservation in Little Hotelier: add the tax ID, record the payment or check the guest out.
4. Back on Errors, check it again or mark it resolved. **Copy CSV** gives you the list for a colleague.

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="Errors and issues page for 1 July to 30 September 2026 with Copy CSV, issue-type filter chips such as Missing DNI, Pending payment, Not checked out and Download failed, and a table of reservations with their invoice ID, stay dates, total, issue badge, reason (in Spanish) and actions" caption="Every reservation a run could not invoice, with the reason and a way to retry." path="/invoices/errors"}
::

If a stay is held up by a rounding balance of a cent or two, the cent-fix option in **Settings > Invoices** can close those tiny balances.

::demo-cta{path="/invoices"}
::

## Which language will the invoices be in?

You choose in **Settings > Invoices** (`/settings/invoices`):

- **From the guest's country**: each invoice uses the language of the country on the guest's address. A missing or unmatched country uses your fallback language.
- **Always the same language**: every invoice in one language, whoever the guest is.

Pick the **Fallback language** and press **Save changes**.

## What to send your accountant each quarter

A short routine that avoids most follow-up emails:

1. **Run the quarter** a few days after it ends, so late check-outs are closed.
2. **Clear Errors** until only the stays that genuinely need no invoice are left.
3. **Download the ZIP and the CSV** and send both.
4. **Scan the invoice numbers** for gaps or repeats before you send.
5. **Mention cancelled invoices.** In Little Hotelier, cancelling a finalised invoice moves it to **Older invoices** with the status Cancelled, and its data still appears in exports ([help centre](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)). Your accountant needs to know so revenue isn't counted twice.

In Spain this feeds your VAT return ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)). If you use VeriFactu, Little Hotelier finalises invoices by submitting them to the AEAT itself ([help centre](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)). Hotelier Tools has no VeriFactu feature of its own, so keep that step in Little Hotelier. In any country with mandatory e-invoicing, treat the ZIP as copies for your records and check the rules with your accountant.

Developers can also fetch invoice PDFs one by one through the [Hotelier Tools REST API](/blog/little-hotelier-api). And if your accountant wants reservation data too, see [how to export reservations to Excel](/blog/export-little-hotelier-reservations-excel).

See also: [the Little Hotelier guide](/blog/little-hotelier-tips), [Little Hotelier integrations](/blog/little-hotelier-integrations).

## Summary

- Little Hotelier's **Invoice report** zips the PDFs of invoices that already exist; the **Accounting report** exports finalised invoices as a CSV for Xero or QuickBooks.
- Neither creates missing invoices or stops duplicates and early invoices.
- Hotelier Tools generates a date range in one run, refuses risky invoices, lists every failure with its reason and gives you a ZIP and CSV per quarter.
- To stop the backlog at the source, [send each invoice automatically at checkout](/blog/send-invoice-to-guest-at-checkout). See everything the invoicing feature does on the [Invoicing page](/tools/bot/invoicing).
