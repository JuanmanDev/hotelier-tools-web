---
title: "How to read and answer Expedia guest messages (Partner Central, app and email)"
seoTitle: "How to answer Expedia guest messages in Partner Central"
description: "Where Expedia guest messages live, how to reply from Partner Central, the app or your own email, scheduled templates, and one inbox with WhatsApp."
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, guest messages, partner central, inbox, templates, little hotelier]
keywords: [expedia partner central messages, how to reply to expedia guest messages, expedia guest email alias, expedia message centre, expedia scheduled messages, expedia guest phone number not showing, expedia messages in one inbox, expedia partner central app messages]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/en/expedia-guest-messages-channels.webp
coverAlt: "Channels page in Hotelier Tools: the Booking.com messages connection collecting messages in Draft (I approve everything) mode, and below it Expedia Partner Central messages, not connected yet, with a Switch on Expedia messages button and a Partner Central sign-in link"
faq:
  - q: "Where do I find Expedia guest messages?"
    a: "In Expedia Group Partner Central, under Guest relations > Messages. You can search by guest name or reservation ID, or filter to find a conversation. You and the guest also get email notifications about new messages."
  - q: "Can I answer an Expedia guest from my own email?"
    a: "Yes. Each reservation has a guest email alias, a unique address you can copy from the reservation or from Messages. The email must be sent from an address linked to a validated Partner Central user, and the guest's replies show up in your mailbox and in Partner Central."
  - q: "Why can't I see the guest's phone number on Expedia bookings?"
    a: "Expedia has temporarily disabled viewing and exporting traveller phone numbers in Partner Central because of phishing aimed at travellers. Reservations received by API get a generic number. Expedia asks properties to use its own messaging instead."
  - q: "Can I send scheduled messages to Expedia guests?"
    a: "Yes. In Messages, open Manage templates, create a template, turn on Send on a schedule and choose when it goes out. Expedia sends scheduled messages at 10 PM local time."
  - q: "Can Hotelier Tools reply to Expedia guests?"
    a: "No. Hotelier Tools never sends a message to an Expedia guest. Its inbox lists Expedia conversations (beta, working since release 1.71 in November 2026). A reply you write there is kept as a draft for you to send in Partner Central."
  - q: "Is Hotelier Tools part of Expedia or Little Hotelier?"
    a: "No. Hotelier Tools is independent and not affiliated with or endorsed by Expedia Group, SiteMinder or Little Hotelier. It connects with your hotel's own Little Hotelier login and your own Partner Central login."
---

Expedia guest messages live in Partner Central under **Guest relations > Messages**, where you search by guest name or reservation ID and reply in the thread. You can also answer from the Partner Central app, or from your own mailbox through each reservation's guest email alias. Templates and scheduled messages cover the routine questions. To see Expedia next to WhatsApp, Booking.com and email, the Hotelier Tools inbox can show Expedia conversations (beta), but replies always go out from Partner Central.

Expedia features below were checked against Expedia Group's Partner Central help as of November 2026.

## Where are Expedia guest messages?

Open Partner Central and select **Guest relations**, then **Messages** ([Partner Central help: About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center)). From there you can:

- **Search** for a guest by name or reservation ID to send a new message.
- **Filter** the list to find an existing conversation.
- **Reply** in the thread, and attach check-in instructions or photos.

You and your guests get email notifications about new messages, and guests can start a conversation from their itinerary or their confirmation. Expedia calls the Message Center "the recommended option": it is linked to the booking, keeps an auditable history and doesn't expose the guest's contact details ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)).

Two things that surprise new partners:

- **Some bookings have no Message Center.** Many bookings from Expedia's business-to-business (B2B) partners, such as travel agencies, can't be messaged. Contact the B2B partner instead, or ask Expedia to relay an urgent message.
- **Phone numbers are hidden.** Expedia has temporarily disabled viewing and exporting traveller phone numbers in Partner Central, and API reservations get a generic number. The reason is phishing: scammers impersonate hotels on WhatsApp using leaked numbers ([phishing notice](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)). Your channel manager won't have the real number either.

