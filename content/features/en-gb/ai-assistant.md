---
title: "An AI assistant for your Little Hotelier front desk"
---

The AI assistant answers questions about your Little Hotelier bookings, guests, prices, invoices, checks and waitlist in plain words, and prepares changes for you. It reads freely, but every change appears as a card you approve or reject before anything reaches Little Hotelier.

## How it works

1. **Ask in the chat.** Open **AI Chat** (`/chat`) and type a request, such as who arrives tomorrow and who still owes money. Answers come back as text and cards: reservation summaries, a proposed change with an evidence table, or a price-recommendations table.
2. **Approve or reject.** Every write needs a card. If the system cannot tell whether a tool reads or writes, it treats it as a write. The card shows the value in Little Hotelier next to the new one and where it came from.
3. **Approve runs exactly that change.** The stored call runs on the server, and the AI gets no second chance to rewrite it. Each approval works once and expires after 24 hours. Refunds always sit behind their own card.
4. **Your staff can ask too.** On **Staff assistant** (`/staff`), register an employee with their WhatsApp number or email and a role: **Read only** or **Can request changes**. They write to your connected number or mailbox, and any change they ask for waits for the owner's approval.

Real requests and what happens after each one are in [AI assistant for a small hotel front desk](/blog/ai-assistant-hotel-front-desk).

## What you need

- Little Hotelier connected on **Credentials**.
- Your property card on `/settings/property`, read from Little Hotelier.
- For the staff assistant, a connected WhatsApp number or mailbox.
- AI credits: each answer uses them, and your balance is on **AI credits**.

## Limits and good to know

- **Status:** the chat and approvals are in beta, the staff assistant is in alpha, and team accounts with owner, manager and staff roles are coming soon.
- **Voice is Spanish for now.** The microphone uses your browser's speech recognition set to Spanish (es-ES). You can type in any language.
- **Staff identity is the sender.** A registered phone number, or an email that passes DKIM/DMARC checks. Staff messages older than 30 minutes are not answered.
- **Outside the dashboard there is no card.** When Claude or ChatGPT calls a write tool through the [MCP server](/tools/bot/api-mcp), it runs straight away, and refunds are blocked there.
