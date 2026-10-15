---
title: "Bank Transfer Email Button"
description: "A Little Hotelier reservation button that drafts an email with your bank transfer details, the amount owed and the stay dates. Set up on request, not published."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/bank-transfer-email-button/from.png"
  after: "/images/scripts/bank-transfer-email-button/to.webp"
  gallery:
    - "/images/scripts/bank-transfer-email-button/from.png"
    - "/images/scripts/bank-transfer-email-button/to.webp"
---

This script adds a button to Little Hotelier reservations that opens a ready-made email asking the guest to pay by bank transfer. The email already contains the outstanding amount, the stay dates and the rooms booked. It is aimed at owners and front desk staff at properties that accept bank transfers. It is not published for general use: the current version is written for one property, so it is set up on request.

## The problem it solves

When a guest wants to pay by transfer, someone has to write the same email every time: account number, bank, beneficiary, a payment reference, the exact amount and the booking dates. Copying the amount and dates by hand is slow, and a wrong reference makes the payment hard to match later.

## What changes

On the reservation screen in Front Desk:

- A new option is added to the **Email** menu, and a new button with an envelope icon appears next to the **Print** button.
- Clicking either one opens your email program with a new message addressed to the guest's email.
- The message is filled from the reservation: the outstanding amount, a payment reference made of the check-in date and the guest's first name, the check-in and check-out dates, and the rooms grouped by room type with a count for each.
- It also includes a link to the reservation in Little Hotelier, for your own reference.

## How to install

This script is not published for general use yet. Please [contact me](/contact) and I can adapt it to your property. Once adapted, it installs like the other scripts: you need the free Tampermonkey extension, and the [installation guide](/tools/ui/instructions) shows the steps. It runs only on Little Hotelier Front Desk pages (app.littlehotelier.com). It is open source, and you can read the [current code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonEmailBank.user.js).

## Good to know

- The bank details, property name, signature, arrival time and email wording are written directly into the code, in Spanish, for the author's own property. They must be changed before anyone else can use it.
- The amount is shown in euros.
- The email opens in the default email program on your computer through a standard email link. Nothing is sent until you press send there.
- The email asks guests to confirm the account number by phone, as protection against fraudulent emails that change bank details.
- The script stores nothing and sends no data anywhere. It only reads fields already on the reservation screen.

## Related

- [Update Payment Link Button](/tools/ui/update-payment-link-button) for card payments by link
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button)
- [Little Hotelier Chrome extensions: free userscripts](/blog/little-hotelier-chrome-extensions)
