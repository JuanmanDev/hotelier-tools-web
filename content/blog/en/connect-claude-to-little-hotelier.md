---
title: "How to connect Claude to Little Hotelier (MCP, step by step)"
seoTitle: "Connect Claude to Little Hotelier: MCP setup step by step"
description: "Connect Claude to Little Hotelier with a custom connector: paste one URL, sign in, allow access. First prompts, write safety and troubleshooting."
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [connect claude to little hotelier, little hotelier mcp, claude mcp connectors, claude desktop mcp setup, claude custom connector, little hotelier ai]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "Hotelier Tools MCP setup guide with the What is MCP? explanation and the Claude Desktop tab selected, showing the steps and the configuration snippet with the MCP server URL"
featured: true
faq:
  - q: "Which Claude plans can add a custom connector?"
    a: "As of October 2026, Anthropic lists custom connectors on the Free, Pro, Max, Team and Enterprise plans. Free accounts can add one custom connector. On Team and Enterprise, an Owner adds it for the organization and each member then connects with their own login."
  - q: "Does the Little Hotelier connection work in the Claude mobile app?"
    a: "Yes. Once you connect it on claude.ai or in Claude Desktop, Anthropic says it is also available in Claude for iOS and Android. Adding new custom connectors from your phone is still in beta, so set it up on a computer."
  - q: "How do I disconnect Claude or rotate access?"
    a: "In Claude, open Customize, then Connectors, and choose Disconnect or Remove. In Hotelier Tools, open Developer, API Keys and revoke the connection or the key you used under Active keys. Revoking on the Hotelier Tools side cuts access immediately."
  - q: "Can Claude change my reservations or prices?"
    a: "Yes, if you let it. Write tools run when Claude calls them, and Hotelier Tools does not add a second approval card outside its own dashboard, so keep Claude's per-tool approval set to Needs approval. Refunds, emailing invoices, filing the INE return and other irreversible actions are blocked for Claude."
  - q: "Does Little Hotelier have its own MCP server?"
    a: "Not an official one as of October 2026. SiteMinder's MCP work is about selling rooms through AI assistants, not about owners querying their own data. Hotelier Tools runs an independent MCP server that connects with your property's own Little Hotelier login."
  - q: "Is this an official Anthropic or Little Hotelier integration?"
    a: "No. Hotelier Tools is independent and is not affiliated with or endorsed by Anthropic, SiteMinder or Little Hotelier. It uses the standard MCP protocol that Claude supports for any custom connector."
---

Little Hotelier doesn't offer an MCP server of its own (as of October 2026), but you can still connect Claude to it through Hotelier Tools, which runs one for your property. In Claude, open **Customize → Connectors → Add custom connector**, paste `https://dashboard.hotelier.tools/api/mcp`, sign in to Hotelier Tools and press **Allow access**. Claude can then answer questions from your live bookings and, if you let it, make changes.

New to the idea? Read [what an MCP server is](/blog/what-is-mcp-server-hotels) first. It takes three minutes.

## What you need before you start

::callout{type="tip" title="Checklist"}
- **A Claude account.** As of October 2026, [Anthropic lists custom connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) on the Free, Pro, Max, Team and Enterprise plans. Free accounts can add one.
- **A Hotelier Tools account** with Little Hotelier connected on **Credentials** (`/credentials`). It is free for every hotel until billing starts on 10 January 2027.
- **API access in Hotelier Tools.** The property owner has it. Without it, the connection is refused.
::

Hotelier Tools reads your data with your property's own Little Hotelier login. It is not affiliated with or endorsed by SiteMinder, Little Hotelier or Anthropic.

## How to connect Claude to Little Hotelier (claude.ai and Claude Desktop)