### On your phone: the Partner Central app

The Expedia Group Partner Central app lets you start conversations and respond to guests, with notifications for bookings, reviews and cancellations. Expedia says active app users respond 20% faster than non-active users (its own 2021 average, [app page](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand)).

## How to reply from your own email: the guest email alias

Every reservation has a **guest email alias**, a unique address that relays your email to the guest through Expedia ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)). To copy it:

1. **From a reservation:** select **Reservations**, find the booking, select the guest's name, then **Copy email to clipboard**.
2. **From Messages:** select **Guest relations > Messages**, open the guest, select **Show contact details**, then **Copy email to clipboard**.

The rules that matter:

- The alias works for Expedia, Hotels.com, Travelocity, Orbitz and Wotif bookings. As of November 2026 it doesn't work for B2B bookings or Egencia.
- The sending address **must belong to a validated Partner Central user**. Mail from any other address is not delivered, so add your front-desk mailbox as a Partner Central user if you want to reply from it.
- The guest's reply arrives in your mailbox and in the Message Center.
- An email containing a credit card number is blocked. Expedia virtual card numbers are allowed.
- You can attach PDF or Word files, such as a pre-arrival form.

## How fast should you answer Expedia guests?

Expedia's help asks you to "respond to every guest in a timely manner" and to "reply promptly to avoid delays, cancellations, or escalations". It publishes no fixed deadline for ordinary messages. In practice, treat the same day as the limit, and answer within minutes for anything about arrival. Late arrivals, door codes and parking are what guests ask on the day they travel.

Expedia also lists what not to do ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)):

- **No marketing.** No upselling or promotions through Expedia messages.
- **No duplicate confirmations.** The guest already has one from Expedia.
- **No changing booking terms outside Expedia.** Dates and prices are changed in Partner Central.
- **Avoid external links and attachments** when you can. Guests may see them as suspicious.

When something is agreed in person during the stay, Expedia recommends confirming it in writing in the Message Center. That message is your record if there is a dispute later.

## How to set up templates and scheduled messages

In **Guest relations > Messages**, select **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)):

1. Select **Create new template**, give it a name and write the text.
2. Under **Insert custom information**, add variable content such as the guest's name.
3. Attach files if you need them, for example a map or check-in instructions.
4. Turn on **Send on a schedule** and choose when it goes out, with no end date or for a date range.
5. Select **Save**.

All scheduled messages are sent at 10 PM local time. A **smart template** can reply automatically to one topic; as of November 2026 the only one is a post-stay review request. **Send bulk message** sends one template to several guests at once.

A pre-arrival template you can adapt:

```text [expedia-pre-arrival.txt]
Hi [guest name], we're looking forward to your stay at [property name].

Check-in is from [time]. If you'll arrive after 22:00, reply here with your arrival time and we'll leave instructions.
Parking: [your parking info]. Breakfast: [times and price].

We will only contact you through this Expedia conversation, and we will never ask for card details by WhatsApp or text message.
```

The last line matters more now that scammers write to Expedia guests on WhatsApp. More on that in [how to spot scam messages at a hotel](/blog/hotel-scam-messages).

## The faster way: Expedia conversations in the Hotelier Tools inbox (beta)

Hotelier Tools can show your Expedia conversations in its **Inbox** (`/messaging`), next to WhatsApp, Booking.com and email, each one beside its Little Hotelier booking. Replies are written in Partner Central. Here is how to set it up:

