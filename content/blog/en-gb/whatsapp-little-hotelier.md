---
title: "How to use WhatsApp with Little Hotelier (Messaging hub, WhatsApp Business and other options)"
seoTitle: "WhatsApp with Little Hotelier: your options in 2026"
description: "Little Hotelier's Messaging hub uses the official WhatsApp Business API. Compare it with the free WhatsApp Business app and a shared inbox, with templates."
date: 2026-10-03
category: guests
tags: [whatsapp, messaging, little hotelier, guest engagement, inbox]
keywords: [little hotelier whatsapp, whatsapp for hotels, whatsapp business api for hotels, whatsapp business app hotel, whatsapp templates hotel check-in, little hotelier messaging hub]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp
coverAlt: "Hotelier Tools guest inbox with a WhatsApp conversation from Ingrid Kowalski about a late arrival (identity verified, booking linked), an AI plan in draft with an editable reply, and the private Assistant pane"
faq:
  - q: "Does Little Hotelier have WhatsApp?"
    a: "Yes, through Messaging hub in the Guest Engagement add-on. It connects to the official WhatsApp Business API, links conversations to the guest's reservation and lets several users reply from one number."
  - q: "Can I keep my WhatsApp Business app number when I connect Messaging hub?"
    a: "Not on both at once. A number connected to the WhatsApp Business API can't also be used in the WhatsApp Business app. You must remove it from the app first, and the app's chat history can't be restored, so Little Hotelier suggests testing with another number."
  - q: "How much does WhatsApp cost for a small hotel?"
    a: "The WhatsApp Business app is free. On the WhatsApp Business Platform (the API behind Messaging hub), Meta charges per delivered template message, while replies inside the 24-hour customer service window are free. Little Hotelier adds no WhatsApp fee, but Guest Engagement itself is a paid add-on."
  - q: "Can I send automatic pre-arrival messages on WhatsApp?"
    a: "In Messaging hub you start WhatsApp conversations with templates that WhatsApp has approved, such as check-in instructions. The free WhatsApp Business app only automates a greeting and an away message."
  - q: "Is the Hotelier Tools WhatsApp connection the official WhatsApp Business API?"
    a: "No. It uses WAHA, which runs a WhatsApp Web session. That means no Meta verification or template approvals, but WhatsApp doesn't allow unofficial clients, so a number used this way could be blocked. Use it mainly to answer guests who write to you."
  - q: "Will the AI answer WhatsApp guests on its own?"
    a: "Only if you choose Automatic reply or Autonomous for that account. The default, Draft, prepares a reply that waits for a person. Automatic replies also need a verified guest, an allowed request and enough confidence, and are capped per hour and per day."
---

Yes, Little Hotelier connects to WhatsApp natively through **Messaging hub**, part of the paid **Guest Engagement** add-on, using the official WhatsApp Business API: replying to a guest who wrote in the last 24 hours is free, and writing first needs an approved template that Meta charges for. The other common route is the free WhatsApp Business app on a phone, which has no link to your bookings. Hotelier Tools adds a third option, WhatsApp in one inbox with email and Booking.com, through a WhatsApp Web session (WAHA) rather than the official API.

Little Hotelier and WhatsApp details below were checked against their help pages as of October 2026.

## Does Little Hotelier support WhatsApp?

