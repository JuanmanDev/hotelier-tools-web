---
title: "One guest inbox for WhatsApp, email and Booking.com"
---

The guest inbox puts WhatsApp, email and Booking.com messages in one list, with the Little Hotelier reservation next to each conversation. An AI drafts each reply from your own FAQ and house notes, and by default a person approves it before anything is sent.

## How it works

1. **Connect your channels.** Booking.com through **Credentials > Booking.com extranet** with your partner login and second factor. Email from Google, Microsoft or any IMAP/SMTP account. WhatsApp through a WhatsApp Web session (WAHA).
2. **Messages arrive next to the booking.** A Booking.com thread is linked to its reservation automatically. Guest Q&A questions from your Booking.com page arrive in the same inbox.
3. **Choose a reply mode per account** on **Channels** (`/messaging/channels`): **Off**, **Draft** (the default, nothing happens until you approve), **Automatic reply** after a delay you choose, or **Autonomous**.
4. **Teach it your answers.** On **FAQ & knowledge** (`/messaging/faq`), add your FAQ page or text and house notes such as wifi and parking. Correct a reply once and the assistant learns from it.
5. **Invoice requests are recognized without AI.** Booking.com's invoice-request messages offer to enroll the stay for its invoice at checkout.

Setup details per channel: [WhatsApp with Little Hotelier](/blog/whatsapp-little-hotelier) and [managing Booking.com guest messages](/blog/booking-com-guest-messages).

## What you need

- Little Hotelier connected on **Credentials**, and your property card filled in on `/settings/property`.
- For WhatsApp, a WAHA server: its address, a session name and an API key.
- AI credits. Each message the AI reads and drafts uses them, shown on **AI credits** (`/messaging/credits`).

## Limits and good to know

- **Status: alpha.** It is an early version and changes often.
- **Booking.com stays person-sent.** The AI never sends to Booking.com guests on its own. Sending your approved reply back to Booking.com from the inbox is not promised yet: copy it into the Extranet or Pulse.
- **The guest AI has no tools.** It returns a plan from a closed list and can never cancel, change dates or touch payments.
- **It only sees a booking for a verified sender:** a phone matching the last 8 digits, the exact email, or a Booking.com thread.
- **A service you haven't listed** is answered "to confirm", never yes.
- **WhatsApp through WAHA is not the official API.** A number used this way could be blocked, so only reply to guests who write first. Group chats are ignored.
- Automatic replies stop at 4 an hour or 12 a day.
