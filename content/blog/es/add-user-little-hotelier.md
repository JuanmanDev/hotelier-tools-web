---
title: "Cómo añadir un usuario en Little Hotelier (y darle a una herramienta su propio acceso en lugar de tu contraseña)"
seoTitle: "Cómo añadir un usuario en Little Hotelier, paso a paso"
description: "Añade un empleado o un usuario de integración en Little Hotelier, define permisos y MFA, y conecta herramientas con un usuario propio, no tu contraseña."
date: 2026-11-05
updated: 2026-11-05
category: tips
tags: [little hotelier, usuarios, permisos, mfa, passkeys, seguridad]
keywords: [cómo añadir un usuario en little hotelier, little hotelier añadir usuario, permisos de usuario little hotelier, gestionar usuarios little hotelier, configurar mfa little hotelier, email de activación little hotelier caducado, usuario de integración little hotelier, dar acceso al personal en little hotelier, passkey little hotelier]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/es/lh-advanced-user-invite.webp
coverAlt: "Página de la cuenta avanzada: Usa un alias de tu propio email con la dirección sugerida demo+hoteliertools@hotelier.tools y un botón Copiar, y después El email de invitación: copia el enlace, no lo abras, con un aviso para no pulsar el botón del email y tres pasos que terminan en el campo Enlace de activación"
faq:
  - q: "¿Cómo añado un usuario nuevo en Little Hotelier?"
    a: "En un dispositivo de confianza, haz clic en el nombre de tu alojamiento arriba a la derecha y elige Manage users, y después Add user. Escribe el email, el nombre y el idioma, elige las apps y el nivel de usuario y haz clic en Save. La persona recibe un email de activación válido durante 24 horas."
  - q: "¿Qué permisos puede tener un usuario de Little Hotelier?"
    a: "Un usuario Admin tiene todos los permisos. Un usuario General solo tiene lo que marques en cada app: en Front Desk, Calendar, Reservations, Inventory, Guests, Reports, Housekeeping y Setup; en Channel Manager, Config, Inventory, Reservations y Payments."
  - q: "¿Necesito MFA para añadir usuarios en Little Hotelier?"
    a: "Sí. Gestionar usuarios requiere un dispositivo de confianza, y tienes que configurar la autenticación multifactor antes de poder añadir uno. La MFA funciona con la app de Little Hotelier, una app de autenticación o una extensión del navegador; no se admiten SMS ni email."
  - q: "¿Debo darle a una integración mi propia contraseña de Little Hotelier?"
    a: "Mejor que no. Un usuario propio para la herramienta mantiene tu acceso en privado, muestra sus acciones por separado en el registro y se puede desactivar sin tocar a nadie más. Hotelier Tools lo llama cuenta avanzada."
  - q: "¿Qué pasa si el enlace de activación ya se ha abierto?"
    a: "El token de activación funciona una sola vez. Si alguien pulsó el botón del email antes de pegar el enlace en Hotelier Tools, haz que Little Hotelier reenvíe la invitación y copia el enlace nuevo sin abrirlo."
  - q: "¿Forma Hotelier Tools parte de Little Hotelier?"
    a: "No. Hotelier Tools es independiente: no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con un usuario de Little Hotelier que tu hotel crea y controla."
---

Para añadir un usuario en Little Hotelier, inicia sesión en un dispositivo de confianza, haz clic en el nombre de tu alojamiento arriba a la derecha, elige **Manage users** y pulsa **Add user**. Escribe el email, el nombre y el idioma de la persona, elige las apps que necesita, escoge **Admin** o **General** (y marca los permisos) y pulsa **Save**. Recibirá un email de activación válido durante 24 horas. Para un programa, haz lo mismo con un usuario aparte: nunca compartas con una herramienta la contraseña del propietario.

Los pasos de Little Hotelier de abajo se han contrastado con su centro de ayuda a fecha de noviembre de 2026.

