---
title: "Full Width Reservation Table"
description: "Widens the Little Hotelier Front Desk Reservations list to use your whole screen, up to 2000 pixels, so the columns fit without scrolling sideways."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

This script lets the Reservations list in Little Hotelier Front Desk use the full width of your monitor. It is for front desk staff and owners who search and review bookings on a wide screen and are tired of a narrow table in the middle with empty space on both sides.

## The problem it solves

The Front Desk Reservations page keeps its content in a fixed-width column. On a large monitor the table of bookings is squeezed into that column, so long guest names wrap onto several lines and some columns need a horizontal scroll. You end up scrolling sideways and down to check a single booking, while half of the screen stays empty.

## What changes

- On the Reservations page, the page heading, the content area and the main container can grow up to 2000 pixels wide instead of the standard fixed width.
- The table stretches across the screen, so columns get more room and long guest names wrap less.
- Nothing is removed or reordered: the same columns, filters and links stay in place.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload the Reservations page. The [installation guide](/tools/ui/instructions) shows each step with pictures. The script runs only on Front Desk pages whose address contains /reservations (app.littlehotelier.com/extranet/properties/.../reservations). It is free and open source: [the code is on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js).

## Good to know

- On screens wider than 2000 pixels, the content stops growing at that width.
- On a small laptop or a tablet there is little or no difference, because the page already fills the screen.
- Because it matches every address under /reservations, the wider layout also applies to other pages in that section, such as a reservation opened from the list.
- It only adds a style rule when the page loads. It stores nothing and sends nothing anywhere.
- For the same effect on Direct Booking tables, install [Tables Full Width](/tools/ui/tables-full-width).
- If Little Hotelier redesigns the Reservations page, the wider layout may stop applying until the script is updated.

## Related

- [Tables Full Width](/tools/ui/tables-full-width)
- [Export Little Hotelier reservations to Excel](/blog/export-little-hotelier-reservations-excel)
- [Hotel front desk daily checklist for Little Hotelier](/blog/hotel-front-desk-checklist-automation)
