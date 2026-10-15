---
title: "Über Hotelier Tools"
description: "Hotelier Tools ist ein Projekt von Juan Manuel Béc., Entwickler in Spanien: ein Dashboard und kostenlose Skripte mit öffentlichem Code für Little Hotelier."
updated: "2026-10-15"
---

Hotelier Tools ist ein unabhängiges Projekt von **Juan Manuel Béc.**, einem Softwareentwickler mit Sitz in Spanien. Es ergänzt Little Hotelier um das, was die Rezeption eines kleinen Hotels oft von Hand erledigen muss. Betrieben wird es von einer Einzelperson, nicht von einem Unternehmen.

## Was Hotelier Tools ist

- **Ein Dashboard** unter [dashboard.hotelier.tools](https://dashboard.hotelier.tools), das neben Little Hotelier läuft: Sammelrechnungen und Rechnungen beim Check-out, automatische Reservierungsprüfungen, dynamische Preisgestaltung, ein Gäste-Posteingang für WhatsApp, E-Mail und Booking.com, ein KI-Assistent, eine Warteliste für ausgebuchte Termine und die Belegungserhebung des spanischen INE. Es bietet außerdem eine REST-API und einen MCP-Server, damit Tools wie Claude oder ChatGPT mit den Daten Ihres Hotels arbeiten können. Siehe [alle Dashboard-Funktionen](/tools/bot) oder probieren Sie die [öffentliche Demo](https://demo.hotelier.tools) mit einem erfundenen Hotel aus.
- **Kostenlose Browser-Skripte** für Tampermonkey, die die eigenen Bildschirme von Little Hotelier verbessern: breitere Tabellen, kompakte Kalender, Provisionen und Preise dort, wo Sie sie brauchen, und weitere kleine Korrekturen. Siehe [alle Skripte](/tools/ui).
- **Anleitungen** zum Betrieb einer Unterkunft mit Little Hotelier, im [Blog](/blog).

## Zusammenspiel mit Little Hotelier

Ihre Reservierungen, Preise und Ihr Kalender bleiben in Little Hotelier. Die Skripte laufen in Ihrer eigenen Little-Hotelier-Sitzung und senden nichts an Hotelier Tools. Das Dashboard verbindet sich mit dem eigenen Little-Hotelier-Login Ihrer Unterkunft, der verschlüsselt (AES-256-GCM) gespeichert wird. Es kann also nur tun, was dieser Login kann, und jede Änderung, die es vornimmt, ist wie gewohnt in Little Hotelier sichtbar.

## Unabhängig von SiteMinder

Hotelier Tools ist **weder mit SiteMinder oder Little Hotelier verbunden noch von ihnen unterstützt**. Es ist keine offizielle Integration und kein Partnerprodukt. Little Hotelier und SiteMinder werden nur genannt, um zu beschreiben, womit Hotelier Tools zusammenarbeitet.

## Öffentlicher Quellcode

Die Skripte sind kostenlos, und ihr Quellcode ist auf GitHub öffentlich im [Repository TampermonkeyLittleHotelier](https://github.com/JuanmanDev/TampermonkeyLittleHotelier). Jeder kann vor der Installation lesen, was ein Skript tut, ein Problem melden oder eine Änderung vorschlagen. Auch der Quellcode dieser Website ist öffentlich, im [Repository hotelier-tools-web](https://github.com/JuanmanDev/hotelier-tools-web).

## Preise

Alle Dashboard-Funktionen sind für jedes Hotel bis zum 10. Januar 2027 kostenlos. Hotels, die 2026 beginnen, zahlen danach während des gesamten Jahres 2027 50 € pro Monat, mit allen enthaltenen Funktionen. Die Browser-Skripte bleiben kostenlos. Einzelheiten stehen in den [Nutzungsbedingungen](/terms).

## Kontakt

- **E-Mail:** [JuanmaDeveloper+hotelierTools@outlook.com](mailto:JuanmaDeveloper+hotelierTools@outlook.com)
- **Kontaktformular:** [Kontaktseite](/contact)
- **GitHub:** [github.com/JuanmanDev](https://github.com/JuanmanDev)

Fehlermeldungen und Ideen für neue Skripte sind auf GitHub oder per E-Mail willkommen. Wenn Hotelier Tools Ihnen Zeit spart, können Sie das Projekt über [GitHub Sponsors](https://github.com/sponsors/JuanmanDev), [Ko-fi](https://ko-fi.com/juanmandev) oder [PayPal](https://paypal.me/juanmandev) unterstützen.

Wie personenbezogene Daten behandelt werden, erläutert die [Datenschutzerklärung](/privacy).
