---
title: "Hotel front desk daily checklist for Little Hotelier: 8 problems to catch before guests arrive"
seoTitle: "Hotel front desk daily checklist for Little Hotelier"
description: "A daily front-desk checklist for Little Hotelier: 8 reservation problems to catch before arrival, where to spot each one, and how to automate five of them."
date: 2026-10-03
category: operations
tags: [front desk, checklist, check-in, automation, little hotelier]
keywords: [hotel front desk daily checklist, hotel front desk checklist template, hotel check in checklist, little hotelier unallocated reservations, front desk checklist little hotelier, hotel automation software]
feature: automated-checks
demoPath: /automated-checks
cover: /images/blog/demo/en/automated-checks-lifecycle.webp
coverAlt: "Automated Checks page in Hotelier Tools: how the checks work in four steps, a Nothing runs any check yet notice suggesting Before they arrive, and The journey of a reservation through its five stages"
faq:
  - q: "What should a hotel front desk check every day?"
    a: "For today's and tomorrow's arrivals: a room assigned, the balance paid, a valid card, an ID document, an address, the right number of guests, an arrival time, and no match with your do-not-rebook list. For today's departures: the balance and everything the invoice needs."
  - q: "How do I find bookings without a room in Little Hotelier?"
    a: "Open Front Desk > Reservations, filter by check-in date and look for an empty Room column. The Calendar also shows a counter of unallocated bookings at the top."
  - q: "How often can the automated checks run?"
    a: "Each check job has its own schedule. The recommended ones run once a day, and a job can run at most once an hour, because every run signs in to Little Hotelier."
  - q: "Will Hotelier Tools change or cancel my reservations?"
    a: "No. The checks only raise alerts. The one exception is the automatic check-out, which writes to Little Hotelier and is off until you switch it on."
  - q: "Can I print this checklist?"
    a: "Yes. Copy the table in this guide into a document, or export the filtered arrivals from Front Desk > Reservations as a CSV and print that."
  - q: "Is Hotelier Tools part of Little Hotelier?"
    a: "No. It is an independent dashboard, not affiliated with or endorsed by SiteMinder or Little Hotelier. It connects with your hotel's own Little Hotelier login."
---

Every day, check today's and tomorrow's arrivals for eight things: a room assigned, the balance paid, a valid card, an ID document, an address, the right number of guests, an arrival time, and no match with your do-not-rebook list. In Little Hotelier most of them fit on one screen: **Front Desk > Reservations**, filtered by check-in date. Hotelier Tools runs five of the eight automatically at five moments of the stay and emails you only what needs fixing.

## The 8 reservation problems to catch before a guest arrives

1. **No room assigned.** A booking without a room number is easy to miss until the guest is standing at the desk.
2. **Unpaid balance.** You want to know before arrival whether to collect, chase a deposit or send a payment link.
3. **Invalid card on a Booking.com booking.** Booking.com gives the guest a deadline to update the card, so finding it late costs you options.
4. **Missing ID document.** Many countries require it for guest registration. See [guest registration rules by country](/blog/guest-registration-rules-by-country).
5. **Missing address or country.** Needed for registration, for official statistics such as Spain's INE survey, and for a correct invoice.
6. **Wrong number of guests.** Zero adults, or two guests in a booking for four, can throw off registration, breakfast and any tourist tax charged per person.
7. **No arrival time.** Late arrivals and self check-in need a plan the day before.
8. **A guest you asked not to come back.** Better to know before they arrive. See [how to keep a do-not-rent list](/blog/hotel-do-not-rent-list).

Copy this table as your printable checklist:

| Check | Where to look in Little Hotelier | Automated in Hotelier Tools |
|---|---|---|
| Room assigned | **Room** column in Reservations; unallocated counter on the Calendar | Yes |
| Balance paid | **Outstanding** column in Reservations | Yes |
| Valid card (Booking.com) | Channel Manager > reservation > **Manage Reservation** | No |
| ID document | Reservation > **Guests** tab | Yes |
| Address and country | Reservation > **Details** and **Guests** tabs | Yes |
| Number of guests | **Occupants** column in Reservations | No |
| Arrival time | **ETA** column in Reservations | No |
| Do-not-rebook match | Your own list | Yes |

## How to check them in Little Hotelier without opening every booking

1. Go to **My Apps > Front Desk > Reservations**.
2. Set the date type to **Check-in date**, choose today and tomorrow (or the week ahead), set the status to **Confirmed** and click **Search**.
3. Read across the columns: an empty **Room**, the **Occupants** count, a blank **ETA** and anything in **Outstanding**.
4. Want it on paper? Click **Export** for a CSV. Guest phone numbers are left out of the file for security reasons.

Source: [Run and export reservations information](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information).

ID documents and addresses are the slow part. They sit on each reservation's **Details** and **Guests** tabs ([help centre](https://helpcentre.littlehotelier.com/en/articles/8673701-edit-a-reservation)), so you have to open every arrival.

### Invalid Booking.com cards

In Little Hotelier, open the booking under **Channel Manager > Reservations**, go to the **Manage Reservation** tab and click **Report payment card as invalid to Booking.com** ([help centre](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)).

