---
title: "Privacy Policy"
description: "How the Hotelier Tools website and dashboard handle personal data: cookie-free visit statistics, the contact form, hotel data and your rights under the GDPR."
updated: "2026-10-15"
---

This policy explains what personal data the Hotelier Tools website collects, why, how long it is kept and what rights you have. It also summarises how the Hotelier Tools dashboard handles hotel data.

## Who is responsible

Hotelier Tools is run by **Juan Manuel Béc.**, an independent developer based in Spain. For the personal data collected through this website, he is the data controller under the EU General Data Protection Regulation (GDPR) and Spanish data protection law.

- **Email:** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **More about the project:** [About Hotelier Tools](/about)

Hotelier Tools is not affiliated with or endorsed by SiteMinder or Little Hotelier.

## What this policy covers

- **This website** (hotelier.tools, in every language): its pages, guides and contact form.
- **The free browser scripts** listed on this website.
- **The dashboard** (dashboard.hotelier.tools), in summary. The dashboard has its own [privacy notice](https://dashboard.hotelier.tools/legal/privacy) and [data processing agreement](https://dashboard.hotelier.tools/legal/dpa), which describe it in detail and apply to it.

## Visit statistics

We count visits with Umami, an open-source analytics tool that we host ourselves at umami.hotelier.tools. We do not use Google Analytics, advertising tags or social media trackers on this website.

When you open a page, your browser sends the statistics server:

- the address and title of the page, and the website you came from, if any;
- your browser's language and your screen size;
- events such as the links and buttons you click (their visible text and link address, where on the page you clicked and the size of the window) and which parts of a page you scrolled into view.

The text you type into forms is not sent. Umami does not set cookies. Like any web server, the statistics server also receives your IP address and basic browser details with each request.

We use these statistics in aggregate, to learn which pages and features are useful and to improve the website. We do not use them to identify you, and we do not sell them or use them for advertising.

**Legal basis:** our legitimate interest in understanding how the website is used (Article 6(1)(f) GDPR), using a tool that works without cookies and stays on our own server.

**How to opt out:** on this website, open your browser's developer console and run `localStorage.setItem('umami.disabled', '1')`. From then on, that browser sends no statistics. Content blockers that block analytics also work.

## Contact form

The contact form does not send anything to our servers. When you press **Send Message**, it opens your own email app with a message to JuanmaDeveloper+hotelierTools@outlook.com, filled in with what you typed: your name and email, and optionally your phone, hotel name, subject and message. Nothing reaches us until you send that email yourself.

When you write to us, we receive your email address and everything you include. We use it only to answer you and follow up on your request. Our mailbox is an Outlook.com account, so Microsoft stores these messages as our email provider.

**Legal basis:** your consent when you tick the box and send the email (Article 6(1)(a) GDPR) and, when you ask about using Hotelier Tools, the steps you request before using it (Article 6(1)(b) GDPR).

**How long:** we keep your messages for as long as we need them to deal with your request and any follow-up, and then delete them unless the law requires us to keep them. You can ask us to delete them at any time.

## Hosting

The website is hosted on Vercel. To deliver pages and keep them secure, the hosting provider processes technical data such as your IP address, browser details, the page requested and the time of the request.

**Legal basis:** our legitimate interest in running a secure and working website (Article 6(1)(f) GDPR). Our providers may process data outside the European Economic Area. Where they do, they must rely on the safeguards the GDPR requires for international transfers.

## Cookies and browser storage

We do not use advertising or tracking cookies. The website keeps a few small items in your browser so it works the way you chose:

| Name | Type | What it does | How long |
| --- | --- | --- | --- |
| `i18n_redirected` | Cookie | Remembers your language, so the home page opens in it | 1 year |
| `nuxt-color-mode` | Local storage | Remembers light or dark mode | Until you clear it |
| `umami.disabled` | Local storage | Only if you set it: stops visit statistics | Until you clear it |

These items only serve features you use, so they do not need your consent. You can delete them at any time in your browser settings.

Fonts and images are served from this website. Links to other websites, such as GitHub, the dashboard or Little Hotelier, take you to services with their own privacy policies.

## The free browser scripts

The Tampermonkey scripts run in your browser, inside your own Little Hotelier session. They talk only to Little Hotelier (and to Chekin, for the one script built for it). They send nothing to Hotelier Tools, and we receive no data from them. When Tampermonkey checks for updates, it downloads the scripts from GitHub, which sees that request like any other download.

## The dashboard

The dashboard is a separate service with its own sign-in. In short:

- **Your account.** We process your account details, such as your email address and how you sign in (for example, a passkey).
- **Connected logins.** You connect Little Hotelier on **Credentials**, and optionally the Booking.com extranet, a mailbox (Google, Microsoft or any IMAP/SMTP account) and WhatsApp through a WAHA server you provide. Little Hotelier, Booking.com and mailbox logins are stored encrypted (AES-256-GCM). A Spanish hotel that files the INE survey can also save its IRIA password, which is stored encrypted and never shown in clear text.
- **Hotel data.** With your Little Hotelier login, the dashboard reads the reservations, guests, prices, availability, invoices and property details that the features you use need, and makes the changes you ask for. It can only do what that login can do. Connected channels bring in guest messages. On the public waitlist page, guests leave their contact details; these are removed from closed entries after 90 days.
- **AI features.** When the AI assistant or the guest inbox reads messages or booking details, an AI provider processes them. If you connect Claude, ChatGPT or another assistant through the API or the MCP server, the results it receives (such as guest names, dates and amounts) enter that conversation and are handled by that provider under your plan's terms.
- **Access you can revoke.** API keys and assistant connections are listed under **Developer > API Keys**, where you can revoke any of them at once. Assistant sign-ins expire after 30 days.

**Who is responsible for hotel data.** For the reservation, guest and message data the dashboard processes for your hotel, **your hotel is the controller** and Hotelier Tools acts as a **processor** on its behalf, following its instructions and the data processing agreement. Guests who want to exercise their rights should contact the hotel, and we will help the hotel answer. For the dashboard's own account data, Hotelier Tools is the controller.

**How long.** Dashboard data is kept while your account is active and as long as needed to provide the service, or longer only where the law requires it. You can remove a connection at any time and ask us to delete your account and its data.

## Who receives personal data

We do not sell personal data. We share it only with the providers we need to run Hotelier Tools (such as hosting and email), with services you connect yourself, or when the law requires us to.

## Your rights

You can ask us to:

- give you a copy of your personal data (access);
- correct it (rectification);
- delete it (erasure);
- limit how we use it (restriction);
- stop using it, when we rely on legitimate interest (objection);
- send it to you or another provider in a usable format (portability).

Where we rely on your consent, you can withdraw it at any time. This does not affect what we did before.

Write to [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com). We answer within one month. We may ask you to confirm your identity.

If you think we have not handled your data properly, you can complain to the Spanish data protection authority, the [Agencia Española de Protección de Datos (AEPD)](https://www.aepd.es), or to the authority of the EU country where you live. We would appreciate the chance to fix it first, so please write to us.

## Security

The website and the dashboard are served over encrypted connections (HTTPS), and dashboard logins are stored encrypted. No system is perfectly secure, so if you suspect a problem, tell us straight away.

## Children

Hotelier Tools is made for hotels and the people who work in them. It is not directed at children.

## Changes to this policy

When we change this policy, we update the date at the top of the page. If a change is important, we will also say so on the website or in the dashboard.