This is the recommended route. You sign in with your browser, so there is no key to copy. These steps follow [Anthropic's current instructions](https://claude.com/docs/connectors/custom/add-unlisted) for Free, Pro and Max accounts.

1. Open [claude.ai](https://claude.ai) or the Claude Desktop app and go to **Customize → Connectors**. Some screens still call it **Settings → Connectors**.
2. Click **Add custom connector** (on some accounts: **+ Add**, then **Add custom connector**).
3. Name it `Hotelier Tools` and paste the MCP server URL: `https://dashboard.hotelier.tools/api/mcp`
4. If Claude asks how people sign in, choose **Sign in now**. If it asks for an OAuth client, choose **Register automatically**: the Hotelier Tools server supports this automatic registration. If you only see **Advanced settings**, leave them empty.
5. Click **Add**, then **Connect**. A Hotelier Tools window opens.
6. Sign in to Hotelier Tools. On **Authorize MCP access**, pick the property (only if you have several) and press **Allow access**.

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="Authorize MCP access card: AI assistant (MCP client) wants to access your Hotelier Tools account through the MCP API, the signed-in email, a token that expires in 30 days, and the Deny and Allow access buttons" caption="Press Allow access (with several properties, you pick one first). Claude never sees your password." path="/oauth/authorize" width="472" height="327"}
::

7. Start a new chat, click **+**, open **Connectors** and check that **Hotelier Tools** is switched on.
8. Ask a first question (examples below). Claude shows which tool it wants to use and asks before running it.

The sign-in lasts **30 days**. After that, Claude asks you to connect again.

### On a Team or Enterprise plan

An Owner adds the connector once: **Organization settings → Connectors → Add → Custom → Web**, with the same URL. Each colleague then opens **Customize → Connectors**, finds Hotelier Tools with the **Custom** label and clicks **Connect**. Each connection signs in to Hotelier Tools separately, and Claude acts with the permissions of the login used.

### In the mobile app

According to [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), a connector you set up on claude.ai or Claude Desktop is also available in Claude for iOS and Android. Adding one directly from your phone is still in beta, so do the setup on a computer.

## Using an API key instead of signing in

Most people should use the sign-in above. An API key is useful when you want access that does not expire after 30 days, or a client that cannot do the browser sign-in.

1. In Hotelier Tools, open **Developer → API & MCP → API Keys** (`/developer/api-keys`).
2. Under "Generate a new key", type a name such as `claude-desktop` and press **Generate key**.
3. Copy it now. The page warns: "Copy this key now — it will not be shown again." Keys start with `htk_`.

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="API keys page right after generating a key: green Key generated box saying Copy this key now, it will not be shown again, with the key masked and a copy button, the new Blog integration key in Active keys next to another key, each with Revoke, and an API key created notice" caption="Create a key, or revoke one, on the API Keys page. The full key is shown only once." path="/developer/api-keys"}
::

**On claude.ai**, some organizations see a **Request headers** section in the connector dialog. Anthropic marks it as beta and only available to a limited set of organizations. If you have it, choose **No sign-in**, add the `authorization` header and enter `Bearer htk_YOUR_API_KEY` (with the word Bearer and a space).

**In Claude Desktop**, the config file (**Settings → Developer → Edit Config**) is meant for servers that run on your own computer. Anthropic's docs say remote servers are added [through Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). The Hotelier Tools MCP Setup page shows a `url` + `headers` snippet; if Claude Desktop ignores it, the usual workaround is the free community bridge [mcp-remote](https://github.com/punkpeye/mcp-remote), which needs [Node.js](https://nodejs.org) installed. This is a typical configuration that we have not tested in every Claude Desktop version:

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

Save the file and fully quit and reopen Claude Desktop. The header is written without a space after the colon on purpose: the mcp-remote docs explain that Claude Desktop on Windows can mangle spaces in arguments.

### API key or sign-in: which should you use?

