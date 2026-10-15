---
title: "Bulk invoices and invoices at checkout for Little Hotelier"
---

Invoicing creates the missing Little Hotelier invoices for a date range in one run and gives you each quarter as a ZIP of PDFs plus a CSV summary for your accountant. It can also have Little Hotelier email the invoice to a guest automatically once they check out.

## How it works

1. **Generate a period.** On **Invoice Download** (`/invoices`), press **Generate invoices** and choose the dates, for example 1 July to 30 September. Hotelier Tools reads those reservations and asks Little Hotelier to generate an invoice for each stay that qualifies.
2. **Risky invoices are refused.** A preflight check stops a stay that has not checked out, a company invoice without a tax ID or fiscal address, a malformed tax ID, and a stay that is already invoiced.
3. **Nothing is skipped silently.** Every refusal lands on **Errors** (`/invoices/errors`) with its reason. Fix the reservation in Little Hotelier, then check it again.
4. **Download.** Invoices are grouped by quarter and month. Press **ZIP** for every PDF, or **Preview CSV** to check the summary first.
5. **Invoice at checkout.** On **Invoice on Leave** (`/invoice-on-leave`), mark a stay once. A daily task (16:00 by default) has Little Hotelier generate the invoice after checkout and email it from your own template and sender.

The invoices are Little Hotelier's own documents, so your numbering, logo and layout stay exactly as they are. Step-by-step guides: [download all your invoices at once](/blog/download-all-little-hotelier-invoices) and [send the invoice at checkout](/blog/send-invoice-to-guest-at-checkout).

## What you need

- Little Hotelier connected on **Credentials**.
- Guests checked out in Little Hotelier. If your team doesn't do that by hand, an optional **Automatic check-out** task (15:05) closes the day's departures.
- Company name, tax ID and fiscal address on the reservation for business guests.
- A guest email on the reservation for invoices sent at checkout.
- The invoice language, set in **Settings > Invoices**: from the guest's country, or always the same, with a fallback language.

## Limits and good to know

- **Status:** bulk download, preflight checks, errors and language are stable. Invoice at checkout is in beta.
- The checkout task looks back 8 days to catch up on missed runs and reads up to 100 checkouts per run. A past stay with no guest email is reported once, not retried every day.
- There is no VeriFactu feature. In Spain, keep that step in Little Hotelier.
