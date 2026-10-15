---
title: "Compact UI Reservation Details"
description: "Removes spare padding from the Little Hotelier reservation window and makes the guest comments box taller, so notes are readable without scrolling inside it."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

This script tightens the layout of the reservation window in Little Hotelier Front Desk and gives the guest comments box more height. It is for front desk staff who open many reservations a day and want to read the notes left by guests or colleagues without scrolling inside a small box.

## The problem it solves

Guest comments often hold the information that matters at check-in: a late arrival, a cot, a parking request, a special occasion. In the standard reservation window the comments field is short, so longer notes are cut off and you have to scroll inside it. At the same time, padding at the top of the tabs and spacing around alert areas and separator lines push the useful fields further down.

## What changes

On the reservation screen in Front Desk:

- The **guest comments** text box is at least 126 pixels tall, so several lines of notes are visible at once.
- The padding at the top of the reservation tabs' content is removed.
- Empty alert placeholder areas no longer add a margin.
- The horizontal separator lines lose their extra margin.

The fields, buttons and tabs stay where they are. Only the spacing and the height of the comments box change.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload Little Hotelier. The [installation guide](/tools/ui/instructions) has pictures for every step. The script runs on Front Desk pages at app.littlehotelier.com, and its styles only affect the reservation window. It is free and open source: [the code is on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js).

## Good to know

- It works by adding a few styles when the page loads. It does not read, change or store reservation data.
- Notes longer than the new height still scroll inside the box as usual.
- It works the same on desktop and touch screens. For a tablet, combine it with [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens), which enlarges the Print and Email menus.
- It also pairs well with [Easy Save Province and Country](/tools/ui/easy-save-province-country), which works on the guest forms of the same window.
- If Little Hotelier changes the reservation window, some spacing tweaks may stop applying until the script is updated.

## Related

- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens)
- [Hotel front desk daily checklist for Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Little Hotelier Chrome extensions: free userscripts](/blog/little-hotelier-chrome-extensions)
