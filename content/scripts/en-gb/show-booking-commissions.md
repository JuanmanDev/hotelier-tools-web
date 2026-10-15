---
title: "Show Booking.com Commissions"
description: "Adds an estimated Booking.com commission breakdown and approximate net amount to Little Hotelier reservations, using a fixed 17% commission and 1.3% charge."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

This script adds an estimate of what Booking.com keeps from each booking to the reservation screen in Little Hotelier. For Booking.com reservations it shows the transfer charge, the commission, the total deducted including tax, and an approximate net amount. It is for owners and managers who want a quick idea of how much a Booking.com reservation really earns.

## The problem it solves

The reservation total in Little Hotelier is what the guest pays, not what reaches your bank. With Booking.com, the commission and payment charges come off later, on a separate invoice. Without a rough figure at hand, it is hard to compare a channel booking with a direct one, or to see whether a discount still leaves a margin.

## What changes

When the reservation's booking source is **Booking.com**, four lines are added to the reservation summary, just above the separator line. The labels are in Spanish:

- **Cargo por transferencia (1.3%)**: the transfer charge, 1.3% of the reservation total.
- **Comisiones Booking (17%)**: the Booking.com commission, 17% of the reservation total.
- **Total comisiones con IVA**: the transfer charge plus the commission plus the tax amount shown on the reservation.
- **Neto Bruto (Aprox.)**: the approximate net, the reservation total minus that sum.

Reservations from any other source are left unchanged.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload Little Hotelier. The [installation guide](/tools/ui/instructions) shows every step. The script runs on Front Desk pages at app.littlehotelier.com and only adds lines to Booking.com reservations. It is free and open source: [see the code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js).

## Good to know

- The rates are fixed in the code: 17% commission and 1.3% transfer charge. If your Booking.com contract uses a different rate, edit those numbers in the Tampermonkey editor.
- The labels stay in Spanish and amounts are shown in euros, whatever your interface language.
- It is an estimate. Your Booking.com invoice is the final figure.
- The lines are calculated once, a few seconds after the reservation loads. If you change the total, reload the page to recalculate.
- It reads only the booking source, total and tax already on screen. It stores nothing and sends nothing anywhere.

## Related

- [How much commission Booking.com takes](/blog/booking-com-commission)
- [Little Hotelier Chrome extensions: free userscripts](/blog/little-hotelier-chrome-extensions)
