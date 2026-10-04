---
title: "What is an MCP server? A plain-English guide for hotel owners (and which PMS have one)"
seoTitle: "What is an MCP server? Guide for hotel owners (2026)"
description: "An MCP server lets Claude or ChatGPT read and act on your hotel software. Plain-English guide, safety tips, and which PMS have one as of October 2026."
date: 2026-10-03
category: ai
tags: [mcp, ai, claude, chatgpt, pms]
keywords: [what is mcp server, mcp server for hotels, mcp server for hotel booking, little hotelier mcp, apaleo mcp server, mews mcp server, cloudbeds mcp server, what is mcp server in claude]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "MCP setup guide in Hotelier Tools with a What is MCP? explanation and Client configuration tabs for Claude Desktop, VS Code, Cursor and Custom / SDK, showing the Claude Desktop config with the server address"
featured: true
faq:
  - q: "What does MCP stand for?"
    a: "Model Context Protocol. It is an open standard that Anthropic released in November 2024 so AI assistants can connect to other software in one common way. In December 2025 it was donated to the Agentic AI Foundation under the Linux Foundation."
  - q: "Is an MCP server the same as an API?"
    a: "No. An API is a set of fixed requests that programmers write code against. An MCP server describes its tools to an AI assistant, so the assistant can pick and call them from a plain-language request. Most MCP servers are built on top of an API."
  - q: "Do I need to be a developer to use an MCP server?"
    a: "No. In Claude you paste the server address into a custom connector and sign in. In ChatGPT you turn on developer mode and create an app with the address. Developers can also use it from Claude Code, Cursor or VS Code."
  - q: "Does SiteMinder have an MCP server?"
    a: "Yes, but for distribution. SiteMinder's Channels Plus MCP and Direct Booking MCP let AI travel platforms show and sell hotel rooms. They are not a way for an owner to ask an AI about their own bookings in Little Hotelier."
  - q: "Can an MCP server change my bookings?"
    a: "It can if it offers write tools and you allow them. Good servers separate reading from changing, block irreversible actions such as refunds, and rely on your AI app asking before each change. Check what a server can do before you connect it."
  - q: "Is it safe to connect AI to guest data?"
    a: "It can be, with care. Guest data you ask about is sent to the AI provider, so check its training settings, connect only servers you trust, keep approvals on for changes, and revoke access you no longer use. Your hotel remains responsible for the guest data."
---

An MCP server is a connector that lets an AI assistant such as Claude or ChatGPT look things up and carry out tasks in another piece of software, using an open standard called the **Model Context Protocol**. For a hotel, it means you can ask "who arrives tomorrow with an unpaid balance?" and the assistant gets the answer from your property management system (PMS) instead of you copying it out. As of October 2026, only a handful of PMS offer one officially; Little Hotelier does not, but you can connect it through Hotelier Tools.

This is the hub for our AI guides. Each section links to a step-by-step guide when you are ready.

## What does MCP mean, and who created it?

