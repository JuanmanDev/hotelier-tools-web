---
Performs a review of reservations for the current day and notifies if there are reservations that are not paid.

This is useful for collecting reservations that have not been properly charged or that have changed rates when changing dates when the hotel only accepts paid reservations.
If it is a reservation made through the extranet, no notification is made, but it could be done if the hotel needs it.


Example email:
  
<br>
## 🏨 Upcoming Check-ins (2025-08-07 - 2025-08-08)

Total upcoming reservations: **8**

Automatically processed: **1**

Pending payment (non-extranet): **1**

### ❌ Pending Payment Reservations:

| Arrival | Room | Guest | Channel | Total | Pending | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 08-08-25 | 303 | J** *****  **** | Direct Booking | €58.56 | €9.76 | [View Reservation](#) |

### ✅ Automatically Processed:

| Arrival | Room | Guest | Channel | Action | Link |
| --- | --- | --- | --- | --- | --- |
| 08-08-25 | 303 | J** *****  **** | Direct Booking | ✅ ID extracted: 1234567H | [View Reservation](#) |

### 📊 Action Summary:

*   **IDs extracted:** 1
*   **OTA payments processed:** 0
*   **Cents corrected:** 0
*   **Pending payments:** 1
