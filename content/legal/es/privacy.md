---
title: "Política de privacidad"
description: "Cómo tratan tus datos la web y el panel de Hotelier Tools: estadísticas sin cookies, formulario de contacto, datos del hotel y tus derechos según el RGPD."
updated: "2026-10-15"
---

Esta política explica qué datos personales recoge la web de Hotelier Tools, para qué, cuánto tiempo se guardan y qué derechos tienes. También resume cómo trata el panel de Hotelier Tools los datos de los hoteles.

## Quién es el responsable

Hotelier Tools lo gestiona **Juan Manuel Béc.**, un desarrollador independiente con base en España. Para los datos personales que se recogen a través de esta web, él es el responsable del tratamiento según el Reglamento General de Protección de Datos de la UE (RGPD) y la normativa española de protección de datos.

- **Email:** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **Más sobre el proyecto:** [Sobre Hotelier Tools](/about)

Hotelier Tools no está afiliado ni respaldado por SiteMinder ni por Little Hotelier.

## Qué cubre esta política

- **Esta web** (hotelier.tools, en todos sus idiomas): sus páginas, guías y formulario de contacto.
- **Los scripts gratuitos para el navegador** que aparecen en esta web.
- **El panel** (dashboard.hotelier.tools), de forma resumida. El panel tiene su propio [aviso de privacidad](https://dashboard.hotelier.tools/legal/privacy) y su [contrato de encargo del tratamiento](https://dashboard.hotelier.tools/legal/dpa), que lo describen en detalle y se aplican a él.

## Estadísticas de visitas

Contamos las visitas con Umami, una herramienta de analítica de código abierto que alojamos nosotros mismos en umami.hotelier.tools. En esta web no usamos Google Analytics, etiquetas publicitarias ni rastreadores de redes sociales.

Cuando abres una página, tu navegador envía al servidor de estadísticas:

- la dirección y el título de la página, y la web de la que vienes, si la hay;
- el idioma de tu navegador y el tamaño de tu pantalla;
- eventos como los enlaces y botones que pulsas (su texto visible y la dirección del enlace, en qué punto de la página pulsaste y el tamaño de la ventana) y qué partes de una página llegas a ver al desplazarte.

No se envía lo que escribes en los formularios. Umami no instala cookies. Como cualquier servidor web, el servidor de estadísticas también recibe tu dirección IP y datos básicos de tu navegador con cada petición.

Usamos estas estadísticas de forma agregada, para saber qué páginas y funciones resultan útiles y mejorar la web. No las usamos para identificarte, no las vendemos ni las usamos para publicidad.

**Base legal:** nuestro interés legítimo en entender cómo se usa la web (artículo 6.1.f del RGPD), con una herramienta que funciona sin cookies y se queda en nuestro propio servidor.

**Cómo desactivarlas:** en esta web, abre la consola de desarrollador de tu navegador y ejecuta `localStorage.setItem('umami.disabled', '1')`. Desde ese momento, ese navegador no envía estadísticas. Los bloqueadores de contenido que bloquean la analítica también sirven.

## Formulario de contacto

El formulario de contacto no envía nada a nuestros servidores. Cuando pulsas **Enviar Mensaje**, se abre tu propia aplicación de correo con un mensaje para JuanmaDeveloper+hotelierTools@outlook.com, ya rellenado con lo que escribiste: tu nombre y tu email y, si quieres, tu teléfono, el nombre de tu hotel, el asunto y el mensaje. No nos llega nada hasta que tú mismo envías ese correo.

Cuando nos escribes, recibimos tu dirección de email y todo lo que incluyas. Lo usamos solo para responderte y hacer seguimiento de tu consulta. Nuestro buzón es una cuenta de Outlook.com, así que Microsoft guarda estos mensajes como nuestro proveedor de correo.

**Base legal:** tu consentimiento al marcar la casilla y enviar el correo (artículo 6.1.a del RGPD) y, cuando preguntas por usar Hotelier Tools, las medidas que nos pides antes de empezar a usarlo (artículo 6.1.b del RGPD).

**Cuánto tiempo:** guardamos tus mensajes mientras los necesitemos para atender tu consulta y su seguimiento, y después los borramos, salvo que la ley nos obligue a conservarlos. Puedes pedirnos que los borremos en cualquier momento.

## Alojamiento web

La web está alojada en Vercel. Para servir las páginas y mantenerlas seguras, el proveedor de alojamiento trata datos técnicos como tu dirección IP, los datos de tu navegador, la página solicitada y la hora de la petición.

**Base legal:** nuestro interés legítimo en mantener una web segura y que funcione (artículo 6.1.f del RGPD). Nuestros proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando lo hacen, deben aplicar las garantías que exige el RGPD para las transferencias internacionales.

## Cookies y almacenamiento del navegador

No usamos cookies publicitarias ni de seguimiento. La web guarda unos pocos datos pequeños en tu navegador para funcionar como has elegido:

| Nombre | Tipo | Para qué sirve | Duración |
| --- | --- | --- | --- |
| `i18n_redirected` | Cookie | Recuerda tu idioma, para que la página de inicio se abra en él | 1 año |
| `nuxt-color-mode` | Almacenamiento local | Recuerda el modo claro u oscuro | Hasta que lo borres |
| `umami.disabled` | Almacenamiento local | Solo si lo activas: detiene las estadísticas de visitas | Hasta que lo borres |

Estos datos solo sirven a funciones que tú usas, así que no necesitan tu consentimiento. Puedes borrarlos cuando quieras desde los ajustes de tu navegador.

Las fuentes y las imágenes se sirven desde esta web. Los enlaces a otras webs, como GitHub, el panel o Little Hotelier, te llevan a servicios con sus propias políticas de privacidad.

## Los scripts gratuitos para el navegador

Los scripts de Tampermonkey se ejecutan en tu navegador, dentro de tu propia sesión de Little Hotelier. Solo se comunican con Little Hotelier (y con Chekin, en el único script hecho para él). No envían nada a Hotelier Tools y no recibimos ningún dato de ellos. Cuando Tampermonkey busca actualizaciones, descarga los scripts de GitHub, que ve esa petición como cualquier otra descarga.

## El panel

El panel es un servicio aparte, con su propio inicio de sesión. En resumen:

- **Tu cuenta.** Tratamos los datos de tu cuenta, como tu dirección de email y cómo inicias sesión (por ejemplo, con una passkey).
- **Accesos conectados.** Conectas Little Hotelier en **Credenciales** y, si quieres, la extranet de Booking.com, un buzón de correo (Google, Microsoft o cualquier cuenta IMAP/SMTP) y WhatsApp a través de un servidor WAHA que aportas tú. Los accesos a Little Hotelier, Booking.com y al buzón se guardan cifrados (AES-256-GCM). Un hotel español que presenta la encuesta del INE también puede guardar su contraseña de IRIA, que se guarda cifrada y nunca se muestra en claro.
- **Datos del hotel.** Con tu acceso a Little Hotelier, el panel lee las reservas, los huéspedes, los precios, la disponibilidad, las facturas y los datos del alojamiento que necesitan las funciones que usas, y hace los cambios que le pides. Solo puede hacer lo que ese acceso puede hacer. Los canales conectados traen los mensajes de los huéspedes. En la página pública de la lista de espera, los huéspedes dejan sus datos de contacto; se eliminan de las entradas cerradas a los 90 días.
- **Funciones de IA.** Cuando el asistente de IA o la bandeja de huéspedes leen mensajes o datos de reservas, un proveedor de IA los procesa. Si conectas Claude, ChatGPT u otro asistente a través de la API o del servidor MCP, los resultados que recibe (como nombres de huéspedes, fechas e importes) entran en esa conversación y los trata ese proveedor según las condiciones de tu plan.
- **Accesos que puedes revocar.** Las claves API y las conexiones de asistentes aparecen en **API y MCP > Claves API**, donde puedes revocar cualquiera al momento. Los inicios de sesión de los asistentes caducan a los 30 días.

**Quién responde de los datos del hotel.** Para los datos de reservas, huéspedes y mensajes que el panel trata para tu hotel, **tu hotel es el responsable del tratamiento** y Hotelier Tools actúa como **encargado del tratamiento** por su cuenta, siguiendo sus instrucciones y el contrato de encargo del tratamiento. Los huéspedes que quieran ejercer sus derechos deben dirigirse al hotel, y nosotros ayudaremos al hotel a responder. Para los datos de las cuentas del panel, el responsable es Hotelier Tools.

**Cuánto tiempo.** Los datos del panel se guardan mientras tu cuenta esté activa y el tiempo necesario para prestar el servicio, o más solo cuando la ley lo exija. Puedes quitar una conexión en cualquier momento y pedirnos que borremos tu cuenta y sus datos.

## Quién recibe datos personales

No vendemos datos personales. Solo los compartimos con los proveedores que necesitamos para que Hotelier Tools funcione (como el alojamiento web y el correo), con los servicios que tú mismo conectas o cuando la ley nos obliga.

## Tus derechos

Puedes pedirnos:

- una copia de tus datos personales (acceso);
- que los corrijamos (rectificación);
- que los borremos (supresión);
- que limitemos su uso (limitación);
- que dejemos de usarlos, cuando nos basamos en el interés legítimo (oposición);
- que te los enviemos a ti o a otro proveedor en un formato utilizable (portabilidad).

Cuando nos basamos en tu consentimiento, puedes retirarlo en cualquier momento. Esto no afecta a lo que hicimos antes.

Escribe a [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com). Respondemos en el plazo de un mes. Puede que te pidamos confirmar tu identidad.

Si crees que no hemos tratado bien tus datos, puedes presentar una reclamación ante la [Agencia Española de Protección de Datos (AEPD)](https://www.aepd.es) o ante la autoridad del país de la UE donde vivas. Nos gustaría tener antes la oportunidad de arreglarlo, así que escríbenos.

## Seguridad

La web y el panel se sirven con conexiones cifradas (HTTPS), y los accesos guardados en el panel están cifrados. Ningún sistema es totalmente seguro, así que si sospechas de un problema, avísanos enseguida.

## Menores

Hotelier Tools está hecho para hoteles y para las personas que trabajan en ellos. No está dirigido a menores.

## Cambios en esta política

Cuando cambiamos esta política, actualizamos la fecha que aparece arriba. Si un cambio es importante, también lo avisaremos en la web o en el panel.