As of October 2026, the guest then has 24 hours to update the card. For bookings made within 48 hours of check-in it is 12 hours, or until 3 pm on the check-in day, whichever comes first. If they don't, you can cancel until 3 pm (your local time) on the check-in day ([Booking.com Partner Hub](https://partner.booking.com/en-us/help/policies-payments/guest-payments/handling-invalid-credit-cards)). That is why cards belong on the night-before list. Full walkthrough: [Booking.com invalid card or no-show](/blog/booking-com-invalid-card-no-show).

::callout{type="tip" title="Free scripts that make this screen faster"}
[Full Width Reservation Table](/tools/ui/full-width-reservation-table) shows every column without scrolling sideways. [Update Number Adults](/tools/ui/update-number-adults) sets new bookings to 2 adults so a 0 doesn't slip through. More in [free Chrome extensions for Little Hotelier](/blog/little-hotelier-chrome-extensions).
::

## Night before or same day: when to run each check

Some problems need time to fix (a card, a room), others can only be checked once the guest is in front of you (the ID). Hotelier Tools splits the stay into five moments, each with its own scheduled task:

| Moment | Reservations it reads | What it checks |
|---|---|---|
| After a booking is made | Booked yesterday and today | Room, ID, address, do-not-rebook list |
| Before they arrive | Check-in from today to 7 days ahead (1–60, your choice) | Room, payment, do-not-rebook list |
| When they arrive | Check-in today | ID, address, room |
| While they are here | Check-in in the last 7 days (adjustable) | ID, address |
| When they leave | Check-out today | ID, address, balance |

A simple rule: rooms, payments and cards the night before; ID and address on the day of arrival; the balance on the day of departure.

## How to automate the checklist with Hotelier Tools

1. Sign up at [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) and connect Little Hotelier on **Credentials**.
2. Open **Automated Checks** (`/automated-checks`). If nothing runs yet, the page suggests starting with **Before they arrive**: it catches a stay without a room while there is still time to assign one.
3. Open a moment, switch its checks on or off, and press **Save and activate task**. That creates the scheduled task with the recommended schedule, for example every night at 23:30 for "After a booking is made".
4. Problems appear on **Issues** (`/automated-checks/issues`), grouped by reservation. Filter by open issues, check type or stay dates.
5. Fix the reservation in Little Hotelier, then press **Verify**. The checks run again on that one reservation and the issue closes once it's fixed.

::screenshot{src="/images/blog/demo/en/automated-checks-moment-on-arrival.webp" alt="When they arrive moment in Hotelier Tools: the task card not configured yet with Every 3 hours, Choose and Run now, the Save and activate task button, and the ID / passport (police register), physical room assignment and address and origin validation checks switched on" caption="Each moment of the stay has its own checks and its own schedule. Here, When they arrive." path="/automated-checks/moment/on_arrival"}
::

::screenshot{src="/images/blog/demo/en/automated-checks-issues.webp" alt="Issues page with 20 open, 5 fixed and 25 total issues, filters for open issues, check type and stay dates, and reservations listed with an outstanding balance warning at arrival and a Verify button" caption="Problems grouped by reservation. Fix them in Little Hotelier, then press Verify." path="/automated-checks/issues"}
::

::demo-cta{path="/automated-checks"}
::

## What the email report looks like

Every run sends **one report email per job**, in the language you set for that job: a clear summary of what the run found, easy to read on a phone. Each problem is also on **Issues**, so the email is your prompt and the dashboard is where you work. Shared recipients, such as the owner and the front desk, are set in **Settings > Notifications** (`/settings/notifications`).

::screenshot{src="/images/blog/demo/en/settings-report-recipients.webp" alt="Report recipients settings page in Hotelier Tools with one shared address in the Addresses field, a suggested address to add, and the note that every scheduled task's report goes to this list unless the task names its own" caption="The Report recipients page in Settings: shared addresses get every check job's report email." path="/settings/notifications"}
::

## Limits, and what the checks never change

- **They only alert.** No check edits, cancels or charges a booking. The exception is the optional **automatic check-out**, which writes to Little Hotelier and is off by default.
- **At most once an hour per job.** Each run signs in to Little Hotelier, so the minimum interval is 60 minutes.
- **They pause safely.** If your Little Hotelier password expires, scheduled jobs pause themselves instead of retrying, which protects your account from a lockout. The dashboard shows "Automated jobs are paused" until you save the new password on **Credentials** or press **Check now & resume**.
- **Three checks stay manual.** Cards, guest counts and arrival times are not checked automatically, so keep them on your morning list.

Every task is listed under **Cron Jobs** (`/cron`) and every run under **Run History** (`/cron-logs`). The feature is in beta. More on scheduling on the [Automations page](/tools/bot/automations), and the full feature on [Automated checks](/tools/bot/automated-checks).

See also: [the Little Hotelier guide](/blog/little-hotelier-tips), [the AI assistant for the front desk](/blog/ai-assistant-hotel-front-desk), [a waitlist for sold-out dates](/blog/hotel-waitlist-sold-out-dates).

## Summary

- Check eight things before each arrival: room, balance, card, ID, address, guest count, arrival time and your do-not-rebook list.
- In Little Hotelier, the **Reservations** list filtered by check-in date shows four of them at a glance; ID and address need each reservation opened.
- Hotelier Tools checks room, payment, ID, address and the do-not-rebook list at five moments of the stay, lists problems on **Issues** and emails a report.
- Start with **Before they arrive**, then add the other moments.
