---
title: "Automated reservation checks for Little Hotelier"
---

Automated checks read your Little Hotelier reservations at five moments of the stay and flag what needs fixing: no room assigned, an unpaid balance, a missing ID document or address, or a guest on your do-not-rebook list. Problems land on one Issues page, and each run sends you a report email.

## How it works

Each moment is its own scheduled task, reading a different set of reservations:

- **After a booking is made:** booked yesterday and today. Checks room, ID, address and the do-not-rebook list.
- **Before they arrive:** check-in from today to 7 days ahead (adjustable from 1 to 60). Checks room, payment and the do-not-rebook list.
- **When they arrive:** check-in today. Checks ID, address and room.
- **While they are here:** check-in in the last 7 days (adjustable). Checks ID and address.
- **When they leave:** check-out today. Checks ID, address and balance.

Open a moment on **Automated Checks** (`/automated-checks`), switch its checks on or off and press **Save and activate task**. Issues appear on `/automated-checks/issues`, grouped by reservation. Fix the booking in Little Hotelier and press **Verify**: the checks run again on that one reservation and the issue closes.

The **Do-not-rebook list** (`/automated-checks/watchlist`) compares new bookings and upcoming arrivals with the guests you flagged, every night. A match becomes an issue and a line in the report.

The full routine is in [the front desk checklist](/blog/hotel-front-desk-checklist-automation). How to keep the list lawful is in [the do-not-rent list guide](/blog/hotel-do-not-rent-list).

## What you need

- Little Hotelier connected on **Credentials**.
- One moment switched on to start. **Before they arrive** is the suggested first one, because it catches a stay without a room while there is still time to assign one.
- Report recipients, set in **Settings > Notifications** (`/settings/notifications`).

## Limits and good to know

- **Status: beta.**
- **They only alert.** No check edits, cancels or charges a booking, and a do-not-rebook match never refuses a guest. The exception is the optional automatic check-out, which writes to Little Hotelier and is off by default.
- **At most once an hour per job**, because each run signs in to Little Hotelier.
- **Three checks stay manual:** invalid Booking.com cards, guest counts and arrival times. See [what to do with an invalid card or a no-show](/blog/booking-com-invalid-card-no-show).
- If your Little Hotelier password expires, the jobs pause instead of retrying until you save the new one.
