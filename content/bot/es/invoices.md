---
De manera automática, obtiene todas las reservas entre dos fechas y genera las facturas correspondientes.

Además se puedes añadir una serie de condiciones para que la factura se genere de manera correcta, como por ejemplo:
- La reserva debe estar en estado "Checked Out" o "Checked In".
- La reserva debe tener un número de identificación fiscal.
- La reserva no debe tener una factura emitida. En caso de tenerla, utilizar la última factura emitida.
- La reserva debe tener un total mayor a 0.
- La reserva debe estar totalmente pagada.
- La reserva debe tener un número de identificación fiscal válido. En caso de no tenerlo, se notifica al hotel para que lo añada manualmente.
- La reserva debe tener un método de pago válido.

Una vez generadas las facturas, se envían por correo electrónico al hotel y se guardan en el sistema para su posterior consulta.
Como el tamaño de las facturas puede ser grande, se intentará enviare a través de un enlace de descarga en lugar de adjuntarlas directamente al correo electrónico.

Se puede proporcionar acceso a un sistema de almacenamiento como Google Drive, Dropbox o OneDrive para almacenar las facturas y enviar el enlace de descarga en lugar de adjuntarlas directamente al correo electrónico.


Si tienes que presentar todas las facturas para la gestión de impuestos, esta herramienta te ayudará a generar las facturas de manera automática y ahorrar muchísimo tiempo.