Yes. **Messaging hub** in Guest Engagement brings WhatsApp, Booking.com, Airbnb, SMS and email conversations into one inbox, with the guest's profile and reservation linked to each chat ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)). Guest Engagement is an add-on, listed for the Pro plan on Little Hotelier's [pricing page](https://www.littlehotelier.com/pricing/).

To connect WhatsApp ([Connect WhatsApp in Guest Engagement](https://helpcentre.littlehotelier.com/en/articles/9525852-connect-whatsapp-in-guest-engagement)):

1. Go to **Guest Engagement > Communication > Settings** and click **Configure** on WhatsApp.
2. Verify your business with your Facebook profile (WhatsApp and Facebook both belong to Meta).
3. Create or link your WhatsApp Business account and profile.
4. Add your payment details. WhatsApp invoices you directly; Little Hotelier adds no WhatsApp fee.

::callout{type="warning" title="Your current number"}
A number can't be on the WhatsApp Business app and Messaging hub at the same time. To move it, back up and remove it from the app first; its chats can't be restored there afterwards. Little Hotelier suggests testing Messaging hub with a different number first.
::

## WhatsApp Business app or WhatsApp Business API?

| | WhatsApp Business app | WhatsApp Business Platform (API) |
|---|---|---|
| Cost | Free to download | Per message Meta delivers; replies in the 24-hour window are free |
| Where you use it | On the phone, plus linked devices such as WhatsApp Web | Through software such as Messaging hub |
| Writing first | Anytime, to guests who agreed | Only with a template WhatsApp approved |
| Link to bookings | None | Depends on the software |

**The app** gives you a business profile, **quick replies** for frequent answers, an automatic **greeting** and **away message**, **labels** to sort chats, and a catalogue ([WhatsApp Business app features](https://whatsappbusiness.com/products/business-app-features/)). It works well for a small B&B where one person answers.

**The Platform** charges "on a per-message basis for each message we deliver to users". When a guest writes, a 24-hour customer service window opens, during which your replies are free, and it resets with every guest message ([WhatsApp Business Platform pricing](https://whatsappbusiness.com/products/platform-pricing/)). Outside that window you need a template, and approval can take up to 24 hours.

## WhatsApp templates for confirmations and check-in instructions

In Messaging hub, create templates under **Guest Engagement > Communication > Settings > WhatsApp > Templates** ([Create and manage WhatsApp templates](https://helpcentre.littlehotelier.com/en/articles/9525848-create-and-manage-whatsapp-templates)):

- **Template name:** lowercase with underscores, like `checkin_instructions`. Guests never see it.
- **Category:** **Utility** for booking confirmations, check-in instructions and payment reminders. **Marketing** for offers and upsells, with an Unsubscribe button. A promotion sent as Utility gets rejected.
- **Variables:** use **Add variable** for the guest name, dates, property name and address.

Three you can adapt (each bracket becomes a variable):

```text [whatsapp-templates.txt]
booking_confirmation (Utility)
Hi [guest name], your stay at [property name] is confirmed: [arrival date] to [departure date]. Reply here if you have any questions.

checkin_instructions (Utility)
Hi [guest name], see you on [arrival date]! Check-in is from [check-in time] at [address]. Reply with your arrival time and we'll have everything ready.

payment_reminder (Utility)
Hi [guest name], there is a balance of [amount] for your stay on [arrival date]. You can pay securely here: [payment link]. We never ask for card details in this chat.
```

WhatsApp rejects templates that ask for sensitive personal information, so don't request ID or card numbers in them.

## Can several staff use one WhatsApp number?

- **Messaging hub:** yes. The API is built for it: several users reply from one shared inbox, and the reservation sits next to each chat.
- **WhatsApp Business app:** the same chats appear on the phone and its linked devices, such as WhatsApp Web at the front desk. There is no assignment, and nothing links a chat to a booking. With Meta Verified, WhatsApp says you can link up to 10 devices and agents.
- **Hotelier Tools:** the inbox is a web page, so whoever is signed in to the dashboard sees the same conversations, with the reservation beside each one.

One change affects every option: since 28 September 2026, Booking.com no longer sends guest phone numbers to channel managers, so new Booking.com bookings reach Little Hotelier without one ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)). Copy the number from the Extranet (**Show phone number**) when you want to write to that guest on WhatsApp.

## WhatsApp, email and Booking.com in one inbox with Hotelier Tools

The Hotelier Tools **Inbox** (`/messaging`, alpha) shows WhatsApp, email and Booking.com messages in one list. For each conversation it shows the reservation and an AI-drafted reply that a person approves.

### What "WAHA, not the official API" means for you

WhatsApp reaches Hotelier Tools through [WAHA](https://waha.devlike.pro/docs/overview/introduction/), a server that runs a WhatsApp Web session. Before you choose it:

- **Your number stays on your phone.** It works like WhatsApp Web open on a computer, so you keep using your WhatsApp or WhatsApp Business app as usual.
- **No Meta business verification and no template approvals**, because it doesn't go through the WhatsApp Business Platform.
- **It isn't officially allowed.** WAHA's own documentation says "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe." A number used this way could be blocked. WAHA's advice is to reply to people who write to you rather than start conversations, and never to send bulk messages ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/)).
- **You need a WAHA server.** The dashboard asks for its address, a session name and an API key. Check with Hotelier Tools whether one can be provided for your property; otherwise you run your own.
- **Group chats are ignored.**

If you need the official API, Messaging hub is the right choice. If you mostly answer guests who message you and want WhatsApp next to email and Booking.com, the inbox fits better.

### How to connect it

1. Open **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`). Enter the **WAHA base URL**, the **Session name** and the **WAHA API key**, then save.
2. Click **Copy webhook URL** and paste it into your WAHA session's webhook, for the "message" event. Treat that URL as a password.
3. Press **Test connection**.
4. Open **Inbox** and filter by **WhatsApp**. Messages arrive as soon as they're sent.
5. On **Channels** (`/messaging/channels`), choose the reply mode for this number. **Draft** is the default: the AI prepares a reply and nothing is sent until you approve it.

::screenshot{src="/images/blog/demo/en/guest-inbox.webp" alt="Hotelier Tools guest inbox with All, WhatsApp, Email and Booking.com filters, four WhatsApp and email conversations each marked draft, and a yellow notice that WhatsApp arrives by webhook and the generated URL must be pasted into the WAHA session for the message event" caption="WhatsApp, email and Booking.com in one list, each with an AI draft. If nothing arrives, check the webhook URL in your WAHA session." path="/messaging"}
::

### What the AI may do on WhatsApp

- **It only sees a booking when the sender is verified.** On WhatsApp, the number must match the reservation's phone on at least its last 8 digits. If two guests match, it sees neither. For Booking.com guests, add the phone to the Little Hotelier reservation so the chat can be matched.
- **It answers from your facts.** It uses your FAQ, house notes and property card (`/messaging/faq`), and answers "to confirm" for anything you haven't listed.
- **It has no tools.** It returns a plan from a closed list (send a message, flag for staff, add a reservation note, set the arrival time). It can't cancel, change dates or touch payments.
- **Automatic reply has conditions.** It needs a verified guest, an allowed request and enough confidence, and stops at 4 replies an hour, 12 a day, or 3 in a row without an answer from the guest.
- **It waits for you first.** A WhatsApp message is analysed after 5 minutes; if someone on your team has already replied, nothing is analysed or charged. Each analysis uses AI credits.

Your staff can also ask the AI about bookings by writing to the same connected number, through the **Staff assistant** (`/staff`, alpha). Their messages never enter the guest inbox, and any change they ask for waits for the owner's approval.

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="Channels page with the When a guest writes menu open on the WhatsApp (WAHA) connection: Off, collect only; Draft, I approve everything (selected); Automatic reply, no reservation changes; Autonomous, replies and changes reservations" caption="One reply mode per number. Draft waits for a person." path="/messaging/channels"}
::

::demo-cta{path="/messaging"}
::

How the inbox handles Booking.com conversations is in [how to manage Booking.com guest messages](/blog/booking-com-guest-messages), and the full feature list is on the [Guest inbox page](/tools/bot/guest-inbox). The dashboard is free for every hotel until billing starts on 10 January 2027.

::callout{type="info" title="Independent tool"}
Hotelier Tools is not affiliated with or endorsed by SiteMinder, Little Hotelier, WhatsApp or Meta. It connects with your hotel's own Little Hotelier login.
::

## Consent and privacy on WhatsApp

WhatsApp's Business Policy says you may only contact people who have given you their number and "opt-in permission ... confirming that they wish to receive subsequent messages or calls from you" ([WhatsApp Business Policy](https://business.whatsapp.com/policy)). In practice:

- Ask at booking or check-in whether the guest wants updates on WhatsApp, and note it on the reservation.
- Use the number only for their stay. Marketing needs its own permission.
- Say in your privacy notice that you use WhatsApp, and stop when a guest asks.

See also: [the Little Hotelier guide](/blog/little-hotelier-tips), [the AI assistant for the front desk](/blog/ai-assistant-hotel-front-desk), [a waitlist for sold-out dates](/blog/hotel-waitlist-sold-out-dates), [Booking.com invalid cards and no-shows](/blog/booking-com-invalid-card-no-show).

## Summary

- **Messaging hub** (Guest Engagement add-on) is Little Hotelier's native, official-API option: shared inbox, reservation linked, templates, Meta fees for messages you start.
- **The WhatsApp Business app** is free and fine for one person, but knows nothing about your bookings.
- **The Hotelier Tools inbox** puts WhatsApp with email and Booking.com, with AI drafts a person approves. It uses a WhatsApp Web session (WAHA), not the official API, so keep it to conversations guests start.
- Since 28 September 2026, Booking.com bookings arrive without a phone number: copy it from the Extranet when you need it.