| | Sign-in (OAuth) | API key (`htk_…`) |
|---|---|---|
| Setup | Paste the URL, sign in, **Allow access** | Generate a key, paste it into a config |
| Lasts | 30 days, then reconnect | Until you revoke it |
| Best for | claude.ai, Claude Desktop, mobile | Scripts, [Claude Code, Cursor and VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| Revoke on | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

Both work the same way once connected: Claude acts **as the person who signed in or created the key**, on **one property**, with that person's current permissions.

## What to ask Claude first

Start with questions that only read. Mentioning "Hotelier Tools" helps Claude pick the right connector instead of searching the web.

::prompt{label="Claude"}
Using Hotelier Tools, who arrives today and tomorrow? Show name, nights, room and any balance still unpaid.
::

::prompt{label="Claude"}
Which reservations arriving in the next 7 days have no room assigned yet?
::

::prompt{label="Claude"}
Which guests checked out last week and still have no invoice? For each one, tell me why it can't be invoiced yet.
::

::prompt{label="Claude"}
Show me the open issues from the automated checks, grouped by arrival date, with what I need to fix in Little Hotelier.
::

::prompt{label="Claude"}
What are my rates and availability for next weekend, and how do they compare with the competitor prices you have?
::

::prompt{label="Claude"}
Explain the recommended price for a double room on Saturday 14 November, step by step.
::

Claude can combine answers too: "Make a table of next week's arrivals with unpaid balances and draft a polite payment reminder for each" works well. The drafts stay in Claude; nothing is sent.

## What can Claude do with your hotel data, and how do you keep it safe?

The Hotelier Tools MCP server offers Claude more than 100 hotel tools, always limited by your permissions.

**It can read:** reservations and guests, payments, invoices and invoice readiness, rates and availability, competitor prices and price recommendations with their reasons, automated-check issues, the do-not-rebook list, the waitlist, scheduled tasks and the property facts read from Little Hotelier.

**It can change, when Claude calls the tool:** reservation details (first a proposal with before/after, then an apply step that needs `confirmed: true`), payment records, enrollment for the [invoice at checkout](/blog/send-invoice-to-guest-at-checkout), prices from the recommendations, channel stop sell, waitlist entries and scheduled tasks.

**It cannot** do anything irreversible: those tools are blocked for Claude and every other outside client. For example, it cannot:

- email an invoice to a guest
- issue a refund
- file the INE survey
- send team invitations
- email a guest invoice link
- answer a Booking.com guest question
- run the waitlist check that messages guests

Those stay in the Hotelier Tools dashboard chat, behind an approval card. Claude also cannot see other properties, go beyond your permissions, or do anything Little Hotelier itself would refuse.

### Write actions: how to keep Claude safe

::callout{type="warning" title="Claude's prompt is your approval"}
Inside the Hotelier Tools dashboard, every change waits for an approve/reject card. Outside it, there is no second card: **when Claude calls a write tool, it runs.** The approval you give in Claude is the only one.
::

Five habits keep that safe:

1. **Keep approvals on for write tools.** In **Customize → Connectors → Hotelier Tools**, Anthropic lets you set each tool to **Always allow**, **Needs approval** or **Blocked**. Reading tools can be "Always allow". Leave anything that changes data on "Needs approval".
2. **Block what you never use.** If Claude should never touch prices, set `apply_price_recommendations` and `set_channel_stop_sell` to **Blocked**.
3. **Read the proposal.** For reservation changes, Claude first shows a before/after from `propose_reservation_changes`. Check the booking reference and the values before you say yes.
4. **Watch for instructions hidden in text.** Guest messages and websites are written by strangers. If a tool result suddenly asks Claude to do something you did not ask for, stop. Anthropic gives the [same advice](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy).
5. **Know who is connected.** Each connection acts as the Hotelier Tools login that created it. Revoke old ones on `/developer/api-keys`, and always when someone leaves.

## Is my guest data sent to Anthropic?

Yes, the parts Claude reads. When Claude calls a tool, the result (guest names, dates, amounts) becomes part of your conversation and is processed by Anthropic under your plan's terms.

As of October 2026, Anthropic says its consumer-plan training data "does not include raw content from connectors… including remote and local MCP servers", unless you copy it into the chat ([source](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)). On commercial plans (Team, Enterprise, API), inputs and outputs are [not used for training by default](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).

Guest data is personal data, and your hotel stays responsible for it. Ask Claude only for what you need, and turn the connector off in chats that do not need it.

::demo-cta{path="/developer/mcp-setup"}
::

## Troubleshooting

| What you see | Likely cause | What to do |
|---|---|---|
| Claude says it cannot connect, or a 401 error | Sign-in expired (30 days), key revoked, or you no longer have access to the property | **Disconnect** and **Connect** again, or create a new key |
| 400 "No Little Hotelier credentials configured" | Little Hotelier is not connected yet | Connect it on **Credentials** (`/credentials`) |
| 403 `permission_denied` | Your login lacks API access | Ask the owner to give your role API access |
| 423 `lh_frozen` | Little Hotelier sign-in paused after a login failure, often an expired password | Save the new password on **Credentials** or press **Check now & resume** |
| The tools don't show in the chat | Connector switched off for this chat, or Desktop not restarted | **+ → Connectors** → switch it on; restart Claude Desktop after config edits |
| The sign-in window never opens | Pop-ups blocked | Allow pop-ups for claude.ai and try **Connect** again |

## Next steps

- Want the same in ChatGPT? Follow [connect ChatGPT to Little Hotelier](/blog/connect-chatgpt-to-little-hotelier).
- Building reports or scripts? See [Claude Code, Cursor and VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) or the [REST API guide](/blog/little-hotelier-api).
- Prefer approval cards for every change? Use the [built-in assistant](/blog/ai-assistant-hotel-front-desk) in the dashboard.
- Everything the server offers is on the [API & MCP feature page](/tools/bot/api-mcp).
