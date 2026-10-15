---
title: "Dynamic pricing and stop sell for Little Hotelier"
---

Dynamic pricing compares your Little Hotelier rates with similar hotels nearby and recommends a price for every room and night, with the reason behind it. Nothing is written to Little Hotelier until you confirm, unless you switch on the autopilot yourself.

## How it works

1. **Competitor prices.** Set your city and real rivals in **Competitors & market**. **Competitor Prices** (`/competitor-prices`) then shows what they charge each night next to your own rate.
2. **A recommendation per night.** On **Recommendations** (`/price-recommendations`), each price starts from your own rate, is pulled a little towards the median of comparable hotels, then moves with demand: occupancy, rooms left, last minute, weekends, approved local events and guests on your waitlist. Your limits cap the move. **Why?** shows the arithmetic.
3. **Rules in plain words.** Type a rule as a sentence. The AI turns it into a structured rule, and you approve it before it counts. Date rules can fix, freeze or bound a price.
4. **Local events.** An AI scan finds fairs, concerts and holidays near you. You approve or reject each one.
5. **Apply.** Tick the nights and press **Apply to Little Hotelier**. The same dialog can set SiteMinder stop sell, sent only for nights where the price change succeeded.
6. **Check the results.** **History & outcomes** (`/pricing-log`) lists every rate written, with the rooms left then and now.

The method, and a manual routine you can run without any tool, are in [dynamic pricing for small hotels](/blog/dynamic-pricing-little-hotelier). For restrictions, see [CTA, CTD, minimum stay and stop sell](/blog/little-hotelier-cta-ctd-stop-sell).

## What you need

- Little Hotelier connected on **Credentials**.
- A minimum price per room type and the rivals you really compete with.
- A check of which competitor sources return prices for your town. It is built to read Booking.com, Expedia, Google Hotels, Hostelworld and Agoda.

## Limits and good to know

- **Status:** competitor prices are in beta. Recommendations, rules, events, the autopilot and stop sell are in alpha.
- **The autopilot is off by default.** When on, it runs at most every 3 hours, moves each night by at most 20% by default, never goes under your floor and works 1 to 90 days ahead (14 by default). It never changes stop sell.
- The nightly price runs are plain arithmetic. AI only reads your rule sentences and finds events.
- The pricing log's revenue estimate is a guide, not proof.
