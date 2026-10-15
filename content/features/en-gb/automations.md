---
title: "Scheduled tasks for Little Hotelier, with a log of every run"
---

Automations are the scheduled tasks behind Hotelier Tools: reservation checks, invoices at checkout, competitor price refreshes, the waitlist check and inbox polling run on their own, on the schedule you choose. Every run is logged, and failures reach your email.

## How it works

1. **Each feature creates its own task.** You rarely start from a blank schedule. For example:
   - Automated checks: **Save and activate task** sets the recommended schedule, such as every night at 23:30 for new bookings.
   - Invoice at checkout: **Create the daily task (16:00, after check-out)**.
   - Automatic check-out: **Create the daily task (15:05)**.
   - Waitlist: **Check every night at 01:00**.
   - Pricing autopilot: every 3 hours is the suggestion.
   - Guest inbox: your FAQ page can be re-read every hour.
2. **Adjust the schedule.** Run a task now, every few minutes, daily, weekly or monthly, within each feature's own limits.
3. **Read what happened.** **Cron Jobs** (`/cron`) lists every task, and **Run History** (`/cron-logs`) gives a readable summary of what each run did.
4. **Get the report.** Jobs such as the reservation checks send a report email per run. Shared recipients are set in **Settings > Notifications**.

See tasks working in practice in [the front desk checklist](/blog/hotel-front-desk-checklist-automation), [sending the invoice at checkout](/blog/send-invoice-to-guest-at-checkout) and [the waitlist for sold-out dates](/blog/hotel-waitlist-sold-out-dates).

## What you need

- Little Hotelier connected on **Credentials**. Every run signs in with that login.
- The feature behind the task set up first, such as the checks you want or the dates you watch.

## Limits and good to know

- **Status: beta.**
- **Safe pause.** If your Little Hotelier password expires, tasks pause instead of retrying, so the account never gets locked. The dashboard shows that automated jobs are paused until you save the new password on **Credentials** or press **Check now & resume**.
- **Minimum intervals differ per task.** Reservation checks run at most once an hour per job, the waitlist check every 20 minutes at most, and the pricing autopilot no more often than every 3 hours.
- **A task only does what its feature does.** Checks only alert. Automatic check-out writes to Little Hotelier, so it stays off until you create it.
- **AI assistants can manage tasks.** Through the [MCP server](/tools/bot/api-mcp), Claude or ChatGPT can read and change scheduled tasks.
- **No outbound webhooks.** Your own scripts need their own scheduler, such as a cron job.
