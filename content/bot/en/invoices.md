---
Automatically obtains all reservations between two dates and generates the corresponding invoices.

Additionally, you can add a series of conditions for the invoice to be generated correctly, such as:
- The reservation must be in "Checked Out" or "Checked In" status.
- The reservation must have a tax identification number.
- The reservation must not have an issued invoice. If it has one, use the last issued invoice.
- The reservation must have a total greater than 0.
- The reservation must be fully paid.
- The reservation must have a valid tax identification number. If not available, the hotel is notified to add it manually.
- The reservation must have a valid payment method.

Once the invoices are generated, they are sent by email to the hotel and stored in the system for later consultation.
Since the size of the invoices can be large, attempts will be made to send them through a download link instead of attaching them directly to the email.

You can provide access to a storage system like Google Drive, Dropbox or OneDrive to store the invoices and send the download link instead of attaching them directly to the email.


If you need to present all invoices for tax management, this tool will help you generate invoices automatically and save a lot of time.
