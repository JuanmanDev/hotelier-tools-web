---
title: "Auto Refresh On Inactivity"
description: "Reloads Little Hotelier and Direct Booking after 10 minutes without clicks, scrolling or mouse movement, so the front desk never comes back to a stale page."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js"
category: "General"
images:
  before: "/images/scripts/auto-refresh-inactivity/from.webp"
  after: "/images/scripts/auto-refresh-inactivity/to.webp"
  gallery:
    - "/images/scripts/auto-refresh-inactivity/from.webp"
    - "/images/scripts/auto-refresh-inactivity/to.webp"
---

This script reloads the Little Hotelier page you have open after 10 minutes with no activity. It is meant for reception computers where Little Hotelier stays open all day, so staff who come back to the desk see current bookings and a working session instead of an old page that shows errors.

## The problem it solves

A page left untouched keeps showing the data it loaded at the start. New bookings, cancellations and room moves made by channels or colleagues don't appear until someone reloads. The session can also expire in the background, and the first click after a break then fails. Reloading by habit is easy to forget when a guest is waiting at the desk.

## What changes

- A 10-minute timer starts when the page loads.
- Any click, mouse movement, scroll or touch movement on the page restarts the timer, so the page never reloads while someone is using it.
- When 10 minutes pass with none of those actions, the script reloads the same address you were on.
- Nothing else on the page changes: no new buttons or panels.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload Little Hotelier. The [installation guide](/tools/ui/instructions) walks through each step. The script runs on the three Little Hotelier addresses: app.littlehotelier.com (Front Desk), application.littlehotelier.com (the newer screens such as the calendar) and app.thebookingbutton.com (Direct Booking). It is free and open source; the [code is on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/autoRefreshOnInactivity.user.js).

## Good to know

- A reload discards anything not yet saved. Typing on the keyboard does not count as activity, so if someone writes a long note for 10 minutes without touching the mouse, the page can reload before they save. Save as you go.
- The 10-minute delay is a fixed value in the script (600 seconds). To change it, edit that number in the Tampermonkey editor.
- It works the same on desktop and touch screens, because touch movement and taps also count as activity.
- It runs on every Little Hotelier page it matches, including the calendar, the reservations list and Direct Booking.
- The script stores nothing and sends nothing anywhere.

## Related

- [Little Hotelier tips and hidden features](/blog/little-hotelier-tips)
- [Hotel front desk daily checklist for Little Hotelier](/blog/hotel-front-desk-checklist-automation)
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table)