## Cómo añadir un usuario en Little Hotelier

Antes de empezar, dos requisitos ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions), en inglés):

- Necesitas el permiso **Manage users**.
- Tienes que estar en un **dispositivo de confianza**, en un navegador de escritorio o del móvil. La gestión de usuarios no está disponible en la app móvil, y solo puedes añadir un dispositivo de confianza después de configurar la MFA.

Después:

1. Haz clic en el nombre de tu alojamiento arriba a la derecha y elige **Manage users**.
2. Haz clic en **Add user**.
3. Escribe el email, el nombre y el idioma preferido del usuario.
4. Elige las apps que necesita (Front Desk, Channel Manager, Direct Booking, Payments).
5. Elige un nivel de usuario para cada una y marca los permisos.
6. Haz clic en **Save**.

El usuario nuevo recibe un email de activación, válido durante 24 horas, para crear su contraseña. Si esa dirección de email ya tiene un usuario de Little Hotelier, no se envía ningún email de activación: entra con su contraseña de siempre o usa **Reset password**.

La plataforma nueva de Little Hotelier describe el mismo proceso en **User management** ([artículo de help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)). Usa el artículo que coincida con las pantallas que ves.

### Qué permisos dar

- **Admin**: todos los permisos.
- **General**: solo lo que marques. En **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping y Setup. En **Channel Manager**: Config, Inventory, Reservations y Payments.

Un recepcionista suele necesitar Front Desk con Calendar, Reservations y Guests. Da **Manage users** al menor número de personas posible.

::screenshot{src="/images/config/permissions.webp" alt="Página de edición de un usuario de Little Hotelier en español, para un usuario llamado Bot Facturas 2: el permiso de gestión de usuarios sin marcar, Channel Manager e Insights desactivados, Direct Booking activado como General y Front Desk activado como General con solo Calendario y Reservas marcados" caption="Un usuario General con solo Calendario y Reservas de Front Desk: la configuración reducida de una conexión simple." width="1639" height="1742"}
::

### Cambiar, desactivar o eliminar un usuario

- **Edita los permisos** cuando quieras desde la lista de usuarios.
- **Desactivar** es la forma recomendada de cortar el acceso: puedes volver a activarlo más adelante. **Eliminar** es definitivo.
- **El email no se puede editar.** Crea un usuario nuevo con la dirección correcta y después elimina el antiguo.
- Un usuario se bloquea tras 6 o más intentos fallidos de inicio de sesión y se desbloquea con **Forgot password**.

## Verificación en dos pasos (MFA) y passkeys

Little Hotelier hace obligatoria la MFA en los 30 días siguientes al primer inicio de sesión de un usuario ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)). Cada usuario elige un método:

- la **app móvil de Little Hotelier** (recomendada): confirmas un número que coincide con tu cara o tu huella;
- una **app de autenticación** como Google Authenticator, Microsoft Authenticator o Authy (un código de 6 dígitos);
- una **extensión de autenticación del navegador** en Chrome, Edge o Firefox.

No se admiten códigos por teléfono, SMS ni email. Un usuario con **Manage users** puede restablecer la MFA de otro usuario ([cómo hacerlo](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)), y ese usuario configura un método nuevo en su siguiente inicio de sesión.

La página de inicio de sesión, que gestiona SiteMinder, también puede ofrecer **Continue with a passkey** a un usuario que haya creado una. A fecha de noviembre de 2026, el centro de ayuda de Little Hotelier no documenta las passkeys, así que tómalas como algo opcional y mantén la MFA configurada.

Hay una consecuencia que importa para las herramientas: **un usuario con MFA pide un código al iniciar sesión.** Una herramienta que solo guarda una contraseña se queda parada en esa pantalla, porque no hay nadie para responder.

## Por qué una herramienta debería tener su propio usuario

Muchas integraciones piden «tu email y tu contraseña de Little Hotelier». Compartir el acceso del propietario tiene costes reales:

