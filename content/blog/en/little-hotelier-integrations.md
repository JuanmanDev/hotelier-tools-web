---
title: "Best Little Hotelier integrations in 2026: accounting, check-in, pricing, messaging and AI"
seoTitle: "Best Little Hotelier Integrations in 2026"
description: "What connects to Little Hotelier in 2026: Xero and QuickBooks exports, Chekin and Duve check-in, pricing tools, messaging, AI, and free add-ons."
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [little hotelier integrations, little hotelier xero integration, little hotelier app store, little hotelier booking widget, little hotelier wordpress plugin, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "Developer portal in Hotelier Tools with cards for REST API & Swagger, MCP setup, API keys and LH methods, and an Authentication box with a cURL example using a placeholder API key"
faq:
  - q: "Does Little Hotelier integrate with Xero or QuickBooks?"
    a: "Through a file, not a live sync. You map your account and tax codes in Little Hotelier, then export finalized invoices as a CSV built for Xero and QuickBooks import. As of October 2026, the App Store lists no accounting app."
  - q: "Does Little Hotelier work with Zapier?"
    a: "We found no Little Hotelier app on Zapier when we checked on 3 October 2026; its integrations page for Little Hotelier returned not found. To connect Little Hotelier to other tools, use an App Store app or a script that reads your data through an API."
  - q: "How much do Little Hotelier App Store apps cost?"
    a: "Little Hotelier does not charge to connect them. Each app sets its own price, and Little Hotelier's App Store page says most cost under 50 US dollars a month. Many offer a free trial."
  - q: "How do I add the Little Hotelier booking widget to WordPress?"
    a: "In Direct Booking, open the widget wizard, choose a Book now button, a date selection widget or a custom widget, and copy the code it shows. Paste it into a Custom HTML block on your WordPress page. Little Hotelier asks you to copy the code, not retype it."
  - q: "Can a revenue management app change my minimum stays?"
    a: "Usually not. Little Hotelier's help centre says a connected RMS app controls rate updates, while minimum stay and stop sell stay managed in Little Hotelier."
  - q: "Is Hotelier Tools in the Little Hotelier App Store?"
    a: "No. Hotelier Tools is independent and not affiliated with or endorsed by SiteMinder or Little Hotelier. It connects using your property's own Little Hotelier login, so you set it up yourself instead of through the App Store."
---

Little Hotelier connects to outside software in three places: the **Little Hotelier App Store** (about 30 partner apps for check-in, messaging, upselling, reviews, keyless entry and pricing as of October 2026), **booking-engine plug-ins**, and its own **add-ons** such as Guest Engagement and Dynamic Revenue Plus. Accounting is a CSV export built for Xero and QuickBooks, not a live sync. For anything missing, you can add a layer that reads your data through an API, or a free browser script.

## Where Little Hotelier integrations live

| Type | Where you find it | How it connects |
|---|---|---|
| App Store apps | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | You contact the app provider; they set it up |
| Booking-engine plug-ins | **Direct booking → Configuration → Plug-in apps** | You paste the app's credentials and click **Enable** |
| Little Hotelier add-ons | Your plan ([pricing page](https://www.littlehotelier.com/pricing/)) | Switched on by Little Hotelier |
| Channels (OTAs) | **Distribution → Channels** | Mapped in the channel manager |

A few rules from the [App Store help article](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store):

- Apps are "not set up inside your platform". You use the contact form on the app's page, and the provider connects it.
- Little Hotelier charges nothing to connect; each app has its own price. The [App Store page](https://www.littlehotelier.com/app-store/) says most cost under USD 50 a month.
- Setup takes minutes, or up to 48 hours for some apps. Support for an app comes from the app's provider.

Plug-ins only affect your booking engine. As of October 2026 the [list](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine) covers Google Analytics 4 and Meta Pixel, price comparison (123compare.me, TripTease), chatbots (HiJiffy, Book Me Bob), Tripadvisor Review Express, loyalty (The Guestbook, Laasie) and ad tools (Google Ads, Sojern, The Hotels Network, Flip.to and others).

## Accounting: Xero, QuickBooks and the rest

There is no live accounting sync in the App Store list we checked in October 2026. What Little Hotelier offers is an **accounting export**:

1. Set up your chart of accounts and tax codes in Xero, QuickBooks or your own software first.
2. In Little Hotelier, open **Setup → Accounting exports** (classic: **Front Desk → Setup → Accounting Integration**) and enter the default account and tax codes for room revenue, extras, taxes, card surcharges and service charges.
3. Each period, open **Reports → Operational → Accounting**, pick the dates and click **Export**.

Only invoices marked as **final** are exported, as a CSV (or a ZIP of CSVs for big periods) "designed for Xero and QuickBooks" import ([setup guide](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [export guide](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)). In Spain, VeriFactu e-invoicing is listed among the plan features on the [pricing page](https://www.littlehotelier.com/pricing/).

This is where reviewers push back most. On [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/), users write that "the reports and syncing to accounting software can be improved". If what your accountant really wants is every invoice PDF for the quarter, see [download all Little Hotelier invoices at once](/blog/download-all-little-hotelier-invoices).

## Online check-in and guest registration

The App Store has several check-in apps, with the price bands its page shows (October 2026):

- **Chekin** (USD 0–50/month): ID checks with biometric comparison, digital registration forms, police and statistics reports and tourist tax in 18 countries and regions, including Spain, Italy, Portugal, France, Germany and Thailand ([help article](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin)).
- **Duve** (USD 0–50): online check-in, a guest app and review prompts.
- **Vikey** (USD 0–50): self check-in and smart locks.
- **Abitari Kiosk**, **OpenKey** and **Akia**: kiosk, mobile keys and contactless check-in.

Little Hotelier also has a native option. With the **Guest Engagement** add-on, a compliance check-in form can send guest details to the authorities in Italy, Spain, Portugal, Germany, Switzerland, Austria, Croatia, the Czech Republic and Colombia ([source](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)). Spanish properties can see how this fits SES Hospedajes in [SES Hospedajes with Little Hotelier](/blog/ses-hospedajes-little-hotelier), and every country's rules are in [guest registration rules by country](/blog/guest-registration-rules-by-country).

If you use Chekin, the free **Chekin Connection** userscript puts Chekin's check-in status inside the Little Hotelier reservation: guests found, phone numbers and ID numbers, with a button to copy the document into the booking for the invoice.

::screenshot{src="/images/scripts/show-chekin/to.webp" alt="Little Hotelier reservation in Spanish with a Chekin panel: status found 1 guest, a table with name, phone and ID document, and Use document and View in Chekin buttons" caption="The free Chekin Connection script shows check-in data without leaving the reservation."}
::

Install it from [Chekin Connection](/tools/ui/show-chekin); the [install guide](/tools/ui/instructions) takes a few minutes.

## Pricing and revenue management

Revenue management apps in the App Store include **RoomPriceGenie**, **Smartpricing**, **Happyhotel** and **Pricepoint**. The help centre also names **Aiosell** and **Right Revenue** ([source](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)).

One limit to know before you sign: the classic help centre says a connected RMS "can control rate updates, not restrictions". Minimum stays and stop sells stay in Little Hotelier ([source](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store)).

Little Hotelier's own option is **Dynamic Revenue Plus**, an add-on on the Pro plan with data-driven price recommendations. The Pro plan itself includes competitor rate and rate parity reports.

Hotelier Tools adds competitor prices from Booking.com and Google (beta) and price recommendations with a step-by-step "Why?" (alpha). Nothing changes in Little Hotelier until you confirm. See [dynamic pricing for small hotels on Little Hotelier](/blog/dynamic-pricing-little-hotelier).

## Guest messaging and WhatsApp

Natively, the **Messaging hub** in Guest Engagement puts WhatsApp, Airbnb, SMS (through Twilio), Booking.com and email history in one inbox. WhatsApp runs on the WhatsApp Business API: replies inside the 24-hour window are free, template messages are charged by WhatsApp ([source](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)).

App Store alternatives include **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** and **Zingle**.

::callout{type="tip" title="Booking.com guests not getting your emails?"}
Booking.com blocks emails and links from systems it does not know. Little Hotelier asks you to add `@app.littlehotelier.com` and `@guestjoy.com` as email addresses and `siteminder.com` and `guestjoy.com` as links in the extranet, under **Property → Messaging preferences → Security settings** ([steps](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist)).
::

Hotelier Tools has a guest inbox too (alpha): WhatsApp, Gmail, Outlook or any IMAP mailbox and Booking.com messages in one list, with AI-drafted replies that a person approves. Its WhatsApp connection uses a WhatsApp Web session (WAHA), not the official Business API. Compare the options in [WhatsApp with Little Hotelier](/blog/whatsapp-little-hotelier).

## AI and API integrations

"AI integration" means two different things for a Little Hotelier property.

**AI that sells your rooms.** Demand Plus includes **AI bookings**: your property can appear in ChatGPT and Claude through the DirectBooker partner, using live rates, and guests finish the booking on your booking engine. It is in beta with 0% commission until 30 November 2026; from 1 December 2026, 6% plus taxes applies to completed AI bookings, and you cannot opt out ([source](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)). Chatbots such as HiJiffy and Book Me Bob plug into the booking engine.

**AI that works on your own data.** Here there is no official option. Little Hotelier gives properties no API key for reservations or guests (the full answer is in [does Little Hotelier have an API?](/blog/little-hotelier-api)).

Hotelier Tools fills that gap with a REST API and an MCP server (both beta). It is an independent product that connects with your own Little Hotelier login, stored encrypted. With it you can:

- ask Claude or ChatGPT about arrivals, balances or missing invoices ([what an MCP server is](/blog/what-is-mcp-server-hotels), [connect ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- fill a Google Sheet every month ([export reservations to Excel](/blog/export-little-hotelier-reservations-excel))
- connect tools that have no App Store app, with a small script

::demo-cta{path="/developer/rest-api"}
::

## Free userscripts that fill small gaps

Some gaps don't need an integration, just a better screen. The free [userscripts](/tools/ui) run in your browser through Tampermonkey, change only how Little Hotelier looks for you, and stay free forever. Useful ones next to the integrations above:

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): an estimate of Booking.com's commission and your net, inside the reservation.
- [Prices Display](/tools/ui/prices-display): your rates in the calendar view.
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): a pick list of Spanish provinces that also fills the country.
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): print the invoice without opening menus.

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="Little Hotelier reservation summary in Spanish with extra lines for transfer charge, Booking.com commission, total commission with VAT and approximate net" caption="Show Booking.com Commissions adds an estimated commission and net to each Booking.com reservation."}
::

The whole set is on the [browser extensions page](/chrome-extensions), and [free Chrome extensions for Little Hotelier](/blog/little-hotelier-chrome-extensions) explains each one.

See also: [the Little Hotelier guide](/blog/little-hotelier-tips), [Little Hotelier alternatives](/blog/little-hotelier-alternatives).

## Next steps

- Need check-in, upselling or reviews? Start in the App Store and ask for a free trial.
- Need accounting? Map your codes once in **Setup → Accounting exports**, then export finalized invoices each month.
- Need your own data in a sheet, a script or an AI assistant? Use an API layer such as the [Hotelier Tools API & MCP](/tools/bot/api-mcp), free for every hotel until billing starts on 10 January 2027.
