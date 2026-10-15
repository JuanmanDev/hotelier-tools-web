---
title: "A REST API and MCP server for Little Hotelier data"
---

Hotelier Tools gives your Little Hotelier property a REST API at `https://dashboard.hotelier.tools/api/v1` and an MCP server at `https://dashboard.hotelier.tools/api/mcp`. Your scripts, spreadsheets, Claude, ChatGPT, Cursor or VS Code can then read reservations, guests, prices and availability, and make some changes, with the same permissions as your Hotelier Tools account.

## How it works

- **Your own login, not a partner API.** You connect Little Hotelier once on **Credentials**, stored encrypted. Hotelier Tools uses the same web endpoints as the Little Hotelier web app, so it can do what that login can, nothing more.
- **REST API.** JSON over HTTPS: `/reservations` (with invoices and PDFs per booking), `/guests`, `/prices`, `/room-types`, and `/methods` for raw Little Hotelier methods. The full list is in the public OpenAPI spec at `/api/v1/openapi.json`, with an interactive explorer and code templates on **REST API & Swagger** (`/developer/rest-api`).
- **MCP server.** A remote HTTP server with more than 100 hotel tools. Ready-made configs for each client are on **MCP Setup** (`/developer/mcp-setup`).

## How authentication works

- **API keys.** Create one on **Developer > API & MCP > API Keys** (`/developer/api-keys`). Keys start with `htk_`, are shown only once, and go in an `Authorization: Bearer` header. A key has no scopes: it acts on one property as the person who created it. Each person can have up to 10 keys and revoke any of them.
- **Sign-in for MCP.** Clients that support OAuth can connect by signing in instead. That sign-in lasts 30 days.

## Read and write calls

Read calls change nothing in Little Hotelier. Writes are real: `POST /reservations/{id}/invoices` creates a new invoice each time. Over MCP, an AI can change reservations (a proposal first, then an apply step with `confirmed: true`), payment records, prices, stop sell, waitlist entries and scheduled tasks. Outside the dashboard there is no approval card, so keep your client's tool approvals on. Irreversible actions, such as refunds or emailing invoices, are blocked for outside clients.

## Limits and good to know

- **Status:** REST API and MCP server are in beta. Embeddable cards are in alpha.
- **Rate limit:** 100 requests per minute per IP address, then `429` with `Retry-After`.
- **Paging:** at most 100 reservations per call, filtered on check-in date.
- **Not available:** outbound webhooks, a public sandbox key, SDK packages.
- **Masked data stays masked:** Little Hotelier masks guest details 180 days after check-out.
- It is not an official SiteMinder API.

Start with [does Little Hotelier have an API?](/blog/little-hotelier-api) and [what an MCP server is](/blog/what-is-mcp-server-hotels), then set up [Claude](/blog/connect-claude-to-little-hotelier) or [Claude Code, Cursor and VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode).
