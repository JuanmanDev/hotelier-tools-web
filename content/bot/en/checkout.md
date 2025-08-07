---
Automatic checkout allows you to mark reservations as checked out without having to do it manually. 
This is especially useful for hotels or hostels that do not require manual intervention in the checkout process.

Currently the system runs daily at 3:00 PM.
The following conditions are reviewed to mark a reservation as checked out:
- The reservation must be in "Checked In" status.
- The checkout date must be the current day.
- The check-in date must be prior to the current day.
- The reservation must not have pending payments.
- The reservation must have a tax identification number to generate the invoice.
- The reservation must not have an issued invoice.

If a reservation meets all these conditions, it will automatically be marked as checked out and the corresponding invoice will be generated.

In case a reservation does not meet any of the conditions, an email will be sent to the hotel administrator notifying the situation.

Example email:
  
<br>

## Check-in Report (2025-08-05)

Total reservations with check-in today: **7**

Reservations with problems: **1**

Reservations with automatic check-out: **0**

| Room | Guest Name | Pending | Total | Status | Issues | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 323 | S****  *** *** | €0.00 | €45.87 | ✅ Correct | All correct | [View Reservation](#) |
| 301 | A****  D****  Q**** | €0.00 | €51.61 | ✅ Correct | All correct | [View Reservation](#) |
| 302 | A****  C****  D**** | €0.00 | €141.00 | ✅ Correct | All correct | [View Reservation](#) |
| 306, 304 | D****  S**** | €0.00 | €280.00 | ❌ Issues | Missing ID/Passport | [View Reservation](#) |
| 308 | A****  M****  L**** | €0.00 | €154.83 | ✅ Correct | All correct | [View Reservation](#) |
| 322 | M****  M**** | €0.00 | €51.61 | ✅ Correct | All correct | [View Reservation](#) |
| 307 | V** **** | €0.00 | €51.61 | ✅ Correct | All correct | [View Reservation](#) |

### Summary:

*   **Green:** Reservations processed automatically (check-out completed)
*   **Red:** Reservations that require manual attention

**⚠️ 1 reservations require manual attention**


### Notes:
- Reservations with issues must be reviewed manually.