- **La contraseña caduca** más o menos cada tres meses, y la herramienta se para hasta que alguien escribe la nueva.
- **El registro no distingue quién es quién.** Los cambios que hace la herramienta parecen tuyos.
- **Las sesiones chocan.** Si el mismo usuario inicia sesión dos veces, una sesión puede cerrar la otra.
- **Cuando esa persona se va**, la conexión se va con ella.
- **La MFA de tu propio acceso** es una pantalla que la herramienta no puede responder.

Un usuario propio para la herramienta lo resuelve todo: su propia dirección, sus propios permisos, su propio segundo factor, y puedes desactivarlo sin tocar a nadie más.

## La forma más rápida: la cuenta avanzada de Hotelier Tools

Hotelier Tools ofrece dos conexiones en **Credenciales** (`/credentials`):

| | **Simple** (`/credentials/hotelier-simple`) | **Avanzada** (`/credentials/hotelier-advanced`) |
|---|---|---|
| Acceso | Tu propio email y contraseña de Little Hotelier | Un usuario nuevo de Little Hotelier, solo para Hotelier Tools |
| Contraseña | Caduca más o menos cada 3 meses; pegas tú la nueva | Fuerte y aleatoria, la pone Hotelier Tools; nadie tiene que recordarla |
| Verificación en dos pasos | No admitida: la petición de código la detiene | Guarda su propio secreto de autenticación y puede guardar una passkey |
| Permisos | Front Desk (Calendar, Reservations) y Direct Booking | Todos los permisos: funcionan todas las funciones |

La página de la cuenta simple empieza por sus límites a propósito: los precios y el inventario no se pueden escribir, y una contraseña caducada detiene en silencio las automatizaciones días después.

::screenshot{src="/images/blog/demo/es/lh-simple-account-limits.webp" alt="Página de la cuenta simple con Antes de usarla: los límites, que enumera una contraseña que caduca más o menos cada 3 meses, la falta de verificación en dos pasos, permisos limitados con lo que funciona y lo que está restringido o desactivado, y un acceso personal compartido con un robot, además de un botón Usar la forma avanzada" caption="La cuenta simple es rápida, pero sus límites paran las automatizaciones semanas después. Léelos antes de elegirla." path="/credentials/hotelier-simple"}
::

### Configura la cuenta avanzada (lo que haces hoy)

1. Abre **Credenciales > Cuenta avanzada** (`/credentials/hotelier-advanced`). En **Usa un alias de tu propio email**, copia la **Dirección sugerida para el nuevo usuario**, por ejemplo `tu+hoteliertools@tuhotel.com`. Little Hotelier necesita una dirección nueva; con la mayoría de proveedores (Gmail, Outlook / Microsoft 365, iCloud, Fastmail), una etiqueta con «+» llega a tu propio buzón.
2. En Little Hotelier, añade un usuario con esa dirección y **todos los permisos activados**, siguiendo los pasos de arriba.
3. Abre el email de invitación y **no pulses el botón**. Haz clic derecho sobre él y elige **Copiar dirección del enlace** (en el móvil: mantén pulsado y **Copiar enlace**). El token de activación funciona una sola vez: abrirlo lo gasta en la página de contraseña de Little Hotelier.
4. De vuelta en la página de la cuenta avanzada, elige **Usar un enlace de activación**, pégalo en **Enlace de activación** y guarda.
5. Hotelier Tools activa el usuario: pone una contraseña aleatoria fuerte, la guarda cifrada e inicia sesión una vez para confirmarlo.

¿Ya creaste el usuario y conoces su contraseña? Elige **Introducir las credenciales** y añade su secreto de autenticación (OTP) o una passkey.