1. **Connect Partner Central** in **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`). Hotelier Tools signs in for you in a browser on the server; you answer what Expedia asks, such as the code it emails on a new device. The session is stored encrypted, and **Keep Expedia signed in** stops it from idling out. The setup is the same as for [Expedia Collect payment requests](/blog/expedia-collect-payment-requests).
2. In the same page's **Guest messages** card, turn on **Read Expedia guest messages**. Or open **Channels** (`/messaging/channels`) and press **Switch on Expedia messages**.
3. Choose the mode on **Channels**. Expedia offers only two: **Off (collect only)**, where messages are shown and nothing is analysed, and **Draft**, where the AI prepares a reply for you to check. A new Expedia channel starts in collect-only mode.
4. Open **Inbox** and filter by **Expedia**. Each conversation has a **Conversation on Expedia** link that opens the thread in Partner Central.

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-card.webp" alt="Guest messages card on the Expedia Partner Central page: the switch is off, the note says Sign in to Partner Central first, a Replies stay in Partner Central box says Hotelier Tools never sends a message to an Expedia guest and keeps your reply as a draft, and a Mode and timing link; the Expedia Collect payments card follows below" caption="The switch sits next to the Partner Central sign-in. Replies to Expedia guests always stay in Partner Central." path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-channels.webp" alt="Channels page: Booking.com messages collected in Draft (I approve everything) mode with Collect messages on, and Expedia Partner Central messages marked not connected yet, with Switch on Expedia messages and Partner Central sign-in" caption="Expedia sits on the Channels page with your other accounts. In the demo it isn't switched on." path="/messaging/channels"}
::

### What the inbox reads, and what it never does

- **The conversation list, not every message.** For each thread it reads the guest, the stay and the latest message, as Partner Central's message list previews it. The whole thread stays in Partner Central.
- **It never sends to an Expedia guest.** Not automatically, and not when you press a button. What you type is kept as the conversation's draft (**Save as a draft: Expedia replies are sent from Partner Central**). Copy it into Partner Central or the app.
- **Bookings are matched by confirmation code only.** Little Hotelier stores an Expedia booking as `EXP-` plus Expedia's confirmation code. A thread that names that code is linked to the booking and counts as verified. A guest name is never used as proof: a thread without a code stays unmatched, and the AI sees no booking details for it.

In **Draft** mode, the AI writes its suggestion from the verified booking and from what you taught it in **FAQ & knowledge** (`/messaging/faq`): your FAQ page, house notes and property card. A service you haven't listed is answered as "to confirm", never "yes". How those drafts work is in [AI replies to guest messages](/blog/ai-replies-guest-messages).

::callout{type="warning" title="Status as of November 2026"}
Expedia conversations are in beta. Until 5 November 2026, Partner Central refused the request that read its message list (an HTTP 403), so no Expedia conversation reached the inbox. Release 1.71 (November 2026) fixed it: Hotelier Tools now sends the same request as Partner Central's own inbox page, and Expedia conversations arrive with the guest, the stay and the latest message. If Expedia changes that request again, the Expedia page shows an error instead of an empty inbox until it is updated. Replies are still sent from Partner Central or the app.
::

Two more honest limits:

- **It uses your own Partner Central session.** Expedia's partner terms restrict automated access to Partner Central. The connectivity route Expedia supports is its Messaging API, available through connectivity providers.
- **Expedia is read-only here.** WhatsApp and email threads can be answered from the inbox. Expedia threads cannot.

::demo-cta{path="/messaging/channels"}
::

Everything the inbox does is on the [Guest inbox page](/tools/bot/guest-inbox). The dashboard is free for every hotel until billing starts on 10 January 2027.

::callout{type="info" title="Independent tool"}
Hotelier Tools is not affiliated with or endorsed by Expedia Group, SiteMinder or Little Hotelier. It connects with your hotel's own Little Hotelier login and your own Expedia Partner Central login.
::

See also: [Booking.com guest messages without the extranet](/blog/booking-com-guest-messages), [WhatsApp with Little Hotelier](/blog/whatsapp-little-hotelier), [AI replies to guest messages](/blog/ai-replies-guest-messages).

## Summary

- Expedia messages are in Partner Central under **Guest relations > Messages**, and in the Partner Central app.
- To answer from your own mailbox, copy the reservation's guest email alias and send from an address that is a validated Partner Central user.
- Guest phone numbers are hidden for now: keep contact inside Expedia's messaging, and tell guests you'll never ask for card details elsewhere.
- Templates with **Send on a schedule** cover check-in instructions; scheduled messages go out at 10 PM local time.
- The Hotelier Tools inbox can list Expedia conversations next to WhatsApp and Booking.com (beta, working since release 1.71 in November 2026), but every Expedia reply is sent from Partner Central.
