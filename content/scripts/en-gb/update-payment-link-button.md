---
title: "Update Payment Link Button"
description: "Gives the Little Hotelier payment link button a clearer label and adds the guest's phone number from the reservation to the link, so it doesn't need retyping."
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

This script improves the payment link button on the Little Hotelier reservation screen. It gives the button a clearer label and adds the guest's phone number from the reservation to the payment link. It is for front desk staff who ask guests to pay a deposit or balance by card through a payment link.

## The problem it solves

The standard wording of the payment request button does not make it obvious to every member of staff that this is how you ask a guest to pay by card. And the guest's phone number, already saved in the reservation, is not carried into the payment link, so it has to be entered again. Both cost time while a guest is on the phone.

## What changes

On the reservation screen in Front Desk:

- The payment request button is renamed **Generate Payment Link**, or **Cobrar con tarjeta por correo electronico (Email)** when Little Hotelier is in Spanish.
- The number in the guest's phone field is added to the button's link as a phone parameter, with spaces and the "+" sign removed.
- If Little Hotelier rebuilds the link, the script applies the change again.
- If the link already includes a phone number, it is left as it is.

## How to install

Install the free Tampermonkey extension, press **Install on Tampermonkey** on this page, confirm, and reload Little Hotelier. The [installation guide](/tools/ui/instructions) shows every step. The script runs on Front Desk pages at app.littlehotelier.com and acts only when a reservation shows the payment request button. It is free and open source: [read the code on GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js).

## Good to know

- It only changes the button's text and link. The payment itself is handled by Little Hotelier as usual, and the script never sees card details.
- The script reads the phone field once, as soon as it adds the number to the link. If you type or correct the number afterwards, the link keeps the first value it read, so save the reservation and reload it before using the button.
- The number is added as digits only, so include the country code in the reservation's phone field.
- Labels exist in English and Spanish. Other interface languages show the English label.
- It stores nothing and sends nothing outside Little Hotelier.

## Related

- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button)
- [How to use WhatsApp with Little Hotelier](/blog/whatsapp-little-hotelier)
- [Little Hotelier Chrome extensions: free userscripts](/blog/little-hotelier-chrome-extensions)
