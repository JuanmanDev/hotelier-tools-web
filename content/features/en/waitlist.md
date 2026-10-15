---
title: "A waitlist for sold-out dates in Little Hotelier"
---

The waitlist, called **Availability Queue** in the dashboard, watches stays you are sold out for and checks Little Hotelier on a schedule. When every requested room is free on every night, the guest, your team or both get one message by email or WhatsApp, with a direct booking link.

## How it works

1. **Add a stay to watch.** On `/availability-watch`, pick the first and last night, the rooms needed and, optionally, the room types. A mixed group can ask for different numbers per room type.
2. **Choose who hears about it.** Add the guest's contact, and yours. Pick the alerts: **available** (all rooms free, which closes the watch), **partial** (fewer rooms than asked, only for the property by default) or **expiring** (the stay starts within 48 hours and nothing was found).
3. **Schedule the check.** Press **Check every night at 01:00**, or choose anything from every 20 minutes to once a day. **Check the queue now** runs it straight away.
4. **One message per watch.** The weakest night decides: a stay is free only when every night has the rooms. After the message goes, the entry closes, and **History** keeps the exact text sent.
5. **Let guests sign up.** The **Public waiting-list page** (`/availability-watch/public`) is a form you link from your website. Guests pick their nights, leave an email and tick a consent box.

A spreadsheet method and rules for who goes first are in [how to run a waitlist for sold-out dates](/blog/hotel-waitlist-sold-out-dates).

## What you need

- Little Hotelier connected on **Credentials**.
- The scheduled check. Nothing is checked until that task exists.
- For WhatsApp messages, a connected WhatsApp number.
- Your legal name and address on the property card, because the public form's privacy notice is built from it.

## Limits and good to know

- **Status: beta.**
- **Nothing is held.** The waitlist never reserves a room or changes a booking. The first guest to book gets the room.
- **A nightly check can be late.** Check more often in busy season.
- **The public page is off until you open it.** By default it asks guests to confirm their email and takes stays of up to 14 nights and 2 rooms per request. It caps the list at 100 people waiting and 40 signups a day. Contact details are removed from closed entries after 90 days.
- **It feeds your prices.** Each party waiting raises that night's [price recommendation](/tools/bot/dynamic-pricing) by 3%, up to 12%.