::screenshot{src="/images/blog/demo/es/lh-advanced-user-invite.webp" alt="Página de la cuenta avanzada: Usa un alias de tu propio email con la dirección sugerida demo+hoteliertools@hotelier.tools y un botón Copiar, y después El email de invitación: copia el enlace, no lo abras, con un aviso para no pulsar el botón del email y tres pasos que terminan en el campo Enlace de activación" caption="Crea el usuario con tu propio email más una etiqueta y pega el enlace de invitación en lugar de abrirlo." path="/credentials/hotelier-advanced"}
::

Puedes darle a este usuario menos permisos, pero Hotelier Tools avisa claramente de que entonces algunas funciones fallarán y de que esa configuración no está soportada. Escribir precios, por ejemplo, necesita el rol Rates & Inventory.

### MFA y passkeys en el usuario de la cuenta avanzada

- **Cuando Little Hotelier empiece a exigir la MFA**, Hotelier Tools registra por sí mismo un autenticador en el usuario de la cuenta avanzada, guarda el secreto cifrado y responde al código a partir de entonces. Nunca lo hace en tu acceso de la cuenta simple, porque un secreto que solo tuviera la aplicación te dejaría fuera de tu propia cuenta. Si hay que hacerlo a mano, el panel de la cuenta tiene **Configurar la verificación en dos pasos**.
- **Una passkey guardada en el servidor (beta).** **Passkeys y verificación en dos pasos** (`/credentials/passkeys`) puede añadir una passkey al usuario de la cuenta avanzada (**Añadir passkey** y después **Probar passkey**). Los inicios de sesión programados la prueban primero: funciona incluso cuando la contraseña ha caducado y se salta el paso del código. Cuando ya hay una guardada, el botón pasa a decir **Sustituir passkey**. El propietario puede **Descargar passkey** para guardar una copia. Añadirla o probarla supone un inicio de sesión en Little Hotelier.

::screenshot{src="/images/blog/demo/es/add-user-lh-passkeys.webp" alt="Página Passkeys y verificación en dos pasos (beta): la tarjeta Passkey de Little Hotelier (acceso avanzado), Guardada y Activada, para bot-demo-sol@example.com con su fecha de creación, el algoritmo ES256, el sitio auth0.siteminder.com, los ID de la credencial y de la passkey y el último inicio de sesión, y los botones Sustituir passkey, Probar passkey y Descargar passkey; debajo, Códigos de autenticador (TOTP) con Acceso avanzado Guardado y Acceso simple Ninguno" caption="El usuario de la cuenta avanzada tiene una passkey y un secreto de autenticador, así que los inicios de sesión programados no se quedan parados en un código." path="/credentials/passkeys"}
::

### Para quitarlo

Desactiva o elimina el usuario en Little Hotelier. El acceso de Hotelier Tools termina con él, y tu propio acceso no se toca.

## Próximamente: Hotelier Tools como usuario, por invitación

La página de la cuenta avanzada también tiene una tarjeta **Hotelier Tools como usuario en Little Hotelier**. La idea: Hotelier Tools le da a tu alojamiento una dirección de acceso privada en su propio dominio (`lh-…@in.hotelier.tools`). Invitas a esa dirección en Little Hotelier con los permisos que elijas, y Hotelier Tools acepta la invitación, pone la contraseña y la verificación en dos pasos y mantiene la sesión. No se comparte nada con otros hoteles, y el dominio nunca pasa a ser tu acceso principal ni tu email de recuperación ([cómo funcionan estas direcciones](/blog/hotel-email-address)).

Este es el punto exacto en el que está, a 5 de noviembre de 2026:

- **Construido:** la dirección (**Obtener la dirección de acceso**, después de escribir el número de propiedad de Little Hotelier), los estados del acceso (**Esperando la invitación**, **Activo**, **En pausa**, **Retirado**), **Retirar este acceso** y las reglas de seguridad. Las alertas de seguridad se reenvían al propietario y nunca se pulsan.
- **Aún no construido:** leer y aceptar la invitación de Little Hotelier. Todavía no se ha capturado ninguna invitación real, así que **cada mensaje que llega a la dirección de acceso se retiene para una persona**, y no se abre nada de su contenido. La propia tarjeta lo dice.
- **Lo que hoy hace una persona:** seguir los pasos del enlace de activación de arriba.