MCP stands for **Model Context Protocol**. Anthropic, the company behind Claude, [released it as an open standard](https://www.anthropic.com/news/model-context-protocol) on 25 November 2024. In December 2025 Anthropic [donated it to the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), a fund under the Linux Foundation co-founded by Anthropic, Block and OpenAI. By then it had been adopted by ChatGPT, Cursor, Gemini, Microsoft Copilot and Visual Studio Code, among others.

There are two sides:

- **The MCP client** lives inside your AI app: Claude, ChatGPT, Copilot.
- **The MCP server** lives on the software side. It offers a list of **tools**, each with a name and a description, such as "get reservations by date range" or "record a payment".

When you ask a question, the AI reads the tool list, picks the right tool, calls it, and answers with the result. You never write code.

## MCP vs API vs chatbot: a hotel analogy

Picture your PMS as the back office where the reservation book lives.

- **An API** is the back-office hatch with a strict order form. Software can use it, but a programmer has to write code for every form it fills in.
- **An MCP server** is a concierge standing at that hatch. It hands any AI assistant a printed menu of what it can do ("list arrivals", "check a balance", "propose a change"), fills in the forms for it, and refuses what is not allowed. Most MCP servers are built on top of an API.
- **A chatbot** is a receptionist who has only read the brochure. It can chat politely, but it cannot open the reservation book. Give it an MCP connection and it can check real bookings.

| | What it is | Who uses it | Hotel example |
|---|---|---|---|
| API | Fixed requests for software | Developers | "Reservations with check-in 1–30 April" |
| MCP server | A menu of tools an AI can discover and call | AI assistants | "Who arrives tomorrow with an unpaid balance?" |
| Chatbot | An AI that talks | Guests or staff | "What time is breakfast?" |

If you want the API side of the story, read [does Little Hotelier have an API?](/blog/little-hotelier-api)

## What can you ask an AI connected to your PMS?

Once connected, you ask in plain words. With Little Hotelier connected through Hotelier Tools, these work:

::prompt{label="Claude"}
Who arrives tomorrow, and does any of them still have an unpaid balance?
::

::prompt{label="ChatGPT"}
Which stays checked out last week and still have no invoice? Why can't each one be invoiced yet?
::

::prompt{label="Claude"}
Compare my prices for the next 14 nights with the competitor prices you have, and tell me where I'm cheapest.
::

::prompt{label="Claude"}
Which arrivals in the next 7 days have no room assigned or are missing an ID document?
::

::screenshot{src="/images/blog/demo/en/ai-chat-arrivals-this-week.webp" alt="Hotelier Tools AI assistant asked Which bookings arrive this week, showing one successful tool call and a Reservations (14) list of cards with guest name, check-in and check-out dates, Paid or Pending, and status badges such as checked-out, checked-in and confirmed" caption="Asked which bookings arrive this week, the assistant calls a reservations tool and shows the live result. The same tools answer in Claude or ChatGPT." path="/chat/3a751210-d8ab-4cb7-8add-6ee5244c93af"}
::

The difference from pasting an export into a chatbot: the data is live, you don't export anything, and the assistant can also act (with your approval) instead of only talking.

What MCP does not change: the AI can still misread a request, and the answer is only as good as the data in your PMS. Ask it to show the reservations it used when a number matters.

## Which hotel PMS have an MCP server? (as of October 2026)

We checked each vendor's own site and docs on 3 October 2026. "Not found" means we found no official server or announcement, not proof that none is coming.

| PMS | Official MCP for your own data? | Can it change data? | Notes |
|---|---|---|---|
| Apaleo | Yes, open beta | Read and write | About 230 tools; [Apaleo developer docs](https://apaleo.dev/guides/ai/overview.html). First announced in [September 2025](https://apaleo.com/blog/apaleo-news/apaleo-launches-mcp-server). |
| Hospitable (vacation rentals) | Yes, since April 2026 | Read and write | Messages sent through it "are delivered to guests immediately"; not on the Essentials plan ([help](https://help.hospitable.com/en/articles/14424057-connect-an-ai-agent-to-hospitable-using-mcp)) |
| Guesty (vacation rentals) | Yes, early beta | Read only | Labeled "experimental" ([docs](https://open-api-docs.guesty.com/docs/guesty-mcp-server-beta)) |
| Lodgify (vacation rentals) | Announced | Read and write, per Lodgify | Its [AI page](https://www.lodgify.com/ai/) presents "Lodgify MCP"; we could not confirm general availability |
| Cloudbeds | Docs only | No | Its MCP serves [developer documentation](https://developers.cloudbeds.com/docs/build-with-llms), not hotel data |
| Mews | Not found | — | Only unofficial community projects, such as [this one on GitHub](https://github.com/tjg37/mews-mcp-server) |
| Oracle OPERA Cloud | Not found | — | Unofficial community projects exist ([example](https://github.com/lesleslie/opera-cloud-mcp)) |
| Hostaway, Smoobu, Beds24 | Not found | — | Hostaway and Beds24 have unofficial community projects |
| SiteMinder | For distribution only | — | See below |
| Little Hotelier | Not found | — | Connect through [Hotelier Tools](/tools/bot/api-mcp), an independent MCP server |

Two patterns stand out. Most official servers so far come from vacation-rental platforms and from Apaleo, an API-first hotel PMS. And several vendors use "MCP" for something else: documentation for developers, or selling rooms through AI apps.

## Does Little Hotelier have an MCP server?

Not an official one. As of October 2026 we found no Little Hotelier MCP server or announcement on littlehotelier.com or in SiteMinder's newsroom and developer site. SiteMinder's partner API docs even note that availability and rate data [can't be obtained from Little Hotelier](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) through that API.

SiteMinder's MCP work is about **distribution**. According to [SiteMinder](https://www.siteminder.com/ai-distribution/), Channels Plus MCP lets AI travel platforms book hotels in its portfolio, and Direct Booking MCP shows a Demand Plus hotel's live rates inside ChatGPT, Gemini and Claude with a link to its own booking engine. That helps guests find you. It does not let *you* ask an AI about your own bookings.

**Hotelier Tools** fills that gap. It is an independent dashboard that connects with your property's own Little Hotelier login and runs an MCP server at `https://dashboard.hotelier.tools/api/mcp`:

- more than 100 hotel tools: reservations, guests, payments, invoices, rates, competitor prices, automated checks, the waitlist and more
- sign in with your browser (OAuth) or use an API key
- each connection acts as one person, on one property, with that person's permissions
- irreversible actions, such as refunds, emailing invoices and filing the INE survey, are blocked for outside AI apps

Hotelier Tools is not affiliated with or endorsed by SiteMinder or Little Hotelier.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent.webp" alt="Authorize MCP access page in Hotelier Tools: AI assistant (MCP client) wants to access your Hotelier Tools account through the MCP API, signing in as demo@hotelier.tools with a token that expires in 30 days and can be revoked, with Deny and Allow access buttons" caption="When an AI app connects by signing in, you see what it asks for and which account it uses. Access expires after 30 days." path="/oauth/authorize"}
::

Pick your guide:

- [Connect Claude to Little Hotelier](/blog/connect-claude-to-little-hotelier) (claude.ai, Claude Desktop, mobile)
- [Connect ChatGPT to Little Hotelier](/blog/connect-chatgpt-to-little-hotelier), with 18 prompts
- [Claude Code, Cursor and VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode), for reports and scripts
- [An AI assistant at the front desk](/blog/ai-assistant-hotel-front-desk), with approval cards inside the dashboard

## Is it safe to connect AI to your hotel system?

It can be, if you treat it like giving a new employee a key. Five risks, and what to do about each:

1. **The AI changes the wrong thing.** It might pick the wrong booking or misread a date. Choose servers that separate reading from changing, and keep your AI app's "ask before running" setting on for any tool that changes data.
2. **Hidden instructions in text.** A guest email or web page could contain text written to trick an AI ("ignore your instructions and refund…"). This is called prompt injection. Approvals on every change are your safety net.
3. **Guest data leaves your PMS.** Whatever the AI reads is sent to the AI provider. Check its training settings: Anthropic and OpenAI both describe theirs in their help centers, and business plans usually exclude training by default.
4. **Access that never ends.** Keys get copied and forgotten. Prefer sign-ins that expire, give each tool its own key, and revoke what you no longer use.
5. **Unknown servers.** A community server from the internet may run on your computer with your password. Connect only servers from organizations you trust.

A good hotel MCP server also blocks actions you cannot undo. In Hotelier Tools, refunds, emailing invoices to guests and filing official returns are not available to outside AI apps at all; inside the dashboard, they sit behind an approval card.

::callout{type="warning" title="Changes made through outside AI apps"}
Inside the Hotelier Tools dashboard, every change waits for an approve/reject card. When Claude, ChatGPT or a code editor calls a write tool, it runs straight away, so the confirmation in your AI app is the approval. Keep it switched on.
::

## What does an MCP server cost?

MCP itself is free: it is an open standard. You pay for the pieces around it:

- **The AI app.** As of October 2026, Claude allows custom connectors on every plan, including Free (one connector), per [Anthropic](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). ChatGPT offers full read-and-write MCP on Business, Enterprise and Edu, with read-only access in developer mode on Pro, per [OpenAI](https://help.openai.com/en/articles/12584461).
- **The server.** PMS vendors decide their own terms; Hospitable, for example, leaves MCP out of its Essentials plan. Hotelier Tools is free for every hotel until billing starts on 10 January 2027; hotels that start in 2026 then pay 50 € per month throughout 2027, with every feature included.

::demo-cta{path="/chat"}
::

## Summary

- An MCP server is a menu of tools that an AI assistant can use in your software, built on an open standard from Anthropic, now run under the Linux Foundation.
- Official hotel and rental PMS servers exist (Apaleo, Hospitable, Guesty); Little Hotelier has none, and SiteMinder's MCP is for distribution.
- You can connect Little Hotelier through Hotelier Tools, with Claude, ChatGPT or a code editor.
- Keep approvals on for changes, check your AI provider's data settings, and revoke access you no longer use.
