---
title: "Tables Full Width"
description: "Makes the tables in Little Hotelier's Direct Booking extranet use the full screen width and highlights the row under the mouse, so lists are easier to read."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

This script widens the tables in Little Hotelier's Direct Booking extranet, the booking engine back office at app.thebookingbutton.com, so they use the whole width of your screen. It is for owners and staff who check direct reservations, reports and inventory there on a laptop or a large monitor.

## The problem it solves

Direct Booking keeps its pages in a fixed-width column. Reservation lists and reports are squeezed into that column, guest names are cut short, and on a wide monitor half the screen stays empty while you scroll sideways through a table. Long tables are also hard to follow across a row without losing your place.

## What changes

On Direct Booking extranet pages:

- **Main content area:** no longer fixed width, so tables stretch across the screen.
- **Reservations list:** the guest name column is no longer limited in width, so full names show.
- **Main container:** allowed to use the full width of the window.
- **Reports:** use the full width of the page.
- **Inventory:** gets a larger maximum width and is centred, so it doesn't stretch too far on very wide screens.
- **Row highlighting:** in data tables, the row under your mouse pointer gets a light grey background, which makes it easier to read across.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload Direct Booking. The [installation guide](/tools/ui/instructions) has step-by-step pictures. The script runs only on Direct Booking extranet pages (app.thebookingbutton.com/extranet/...), so Front Desk is not affected. It is free and open source: [see the code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js).

## Good to know

- On a small laptop or a tablet the difference is small, because the page already fills the screen.
- Row highlighting follows the mouse pointer, so it is mainly useful on a computer.
- It only adds style rules when the page loads. It stores nothing and sends nothing anywhere.
- For the same effect on the Front Desk Reservations page, install [Full Width Reservation Table](/tools/ui/full-width-reservation-table).
- If Little Hotelier redesigns Direct Booking, some of these adjustments may stop applying until the script is updated.

## Related

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk)
- [Little Hotelier Chrome extensions: free userscripts](/blog/little-hotelier-chrome-extensions)