::screenshot{src="/images/blog/demo/es/add-user-lh-login-address.webp" alt="Página de la cuenta avanzada con la tarjeta Hotelier Tools como usuario en Little Hotelier, Esperando la invitación: un aviso de que la lectura automática de las invitaciones de Little Hotelier aún no está disponible, la dirección de acceso lh-dwfenz3etz@in.hotel-demo.invalid (el dominio de ejemplo de la demo) con Copiar, el número de propiedad en Little Hotelier 90210, Leer códigos de acceso desactivado, Retirar este acceso y, en Correo de este acceso, la invitación You have been invited to Hotel Demo Sol on Little Hotelier, Retenido para revisar" caption="La invitación llega a la dirección de acceso y espera a una persona. Todavía no se sigue nada de ella." path="/credentials/hotelier-advanced"}
::

## Tus compañeros: cuentas de equipo de Hotelier Tools

Los miembros del equipo no necesitan el usuario de integración. En **Ajustes > Equipo y roles** (`/settings/team`), pulsa **Invitar a alguien**, escribe su email y elige un rol: **Administrador**, **Responsable**, **Recepción**, **Gestor de ingresos**, **Contable**, **Solo lectura** o un rol personalizado. Aceptan desde el enlace del email (válido durante 7 días) y entran con su propio acceso a Hotelier Tools.

Son accesos a Hotelier Tools, no usuarios de Little Hotelier. Hotelier Tools trabaja en Little Hotelier a través de la única conexión del alojamiento, y nadie del equipo ve su contraseña; solo el propietario puede. Los cambios que hace un compañero aparecen en Little Hotelier como hechos por el usuario conectado, mientras que Hotelier Tools registra quién los hizo de verdad. Quien trabaje en la propia extranet de Little Hotelier sigue necesitando su propio usuario de Little Hotelier.

::screenshot{src="/images/blog/demo/es/team-hotelier-tools-logins.webp" alt="Ajustes de equipo con los botones Roles e Invitar a alguien, un recuadro que explica que estos accesos son solo para Hotelier Tools, no para Little Hotelier, 1 plaza usada y la tabla del equipo con Demo Manager como Propietario, Activo" caption="Cada compañero tiene su propio acceso y su rol en Hotelier Tools; la contraseña de Little Hotelier se queda con el propietario." path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

El panel es gratis para todos los hoteles hasta que empiece el cobro el 10 de enero de 2027.

::callout{type="info" title="Herramienta independiente"}
Hotelier Tools no está afiliado a SiteMinder ni a Little Hotelier, ni cuenta con su respaldo. Se conecta con un usuario de Little Hotelier que tu hotel crea, controla y puede desactivar en cualquier momento.
::

Guías relacionadas: [la API de Little Hotelier](/blog/little-hotelier-api), [conectar Claude a Little Hotelier](/blog/connect-claude-to-little-hotelier), [una dirección de email del hotel para accesos y facturas](/blog/hotel-email-address).

## Resumen

- En Little Hotelier: nombre del alojamiento > **Manage users** > **Add user**, en un dispositivo de confianza; el email de activación dura 24 horas.
- **Admin** lo tiene todo; **General** solo tiene los permisos que marques en cada app.
- La MFA es obligatoria en 30 días; no se admiten códigos por SMS ni por email.
- Dale a cada herramienta su propio usuario, no tu contraseña. En Hotelier Tools es la **cuenta avanzada**: pega el enlace de invitación y pone ella misma la contraseña y la verificación en dos pasos.
- Está en camino la invitación a una dirección privada `lh-…`; hoy esos mensajes se retienen para una persona.
- Los compañeros tienen accesos de equipo con roles en Hotelier Tools, no tu contraseña de Little Hotelier.
